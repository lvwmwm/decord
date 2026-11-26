// Module ID: 17412
// Function ID: 17413
// Name: ParentalControlsUseDataToCustomizeDiscordSetting
// Dependencies: [8335, 8712, 1071, 16130, 16135, 8337, 11942, 1112, 2]

// Module 17412 (ParentalControlsUseDataToCustomizeDiscordSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 8337 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16130 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16135 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8335 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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
