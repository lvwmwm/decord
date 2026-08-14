// Module ID: 10241
// Function ID: 10242
// Dependencies: [4310, 4572, 10242, 2007, 2]

// Module 10241
const ADD_IMAGE_DESCRIPTION_MODAL_KEY = "ADD_IMAGE_DESCRIPTION_MODAL_KEY";
const result = require("AddDescription").fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4310).hideActionSheet();
    const obj = importDefault(4310);
    importDefault(4572).pushLazy(require(2007) /* asyncRequireImpl */(10242, dependencyMap.paths), closure_0, ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  },
  close() {
    importDefault(4572).popWithKey(ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  }
};
