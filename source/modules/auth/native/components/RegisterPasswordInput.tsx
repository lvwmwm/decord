// Module ID: 14805
// Function ID: 112905
// Name: PasswordStrength
// Dependencies: [29, 57, 31, 9232, 14778, 33, 4130, 689, 3991, 14802, 1212, 4126, 14796, 9245, 566, 3813, 7574, 3838, 9254, 8777, 2]

// Module 14805 (PasswordStrength)
import _objectWithoutProperties from "_objectWithoutProperties";
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import useRegistrationUIStore from "useRegistrationUIStore";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { FadeIn } from "module_3991";
import { FadeOut } from "module_3991";
import { LinearTransition } from "module_3991";
import { Easing } from "module_3991";

let closure_10;
let closure_11;
let closure_12;
let closure_8;
let closure_9;
const require = arg1;
function PasswordStrength(passwordScore) {
  let isPasswordFocused;
  let password;
  let passwordError;
  passwordScore = passwordScore.passwordScore;
  ({ password, isPasswordFocused, passwordError } = passwordScore);
  const tmp = callback4();
  if (null != passwordScore) {
    if (isPasswordFocused) {
      if (0 !== password.length) {
        if (null == passwordError) {
          if (passwordScore <= require(14802) /* PasswordScore */.PasswordScore.WEAK) {
            const intl2 = require(1212) /* getSystemLocale */.intl;
            let str = intl2.string(require(1212) /* getSystemLocale */.t["w/8TuV"]);
            let strong = tmp.weak;
          } else if (passwordScore === require(14802) /* PasswordScore */.PasswordScore.MEDIUM) {
            const intl = require(1212) /* getSystemLocale */.intl;
            str = intl.string(require(1212) /* getSystemLocale */.t["2fmTpT"]);
            strong = tmp.medium;
          } else {
            str = "";
            if (passwordScore === require(14802) /* PasswordScore */.PasswordScore.STRONG) {
              const intl4 = require(1212) /* getSystemLocale */.intl;
              str = intl4.string(require(1212) /* getSystemLocale */.t.Xraqqc);
              strong = tmp.strong;
            }
          }
          const obj = {};
          const merged = Object.assign(obj3);
          const merged1 = Object.assign(obj4);
          obj["variant"] = "text-xs/medium";
          const items = [tmp.passwordStrength, strong];
          obj["style"] = items;
          obj["animated"] = true;
          const intl3 = require(1212) /* getSystemLocale */.intl;
          const items1 = [intl3.string(require(1212) /* getSystemLocale */.t["5gbdUX"]), ": ", str];
          obj["children"] = items1;
          return callback2(require(4126) /* Text */.Text, obj);
        }
      }
    }
  }
  return null;
}
let closure_3 = ["password"];
({ setRegistrationErrors: closure_8, useRegistrationUIStore: closure_9 } = useRegistrationUIStore);
({ jsxs: closure_10, jsx: closure_11, Fragment: closure_12 } = jsxProd);
let obj = {};
obj = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_CRITICAL };
obj.weak = obj;
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_WARNING };
obj.medium = _createForOfIteratorHelperLoose;
obj.strong = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_POSITIVE };
obj.passwordStrength = { marginTop: 4, marginBottom: 4 };
obj.inputHint = { width: "100%" };
let closure_13 = _createForOfIteratorHelperLoose.createStyles(obj);
const obj3 = {};
obj3.entering = require("module_300");
obj3.exiting = require("module_300");
const obj4 = {};
let obj2 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_FEEDBACK_POSITIVE };
obj4.layout = require("module_300");
const easingResult = LinearTransition.easing(Easing.inOut(require("module_3991").Easing.quad));
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  let autoFocus;
  let onPasswordChange;
  let onSubmitEditing;
  let password;
  let passwordScore;
  let returnKeyType;
  ({ password, onPasswordChange } = arg0);
  ({ returnKeyType, autoFocus } = arg0);
  ({ onSubmitEditing, passwordScore } = arg0);
  ref = importAllResult.useRef(null);
  let obj = { inputRef: ref };
  let tmp4 = null != autoFocus;
  const tmp = callback4();
  if (tmp4) {
    tmp4 = autoFocus;
  }
  obj.enabled = tmp4;
  importDefault(first1[12])(obj);
  const tmp6 = stateFromStores(importAllResult.useState(false), 2);
  const first = tmp6[0];
  importDefault = tmp8;
  const tmp9 = stateFromStores(importAllResult.useState(false), 2);
  first1 = tmp9[0];
  let closure_3 = tmp11;
  const tmp12 = callback((errors) => errors.errors);
  let _objectWithoutProperties = tmp12;
  const tmp13 = importDefault(first1[13])("password", tmp12);
  const items = [onPasswordChange, tmp12];
  callback = importAllResult.useCallback((arg0) => {
    if (null != tmp12.password) {
      const password = tmp12.password;
      outer1_8(tmp12(tmp12, closure_3));
    }
    onPasswordChange(arg0);
  }, items);
  let obj1 = onPasswordChange(first1[14]);
  const items1 = [_isNativeReflectConstruct];
  stateFromStores = obj1.useStateFromStores(items1, () => {
    const FRANCE_AND_FRENCH_REGION = onPasswordChange(first1[15]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
    let num = 8;
    if (FRANCE_AND_FRENCH_REGION.has(outer1_7.getCountryCode().alpha2)) {
      num = 12;
    }
    return num;
  });
  const items2 = [first1, stateFromStores];
  const memo = importAllResult.useMemo(() => {
    if (first1) {
      const intl = onPasswordChange(first1[10]).intl;
      const obj = { minimumLength: stateFromStores };
      return intl.format(onPasswordChange(first1[10]).t.VUUJ6V, obj);
    }
  }, items2);
  const items3 = [tmp9[1]];
  const items4 = [tmp9[1]];
  const callback1 = importAllResult.useCallback(() => {
    tmp11(true);
  }, items3);
  const items5 = [tmp6[1]];
  const callback2 = importAllResult.useCallback(() => {
    tmp11(false);
  }, items4);
  obj = {};
  const callback3 = importAllResult.useCallback(() => {
    tmp8((arg0) => !arg0);
  }, items5);
  obj = { ref: null, textContentType: "newPassword", autoComplete: "new-password" };
  const tmp20 = closure_10;
  const tmp21 = closure_12;
  const tmp22 = callback3;
  const tmp3 = importDefault(first1[12]);
  obj.ref = onPasswordChange(first1[17]).mergeRefs(ref, ref);
  obj.onChange = callback;
  obj.value = password;
  let intl = onPasswordChange(first1[10]).intl;
  obj.label = intl.string(onPasswordChange(first1[10]).t["CIGa+7"]);
  const intl2 = onPasswordChange(first1[10]).intl;
  obj.accessibilityHint = intl2.string(onPasswordChange(first1[10]).t.cUVsEG);
  obj.secureTextEntry = !first;
  let str = "next";
  if (null != returnKeyType) {
    str = returnKeyType;
  }
  obj.returnKeyType = str;
  obj.autoCapitalize = "none";
  obj.onSubmitEditing = onSubmitEditing;
  obj.onFocus = callback1;
  obj.onBlur = callback2;
  if (first) {
    let EyeIcon = tmp23(tmp24[18]).EyeSlashIcon;
  } else {
    EyeIcon = tmp23(tmp24[19]).EyeIcon;
  }
  obj.trailingIcon = EyeIcon;
  obj1 = {};
  const intl3 = onPasswordChange(first1[10]).intl;
  const string = intl3.string;
  const t = onPasswordChange(first1[10]).t;
  if (first) {
    let stringResult = string(t.Nusip4);
  } else {
    stringResult = string(t.nFzpM5);
  }
  obj1.accessibilityLabel = stringResult;
  obj1.onPress = callback3;
  obj1.hitSlop = { top: 8, bottom: 8 };
  obj.trailingPressableProps = obj1;
  obj.errorMessage = tmp13;
  let str2;
  if (null != tmp13) {
    str2 = "error";
  }
  obj.status = str2;
  const items6 = [tmp22(onPasswordChange(first1[16]).TextInput, obj), callback3(PasswordStrength, { password, isPasswordFocused: first1, passwordError: tmp13, passwordScore }), ];
  let tmp26 = null;
  if (null != memo) {
    tmp26 = null;
    if (null == tmp13) {
      const obj2 = {};
      const merged = Object.assign(obj3);
      const merged1 = Object.assign(obj4);
      obj2["style"] = tmp.inputHint;
      obj2["variant"] = "text-xs/medium";
      obj2["color"] = "text-muted";
      obj2["animated"] = true;
      obj2["children"] = memo;
      tmp26 = callback3(onPasswordChange(first1[11]).Text, obj2);
    }
  }
  items6[2] = tmp26;
  obj.children = items6;
  return tmp20(tmp21, obj);
});
const result = require("result").fileFinishedImporting("modules/auth/native/components/RegisterPasswordInput.tsx");

export const RegisterPasswordInput = forwardRefResult;
