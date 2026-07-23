// Module ID: 14753
// Function ID: 112539
// Name: RegisterAccountInformation
// Dependencies: [5, 57, 31, 27, 5592, 4115, 8486, 14731, 14732, 653, 33, 4130, 689, 3991, 9197, 14729, 566, 14754, 14756, 14739, 1212, 14747, 14730, 14746, 9219, 14757, 14758, 4543, 9004, 5587, 2]
// Exports: default

// Module 14753 (RegisterAccountInformation)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "Button";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import useRegistrationUIStore from "useRegistrationUIStore";
import RegistrationTransitionActionTypes from "RegistrationTransitionActionTypes";
import { AuthStates } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { LinearTransition } from "module_3991";
import { Easing } from "module_3991";

let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ setRegistrationErrors: closure_11, updateRegistrationOptions: closure_12, useRegistrationUIStore: closure_13 } = useRegistrationUIStore);
({ RegisterTransitionSteps: closure_14, RegistrationTransitionActionTypes: closure_15 } = RegistrationTransitionActionTypes);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
let closure_19 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { marginTop: importDefault(689).space.PX_24 };
  obj.container = obj;
  obj.password = { marginTop: 24 };
  obj = { marginTop: 24 };
  let num = 50;
  if (arg0) {
    num = 0;
  }
  obj.marginBottom = num;
  obj.button = obj;
  obj.errors = { marginTop: 4 };
  obj.page = { flex: 1 };
  return obj;
});
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose.layout = require("module_300");
const easingResult = LinearTransition.easing(Easing.inOut(require("module_3991").Easing.quad));
let result = require("result").fileFinishedImporting("modules/auth/native/components/RegisterAccountInformation.tsx");

export default function RegisterAccountInformation() {
  let _slicedToArray;
  let result;
  let closure_6;
  let importDefault;
  let password;
  let passwordScore;
  let preventSubmitPassword;
  let preventSubmitUsername;
  let setPassword;
  let setUsername;
  let tmp7;
  let username;
  let usernameStatus;
  function handleSubmit() {
    return _handleSubmit(...arguments);
  }
  function _handleSubmit() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = ref(tmp);
    return obj(...arguments);
  }
  const tmp = importDefault(9197)();
  const tmp2 = callback4(tmp);
  context = React.useContext(context(14729).TrackRegistrationContext);
  let tmp5 = callback2((submitting) => submitting.submitting);
  const tmp4 = callback2((registrationOptions) => registrationOptions.registrationOptions);
  [tmp7, importDefault] = callback(React.useState(false), 2);
  const tmp8 = callback2((errors) => errors.errors);
  let obj = context(566);
  const items = [closure_10];
  const dependencyMap = obj.useStateFromStores(items, () => outer1_10.getDisplayedInviteCode());
  let obj1 = context(566);
  const items1 = [_handleSubmit];
  const stateFromStores = obj1.useStateFromStores(items1, () => {
    let invite = null;
    if (null != closure_2) {
      invite = _handleSubmit.getInvite(closure_2);
    }
    return invite;
  });
  const ref = React.useRef(null);
  let obj2 = context(14754);
  const passwordRegistrationStep = obj2.usePasswordRegistrationStep();
  ({ password, validatePassword: _slicedToArray } = passwordRegistrationStep);
  ({ setPassword, passwordScore, preventSubmitPassword } = passwordRegistrationStep);
  let obj3 = context(14756);
  const usernameRegistrationStep = obj3.useUsernameRegistrationStep(AuthStates.REGISTER_ACCOUNT_INFORMATION);
  ({ transitionToNextStepOrSubmit: result, username, preventSubmitUsername, validateUsername: closure_6 } = usernameRegistrationStep);
  obj = {};
  ({ usernameStatus, setUsername } = usernameRegistrationStep);
  const merged = Object.assign(tmp4);
  obj["username"] = username;
  obj["password"] = password;
  let code;
  if (null != stateFromStores) {
    code = stateFromStores.code;
  }
  obj["invite"] = code;
  let obj5 = context(566);
  const items2 = [result];
  const stateFromStores1 = obj5.useStateFromStores(items2, () => result.getAuthenticationConsentRequired());
  let obj6 = context(14739);
  obj = { isConsentRequired: true === stateFromStores1 };
  result = obj6.hasAllRegistrationFieldsCompleted(obj, obj);
  const intl = context(1212).intl;
  const string = intl.string;
  const t = context(1212).t;
  if (result) {
    let stringResult = string(t["825cFy"]);
  } else {
    stringResult = string(t.PDTjLN);
  }
  const tmp6 = callback(React.useState(false), 2);
  let obj8 = context(14730);
  importDefault(14747)(obj8.getPreviousRegistrationTransitionStep(AuthStates.REGISTER_ACCOUNT_INFORMATION));
  importDefault(14746)(AuthStates.REGISTER_ACCOUNT_INFORMATION);
  const items3 = [context];
  const effect = React.useEffect(() => {
    context({ step: outer1_14.ACCOUNT_INFORMATION, actionType: outer1_15.VIEWED });
  }, items3);
  callback = React.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      current.focus();
    }
  }, []);
  obj1 = {};
  const tmp18 = importDefault(14747);
  const intl2 = context(1212).intl;
  obj1.headerText = intl2.string(context(1212).t.jec90v);
  obj2 = { contentContainerStyle: { flexGrow: 1 }, keyboardShouldPersistTaps: "handled" };
  obj3 = { style: tmp2.container, children: callback3(context(14757).RegisterUsernameInput, { username, setUsername, onSubmitEditing: callback, usernameStatus, submitBehavior: "submit", autoFocus: true }) };
  const items4 = [callback3(closure_6, obj3), , ];
  const obj4 = { style: tmp2.password };
  const merged1 = Object.assign(_createForOfIteratorHelperLoose);
  obj5 = { ref, password, onPasswordChange: setPassword, onSubmitEditing: handleSubmit, passwordScore };
  let str = "next";
  if (result) {
    str = "done";
  }
  obj5.returnKeyType = str;
  obj4["children"] = callback3(context(14758).RegisterPasswordInput, obj5);
  items4[1] = callback3(importDefault(3991).View, obj4);
  obj6 = { style: tmp2.button };
  const merged2 = Object.assign(_createForOfIteratorHelperLoose);
  const obj7 = { size: "lg" };
  if (!tmp5) {
    tmp5 = tmp7;
  }
  obj7.loading = tmp5;
  obj7.text = stringResult;
  obj7.onPress = handleSubmit;
  if (!preventSubmitUsername) {
    preventSubmitUsername = preventSubmitPassword;
  }
  obj7.disabled = preventSubmitUsername;
  const items5 = [callback3(context(4543).Button, obj7), ];
  let tmp31 = null;
  if (null != tmp8.message) {
    tmp31 = null;
    if ("" !== tmp8.message) {
      obj8 = { style: tmp2.errors, children: tmp8.message };
      tmp31 = callback3(importDefault(9004), obj8);
    }
  }
  items5[1] = tmp31;
  obj6["children"] = items5;
  items4[2] = closure_18(importDefault(3991).View, obj6);
  obj2.children = items4;
  obj1.children = closure_18(obj, obj2);
  const tmp23Result = callback3(importDefault(9219), obj1);
  let tmp36 = tmp23Result;
  if (!tmp) {
    const obj9 = { style: tmp2.page, children: tmp23Result };
    tmp36 = callback3(importDefault(5587), obj9);
  }
  return tmp36;
};
