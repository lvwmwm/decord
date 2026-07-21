// Module ID: 14024
// Function ID: 106640
// Name: toggle
// Dependencies: []

// Module 14024 (toggle)
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[4]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[3]).intl;
    return intl.string(arg1(dependencyMap[3]).t.cUMdH0);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.VOICE,
  useValue: function useAutomaticGainControlSettingValue() {
    const items = [closure_2];
    return arg1(dependencyMap[2]).useStateFromStores(items, () => automaticGainControl.getAutomaticGainControl());
  },
  onValueChange: arg1(dependencyMap[5]).handleAutomaticGainControlChange,
  useDescription: function useAutomaticGainControlSettingDescription() {
    const intl = arg1(dependencyMap[3]).intl;
    return intl.string(arg1(dependencyMap[3]).t.6EjbvA);
  }
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/defs/native/AutomaticGainControlSetting.tsx");

export default toggle;
