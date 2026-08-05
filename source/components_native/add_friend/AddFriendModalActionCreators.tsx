// Module ID: 13078
// Function ID: 13079
// Dependencies: [1874, 4460, 13079, 1959, 2]

// Module 13078
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("AddFriendModalScene").fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    importDefault(4460).pushLazy(require(1959) /* asyncRequireImpl */(13079, dependencyMap.paths));
  },
  openAddFriendModal(arg0) {
    if (null != currentUser.getCurrentUser()) {
      let obj = importDefault(4460);
      obj = { sourceMetadata: null };
      obj[0] = arg0;
      obj.pushLazy(require(1959) /* asyncRequireImpl */(13079, dependencyMap.paths), obj);
    }
  }
};
