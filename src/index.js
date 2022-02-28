console.log('%c HI', 'color: firebrick')


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// const breeds = document.getElementById("dog-image-container")
// let breeds = document.getElementById('dog-image-container')
// console.log(breeds)


function addImgUrl(url) {
    let breeds = document.getElementById('dog-image-container')
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        data['message'].forEach(element => {
            let img = document.createElement('img')
            img.src = String(element)
            breeds.appendChild(img)

        });

    })

}


function addBreedUrl(url) {
    let list = document.getElementById('dog-breeds')

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        Object.keys(data['message']).forEach(element => {
            let li = document.createElement('li')
            li.textContent = element
            list.appendChild(li)
        })
    })


}

function changeListColor(listCollection) {
    for (item in listCollection) {
        document.addEventListener('click',(e) => {
            e.target.style.color = 'red'
        })
    }

}

function hideFromDom(nodeList, letter) {
    nodeList.forEach(function(node) {
        node.style.display = ''
        console.log(node.textContent[0])
        if (node.textContent[0] != letter) {
           node.style.display = 'none'
       }
   })
}

window.addEventListener('DOMContentLoaded', (e) => {
    let ul = document.getElementById('dog-breeds')
    let imgs = document.getElementById('dog-image-container')
    let dd = document.getElementById('breed-dropdown')


    addImgUrl(imgUrl)
    addBreedUrl(breedUrl)


    setTimeout(function() {
        changeListColor(ul.children)

        dd.onchange = function(e) {
            let value = dd.options[dd.selectedIndex].value
            if (value === 'a'){
                console.log('a')
                let li = document.querySelectorAll('#dog-breeds li')
                console.log(hideFromDom(li, value))
            }
            else if (value === 'b') {
                console.log('b')
                let li = document.querySelectorAll('#dog-breeds li')
                console.log(hideFromDom(li, value))
            }
            else if (value === 'c') {
                console.log('c')
                let li = document.querySelectorAll('#dog-breeds li')
                console.log(hideFromDom(li, value))
            }
            else if (value === 'd') {
                console.log('d')
                let li = document.querySelectorAll('#dog-breeds li')
                console.log(hideFromDom(li, value))
            }
        }
    },2000)


})


