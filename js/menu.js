const apiUrl = 'https://menu-plij.onrender.com';
const menuItemsContainer = document.getElementById('menu-items');

fetch('https://menu-plij.onrender.com')
  .then(response => response.json())
  .then(menuItems => {
    for(let i=0;i<menuItems.coffee.length;i++){
     
      const card = `
          <h1 class="mb-5">${menuItems.coffee[i].name}</h1>
          <div class="row align-items-center mb-5">
            <div class="col-4 col-sm-3">
              <img class="w-100 rounded-circle mb-3 mb-sm-0" src=${menuItems.coffee[i].img}  alt="">
              <h5 class="menu-price">${menuItems.coffee[i].price}${menuItems.coffee[i].currency}</h5>
            </div>
            <div class="col-8 col-sm-9">
              <h5>${menuItems.coffee[i].description}</h5>
              <p class="m-0">(contain coffee)</p>
            </div>
          </div>

      `;
      var d=document.createElement('div')
      d.className='col col-md-6'
      d.innerHTML=card
      menuItemsContainer.appendChild(d)
    }

    for(let i=0;i<menuItems.noncoffee.length;i++){
     
      const card = `
          <h1 class="mb-5">${menuItems.noncoffee[i].name}</h1>
          <div class="row align-items-center mb-5">
            <div class="col-4 col-sm-3">
              <img class="w-100 rounded-circle mb-3 mb-sm-0" src=${menuItems.noncoffee[i].img}  alt="">
              <h5 class="menu-price">${menuItems.noncoffee[i].price}${menuItems.noncoffee[i].currency}</h5>
            </div>
            <div class="col-8 col-sm-9">
              <h5>${menuItems.noncoffee[i].description}</h5>
              <p class="m-0">(Does not contain coffee)</p>
            </div>
          </div>

      `;
      var d=document.createElement('div')
      d.className='col col-md-6'
      d.innerHTML=card
      menuItemsContainer.appendChild(d)
    }
  })
  .catch(error => console.error(error));
