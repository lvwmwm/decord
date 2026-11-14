// Module ID: 17874
// Function ID: 17875
// Name: NoiseSuppressionKrispSetting
// Dependencies: [2133, 9202, 13032, 13033, 1113, 504, 12406, 2]

// Module 17874 (NoiseSuppressionKrispSetting)
import get_initialized from "get initialized" /* 504 */;
import intl4 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 9202 */;
import UserSettingsVoiceUtils from "UserSettingsVoiceUtils" /* 13032 */;
import NoiseCancellationUtils from "NoiseCancellationUtils" /* 13033 */;
import MediaEngineStore from "MediaEngineStore" /* 2133 */;
import SettingBuilders from "SettingBuilders" /* 12406 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t.t8Qhib);
  },
  parent: MobileUserSettings.VOICE,
  useValue() {
    const obj = UserSettingsVoiceUtils;
    return obj.useSelectedNoiseSuppressionOption();
  },
  onValueChange: function onNoiseSuppressionKrispValueSettingChange(arg0) {
    const obj = UserSettingsVoiceUtils;
    const result = obj.handleNoiseSuppressionChange(arg0);
  },
  useOptions: function useNoiseSuppressionKrispSettingOptions() {
    let intl;
    let intl2;
    let intl3;
    const obj = NoiseCancellationUtils;
    const noiseCancellationDeferredToSystem = obj.useNoiseCancellationDeferredToSystem();
    const obj2 = { value: UserSettingsVoiceUtils.NoiseSuppressionOpt.KRISP, label: intl.string(intl4.t.rdoNzt), disabled: noiseCancellationDeferredToSystem };
    intl = intl4.intl;
    const items = [obj2, , ];
    const obj3 = { value: UserSettingsVoiceUtils.NoiseSuppressionOpt.STANDARD, disabled: noiseCancellationDeferredToSystem, label: intl2.string(intl4.t.qXeYHw) };
    intl2 = intl4.intl;
    items[1] = obj3;
    const obj4 = { value: UserSettingsVoiceUtils.NoiseSuppressionOpt.NONE, disabled: noiseCancellationDeferredToSystem, label: intl3.string(intl4.t.wkYAlz) };
    intl3 = intl4.intl;
    items[2] = obj4;
    return items;
  },
  usePredicate: function useHasNoiseSuppressionKrispSetting() {
    let noiseCancellationSupported;
    const items = [MediaEngineStore];
    const obj = get_initialized;
    return obj.useStateFromStores(items, () => noiseCancellationSupported.isNoiseCancellationSupported());
  },
  useSearchTerms() {
    const intl = intl4.intl;
    const items = [intl.string(intl4.t.hmfkCi)];
    return items;
  }
};
const radio = SettingBuilders.createRadio(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/NoiseSuppressionKrispSetting.tsx");

export default radio;
