// Module ID: 13397
// Function ID: 103027
// Name: setCertifiedDevices
// Dependencies: [686, 2]
// Exports: setCertifiedDevices

// Module 13397 (setCertifiedDevices)
const result = require("set").fileFinishedImporting("actions/CertifiedDeviceActionCreators.tsx");

export const setCertifiedDevices = function setCertifiedDevices(id, devices) {
  let obj = importDefault(686);
  obj = { type: "CERTIFIED_DEVICES_SET", applicationId: id, devices };
  obj.dispatch(obj);
};
