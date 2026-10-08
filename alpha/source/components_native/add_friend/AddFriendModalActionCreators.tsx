// Module ID: 13903
// Function ID: 13904
// Name: AddFriendModalActionCreators
// Dependencies: [1389, 5940, 13904, 1999, 2]

// Module 13903 (AddFriendModalActionCreators)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import UserStore from "UserStore" /* 1389 */;
import size from "module_2" /* 2 */;

let obj = {
  openAddFriendModalDeeplink() {
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(13904, dependencyMap.paths));
  },
  openAddFriendModal(sourceMetadata) {
    if (null != UserStore.getCurrentUser()) {
      const obj2 = { sourceMetadata };
      const obj = ModalActionCreatorsDefault;
      obj.pushLazy(asyncRequire(13904, dependencyMap.paths), obj2);
    }
  }
};
const result = size.fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default obj;
