// Module ID: 17532
// Function ID: 17533
// Name: NativeMarkdownSetting
// Dependencies: [8432, 8564, 8561, 17531, 11540, 1113, 2]

// Module 17532 (NativeMarkdownSetting)
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import NativeMarkdownExperiment from "NativeMarkdownExperiment" /* 8561 */;
import useLabFeatureDefault from "useLabFeature" /* 8564 */;
import LabFeatureActions from "LabFeatureActions" /* 17531 */;
import SettingBuilders from "SettingBuilders" /* 11540 */;
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
