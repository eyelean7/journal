function Entry(entryInput) {
  this.input = entryInput;
}

Entry.prototype.wordCount = function() {
  return this.split(" ").length;
};

Entry.prototype.vowelCount = function() {
  vowelArray = ['a','e','i','o','u','y'];
  letters = this.split("");
  count = 0;
  for (i = 0; i < letters.length; i++) {
    if(vowelArray.includes(letters[i])) {
      count +=1;
    }
  }
  return count;
};

Entry.prototype.consonantCount = function() {
  var lettersOnly = /[A-Za-z]*/;
  letters = lettersOnly.exec(this);
  lettersCount = letters.length;
  return(lettersCount - entry.vowelCount);
};

exports.journalModule = Entry;
