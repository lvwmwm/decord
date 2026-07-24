// Module ID: 14804
// Function ID: 112898
// Name: UsernameStatusMessage
// Dependencies: [29, 57, 31, 14778, 33, 4130, 3991, 13713, 4541, 7577, 689, 4126, 1212, 14796, 7574, 477, 2]
// Exports: RegisterUsernameInput

// Module 14804 (UsernameStatusMessage)
import _objectWithoutProperties from "_objectWithoutProperties";
import _slicedToArray from "_slicedToArray";
import result from "result";
import useRegistrationUIStore from "useRegistrationUIStore";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { FadeIn } from "module_3991";
import { FadeOut } from "module_3991";
import { LinearTransition } from "module_3991";
import { Easing } from "module_3991";

let closure_10;
let closure_11;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function UsernameStatusMessage(arg0) {
  let isUsernameFocused;
  let usernameStatus;
  ({ usernameStatus, isUsernameFocused } = arg0);
  const tmp = callback5();
  let type;
  if (null != usernameStatus) {
    type = usernameStatus.type;
  }
  if (type === require(13713) /* NameValidationState */.NameValidationState.ERROR) {
    let obj = { direction: "horizontal", spacing: 4, align: "flex-start" };
    obj = { size: "xs", color: importDefault(689).colors.TEXT_FEEDBACK_CRITICAL };
    const items = [callback3(require(7577) /* CircleErrorIcon */.CircleErrorIcon, obj), ];
    const obj1 = { variant: "text-xs/medium", color: "text-feedback-critical", style: tmp.status };
    const merged = Object.assign(_createForOfIteratorHelperLoose);
    const merged1 = Object.assign(_createForOfIteratorHelperLoose);
    obj1["animated"] = true;
    obj1["children"] = usernameStatus.message;
    items[1] = callback3(require(4126) /* Text */.Text, obj1);
    obj.children = items;
    let tmp6 = callback4(require(4541) /* Stack */.Stack, obj);
  } else {
    if (isUsernameFocused) {
      let type1;
      if (null != usernameStatus) {
        type1 = usernameStatus.type;
      }
      if (type1 === require(13713) /* NameValidationState */.NameValidationState.AVAILABLE) {
        const obj2 = {};
        const merged2 = Object.assign(_createForOfIteratorHelperLoose);
        const merged3 = Object.assign(_createForOfIteratorHelperLoose);
        obj2["style"] = tmp.status;
        obj2["variant"] = "text-xs/medium";
        obj2["animated"] = true;
        const obj3 = { variant: "text-xs/medium", color: "text-feedback-positive", children: usernameStatus.message };
        obj2["children"] = callback3(require(4126) /* Text */.Text, obj3);
        tmp6 = callback3(require(4126) /* Text */.Text, obj2);
      }
    }
    tmp6 = null;
    if (isUsernameFocused) {
      obj = {};
      const merged4 = Object.assign(_createForOfIteratorHelperLoose);
      const merged5 = Object.assign(_createForOfIteratorHelperLoose);
      obj["style"] = tmp.inputHint;
      obj["variant"] = "text-xs/medium";
      obj["color"] = "text-muted";
      obj["animated"] = true;
      const intl = require(1212) /* getSystemLocale */.intl;
      obj["children"] = intl.string(require(1212) /* getSystemLocale */.t.y7LSyU);
      tmp6 = callback3(require(4126) /* Text */.Text, obj);
    }
  }
  return tmp6;
}
let closure_3 = ["username"];
({ setRegistrationErrors: closure_7, useRegistrationUIStore: closure_8 } = useRegistrationUIStore);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
let closure_12 = _createForOfIteratorHelperLoose.createStyles({ status: { width: "90%" }, inputHint: { width: "100%" } });
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose.entering = require("module_300");
_createForOfIteratorHelperLoose.exiting = require("module_300");
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose.layout = require("module_300");
const easingResult = LinearTransition.easing(Easing.inOut(require("module_3991").Easing.quad));
const result = require("result").fileFinishedImporting("modules/auth/native/components/RegisterUsernameInput.tsx");

export const RegisterUsernameInput = function RegisterUsernameInput(setUsername) {
  let autoFocus;
  let onSubmitEditing;
  let submitBehavior;
  let username;
  let usernameStatus;
  setUsername = setUsername.setUsername;
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
  importDefault(14796)(obj);
  const tmp5 = callback(React.useState(true), 2);
  importDefault = tmp6;
  const tmp7 = callback2((errors) => errors.errors);
  dependencyMap = tmp7;
  const items = [tmp7, setUsername];
  const items1 = [tmp5[1]];
  callback = React.useCallback((str) => {
    if (null != _undefined2.username) {
      const username = _undefined2.username;
      outer1_7(outer1_4(_undefined2, outer1_3));
    }
    setUsername(str.toLowerCase());
  }, items);
  const items2 = [tmp5[1]];
  const callback1 = React.useCallback(() => {
    _undefined(true);
  }, items1);
  obj = {};
  callback2 = React.useCallback(() => {
    _undefined(false);
  }, items2);
  obj = { ref };
  const intl = setUsername(1212).intl;
  obj.label = intl.string(setUsername(1212).t.IEpCBQ);
  const intl2 = setUsername(1212).intl;
  obj.accessibilityHint = intl2.string(setUsername(1212).t["47dcUZ"]);
  obj.onChange = callback;
  obj.autoCorrect = false;
  const tmp11 = closure_10;
  const tmp12 = closure_11;
  const tmp13 = callback3;
  const tmp2 = importDefault(14796);
  obj.secureTextEntry = setUsername(477).isAndroid();
  const obj4 = setUsername(477);
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
  if (type === setUsername(13713).NameValidationState.ERROR) {
    str2 = "error";
  }
  obj.status = str2;
  obj.submitBehavior = submitBehavior;
  const items3 = [tmp13(setUsername(7574).TextInput, obj), callback3(UsernameStatusMessage, { usernameStatus, isUsernameFocused: tmp5[0] })];
  obj.children = items3;
  return tmp11(tmp12, obj);
};
