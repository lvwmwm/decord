// Module ID: 9784
// Function ID: 76020
// Dependencies: [4099, 4338, 9785, 1935, 2]

// Module 9784
const result = require("AddDescription").fileFinishedImporting("modules/image_upload/native/AddImageDescriptionModalActionCreators.tsx");

export default {
  open(merged) {
    importDefault(4099).hideActionSheet();
    const obj = importDefault(4099);
    importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(9785, dependencyMap.paths), merged, "ADD_IMAGE_DESCRIPTION_MODAL_KEY");
  },
  close() {
    importDefault(4338).popWithKey("ADD_IMAGE_DESCRIPTION_MODAL_KEY");
  }
};
