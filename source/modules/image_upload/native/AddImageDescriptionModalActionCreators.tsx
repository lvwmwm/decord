// Module ID: 10114
// Function ID: 10115
// Dependencies: [4270, 4507, 10115, 1988, 2]

// Module 10114
const ADD_IMAGE_DESCRIPTION_MODAL_KEY = "ADD_IMAGE_DESCRIPTION_MODAL_KEY";
const result = require("AddDescription").fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4270).hideActionSheet();
    const obj = importDefault(4270);
    importDefault(4507).pushLazy(require(1988) /* asyncRequireImpl */(10115, dependencyMap.paths), closure_0, ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  },
  close() {
    importDefault(4507).popWithKey(ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  }
};
