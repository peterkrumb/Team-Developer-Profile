const fs = require("fs")
    //<--This constructor function and the consequent ones are for easily making objects with user input-->
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        //<--Indicating we don't have one yet-->
        this.templateURL = null;
    }

    getName() {
        return `${this.name}`;
    }

    getId() {
        return `${this.id}`;
    }

    getEmail() {
        return `${this.email}`;
    }

    getRole() {
        return `Employee`;
    }

    //<--Serializing makes data into a format suitable for transferring to other files-->
    serialize() {
            return {
                name: this.name,
                id: this.id,
                email: this.email,
                role: this.getRole()
            }
        }
        //<--This is a function used for every employee which inserts their answers into the template for their role-->
    getHtml() {
        let serializedData = this.serialize()
        try {
            let stringData = fs.readFileSync(this.templateURL, 'utf8')
                //
            for (let k in serializedData) {
                //<--Regex call for replacing data wrapped in curly braces in html. gi is for global which makes the function work on every instance in my directory, and i is to ignore upper or lower case on input-->
                let rgx = new RegExp(`\\{\\{\\s*${k}\\s*\\}\\}`, 'gi')
                stringData = stringData.replace(rgx, serializedData[k])
            }

            return stringData
        } catch (err) {
            console.log(error);
        }
    }
}
module.exports = Employee;