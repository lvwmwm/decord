// Module ID: 9843
// Function ID: 9844
// Dependencies: [4157, 4395, 9844, 1959, 2]

// Module 9843
const ADD_IMAGE_DESCRIPTION_MODAL_KEY = "ADD_IMAGE_DESCRIPTION_MODAL_KEY";
const result = require("AddDescription").fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4157).hideActionSheet();
    const obj = importDefault(4157);
    importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(9844, dependencyMap.paths), closure_0, ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  },
  close() {
    importDefault(4395).popWithKey(ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  }
};
