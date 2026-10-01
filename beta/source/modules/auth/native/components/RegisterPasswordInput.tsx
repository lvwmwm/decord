// Module ID: 15596
// Function ID: 15597
// Name: RegisterPasswordInput
// Dependencies: [109, 32, 19, 6362, 15570, 21, 4836, 576, 4566, 15593, 1115, 4832, 13992, 6376, 504, 5053, 6024, 4536, 6387, 6389, 2]

// Module 15596 (RegisterPasswordInput)
import nativeDefault from "native" /* 576 */;
import intl5 from "intl" /* 1115 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import usePasswordScore from "usePasswordScore" /* 15593 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import PhoneStore from "PhoneStore" /* 6362 */;
import RegistrationUIStore from "RegistrationUIStore" /* 15570 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let FadeIn;
let FadeOut;
let c10;
let c9;
let closure_12;
let easingResult;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
function PasswordStrength(passwordScore) {
  let isPasswordFocused;
  let items;
  let items1;
  let password;
  let passwordError;
  passwordScore = passwordScore.passwordScore;
  ({ password, isPasswordFocused, passwordError } = passwordScore);
  const tmp = closure_13();
  if (null != passwordScore) {
    if (isPasswordFocused) {
      if (0 !== password.length) {
        if (null == passwordError) {
          let str;
          let strong;
          if (passwordScore <= usePasswordScore.PasswordScore.WEAK) {
            const intl2 = tmp9(1115).intl;
            str = intl2.string(tmp9(1115).t["w/8TuV"]);
            strong = tmp.weak;
          } else if (passwordScore === usePasswordScore.PasswordScore.MEDIUM) {
            const intl = tmp9(1115).intl;
            str = intl.string(tmp9(1115).t["2fmTpT"]);
            strong = tmp.medium;
          } else {
            str = "";
            if (passwordScore === usePasswordScore.PasswordScore.STRONG) {
              const intl4 = tmp9(1115).intl;
              str = intl4.string(tmp9(1115).t.Xraqqc);
              strong = tmp.strong;
            }
          }
          const obj = { variant: "text-xs/medium", style: items, animated: true, children: items1 };
          const Text = tmp9(4832).Text;
          const merged = Object.assign(obj5);
          const merged1 = Object.assign(obj6);
          items = [tmp.passwordStrength, strong];
          const intl3 = tmp9(1115).intl;
          items1 = [intl3.string(intl5.t["5gbdUX"]), ": ", str];
          return authStore(Text, obj);
        }
      }
    }
  }
  return null;
}
let closure_3 = ["password"];
({ setRegistrationErrors: metroImportAll, useRegistrationUIStore: c9 } = RegistrationUIStore);
({ jsxs: c10, jsx: unpackModuleId, Fragment: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { weak: obj2, medium: obj3, strong: obj4, passwordStrength: { marginTop: 4, marginBottom: 4 }, inputHint: { width: "100%" } };
obj2 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
obj4 = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
let closure_13 = createStyles(obj);
let obj5 = { entering: FadeIn.duration(300), exiting: FadeOut.duration(300) };
FadeIn = ReanimatedRexport.FadeIn;
FadeOut = ReanimatedRexport.FadeOut;
let obj6 = { layout: easingResult.duration(300) };
const LinearTransition = ReanimatedRexport.LinearTransition;
const easing = LinearTransition.easing;
const Easing = ReanimatedRexport.Easing;
easingResult = easing(Easing.inOut(ReanimatedRexport.Easing.quad));
const forwardRefResult = react.forwardRef((arg0, ref) => {
  let EyeIcon;
  let autoFocus;
  let closure_1;
  let countryCode;
  let intl;
  let intl2;
  let isPasswordFocused;
  let onPasswordChange;
  let onSubmitEditing;
  let password;
  let passwordScore;
  let returnKeyType;
  let stateFromStores;
  let str;
  let stringResult;
  let tmp8;
  let tmp9;
  ({ password, onPasswordChange } = arg0);
  ({ returnKeyType, autoFocus } = arg0);
  let obj = react;
  const tmp = closure_13();
  ({ onSubmitEditing, passwordScore } = arg0);
  ref = react.useRef(null);
  const obj2 = { inputRef: ref, enabled: autoFocus };
  const tmp3 = importDefault;
  const tmp5 = require("useFocusRefOnNavigation");
  if (autoFocus == null) {
    autoFocus = false;
  }
  tmp5(obj2);
  [tmp8, tmp9] = stateFromStores(obj.useState(false), 2);
  importDefault = tmp9;
  stateFromStores(obj.useState(false), 2);
  const tmp10 = stateFromStores(obj.useState(false), 2);
  isPasswordFocused = tmp10[0];
  closure_3 = tmp12;
  const tmp13 = closure_9((errors) => errors.errors);
  const user = tmp13;
  const tmp14 = tmp3(isPasswordFocused[13])("password", tmp13);
  const items = [onPasswordChange, tmp13];
  const callback = obj.useCallback((arg0) => {
    if (null != user.password) {
      const password = tmp.password;
      metroImportAll(_objectWithoutProperties(user, closure_3));
    }
    onPasswordChange(arg0);
  }, items);
  const items1 = [PhoneStore];
  const obj3 = onPasswordChange(isPasswordFocused[14]);
  stateFromStores = obj3.useStateFromStores(items1, () => {
    const FRANCE_AND_FRENCH_REGION = onPasswordChange(first[15]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
    let num = 8;
    if (FRANCE_AND_FRENCH_REGION.has(countryCode.getCountryCode().alpha2)) {
      num = 12;
    }
    return num;
  });
  const items2 = [isPasswordFocused, stateFromStores];
  const memo = obj.useMemo(() => {
    if (first) {
      const intl = intl5.intl;
      const obj = { minimumLength: stateFromStores };
      return intl.format(intl5.t.VUUJ6V, obj);
    }
  }, items2);
  const items3 = [tmp10[1]];
  const items4 = [tmp10[1]];
  const callback1 = obj.useCallback(() => {
    closure_3(true);
  }, items3);
  const items5 = [tmp9];
  const callback2 = obj.useCallback(() => {
    closure_3(false);
  }, items4);
  const callback3 = obj.useCallback(() => {
    tmp9((arg0) => !arg0);
  }, items5);
  const obj4 = { ref: obj5.mergeRefs(ref, ref), textContentType: "newPassword", autoComplete: "new-password", onChange: callback, value: password, label: intl.string(onPasswordChange(isPasswordFocused[10]).t["CIGa+7"]), accessibilityHint: intl2.string(onPasswordChange(isPasswordFocused[10]).t.cUVsEG), secureTextEntry: !tmp8, returnKeyType, autoCapitalize: "none", onSubmitEditing, onFocus: callback1, onBlur: callback2, trailingIcon: EyeIcon, trailingPressableProps: { accessibilityLabel: stringResult, onPress: callback3, hitSlop: { top: 8, bottom: 8 } }, errorMessage: tmp14, status: str };
  const TextInput = onPasswordChange(tmp4[16]).TextInput;
  obj5 = onPasswordChange(isPasswordFocused[17]);
  intl = onPasswordChange(tmp4[10]).intl;
  intl2 = onPasswordChange(tmp4[10]).intl;
  const tmp22 = closure_10;
  const tmp23 = closure_12;
  if (returnKeyType == null) {
    returnKeyType = "next";
  }
  if (tmp8) {
    EyeIcon = tmp16(tmp4[18]).EyeSlashIcon;
  } else {
    EyeIcon = tmp16(tmp4[19]).EyeIcon;
  }
  const intl3 = tmp16(tmp4[10]).intl;
  const string = intl3.string;
  const t = tmp16(tmp4[10]).t;
  if (tmp8) {
    stringResult = string(t.Nusip4);
  } else {
    stringResult = string(t.nFzpM5);
  }
  str = undefined;
  if (null != tmp14) {
    str = "error";
  }
  const children = [closure_11(TextInput, obj4), closure_11(PasswordStrength, { password, isPasswordFocused, passwordError: tmp14, passwordScore }), ];
  let tmp24Result = null;
  if (null != memo) {
    tmp24Result = null;
    if (null == tmp14) {
      obj6 = { style: tmp.inputHint, variant: "text-xs/medium", color: "text-muted", animated: true, children: memo };
      const Text = tmp16(tmp4[11]).Text;
      const merged = Object.assign(obj5);
      const merged1 = Object.assign(obj6);
      tmp24Result = tmp24(Text, obj6);
    }
  }
  children[2] = tmp24Result;
  return tmp22(tmp23, { children });
});
const result = size.fileFinishedImporting("modules/auth/native/components/RegisterPasswordInput.tsx");

export const RegisterPasswordInput = forwardRefResult;
