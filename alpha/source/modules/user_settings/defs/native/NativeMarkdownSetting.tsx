// Module ID: 17166
// Function ID: 17167
// Name: NativeMarkdownSetting
// Dependencies: [8365, 558, 8500, 8497, 17165, 576, 11248, 1125, 2]

// Module 17166 (NativeMarkdownSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1125 */;
import SettingsConstants from "SettingsConstants" /* 8365 */;
import NativeMarkdownExperiment from "NativeMarkdownExperiment" /* 8497 */;
import useLabFeatureDefault from "useLabFeature" /* 8500 */;
import LabFeatureActions from "LabFeatureActions" /* 17165 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
function useNativeMarkdownSettingValue() {
  const tmp = useLabFeatureDefault;
  return tmp(NativeMarkdownExperiment.NATIVE_MARKDOWN_LAB_FEATURE);
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNativeMarkdownPredicate() {
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
  const NativeMarkdownSettingExperiment = NativeMarkdownExperiment.NativeMarkdownSettingExperiment;
  return NativeMarkdownSettingExperiment.useConfig(first).enabled;
}) : (function useNativeMarkdownPredicate() {
  const NativeMarkdownSettingExperiment = NativeMarkdownExperiment.NativeMarkdownSettingExperiment;
  return NativeMarkdownSettingExperiment.useConfig({ location: "settings" }).enabled;
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["5CIvT4"]);
  },
  parent: MobileUserSettings.ADVANCED,
  useValue: useNativeMarkdownSettingValue,
  onValueChange: function onNativeMarkdownSettingValueChange(enabled) {
    const obj = LabFeatureActions;
    const obj2 = { enabled };
    obj.toggleLabFeature(NativeMarkdownExperiment.NATIVE_MARKDOWN_LAB_FEATURE, obj2);
  },
  usePredicate: tmp3
};
const toggle = SettingBuilders.createToggle(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/NativeMarkdownSetting.tsx");

export default toggle;
