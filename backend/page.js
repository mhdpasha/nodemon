const getIndexPage = () => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="icon" href="https://emojigraph.org/media/facebook/fire_1f525.png">
            <title>Index API</title>
        </head>
        <body>
            <h1>Jawir API Documentation</h1>
            <ul>
                <li><a href="/jawir">/jawir</a></li>
                <pre>Fetch semua jawir</pre>

                <li><a href="/jawir?limit=2">/jawir?limit=2</a></li>
                <pre>Fetch jawir mode hemat</pre>

                <li><a href="/jawir/3">/jawir/3</a></li>
                <pre>Fetch jawir by id</pre>
            </ul>
        </body>
    </html>
    `
}

exports.getIndexPage = getIndexPage