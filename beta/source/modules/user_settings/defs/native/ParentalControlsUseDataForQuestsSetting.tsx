// Module ID: 16219
// Function ID: 16220
// Name: ParentalControlsUseDataForQuestsSetting
// Dependencies: [7784, 8238, 558, 568, 15092, 1119, 2486, 11594, 2]

// Module 16219 (ParentalControlsUseDataForQuestsSetting)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import _modDef2486 from "module_2486" /* 2486 */;
import ParentalControlledUserSettings from "ParentalControlledUserSettings" /* 15092 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7784 */;

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11594);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    cResult[0] = selectedTeenId;
    let first = selectedTeenId;
  } else {
    first = cResult[0];
  }
  const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
  return !ParentalControlledDropsOptedOut.useControlledSetting(first);
}) : (() => {
  const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
  const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
  return !ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
});
const toggle = SettingBuilders.createToggle({
  useTitle: function useDataForQuestsSettingTitle() {
    const intl = util.intl;
    return intl.string(_modDef2486.ZhaNu8);
  },
  parent: fn(8238).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(1);
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
      cResult[0] = selectedTeenId;
      let first = selectedTeenId;
    } else {
      first = cResult[0];
    }
    const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
    return !ParentalControlledDropsOptedOut.useControlledSetting(first);
  }) : (() => {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
    return !ParentalControlledDropsOptedOut.useControlledSetting(selectedTeenId);
  }),
  onValueChange: function onDataToSupportQuestsSettingValueChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    const ParentalControlledDropsOptedOut = ParentalControlledUserSettings.ParentalControlledDropsOptedOut;
    const result = ParentalControlledDropsOptedOut.updateControlledSetting(selectedTeenId, !arg0);
  },
  unsearchable: true
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataForQuestsSetting.tsx");

export default toggle;
