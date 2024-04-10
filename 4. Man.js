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
