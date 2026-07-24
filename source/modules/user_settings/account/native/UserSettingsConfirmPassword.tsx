// Module ID: 9269
// Function ID: 72408
// Name: UserSettingsConfirmPasswordWrapped
// Dependencies: [5, 57, 31, 27, 1849, 653, 33, 4130, 689, 6653, 566, 5793, 4029, 1184, 1212, 9270, 4126, 9039, 9043, 4543, 2]
// Exports: UserSettingsConfirmPasswordWrapped

// Module 9269 (UserSettingsConfirmPasswordWrapped)
import ME from "ME";
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { UserSettingsSections } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
obj.background = obj;
obj.container = { paddingVertical: 12, paddingHorizontal: 16 };
obj.title = { textAlign: "center" };
obj.prompt = { marginTop: 8, lineHeight: 18, textAlign: "center" };
obj.input = { marginTop: 24 };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
obj.redesignInput = _createForOfIteratorHelperLoose;
obj.button = { marginTop: 16 };
obj.hint = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400 };
let closure_12 = _createForOfIteratorHelperLoose.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((arg0, arg1) => {
  let c5;
  let dependencyMap;
  let hideUnverifiedBanner;
  let importDefault;
  let obj2;
  let parentLoading;
  let require;
  let style;
  ({ onSubmit: require, onSuccess: importDefault, onError: dependencyMap, parentLoading } = arg0);
  if (parentLoading === undefined) {
    parentLoading = false;
  }
  ({ hideUnverifiedBanner, style } = arg0);
  if (hideUnverifiedBanner === undefined) {
    hideUnverifiedBanner = false;
  }
  let ME;
  let first1;
  function handleSubmit() {
    return _handleSubmit(...arguments);
  }
  function _handleSubmit() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback(tmp);
    return obj(...arguments);
  }
  const tmp = callback2();
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({}));
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getCurrentUser());
  const tmp4 = first1(undefined.useState(false), 2);
  let first = tmp4[0];
  ME = tmp4[1];
  const tmp6 = first1(undefined.useState(""), 2);
  first1 = tmp6[0];
  [obj2, c5] = first1(undefined.useState(null), 2);
  const effect = importAllResult.useEffect(() => {
    let obj = outer1_0(outer1_2[11]);
    obj = { destinationPane: outer1_9.ACCOUNT_CONFIRM_PASSWORD };
    const result = obj.trackUserSettingsPaneViewed(obj);
  }, []);
  let tmp11Result = null;
  if (null != stateFromStores) {
    obj = { style: null, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false };
    const items1 = [tmp.background, style];
    obj.style = items1;
    let tmp13 = null;
    if (!hideUnverifiedBanner) {
      tmp13 = callback(importDefault(9270), {});
    }
    const items2 = [tmp13, ];
    obj = { style: tmp.container };
    const obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj1.children = intl.string(require(1212) /* getSystemLocale */.t["x+d9t3"]);
    const items3 = [callback(require(4126) /* Text */.Text, obj1), , , , ];
    obj2 = { style: tmp.prompt, variant: "text-sm/medium", color: "text-default" };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj2.children = intl2.string(require(1212) /* getSystemLocale */.t.vaZmAx);
    items3[1] = callback(require(4126) /* Text */.Text, obj2);
    const obj3 = { style: null, textStyle: null, label: null, textContentType: "password", keyboardType: "default", secureTextEntry: true };
    ({ input: obj7.style, redesignInput: obj7.textStyle } = tmp);
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj3.label = intl3.string(require(1212) /* getSystemLocale */.t["CIGa+7"]);
    obj3.value = first1;
    obj3.onChangeText = tmp6[1];
    obj3.onSubmitEditing = handleSubmit;
    let fieldMessage;
    if (null != obj1) {
      fieldMessage = obj1.getFieldMessage("password");
    }
    obj3.error = fieldMessage;
    obj3.returnKeyType = "done";
    obj3.autoCapitalize = "none";
    obj3.autoFocus = true;
    items3[2] = callback(importDefault(9039), obj3);
    let tmp25 = null;
    if (null != obj1) {
      tmp25 = null;
      if (null == obj1.getFieldMessage("password")) {
        const obj4 = { style: tmp.hint, children: obj1.message };
        tmp25 = callback(importDefault(9043), obj4);
      }
    }
    items3[3] = tmp25;
    const obj5 = { style: tmp.button };
    const obj6 = { variant: "primary", size: "lg" };
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj6.text = intl4.string(require(1212) /* getSystemLocale */.t.i4jeWR);
    obj6.onPress = handleSubmit;
    if (!first) {
      first = parentLoading;
    }
    obj6.loading = first;
    obj5.children = callback(require(4543) /* Button */.Button, obj6);
    items3[4] = callback(_handleSubmit, obj5);
    obj.children = items3;
    items2[1] = closure_11(_handleSubmit, obj);
    obj.children = items2;
    tmp11Result = closure_11(closure_7, obj);
    const tmp11 = closure_11;
    const tmp12 = closure_7;
    const tmp17 = closure_11;
    const tmp18 = _handleSubmit;
    const tmp19 = callback;
    const tmp23 = importDefault(9039);
    const tmp30 = _handleSubmit;
  }
  return tmp11Result;
});
const obj2 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400 };
let result = require("result").fileFinishedImporting("modules/user_settings/account/native/UserSettingsConfirmPassword.tsx");

export default forwardRefResult;
export const UserSettingsConfirmPasswordWrapped = function UserSettingsConfirmPasswordWrapped() {
  let obj = require(6653) /* useSettingNavigationRoute */;
  obj = {};
  const merged = Object.assign(obj.useSettingNavigationRoute().params);
  return callback(closure_13, obj);
};
