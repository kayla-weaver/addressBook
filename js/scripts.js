class AddressBook {
    constructor() { //called whenever we use new, let myAddressBook = new AddressBook();
        this.contacts = {};
        this.currentId = 0;
    }
    addContact(contact) {
        //contact.id = this.assignID();
        this.contacts[contact.firstName] = contact;
        // what's Jerry's #? -> contacts["Jerry"] -> Jerry's full contact info
  
    }
    assignID() {
        this.currentId += 1;
        return this.currentId;
    }
    findContact(id) {
        if (this.contacts[id] !== undefined) {
            return this.contacts[id];
        }
        return false;
    }
    deleteContact(id) {
        if (this.contacts[id] === undefined) {
            return false;
        }

        delete this.contacts[id];
        return true;
    }
}

/*
Then, add functionality that allows a user to record multiple addresses (email or physical) 
for a single Contact, and what type each address is (ie: "work", "personal", etc.) 

type -> (home/work/school/"1-10")
value -> (202 E 45th Street)

(Hint: Address will need to be an object with multiple properties saved within 
the Contact object.)

{
  home: address,
  work: address,
}

type -> ("work") -> 
aaronContact = new Contact("Aaron","Rogers","2107813439", "aaron@gmail.com", Address); 

console.log(aaronContact);
{
  firstName: "Aaron",
  lastName: "Rogers",
  phoneNumber: "2107813439",
  email: "aaron@gmail.com",

  addresses: 
  {
    {
      type: "work",
      address: "123 First Street"
    },
  
    {
      type: "home",
      address:"202 E 45th Street"
    },
  ...
}

Address {
      type: "work",
      address: "123 First Street"
    },


*/

class Address {
  constructor(addressType, address) {
    this.addressType = addressType;
    this.address = address;
  }
}


class Contact {
    constructor(firstName, lastName, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.physicalAddresses = {};        
    }

    /*
    physicalAddresses
    {
      
        {
          addressType: home,
          address: 

        }


    }
    input:  { type: "home", address:  "123 place"}
    output: { "home": { type: "home", address:  "123 place"}}

    */
    
    addPhysicalAddress(address) { // { type: "home", address:  "123 place"}
      this.physicalAddresses[address.addressType] = address;
    }
    
    fullName() {
        return this.firstName + " " + this.lastName;
    }
    getEmail(){
      return this.email;
    }
    getphysicalAddress(){
        return this.physicalAddress;
    }
    getPhoneNumber(){
      return this.phoneNumber;
    }
}

let addressBook = new AddressBook();
  
  function listContacts(addressBookToDisplay) {
    let contactsList = document.querySelector("ul#contacts"); //#contacts
    Object.keys(addressBookToDisplay.contacts).forEach(function(key) {
      const contact = addressBookToDisplay.findContact(key);
      const li = document.createElement("li");
      li.append(contact.fullName() + ' ' + contact.getEmail()+ ' ' + contact.getphysicalAddress()+ ' ' + contact.getPhoneNumber());
      li.setAttribute("id", contact.id);
      contactsList.append(li);
    });
  }

function handleFormSubmission(event) {
  event.preventDefault();
  //required for the contact constructor
  const inputtedFirstName = document.querySelector("input#new-first-name").value;
  const inputtedLastName = document.querySelector("input#new-last-name").value;
  const inputtedPhoneNumber = document.querySelector("input#new-phone-number").value;
  const inputtedEmail = document.querySelector("input#email").value;
  

  //added through the Contact.addPhysicalAddress()
  const inputtedPhysicalAddressType = document.querySelector('input#physicalAddressType').value;
  const inputtedPhysicalAddress= document.querySelector("input#physicalAddress").value;
  
  let newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmail, inputtedPhysicalAddress);
  addressBook.addContact(newContact);
  listContacts(addressBook);
}

window.addEventListener("load", function (){
  document.querySelector("form#new-contact").addEventListener("submit", handleFormSubmission);
});
