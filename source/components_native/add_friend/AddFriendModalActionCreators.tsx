// Module ID: 13591
// Function ID: 13592
// Dependencies: [1922, 4723, 13592, 2009, 2]

// Module 13591
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4723 from "module_4723" /* 4723 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;

require = arg1;
const result = require("set").fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    _modDef4723.pushLazy(asyncRequireImpl(13592, dependencyMap.paths));
  },
  openAddFriendModal(arg0) {
    if (null != currentUser.getCurrentUser()) {
      let obj = _modDef4723;
      obj = { sourceMetadata: null };
      obj[0] = arg0;
      obj.pushLazy(asyncRequireImpl(13592, dependencyMap.paths), obj);
    }
  }
};
