let button  = document.querySelector('#button');
let name    = document.querySelector('#name');
let height  = document.querySelector('#height');
let mass    = document.querySelector('#mass');


function getInfo() {
    updateWithLoading();
    let randomNumber = Math.floor((Math.random() * 88) + 1);
    let apiUrl = 'https://swapi.co/api/people/' + randomNumber;


    axios.get(apiUrl).then(response => {
        updateInfo(response.data)
    }).catch(e => {
        updateWithError()
    })
}

function updateInfo(data) {
    name.innerText      = data.name;
    height.innerText    = `Height ${data.height}`;
    mass.innerText      = `Mass ${data.mass}`;
}

function updateWithError() {
    name.innerText      = 'Ai nimerit-o';
    height.innerText    ='';
    mass.innerText      ='';
}

function updateWithLoading() {
    name.innerHTML      = '<i class="fa fa-circle-o-notch fa-spin" style="font-size:24px"></i>';
    height.innerText    ='';
    mass.innerText      ='';
}

button.addEventListener('click', getInfo);

