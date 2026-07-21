// Module ID: 12736
// Function ID: 97711
// Dependencies: []

// Module 12736
let closure_3 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("components_native/add_friend/AddFriendModalActionCreators.tsx");

export default {
  openAddFriendModalDeeplink() {
    importDefault(dependencyMap[1]).pushLazy(arg1(dependencyMap[3])(dependencyMap[2], dependencyMap.paths));
  },
  openAddFriendModal(sourceMetadata) {
    if (null != currentUser.getCurrentUser()) {
      let obj = importDefault(dependencyMap[1]);
      obj = { sourceMetadata };
      obj.pushLazy(arg1(dependencyMap[3])(dependencyMap[2], dependencyMap.paths), obj);
    }
  }
};
