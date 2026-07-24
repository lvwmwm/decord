// Module ID: 14806
// Function ID: 112916
// Name: VerifyPhone
// Dependencies: [5, 57, 31, 14778, 14779, 653, 33, 14776, 14794, 4559, 9275, 1212, 9299, 14807, 9300, 2]
// Exports: default

// Module 14806 (VerifyPhone)
import ME from "ME";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { doesRegistrationHaveIdentityType as closure_6 } from "useRegistrationUIStore";
import RegistrationTransitionActionTypes from "RegistrationTransitionActionTypes";
import { Links } from "ME";
import { jsx } from "jsxProd";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ authStateToRegisterTransitionStep: closure_7, RegisterTransitionSteps: closure_8, RegistrationTransitionActionTypes: closure_9 } = RegistrationTransitionActionTypes);
const result = require("result").fileFinishedImporting("modules/auth/native/components/VerifyPhone.tsx");

export default function VerifyPhone(phone) {
  let result;
  let closure_6;
  let dependencyMap;
  let description;
  let onBail;
  let sourceState;
  let title;
  let tmp3;
  let tmp5;
  phone = phone.phone;
  const onPhoneTokenReceived = phone.onPhoneTokenReceived;
  ({ onClose: dependencyMap, onBail } = phone);
  ({ title, description, sourceState } = phone);
  let tmp = callback(React.useState(false), 2);
  callback = tmp[1];
  [tmp3, result] = callback(React.useState(null), 2);
  const tmp2 = callback(React.useState(null), 2);
  [tmp5, closure_6] = callback(React.useState(false), 2);
  const callback2 = React.useRef(false);
  const context = React.useContext(phone(14776).TrackRegistrationContext);
  const tmp4 = callback(React.useState(false), 2);
  onPhoneTokenReceived(14794)(callback2(sourceState));
  const items = [context];
  const effect = React.useEffect(() => {
    if (outer1_6()) {
      const obj = { step: context.PHONE_VERIFICATION, actionType: callback.VIEWED };
      context(obj);
    }
  }, items);
  onPhoneTokenReceived(4559)(() => () => {
    let tmp;
    if (null != outer1_2) {
      tmp = outer1_2(outer1_7.current);
    }
    return tmp;
  });
  const items1 = [phone, onPhoneTokenReceived, context];
  callback = React.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = onBail(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items1);
  const items2 = [callback];
  const callback1 = React.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = onBail(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items2);
  onPhoneTokenReceived(9299)(callback1);
  const items3 = [onBail];
  const memo = React.useMemo(() => {
    let tmp = null;
    if (null != onBail) {
      const obj = { onBail };
      tmp = outer1_11(onPhoneTokenReceived(outer1_2[13]), obj);
    }
    return tmp;
  }, items3);
  let obj = { title, description, error: tmp3, onCodeEntered: callback };
  const tmp7 = onPhoneTokenReceived(14794);
  obj.codeType = phone(9300).CodeType.NUMERIC;
  obj.footer = memo;
  obj.disabled = tmp5;
  obj.loading = tmp[0];
  obj.disableKeyboardAvoidingView = true;
  return jsx(onPhoneTokenReceived(9300), { title, description, error: tmp3, onCodeEntered: callback });
};
