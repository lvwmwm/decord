// Module ID: 9824
// Function ID: 76150
// Dependencies: [4133, 4372, 9825, 1935, 2]

// Module 9824
const result = require("AddDescription").fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx");

export default {
  open(merged) {
    importDefault(4133).hideActionSheet();
    const obj = importDefault(4133);
    importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(9825, dependencyMap.paths), merged, "ADD_IMAGE_DESCRIPTION_MODAL_KEY");
  },
  close() {
    importDefault(4372).popWithKey("ADD_IMAGE_DESCRIPTION_MODAL_KEY");
  }
};
