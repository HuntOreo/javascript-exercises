const findTheOldest = function (people) {
  people.sort((a, b) => {
    let aAge = a.yearOfBirth - a.yearOfDeath;
    let bAge = b.yearOfBirth - b.yearOfDeath;
    const currentYear = new Date(Date.now()).getFullYear();

    if (a.yearOfDeath === undefined) {
      aAge = a.yearOfBirth - currentYear;
    }

    if (b.yearOfDeath === undefined) {
      bAge = b.yearOfBirth - currentYear;
    }


    return aAge - bAge;
  })

  return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
