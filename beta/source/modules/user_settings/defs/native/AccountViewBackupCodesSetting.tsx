// Module ID: 14329
// Function ID: 14330
// Name: AccountViewBackupCodesSetting
// Dependencies: [19, 7417, 1074, 14241, 1115, 1177, 14330, 11006, 14242, 14240, 2]

// Module 14329 (AccountViewBackupCodesSetting)
import intl5 from "intl" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import MFAActionCreatorsDefault from "MFAActionCreators" /* 14241 */;
import SettingsAccountUtils from "SettingsAccountUtils" /* 14242 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let UserSettingsSections;
let closure_4;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ NOOP_NULL: closure_4, UserSettingsSections } = Constants);
let obj = {
  useTitle() {
    const intl = intl5.intl;
    return intl.string(intl5.t.xZEzbu);
  },
  parent: MobileUserSettings.ACCOUNT,
  usePredicate: SettingsAccountUtils.useIs2FAEnabled,
  usePreNavigationAction: function useOnViewBackups() {
    let onSuccess;
    return react.useCallback((arg0) => {
      let intl;
      let intl2;
      let intl3;
      let closure_0 = arg0;
      let obj = {
        onSubmit(password) {
          let obj = MFAActionCreatorsDefault;
          const result = obj.sendMFABackupCodesVerificationKeyEmail(password);
          return result.then(() => {
            let intl;
            let intl2;
            let intl3;
            let intl4;
            let obj = {
              onSubmit(verificationKey) {
                const obj = closure_1_1(closure_1_2[3]);
                return obj.confirmViewBackupCodes(verificationKey, false);
              },
              title: intl.string(onSuccess(closure_2_2[4]).t["mGppp/"]),
              helpText: intl2.string(onSuccess(closure_2_2[4]).t["37S9yU"]),
              inputLabel: intl3.string(onSuccess(closure_2_2[4]).t.TjGb4Q),
              closeOnSuccess: true,
              onSuccess,
              secureTextEntry: false,
              actionText: intl4.string(onSuccess(closure_2_2[4]).t.geKm7t),
              confirmColor: onSuccess(closure_2_2[5]).ButtonColors.BRAND,
              useKeyboardAwareWrapper: true
            };
            intl = onSuccess(closure_2_2[4]).intl;
            intl2 = onSuccess(closure_2_2[4]).intl;
            intl3 = onSuccess(closure_2_2[4]).intl;
            intl4 = onSuccess(closure_2_2[4]).intl;
            closure_2_1(closure_2_2[6])(obj);
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
  },
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
