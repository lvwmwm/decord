// Module ID: 14272
// Function ID: 14273
// Name: radio
// Dependencies: [4236, 7756, 10787, 10788, 1236, 589, 10120, 2]

// Module 14272 (radio)
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.t8Qhib);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useValue() {
    return require(10787) /* handleAutomaticGainControlChange */.useSelectedNoiseSuppressionOption();
  },
  onValueChange: function onNoiseSuppressionKrispValueSettingChange(arg0) {
    const result = require(10787) /* handleAutomaticGainControlChange */.handleNoiseSuppressionChange(arg0);
  },
  useOptions: function useNoiseSuppressionKrispSettingOptions() {
    let obj = require(10788) /* getNoiseCancellationDeferredToSystem */;
    const noiseCancellationDeferredToSystem = obj.useNoiseCancellationDeferredToSystem();
    obj = { value: require(10787) /* handleAutomaticGainControlChange */.NoiseSuppressionOpt.KRISP, label: null, disabled: null };
    const intl = require(1236) /* getSystemLocale */.intl;
    obj[1] = intl.string(require(1236) /* getSystemLocale */.t.rdoNzt);
    obj[2] = noiseCancellationDeferredToSystem;
    const items = [obj, , ];
    obj = { value: require(10787) /* handleAutomaticGainControlChange */.NoiseSuppressionOpt.STANDARD, disabled: noiseCancellationDeferredToSystem, label: null };
    const intl2 = require(1236) /* getSystemLocale */.intl;
    obj[2] = intl2.string(require(1236) /* getSystemLocale */.t.qXeYHw);
    items[1] = obj;
    const obj1 = { value: require(10787) /* handleAutomaticGainControlChange */.NoiseSuppressionOpt.NONE, disabled: noiseCancellationDeferredToSystem, label: null };
    const intl3 = require(1236) /* getSystemLocale */.intl;
    obj1[2] = intl3.string(require(1236) /* getSystemLocale */.t.wkYAlz);
    items[2] = obj1;
    return items;
  },
  usePredicate: function useHasNoiseSuppressionKrispSetting() {
    const items = [_detectH265HardwareDecode];
    return require(589) /* initialize */.useStateFromStores(items, () => noiseCancellationSupported.isNoiseCancellationSupported());
  },
  useSearchTerms() {
    const intl = require(1236) /* getSystemLocale */.intl;
    const items = [intl.string(require(1236) /* getSystemLocale */.t.hmfkCi)];
    return items;
  }
};
createToggle = createToggle.createRadio(createToggle);
let result = require("handleAutomaticGainControlChange").fileFinishedImporting("modules/user_settings/defs/native/NoiseSuppressionKrispSetting.tsx");

export default createToggle;
