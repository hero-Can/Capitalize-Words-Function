function capitalizeFirstLetter(string) {
    let firstLetter = string[0].toUpperCase();
    console.log(firstLetter+string.slice(1));
    console.log(`${firstLetter}${string.slice(1)}`);
    console.log(firstLetter.concat(string.slice(1)));

}
function capitalizeFirstLetters(string) {
    let words = string.split(" ");
    let arr = [];
    // elzero web school
     for (let index = 0; index < words.length; index++) {
        arr[index] = words[index].charAt(0).toUpperCase().concat(words[index].slice(1));
     }
    console.log(arr.join(" "));
   
    // operation in same array elzero web school
    //  for (let index = 0; index < words.length; index++) {
    //     words[index] = words[index].charAt(0).toUpperCase().concat(words[index].slice(1));
    //  }
    console.log(words.join(" ")); // Elzero Web School
}

capitalizeFirstLetter("osama");
capitalizeFirstLetters("elzero web school");