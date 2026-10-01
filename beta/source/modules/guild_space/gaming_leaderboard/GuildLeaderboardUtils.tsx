// Module ID: 10367
// Function ID: 10368
// Name: GuildLeaderboardUtils
// Dependencies: [32, 10368, 1115, 2]
// Exports: decodeWinnerData, encodeWinnerData, getLeaderboardWinnerBadgeText

// Module 10367 (GuildLeaderboardUtils)
import GuildLeaderboardStatCopy from "GuildLeaderboardStatCopy" /* 10368 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/GuildLeaderboardUtils.tsx");

export const LEADERBOARD_WINNER_ROLE_NAME_PREFIX = "leaderboard-winner-badge-sentinel-deliberately-longer-than-the-100-character-maximum-role-name-length:";
export const getLeaderboardWinnerBadgeText = function getLeaderboardWinnerBadgeText(prop) {
  const obj = GuildLeaderboardStatCopy;
  const name = obj.getStatName(prop.winningStat).name;
  const winningStreak = prop.winningStreak;
  if (null != winningStreak) {
    let formatToPlainStringResult;
    if (winningStreak > 1) {
      const intl2 = tmp(1115).intl;
      const obj2 = { streakCount: winningStreak, statName: name };
      formatToPlainStringResult = intl2.formatToPlainString(tmp(1115).t.owAd83, obj2);
    }
    return formatToPlainStringResult;
  }
  const intl = tmp(1115).intl;
  formatToPlainStringResult = intl.formatToPlainString(tmp(1115).t.So4gmj, { statName: name });
};
export const encodeWinnerData = function encodeWinnerData(prop) {
  let num = prop.winningStat;
  if (num == null) {
    num = 0;
  }
  let num2 = prop.winningStreak;
  if (num2 == null) {
    num2 = 0;
  }
  let num3 = prop.winningWeek;
  if (num3 == null) {
    num3 = 0;
  }
  return "" + num + "|" + num2 + "|" + num3;
};
export const decodeWinnerData = function decodeWinnerData(str) {
  const tmp = _slicedToArray(str.split("|"), 3);
  const obj = { winningStat: parseInt(tmp[0]), winningStreak: parseInt(tmp[1]), winningWeek: tmp2 };
  return obj;
};
