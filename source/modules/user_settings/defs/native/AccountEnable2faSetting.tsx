// Module ID: 13734
// Function ID: 105370
// Name: pressable
// Dependencies: [1849, 7751, 13699, 13735, 4470, 1212, 10127, 2]

// Module 13734 (pressable)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.cDgKte);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  onPress: function onAccountEnable2FASettingPress() {
    currentUser = currentUser.getCurrentUser();
    let verified;
    if (null != currentUser) {
      verified = currentUser.verified;
    }
    if (null != verified) {
      if (verified) {
        importDefault(13735).open();
        const obj3 = importDefault(13735);
      }
    }
    let obj = importDefault(4470);
    obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.title = intl.string(require(1212) /* getSystemLocale */.t.v740sh);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.body = intl2.string(require(1212) /* getSystemLocale */.t.uggF7o);
    obj.show(obj);
  },
  withArrow: true,
  usePredicate: function useHasAccountEnable2FASetting() {
    return !require(13699) /* useIs2FAEnabled */.useIsTOTPEnabled();
  }
};
createToggle = createToggle.createPressable(createToggle);
const result = require("useIs2FAEnabled").fileFinishedImporting("modules/user_settings/defs/native/AccountEnable2faSetting.tsx");

export default createToggle;
