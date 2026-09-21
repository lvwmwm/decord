// Module ID: 14753
// Function ID: 14754
// Name: CertifiedDeviceActionCreators
// Dependencies: [577, 2]
// Exports: setCertifiedDevices

// Module 14753 (CertifiedDeviceActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/CertifiedDeviceActionCreators.tsx");

export const setCertifiedDevices = function setCertifiedDevices(id, devices) {
  DispatcherDefault.dispatch({ type: "CERTIFIED_DEVICES_SET", applicationId: id, devices });
};
