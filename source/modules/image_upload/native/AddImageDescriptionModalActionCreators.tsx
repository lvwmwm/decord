// Module ID: 10441
// Function ID: 10442
// Dependencies: [4342, 5260, 10442, 2007, 2]

// Module 10441
const ADD_IMAGE_DESCRIPTION_MODAL_KEY = "ADD_IMAGE_DESCRIPTION_MODAL_KEY";
const result = require("AddDescription").fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4342).hideActionSheet();
    const obj = importDefault(4342);
    importDefault(5260).pushLazy(require(2007) /* asyncRequireImpl */(10442, dependencyMap.paths), closure_0, ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  },
  close() {
    importDefault(5260).popWithKey(ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  }
};
