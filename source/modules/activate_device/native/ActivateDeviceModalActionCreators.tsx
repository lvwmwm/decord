// Module ID: 12759
// Function ID: 97834
// Dependencies: []

// Module 12759
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/activate_device/native/ActivateDeviceModalActionCreators.tsx");

export default {
  showModal(userCode) {
    let obj = importDefault(dependencyMap[0]);
    obj = { userCode };
    obj.pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), obj, "ACTIVATE_DEVICE_MODAL_KEY");
  },
  hideModal() {
    importDefault(dependencyMap[0]).popWithKey("ACTIVATE_DEVICE_MODAL_KEY");
  }
};
