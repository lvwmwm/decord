// Module ID: 13301
// Function ID: 13302
// Dependencies: [4572, 13302, 2007, 2]

// Module 13301
const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    let obj = importDefault(4572);
    obj = { userCode };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(13302, dependencyMap.paths), obj, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    importDefault(4572).popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  }
};
