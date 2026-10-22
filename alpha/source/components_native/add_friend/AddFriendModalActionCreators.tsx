// Module ID: 15042
// Function ID: 15043
// Name: AddFriendModalActionCreators
// Dependencies: [1392, 6657, 15043, 2002, 2]

// Module 15042 (AddFriendModalActionCreators)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import UserStore from "UserStore" /* 1392 */;
import size from "module_2" /* 2 */;

let obj = {
  openAddFriendModalDeeplink() {
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(15043, dependencyMap.paths));
  },
  openAddFriendModal(sourceMetadata) {
    if (null != UserStore.getCurrentUser()) {
      const obj2 = { sourceMetadata };
      const obj = ModalActionCreatorsDefault;
      obj.pushLazy(asyncRequire(15043, dependencyMap.paths), obj2);
    }
  }
};
const result = size.fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default obj;
