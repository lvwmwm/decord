// Module ID: 15085
// Function ID: 15086
// Name: IcymiTabSetting
// Dependencies: [7417, 7803, 7800, 7799, 15086, 11006, 1115, 2]

// Module 15085 (IcymiTabSetting)
import intl2 from "intl" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 7799 */;
import ICYMIExperiment from "ICYMIExperiment" /* 7800 */;
import useLabFeatureDefault from "useLabFeature" /* 7803 */;
import LabFeatureActions from "LabFeatureActions" /* 15086 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
  usePredicate: function useICYMIPredicate() {
    const ICYMIStaffOnlyExperiment = ICYMIExperiment.ICYMIStaffOnlyExperiment;
    return ICYMIStaffOnlyExperiment.useConfig({ location: "settings" }).enabled;
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/IcymiTabSetting.tsx");

export default toggle;
