// Module ID: 17960
// Function ID: 17961
// Name: RegisterPasswordInput
// Dependencies: [109, 32, 19, 7103, 17933, 21, 5009, 575, 5090, 17957, 1114, 5619, 15828, 7118, 504, 5692, 7076, 5184, 7129, 7131, 2]
// Exports: RegisterPasswordInput

// Module 17960 (RegisterPasswordInput)
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1114 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import usePasswordScore from "usePasswordScore" /* 17957 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import PhoneStore from "PhoneStore" /* 7103 */;
import RegistrationUIStore from "RegistrationUIStore" /* 17933 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
            const intl2 = tmp9(1114).intl;
            str = intl2.string(tmp9(1114).t["w/8TuV"]);
            strong = tmp.weak;
          } else if (passwordScore === usePasswordScore.PasswordScore.MEDIUM) {
            const intl = tmp9(1114).intl;
            str = intl.string(tmp9(1114).t["2fmTpT"]);
            strong = tmp.medium;
          } else {
            str = "";
            if (passwordScore === usePasswordScore.PasswordScore.STRONG) {
              const intl4 = tmp9(1114).intl;
              str = intl4.string(tmp9(1114).t.Xraqqc);
              strong = tmp.strong;
            }
          }
          const obj = { variant: "text-xs/medium", style: items, animated: true, children: items1 };
          const Text = tmp9(5619).Text;
          const merged = Object.assign(obj5);
          const merged1 = Object.assign(obj6);
          items = [tmp.passwordStrength, strong];
          const intl3 = tmp9(1114).intl;
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
const result = size.fileFinishedImporting("modules/auth/native/components/RegisterPasswordInput.tsx");

export function RegisterPasswordInput(ref) {
  let EyeIcon;
  let _undefined;
  let autoFocus;
  let countryCode;
  let intl;
  let intl2;
  let onPasswordChange;
  let onSubmitEditing;
  let password;
  let passwordScore;
  let returnKeyType;
  let str;
  let stringResult;
  let tmp10;
  let tmp9;
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  onPasswordChange = undefined;
  importDefault = undefined;
  let isPasswordFocused;
  closure_3 = undefined;
  let user;
  let stateFromStores;
  ({ password, onPasswordChange } = merged);
  ({ returnKeyType, autoFocus } = merged);
  let obj = react;
  ({ onSubmitEditing, passwordScore } = merged);
  const tmp2 = closure_13();
  const ref1 = react.useRef(null);
  const obj2 = { inputRef: ref1, enabled: autoFocus };
  const tmp4 = importDefault;
  const tmp6 = require("useFocusRefOnNavigation");
  if (autoFocus == null) {
    autoFocus = false;
  }
  tmp6(obj2);
  [tmp9, tmp10] = stateFromStores(obj.useState(false), 2);
  importDefault = tmp10;
  stateFromStores(obj.useState(false), 2);
  const tmp11 = stateFromStores(obj.useState(false), 2);
  isPasswordFocused = tmp11[0];
  closure_3 = tmp13;
  const tmp14 = closure_9((errors) => errors.errors);
  user = tmp14;
  const tmp15 = tmp4(isPasswordFocused[13])("password", tmp14);
  const items = [onPasswordChange, tmp14];
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
  const items3 = [tmp11[1]];
  const items4 = [tmp11[1]];
  const callback1 = obj.useCallback(() => {
    closure_3(true);
  }, items3);
  const items5 = [tmp10];
  const callback2 = obj.useCallback(() => {
    closure_3(false);
  }, items4);
  const callback3 = obj.useCallback(() => {
    _undefined((arg0) => !arg0);
  }, items5);
  const obj4 = { ref: obj5.mergeRefs(ref, ref1), textContentType: "newPassword", autoComplete: "new-password", onChange: callback, value: password, label: intl.string(onPasswordChange(isPasswordFocused[10]).t["CIGa+7"]), accessibilityHint: intl2.string(onPasswordChange(isPasswordFocused[10]).t.cUVsEG), secureTextEntry: !tmp9, returnKeyType, autoCapitalize: "none", onSubmitEditing, onFocus: callback1, onBlur: callback2, trailingIcon: EyeIcon, trailingPressableProps: { accessibilityLabel: stringResult, onPress: callback3, hitSlop: { top: 8, bottom: 8 } }, errorMessage: tmp15, status: str };
  const TextInput = onPasswordChange(tmp5[16]).TextInput;
  obj5 = onPasswordChange(isPasswordFocused[17]);
  intl = onPasswordChange(tmp5[10]).intl;
  intl2 = onPasswordChange(tmp5[10]).intl;
  const tmp23 = closure_10;
  const tmp24 = closure_12;
  if (returnKeyType == null) {
    returnKeyType = "next";
  }
  if (tmp9) {
    EyeIcon = tmp17(tmp5[18]).EyeSlashIcon;
  } else {
    EyeIcon = tmp17(tmp5[19]).EyeIcon;
  }
  const intl3 = tmp17(tmp5[10]).intl;
  const string = intl3.string;
  const t = tmp17(tmp5[10]).t;
  if (tmp9) {
    stringResult = string(t.Nusip4);
  } else {
    stringResult = string(t.nFzpM5);
  }
  str = undefined;
  if (null != tmp15) {
    str = "error";
  }
  const children = [closure_11(TextInput, obj4), closure_11(PasswordStrength, { password, isPasswordFocused, passwordError: tmp15, passwordScore }), ];
  let tmp25Result = null;
  if (null != memo) {
    tmp25Result = null;
    if (null == tmp15) {
      obj6 = { style: tmp2.inputHint, variant: "text-xs/medium", color: "text-muted", animated: true, children: memo };
      const Text = tmp17(tmp5[11]).Text;
      const merged1 = Object.assign(obj5);
      const merged2 = Object.assign(obj6);
      tmp25Result = tmp25(Text, obj6);
    }
  }
  children[2] = tmp25Result;
  return tmp23(tmp24, { children });
}
