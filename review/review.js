//Form

window.onload = setForm;

function setForm() {
    document.forms[0].onsubmit = function() {
        if (this.checkValidity()) alert("Thank you for your review!");
        location.reload(true);
        return false;
    }
}