// Module ID: 15597
// Function ID: 15598
// Name: VerifyPhone
// Dependencies: [5, 32, 19, 15570, 15571, 1074, 21, 15567, 15586, 5298, 6466, 1115, 6500, 15598, 6501, 2]
// Exports: default

// Module 15597 (VerifyPhone)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import RegistrationUIStore from "RegistrationUIStore" /* 15570 */;
import RegistrationBailoutButtonDefault from "RegistrationBailoutButton" /* 15598 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import RegistrationConstants from "RegistrationConstants" /* 15571 */;
import size from "module_2" /* 2 */;

let c2, c3, c4, closure_3;

let c9;
let metroImportAll;
let metroImportDefault;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let closure_6 = RegistrationUIStore.doesRegistrationHaveIdentityType;
({ authStateToRegisterTransitionStep: metroImportDefault, RegisterTransitionSteps: metroImportAll, RegistrationTransitionActionTypes: c9 } = RegistrationConstants);
const Links = Constants.Links;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/auth/native/components/VerifyPhone.tsx");

export default function VerifyPhone(phone) {
  let _undefined;
  let c5;
  let c6;
  let closure_4;
  let description;
  let first;
  let onBail;
  let sourceState;
  let title;
  let tmp4;
  let tmp6;
  phone = phone.phone;
  const onPhoneTokenReceived = phone.onPhoneTokenReceived;
  ({ onClose: dependencyMap, onBail } = phone);
  _slicedToArray = undefined;
  react = undefined;
  c6 = undefined;
  ({ title, description, sourceState } = phone);
  [first, _slicedToArray] = react.useState(false);
  const tmp3 = _slicedToArray(react.useState(null), 2);
  [tmp4, c5] = tmp3;
  [tmp6, c6] = _slicedToArray(react.useState(false), 2);
  const tmp5 = _slicedToArray(react.useState(false), 2);
  let closure_7 = react.useRef(false);
  const context = react.useContext(phone(15567).TrackRegistrationContext);
  const tmp8 = onPhoneTokenReceived(15586);
  tmp8(closure_7(sourceState));
  const items = [context];
  const effect = react.useEffect(() => {
    if (_undefined()) {
      const obj = { step: metroImportAll.PHONE_VERIFICATION, actionType: onCodeEntered.VIEWED };
      context(obj);
    }
  }, items);
  const tmp11 = onPhoneTokenReceived(5298)(() => {
    let ref;
    return () => {
      let tmpResult;
      if (closure_1_2 != null) {
        tmpResult = tmp(ref.current);
      }
      return tmpResult;
    };
  });
  const useCallback = react.useCallback;
  onBail(function*(arg0, value) {
    let obj5;
    let v0;
    closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
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
      try {
        let closure_1;
        let token;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            closure_1 = tmp4;
            token = undefined;
            c4(true);
            c4 = 1;
            const tmp48 = closure_0;
            if (_undefined()) {
              const obj4 = { step: constants.PHONE_VERIFICATION, actionType: constants2.SUBMITTED };
              constants(obj4);
            }
            c5 = 2;
            c6 = 1;
            const obj6 = { value: obj5.verifyPhone(closure_0, tmp48, false), done: false };
            obj5 = onPhoneTokenReceived(dependencyMap[10]);
            return obj6;
          }
        } else {
          if (1 === c5) {
            c4 = 0;
            closure_1 = closure_3;
            c4(false);
            if (_undefined()) {
              const obj7 = { step: constants.PHONE_VERIFICATION, actionType: constants2.RESPONSE_ERROR, details: ["code"] };
              constants(obj7);
            }
            const body = closure_1.body;
            let message;
            const tmp25 = c5;
            if (body != null) {
              message = body.message;
            }
            if (!message) {
              const intl = closure_0(dependencyMap[11]).intl;
              const obj8 = { statusPageURL: constants3.STATUS };
              message = intl.format(closure_0(dependencyMap[11]).t.aTVNes, obj8);
            }
            tmp25(message);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            token = value.token;
            closure_1_7.current = true;
            closure_1(token);
            c4 = 0;
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp41) {
        closure_3 = tmp41;
        if (0 === c4) {
          c6 = 3;
          throw tmp41;
        } else {
          c5 = 1;
        }
      }
    }
  });
  const items1 = [phone, onPhoneTokenReceived, context];
  const onCodeEntered = useCallback(function() {
    return closure_0(...arguments);
  }, items1);
  const useCallback2 = react.useCallback;
  let closure_0 = onBail(function*(arg0, value) {
    closure_0 = arg0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp3;
            _undefined(true);
            c2 = 1;
            c3 = 1;
            const obj4 = { value: onCodeEntered(closure_0), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          _undefined(false);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp11) {
        c3 = 3;
        throw tmp11;
      }
    }
  });
  const items2 = [onCodeEntered];
  const callback2 = useCallback2(function() {
    return closure_0(...arguments);
  }, items2);
  onPhoneTokenReceived(6500)(callback2);
  const items3 = [onBail];
  const memo = react.useMemo(() => {
    let tmp2 = null;
    if (null != onBail) {
      tmp2 = jsx(RegistrationBailoutButtonDefault, { onBail: tmp });
    }
    return tmp2;
  }, items3);
  onPhoneTokenReceived(6501);
  return <tmp16 title={title} description={description} error={tmp4} onCodeEntered={onCodeEntered} codeType={phone(6501).CodeType.NUMERIC} footer={memo} disabled={tmp6} loading={first} disableKeyboardAvoidingView />;
};
