
//const api = http://www.omdbapi.com/?apikey=6ba38886

const makeRequest = (method, url, body) => {
    return new Promise(
        function (res, rej) {
            const req = new XMLHttpRequest();
            req.onload = () => {
                if (req.status === 200) {
                    res(req.response);
                } else {
                    const reason = new Error('Error');
                    rej(reason);
                }
            }
            req.open(method, url)
            req.send(body);
        }
    )
}

function read() {
    let name = document.getElementById("name").value;
    makeRequest("GET", `http://www.omdbapi.com/?apikey=6ba38886&t=${name}`)
    .then(res => {console.log(res)});

}

