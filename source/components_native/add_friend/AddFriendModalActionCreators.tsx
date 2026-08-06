// Module ID: 13115
// Function ID: 13116
// Dependencies: [1903, 4490, 13116, 1988, 2]

// Module 13115
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("AddFriendModalScene").fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    importDefault(4490).pushLazy(require(1988) /* asyncRequireImpl */(13116, dependencyMap.paths));
  },
  openAddFriendModal(arg0) {
    if (null != currentUser.getCurrentUser()) {
      let obj = importDefault(4490);
      obj = { sourceMetadata: null };
      obj[0] = arg0;
      obj.pushLazy(require(1988) /* asyncRequireImpl */(13116, dependencyMap.paths), obj);
    }
  }
};
