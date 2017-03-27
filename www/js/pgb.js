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
            // display phone numbers
            for (var j=0; j<contacts[i].phoneNumbers.length; j++) {
                alert("Type: " + contacts[i].phoneNumbers[j].type + "\n" + 
                        "Value: "  + contacts[i].phoneNumbers[j].value + "\n" + 
                        "Preferred: "  + contacts[i].phoneNumbers[j].pref);
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
        filter = ["displayName","phoneNumbers"];
        navigator.contacts.find(filter, onSuccess, onError, options);
    }

