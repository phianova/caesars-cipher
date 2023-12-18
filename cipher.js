// Main function called on input
const decipher = () => {
    const alphabet = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let inputMessage = document.getElementById("inputMessage").value;
    let key = Number(document.getElementById("key").value);
    let outputMessage = document.getElementById("outputMessage");

    let outputText = [];

// Loop through each letter of input string
    for (let i = 0; i < inputMessage.length; i++) {
        let letterRegEx = /[a-zA-Z]/;
        let letter = inputMessage[i];
        //console.log("letter", inputMessage[i], "is Letter", letterRegEx.test(inputMessage[i]));
        if (letterRegEx.test(inputMessage[i])){
            // Different output function for uppercase letters to maintain casing on output
            let upperCaseRegEx = /[A-Z]/;
            let upperCase = upperCaseRegEx.test(inputMessage[i]);
            if (upperCase) {
                letter = letter.toLowerCase();
                console.log("uppercase letter", letter);
            }
            
            let index = alphabet.indexOf(letter);
            console.log("index", index);

            let newIndex = index + key;
            console.log("key", key);
            console.log("newIndex", newIndex);

            let newLetter = alphabet[newIndex];
            console.log("letter", newLetter);

            if (upperCase) {
                newLetter = newLetter.toUpperCase();
                console.log("new uppercase letter", newLetter)
            }

            outputText.push(newLetter);
            console.log("output", outputText); 
        } else {
            let nonLetter = inputMessage[i];
            outputText.push(nonLetter);
            console.log("output", outputText);    
        }
    }

// Find index of each letter in our alphabet array


// Find letter corresponding to index and output it in output

// Extension: account for symbols in string!

outputMessage.value = outputText.join("");

}