// Module ID: 17134
// Function ID: 17135
// Name: ParentalControlsUseDataToImproveDiscordSetting
// Dependencies: [7622, 8308, 1087, 7624, 558, 15987, 11155, 1128, 2]

// Module 17134 (ParentalControlsUseDataToImproveDiscordSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7624 */;
import SettingsConstants from "SettingsConstants" /* 8308 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15987 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7622 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11155 */;
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
