// Module ID: 17858
// Function ID: 17859
// Name: NativeMarkdownSetting
// Dependencies: [8503, 8635, 8632, 17859, 11685, 1113, 2]

// Module 17858 (NativeMarkdownSetting)
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8503 */;
import NativeMarkdownExperiment from "NativeMarkdownExperiment" /* 8632 */;
import useLabFeatureDefault from "useLabFeature" /* 8635 */;
import LabFeatureActions from "LabFeatureActions" /* 17859 */;
import SettingBuilders from "SettingBuilders" /* 11685 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["5CIvT4"]);
  },
  parent: MobileUserSettings.ADVANCED,
  useValue: function useNativeMarkdownSettingValue() {
    const tmp = useLabFeatureDefault;
    return tmp(NativeMarkdownExperiment.NATIVE_MARKDOWN_LAB_FEATURE);
  },
  onValueChange: function onNativeMarkdownSettingValueChange(enabled) {
    const obj = LabFeatureActions;
    const obj2 = { enabled };
    obj.toggleLabFeature(NativeMarkdownExperiment.NATIVE_MARKDOWN_LAB_FEATURE, obj2);
  },
  usePredicate: function useNativeMarkdownPredicate() {
    const NativeMarkdownSettingExperiment = NativeMarkdownExperiment.NativeMarkdownSettingExperiment;
    return NativeMarkdownSettingExperiment.useConfig({ location: "settings" }).enabled;
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/NativeMarkdownSetting.tsx");

export default toggle;
