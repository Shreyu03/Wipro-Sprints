function removeDuplicate(arr){
    return[...new Set(arr)]
}
const arr=[1, 2,3,4,5,2, 3, 4, 5, 4, 6, 2 ];
console.log(removeDuplicate(arr));