function getContent() {
  chrome.runtime.sendMessage({ greeting: "start" }, function (response) {
    console.log("Message Has Been Sent");
  });
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

    chrome.storage.sync.set({ email: savedEmail }, function () {
      console.log(savedEmail);
    });

    var savedFirst = document.getElementById("firstName").value;

    chrome.storage.sync.set({ firstName: savedFirst }, function () {
      console.log(savedFirst);
    });

    var savedLast = document.getElementById("lastName").value;

    chrome.storage.sync.set({ lastName: savedLast }, function () {
      console.log(savedLast);
    });

    var savedAddress = document.getElementById("Address").value;

    chrome.storage.sync.set({ Address: savedAddress }, function () {
      console.log(savedAddress);
    });

    var savedAddress2 = document.getElementById("Address2").value;

    chrome.storage.sync.set({ Address2: savedAddress2 }, function () {
      console.log(savedAddress2);
    });

    var savedAddress3 = document.getElementById("Address3").value;

    chrome.storage.sync.set({ Address3: savedAddress3 }, function () {
      console.log(savedAddress3);
    });

    var savedpostalCode = document.getElementById("postalCode").value;

    chrome.storage.sync.set({ postalCode: savedpostalCode }, function () {
      console.log(savedpostalCode);
    });

    var savedCity = document.getElementById("City").value;

    chrome.storage.sync.set({ City: savedCity }, function () {
      console.log(savedCity);
    });

    var savedphoneNumber = document.getElementById("phoneNumber").value;

    chrome.storage.sync.set({ phoneNumber: savedphoneNumber }, function () {
      console.log(savedphoneNumber);
    });

    //Shopify and Supreme Differences ---------------------------------------

    //For Shopify -------------------------------------------------------
    var Shopifycountry = document.getElementById("country").value;

    chrome.storage.sync.set({ country: Shopifycountry }, function () {
      console.log(Shopifycountry);
    });

    var Shopifystate = document.getElementById("state").value;

    chrome.storage.sync.set({ state: Shopifystate }, function () {
      console.log(Shopifystate);
    });

    //For Supreme ---------------------------------------------------

    var savedcountryName = document.getElementById("country").value;

    chrome.storage.sync.set({ countryName: savedcountryName }, function () {
      console.log(savedcountryName);
    });

    var savedstateName = document.getElementById("state").value;

    chrome.storage.sync.set({ stateName: savedstateName }, function () {
      console.log(savedstateName);
    });

    //Card information -----------------------------------------
    var savedcardType = document.getElementById("cardType").value;

    chrome.storage.sync.set({ cardType: savedcardType }, function () {
      console.log(savedcardType);
    });

    var savedcardName = document.getElementById("cardName").value;

    chrome.storage.sync.set({ cardName: savedcardName }, function () {
      console.log(savedcardName);
    });

    var savedcardNumber = document.getElementById("cardNumber").value;

    chrome.storage.sync.set({ cardNumber: savedcardNumber }, function () {
      console.log(savedcardNumber);
    });

    var savedexpirationMonth = document.getElementById("expirationMonth").value;

    chrome.storage.sync.set(
      { expirationMonth: savedexpirationMonth },
      function () {
        console.log(savedexpirationMonth);
      }
    );

    var savedexpirationYear = document.getElementById("expirationYear").value;

    chrome.storage.sync.set(
      { expirationYear: savedexpirationYear },
      function () {
        console.log(savedexpirationYear);
      }
    );

    var savedcvv = document.getElementById("cvv").value;

    chrome.storage.sync.set({ cvv: savedcvv }, function () {
      console.log(savedcvv);
    });
  }

  console.log("_________________Fuck_________________");

  //Get Elements -----------------------------------------------------------------
  chrome.storage.sync.get("email", function (data) {
    if (typeof data.email != "undefined") {
      console.log(data.email);

      document.getElementById("email").value = data.email;
    }
  });

  chrome.storage.sync.get("firstName", function (data) {
    if (typeof data.firstName != "undefined") {
      console.log(data.firstName);

      document.getElementById("firstName").value = data.firstName;
    }
  });

  chrome.storage.sync.get("lastName", function (data) {
    if (typeof data.lastName != "undefined") {
      console.log(data.lastName);

      document.getElementById("lastName").value = data.lastName;
    }
  });

  chrome.storage.sync.get("Address", function (data) {
    if (typeof data.Address != "undefined") {
      console.log(data.Address);

      document.getElementById("Address").value = data.Address;
    }
  });

  chrome.storage.sync.get("Address2", function (data) {
    if (typeof data.Address2 != "undefined") {
      console.log(data.Address2);

      document.getElementById("Address2").value = data.Address2;
    }
  });

  chrome.storage.sync.get("Address3", function (data) {
    if (typeof data.Address3 != "undefined") {
      console.log(data.Address3);

      document.getElementById("Address3").value = data.Address3;
    }
  });

  chrome.storage.sync.get("postalCode", function (data) {
    if (typeof data.postalCode != "undefined") {
      console.log(data.postalCode);

      document.getElementById("postalCode").value = data.postalCode;
    }
  });

  chrome.storage.sync.get("City", function (data) {
    if (typeof data.City != "undefined") {
      console.log(data.City);

      document.getElementById("City").value = data.City;
    }
  });

  chrome.storage.sync.get("country", function (data) {
    if (typeof data.country != "undefined") {
      console.log(data.country);

      document.getElementById("country").value = data.country;
    }
  });

  chrome.storage.sync.get("stateName", function (data) {
    if (typeof data.stateName != "undefined") {
      console.log(data.stateName);

      document.getElementById("state").value = data.stateName;
    }
  });

  chrome.storage.sync.get("phoneNumber", function (data) {
    if (typeof data.phoneNumber != "undefined") {
      console.log(data.phoneNumber);

      document.getElementById("phoneNumber").value = data.phoneNumber;
    }
  });

  //Card information -----------------------------------------

  chrome.storage.sync.get("cardType", function (data) {
    if (typeof data.cardType != "undefined") {
      console.log(data.cardType);

      document.getElementById("cardType").value = data.cardType;
    }
  });

  chrome.storage.sync.get("cardName", function (data) {
    if (typeof data.cardName != "undefined") {
      console.log(data.cardName);

      document.getElementById("cardName").value = data.cardName;
    }
  });

  chrome.storage.sync.get("cardNumber", function (data) {
    if (typeof data.cardNumber != "undefined") {
      console.log(data.cardNumber);

      document.getElementById("cardNumber").value = data.cardNumber;
    }
  });

  chrome.storage.sync.get("expirationMonth", function (data) {
    if (typeof data.expirationMonth != "undefined") {
      console.log(data.expirationMonth);

      document.getElementById("expirationMonth").value = data.expirationMonth;
    }
  });

  chrome.storage.sync.get("expirationYear", function (data) {
    if (typeof data.expirationYear != "undefined") {
      console.log(data.expirationYear);

      document.getElementById("expirationYear").value = data.expirationYear;
    }
  });

  chrome.storage.sync.get("cvv", function (data) {
    if (typeof data.cvv != "undefined") {
      console.log(data.cvv);

      document.getElementById("cvv").value = data.cvv;
    }
  });
};
