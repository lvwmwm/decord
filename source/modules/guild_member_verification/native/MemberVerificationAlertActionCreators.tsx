// Module ID: 9188
// Function ID: 71948
// Name: openMemberVerificationCancelPendingAlert
// Dependencies: [31, 33, 1820, 4471, 9189, 1934, 9191, 9195, 4543, 1212, 9197, 9200, 9202, 2]
// Exports: openMemberVerificationIncompleteAlert, openMemberVerificationPendingAlert, openMemberVerificationRejectedAlert, openMemberVerificationSuccessAlert, openMemberVerificationUpdateAlert

// Module 9188 (openMemberVerificationCancelPendingAlert)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
function openMemberVerificationCancelPendingAlert(arg0) {
  let dependencyMap;
  let importAll;
  let importDefault;
  let require;
  ({ guildId: require, confirmText: importDefault, subtitleText: importAll, onClose: dependencyMap } = arg0);
  let obj = importAll(1820);
  const result = obj.dismissGlobalKeyboard();
  obj = {
    importer() {
      return outer1_0(outer1_3[5])(outer1_3[7], outer1_3.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["guildId"] = outer2_0;
          obj["confirmText"] = outer2_1;
          obj["subtitleText"] = outer2_2;
          obj["onClose"] = outer3_6(outer2_3);
          return outer3_4(closure_0, obj);
        };
      });
    }
  };
  importDefault(4471).openLazy(obj);
}
function closeMemberVerificationAlert(onClose) {
  let closure_0 = onClose;
  return () => {
    outer1_1(outer1_3[3]).close();
    if (null != onClose) {
      onClose();
    }
  };
}
let result = require("dismissGlobalKeyboard").fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationAlertActionCreators.tsx");

export const openMemberVerificationSuccessAlert = function openMemberVerificationSuccessAlert(guildId, arg1) {
  let closure_0 = guildId;
  const importDefault = arg1;
  let obj = importAll(1820);
  const result = obj.dismissGlobalKeyboard();
  obj = {
    importer() {
      return guildId(outer1_3[5])(outer1_3[4], outer1_3.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["guildId"] = outer2_0;
          obj["handleConfirmAndAck"] = outer2_1;
          return outer3_4(closure_0, obj);
        };
      });
    }
  };
  importDefault(4471).openLazy(obj);
};
export const openMemberVerificationPendingAlert = function openMemberVerificationPendingAlert(guildId) {
  let closure_0 = guildId;
  const importDefault = arg1;
  let obj = importAll(1820);
  const result = obj.dismissGlobalKeyboard();
  obj = {
    importer() {
      return guildId(outer1_3[5])(outer1_3[6], outer1_3.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["guildId"] = outer2_0;
          obj["onClose"] = outer3_6(outer2_1);
          return outer3_4(closure_0, obj);
        };
      });
    }
  };
  importDefault(4471).openLazy(obj);
};
export { openMemberVerificationCancelPendingAlert };
export const openMemberVerificationRejectedAlert = function openMemberVerificationRejectedAlert(canWithdraw) {
  let onClose;
  let require;
  ({ guildId: require, onClose } = canWithdraw);
  let dependencyMap;
  const tmp = closeMemberVerificationAlert(onClose);
  const importAll = tmp;
  if (canWithdraw.canWithdraw) {
    let obj = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.text = intl2.string(require(1212) /* getSystemLocale */.t.g9tK0o);
    obj.variant = "destructive";
    obj.onPress = function onPress() {
      outer1_5({ guildId: closure_0 });
    };
  } else {
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.text = intl.string(require(1212) /* getSystemLocale */.t.BddRzS);
    obj.onPress = tmp;
  }
  dependencyMap = jsx(require(4543) /* Button */.Button, obj);
  const result = importAll(1820).dismissGlobalKeyboard();
  const obj3 = importAll(1820);
  const tmp2 = jsx;
  obj = {
    importer() {
      return outer1_0(paths[5])(paths[10], paths.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["guildId"] = outer2_0;
          obj["onClose"] = outer3_6(outer2_1);
          obj["secondaryButton"] = outer2_3;
          return outer3_4(closure_0, obj);
        };
      });
    }
  };
  onClose(4471).openLazy(obj);
};
export const openMemberVerificationUpdateAlert = function openMemberVerificationUpdateAlert() {
  let obj = importAll(1820);
  const result = obj.dismissGlobalKeyboard();
  obj = {
    importer() {
      return outer1_0(outer1_3[5])(outer1_3[11], outer1_3.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return outer3_4(closure_0, {});
        };
      });
    }
  };
  importDefault(4471).openLazy(obj);
};
export { closeMemberVerificationAlert };
export const openMemberVerificationIncompleteAlert = function openMemberVerificationIncompleteAlert(guildId) {
  let closure_0 = guildId;
  const importDefault = arg1;
  let obj = importAll(1820);
  const result = obj.dismissGlobalKeyboard();
  obj = {
    isDismissable: true,
    importer() {
      return guildId(outer1_3[5])(outer1_3[12], outer1_3.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["guildId"] = outer2_0;
          obj["onClose"] = outer3_6(outer2_1);
          return outer3_4(closure_0, obj);
        };
      });
    }
  };
  importDefault(4471).openLazy(obj);
};
