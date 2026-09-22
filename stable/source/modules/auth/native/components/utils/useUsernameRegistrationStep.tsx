// Module ID: 16068
// Function ID: 16069
// Name: useUsernameRegistrationStep
// Dependencies: [32, 19, 14796, 16043, 16044, 16040, 1483, 7058, 14794, 14793, 16042, 1484, 1114, 2]
// Exports: useUsernameRegistrationStep

// Module 16068 (useUsernameRegistrationStep)
import util from "util" /* 1114 */;
import UniqueUsernamesTypes from "UniqueUsernamesTypes" /* 14793 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UniqueUsernamesStore from "UniqueUsernamesStore" /* 14796 */;

const require = globalThis.__r;

require = fn;
const useRegistrationUIStore = fn(16043).useRegistrationUIStore;
const RegistrationConstants = fn(16044);
({ authStateToRegisterTransitionStep: closure_7, RegistrationTransitionActionTypes: closure_8 } = RegistrationConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/auth/native/components/utils/useUsernameRegistrationStep.tsx");

export const useUsernameRegistrationStep = function useUsernameRegistrationStep(REGISTER_ACCOUNT_INFORMATION) {
  _require = REGISTER_ACCOUNT_INFORMATION;
  const context = obj3.useContext(require("Auth").TrackRegistrationContext);
  navigation = require("useNavigation").useNavigation();
  let str = useRegistrationUIStore((registrationOptions) => registrationOptions.registrationOptions).username;
  if (str == null) {
    str = UniqueUsernamesStore.registrationUsernameSuggestion();
  }
  if (str == null) {
    str = "";
  }
  const tmp7 = username(obj3.useState(str), 2);
  username = tmp7[0];
  let obj2 = require("useNavigation");
  const tmp10 = context(navigation[7])("username", useRegistrationUIStore((errors) => errors.errors));
  const tmp5Result = useRegistrationUIStore((errors) => errors.errors);
  const usernameStatus = require("useUsernameStatus").useUsernameStatus(username, true, true);
  obj3 = usernameStatus;
  let tmp12 = usernameStatus;
  if (null != tmp10) {
    obj3 = { type: tmp(tmp2[9]).NameValidationState.ERROR, message: tmp10 };
    tmp12 = obj3;
  }
  let items = [tmp12, navigation, context, REGISTER_ACCOUNT_INFORMATION];
  const items1 = [username, tmp12];
  const callback = obj.useCallback((arg0) => {
    let type;
    if (obj3 != null) {
      type = tmp.type;
    }
    if (type === UniqueUsernamesTypes.NameValidationState.ERROR) {
      const obj = { step: React5(closure_0), actionType: constants.INPUT_ERROR, details: null };
      const items = [tmp.message];
      obj.details = items;
      context(obj);
    }
    if (arg0) {
      const result = tmp3(16042).handleRegistrationSubmit(closure_0, navigation, context);
      const tmp3Result = tmp3(16042);
    } else {
      const obj2 = { step: React5(closure_0), toStep: tmp3(16042).getNextRegistrationTransitionStep(closure_0), actionType: constants.SUCCESS };
      context(obj2);
      const tmp3Result3 = tmp3(16042);
      const nextAuthState = tmp3(16042).getNextAuthState(closure_0);
      const StackActions = tmp3(1484).StackActions;
      navigation.dispatch(StackActions.push(nextAuthState));
      const tmp3Result4 = tmp3(16042);
    }
  }, items);
  const items2 = [username, , ];
  let message;
  const memo = obj.useMemo(() => {
    let tmp2 = null == first;
    if (!tmp2) {
      tmp2 = "" === tmp;
    }
    if (!tmp2) {
      let type;
      if (obj3 != null) {
        type = obj3.type;
      }
      tmp2 = type === UniqueUsernamesTypes.NameValidationState.ERROR;
    }
    return tmp2;
  }, items1);
  if (tmp12 != null) {
    message = tmp12.message;
  }
  items2[1] = message;
  let type;
  if (tmp12 != null) {
    type = tmp12.type;
  }
  items2[2] = type;
  const tmpResult = require("useUsernameStatus");
  return {
    username,
    setUsername: tmp7[1],
    usernameStatus: tmp12,
    transitionToNextStepOrSubmit: callback,
    preventSubmitUsername: memo,
    validateUsername: obj3.useCallback(() => {
      if (null != first) {
        if ("" !== tmp) {
          let type;
          if (obj3 != null) {
            type = tmp2.type;
          }
          let message = null;
          if (type === UniqueUsernamesTypes.NameValidationState.ERROR) {
            message = tmp2.message;
          }
        }
        return message;
      }
      const intl = util.intl;
      message = intl.string(util.t.GPfy3L);
    }, items2)
  };
};
