// Module ID: 13427
// Function ID: 13428
// Name: useUserCodeSubmit
// Dependencies: [5, 32, 19, 13426, 1115, 8523, 2]
// Exports: useUserCodeSubmit

// Module 13427 (useUserCodeSubmit)
import OAuthConstants2 from "OAuthConstants" /* 13426 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c4, c5, closure_2;

let _asyncToGenerator = _asyncToGenerator_mod;
const OAuthConstants = OAuthConstants2.OAuthConstants;
const result = size.fileFinishedImporting("modules/activate_device/useUserCodeSubmit.tsx");

export const useUserCodeSubmit = function useUserCodeSubmit(arr, onUserCodeAccepted, onClose) {
  let closure_3;
  let closure_4;
  let error;
  let submitting;
  let length = arr;
  let closure_1 = onUserCodeAccepted;
  _asyncToGenerator = onClose;
  [submitting, _slicedToArray] = react.useState(false);
  [error, react] = react.useState(null);
  const items = [arr, onUserCodeAccepted, onClose];
  const manualSubmit = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let closure_1;
    let obj3;
    let tmp;
    function verifyUserCodeStatusToErrorMessage(status) {
      let stringResult;
      if (429 === status) {
        const intl3 = closure_1_0(closure_1_1[4]).intl;
        stringResult = intl3.string(closure_1_0(closure_1_1[4]).t.BPmZvj);
      } else {
        if (404 !== status) {
          if (400 !== status) {
            const intl = closure_1_0(closure_1_1[4]).intl;
            stringResult = intl.string(closure_1_0(closure_1_1[4]).t.JNQRU4);
          }
        }
        const intl2 = closure_1_0(closure_1_1[4]).intl;
        stringResult = intl2.string(closure_1_0(closure_1_1[4]).t.aWa1Pw);
      }
      return stringResult;
    }
    if (c5 === 2) {
      c5 = 3;
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
        c5 = 2;
        const tmp4 = c4;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            length = undefined;
            c3 = 1;
            v0(true);
            c4 = 2;
            c5 = 1;
            const obj5 = { value: obj3.verifyUserCode(length), done: false };
            obj3 = length(tmp[5]);
            return obj5;
          }
        } else {
          if (1 === tmp4) {
            c3 = 0;
            tmp = closure_2;
            let status;
            const tmp19 = closure_129_4;
            if (tmp != null) {
              status = tmp.status;
            }
            tmp19(verifyUserCodeStatusToErrorMessage(status));
            closure_129_3(false);
            let status1;
            if (tmp != null) {
              status1 = tmp.status;
            }
            if (401 === status1) {
              closure_129_2();
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            length = value;
            closure_129_3(false);
            const obj = { userCode: closure_129_0, clientId: length.body.client_id, scopes: length.body.scopes, twoWayLinkCode: length.body.two_way_link_code };
            closure_129_1(obj);
            c3 = 0;
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp35) {
        closure_2 = tmp35;
        if (0 === c3) {
          c5 = 3;
          throw tmp35;
        } else {
          c4 = 1;
        }
      }
    }
  }), items);
  const items1 = [arr, manualSubmit];
  const effect = react.useEffect(() => {
    if (length.length === OAuthConstants.USER_CODE_LENGTH) {
      manualSubmit();
    } else {
      closure_4(null);
    }
  }, items1);
  return { manualSubmit, error, submitting };
};
