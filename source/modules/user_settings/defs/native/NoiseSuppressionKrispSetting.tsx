// Module ID: 14194
// Function ID: 109165
// Name: radio
// Dependencies: [4177, 7751, 10752, 10753, 1212, 566, 10127, 2]

// Module 14194 (radio)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.t8Qhib);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useValue() {
    return require(10752) /* getSelectedNoiseSuppressionOption */.useSelectedNoiseSuppressionOption();
  },
  onValueChange: function onNoiseSuppressionKrispValueSettingChange(arg0) {
    const result = require(10752) /* getSelectedNoiseSuppressionOption */.handleNoiseSuppressionChange(arg0);
  },
  useOptions: function useNoiseSuppressionKrispSettingOptions() {
    let obj = require(10753) /* getNoiseCancellationDeferredToSystem */;
    const noiseCancellationDeferredToSystem = obj.useNoiseCancellationDeferredToSystem();
    obj = { value: require(10752) /* getSelectedNoiseSuppressionOption */.NoiseSuppressionOpt.KRISP };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.label = intl.string(require(1212) /* getSystemLocale */.t.rdoNzt);
    obj.disabled = noiseCancellationDeferredToSystem;
    const items = [obj, , ];
    obj = { value: require(10752) /* getSelectedNoiseSuppressionOption */.NoiseSuppressionOpt.STANDARD, disabled: noiseCancellationDeferredToSystem };
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.label = intl2.string(require(1212) /* getSystemLocale */.t.qXeYHw);
    items[1] = obj;
    const obj1 = { value: require(10752) /* getSelectedNoiseSuppressionOption */.NoiseSuppressionOpt.NONE, disabled: noiseCancellationDeferredToSystem };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj1.label = intl3.string(require(1212) /* getSystemLocale */.t.wkYAlz);
    items[2] = obj1;
    return items;
  },
  usePredicate: function useHasNoiseSuppressionKrispSetting() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.isNoiseCancellationSupported());
  },
  useSearchTerms() {
    const intl = require(1212) /* getSystemLocale */.intl;
    const items = [intl.string(require(1212) /* getSystemLocale */.t.hmfkCi)];
    return items;
  }
};
createToggle = createToggle.createRadio(createToggle);
let result = require("getSelectedNoiseSuppressionOption").fileFinishedImporting("modules/user_settings/defs/native/NoiseSuppressionKrispSetting.tsx");

export default createToggle;
