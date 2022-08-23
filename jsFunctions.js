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
	if (item.age) {
		totalMembers++
		totalAge += item.age
	}
})
console.log(`Average Age :- ${ totalAge / totalMembers }`)
/*
Output -
Average Age :- 35.666666666666664
 */


// 5. Get Person with maximum age
let personWithMaxAge
let age = 0
members.forEach(item => {
	if (age < item.age) {
		age = item.age
		personWithMaxAge = item
	}
})
console.log(personWithMaxAge)
/*
Output -
{ name: 'Yogesh KHATRI', age: 51 }
 */

/*
6. Divide persons in three groups, result should look like
    {
      'young': [],
      'old': [],
      'noage': []
    }
 */
const young = []
const old = []
const noage = []

members.forEach(item => {
	if (item.age < 35) young.push(item)
	if (item.age > 35) old.push(item)
	if (!item.age) noage.push(item)
})
const groups = { young, old, noage }
console.log(groups)
/*
Output -
{
  young: [
    { name: 'Rakesh GUPTA', age: 20 },
    { name: 'Amrit SRIVASTAVA', age: 17 }
  ],
  old: [
    { name: 'Yash JANGID', age: 40 },
    { name: 'Firoz KHAN', age: 41 },
    { name: 'Swpril AHUJA', age: 45 },
    { name: 'Yogesh KHATRI', age: 51 }
  ],
  noage: [ { name: 'Chandraprakash SHARMA' } ]
}
 */


// 7. add a new member to same members array instance at index 2

const newMember = { 'name': 'Kshipra Jadav', 'age': 20 }
members.splice(2, 0, newMember)
console.log(members)
/*
Output -
[
  { name: 'Rakesh GUPTA', age: 20 },
  { name: 'Yash JANGID', age: 40 },
  { name: 'Kshipra Jadav', age: 20 },
  { name: 'Firoz KHAN', age: 41 },
  { name: 'Amrit SRIVASTAVA', age: 17 },
  { name: 'Chandraprakash SHARMA' },
  { name: 'Swpril AHUJA', age: 45 },
  { name: 'Yogesh KHATRI', age: 51 }
]
 */

// 8. extract first and second element using destructing
const [elem1, elem2] = members
console.log(elem1, elem2)
/*
Output -
{ name: 'Rakesh GUPTA', age: 20 } { name: 'Yash JANGID', age: 40 }
 */


// 9. Create a new array instance adding a new member at index 0, and keeping existing afterwards
const anotherNewMember = { 'name': 'Aditya Patil', 'age': 19 }
const newMembers = [
	anotherNewMember,
	...members
]
console.log(newMembers)
/*
Output -
[
  { name: 'Aditya Patil', age: 19 },
  { name: 'Rakesh GUPTA', age: 20 },
  { name: 'Yash JANGID', age: 40 },
  { name: 'Kshipra Jadav', age: 20 },
  { name: 'Firoz KHAN', age: 41 },
  { name: 'Amrit SRIVASTAVA', age: 17 },
  { name: 'Chandraprakash SHARMA' },
  { name: 'Swpril AHUJA', age: 45 },
  { name: 'Yogesh KHATRI', age: 51 }
]
 */


// 10. Extract properties of object using destructuring
members.forEach(item => {
	const { name, age } = item
	console.log(`Name :- ${ name }, Age:- ${ age }`)
})
/*
Output -
Name :- Rakesh GUPTA, Age:- 20
Name :- Yash JANGID, Age:- 40
Name :- Kshipra Jadav, Age:- 20
Name :- Firoz KHAN, Age:- 41
Name :- Amrit SRIVASTAVA, Age:- 17
Name :- Chandraprakash SHARMA, Age:- undefined
Name :- Swpril AHUJA, Age:- 45
Name :- Yogesh KHATRI, Age:- 51
*/


// 11. Rename extracted property of object while destructing
members.forEach(item => {
	const { name: memberName, age: memberAge } = item
	console.log(`Name :- ${ memberName }, Age :- ${ memberAge }`)
})
/*
Output -
Same as above question.
 */


// 12. Destructure any property of an object and use spread operator to get remaining properties in an object
const person = {
	name: 'Kshipra Jadav',
	isIntern: true,
	internAt: 'WisFlux'
}

const { name, ...rest } = person
console.log(name, rest)
/*
Output -
Kshipra Jadav { isIntern: true, internAt: 'WisFlux' }
*/


// 13. Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step
const newPerson = {
	...person,
	isIntern: false
}
console.log(newPerson)
/*
Output -
{ name: 'Kshipra Jadav', isIntern: false, internAt: 'WisFlux' }
 */


// 14. Use reduce function on array and object
const numbers = [1, 2, 3, 4, 5, 6]
const factorial = numbers.reduce((previousValue, currentValue) => previousValue * currentValue)
console.log(factorial)
/*
Output -
720
 */
console.log(Object.values(person).reduce((prev, curr) => prev + curr))
/*
Output -
Kshipra JadavtrueWisFlux
 */