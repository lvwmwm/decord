// Module ID: 14461
// Function ID: 108978
// Name: SettingSearchBar
// Dependencies: []
// Exports: default

// Module 14461 (SettingSearchBar)
let closure_2 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const jsx = arg1(dependencyMap[3]).jsx;
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { marginTop: importDefault(dependencyMap[5]).modules.mobile.SETTINGS_PADDING_TOP };
obj.container = obj;
let closure_6 = obj.createStyles(obj);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/settings/native/search/SettingSearchBar.tsx");

export default function SettingSearchBar() {
  const tmp = callback();
  const callback = React.useCallback(() => {
    store.setState({ presentation: "resizeMode", animation: "formatToPlainString", animation: "construct" });
    const result = callback(closure_1[6]).dismissGlobalKeyboard();
  }, []);
  const callback1 = React.useCallback(() => {
    const result = callback(closure_1[7]).trackSettingSearchInputFocused();
    store.setState({ "Null": null, "Null": null });
  }, []);
  const callback2 = React.useCallback(() => {
    store.setState({ isFocused: false });
  }, []);
  let obj = { style: tmp.container };
  const callback3 = React.useCallback((query) => {
    store.setState({ query });
  }, []);
  obj = { ref: React.useRef(null), size: "md", onFocus: callback1, onBlur: callback2, onClear: callback, defaultValue: field.getField("query"), onChange: callback3 };
  obj.children = jsx(arg1(dependencyMap[8]).SearchField, obj);
  return <View {...obj} />;
};
