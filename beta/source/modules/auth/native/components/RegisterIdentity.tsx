// Module ID: 15579
// Function ID: 15580
// Name: RegisterIdentity
// Dependencies: [5, 32, 19, 17, 15570, 15571, 21, 4836, 5288, 6363, 1485, 15580, 1094, 15567, 15585, 15586, 15569, 5298, 6382, 6391, 15587, 5281, 1115, 6360, 5890, 15588, 15589, 9083, 9084, 2]
// Exports: RegisterIdentity

// Module 15579 (RegisterIdentity)
import intl3 from "intl" /* 1115 */;
import PhoneOrEmailUtils from "PhoneOrEmailUtils" /* 6382 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import RegistrationUIStore from "RegistrationUIStore" /* 15570 */;
import RegistrationConstants from "RegistrationConstants" /* 15571 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c1, c4, dependencyMap, descriptor;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function RegisterIdentityBase(inputMode) {
  let Button;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let c6;
  let c7;
  let c8;
  let controlComponent;
  let headerText;
  let identityError;
  let intl;
  let items1;
  let loginPhone;
  let obj6;
  let obj8;
  let preventSubmitIdentity;
  let setLoginEmail;
  let subheader;
  let tmp17;
  let tmp18;
  let tmp8;
  let updateLoginPhone;
  inputMode = inputMode.inputMode;
  const setInputMode = inputMode.setInputMode;
  dependencyMap = undefined;
  c6 = undefined;
  c7 = undefined;
  c8 = undefined;
  function handleSubmit() {
    return obj(...arguments);
  }
  let obj = function _handleSubmit() {
    let email;
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c3;
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1_9({});
              const obj4 = { step: constants.ACCOUNT_IDENTITY, actionType: constants2.SUBMITTED };
              closure_2_9(obj4);
              const tmp36 = closure_1_9;
              const tmp39 = constants;
              const tmp40 = constants2;
              if (inputMode === tmp(closure_2[18]).PhoneOrEmailSelectorForceMode.EMAIL) {
                const obj5 = { email, phoneToken: "a" };
                closure_1_10(obj5);
                const tmp23 = _undefined2();
                if (null != tmp23) {
                  const obj6 = { email: tmp23 };
                  tmp36(obj6);
                  const obj7 = { step: tmp39.ACCOUNT_IDENTITY, actionType: tmp40.INPUT_ERROR, details: ["email"] };
                  closure_2_9(obj7);
                } else {
                  const tmp43Result = tmp(closure_2[16]);
                  const result = tmp43Result.handleNextOrSubmitRegistration(tmp43(tmp44[12]).AuthStates.REGISTER_IDENTITY, closure_2_2, tmp38);
                }
                c4 = 3;
                const obj8 = { value: tmp26, done: true };
                return obj8;
              } else {
                c3 = 1;
                _undefined3(true);
                c1 = 2;
                c4 = 1;
                const obj9 = {
                  value: _undefined(() => {
                              closure_1_1(closure_0(closure_2[18]).PhoneOrEmailSelectorForceMode.EMAIL);
                            }),
                  done: false
                };
                return obj9;
              }
            }
          } else if (1 === tmp4) {
            c3 = 0;
            closure_128_8(false);
            throw closure_2;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_8(false);
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
            closure_128_8(false);
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp29) {
          closure_2 = tmp29;
          if (0 === c3) {
            c4 = 3;
            throw tmp29;
          } else {
            c1 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = dependencyMap;
  ({ headerText, controlComponent, subheader } = inputMode);
  obj = inputMode(5288);
  const tmp2 = closure_16(45 * min(2, obj.useFontScale()));
  const tmp3 = setInputMode;
  const tmp4 = setInputMode(6363)();
  let obj2 = inputMode(1485);
  dependencyMap = obj2.useNavigation();
  const tmp5 = closure_11((errors) => errors.errors);
  let message = tmp5;
  let obj3 = inputMode(15580);
  const identityRegistrationStep = obj3.useIdentityRegistrationStep(inputMode(1094).AuthStates.REGISTER_IDENTITY, inputMode);
  const loginEmail = identityRegistrationStep.loginEmail;
  const identityErrorMessage = identityRegistrationStep.identityErrorMessage;
  ({ registerAndVerifyPhone: c6, validateEmail: c7 } = identityRegistrationStep);
  ({ setLoginEmail, loginPhone, updateLoginPhone, preventSubmitIdentity, identityError } = identityRegistrationStep);
  [tmp8, c8] = loginEmail(identityErrorMessage.useState(false), 2);
  const tmp7 = loginEmail(identityErrorMessage.useState(false), 2);
  let closure_9 = identityErrorMessage.useContext(inputMode(15567).TrackRegistrationContext);
  const items = [tmp5.message, identityErrorMessage];
  const memo = identityErrorMessage.useMemo(() => {
    message = identityErrorMessage;
    if (null == identityErrorMessage) {
      message = message.message;
    }
    return message;
  }, items);
  const tmp10 = setInputMode(15585);
  tmp10(inputMode(1094).AuthStates.REGISTER_IDENTITY);
  const tmp12 = setInputMode(15586);
  let obj4 = inputMode(15569);
  tmp12(obj4.getPreviousRegistrationTransitionStep(inputMode(1094).AuthStates.REGISTER_IDENTITY));
  setInputMode(5298)(() => {
    obj = { step: constants.ACCOUNT_IDENTITY, actionType: map1.VIEWED };
    closure_9(obj);
  });
  let obj5 = { headerText, subHeader: subheader, children: tmp17(tmp18, obj6) };
  obj6 = { style: tmp2.container, contentContainerStyle: tmp2.scrollContent, keyboardShouldPersistTaps: "handled", children: items1 };
  items1 = [controlComponent, , , ];
  const tmp16 = setInputMode(6391);
  items1[1] = closure_14(inputMode(15587).RegisterPhoneOrEmailInput, { loginPhone, loginEmail, setLoginPhone: updateLoginPhone, setLoginEmail, inputMode, onSubmit: handleSubmit, inputError: identityError, autoFocus: true });
  let obj7 = { style: tmp2.button, children: closure_14(Button, obj8) };
  obj8 = { loading: tmp8, size: "lg", text: intl.string(inputMode(1115).t.PDTjLN), onPress: handleSubmit, disabled: preventSubmitIdentity };
  Button = inputMode(5281).Button;
  intl = inputMode(1115).intl;
  items1[2] = closure_14(c6, obj7);
  let tmp15Result = null;
  tmp17 = closure_15;
  tmp18 = c7;
  if (null != memo) {
    tmp15Result = null;
    if ("" !== memo) {
      let obj9 = { style: tmp2.errors, children: memo };
      tmp15Result = tmp15(tmp3(6360), obj9);
    }
  }
  items1[3] = tmp15Result;
  const tmp15Result3 = closure_14(tmp16, obj5);
  let tmp15Result4 = tmp15Result3;
  if (!tmp4) {
    const obj10 = { style: tmp2.page, children: tmp15Result3 };
    tmp15Result4 = tmp15(tmp3(5890), obj10);
  }
  return tmp15Result4;
}
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ clearRegistrationErrorMessage: metroImportAll, setRegistrationErrors: c9, updateRegistrationOptions: c10, useRegistrationUIStore: unpackModuleId } = RegistrationUIStore);
({ RegisterTransitionSteps: closure_12, RegistrationTransitionActionTypes: map1 } = RegistrationConstants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let closure_16 = createStyles.createStyles((minHeight) => {
  const obj = { container: { marginTop: 24, flex: 1 }, page: { flex: 1 }, button: { width: "100%", marginTop: 24 }, errors: { marginTop: 4 }, segmentedControl: obj2, scrollContent: { paddingBottom: 128 } };
  return obj;
});
let result = size.fileFinishedImporting("modules/auth/native/components/RegisterIdentity.tsx");

export const RegisterIdentity = function RegisterIdentity() {
  let closure_2;
  let first;
  let hasItem;
  let intl;
  let obj5;
  let tmp8;
  let obj = hasItem(5288);
  const tmp3 = closure_16(45 * min(2, obj.useFontScale()));
  let obj2 = hasItem(15588);
  const deviceCountry = obj2.getDeviceCountry();
  hasItem = null != deviceCountry;
  if (hasItem) {
    const EMAIL_FIRST_COUNTRIES = tmp(15589).EMAIL_FIRST_COUNTRIES;
    hasItem = EMAIL_FIRST_COUNTRIES.has(deviceCountry);
  }
  let items = [hasItem];
  const memo = react.useMemo(() => {
    let items1;
    const obj = { descriptor: null, mode: null };
    const t = intl3.t;
    if (hasItem) {
      obj.descriptor = t["w/qqKK"];
      obj.mode = PhoneOrEmailUtils.PhoneOrEmailSelectorForceMode.EMAIL;
      const items = [obj, ];
      items[1] = { descriptor: intl3.t.dEYpSt, mode: PhoneOrEmailUtils.PhoneOrEmailSelectorForceMode.PHONE };
      items1 = items;
      const obj2 = { descriptor: intl3.t.dEYpSt, mode: PhoneOrEmailUtils.PhoneOrEmailSelectorForceMode.PHONE };
    } else {
      obj.descriptor = t.dEYpSt;
      obj.mode = PhoneOrEmailUtils.PhoneOrEmailSelectorForceMode.PHONE;
      items1 = [obj, ];
      items1[1] = { descriptor: intl3.t["w/qqKK"], mode: PhoneOrEmailUtils.PhoneOrEmailSelectorForceMode.EMAIL };
      const obj3 = { descriptor: intl3.t["w/qqKK"], mode: PhoneOrEmailUtils.PhoneOrEmailSelectorForceMode.EMAIL };
    }
    return items1;
  }, items);
  [first, tmp8] = react.useState(memo[0].mode);
  dependencyMap = tmp8;
  let items1 = [tmp8, memo];
  const callback = react.useCallback((arg0) => {
    metroImportAll();
    closure_2(memo[arg0].mode);
  }, items1);
  const tmpResult = hasItem(9083);
  let obj3 = {
    pageWidth: 0,
    defaultIndex: 0,
    onSetActiveIndex: callback,
    items: memo.map((descriptor) => {
      let intl;
      let intl2;
      descriptor = descriptor.descriptor;
      const obj = { id: intl.string(descriptor), label: intl2.string(descriptor), page: null };
      intl = hasItem(closure_2[22]).intl;
      intl2 = hasItem(closure_2[22]).intl;
      return obj;
    })
  };
  const segmentedControlState = tmpResult.useSegmentedControlState(obj3);
  const items2 = [segmentedControlState, memo];
  const obj4 = {
    inputMode: first,
    setInputMode: react.useCallback((arg0) => {
      let closure_0 = arg0;
      const findIndexResult = memo.findIndex((mode) => mode.mode === closure_0);
      if (-1 !== findIndexResult) {
        segmentedControlState.setActiveIndex(findIndexResult, false);
      }
    }, items2),
    controlComponent: closure_14(closure_6, obj5),
    headerText: intl.string(hasItem(1115).t.WEdDgv)
  };
  obj5 = { style: tmp3.segmentedControl, children: closure_14(hasItem(9084).SegmentedControl, { state: segmentedControlState, keyboardShouldPersistTaps: "handled" }) };
  intl = tmp(1115).intl;
  return closure_14(RegisterIdentityBase, obj4);
};
