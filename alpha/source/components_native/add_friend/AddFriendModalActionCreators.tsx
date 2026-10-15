// Module ID: 14745
// Function ID: 14746
// Name: AddFriendModalActionCreators
// Dependencies: [1390, 6150, 14746, 2000, 2]

// Module 14745 (AddFriendModalActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6150 */;
import UserStore from "UserStore" /* 1390 */;
import size from "module_2" /* 2 */;

let obj = {
  openAddFriendModalDeeplink() {
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(14746, dependencyMap.paths));
  },
  openAddFriendModal(sourceMetadata) {
    if (null != UserStore.getCurrentUser()) {
      const obj2 = { sourceMetadata };
      const obj = ModalActionCreatorsDefault;
      obj.pushLazy(asyncRequire(14746, dependencyMap.paths), obj2);
    }
  }
};
const result = size.fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default obj;
