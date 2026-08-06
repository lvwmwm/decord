// Module ID: 10098
// Function ID: 10099
// Dependencies: [4253, 4490, 10099, 1988, 2]

// Module 10098
const ADD_IMAGE_DESCRIPTION_MODAL_KEY = "ADD_IMAGE_DESCRIPTION_MODAL_KEY";
const result = require("AddDescription").fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    importDefault(4253).hideActionSheet();
    const obj = importDefault(4253);
    importDefault(4490).pushLazy(require(1988) /* asyncRequireImpl */(10099, dependencyMap.paths), closure_0, ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  },
  close() {
    importDefault(4490).popWithKey(ADD_IMAGE_DESCRIPTION_MODAL_KEY);
  }
};
