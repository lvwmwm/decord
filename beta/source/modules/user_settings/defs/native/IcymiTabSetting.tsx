// Module ID: 15812
// Function ID: 15813
// Name: IcymiTabSetting
// Dependencies: [8265, 8658, 8655, 8654, 15813, 11754, 1115, 2]

// Module 15812 (IcymiTabSetting)
import util from "util" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 8265 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8654 */;
import ICYMIExperiment from "ICYMIExperiment" /* 8655 */;
import useLabFeatureDefault from "useLabFeature" /* 8658 */;
import LabFeatureActions from "LabFeatureActions" /* 15813 */;
import SettingBuilders from "SettingBuilders" /* 11754 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.D4clKq);
  },
  parent: SettingsConstants.MobileUserSettings.ADVANCED,
  useValue: function useICYMISettingValue() {
    return useLabFeatureDefault(ICYMIExperiment.ICYMI_LAB_FEATURE);
  },
  onValueChange: function onICYMISettingValueChange(enabled) {
    let str = "show";
    if (enabled) {
      str = "hide";
    }
    ICYMIActionCreatorsDefault.itemInteracted(str, "icymi_tab_toggle", "press");
    ICYMIActionCreatorsDefault.feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "icymi_tab_toggle", actionIntentType: "configure", actionDestinationType: null } });
    const tmpResult = ICYMIActionCreatorsDefault;
    LabFeatureActions.toggleLabFeature(ICYMIExperiment.ICYMI_LAB_FEATURE, { enabled });
  },
  usePredicate: function useICYMIPredicate() {
    const ICYMIStaffOnlyExperiment = ICYMIExperiment.ICYMIStaffOnlyExperiment;
    return ICYMIStaffOnlyExperiment.useConfig({ location: "settings" }).enabled;
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/IcymiTabSetting.tsx");

export default toggle;
