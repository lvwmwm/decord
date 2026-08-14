// Module ID: 14802
// Function ID: 14803
// Name: toggle
// Dependencies: [8148, 8980, 8977, 8976, 14803, 10421, 1236, 2]

// Module 14802 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.D4clKq);
  },
  parent: require("MobileSetting").MobileSetting.ADVANCED,
  useValue: function useICYMISettingValue() {
    return importDefault(8980)(require(8977) /* apexExperiment */.ICYMI_LAB_FEATURE);
  },
  onValueChange: function onICYMISettingValueChange(enabled) {
    let obj = importDefault(8976);
    let str = "show";
    if (enabled) {
      str = "hide";
    }
    obj.itemInteracted(str, "icymi_tab_toggle", "press");
    importDefault(8976).feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "icymi_tab_toggle", actionIntentType: "configure", actionDestinationType: null } });
    const tmp = importDefault;
    const tmpResult = importDefault(8976);
    obj = { enabled };
    require(14803) /* toggleLabFeature */.toggleLabFeature(require(8977) /* apexExperiment */.ICYMI_LAB_FEATURE, obj);
  },
  usePredicate: function useICYMIPredicate() {
    const ICYMIStaffOnlyExperiment = require(8977) /* apexExperiment */.ICYMIStaffOnlyExperiment;
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
    return importDefault(8980)(require(8977) /* apexExperiment */.ICYMI_LAB_FEATURE);
  },
  onValueChange: function onICYMISettingValueChange(enabled) {
    let obj = importDefault(8976);
    let str = "show";
    if (enabled) {
      str = "hide";
    }
    obj.itemInteracted(str, "icymi_tab_toggle", "press");
    importDefault(8976).feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "icymi_tab_toggle", actionIntentType: "configure", actionDestinationType: null } });
    const tmp = importDefault;
    const tmpResult = importDefault(8976);
    obj = { enabled };
    require(14803) /* toggleLabFeature */.toggleLabFeature(require(8977) /* apexExperiment */.ICYMI_LAB_FEATURE, obj);
  },
  usePredicate: function useICYMIPredicate() {
    const ICYMIStaffOnlyExperiment = require(8977) /* apexExperiment */.ICYMIStaffOnlyExperiment;
    return ICYMIStaffOnlyExperiment.useConfig({ location: "settings" }).enabled;
  }
};
const result = require("apexExperiment").fileFinishedImporting("modules/user_settings/defs/native/IcymiTabSetting.tsx");

export default toggle;
