// Module ID: 13663
// Function ID: 13664
// Name: AddFriendModalActionCreators
// Dependencies: [1377, 5093, 13664, 1987, 2]

// Module 13663 (AddFriendModalActionCreators)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

let obj = {
  openAddFriendModalDeeplink() {
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(13664, dependencyMap.paths));
  },
  openAddFriendModal(sourceMetadata) {
    if (null != UserStore.getCurrentUser()) {
      const obj2 = { sourceMetadata };
      const obj = ModalActionCreatorsDefault;
      obj.pushLazy(asyncRequire(13664, dependencyMap.paths), obj2);
    }
  }
};
const result = size.fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default obj;
