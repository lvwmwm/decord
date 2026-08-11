// Module ID: 14022
// Function ID: 14023
// Name: pressable
// Dependencies: [1922, 8084, 8523, 589, 4509, 8522, 2007, 8525, 10452, 1236, 2]

// Module 14022 (pressable)
import mergeGuildAvatar from "mergeGuildAvatar";
import { PHONE_VERIFICATION_MODAL_KEY as closure_4 } from "PHONE_VERIFICATION_MODAL_KEY";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.dEYpSt);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing: function useAccountPhoneSettingTrailing() {
    const items = [mergeGuildAvatar];
    return require(589) /* initialize */.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let phone;
      if (currentUser != null) {
        phone = currentUser.phone;
      }
      return phone;
    });
  },
  onPress: function onAccountPhoneSettingPress() {
    let obj = importDefault(4509);
    obj = { allowDeletePhone: true, reason: null };
    obj[1] = require(8525) /* ChangePhoneReason */.ChangePhoneReason.USER_SETTINGS_UPDATE;
    obj.pushLazy(require(2007) /* asyncRequireImpl */(8522, dependencyMap.paths), obj, closure_4);
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("PHONE_VERIFICATION_MODAL_KEY").fileFinishedImporting("modules/user_settings/defs/native/AccountPhoneSetting.tsx");

export default createToggle;
