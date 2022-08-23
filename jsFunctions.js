import members from './members.js'

// 1. Get array of first names of everyone
const firstNames = []
members.forEach(item => {
	firstNames.push(item.name.split(' ')[0])
})
console.log(firstNames)
/*
Output -
[
  'Rakesh', 'Yash', 'Firoz', 'Amrit', 'Chandraprakash', 'Swpril', 'Yogesh'
]
 */

// 2. Make everyone's last names in UPPERCASE in given array of objects
members.forEach(item => {
	let lastName = item.name.split(' ')[1]
	item.name = item.name.replace(lastName, lastName.toUpperCase())
})
console.log(members)
/*
Output -
[
  { name: 'Rakesh GUPTA', age: 20 },
  { name: 'Yash JANGID', age: 40 },
  { name: 'Firoz KHAN', age: 41 },
  { name: 'Amrit SRIVASTAVA', age: 17 },
  { name: 'Chandraprakash SHARMA' },
  { name: 'Swpril AHUJA', age: 45 },
  { name: 'Yogesh KHATRI', age: 51 }
]
 */

// 3. Get entries where age is between 41-60
const oldAgeMembers = members.filter(item => item.age > 41 && item.age < 60)
console.log(oldAgeMembers)
/*
Output -
[
  { name: 'Swpril AHUJA', age: 45 },
  { name: 'Yogesh KHATRI', age: 51 }
]
 */


// 4. Get average age
let totalAge = 0
let totalMembers = 0 // because one member does not have age. If this were not the case, total members = members.length
members.forEach(item => {
	if(item.age) {
		totalMembers++
		totalAge += item.age
	}
})
console.log(`Average Age :- ${totalAge / totalMembers}`)
/*
Output -
Average Age :- 35.666666666666664
 */


// 5. Get Person with maximum age
let personWithMaxAge
let age = 0
members.forEach(item => {
	if(age < item.age) {
		age = item.age
		personWithMaxAge = item
	}
})
console.log(personWithMaxAge)
/*
Output -
{ name: 'Yogesh KHATRI', age: 51 }
 */