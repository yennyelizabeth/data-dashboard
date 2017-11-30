/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

window.addEventListener('load', function(event) {
  var select = document.getElementById('navbar');
  var sedes = Object.keys(data);
  var generations = Object.values(data);
  var score5 = document.getElementById('nps');
  var promotersContainer = document.getElementById('promoters');
  var passiveContainer = document.getElementById('passive');
  var detractorsContainer = document.getElementById('detractors');
  var score8 = document.getElementById('satisfied-students');
  var score9 = document.getElementById('average-score-for-teachers');
  var score10 = document.getElementById('average-score-for-jedi');
  select.addEventListener('click', function(event) {
    var office;
    var arrayOfGenerations;
    var specificGeneration;
    if (true) {
      if (select.value === 'aq-2016-2') {
        var sentence = select.value;
        var generation = sentence.slice(3, 9);
        office = Object.keys(data)[0];
        arrayOfGenerations = Object.values(data)[0];
        specificGeneration = arrayOfGenerations[generation];
        var ratings = specificGeneration['ratings'];
        /* Variables*/
        /* Para el punto 5 */
        var totalPromoters = 0;
        var totalPassive = 0;
        var totalDetractors = 0;
        /* Para el punto 8 */
        var dontMeet = 0;
        var meet = 0;
        var exceed = 0;
        /* Para el punto 9 */
        var averageScoreForTeachers = 0;
        /* Para el punto 10 */
        var averageScoreForJedi = 0;
        /* Recorriendo con un for el object ratings */
        for (var i = 0; i < ratings.length; i++) {
          /* Obteniendo el Net Promoter Score (NPS) promedio de los sprints cursados. */
          totalPromoters += ratings[i]['nps']['promoters'];
          totalPassive += ratings[i]['nps']['passive'];
          totalDetractors += ratings[i]['nps']['detractors'];
          /* Obteniendo el porcentaje de estudiantes satisfechas con la experiencia de Laboratoria. */
          dontMeet += ratings[i]['student']['no-cumple'];
          meet += ratings[i]['student']['cumple'];
          exceed += ratings[i]['student']['supera'];
          /* Obteniendo la puntuación de los jedi */
          var jediScore = ratings[i]['jedi'];
          averageScoreForJedi += jediScore;
          /* Obteniendo la puntuación de los teachers*/
          var teacherScore = ratings[i]['teacher'];
          averageScoreForTeachers += teacherScore;
        }
        /* El Net Promoter Score (NPS) promedio de los sprints cursados */
        var totalScore = totalPromoters + totalPassive + totalDetractors;
        var promoters = (totalPromoters / totalScore) * 100;
        var passive = (totalPassive / totalScore) * 100;
        var detractors = (totalDetractors / totalScore) * 100;
        var nps = promoters - detractors;
        promotersContainer.textContent = promoters.toFixed(2) + ' %' + ' Promoters';
        passiveContainer.textContent = passive.toFixed(2) + ' %' + ' Passive';
        detractorsContainer.textContent = detractors.toFixed(2) + ' %' + ' Detractors';
        score5.textContent = nps.toFixed(2) + '%';
        /* Porcentaje de estudiantes satisfechas */
        var total = dontMeet + meet + exceed;
        var happyStudents = meet + exceed;
        var satisfiedStudents = (happyStudents * 100) / total;
        score8.textContent = satisfiedStudents;
        /* Puntuación promedio de los teachers */
        var averageScore2 = Math.round(averageScoreForTeachers / 4);
        score9.textContent = averageScore2;
        /* Puntuación promedio de los jedi */
        var averageScore = Math.round(averageScoreForJedi / 4);
        score10.textContent = averageScore;
      }
      if (select.value === 'aq-2017-1') {
        var sentence = select.value;
        var generation = sentence.slice(3, 9);
        office = Object.keys(data)[0];
        arrayOfGenerations = Object.values(data)[0];
        specificGeneration = arrayOfGenerations[generation];
        var ratings = specificGeneration['ratings'];
        /* Variables*/
        /* Para el punto 5 */
        var totalPromoters = 0;
        var totalPassive = 0;
        var totalDetractors = 0;
        /* Para el punto 8 */
        var dontMeet = 0;
        var meet = 0;
        var exceed = 0;
        /* Para el punto 9 */
        var averageScoreForTeachers = 0;
        /* Para el punto 10 */
        var averageScoreForJedi = 0;
        /* Recorriendo con un for el object ratings */
        for (var i = 0; i < ratings.length; i++) {
          /* Obteniendo el Net Promoter Score (NPS) promedio de los sprints cursados. */
          totalPromoters += ratings[i]['nps']['promoters'];
          totalPassive += ratings[i]['nps']['passive'];
          totalDetractors += ratings[i]['nps']['detractors'];
          /* Obteniendo el porcentaje de estudiantes satisfechas con la experiencia de Laboratoria. */
          dontMeet += ratings[i]['student']['no-cumple'];
          meet += ratings[i]['student']['cumple'];
          exceed += ratings[i]['student']['supera'];
          /* Obteniendo la puntuación de los jedi */
          var jediScore = ratings[i]['jedi'];
          averageScoreForJedi += jediScore;
          /* Obteniendo la puntuación de los teachers*/
          var teacherScore = ratings[i]['teacher'];
          averageScoreForTeachers += teacherScore;
        }
        /* El Net Promoter Score (NPS) promedio de los sprints cursados */
        var totalScore = totalPromoters + totalPassive + totalDetractors;
        var promoters = (totalPromoters / totalScore) * 100;
        var passive = (totalPassive / totalScore) * 100;
        var detractors = (totalDetractors / totalScore) * 100;
        var nps = promoters - detractors;
        promotersContainer.textContent = promoters.toFixed(2) + ' %' + ' Promoters';
        passiveContainer.textContent = passive.toFixed(2) + ' %' + ' Passive';
        detractorsContainer.textContent = detractors.toFixed(2) + ' %' + ' Detractors';
        score5.textContent = nps.toFixed(2) + '%';
        /* Porcentaje de estudiantes satisfechas */
        var total = dontMeet + meet + exceed;
        var happyStudents = meet + exceed;
        var satisfiedStudents = (happyStudents * 100) / total;
        score8.textContent = satisfiedStudents;
        /* Puntuación promedio de los teachers */
        var averageScore2 = Math.round(averageScoreForTeachers / 4);
        score9.textContent = averageScore2;
        /* Puntuación promedio de los jedi */
        var averageScore = Math.round(averageScoreForJedi / 4);
        score10.textContent = averageScore;
      }
      if (select.value === 'cm-2017-1') {
        var sentence = select.value;
        var generation = sentence.slice(3, 9);
        office = Object.keys(data)[1];
        arrayOfGenerations = Object.values(data)[1];
        specificGeneration = arrayOfGenerations[generation];
        var ratings = specificGeneration['ratings'];
        /* Variables*/
        /* Para el punto 5 */
        var totalPromoters = 0;
        var totalPassive = 0;
        var totalDetractors = 0;
        /* Para el punto 8 */
        var dontMeet = 0;
        var meet = 0;
        var exceed = 0;
        /* Para el punto 9 */
        var averageScoreForTeachers = 0;
        /* Para el punto 10 */
        var averageScoreForJedi = 0;
        /* Recorriendo con un for el object ratings */
        for (var i = 0; i < ratings.length; i++) {
          /* Obteniendo el Net Promoter Score (NPS) promedio de los sprints cursados. */
          totalPromoters += ratings[i]['nps']['promoters'];
          totalPassive += ratings[i]['nps']['passive'];
          totalDetractors += ratings[i]['nps']['detractors'];
          /* Obteniendo el porcentaje de estudiantes satisfechas con la experiencia de Laboratoria. */
          dontMeet += ratings[i]['student']['no-cumple'];
          meet += ratings[i]['student']['cumple'];
          exceed += ratings[i]['student']['supera'];
          /* Obteniendo la puntuación de los jedi */
          var jediScore = ratings[i]['jedi'];
          averageScoreForJedi += jediScore;
          /* Obteniendo la puntuación de los teachers*/
          var teacherScore = ratings[i]['teacher'];
          averageScoreForTeachers += teacherScore;
        }
        /* El Net Promoter Score (NPS) promedio de los sprints cursados */
        var totalScore = totalPromoters + totalPassive + totalDetractors;
        var promoters = (totalPromoters / totalScore) * 100;
        var passive = (totalPassive / totalScore) * 100;
        var detractors = (totalDetractors / totalScore) * 100;
        var nps = promoters - detractors;
        promotersContainer.textContent = promoters.toFixed(2) + ' %' + ' Promoters';
        passiveContainer.textContent = passive.toFixed(2) + ' %' + ' Passive';
        detractorsContainer.textContent = detractors.toFixed(2) + ' %' + ' Detractors';
        score5.textContent = nps.toFixed(2) + '%';
        /* Porcentaje de estudiantes satisfechas */
        var total = dontMeet + meet + exceed;
        var happyStudents = meet + exceed;
        var satisfiedStudents = (happyStudents * 100) / total;
        score8.textContent = satisfiedStudents;
        /* Puntuación promedio de los teachers */
        var averageScore2 = Math.round(averageScoreForTeachers / 4);
        score9.textContent = averageScore2;
        /* Puntuación promedio de los jedi */
        var averageScore = Math.round(averageScoreForJedi / 4);
        score10.textContent = averageScore;
      }
      if (select.value === 'cm-2017-2') {
        var sentence = select.value;
        var generation = sentence.slice(3, 9);
        office = Object.keys(data)[1];
        arrayOfGenerations = Object.values(data)[1];
        specificGeneration = arrayOfGenerations[generation];
        var ratings = specificGeneration['ratings'];
        /* Variables*/
        /* Para el punto 5 */
        var totalPromoters = 0;
        var totalPassive = 0;
        var totalDetractors = 0;
        /* Para el punto 8 */
        var dontMeet = 0;
        var meet = 0;
        var exceed = 0;
        /* Para el punto 9 */
        var averageScoreForTeachers = 0;
        /* Para el punto 10 */
        var averageScoreForJedi = 0;
        /* Recorriendo con un for el object ratings */
        for (var i = 0; i < ratings.length; i++) {
          /* Obteniendo el Net Promoter Score (NPS) promedio de los sprints cursados. */
          totalPromoters += ratings[i]['nps']['promoters'];
          totalPassive += ratings[i]['nps']['passive'];
          totalDetractors += ratings[i]['nps']['detractors'];
          /* Obteniendo el porcentaje de estudiantes satisfechas con la experiencia de Laboratoria. */
          dontMeet += ratings[i]['student']['no-cumple'];
          meet += ratings[i]['student']['cumple'];
          exceed += ratings[i]['student']['supera'];
          /* Obteniendo la puntuación de los jedi */
          var jediScore = ratings[i]['jedi'];
          averageScoreForJedi += jediScore;
          /* Obteniendo la puntuación de los teachers*/
          var teacherScore = ratings[i]['teacher'];
          averageScoreForTeachers += teacherScore;
        }
        /* El Net Promoter Score (NPS) promedio de los sprints cursados */
        var totalScore = totalPromoters + totalPassive + totalDetractors;
        var promoters = (totalPromoters / totalScore) * 100;
        var passive = (totalPassive / totalScore) * 100;
        var detractors = (totalDetractors / totalScore) * 100;
        var nps = promoters - detractors;
        promotersContainer.textContent = promoters.toFixed(2) + ' %' + ' Promoters';
        passiveContainer.textContent = passive.toFixed(2) + ' %' + ' Passive';
        detractorsContainer.textContent = detractors.toFixed(2) + ' %' + ' Detractors';
        score5.textContent = nps.toFixed(2) + '%';
        /* Porcentaje de estudiantes satisfechas */
        var total = dontMeet + meet + exceed;
        var happyStudents = meet + exceed;
        var satisfiedStudents = (happyStudents * 100) / total;
        score8.textContent = satisfiedStudents;
        /* Puntuación promedio de los teachers */
        var averageScore2 = Math.round(averageScoreForTeachers / 4);
        score9.textContent = averageScore2;
        /* Puntuación promedio de los jedi */
        var averageScore = Math.round(averageScoreForJedi / 4);
        score10.textContent = averageScore;
      }
      if (select.value === 'lm-2016-2') {
        var sentence = select.value;
        var generation = sentence.slice(3, 9);
        office = Object.keys(data)[2];
        arrayOfGenerations = Object.values(data)[2];
        specificGeneration = arrayOfGenerations[generation];
        var ratings = specificGeneration['ratings'];
        /* Variables*/
        /* Para el punto 5 */
        var totalPromoters = 0;
        var totalPassive = 0;
        var totalDetractors = 0;
        /* Para el punto 8 */
        var dontMeet = 0;
        var meet = 0;
        var exceed = 0;
        /* Para el punto 9 */
        var averageScoreForTeachers = 0;
        /* Para el punto 10 */
        var averageScoreForJedi = 0;
        /* Recorriendo con un for el object ratings */
        for (var i = 0; i < ratings.length; i++) {
          /* Obteniendo el Net Promoter Score (NPS) promedio de los sprints cursados. */
          totalPromoters += ratings[i]['nps']['promoters'];
          totalPassive += ratings[i]['nps']['passive'];
          totalDetractors += ratings[i]['nps']['detractors'];
          /* Obteniendo el porcentaje de estudiantes satisfechas con la experiencia de Laboratoria. */
          dontMeet += ratings[i]['student']['no-cumple'];
          meet += ratings[i]['student']['cumple'];
          exceed += ratings[i]['student']['supera'];
          /* Obteniendo la puntuación de los jedi */
          var jediScore = ratings[i]['jedi'];
          averageScoreForJedi += jediScore;
          /* Obteniendo la puntuación de los teachers*/
          var teacherScore = ratings[i]['teacher'];
          averageScoreForTeachers += teacherScore;
        }
        /* El Net Promoter Score (NPS) promedio de los sprints cursados */
        var totalScore = totalPromoters + totalPassive + totalDetractors;
        var promoters = (totalPromoters / totalScore) * 100;
        var passive = (totalPassive / totalScore) * 100;
        var detractors = (totalDetractors / totalScore) * 100;
        var nps = promoters - detractors;
        promotersContainer.textContent = promoters.toFixed(2) + ' %' + ' Promoters';
        passiveContainer.textContent = passive.toFixed(2) + ' %' + ' Passive';
        detractorsContainer.textContent = detractors.toFixed(2) + ' %' + ' Detractors';
        score5.textContent = nps.toFixed(2) + '%';
        /* Porcentaje de estudiantes satisfechas */
        var total = dontMeet + meet + exceed;
        var happyStudents = meet + exceed;
        var satisfiedStudents = (happyStudents * 100) / total;
        score8.textContent = satisfiedStudents;
        /* Puntuación promedio de los teachers */
        var averageScore2 = Math.round(averageScoreForTeachers / 4);
        score9.textContent = averageScore2;
        /* Puntuación promedio de los jedi */
        var averageScore = Math.round(averageScoreForJedi / 4);
        score10.textContent = averageScore;
      }
      if (select.value === 'lm-2017-1') {
        var sentence = select.value;
        var generation = sentence.slice(3, 9);
        office = Object.keys(data)[2];
        arrayOfGenerations = Object.values(data)[2];
        specificGeneration = arrayOfGenerations[generation];
        var ratings = specificGeneration['ratings'];
        /* Variables*/
        /* Para el punto 5 */
        var totalPromoters = 0;
        var totalPassive = 0;
        var totalDetractors = 0;
        /* Para el punto 8 */
        var dontMeet = 0;
        var meet = 0;
        var exceed = 0;
        /* Para el punto 9 */
        var averageScoreForTeachers = 0;
        /* Para el punto 10 */
        var averageScoreForJedi = 0;
        /* Recorriendo con un for el object ratings */
        for (var i = 0; i < ratings.length; i++) {
          /* Obteniendo el Net Promoter Score (NPS) promedio de los sprints cursados. */
          totalPromoters += ratings[i]['nps']['promoters'];
          totalPassive += ratings[i]['nps']['passive'];
          totalDetractors += ratings[i]['nps']['detractors'];
          /* Obteniendo el porcentaje de estudiantes satisfechas con la experiencia de Laboratoria. */
          dontMeet += ratings[i]['student']['no-cumple'];
          meet += ratings[i]['student']['cumple'];
          exceed += ratings[i]['student']['supera'];
          /* Obteniendo la puntuación de los jedi */
          var jediScore = ratings[i]['jedi'];
          averageScoreForJedi += jediScore;
          /* Obteniendo la puntuación de los teachers*/
          var teacherScore = ratings[i]['teacher'];
          averageScoreForTeachers += teacherScore;
        }
        /* El Net Promoter Score (NPS) promedio de los sprints cursados */
        var totalScore = totalPromoters + totalPassive + totalDetractors;
        var promoters = (totalPromoters / totalScore) * 100;
        var passive = (totalPassive / totalScore) * 100;
        var detractors = (totalDetractors / totalScore) * 100;
        var nps = promoters - detractors;
        promotersContainer.textContent = promoters.toFixed(2) + ' %' + ' Promoters';
        passiveContainer.textContent = passive.toFixed(2) + ' %' + ' Passive';
        detractorsContainer.textContent = detractors.toFixed(2) + ' %' + ' Detractors';
        score5.textContent = nps.toFixed(2) + '%';
        /* Porcentaje de estudiantes satisfechas */
        var total = dontMeet + meet + exceed;
        var happyStudents = meet + exceed;
        var satisfiedStudents = (happyStudents * 100) / total;
        score8.textContent = satisfiedStudents;
        /* Puntuación promedio de los teachers */
        var averageScore2 = Math.round(averageScoreForTeachers / 4);
        score9.textContent = averageScore2;
        /* Puntuación promedio de los jedi */
        var averageScore = Math.round(averageScoreForJedi / 4);
        score10.textContent = averageScore;
      }
      if (select.value === 'lm-2017-2') {
        var sentence = select.value;
        var generation = sentence.slice(3, 9);
        office = Object.keys(data)[2];
        arrayOfGenerations = Object.values(data)[2];
        specificGeneration = arrayOfGenerations[generation];
        var ratings = specificGeneration['ratings'];
        /* Variables*/
        /* Para el punto 5 */
        var totalPromoters = 0;
        var totalPassive = 0;
        var totalDetractors = 0;
        /* Para el punto 8 */
        var dontMeet = 0;
        var meet = 0;
        var exceed = 0;
        /* Para el punto 9 */
        var averageScoreForTeachers = 0;
        /* Para el punto 10 */
        var averageScoreForJedi = 0;
        /* Recorriendo con un for el object ratings */
        for (var i = 0; i < ratings.length; i++) {
          /* Obteniendo el Net Promoter Score (NPS) promedio de los sprints cursados. */
          totalPromoters += ratings[i]['nps']['promoters'];
          totalPassive += ratings[i]['nps']['passive'];
          totalDetractors += ratings[i]['nps']['detractors'];
          /* Obteniendo el porcentaje de estudiantes satisfechas con la experiencia de Laboratoria. */
          dontMeet += ratings[i]['student']['no-cumple'];
          meet += ratings[i]['student']['cumple'];
          exceed += ratings[i]['student']['supera'];
          /* Obteniendo la puntuación de los jedi */
          var jediScore = ratings[i]['jedi'];
          averageScoreForJedi += jediScore;
          /* Obteniendo la puntuación de los teachers*/
          var teacherScore = ratings[i]['teacher'];
          averageScoreForTeachers += teacherScore;
        }
        /* El Net Promoter Score (NPS) promedio de los sprints cursados */
        var totalScore = totalPromoters + totalPassive + totalDetractors;
        var promoters = (totalPromoters / totalScore) * 100;
        var passive = (totalPassive / totalScore) * 100;
        var detractors = (totalDetractors / totalScore) * 100;
        var nps = promoters - detractors;
        promotersContainer.textContent = promoters.toFixed(2) + ' %' + ' Promoters';
        passiveContainer.textContent = passive.toFixed(2) + ' %' + ' Passive';
        detractorsContainer.textContent = detractors.toFixed(2) + ' %' + ' Detractors';
        score5.textContent = nps.toFixed(2) + '%';
        /* Porcentaje de estudiantes satisfechas */
        var total = dontMeet + meet + exceed;
        var happyStudents = meet + exceed;
        var satisfiedStudents = (happyStudents * 100) / total;
        score8.textContent = satisfiedStudents;
        /* Puntuación promedio de los teachers */
        var averageScore2 = Math.round(averageScoreForTeachers / 4);
        score9.textContent = averageScore2;
        /* Puntuación promedio de los jedi */
        var averageScore = Math.round(averageScoreForJedi / 4);
        score10.textContent = averageScore;
      }
      if (select.value === 'ch-2016-2') {
        var sentence = select.value;
        var generation = sentence.slice(3, 9);
        office = Object.keys(data)[3];
        arrayOfGenerations = Object.values(data)[3];
        specificGeneration = arrayOfGenerations[generation];
        var ratings = specificGeneration['ratings'];
        /* Variables*/
        /* Para el punto 5 */
        var totalPromoters = 0;
        var totalPassive = 0;
        var totalDetractors = 0;
        /* Para el punto 8 */
        var dontMeet = 0;
        var meet = 0;
        var exceed = 0;
        /* Para el punto 9 */
        var averageScoreForTeachers = 0;
        /* Para el punto 10 */
        var averageScoreForJedi = 0;
        /* Recorriendo con un for el object ratings */
        for (var i = 0; i < ratings.length; i++) {
          /* Obteniendo el Net Promoter Score (NPS) promedio de los sprints cursados. */
          totalPromoters += ratings[i]['nps']['promoters'];
          totalPassive += ratings[i]['nps']['passive'];
          totalDetractors += ratings[i]['nps']['detractors'];
          /* Obteniendo el porcentaje de estudiantes satisfechas con la experiencia de Laboratoria. */
          dontMeet += ratings[i]['student']['no-cumple'];
          meet += ratings[i]['student']['cumple'];
          exceed += ratings[i]['student']['supera'];
          /* Obteniendo la puntuación de los jedi */
          var jediScore = ratings[i]['jedi'];
          averageScoreForJedi += jediScore;
          /* Obteniendo la puntuación de los teachers*/
          var teacherScore = ratings[i]['teacher'];
          averageScoreForTeachers += teacherScore;
        }
        /* El Net Promoter Score (NPS) promedio de los sprints cursados */
        var totalScore = totalPromoters + totalPassive + totalDetractors;
        var promoters = (totalPromoters / totalScore) * 100;
        var passive = (totalPassive / totalScore) * 100;
        var detractors = (totalDetractors / totalScore) * 100;
        var nps = promoters - detractors;
        promotersContainer.textContent = promoters.toFixed(2) + ' %' + ' Promoters';
        passiveContainer.textContent = passive.toFixed(2) + ' %' + ' Passive';
        detractorsContainer.textContent = detractors.toFixed(2) + ' %' + ' Detractors';
        score5.textContent = nps.toFixed(2) + '%';
        /* Porcentaje de estudiantes satisfechas */
        var total = dontMeet + meet + exceed;
        var happyStudents = meet + exceed;
        var satisfiedStudents = (happyStudents * 100) / total;
        score8.textContent = satisfiedStudents;
        /* Puntuación promedio de los teachers */
        var averageScore2 = Math.round(averageScoreForTeachers / 4);
        score9.textContent = averageScore2;
        /* Puntuación promedio de los jedi */
        var averageScore = Math.round(averageScoreForJedi / 4);
        score10.textContent = averageScore;
      }
      if (select.value === 'ch-2017-1') {
        var sentence = select.value;
        var generation = sentence.slice(3, 9);
        office = Object.keys(data)[3];
        arrayOfGenerations = Object.values(data)[3];
        specificGeneration = arrayOfGenerations[generation];
        var ratings = specificGeneration['ratings'];
        /* Variables*/
        /* Para el punto 5 */
        var totalPromoters = 0;
        var totalPassive = 0;
        var totalDetractors = 0;
        /* Para el punto 8 */
        var dontMeet = 0;
        var meet = 0;
        var exceed = 0;
        /* Para el punto 9 */
        var averageScoreForTeachers = 0;
        /* Para el punto 10 */
        var averageScoreForJedi = 0;
        /* Recorriendo con un for el object ratings */
        for (var i = 0; i < ratings.length; i++) {
          /* Obteniendo el Net Promoter Score (NPS) promedio de los sprints cursados. */
          totalPromoters += ratings[i]['nps']['promoters'];
          totalPassive += ratings[i]['nps']['passive'];
          totalDetractors += ratings[i]['nps']['detractors'];
          /* Obteniendo el porcentaje de estudiantes satisfechas con la experiencia de Laboratoria. */
          dontMeet += ratings[i]['student']['no-cumple'];
          meet += ratings[i]['student']['cumple'];
          exceed += ratings[i]['student']['supera'];
          /* Obteniendo la puntuación de los jedi */
          var jediScore = ratings[i]['jedi'];
          averageScoreForJedi += jediScore;
          /* Obteniendo la puntuación de los teachers*/
          var teacherScore = ratings[i]['teacher'];
          averageScoreForTeachers += teacherScore;
        }
        /* El Net Promoter Score (NPS) promedio de los sprints cursados */
        var totalScore = totalPromoters + totalPassive + totalDetractors;
        var promoters = (totalPromoters / totalScore) * 100;
        var passive = (totalPassive / totalScore) * 100;
        var detractors = (totalDetractors / totalScore) * 100;
        var nps = promoters - detractors;
        promotersContainer.textContent = promoters.toFixed(2) + ' %' + ' Promoters';
        passiveContainer.textContent = passive.toFixed(2) + ' %' + ' Passive';
        detractorsContainer.textContent = detractors.toFixed(2) + ' %' + ' Detractors';
        score5.textContent = nps.toFixed(2) + '%';
        /* Porcentaje de estudiantes satisfechas */
        var total = dontMeet + meet + exceed;
        var happyStudents = meet + exceed;
        var satisfiedStudents = (happyStudents * 100) / total;
        score8.textContent = satisfiedStudents;
        /* Puntuación promedio de los teachers */
        var averageScore2 = Math.round(averageScoreForTeachers / 4);
        score9.textContent = averageScore2;
        /* Puntuación promedio de los jedi */
        var averageScore = Math.round(averageScoreForJedi / 4);
        score10.textContent = averageScore;
      }
      if (select.value === 'ch-2017-2') {
        var sentence = select.value;
        var generation = sentence.slice(3, 9);
        office = Object.keys(data)[3];
        arrayOfGenerations = Object.values(data)[3];
        specificGeneration = arrayOfGenerations[generation];
        var ratings = specificGeneration['ratings'];
        /* Variables*/
        /* Para el punto 5 */
        var totalPromoters = 0;
        var totalPassive = 0;
        var totalDetractors = 0;
        /* Para el punto 8 */
        var dontMeet = 0;
        var meet = 0;
        var exceed = 0;
        /* Para el punto 9 */
        var averageScoreForTeachers = 0;
        /* Para el punto 10 */
        var averageScoreForJedi = 0;
        /* Recorriendo con un for el object ratings */
        for (var i = 0; i < ratings.length; i++) {
          /* Obteniendo el Net Promoter Score (NPS) promedio de los sprints cursados. */
          totalPromoters += ratings[i]['nps']['promoters'];
          totalPassive += ratings[i]['nps']['passive'];
          totalDetractors += ratings[i]['nps']['detractors'];
          /* Obteniendo el porcentaje de estudiantes satisfechas con la experiencia de Laboratoria. */
          dontMeet += ratings[i]['student']['no-cumple'];
          meet += ratings[i]['student']['cumple'];
          exceed += ratings[i]['student']['supera'];
          /* Obteniendo la puntuación de los jedi */
          var jediScore = ratings[i]['jedi'];
          averageScoreForJedi += jediScore;
          /* Obteniendo la puntuación de los teachers*/
          var teacherScore = ratings[i]['teacher'];
          averageScoreForTeachers += teacherScore;
        }
        /* El Net Promoter Score (NPS) promedio de los sprints cursados */
        var totalScore = totalPromoters + totalPassive + totalDetractors;
        var promoters = (totalPromoters / totalScore) * 100;
        var passive = (totalPassive / totalScore) * 100;
        var detractors = (totalDetractors / totalScore) * 100;
        var nps = promoters - detractors;
        promotersContainer.textContent = promoters.toFixed(2) + ' %' + ' Promoters';
        passiveContainer.textContent = passive.toFixed(2) + ' %' + ' Passive';
        detractorsContainer.textContent = detractors.toFixed(2) + ' %' + ' Detractors';
        score5.textContent = nps.toFixed(2) + '%';
        /* Porcentaje de estudiantes satisfechas */
        var total = dontMeet + meet + exceed;
        var happyStudents = meet + exceed;
        var satisfiedStudents = (happyStudents * 100) / total;
        score8.textContent = satisfiedStudents;
        /* Puntuación promedio de los teachers */
        var averageScore2 = Math.round(averageScoreForTeachers / 4);
        score9.textContent = averageScore2;
        /* Puntuación promedio de los jedi */
        var averageScore = Math.round(averageScoreForJedi / 4);
        score10.textContent = averageScore;
      }
    }
  });
});
