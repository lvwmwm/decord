// Module ID: 12989
// Function ID: 12990
// Name: UserProfileEditNoteModal
// Dependencies: [32, 19, 21, 1498, 4731, 6940, 1235, 1233, 4477, 5579, 12990, 2]
// Exports: default

// Module 12989 (UserProfileEditNoteModal)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileEditNoteModal.tsx");

export default function UserProfileEditNoteModal(arg0) {
  ({ userId: navigation, onSave: closure_1, onBack: dependencyMap } = arg0);
  let callback;
  function handleClose() {
    let arr = callback(closure_1_2[4]);
    arr = arr.pop();
    if (dependencyMap != null) {
      dependencyMap();
    }
  }
  navigation = undefined;
  closure_1 = undefined;
  let obj = navigation(1498);
  navigation = obj.useNavigation();
  const tmp4 = callback(handleClose.useState(false), 2);
  closure_1 = tmp4[1];
  const items = [navigation];
  const effect = handleClose.useEffect(() => navigation.addListener("transitionEnd", (data) => {
    if (!data.data.closing) {
      callback(true);
    }
  }), items);
  callback = tmp4[0];
  obj1 = navigation(1235);
  obj = { initialRouteName: "root", headerStatusBarHeight: num, headerStyle: null, screens: null };
  let tmpResult = tmp(1235);
  obj = undefined;
  if (!tmpResult.isAndroid()) {
    obj = { height: 56 };
  }
  obj[2] = obj;
  obj1 = { root: null };
  const obj2 = { title: null, headerTitle: null, headerLeft: null, render: null };
  let intl = tmp(1233).intl;
  obj2[0] = intl.string(navigation(1233).t.sHHsOM);
  obj2[1] = function headerTitle() {
    const obj = { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: null };
    const intl = navigation(1233).intl;
    obj[2] = intl.string(navigation(1233).t.sHHsOM);
    return callback2(navigation(4477).Text, obj);
  };
  tmpResult = tmp(5579);
  obj2[2] = tmpResult.getHeaderCloseButton(handleClose);
  obj2[3] = function render() {
    return closure_1_5(navigation(closure_1_2[10]).default, { userId: navigation, onSave: closure_1, onClose: handleClose, shouldFocusInput: closure_3 });
  };
  obj1[0] = obj2;
  obj[3] = obj1;
  return jsx(navigation(6940).Navigator, obj);
};
