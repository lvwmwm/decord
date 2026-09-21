// Module ID: 12818
// Function ID: 12819
// Name: HubProgressBarUtils
// Dependencies: [19, 1224, 5500, 10066, 1078, 558, 568, 504, 1190, 1119, 1374, 1389, 2]
// Exports: getHubProgressTitleForStep, getNextHubProgressStep

// Module 12818 (HubProgressBarUtils)
import initialize from "initialize" /* 504 */;
import c from "c" /* 568 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1190 */;
import FlagUtils from "FlagUtils" /* 1389 */;
import noop from "module_19" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1224 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5500 */;

require = fn;
function convertHubProgressFlagSetToSet(stateFromStores) {
  const set = new Set();
  for (const item10013 of HUB_PROGRESS_STEP_ORDER) {
    let tmp = item10013;
    let obj2 = FlagUtils;
    if (obj2.hasFlag(arg0, item10013)) {
      let addResult = set.add(tmp);
    }
    continue;
  }
  return set;
}
const HUB_PROGRESS_STEP_ORDER = fn(10066).HUB_PROGRESS_STEP_ORDER;
const PlatformTypes = fn(1078).PlatformTypes;
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConnectedAccountsStore];
    const fn = function s() {
      return null != localAccount.getLocalAccount(constants.CONTACTS);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [ConnectedAccountsStore];
  return initialize.useStateFromStores(items, () => null != localAccount.getLocalAccount(constants.CONTACTS));
});
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserSettingsProtoStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      let num = 0;
      if (null != closure_0) {
        const guilds = UserSettingsProtoStore.settings.guilds;
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
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] !== stateFromStores) {
    const tmp10 = convertHubProgressFlagSetToSet(stateFromStores);
    cResult[3] = stateFromStores;
    cResult[4] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[4];
  }
  return tmp8;
}) : ((arg0) => {
  _require = arg0;
  const items = [UserSettingsProtoStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    let num = 0;
    if (null != closure_0) {
      const guilds = UserSettingsProtoStore.settings.guilds;
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
  return noop.useMemo(() => convertHubProgressFlagSetToSet(stateFromStores), items1);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/HubProgressBarUtils.tsx");

export const getHubProgressTitleForStep = function getHubProgressTitleForStep(nextHubProgressStep) {
  if (preloaded_user_settings.HubProgressStep.JOIN_GUILD === nextHubProgressStep) {
    const intl3 = tmp(1119).intl;
    return intl3.string(tmp(1119).t.iNR25n);
  } else if (tmp(1190).HubProgressStep.INVITE_USER === nextHubProgressStep) {
    const intl2 = tmp(1119).intl;
    return intl2.string(tmp(1119).t["3NlTYU"]);
  } else if (tmp(1190).HubProgressStep.CONTACT_SYNC === nextHubProgressStep) {
    const intl = tmp(1119).intl;
    return intl.string(tmp(1119).t.HFvFte);
  } else if (tmp(1190).HubProgressStep.NO_PROGRESS === nextHubProgressStep) {
    return null;
  } else {
    tmp(1374).assertNever(nextHubProgressStep);
  }
};
export const useHubProgressBarCompletedSteps = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  const cResult = c.c(2);
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const tmp4Result = closure_9(id);
  if (!closure_7()) {
    return tmp4Result;
  } else if (cResult[0] !== tmp4Result) {
    const _Set = Set;
    const set = new Set(tmp4Result);
    set.add(preloaded_user_settings.HubProgressStep.CONTACT_SYNC);
    cResult[0] = tmp4Result;
    cResult[1] = set;
  }
}) : ((id) => {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const tmpResult = closure_9(id);
  closure_0 = tmpResult;
  const tmp4 = closure_7();
  closure_1 = tmp4;
  const items = [tmpResult, tmp4];
  return noop.useMemo(() => {
    if (closure_1) {
      const _Set = Set;
      const set = new Set(closure_0);
      set.add(preloaded_user_settings.HubProgressStep.CONTACT_SYNC);
      return set;
    } else {
      return closure_0;
    }
  }, items);
});
export const getNextHubProgressStep = function getNextHubProgressStep(hubProgressBarCompletedSteps) {
  for (const item10007 of HUB_PROGRESS_STEP_ORDER) {
    let tmp = item10007;
    if (arg0.has(item10007)) {
      continue;
    } else {
      obj.return();
      return tmp;
    }
  }
  return null;
};
