/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

window.addEventListener('load', function(event) {
  var menu = document.getElementsByClassName('fa-bars')[0];
  var script = document.getElementsByTagName('script')[0];
  // Creando evento para que se cree un modal
  menu.addEventListener('click', function showModal(event) {
    // console.log(event.target); event.target = div
    // console.log(event.currentTarget);
    var modal = document.createElement('div'); // event.currentTarget = .fa-bars (ícono de las 3 barras paralelas)
    var body = document.body;
    modal.classList.add('modal');
    body.appendChild(modal);
    body.insertBefore(modal, script);
    var navbar = document.getElementById('hamburguer-menu');
    modal.appendChild(navbar);
    navbar.classList.remove('display-none');
    navbar.classList.add('display-block');
    // Creando evento para que desparezca el modal
    modal.addEventListener('click', function(event) {
      // console.log(event.target); event.target = div
      event.target.parentElement.removeChild(event.target); // div.parentElement = body
      body.appendChild(navbar);
      navbar.classList.remove('display-block');
      navbar.classList.add('display-none');
      body.insertBefore(navbar, script);
    });
  });
  var select = document.getElementById('navbar');
  var hseSelect = document.getElementById('hse-select-element');
  var hseNumberOfStudentsContainer = document.getElementById('hse-number-of-students-container');
  var sedes = Object.keys(data);
  var generations = Object.values(data);
  var score5 = document.getElementById('nps');
  var promotersContainer = document.getElementById('promoters');
  var passiveContainer = document.getElementById('passive');
  var detractorsContainer = document.getElementById('detractors');
  var score1 = document.getElementById('total-students-container');
  var score2 = document.getElementById('percent-no-students-container');
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
        var arrayOfStudents = specificGeneration['students'];
        var activeStudents = 0;
        var noActiveStudents = 0;
        for (var i = 0; i < 15; i++) {
          if (arrayOfStudents[i]['active'] === true) {
            activeStudents += 1;
          } else {
            noActiveStudents += 1;
          }
        }
        var totalStudents = activeStudents + noActiveStudents;
        score1.textContent = activeStudents;
        var percentNoActiveStudents = (noActiveStudents / totalStudents) * 100;
        score2.textContent = percentNoActiveStudents.toFixed(2) + '%';
        /* Evento click al select del HSE */
        hseSelect.addEventListener('click', function() {
          var yourOption; // Sprint 1, Sprint 2, ...
          var hsePassingStudents = 0;
          var noHsePassingStudents = 0;
          for (var i = 0; i < 15; i++) {
            if (arrayOfStudents[i]['active'] === true) {
              var sprint = arrayOfStudents[i]['sprint'];
              // Cantidad de estudiantes que superan HSE por sprint
              for (var i = 0; i < sprint.length; i++) {
                if (select.value === 'hse-sprint-1') {
                  if (sprint[i]['number'] === 1) {
                    if (840 <= sprint[i]['score']['hse'] <= 1200) {
                      hsePassingStudents += 1;
                    } else {
                      noHsePassingStudents += 1;
                    }
                  }
                  hseNumberOfStudentsContainer.textContent = hsePassingStudents;
                }
                if (select.value === 'hse-sprint-2') {
                  if (sprint[i]['number'] === 2) {
                    if (840 <= sprint[i]['score']['hse'] <= 1200) {
                      hsePassingStudents += 1;
                    } else {
                      noHsePassingStudents += 1;
                    }
                  }
                  hseNumberOfStudentsContainer.textContent = hsePassingStudents;
                }
                if (select.value === 'hse-sprint-3') {
                  if (sprint[i]['number'] === 3) {
                    if (840 <= sprint[i]['score']['hse'] <= 1200) {
                      hsePassingStudents += 1;
                    } else {
                      noHsePassingStudents += 1;
                    }
                  }
                  hseNumberOfStudentsContainer.textContent = hsePassingStudents;
                }
                if (select.value === 'hse-sprint-4') {
                  if (sprint[i]['number'] === 4) {
                    if (840 <= sprint[i]['score']['hse'] <= 1200) {
                      hsePassingStudents += 1;
                    } else {
                      noHsePassingStudents += 1;
                    }
                  }
                  hseNumberOfStudentsContainer.textContent = hsePassingStudents;
                }
              }
            }
          }
        });
        /* Los puntos indicados en el LMS relacionados con el rating */
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
        score8.textContent = satisfiedStudents.toFixed(2);
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
        var arrayOfStudents = specificGeneration['students'];
        var activeStudents = 0;
        var noActiveStudents = 0;
        for (var i = 0; i < 15; i++) {
          if (arrayOfStudents[i]['active'] === true) {
            activeStudents += 1;
          } else {
            noActiveStudents += 1;
          }
        }
        var totalStudents = activeStudents + noActiveStudents;
        score1.textContent = activeStudents;
        var percentNoActiveStudents = (noActiveStudents / totalStudents) * 100;
        score2.textContent = percentNoActiveStudents.toFixed(2) + '%';
        /* Los puntos indicados en el LMS relacionados con el rating */
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
        score8.textContent = satisfiedStudents.toFixed(2);
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
        var arrayOfStudents = specificGeneration['students'];
        var activeStudents = 0;
        var noActiveStudents = 0;
        for (var i = 0; i < 24; i++) {
          if (arrayOfStudents[i]['active'] === true) {
            activeStudents += 1;
          } else {
            noActiveStudents += 1;
          }
        }
        var totalStudents = activeStudents + noActiveStudents;
        score1.textContent = activeStudents;
        var percentNoActiveStudents = (noActiveStudents / totalStudents) * 100;
        score2.textContent = percentNoActiveStudents.toFixed(2) + '%';
        /* Los puntos indicados en el LMS relacionados con el rating */
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
        score8.textContent = satisfiedStudents.toFixed(2);
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
        var arrayOfStudents = specificGeneration['students'];
        var activeStudents = 0;
        var noActiveStudents = 0;
        for (var i = 0; i < 46; i++) {
          if (arrayOfStudents[i]['active'] === true) {
            activeStudents += 1;
          } else {
            noActiveStudents += 1;
          }
        }
        var totalStudents = activeStudents + noActiveStudents;
        score1.textContent = activeStudents;
        var percentNoActiveStudents = (noActiveStudents / totalStudents) * 100;
        score2.textContent = percentNoActiveStudents.toFixed(2) + '%';
        /* Los puntos indicados en el LMS relacionados con el rating */
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
        var arrayOfStudents = specificGeneration['students'];
        var activeStudents = 0;
        var noActiveStudents = 0;
        for (var i = 0; i < 35; i++) {
          if (arrayOfStudents[i]['active'] === true) {
            activeStudents += 1;
          } else {
            noActiveStudents += 1;
          }
        }
        var totalStudents = activeStudents + noActiveStudents;
        score1.textContent = activeStudents;
        var percentNoActiveStudents = (noActiveStudents / totalStudents) * 100;
        score2.textContent = percentNoActiveStudents.toFixed(2) + '%';
        /* Los puntos indicados en el LMS relacionados con el rating */
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
        score8.textContent = satisfiedStudents.toFixed(2);
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
        var arrayOfStudents = specificGeneration['students'];
        var activeStudents = 0;
        var noActiveStudents = 0;
        for (var i = 0; i < 17; i++) {
          if (arrayOfStudents[i]['active'] === true) {
            activeStudents += 1;
          } else {
            noActiveStudents += 1;
          }
        }
        var totalStudents = activeStudents + noActiveStudents;
        score1.textContent = activeStudents;
        var percentNoActiveStudents = (noActiveStudents / totalStudents) * 100;
        score2.textContent = percentNoActiveStudents.toFixed(2) + '%';
        /* Los puntos indicados en el LMS relacionados con el rating */
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
        score8.textContent = satisfiedStudents.toFixed(2);
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
        var arrayOfStudents = specificGeneration['students'];
        var activeStudents = 0;
        var noActiveStudents = 0;
        for (var i = 0; i < 14; i++) {
          if (arrayOfStudents[i]['active'] === true) {
            activeStudents += 1;
          } else {
            noActiveStudents += 1;
          }
        }
        var totalStudents = activeStudents + noActiveStudents;
        score1.textContent = activeStudents;
        var percentNoActiveStudents = (noActiveStudents / totalStudents) * 100;
        score2.textContent = percentNoActiveStudents.toFixed(2) + '%';
        /* Los puntos indicados en el LMS relacionados con el rating */
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
        score8.textContent = satisfiedStudents.toFixed(2);
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
        var arrayOfStudents = specificGeneration['students'];
        var activeStudents = 0;
        var noActiveStudents = 0;
        for (var i = 0; i < 11; i++) {
          if (arrayOfStudents[i]['active'] === true) {
            activeStudents += 1;
          } else {
            noActiveStudents += 1;
          }
        }
        var totalStudents = activeStudents + noActiveStudents;
        score1.textContent = activeStudents;
        var percentNoActiveStudents = (noActiveStudents / totalStudents) * 100;
        score2.textContent = percentNoActiveStudents.toFixed(2) + '%';
        /* Los puntos indicados en el LMS relacionados con el rating */
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
        score8.textContent = satisfiedStudents.toFixed(2);
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
        var arrayOfStudents = specificGeneration['students'];
        var activeStudents = 0;
        var noActiveStudents = 0;
        for (var i = 0; i < 23; i++) {
          if (arrayOfStudents[i]['active'] === true) {
            activeStudents += 1;
          } else {
            noActiveStudents += 1;
          }
        }
        var totalStudents = activeStudents + noActiveStudents;
        score1.textContent = activeStudents;
        var percentNoActiveStudents = (noActiveStudents / totalStudents) * 100;
        score2.textContent = percentNoActiveStudents.toFixed(2) + '%';
        /* Los puntos indicados en el LMS relacionados con el rating */
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
        score8.textContent = satisfiedStudents.toFixed(2);
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
        var arrayOfStudents = specificGeneration['students'];
        var activeStudents = 0;
        var noActiveStudents = 0;
        for (var i = 0; i < 61; i++) {
          if (arrayOfStudents[i]['active'] === true) {
            activeStudents += 1;
          } else {
            noActiveStudents += 1;
          }
        }
        var totalStudents = activeStudents + noActiveStudents;
        score1.textContent = activeStudents;
        var percentNoActiveStudents = (noActiveStudents / totalStudents) * 100;
        score2.textContent = percentNoActiveStudents.toFixed(2) + '%';
        /* Los puntos indicados en el LMS relacionados con el rating */
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
        score8.textContent = satisfiedStudents.toFixed(2);
        /* Puntuación promedio de los teachers */
        var averageScore2 = Math.round(averageScoreForTeachers / 4);
        score9.textContent = averageScore2;
        /* Puntuación promedio de los jedi */
        var averageScore = Math.round(averageScoreForJedi / 4);
        score10.textContent = averageScore;
      }
    }
  });
  /*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
/* console.log(data); */
console.log(data);

