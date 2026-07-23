// Module ID: 14367
// Function ID: 109841
// Name: toggle
// Dependencies: [7662, 8325, 8322, 8321, 14368, 10095, 1212, 2]

// Module 14367 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.D4clKq);
  },
  parent: require("MobileSetting").MobileSetting.ADVANCED,
  useValue: function useICYMISettingValue() {
    return importDefault(8325)(require(8322) /* apexExperiment */.ICYMI_LAB_FEATURE);
  },
  onValueChange: function onICYMISettingValueChange(enabled) {
    let obj = importDefault(8321);
    let str = "show";
    if (enabled) {
      str = "hide";
    }
    obj.itemInteracted(str, "icymi_tab_toggle", "press");
    importDefault(8321).feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "icymi_tab_toggle", actionIntentType: "configure", actionDestinationType: null } });
    const obj2 = importDefault(8321);
    obj = { enabled };
    require(14368) /* toggleLabFeature */.toggleLabFeature(require(8322) /* apexExperiment */.ICYMI_LAB_FEATURE, obj);
  },
  usePredicate: function useICYMIPredicate() {
    const ICYMIStaffOnlyExperiment = require(8322) /* apexExperiment */.ICYMIStaffOnlyExperiment;
    return ICYMIStaffOnlyExperiment.useConfig({ location: "settings" }).enabled;
  }
});
let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.D4clKq);
  },
  parent: require("MobileSetting").MobileSetting.ADVANCED,
  useValue: function useICYMISettingValue() {
    return importDefault(8325)(require(8322) /* apexExperiment */.ICYMI_LAB_FEATURE);
  },
  onValueChange: function onICYMISettingValueChange(enabled) {
    let obj = importDefault(8321);
    let str = "show";
    if (enabled) {
      str = "hide";
    }
    obj.itemInteracted(str, "icymi_tab_toggle", "press");
    importDefault(8321).feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "icymi_tab_toggle", actionIntentType: "configure", actionDestinationType: null } });
    const obj2 = importDefault(8321);
    obj = { enabled };
    require(14368) /* toggleLabFeature */.toggleLabFeature(require(8322) /* apexExperiment */.ICYMI_LAB_FEATURE, obj);
  },
  usePredicate: function useICYMIPredicate() {
    const ICYMIStaffOnlyExperiment = require(8322) /* apexExperiment */.ICYMIStaffOnlyExperiment;
    return ICYMIStaffOnlyExperiment.useConfig({ location: "settings" }).enabled;
  }
};
const result = require("apexExperiment").fileFinishedImporting("modules/user_settings/defs/native/IcymiTabSetting.tsx");

export default toggle;
