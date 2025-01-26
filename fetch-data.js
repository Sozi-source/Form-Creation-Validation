async function fetchUserData () {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'
    const dataContainer = document.getElementById ('api-data')

    try {
        const response = await fetch(apiUrl)
        const users = await response.json()
        dataContainer.innerHTML = 'Loading user data…'
        const userList = document.createElement ('ul');

        users.forEach(user => {
        const listitem = document.createElement ('li')
        listitem.textContent = user.name

        userList.appendChild (listitem)
                       
        });

        dataContainer.appendChild(userList)
    } catch (error) {
        dataContainer.textContent = 'Failed to load user data'
        
    }
}

    document.addEventListener('DOMContentLoaded', () => {
        fetchUserData()
    }) 