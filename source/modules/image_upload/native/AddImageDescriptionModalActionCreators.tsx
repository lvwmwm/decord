// Module ID: 10067
// Function ID: 10068
// Dependencies: [4223, 4460, 10068, 1959, 2]

// Module 10067
const ADD_IMAGE_DESCRIPTION_MODAL_KEY = "ADD_IMAGE_DESCRIPTION_MODAL_KEY";
const result = require("AddDescription").fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4223).hideActionSheet();
    const obj = importDefault(4223);
    importDefault(4460).pushLazy(require(1959) /* asyncRequireImpl */(10068, dependencyMap.paths), closure_0, ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  },
  close() {
    importDefault(4460).popWithKey(ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  }
};
