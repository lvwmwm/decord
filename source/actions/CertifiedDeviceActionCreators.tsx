// Module ID: 13283
// Function ID: 100871
// Name: setCertifiedDevices
// Dependencies: []
// Exports: setCertifiedDevices

// Module 13283 (setCertifiedDevices)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("actions/CertifiedDeviceActionCreators.tsx");

export const setCertifiedDevices = function setCertifiedDevices(id, devices) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "CERTIFIED_DEVICES_SET", applicationId: id, devices };
  obj.dispatch(obj);
};
