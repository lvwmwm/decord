// Module ID: 12988
// Function ID: 100651
// Dependencies: [4372, 12989, 1935, 2]

// Module 12988
const result = require("maybeLoadBundle").fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    let obj = importDefault(4372);
    obj = { userCode };
    obj.pushLazy(require(1935) /* maybeLoadBundle */(12989, dependencyMap.paths), obj, "ACTIVATE_DEVICE_MODAL_KEY");
  },
  hideModal() {
    importDefault(4372).popWithKey("ACTIVATE_DEVICE_MODAL_KEY");
  }
};
