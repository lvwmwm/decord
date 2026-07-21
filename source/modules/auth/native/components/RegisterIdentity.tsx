// Module ID: 14614
// Function ID: 110193
// Name: RegisterIdentityBase
// Dependencies: []
// Exports: RegisterIdentity

// Module 14614 (RegisterIdentityBase)
function RegisterIdentityBase(inputMode) {
  let controlComponent;
  let headerText;
  let identityError;
  let loginPhone;
  let preventSubmitIdentity;
  let setLoginEmail;
  let subheader;
  let updateLoginPhone;
  inputMode = inputMode.inputMode;
  const arg1 = inputMode;
  const importDefault = inputMode.setInputMode;
  let closure_2;
  let callback;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  function handleSubmit() {
    return _handleSubmit(...arguments);
  }
  function _handleSubmit() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = tmp3(tmp);
    const _handleSubmit = obj;
    return obj(...arguments);
  }
  ({ headerText, controlComponent, subheader } = inputMode);
  let obj = arg1(closure_2[8]);
  const tmp = callback4(45 * Math.min(2, obj.useFontScale()));
  let obj1 = arg1(closure_2[10]);
  closure_2 = obj1.useNavigation();
  const tmp3 = callback2((errors) => errors.errors);
  let closure_3 = tmp3;
  let obj2 = arg1(closure_2[11]);
  const identityRegistrationStep = obj2.useIdentityRegistrationStep(arg1(closure_2[12]).AuthStates.REGISTER_IDENTITY, inputMode);
  const loginEmail = identityRegistrationStep.loginEmail;
  callback = loginEmail;
  const identityErrorMessage = identityRegistrationStep.identityErrorMessage;
  const React = identityErrorMessage;
  ({ registerAndVerifyPhone: closure_6, validateEmail: closure_7 } = identityRegistrationStep);
  ({ setLoginEmail, loginPhone, updateLoginPhone, preventSubmitIdentity, identityError } = identityRegistrationStep);
  const tmp5 = callback(React.useState(false), 2);
  closure_8 = tmp5[1];
  closure_9 = React.useContext(arg1(closure_2[13]).TrackRegistrationContext);
  const items = [tmp3.message, identityErrorMessage];
  const memo = React.useMemo(() => {
    if (null != identityErrorMessage) {
      let message = identityErrorMessage;
    } else {
      message = tmp3.message;
    }
    return message;
  }, items);
  const tmp2 = importDefault(closure_2[9])();
  importDefault(closure_2[14])(arg1(closure_2[12]).AuthStates.REGISTER_IDENTITY);
  const tmp7 = importDefault(closure_2[14]);
  let obj3 = arg1(closure_2[16]);
  importDefault(closure_2[15])(obj3.getPreviousRegistrationTransitionStep(arg1(closure_2[12]).AuthStates.REGISTER_IDENTITY));
  importDefault(closure_2[17])(() => {
    callback({ step: constants.ACCOUNT_IDENTITY, actionType: constants2.VIEWED });
  });
  obj = { headerText, subHeader: subheader };
  obj = { style: tmp.container, contentContainerStyle: tmp.scrollContent, keyboardShouldPersistTaps: "handled" };
  const items1 = [controlComponent, , , ];
  const tmp12 = callback3;
  const tmp9 = importDefault(closure_2[15]);
  items1[1] = callback3(arg1(closure_2[20]).RegisterPhoneOrEmailInput, { loginPhone, loginEmail, setLoginPhone: updateLoginPhone, setLoginEmail, inputMode, onSubmit: handleSubmit, inputError: identityError, autoFocus: true });
  obj1 = { style: tmp.button };
  obj2 = { loading: tmp5[0], size: "lg" };
  const intl = arg1(closure_2[22]).intl;
  obj2.text = intl.string(arg1(closure_2[22]).t.PDTjLN);
  obj2.onPress = handleSubmit;
  obj2.disabled = preventSubmitIdentity;
  obj1.children = callback3(arg1(closure_2[21]).Button, obj2);
  items1[2] = callback3(closure_6, obj1);
  let tmp16 = null;
  if (null != memo) {
    tmp16 = null;
    if ("" !== memo) {
      obj3 = { style: tmp.errors, children: memo };
      tmp16 = callback3(importDefault(closure_2[23]), obj3);
    }
  }
  items1[3] = tmp16;
  obj.children = items1;
  obj.children = closure_15(closure_7, obj);
  const tmp12Result = tmp12(importDefault(closure_2[19]), obj);
  let tmp21 = tmp12Result;
  if (!tmp2) {
    const obj4 = { style: tmp.page, children: tmp12Result };
    tmp21 = callback3(importDefault(closure_2[24]), obj4);
  }
  return tmp21;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ View: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ clearRegistrationErrorMessage: closure_8, setRegistrationErrors: closure_9, updateRegistrationOptions: closure_10, useRegistrationUIStore: closure_11 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
