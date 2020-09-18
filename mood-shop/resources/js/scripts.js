import data from './data.js'

const itemsContainer = document.getElementById('items')

data.forEach(function (item,i)  {

    let newDiv = document.createElement('div');
    newDiv.className = 'item'

    let img = document.createElement('img');
    img.src = item.image
    img.width = 300
    img.height = 300

    // Add the image to the div
    newDiv.appendChild(img)

    let desc = document.createElement('p')
    desc.innerText = item.desc
    newDiv.appendChild(desc)

    let price = document.createElement('p')
    price.innerText = item.price
    newDiv.appendChild(price)

    // creates buy button with a custom attribute data-price
    let button = document.createElement('button')
    button.id = item.name
    button.dataset.pice = item.price
    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)

    itemsContainer.appendChild(newDiv) //puts newly created div inside the items container

});