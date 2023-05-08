let str = "abacddbec";

function lastNonRepeatedChar(str) {
    for (let i = str.length - 1; i >= 0; i--) {
      let char = str[i];
      if (str.lastIndexOf(char) === i && str.indexOf(char, i + 1) === -1) {
        console.log(char);
      }
    }
    console.log(null)
  }
  
lastNonRepeatedChar(str);

  