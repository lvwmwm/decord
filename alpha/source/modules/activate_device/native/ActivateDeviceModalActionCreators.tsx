// Module ID: 14937
// Function ID: 14938
// Name: ActivateDeviceModalActionCreators
// Dependencies: [6623, 14938, 2002, 2]

// Module 14937 (ActivateDeviceModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6623 */;
import size from "module_2" /* 2 */;

const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
let obj = {
  showModal(userCode) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { userCode };
    obj.pushLazy(asyncRequire(14938, dependencyMap.paths), obj2, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default obj;
