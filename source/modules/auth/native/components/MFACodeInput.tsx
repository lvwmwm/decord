// Module ID: 13744
// Function ID: 105410
// Dependencies: [57, 31, 27, 1194, 653, 33, 4130, 689, 3976, 5490, 4559, 5588, 9039, 1212, 4126, 2]

// Module 13744
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AppStates } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
({ ActivityIndicator: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = jsxProd);
let obj = { inputContainer: { marginTop: 20, flexDirection: "row", justifyContent: "center", alignSelf: "stretch" }, input: { flex: 1, maxWidth: 336, flexDirection: "row", alignSelf: "stretch" }, status: { flex: 1, maxHeight: 20, alignItems: "center", marginTop: 8 } };
obj = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400 };
obj.error = obj;
obj.minHeightGuard = { minHeight: 20 };
let closure_12 = _createForOfIteratorHelperLoose.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((appState) => {
  let error;
  let resetLoginOnClose;
  let showActivityIndicator;
  let style;
  appState = appState.appState;
  const handleSubmit = appState.handleSubmit;
  ({ error, resetLoginOnClose } = appState);
  ({ style, showActivityIndicator } = appState);
  if (resetLoginOnClose === undefined) {
    resetLoginOnClose = true;
  }
  let first;
  let importAllResult;
  let first1;
  let closure_6;
  let callback;
  let tmp = callback2();
  let obj = appState(resetLoginOnClose[8]);
  const tmp2 = first(importAllResult.useState(""), 2);
  first = tmp2[0];
  importAllResult = tmp4;
  const tmp5 = first(importAllResult.useState(null), 2);
  first1 = tmp5[0];
  closure_6 = tmp5[1];
  const items = [first1];
  callback = importAllResult.useCallback(() => {
    const string = appState(resetLoginOnClose[9]).getString();
    string.then((str) => {
      const trimmed = str.trim();
      let tmp = trimmed !== outer1_5;
      if (tmp) {
        let isMatch = 6 === trimmed.length;
        if (isMatch) {
          isMatch = /^\d+$/.test(trimmed);
          const obj = /^\d+$/;
        }
        if (!isMatch) {
          let isMatch1 = 8 === trimmed.length;
          if (isMatch1) {
            isMatch1 = /^[a-z0-9]+$/i.test(trimmed);
            const obj2 = /^[a-z0-9]+$/i;
          }
          isMatch = isMatch1;
        }
        tmp = isMatch;
      }
      if (tmp) {
        outer1_4(trimmed);
        outer1_6(trimmed);
      }
    });
  }, items);
  handleSubmit(resetLoginOnClose[10])(() => {
    callback();
    return () => {
      if (callback.isAuthenticated()) {
        const string = appState(resetLoginOnClose[9]).getString();
        string.then((arg0) => {
          let tmp = "" !== outer2_3;
          if (tmp) {
            tmp = outer2_3 === arg0;
          }
          if (tmp) {
            appState(resetLoginOnClose[9]).copy("");
            const obj = appState(resetLoginOnClose[9]);
          }
        });
        const obj2 = appState(resetLoginOnClose[9]);
      } else {
        let obj = handleSubmit(resetLoginOnClose[11]);
        if (outer1_2) {
          obj.loginReset();
        } else {
          obj.loginStatusReset();
        }
      }
    };
  });
  const items1 = [appState, callback];
  const effect = importAllResult.useEffect(() => {
    if (appState === outer1_8.ACTIVE) {
      callback();
    }
  }, items1);
  const items2 = [first, handleSubmit];
  const effect1 = importAllResult.useEffect(() => {
    let isMatch = 6 === first.length;
    if (isMatch) {
      isMatch = /^\d+$/.test(first);
      const obj = /^\d+$/;
    }
    if (!isMatch) {
      isMatch = 8 === first.length;
    }
    if (isMatch) {
      handleSubmit(first);
    }
  }, items2);
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({
    clear() {
      outer1_4("");
    }
  }), []);
  obj = {};
  obj = { autoFocus: true, style: null, textStyle: null, value: null, autoCapitalize: "none", maxLength: 8, textContentType: "oneTimeCode" };
  const items3 = [tmp.inputContainer, style];
  obj.style = items3;
  obj.textStyle = tmp.input;
  obj.value = first;
  obj.onChangeText = tmp2[1];
  const intl = appState(resetLoginOnClose[13]).intl;
  obj.accessibilityLabel = intl.string(appState(resetLoginOnClose[13]).t.yO4lAM);
  const items4 = [callback(handleSubmit(resetLoginOnClose[12]), obj), ];
  const obj1 = {};
  const items5 = [tmp.status, ];
  const tmp12 = closure_11;
  const tmp13 = closure_10;
  const tmp14 = callback;
  const tmp15 = handleSubmit(resetLoginOnClose[12]);
  const tmp16 = closure_6;
  items5[1] = Boolean(error) && tmp.minHeightGuard;
  obj1.style = items5;
  if (showActivityIndicator) {
    const obj6 = appState(resetLoginOnClose[8]);
    let unsafe_rawColors = handleSubmit(resetLoginOnClose[7]).unsafe_rawColors;
    const isThemeDarkResult = appState(resetLoginOnClose[8]).isThemeDark(obj.useThemeContext().theme);
    unsafe_rawColors = first1;
    let obj2 = { color: appState(resetLoginOnClose[8]).isThemeDark(obj.useThemeContext().theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500 };
    callback(first1, obj2);
    const tmp27 = appState(resetLoginOnClose[8]).isThemeDark(obj.useThemeContext().theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500;
  } else {
    let tmp18 = null;
    if (null != error) {
      const obj3 = { style: tmp.error, variant: "text-md/medium", children: error };
      tmp18 = callback(appState(resetLoginOnClose[14]).Text, obj3);
    }
    obj1.children = tmp18;
    items4[1] = tmp14(tmp16, obj1);
    obj.children = items4;
    return tmp12(tmp13, obj);
  }
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/auth/native/components/MFACodeInput.tsx");

export default forwardRefResult;
