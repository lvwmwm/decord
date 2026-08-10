// Module ID: 13739
// Function ID: 13740
// Name: setCertifiedDevices
// Dependencies: [709, 2]
// Exports: setCertifiedDevices

// Module 13739 (setCertifiedDevices)
const result = require("set").fileFinishedImporting("actions/CertifiedDeviceActionCreators.tsx");

export const setCertifiedDevices = function setCertifiedDevices(id, devices) {
  let obj = importDefault(709);
  obj = { type: "CERTIFIED_DEVICES_SET", applicationId: id, devices };
  obj.dispatch(obj);
};
