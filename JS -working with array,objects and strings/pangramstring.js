function isPangram(string){
    let regex=/([a-z])(?!.*\1)/gi;
    return (string.match(regex)).length===26;
}
let string='The quick brown fox jumps over the lazy dog';
console.log(isPangram(string));