function AddressBook() {
    this.contacts = {};
    this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
    contact.id = this.assignID();
    this.contacts[contact.id] = contact;
    
};

AddressBook.prototype.assignID = function () {
    this.currentId +=1;
    return this.currentId
};

function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
};

AddressBook.prototype.findContact = function(id) {
    if (this.contacts[id]  !== undefined)  {
        return this.contacts[id];
    }
    return false;
};

AddressBook.prototype.deleteContact = function(id){
    if(this.contacts[id] === undefined){
        return false;
    }

    delete this.contacts[id];
    return true;
}
