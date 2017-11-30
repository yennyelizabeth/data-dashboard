/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

window.addEventListener('load', function(event) {
  var select = document.getElementById('navbar');
  var sedes = Object.keys(data); // AQ, CDM, LM, CH
  var generations = Object.values(data);
  var score9 = document.getElementById('average-score-for-teachers');
  var score10 = document.getElementById('average-score-for-jedi');
  select.addEventListener('click', function(event) {
    var office;
    var arrayOfGenerations;
    var specificGeneration;
    /* score10.textContent = ' '; */
    if (true) {
      if (select.value === 'aq-2016-2') {
        // alert(select.value);
        var sentence = select.value;
        var generation = sentence.slice(3, 9);
        office = Object.keys(data)[0];
        arrayOfGenerations = Object.values(data)[0];
        specificGeneration = arrayOfGenerations[generation];
        var ratings = specificGeneration['ratings'];
        /* Variable para almacenar la suma de toda las puntuaciones a los jedi*/
        var averageScoreForJedi = 0;
        for (var i = 0; i < ratings.length; i++) {
          /* Obteniendo la puntuación de los jedi*/
          var jediScore = ratings[i]['jedi'];
          averageScoreForJedi += jediScore;
        }
        /* Puntuación promedio de los jedi */
        var averageScore = parseInt(averageScoreForJedi / 4);
        // alert(averageScore);
        score10.textContent = averageScore;
        // console.log(averageScore);
      }
    }
    /* case event.target.value === 'aq-2017-1':
    case event.target.value === 'cm-2017-1':
    case event.target.value === 'cm-2017-2':
    case event.target.value === 'lm-2016-2':
    case event.target.value === 'lm-2017-1':
    case event.target.value === 'lm-2017-2':
    case event.target.value === 'ch-2016-2':
    case event.target.value === 'ch-2017-1':
    default:
      var x;
    } */
  });
});
