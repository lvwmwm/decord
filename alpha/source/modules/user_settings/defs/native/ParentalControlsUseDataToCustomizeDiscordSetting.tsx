// Module ID: 17135
// Function ID: 17136
// Name: ParentalControlsUseDataToCustomizeDiscordSetting
// Dependencies: [7622, 8308, 1087, 558, 15987, 7624, 11155, 1128, 2]

// Module 17135 (ParentalControlsUseDataToCustomizeDiscordSetting)
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
    return intl.string(intl2.t.MNKzyg);
  },
  parent: MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToCustomizeDiscordSettingValue() {
    const obj = useParentalControlSettings;
    return obj.useParentalControlledConsent(Consents.PERSONALIZATION).hasConsented;
  },
  onValueChange: function handlePersonalizationChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      let items1;
      let items2;
      const tmp2 = arg0;
      if (tmp2) {
        const items = [Consents.PERSONALIZATION];
        items1 = items;
      } else {
        items1 = [];
      }
      if (arg0) {
        items2 = [];
      } else {
        items2 = [Consents.PERSONALIZATION];
      }
      const obj = FamilyCenterActionCreatorsDefault;
      obj.updateTeenConsents(selectedTeenId, items1, items2);
    }
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataToCustomizeDiscordSetting.tsx");

export default toggle;
