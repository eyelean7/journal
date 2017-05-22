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
