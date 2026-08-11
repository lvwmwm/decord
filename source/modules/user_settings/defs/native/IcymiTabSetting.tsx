// Module ID: 14730
// Function ID: 14731
// Name: toggle
// Dependencies: [8084, 8923, 8920, 8919, 14731, 10452, 1236, 2]

// Module 14730 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.D4clKq);
  },
  parent: require("MobileSetting").MobileSetting.ADVANCED,
  useValue: function useICYMISettingValue() {
    return importDefault(8923)(require(8920) /* apexExperiment */.ICYMI_LAB_FEATURE);
  },
  onValueChange: function onICYMISettingValueChange(enabled) {
    let obj = importDefault(8919);
    let str = "show";
    if (enabled) {
      str = "hide";
    }
    obj.itemInteracted(str, "icymi_tab_toggle", "press");
    importDefault(8919).feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "icymi_tab_toggle", actionIntentType: "configure", actionDestinationType: null } });
    const tmp = importDefault;
    const tmpResult = importDefault(8919);
    obj = { enabled };
    require(14731) /* toggleLabFeature */.toggleLabFeature(require(8920) /* apexExperiment */.ICYMI_LAB_FEATURE, obj);
  },
  usePredicate: function useICYMIPredicate() {
    const ICYMIStaffOnlyExperiment = require(8920) /* apexExperiment */.ICYMIStaffOnlyExperiment;
    return ICYMIStaffOnlyExperiment.useConfig({ location: "settings" }).enabled;
  }
});
let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.D4clKq);
  },
  parent: require("MobileSetting").MobileSetting.ADVANCED,
  useValue: function useICYMISettingValue() {
    return importDefault(8923)(require(8920) /* apexExperiment */.ICYMI_LAB_FEATURE);
  },
  onValueChange: function onICYMISettingValueChange(enabled) {
    let obj = importDefault(8919);
    let str = "show";
    if (enabled) {
      str = "hide";
    }
    obj.itemInteracted(str, "icymi_tab_toggle", "press");
    importDefault(8919).feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "icymi_tab_toggle", actionIntentType: "configure", actionDestinationType: null } });
    const tmp = importDefault;
    const tmpResult = importDefault(8919);
    obj = { enabled };
    require(14731) /* toggleLabFeature */.toggleLabFeature(require(8920) /* apexExperiment */.ICYMI_LAB_FEATURE, obj);
  },
  usePredicate: function useICYMIPredicate() {
    const ICYMIStaffOnlyExperiment = require(8920) /* apexExperiment */.ICYMIStaffOnlyExperiment;
    return ICYMIStaffOnlyExperiment.useConfig({ location: "settings" }).enabled;
  }
};
const result = require("apexExperiment").fileFinishedImporting("modules/user_settings/defs/native/IcymiTabSetting.tsx");

export default toggle;
