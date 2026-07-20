// Module ID: 4296
// Function ID: 37589
// Name: sendSMS
// Dependencies: []
// Exports: canOpenUrlScheme, canSendMail, canSendSMS, sendMail, sendSMS

// Module 4296 (sendSMS)
const _module = require(dependencyMap[0]);
({ Linking: closure_3, NativeModules: closure_4 } = _module);
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/instant_invite/native/DCDSendUtils.tsx");

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
    importDefault(dependencyMap[2]).sendSMS(str, recipients);
    const obj2 = importDefault(dependencyMap[2]);
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
    importDefault(dependencyMap[2]).sendMail(str2, str, recipients);
    const obj2 = importDefault(dependencyMap[2]);
  } else {
    const DCDSend = closure_4.DCDSend;
    DCDSend.sendMail(subject, arg1);
  }
};
export const canSendSMS = function canSendSMS() {
  if (obj.isAndroid()) {
    let resolved = Promise.resolve(importDefault(dependencyMap[2]).canSendSMS());
    const obj2 = importDefault(dependencyMap[2]);
  } else {
    const DCDSend = closure_4.DCDSend;
    resolved = DCDSend.canSendSMS();
  }
  return resolved;
};
export const canSendMail = function canSendMail() {
  if (obj.isAndroid()) {
    let resolved = Promise.resolve(importDefault(dependencyMap[2]).canSendMail());
    const obj2 = importDefault(dependencyMap[2]);
  } else {
    const DCDSend = closure_4.DCDSend;
    resolved = DCDSend.canSendMail();
  }
  return resolved;
};
export const canOpenUrlScheme = function canOpenUrlScheme(roblox) {
  const require = roblox;
  if (obj.isAndroid()) {
    return Promise.resolve(importDefault(dependencyMap[2]).canOpenUrlScheme(roblox));
  } else {
    const promise = new Promise((arg0) => {
      const canOpenURLResult = closure_3.canOpenURL("" + arg0 + "://app");
      closure_3.canOpenURL("" + arg0 + "://app").then((arg0) => {
        arg0(arg0);
      }).catch(() => {
        arg0(false);
      });
    });
    return promise;
  }
  const obj = require(dependencyMap[1]);
};
