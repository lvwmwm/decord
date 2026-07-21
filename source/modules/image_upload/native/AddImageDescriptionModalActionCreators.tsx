// Module ID: 9820
// Function ID: 76177
// Dependencies: []

// Module 9820
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx");

export default {
  open(closure_2) {
    importDefault(dependencyMap[0]).hideActionSheet();
    const obj = importDefault(dependencyMap[0]);
    importDefault(dependencyMap[1]).pushLazy(require(dependencyMap[3])(dependencyMap[2], dependencyMap.paths), closure_2, "ADD_IMAGE_DESCRIPTION_MODAL_KEY");
  },
  close() {
    importDefault(dependencyMap[1]).popWithKey("ADD_IMAGE_DESCRIPTION_MODAL_KEY");
  }
};
