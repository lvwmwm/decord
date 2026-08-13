// Module ID: 13267
// Function ID: 13268
// Dependencies: [1922, 4550, 13268, 2007, 2]

// Module 13267
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("AddFriendModalScene").fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(13268, dependencyMap.paths));
  },
  openAddFriendModal(arg0) {
    if (null != currentUser.getCurrentUser()) {
      let obj = importDefault(4550);
      obj = { sourceMetadata: null };
      obj[0] = arg0;
      obj.pushLazy(require(2007) /* asyncRequireImpl */(13268, dependencyMap.paths), obj);
    }
  }
};
