// Module ID: 14035
// Function ID: 106717
// Name: toggle
// Dependencies: []

// Module 14035 (toggle)
let closure_3 = importDefault(dependencyMap[0]);
let obj = arg1(dependencyMap[5]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[4]).intl;
    return intl.string(arg1(dependencyMap[4]).t.BbESsg);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.VOICE,
  useValue: function useAdvancedVoiceActivitySettingValue() {
    const items = [closure_3];
    return arg1(dependencyMap[2]).useStateFromStores(items, () => modeOptions.getModeOptions().vadUseKrisp);
  },
  onValueChange: function onAdvancedVoiceActivitySettingValueChange(vadUseKrisp) {
    const mode = mode.getMode();
    let obj = importDefault(dependencyMap[3]);
    obj = { vadUseKrisp };
    obj.setMode(mode, obj);
  },
  useDescription: function useAdvancedVoiceActivitySettingDescription() {
    const intl = arg1(dependencyMap[4]).intl;
    return intl.string(arg1(dependencyMap[4]).t.LoOB1F);
  },
  usePredicate: function useHasAdvancedVoiceActivitySetting() {
    const items = [closure_3];
    return arg1(dependencyMap[2]).useStateFromStores(items, () => advancedVoiceActivitySupported.isAdvancedVoiceActivitySupported());
  }
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_settings/defs/native/AdvancedVoiceActivitySetting.tsx");

export default toggle;
