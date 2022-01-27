function getContent() {
  chrome.runtime.sendMessage({ greeting: "start" }, function (response) {});
}

function DaedaDev() {
  document.getElementById("Daeda").innerHTML = "danielchrismoore@gmail.com";
  document.getElementById("Daeda").className = "Newbottom";
}

window.onload = function () {
  document.getElementById("save").addEventListener("click", saveForm);
  document.getElementById("image").addEventListener("click", getContent);
  document.getElementById("Daeda").addEventListener("click", DaedaDev);

  var animationWindow = document.getElementById("animation");
  var animationText = document.getElementById("popupText");

  function showWindow() {
    this.setTimeout(hideWindow, 1000);
    animationWindow.classList.toggle("popup");
    animationText.classList.toggle("popupText");
  }

  function hideWindow() {
    animationWindow.classList.toggle("popup");
    animationText.classList.toggle("popupText");
  }

  var Checking = document.getElementById("firstName").value;

  function saveForm() {
    //Actually Saving the Form LMAO-------------------
    if ((animationWindow.className = "hidden")) {
      showWindow();
    }

    //Set Elements ----------------------------------------------------------------
    var savedEmail = document.getElementById("email").value;

    chrome.storage.sync.set({ email: savedEmail }, function () {});

    var savedFirst = document.getElementById("firstName").value;

    chrome.storage.sync.set({ firstName: savedFirst }, function () {});

    var savedLast = document.getElementById("lastName").value;

    chrome.storage.sync.set({ lastName: savedLast }, function () {});

    var savedAddress = document.getElementById("Address").value;

    chrome.storage.sync.set({ Address: savedAddress }, function () {});

    var savedAddress2 = document.getElementById("Address2").value;

    chrome.storage.sync.set({ Address2: savedAddress2 }, function () {});

    var savedAddress3 = document.getElementById("Address3").value;

    chrome.storage.sync.set({ Address3: savedAddress3 }, function () {});

    var savedpostalCode = document.getElementById("postalCode").value;

    chrome.storage.sync.set({ postalCode: savedpostalCode }, function () {});

    var savedCity = document.getElementById("City").value;

    chrome.storage.sync.set({ City: savedCity }, function () {});

    var savedphoneNumber = document.getElementById("phoneNumber").value;

    chrome.storage.sync.set({ phoneNumber: savedphoneNumber }, function () {});

    //Shopify and Supreme Differences ---------------------------------------

    //For Shopify -------------------------------------------------------
    var Shopifycountry = document.getElementById("country").value;

    chrome.storage.sync.set({ country: Shopifycountry }, function () {});

    var Shopifystate = document.getElementById("state").value;

    chrome.storage.sync.set({ state: Shopifystate }, function () {});

    //For Supreme ---------------------------------------------------

    var savedcountryName = document.getElementById("country").value;

    chrome.storage.sync.set({ countryName: savedcountryName }, function () {});

    var savedstateName = document.getElementById("state").value;

    chrome.storage.sync.set({ stateName: savedstateName }, function () {});

    //Card information -----------------------------------------
    var savedcardType = document.getElementById("cardType").value;

    chrome.storage.sync.set({ cardType: savedcardType }, function () {});

    var savedcardName = document.getElementById("cardName").value;

    chrome.storage.sync.set({ cardName: savedcardName }, function () {});

    var savedcardNumber = document.getElementById("cardNumber").value;

    chrome.storage.sync.set({ cardNumber: savedcardNumber }, function () {});

    var savedexpirationMonth = document.getElementById("expirationMonth").value;

    chrome.storage.sync.set(
      { expirationMonth: savedexpirationMonth },
      function () {}
    );

    var savedexpirationYear = document.getElementById("expirationYear").value;

    chrome.storage.sync.set(
      { expirationYear: savedexpirationYear },
      function () {}
    );

    var savedcvv = document.getElementById("cvv").value;

    chrome.storage.sync.set({ cvv: savedcvv }, function () {});
  }

  //Get Elements -----------------------------------------------------------------
  chrome.storage.sync.get("email", function (data) {
    if (typeof data.email != "undefined") {
      document.getElementById("email").value = data.email;
    }
  });

  chrome.storage.sync.get("firstName", function (data) {
    if (typeof data.firstName != "undefined") {
      document.getElementById("firstName").value = data.firstName;
    }
  });

  chrome.storage.sync.get("lastName", function (data) {
    if (typeof data.lastName != "undefined") {
      document.getElementById("lastName").value = data.lastName;
    }
  });

  chrome.storage.sync.get("Address", function (data) {
    if (typeof data.Address != "undefined") {
      document.getElementById("Address").value = data.Address;
    }
  });

  chrome.storage.sync.get("Address2", function (data) {
    if (typeof data.Address2 != "undefined") {
      document.getElementById("Address2").value = data.Address2;
    }
  });

  chrome.storage.sync.get("Address3", function (data) {
    if (typeof data.Address3 != "undefined") {
      document.getElementById("Address3").value = data.Address3;
    }
  });

  chrome.storage.sync.get("postalCode", function (data) {
    if (typeof data.postalCode != "undefined") {
      document.getElementById("postalCode").value = data.postalCode;
    }
  });

  chrome.storage.sync.get("City", function (data) {
    if (typeof data.City != "undefined") {
      document.getElementById("City").value = data.City;
    }
  });

  chrome.storage.sync.get("country", function (data) {
    if (typeof data.country != "undefined") {
      document.getElementById("country").value = data.country;
    }
  });

  chrome.storage.sync.get("stateName", function (data) {
    if (typeof data.stateName != "undefined") {
      document.getElementById("state").value = data.stateName;
    }
  });

  chrome.storage.sync.get("phoneNumber", function (data) {
    if (typeof data.phoneNumber != "undefined") {
      document.getElementById("phoneNumber").value = data.phoneNumber;
    }
  });

  //Card information -----------------------------------------

  chrome.storage.sync.get("cardType", function (data) {
    if (typeof data.cardType != "undefined") {
      document.getElementById("cardType").value = data.cardType;
    }
  });

  chrome.storage.sync.get("cardName", function (data) {
    if (typeof data.cardName != "undefined") {
      document.getElementById("cardName").value = data.cardName;
    }
  });

  chrome.storage.sync.get("cardNumber", function (data) {
    if (typeof data.cardNumber != "undefined") {
      document.getElementById("cardNumber").value = data.cardNumber;
    }
  });

  chrome.storage.sync.get("expirationMonth", function (data) {
    if (typeof data.expirationMonth != "undefined") {
      document.getElementById("expirationMonth").value = data.expirationMonth;
    }
  });

  chrome.storage.sync.get("expirationYear", function (data) {
    if (typeof data.expirationYear != "undefined") {
      document.getElementById("expirationYear").value = data.expirationYear;
    }
  });

  chrome.storage.sync.get("cvv", function (data) {
    if (typeof data.cvv != "undefined") {
      document.getElementById("cvv").value = data.cvv;
    }
  });
};
