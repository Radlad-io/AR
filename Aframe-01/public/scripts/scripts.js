
// Grabs Screen resolution
const media = {
    screen: {
        height: window.innerHeight,
        width: window.innerWidth
    }
}

// Constraints to request from webcamera
let constraints = { 
    audio: false, 
    video: { 
        width: { ideal: 1280 }, 
        height: { ideal: 720 } 
    }
};

// Gets connected device
function getConnectedDevices(type, callback) {
    navigator.mediaDevices.enumerateDevices()
        .then(devices => {
            const filtered = devices.filter(device => device.kind === type);
            callback(filtered);
        });
}

getConnectedDevices('videoinput', cameras => alert('Cameras found ' + cameras[0].deviceId))