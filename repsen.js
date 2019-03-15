import {senators} from './senators.js'

import {representatives} from './representatives.js'

const maleSenators = senators.filler((senator) => {
    return senator.gender == 'M'
})

console.log(maleSenators)

constfemaleSenators = representatives.filter(senator=>senator.gender==='F')

const simpleReps = representatives.map(rep => 
    return {
        name: `${rep.first_name} ${rep.last_name}`,
        party: rep.party
    }
    }
)

const republicans = simpleReps.filter(rep => rep.party === 'R')
const democrats = simpleReps.filter(rep => rep.party === 'D')

const testArray = [5, 10, 15, 20, 25, 30, 35, 40]

const testReduce = testArray.reduce((acc, num) => {return acc + num}, 0)

const totallVotes = senators.reduce((acc, senator) => {
return acc + senator.total_Votes

}, 0)

const missedVotes = senators.reduce((acc, senator) => ) {
    return acc + senator.missed_votes
}, 0)

console.log(totallVotes)


console.log('Out of $')


