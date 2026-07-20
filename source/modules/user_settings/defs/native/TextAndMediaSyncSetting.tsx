// Module ID: 14171
// Function ID: 107307
// Name: toggle
// Dependencies: []

// Module 14171 (toggle)
let closure_2 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[3]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[4]).intl;
    return intl.string(arg1(dependencyMap[4]).t.3340dY);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.CHAT,
  useValue: function useTextAndMediaSyncSettingValue() {
    const items = [closure_2];
    return arg1(dependencyMap[2]).useStateFromStores(items, () => closure_2.shouldSync("text"));
  },
  onValueChange: importDefault(dependencyMap[5]).setShouldSyncTextSettings
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/defs/native/TextAndMediaSyncSetting.tsx");

export default toggle;
