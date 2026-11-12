// Module ID: 18546
// Function ID: 18547
// Name: RegisterUsernameInput
// Dependencies: [109, 32, 19, 18519, 21, 5243, 1652, 17108, 6274, 7557, 575, 5866, 1113, 16370, 7553, 1377, 2]
// Exports: RegisterUsernameInput

// Module 18546 (RegisterUsernameInput)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import _mod1652 from "module_1652" /* 1652 */;
import Text_Text from "Text/Text" /* 5866 */;
import useFocusRefOnNavigationDefault from "useFocusRefOnNavigation" /* 16370 */;
import UniqueUsernamesTypes from "UniqueUsernamesTypes" /* 17108 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import RegistrationUIStore from "RegistrationUIStore" /* 18519 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault;

let FadeIn;
let FadeOut;
let c10;
let c9;
let easingResult;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
function UsernameStatusMessage(arg0) {
  let intl;
  let isUsernameFocused;
  let items;
  let obj6;
  let tmp6;
  let usernameStatus;
  ({ usernameStatus, isUsernameFocused } = arg0);
  const tmp = closure_12();
  let type;
  if (usernameStatus != null) {
    type = usernameStatus.type;
  }
  if (type === UniqueUsernamesTypes.NameValidationState.ERROR) {
    obj2 = { direction: "horizontal", spacing: 4, align: "flex-start", children: items };
    const Stack = tmp3(6274).Stack;
    const obj3 = { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
    const CircleErrorIcon = tmp3(7557).CircleErrorIcon;
    items = [React4(CircleErrorIcon, obj3), ];
    const obj4 = { variant: "body-xs/medium", color: "text-feedback-critical", style: tmp.status, animated: true, children: usernameStatus.message };
    const Text3 = tmp3(5866).Text;
    const merged = Object.assign(obj);
    const merged1 = Object.assign(obj2);
    items[1] = React4(Text3, obj4);
    tmp6 = authStore(Stack, obj2);
  } else {
    if (isUsernameFocused) {
      let type1;
      if (usernameStatus != null) {
        type1 = usernameStatus.type;
      }
      if (type1 === UniqueUsernamesTypes.NameValidationState.AVAILABLE) {
        const obj5 = { style: tmp.status, variant: "body-xs/medium", animated: true, children: React4(Text_Text.Text, obj6) };
        const Text2 = tmp3(5866).Text;
        const merged2 = Object.assign(obj);
        const merged3 = Object.assign(obj2);
        obj6 = { variant: "body-xs/medium", color: "text-feedback-positive", children: usernameStatus.message };
        tmp6 = React4(Text2, obj5);
      }
    }
    tmp6 = null;
    if (isUsernameFocused) {
      obj = { style: tmp.inputHint, variant: "body-xs/medium", color: "text-muted", animated: true, children: intl.string(intl3.t.y7LSyU) };
      const Text = tmp3(5866).Text;
      const merged4 = Object.assign(obj);
      const merged5 = Object.assign(obj2);
      intl = tmp3(1113).intl;
      tmp6 = React4(Text, obj);
    }
  }
  return tmp6;
}
let closure_3 = ["username"];
({ setRegistrationErrors: metroImportDefault, useRegistrationUIStore: metroImportAll } = RegistrationUIStore);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles({ status: { width: "90%" }, inputHint: { width: "100%" } });
let obj = { entering: FadeIn.duration(300), exiting: FadeOut.duration(300) };
FadeIn = _mod1652.FadeIn;
FadeOut = _mod1652.FadeOut;
let obj2 = { layout: easingResult.duration(300) };
const LinearTransition = _mod1652.LinearTransition;
const easing = LinearTransition.easing;
const Easing = _mod1652.Easing;
easingResult = easing(Easing.inOut(_mod1652.Easing.quad));
const result = size.fileFinishedImporting("modules/auth/native/components/RegisterUsernameInput.tsx");

export function RegisterUsernameInput(setUsername) {
  let autoFocus;
  let closure_1;
  let intl;
  let intl2;
  let items3;
  let obj4;
  let onSubmitEditing;
  let str;
  let str2;
  let submitBehavior;
  let user;
  let username;
  let usernameStatus;
  setUsername = setUsername.setUsername;
  ({ usernameStatus, autoFocus } = setUsername);
  importDefault = undefined;
  dependencyMap = undefined;
  ({ username, onSubmitEditing, submitBehavior } = setUsername);
  const ref = react.useRef(null);
  obj2 = { inputRef: ref, enabled: autoFocus };
  const tmp3 = useFocusRefOnNavigationDefault;
  if (autoFocus == null) {
    autoFocus = false;
  }
  tmp3(obj2);
  const tmp5 = _slicedToArray(obj.useState(true), 2);
  importDefault = tmp7;
  const first = tmp5[0];
  const tmp8 = closure_8((errors) => errors.errors);
  dependencyMap = tmp8;
  const items = [tmp8, setUsername];
  const items1 = [tmp5[1]];
  const callback = obj.useCallback((str) => {
    if (null != user.username) {
      const username = tmp.username;
      metroImportDefault(_objectWithoutProperties(user, closure_3));
    }
    setUsername(str.toLowerCase());
  }, items);
  const items2 = [tmp5[1]];
  const callback1 = obj.useCallback(() => {
    closure_1(true);
  }, items1);
  const callback2 = obj.useCallback(() => {
    closure_1(false);
  }, items2);
  const obj3 = { ref, label: intl.string(setUsername(1113).t.IEpCBQ), accessibilityHint: intl2.string(setUsername(1113).t["47dcUZ"]), onChange: callback, autoCorrect: false, secureTextEntry: obj4.isAndroid(), keyboardType: str, value: username, onSubmitEditing, returnKeyType: "next", autoComplete: "username", textContentType: "username", autoCapitalize: "none", onFocus: callback1, onBlur: callback2, clearable: true, status: str2, submitBehavior };
  const TextInput = setUsername(7553).TextInput;
  intl = setUsername(1113).intl;
  intl2 = setUsername(1113).intl;
  str = "default";
  obj4 = setUsername(1377);
  const obj5 = setUsername(1377);
  const tmp12 = closure_10;
  const tmp13 = closure_11;
  const tmp15 = setUsername;
  if (obj5.isAndroid()) {
    str = "visible-password";
  }
  let type;
  if (usernameStatus != null) {
    type = usernameStatus.type;
  }
  str2 = undefined;
  if (type === tmp15(17108).NameValidationState.ERROR) {
    str2 = "error";
  }
  const obj6 = { children: items3 };
  items3 = [closure_9(TextInput, obj3), closure_9(UsernameStatusMessage, { usernameStatus, isUsernameFocused: first })];
  return tmp12(tmp13, obj6);
}
