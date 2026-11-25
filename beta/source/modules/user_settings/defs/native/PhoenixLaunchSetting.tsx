// Module ID: 17186
// Function ID: 17187
// Name: PhoenixLaunchSetting
// Dependencies: [16152, 17187, 17188, 17190, 11942, 1112, 7388, 2]

// Module 17186 (PhoenixLaunchSetting)
import intl2 from "intl" /* 1112 */;
import MobilePhoneIcon from "MobilePhoneIcon" /* 7388 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16152 */;
import PhoenixSwitchEntrypointExperimentDefault from "PhoenixSwitchEntrypointExperiment" /* 17187 */;
import PhoenixRolloutExperimentDefault from "PhoenixRolloutExperiment" /* 17188 */;
import PhoenixLaunchState from "PhoenixLaunchState" /* 17190 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
import size from "module_2" /* 2 */;

let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.paDGCW);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t.DXxeZL);
  },
  parent: null,
  IconComponent: MobilePhoneIcon.MobilePhoneIcon,
  useValue: PhoenixLaunchState.useShouldLaunchPhoenix,
  onValueChange: PhoenixLaunchState.setShouldLaunchPhoenix,
  usePredicate: function usePhoenixLaunchPredicate() {
    const obj = useIsStaffOrDeveloperSettingPredicate;
    let staffOrDeveloperSettingPredicate = obj.useStaffOrDeveloperSettingPredicate();
    const obj2 = PhoenixSwitchEntrypointExperimentDefault;
    const enabled = obj2.useConfig({ location: "PhoenixLaunchSetting" }, { autoTrackExposure: false }).enabled;
    const obj3 = PhoenixRolloutExperimentDefault;
    const tmp2 = null != obj3.useConfig({ location: "PhoenixLaunchSetting" }, { autoTrackExposure: false }).forcedClient;
    let tmp4 = !tmp2;
    const obj4 = PhoenixLaunchState;
    const isPhoenixInstalled = obj4.useIsPhoenixInstalled();
    if (!tmp2) {
      if (!staffOrDeveloperSettingPredicate) {
        staffOrDeveloperSettingPredicate = enabled;
      }
      tmp4 = staffOrDeveloperSettingPredicate;
    }
    if (tmp4) {
      tmp4 = isPhoenixInstalled;
    }
    return tmp4;
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PhoenixLaunchSetting.tsx");

export default toggle;
