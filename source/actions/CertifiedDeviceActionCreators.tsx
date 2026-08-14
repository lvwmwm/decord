// Module ID: 13808
// Function ID: 13809
// Name: setCertifiedDevices
// Dependencies: [709, 2]
// Exports: setCertifiedDevices

// Module 13808 (setCertifiedDevices)
const result = require("set").fileFinishedImporting("actions/CertifiedDeviceActionCreators.tsx");

export const setCertifiedDevices = function setCertifiedDevices(id, devices) {
  let obj = importDefault(709);
  obj = { type: "CERTIFIED_DEVICES_SET", applicationId: id, devices };
  obj.dispatch(obj);
};
