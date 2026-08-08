// Module ID: 13199
// Function ID: 13200
// Dependencies: [1903, 4509, 13200, 1988, 2]

// Module 13199
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("AddFriendModalScene").fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    importDefault(4509).pushLazy(require(1988) /* asyncRequireImpl */(13200, dependencyMap.paths));
  },
  openAddFriendModal(arg0) {
    if (null != currentUser.getCurrentUser()) {
      let obj = importDefault(4509);
      obj = { sourceMetadata: null };
      obj[0] = arg0;
      obj.pushLazy(require(1988) /* asyncRequireImpl */(13200, dependencyMap.paths), obj);
    }
  }
};
