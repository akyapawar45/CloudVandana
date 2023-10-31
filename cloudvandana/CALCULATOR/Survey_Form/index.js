function submitForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var suggestion = document.getElementById('profession').value;

    var firstTimeYes = document.getElementById('a').checked;
    var firstTimeNo = document.getElementById('b').checked;
    var suggestYes = document.getElementById('c').checked;
    var suggestNo = document.getElementById('d').checked;
    var satisfiedYes = document.getElementById('f').checked;
    var satisfiedNo = document.getElementById('e').checked;

    if (firstName == '' || lastName == '' || suggestion == '') {
        alert("Please fill out all the required fields.");
        return false;
    }

    // Check at least one option is selected for each group of checkboxes
    if (!(firstTimeYes || firstTimeNo)) {
        alert("Please answer whether this is your first time using our product or service.");
        return false;
    }

    if (!(suggestYes || suggestNo)) {
        alert("Please answer whether you would suggest our service to your friends and colleagues.");
        return false;
    }

    if (!(satisfiedYes || satisfiedNo)) {
        alert("Please answer whether you are satisfied with our company overall.");
        return false;
    }

    var feedback = {
        "First Name": firstName,
        "Last Name": lastName,
        "Please answer whether this is your first time using our product or service. ": firstTimeYes ? "Yes" : "No",
        "Please answer whether you would suggest our service to your friends and colleagues.": suggestYes ? "Yes" : "No",
        "Please answer whether you are satisfied with our company overall.": satisfiedYes ? "Yes" : "No",
        "Question": suggestion
    };

    alert("Survey Submitted: " + JSON.stringify(feedback));
    document.getElementById("surveyForm").reset();
    return true;
}
