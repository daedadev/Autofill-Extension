//JQuery
$(document).ready(function () {


    //Shopify autofill



    var ShoporderFirstName = document.getElementById("checkout_shipping_address_first_name");;
    var ShoporderLastName  = document.getElementById("checkout_shipping_address_last_name");;
    var ShopOrderEmail = document.getElementById("checkout_email");
    var ShopOrderTele = document.getElementById("checkout_shipping_address_phone");
    var ShopOrderAddress = document.getElementById("checkout_shipping_address_address1");
    var ShopOrderApt = document.getElementById("checkout_shipping_address_address2");
    var ShopOrderZip = document.getElementById("checkout_shipping_address_zip");
    var ShopOrderCity = document.getElementById("checkout_shipping_address_city");
    var ShopOrderState = document.getElementById("checkout_shipping_address_province");
    var ShopOrderCountry = document.getElementById("checkout_shipping_address_country");

    var ShopCardName = document.getElementById("name");
    var ShopCardNumber = document.getElementById("number");

    var ShopCardExpire = document.getElementById("expiry");

    var ShopCardCVV = document.getElementById("verification_value");

    chrome.storage.sync.get('email', function(data){

        ShopOrderEmail.value = data.email;

    });

    chrome.storage.sync.get('firstName', function(data){

        ShoporderFirstName.value = data.firstName;

    });

    chrome.storage.sync.get('lastName', function(data){

        ShoporderLastName.value = data.lastName;

    });


    chrome.storage.sync.get('Address', function(data){

        ShopOrderAddress.value = data.Address;
    });


    chrome.storage.sync.get('Address2', function(data){

        ShopOrderApt.value = data.Address2;
    });

    chrome.storage.sync.get('postalCode', function(data){

        ShopOrderZip.value = data.postalCode;
    });

    chrome.storage.sync.get('City', function(data){

        ShopOrderCity.value = data.City;
    });

    chrome.storage.sync.get('phoneNumber', function(data){

        ShopOrderTele.value = data.phoneNumber;
    });

    //Where supreme and shopify differ --------------------------------

    chrome.storage.sync.get('country', function(data){

        ShopOrderCountry.getAttribute('data-value') = data.country;
    });

    chrome.storage.sync.get('state', function(data){

        ShopOrderState.value = data.state;
    }); 


    //Card Information ---------------------------------------------

    chrome.storage.sync.get('cardName', function(data){

        ShopCardName.value = data.cardName;

    });

    

    chrome.storage.sync.get('cardNumber', function(data){

        ShopCardNumber.value = data.cardNumber;


    });

    chrome.storage.sync.get('cvv', function(data){

        ShopCardCVV.value = data.cvv;

    });


    chrome.storage.sync.get('expirationMonth', function(data){

        var theMonth = data.expirationMonth;

        chrome.storage.sync.get('expirationYear', function(data){

            var theYear = data.expirationYear;



            ShopCardExpire.value = (theMonth + "/" +  theYear);
    
        });
    });


});
