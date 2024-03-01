const container = document.getElementById('container')
const endpoint = `http://127.0.0.1:4000/jawir`

fetch(endpoint)
    .then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error Status: ${res.status}`)
        }
        return res.json()
    })
    .then(data => {
        console.log(data)
        const tableRows = data.map(item => {
            return `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                </tr>
            `
        }).join('')
        
        const table = `
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama</th>
                        <th>Umur</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
            </table>
        `
        
        container.innerHTML = table
    })
    .catch(error => {
        container.innerHTML = `<p>Error: ${error.message}</p>`
    })
