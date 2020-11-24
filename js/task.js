import users from "./users.js"

//console.log(users)

//==========================1===============================

const getUserNames = users => {
	return users.map(user => user.name)
}

console.log(getUserNames(users))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//==========================2===============================

const getUsersWithEyeColor = (users, color) => {
	return users.filter(user => user.eyeColor === color)
}

console.log(getUsersWithEyeColor(users, "blue")) // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//==========================3===============================

const getUsersWithGender = (users, gender) => {
	return users.map(user => user.name    user.gender === gender)

	//return user.name
}

console.log(getUsersWithGender(users, "male")) // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
