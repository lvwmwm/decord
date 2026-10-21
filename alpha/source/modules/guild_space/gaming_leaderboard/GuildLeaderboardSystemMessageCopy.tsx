// Module ID: 8332
// Function ID: 8333
// Name: GuildLeaderboardSystemMessageCopy
// Dependencies: [4889, 2440, 1104, 1128, 2]
// Exports: getLeaderboardSystemMessage, getMobileLeaderboardSystemMessage, resolveGuildSpaceLeaderboardMessage

// Module 8332 (GuildLeaderboardSystemMessageCopy)
import DurationsDefault from "Durations" /* 1104 */;
import intl3 from "intl" /* 1128 */;
import _modDef2440 from "module_2440" /* 2440 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4889 */;
import size from "module_2" /* 2 */;

function getLeaderboardSystemMessageValues(secondaryValue, arg1) {
  let formatToPlainStringResult;
  const bound = Math.max(secondaryValue.secondaryValue, 0);
  const floorResult = floor(bound / DurationsDefault.Millis.MINUTE);
  const rounded = Math.floor(floorResult / DurationsDefault.Minutes.HOUR);
  const result = floorResult % DurationsDefault.Minutes.HOUR;
  obj = { value: secondaryValue.value, gameTime: formatToPlainStringResult };
  const merged = Object.assign(arg1);
  if (0 === rounded) {
    const intl2 = intl3.intl;
    const obj2 = { minutes: result };
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(2440)["5AjG8l"], obj2);
  } else {
    const intl = intl3.intl;
    const time = { hours: rounded, minutes: result };
    formatToPlainStringResult = intl.formatToPlainString(tmp2(2440)["Sa+h68"], time);
  }
  return obj;
}
let obj = {};
let obj2 = {};
const COMPETITION_ENDED = GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.COMPETITION_ENDED;
obj2[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2440.unVTUQ;
obj2[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2440["/JyaTi"];
obj2[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2440["5D7LjH"];
obj[COMPETITION_ENDED] = obj2;
const obj3 = {};
const COMPETITION_STARTED = GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.COMPETITION_STARTED;
obj3[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2440.ptD18B;
obj3[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2440["2IbyWO"];
obj3[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2440.Y6K3qc;
obj[COMPETITION_STARTED] = obj3;
const obj4 = {};
const LEADER_CHANGED = GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.LEADER_CHANGED;
obj4[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2440["8MO3bp"];
obj4[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2440["+aHNgn"];
obj4[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2440.CHYFwK;
obj[LEADER_CHANGED] = obj4;
const obj5 = {};
const obj6 = {};
const COMPETITION_ENDED2 = GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.COMPETITION_ENDED;
obj6[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2440.Wwu6IA;
obj6[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2440.f6TxHV;
obj6[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2440.mhO0Bz;
obj5[COMPETITION_ENDED2] = obj6;
const obj7 = {};
const COMPETITION_STARTED2 = GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.COMPETITION_STARTED;
obj7[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2440.T7CcFq;
obj7[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2440.jUJ7IO;
obj7[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2440.PLdF3A;
obj5[COMPETITION_STARTED2] = obj7;
const obj8 = {};
const LEADER_CHANGED2 = GuildLeaderboardTypes.GuildSpaceLeaderboardEvent.LEADER_CHANGED;
obj8[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED] = _modDef2440.fVm1Zn;
obj8[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED] = _modDef2440.exTWBN;
obj8[GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED] = _modDef2440.dX9B32;
obj5[LEADER_CHANGED2] = obj8;
let result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/GuildLeaderboardSystemMessageCopy.tsx");

export const resolveGuildSpaceLeaderboardMessage = function resolveGuildSpaceLeaderboardMessage(result1, user, user2) {
  let tmp3;
  let tmp = null;
  if (null != result1) {
    let tmp2 = user;
    obj = { data: result1, subject: tmp2, previousLeader: tmp3 };
    if (user == null) {
      tmp2 = null;
    }
    tmp3 = user2;
    if (user2 == null) {
      tmp3 = null;
    }
    tmp = obj;
  }
  return tmp;
};
export const getLeaderboardSystemMessage = function getLeaderboardSystemMessage(data, arg1) {
  let event;
  let stat;
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
    tmp4 = { message: obj[tmp3.event][tmp3.stat], values: getLeaderboardSystemMessageValues(data, arg1) };
    const obj2 = { message: obj[tmp3.event][tmp3.stat], values: getLeaderboardSystemMessageValues(data, arg1) };
  }
  return tmp4;
};
export const getMobileLeaderboardSystemMessage = function getMobileLeaderboardSystemMessage(data, arg1) {
  let event;
  let stat;
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
    tmp4 = { message: obj5[tmp3.event][tmp3.stat], values: getLeaderboardSystemMessageValues(data, arg1) };
    const obj2 = { message: obj5[tmp3.event][tmp3.stat], values: getLeaderboardSystemMessageValues(data, arg1) };
  }
  return tmp4;
};
