// Module ID: 14615
// Function ID: 110210
// Name: useIdentityRegistrationStep
// Dependencies: []
// Exports: useIdentityRegistrationStep

// Module 14615 (useIdentityRegistrationStep)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ setRegistrationErrors: closure_6, updateRegistrationOptions: closure_7, useRegistrationUIStore: closure_8 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ authStateToRegisterTransitionStep: closure_9, RegisterTransitionSteps: closure_10, RegistrationTransitionActionTypes: closure_11 } = arg1(dependencyMap[4]));
const AbortCodes = arg1(dependencyMap[5]).AbortCodes;
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/auth/native/components/utils/useIdentityRegistrationStep.tsx");

export const useIdentityRegistrationStep = function useIdentityRegistrationStep(REGISTER_IDENTITY, inputMode) {
  inputMode = REGISTER_IDENTITY;
  const importDefault = inputMode;
  let obj = inputMode(dependencyMap[6]);
  const navigation = obj.useNavigation();
  const dependencyMap = navigation;
  const context = React.useContext(inputMode(dependencyMap[7]).TrackRegistrationContext);
  let closure_3 = context;
  const tmp3 = callback(React.useState(""), 2);
  const first = tmp3[0];
  let callback = first;
  const React = React.useRef("");
  const tmp5 = callback(React.useState(""), 2);
  const first1 = tmp5[0];
  let closure_7 = tmp5[1];
  callback = React.useCallback((arg0, current) => {
    callback(arg0);
    closure_5.current = current;
  }, []);
  const tmp8 = tmp8((errors) => errors.errors);
  const items = [tmp8];
  const memo = React.useMemo(() => {
    const intl = arg0(navigation[8]).intl;
    return intl.string(arg0(navigation[8]).t.F8UYVY);
  }, items);
  const items1 = [REGISTER_IDENTITY, first1, context, navigation];
  const callback1 = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = context(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items1);
  if (inputMode === inputMode(dependencyMap[15]).PhoneOrEmailSelectorForceMode.PHONE) {
    let tmp13 = importDefault(dependencyMap[16])("phone", tmp8);
  } else {
    tmp13 = importDefault(dependencyMap[16])("email", tmp8);
  }
  const items2 = [inputMode, first1, first, tmp13];
  const items3 = [first];
  const memo1 = React.useMemo(() => {
    const tmp = arg1 === arg0(navigation[15]).PhoneOrEmailSelectorForceMode.PHONE ? first1 : first;
    let tmp2 = null == tmp;
    if (!tmp2) {
      tmp2 = "" === tmp;
    }
    if (!tmp2) {
      tmp2 = null != tmp13;
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
        const intl = arg0(navigation[8]).intl;
        stringResult = intl.string(arg0(navigation[8]).t.nr0MVZ);
      }
      return stringResult;
    }, items3)
  };
  return obj;
};
