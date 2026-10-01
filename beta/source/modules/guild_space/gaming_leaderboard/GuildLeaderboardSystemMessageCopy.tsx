// Module ID: 7439
// Function ID: 7440
// Name: GuildLeaderboardSystemMessageCopy
// Dependencies: [4457, 2419, 1091, 1115, 2]
// Exports: getLeaderboardSystemMessage, getMobileLeaderboardSystemMessage, resolveGuildSpaceLeaderboardMessage

// Module 7439 (GuildLeaderboardSystemMessageCopy)
import DurationsDefault from "Durations" /* 1091 */;
import _modDef2419 from "module_2419" /* 2419 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4457 */;
import size from "module_2" /* 2 */;

let obj = {};
let obj2 = {};
const COMPETITION_ENDED = GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.COMPETITION_ENDED;
obj2[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2419.unVTUQ;
obj2[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2419["/JyaTi"];
obj2[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2419["5D7LjH"];
obj[COMPETITION_ENDED] = obj2;
let obj3 = {};
const COMPETITION_STARTED = GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.COMPETITION_STARTED;
obj3[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2419.ptD18B;
obj3[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2419["2IbyWO"];
obj3[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2419.Y6K3qc;
obj[COMPETITION_STARTED] = obj3;
const obj4 = {};
const LEADER_CHANGED = GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.LEADER_CHANGED;
obj4[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2419["8MO3bp"];
obj4[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2419["+aHNgn"];
obj4[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2419.CHYFwK;
obj[LEADER_CHANGED] = obj4;
const obj5 = {};
const obj6 = {};
const COMPETITION_ENDED2 = GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.COMPETITION_ENDED;
obj6[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2419.Wwu6IA;
obj6[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2419.f6TxHV;
obj6[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2419.mhO0Bz;
obj5[COMPETITION_ENDED2] = obj6;
const obj7 = {};
const COMPETITION_STARTED2 = GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.COMPETITION_STARTED;
obj7[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2419.T7CcFq;
obj7[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2419.jUJ7IO;
obj7[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2419.PLdF3A;
obj5[COMPETITION_STARTED2] = obj7;
const obj8 = {};
const LEADER_CHANGED2 = GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.LEADER_CHANGED;
obj8[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2419.fVm1Zn;
obj8[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2419.exTWBN;
obj8[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2419.dX9B32;
obj5[LEADER_CHANGED2] = obj8;
const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/GuildLeaderboardSystemMessageCopy.tsx");

export const resolveGuildSpaceLeaderboardMessage = function resolveGuildSpaceLeaderboardMessage(event, user, user2) {
  if (null != event) {
    if (null != user) {
      let tmp5;
      let tmp2 = user2;
      if (user2 == null) {
        tmp2 = null;
      }
      if (event.event !== GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.LEADER_CHANGED) {
        tmp5 = { data: event, subject: user, previousLeader: tmp2 };
        obj = { data: event, subject: user, previousLeader: tmp2 };
      } else {
        tmp5 = null;
      }
      return tmp5;
    }
  }
  return null;
};
export const getLeaderboardSystemMessage = function getLeaderboardSystemMessage(data, arg1) {
  let event;
  let formatToPlainString;
  let obj3;
  let prop;
  let stat;
  let time;
  ({ event, stat } = data);
  let tmp3 = null;
  if (event !== GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.UNSPECIFIED) {
    tmp3 = null;
    if (stat !== GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNSPECIFIED) {
      obj = { event, stat };
      tmp3 = obj;
    }
  }
  let tmp4 = null;
  if (null != tmp3) {
    const _Math = Math;
    const _Math2 = Math;
    const obj2 = { message: obj[tmp3.event][tmp3.stat], values: obj3 };
    const bound = Math.max(data.value, 0);
    const floorResult = floor(bound / DurationsDefault.Millis.MINUTE);
    obj3 = { value: data.value, gameTime: formatToPlainString(prop, time) };
    const merged = Object.assign(arg1);
    const intl = tmp(1115).intl;
    formatToPlainString = intl.formatToPlainString;
    time = { hours: Math.floor(floorResult / DurationsDefault.Minutes.HOUR), minutes: floorResult % DurationsDefault.Minutes.HOUR };
    const _Math3 = Math;
    prop = _modDef2419["Sa+h68"];
    tmp4 = obj2;
  }
  return tmp4;
};
export const getMobileLeaderboardSystemMessage = function getMobileLeaderboardSystemMessage(data, arg1) {
  let event;
  let formatToPlainString;
  let obj3;
  let prop;
  let stat;
  let time;
  ({ event, stat } = data);
  let tmp3 = null;
  if (event !== GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.UNSPECIFIED) {
    tmp3 = null;
    if (stat !== GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNSPECIFIED) {
      tmp3 = { event, stat };
      obj = { event, stat };
    }
  }
  let tmp4 = null;
  if (null != tmp3) {
    const _Math = Math;
    const _Math2 = Math;
    const obj2 = { message: obj5[tmp3.event][tmp3.stat], values: obj3 };
    const bound = Math.max(data.value, 0);
    const floorResult = floor(bound / DurationsDefault.Millis.MINUTE);
    obj3 = { value: data.value, gameTime: formatToPlainString(prop, time) };
    const merged = Object.assign(arg1);
    const intl = tmp(1115).intl;
    formatToPlainString = intl.formatToPlainString;
    time = { hours: Math.floor(floorResult / DurationsDefault.Minutes.HOUR), minutes: floorResult % DurationsDefault.Minutes.HOUR };
    const _Math3 = Math;
    prop = _modDef2419["Sa+h68"];
    tmp4 = obj2;
  }
  return tmp4;
};
