const morseCodeMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..',
    'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.',
    '.': '.-.-.-', ',': '--..--', '?': '..--..', ' ': '/'
  };
  
  const reverseMap = Object.fromEntries(
    Object.entries(morseCodeMap).map(([key, value]) => [value, key])
  );
  
  function convertToMorse() {
    const input = document.getElementById('input').value.toUpperCase();
    const output = input.split('').map(char => morseCodeMap[char] || '').join(' ');
    document.getElementById('output').value = output.trim();
  }
  
  function convertToEnglish() {
    const input = document.getElementById('input').value.trim();
    const output = input.split(' ').map(code => reverseMap[code] || '').join('');
    document.getElementById('output').value = output;
  }
  