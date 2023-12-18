// Main function called on input
const decipher = () => {
    const alphabet = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let inputMessage = document.getElementById("inputMessage").value;
    let key = Number(document.getElementById("key").value);
    let outputMessage = document.getElementById("outputMessage");
    let decode = document.getElementById("decode");

    let outputText = [];

    // Reverse the key if we're decoding
    if (decode.checked) {
        key = -key;
    }

    // Loop through each letter of input string
    for (let i = 0; i < inputMessage.length; i++) {
        let letterRegEx = /[a-zA-Z]/;
        let letter = inputMessage[i];
        if (letterRegEx.test(inputMessage[i])){
            // Different output function for uppercase letters to maintain casing on output
            let upperCaseRegEx = /[A-Z]/;
            let upperCase = upperCaseRegEx.test(inputMessage[i]);
            if (upperCase) {
                letter = letter.toLowerCase();
            }
            // Find index of each letter in our alphabet array
            let index = alphabet.indexOf(letter);

            // Identify new index based on key entered
            let newIndex = index + key;

            // Deal with shifts greater than length of alphabet
            if (newIndex > 25) {
                newIndex -= 26;
            } else if (index < 0) {
                newIndex += 26;
            }

            // Find letter corresponding to index and output it in output
            let newLetter = alphabet[newIndex];

            if (upperCase) {
                newLetter = newLetter.toUpperCase();
            }

            outputText.push(newLetter);
        } else {
            let nonLetter = inputMessage[i];
            outputText.push(nonLetter);
        }
    }




// Extension: account for symbols in string!

outputMessage.value = outputText.join("");

}