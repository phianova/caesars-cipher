// Main function called on input
const decipher = () => {
    const alphabet = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "A", "B", "C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", "0", "1", "2", "3","4","5","6","7","8", "9", "!", "@", "#", "$", "%", "^", "&", "*", ")", "(", "+", "=", ".", "_", "-"];
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
        let validCharacterRegEx = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g;
        let letter = inputMessage[i];
        if (validCharacterRegEx.test(inputMessage[i])){
            // Find index of each letter in our alphabet array
            let index = alphabet.indexOf(letter);

            // Identify new index based on key entered
            let newIndex = index + key;

            // Deal with shifts greater than length of alphabet
            if (newIndex > 77) {
                newIndex -= 77;
            } else if (index < 0) {
                newIndex += 77;
            }

            // Find letter corresponding to index and output it in output
            let newLetter = alphabet[newIndex];

            outputText.push(newLetter);
        } else {
            let nonLetter = inputMessage[i];
            outputText.push(nonLetter);
        }
    }




// Extension: account for symbols in string!

outputMessage.value = outputText.join("");

}