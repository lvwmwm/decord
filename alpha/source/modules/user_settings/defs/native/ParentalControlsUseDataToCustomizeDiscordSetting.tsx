// Module ID: 18226
// Function ID: 18227
// Name: ParentalControlsUseDataToCustomizeDiscordSetting
// Dependencies: [7860, 8578, 1072, 16991, 16996, 7862, 11737, 1113, 2]

// Module 18226 (ParentalControlsUseDataToCustomizeDiscordSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7862 */;
import SettingsConstants from "SettingsConstants" /* 8578 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16991 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16996 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7860 */;
import SettingBuilders from "SettingBuilders" /* 11737 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
const Consents = Constants.Consents;
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
      const showToastIfSaveFails = FamilyCenterSaveErrorUtils.showToastIfSaveFails;
      FamilyCenterSaveErrorUtils;
      const obj = FamilyCenterActionCreatorsDefault;
      showToastIfSaveFails(obj.updateTeenConsents(selectedTeenId, items1, items2));
    }
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataToCustomizeDiscordSetting.tsx");

export default toggle;
