// Module ID: 18468
// Function ID: 18469
// Name: ParentalControlsDirectMessages
// Dependencies: [8673, 9136, 17228, 17233, 17229, 12317, 1113, 2]

// Module 18468 (ParentalControlsDirectMessages)
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import useParentalControlSettings from "useParentalControlSettings" /* 17228 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 17229 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 17233 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8673 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
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
