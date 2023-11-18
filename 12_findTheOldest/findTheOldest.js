const findTheOldest = function(people) {
    let oldestAge=0, oldestPerson= "", age=0;
    const date = new Date();
    for(let person of people){
        if("yearOfDeath" in person) age = person.yearOfDeath - person.yearOfBirth;
        else age = date.getFullYear() - person.yearOfBirth;
        if (age>oldestAge) {
            oldestAge = age;
            oldestPerson = person;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
