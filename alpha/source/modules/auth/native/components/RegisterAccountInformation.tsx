// Module ID: 16187
// Function ID: 16188
// Name: RegisterAccountInformation
// Dependencies: [5, 32, 19, 17, 5938, 5071, 8663, 16165, 16166, 1085, 21, 5090, 587, 4810, 6617, 16162, 504, 16188, 16190, 16173, 1126, 16182, 16164, 16181, 6645, 16191, 16192, 5375, 6613, 6720, 2]
// Exports: default

// Module 16187 (RegisterAccountInformation)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import useWideAuthViewDefault from "useWideAuthView" /* 6617 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ConsentStore_mod from "ConsentStore" /* 5938 */;
import InviteStore from "InviteStore" /* 5071 */;
import DisplayedInviteStore from "DisplayedInviteStore" /* 8663 */;
import RegistrationUIStore from "RegistrationUIStore" /* 16165 */;
import RegistrationConstants from "RegistrationConstants" /* 16166 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import size from "module_2" /* 2 */;

let c4, c5, closure_2, dependencyMap;

let closure_12;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
let easingResult;
let map1;
let metroImportDefault;
let metroRequire;
let tmp;
let unpackModuleId;
const ReanimatedRexportDefault = tmp(4810);
const FreeFormErrorLabelDefault = tmp(6613);
const AuthFormViewDefault = tmp(6645);
const KeyboardAwareViewDefault = tmp(6720);
const useInitialRegistrationStepDefault = tmp(16181);
const useAuthFlowBackHandlerDefault = tmp(16182);
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
let ConsentStore = ConsentStore_mod;
({ setRegistrationErrors: unpackModuleId, updateRegistrationOptions: closure_12, useRegistrationUIStore: map1 } = RegistrationUIStore);
({ RegisterTransitionSteps: closure_14, RegistrationTransitionActionTypes: closure_15 } = RegistrationConstants);
const AuthStates = Constants.AuthStates;
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let closure_19 = createStyles.createStyles((arg0) => {
  let num;
  obj = { container: { marginTop: nativeDefault.space.PX_24 }, password: { marginTop: 24 }, button: { marginTop: 24, marginBottom: num }, errors: { marginTop: 4 }, page: { flex: 1 } };
  num = 50;
  ({ marginTop: nativeDefault.space.PX_24 });
  const tmp = arg0;
  if (tmp) {
    num = 0;
  }
  return obj;
});
let obj = { layout: easingResult.duration(300) };
const LinearTransition = ReanimatedRexport.LinearTransition;
const easing = LinearTransition.easing;
const Easing = ReanimatedRexport.Easing;
easingResult = easing(Easing.inOut(ReanimatedRexport.Easing.quad));
let result = size.fileFinishedImporting("modules/auth/native/components/RegisterAccountInformation.tsx");

