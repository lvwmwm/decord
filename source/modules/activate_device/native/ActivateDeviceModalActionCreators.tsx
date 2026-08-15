// Module ID: 13333
// Function ID: 13334
// Dependencies: [5260, 13334, 2007, 2]

// Module 13333
const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    let obj = importDefault(5260);
    obj = { userCode };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(13334, dependencyMap.paths), obj, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    importDefault(5260).popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  }
};
