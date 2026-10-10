// Module ID: 16291
// Function ID: 16292
// Name: ParentalControlsUseDataToImproveDiscordSetting
// Dependencies: [7258, 7992, 1085, 7260, 558, 15073, 10663, 1126, 2]

// Module 16291 (ParentalControlsUseDataToImproveDiscordSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7260 */;
import SettingsConstants from "SettingsConstants" /* 7992 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15073 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7258 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const Consents = Constants.Consents;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.XuADY2);
  },
  parent: MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToImproveDiscordSettingValue() {
    const obj = useParentalControlSettings;
    return obj.useParentalControlledConsent(Consents.USAGE_STATISTICS).hasConsented;
  },
  onValueChange: function handleUsageStatisticsChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      let items1;
      let items2;
      const tmp2 = arg0;
      if (tmp2) {
        const items = [Consents.USAGE_STATISTICS];
        items1 = items;
      } else {
        items1 = [];
      }
      if (arg0) {
        items2 = [];
      } else {
        items2 = [Consents.USAGE_STATISTICS];
      }
      const obj = FamilyCenterActionCreatorsDefault;
      obj.updateTeenConsents(selectedTeenId, items1, items2);
    }
  },
  unsearchable: true
};
const toggle = SettingBuilders.createToggle(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataToImproveDiscordSetting.tsx");

export default toggle;
