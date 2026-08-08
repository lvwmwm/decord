// Module ID: 13220
// Function ID: 13221
// Dependencies: [4509, 13221, 1988, 2]

// Module 13220
const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    let obj = importDefault(4509);
    obj = { userCode };
    obj.pushLazy(require(1988) /* asyncRequireImpl */(13221, dependencyMap.paths), obj, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    importDefault(4509).popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  }
};
