// Module ID: 14031
// Function ID: 106694
// Name: toggle
// Dependencies: []

// Module 14031 (toggle)
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[4]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.t8Qhib);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.VOICE,
  useValue: function useNoiseSuppressionSettingValue() {
    const items = [closure_2];
    return arg1(dependencyMap[2]).useStateFromStores(items, () => noiseSuppression.getNoiseSuppression());
  },
  onValueChange: function onNoiseSuppressionSettingValueChange(arg0) {
    const NoiseSuppressionOpt = arg1(dependencyMap[3]).NoiseSuppressionOpt;
    const result = arg1(dependencyMap[3]).handleNoiseSuppressionChange(arg0 ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE);
  },
  usePredicate: function useHasNoiseSuppressionSetting() {
    const items = [closure_2];
    return arg1(dependencyMap[2]).useStateFromStores(items, () => !noiseCancellationSupported.isNoiseCancellationSupported());
  }
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/defs/native/NoiseSuppressionSetting.tsx");

export default toggle;
