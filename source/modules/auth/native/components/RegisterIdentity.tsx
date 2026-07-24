// Module ID: 14787
// Function ID: 112753
// Name: RegisterIdentityBase
// Dependencies: [5, 57, 31, 27, 14778, 14779, 33, 4130, 4549, 9233, 1456, 14788, 668, 14776, 14793, 14794, 14777, 4559, 9251, 9255, 14795, 4543, 1212, 9043, 5585, 14797, 14798, 8404, 8799, 2]
// Exports: RegisterIdentity

// Module 14787 (RegisterIdentityBase)
import closure_3 from "RegistrationTransitionActionTypes";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "useSegmentedControlState";
import useRegistrationUIStore from "useRegistrationUIStore";
import RegistrationTransitionActionTypes from "RegistrationTransitionActionTypes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function RegisterIdentityBase(inputMode) {
  let c6;
  let c7;
  let controlComponent;
  let headerText;
  let identityError;
  let loginPhone;
  let preventSubmitIdentity;
  let setLoginEmail;
  let subheader;
  let updateLoginPhone;
  inputMode = inputMode.inputMode;
  const setInputMode = inputMode.setInputMode;
  let dependencyMap;
  let loginEmail;
  c6 = undefined;
  c7 = undefined;
  let closure_8;
  let closure_9;
  function handleSubmit() {
    return _handleSubmit(...arguments);
  }
  function _handleSubmit() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = tmp3(tmp);
    return obj(...arguments);
  }
  ({ headerText, controlComponent, subheader } = inputMode);
  let obj = inputMode(4549);
  const tmp = callback4(45 * Math.min(2, obj.useFontScale()));
  let obj1 = inputMode(1456);
  dependencyMap = obj1.useNavigation();
  const tmp3 = callback2((errors) => errors.errors);
  let closure_3 = tmp3;
  let obj2 = inputMode(14788);
  const identityRegistrationStep = obj2.useIdentityRegistrationStep(inputMode(668).AuthStates.REGISTER_IDENTITY, inputMode);
  loginEmail = identityRegistrationStep.loginEmail;
  const identityErrorMessage = identityRegistrationStep.identityErrorMessage;
  ({ registerAndVerifyPhone: c6, validateEmail: c7 } = identityRegistrationStep);
  ({ setLoginEmail, loginPhone, updateLoginPhone, preventSubmitIdentity, identityError } = identityRegistrationStep);
  const tmp5 = loginEmail(identityErrorMessage.useState(false), 2);
  closure_8 = tmp5[1];
  closure_9 = identityErrorMessage.useContext(inputMode(14776).TrackRegistrationContext);
  const items = [tmp3.message, identityErrorMessage];
  const memo = identityErrorMessage.useMemo(() => {
    if (null != identityErrorMessage) {
      let message = identityErrorMessage;
    } else {
      message = tmp3.message;
    }
    return message;
  }, items);
  const tmp2 = setInputMode(9233)();
  setInputMode(14793)(inputMode(668).AuthStates.REGISTER_IDENTITY);
  const tmp7 = setInputMode(14793);
  let obj3 = inputMode(14777);
  setInputMode(14794)(obj3.getPreviousRegistrationTransitionStep(inputMode(668).AuthStates.REGISTER_IDENTITY));
  setInputMode(4559)(() => {
    callback({ step: outer1_12.ACCOUNT_IDENTITY, actionType: outer1_13.VIEWED });
  });
  obj = { headerText, subHeader: subheader };
  obj = { style: tmp.container, contentContainerStyle: tmp.scrollContent, keyboardShouldPersistTaps: "handled" };
  const items1 = [controlComponent, , , ];
  const tmp12 = callback3;
  const tmp9 = setInputMode(14794);
  items1[1] = callback3(inputMode(14795).RegisterPhoneOrEmailInput, { loginPhone, loginEmail, setLoginPhone: updateLoginPhone, setLoginEmail, inputMode, onSubmit: handleSubmit, inputError: identityError, autoFocus: true });
  obj1 = { style: tmp.button };
  obj2 = { loading: tmp5[0], size: "lg" };
  const intl = inputMode(1212).intl;
  obj2.text = intl.string(inputMode(1212).t.PDTjLN);
  obj2.onPress = handleSubmit;
  obj2.disabled = preventSubmitIdentity;
  obj1.children = callback3(inputMode(4543).Button, obj2);
  items1[2] = callback3(c6, obj1);
  let tmp16 = null;
  if (null != memo) {
    tmp16 = null;
    if ("" !== memo) {
      obj3 = { style: tmp.errors, children: memo };
      tmp16 = callback3(setInputMode(9043), obj3);
    }
  }
  items1[3] = tmp16;
  obj.children = items1;
  obj.children = closure_15(c7, obj);
  const tmp12Result = tmp12(setInputMode(9255), obj);
  let tmp21 = tmp12Result;
  if (!tmp2) {
    const obj4 = { style: tmp.page, children: tmp12Result };
    tmp21 = callback3(setInputMode(5585), obj4);
  }
  return tmp21;
}
({ View: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ clearRegistrationErrorMessage: closure_8, setRegistrationErrors: closure_9, updateRegistrationOptions: closure_10, useRegistrationUIStore: closure_11 } = useRegistrationUIStore);
({ RegisterTransitionSteps: closure_12, RegistrationTransitionActionTypes: closure_13 } = RegistrationTransitionActionTypes);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let closure_16 = _createForOfIteratorHelperLoose.createStyles((minHeight) => {
  const segmentedControl = { minHeight, marginBottom: 24 };
  return { container: { marginTop: 24, flex: 1 }, page: { flex: 1 }, button: { width: "100%", marginTop: 24 }, errors: { marginTop: 4 }, segmentedControl, scrollContent: { paddingBottom: 128 } };
});
const result = require("result").fileFinishedImporting("modules/auth/native/components/RegisterIdentity.tsx");

