// Module ID: 13266
// Function ID: 13267
// Dependencies: [1922, 4549, 13267, 2007, 2]

// Module 13266
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("AddFriendModalScene").fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    importDefault(4549).pushLazy(require(2007) /* asyncRequireImpl */(13267, dependencyMap.paths));
  },
  openAddFriendModal(arg0) {
    if (null != currentUser.getCurrentUser()) {
      let obj = importDefault(4549);
      obj = { sourceMetadata: null };
      obj[0] = arg0;
      obj.pushLazy(require(2007) /* asyncRequireImpl */(13267, dependencyMap.paths), obj);
    }
  }
};
