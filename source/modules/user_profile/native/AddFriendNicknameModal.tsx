// Module ID: 12171
// Function ID: 95346
// Name: AddFriendNicknameModal
// Dependencies: [5, 57, 31, 27, 3767, 1849, 33, 4130, 689, 566, 1212, 4337, 8962, 5585, 4561, 4126, 5773, 3969, 2]
// Exports: default

// Module 12171 (AddFriendNicknameModal)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
const require = arg1;
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SCRIM, justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.title = { textAlign: "center" };
_createForOfIteratorHelperLoose.description = { marginTop: 8, marginBottom: 16, textAlign: "center", lineHeight: 18 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("result").fileFinishedImporting("modules/user_profile/native/AddFriendNicknameModal.tsx");

export default function AddFriendNicknameModal(arg0) {
  let require;
  let showUserProfile;
  ({ userId: require, showUserProfile } = arg0);
  let dependencyMap;
  let _isNativeReflectConstruct;
  let callback;
  let callback1;
  function _handleSubmit() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    return obj(...arguments);
  }
  const tmp = _createForOfIteratorHelperLoose();
  const tmp3 = callback(callback1.useState(false), 2);
  dependencyMap = tmp3[0];
  _isNativeReflectConstruct = tmp3[1];
  let obj = require(566) /* initialize */;
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getNickname(closure_0));
  let tmp5 = null;
  if (null != stateFromStores) {
    tmp5 = stateFromStores;
  }
  callback = callback1.useRef(tmp5);
  callback = callback1.useCallback((current) => {
    _slicedToArray.current = current;
  }, []);
  let obj1 = require(566) /* initialize */;
  const items1 = [closure_8];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_8.getUser(closure_0));
  if (null == stateFromStores) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl2.string(require(1212) /* getSystemLocale */.t.BGYkaH);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    stringResult = intl.string(require(1212) /* getSystemLocale */.t["8pOYUE"]);
  }
  const items2 = [showUserProfile];
  callback1 = callback1.useCallback(() => {
    let arr = showUserProfile(table[11]);
    arr = arr.pop();
    if (null != showUserProfile) {
      showUserProfile();
    }
  }, items2);
  obj = { style: tmp.container };
  obj = {};
  obj1 = {};
  const tmp14 = showUserProfile(5585);
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj1.confirmText = intl3.string(require(1212) /* getSystemLocale */.t["R3BPH+"]);
  obj1.onConfirm = function handleSubmit() {
    return _handleSubmit(...arguments);
  };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj1.cancelText = intl4.string(require(1212) /* getSystemLocale */.t["ETE/oC"]);
  obj1.onCancel = callback1;
  const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: stringResult };
  const items3 = [callback2(require(4126) /* Text */.Text, obj2), , ];
  const obj3 = { style: tmp.description, variant: "text-sm/medium", color: "text-default" };
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl5.string(require(1212) /* getSystemLocale */.t["NdQ+lP"]);
  items3[1] = callback2(require(4126) /* Text */.Text, obj3);
  const obj4 = { onChange: callback, autoFocus: true, placeholder: null, defaultValue: null, maxLength: 32, isClearable: true };
  const tmp15 = showUserProfile(4561);
  obj4.placeholder = showUserProfile(3969).getName(stateFromStores1);
  obj4.defaultValue = stateFromStores;
  items3[2] = callback2(require(5773) /* TextField */.TextField, obj4);
  obj1.children = items3;
  obj.children = callback3(tmp15, obj1);
  obj.children = callback2(tmp14, obj);
  return callback2(_handleSubmit, obj);
};
