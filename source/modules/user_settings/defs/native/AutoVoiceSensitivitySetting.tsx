// Module ID: 14007
// Function ID: 106556
// Name: toggle
// Dependencies: []

// Module 14007 (toggle)
let closure_3 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[4]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[5]).intl;
    return intl.string(arg1(dependencyMap[5]).t.Z4oaN0);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.VOICE,
  useValue: function useAutoVoiceSensitivitySettingValue() {
    const items = [closure_3];
    return arg1(dependencyMap[2]).useStateFromStores(items, () => modeOptions.getModeOptions().autoThreshold);
  },
  onValueChange: function onAutoVoiceSensitivitySettingValueChange(autoThreshold) {
    const mode = mode.getMode();
    let obj = importDefault(dependencyMap[3]);
    obj = { autoThreshold };
    obj.setMode(mode, obj);
  },
  useSearchTerms() {
    const intl = arg1(dependencyMap[5]).intl;
    const items = [intl.string(arg1(dependencyMap[5]).t.nuFtHH)];
    return items;
  }
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/defs/native/AutoVoiceSensitivitySetting.tsx");

export default toggle;
