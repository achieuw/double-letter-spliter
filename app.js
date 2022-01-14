const wordListElement = document.getElementById('word-list');
const wordInputElement = document.getElementById('word-input');
const wordBtnElement = document.getElementById('input-btn');

function splitOnDoubleLetter(word){
  const myArr = [];
  let currIndex = 0;

  for(let i = 1; i < word.length; i++){
    if(word[i - 1] === word[i]){
      myArr.push(word.substring(currIndex, i));
      currIndex = i;
    }
    else if(i === word.length - 1 && currIndex > 0){
      myArr.push(word.substring(currIndex, word.length));
    }
  }
  if(currIndex == 0) 
    myArr.length = 0;

  printToHTML(word, myArr);
  return myArr;
}

function printToHTML(word, list){
  const listElement = document.createElement('li');
  let textToPrint = `${word} = [`;
  if(list.length > 0){
    list.forEach(element => {
      textToPrint += `"${element}"` + ", ";
    });
    textToPrint = textToPrint.substring(0, textToPrint.length - 2);
    textToPrint += "]";
  }
  else textToPrint = `${word} = []`;
  
  listElement.innerText = textToPrint;
  wordListElement.appendChild(listElement);

}

function addWord(){
  splitOnDoubleLetter(wordInputElement.value);
}

wordBtnElement.addEventListener('click', addWord);

console.log(splitOnDoubleLetter("M. Night Marshmallow"));
console.log(splitOnDoubleLetter("Letter"));
console.log(splitOnDoubleLetter("Easy"));
console.log(splitOnDoubleLetter("Tool"));
console.log(splitOnDoubleLetter("Menneskerettighetsorganisasjonene"));
console.log(splitOnDoubleLetter("Anticonstitutionnellement"));
console.log(splitOnDoubleLetter("Mmmmkay"));