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
    //setting a base
    let base = (2*x)-1
    //creating variable for space
    let space = " "
    //tower variable
    let tower = []
    //using loop depending on x floors
    for(i=0; i<x;i++){
        let level = space.repeat(i)+"*".repeat(base)+space.repeat(i)
        tower.push(level)
        //after level added, decreasing base by 2
        base -=2
    }
    //returning tower in reverse since we built it from lower level to high level
    return(tower.reverse())
}



console.log(towerBuilder(6))