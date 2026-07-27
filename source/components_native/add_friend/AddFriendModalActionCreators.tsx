// Module ID: 12923
// Function ID: 100377
// Dependencies: [1850, 4338, 12924, 1935, 2]

// Module 12923
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("AddFriendModalScene").fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(12924, dependencyMap.paths));
  },
  openAddFriendModal(sourceMetadata) {
    if (null != currentUser.getCurrentUser()) {
      let obj = importDefault(4338);
      obj = { sourceMetadata };
      obj.pushLazy(require(1935) /* maybeLoadBundle */(12924, dependencyMap.paths), obj);
    }
  }
};
