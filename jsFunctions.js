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