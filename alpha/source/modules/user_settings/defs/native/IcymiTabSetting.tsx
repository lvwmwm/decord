// Module ID: 17781
// Function ID: 17782
// Name: IcymiTabSetting
// Dependencies: [8573, 8705, 9066, 9065, 17782, 11729, 1113, 2]

// Module 17781 (IcymiTabSetting)
import intl2 from "intl" /* 1113 */;
import SettingsConstants from "SettingsConstants" /* 8573 */;
import useLabFeatureDefault from "useLabFeature" /* 8705 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 9065 */;
import ICYMIExperiment from "ICYMIExperiment" /* 9066 */;
import LabFeatureActions from "LabFeatureActions" /* 17782 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.D4clKq);
  },
  parent: MobileUserSettings.ADVANCED,
  useValue: function useICYMISettingValue() {
    const tmp = useLabFeatureDefault;
    return tmp(ICYMIExperiment.ICYMI_LAB_FEATURE);
  },
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
  usePredicate: function useLegacyICYMITabSettingVisible() {
    return false;
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/IcymiTabSetting.tsx");

export default toggle;
