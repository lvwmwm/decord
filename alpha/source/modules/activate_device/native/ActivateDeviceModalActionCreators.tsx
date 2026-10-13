// Module ID: 14437
// Function ID: 14438
// Name: ActivateDeviceModalActionCreators
// Dependencies: [5934, 14438, 2000, 2]

// Module 14437 (ActivateDeviceModalActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import size from "module_2" /* 2 */;

const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
let obj = {
  showModal(userCode) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { userCode };
    obj.pushLazy(asyncRequire(14438, dependencyMap.paths), obj2, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default obj;
