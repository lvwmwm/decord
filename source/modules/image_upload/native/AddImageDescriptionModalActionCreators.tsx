// Module ID: 10180
// Function ID: 10181
// Dependencies: [4271, 4509, 10181, 1988, 2]

// Module 10180
const ADD_IMAGE_DESCRIPTION_MODAL_KEY = "ADD_IMAGE_DESCRIPTION_MODAL_KEY";
const result = require("AddDescription").fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4271).hideActionSheet();
    const obj = importDefault(4271);
    importDefault(4509).pushLazy(require(1988) /* asyncRequireImpl */(10181, dependencyMap.paths), closure_0, ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  },
  close() {
    importDefault(4509).popWithKey(ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  }
};
