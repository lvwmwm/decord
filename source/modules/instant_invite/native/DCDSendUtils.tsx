// Module ID: 4304
// Function ID: 37686
// Name: sendSMS
// Dependencies: [27, 477, 4305, 2]
// Exports: canOpenUrlScheme, canSendMail, canSendSMS, sendMail, sendSMS

// Module 4304 (sendSMS)
import get_ActivityIndicator from "get ActivityIndicator";

let closure_3;
let closure_4;
({ Linking: closure_3, NativeModules: closure_4 } = get_ActivityIndicator);
const result = require("enforcing").fileFinishedImporting("modules/instant_invite/native/DCDSendUtils.tsx");

export const sendSMS = function sendSMS(body, recipients) {
  if (obj.isAndroid()) {
    body = body.body;
    let str = "";
    if (null != body) {
      str = body;
    }
    recipients = body.recipients;
    if (null == recipients) {
      recipients = [];
    }
    importDefault(4305).sendSMS(str, recipients);
    const obj2 = importDefault(4305);
  } else {
    const DCDSend = closure_4.DCDSend;
    DCDSend.sendSMS(body, recipients);
  }
};
export const sendMail = function sendMail(subject, arg1, recipients) {
  if (obj.isAndroid()) {
    subject = subject.subject;
    let str = "";
    let str2 = "";
    if (null != subject) {
      str2 = subject;
    }
    const body = subject.body;
    if (null != body) {
      str = body;
    }
    recipients = subject.recipients;
    if (null == recipients) {
      recipients = [];
    }
    importDefault(4305).sendMail(str2, str, recipients);
    const obj2 = importDefault(4305);
  } else {
    const DCDSend = closure_4.DCDSend;
    DCDSend.sendMail(subject, arg1);
  }
};
export const canSendSMS = function canSendSMS() {
  if (obj.isAndroid()) {
    let resolved = Promise.resolve(importDefault(4305).canSendSMS());
    const obj2 = importDefault(4305);
  } else {
    const DCDSend = closure_4.DCDSend;
    resolved = DCDSend.canSendSMS();
  }
  return resolved;
};
export const canSendMail = function canSendMail() {
  if (obj.isAndroid()) {
    let resolved = Promise.resolve(importDefault(4305).canSendMail());
    const obj2 = importDefault(4305);
  } else {
    const DCDSend = closure_4.DCDSend;
    resolved = DCDSend.canSendMail();
  }
  return resolved;
};
export const canOpenUrlScheme = function canOpenUrlScheme(roblox) {
  const _require = roblox;
  if (obj.isAndroid()) {
    return Promise.resolve(importDefault(4305).canOpenUrlScheme(roblox));
  } else {
    const promise = new Promise((arg0) => {
      let closure_0 = arg0;
      const canOpenURLResult = outer1_3.canOpenURL("" + closure_0 + "://app");
      outer1_3.canOpenURL("" + closure_0 + "://app").then((arg0) => {
        callback(arg0);
      }).catch(() => {
        callback(false);
      });
    });
    return promise;
  }
  obj = _require(477);
};
