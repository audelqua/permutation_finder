

//lets define the "permutationFinder" function input lists
const twoDimensionalArrayOfStrings = [['a', 'b'], ['c', 'd', 'e'], ['f', 'g'], ['h', 'i', 'l', 'n']]
const twoDimensionalArrayOfNumbers = [[1,2], [3,4], [5,6,7]]

// As second step we need to define the function to find the permutations 
// This function has parameters below: 
// 1) givenArray: the array we want to find the permutations of

// 2) currentPosition: stands for index of our two dimensional array. 
//    we use this parameter to detect when we have reached the end of the givenArray to push one found permutation array into our allPermutations array

// 3) allPermutations: This is an array which contains all of our permutation arrays

// 4) onePermutation: This is an array which contains items of one permutation

const permutationFinder = (givenArray, currentPosition = 0, allPermutations = [], onePermutation = []) => {
    // This is a recursive function which call itself until we reach the end of the givenArray. 
    // They way this function works is very simple:

    // first it goes into else statement and start a forEach loop on first array of givenArray and immediately call permutationFinder again  and fill up 
    // onePermutation array with first item of childArray also we increase currentPosition by 1. the point here is that our permutationFinder call itself for times equal to the length of child array of givenArray
    // this way we fill onePermutation with all first childItems of all childArray inside givenArray and as we reached into length of givenArray we push onePermutation into allPermutations array 
 
    if(currentPosition === givenArray.length) allPermutations.push(onePermutation)
    else givenArray[currentPosition].forEach(childItem => permutationFinder(givenArray, currentPosition + 1, allPermutations, [...onePermutation, childItem])) 
    return allPermutations
}
let result = permutationFinder(twoDimensionalArrayOfNumbers)
console.log('All permutations:' ,result)
