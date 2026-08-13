// Module ID: 13288
// Function ID: 13289
// Dependencies: [4550, 13289, 2007, 2]

// Module 13288
const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    let obj = importDefault(4550);
    obj = { userCode };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(13289, dependencyMap.paths), obj, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    importDefault(4550).popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  }
};
