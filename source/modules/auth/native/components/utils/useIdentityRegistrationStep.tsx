// Module ID: 14788
// Function ID: 112770
// Name: useIdentityRegistrationStep
// Dependencies: [5, 57, 31, 14778, 14779, 653, 1456, 14776, 1212, 14789, 9482, 9236, 14786, 668, 14777, 9251, 9245, 8386, 2]
// Exports: useIdentityRegistrationStep

// Module 14788 (useIdentityRegistrationStep)
import ME from "ME";
import _slicedToArray from "_slicedToArray";
import result from "result";
import useRegistrationUIStore from "useRegistrationUIStore";
import RegistrationTransitionActionTypes from "RegistrationTransitionActionTypes";
import { AbortCodes } from "ME";

let closure_10;
let closure_11;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ setRegistrationErrors: closure_6, updateRegistrationOptions: closure_7, useRegistrationUIStore: closure_8 } = useRegistrationUIStore);
({ authStateToRegisterTransitionStep: closure_9, RegisterTransitionSteps: closure_10, RegistrationTransitionActionTypes: closure_11 } = RegistrationTransitionActionTypes);
const result = require("result").fileFinishedImporting("modules/auth/native/components/utils/useIdentityRegistrationStep.tsx");

export const useIdentityRegistrationStep = function useIdentityRegistrationStep(REGISTER_IDENTITY, inputMode) {
  const _require = REGISTER_IDENTITY;
  const importDefault = inputMode;
  let obj = _require(navigation[6]);
  navigation = obj.useNavigation();
  const context = React.useContext(_require(navigation[7]).TrackRegistrationContext);
  const tmp3 = first(React.useState(""), 2);
  first = tmp3[0];
  React = React.useRef("");
  const tmp5 = first(React.useState(""), 2);
  const first1 = tmp5[0];
  let closure_7 = tmp5[1];
  let callback = React.useCallback((arg0, current) => {
    callback(arg0);
    result.current = current;
  }, []);
  const tmp8 = callback((errors) => errors.errors);
  callback = tmp8;
  const items = [tmp8];
  const memo = React.useMemo(() => {
    const intl = REGISTER_IDENTITY(navigation[8]).intl;
    return intl.string(REGISTER_IDENTITY(navigation[8]).t.F8UYVY);
  }, items);
  const items1 = [REGISTER_IDENTITY, first1, context, navigation];
  const callback1 = React.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = context(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items1);
  if (inputMode === _require(navigation[15]).PhoneOrEmailSelectorForceMode.PHONE) {
    let tmp13 = importDefault(navigation[16])("phone", tmp8);
  } else {
    tmp13 = importDefault(navigation[16])("email", tmp8);
  }
  let closure_9 = tmp13;
  const items2 = [inputMode, first1, first, tmp13];
  const items3 = [first];
  const memo1 = React.useMemo(() => {
    const tmp = closure_1 === REGISTER_IDENTITY(navigation[15]).PhoneOrEmailSelectorForceMode.PHONE ? first1 : first;
    let tmp2 = null == tmp;
    if (!tmp2) {
      tmp2 = "" === tmp;
    }
    if (!tmp2) {
      tmp2 = null != closure_9;
    }
    return tmp2;
  }, items2);
  obj = {
    loginEmail: first,
    setLoginEmail: tmp3[1],
    loginPhone: first1,
    updateLoginPhone: callback,
    identityErrorMessage: memo,
    registerAndVerifyPhone: callback1,
    preventSubmitIdentity: memo1,
    identityError: tmp13,
    validateEmail: React.useCallback(() => {
      let stringResult = null;
      if (!obj.isEmail(first)) {
        const intl = REGISTER_IDENTITY(navigation[8]).intl;
        stringResult = intl.string(REGISTER_IDENTITY(navigation[8]).t.nr0MVZ);
      }
      return stringResult;
    }, items3)
  };
  return obj;
};
