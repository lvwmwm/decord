// Module ID: 14634
// Function ID: 110370
// Name: UsernameStatusMessage
// Dependencies: [0, 0, 0, 0, 0]
// Exports: RegisterUsernameInput

// Module 14634 (UsernameStatusMessage)
import closure_4 from "result";
import closure_5 from "result";
import closure_6 from "result";
import result from "result";
import result from "result";

function UsernameStatusMessage(arg0) {
  let isUsernameFocused;
  let usernameStatus;
  ({ usernameStatus, isUsernameFocused } = arg0);
  const tmp = callback5();
  let type;
  if (null != usernameStatus) {
    type = usernameStatus.type;
  }
  if (type === arg1(dependencyMap[7]).NameValidationState.ERROR) {
    let obj = { 9223372036854775807: null, 9223372036854775807: "\u{1F44A}\u{1F3FC}", -9223372036854775808: true };
    obj = { size: "xs", color: importDefault(dependencyMap[10]).colors.TEXT_FEEDBACK_CRITICAL };
    const items = [callback3(arg1(dependencyMap[9]).CircleErrorIcon, obj), ];
    const obj1 = { style: tmp.status };
    const merged = Object.assign(obj);
    const merged1 = Object.assign(obj);
    obj1["animated"] = true;
    obj1["children"] = usernameStatus.message;
    items[1] = callback3(arg1(dependencyMap[11]).Text, obj1);
    obj.children = items;
    let tmp6 = callback4(arg1(dependencyMap[8]).Stack, obj);
  } else {
    if (isUsernameFocused) {
      let type1;
      if (null != usernameStatus) {
        type1 = usernameStatus.type;
      }
      if (type1 === arg1(dependencyMap[7]).NameValidationState.AVAILABLE) {
        const obj2 = {};
        const merged2 = Object.assign(obj);
        const merged3 = Object.assign(obj);
        obj2["style"] = tmp.status;
        obj2["variant"] = "text-xs/medium";
        obj2["animated"] = true;
        const obj3 = { hasMaxConnections: null, isBoostOnlySubscription: "text-lg/semibold", children: usernameStatus.message };
        obj2["children"] = callback3(arg1(dependencyMap[11]).Text, obj3);
        tmp6 = callback3(arg1(dependencyMap[11]).Text, obj2);
      }
    }
    tmp6 = null;
    if (isUsernameFocused) {
      obj = {};
      const merged4 = Object.assign(obj);
      const merged5 = Object.assign(obj);
      obj["style"] = tmp.inputHint;
      obj["variant"] = "text-xs/medium";
      obj["color"] = "text-muted";
      obj["animated"] = true;
      const intl = arg1(dependencyMap[12]).intl;
      obj["children"] = intl.string(arg1(dependencyMap[12]).t.y7LSyU);
      tmp6 = callback3(arg1(dependencyMap[11]).Text, obj);
    }
  }
  return tmp6;
}
let closure_3 = [];
({ setRegistrationErrors: closure_7, useRegistrationUIStore: closure_8 } = result);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = result);
let obj = arg1(dependencyMap[5]);
let closure_12 = obj.createStyles({ status: { width: "90%" }, inputHint: { width: "100%" } });
obj = {};
const FadeIn = arg1(dependencyMap[6]).FadeIn;
obj.entering = require("module_300");
const FadeOut = arg1(dependencyMap[6]).FadeOut;
obj.exiting = require("module_300");
obj = {};
const LinearTransition = arg1(dependencyMap[6]).LinearTransition;
const Easing = arg1(dependencyMap[6]).Easing;
obj.layout = require("module_300");
const easingResult = LinearTransition.easing(Easing.inOut(arg1(dependencyMap[6]).Easing.quad));
result = arg1(dependencyMap[16]).fileFinishedImporting("modules/auth/native/components/RegisterUsernameInput.tsx");

export const RegisterUsernameInput = function RegisterUsernameInput(setUsername) {
  let autoFocus;
  let onSubmitEditing;
  let submitBehavior;
  let username;
  let usernameStatus;
  setUsername = setUsername.setUsername;
  const arg1 = setUsername;
  ({ usernameStatus, autoFocus } = setUsername);
  let importDefault;
  let dependencyMap;
  ({ username, onSubmitEditing, submitBehavior } = setUsername);
  const ref = React.useRef(null);
  let obj = { inputRef: ref };
  let tmp3 = null != autoFocus;
  if (tmp3) {
    tmp3 = autoFocus;
  }
  obj.enabled = tmp3;
  importDefault(dependencyMap[13])(obj);
  const tmp5 = callback(React.useState(true), 2);
  importDefault = tmp6;
  const tmp7 = callback2((errors) => errors.errors);
  dependencyMap = tmp7;
  const items = [tmp7, setUsername];
  const items1 = [tmp5[1]];
  const callback = React.useCallback((str) => {
    if (null != tmp7.username) {
      const username = tmp7.username;
      callback2(callback(tmp7, closure_3));
    }
    const tmp7 = setUsername(str.toLowerCase());
  }, items);
  const items2 = [tmp5[1]];
  const callback1 = React.useCallback(() => {
    tmp6(true);
  }, items1);
  obj = {};
  const callback2 = React.useCallback(() => {
    tmp6(false);
  }, items2);
  obj = { ref };
  const intl = arg1(dependencyMap[12]).intl;
  obj.label = intl.string(arg1(dependencyMap[12]).t.IEpCBQ);
  const intl2 = arg1(dependencyMap[12]).intl;
  obj.accessibilityHint = intl2.string(arg1(dependencyMap[12]).t.47dcUZ);
  obj.onChange = callback;
  obj.autoCorrect = false;
  const tmp11 = closure_10;
  const tmp12 = closure_11;
  const tmp13 = callback3;
  const tmp2 = importDefault(dependencyMap[13]);
  obj.secureTextEntry = arg1(dependencyMap[15]).isAndroid();
  const obj4 = arg1(dependencyMap[15]);
  let str = "default";
  if (obj5.isAndroid()) {
    str = "visible-password";
  }
  obj.keyboardType = str;
  obj.value = username;
  obj.onSubmitEditing = onSubmitEditing;
  obj.returnKeyType = "next";
  obj.autoComplete = "username";
  obj.textContentType = "username";
  obj.autoCapitalize = "none";
  obj.onFocus = callback1;
  obj.onBlur = callback2;
  obj.isClearable = true;
  let type;
  if (null != usernameStatus) {
    type = usernameStatus.type;
  }
  let str2;
  if (type === arg1(dependencyMap[7]).NameValidationState.ERROR) {
    str2 = "error";
  }
  obj.status = str2;
  obj.submitBehavior = submitBehavior;
  const items3 = [tmp13(arg1(dependencyMap[14]).TextInput, obj), callback3(UsernameStatusMessage, { usernameStatus, isUsernameFocused: tmp5[0] })];
  obj.children = items3;
  return tmp11(tmp12, obj);
};
