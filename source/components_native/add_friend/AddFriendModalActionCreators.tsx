// Module ID: 13280
// Function ID: 13281
// Dependencies: [1922, 4572, 13281, 2007, 2]

// Module 13280
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("AddFriendModalScene").fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    importDefault(4572).pushLazy(require(2007) /* asyncRequireImpl */(13281, dependencyMap.paths));
  },
  openAddFriendModal(arg0) {
    if (null != currentUser.getCurrentUser()) {
      let obj = importDefault(4572);
      obj = { sourceMetadata: null };
      obj[0] = arg0;
      obj.pushLazy(require(2007) /* asyncRequireImpl */(13281, dependencyMap.paths), obj);
    }
  }
};
