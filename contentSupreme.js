//Supreme autofill

console.log("Getting inputs from page");

var OrderName = document.getElementById("order_billing_name");
var orderFirstName;
var orderLastName;
var OrderEmail = document.getElementById("order_email");
var OrderTele = document.getElementById("order_tel");
var OrderAddress = document.getElementById("bo");
var OrderApt = document.getElementById("oba3");
var Address3 = document.getElementById("order_billing_address_3");
var OrderZip = document.getElementById("order_billing_zip");
var OrderCity = document.getElementById("order_billing_city");
var OrderState = document.getElementById("order_billing_state");
var OrderCountry = document.getElementById("order_billing_country");

var CardNumber = document.getElementById("rnsnckrn");
var CardNumberEU = document.getElementById("cnb");
var CardType = document.getElementById("credit_card_type");
var CardMonth = document.getElementById("credit_card_month");
var CardYear = document.getElementById("credit_card_year");
var CardCVV = document.getElementById("orcer");
var CardCVVEU = document.getElementById("vval");

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "start" ) {
            
            var newURL = "https://google.com"
            console.log("Got the Message!")

            chrome.tabs.create({ url: newURL });

        }
    }
);


chrome.storage.sync.get('email', function(data){

    OrderEmail.value = data.email;

    console.log(data.email)

});

chrome.storage.sync.get('firstName', function(data){

    orderFirstName = data.firstName;
    console.log(data.firstName)

    chrome.storage.sync.get('lastName', function(data){

        orderLastName = data.lastName;
        console.log(data.lastName)

        OrderName.value = (orderFirstName + " " + orderLastName);
    
    });

});

chrome.storage.sync.get('Address', function(data){

    OrderAddress.value = data.Address;
    console.log(data.Address)
});


chrome.storage.sync.get('Address2', function(data){

    OrderApt.value = data.Address2;
    console.log(data.Address2)
});

if(Address3){

    chrome.storage.sync.get('Address3', function(data){

        Address3.value = data.Address3;
        console.log(data.Address3)
    });

}

chrome.storage.sync.get('postalCode', function(data){

    OrderZip.value = data.postalCode;
    console.log(data.postalCode)
});

chrome.storage.sync.get('City', function(data){

    OrderCity.value = data.City;
    console.log(data.City)
});

//Where Shopify and Supreme Differ

chrome.storage.sync.get('countryName', function(data){

    OrderCountry.value = data.countryName;
    console.log(data.countryName)
});

chrome.storage.sync.get('stateName', function(data){

    OrderState.value = data.stateName;
    console.log(data.stateName)
});


if (CardNumberEU){

    chrome.storage.sync.get('cardNumber', function(data){

        CardNumberEU.value = data.cardNumber;
        console.log(data.cardNumber)
    });
    
}else{

    chrome.storage.sync.get('cardNumber', function(data){

        CardNumber.value = data.cardNumber;
        console.log(data.cardNumber)
    });
}

chrome.storage.sync.get('cardType', function(data){

    CardType.value = data.cardType;
    console.log(data.cardType)
});

chrome.storage.sync.get('expirationMonth', function(data){

    CardMonth.value = data.expirationMonth;
    console.log(data.expirationMonth)
});

chrome.storage.sync.get('expirationYear', function(data){

    CardYear.value = ("20" + data.expirationYear);
    console.log(data.expirationYear)
});

chrome.storage.sync.get('cvv', function(data){
    
    if(CardCVVEU != null){

        CardCVVEU.value = data.cvv;

    }else{

        CardCVV.value = data.cvv;

    }
    console.log(data.cvv)
});

chrome.storage.sync.get('phoneNumber', function(data){

    OrderTele.value = data.phoneNumber;
    console.log(data.phoneNumber)
});


console.log("content.js has executed")
