var colour;
var creature;
var adjective;
var story;

alert('Let’s make a story together!');

colour = prompt('A colour (orange, indigo, etc.)');
creature = prompt('A creature (dragon, moth, etc.)');
adjective = prompt('An adjective (beautiful, super, etc.)');
verb = prompt('A past tense verb (ran, burped, etc.)');
story = prompt('Which story would you like? \n a) Snacking \n b) Escaping \n c) Winning Enter the letter below:');

if (story == 'a') {
  document.write('After snacking on ' + adjective + ' treats, the ' + colour + ' bellied ' + creature + ' ' + verb + ' for hours.');

} if (story == 'b') {
  document.write('Ameilia ' + verb + ' through the ' + adjective + ' ' + colour + ' nebula escaping the space ' + creature + '.');

} if (story == 'c') {
  document.write('Jackson chose his ' + adjective + ', ' + colour  + ' ' + creature + ' card and ' + verb + ' it to the table knowing he won.');
}
