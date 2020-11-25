import users from "./users.js"

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
	let userGender = users.filter(user => user.gender === gender).map(user => user.name)
	return userGender
}

console.log(getUsersWithGender(users, "male")) // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//==========================4===============================

const getInactiveUsers = users => {
	return users.filter(user => user.isActive === false)
}

console.log(getInactiveUsers(users)) // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//==========================5===============================

const getUserWithEmail = (users, email) => {
	return users.filter(user => user.email === email)
}

console.log(getUserWithEmail(users, "shereeanthony@kog.com")) // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")) // {объект пользователя Elma Head}

//==========================6===============================

const getUsersWithAge = (users, min, max) => {
	return users.filter(user => user.age < max && user.age > min)
}

console.log(getUsersWithAge(users, 20, 30)) // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40))
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//==========================7===============================

const calculateTotalBalance = users => {
	return users.map(user => user.balance).reduce((total, num) => total + num)
}
console.log(calculateTotalBalance(users)) // 20916

//==========================8===============================

const getUsersWithFriend = (users, friendName) => {
	return users.filter(user => user.friends.includes(friendName)).map(user => user.name)
}

console.log(getUsersWithFriend(users, "Briana Decker")) // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")) // [ 'Elma Head', 'Sheree Anthony' ]

//==========================9===============================

const getNamesSortedByFriendsCount = users => {
	return users.sort((user_1, user_2) => user_1.friends.length - user_2.friends.length).map(user => user.name)
}

console.log(getNamesSortedByFriendsCount(users))
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//==========================10===============================

const getSortedUniqueSkills = users => {
	const newUesrs = users
		.reduce((acc, user) => [...acc, ...user.skills], [])
		.sort()
		.filter((skill, index, array) => {
			return skill !== array[index - 1]
		})
	return newUesrs
}
console.log(getSortedUniqueSkills(users))
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
