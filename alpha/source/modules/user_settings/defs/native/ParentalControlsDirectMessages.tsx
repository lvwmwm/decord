// Module ID: 18268
// Function ID: 18269
// Name: ParentalControlsDirectMessages
// Dependencies: [7791, 8503, 17038, 17043, 17039, 11685, 1113, 2]

// Module 18268 (ParentalControlsDirectMessages)
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8503 */;
import useParentalControlSettings from "useParentalControlSettings" /* 17038 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 17039 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 17043 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7791 */;
import SettingBuilders from "SettingBuilders" /* 11685 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.RAQUSN);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.wbYDfT);
  },
  parent: MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue() {
    const obj = useParentalControlSettings;
    return !obj.useDefaultGuildsRestricted();
  },
  onValueChange: function onAllowDirectMessagesFromServerMembersValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      const showToastIfSaveFails = FamilyCenterSaveErrorUtils.showToastIfSaveFails;
      FamilyCenterSaveErrorUtils;
      const ParentalControlledDefaultGuildsRestrictedV2 = ParentalControlledUserSettings.ParentalControlledDefaultGuildsRestrictedV2;
      showToastIfSaveFails(ParentalControlledDefaultGuildsRestrictedV2.updateControlledSetting(selectedTeenId, !arg0));
    }
  },
  unsearchable: true
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsDirectMessages.tsx");

export default toggle;
export const ParentalControlsDirectMessages = toggle;
