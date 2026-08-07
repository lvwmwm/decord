// Module ID: 14648
// Function ID: 14649
// Name: toggle
// Dependencies: [8022, 8857, 8854, 8853, 14649, 10380, 1236, 2]

// Module 14648 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.D4clKq);
  },
  parent: require("MobileSetting").MobileSetting.ADVANCED,
  useValue: function useICYMISettingValue() {
    return importDefault(8857)(require(8854) /* apexExperiment */.ICYMI_LAB_FEATURE);
  },
  onValueChange: function onICYMISettingValueChange(enabled) {
    let obj = importDefault(8853);
    let str = "show";
    if (enabled) {
      str = "hide";
    }
    obj.itemInteracted(str, "icymi_tab_toggle", "press");
    importDefault(8853).feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "icymi_tab_toggle", actionIntentType: "configure", actionDestinationType: null } });
    const tmp = importDefault;
    const tmpResult = importDefault(8853);
    obj = { enabled };
    require(14649) /* toggleLabFeature */.toggleLabFeature(require(8854) /* apexExperiment */.ICYMI_LAB_FEATURE, obj);
  },
  usePredicate: function useICYMIPredicate() {
    const ICYMIStaffOnlyExperiment = require(8854) /* apexExperiment */.ICYMIStaffOnlyExperiment;
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
    return importDefault(8857)(require(8854) /* apexExperiment */.ICYMI_LAB_FEATURE);
  },
  onValueChange: function onICYMISettingValueChange(enabled) {
    let obj = importDefault(8853);
    let str = "show";
    if (enabled) {
      str = "hide";
    }
    obj.itemInteracted(str, "icymi_tab_toggle", "press");
    importDefault(8853).feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "icymi_tab_toggle", actionIntentType: "configure", actionDestinationType: null } });
    const tmp = importDefault;
    const tmpResult = importDefault(8853);
    obj = { enabled };
    require(14649) /* toggleLabFeature */.toggleLabFeature(require(8854) /* apexExperiment */.ICYMI_LAB_FEATURE, obj);
  },
  usePredicate: function useICYMIPredicate() {
    const ICYMIStaffOnlyExperiment = require(8854) /* apexExperiment */.ICYMIStaffOnlyExperiment;
    return ICYMIStaffOnlyExperiment.useConfig({ location: "settings" }).enabled;
  }
};
const result = require("apexExperiment").fileFinishedImporting("modules/user_settings/defs/native/IcymiTabSetting.tsx");

export default toggle;
