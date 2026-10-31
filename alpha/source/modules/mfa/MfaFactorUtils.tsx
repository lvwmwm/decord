// Module ID: 16658
// Function ID: 16659
// Name: MfaFactorUtils
// Dependencies: [5, 16568, 502, 3, 6748, 2]
// Exports: isLastRemainingMfaFactor

// Module 16658 (MfaFactorUtils)
import LoggerDefault from "Logger" /* 3 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 6748 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import WebAuthnStore from "WebAuthnStore" /* 16568 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let c5, c6, closure_3;

let obj = function _isLastRemainingMfaFactor() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    let closure_0 = arg0;
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
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c4;
      try {
        let closure_2;
        let length;
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
            closure_2 = tmp;
            let closure_1 = tmp4;
            length = undefined;
            c4 = 1;
            c5 = 2;
            c6 = 1;
            const obj5 = { value: obj3.fetchWebAuthnCredentials(), done: false };
            obj3 = WebAuthnActionCreators;
            return obj5;
          }
        } else {
          let tmp18;
          if (1 === c5) {
            c4 = 0;
            closure_2 = closure_3;
            closure_130_5.warn(closure_2);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c4 = 0;
          }
          length = closure_130_3.getCredentials().length;
          if ("totp" === closure_0) {
            tmp18 = 0 === length;
          } else {
            tmp18 = 1 === length && !closure_130_4.hasTOTPEnabled();
          }
          c6 = 3;
          const obj6 = { value: tmp18, done: true };
          return obj6;
        }
      } catch (tmp26) {
        closure_3 = tmp26;
        if (0 === c4) {
          c6 = 3;
          throw tmp26;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
let closure_5 = new LoggerDefault("MfaFactorUtils");
const tmp2 = new LoggerDefault("MfaFactorUtils");
const result = size.fileFinishedImporting("modules/mfa/MfaFactorUtils.tsx");

export function isLastRemainingMfaFactor() {
  return obj(...arguments);
}
