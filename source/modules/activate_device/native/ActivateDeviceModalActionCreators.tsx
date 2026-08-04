// Module ID: 13127
// Function ID: 13128
// Dependencies: [4490, 13128, 1959, 2]

// Module 13127
const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    let obj = importDefault(4490);
    obj = { userCode };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(13128, dependencyMap.paths), obj, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    importDefault(4490).popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  }
};
