// Module ID: 13276
// Function ID: 100838
// Name: setCertifiedDevices
// Dependencies: [646840323, 899088385]
// Exports: setCertifiedDevices

// Module 13276 (setCertifiedDevices)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("actions/CertifiedDeviceActionCreators.tsx");

export const setCertifiedDevices = function setCertifiedDevices(id, devices) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "CERTIFIED_DEVICES_SET", applicationId: id, devices };
  obj.dispatch(obj);
};
