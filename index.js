document.querySelector('#review').addEventListener('submit', (e) => {console.log()
    e.preventDefault()
        bookReview(e.target.work.value)
})

function bookReview(work){
    let p = document.createElement('p')
    p.textContent = work
    document.querySelector("#append-reviews").appendChild(p)
}

document.addEventListener('click',(event) =>{console.log(event.target)})

const photo = document.getElementById('photoResult')
const btn = document.getElementById('button')

btn.addEventListener('click', getPhoto)

function getPhoto(){
    fetch('https://thatcopy.pw/catapi/rest/')
.then(response => response.json())
.then(data => {console.log(data)
        photo.innerHTML = `<img src="${data.url}"/>`
    })
}

let bttn = document.querySelector("#test")
    bttn.addEventListener('mouseover',(event)=>{console.log(event.target)
    })

let z = document.querySelector("#button")
    z.addEventListener('mouseover', (event)=>{console.log(event.target)
    })


function changeBackground(){
    document.querySelector("#test").style.backgroundColor = "green";
    //to onmouse review
}

function backToNormal() {
    document.querySelector("#test").style.backgroundColor ="";
}   //to offmouse review

function changeBackgroundB(){
    document.querySelector("#button").style.backgroundColor = "blue";
}   //to onmouse rabbit photo

function backToNormalB(){
    document.querySelector("#button").style.backgroundColor = "";
}   //to offmouse rabbit photo