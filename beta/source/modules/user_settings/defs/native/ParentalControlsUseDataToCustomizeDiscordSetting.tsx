// Module ID: 16229
// Function ID: 16230
// Name: ParentalControlsUseDataToCustomizeDiscordSetting
// Dependencies: [7779, 8233, 1074, 15102, 7781, 11725, 1115, 2]

// Module 16229 (ParentalControlsUseDataToCustomizeDiscordSetting)
import util from "util" /* 1115 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7781 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15102 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7779 */;

require = fn;
const Consents = fn(1074).Consents;
const SettingBuilders = fn(11725);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.MNKzyg);
  },
  parent: fn(8233).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToCustomizeDiscordSettingValue() {
    return useParentalControlSettings.useParentalControlledConsent(Consents.PERSONALIZATION).hasConsented;
  },
  onValueChange: function handlePersonalizationChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
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
      FamilyCenterActionCreatorsDefault.updateTeenConsents(selectedTeenId, items1, items2);
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataToCustomizeDiscordSetting.tsx");

export default toggle;
