// Module ID: 13830
// Function ID: 13831
// Dependencies: [1921, 4724, 13831, 2008, 2]

// Module 13830
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4724 from "module_4724" /* 4724 */;
import closure_3 from "mergeGuildAvatar" /* 1921 */;

require = arg1;
const result = require("set").fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    _modDef4724.pushLazy(asyncRequireImpl(13831, dependencyMap.paths));
  },
  openAddFriendModal(arg0) {
    if (null != currentUser.getCurrentUser()) {
      let obj = _modDef4724;
      obj = { sourceMetadata: null };
      obj[0] = arg0;
      obj.pushLazy(asyncRequireImpl(13831, dependencyMap.paths), obj);
    }
  }
};
