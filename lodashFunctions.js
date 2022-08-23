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
