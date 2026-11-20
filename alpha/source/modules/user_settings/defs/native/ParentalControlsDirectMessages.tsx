// Module ID: 17264
// Function ID: 17265
// Name: ParentalControlsDirectMessages
// Dependencies: [8215, 8592, 15995, 16000, 15996, 11817, 1112, 2]

// Module 17264 (ParentalControlsDirectMessages)
import intl2 from "intl" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15995 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15996 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16000 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8215 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
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
