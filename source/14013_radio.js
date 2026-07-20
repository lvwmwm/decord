// Module ID: 14013
// Function ID: 106591
// Name: radio
// Dependencies: []

// Module 14013 (radio)
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[6]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[4]).intl;
    return intl.string(arg1(dependencyMap[4]).t.t8Qhib);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.VOICE,
  useValue() {
    return arg1(dependencyMap[2]).useSelectedNoiseSuppressionOption();
  },
  onValueChange: function onNoiseSuppressionKrispValueSettingChange(arg0) {
    const result = arg1(dependencyMap[2]).handleNoiseSuppressionChange(arg0);
  },
  useOptions: function useNoiseSuppressionKrispSettingOptions() {
    let obj = arg1(dependencyMap[3]);
    const noiseCancellationDeferredToSystem = obj.useNoiseCancellationDeferredToSystem();
    obj = { value: arg1(dependencyMap[2]).NoiseSuppressionOpt.KRISP };
    const intl = arg1(dependencyMap[4]).intl;
    obj.label = intl.string(arg1(dependencyMap[4]).t.rdoNzt);
    obj.disabled = noiseCancellationDeferredToSystem;
    const items = [obj, , ];
    obj = { value: arg1(dependencyMap[2]).NoiseSuppressionOpt.STANDARD, disabled: noiseCancellationDeferredToSystem };
    const intl2 = arg1(dependencyMap[4]).intl;
    obj.label = intl2.string(arg1(dependencyMap[4]).t.qXeYHw);
    items[1] = obj;
    const obj1 = { value: arg1(dependencyMap[2]).NoiseSuppressionOpt.NONE, disabled: noiseCancellationDeferredToSystem };
    const intl3 = arg1(dependencyMap[4]).intl;
    obj1.label = intl3.string(arg1(dependencyMap[4]).t.wkYAlz);
    items[2] = obj1;
    return items;
  },
  usePredicate: function useHasNoiseSuppressionKrispSetting() {
    const items = [closure_2];
    return arg1(dependencyMap[5]).useStateFromStores(items, () => noiseCancellationSupported.isNoiseCancellationSupported());
  },
  useSearchTerms() {
    const intl = arg1(dependencyMap[4]).intl;
    const items = [intl.string(arg1(dependencyMap[4]).t.hmfkCi)];
    return items;
  }
};
const radio = obj.createRadio(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/defs/native/NoiseSuppressionKrispSetting.tsx");

export default radio;
