// Module ID: 13938
// Function ID: 13939
// Name: setCertifiedDevices
// Dependencies: [709, 2]
// Exports: setCertifiedDevices

// Module 13938 (setCertifiedDevices)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("actions/CertifiedDeviceActionCreators.tsx");

export const setCertifiedDevices = function setCertifiedDevices(id, devices) {
  let obj = dispatcherDefault;
  obj = { type: "CERTIFIED_DEVICES_SET", applicationId: id, devices };
  obj.dispatch(obj);
};
