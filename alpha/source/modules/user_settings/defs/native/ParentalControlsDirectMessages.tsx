// Module ID: 16612
// Function ID: 16613
// Name: ParentalControlsDirectMessages
// Dependencies: [7259, 7993, 558, 15417, 15418, 10663, 1126, 2]

// Module 16612 (ParentalControlsDirectMessages)
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7993 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15417 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15418 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7259 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
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
      const ParentalControlledDefaultGuildsRestrictedV2 = ParentalControlledUserSettings.ParentalControlledDefaultGuildsRestrictedV2;
      const result = ParentalControlledDefaultGuildsRestrictedV2.updateControlledSetting(selectedTeenId, !arg0);
    }
  },
  unsearchable: true
};
const toggle = SettingBuilders.createToggle(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsDirectMessages.tsx");

export default toggle;
export const ParentalControlsDirectMessages = toggle;
