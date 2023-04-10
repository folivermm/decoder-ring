// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    const checkForRepeats = new Set(alphabet);
    if (!alphabet || alphabet.length != 26) return false;
    for (let i = 0; i < alphabet.length; i++) {
      const letter = alphabet[i];
      for (let j = i + 1; j < alphabet.length; j++) {
        if (letter === alphabet[j]) {
          return false;
        }
      }
    }
    // SETUP
    let output = "";
    input = input.toLowerCase();
    const a = "a".charCodeAt(0);
    // CYPHER
    for (let i = 0; i < input.length; i++) {
      if (encode) {
        let newChar = input.charCodeAt(i) - a;
        if (newChar >= 0 && newChar < 26) {
          output += alphabet[newChar];
        } else {
          output += input[i];
        }
      } else {
        let newChar = input[i];
        if (newChar === " ") output += " ";
        else {
          const keyIndex = alphabet.indexOf(newChar);
          output += String.fromCharCode(keyIndex + a);
        }
      }
    }
    return output;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
