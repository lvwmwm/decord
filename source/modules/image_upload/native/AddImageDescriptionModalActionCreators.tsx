// Module ID: 10186
// Function ID: 10187
// Dependencies: [4271, 4509, 10187, 2007, 2]

// Module 10186
const ADD_IMAGE_DESCRIPTION_MODAL_KEY = "ADD_IMAGE_DESCRIPTION_MODAL_KEY";
const result = require("AddDescription").fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4271).hideActionSheet();
    const obj = importDefault(4271);
    importDefault(4509).pushLazy(require(2007) /* asyncRequireImpl */(10187, dependencyMap.paths), closure_0, ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  },
  close() {
    importDefault(4509).popWithKey(ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  }
};
