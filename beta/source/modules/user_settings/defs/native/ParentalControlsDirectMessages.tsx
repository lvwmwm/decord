// Module ID: 16218
// Function ID: 16219
// Name: ParentalControlsDirectMessages
// Dependencies: [7816, 8270, 558, 15094, 15095, 11630, 1119, 2]

// Module 16218 (ParentalControlsDirectMessages)
import util from "util" /* 1119 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15094 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15095 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7816 */;

require = fn;
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const SettingBuilders = fn(11630);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.RAQUSN);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.wbYDfT);
  },
  parent: fn(8270).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: () => !useParentalControlSettings.useDefaultGuildsRestricted(),
  onValueChange: function onAllowDirectMessagesFromServerMembersValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      const ParentalControlledDefaultGuildsRestrictedV2 = ParentalControlledUserSettings.ParentalControlledDefaultGuildsRestrictedV2;
      const result = ParentalControlledDefaultGuildsRestrictedV2.updateControlledSetting(selectedTeenId, !arg0);
    }
  },
  unsearchable: true
});
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsDirectMessages.tsx");

export default toggle;
export const ParentalControlsDirectMessages = toggle;
