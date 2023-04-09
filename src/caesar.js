// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (shift > 25 || shift < -25 || !shift || shift === 0) {
      return false;
    }
    let result = "";
    input = input.toLowerCase();
    for (let i = 0; i < input.length; i++) {
      let char = input[i];
      if (char.match(/[a-z]/)) {
        let charCode = char.charCodeAt(0);
        let baseCode = "a".charCodeAt(0);
        let newCode = 0;
        if (encode === true) {
          newCode = (charCode - baseCode + shift + 26) % 26;
        } else {
          newCode = (charCode - baseCode - shift + 26) % 26;
        }
        let newPosition = baseCode + newCode;
        let newChar = String.fromCharCode(newPosition);
        result += newChar;
      } else {
        result += char;
      }
    }
    return result;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
