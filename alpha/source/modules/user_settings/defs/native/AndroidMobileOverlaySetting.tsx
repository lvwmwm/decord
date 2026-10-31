// Module ID: 17232
// Function ID: 17233
// Name: AndroidMobileOverlaySetting
// Dependencies: [11940, 8432, 504, 1113, 11539, 11953, 2]

// Module 17232 (AndroidMobileOverlaySetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import MobileVoiceOverlayStore2 from "MobileVoiceOverlayStore" /* 11940 */;
import MobileVoiceOverlayActionCreatorsDefault from "MobileVoiceOverlayActionCreators" /* 11953 */;
import SettingBuilders from "SettingBuilders" /* 11539 */;
import size from "module_2" /* 2 */;

const MobileVoiceOverlayStore = MobileVoiceOverlayStore2;

const isMobileOverlaySupported = MobileVoiceOverlayStore2.isMobileOverlaySupported;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["9CSZJm"]);
  },
  parent: MobileUserSettings.VOICE,
  useValue: function useAndroidMobileOverlaySettingValue() {
    let enabled;
    const items = [MobileVoiceOverlayStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => enabled.getEnabled());
  },
  onValueChange: MobileVoiceOverlayActionCreatorsDefault.setEnabled,
  useDescription: function useAndroidMobileOverlaySettingDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.Wfoivk);
  },
  usePredicate: isMobileOverlaySupported
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidMobileOverlaySetting.tsx");

export default toggle;
