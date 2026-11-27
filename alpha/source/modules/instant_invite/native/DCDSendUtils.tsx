// Module ID: 8414
// Function ID: 8415
// Name: DCDSendUtils
// Dependencies: [5, 17, 8415, 1379, 2]
// Exports: canOpenUrlScheme, canSendMail, canSendSMS, sendMail, sendSMS

// Module 8414 (DCDSendUtils)
import react_native from "react-native" /* 17 */;
import react_nativeDefault from "react-native" /* 8415 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c5, c8;

let obj = function _sendSMS() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    let closure_1 = value;
    if (c7 === 2) {
      c7 = 3;
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
      let c6;
      try {
        c7 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_4 = tmp3;
            closure_0 = closure_1;
            closure_1 = undefined;
            const body = closure_0.body;
            let c2 = body;
            const sendSMS = react_nativeDefault.sendSMS;
            const tmp20 = closure_0;
            const tmp23 = dependencyMap;
            if (body == null) {
              c2 = "";
            }
            const recipients = tmp20.recipients;
            let closure_3 = recipients;
            const tmp10 = c2;
            if (recipients == null) {
              closure_3 = [];
            }
            const sendSMSResult = sendSMS(tmp10, closure_3);
            const obj3 = require("PlatformUtils");
            if (obj3.isAndroid()) {
              c6 = 1;
              c5 = 3;
              c7 = 1;
              const obj5 = { value: sendSMSResult, done: false };
              return obj5;
            } else {
              c5 = 2;
              c7 = 1;
              const obj6 = { value: sendSMSResult, done: false };
              return obj6;
            }
          }
        } else {
          if (1 === c5) {
            c6 = 0;
          } else if (2 === c5) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_1 = value;
              closure_0(closure_1.completed, closure_1.canceled, closure_1.error);
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c6 = 0;
          }
          c7 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp14) {
        if (0 === c6) {
          c7 = 3;
          throw tmp14;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _sendMail() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    let closure_1 = value;
    if (c8 === 2) {
      c8 = 3;
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
      let c7;
      try {
        c8 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_5 = tmp3;
            closure_0 = closure_1;
            closure_1 = undefined;
            const subject = closure_0.subject;
            let c2 = subject;
            const sendMail = react_nativeDefault.sendMail;
            const tmp25 = dependencyMap;
            if (subject == null) {
              c2 = "";
            }
            const body = tmp22.body;
            let c3 = body;
            const tmp11 = c2;
            if (body == null) {
              c3 = "";
            }
            const recipients = tmp22.recipients;
            let closure_4 = recipients;
            const tmp12 = c3;
            if (recipients == null) {
              closure_4 = [];
            }
            const sendMailResult = sendMail(tmp11, tmp12, closure_4);
            const obj3 = require("PlatformUtils");
            if (obj3.isAndroid()) {
              c7 = 1;
              c6 = 3;
              c8 = 1;
              const obj5 = { value: sendMailResult, done: false };
              return obj5;
            } else {
              c6 = 2;
              c8 = 1;
              const obj6 = { value: sendMailResult, done: false };
              return obj6;
            }
          }
        } else {
          if (1 === c6) {
            c7 = 0;
          } else if (2 === c6) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_1 = value;
              closure_0(closure_1.completed, closure_1.canceled, closure_1.saved, closure_1.error);
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c8 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c7 = 0;
          }
          c8 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp16) {
        if (0 === c7) {
          c8 = 3;
          throw tmp16;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const Linking = react_native.Linking;
const result = size.fileFinishedImporting("modules/instant_invite/native/DCDSendUtils.tsx");

export function sendSMS() {
  return obj(...arguments);
}
export function sendMail() {
  return obj(...arguments);
}
export function canSendSMS() {
  obj = react_nativeDefault;
  return obj.canSendSMS();
}
export function canSendMail() {
  obj = react_nativeDefault;
  return obj.canSendMail();
}
export function canOpenUrlScheme(roblox) {
  _require = roblox;
  obj = require("PlatformUtils");
  if (obj.isAndroid()) {
    try {
      const obj2 = react_nativeDefault;
      return resolve(obj2.canOpenUrlScheme(roblox));
    } catch (err) {
      return Promise.resolve(false);
    }
  } else {
    const self = this;
    const self2 = this;
    const promise = new Promise((arg0) => {
      let closure_0 = arg0;
      const canOpenURLResult = Linking.canOpenURL("" + closure_0 + "://app");
      const nextPromise = canOpenURLResult.then((result) => {
        closure_0(result);
      });
      nextPromise.catch(() => {
        closure_0(false);
      });
    });
    return promise;
  }
}
