// Module ID: 14966
// Function ID: 14967
// Name: AccountViewBackupCodesSetting
// Dependencies: [19, 7974, 1085, 14960, 1126, 1200, 14967, 558, 576, 10629, 14878, 14969, 2]

// Module 14966 (AccountViewBackupCodesSetting)
import react2 from "react" /* 576 */;
import intl5 from "intl" /* 1126 */;
import native from "native" /* 1200 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import SettingsAccountUtils from "SettingsAccountUtils" /* 14878 */;
import MFAActionCreatorsDefault from "MFAActionCreators" /* 14960 */;
import showUserSettingsInputAlertDefault from "showUserSettingsInputAlert" /* 14967 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let UserSettingsSections;
let closure_4;
function onConfirmBackups(onSuccess) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let obj = {
    onSubmit(verificationKey) {
      const obj = MFAActionCreatorsDefault;
      return obj.confirmViewBackupCodes(verificationKey, false);
    },
    title: intl.string(intl5.t["mGppp/"]),
    helpText: intl2.string(intl5.t["37S9yU"]),
    inputLabel: intl3.string(intl5.t.TjGb4Q),
    closeOnSuccess: true,
    onSuccess,
    secureTextEntry: false,
    actionText: intl4.string(intl5.t.geKm7t),
    confirmColor: native.ButtonColors.BRAND,
    useKeyboardAwareWrapper: true
  };
  intl = intl5.intl;
  intl2 = intl5.intl;
  intl3 = intl5.intl;
  intl4 = intl5.intl;
  showUserSettingsInputAlertDefault(obj);
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ NOOP_NULL: closure_4, UserSettingsSections } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOnViewBackups() {
  let first;
  let onSuccess;
  let obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(arg0) {
      let intl;
      let intl2;
      let intl3;
      let closure_0 = arg0;
      let obj = {
        onSubmit(password) {
          const obj = MFAActionCreatorsDefault;
          const result = obj.sendMFABackupCodesVerificationKeyEmail(password);
          return result.then(() => {
            closure_2_5(closure_1_0);
          });
        },
        onSuccess,
        title: intl.string(closure_0(closure_2[4]).t.PsQmzU),
        inputLabel: intl2.string(closure_0(closure_2[4]).t["CIGa+7"]),
        closeOnSuccess: false,
        actionText: intl3.string(closure_0(closure_2[4]).t.PDTjLN),
        confirmColor: closure_0(closure_2[5]).ButtonColors.BRAND,
        useKeyboardAwareWrapper: true
      };
      intl = closure_0(closure_2[4]).intl;
      intl2 = closure_0(closure_2[4]).intl;
      intl3 = closure_0(closure_2[4]).intl;
      closure_1(closure_2[6])(obj);
      return false;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function useOnViewBackups() {
  let onSuccess;
  return react.useCallback((arg0) => {
    let intl;
    let intl2;
    let intl3;
    let closure_0 = arg0;
    let obj = {
      onSubmit(password) {
        const obj = MFAActionCreatorsDefault;
        const result = obj.sendMFABackupCodesVerificationKeyEmail(password);
        return result.then(() => {
          closure_2_5(closure_1_0);
        });
      },
      onSuccess,
      title: intl.string(closure_0(closure_2[4]).t.PsQmzU),
      inputLabel: intl2.string(closure_0(closure_2[4]).t["CIGa+7"]),
      closeOnSuccess: false,
      actionText: intl3.string(closure_0(closure_2[4]).t.PDTjLN),
      confirmColor: closure_0(closure_2[5]).ButtonColors.BRAND,
      useKeyboardAwareWrapper: true
    };
    intl = closure_0(closure_2[4]).intl;
    intl2 = closure_0(closure_2[4]).intl;
    intl3 = closure_0(closure_2[4]).intl;
    closure_1(closure_2[6])(obj);
    return false;
  }, []);
});
let obj = {
  useTitle() {
    const intl = intl5.intl;
    return intl.string(intl5.t.xZEzbu);
  },
  parent: MobileUserSettings.ACCOUNT,
  usePredicate: SettingsAccountUtils.useIs2FAEnabled,
  usePreNavigationAction: tmp3,
  screen: {
    route: UserSettingsSections.ACCOUNT_CONFIRM_VIEW_BACKUP_CODES,
    getComponent() {
      return require("UserSettingsAccountBackupCodes").default;
    }
  }
};
const route = SettingBuilders.createRoute(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/AccountViewBackupCodesSetting.tsx");

export default route;