({ RegisterTransitionSteps: closure_12, RegistrationTransitionActionTypes: closure_13 } = arg1(dependencyMap[5]));
const tmp4 = arg1(dependencyMap[5]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[6]));
const tmp5 = arg1(dependencyMap[6]);
let closure_16 = arg1(dependencyMap[7]).createStyles((minHeight) => {
  const segmentedControl = { minHeight, marginBottom: 24 };
  return { container: { onChangeContentSize: null, onEndBlur: null }, page: { flex: 1 }, button: {}, errors: { marginTop: 4 }, segmentedControl, scrollContent: { paddingBottom: 128 } };
});
const obj = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/auth/native/components/RegisterIdentity.tsx");

export const RegisterIdentity = function RegisterIdentity() {
  let obj = arg1(dependencyMap[8]);
  let obj1 = arg1(dependencyMap[25]);
  const deviceCountry = obj1.getDeviceCountry();
  let hasItem = null != deviceCountry;
  if (hasItem) {
    const EMAIL_FIRST_COUNTRIES = arg1(dependencyMap[26]).EMAIL_FIRST_COUNTRIES;
    hasItem = EMAIL_FIRST_COUNTRIES.has(deviceCountry);
  }
  const arg1 = hasItem;
  const items = [hasItem];
  const memo = React.useMemo(() => {
    let obj = {};
    const t = hasItem(tmp7[22]).t;
    if (hasItem) {
      obj.descriptor = t.w/qqKK;
      obj.mode = tmp(tmp2[18]).PhoneOrEmailSelectorForceMode.EMAIL;
      const items = [obj, ];
      obj = { descriptor: tmp(tmp2[22]).t.dEYpSt, mode: tmp(tmp2[18]).PhoneOrEmailSelectorForceMode.PHONE };
      items[1] = obj;
      let items1 = items;
    } else {
      obj.descriptor = t.dEYpSt;
      obj.mode = tmp(tmp2[18]).PhoneOrEmailSelectorForceMode.PHONE;
      items1 = [obj, ];
      obj = { descriptor: tmp(tmp2[22]).t.w/qqKK, mode: tmp(tmp2[18]).PhoneOrEmailSelectorForceMode.EMAIL };
      items1[1] = obj;
    }
    return items1;
  }, items);
  const importDefault = memo;
  const tmp6 = callback(React.useState(memo[0].mode), 2);
  const dependencyMap = tmp7;
  const items1 = [tmp6[1], memo];
  const callback = React.useCallback((arg0) => {
    callback();
    tmp7(memo[arg0].mode);
  }, items1);
  const tmp = callback4(45 * Math.min(2, obj.useFontScale()));
  obj = {
    <string:4221590626>: -536870861,
    <string:1179822678>: -299892737,
    onSetActiveIndex: callback,
    items: memo.map((descriptor) => {
      descriptor = descriptor.descriptor;
      const obj = {};
      const intl = hasItem(tmp7[22]).intl;
      obj.id = intl.string(descriptor);
      const intl2 = hasItem(tmp7[22]).intl;
      obj.label = intl2.string(descriptor);
      obj.page = null;
      return obj;
    })
  };
  const segmentedControlState = arg1(dependencyMap[27]).useSegmentedControlState(obj);
  let closure_3 = segmentedControlState;
  const items2 = [segmentedControlState, memo];
  obj = {
    inputMode: tmp6[0],
    setInputMode: React.useCallback((arg0) => {
      const hasItem = arg0;
      const findIndexResult = memo.findIndex((mode) => mode.mode === mode);
      if (-1 !== findIndexResult) {
        segmentedControlState.setActiveIndex(findIndexResult, false);
      }
    }, items2)
  };
  obj1 = { style: tmp.segmentedControl, children: callback3(arg1(dependencyMap[28]).SegmentedControl, { state: segmentedControlState, keyboardShouldPersistTaps: "handled" }) };
  obj.controlComponent = callback3(closure_6, obj1);
  const intl = arg1(dependencyMap[22]).intl;
  obj.headerText = intl.string(arg1(dependencyMap[22]).t.WEdDgv);
  return callback3(RegisterIdentityBase, obj);
};
