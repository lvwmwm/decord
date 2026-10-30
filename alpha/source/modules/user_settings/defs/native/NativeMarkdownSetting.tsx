// Module ID: 17459
// Function ID: 17460
// Name: NativeMarkdownSetting
// Dependencies: [8424, 8556, 8553, 17458, 11505, 1114, 2]

// Module 17459 (NativeMarkdownSetting)
import intl2 from "intl" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import NativeMarkdownExperiment from "NativeMarkdownExperiment" /* 8553 */;
import useLabFeatureDefault from "useLabFeature" /* 8556 */;
import LabFeatureActions from "LabFeatureActions" /* 17458 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
