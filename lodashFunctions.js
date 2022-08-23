import members from './members.js'
import _ from 'lodash'

// 1. Get array of first names of everyone
const firstNames = []
_.each(members, member => {
	const name = _.words(member.name)
	firstNames.push(name[0])
})
console.log(firstNames)
/*
Output -
[
  'Rakesh',
  'Yash',
  'Firoz',
  'Amrit',
  'Chandraprakash',
  'Swpril',
  'Yogesh'
]
 */


// 2. Make everyone's last names in UPPERCASE in given array of objects
_.each(members, member => {
	const fullName = _.words(member.name)
	fullName[1] = _.upperCase(fullName[1])
	member.name = _.join(fullName, ' ')
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
console.log(_.filter(members, member => 41 > member.age && member.age < 60))
/*
[
  { name: 'Rakesh GUPTA', age: 20 },
  { name: 'Yash JANGID', age: 40 },
  { name: 'Amrit SRIVASTAVA', age: 17 }
]
*/

// 4. Get average age
const ages = []
_.each(members, member => {
	if (member.age) ages.push(member.age)
})
console.log(_.mean(ages))
/*
Output -
35.666666666666664
*/

// 5. Get Person with maximum age
console.log(_.maxBy(members, member => member.age))
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
const persons = {
	'young': _.filter(members, member => member.age < 35),
	'old': _.filter(members, member => member.age > 35),
	'noage': _.filter(members, member => !member.age)
}
console.log(persons)
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
const newMember = { name: 'Kshipra Jadav', age: 20 }
const newMembers = [
	..._.slice(members, 0, 2),
	newMember,
	..._.slice(members, 2)
]
console.log(newMembers) // Did not find any method which mutates the input in lodash except for unset()
/*
Output -
[
  { name: 'Rakesh GUPTA', age: 20 },
  { name: 'Yash JANGID', age: 40 },
  { name: 'Firoz KHAN', age: 41 },
  { name: 'Amrit SRIVASTAVA', age: 17 },
  { name: 'Chandraprakash SHARMA' },
  { name: 'Swpril AHUJA', age: 45 },
  { name: 'Yogesh KHATRI', age: 51 },
  { name: 'Kshipra Jadav', age: 20 }
]
 */


// 8. extract first and second element using destructing
const newElems = _.slice(members, 0, 2)
console.log(newElems)
/*
Output -
[ { name: 'Rakesh GUPTA', age: 20 }, { name: 'Yash JANGID', age: 40 } ]
 */

// 9. Create a new array instance adding a new member at index 0, and keeping existing afterwards
const anotherNewMember = { name: 'Aditya Patil', age: 19 }
const newArray = [
	anotherNewMember,
	..._.slice(members, 0)
]
console.log(newArray)
/*
Output -
[
  { name: 'Aditya Patil', age: 19 },
  { name: 'Rakesh GUPTA', age: 20 },
  { name: 'Yash JANGID', age: 40 },
  { name: 'Firoz KHAN', age: 41 },
  { name: 'Amrit SRIVASTAVA', age: 17 },
  { name: 'Chandraprakash SHARMA' },
  { name: 'Swpril AHUJA', age: 45 },
  { name: 'Yogesh KHATRI', age: 51 }
]
*/


// 10. Extract properties of object using destructuring
// this is just done better in native-js
// also, native-js destructuring is faster than _.omit() or _.pick() https://medium.com/nerd-for-tech/replacing-lodash-omit-using-object-restructuring-and-the-spread-syntax-d7af1607a390
// also, _.pick() will return a new object based on the properties that it was passed with - which defeats the whole purpose of destructuring
// hence, i did not find any suitable methods for destructuring

// 11. Rename extracted property of object while destructing
// again, implemented better in native-js


// 12. Destructure any property of an object and use spread operator to get remaining properties in an object
// implemented better in native-js


// 13. Create a new object by copying using spread operator, override one of the properties to assign a new value in the same step
// implemented better in native-js


// 14. Use reduce function on array and object
const arr = [1, 2, 3, 4, 5]
const obj = {
	name: "Kshipra Jadav",
	age: 20,
	isIntern: true,
	internAt: 'WisFlux'
}

console.log(_.reduce(arr, (p, c) => {
	return p + c
}, 0))
/*
Output -
15
 */

console.log(_.reduce(obj, (p, c, k) => {
	console.log(`Key :- ${k} : Value :- ${c}`)
}, {}))
/*
Output -
Key :- name : Value :- Kshipra Jadav
Key :- age : Value :- 20
Key :- isIntern : Value :- true
Key :- internAt : Value :- WisFlux
undefined
 */