// Module ID: 13792
// Function ID: 13793
// Name: pressable
// Dependencies: [1874, 7753, 589, 9173, 10116, 1236, 2]

// Module 13792 (pressable)
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
    importDefault(9173).open(true);
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/AccountEmailSetting.tsx");

export default createToggle;
