// Module ID: 13752
// Function ID: 105470
// Name: useAccountSMSBackupSettingDescription
// Dependencies: [1849, 7751, 653, 9273, 566, 13748, 1212, 13698, 13750, 4471, 4337, 9272, 1934, 9275, 22, 10127, 13699, 2]

// Module 13752 (useAccountSMSBackupSettingDescription)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { UserFlags } from "ME";
import { PHONE_VERIFICATION_MODAL_KEY as closure_5 } from "PHONE_VERIFICATION_MODAL_KEY";
import apply from "apply";
import createToggle from "createToggle";

const require = arg1;
function useAccountSMSBackupSettingDescription() {
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_3.getCurrentUser());
  let sMSBackupDisabledMessage = null;
  if (null != stateFromStores) {
    sMSBackupDisabledMessage = require(13748) /* getSMSBackupDisabledMessage */.getSMSBackupDisabledMessage(stateFromStores);
    const obj2 = require(13748) /* getSMSBackupDisabledMessage */;
  }
  return sMSBackupDisabledMessage;
}
let closure_6 = apply.debounce(function toggleSMS(user) {
  user = user.user;
  if (user.mfaSMSEnabled) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const formatted = intl2.string(require(1212) /* getSystemLocale */.t["CIGa+7"]).toUpperCase();
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const str2 = intl2.string(require(1212) /* getSystemLocale */.t["CIGa+7"]);
    let obj = {};
    const formatted1 = intl3.string(require(1212) /* getSystemLocale */.t.wlfmlR).toUpperCase();
    obj.onSubmit = importDefault(13698).disableSMS;
    obj.title = formatted1;
    obj.placeholder = formatted;
    obj.closeOnSuccess = true;
    importDefault(13750)(obj);
    const str3 = intl3.string(require(1212) /* getSystemLocale */.t.wlfmlR);
  } else {
    if (null != user) {
      if (null != user.phone) {
        const intl = require(1212) /* getSystemLocale */.intl;
        const formatted2 = intl.string(require(1212) /* getSystemLocale */.t.DZQe23).toUpperCase();
        const str = intl.string(require(1212) /* getSystemLocale */.t.DZQe23);
        obj = { title: formatted2 };
        const obj3 = importDefault(4471);
        importDefault(4471).confirm(obj).then((arg0) => {
          if (arg0) {
            outer1_1(outer1_2[7]).enableSMS();
            const obj = outer1_1(outer1_2[7]);
          }
        });
        const confirmResult = importDefault(4471).confirm(obj);
      }
    }
    obj = importDefault(4337);
    const obj1 = { reason: require(9275) /* ChangePhoneReason */.ChangePhoneReason.USER_SETTINGS_UPDATE };
    obj.pushLazy(require(1934) /* maybeLoadBundle */(9272, dependencyMap.paths), obj1, closure_5);
    const tmp5 = require(1934) /* maybeLoadBundle */(9272, dependencyMap.paths);
  }
}, 200);
apply = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.uHAJ5v);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useIsDisabled: function useAccountSMSBackupSettingIsDisabled() {
    return null != useAccountSMSBackupSettingDescription();
  },
  useValue: function useAccountSMSBackupSettingToggleValue() {
    let hasFlagResult;
    const items = [_isNativeReflectConstruct];
    const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_3.getCurrentUser());
    if (null != stateFromStores) {
      hasFlagResult = stateFromStores.hasFlag(UserFlags.MFA_SMS);
    }
    return null != hasFlagResult && hasFlagResult;
  },
  onValueChange: function onAccountSMSBackupSettingTogglePress(arg0) {
    currentUser = currentUser.getCurrentUser();
    if (null != currentUser) {
      const obj = { mfaSMSEnabled: !arg0, user: currentUser };
      callback(obj);
    }
  },
  useDescription: useAccountSMSBackupSettingDescription,
  usePredicate: require("useIs2FAEnabled").useIsTOTPEnabled
};
apply = createToggle.createToggle(apply);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/AccountSmsBackupSetting.tsx");

export default apply;
