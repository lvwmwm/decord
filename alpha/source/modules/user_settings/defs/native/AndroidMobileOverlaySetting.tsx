// Module ID: 17758
// Function ID: 17759
// Name: AndroidMobileOverlaySetting
// Dependencies: [12910, 9136, 504, 1113, 12317, 12940, 2]

// Module 17758 (AndroidMobileOverlaySetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 9136 */;
import MobileVoiceOverlayStore2 from "MobileVoiceOverlayStore" /* 12910 */;
import MobileVoiceOverlayActionCreatorsDefault from "MobileVoiceOverlayActionCreators" /* 12940 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
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
