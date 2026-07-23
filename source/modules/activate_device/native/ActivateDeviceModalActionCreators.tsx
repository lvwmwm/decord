// Module ID: 12880
// Function ID: 100023
// Dependencies: [4337, 12881, 1934, 2]

// Module 12880
const result = require("maybeLoadBundle").fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    let obj = importDefault(4337);
    obj = { userCode };
    obj.pushLazy(require(1934) /* maybeLoadBundle */(12881, dependencyMap.paths), obj, "ACTIVATE_DEVICE_MODAL_KEY");
  },
  hideModal() {
    importDefault(4337).popWithKey("ACTIVATE_DEVICE_MODAL_KEY");
  }
};
