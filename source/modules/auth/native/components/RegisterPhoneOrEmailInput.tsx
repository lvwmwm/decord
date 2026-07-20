// Module ID: 14615
// Function ID: 110244
// Name: RegisterPhoneOrEmailInput
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: RegisterPhoneOrEmailInput

// Module 14615 (RegisterPhoneOrEmailInput)
import closure_3 from "result";
import closure_4 from "result";
import result from "result";
import { jsx } from "result";

({ setRegistrationErrors: closure_5, useRegistrationUIStore: closure_6 } = result);
result = arg1(dependencyMap[11]).fileFinishedImporting("modules/auth/native/components/RegisterPhoneOrEmailInput.tsx");

export const RegisterPhoneOrEmailInput = function RegisterPhoneOrEmailInput(loginPhone) {
  let autoFocus;
  let inputError;
  let onSubmit;
  let submitBehavior;
  loginPhone = loginPhone.loginPhone;
  const arg1 = loginPhone;
  const loginEmail = loginPhone.loginEmail;
  const importDefault = loginEmail;
  const setLoginPhone = loginPhone.setLoginPhone;
  const dependencyMap = setLoginPhone;
  const setLoginEmail = loginPhone.setLoginEmail;
  const React = setLoginEmail;
  const inputMode = loginPhone.inputMode;
  let closure_4 = inputMode;
  ({ inputError, autoFocus } = loginPhone);
  let jsx;
  let callback;
  let closure_9;
  ({ onSubmit, submitBehavior } = loginPhone);
  let obj = arg1(dependencyMap[4]);
  const navigation = obj.useNavigation();
  const ref = React.useRef(null);
  obj = { inputRef: ref };
  let tmp4 = null != autoFocus;
  if (tmp4) {
    tmp4 = autoFocus;
  }
  obj.enabled = tmp4;
  importDefault(dependencyMap[5])(obj);
  const tmp3 = importDefault(dependencyMap[5]);
  const items = [closure_4];
  const stateFromStores = arg1(dependencyMap[6]).useStateFromStores(items, () => inputMode.getCountryCode());
  const tmp7 = ref((errors) => errors.errors);
  jsx = tmp7;
  const items1 = [tmp7];
  callback = React.useCallback((arg0) => {
    if (null != tmp7[arg0]) {
      const obj = {};
      const merged = Object.assign(tmp7);
      delete r2[r0];
      navigation(obj);
    }
  }, items1);
  const items2 = [inputMode, callback, setLoginPhone, setLoginEmail];
  const items3 = [navigation];
  const callback1 = React.useCallback((arg0, arg1) => {
    if (inputMode === loginPhone(setLoginPhone[7]).PhoneOrEmailSelectorForceMode.PHONE) {
      callback("phone");
      setLoginPhone(arg0, arg1);
    } else {
      callback("email");
      setLoginEmail(arg0);
    }
  }, items2);
  const callback2 = React.useCallback(() => {
    navigation.push(loginPhone(setLoginPhone[8]).AuthStates.COUNTRY_SELECT);
  }, items3);
  closure_9 = React.useRef(inputMode);
  const items4 = [inputMode, loginEmail, loginPhone];
  const layoutEffect = React.useLayoutEffect(() => {
    if (ref.current !== inputMode) {
      ref.current = inputMode;
      if (inputMode === loginPhone(setLoginPhone[7]).PhoneOrEmailSelectorForceMode.PHONE) {
        const current2 = ref.current;
        if (null != current2) {
          current2.setText(loginPhone);
        }
      } else {
        const current = ref.current;
        if (null != current) {
          current.setText(loginEmail);
        }
      }
    }
  }, items4);
  if (inputMode === arg1(dependencyMap[7]).PhoneOrEmailSelectorForceMode.PHONE) {
    const intl2 = arg1(dependencyMap[9]).intl;
    let stringResult = intl2.string(arg1(dependencyMap[9]).t.eJnn0+);
  } else {
    const intl = arg1(dependencyMap[9]).intl;
    stringResult = intl.string(arg1(dependencyMap[9]).t.dI4d4S);
  }
  if (inputMode === arg1(dependencyMap[7]).PhoneOrEmailSelectorForceMode.PHONE) {
    const intl4 = arg1(dependencyMap[9]).intl;
    let stringResult1 = intl4.string(arg1(dependencyMap[9]).t.wpJ1dT);
  } else {
    const intl3 = arg1(dependencyMap[9]).intl;
    stringResult1 = intl3.string(arg1(dependencyMap[9]).t.a17rBk);
  }
  obj = { ref, alpha2: stateFromStores.alpha2, countryCode: stateFromStores.code, onChange: callback1, onSubmitEditing: onSubmit, placeholder: stringResult, returnKeyType: "next", autoCapitalize: "none", accessibilityHint: stringResult1, label: stringResult, errorMessage: inputError, onPressCountrySelector: callback2, forceMode: inputMode, submitBehavior };
  const obj3 = arg1(dependencyMap[6]);
  const tmp22 = jsx;
  let str = "email";
  if (inputMode === arg1(dependencyMap[7]).PhoneOrEmailSelectorForceMode.PHONE) {
    str = "tel";
  }
  obj.autoComplete = str;
  let str2 = "email-address";
  if (inputMode === arg1(dependencyMap[7]).PhoneOrEmailSelectorForceMode.PHONE) {
    str2 = "number-pad";
  }
  obj.keyboardType = str2;
  obj.isClearable = true;
  let str3;
  if (null != inputError) {
    str3 = "error";
  }
  obj.status = str3;
  return tmp22(importDefault(dependencyMap[10]), obj);
};
