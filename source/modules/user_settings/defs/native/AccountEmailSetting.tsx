// Module ID: 13941
// Function ID: 13942
// Name: pressable
// Dependencies: [1903, 8022, 589, 8391, 10380, 1236, 2]

// Module 13941 (pressable)
import mergeGuildAvatar from "mergeGuildAvatar";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["w/qqKK"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing: function useAccountEmailSettingTrailing() {
    const items = [mergeGuildAvatar];
    return require(589) /* initialize */.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let email;
      if (currentUser != null) {
        email = currentUser.email;
      }
      return email;
    });
  },
  onPress: function onAccountEmailSettingPress() {
    importDefault(8391).open(true);
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/AccountEmailSetting.tsx");

export default createToggle;
