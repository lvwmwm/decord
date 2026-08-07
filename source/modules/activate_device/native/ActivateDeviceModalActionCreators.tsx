// Module ID: 13150
// Function ID: 13151
// Dependencies: [4507, 13151, 1988, 2]

// Module 13150
const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    let obj = importDefault(4507);
    obj = { userCode };
    obj.pushLazy(require(1988) /* asyncRequireImpl */(13151, dependencyMap.paths), obj, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    importDefault(4507).popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  }
};
