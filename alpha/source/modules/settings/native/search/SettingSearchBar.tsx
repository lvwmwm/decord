// Module ID: 16547
// Function ID: 16548
// Name: SettingSearchBar
// Dependencies: [19, 17, 16535, 21, 5009, 575, 1889, 16541, 7212, 2]
// Exports: default

// Module 16547 (SettingSearchBar)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 1889 */;
import SearchBar2 from "SearchBar" /* 7212 */;
import settings_tracking_Tracking from "settings/tracking/Tracking" /* 16541 */;
import react from "react" /* 19 */;
import UserSettingSearchStore from "UserSettingSearchStore" /* 16535 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { marginTop: nativeDefault.modules.mobile.SETTINGS_PADDING_TOP };
let closure_6 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/settings/native/search/SettingSearchBar.tsx");

export default function SettingSearchBar() {
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
};
