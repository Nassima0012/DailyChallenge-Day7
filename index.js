async function fetchUserData() {
  try {
    const response = await fetch('https://dummyjson.com/users');
    const userData = await response.json();
    processUserData(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
}

function processUserData(users) {
  const maleUsers = users.filter(({ gender }) => gender.toLowerCase() === 'male');

  const userStrings = maleUsers.map(({ name, age }) => `Name: ${name}, Age: ${age}`);

  console.log('Processed Users:');
  userStrings.forEach(userString => console.log(`- ${userString}`));

  const totalAge = maleUsers.reduce((sum, { age }) => sum + age, 0);

  console.log('Total Age of Male Users:', totalAge);
}

// Call the fetchUserData function to start the process
fetchUserData();
