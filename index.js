
function generateRandomProfile() {
    const firstNames = ['John', 'Jane', 'Sam', 'Sue', 'Bob', 'Alice'];
    const lastNames = ['Doe', 'Smith', 'Johnson', 'Brown', 'Taylor', 'Miller'];
    const countries = ['USA', 'Canada', 'UK', 'Australia', 'Germany', 'France'];
    const genders = ['Male', 'Female'];
    const hairstyles = ['Short', 'Medium', 'Long', 'Bald'];

    const first_name = firstNames[Math.floor(Math.random() * firstNames.length)];
    const last_name = lastNames[Math.floor(Math.random() * lastNames.length)];
    const gender = genders[Math.floor(Math.random() * genders.length)];
    const age = Math.floor(Math.random() * (100 - 18 + 1)) + 18;
    const height = Math.floor(Math.random() * (200 - 150 + 1)) + 150;
    const weight = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
    const hairstyle = hairstyles[Math.floor(Math.random() * hairstyles.length)];

    return { first_name, last_name, countries, gender, age, height, weight, hairstyle };
}

export default generateRandomProfile;


/**
 * Generates a random profile with a name, age, and other attributes.
 * @returns {{first_name: string, last_name: string, countries: string[], gender: string, age: number, height: number, weight: number, hairstyle: string}} A profile object.
 */