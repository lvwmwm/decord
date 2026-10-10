// Module ID: 10272
// Function ID: 10273
// Name: useActiveLeaderboardWinnerData
// Dependencies: [2125, 1102, 558, 576, 504, 2]
// Exports: getActiveLeaderboardLeaderData, getActiveLeaderboardWinnerData

// Module 10272 (useActiveLeaderboardWinnerData)
import DurationsDefault from "Durations" /* 1102 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let closure_3 = 14 * DurationsDefault.Millis.DAY;
let closure_4 = 8 * DurationsDefault.Millis.DAY;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useActiveLeaderboardWinnerData(arg0, arg1) {
  let closure_0;
  let closure_1;
  let first;
  _require = arg0;
  dependencyMap = arg1;
  const tmp = _require;
  let tmp2 = dependencyMap;
  const obj = require("react");
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp6;
    let tmp7;
    if (cResult[2] === arg1) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp6, tmp7);
  }
  const fn = function l() {
    let tmp2 = null;
    if (null != closure_0) {
      const member = GuildMemberStore.getMember(tmp, closure_1);
      let prop;
      if (member != null) {
        prop = member.gamingLeaderboardData;
      }
      const _Date = Date;
      let tmp9 = null;
      if (null != prop) {
        const winningWeek = prop.winningWeek;
        let flag = false;
        if (null != winningWeek) {
          const _Date2 = Date;
          const parsed = Date.parse(winningWeek);
          const _isNaN = isNaN;
          flag = !isNaN(parsed) && tmp8 - parsed <= tmp10;
          !isNaN(parsed) && tmp8 - parsed <= tmp10;
        }
        tmp9 = null;
        if (flag) {
          tmp9 = prop;
        }
      }
      tmp2 = tmp9;
    }
    return tmp2;
  };
  const items1 = [arg0, arg1];
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
}) : (function useActiveLeaderboardWinnerData(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  const items = [GuildMemberStore];
  const items1 = [arg0, arg1];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != closure_0) {
      const member = GuildMemberStore.getMember(tmp, closure_1);
      let prop;
      if (member != null) {
        prop = member.gamingLeaderboardData;
      }
      const _Date = Date;
      let tmp9 = null;
      if (null != prop) {
        const winningWeek = prop.winningWeek;
        let flag = false;
        if (null != winningWeek) {
          const _Date2 = Date;
          const parsed = Date.parse(winningWeek);
          const _isNaN = isNaN;
          flag = !isNaN(parsed) && tmp8 - parsed <= tmp10;
          !isNaN(parsed) && tmp8 - parsed <= tmp10;
        }
        tmp9 = null;
        if (flag) {
          tmp9 = prop;
        }
      }
      tmp2 = tmp9;
    }
    return tmp2;
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useActiveLeaderboardLeaderData(arg0, arg1) {
  let closure_0;
  let closure_1;
  let first;
  _require = arg0;
  dependencyMap = arg1;
  const tmp = _require;
  let tmp2 = dependencyMap;
  const obj = require("react");
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildMemberStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp6;
    let tmp7;
    if (cResult[2] === arg1) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp6, tmp7);
  }
  const fn = function l() {
    let tmp2 = null;
    if (null != closure_0) {
      const member = GuildMemberStore.getMember(tmp, closure_1);
      let prop;
      if (member != null) {
        prop = member.gamingLeaderboardData;
      }
      const _Date = Date;
      let tmp9 = null;
      if (null != prop) {
        const currentLeaderWeek = prop.currentLeaderWeek;
        let flag = false;
        if (null != currentLeaderWeek) {
          const _Date2 = Date;
          const parsed = Date.parse(currentLeaderWeek);
          const _isNaN = isNaN;
          flag = !isNaN(parsed) && tmp8 - parsed <= tmp10;
          !isNaN(parsed) && tmp8 - parsed <= tmp10;
        }
        tmp9 = null;
        if (flag) {
          tmp9 = prop;
        }
      }
      tmp2 = tmp9;
    }
    return tmp2;
  };
  const items1 = [arg0, arg1];
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
}) : (function useActiveLeaderboardLeaderData(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  const items = [GuildMemberStore];
  const items1 = [arg0, arg1];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != closure_0) {
      const member = GuildMemberStore.getMember(tmp, closure_1);
      let prop;
      if (member != null) {
        prop = member.gamingLeaderboardData;
      }
      const _Date = Date;
      let tmp9 = null;
      if (null != prop) {
        const currentLeaderWeek = prop.currentLeaderWeek;
        let flag = false;
        if (null != currentLeaderWeek) {
          const _Date2 = Date;
          const parsed = Date.parse(currentLeaderWeek);
          const _isNaN = isNaN;
          flag = !isNaN(parsed) && tmp8 - parsed <= tmp10;
          !isNaN(parsed) && tmp8 - parsed <= tmp10;
        }
        tmp9 = null;
        if (flag) {
          tmp9 = prop;
        }
      }
      tmp2 = tmp9;
    }
    return tmp2;
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasActiveLeaderboardBadge(arg0, arg1) {
  let closure_0;
  let closure_1;
  let first;
  _require = arg0;
  dependencyMap = arg1;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp5 = GuildMemberStore;
    const items = [GuildMemberStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp6;
    let tmp7;
    if (cResult[2] === arg1) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStores(first, tmp6, tmp7);
  }
  const fn = function l() {
    if (null == closure_0) {
      return false;
    } else {
      const member = GuildMemberStore.getMember(tmp, closure_1);
      let prop;
      if (member != null) {
        prop = member.gamingLeaderboardData;
      }
      const _Date = Date;
      let tmp5 = null;
      if (null != prop) {
        const winningWeek = prop.winningWeek;
        let flag = false;
        if (null != winningWeek) {
          const _Date2 = Date;
          const parsed = Date.parse(winningWeek);
          const _isNaN = isNaN;
          flag = !isNaN(parsed) && tmp4 - parsed <= tmp6;
          !isNaN(parsed) && tmp4 - parsed <= tmp6;
        }
        tmp5 = null;
        if (flag) {
          tmp5 = prop;
        }
      }
      let tmp10 = null != tmp5;
      if (!tmp10) {
        const _Date3 = Date;
        let tmp12 = null;
        if (null != prop) {
          const currentLeaderWeek = prop.currentLeaderWeek;
          let flag2 = false;
          if (null != currentLeaderWeek) {
            const _Date4 = Date;
            const parsed1 = Date.parse(currentLeaderWeek);
            const _isNaN2 = isNaN;
            flag2 = !isNaN(parsed1) && tmp11 - parsed1 <= tmp13;
            !isNaN(parsed1) && tmp11 - parsed1 <= tmp13;
          }
          tmp12 = null;
          if (flag2) {
            tmp12 = prop;
          }
        }
        tmp10 = null != tmp12;
      }
      return tmp10;
    }
  };
  const items1 = [arg0, arg1];
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
}) : (function useHasActiveLeaderboardBadge(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  const items = [GuildMemberStore];
  const items1 = [arg0, arg1];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    if (null == closure_0) {
      return false;
    } else {
      const member = GuildMemberStore.getMember(tmp, closure_1);
      let prop;
      if (member != null) {
        prop = member.gamingLeaderboardData;
      }
      const _Date = Date;
      let tmp5 = null;
      if (null != prop) {
        const winningWeek = prop.winningWeek;
        let flag = false;
        if (null != winningWeek) {
          const _Date2 = Date;
          const parsed = Date.parse(winningWeek);
          const _isNaN = isNaN;
          flag = !isNaN(parsed) && tmp4 - parsed <= tmp6;
          !isNaN(parsed) && tmp4 - parsed <= tmp6;
        }
        tmp5 = null;
        if (flag) {
          tmp5 = prop;
        }
      }
      let tmp10 = null != tmp5;
      if (!tmp10) {
        const _Date3 = Date;
        let tmp12 = null;
        if (null != prop) {
          const currentLeaderWeek = prop.currentLeaderWeek;
          let flag2 = false;
          if (null != currentLeaderWeek) {
            const _Date4 = Date;
            const parsed1 = Date.parse(currentLeaderWeek);
            const _isNaN2 = isNaN;
            flag2 = !isNaN(parsed1) && tmp11 - parsed1 <= tmp13;
            !isNaN(parsed1) && tmp11 - parsed1 <= tmp13;
          }
          tmp12 = null;
          if (flag2) {
            tmp12 = prop;
          }
        }
        tmp10 = null != tmp12;
      }
      return tmp10;
    }
  }, items1);
});
function getActiveLeaderboardWinnerData(prop) {
  let timestamp = arg1;
  if (arg1 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  let tmp3 = null;
  if (null != prop) {
    const winningWeek = prop.winningWeek;
    let flag = false;
    if (null != winningWeek) {
      const _Date2 = Date;
      const parsed = Date.parse(winningWeek);
      const _isNaN = isNaN;
      flag = !isNaN(parsed) && timestamp - parsed <= tmp4;
      !isNaN(parsed) && timestamp - parsed <= tmp4;
    }
    tmp3 = null;
    if (flag) {
      tmp3 = prop;
    }
  }
  return tmp3;
}
function getActiveLeaderboardLeaderData(prop1) {
  let timestamp = arg1;
  if (arg1 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  let tmp3 = null;
  if (null != prop1) {
    const currentLeaderWeek = prop1.currentLeaderWeek;
    let flag = false;
    if (null != currentLeaderWeek) {
      const _Date2 = Date;
      const parsed = Date.parse(currentLeaderWeek);
      const _isNaN = isNaN;
      flag = !isNaN(parsed) && timestamp - parsed <= tmp4;
      !isNaN(parsed) && timestamp - parsed <= tmp4;
    }
    tmp3 = null;
    if (flag) {
      tmp3 = prop1;
    }
  }
  return tmp3;
}
const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/useActiveLeaderboardWinnerData.tsx");

export default tmp2;
export { getActiveLeaderboardWinnerData };
export { getActiveLeaderboardLeaderData };
export const useActiveLeaderboardLeaderData = tmp3;
export const useHasActiveLeaderboardBadge = tmp4;
