// Module ID: 16816
// Function ID: 16817
// Name: NoiseSuppressionSetting
// Dependencies: [2131, 9513, 504, 10372, 11914, 1112, 2]

// Module 16816 (NoiseSuppressionSetting)
import get_initialized from "get initialized" /* 504 */;
import intl2 from "intl" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 9513 */;
import UserSettingsVoiceUtils from "UserSettingsVoiceUtils" /* 10372 */;
import MediaEngineStore from "MediaEngineStore" /* 2131 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.t8Qhib);
  },
  parent: MobileUserSettings.VOICE,
  useValue: function useNoiseSuppressionSettingValue() {
    let noiseSuppression;
    const items = [MediaEngineStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => noiseSuppression.getNoiseSuppression());
  },
  onValueChange: function onNoiseSuppressionSettingValueChange(arg0) {
    const handleNoiseSuppressionChange = UserSettingsVoiceUtils.handleNoiseSuppressionChange;
    UserSettingsVoiceUtils;
    const NoiseSuppressionOpt = UserSettingsVoiceUtils.NoiseSuppressionOpt;
    const result = handleNoiseSuppressionChange(arg0 ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE);
  },
  usePredicate: function useHasNoiseSuppressionSetting() {
    let noiseCancellationSupported;
    const items = [MediaEngineStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => !noiseCancellationSupported.isNoiseCancellationSupported());
  }
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/NoiseSuppressionSetting.tsx");

export default toggle;
