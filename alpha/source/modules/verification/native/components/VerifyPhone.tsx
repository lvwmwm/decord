// Module ID: 6766
// Function ID: 6767
// Name: VerifyPhone
// Dependencies: [5, 32, 19, 21, 6733, 6767, 6768, 1126, 2]
// Exports: default

// Module 6766 (VerifyPhone)
import Fragment from "Fragment" /* 21 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c2, c3, c5, c6;

let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/verification/native/components/VerifyPhone.tsx");

export default function VerifyPhone(phone) {
  let backgroundStyle;
  let closure_3;
  let closure_4;
  let disableKeyboardAvoidingView;
  let error;
  let first;
  let first1;
  let intl;
  let intl2;
  let onCodeEnteredIntercept;
  let tmp11;
  phone = phone.phone;
  let flag = phone.loading;
  if (flag === undefined) {
    flag = false;
  }
  ({ error, onCodeEnteredIntercept } = phone);
  const onVerified = phone.onVerified;
  _asyncToGenerator = undefined;
  _slicedToArray = undefined;
  let onCodeEntered;
  ({ backgroundStyle, disableKeyboardAvoidingView } = phone);
  [first, _asyncToGenerator] = onCodeEntered.useState(null);
  [first1, _slicedToArray] = onCodeEntered.useState(false);
  const useCallback = onCodeEntered.useCallback;
  _asyncToGenerator(async (arg0, value) => {
    let body;
    let closure_2;
    let obj3;
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
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      let c4;
      try {
        let token;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp4;
            token = undefined;
            c4 = 1;
            if (null != closure_1) {
              c5 = 3;
              c6 = 1;
              const obj5 = { value: closure_1(closure_0), done: false };
              return obj5;
            }
          }
        } else {
          if (1 === c5) {
            c4 = 0;
            body = body.body;
            let message;
            const tmp13 = body;
            if (body != null) {
              message = body.message;
            }
            tmp13(message);
          } else if (2 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              token = value.token;
              tmp(token);
              c4 = 0;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          } else if (value) {
            c4 = 0;
            c6 = 3;
            return { value: "IconComponent", done: "+51" };
          }
          c6 = 3;
          return { value: "IconComponent", done: "+51" };
        }
        c5 = 2;
        c6 = 1;
        const obj7 = { value: obj3.verifyPhone(closure_0, closure_0, false), done: false };
        obj3 = onCodeEnteredIntercept(onVerified[4]);
        return obj7;
      } catch (tmp22) {
        body = tmp22;
        if (0 === c4) {
          c6 = 3;
          throw tmp22;
        } else {
          c5 = 1;
        }
      }
    }
  });
  const items = [onCodeEnteredIntercept, onVerified, phone];
  onCodeEntered = useCallback(function() {
    return closure_0(...arguments);
  }, items);
  const useCallback2 = onCodeEntered.useCallback;
  let closure_0 = _asyncToGenerator(async (arg0, value) => {
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
        return { value: "IconComponent", done: "+51" };
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
            closure_1_4(true);
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
          closure_1_4(false);
          c3 = 3;
          return { value: "IconComponent", done: "+51" };
        }
      } catch (tmp11) {
        c3 = 3;
        throw tmp11;
      }
    }
  });
  const items1 = [onCodeEntered];
  const callback2 = useCallback2(function() {
    return closure_0(...arguments);
  }, items1);
  onCodeEnteredIntercept(onVerified[5])(callback2);
  let obj = { title: intl.string(phone(onVerified[7]).t.Xclkxp), description: intl2.string(phone(onVerified[7]).t["4qMI6A"]), error, backgroundStyle, loading: flag, onCodeEntered, codeType: tmp11(onVerified[6]).CodeType.NUMERIC, disabled: first1, disableKeyboardAvoidingView };
  tmp11 = phone;
  const tmp10 = onCodeEnteredIntercept(onVerified[6]);
  intl = phone(onVerified[7]).intl;
  intl2 = phone(onVerified[7]).intl;
  const tmp9 = jsx;
  if (error == null) {
    error = first;
  }
  return tmp9(tmp10, obj);
};
