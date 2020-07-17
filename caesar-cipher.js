  //decipher the string
  let caesarCipher = (string, shift) => {

    let s = "This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation";
    let punctuationless = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    string = punctuationless.replace(/\s{2,}/g," ");

    // Wrap the shift
    if (shift < 0) {
      return caesarShift(string, shift + 26);
    }

    // Make an output variable
    let output = "";

    // Go through each character
    for (let i = 0; i < string.length; i++) {
      // Get the character we'll be appending
      let c = string[i];

      // If it's a letter...
      if (c.match(/[a-z]/i)) {
        // Get its code
        let code = string.charCodeAt(i);

        // Uppercase letters
        if (code >= 65 && code <= 90) {
          c = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        }

        // Lowercase letters
        else if (code >= 97 && code <= 122) {
          c = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
      }

      // Append
      output += c;
    }

    // All done!
    return output;
  } 

export default caesarCipher