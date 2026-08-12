// Module ID: 10227
// Function ID: 10228
// Dependencies: [4312, 4549, 10228, 2007, 2]

// Module 10227
const ADD_IMAGE_DESCRIPTION_MODAL_KEY = "ADD_IMAGE_DESCRIPTION_MODAL_KEY";
const result = require("AddDescription").fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4312).hideActionSheet();
    const obj = importDefault(4312);
    importDefault(4549).pushLazy(require(2007) /* asyncRequireImpl */(10228, dependencyMap.paths), closure_0, ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  },
  close() {
    importDefault(4549).popWithKey(ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  }
};
