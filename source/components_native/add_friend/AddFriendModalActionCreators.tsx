// Module ID: 13209
// Function ID: 13210
// Dependencies: [1922, 4509, 13210, 2007, 2]

// Module 13209
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("AddFriendModalScene").fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    importDefault(4509).pushLazy(require(2007) /* asyncRequireImpl */(13210, dependencyMap.paths));
  },
  openAddFriendModal(arg0) {
    if (null != currentUser.getCurrentUser()) {
      let obj = importDefault(4509);
      obj = { sourceMetadata: null };
      obj[0] = arg0;
      obj.pushLazy(require(2007) /* asyncRequireImpl */(13210, dependencyMap.paths), obj);
    }
  }
};
