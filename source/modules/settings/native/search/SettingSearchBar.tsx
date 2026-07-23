// Module ID: 14583
// Function ID: 111174
// Name: SettingSearchBar
// Dependencies: [31, 27, 13552, 33, 4130, 689, 1820, 5795, 5772, 2]
// Exports: default

// Module 14583 (SettingSearchBar)
import result from "result";
import { View } from "get ActivityIndicator";
import zustandStore from "zustandStore";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").modules.mobile.SETTINGS_PADDING_TOP };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("zustandStore").fileFinishedImporting("modules/settings/native/search/SettingSearchBar.tsx");

export default function SettingSearchBar() {
  const tmp = _createForOfIteratorHelperLoose();
  const callback = React.useCallback(() => {
    outer1_4.setState({ isActive: false, query: "", isFocused: false });
    const result = outer1_0(outer1_1[6]).dismissGlobalKeyboard();
  }, []);
  const callback1 = React.useCallback(() => {
    const result = outer1_0(outer1_1[7]).trackSettingSearchInputFocused();
    outer1_4.setState({ isActive: true, isFocused: true });
  }, []);
  const callback2 = React.useCallback(() => {
    outer1_4.setState({ isFocused: false });
  }, []);
  let obj = { style: tmp.container };
  const callback3 = React.useCallback((query) => {
    outer1_4.setState({ query });
  }, []);
  obj = { ref: React.useRef(null), size: "md", onFocus: callback1, onBlur: callback2, onClear: callback, defaultValue: field.getField("query"), onChange: callback3 };
  obj.children = jsx(require(5772) /* SearchField */.SearchField, { ref: React.useRef(null), size: "md", onFocus: callback1, onBlur: callback2, onClear: callback, defaultValue: field.getField("query"), onChange: callback3 });
  return <View ref={React.useRef(null)} size="md" onFocus={callback1} onBlur={callback2} onClear={callback} defaultValue={field.getField("query")} onChange={callback3} />;
};
