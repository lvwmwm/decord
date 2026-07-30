// Module ID: 14707
// Function ID: 14708
// Name: SettingSearchBar
// Dependencies: [19, 17, 13675, 21, 4189, 712, 1844, 6505, 9235, 2]
// Exports: default

// Module 14707 (SettingSearchBar)
import noop from "noop";
import { View } from "get ActivityIndicator";
import zustandStore from "zustandStore";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { container: null };
createCacheKey = { marginTop: require("Themes").modules.mobile.SETTINGS_PADDING_TOP };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("zustandStore").fileFinishedImporting("modules/settings/native/search/SettingSearchBar.tsx");

export default function SettingSearchBar() {
  const tmp = createCacheKey();
  const callback = React.useCallback(() => {
    store.setState({ isActive: false, query: "", isFocused: false });
    const result = callback(1844).dismissGlobalKeyboard();
  }, []);
  const callback1 = React.useCallback(() => {
    const result = callback(6505).trackSettingSearchInputFocused();
    store.setState({ isActive: true, isFocused: true });
  }, []);
  const callback2 = React.useCallback(() => {
    store.setState({ isFocused: false });
  }, []);
  let obj = { style: tmp.container, children: null };
  const callback3 = React.useCallback((query) => {
    store.setState({ query });
  }, []);
  obj = { ref: React.useRef(null), size: "md", onFocus: callback1, onBlur: callback2, onClear: callback, defaultValue: null, onChange: null };
  obj[5] = field.getField("query");
  obj[6] = callback3;
  obj[1] = jsx(require(9235) /* SearchField */.SearchField, { ref: React.useRef(null), size: "md", onFocus: callback1, onBlur: callback2, onClear: callback, defaultValue: null, onChange: null });
  return <View ref={React.useRef(null)} size="md" onFocus={callback1} onBlur={callback2} onClear={callback} defaultValue={null} onChange={null} />;
};
