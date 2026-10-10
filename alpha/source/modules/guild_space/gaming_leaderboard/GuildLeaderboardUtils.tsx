// Module ID: 10273
// Function ID: 10274
// Name: GuildLeaderboardUtils
// Dependencies: [32, 10274, 1126, 2472, 4738, 1102, 2]
// Exports: decodeWinnerData, encodeWinnerData, getLeaderboardLeaderBadgeText, getLeaderboardLeaderDetailText, getLeaderboardWinnerBadgeText, getLeaderboardWinnerDetailText

// Module 10273 (GuildLeaderboardUtils)
import DurationsDefault from "Durations" /* 1102 */;
import intl6 from "intl" /* 1126 */;
import _modDef2472 from "module_2472" /* 2472 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4738 */;
import GuildLeaderboardStatCopy from "GuildLeaderboardStatCopy" /* 10274 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/GuildLeaderboardUtils.tsx");

export const LEADERBOARD_WINNER_ROLE_NAME_PREFIX = "leaderboard-winner-badge-sentinel-deliberately-longer-than-the-100-character-maximum-role-name-length:";
export const LEADERBOARD_LEADER_ROLE_NAME_PREFIX = "leaderboard-leader-badge-sentinel-deliberately-longer-than-the-100-character-maximum-role-name-length:";
export const LEADERBOARD_LEADER_EMOJI = "\u{1F947}";
export const getLeaderboardWinnerBadgeText = function getLeaderboardWinnerBadgeText(activeLeaderboardWinnerData) {
  const obj = GuildLeaderboardStatCopy;
  const name = obj.getStatName(activeLeaderboardWinnerData.winningStat).name;
  const winningStreak = activeLeaderboardWinnerData.winningStreak;
  if (null != winningStreak) {
    let formatToPlainStringResult;
    if (winningStreak > 1) {
      const intl2 = tmp(1126).intl;
      const obj2 = { streakCount: winningStreak, statName: name };
      formatToPlainStringResult = intl2.formatToPlainString(tmp(1126).t.owAd83, obj2);
    }
    return formatToPlainStringResult;
  }
  const intl = tmp(1126).intl;
  formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t.So4gmj, { statName: name });
};
export const getLeaderboardLeaderBadgeText = function getLeaderboardLeaderBadgeText(activeLeaderboardLeaderData) {
  const obj = GuildLeaderboardStatCopy;
  const statName = obj.getStatName(activeLeaderboardLeaderData.currentLeaderStat).name;
  const intl = intl6.intl;
  return intl.formatToPlainString(_modDef2472.ZaOAtm, { statName });
};
export const getLeaderboardWinnerDetailText = function getLeaderboardWinnerDetailText(decodeWinnerDataResult) {
  let num = decodeWinnerDataResult.winningStreak;
  if (num == null) {
    num = 0;
  }
  if (num > 1) {
    const intl5 = intl6.intl;
    const obj2 = { streakCount: num };
    return intl5.formatToPlainString(_modDef2472["ZCFDN+"], obj2);
  } else {
    const winningValue = decodeWinnerDataResult.winningValue;
    if (null != winningValue) {
      const _Number = Number;
      if (Number.isFinite(winningValue)) {
        if (winningValue >= 0) {
          const winningStat = decodeWinnerDataResult.winningStat;
          if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED === winningStat) {
            let formatToPlainStringResult;
            const _Math = Math;
            const rounded = Math.floor(winningValue / DurationsDefault.Millis.MINUTE);
            const _Math2 = Math;
            const rounded1 = Math.floor(rounded / DurationsDefault.Minutes.HOUR);
            const result = rounded % DurationsDefault.Minutes.HOUR;
            if (0 === rounded1) {
              const intl4 = tmp12(1126).intl;
              const obj3 = { minutes: result };
              formatToPlainStringResult = intl4.formatToPlainString(tmp3(2472)["/272et"], obj3);
            } else {
              const intl3 = tmp12(1126).intl;
              const time = { hours: rounded1, minutes: result };
              formatToPlainStringResult = intl3.formatToPlainString(tmp3(2472).GC7N5H, time);
            }
            return formatToPlainStringResult;
          } else if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED === winningStat) {
            const intl2 = tmp12(1126).intl;
            const obj4 = { days: winningValue };
            return intl2.formatToPlainString(_modDef2472.IXdbVJ, obj4);
          } else if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED === winningStat) {
            const intl = tmp12(1126).intl;
            const obj = { count: winningValue };
            return intl.formatToPlainString(_modDef2472["/VAMco"], obj);
          } else {
            return null;
          }
        }
      }
    }
    return null;
  }
};
export const getLeaderboardLeaderDetailText = function getLeaderboardLeaderDetailText() {
  const intl = intl6.intl;
  return intl.string(_modDef2472.jCZgxQ);
};
export const encodeWinnerData = function encodeWinnerData(activeLeaderboardWinnerData) {
  let num = activeLeaderboardWinnerData.winningStat;
  if (num == null) {
    num = 0;
  }
  let num2 = activeLeaderboardWinnerData.winningStreak;
  if (num2 == null) {
    num2 = 0;
  }
  let num3 = activeLeaderboardWinnerData.winningWeek;
  if (num3 == null) {
    num3 = 0;
  }
  let str = activeLeaderboardWinnerData.winningValue;
  if (str == null) {
    str = "";
  }
  return "" + num + "|" + num2 + "|" + num3 + "|" + str;
};
export const decodeWinnerData = function decodeWinnerData(str) {
  let parsed;
  let tmp2;
  const tmp = _slicedToArray(str.split("|"), 4);
  const obj = { winningStat: parseInt(tmp[0]), winningStreak: parseInt(tmp[1]), winningWeek: tmp2, winningValue: parsed };
  parsed = null;
  tmp2 = tmp[2];
  if (null != tmp[3]) {
    parsed = null;
    if ("" !== tmp[3]) {
      const _parseInt = parseInt;
      parsed = parseInt(tmp3);
    }
  }
  return obj;
};
