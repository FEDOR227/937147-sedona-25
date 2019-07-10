var btnSearchForm = document.querySelector(".lead-form__start");
var showForm = document.querySelector("form.lead-form__popup");

var map = document.querySelector(".map-navigation");
var dateCome = showForm.querySelector("[name=date-come]");
var dateOut = showForm.querySelector("[name=date-out]");
var totalAdult = showForm.querySelector("[name=adult]");
var totalChild = showForm.querySelector("[name=children]");

var formSortHotel = document.querySelector(".search-form-hotel");

var isStorageSupport = true;
var storage1 = "";
var storage2 = "";
var storage3 = "";
var storage4 = "";

try {
   storage1  = localStorage.getItem("dateCome");
   storage2  = localStorage.getItem("dateOut");
   storage3  = localStorage.getItem("totalAdult");
   storage4  = localStorage.getItem("totalChild");
 } catch (err) {
   isStorageSupport = false;
 }

showForm.classList.add("form-close");

btnSearchForm.addEventListener("click", function (evt) {
    evt.preventDefault();
    showForm.classList.toggle("form-show");
    if (storage1) {
        dateCome.value = storage1;
        dateOut.focus();
    } else {
        dateCome.focus();
    };
     if (storage2) {
        dateOut.value = storage2;
        totalAdult.focus();
    } else {
        dateOut.focus();
    };
     if (storage3) {
        totalAdult.value = storage3;
        totalChild.focus();
    } else {
        totalAdult.focus();
    };
     if (storage4) {
        totalChild.value = storage3;
    } else {
        totalChild.focus();
    };

  });


showForm.addEventListener("submit", function(evt){

    if (!dateCome.value || !dateOut.value || !totalAdult.value || !totalChild.value) {
        evt.preventDefault();
        showForm.classList.remove("enter-error");
        showForm.offsetWidth = showForm.offsetWidth;
        showForm.classList.add("enter-error");
    } else {
        localStorage.setItem("dateCome", dateCome.value);
        localStorage.setItem("dateOut", dateOut.value);
        localStorage.setItem("totalAdult", totalAdult.value);
        localStorage.setItem("totalChild", totalChild.value);
        showForm.classList.remove("enter-error");
    }

});


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (showForm.classList.contains("form-close")) {
        showForm.classList.remove("form-show");
        showForm.classList.remove("enter-error");
      }
    }
  });






formSortHotel.addEventListener("submit", function(evt){
    evt.preventDefault();
});
