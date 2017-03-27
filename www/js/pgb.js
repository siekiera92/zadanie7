function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}

function jaInfo() {

	info =  'Piotr Siekierski a reszty nie musisz znać';

	navigator.notification.alert(info);
	
}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    alert('Connection type: ' + states[networkState]);
}

// display the address information for all contacts
function onSuccess(contacts) {
    for (var i=0; i<contacts.length; i++) {
        for (var j=0; j<contacts[i].addresses.length; j++) {
            alert("Pref: " + contacts[i].addresses[j].pref + "\n" +
                    "Type: " + contacts[i].addresses[j].type + "\n" +
                    "Formatted: " + contacts[i].addresses[j].formatted + "\n" + 
                    "Street Address: "  + contacts[i].addresses[j].streetAddress + "\n" + 
                    "Locality: "  + contacts[i].addresses[j].locality + "\n" + 
                    "Region: "  + contacts[i].addresses[j].region + "\n" + 
                    "Postal Code: "  + contacts[i].addresses[j].postalCode + "\n" + 
                    "Country: "  + contacts[i].addresses[j].country);
        }
    }
};

function onError(contactError) {
    alert('onError!');
};

// find all contacts
function onDeviceReady() {
        // find all contacts
        var options = new ContactFindOptions();
        options.filter=""; 
        var filter = ["displayName","addresses"];
        navigator.contacts.find(filter, onSuccess, onError, options);
    }

