// Module ID: 14242
// Function ID: 107613
// Name: toggle
// Dependencies: []

// Module 14242 (toggle)
const _module = require(dependencyMap[5]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[6]).intl;
    return intl.string(require(dependencyMap[6]).t.D4clKq);
  },
  parent: require(dependencyMap[0]).MobileSetting.ADVANCED,
  useValue: function useICYMISettingValue() {
    return importDefault(dependencyMap[1])(require(dependencyMap[2]).ICYMI_LAB_FEATURE);
  },
  onValueChange: function onICYMISettingValueChange(enabled) {
    let obj = importDefault(dependencyMap[3]);
    let str = "show";
    if (enabled) {
      str = "hide";
    }
    obj.itemInteracted(str, "icymi_tab_toggle", "press");
    importDefault(dependencyMap[3]).feedPageActioned({ actionParameters: {} });
    const obj2 = importDefault(dependencyMap[3]);
    obj = { enabled };
    require(dependencyMap[4]).toggleLabFeature(require(dependencyMap[2]).ICYMI_LAB_FEATURE, obj);
  },
  usePredicate: function useICYMIPredicate() {
    const ICYMIStaffOnlyExperiment = require(dependencyMap[2]).ICYMIStaffOnlyExperiment;
    return ICYMIStaffOnlyExperiment.useConfig({ location: "settings" }).enabled;
  }
});
const _module1 = require(dependencyMap[7]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/IcymiTabSetting.tsx");

export default toggle;
