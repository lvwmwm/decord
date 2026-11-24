// Module ID: 15690
// Function ID: 15691
// Name: CertifiedDeviceActionCreators
// Dependencies: [572, 2]
// Exports: setCertifiedDevices

// Module 15690 (CertifiedDeviceActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/CertifiedDeviceActionCreators.tsx");

export function setCertifiedDevices(id, devices) {
  const obj = DispatcherDefault;
  const obj2 = { type: "CERTIFIED_DEVICES_SET", applicationId: id, devices };
  obj.dispatch(obj2);
}
