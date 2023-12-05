document.getElementById("import").addEventListener = ("click", makeRequest);

async function makeRequest() {
    const url = "https://api.github.com/repos/kara-codes/cs601-hw5/branches/main";
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
             dataString = JSON.stringify({table:"college_degrees"});
             document.getElementById('content').innerHTML = dataString;
        })
        .catch(error => {
            console.error('Fetch error: ', error.message);
        });
}

