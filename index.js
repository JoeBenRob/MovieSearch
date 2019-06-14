
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
    .then(res => {
        
        console.log(res)

        const tableRow = document.createElement("tr");
        const tableData1 = document.createElement("td");
        const tableData2 = document.createElement("td");
        const tableData3 = document.createElement("td");

        const table = document.getElementById("table");

        tableData1.innerText = "test";
        tableData2.innerText = "test";
        tableData3.innerText = "test";

        tableRow.appendChild(tableData1);
        tableRow.appendChild(tableData2);
        tableRow.appendChild(tableData3);

        table.appendChild(tableRow);

    });



}

