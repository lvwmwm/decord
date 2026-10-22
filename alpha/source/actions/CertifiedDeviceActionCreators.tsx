// Module ID: 15676
// Function ID: 15677
// Name: CertifiedDeviceActionCreators
// Dependencies: [584, 2]
// Exports: setCertifiedDevices

// Module 15676 (CertifiedDeviceActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/CertifiedDeviceActionCreators.tsx");

export const setCertifiedDevices = function setCertifiedDevices(id, devices) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CERTIFIED_DEVICES_SET", applicationId: id, devices };
  obj.dispatch(obj2);
};
