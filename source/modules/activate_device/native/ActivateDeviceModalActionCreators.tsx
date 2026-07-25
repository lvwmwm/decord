// Module ID: 12943
// Function ID: 100473
// Dependencies: [4338, 12944, 1935, 2]

// Module 12943
const result = require("maybeLoadBundle").fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    let obj = importDefault(4338);
    obj = { userCode };
    obj.pushLazy(require(1935) /* maybeLoadBundle */(12944, dependencyMap.paths), obj, "ACTIVATE_DEVICE_MODAL_KEY");
  },
  hideModal() {
    importDefault(4338).popWithKey("ACTIVATE_DEVICE_MODAL_KEY");
  }
};