window.addEventListener('load', function(event) {

/* evento para botón de especialización javascript */
  var javascriptButton = document.getElementById('javascript-button');
  javascriptButton.addEventListener('click', function(event) {
  alert('es click');
  button.classList.add('desactive');
 })

  /* evento para botón de especialización uxdesing */
  var uxdesignButton = document.getElementById('uxdesign-button');
  uxdesignButton.addEventListener('click', function(event) {
    alert('es click en uxdesing');
  });


  /* evento para botón de especialización front end designer */
  var frontEndDesignerButton = document.getElementById('front-end-designer-button');
  frontEndDesignerButton.addEventListener('click', function(event) {
    alert('es click en front end desing');

  var students= [];
  var studentsData = [];
  var baseTech = 1800;
  var baseHse = 1200;
  var acumTech = 0;
  var acumHse = 0;
  var ind = 0;

  /* Sedes - Array */
  var sedes = Object.keys(data);
  var sedesArray=[];
  var studentGeneratiosArray=[];
    for ( var i=0 ; i< 4 ; i++) {
          sedesArray[i] = sedes[i];
    }

    /* Generaciones- Array */
    var generations = Object.values(data);

    /* sede */
    var generationsArray= Object.keys(generations[0]); /* AQP-GEN-POS 0 , hacer for para 2 */

    /*encuentro lista de alumnos*/
    var generationsValues = Object.values(generations[0]);
    var generationsValuesStudents= generationsValues[0];
    var generationsValuesStudentsData = Object.values(generationsValuesStudents);
    var gen= generationsValuesStudentsData[0];

    /* extrayendo alumnas de sede arequipa */
   for( var a= 0; a<15 ; a++){
       studentsData = Object.values(gen[a]); /*extrae alumnos*/
       students[[a,0]] = sedesArray[0];   /*asigna sede arequipa */
       students[[a,1]] = generationsArray[0]; /*asigna generation 1 */
       students[[a,2]] = studentsData[0]; /*asigna nombre*/
       students[[a,3]] = studentsData[1]; /*asigna foto*/
       students[[a,4]] = studentsData[2]; /*asigna active*/
       students[[a,5]] = studentsData[3]; /*asigna score objeto*/
       ind = 0;

     /* extrayendo puntaje de sprints */
     for (var b= 0; b <4 ; b++) {
        var tech =Object.values(studentsData[3]);
        var tec = Object.values(tech[b]);
        /*console.log('array tec' , tec); imprime notas alumnas sprint */
        var tePoint= Object.values(tec[1]);

        /* recorre las notas por print 4 por alumna */
        /*sprint 1*/
        ind = 0;
        for (var c=0; c<2 ;c++) {
          students[[a,6+b+ind]] =((tePoint[c]/1800)*100).toFixed(1) ; /*tech*/
          students[[a,7+b]] =((tePoint[c]/1200)*100).toFixed(1) ; /*hse*/
          ind = ind+1;
        }
      }
    }

    var acumTech = 0;
    var acumHse = 0;

    /* para recorrer el array students */
    for (var z= 0 ; z<15 ; z++){
      /* ubico área para crear elementos */
      var visualizationSection = document.getElementById('visualization');

       /* creaación de elementos divs */

       /* photo del estudiante */
       var divStudent = document.createElement('div'); /* div con id-student */
       var imgPhoto = document.createElement('img');  /* img con propiedad src*/
       imgPhoto.setAttribute('src',students[[z,3]]);
       imgPhoto.classList.add('photo-standart');
       visualizationSection.appendChild(divStudent);
       divStudent.appendChild(imgPhoto);

       /*datos de estudiante */
       var divDate = document.createElement('div'); /* div con id-date */
       var divDateStudent = document.createElement('div'); /* div con id-name */
       var divName = document.createElement('div'); /* div con id-date */
       divName.classList.add('big-letter');
       var divEspecializationStudent = document.createElement('div'); /* div con id-name */
       divStudent.appendChild(divDate);
       divDate.appendChild(divName);
       divDate.textContent = students[[z,2]];
       divDate.appendChild(divEspecializationStudent);

    };
  });
});
});
