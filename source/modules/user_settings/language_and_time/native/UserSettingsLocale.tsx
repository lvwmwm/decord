// Module ID: 14255
// Function ID: 109458
// Name: handleLanguageChange
// Dependencies: [5, 31, 27, 1922, 1921, 33, 4130, 689, 7955, 566, 5121, 7519, 1212, 7518, 14256, 2]

// Module 14255 (handleLanguageChange)
import jsxProd from "jsxProd";
import get_ActivityIndicator from "get ActivityIndicator";
import { setAppLocale } from "_setAppLocale";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_4;
let closure_5;
let require = arg1;
function handleLanguageChange() {
  return _handleLanguageChange(...arguments);
}
function _handleLanguageChange() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ Image: closure_4, ScrollView: closure_5 } = get_ActivityIndicator);
let obj = {};
obj = { padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.content = obj;
obj.flagImage = { width: 27, height: 18 };
let closure_9 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function UserSettingsLocale() {
  const tmp = callback2();
  const require = tmp;
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  obj = { contentContainerStyle: tmp.content };
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.locale);
  obj = { bottom: true };
  const obj1 = { defaultValue: stateFromStores, onChange: handleLanguageChange, hasIcons: true };
  const availableLocales = require(1212) /* getSystemLocale */.getAvailableLocales();
  obj1.children = availableLocales.map((localizedName) => {
    let name;
    let value;
    ({ name, value } = localizedName);
    let obj = { value, label: name };
    const intl = tmp(outer1_2[12]).intl;
    obj.subLabel = intl.string(localizedName.localizedName);
    obj = { style: tmp.flagImage, source: tmp(outer1_2[14]).flags[value] };
    obj.icon = outer1_8(outer1_4, obj);
    return outer1_8(tmp(outer1_2[13]).TableRadioRow, obj, name);
  });
  obj.children = jsx(require(7519) /* context */.TableRadioGroup, { defaultValue: stateFromStores, onChange: handleLanguageChange, hasIcons: true });
  obj.children = jsx(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, { bottom: true });
  return <closure_5 bottom />;
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/language_and_time/native/UserSettingsLocale.tsx");

export default memoResult;
