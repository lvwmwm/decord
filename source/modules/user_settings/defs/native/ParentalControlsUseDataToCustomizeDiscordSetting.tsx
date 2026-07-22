// Module ID: 14449
// Function ID: 108906
// Name: toggle
// Dependencies: []

// Module 14449 (toggle)
let closure_3 = importDefault(dependencyMap[0]);
const Consents = arg1(dependencyMap[2]).Consents;
let obj = arg1(dependencyMap[5]);
obj = {
  useTitle() {
    const intl = arg1(dependencyMap[6]).intl;
    return intl.string(arg1(dependencyMap[6]).t.MNKzyg);
  },
  parent: arg1(dependencyMap[1]).MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue: function useDataToCustomizeDiscordSettingValue() {
    return arg1(dependencyMap[3]).useParentalControlledConsent(Consents.PERSONALIZATION).hasConsented;
  },
  onValueChange: function handlePersonalizationChange(arg0) {
    const selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (arg0) {
        const items = [Consents.PERSONALIZATION];
        let items1 = items;
      } else {
        items1 = [];
      }
      if (arg0) {
        let items2 = [];
      } else {
        items2 = [Consents.PERSONALIZATION];
      }
      importDefault(dependencyMap[4]).updateTeenConsents(selectedTeenId, items1, items2);
      const obj = importDefault(dependencyMap[4]);
    }
  }
};
const toggle = obj.createToggle(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsUseDataToCustomizeDiscordSetting.tsx");

export default toggle;
