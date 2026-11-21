// Module ID: 15063
// Function ID: 15064
// Name: AddFriendModalActionCreators
// Dependencies: [1386, 6429, 15064, 2119, 2]

// Module 15063 (AddFriendModalActionCreators)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import UserStore from "UserStore" /* 1386 */;
import size from "module_2" /* 2 */;

let obj = {
  openAddFriendModalDeeplink() {
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(15064, dependencyMap.paths));
  },
  openAddFriendModal(sourceMetadata) {
    if (null != UserStore.getCurrentUser()) {
      const obj2 = { sourceMetadata };
      const obj = ModalActionCreatorsDefault;
      obj.pushLazy(asyncRequire(15064, dependencyMap.paths), obj2);
    }
  }
};
const result = size.fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default obj;
