window.cipher = {
  encode: (offset, string) => {
    let output = '';
    offset = offset % 26;
    for (let i = 0; i < string.length; i++) {
      let letter = string.charCodeAt(i);
      let newLetter;
      if (letter >= 65 && letter <= 90){
        newLetter = String.fromCharCode((letter - 65 + offset)%26 + 65);
      }else if (97 <= letter && letter <= 122) {
        newLetter = String.fromCharCode((letter - 97 + offset) %26 + 97);
      }else {
        newLetter = String.fromCharCode(letter);
      }
        output += newLetter
   } 
   return output;
},

  decode: (offset, string) => {
      let output = '';
    offset = offset % 26;
    for (let i = 0; i < string.length; i++) {
      let letter = string.charCodeAt(i);
      let newLetter;
      if (letter >= 65 && letter <= 90) {
        newLetter = String.fromCharCode((letter + 65 - offset - 26) %26 +65);
      }else if (97 <= letter && letter <= 122) {
        newLetter = String.fromCharCode((letter - 97 - offset + 26) %26 + 97);
      }else {
        newLetter = String.fromCharCode(letter);
      }
        output += newLetter
      }
      return output;
   },
   createCipherWithOffset: (offset) => {
    return {
      encode: (string) => {
        return cipher.encode(offset, string);
      },
      decode: (string) => {
        return cipher.decode(offset, string);
      }
    }
  }
  };