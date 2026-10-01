// Module ID: 15587
// Function ID: 15588
// Name: RegisterPhoneOrEmailInput
// Dependencies: [19, 6362, 15570, 21, 1485, 13992, 504, 6382, 1094, 1115, 6381, 2]
// Exports: RegisterPhoneOrEmailInput

// Module 15587 (RegisterPhoneOrEmailInput)
import Fragment from "Fragment" /* 21 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import PhoneOrEmailUtils from "PhoneOrEmailUtils" /* 6382 */;
import react from "react" /* 19 */;
import PhoneStore from "PhoneStore" /* 6362 */;
import RegistrationUIStore from "RegistrationUIStore" /* 15570 */;
import size from "module_2" /* 2 */;

let navigation;

let hasOwnProperty;
let metroRequire;
({ setRegistrationErrors: hasOwnProperty, useRegistrationUIStore: metroRequire } = RegistrationUIStore);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/auth/native/components/RegisterPhoneOrEmailInput.tsx");

export const RegisterPhoneOrEmailInput = function RegisterPhoneOrEmailInput(loginPhone) {
  let autoFocus;
  let inputError;
  let onSubmit;
  let str;
  let str2;
  let str3;
  let stringResult;
  let stringResult1;
  let submitBehavior;
  loginPhone = loginPhone.loginPhone;
  const loginEmail = loginPhone.loginEmail;
  const setLoginPhone = loginPhone.setLoginPhone;
  const setLoginEmail = loginPhone.setLoginEmail;
  const inputMode = loginPhone.inputMode;
  ({ inputError, autoFocus } = loginPhone);
  let closure_7;
  let callback;
  const tmp = loginPhone;
  const tmp2 = setLoginPhone;
  ({ onSubmit, submitBehavior } = loginPhone);
  let obj = loginPhone(setLoginPhone[4]);
  navigation = obj.useNavigation();
  let ref = setLoginEmail.useRef(null);
  const obj3 = { inputRef: ref, enabled: autoFocus };
  const tmp5 = loginEmail;
  const tmp6 = loginEmail(setLoginPhone[5]);
  if (autoFocus == null) {
    autoFocus = false;
  }
  tmp6(obj3);
  const items = [inputMode];
  const tmpResult = tmp(tmp2[6]);
  const stateFromStores = tmpResult.useStateFromStores(items, () => inputMode.getCountryCode());
  const code = stateFromStores.code;
  const tmp9 = ref((errors) => errors.errors);
  closure_7 = tmp9;
  const items1 = [tmp9];
  callback = obj2.useCallback((arg0) => {
    if (null != closure_7[arg0]) {
      const obj = {};
      const merged = Object.assign(tmp2);
      delete obj[tmp];
      hasOwnProperty(obj);
    }
  }, items1);
  const items2 = [inputMode, callback, setLoginPhone, setLoginEmail];
  const items3 = [navigation];
  const callback1 = obj2.useCallback((arg0, arg1) => {
    if (inputMode === PhoneOrEmailUtils.PhoneOrEmailSelectorForceMode.PHONE) {
      callback("phone");
      setLoginPhone(arg0, arg1);
    } else {
      callback("email");
      setLoginEmail(arg0);
    }
  }, items2);
  const callback2 = obj2.useCallback(() => {
    navigation.push(ConstantsIOS.AuthStates.COUNTRY_SELECT);
  }, items3);
  ref = obj2.useRef(inputMode);
  const items4 = [inputMode, loginEmail, loginPhone];
  const layoutEffect = obj2.useLayoutEffect(() => {
    if (ref.current !== inputMode) {
      ref.current = inputMode;
      if (inputMode === PhoneOrEmailUtils.PhoneOrEmailSelectorForceMode.PHONE) {
        const current2 = ref.current;
        if (current2 != null) {
          current2.setText(loginPhone);
        }
      } else {
        const current = ref.current;
        if (current != null) {
          current.setText(loginEmail);
        }
      }
    }
  }, items4);
  if (inputMode === tmp(tmp2[7]).PhoneOrEmailSelectorForceMode.PHONE) {
    const intl2 = tmp(tmp2[9]).intl;
    stringResult = intl2.string(tmp(tmp2[9]).t["eJnn0+"]);
  } else {
    const intl = tmp(tmp2[9]).intl;
    stringResult = intl.string(tmp(tmp2[9]).t.dI4d4S);
  }
  if (inputMode === tmp(tmp2[7]).PhoneOrEmailSelectorForceMode.PHONE) {
    const intl4 = tmp(tmp2[9]).intl;
    stringResult1 = intl4.string(tmp(tmp2[9]).t.wpJ1dT);
  } else {
    const intl3 = tmp(tmp2[9]).intl;
    stringResult1 = intl3.string(tmp(tmp2[9]).t.a17rBk);
  }
  const obj4 = { ref, alpha2: stateFromStores.alpha2, countryCode: code, onChange: callback1, onSubmitEditing: onSubmit, placeholder: stringResult, returnKeyType: "next", autoCapitalize: "none", accessibilityHint: stringResult1, label: stringResult, errorMessage: inputError, onPressCountrySelector: callback2, forceMode: inputMode, submitBehavior, autoComplete: str, keyboardType: str2, clearable: true, status: str3 };
  str = "email";
  const tmp16 = closure_7;
  const tmp5Result = tmp5(tmp2[10]);
  if (inputMode === tmp(tmp2[7]).PhoneOrEmailSelectorForceMode.PHONE) {
    str = "tel";
  }
  str2 = "email-address";
  if (inputMode === tmp(tmp2[7]).PhoneOrEmailSelectorForceMode.PHONE) {
    str2 = "number-pad";
  }
  str3 = undefined;
  if (null != inputError) {
    str3 = "error";
  }
  return tmp16(tmp5Result, obj4);
};