export default function RegisterAccountInformation() {
  let RegisterPasswordInput;
  let closure_6;
  let code;
  let context;
  let displayedInviteCode;
  let intl2;
  let items4;
  let items5;
  let obj12;
  let obj9;
  let password;
  let passwordScore;
  let preventSubmitPassword;
  let preventSubmitUsername;
  let setPassword;
  let setUsername;
  let str;
  let stringResult;
  let tmp10;
  let tmp30;
  let username;
  let usernameStatus;
  obj = function _handleSubmit() {
    obj = _asyncToGenerator(async (arg0, value) => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let password;
          let obj5;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_0 = tmp4;
              password = undefined;
              const obj4 = { step: constants.ACCOUNT_INFORMATION, actionType: constants2.SUBMITTED };
              context(obj4);
              obj5 = {};
              const tmp56 = closure_2_6();
              if (null != tmp56) {
                obj5.username = tmp56;
              }
              importDefault(true);
              c3 = 1;
              c4 = 2;
              c5 = 1;
              obj6 = { value: _slicedToArray(), done: false };
              return obj6;
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_129_1(false);
            throw closure_2;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_1(false);
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            password = value;
            if (null != password) {
              obj5.password = password;
            }
            c3 = 0;
            closure_129_1(false);
            const _Object = Object;
            if (Object.keys(obj5).length > 0) {
              closure_1_11(obj5);
              obj = { step: constants.ACCOUNT_INFORMATION, actionType: constants2.INPUT_ERROR, details: Object.keys(obj5) };
              const _Object2 = Object;
              closure_129_0(obj);
              c5 = 3;
              const obj8 = { value: undefined, done: true };
              return obj8;
            } else {
              closure_1_12(closure_129_7);
              closure_129_5(closure_129_8);
              c5 = 3;
              return { value: "IconComponent", done: null };
            }
          }
        } catch (tmp41) {
          closure_2 = tmp41;
          if (0 === c3) {
            c5 = 3;
            throw tmp41;
          } else {
            c4 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = importDefault;
  const tmp3 = useWideAuthViewDefault();
  const tmp4 = closure_19(tmp3);
  obj = react;
  context = react.useContext(context(16162).TrackRegistrationContext);
  const tmp7 = closure_13((registrationOptions) => registrationOptions.registrationOptions);
  let tmp8 = closure_13((submitting) => submitting.submitting);
  [tmp10, importDefault] = _slicedToArray(react.useState(false), 2);
  const tmp9 = _slicedToArray(react.useState(false), 2);
  const tmp11 = closure_13((errors) => errors.errors);
  let obj2 = context(504);
  const items = [DisplayedInviteStore];
  dependencyMap = obj2.useStateFromStores(items, () => displayedInviteCode.getDisplayedInviteCode());
  let obj3 = context(504);
  const items1 = [obj];
  const stateFromStores = obj3.useStateFromStores(items1, () => {
    let invite = null;
    if (null != closure_2) {
      invite = InviteStore.getInvite(tmp);
    }
    return invite;
  });
  const ref = react.useRef(null);
  let obj4 = context(16188);
  const passwordRegistrationStep = obj4.usePasswordRegistrationStep();
  ({ password, validatePassword: _slicedToArray, setPassword, passwordScore, preventSubmitPassword } = passwordRegistrationStep);
  let obj5 = context(16190);
  const usernameRegistrationStep = obj5.useUsernameRegistrationStep(AuthStates.REGISTER_ACCOUNT_INFORMATION);
  ({ transitionToNextStepOrSubmit: react, username, preventSubmitUsername, validateUsername: closure_6 } = usernameRegistrationStep);
  let obj6 = { username, password, invite: code };
  ({ usernameStatus, setUsername } = usernameRegistrationStep);
  const merged = Object.assign(tmp7);
  code = undefined;
  if (stateFromStores != null) {
    code = stateFromStores.code;
  }
  const items2 = [ConsentStore];
  const tmp5Result = context(504);
  const stateFromStores1 = tmp5Result.useStateFromStores(items2, () => ConsentStore.getAuthenticationConsentRequired());
  let obj7 = { isConsentRequired: true === stateFromStores1 };
  const tmp5Result3 = context(16173);
  const result = tmp5Result3.hasAllRegistrationFieldsCompleted(obj6, obj7);
  ConsentStore = result;
  const intl = tmp5(1126).intl;
  const string = intl.string;
  const t = tmp5(1126).t;
  if (result) {
    stringResult = string(t["825cFy"]);
  } else {
    stringResult = string(t.PDTjLN);
  }
  function handleSubmit() {
    return obj(...arguments);
  }
  const tmpResult = useAuthFlowBackHandlerDefault;
  const tmp5Result4 = context(16164);
  tmpResult(tmp5Result4.getPreviousRegistrationTransitionStep(AuthStates.REGISTER_ACCOUNT_INFORMATION));
  useInitialRegistrationStepDefault(AuthStates.REGISTER_ACCOUNT_INFORMATION);
  const items3 = [context];
  const effect = obj.useEffect(() => {
    obj = { step: constants.ACCOUNT_INFORMATION, actionType: constants2.VIEWED };
    context(obj);
  }, items3);
  const callback = obj.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.focus();
    }
  }, []);
  let obj8 = { headerText: intl2.string(tmp5(1126).t.jec90v), children: tmp29(tmp30, obj9) };
  const tmpResult2 = AuthFormViewDefault;
  intl2 = tmp5(1126).intl;
  obj9 = { contentContainerStyle: { flexGrow: 1 }, keyboardShouldPersistTaps: "handled", children: items4 };
  items4 = [, , ];
  const obj10 = { style: tmp4.container, children: closure_17(context(16191).RegisterUsernameInput, { username, setUsername, onSubmitEditing: callback, usernameStatus, submitBehavior: "submit", autoFocus: true }) };
  items4[0] = closure_17(closure_6, obj10);
  const obj11 = { style: tmp4.password, children: closure_17(RegisterPasswordInput, obj12) };
  const View = ReanimatedRexportDefault.View;
  const merged1 = Object.assign(obj);
  obj12 = { ref, password, onPasswordChange: setPassword, onSubmitEditing: handleSubmit, passwordScore, returnKeyType: str };
  str = "next";
  RegisterPasswordInput = tmp5(16192).RegisterPasswordInput;
  tmp30 = obj6;
  const tmp31 = obj;
  if (result) {
    str = "done";
  }
  items4[1] = closure_17(View, obj11);
  const obj13 = { style: tmp4.button, children: items5 };
  const View2 = ReanimatedRexportDefault.View;
  const merged2 = Object.assign(tmp31);
  const Button = tmp5(5375).Button;
  if (!tmp8) {
    tmp8 = tmp10;
  }
  const obj14 = { size: "lg", loading: tmp8, text: stringResult, onPress: handleSubmit, disabled: preventSubmitUsername };
  if (!preventSubmitUsername) {
    preventSubmitUsername = preventSubmitPassword;
  }
  items5 = [tmp27(Button, obj14), ];
  let tmp27Result = null;
  if (null != tmp11.message) {
    tmp27Result = null;
    if ("" !== tmp11.message) {
      const obj15 = { style: tmp4.errors, children: tmp11.message };
      tmp27Result = tmp27(FreeFormErrorLabelDefault, obj15);
    }
  }
  items5[1] = tmp27Result;
  items4[2] = closure_18(View2, obj13);
  const tmp27Result3 = closure_17(tmpResult2, obj8);
  let tmp27Result4 = tmp27Result3;
  if (!tmp3) {
    const obj16 = { style: tmp4.page, children: tmp27Result3 };
    tmp27Result4 = tmp27(KeyboardAwareViewDefault, obj16);
  }
  return tmp27Result4;
};
