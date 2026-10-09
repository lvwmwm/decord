// Module ID: 16308
// Function ID: 16309
// Name: RegisterPasswordInput
// Dependencies: [32, 109, 19, 6622, 16281, 21, 5091, 587, 4811, 558, 576, 16305, 1126, 5087, 14210, 6637, 5911, 504, 4784, 6648, 6650, 6290, 2]

// Module 16308 (RegisterPasswordInput)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import useFocusRefOnNavigationDefault from "useFocusRefOnNavigation" /* 14210 */;
import usePasswordScore from "usePasswordScore" /* 16305 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import PhoneStore from "PhoneStore" /* 6622 */;
import RegistrationUIStore from "RegistrationUIStore" /* 16281 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, tmp3;

let FadeIn;
let FadeOut;
let c10;
let closure_12;
let closure_14;
let easingResult;
let map1;
let obj2;
let obj3;
let obj4;
let tmp12;
let unpackModuleId;
const getErrorDefault = tmp12(6637);
let user = ["ref"];
let closure_4 = ["password"];
let closure_5 = ["password"];
({ setRegistrationErrors: c10, useRegistrationUIStore: unpackModuleId } = RegistrationUIStore);
({ jsxs: closure_12, jsx: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { weak: obj2, medium: obj3, strong: obj4, passwordStrength: { marginTop: 4, marginBottom: 4 }, inputHint: { width: "100%" } };
obj2 = { color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
obj4 = { color: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
let closure_15 = createStyles(obj);
let obj5 = { entering: FadeIn.duration(300), exiting: FadeOut.duration(300) };
FadeIn = ReanimatedRexport.FadeIn;
FadeOut = ReanimatedRexport.FadeOut;
let obj6 = { layout: easingResult.duration(300) };
const LinearTransition = ReanimatedRexport.LinearTransition;
const easing = LinearTransition.easing;
const Easing = ReanimatedRexport.Easing;
easingResult = easing(Easing.inOut(ReanimatedRexport.Easing.quad));
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function PasswordStrength(passwordScore) {
  let isPasswordFocused;
  let items;
  let password;
  let passwordError;
  const obj = react2;
  const cResult = obj.c(10);
  passwordScore = passwordScore.passwordScore;
  ({ password, isPasswordFocused, passwordError } = passwordScore);
  const tmp4 = closure_15();
  if (null != passwordScore) {
    if (isPasswordFocused) {
      if (0 !== password.length) {
        if (null == passwordError) {
          let strong;
          let str;
          if (passwordScore <= usePasswordScore.PasswordScore.WEAK) {
            let first;
            const _Symbol2 = Symbol;
            if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = tmp(1126).intl;
              const stringResult = intl3.string(intl5.t["w/8TuV"]);
              cResult[0] = stringResult;
              first = stringResult;
            } else {
              first = cResult[0];
            }
            strong = tmp4.weak;
            str = first;
          } else if (passwordScore === usePasswordScore.PasswordScore.MEDIUM) {
            let tmp8;
            const _Symbol = Symbol;
            if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(1126).intl;
              const stringResult1 = intl2.string(intl5.t["2fmTpT"]);
              cResult[1] = stringResult1;
              tmp8 = stringResult1;
            } else {
              tmp8 = cResult[1];
            }
            strong = tmp4.medium;
            str = tmp8;
          } else {
            str = "";
            if (passwordScore === usePasswordScore.PasswordScore.STRONG) {
              let tmp5;
              const _Symbol4 = Symbol;
              if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
                const intl = tmp(1126).intl;
                const stringResult2 = intl.string(intl5.t.Xraqqc);
                cResult[2] = stringResult2;
                tmp5 = stringResult2;
              } else {
                tmp5 = cResult[2];
              }
              strong = tmp4.strong;
              str = tmp5;
            }
          }
          if (cResult[3] === strong) {
            let tmp13;
            let tmp15;
            if (cResult[4] === tmp4.passwordStrength) {
              tmp13 = cResult[5];
            }
            const _Symbol3 = Symbol;
            if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = tmp(1126).intl;
              const stringResult3 = intl4.string(intl5.t["5gbdUX"]);
              cResult[6] = stringResult3;
              tmp15 = stringResult3;
            } else {
              tmp15 = cResult[6];
            }
            if (cResult[7] === str) {
              let tmp17;
              if (cResult[8] === tmp13) {
                tmp17 = cResult[9];
              }
              return tmp17;
            }
            const obj2 = { variant: "text-xs/medium", style: tmp13, animated: true, children: items };
            const Text = tmp(5087).Text;
            const merged = Object.assign(obj5);
            const merged1 = Object.assign(obj6);
            items = [tmp15, ": ", str];
            const tmp25 = authStore2(Text, obj2);
            cResult[7] = str;
            cResult[8] = tmp13;
            cResult[9] = tmp25;
            tmp17 = tmp25;
          }
          const items1 = [tmp4.passwordStrength, strong];
          cResult[3] = strong;
          cResult[4] = tmp4.passwordStrength;
          cResult[5] = items1;
          tmp13 = items1;
        }
      }
    }
  }
  return null;
}) : (function PasswordStrength(passwordScore) {
  let isPasswordFocused;
  let items;
  let items1;
  let password;
  let passwordError;
  passwordScore = passwordScore.passwordScore;
  ({ password, isPasswordFocused, passwordError } = passwordScore);
  const tmp = closure_15();
  if (null != passwordScore) {
    if (isPasswordFocused) {
      if (0 !== password.length) {
        if (null == passwordError) {
          let str;
          let strong;
          if (passwordScore <= usePasswordScore.PasswordScore.WEAK) {
            const intl2 = tmp9(1126).intl;
            str = intl2.string(tmp9(1126).t["w/8TuV"]);
            strong = tmp.weak;
          } else if (passwordScore === usePasswordScore.PasswordScore.MEDIUM) {
            const intl = tmp9(1126).intl;
            str = intl.string(tmp9(1126).t["2fmTpT"]);
            strong = tmp.medium;
          } else {
            str = "";
            if (passwordScore === usePasswordScore.PasswordScore.STRONG) {
              const intl4 = tmp9(1126).intl;
              str = intl4.string(tmp9(1126).t.Xraqqc);
              strong = tmp.strong;
            }
          }
          const obj = { variant: "text-xs/medium", style: items, animated: true, children: items1 };
          const Text = tmp9(5087).Text;
          const merged = Object.assign(obj5);
          const merged1 = Object.assign(obj6);
          items = [tmp.passwordStrength, strong];
          const intl3 = tmp9(1126).intl;
          items1 = [intl3.string(intl5.t["5gbdUX"]), ": ", str];
          return authStore2(Text, obj);
        }
      }
    }
  }
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function RegisterPasswordInput(ref) {
  let autoFocus;
  let countryCode;
  let onPasswordChange;
  let onSubmitEditing;
  let password;
  let passwordScore;
  let returnKeyType;
  let tmp11;
  let tmp15;
  let tmp17;
  let tmp18;
  let tmp4;
  let tmp5;
  const tmp = onPasswordChange;
  const obj = onPasswordChange(576);
  const cResult = obj.c(51);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref, user);
    let num = 0;
    cResult[0] = ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    tmp5 = ref;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  closure_15();
  ({ password, onPasswordChange } = tmp4);
  ({ onSubmitEditing, passwordScore, returnKeyType, autoFocus } = tmp4);
  const ref1 = react.useRef(null);
  if (autoFocus == null) {
    autoFocus = false;
  }
  if (cResult[3] !== autoFocus) {
    const obj3 = { inputRef: ref1, enabled: autoFocus };
    cResult[3] = autoFocus;
    cResult[4] = obj3;
    tmp11 = obj3;
  } else {
    tmp11 = cResult[4];
  }
  useFocusRefOnNavigationDefault(tmp11);
  [tmp15, importDefault] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  [tmp17, dependencyMap] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor(arg0) {
        return ref.errors;
      }
    }
    cResult[5] = V;
    tmp18 = V;
  } else {
    class V {
      constructor(arg0) {
        return ref.errors;
      }
    }
  }
  const tmp19 = closure_11(tmp18);
  user = tmp19;
  if (cResult[6] !== tmp19) {
    class V {
      constructor(arg0) {
        return ref.errors;
      }
    }
    cResult[6] = tmp19;
    cResult[7] = getErrorDefault("password", tmp19);
    const tmp21 = getErrorDefault("password", tmp19);
  } else {
    class V {
      constructor(arg0) {
        return ref.errors;
      }
    }
  }
  if (cResult[8] === tmp19) {
    let tmp24;
    let tmp23;
    let tmp36;
    let tmp35;
    class V {
      constructor(arg0) {
        return ref.errors;
      }
    }
    const _Symbol = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor(arg0) {
          return ref.errors;
        }
      }
      const items = [PhoneStore];
      class Y {
        constructor() {
          FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
          num = 8;
          if (FRANCE_AND_FRENCH_REGION.has(closure_1_9.getCountryCode().alpha2)) {
            num = 12;
          }
          return num;
        }
      }
      cResult[11] = items;
      cResult[12] = Y;
      tmp24 = Y;
      tmp23 = items;
    } else {
      class V {
        constructor(arg0) {
          return ref.errors;
        }
      }
      tmp24 = cResult[12];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(tmp23, tmp24);
    if (tmp17) {
      class V {
        constructor(arg0) {
          return ref.errors;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor(arg0) {
          return ref.errors;
        }
      }
      cResult[15] = tmp29;
      class Y {
        constructor() {
          FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
          num = 8;
          if (FRANCE_AND_FRENCH_REGION.has(closure_1_9.getCountryCode().alpha2)) {
            num = 12;
          }
          return num;
        }
      }
    } else {
      class V {
        constructor(arg0) {
          return ref.errors;
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor(arg0) {
          return ref.errors;
        }
      }
      cResult[16] = tmp30;
      class Y {
        constructor() {
          FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
          num = 8;
          if (FRANCE_AND_FRENCH_REGION.has(closure_1_9.getCountryCode().alpha2)) {
            num = 12;
          }
          return num;
        }
      }
    } else {
      class V {
        constructor(arg0) {
          return ref.errors;
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor(arg0) {
          return ref.errors;
        }
      }
      cResult[17] = tmp32;
      class Y {
        constructor() {
          FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
          num = 8;
          if (FRANCE_AND_FRENCH_REGION.has(closure_1_9.getCountryCode().alpha2)) {
            num = 12;
          }
          return num;
        }
      }
    } else {
      class V {
        constructor(arg0) {
          return ref.errors;
        }
      }
    }
    if (cResult[18] !== tmp5) {
      class V {
        constructor(arg0) {
          return ref.errors;
        }
      }
      const mergeRefsResult = obj5.mergeRefs(tmp5, ref1);
      class Y {
        constructor() {
          FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
          num = 8;
          if (FRANCE_AND_FRENCH_REGION.has(closure_1_9.getCountryCode().alpha2)) {
            num = 12;
          }
          return num;
        }
      }
      cResult[19] = mergeRefsResult;
    } else {
      class V {
        constructor(arg0) {
          return ref.errors;
        }
      }
    }
    const _Symbol5 = Symbol;
    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor(arg0) {
          return ref.errors;
        }
      }
      const stringResult = obj6.string(tmp(1126).t["CIGa+7"]);
      class Y {
        constructor() {
          FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
          num = 8;
          if (FRANCE_AND_FRENCH_REGION.has(closure_1_9.getCountryCode().alpha2)) {
            num = 12;
          }
          return num;
        }
      }
      const stringResult1 = obj7.string(tmp(1126).t.cUVsEG);
      cResult[20] = stringResult;
      cResult[21] = stringResult1;
      tmp36 = stringResult1;
      tmp35 = stringResult;
    } else {
      class V {
        constructor(arg0) {
          return ref.errors;
        }
      }
      tmp36 = cResult[21];
    }
    if (returnKeyType == null) {
      class V {
        constructor(arg0) {
          return ref.errors;
        }
      }
    }
    if (tmp15) {
      class V {
        constructor(arg0) {
          return ref.errors;
        }
      }
    } else {
      class V {
        constructor(arg0) {
          return ref.errors;
        }
      }
    }
    if (cResult[22] !== tmp15) {
      class V {
        constructor(arg0) {
          return ref.errors;
        }
      }
      const string = tmp42.string;
      const t = tmp(1126).t;
      class Y {
        constructor() {
          FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
          num = 8;
          if (FRANCE_AND_FRENCH_REGION.has(closure_1_9.getCountryCode().alpha2)) {
            num = 12;
          }
          return num;
        }
      }
      cResult[22] = tmp15;
      cResult[23] = tmp43;
    } else {
      class V {
        constructor(arg0) {
          return ref.errors;
        }
      }
    }
    const _Symbol6 = Symbol;
    if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor(arg0) {
          return ref.errors;
        }
      }
      cResult[24] = tmp44;
      class Y {
        constructor() {
          FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
          num = 8;
          if (FRANCE_AND_FRENCH_REGION.has(closure_1_9.getCountryCode().alpha2)) {
            num = 12;
          }
          return num;
        }
      }
    } else {
      class V {
        constructor(arg0) {
          return ref.errors;
        }
      }
    }
    if (cResult[25] !== tmp41) {
      class V {
        constructor(arg0) {
          return ref.errors;
        }
      }
      tmp46[0] = tmp41;
      tmp46[1] = tmp31;
      class Y {
        constructor() {
          FRANCE_AND_FRENCH_REGION = onPasswordChange(closure_2[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
          num = 8;
          if (FRANCE_AND_FRENCH_REGION.has(closure_1_9.getCountryCode().alpha2)) {
            num = 12;
          }
          return num;
        }
      }
      cResult[25] = tmp41;
      cResult[26] = tmp46;
    } else {
      class V {
        constructor(arg0) {
          return ref.errors;
        }
      }
    }
    if (null != tmp20) {
      class V {
        constructor(arg0) {
          return ref.errors;
        }
      }
    }
    if (cResult[27] === tmp22) {
      class V {
        constructor(arg0) {
          return ref.errors;
        }
      }
    }
    const obj4 = { ref: tmp33, textContentType: "newPassword", autoComplete: "new-password", onChange: tmp22, value: password, label: tmp35, accessibilityHint: tmp36, secureTextEntry: !tmp15, returnKeyType, autoCapitalize: "none", onSubmitEditing, onFocus: tmp28, onBlur: null, trailingIcon: tmp40, trailingPressableProps: tmp45, errorMessage: tmp20, status: undefined };
    class W {
      constructor(arg0) {
        tmp = closure_3;
        if (null != closure_3.password) {
          password = tmp.password;
          tmp2 = closure_7;
          tmp3 = closure_4;
          tmp4 = setRegistrationErrors;
          tmp5 = setRegistrationErrors(closure_7(tmp, closure_4));
        }
        tmp6 = onPasswordChange(ref);
        return;
      }
    }
    cResult[27] = tmp22;
    cResult[28] = onSubmitEditing;
    cResult[29] = password;
    cResult[30] = tmp20;
    cResult[31] = tmp33;
    cResult[32] = !tmp15;
    cResult[33] = returnKeyType;
    cResult[34] = tmp40;
    cResult[35] = tmp45;
    cResult[36] = undefined;
    cResult[37] = closure_13(tmp(6290).TextInput, obj4);
    const tmp50 = closure_13(tmp(6290).TextInput, obj4);
  }
  class W {
    constructor(arg0) {
      tmp = closure_3;
      if (null != closure_3.password) {
        password = tmp.password;
        tmp2 = closure_7;
        tmp3 = closure_4;
        tmp4 = setRegistrationErrors;
        tmp5 = setRegistrationErrors(closure_7(tmp, closure_4));
      }
      tmp6 = onPasswordChange(ref);
      return;
    }
  }
  cResult[8] = tmp19;
  cResult[9] = onPasswordChange;
  cResult[10] = W;
}) : (function RegisterPasswordInput(ref) {
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
  let closure_3;
  user = undefined;
  let stateFromStores;
  ({ password, onPasswordChange } = merged);
  ({ returnKeyType, autoFocus } = merged);
  let obj = react;
  ({ onSubmitEditing, passwordScore } = merged);
  const tmp2 = closure_15();
  const ref1 = react.useRef(null);
  const obj2 = { inputRef: ref1, enabled: autoFocus };
  const tmp4 = importDefault;
  const tmp6 = require("useFocusRefOnNavigation");
  if (autoFocus == null) {
    autoFocus = false;
  }
  tmp6(obj2);
  [tmp9, tmp10] = obj.useState(false);
  importDefault = tmp10;
  _slicedToArray(obj.useState(false), 2);
  const tmp11 = _slicedToArray(obj.useState(false), 2);
  isPasswordFocused = tmp11[0];
  closure_3 = tmp13;
  const tmp14 = closure_11((errors) => errors.errors);
  user = tmp14;
  const tmp15 = tmp4(isPasswordFocused[15])("password", tmp14);
  const items = [onPasswordChange, tmp14];
  const callback = obj.useCallback((arg0) => {
    if (null != user.password) {
      const password = tmp.password;
      authStore(_objectWithoutProperties(user, closure_5));
    }
    onPasswordChange(arg0);
  }, items);
  const items1 = [PhoneStore];
  const obj3 = onPasswordChange(isPasswordFocused[17]);
  stateFromStores = obj3.useStateFromStores(items1, () => {
    const FRANCE_AND_FRENCH_REGION = onPasswordChange(first[16]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
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
  const obj4 = { ref: obj5.mergeRefs(ref, ref1), textContentType: "newPassword", autoComplete: "new-password", onChange: callback, value: password, label: intl.string(onPasswordChange(isPasswordFocused[12]).t["CIGa+7"]), accessibilityHint: intl2.string(onPasswordChange(isPasswordFocused[12]).t.cUVsEG), secureTextEntry: !tmp9, returnKeyType, autoCapitalize: "none", onSubmitEditing, onFocus: callback1, onBlur: callback2, trailingIcon: EyeIcon, trailingPressableProps: { accessibilityLabel: stringResult, onPress: callback3, hitSlop: { top: 8, bottom: 8 } }, errorMessage: tmp15, status: str };
  const TextInput = onPasswordChange(tmp5[21]).TextInput;
  obj5 = onPasswordChange(isPasswordFocused[18]);
  intl = onPasswordChange(tmp5[12]).intl;
  intl2 = onPasswordChange(tmp5[12]).intl;
  const tmp23 = closure_12;
  const tmp24 = closure_14;
  if (returnKeyType == null) {
    returnKeyType = "next";
  }
  if (tmp9) {
    EyeIcon = tmp17(tmp5[19]).EyeSlashIcon;
  } else {
    EyeIcon = tmp17(tmp5[20]).EyeIcon;
  }
  const intl3 = tmp17(tmp5[12]).intl;
  const string = intl3.string;
  const t = tmp17(tmp5[12]).t;
  if (tmp9) {
    stringResult = string(t.Nusip4);
  } else {
    stringResult = string(t.nFzpM5);
  }
  str = undefined;
  if (null != tmp15) {
    str = "error";
  }
  const children = [closure_13(TextInput, obj4), closure_13(closure_18, { password, isPasswordFocused, passwordError: tmp15, passwordScore }), ];
  let tmp25Result = null;
  if (null != memo) {
    tmp25Result = null;
    if (null == tmp15) {
      obj6 = { style: tmp2.inputHint, variant: "text-xs/medium", color: "text-muted", animated: true, children: memo };
      const Text = tmp17(tmp5[13]).Text;
      const merged1 = Object.assign(obj5);
      const merged2 = Object.assign(obj6);
      tmp25Result = tmp25(Text, obj6);
    }
  }
  children[2] = tmp25Result;
  return tmp23(tmp24, { children });
});
const result = size.fileFinishedImporting("modules/auth/native/components/RegisterPasswordInput.tsx");

export const RegisterPasswordInput = tmp5;
