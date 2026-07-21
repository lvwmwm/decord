// Module ID: 9144
// Function ID: 71685
// Name: openMemberVerificationCancelPendingAlert
// Dependencies: []
// Exports: openMemberVerificationIncompleteAlert, openMemberVerificationPendingAlert, openMemberVerificationRejectedAlert, openMemberVerificationSuccessAlert, openMemberVerificationUpdateAlert

// Module 9144 (openMemberVerificationCancelPendingAlert)
function openMemberVerificationCancelPendingAlert(arg0) {
  ({ guildId: closure_0, confirmText: closure_1, subtitleText: closure_2, onClose: closure_3 } = arg0);
  let obj = importAll(dependencyMap[2]);
  const result = obj.dismissGlobalKeyboard();
  obj = {
    importer() {
      return callback(paths[5])(paths[7], paths.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["guildId"] = closure_0;
          obj["confirmText"] = closure_1;
          obj["subtitleText"] = closure_2;
          obj["onClose"] = callback2(closure_3);
          return callback(closure_0, obj);
        };
      });
    }
  };
  importDefault(dependencyMap[3]).openLazy(obj);
}
function closeMemberVerificationAlert(onClose) {
  const arg1 = onClose;
  return () => {
    callback(closure_3[3]).close();
    if (null != arg0) {
      arg0();
    }
  };
}
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/guild_member_verification/native/MemberVerificationAlertActionCreators.tsx");

export const openMemberVerificationSuccessAlert = function openMemberVerificationSuccessAlert(guildId, arg1) {
  arg1 = guildId;
  const importDefault = arg1;
  let obj = importAll(dependencyMap[2]);
  const result = obj.dismissGlobalKeyboard();
  obj = {
    importer() {
      return arg0(paths[5])(paths[4], paths.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["guildId"] = closure_0;
          obj["handleConfirmAndAck"] = closure_1;
          return callback(closure_0, obj);
        };
      });
    }
  };
  importDefault(dependencyMap[3]).openLazy(obj);
};
export const openMemberVerificationPendingAlert = function openMemberVerificationPendingAlert(guildId) {
  const arg1 = guildId;
  const importDefault = arg1;
  let obj = importAll(dependencyMap[2]);
  const result = obj.dismissGlobalKeyboard();
  obj = {
    importer() {
      return arg0(paths[5])(paths[6], paths.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["guildId"] = closure_0;
          obj["onClose"] = callback2(closure_1);
          return callback(closure_0, obj);
        };
      });
    }
  };
  importDefault(dependencyMap[3]).openLazy(obj);
};
export { openMemberVerificationCancelPendingAlert };
export const openMemberVerificationRejectedAlert = function openMemberVerificationRejectedAlert(canWithdraw) {
  let onClose;
  ({ guildId: closure_0, onClose } = canWithdraw);
  const importDefault = onClose;
  let closure_3;
  const tmp = closeMemberVerificationAlert(onClose);
  const importAll = tmp;
  if (canWithdraw.canWithdraw) {
    let obj = {};
    const intl2 = arg1(closure_3[9]).intl;
    obj.text = intl2.string(arg1(closure_3[9]).t.g9tK0o);
    obj.variant = "destructive";
    obj.onPress = function onPress() {
      callback2({ guildId: closure_0 });
    };
  } else {
    obj = {};
    const intl = arg1(closure_3[9]).intl;
    obj.text = intl.string(arg1(closure_3[9]).t.BddRzS);
    obj.onPress = tmp;
  }
  closure_3 = jsx(arg1(closure_3[8]).Button, obj);
  const result = importAll(closure_3[2]).dismissGlobalKeyboard();
  const obj3 = importAll(closure_3[2]);
  const tmp2 = jsx;
  obj = {
    importer() {
      return callback(paths[5])(paths[10], paths.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["guildId"] = closure_0;
          obj["onClose"] = callback2(closure_1);
          obj["secondaryButton"] = closure_3;
          return callback(closure_0, obj);
        };
      });
    }
  };
  importDefault(closure_3[3]).openLazy(obj);
};
export const openMemberVerificationUpdateAlert = function openMemberVerificationUpdateAlert() {
  let obj = importAll(dependencyMap[2]);
  const result = obj.dismissGlobalKeyboard();
  obj = {
    importer() {
      return callback(paths[5])(paths[11], paths.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return callback(closure_0, {});
        };
      });
    }
  };
  importDefault(dependencyMap[3]).openLazy(obj);
};
export { closeMemberVerificationAlert };
export const openMemberVerificationIncompleteAlert = function openMemberVerificationIncompleteAlert(closure_0) {
  const arg1 = closure_0;
  const importDefault = arg1;
  let obj = importAll(dependencyMap[2]);
  const result = obj.dismissGlobalKeyboard();
  obj = {
    isDismissable: true,
    importer() {
      return arg0(paths[5])(paths[12], paths.paths).then((arg0) => {
        let closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["guildId"] = closure_0;
          obj["onClose"] = callback2(closure_1);
          return callback(closure_0, obj);
        };
      });
    }
  };
  importDefault(dependencyMap[3]).openLazy(obj);
};
