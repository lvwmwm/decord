// Module ID: 15730
// Function ID: 15731
// Name: toggle
// Dependencies: [7291, 7893, 673, 14653, 7293, 11288, 1233, 2]

// Module 15730 (toggle)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import maybeFetchCollectiblesForInvoicesDefault from "maybeFetchCollectiblesForInvoices" /* 7293 */;
import useParentalControlledExplicitContentSettings from "useParentalControlledExplicitContentSettings" /* 14653 */;
import closure_3 from "freshTeenActivityWithMap" /* 7291 */;
import { Consents } from "ME" /* 673 */;
import createToggle from "createToggle" /* 11288 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.MNKzyg);
  },
  parent: require("MobileUserSettings").MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToCustomizeDiscordSettingValue() {
    return useParentalControlledExplicitContentSettings.useParentalControlledConsent(Consents.PERSONALIZATION).hasConsented;
  },
  onValueChange: function handlePersonalizationChange(arg0) {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (arg0) {
        const items = [Consents.PERSONALIZATION];
        let items1 = items;
      } else {
        items1 = [];
      }
      if (arg0) {
        let items2 = [];
      } else {
        items2 = [Consents.PERSONALIZATION];
      }
      maybeFetchCollectiblesForInvoicesDefault.updateTeenConsents(selectedTeenId, items1, items2);
      const obj = maybeFetchCollectiblesForInvoicesDefault;
    }
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataToCustomizeDiscordSetting.tsx");

export default createToggle;
