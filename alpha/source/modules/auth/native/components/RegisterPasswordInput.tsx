// Module ID: 18299
// Function ID: 18300
// Name: RegisterPasswordInput
// Dependencies: [109, 32, 19, 7258, 18271, 21, 5143, 575, 1652, 18296, 1113, 5763, 16131, 7273, 504, 5833, 7226, 5315, 2]
// Exports: RegisterPasswordInput

// Module 18299 (RegisterPasswordInput)
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1113 */;
import _mod1652 from "module_1652" /* 1652 */;
import usePasswordScore from "usePasswordScore" /* 18296 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import PhoneStore from "PhoneStore" /* 7258 */;
import RegistrationUIStore from "RegistrationUIStore" /* 18271 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

let dependencyMap;

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
            const intl2 = tmp9(1113).intl;
            str = intl2.string(tmp9(1113).t["w/8TuV"]);
            strong = tmp.weak;
          } else if (passwordScore === usePasswordScore.PasswordScore.MEDIUM) {
            const intl = tmp9(1113).intl;
            str = intl.string(tmp9(1113).t["2fmTpT"]);
            strong = tmp.medium;
          } else {
            str = "";
            if (passwordScore === usePasswordScore.PasswordScore.STRONG) {
              const intl4 = tmp9(1113).intl;
              str = intl4.string(tmp9(1113).t.Xraqqc);
              strong = tmp.strong;
            }
          }
          const obj = { variant: "body-xs/medium", style: items, animated: true, children: items1 };
          const Text = tmp9(5763).Text;
          const merged = Object.assign(obj5);
          const merged1 = Object.assign(obj6);
          items = [tmp.passwordStrength, strong];
          const intl3 = tmp9(1113).intl;
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
FadeIn = _mod1652.FadeIn;
FadeOut = _mod1652.FadeOut;
let obj6 = { layout: easingResult.duration(300) };
const LinearTransition = _mod1652.LinearTransition;
const easing = LinearTransition.easing;
const Easing = _mod1652.Easing;
easingResult = easing(Easing.inOut(_mod1652.Easing.quad));
const result = size.fileFinishedImporting("modules/auth/native/components/RegisterPasswordInput.tsx");

export function RegisterPasswordInput(ref) {
  let autoFocus;
  let closure_2;
  let countryCode;
  let intl;
  let intl2;
  let onPasswordChange;
  let onSubmitEditing;
  let password;
  let passwordScore;
  let returnKeyType;
  let str;
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  onPasswordChange = undefined;
  let isPasswordFocused;
  dependencyMap = undefined;
  let user;
  let stateFromStores;
  ({ password, onPasswordChange } = merged);
  ({ returnKeyType, autoFocus } = merged);
  let obj = react;
  ({ onSubmitEditing, passwordScore } = merged);
  const tmp2 = closure_13();
  const ref1 = react.useRef(null);
  const obj2 = { inputRef: ref1, enabled: autoFocus };
  const tmp4 = isPasswordFocused;
  const tmp6 = isPasswordFocused(16131);
  if (autoFocus == null) {
    autoFocus = false;
  }
  tmp6(obj2);
  const tmp8 = _slicedToArray(obj.useState(false), 2);
  isPasswordFocused = tmp8[0];
  dependencyMap = tmp10;
  const tmp11 = closure_9((errors) => errors.errors);
  user = tmp11;
  const tmp12 = tmp4(7273)("password", tmp11);
  const items = [onPasswordChange, tmp11];
  const callback = obj.useCallback((arg0) => {
    if (null != user.password) {
      const password = tmp.password;
      metroImportAll(_objectWithoutProperties(user, user));
    }
    onPasswordChange(arg0);
  }, items);
  const items1 = [PhoneStore];
  const obj3 = onPasswordChange(504);
  stateFromStores = obj3.useStateFromStores(items1, () => {
    const FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[15]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
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
  const items3 = [tmp8[1]];
  const items4 = [tmp8[1]];
  const callback1 = obj.useCallback(() => {
    closure_2(true);
  }, items3);
  const callback2 = obj.useCallback(() => {
    closure_2(false);
  }, items4);
  const obj4 = { ref: obj5.mergeRefs(ref, ref1), textContentType: "newPassword", autoComplete: "new-password", onChange: callback, value: password, label: intl.string(onPasswordChange(1113).t["CIGa+7"]), accessibilityHint: intl2.string(onPasswordChange(1113).t.cUVsEG), secureTextEntry: true, revealable: true, returnKeyType, autoCapitalize: "none", onSubmitEditing, onFocus: callback1, onBlur: callback2, errorMessage: tmp12, status: str };
  const TextInput = onPasswordChange(7226).TextInput;
  obj5 = onPasswordChange(5315);
  intl = onPasswordChange(1113).intl;
  intl2 = onPasswordChange(1113).intl;
  const tmp14 = onPasswordChange;
  const tmp19 = closure_10;
  const tmp20 = closure_12;
  if (returnKeyType == null) {
    returnKeyType = "next";
  }
  str = undefined;
  if (null != tmp12) {
    str = "error";
  }
  const children = [closure_11(TextInput, obj4), closure_11(PasswordStrength, { password, isPasswordFocused, passwordError: tmp12, passwordScore }), ];
  let tmp21Result = null;
  if (null != memo) {
    tmp21Result = null;
    if (null == tmp12) {
      obj6 = { style: tmp2.inputHint, variant: "body-xs/medium", color: "text-muted", animated: true, children: memo };
      const Text = tmp14(5763).Text;
      const merged1 = Object.assign(obj5);
      const merged2 = Object.assign(obj6);
      tmp21Result = tmp21(Text, obj6);
    }
  }
  children[2] = tmp21Result;
  return tmp19(tmp20, { children });
}
