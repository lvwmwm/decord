// Module ID: 13777
// Function ID: 105610
// Name: pressable
// Dependencies: [1850, 7733, 9209, 566, 4372, 9208, 1935, 9211, 10099, 1212, 2]

// Module 13777 (pressable)
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
    let obj = importDefault(4372);
    obj = { allowDeletePhone: true, reason: require(9211) /* ChangePhoneReason */.ChangePhoneReason.USER_SETTINGS_UPDATE };
    obj.pushLazy(require(1935) /* maybeLoadBundle */(9208, dependencyMap.paths), obj, closure_4);
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("PHONE_VERIFICATION_MODAL_KEY").fileFinishedImporting("modules/user_settings/defs/native/AccountPhoneSetting.tsx");

export default createToggle;
