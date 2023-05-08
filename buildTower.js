// Build Tower
// Difficulty Medium Concepts Loops, Logic
// Write a function that takes in a number. It should return a “tower” of * . The tower will be an array of strings.
// The number passed in tells you how many floors the tower should have.
// The first floor should have 1 block, the 2nd should have 3 blocks, the 3rd should have 5 blocks, and so on. Each block is represented by a * .
// For example, a tower of 3 floors looks like this (note the spacing):
// and a tower of 6 floors looks like this:
// [
// ' * ',
// ' *** ',
// '*****'
// ]

// [
//     '     *     ',
//     '    ***    ',
//     '   *****   ',
//     '  *******  ',
//     ' ********* ',
//     '***********'
// ]



// CODE STARTS BELOW

function towerBuilder(x){
    let base = (2*x)-1
    let space = " "
    let tower = []
    for(i=0; i<x;i++){
        let level = space.repeat(i)+"*".repeat(base)+space.repeat(i)
        tower.push(level)
        base -=2
    }
    return(tower.reverse())
}



console.log(towerBuilder(6))