//https://leetcode.com/problems/fibonacci-number/description/


//Values  : 0, 1, 1, 2, 3, 5, 8, 13
//Position: 0  1  2  3  4  5  6  7
/*
based on our diagram of fibonacci:
- the value at position 5 for example is 5. 
- the value at position 7 is 13
*/


const fib = (n) => {
    //put our code in here

    //we have 2 base cases. we know the values at n = 0 and n = 1 because they are provided on the question
    // n = 0 has a value of 0
    if(n === 0) return 0;
    // n = 1 has a value of 1;
    if(n === 1) return 1;

    let fibValues = [0,1]; // we will go with an array data structure. 


    //add to the fibValues array starting at index 2 all the way up to 'n'
    for(let i = 2; i <= n; i++){
        let valueToBeAdded = fibValues[i-1] + fibValues[i-2];
        fibValues.push(valueToBeAdded);
    }

    //then return the value at 'n'
    return fibValues[n];
};



 