export const RegisterIdentity = function RegisterIdentity() {
  let obj = hasItem(4549);
  let obj1 = hasItem(14797);
  const deviceCountry = obj1.getDeviceCountry();
  hasItem = null != deviceCountry;
  if (hasItem) {
    const EMAIL_FIRST_COUNTRIES = hasItem(14798).EMAIL_FIRST_COUNTRIES;
    hasItem = EMAIL_FIRST_COUNTRIES.has(deviceCountry);
  }
  let items = [hasItem];
  const memo = React.useMemo(() => {
    let obj = {};
    const t = hasItem(tmp7[22]).t;
    if (hasItem) {
      obj.descriptor = t["w/qqKK"];
      obj.mode = tmp(tmp2[18]).PhoneOrEmailSelectorForceMode.EMAIL;
      const items = [obj, ];
      obj = { descriptor: tmp(tmp2[22]).t.dEYpSt, mode: tmp(tmp2[18]).PhoneOrEmailSelectorForceMode.PHONE };
      items[1] = obj;
      let items1 = items;
    } else {
      obj.descriptor = t.dEYpSt;
      obj.mode = tmp(tmp2[18]).PhoneOrEmailSelectorForceMode.PHONE;
      items1 = [obj, ];
      obj = { descriptor: tmp(tmp2[22]).t["w/qqKK"], mode: tmp(tmp2[18]).PhoneOrEmailSelectorForceMode.EMAIL };
      items1[1] = obj;
    }
    return items1;
  }, items);
  const tmp6 = callback(React.useState(memo[0].mode), 2);
  const dependencyMap = tmp7;
  let items1 = [tmp6[1], memo];
  callback = React.useCallback((arg0) => {
    outer1_8();
    tmp7(memo[arg0].mode);
  }, items1);
  const tmp = callback4(45 * Math.min(2, obj.useFontScale()));
  obj = {
    pageWidth: 0,
    defaultIndex: 0,
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
  const segmentedControlState = hasItem(8404).useSegmentedControlState(obj);
  const items2 = [segmentedControlState, memo];
  obj = {
    inputMode: tmp6[0],
    setInputMode: React.useCallback((arg0) => {
      let closure_0 = arg0;
      const findIndexResult = memo.findIndex((mode) => mode.mode === closure_0);
      if (-1 !== findIndexResult) {
        segmentedControlState.setActiveIndex(findIndexResult, false);
      }
    }, items2)
  };
  obj1 = { style: tmp.segmentedControl, children: callback3(hasItem(8799).SegmentedControl, { state: segmentedControlState, keyboardShouldPersistTaps: "handled" }) };
  obj.controlComponent = callback3(closure_6, obj1);
  let intl = hasItem(1212).intl;
  obj.headerText = intl.string(hasItem(1212).t.WEdDgv);
  return callback3(RegisterIdentityBase, obj);
};
