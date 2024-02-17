const container = document.getElementById('container')
const endpoint = "http://localhost:4000/jawir"

fetch(endpoint)
    .then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error Status: ${res.status}`)
        }
        return res.json()
    })
    .then(data => {
        const listItems = data.map(item => `<li>${item.name}, Umur: ${item.age}</li>`)
        container.innerHTML = `<ul>${listItems.join('')}</ul>`
    })
    .catch(error => {
        container.innerHTML = `<p>Error: ${error.message}</p>`
    });
