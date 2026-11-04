// Module ID: 17492
// Function ID: 17493
// Name: NoiseSuppressionKrispSetting
// Dependencies: [2135, 8573, 12153, 12154, 1113, 504, 11729, 2]

// Module 17492 (NoiseSuppressionKrispSetting)
import get_initialized from "get initialized" /* 504 */;
import intl4 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import UserSettingsVoiceUtils from "UserSettingsVoiceUtils" /* 12153 */;
import NoiseCancellationUtils from "NoiseCancellationUtils" /* 12154 */;
import MediaEngineStore from "MediaEngineStore" /* 2135 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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
