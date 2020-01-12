

var connection = new autobahn.Connection({ url: 'ws://127.0.0.1:26429/', realm: 'testRealm' });

var messages = [];

var tempMessages = [];

var batchId = "161EE85C-94A9-461B-8522-2667B4AC0F35";
var batchCountOfCompletedJobs = 0;
var batchCountOfSubmittedJobs = 0;

connection.onopen = function (session) {


    function onevent(args) {

        $('#dvContainer').append(args[0]);
        $('#dvContainer').animate({ scrollTop: $('#dvContainer').height() });
    }

    function onUpdateEvent(args) {

        messages.push(args[0]);

        $('#dvContainer1').append(args[0]);
        $('#dvContainer1').animate({ scrollTop: $('#dvContainer1').height() });
    }



    session.subscribe('UserHasAllSystemEvents', onevent);

    session.subscribe('FWUpdateNotification', onUpdateEvent);

};

connection.open();


var camera1 = { id: 1, updateStatus: "offline", name: "Cam1", model: "ProWatch1", manufacturer: "Honeywell" };
var camera2 = { id: 2, updateStatus: "offline", name: "Cam1", model: "ProWatch1", manufacturer: "Honeywell" };
var camera3 = { id: 3, updateStatus: "offline", name: "Cam1", model: "ProWatch1", manufacturer: "Honeywell" };
var camera4 = { id: 4, updateStatus: "offline", name: "Cam1", model: "ProWatch1", manufacturer: "Honeywell" };
var camera5 = { id: 5, updateStatus: "offline", name: "Cam1", model: "ProWatch1", manufacturer: "Honeywell" };
var camera6 = { id: 6, updateStatus: "offline", name: "Cam1", model: "ProWatch1", manufacturer: "Honeywell" };
var camera7 = { id: 7, updateStatus: "offline", name: "Cam1", model: "ProWatch1", manufacturer: "Honeywell" };
var camera8 = { id: 8, updateStatus: "offline", name: "Cam1", model: "ProWatch1", manufacturer: "Honeywell" };
var camera9 = { id: 9, updateStatus: "offline", name: "Cam1", model: "ProWatch1", manufacturer: "Honeywell" };
var camera10 = { id: 10, updateStatus: "offline", name: "Cam1", model: "ProWatch1", manufacturer: "Honeywell" };
var camera11 = { id: 11, updateStatus: "offline", name: "Cam1", model: "ProWatch1", manufacturer: "Honeywell" };
var camera12 = { id: 12, updateStatus: "offline", name: "Cam1", model: "ProWatch1", manufacturer: "Honeywell" };
var camera13 = { id: 13, updateStatus: "offline", name: "Cam1", model: "ProWatch1", manufacturer: "Honeywell" };
var camera14 = { id: 14, updateStatus: "offline", name: "Cam1", model: "ProWatch1", manufacturer: "Honeywell" };
var camera15 = { id: 15, updateStatus: "offline", name: "Cam1", model: "ProWatch1", manufacturer: "Honeywell" };


var cameraList = [];
cameraList.push(camera1);
cameraList.push(camera2);
cameraList.push(camera3);
cameraList.push(camera4);
cameraList.push(camera5);
cameraList.push(camera6);
cameraList.push(camera7);
cameraList.push(camera8);
cameraList.push(camera9);
cameraList.push(camera10);
cameraList.push(camera11);
cameraList.push(camera12);
cameraList.push(camera13);
cameraList.push(camera14);
cameraList.push(camera15);


var interval = setInterval(function () {

    tempMessages = [];

    messages.forEach(function () {

        var obj = JSON.parse(messages.shift());

        if (tempMessages.some(m => m.CameraUniqueNumber === obj.CameraUniqueNumber)) {

            let tempObj = tempMessages.find(x => x.CameraUniqueNumber === obj.CameraUniqueNumber);
            let index = tempMessages.indexOf(tempObj);
            tempMessages.fill(tempObj.JobStatus = obj.JobStatus, index, index++);
        }
        else
            tempMessages.push(obj);
    });

    tempMessages.forEach(function (tempMessage) {

        if (tempMessage.BatchId === batchId) {
            batchCountOfCompletedJobs = tempMessage.BatchCountOfCompletedJobs;
            batchCountOfSubmittedJobs = tempMessage.BatchCountOfSubmittedJobs;
        }

        cameraList.forEach(function (camera) {

            if (camera.id === tempMessage.CameraUniqueNumber) {
                camera.updateStatus = tempMessage.JobStatus;
                console.log(camera.id + " " + camera.updateStatus);
            }
        })
    })

}, 10000);




































































//var self = this;
//self.id = ko.observable();
//self.updateStatus = ko.observable();
//self.name = ko.observable();
//self.model = ko.observable();
//self.manufacturer = ko.observable();
//self.type = ko.observable();
//self.ipAddress = ko.observable();
//self.location = ko.observable();
//self.latestVersion = ko.observable();
//self.currentVersion = ko.observable();
//self.updateStatus = ko.observable();
//self.date = ko.observable();
//self.updatingVersion = ko.observable();
//self.IsSelected = ko.observable();
//self.latestVersionInfo = ko.observable()
//self.isCameraOnline = ko.observable();
//self.isSelectCameraEnabled = ko.observable();
//self.isSelectCameraVisible = ko.observable();


//(function () {
//    $.ajax({
//        url: "https://hibacl127026/ISP.UI.Shell/plugin/GetToken",
//        cache: false,
//        crossDomain: true,
//        dataType: "json",
//        success: function (html) {
//            debugger;
//            $("#results").append(html);
//        }
//    });

//    // jQuery cross domain ajax
//    $.get("https://hibacl127026/ISP.UI.Shell/plugin/GetToken").done(function (data) {
//        console.log(data);
//    });

//})();



