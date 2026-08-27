// Module ID: 13526
// Function ID: 13527
// Dependencies: [4676, 13527, 2009, 2]

// Module 13526
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4676 from "module_4676" /* 4676 */;

const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
const result = set.fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    let obj = _modDef4676;
    obj = { userCode };
    obj.pushLazy(asyncRequireImpl(13527, dependencyMap.paths), obj, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    _modDef4676.popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  }
};
