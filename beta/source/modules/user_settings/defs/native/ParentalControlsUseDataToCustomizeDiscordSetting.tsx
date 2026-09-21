// Module ID: 16218
// Function ID: 16219
// Name: ParentalControlsUseDataToCustomizeDiscordSetting
// Dependencies: [7784, 8238, 1078, 558, 15091, 7786, 11594, 1119, 2]

// Module 16218 (ParentalControlsUseDataToCustomizeDiscordSetting)
import util from "util" /* 1119 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7786 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15091 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7784 */;

require = fn;
const Consents = fn(1078).Consents;
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const SettingBuilders = fn(11594);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.MNKzyg);
  },
  parent: fn(8238).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: () => useParentalControlSettings.useParentalControlledConsent(Consents.PERSONALIZATION).hasConsented,
  onValueChange: function handlePersonalizationChange(arg0) {
    const selectedTeenId = FamilyCenterStore.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (arg0) {
        const items = [Consents.PERSONALIZATION];
        let items1 = items;
      } else {
        items1 = [];
      }
      if (arg0) {
        let items2 = [];
      } else {
        items2 = [Consents.PERSONALIZATION];
      }
      FamilyCenterActionCreatorsDefault.updateTeenConsents(selectedTeenId, items1, items2);
    }
  }
});
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataToCustomizeDiscordSetting.tsx");

export default toggle;
