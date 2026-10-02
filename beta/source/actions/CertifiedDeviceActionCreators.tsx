// Module ID: 14033
// Function ID: 14034
// Name: CertifiedDeviceActionCreators
// Dependencies: [585, 2]
// Exports: setCertifiedDevices

// Module 14033 (CertifiedDeviceActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/CertifiedDeviceActionCreators.tsx");

export const setCertifiedDevices = function setCertifiedDevices(id, devices) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CERTIFIED_DEVICES_SET", applicationId: id, devices };
  obj.dispatch(obj2);
};
