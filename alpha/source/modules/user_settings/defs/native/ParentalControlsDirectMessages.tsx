// Module ID: 17260
// Function ID: 17261
// Name: ParentalControlsDirectMessages
// Dependencies: [7643, 8330, 558, 16080, 16081, 11204, 1128, 2]

// Module 17260 (ParentalControlsDirectMessages)
import intl2 from "intl" /* 1128 */;
import SettingsConstants from "SettingsConstants" /* 8330 */;
import useParentalControlSettings from "useParentalControlSettings" /* 16080 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 16081 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7643 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11204 */;
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
