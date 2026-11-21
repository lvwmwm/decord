// Module ID: 17178
// Function ID: 17179
// Name: PhoenixLaunchSetting
// Dependencies: [16144, 17179, 17180, 11937, 1112, 7388, 2]

// Module 17178 (PhoenixLaunchSetting)
import intl2 from "intl" /* 1112 */;
import MobilePhoneIcon from "MobilePhoneIcon" /* 7388 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16144 */;
import PhoenixSwitchEntrypointExperimentDefault from "PhoenixSwitchEntrypointExperiment" /* 17179 */;
import PhoenixLaunchState from "PhoenixLaunchState" /* 17180 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
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
    const obj3 = PhoenixLaunchState;
    const isPhoenixInstalled = obj3.useIsPhoenixInstalled();
    if (!staffOrDeveloperSettingPredicate) {
      staffOrDeveloperSettingPredicate = enabled;
    }
    if (staffOrDeveloperSettingPredicate) {
      staffOrDeveloperSettingPredicate = isPhoenixInstalled;
    }
    return staffOrDeveloperSettingPredicate;
  }
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/PhoenixLaunchSetting.tsx");

export default toggle;
