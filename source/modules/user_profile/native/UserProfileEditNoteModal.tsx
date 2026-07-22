// Module ID: 11968
// Function ID: 92505
// Name: UserProfileEditNoteModal
// Dependencies: []
// Exports: default

// Module 11968 (UserProfileEditNoteModal)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/user_profile/native/UserProfileEditNoteModal.tsx");

export default function UserProfileEditNoteModal(arg0) {
  ({ userId: closure_0, onSave: closure_1, onBack: closure_2 } = arg0);
  function handleClose() {
    let arr = callback2(callback3[2]);
    arr = arr.pop();
    if (null != callback3) {
      callback3();
    }
  }
  const jsx = handleClose;
  let obj = { initialRouteName: "root" };
  let obj1 = arg1(dependencyMap[4]);
  obj.headerStatusBarHeight = 12;
  let tmp2;
  if (!obj3.isAndroid()) {
    obj = { height: 56 };
    tmp2 = obj;
  }
  obj.headerStyle = tmp2;
  obj = {};
  obj1 = {};
  const intl = arg1(dependencyMap[5]).intl;
  obj1.title = intl.string(arg1(dependencyMap[5]).t.sHHsOM);
  obj1.headerTitle = function headerTitle() {
    const obj = { tooltipText: 800, contain: 32 };
    const intl = callback(closure_2[5]).intl;
    obj.children = intl.string(callback(closure_2[5]).t.sHHsOM);
    return handleClose(callback(closure_2[6]).Text, obj);
  };
  const obj3 = arg1(dependencyMap[4]);
  const tmp = jsx;
  obj1.headerLeft = arg1(dependencyMap[7]).getHeaderCloseButton(handleClose);
  obj1.render = function render() {
    return handleClose(callback(closure_2[8]).default, { userId: callback, onSave: closure_1, onClose: handleClose });
  };
  obj.root = obj1;
  obj.screens = obj;
  return tmp(arg1(dependencyMap[3]).Navigator, obj);
};
