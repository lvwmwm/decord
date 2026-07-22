// Module ID: 9233
// Function ID: 72223
// Name: CountryCodeSelector
// Dependencies: []

// Module 9233 (CountryCodeSelector)
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
    const intl = arg1(dependencyMap[6]).intl;
    obj.accessibilityHint = intl.string(arg1(dependencyMap[6]).t.GwAW3k);
    const obj2 = { style: tmp.selectorText, children: combined };
    obj.children = callback(arg1(dependencyMap[7]).Text, obj2);
    const items = [callback(arg1(dependencyMap[5]).PressableOpacity, obj), ];
    const obj3 = { style: tmp.separator };
    items[1] = callback(View, obj3);
    obj.children = items;
    obj.children = callback2(View, obj);
    tmp3 = callback(View, obj);
  }
  return tmp3;
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let obj = { label: { marginBottom: 8 }, input: { mode: "<string:2126337>", icon: "<string:2097152>" }, error: { marginBottom: 8 }, hint: { marginBottom: 8 }, selectorOuterContainer: { overflow: "hidden" }, selectorContainer: { marginLeft: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013132815383737633, marginVertical: 203722238426496480000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 }, selectorPressable: { justifyContent: "center" }, selectorText: { alignSelf: "center" } };
obj = { fill: null, accessibilityRole: null, y: null, space: null, borderLeftColor: importDefault(dependencyMap[4]).colors.INTERACTIVE_BACKGROUND_SELECTED };
obj.separator = obj;
let closure_7 = arg1(dependencyMap[3]).createStyles(obj);
const obj2 = arg1(dependencyMap[3]);
const forwardRefResult = importAllResult.forwardRef((arg0, arg1) => {
  let countryCode;
  let error;
  let forceMode;
  let hint;
  let label;
  let style;
  let textInputStyle;
  let value;
  ({ label, error, value, hint, onChangeText: closure_0, alpha2: closure_1, countryCode } = arg0);
  const dependencyMap = countryCode;
  ({ onPressCountrySelector: closure_3, forceMode } = arg0);
  const View = forceMode;
  let obj = {};
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
  let obj1 = arg1(dependencyMap[8]);
  const callback = obj1.shouldShowCountryCodeSelector(forceMode, value);
  obj = { handleChangeText, value };
  const callback3 = importAllResult.useRef(obj);
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
    tmp8 = callback(importDefault(dependencyMap[9]), obj1);
  }
  const items1 = [tmp8, , , ];
  const obj2 = {};
  const merged1 = Object.assign(merged);
  obj2["renderLeadingComponent"] = function renderLeadingComponent() {
    return callback2(closure_8, { show: callback2, alpha2: closure_1, countryCode, onPress: closure_3 });
  };
  obj2["error"] = null != error;
  obj2["ref"] = arg1;
  obj2["value"] = value;
  const items2 = [tmp3.input, textInputStyle];
  obj2["style"] = items2;
  obj2["onChangeText"] = handleChangeText;
  let str = "emailAddress";
  if (forceMode === arg1(dependencyMap[8]).PhoneOrEmailSelectorForceMode.PHONE) {
    str = "telephoneNumber";
  }
  obj2["textContentType"] = str;
  let str2 = "email-address";
  if (forceMode === arg1(dependencyMap[8]).PhoneOrEmailSelectorForceMode.PHONE) {
    str2 = "phone-pad";
  }
  obj2["keyboardType"] = str2;
  obj2["accessibilityLabel"] = label;
  obj2["accessibilityHint"] = hint;
  items1[1] = callback(importDefault(dependencyMap[10]), obj2);
  let tmp15 = null;
  if (null != error) {
    const obj3 = { style: tmp3.error, children: error };
    tmp15 = callback(importDefault(dependencyMap[11]), obj3);
  }
  items1[2] = tmp15;
  let tmp19 = null;
  if (null != hint) {
    const obj4 = { style: tmp3.hint, children: hint };
    tmp19 = callback(arg1(dependencyMap[7]).Text, obj4);
  }
  items1[3] = tmp19;
  obj.children = items1;
  return obj(View, obj);
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/phone/native/FormPhoneOrEmail.tsx");

export default forwardRefResult;
