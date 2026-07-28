// Module ID: 13776
// Function ID: 105605
// Name: pressable
// Dependencies: [1850, 7733, 566, 9153, 10099, 1212, 2]

// Module 13776 (pressable)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["w/qqKK"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing: function useAccountEmailSettingTrailing() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => {
      const currentUser = outer1_3.getCurrentUser();
      let email;
      if (null != currentUser) {
        email = currentUser.email;
      }
      return email;
    });
  },
  onPress: function onAccountEmailSettingPress() {
    importDefault(9153).open(true);
  },
  withArrow: true
};
createToggle = createToggle.createPressable(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/AccountEmailSetting.tsx");

export default createToggle;
