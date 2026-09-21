// Module ID: 16228
// Function ID: 16229
// Name: ParentalControlsUseDataToImproveDiscordSetting
// Dependencies: [7779, 8233, 1074, 7781, 15102, 11725, 1115, 2]

// Module 16228 (ParentalControlsUseDataToImproveDiscordSetting)
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
    return intl.string(util.t.XuADY2);
  },
  parent: fn(8233).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToImproveDiscordSettingValue() {
    return useParentalControlSettings.useParentalControlledConsent(Consents.USAGE_STATISTICS).hasConsented;
  },
  onValueChange: function handleUsageStatisticsChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (arg0) {
        const items = [Consents.USAGE_STATISTICS];
        let items1 = items;
      } else {
        items1 = [];
      }
      if (arg0) {
        let items2 = [];
      } else {
        items2 = [Consents.USAGE_STATISTICS];
      }
      FamilyCenterActionCreatorsDefault.updateTeenConsents(selectedTeenId, items1, items2);
    }
  },
  unsearchable: true
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataToImproveDiscordSetting.tsx");

export default toggle;
