// Module ID: 13129
// Function ID: 13130
// Dependencies: [1903, 4507, 13130, 1988, 2]

// Module 13129
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("AddFriendModalScene").fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    importDefault(4507).pushLazy(require(1988) /* asyncRequireImpl */(13130, dependencyMap.paths));
  },
  openAddFriendModal(arg0) {
    if (null != currentUser.getCurrentUser()) {
      let obj = importDefault(4507);
      obj = { sourceMetadata: null };
      obj[0] = arg0;
      obj.pushLazy(require(1988) /* asyncRequireImpl */(13130, dependencyMap.paths), obj);
    }
  }
};
