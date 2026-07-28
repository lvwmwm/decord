// Module ID: 12967
// Function ID: 100550
// Dependencies: [1850, 4372, 12968, 1935, 2]

// Module 12967
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("AddFriendModalScene").fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(12968, dependencyMap.paths));
  },
  openAddFriendModal(sourceMetadata) {
    if (null != currentUser.getCurrentUser()) {
      let obj = importDefault(4372);
      obj = { sourceMetadata };
      obj.pushLazy(require(1935) /* maybeLoadBundle */(12968, dependencyMap.paths), obj);
    }
  }
};
