// Module ID: 15749
// Function ID: 15750
// Name: IcymiTabSetting
// Dependencies: [7974, 558, 8459, 8456, 8455, 15750, 576, 10629, 1126, 2]

// Module 15749 (IcymiTabSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8455 */;
import ICYMIExperiment from "ICYMIExperiment" /* 8456 */;
import useLabFeatureDefault from "useLabFeature" /* 8459 */;
import LabFeatureActions from "LabFeatureActions" /* 15750 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
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
