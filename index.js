// object to store input data
const contactDetailsObject = {
  firstName: "",
  lastName: "",
  email: "",
  queryType: {
    generalQuery: false,
    supportQuery: false,
  },
  message: "",
  consent: false,
};

// variables for each element selected
const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");
const emailInput = document.getElementById("email");
const queryFieldsetInput = document.getElementById("query-group");
const queryContents = document.getElementsByName("query");
const textareaInput = document.getElementById("message");
const consentInput = document.getElementById("consent-input");
const button = document.querySelector(".btn");
const success = document.getElementById("success");

// variables for error message elements
const fNameError = document.getElementsByClassName("error-fname-message")[0];
const lNameError = document.getElementsByClassName("error-lname-message")[0];
const emailError = document.getElementsByClassName("error-email-message")[0];
const queryTypeError = document.getElementsByClassName(
  "error-query-message"
)[0];
const messageError = document.getElementsByClassName(
  "error-textarea-message"
)[0];
const consentError = document.getElementsByClassName(
  "error-consent-message"
)[0];

//functions to handle individual inputs
function handleFirstNameInput(e) {
  firstNameInput.style.borderColor = "#2B4246";
  fNameError.innerHTML = "";
  contactDetailsObject.firstName = e.target.value;
}

function handleLastNameInput(e) {
  lastNameInput.style.borderColor = "#2B4246";
  lNameError.innerHTML = "";
  contactDetailsObject.lastName = e.target.value;
}

function handleEmailInput(e) {
  emailInput.style.borderColor = "#2B4246";
  emailError.innerHTML = "";
  contactDetailsObject.email = e.target.value;
}

function handleQueryTypeInput(e) {
  queryTypeError.innerHTML = "";
  e.target.id === "general"
    ? (contactDetailsObject.queryType.generalQuery = true)
    : (contactDetailsObject.queryType.supportQuery = true);
}

function handleMessageInput(e) {
  textareaInput.style.borderColor = "#2B4246";
  messageError.innerHTML = "";
  contactDetailsObject.message = e.target.value;
}

function handleConsentCheck(e) {
  consentError.innerHTML = "";
  e.target.checked
    ? (contactDetailsObject.consent = true)
    : (contactDetailsObject.consent = false);
}

// functions to show error states and messages
function firstNameError(name) {
  if (!name) {
    firstNameInput.style.borderColor = "#d73c3c";
    fNameError.innerHTML = "This field is required";
    return false;
  }
  return true;
}

function lastNameError(name) {
  if (!name) {
    lastNameInput.style.borderColor = "#d73c3c";
    lNameError.innerHTML = "This field is required";
    return false;
  }
  return true;
}

function emailInputError(email) {
  if (!email) {
    emailInput.style.borderColor = "#d73c3c";
    emailError.innerHTML = "Please enter a valid email address";
    return false;
  }
  return true;
}

function queryError([general, support]) {
  if (general === false && support === false) {
    queryTypeError.innerHTML = "Please select a query type";
    return false;
  }
  return true;
}

function messageInputError(message) {
  if (!message) {
    textareaInput.style.borderColor = "#d73c3c";
    messageError.innerHTML = "This field is required";
    return false;
  }
  return true;
}

function consentInputError(input) {
  if (input === false) {
    consentError.innerHTML =
      "To submit this form, please consent to being contacted";
    return false;
  }
  return true;
}

// function to reset values
function reset() {
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  queryFieldsetInput;
  textareaInput.value = "";
  consentInput.checked = false;
  for(let i=0;i<queryContents.length;i++) {
    queryContents[i].checked=false
  }
  
}

// event listeners
firstNameInput.addEventListener("input", handleFirstNameInput);
lastNameInput.addEventListener("input", handleLastNameInput);
emailInput.addEventListener("input", handleEmailInput);
queryFieldsetInput.addEventListener("change", handleQueryTypeInput);
textareaInput.addEventListener("input", handleMessageInput);
consentInput.addEventListener("change", handleConsentCheck);

// button for submit event
button.addEventListener("click", (e) => {
  e.preventDefault()
  // const fNError = firstNameError(contactDetailsObject.firstName);
  // const lNError = lastNameError(contactDetailsObject.lastName);
  // const eError = emailInputError(contactDetailsObject.email);
  // const qError = queryError([
  //   contactDetailsObject.queryType.generalQuery,
  //   contactDetailsObject.queryType.supportQuery,
  // ]);
  // const mError = messageInputError(contactDetailsObject.message);
  // const cError = consentInputError(contactDetailsObject.consent);
  reset();
  success.style.display = "block";
});
