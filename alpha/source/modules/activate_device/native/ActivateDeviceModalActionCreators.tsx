// Module ID: 15001
// Function ID: 15002
// Name: ActivateDeviceModalActionCreators
// Dependencies: [6308, 15002, 2121, 2]

// Module 15001 (ActivateDeviceModalActionCreators)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import size from "module_2" /* 2 */;

const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
let obj = {
  showModal(userCode) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { userCode };
    obj.pushLazy(asyncRequire(15002, dependencyMap.paths), obj2, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default obj;
