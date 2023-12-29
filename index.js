// Code your solution here
// This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers
function findMatching(drivers, query) {
    const matchingDrivers = drivers.filter(driver =>
      driver.toLowerCase().includes(query.toLowerCase())
    );
  
    return matchingDrivers;
  }
  
  // Example usage:
  const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
  const matchedDrivers = findMatching(drivers, 'bobby');
  
  console.log(matchedDrivers);
// This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
  function fuzzyMatch(drivers, query) {
    const matchingDrivers = drivers.filter(driver =>
      driver.toLowerCase().startsWith(query.toLowerCase())
    );
  
    return matchingDrivers;
  }
  const similarDrivers = fuzzyMatch(drivers, 'sa');
  console.log(similarDrivers)

//   matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown.
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  const driversList = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh',
    },
    {
      name: 'Sammy',
      hometown: 'New York',
    },
    {
      name: 'Sally',
      hometown: 'Cleveland',
    },
    {
      name: 'Annette',
      hometown: 'Los Angeles',
    },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay',
    },
  ];
  
  const result = matchName(drivers, 'Bobby');
  console.log(result);
  
  
 
  

  