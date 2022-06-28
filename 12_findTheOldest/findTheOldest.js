function countAge(person) {
  let age = 0;
  if ('yearOfDeath' in person) {
    age = person.yearOfDeath - person.yearOfBirth;
  } else {
    age = new Date().getFullYear() - person.yearOfBirth;
  }
  return age;
}

const findTheOldest = function(people) {
  let initOldest = 
  {
    yearOfBirth: 1000, 
    yearOfDeath: 1000,
  };

  return people.reduce((oldest, person) => {
    return countAge(person) > countAge(oldest) ? person : oldest; 
  }, initOldest)
}

// Do not edit below this line
module.exports = findTheOldest;
