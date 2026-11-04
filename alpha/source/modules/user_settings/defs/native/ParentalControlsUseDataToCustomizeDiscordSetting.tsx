// Module ID: 18198
// Function ID: 18199
// Name: ParentalControlsUseDataToCustomizeDiscordSetting
// Dependencies: [7855, 8573, 1072, 16968, 7857, 11729, 1113, 2]

// Module 18198 (ParentalControlsUseDataToCustomizeDiscordSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7857 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16968 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7855 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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
      const obj = FamilyCenterActionCreatorsDefault;
      obj.updateTeenConsents(selectedTeenId, items1, items2);
    }
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataToCustomizeDiscordSetting.tsx");

export default toggle;
