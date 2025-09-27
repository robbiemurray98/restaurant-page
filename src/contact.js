

export const contactPage = function() {
    const content = document.querySelector('#content');

    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';
    content.appendChild(heading);


    const myContacts = [];

    function addToContacts(contact){
        myContacts.push(contact);
    }

    class Contact {
        constructor(title, number, email){
            this.title = title;
            this.number = number;
            this.email = email;
        }
    }

    const businessTitle = 'Restaurant';
    const businessNumber = '555-555-5555';
    const businessEmail = 'contact@fake.com';
    const business = new Contact(businessTitle, businessNumber, businessEmail)
    addToContacts(business);


    const managerTitle = 'Manager';
    const managerNumber = '555-555-5555';
    const managerEmail = 'manager@fake.com';
    const manager = new Contact(managerTitle, managerNumber, managerEmail);
    addToContacts(manager);


    const ownerTitle = 'Owner';
    const ownerNumber = '555-555-5555';
    const ownerEmail = 'owner@fake.com';
    const owner = new Contact(ownerTitle, ownerNumber, ownerEmail);
    addToContacts(owner);

    for (let i = 0; i < myContacts.length; i++){
        const container = document.createElement('div');

        const heading = document.createElement('h2');
        heading.textContent = myContacts[i].title;

        const numPara = document.createElement('p');
        numPara.textContent = myContacts[i].number;

        const emailPara = document.createElement('p');
        emailPara.textContent = myContacts[i].email;

        container.append(heading, numPara, emailPara);

        content.appendChild(container);

    }

}