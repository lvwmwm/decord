// Module ID: 13698
// Function ID: 105119
// Name: route
// Dependencies: [31, 7662, 653, 13647, 1212, 1273, 13699, 10095, 13648, 13646, 2]

// Module 13698 (route)
import result from "result";
import ME from "ME";
import createToggle from "createToggle";

const require = arg1;
const NOOP_NULL = ME.NOOP_NULL;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.xZEzbu);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  usePredicate: require("useIs2FAEnabled").useIs2FAEnabled,
  usePreNavigationAction: function useOnViewBackups() {
    return React.useCallback((arg0) => {
      let closure_0 = arg0;
      let obj = {
        onSubmit(password) {
          const result = outer2_1(outer2_2[3]).sendMFABackupCodesVerificationKeyEmail(password);
          return result.then(() => {
            (function onConfirmBackups(outer1_0) {
              const obj = { onSubmit() { ... } };
              const intl = outer4_0(outer4_2[4]).intl;
              obj.title = intl.string(outer4_0(outer4_2[4]).t["mGppp/"]);
              const intl2 = outer4_0(outer4_2[4]).intl;
              obj.helpText = intl2.string(outer4_0(outer4_2[4]).t["37S9yU"]);
              const intl3 = outer4_0(outer4_2[4]).intl;
              obj.inputLabel = intl3.string(outer4_0(outer4_2[4]).t.TjGb4Q);
              obj.closeOnSuccess = true;
              obj.onSuccess = outer1_0;
              obj.secureTextEntry = false;
              const intl4 = outer4_0(outer4_2[4]).intl;
              obj.actionText = intl4.string(outer4_0(outer4_2[4]).t.geKm7t);
              obj.confirmColor = outer4_0(outer4_2[5]).ButtonColors.BRAND;
              obj.useKeyboardAwareWrapper = true;
              outer4_1(outer4_2[6])(obj);
            })(outer1_0);
          });
        },
        onSuccess: outer1_4
      };
      let intl = outer1_0(outer1_2[4]).intl;
      obj.title = intl.string(outer1_0(outer1_2[4]).t.PsQmzU);
      let intl2 = outer1_0(outer1_2[4]).intl;
      obj.inputLabel = intl2.string(outer1_0(outer1_2[4]).t["CIGa+7"]);
      obj.closeOnSuccess = false;
      let intl3 = outer1_0(outer1_2[4]).intl;
      obj.actionText = intl3.string(outer1_0(outer1_2[4]).t.PDTjLN);
      obj.confirmColor = outer1_0(outer1_2[5]).ButtonColors.BRAND;
      obj.useKeyboardAwareWrapper = true;
      outer1_1(outer1_2[6])(obj);
      return false;
    }, []);
  },
  screen: createToggle
};
createToggle = {
  route: ME.UserSettingsSections.ACCOUNT_CONFIRM_VIEW_BACKUP_CODES,
  getComponent() {
    return require(13646) /* CodeRow */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
let result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AccountViewBackupCodesSetting.tsx");

export default createToggle;
