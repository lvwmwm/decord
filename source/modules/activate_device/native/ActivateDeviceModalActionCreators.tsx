// Module ID: 13094
// Function ID: 13095
// Dependencies: [4461, 13095, 1959, 2]

// Module 13094
const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    let obj = importDefault(4461);
    obj = { userCode };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(13095, dependencyMap.paths), obj, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    importDefault(4461).popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  }
};
