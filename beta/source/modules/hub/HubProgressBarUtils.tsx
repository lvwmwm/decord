// Module ID: 12166
// Function ID: 12167
// Name: HubProgressBarUtils
// Dependencies: [19, 1220, 5593, 9286, 1074, 504, 1186, 1115, 1370, 1385, 2]
// Exports: getHubProgressTitleForStep, getNextHubProgressStep, useHubProgressBarCompletedSteps

// Module 12166 (HubProgressBarUtils)
import Constants from "Constants" /* 1074 */;
import intl4 from "intl" /* 1115 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import HubProgressBarConstants from "HubProgressBarConstants" /* 9286 */;
import react from "react" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5593 */;
import size from "module_2" /* 2 */;

let set;

const HUB_PROGRESS_STEP_ORDER = HubProgressBarConstants.HUB_PROGRESS_STEP_ORDER;
const PlatformTypes = Constants.PlatformTypes;
const result = size.fileFinishedImporting("modules/hub/HubProgressBarUtils.tsx");

export const getHubProgressTitleForStep = function getHubProgressTitleForStep(nextHubProgressStep) {
  if (preloaded_user_settings.HubProgressStep.JOIN_GUILD === nextHubProgressStep) {
    const intl3 = tmp(1115).intl;
    return intl3.string(intl4.t.iNR25n);
  } else if (preloaded_user_settings.HubProgressStep.INVITE_USER === nextHubProgressStep) {
    const intl2 = tmp(1115).intl;
    return intl2.string(intl4.t["3NlTYU"]);
  } else if (preloaded_user_settings.HubProgressStep.CONTACT_SYNC === nextHubProgressStep) {
    const intl = tmp(1115).intl;
    return intl.string(intl4.t.HFvFte);
  } else if (preloaded_user_settings.HubProgressStep.NO_PROGRESS === nextHubProgressStep) {
    return null;
  } else {
    const tmpResult = GlobalUtils;
    tmpResult.assertNever(nextHubProgressStep);
  }
};
export const useHubProgressBarCompletedSteps = function useHubProgressBarCompletedSteps(guild) {
  let localAccount;
  let memo;
  let settings;
  let stateFromStores1;
  let id;
  if (guild != null) {
    id = guild.id;
  }
  const items = [UserSettingsProtoStore];
  const obj = memo(stateFromStores1[5]);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let num = 0;
    if (null != id) {
      const guilds = settings.settings.guilds;
      let num2;
      if (guilds != null) {
        if (guilds.guilds[tmp] != null) {
          num2 = tmp3.hubProgress;
        }
      }
      if (num2 == null) {
        num2 = 0;
      }
      num = num2;
    }
    return num;
  });
  const items1 = [stateFromStores];
  memo = react.useMemo(() => {
    function convertHubProgressFlagSetToSet(stateFromStores) {
      set = new Set();
      for (const item10013 of closure_1_5) {
        let tmp = item10013;
        let obj2 = id(stateFromStores[9]);
        if (obj2.hasFlag(stateFromStores, item10013)) {
          let addResult = set.add(tmp);
        }
        continue;
      }
      return set;
    }
    return convertHubProgressFlagSetToSet(stateFromStores);
  }, items1);
  let obj2 = memo(stateFromStores1[5]);
  const items2 = [ConnectedAccountsStore];
  stateFromStores1 = obj2.useStateFromStores(items2, () => null != localAccount.getLocalAccount(constants.CONTACTS));
  const items3 = [memo, stateFromStores1];
  return react.useMemo(function() {
    const tmp = stateFromStores1;
    if (tmp) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(memo);
      set.add(preloaded_user_settings.HubProgressStep.CONTACT_SYNC);
      return set;
    } else {
      return memo;
    }
  }, items3);
};
export const getNextHubProgressStep = function getNextHubProgressStep(hubProgressBarCompletedSteps) {
  for (const item10007 of HUB_PROGRESS_STEP_ORDER) {
    let tmp = item10007;
    if (hubProgressBarCompletedSteps.has(item10007)) {
      continue;
    } else {
      obj.return();
      return tmp;
    }
  }
  return null;
};
