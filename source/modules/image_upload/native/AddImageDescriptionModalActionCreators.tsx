// Module ID: 9828
// Function ID: 76231
// Dependencies: [4098, 4337, 9829, 1934, 2]

// Module 9828
const result = require("AddDescription").fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx");

export default {
  open(merged) {
    importDefault(4098).hideActionSheet();
    const obj = importDefault(4098);
    importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(9829, dependencyMap.paths), merged, "ADD_IMAGE_DESCRIPTION_MODAL_KEY");
  },
  close() {
    importDefault(4337).popWithKey("ADD_IMAGE_DESCRIPTION_MODAL_KEY");
  }
};
