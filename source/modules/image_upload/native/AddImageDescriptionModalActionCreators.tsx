// Module ID: 9846
// Function ID: 9847
// Dependencies: [4157, 4395, 9847, 1959, 2]

// Module 9846
const ADD_IMAGE_DESCRIPTION_MODAL_KEY = "ADD_IMAGE_DESCRIPTION_MODAL_KEY";
const result = require("AddDescription").fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4157).hideActionSheet();
    const obj = importDefault(4157);
    importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(9847, dependencyMap.paths), closure_0, ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  },
  close() {
    importDefault(4395).popWithKey(ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  }
};
