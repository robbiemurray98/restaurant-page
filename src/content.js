// import restaurantImage from './images/restaurant.jpg';


export const homePage = function(){
    // const heroImage = document.createElement('img');
    // heroImage.src = restaurantImage;
    const heading = document.createElement('h1');

    heading.textContent = 'Bob\'s Bistro';
    const descPara = document.createElement('p');
    descPara.textContent = 'Bob\'s Bistro is a five star Michelin Restaurant in Akron Ohio. We serve a wide range of mouth watering dishes at everyday prices. Downtown Akron we\'ve made our Home! Making use of the beautiful scenery, you\'ll enjoy eating your meals in paradise.';
    const descParaContainer = document.createElement('div');
    descParaContainer.id = 'desc-para-container'

    const content = document.querySelector('#content');

    // content.appendChild(heroImage);
    content.appendChild(heading);
    descParaContainer.appendChild(descPara);
    content.appendChild(descParaContainer);

    const hoursContainer = document.createElement('div');
    hoursContainer.id = 'hours-container';
    const hoursHeader = document.createElement('h2');
    hoursHeader.textContent = 'Hours';
    const hoursList = document.createElement('ul');
    const sunday = document.createElement('li');
    sunday.textContent = 'Sunday: 8am - 9pm';
    const monday = document.createElement('li');
    monday.textContent = 'Monday: 6am - 8pm';
    const tuesday = document.createElement('li');
    tuesday.textContent = 'Tuesday: 6am - 8pm';
    const wednesday = document.createElement('li');
    wednesday.textContent = 'Wednesday: 6am - 8pm';
    const thursday = document.createElement('li');
    thursday.textContent = 'Thursday: 6am - 8pm';
    const friday = document.createElement('li');
    friday.textContent = 'Friday: 6am - 10pm';
    const saturday = document.createElement('li');
    saturday.textContent = 'Saturday: 8am - 10pm';

    hoursList.append(sunday, monday, tuesday, wednesday, thursday, friday, saturday);
    hoursContainer.appendChild(hoursHeader);
    hoursContainer.appendChild(hoursList);
    content.appendChild(hoursContainer);

    const locationContainer = document.createElement('div');
    const locationHeading = document.createElement('h2');
    locationHeading.textContent = 'Location';
    const locationPara = document.createElement('p');
    locationPara.textContent = '111 Main Street, Akron, Ohio';

    locationContainer.appendChild(locationHeading);
    locationContainer.appendChild(locationPara);
    content.appendChild(locationContainer)





}

