// Module ID: 6467
// Function ID: 6468
// Name: FormPhoneOrEmail
// Dependencies: [19, 17, 21, 4836, 576, 5435, 1115, 4832, 6382, 6357, 6358, 6360, 2]

// Module 6467 (FormPhoneOrEmail)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import Pressables from "Pressables" /* 5435 */;
import PhoneOrEmailUtils from "PhoneOrEmailUtils" /* 6382 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let hasOwnProperty;
let metroRequire;
let obj2;
function CountryCodeSelector(alpha2) {
  let countryCode;
  let intl;
  let items;
  let obj2;
  let obj4;
  let onPress;
  let show;
  let str = alpha2.alpha2;
  ({ show, countryCode, onPress } = alpha2);
  const tmp = closure_7();
  if (str == null) {
    str = "";
  }
  const combined = "" + str + " " + countryCode;
  let tmp3 = null;
  if (show) {
    const obj = { style: tmp.selectorOuterContainer, children: metroRequire(View, obj2) };
    obj2 = { style: tmp.selectorContainer, children: items };
    const obj3 = { onPress, style: tmp.selectorPressable, androidRippleConfig: { borderless: true }, accessibilityRole: "button", accessibilityLabel: combined, accessibilityHint: intl.string(intl2.t.GwAW3k), children: hasOwnProperty(Text_Text.Text, obj4) };
    const PressableOpacity = Pressables.PressableOpacity;
    intl = intl2.intl;
    obj4 = { style: tmp.selectorText, variant: "text-md/medium", color: "mobile-text-heading-primary", children: combined };
    items = [hasOwnProperty(PressableOpacity, obj3), ];
    const obj5 = { style: tmp.separator };
    items[1] = hasOwnProperty(View, obj5);
    tmp3 = hasOwnProperty(View, obj);
  }
  return tmp3;
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { label: { marginBottom: 8 }, input: { flexGrow: 1, marginBottom: 8 }, error: { marginBottom: 8 }, hint: { marginBottom: 8 }, selectorOuterContainer: { overflow: "hidden" }, selectorContainer: { flex: 1, flexDirection: "row" }, selectorPressable: { justifyContent: "center" }, selectorText: { alignSelf: "center" }, separator: obj2 };
obj2 = { borderLeftWidth: 1, borderLeftColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_SELECTED, marginHorizontal: 12, marginVertical: -4 };
let closure_7 = createStyles.createStyles(obj);
const forwardRefResult = react.forwardRef((arg0, ref) => {
  let alpha2;
  let countryCode;
  let error;
  let forceMode;
  let hint;
  let items1;
  let items2;
  let label;
  let onPress;
  let str;
  let str2;
  let style;
  let textInputStyle;
  let value;
  ({ label, error, value, hint, onChangeText: require, alpha2: importDefault, countryCode } = arg0);
  ({ onPressCountrySelector: react, forceMode } = arg0);
  ({ style, textInputStyle } = arg0);
  const merged = Object.assign(arg0, Object.assign({ style: 0, textInputStyle: 0, label: 0, error: 0, value: 0, hint: 0, onChangeText: 0, alpha2: 0, countryCode: 0, onPressCountrySelector: 0, forceMode: 0 }));
  ref = undefined;
  function handleChangeText(value) {
    let str = "";
    const obj = PhoneOrEmailUtils;
    if (obj.shouldShowCountryCodeSelector(forceMode, value)) {
      str = countryCode;
    }
    if (require != null) {
      require(value, str);
    }
  }
  const tmp2 = ref();
  let obj = require("PhoneOrEmailUtils");
  const show = obj.shouldShowCountryCodeSelector(forceMode, value);
  const obj2 = { handleChangeText, value };
  ref = react.useRef(obj2);
  const effect = react.useEffect(() => {
    ref.current = obj2;
  });
  const items = [countryCode];
  const effect1 = react.useEffect(() => {
    ref.current.handleChangeText(ref.current.value);
  }, items);
  let tmp9 = null;
  const obj3 = { style, children: items1 };
  const tmp7 = obj2;
  const tmp8 = forceMode;
  if (null != label) {
    const obj4 = { style: tmp2.label, children: label };
    tmp9 = show(require("FreeFormLabel"), obj4);
  }
  items1 = [tmp9, , , ];
  const obj5 = {
    renderLeadingComponent() {
      const obj = { show, alpha2: importDefault, countryCode, onPress: react };
      return hasOwnProperty(CountryCodeSelector, obj);
    },
    error: null != error,
    ref,
    value,
    style: items2,
    onChangeText: handleChangeText,
    textContentType: str,
    keyboardType: str2,
    accessibilityLabel: label,
    accessibilityHint: hint
  };
  const tmp14 = require("FreeFormTextInput");
  const merged1 = Object.assign(merged);
  items2 = [tmp2.input, textInputStyle];
  str = "emailAddress";
  const tmp13 = importDefault;
  if (forceMode === require("PhoneOrEmailUtils").PhoneOrEmailSelectorForceMode.PHONE) {
    str = "telephoneNumber";
  }
  str2 = "email-address";
  if (forceMode === require("PhoneOrEmailUtils").PhoneOrEmailSelectorForceMode.PHONE) {
    str2 = "phone-pad";
  }
  items1[1] = show(tmp14, obj5);
  let tmp12Result = null;
  if (null != error) {
    const obj6 = { style: tmp2.error, children: error };
    tmp12Result = tmp12(tmp13(tmp4[11]), obj6);
  }
  items1[2] = tmp12Result;
  let tmp12Result2 = null;
  if (null != hint) {
    const obj7 = { style: tmp2.hint, variant: "text-xs/medium", color: "text-muted", children: hint };
    tmp12Result2 = tmp12(tmp3(tmp4[7]).Text, obj7);
  }
  items1[3] = tmp12Result2;
  return tmp7(tmp8, obj3);
});
const result = size.fileFinishedImporting("modules/phone/native/FormPhoneOrEmail.tsx");

export default forwardRefResult;
