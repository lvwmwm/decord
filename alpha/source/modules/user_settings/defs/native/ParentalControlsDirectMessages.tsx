// Module ID: 17596
// Function ID: 17597
// Name: ParentalControlsDirectMessages
// Dependencies: [8212, 9555, 16323, 16328, 16324, 11962, 1112, 2]

// Module 17596 (ParentalControlsDirectMessages)
import intl2 from "intl" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 9555 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16323 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16324 */;
import FamilyCenterSaveErrorUtils from "FamilyCenterSaveErrorUtils" /* 16328 */;
import FamilyCenterStore from "FamilyCenterStore" /* 8212 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
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
