document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('input-username').value;
    const email = document.getElementById('input-email').value;
    const isAdmin = document.getElementById('input-admin').checked;
    const imageFile = document.getElementById('input-image').files[0];

    const userTable = document.getElementById('user-table').getElementsByTagName('tbody')[0];

    let userExists = false;
    const rows = userTable.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].cells[0].textContent === username) {
            rows[i].cells[1].textContent = email;
            rows[i].cells[2].textContent = isAdmin ? 'X' : '-';
            if (imageFile) {
                const imgElement = document.createElement('img');
                imgElement.src = URL.createObjectURL(imageFile);
                rows[i].cells[3].innerHTML = '';
                rows[i].cells[3].appendChild(imgElement);
            }
            userExists = true;
            break;
        }
    }

    if (!userExists) {
        const newRow = userTable.insertRow();
        newRow.insertCell(0).textContent = username;
        newRow.insertCell(1).textContent = email;
        newRow.insertCell(2).textContent = isAdmin ? 'X' : '-';
        const imgCell = newRow.insertCell(3);
        if (imageFile) {
            const imgElement = document.createElement('img');
            imgElement.src = URL.createObjectURL(imageFile);
            imgCell.appendChild(imgElement);
        }
    }

    document.getElementById('user-form').reset();
});

document.getElementById('empty-table').addEventListener('click', function() {
    const userTable = document.getElementById('user-table').getElementsByTagName('tbody')[0];
    userTable.innerHTML = '';
});
