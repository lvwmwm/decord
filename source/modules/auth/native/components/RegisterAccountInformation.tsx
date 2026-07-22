// Module ID: 14638
// Function ID: 110375
// Name: RegisterAccountInformation
// Dependencies: []
// Exports: default

// Module 14638 (RegisterAccountInformation)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ View: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const tmp2 = arg1(dependencyMap[3]);
({ setRegistrationErrors: closure_11, updateRegistrationOptions: closure_12, useRegistrationUIStore: closure_13 } = arg1(dependencyMap[7]));
const tmp3 = arg1(dependencyMap[7]);
({ RegisterTransitionSteps: closure_14, RegistrationTransitionActionTypes: closure_15 } = arg1(dependencyMap[8]));
const AuthStates = arg1(dependencyMap[9]).AuthStates;
const tmp4 = arg1(dependencyMap[8]);
({ jsx: closure_17, jsxs: closure_18 } = arg1(dependencyMap[10]));
let obj = arg1(dependencyMap[11]);
let closure_19 = obj.createStyles((arg0) => {
  let obj = {};
  obj = { marginTop: importDefault(dependencyMap[12]).space.PX_24 };
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
obj = {};
const LinearTransition = arg1(dependencyMap[13]).LinearTransition;
const Easing = arg1(dependencyMap[13]).Easing;
const tmp5 = arg1(dependencyMap[10]);
obj.layout = require("module_300");
const easingResult = LinearTransition.easing(Easing.inOut(arg1(dependencyMap[13]).Easing.quad));
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/auth/native/components/RegisterAccountInformation.tsx");

export default function RegisterAccountInformation() {
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
    const _handleSubmit = obj;
    return obj(...arguments);
  }
  const tmp = importDefault(closure_2[14])();
  const tmp2 = callback4(tmp);
  const context = React.useContext(arg1(closure_2[15]).TrackRegistrationContext);
  const arg1 = context;
  let tmp5 = callback2((submitting) => submitting.submitting);
  const tmp4 = callback2((registrationOptions) => registrationOptions.registrationOptions);
  [tmp7, closure_1] = callback(React.useState(false), 2);
  const tmp8 = callback2((errors) => errors.errors);
  let obj = arg1(closure_2[16]);
  const items = [closure_10];
  closure_2 = obj.useStateFromStores(items, () => displayedInviteCode.getDisplayedInviteCode());
  let obj1 = arg1(closure_2[16]);
  const items1 = [_handleSubmit];
  const stateFromStores = obj1.useStateFromStores(items1, () => {
    let invite = null;
    if (null != closure_2) {
      invite = _handleSubmit.getInvite(closure_2);
    }
    return invite;
  });
  const ref = React.useRef(null);
  let closure_3 = ref;
  let obj2 = arg1(closure_2[17]);
  const passwordRegistrationStep = obj2.usePasswordRegistrationStep();
  ({ password, validatePassword: closure_4 } = passwordRegistrationStep);
  ({ setPassword, passwordScore, preventSubmitPassword } = passwordRegistrationStep);
  let obj3 = arg1(closure_2[18]);
  const usernameRegistrationStep = obj3.useUsernameRegistrationStep(AuthStates.REGISTER_ACCOUNT_INFORMATION);
  ({ transitionToNextStepOrSubmit: closure_5, username, preventSubmitUsername, validateUsername: closure_6 } = usernameRegistrationStep);
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
  let obj5 = arg1(closure_2[16]);
  const items2 = [closure_8];
  const stateFromStores1 = obj5.useStateFromStores(items2, () => result.getAuthenticationConsentRequired());
  let obj6 = arg1(closure_2[19]);
  obj = { isConsentRequired: true === stateFromStores1 };
  const result = obj6.hasAllRegistrationFieldsCompleted(obj, obj);
  closure_8 = result;
  const intl = arg1(closure_2[20]).intl;
  const string = intl.string;
  const t = arg1(closure_2[20]).t;
  if (result) {
    let stringResult = string(t.825cFy);
  } else {
    stringResult = string(t.PDTjLN);
  }
  const tmp6 = callback(React.useState(false), 2);
  let obj8 = arg1(closure_2[22]);
  importDefault(closure_2[21])(obj8.getPreviousRegistrationTransitionStep(AuthStates.REGISTER_ACCOUNT_INFORMATION));
  importDefault(closure_2[23])(AuthStates.REGISTER_ACCOUNT_INFORMATION);
  const items3 = [context];
  const effect = React.useEffect(() => {
    context({ step: constants.ACCOUNT_INFORMATION, actionType: constants2.VIEWED });
  }, items3);
  const callback = React.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      current.focus();
    }
  }, []);
  obj1 = {};
  const tmp18 = importDefault(closure_2[21]);
  const intl2 = arg1(closure_2[20]).intl;
  obj1.headerText = intl2.string(arg1(closure_2[20]).t.jec90v);
  obj2 = { contentContainerStyle: { flexGrow: 1 }, keyboardShouldPersistTaps: "handled" };
  obj3 = { style: tmp2.container, children: callback3(arg1(closure_2[25]).RegisterUsernameInput, { username, setUsername, onSubmitEditing: callback, usernameStatus, submitBehavior: "submit", autoFocus: true }) };
  const items4 = [callback3(closure_6, obj3), , ];
  const obj4 = { style: tmp2.password };
  const merged1 = Object.assign(obj);
  obj5 = { ref, password, onPasswordChange: setPassword, onSubmitEditing: handleSubmit, passwordScore };
  let str = "next";
  if (result) {
    str = "done";
  }
  obj5.returnKeyType = str;
  obj4["children"] = callback3(arg1(closure_2[26]).RegisterPasswordInput, obj5);
  items4[1] = callback3(importDefault(closure_2[13]).View, obj4);
  obj6 = { style: tmp2.button };
  const merged2 = Object.assign(obj);
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
  const items5 = [callback3(arg1(closure_2[27]).Button, obj7), ];
  let tmp31 = null;
  if (null != tmp8.message) {
    tmp31 = null;
    if ("" !== tmp8.message) {
      obj8 = { style: tmp2.errors, children: tmp8.message };
      tmp31 = callback3(importDefault(closure_2[28]), obj8);
    }
  }
  items5[1] = tmp31;
  obj6["children"] = items5;
  items4[2] = closure_18(importDefault(closure_2[13]).View, obj6);
  obj2.children = items4;
  obj1.children = closure_18(obj, obj2);
  const tmp23Result = callback3(importDefault(closure_2[24]), obj1);
  let tmp36 = tmp23Result;
  if (!tmp) {
    const obj9 = { style: tmp2.page, children: tmp23Result };
    tmp36 = callback3(importDefault(closure_2[29]), obj9);
  }
  return tmp36;
};
