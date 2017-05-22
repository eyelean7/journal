(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
var entry = require('./../js/journal.js').journalModule;


$(document).ready(function() {

  $('form').submit(function(event) {
    event.preventDefault();
    var entry = $('#entry').val();
    console.log(entry);
    var newInput = new Entry(entry);
    var wordCount =  newInput.wordCount();
    var vowelCount = newInput.vowelCount();
    var consonantCount = newInput.consonantCount();
    $('#wordCount').text(wordCount);
    $('#vowelCount').text(vowelCount);
    $('#consonantCount').text(consonantCount);
  });
});

},{"./../js/journal.js":1}]},{},[2]);
