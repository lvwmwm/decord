// Module ID: 13683
// Function ID: 105046
// Name: pressable
// Dependencies: [1849, 7662, 13648, 13684, 4470, 1212, 10095, 2]

// Module 13683 (pressable)
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
        importDefault(13684).open();
        const obj3 = importDefault(13684);
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
    return !require(13648) /* useIs2FAEnabled */.useIsTOTPEnabled();
  }
};
createToggle = createToggle.createPressable(createToggle);
const result = require("useIs2FAEnabled").fileFinishedImporting("modules/user_settings/defs/native/AccountEnable2faSetting.tsx");

export default createToggle;
