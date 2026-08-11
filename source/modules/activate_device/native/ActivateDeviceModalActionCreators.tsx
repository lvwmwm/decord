// Module ID: 13230
// Function ID: 13231
// Dependencies: [4509, 13231, 2007, 2]

// Module 13230
const ACTIVATE_DEVICE_MODAL_KEY = "ACTIVATE_DEVICE_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    let obj = importDefault(4509);
    obj = { userCode };
    obj.pushLazy(require(2007) /* asyncRequireImpl */(13231, dependencyMap.paths), obj, ACTIVATE_DEVICE_MODAL_KEY);
  },
  hideModal() {
    importDefault(4509).popWithKey(ACTIVATE_DEVICE_MODAL_KEY);
  }
};
