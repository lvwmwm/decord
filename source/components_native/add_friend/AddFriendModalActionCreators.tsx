// Module ID: 12859
// Function ID: 99922
// Dependencies: [1849, 4337, 12860, 1934, 2]

// Module 12859
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("AddFriendModalScene").fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(12860, dependencyMap.paths));
  },
  openAddFriendModal(sourceMetadata) {
    if (null != currentUser.getCurrentUser()) {
      let obj = importDefault(4337);
      obj = { sourceMetadata };
      obj.pushLazy(require(1934) /* maybeLoadBundle */(12860, dependencyMap.paths), obj);
    }
  }
};
