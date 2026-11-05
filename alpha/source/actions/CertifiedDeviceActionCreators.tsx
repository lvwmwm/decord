// Module ID: 16573
// Function ID: 16574
// Name: CertifiedDeviceActionCreators
// Dependencies: [572, 2]
// Exports: setCertifiedDevices

// Module 16573 (CertifiedDeviceActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/CertifiedDeviceActionCreators.tsx");

export function setCertifiedDevices(id, devices) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CERTIFIED_DEVICES_SET", applicationId: id, devices };
  obj.dispatch(obj2);
}
