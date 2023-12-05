document.getElementById("import").addEventListener = ("click", makeRequest);

async function makeRequest() {
    //const url = "https://api.jsonbin.io/v3/qs/656e7e9854105e766fd9ae9f";
    const url = "../assets/college_degrees.json";
    //Perform the fetch 
    await fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('An error occurred! Status: ${response.status}');
            }
            return response.json();
        })
        .then( data => {
            console.log('data: ', data);
             dataString = JSON.stringify(data);
             document.getElementById('content').innerHTML = dataString;
        })
        .catch(error => {
            console.error('Fetch error: ', error.message);
        });
}

// function buildDegreeList(college_degrees) {
//     const degreeList = college_degrees.map(degree => {
//         return `<div class="item">
//            <dt>
//                ${degree.school}
//            </dt>
//            <dd>
//                 ${degree.program/major}
//            </dd>
//           <dd>
//                 ${degree.type}
//           </dd>
//           <dd>
//                 ${degree.year}
//           </dd>
//           </div>
//           `
//     })
// }