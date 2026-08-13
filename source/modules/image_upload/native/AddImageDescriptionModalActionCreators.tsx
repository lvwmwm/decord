// Module ID: 10227
// Function ID: 10228
// Dependencies: [4310, 4550, 10228, 2007, 2]

// Module 10227
const ADD_IMAGE_DESCRIPTION_MODAL_KEY = "ADD_IMAGE_DESCRIPTION_MODAL_KEY";
const result = require("AddDescription").fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4310).hideActionSheet();
    const obj = importDefault(4310);
    importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(10228, dependencyMap.paths), closure_0, ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  },
  close() {
    importDefault(4550).popWithKey(ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  }
};
