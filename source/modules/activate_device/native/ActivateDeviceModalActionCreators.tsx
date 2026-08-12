// Module ID: 13287
// Function ID: 13288
// Dependencies: [4549, 13288, 2007, 2]

// Module 13287
const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    let obj = importDefault(4549);
    obj = { userCode };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(13288, dependencyMap.paths), obj, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    importDefault(4549).popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  }
};
