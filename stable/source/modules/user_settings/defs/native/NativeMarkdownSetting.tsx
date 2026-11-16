// Module ID: 17893
// Function ID: 17894
// Name: NativeMarkdownSetting
// Dependencies: [8536, 8668, 8665, 17894, 11717, 1113, 2]

// Module 17893 (NativeMarkdownSetting)
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8536 */;
import NativeMarkdownExperiment from "NativeMarkdownExperiment" /* 8665 */;
import useLabFeatureDefault from "useLabFeature" /* 8668 */;
import LabFeatureActions from "LabFeatureActions" /* 17894 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
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
