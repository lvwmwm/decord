// Module ID: 12006
// Function ID: 92794
// Name: UserProfileEditNoteModal
// Dependencies: [31, 33, 4337, 5517, 478, 1212, 4126, 5087, 12007, 2]
// Exports: default

// Module 12006 (UserProfileEditNoteModal)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("module_4337").fileFinishedImporting("modules/user_profile/native/UserProfileEditNoteModal.tsx");

export default function UserProfileEditNoteModal(arg0) {
  let dependencyMap;
  let importDefault;
  let require;
  ({ userId: require, onSave: importDefault, onBack: dependencyMap } = arg0);
  function handleClose() {
    let arr = outer1_1(outer1_2[2]);
    arr = arr.pop();
    if (null != callback) {
      callback();
    }
  }
  let obj = { initialRouteName: "root" };
  let obj1 = require(478) /* isWindows */;
  obj.headerStatusBarHeight = 12;
  let tmp2;
  if (!obj3.isAndroid()) {
    obj = { height: 56 };
    tmp2 = obj;
  }
  obj.headerStyle = tmp2;
  obj = {};
  obj1 = {};
  let intl = require(1212) /* getSystemLocale */.intl;
  obj1.title = intl.string(require(1212) /* getSystemLocale */.t.sHHsOM);
  obj1.headerTitle = function headerTitle() {
    const obj = { variant: "redesign/heading-18/bold", accessibilityRole: "header" };
    const intl = outer1_0(outer1_2[5]).intl;
    obj.children = intl.string(outer1_0(outer1_2[5]).t.sHHsOM);
    return handleClose(outer1_0(outer1_2[6]).Text, obj);
  };
  obj3 = require(478) /* isWindows */;
  const tmp = handleClose;
  obj1.headerLeft = require(5087) /* HeaderBackImage */.getHeaderCloseButton(handleClose);
  obj1.render = function render() {
    return handleClose(outer1_0(outer1_2[8]).default, { userId: closure_0, onSave: closure_1, onClose: handleClose });
  };
  obj.root = obj1;
  obj.screens = obj;
  return tmp(require(5517) /* NavigationStack */.Navigator, obj);
};
