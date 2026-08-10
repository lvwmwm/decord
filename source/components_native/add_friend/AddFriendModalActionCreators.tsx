// Module ID: 13201
// Function ID: 13202
// Dependencies: [1903, 4509, 13202, 1988, 2]

// Module 13201
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("AddFriendModalScene").fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    importDefault(4509).pushLazy(require(1988) /* asyncRequireImpl */(13202, dependencyMap.paths));
  },
  openAddFriendModal(arg0) {
    if (null != currentUser.getCurrentUser()) {
      let obj = importDefault(4509);
      obj = { sourceMetadata: null };
      obj[0] = arg0;
      obj.pushLazy(require(1988) /* asyncRequireImpl */(13202, dependencyMap.paths), obj);
    }
  }
};
