// Module ID: 12922
// Function ID: 100372
// Dependencies: [1850, 4338, 12923, 1935, 2]

// Module 12922
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("AddFriendModalScene").fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(12923, dependencyMap.paths));
  },
  openAddFriendModal(sourceMetadata) {
    if (null != currentUser.getCurrentUser()) {
      let obj = importDefault(4338);
      obj = { sourceMetadata };
      obj.pushLazy(require(1935) /* maybeLoadBundle */(12923, dependencyMap.paths), obj);
    }
  }
};
