// Module ID: 14803
// Function ID: 112891
// Name: useUsernameRegistrationStep
// Dependencies: [57, 31, 13716, 14778, 14779, 14776, 1456, 9245, 13714, 13713, 14777, 1212, 2]
// Exports: useUsernameRegistrationStep

// Module 14803 (useUsernameRegistrationStep)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { useRegistrationUIStore } from "useRegistrationUIStore";
import RegistrationTransitionActionTypes from "RegistrationTransitionActionTypes";

let closure_7;
let closure_8;
const require = arg1;
({ authStateToRegisterTransitionStep: closure_7, RegistrationTransitionActionTypes: closure_8 } = RegistrationTransitionActionTypes);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/auth/native/components/utils/useUsernameRegistrationStep.tsx");

export const useUsernameRegistrationStep = function useUsernameRegistrationStep(REGISTER_ACCOUNT_INFORMATION) {
  const _require = REGISTER_ACCOUNT_INFORMATION;
  const context = obj.useContext(_require(navigation[5]).TrackRegistrationContext);
  obj = _require(navigation[6]);
  navigation = obj.useNavigation();
  let username = useRegistrationUIStore((registrationOptions) => registrationOptions.registrationOptions).username;
  if (null == username) {
    username = _isNativeReflectConstruct.registrationUsernameSuggestion();
  }
  let str = "";
  if (null != username) {
    str = username;
  }
  const tmp5 = first(obj.useState(str), 2);
  first = tmp5[0];
  const tmp8 = context(navigation[7])("username", useRegistrationUIStore((errors) => errors.errors));
  const tmp7 = useRegistrationUIStore((errors) => errors.errors);
  const usernameStatus = _require(navigation[8]).useUsernameStatus(first, true, true);
  obj = usernameStatus;
  let tmp10 = usernameStatus;
  if (null != tmp8) {
    obj = { type: _require(navigation[9]).NameValidationState.ERROR, message: tmp8 };
    tmp10 = obj;
  }
  let items = [tmp10, navigation, context, REGISTER_ACCOUNT_INFORMATION];
  const items1 = [first, tmp10];
  const callback = obj.useCallback((arg0) => {
    let type;
    if (null != obj) {
      type = obj.type;
    }
    if (type === REGISTER_ACCOUNT_INFORMATION(navigation[9]).NameValidationState.ERROR) {
      obj = { step: outer1_7(REGISTER_ACCOUNT_INFORMATION), actionType: outer1_8.INPUT_ERROR };
      const items = [obj.message];
      obj.details = items;
      context(obj);
    }
    if (arg0) {
      const result = REGISTER_ACCOUNT_INFORMATION(navigation[10]).handleRegistrationSubmit(REGISTER_ACCOUNT_INFORMATION, navigation, context);
      const obj5 = REGISTER_ACCOUNT_INFORMATION(navigation[10]);
    } else {
      obj = { step: outer1_7(REGISTER_ACCOUNT_INFORMATION), toStep: REGISTER_ACCOUNT_INFORMATION(navigation[10]).getNextRegistrationTransitionStep(REGISTER_ACCOUNT_INFORMATION), actionType: outer1_8.SUCCESS };
      context(obj);
      const obj3 = REGISTER_ACCOUNT_INFORMATION(navigation[10]);
      navigation.push(REGISTER_ACCOUNT_INFORMATION(navigation[10]).getNextAuthState(REGISTER_ACCOUNT_INFORMATION));
      const obj4 = REGISTER_ACCOUNT_INFORMATION(navigation[10]);
    }
  }, items);
  const items2 = [first, , ];
  let message;
  const memo = obj.useMemo(() => {
    let tmp = null == first;
    if (!tmp) {
      tmp = "" === first;
    }
    if (!tmp) {
      let type;
      if (null != obj) {
        type = obj.type;
      }
      tmp = type === REGISTER_ACCOUNT_INFORMATION(navigation[9]).NameValidationState.ERROR;
    }
    return tmp;
  }, items1);
  if (null != tmp10) {
    message = tmp10.message;
  }
  items2[1] = message;
  let type;
  if (null != tmp10) {
    type = tmp10.type;
  }
  items2[2] = type;
  obj = { username: first, setUsername: tmp5[1], usernameStatus: tmp10, transitionToNextStepOrSubmit: callback, preventSubmitUsername: memo };
  obj.validateUsername = obj.useCallback(() => {
    if (null != first) {
      if ("" !== first) {
        let type;
        if (null != obj) {
          type = obj.type;
        }
        let message = null;
        if (type === REGISTER_ACCOUNT_INFORMATION(navigation[9]).NameValidationState.ERROR) {
          message = obj.message;
        }
      }
      return message;
    }
    const intl = REGISTER_ACCOUNT_INFORMATION(navigation[11]).intl;
    message = intl.string(REGISTER_ACCOUNT_INFORMATION(navigation[11]).t.GPfy3L);
  }, items2);
  return obj;
};
