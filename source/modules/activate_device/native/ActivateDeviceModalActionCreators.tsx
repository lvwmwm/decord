// Module ID: 13883
// Function ID: 13884
// Dependencies: [4731, 13884, 2008, 2]

// Module 13883
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;

const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
const result = set.fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    let obj = _modDef4731;
    obj = { userCode };
    obj.pushLazy(asyncRequireImpl(13884, dependencyMap.paths), obj, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    _modDef4731.popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  }
};
