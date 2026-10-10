// Module ID: 15961
// Function ID: 15962
// Name: MFA
// Dependencies: [5, 1295, 2]
// Exports: trySubmit

// Module 15961 (MFA)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_3, data, ticket;

function finishMFACheck() {
  return obj(...arguments);
}
let obj = function _finishMFACheck() {
  obj = _asyncToGenerator(async (ticket, mfa_type) => {
    let closure_4;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    const iter = (async function(arg0, value) {
      let c0;
      let c1;
      let c2;
      let obj5;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          let num7;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              ticket = undefined;
              mfa_type = undefined;
              data = undefined;
              ({ ticket: c0, mfaType: c1, data: c2 } = closure_0);
              num7 = closure_1;
              if (closure_1 === undefined) {
                num7 = 2;
              }
              c6 = 1;
              c7 = 1;
              return { value: "Set", done: true };
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              c5 = 1;
              const HTTP = closure_131_0(closure_131_1[1]).HTTP;
              const request = { url: "/mfa/finish", body: obj5, retries: num7, rejectWithError: false };
              c6 = 3;
              c7 = 1;
              obj5 = { ticket, mfa_type, data };
              const obj6 = { value: HTTP.post(request), done: false };
              return obj6;
            }
          } else if (2 === c6) {
            c5 = 0;
            const body = tmp14.body;
            let self;
            if (body != null) {
              self = body.message;
            }
            if (self) {
              const _Error = Error;
              self = this;
              const self2 = this;
              const error = new Error(tmp14.body.message);
              throw error;
            } else {
              self = tmp14;
              throw tmp14;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            c5 = 0;
            c7 = 3;
            return { value: value.body, done: true };
          }
        } catch (tmp14) {
          if (0 === c5) {
            c7 = 3;
            throw tmp14;
          } else {
            c6 = 2;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _trySubmit() {
  obj = _asyncToGenerator(async function(arg0, arg1) {
    let c3;
    let c4;
    let closure_2;
    let closure_1 = arg1;
    let closure_0 = closure_1;
    await finishMFACheck(closure_0);
    const token = arg1.token;
    const self = this;
    const self2 = this;
    const promise = new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      obj = { "X-Discord-MFA-Authorization": closure_1_1 };
      closure_1_0(obj, (body) => {
        body = body.body;
        let code;
        if (body != null) {
          code = body.code;
        }
        if (60008 !== code) {
          let flag;
          const body2 = body.body;
          let code1;
          if (body2 != null) {
            code1 = body2.code;
          }
          if (60003 !== code1) {
            closure_0();
            flag = false;
          }
          return flag;
        }
        const error = new Error(body.body.message);
        closure_1(error);
        flag = true;
      });
    });
    return promise;
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("../discord_common/js/shared/MFA.tsx");

export const BACKUP_CODE_MIN_LENGTH = 8;
export const BACKUP_CODE_MAX_LENGTH = 11;
export const TOTP_CODE_LENGTH = 6;
export const SMS_CODE_LENGTH = 6;
export { finishMFACheck };
export const trySubmit = function trySubmit() {
  return obj(...arguments);
};
