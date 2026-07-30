// Module ID: 13006
// Function ID: 13007
// Dependencies: [4395, 13007, 1959, 2]

// Module 13006
const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    let obj = importDefault(4395);
    obj = { userCode };
    obj.pushLazy(require(1959) /* asyncRequireImpl */(13007, dependencyMap.paths), obj, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    importDefault(4395).popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  }
};
