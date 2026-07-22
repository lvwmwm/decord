// Module ID: 14032
// Function ID: 106701
// Name: toggle
// Dependencies: []

// Module 14032 (toggle)
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[3]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[4]).intl;
    return intl.string(arg1(dependencyMap[4]).t.iWTwu6);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.VOICE,
  useValue: function useEchoCancellationSettingValue() {
    const items = [closure_2];
    return arg1(dependencyMap[2]).useStateFromStores(items, () => echoCancellation.getEchoCancellation());
  },
  onValueChange: arg1(dependencyMap[5]).handleEchoCancellationChange
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/defs/native/EchoCancellationSetting.tsx");

export default toggle;
