// Module ID: 12003
// Function ID: 12004
// Name: MemberActionUtils
// Dependencies: [2124, 6912, 7888, 4693, 558, 576, 6913, 573, 1402, 2]

// Module 12003 (MemberActionUtils)
import GuildMemberConstants from "GuildMemberConstants" /* 4693 */;
import useIsNewMemberDefault from "useIsNewMember" /* 6913 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 6912 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 7888 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useMemberActionsForChannel(arg0, arg1) {
  let closure_0;
  let first;
  let id;
  let tmp10;
  let tmp12;
  let tmp20;
  let tmp7;
  let tmp8;
  _require = arg0;
  importDefault = arg1;
  const obj = require("react");
  const cResult = obj.c(11);
  const tmp4 = useIsNewMemberDefault(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildOnboardingHomeSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return GuildOnboardingHomeSettingsStore.getNewMemberActions(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = require("useStateFromStores");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [GuildOnboardingMemberActionStore];
    cResult[4] = items2;
    tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== arg0) {
    class A {
      constructor() {
        return GuildOnboardingMemberActionStore.getCompletedActions(closure_0);
      }
    }
    cResult[5] = arg0;
    cResult[6] = A;
    tmp12 = A;
  } else {
    class A {
      constructor() {
        return GuildOnboardingMemberActionStore.getCompletedActions(closure_0);
      }
    }
  }
  const tmpResult2 = require("useStateFromStores");
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp10, tmp12);
  if (tmp4) {
    class A {
      constructor() {
        return GuildOnboardingMemberActionStore.getCompletedActions(closure_0);
      }
    }
    if (stateFromStores != null) {
      class A {
        constructor() {
          return GuildOnboardingMemberActionStore.getCompletedActions(closure_0);
        }
      }
    }
    if (undefined == null) {
      class A {
        constructor() {
          return GuildOnboardingMemberActionStore.getCompletedActions(closure_0);
        }
      }
    }
    if (undefined >= 0) {
      class A {
        constructor() {
          return GuildOnboardingMemberActionStore.getCompletedActions(closure_0);
        }
      }
      if (null != stateFromStores) {
        class A {
          constructor() {
            return GuildOnboardingMemberActionStore.getCompletedActions(closure_0);
          }
        }
      }
    }
    let tmp18 = null != tmp17;
    if (tmp18) {
      class A {
        constructor() {
          return GuildOnboardingMemberActionStore.getCompletedActions(closure_0);
        }
      }
      if (stateFromStores1 != null) {
        class A {
          constructor() {
            return GuildOnboardingMemberActionStore.getCompletedActions(closure_0);
          }
        }
      }
      tmp18 = true === tmp19;
    }
    if (cResult[8] === null) {
      class A {
        constructor() {
          return GuildOnboardingMemberActionStore.getCompletedActions(closure_0);
        }
      }
      return tmp20;
    }
    const obj2 = { channelAction: null, completed: tmp18 };
    cResult[8] = null;
    cResult[9] = tmp18;
    cResult[10] = obj2;
    tmp20 = obj2;
  } else {
    let tmp14;
    class A {
      constructor() {
        return GuildOnboardingMemberActionStore.getCompletedActions(closure_0);
      }
    }
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class A {
        constructor() {
          return GuildOnboardingMemberActionStore.getCompletedActions(closure_0);
        }
      }
      cResult[7] = tmp15;
      tmp14 = tmp15;
    } else {
      class A {
        constructor() {
          return GuildOnboardingMemberActionStore.getCompletedActions(closure_0);
        }
      }
    }
    return tmp14;
  }
}) : (function useMemberActionsForChannel(arg0, arg1) {
  let closure_0;
  let id;
  let tmp5;
  _require = arg0;
  importDefault = arg1;
  const items = [GuildOnboardingHomeSettingsStore];
  const items1 = [arg0];
  const tmp = useIsNewMemberDefault(arg0);
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, () => GuildOnboardingHomeSettingsStore.getNewMemberActions(closure_0), items1);
  const items2 = [GuildOnboardingMemberActionStore];
  const obj3 = require("useStateFromStores");
  const stateFromStores1 = obj3.useStateFromStores(items2, () => GuildOnboardingMemberActionStore.getCompletedActions(closure_0));
  if (tmp) {
    let num;
    if (stateFromStores != null) {
      num = stateFromStores.findIndex((channelId) => channelId.channelId === id.id);
    }
    if (num == null) {
      num = 0;
    }
    let tmp4 = null;
    if (num >= 0) {
      tmp4 = null;
      if (null != stateFromStores) {
        tmp4 = stateFromStores[num];
      }
    }
    const obj2 = { channelAction: tmp4, completed: tmp5 };
    tmp5 = null != tmp4;
    if (tmp5) {
      let tmp6;
      if (stateFromStores1 != null) {
        tmp6 = stateFromStores1[tmp4.channelId];
      }
      tmp5 = true === tmp6;
    }
    return obj2;
  } else {
    return {};
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNextMemberAction(arg0, arg1) {
  let closure_0;
  let first;
  let stateFromStores1;
  let tmp6;
  let tmp7;
  let tmp9;
  _require = arg0;
  let closure_1 = arg1;
  const tmp = _require;
  let tmp2 = stateFromStores1;
  const obj = require("react");
  const cResult = obj.c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildOnboardingHomeSettingsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return GuildOnboardingHomeSettingsStore.getNewMemberActions(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(tmp2[7]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildOnboardingMemberActionStore];
    cResult[3] = items1;
    tmp7 = items1;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn2 = function b() {
      return GuildOnboardingMemberActionStore.getCompletedActions(closure_0);
    };
    cResult[4] = arg0;
    cResult[5] = fn2;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[5];
  }
  const tmpResult2 = tmp(tmp2[7]);
  stateFromStores1 = tmpResult2.useStateFromStores(tmp7, tmp9);
  if (cResult[6] === stateFromStores1) {
    if (cResult[7] === arg1) {
      let tmp11;
      if (cResult[8] === stateFromStores) {
        tmp11 = cResult[9];
      }
      return tmp11;
    }
  }
  let found;
  if (stateFromStores != null) {
    found = stateFromStores.find((channelId) => {
      let tmp2;
      if (stateFromStores1 != null) {
        tmp2 = tmp[channelId.channelId];
      }
      return true !== tmp2 && channelId.channelId !== closure_1;
    });
  }
  cResult[6] = stateFromStores1;
  cResult[7] = arg1;
  cResult[8] = stateFromStores;
  cResult[9] = found;
  tmp11 = found;
}) : (function useNextMemberAction(arg0, arg1) {
  let closure_0;
  let closure_2;
  _require = arg0;
  let closure_1 = arg1;
  const items = [GuildOnboardingHomeSettingsStore];
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, () => GuildOnboardingHomeSettingsStore.getNewMemberActions(closure_0));
  const items1 = [GuildOnboardingMemberActionStore];
  const obj2 = require("useStateFromStores");
  dependencyMap = obj2.useStateFromStores(items1, () => GuildOnboardingMemberActionStore.getCompletedActions(closure_0));
  let found;
  if (stateFromStores != null) {
    found = stateFromStores.find((channelId) => {
      let tmp2;
      if (closure_2 != null) {
        tmp2 = tmp[channelId.channelId];
      }
      return true !== tmp2 && channelId.channelId !== closure_1;
    });
  }
  return found;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAllActionsCompleted(arg0) {
  let closure_0;
  let first;
  let tmp6;
  let tmp8;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      return GuildMemberStore.getSelfMember(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("useStateFromStores");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  let num4;
  if (stateFromStores != null) {
    num4 = stateFromStores.flags;
  }
  if (num4 == null) {
    num4 = 0;
  }
  if (cResult[3] !== num4) {
    const tmpResult2 = require("FlagUtils");
    const hasFlagResult = tmpResult2.hasFlag(num4, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
    cResult[3] = num4;
    cResult[4] = hasFlagResult;
    tmp8 = hasFlagResult;
  } else {
    tmp8 = cResult[4];
  }
  return tmp8;
}) : (function useAllActionsCompleted(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildMemberStore];
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, () => GuildMemberStore.getSelfMember(closure_0));
  let num;
  const hasFlag = require("FlagUtils").hasFlag;
  require("FlagUtils");
  if (stateFromStores != null) {
    num = stateFromStores.flags;
  }
  if (num == null) {
    num = 0;
  }
  return hasFlag(num, GuildMemberFlags.COMPLETED_HOME_ACTIONS);
});
const result = size.fileFinishedImporting("modules/guild_onboarding_home/MemberActionUtils.tsx");

export const useMemberActionsForChannel = tmp2;
export const useNextMemberAction = tmp3;
export const useAllActionsCompleted = tmp4;
