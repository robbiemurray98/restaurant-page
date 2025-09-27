import peachTeaImgSrc from './images/peach-tea.jpg';
import coldBrewImgSrc from './images/cold-brew.jpg';
import coldWaterImgSrc from './images/cold-water.jpg';
import turkeyBaconImgSrc from './images/turkey-bacon.jpg';
import roastBeefImgSrc from './images/roast-beef.jpg';
import hamCheeseImgSrc from './images/ham-cheese.jpg';
import grilledCheeseImgSrc from './images/grilled-cheese.jpg';
import pbjImgSrc from './images/pb&j.jpg';
import macCheeseImgSrc from './images/mac-cheese.jpg';


export const menuPage = function(){
    const content = document.querySelector('#content');
    const heading = document.createElement('h1');
    heading.textContent = 'Menu';
    content.appendChild(heading);

    const myMenu = [];

    function addToMenu(item) {
        myMenu.push(item);
    }

    class Menu {
        constructor(item, desc, cost, image){
            this.item = item;
            this.desc = desc;
            this.cost = cost;
            this.image = image;
        }
    }


    const peachTeaItem = 'Peach Tea';
    const peachTeaDesc = 'A sweet and peachy tea to die for!'
    const peachTeaCost = '$3';
    const peach = new Menu(peachTeaItem, peachTeaDesc, peachTeaCost, peachTeaImgSrc);
    addToMenu(peach);


    const coldBrewItem = 'Cold Brew';
    const coldBrewDesc = 'The greatest coffee on the planet! Smooth and creamy, we recommend serving it black.'
    const coldBrewCost = '$5';
    const coldBrew = new Menu(coldBrewItem, coldBrewDesc, coldBrewCost, coldBrewImgSrc);
    addToMenu(coldBrew);

    
    const coldWaterItem = 'Cold Water';
    const coldWaterDesc = 'Refreshing and ice cold. Nothing better than a perfectly simple glass of water.';
    const coldWaterCost = 'free';
    const coldWater = new Menu(coldWaterItem, coldWaterDesc, coldWaterCost, coldWaterImgSrc)
    addToMenu(coldWater);

    
    const turkeyBaconItem = 'Turkey Bacon Sandwich';
    const turkeyBaconDesc = 'A humble, elegant sandwich with thick cut bacon, mayo and tomato on a your choice of bread. ';
    const turkeyBaconCost = '$12';
    const turkeyBacon = new Menu(turkeyBaconItem, turkeyBaconDesc, turkeyBaconCost, turkeyBaconImgSrc);
    addToMenu(turkeyBacon);


    const roastBeefItem = 'Roast Beef Sandwich';
    const roastBeefDesc = 'Incredibly manly sandwich. Nothing else to say.';
    const roastBeefCost = '$15';
    const roastBeef = new Menu(roastBeefItem, roastBeefDesc, roastBeefCost, roastBeefImgSrc);
    addToMenu(roastBeef);

    const hamCheeseItem = 'Ham and Cheese Sandwich';
    const hamCheeseDesc = 'A classic combination. Toasted and ready to fix what you\'re craving';
    const hamCheeseCost = '$13'
    const hamCheese = new Menu(hamCheeseItem, hamCheeseDesc, hamCheeseCost, hamCheeseImgSrc);
    addToMenu(hamCheese);

    const grilledCheeseItem = 'Grilled Cheese Sandwich';
    const grilledCheeseDesc = 'Your choice of cheese and bread. Add a peach! Trust us it\'s worth the adventure.';
    const grilledCheeseCost = '$9'
    const grilledCheese = new Menu(grilledCheeseItem, grilledCheeseDesc, grilledCheeseCost, grilledCheeseImgSrc);
    addToMenu(grilledCheese);

    const pbjItem = 'PB&J';
    const pbjDesc = 'Creamy peanut butter with house made strawberry jelly in betweeen two giant slices of toast.';
    const pbjCost = '$10';
    const pbj = new Menu(pbjItem, pbjDesc, pbjCost, pbjImgSrc);
    addToMenu(pbj);

    const macCheeseItem = 'Mac and Cheese';
    const macCheeseDesc = 'Creamy four cheese mac and cheese to die for! Covered in bread crumbs.';
    const macCheeseCost = '$11';
    const macCheese = new Menu(macCheeseItem, macCheeseDesc, macCheeseCost, macCheeseImgSrc)
    addToMenu(macCheese);


    for (let i = 0; i < myMenu.length; i++){
        const container = document.createElement('div');
        container.classList.add('menu-div')

        const heading = document.createElement('h2');
        heading.textContent = myMenu[i].item;

        const desc = document.createElement('p');
        desc.textContent = myMenu[i].desc;

        const cost = document.createElement('p');
        cost.textContent = myMenu[i].cost;

        const img = document.createElement('img');
        img.src = myMenu[i].image;

        container.appendChild(heading);
        container.appendChild(desc);
        container.appendChild(cost);
        container.appendChild(img);

        content.appendChild(container);
    }
    




}



