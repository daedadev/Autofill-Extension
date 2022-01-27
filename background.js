chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){

    if(request.greeting === "start"){

        chrome.tabs.query({active: true}, function(tabs){

            if(tabs.length === 0){

                sendResponse({});
                return;

            }

            chrome.tabs.create({url : 'https://www.google.com/'});

        })

    }

})