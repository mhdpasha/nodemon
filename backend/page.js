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
                <pre><b>Cara mengakses API</b></pre>
                <li><a href="/jawir">/jawir</a></li>
                <pre>Fetch semua jawir</pre>

                <li><a href="/jawir/3">/jawir/3</a></li>
                <pre>Fetch jawir by specific id</pre>

                <li><a href="/jawir?limit=4">/jawir?limit=4</a></li>
                <pre>Fetch jawir limit by 4 entities</pre>

                <li><a href="/jawir?from=5">/jawir?from=5</a></li>
                <pre>Fetch jawir from id 5 ke atas</pre>

                <br>

                <pre><b>Mixed API call</b></pre>
                
                <li><a href="/jawir?limit=5&from=1">/jawir?limit=5&from=1</a></li>
                <pre>Fetch 5 jawir from id 1</pre>

            </ul>
        </body>
    </html>
    `
}

exports.getIndexPage = getIndexPage