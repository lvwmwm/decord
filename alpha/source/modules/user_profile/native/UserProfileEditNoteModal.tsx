// Module ID: 13435
// Function ID: 13436
// Name: UserProfileEditNoteModal
// Dependencies: [32, 19, 21, 1484, 5030, 7331, 1365, 1115, 4823, 5927, 13436, 2]
// Exports: default

// Module 13435 (UserProfileEditNoteModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5030 */;
import UserProfileEditNote from "UserProfileEditNote" /* 13436 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditNoteModal.tsx");

export default function UserProfileEditNoteModal(arg0) {
  ({ userId: navigation, onSave: closure_1, onBack: dependencyMap } = arg0);
  _slicedToArray = undefined;
  function handleClose() {
    ModalActionCreatorsDefault.pop();
    if (dependencyMap != null) {
      dependencyMap();
    }
  }
  navigation = undefined;
  onSave = undefined;
  navigation = navigation(1484).useNavigation();
  [_slicedToArray, onSave] = handleClose.useState(false);
  const items = [navigation];
  const effect = handleClose.useEffect(() => navigation.addListener("transitionEnd", (data) => {
    if (!data.data.closing) {
      onSave(true);
    }
  }), items);
  let obj = navigation(1484);
  const tmp6 = jsx;
  const obj3 = { initialRouteName: "root", headerStatusBarHeight: 12, headerStyle: null, screens: null };
  const obj2 = navigation(1365);
  let obj4;
  if (!tmpResult.isAndroid()) {
    obj4 = { height: 56 };
  }
  obj3.headerStyle = obj4;
  const obj5 = { root: null };
  const obj6 = { title: null, headerTitle: null, headerLeft: null, render: null };
  let intl = tmp(1115).intl;
  obj6.title = intl.string(navigation(1115).t.sHHsOM);
  obj6.headerTitle = function headerTitle() {
    const obj = { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: null };
    const intl = navigation(1115).intl;
    obj.children = intl.string(navigation(1115).t.sHHsOM);
    return jsx(navigation(4823).Text, { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: null });
  };
  tmpResult = navigation(1365);
  obj6.headerLeft = navigation(5927).getHeaderCloseButton(handleClose);
  obj6.render = function render() {
    return jsx(UserProfileEditNote.default, { userId: navigation, onSave, onClose: handleClose, shouldFocusInput });
  };
  obj5.root = obj6;
  obj3.screens = obj5;
  return tmp6(navigation(7331).Navigator, obj3);
};
