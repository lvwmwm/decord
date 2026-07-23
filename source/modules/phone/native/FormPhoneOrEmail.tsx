// Module ID: 9240
// Function ID: 72264
// Name: CountryCodeSelector
// Dependencies: [31, 27, 33, 4130, 689, 4660, 1212, 4126, 9215, 9001, 9002, 9004, 2]

// Module 9240 (CountryCodeSelector)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
function CountryCodeSelector(alpha2) {
  let countryCode;
  let onPress;
  let show;
  alpha2 = alpha2.alpha2;
  ({ show, countryCode, onPress } = alpha2);
  const tmp = callback3();
  let str = "";
  if (null != alpha2) {
    str = alpha2;
  }
  const combined = "" + str + " " + countryCode;
  let tmp3 = null;
  if (show) {
    let obj = { style: tmp.selectorOuterContainer };
    obj = { style: tmp.selectorContainer };
    obj = { onPress, style: tmp.selectorPressable };
    const obj1 = { borderless: true };
    obj.androidRippleConfig = obj1;
    obj.accessibilityRole = "button";
    obj.accessibilityLabel = combined;
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.accessibilityHint = intl.string(require(1212) /* getSystemLocale */.t.GwAW3k);
    const obj2 = { style: tmp.selectorText, variant: "text-md/medium", color: "mobile-text-heading-primary", children: combined };
    obj.children = callback(require(4126) /* Text */.Text, obj2);
    const items = [callback(require(4660) /* PressableBase */.PressableOpacity, obj), ];
    const obj3 = { style: tmp.separator };
    items[1] = callback(View, obj3);
    obj.children = items;
    obj.children = callback2(View, obj);
    tmp3 = callback(View, obj);
  }
  return tmp3;
}
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = { label: { marginBottom: 8 }, input: { flexGrow: 1, marginBottom: 8 }, error: { marginBottom: 8 }, hint: { marginBottom: 8 }, selectorOuterContainer: { overflow: "hidden" }, selectorContainer: { flex: 1, flexDirection: "row" }, selectorPressable: { justifyContent: "center" }, selectorText: { alignSelf: "center" } };
obj = { borderLeftWidth: 1, borderLeftColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_SELECTED, marginHorizontal: 12, marginVertical: -4 };
obj.separator = obj;
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((arg0, arg1) => {
  let closure_3;
  let countryCode;
  let error;
  let forceMode;
  let hint;
  let importDefault;
  let label;
  let require;
  let style;
  let textInputStyle;
  let value;
  ({ label, error, value, hint, onChangeText: require, alpha2: importDefault, countryCode } = arg0);
  ({ onPressCountrySelector: closure_3, forceMode } = arg0);
  let obj = { style: 0, textInputStyle: 0, label: 0, error: 0, value: 0, hint: 0, onChangeText: 0, alpha2: 0, countryCode: 0, onPressCountrySelector: 0, forceMode: 0 };
  ({ style, textInputStyle } = arg0);
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  function handleChangeText(value) {
    let str = "";
    if (obj.shouldShowCountryCodeSelector(forceMode, value)) {
      str = countryCode;
    }
    if (null != callback) {
      callback(value, str);
    }
  }
  const tmp3 = callback3();
  let obj1 = require(countryCode[8]);
  const callback = obj1.shouldShowCountryCodeSelector(forceMode, value);
  obj = { handleChangeText, value };
  callback3 = importAllResult.useRef(obj);
  const effect = importAllResult.useEffect(() => {
    closure_7.current = obj;
  });
  const items = [countryCode];
  const effect1 = importAllResult.useEffect(() => {
    ref.current.handleChangeText(ref.current.value);
  }, items);
  obj = { style };
  let tmp8 = null;
  if (null != label) {
    obj1 = { style: tmp3.label, children: label };
    tmp8 = callback(importDefault(countryCode[9]), obj1);
  }
  const items1 = [tmp8, , , ];
  const obj2 = {};
  const merged1 = Object.assign(merged);
  obj2["renderLeadingComponent"] = function renderLeadingComponent() {
    return callback2(outer1_8, { show: callback2, alpha2: closure_1, countryCode, onPress: closure_3 });
  };
  obj2["error"] = null != error;
  obj2["ref"] = arg1;
  obj2["value"] = value;
  const items2 = [tmp3.input, textInputStyle];
  obj2["style"] = items2;
  obj2["onChangeText"] = handleChangeText;
  let str = "emailAddress";
  if (forceMode === require(countryCode[8]).PhoneOrEmailSelectorForceMode.PHONE) {
    str = "telephoneNumber";
  }
  obj2["textContentType"] = str;
  let str2 = "email-address";
  if (forceMode === require(countryCode[8]).PhoneOrEmailSelectorForceMode.PHONE) {
    str2 = "phone-pad";
  }
  obj2["keyboardType"] = str2;
  obj2["accessibilityLabel"] = label;
  obj2["accessibilityHint"] = hint;
  items1[1] = callback(importDefault(countryCode[10]), obj2);
  let tmp15 = null;
  if (null != error) {
    const obj3 = { style: tmp3.error, children: error };
    tmp15 = callback(importDefault(countryCode[11]), obj3);
  }
  items1[2] = tmp15;
  let tmp19 = null;
  if (null != hint) {
    const obj4 = { style: tmp3.hint, variant: "text-xs/medium", color: "text-muted", children: hint };
    tmp19 = callback(require(countryCode[7]).Text, obj4);
  }
  items1[3] = tmp19;
  obj.children = items1;
  return obj(forceMode, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/phone/native/FormPhoneOrEmail.tsx");

export default forwardRefResult;
