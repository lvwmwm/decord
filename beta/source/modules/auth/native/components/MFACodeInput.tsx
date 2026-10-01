// Module ID: 14324
// Function ID: 14325
// Name: MFACodeInput
// Dependencies: [32, 19, 17, 502, 1074, 21, 4836, 576, 4685, 6610, 5298, 6010, 6023, 1115, 4832, 2]

// Module 14324 (MFACodeInput)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let appState;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let unpackModuleId;
let react = react_mod;
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
const AppStates = Constants.AppStates;
({ jsx: c9, Fragment: c10, jsxs: unpackModuleId } = Fragment);
let obj = { inputContainer: { marginTop: 20, flexDirection: "row", justifyContent: "center", alignSelf: "stretch" }, input: { flex: 1, maxWidth: 336, flexDirection: "row", alignSelf: "stretch" }, status: { flex: 1, maxHeight: 20, alignItems: "center", marginTop: 8 }, error: obj2, minHeightGuard: { minHeight: 20 } };
obj2 = { color: nativeDefault.unsafe_rawColors.RED_400 };
let closure_12 = createStyles.createStyles(obj);
const forwardRefResult = react.forwardRef((appState, ref) => {
  let closure_4;
  let error;
  let intl;
  let items3;
  let resetLoginOnClose;
  let showActivityIndicator;
  let style;
  let tmp17Result;
  appState = appState.appState;
  const handleSubmit = appState.handleSubmit;
  ({ error, resetLoginOnClose } = appState);
  ({ style, showActivityIndicator } = appState);
  if (resetLoginOnClose === undefined) {
    resetLoginOnClose = true;
  }
  let value;
  react = undefined;
  let tmp = closure_12();
  let tmp2 = appState;
  const tmp3 = resetLoginOnClose;
  let obj = appState(resetLoginOnClose[8]);
  const theme = obj.useThemeContext().theme;
  const tmp4 = value(react.useState(""), 2);
  value = tmp4[0];
  react = tmp6;
  const tmp7 = value(react.useState(null), 2);
  const first1 = tmp7[0];
  let closure_6 = tmp7[1];
  const items = [first1];
  const callback = react.useCallback(() => {
    let obj = ClipboardUtils;
    const string = obj.getString();
    string.then((result) => {
      const trimmed = result.trim();
      let tmp = trimmed !== first1;
      if (tmp) {
        let isMatch = 6 === trimmed.length;
        if (isMatch) {
          const obj = /^\d+$/;
          isMatch = obj.test(trimmed);
        }
        if (!isMatch) {
          let isMatch1 = 8 === trimmed.length;
          if (isMatch1) {
            const obj2 = /^[a-z0-9]+$/i;
            isMatch1 = obj2.test(trimmed);
          }
          isMatch = isMatch1;
        }
        tmp = isMatch;
      }
      if (tmp) {
        closure_1_4(trimmed);
        closure_1_6(trimmed);
      }
    });
  }, items);
  handleSubmit(resetLoginOnClose[10])(() => {
    let tmp = callback();
    return () => {
      if (callback.isAuthenticated()) {
        const obj2 = appState(resetLoginOnClose[9]);
        const string = obj2.getString();
        string.then((result) => {
          const tmp2 = "" !== closure_1_3 && tmp === result;
          if (tmp2) {
            const obj = appState(resetLoginOnClose[9]);
            obj.copy("");
          }
        });
      } else {
        const tmp = closure_1_2;
        let tmp2 = handleSubmit;
        let obj = handleSubmit(resetLoginOnClose[11]);
        if (closure_1_2) {
          obj.loginReset();
        } else {
          obj.loginStatusReset();
        }
      }
    };
  });
  const items1 = [appState, callback];
  const effect = react.useEffect(() => {
    if (appState === AppStates.ACTIVE) {
      callback();
    }
  }, items1);
  const items2 = [value, handleSubmit];
  const effect1 = react.useEffect(() => {
    let isMatch = 6 === first.length;
    if (isMatch) {
      const obj = /^\d+$/;
      isMatch = obj.test(arr);
    }
    if (!isMatch) {
      isMatch = 8 === arr.length;
    }
    if (isMatch) {
      handleSubmit(first);
    }
  }, items2);
  const imperativeHandle = react.useImperativeHandle(ref, () => ({
    clear() {
      closure_1_4("");
    }
  }), []);
  let obj2 = { autoFocus: true, style: items3, textStyle: tmp.input, value, autoCapitalize: "none", maxLength: 8, textContentType: "oneTimeCode", onChangeText: tmp6, accessibilityLabel: intl.string(appState(resetLoginOnClose[13]).t.yO4lAM) };
  items3 = [tmp.inputContainer, style];
  const tmp18 = handleSubmit(resetLoginOnClose[12]);
  intl = appState(resetLoginOnClose[13]).intl;
  const items4 = [closure_9(tmp18, obj2), ];
  const items5 = [tmp.status, ];
  const obj3 = { style: items5, children: tmp17Result };
  items5[1] = Boolean(error) && tmp.minHeightGuard;
  Boolean(error) && tmp.minHeightGuard;
  const tmp10 = handleSubmit;
  const tmp15 = closure_11;
  const tmp16 = closure_10;
  const tmp19 = closure_6;
  if (showActivityIndicator) {
    const tmp2Result = tmp2(tmp3[8]);
    const isThemeDarkResult = tmp2Result.isThemeDark(theme);
    const unsafe_rawColors = tmp10(tmp3[7]).unsafe_rawColors;
    const obj4 = { color: isThemeDarkResult ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500 };
    tmp17Result = tmp17(first1, obj4);
  } else {
    tmp17Result = null;
    if (null != error) {
      const obj5 = { style: tmp.error, variant: "text-md/medium", children: error };
      tmp17Result = tmp17(tmp2(tmp3[14]).Text, obj5);
    }
  }
  const obj6 = { children: items4 };
  items4[1] = closure_9(tmp19, obj3);
  return tmp15(tmp16, obj6);
});
const result = size.fileFinishedImporting("modules/auth/native/components/MFACodeInput.tsx");

export default forwardRefResult;
