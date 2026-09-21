// Module ID: 16220
// Function ID: 16221
// Name: ParentalControlsUseDataForQuests3PSetting
// Dependencies: [7784, 8238, 558, 8923, 15092, 11594, 1119, 2]

// Module 16220 (ParentalControlsUseDataForQuests3PSetting)
import util from "util" /* 1119 */;
import useSelectedTeen from "useSelectedTeen" /* 8923 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15092 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7784 */;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const selectedTeenId = useSelectedTeen.useSelectedTeenId();
  const ParentalControlledQuests3PDataOptedOut = ParentalControlledUserSettings.ParentalControlledQuests3PDataOptedOut;
  return !ParentalControlledQuests3PDataOptedOut.useControlledSetting(selectedTeenId);
}) : (() => {
  const selectedTeenId = useSelectedTeen.useSelectedTeenId();
  const ParentalControlledQuests3PDataOptedOut = ParentalControlledUserSettings.ParentalControlledQuests3PDataOptedOut;
  return !ParentalControlledQuests3PDataOptedOut.useControlledSetting(selectedTeenId);
});
const SettingBuilders = fn(11594);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const selectedTeenId = useSelectedTeen.useSelectedTeenId();
  const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
  return ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
}) : (() => {
  const selectedTeenId = useSelectedTeen.useSelectedTeenId();
  const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
  return ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.CyLYKZ);
  },
  parent: fn(8238).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: tmp2,
  onValueChange: function onDataToSupportQuests3PSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    const ParentalControlledQuests3PDataOptedOut = ParentalControlledUserSettings.ParentalControlledQuests3PDataOptedOut;
    const result = ParentalControlledQuests3PDataOptedOut.updateControlledSetting(selectedTeenId, !arg0);
  },
  useIsDisabled: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const selectedTeenId = useSelectedTeen.useSelectedTeenId();
    const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
    return ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
  }) : (() => {
    const selectedTeenId = useSelectedTeen.useSelectedTeenId();
    const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
    return ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
  }),
  unsearchable: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataForQuests3PSetting.tsx");

export default toggle;
