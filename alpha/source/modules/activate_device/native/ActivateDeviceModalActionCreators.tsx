// Module ID: 15957
// Function ID: 15958
// Name: ActivateDeviceModalActionCreators
// Dependencies: [6882, 15958, 2123, 2]

// Module 15957 (ActivateDeviceModalActionCreators)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6882 */;
import size from "module_2" /* 2 */;

const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
let obj = {
  showModal(userCode) {
    const obj = ModalActionCreatorsDefault;
    const obj2 = { userCode };
    obj.pushLazy(asyncRequire(15958, dependencyMap.paths), obj2, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  }
};
const result = size.fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default obj;
