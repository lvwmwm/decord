// Module ID: 13312
// Function ID: 13313
// Dependencies: [1922, 5260, 13313, 2007, 2]

// Module 13312
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("AddFriendModalScene").fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    importDefault(5260).pushLazy(require(2007) /* asyncRequireImpl */(13313, dependencyMap.paths));
  },
  openAddFriendModal(arg0) {
    if (null != currentUser.getCurrentUser()) {
      let obj = importDefault(5260);
      obj = { sourceMetadata: null };
      obj[0] = arg0;
      obj.pushLazy(require(2007) /* asyncRequireImpl */(13313, dependencyMap.paths), obj);
    }
  }
};
