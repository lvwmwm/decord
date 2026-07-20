// Module ID: 14625
// Function ID: 110323
// Name: PasswordStrength
// Dependencies: []

// Module 14625 (PasswordStrength)
function PasswordStrength(passwordScore) {
  let isPasswordFocused;
  let password;
  let passwordError;
  passwordScore = passwordScore.passwordScore;
  ({ password, isPasswordFocused, passwordError } = passwordScore);
  const tmp = callback5();
  if (null != passwordScore) {
    if (isPasswordFocused) {
      if (0 !== password.length) {
        if (null == passwordError) {
          if (passwordScore <= arg1(dependencyMap[9]).PasswordScore.WEAK) {
            const intl2 = arg1(dependencyMap[10]).intl;
            let str = intl2.string(arg1(dependencyMap[10]).t.w/8TuV);
            let strong = tmp.weak;
          } else if (passwordScore === arg1(dependencyMap[9]).PasswordScore.MEDIUM) {
            const intl = arg1(dependencyMap[10]).intl;
            str = intl.string(arg1(dependencyMap[10]).t.2fmTpT);
            strong = tmp.medium;
          } else {
            str = "";
            if (passwordScore === arg1(dependencyMap[9]).PasswordScore.STRONG) {
              const intl4 = arg1(dependencyMap[10]).intl;
              str = intl4.string(arg1(dependencyMap[10]).t.Xraqqc);
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
          const intl3 = arg1(dependencyMap[10]).intl;
          const items1 = [intl3.string(arg1(dependencyMap[10]).t.5gbdUX), ": ", str];
          obj["children"] = items1;
          return callback3(arg1(dependencyMap[11]).Text, obj);
        }
      }
    }
  }
  return null;
}
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
({ setRegistrationErrors: closure_8, useRegistrationUIStore: closure_9 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
({ jsxs: closure_10, jsx: closure_11, Fragment: closure_12 } = arg1(dependencyMap[5]));
let obj1 = arg1(dependencyMap[6]);
let obj = {};
obj = { color: importDefault(dependencyMap[7]).colors.TEXT_FEEDBACK_CRITICAL };
obj.weak = obj;
obj1 = { color: importDefault(dependencyMap[7]).colors.TEXT_FEEDBACK_WARNING };
obj.medium = obj1;
const tmp3 = arg1(dependencyMap[5]);
obj.strong = { color: importDefault(dependencyMap[7]).colors.TEXT_FEEDBACK_POSITIVE };
obj.passwordStrength = {};
obj.inputHint = { width: "100%" };
let closure_13 = obj1.createStyles(obj);
const obj3 = {};
const FadeIn = arg1(dependencyMap[8]).FadeIn;
obj3.entering = require("module_300");
const FadeOut = arg1(dependencyMap[8]).FadeOut;
obj3.exiting = require("module_300");
const obj4 = {};
const LinearTransition = arg1(dependencyMap[8]).LinearTransition;
const Easing = arg1(dependencyMap[8]).Easing;
const obj2 = { color: importDefault(dependencyMap[7]).colors.TEXT_FEEDBACK_POSITIVE };
obj4.layout = require("module_300");
const easingResult = LinearTransition.easing(Easing.inOut(arg1(dependencyMap[8]).Easing.quad));
const forwardRefResult = importAllResult.forwardRef((arg0, closure_18) => {
  let autoFocus;
  let onPasswordChange;
  let onSubmitEditing;
  let password;
  let passwordScore;
  let returnKeyType;
  ({ password, onPasswordChange } = arg0);
  closure_18 = onPasswordChange;
  ({ returnKeyType, autoFocus } = arg0);
  ({ onSubmitEditing, passwordScore } = arg0);
  const ref = importAllResult.useRef(null);
  let obj = { inputRef: ref };
  let tmp4 = null != autoFocus;
  const tmp = callback5();
  if (tmp4) {
    tmp4 = autoFocus;
  }
  obj.enabled = tmp4;
  importDefault(dependencyMap[12])(obj);
  const tmp6 = callback(importAllResult.useState(false), 2);
  const first = tmp6[0];
  const importDefault = tmp8;
  const tmp9 = callback(importAllResult.useState(false), 2);
  const first1 = tmp9[0];
  const dependencyMap = first1;
  let closure_3 = tmp11;
  const tmp12 = callback2((errors) => errors.errors);
  let closure_4 = tmp12;
  const tmp13 = importDefault(dependencyMap[13])("password", tmp12);
  const items = [onPasswordChange, tmp12];
  let callback = importAllResult.useCallback((arg0) => {
    if (null != tmp12.password) {
      const password = tmp12.password;
      callback(tmp12(tmp12, tmp11));
    }
    onPasswordChange(arg0);
  }, items);
  let obj1 = closure_18(dependencyMap[14]);
  const items1 = [closure_7];
  const stateFromStores = obj1.useStateFromStores(items1, () => {
    const FRANCE_AND_FRENCH_REGION = onPasswordChange(first1[15]).CountryCodesSets.FRANCE_AND_FRENCH_REGION;
    let num = 8;
    if (FRANCE_AND_FRENCH_REGION.has(countryCode.getCountryCode().alpha2)) {
      num = 12;
    }
    return num;
  });
  callback = stateFromStores;
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
  obj = { "Bool(true)": "r", "Bool(true)": "usePanGestureProxy", "Bool(true)": "retry" };
  const tmp20 = closure_10;
  const tmp21 = closure_12;
  const tmp22 = callback4;
  const tmp3 = importDefault(dependencyMap[12]);
  obj.ref = closure_18(dependencyMap[17]).mergeRefs(closure_18, ref);
  obj.onChange = callback;
  obj.value = password;
  const intl = closure_18(dependencyMap[10]).intl;
  obj.label = intl.string(closure_18(dependencyMap[10]).t.CIGa+7);
  const intl2 = closure_18(dependencyMap[10]).intl;
  obj.accessibilityHint = intl2.string(closure_18(dependencyMap[10]).t.cUVsEG);
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
  const intl3 = closure_18(dependencyMap[10]).intl;
  const string = intl3.string;
  const t = closure_18(dependencyMap[10]).t;
  if (first) {
    let stringResult = string(t.Nusip4);
  } else {
    stringResult = string(t.nFzpM5);
  }
  obj1.accessibilityLabel = stringResult;
  obj1.onPress = callback3;
  obj1.hitSlop = {};
  obj.trailingPressableProps = obj1;
  obj.errorMessage = tmp13;
  let str2;
  if (null != tmp13) {
    str2 = "error";
  }
  obj.status = str2;
  const items6 = [tmp22(closure_18(dependencyMap[16]).TextInput, obj), callback4(PasswordStrength, { password, isPasswordFocused: first1, passwordError: tmp13, passwordScore }), ];
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
      tmp26 = callback4(closure_18(dependencyMap[11]).Text, obj2);
    }
  }
  items6[2] = tmp26;
  obj.children = items6;
  return tmp20(tmp21, obj);
});
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/auth/native/components/RegisterPasswordInput.tsx");

export const RegisterPasswordInput = forwardRefResult;
