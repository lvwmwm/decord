// Module ID: 12990
// Function ID: 12991
// Dependencies: [1874, 4395, 12991, 1959, 2]

// Module 12990
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("AddFriendModalScene").fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(12991, dependencyMap.paths));
  },
  openAddFriendModal(arg0) {
    if (null != currentUser.getCurrentUser()) {
      let obj = importDefault(4395);
      obj = { sourceMetadata: null };
      obj[0] = arg0;
      obj.pushLazy(require(1959) /* asyncRequireImpl */(12991, dependencyMap.paths), obj);
    }
  }
};
