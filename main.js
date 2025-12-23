access_token = "SERVER_ACCESS_TOKEN";

function today() {
    return new Date().toISOString().slice(0, 10).replace("-", "");
}

function getQuery() {
    return document.getElementById("request").value;
}

function get() {
    setLoading();
    fetch("https://api.wit.ai/message?v=" + today() + "&q=" + getQuery(), {
        headers: {
            Authorization: "Bearer " + access_token
        }
    }).then(response => response.json())
        .then(data => {
            setResponse(stringify(data));
            console.log(data);
        })
        .catch(error => {
            setResponse(stringify(error));
            return console.error(error);
        })
}

function stringify(data) {
    return JSON.stringify(data, undefined, 2)
}

function setLoading() {
    setResponse("Loading ...");
}

function setResponse(response) {
    document.getElementById("response").innerText = response;
}