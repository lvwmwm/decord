// Module ID: 15070
// Function ID: 15071
// Name: AccountViewBackupCodesSetting
// Dependencies: [19, 8270, 1078, 14982, 1119, 1181, 15071, 558, 568, 11630, 14983, 14981, 2]

// Module 15070 (AccountViewBackupCodesSetting)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import native from "native" /* 1181 */;
import MFAActionCreatorsDefault from "MFAActionCreators" /* 14982 */;
import showUserSettingsInputAlertDefault from "showUserSettingsInputAlert" /* 15071 */;
import noop from "module_19" /* 19 */;

require = fn;
function onConfirmBackups(onSuccess) {
  const obj = {
    onSubmit(verificationKey) {
      return MFAActionCreatorsDefault.confirmViewBackupCodes(verificationKey, false);
    },
    title: null,
    helpText: null,
    inputLabel: null,
    closeOnSuccess: true,
    onSuccess: null,
    secureTextEntry: false,
    actionText: null,
    confirmColor: null,
    useKeyboardAwareWrapper: true
  };
  const intl = util.intl;
  obj.title = intl.string(util.t["mGppp/"]);
  const intl2 = util.intl;
  obj.helpText = intl2.string(util.t["37S9yU"]);
  const intl3 = util.intl;
  obj.inputLabel = intl3.string(util.t.TjGb4Q);
  obj.onSuccess = onSuccess;
  const intl4 = util.intl;
  obj.actionText = intl4.string(util.t.geKm7t);
  obj.confirmColor = native.ButtonColors.BRAND;
  showUserSettingsInputAlertDefault(obj);
}
const Constants = fn(1078);
({ NOOP_NULL: closure_4, UserSettingsSections } = Constants);
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11630);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(arg0) {
      closure_0 = arg0;
      const obj = {
        onSubmit(password) {
          const result = MFAActionCreatorsDefault.sendMFABackupCodesVerificationKeyEmail(password);
          return result.then(() => {
            closure_2_5(closure_1_0);
          });
        },
        onSuccess,
        title: null,
        inputLabel: null,
        closeOnSuccess: false,
        actionText: null,
        confirmColor: null,
        useKeyboardAwareWrapper: true
      };
      const intl = closure_0(1119).intl;
      obj.title = intl.string(closure_0(1119).t.PsQmzU);
      const intl2 = closure_0(1119).intl;
      obj.inputLabel = intl2.string(closure_0(1119).t["CIGa+7"]);
      const intl3 = closure_0(1119).intl;
      obj.actionText = intl3.string(closure_0(1119).t.PDTjLN);
      obj.confirmColor = closure_0(1181).ButtonColors.BRAND;
      closure_1(15071)(obj);
      return false;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => noop.useCallback((arg0) => {
  closure_0 = arg0;
  const obj = {
    onSubmit(password) {
      const result = MFAActionCreatorsDefault.sendMFABackupCodesVerificationKeyEmail(password);
      return result.then(() => {
        closure_2_5(closure_1_0);
      });
    },
    onSuccess,
    title: null,
    inputLabel: null,
    closeOnSuccess: false,
    actionText: null,
    confirmColor: null,
    useKeyboardAwareWrapper: true
  };
  const intl = closure_0(1119).intl;
  obj.title = intl.string(closure_0(1119).t.PsQmzU);
  const intl2 = closure_0(1119).intl;
  obj.inputLabel = intl2.string(closure_0(1119).t["CIGa+7"]);
  const intl3 = closure_0(1119).intl;
  obj.actionText = intl3.string(closure_0(1119).t.PDTjLN);
  obj.confirmColor = closure_0(1181).ButtonColors.BRAND;
  closure_1(15071)(obj);
  return false;
}, []));
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.xZEzbu);
  },
  parent: fn(8270).MobileUserSettings.ACCOUNT,
  usePredicate: fn(14983).useIs2FAEnabled,
  usePreNavigationAction: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(1);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function t(arg0) {
        closure_0 = arg0;
        const obj = {
          onSubmit(password) {
            const result = MFAActionCreatorsDefault.sendMFABackupCodesVerificationKeyEmail(password);
            return result.then(() => {
              closure_2_5(closure_1_0);
            });
          },
          onSuccess,
          title: null,
          inputLabel: null,
          closeOnSuccess: false,
          actionText: null,
          confirmColor: null,
          useKeyboardAwareWrapper: true
        };
        const intl = closure_0(1119).intl;
        obj.title = intl.string(closure_0(1119).t.PsQmzU);
        const intl2 = closure_0(1119).intl;
        obj.inputLabel = intl2.string(closure_0(1119).t["CIGa+7"]);
        const intl3 = closure_0(1119).intl;
        obj.actionText = intl3.string(closure_0(1119).t.PDTjLN);
        obj.confirmColor = closure_0(1181).ButtonColors.BRAND;
        closure_1(15071)(obj);
        return false;
      };
      cResult[0] = fn;
      let first = fn;
    } else {
      first = cResult[0];
    }
    return first;
  }) : (() => noop.useCallback((arg0) => {
    closure_0 = arg0;
    const obj = {
      onSubmit(password) {
        const result = MFAActionCreatorsDefault.sendMFABackupCodesVerificationKeyEmail(password);
        return result.then(() => {
          closure_2_5(closure_1_0);
        });
      },
      onSuccess,
      title: null,
      inputLabel: null,
      closeOnSuccess: false,
      actionText: null,
      confirmColor: null,
      useKeyboardAwareWrapper: true
    };
    const intl = closure_0(1119).intl;
    obj.title = intl.string(closure_0(1119).t.PsQmzU);
    const intl2 = closure_0(1119).intl;
    obj.inputLabel = intl2.string(closure_0(1119).t["CIGa+7"]);
    const intl3 = closure_0(1119).intl;
    obj.actionText = intl3.string(closure_0(1119).t.PDTjLN);
    obj.confirmColor = closure_0(1181).ButtonColors.BRAND;
    closure_1(15071)(obj);
    return false;
  }, [])),
  screen: {
    route: UserSettingsSections.ACCOUNT_CONFIRM_VIEW_BACKUP_CODES,
    getComponent() {
      return require("UserSettingsAccountBackupCodes").default;
    }
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountViewBackupCodesSetting.tsx");

export default route;
