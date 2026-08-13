// Module ID: 13289
// Function ID: 13290
// Dependencies: [4550, 13290, 2007, 2]

// Module 13289
const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    let obj = importDefault(4550);
    obj = { userCode };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(13290, dependencyMap.paths), obj, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    importDefault(4550).popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  }
};
