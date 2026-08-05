// Module ID: 13099
// Function ID: 13100
// Dependencies: [4460, 13100, 1959, 2]

// Module 13099
const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    let obj = importDefault(4460);
    obj = { userCode };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(13100, dependencyMap.paths), obj, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    importDefault(4460).popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  }
};
