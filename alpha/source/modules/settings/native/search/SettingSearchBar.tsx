// Module ID: 16030
// Function ID: 16031
// Name: SettingSearchBar
// Dependencies: [19, 17, 16018, 21, 4972, 587, 558, 576, 1893, 16024, 7147, 2]

// Module 16030 (SettingSearchBar)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1893 */;
import settings_tracking_Tracking from "settings/tracking/Tracking" /* 16024 */;
import react from "react" /* 19 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 16018 */;
import createStyles from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp;
const SearchBar2 = tmp(7147);
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { marginTop: nativeDefault.modules.mobile.SETTINGS_PADDING_TOP };
let closure_6 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function SettingSearchBar() {
  let first;
  let tmp10;
  let tmp14;
  let tmp7;
  let tmp8;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(7);
  const tmp4 = closure_6();
  const ref = react.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      UserSettingSearchStore.setState({ isActive: false, query: "", isFocused: false });
      const obj = KeyboardManagerUtils;
      const result = obj.dismissGlobalKeyboard();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function h() {
      const obj = settings_tracking_Tracking;
      const result = obj.trackSettingSearchInputFocused();
      UserSettingSearchStore.setState({ isActive: true, isFocused: true });
    };
    cResult[1] = fn2;
    tmp7 = fn2;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function y() {
      UserSettingSearchStore.setState({ isFocused: false });
    };
    cResult[2] = fn3;
    tmp8 = fn3;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn4 = function v(query) {
      const obj = { query };
      UserSettingSearchStore.setState(obj);
    };
    cResult[3] = fn4;
    tmp9 = fn4;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const SearchBar = SearchBar2.SearchBar;
    const tmp13 = <SearchBar ref={ref} testID="user_settings_search_input" size="md" onFocus={tmp7} onBlur={tmp8} onClear={first} defaultValue={UserSettingSearchStore.getField("query")} onChange={tmp9} />;
    cResult[4] = tmp13;
    tmp10 = tmp13;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== tmp4.container) {
    const tmp17 = <View style={tmp4.container}>{tmp10}</View>;
    cResult[5] = tmp4.container;
    cResult[6] = tmp17;
    tmp14 = tmp17;
  } else {
    tmp14 = cResult[6];
  }
  return tmp14;
}) : (function SettingSearchBar() {
  const tmp = closure_6();
  const ref = react.useRef(null);
  const callback = react.useCallback(() => {
    UserSettingSearchStore.setState({ isActive: false, query: "", isFocused: false });
    const obj = KeyboardManagerUtils;
    const result = obj.dismissGlobalKeyboard();
  }, []);
  const callback1 = react.useCallback(() => {
    const obj = settings_tracking_Tracking;
    const result = obj.trackSettingSearchInputFocused();
    UserSettingSearchStore.setState({ isActive: true, isFocused: true });
  }, []);
  const callback2 = react.useCallback(() => {
    UserSettingSearchStore.setState({ isFocused: false });
  }, []);
  const callback3 = react.useCallback((query) => {
    const obj = { query };
    UserSettingSearchStore.setState(obj);
  }, []);
  ({ ref, testID: "user_settings_search_input", size: "md", onFocus: callback1, onBlur: callback2, onClear: callback, defaultValue: UserSettingSearchStore.getField("query"), onChange: callback3 });
  const SearchBar = SearchBar2.SearchBar;
  return <View style={tmp.container}>{null}</View>;
});
let result = size.fileFinishedImporting("modules/settings/native/search/SettingSearchBar.tsx");

export default tmp2;
