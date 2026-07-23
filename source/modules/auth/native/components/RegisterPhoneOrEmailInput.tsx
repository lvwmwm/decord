// Module ID: 14748
// Function ID: 112505
// Name: RegisterPhoneOrEmailInput
// Dependencies: [31, 9196, 14731, 33, 1456, 14749, 566, 9215, 668, 1212, 9214, 2]
// Exports: RegisterPhoneOrEmailInput

// Module 14748 (RegisterPhoneOrEmailInput)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import useRegistrationUIStore from "useRegistrationUIStore";
import { jsx } from "jsxProd";

let closure_5;
let closure_6;
const require = arg1;
({ setRegistrationErrors: closure_5, useRegistrationUIStore: closure_6 } = useRegistrationUIStore);
const result = require("useRegistrationUIStore").fileFinishedImporting("modules/auth/native/components/RegisterPhoneOrEmailInput.tsx");

export const RegisterPhoneOrEmailInput = function RegisterPhoneOrEmailInput(loginPhone) {
  let autoFocus;
  let inputError;
  let onSubmit;
  let submitBehavior;
  loginPhone = loginPhone.loginPhone;
  const loginEmail = loginPhone.loginEmail;
  const setLoginPhone = loginPhone.setLoginPhone;
  const setLoginEmail = loginPhone.setLoginEmail;
  const inputMode = loginPhone.inputMode;
  ({ inputError, autoFocus } = loginPhone);
  let c7;
  let callback;
  let closure_9;
  ({ onSubmit, submitBehavior } = loginPhone);
  let obj = loginPhone(setLoginPhone[4]);
  const navigation = obj.useNavigation();
  const ref = setLoginEmail.useRef(null);
  obj = { inputRef: ref };
  let tmp4 = null != autoFocus;
  if (tmp4) {
    tmp4 = autoFocus;
  }
  obj.enabled = tmp4;
  loginEmail(setLoginPhone[5])(obj);
  const tmp3 = loginEmail(setLoginPhone[5]);
  const items = [inputMode];
  const stateFromStores = loginPhone(setLoginPhone[6]).useStateFromStores(items, () => inputMode.getCountryCode());
  const tmp7 = ref((errors) => errors.errors);
  c7 = tmp7;
  const items1 = [tmp7];
  callback = setLoginEmail.useCallback((arg0) => {
    if (null != _undefined[arg0]) {
      const obj = {};
      const merged = Object.assign(_undefined);
      delete tmp2[tmp];
      navigation(obj);
    }
  }, items1);
  const items2 = [inputMode, callback, setLoginPhone, setLoginEmail];
  const items3 = [navigation];
  const callback1 = setLoginEmail.useCallback((arg0, arg1) => {
    if (inputMode === loginPhone(setLoginPhone[7]).PhoneOrEmailSelectorForceMode.PHONE) {
      callback("phone");
      setLoginPhone(arg0, arg1);
    } else {
      callback("email");
      setLoginEmail(arg0);
    }
  }, items2);
  const callback2 = setLoginEmail.useCallback(() => {
    navigation.push(loginPhone(setLoginPhone[8]).AuthStates.COUNTRY_SELECT);
  }, items3);
  closure_9 = setLoginEmail.useRef(inputMode);
  const items4 = [inputMode, loginEmail, loginPhone];
  const layoutEffect = setLoginEmail.useLayoutEffect(() => {
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
  if (inputMode === loginPhone(setLoginPhone[7]).PhoneOrEmailSelectorForceMode.PHONE) {
    const intl2 = loginPhone(setLoginPhone[9]).intl;
    let stringResult = intl2.string(loginPhone(setLoginPhone[9]).t["eJnn0+"]);
  } else {
    const intl = loginPhone(setLoginPhone[9]).intl;
    stringResult = intl.string(loginPhone(setLoginPhone[9]).t.dI4d4S);
  }
  if (inputMode === loginPhone(setLoginPhone[7]).PhoneOrEmailSelectorForceMode.PHONE) {
    const intl4 = loginPhone(setLoginPhone[9]).intl;
    let stringResult1 = intl4.string(loginPhone(setLoginPhone[9]).t.wpJ1dT);
  } else {
    const intl3 = loginPhone(setLoginPhone[9]).intl;
    stringResult1 = intl3.string(loginPhone(setLoginPhone[9]).t.a17rBk);
  }
  obj = { ref, alpha2: stateFromStores.alpha2, countryCode: stateFromStores.code, onChange: callback1, onSubmitEditing: onSubmit, placeholder: stringResult, returnKeyType: "next", autoCapitalize: "none", accessibilityHint: stringResult1, label: stringResult, errorMessage: inputError, onPressCountrySelector: callback2, forceMode: inputMode, submitBehavior };
  const obj3 = loginPhone(setLoginPhone[6]);
  const tmp22 = c7;
  let str = "email";
  if (inputMode === loginPhone(setLoginPhone[7]).PhoneOrEmailSelectorForceMode.PHONE) {
    str = "tel";
  }
  obj.autoComplete = str;
  let str2 = "email-address";
  if (inputMode === loginPhone(setLoginPhone[7]).PhoneOrEmailSelectorForceMode.PHONE) {
    str2 = "number-pad";
  }
  obj.keyboardType = str2;
  obj.isClearable = true;
  let str3;
  if (null != inputError) {
    str3 = "error";
  }
  obj.status = str3;
  return tmp22(loginEmail(setLoginPhone[10]), obj);
};
