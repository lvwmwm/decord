// Module ID: 12932
// Function ID: 100346
// Dependencies: [4337, 12933, 1934, 2]

// Module 12932
const result = require("maybeLoadBundle").fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    let obj = importDefault(4337);
    obj = { userCode };
    obj.pushLazy(require(1934) /* maybeLoadBundle */(12933, dependencyMap.paths), obj, "ACTIVATE_DEVICE_MODAL_KEY");
  },
  hideModal() {
    importDefault(4337).popWithKey("ACTIVATE_DEVICE_MODAL_KEY");
  }
};
