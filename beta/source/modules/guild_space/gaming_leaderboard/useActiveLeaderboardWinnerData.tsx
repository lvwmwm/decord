// Module ID: 13832
// Function ID: 13833
// Name: useActiveLeaderboardWinnerData
// Dependencies: [4825, 4784, 1088, 504, 6844, 2]
// Exports: default, getActiveLeaderboardLeaderData, getActiveLeaderboardWinnerData, useActiveLeaderboardLeaderData, useHasActiveLeaderboardBadge

// Module 13832 (useActiveLeaderboardWinnerData)
import DurationsDefault from "Durations" /* 1088 */;
import canUseGuildSpace from "canUseGuildSpace" /* 6844 */;
import GuildMemberStore from "GuildMemberStore" /* 4825 */;
import GuildStore from "GuildStore" /* 4784 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let closure_4 = 14 * DurationsDefault.Millis.DAY;
let closure_5 = 8 * DurationsDefault.Millis.DAY;
const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/useActiveLeaderboardWinnerData.tsx");

export default function useActiveLeaderboardWinnerData(arg0, arg1) {
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
};
export function getActiveLeaderboardWinnerData(prop) {
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
export function getActiveLeaderboardLeaderData(prop) {
  let timestamp = arg1;
  if (arg1 === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  let tmp3 = null;
  if (null != prop) {
    const currentLeaderWeek = prop.currentLeaderWeek;
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
      tmp3 = prop;
    }
  }
  return tmp3;
}
export function useActiveLeaderboardLeaderData(guildId, userId) {
  _require = guildId;
  dependencyMap = userId;
  const items = [GuildMemberStore];
  const items1 = [guildId, userId];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != guildId) {
      const member = GuildMemberStore.getMember(tmp, userId);
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
}
export function useHasActiveLeaderboardBadge(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  let obj = require("get initialized");
  const items = [GuildMemberStore, GuildStore];
  const items1 = [arg0, arg1];
  return obj.useStateFromStores(items, () => {
    if (null == closure_0) {
      return false;
    } else {
      const guild = GuildStore.getGuild(tmp);
      if (null != guild) {
        const isGuildSpaceVisible = canUseGuildSpace.isGuildSpaceVisible;
        canUseGuildSpace;
        const obj = canUseGuildSpace;
        if (isGuildSpaceVisible(guild, obj.isGuildSpaceAdmin(guild))) {
          const member = GuildMemberStore.getMember(tmp, closure_1);
          let prop;
          if (member != null) {
            prop = member.gamingLeaderboardData;
          }
          const _Date = Date;
          let tmp8 = null;
          if (null != prop) {
            const winningWeek = prop.winningWeek;
            let flag = false;
            if (null != winningWeek) {
              const _Date2 = Date;
              const parsed = Date.parse(winningWeek);
              const _isNaN = isNaN;
              flag = !isNaN(parsed) && tmp7 - parsed <= tmp9;
              !isNaN(parsed) && tmp7 - parsed <= tmp9;
            }
            tmp8 = null;
            if (flag) {
              tmp8 = prop;
            }
          }
          let tmp13 = null != tmp8;
          if (!tmp13) {
            const _Date3 = Date;
            let tmp15 = null;
            if (null != prop) {
              const currentLeaderWeek = prop.currentLeaderWeek;
              let flag2 = false;
              if (null != currentLeaderWeek) {
                const _Date4 = Date;
                const parsed1 = Date.parse(currentLeaderWeek);
                const _isNaN2 = isNaN;
                flag2 = !isNaN(parsed1) && tmp14 - parsed1 <= tmp16;
                !isNaN(parsed1) && tmp14 - parsed1 <= tmp16;
              }
              tmp15 = null;
              if (flag2) {
                tmp15 = prop;
              }
            }
            tmp13 = null != tmp15;
          }
          return tmp13;
        }
      }
      return false;
    }
  }, items1);
}
