
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
        width: { min: 1280, ideal: 1920, },
        height: { min: 720, ideal: 1080, },
        facingMode: "environment"
    }
};

// Gets connected device
var video = document.querySelector('video');
function getConnectedDevices(type, callback) {
    // navigator.mediaDevices.enumerateDevices()
    //     .then(devices => {
    //         const filtered = devices.filter(device => device.kind === type);
    //         callback(filtered);
    //     });
    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(stream) {
        var videoTracks = stream.getVideoTracks();
        console.log('Got stream with constraints:', constraints);
        console.log(videoTracks[0]);
        stream.onremovetrack = function() {
            console.log('Stream ended');
        };

        window.stream = stream; // make variable available to browser console

        console.log(videoTracks[0].getCapabilities())
        video.srcObject = stream;
    })
}

getConnectedDevices()