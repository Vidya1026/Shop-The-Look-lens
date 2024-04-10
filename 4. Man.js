// There are 100 man making a circle each man is wearing a T-shit with a number 1 to 100
in series. Person with Number 1 on his/her T-Shirt got a gun now 1 kill 2 and give that
gun to 3 and then 3 kill 4 and give that gun to 5.. then so on 99 killed 100 and give that
gun again to 1 WAP to find which man is left with a gun on his hand at the end ??


function findSurvivor(numberOfPeople) {
  // Handle invalid input (less than 2 people)
  if (numberOfPeople < 2) {
    return "Invalid input: Need at least 2 people";
  }

 
  let hasGun = new Array(numberOfPeople).fill(false);
  hasGun[0] = true; // Person 1 starts with the gun

  
  let currentPerson = 0;
  while (numberOfPeople > 1) {

    const personToKill = (currentPerson + 2) % numberOfPeople;
    hasGun[personToKill] = true;
    numberOfPeople--;
    currentPerson = personToKill; // Update current person to the one who killed
  }


  return hasGun.indexOf(true) + 1;
}

// Example usage
const numberOfPeople = 100;
const survivor = findSurvivor(numberOfPeople);
console.log(`The man left with the gun is number: ${survivor}`);
