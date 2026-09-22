// Module ID: 15537
// Function ID: 15538
// Name: NoiseSuppressionSetting
// Dependencies: [1992, 8237, 504, 10256, 11729, 1115, 2]

// Module 15537 (NoiseSuppressionSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import UserSettingsVoiceUtils from "UserSettingsVoiceUtils" /* 10256 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;

require = fn;
const SettingBuilders = fn(11729);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.t8Qhib);
  },
  parent: fn(8237).MobileUserSettings.VOICE,
  useValue: function useNoiseSuppressionSettingValue() {
    const items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => noiseSuppression.getNoiseSuppression());
  },
  onValueChange: function onNoiseSuppressionSettingValueChange(arg0) {
    const NoiseSuppressionOpt = UserSettingsVoiceUtils.NoiseSuppressionOpt;
    const result = UserSettingsVoiceUtils.handleNoiseSuppressionChange(arg0 ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE);
  },
  usePredicate: function useHasNoiseSuppressionSetting() {
    const items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => !noiseCancellationSupported.isNoiseCancellationSupported());
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/NoiseSuppressionSetting.tsx");

export default toggle;
