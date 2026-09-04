// Module ID: 14782
// Function ID: 14783
// Name: toggle
// Dependencies: [6536, 7906, 673, 14749, 586, 4865, 1233, 4955, 14780, 14781, 11400, 2]

// Module 14782 (toggle)
import initialize from "initialize" /* 586 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import setDefault from "set" /* 4865 */;
import componentDidMountDefault from "componentDidMount" /* 4955 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14749 */;
import handleRequestSuccess from "handleRequestSuccess" /* 14780 */;
import closure_3 from "hasConsented" /* 6536 */;
import { Consents } from "ME" /* 673 */;
import createToggle from "createToggle" /* 11400 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.MNKzyg);
  },
  parent: require("MobileUserSettings").MobileUserSettings.DATA_AND_PRIVACY,
  useValue: function useDataToCustomizeDiscordSettingValue() {
    const items = [closure_3];
    return initialize.useStateFromStores(items, () => closure_3.hasConsented(constants.PERSONALIZATION));
  },
  onValueChange: function handlePersonalizationChange(arg0) {
    if (arg0) {
      let items = [Consents.PERSONALIZATION];
      const obj3 = handleRequestSuccess;
      handleRequestSuccess.setConsents(items, []).catch((message) => callback(14781).showDataPrivacyRateLimitAlert(message.message));
      const setConsentsResult = handleRequestSuccess.setConsents(items, []);
    } else {
      let obj = setDefault;
      obj = { title: null, body: null, confirmText: null, cancelText: null, confirmColor: null, onConfirm: null };
      const intl = getSystemLocale.intl;
      obj[0] = intl.string(getSystemLocale.t["9SNpzv"]);
      const intl2 = getSystemLocale.intl;
      obj[1] = intl2.string(getSystemLocale.t.gJvDDh);
      const intl3 = getSystemLocale.intl;
      obj[2] = intl3.string(getSystemLocale.t["9g5UGw"]);
      const intl4 = getSystemLocale.intl;
      obj[3] = intl4.string(getSystemLocale.t["+ZLPw9"]);
      obj[4] = componentDidMountDefault.Colors.RED;
      obj[5] = function onConfirm() {
        const items = [constants.PERSONALIZATION];
        return callback(14780).setConsents([], items);
      };
      obj.show(obj);
    }
  },
  useIsDisabled() {
    return useParentalControlledExplicitContentSettings.useIsParentallyControlled();
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/UseDataToCustomizeDiscordSetting.tsx");

export default createToggle;
