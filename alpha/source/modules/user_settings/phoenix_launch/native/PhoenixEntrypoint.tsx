// Module ID: 17328
// Function ID: 17329
// Name: PhoenixEntrypoint
// Dependencies: [16298, 17329, 17332, 17327, 2]
// Exports: useIsPhoenixEntrypointVisible

// Module 17328 (PhoenixEntrypoint)
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 16298 */;
import PhoenixSwitchEntrypointExperimentDefault from "PhoenixSwitchEntrypointExperiment" /* 17327 */;
import PhoenixLaunchState from "PhoenixLaunchState" /* 17329 */;
import PhoenixRolloutExperimentDefault from "PhoenixRolloutExperiment" /* 17332 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/phoenix_launch/native/PhoenixEntrypoint.tsx");

export function useIsPhoenixEntrypointVisible(PhoenixSetting, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const obj = useIsStaffOrDeveloperSettingPredicate;
  let staffOrDeveloperSettingPredicate = obj.useStaffOrDeveloperSettingPredicate();
  const obj2 = PhoenixLaunchState;
  const isPhoenixInstalled = obj2.useIsPhoenixInstalled();
  const obj3 = PhoenixRolloutExperimentDefault;
  const obj4 = { location: PhoenixSetting };
  const tmp3 = null != obj3.useConfig(obj4, { autoTrackExposure: false }).forcedClient;
  const useConfig = PhoenixSwitchEntrypointExperimentDefault.useConfig;
  const obj5 = { location: PhoenixSetting };
  PhoenixSwitchEntrypointExperimentDefault;
  if (flag) {
    flag = !staffOrDeveloperSettingPredicate;
  }
  if (flag) {
    flag = isPhoenixInstalled;
  }
  if (flag) {
    flag = !tmp3;
  }
  let tmp5 = !tmp3;
  const enabled = useConfig(obj5, { autoTrackExposure: flag }).enabled;
  if (!tmp3) {
    tmp5 = isPhoenixInstalled;
  }
  if (tmp5) {
    if (!staffOrDeveloperSettingPredicate) {
      staffOrDeveloperSettingPredicate = enabled;
    }
    tmp5 = staffOrDeveloperSettingPredicate;
  }
  return tmp5;
}
