// Module ID: 13721
// Function ID: 105305
// Name: pressable
// Dependencies: [1849, 7751, 9273, 566, 4337, 9272, 1934, 9275, 10127, 1212, 2]

// Module 13721 (pressable)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { PHONE_VERIFICATION_MODAL_KEY as closure_4 } from "PHONE_VERIFICATION_MODAL_KEY";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.dEYpSt);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing: function useAccountPhoneSettingTrailing() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => {
      const currentUser = outer1_3.getCurrentUser();
      let phone;
      if (null != currentUser) {
        phone = currentUser.phone;
      }
      return phone;
    });
  },
  onPress: function onAccountPhoneSettingPress() {
    let obj = importDefault(4337);
    obj = { allowDeletePhone: true, reason: require(9275) /* ChangePhoneReason */.ChangePhoneReason.USER_SETTINGS_UPDATE };
    obj.pushLazy(require(1934) /* maybeLoadBundle */(9272, dependencyMap.paths), obj, closure_4);
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("PHONE_VERIFICATION_MODAL_KEY").fileFinishedImporting("modules/user_settings/defs/native/AccountPhoneSetting.tsx");

export default createToggle;
