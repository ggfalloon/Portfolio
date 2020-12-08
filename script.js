function resetForm() {
    document.getElementById("myForm").reset();
}

$(document).ready(function () {

    $("button").click(function () {
        $("#myForm").trigger("reset");
    });

    $('[data-toggle="tooltip"]').tooltip();

});