// Module ID: 16963
// Function ID: 16964
// Name: NativeMarkdownSetting
// Dependencies: [8712, 8795, 8792, 16964, 11942, 1112, 2]

// Module 16963 (NativeMarkdownSetting)
import intl2 from "intl" /* 1112 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import NativeMarkdownExperiment from "NativeMarkdownExperiment" /* 8792 */;
import useLabFeatureDefault from "useLabFeature" /* 8795 */;
import LabFeatureActions from "LabFeatureActions" /* 16964 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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
