const btn = document.getElementById("btn-enco");
const btnDeco = document.getElementById("btn-deco");
const result = document.getElementById("result");
let final_msg = "";

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function caesarCypherEncoder(msg, alphabet, code) {
  for (let i = 0; i < msg.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (alphabet[j] == msg[i]) {
        if (j + code > alphabet.length - 1) {
          const r = j + code - alphabet.length;
          final_msg += alphabet[r];
        } else {
          final_msg += alphabet[j + code];
        }
      }
    }
    if (msg[i] == " ") {
      final_msg += " ";
    }
  }
  result.innerHTML = `Result: ${final_msg}`;
  final_msg = "";
}

function caesarCypherDecoder(msg, code) {
  for (let i = 0; i < msg.length; i++) {
    for (let j = alphabet.length - 1; j > -1; j--) {
      if (alphabet[j] == msg[i]) {
        if (j - code < 0) {
          const r = alphabet.length + (j - code);
          final_msg += alphabet[r];
        } else {
          final_msg += alphabet[j - code];
        }
      }
    }
    if (msg[i] == " ") {
      final_msg += " ";
    }
  }
  result.innerHTML = `Result: ${final_msg}`;
  final_msg = "";
}

btn.addEventListener("click", () => {
  let msg = document.getElementById("msg-field-enco").value;
  msg = msg.toLowerCase();
  console.log(msg);
  let code = parseInt(document.getElementById("code-number-enco").value);
  caesarCypherEncoder(msg, alphabet, code);
});

btnDeco.addEventListener("click", () => {
  let msg = document.getElementById("msg-field-deco").value;
  msg = msg.toLowerCase();
  console.log(msg);
  let code = parseInt(document.getElementById("code-number-deco").value);
  caesarCypherDecoder(msg, code);
});
