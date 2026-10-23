// Module ID: 16856
// Function ID: 16857
// Name: IcymiTabSetting
// Dependencies: [8330, 558, 8843, 8840, 8839, 16857, 576, 11204, 1128, 2]

// Module 16856 (IcymiTabSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1128 */;
import SettingsConstants from "SettingsConstants" /* 8330 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8839 */;
import ICYMIExperiment from "ICYMIExperiment" /* 8840 */;
import useLabFeatureDefault from "useLabFeature" /* 8843 */;
import LabFeatureActions from "LabFeatureActions" /* 16857 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11204 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useICYMIPredicate() {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "settings" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const ICYMIStaffOnlyExperiment = ICYMIExperiment.ICYMIStaffOnlyExperiment;
  return ICYMIStaffOnlyExperiment.useConfig(first).enabled;
}) : (function useICYMIPredicate() {
  const ICYMIStaffOnlyExperiment = ICYMIExperiment.ICYMIStaffOnlyExperiment;
  return ICYMIStaffOnlyExperiment.useConfig({ location: "settings" }).enabled;
});
function useICYMISettingValue() {
  const tmp = useLabFeatureDefault;
  return tmp(ICYMIExperiment.ICYMI_LAB_FEATURE);
}
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.D4clKq);
  },
  parent: MobileUserSettings.ADVANCED,
  useValue: useICYMISettingValue,
  onValueChange: function onICYMISettingValueChange(enabled) {
    let str = "show";
    const itemInteracted = ICYMIActionCreatorsDefault.itemInteracted;
    ICYMIActionCreatorsDefault;
    if (enabled) {
      str = "hide";
    }
    itemInteracted(str, "icymi_tab_toggle", "press");
    const tmpResult = ICYMIActionCreatorsDefault;
    tmpResult.feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "icymi_tab_toggle", actionIntentType: "configure", actionDestinationType: null } });
    const obj = { enabled };
    const obj2 = LabFeatureActions;
    obj2.toggleLabFeature(ICYMIExperiment.ICYMI_LAB_FEATURE, obj);
  },
  usePredicate: tmp3
};
const toggle = SettingBuilders.createToggle(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/IcymiTabSetting.tsx");

export default toggle;
