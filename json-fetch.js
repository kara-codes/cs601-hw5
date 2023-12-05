document.getElementById("import").addEventListener = ("click", makeRequest);

async function makeRequest() {
    const url = "https://kara-codes.github.io/cs601-hw5/college_degrees.json";
    //Perform the fetch 
    await fetch(url)
        //Check response status
        .then(response => {
            if (!response.ok) {
                throw new Error('An error occurred! Status: ${response.status}');
            }
            return response.json();
        })
        .then( data => {
            console.log('data: ', data);
             dataString = JSON.stringify({data});
             document.getElementById('content').innerHTML = dataString;
        })
        .catch(error => {
            console.error('Fetch error: ', error.message);
        });
}
