// Module ID: 16228
// Function ID: 16229
// Name: ParentalControlsUseDataToCustomizeDiscordSetting
// Dependencies: [7816, 8270, 1078, 558, 15094, 7818, 11630, 1119, 2]

// Module 16228 (ParentalControlsUseDataToCustomizeDiscordSetting)
import util from "util" /* 1119 */;
import FamilyCenterActionCreatorsDefault from "FamilyCenterActionCreators" /* 7818 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15094 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7816 */;

require = fn;
const Consents = fn(1078).Consents;
let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const SettingBuilders = fn(11630);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.MNKzyg);
  },
  parent: fn(8270).MobileUserSettings.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
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
