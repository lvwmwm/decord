// Module ID: 14627
// Function ID: 14628
// Name: SettingSearchBar
// Dependencies: [19, 17, 14616, 21, 4481, 709, 1890, 6937, 6990, 2]
// Exports: default

// Module 14627 (SettingSearchBar)
import ThemesDefault from "Themes" /* 709 */;
import SearchField from "SearchField" /* 6990 */;
import closure_2 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "zustandStore" /* 14616 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

require = arg1;
createCacheKey = { container: null };
createCacheKey = { marginTop: ThemesDefault.modules.mobile.SETTINGS_PADDING_TOP };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/settings/native/search/SettingSearchBar.tsx");

export default function SettingSearchBar() {
  const tmp = callback();
  callback = React.useCallback(() => {
    store.setState({ isActive: false, query: "", isFocused: false });
    const result = callback(1890).dismissGlobalKeyboard();
  }, []);
  const callback1 = React.useCallback(() => {
    const result = callback(6937).trackSettingSearchInputFocused();
    store.setState({ isActive: true, isFocused: true });
  }, []);
  const callback2 = React.useCallback(() => {
    store.setState({ isFocused: false });
  }, []);
  let obj = { style: tmp.container, children: null };
  const callback3 = React.useCallback((query) => {
    store.setState({ query });
  }, []);
  obj = { ref: React.useRef(null), size: "md", onFocus: callback1, onBlur: callback2, onClear: callback, defaultValue: field.getField("query"), onChange: callback3 };
  obj[1] = jsx(SearchField.SearchField, { ref: React.useRef(null), size: "md", onFocus: callback1, onBlur: callback2, onClear: callback, defaultValue: field.getField("query"), onChange: callback3 });
  return <View ref={React.useRef(null)} size="md" onFocus={callback1} onBlur={callback2} onClear={callback} defaultValue={field.getField("query")} onChange={callback3} />;
};
