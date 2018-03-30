/*see.js*/

/**/

$(document).ready(function() {
  /*Inicializando o botão collapse*/
  $(".button-collapse").sideNav();

  /*atualizando a nota da resposta*/
  function updateGrade(answer, grade) {
    var testId = $("#test-id").val();

    $.ajax({
      url: "http://127.0.0.1:6543/quiz/answers/" + answer + "/",
      type: "PUT",
      data: {grade: grade},
      success: function(data) {
        console.log("Test's grade " + test + "updated in " + Date());
        window.location.replace("http://127.0.0.1:6543/classroom/quiz/tests/" + testId + "/answers/");
      }
    });
  }

  /*adicionando evento no botão de atualizar a nota*/
  $("#btnUpdateGrade").click(function(event) {
    var answer = $("#answer-id").val();
    var grade = $("#grade").val();
    updateGrade(answer, grade);
  });
});
