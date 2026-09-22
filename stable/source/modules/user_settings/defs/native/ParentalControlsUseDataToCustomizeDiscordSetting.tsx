// Module ID: 15995
// Function ID: 15996
// Name: ParentalControlsUseDataToCustomizeDiscordSetting
// Dependencies: [7640, 8079, 1074, 14914, 7642, 11605, 1114, 2]

// Module 15995 (ParentalControlsUseDataToCustomizeDiscordSetting)
import util from "util" /* 1114 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7642 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14914 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7640 */;

require = fn;
const Consents = fn(1074).Consents;
const SettingBuilders = fn(11605);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.MNKzyg);
  },
  parent: fn(8079).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
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
