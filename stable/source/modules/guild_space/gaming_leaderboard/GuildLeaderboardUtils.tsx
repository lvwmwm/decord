// Module ID: 11041
// Function ID: 11042
// Name: GuildLeaderboardUtils
// Dependencies: [32, 11042, 1114, 2]
// Exports: decodeWinnerData, encodeWinnerData, getLeaderboardWinnerBadgeText

// Module 11041 (GuildLeaderboardUtils)
import GuildLeaderboardStatCopy from "GuildLeaderboardStatCopy" /* 11042 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/GuildLeaderboardUtils.tsx");

export const LEADERBOARD_WINNER_ROLE_NAME_PREFIX = "leaderboard-winner-badge-sentinel-deliberately-longer-than-the-100-character-maximum-role-name-length:";
export const getLeaderboardWinnerBadgeText = function getLeaderboardWinnerBadgeText(prop) {
  const name = GuildLeaderboardStatCopy.getStatName(prop.winningStat).name;
  const winningStreak = prop.winningStreak;
  if (null != winningStreak) {
    if (winningStreak > 1) {
      const intl2 = tmp(1114).intl;
      const obj2 = { streakCount: winningStreak, statName: name };
      let formatToPlainStringResult = intl2.formatToPlainString(tmp(1114).t.owAd83, obj2);
    }
    return formatToPlainStringResult;
  }
  const intl = tmp(1114).intl;
  formatToPlainStringResult = intl.formatToPlainString(tmp(1114).t.So4gmj, { statName: name });
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
  return { winningStat: parseInt(tmp[0]), winningStreak: parseInt(tmp[1]), winningWeek: tmp[2] };
};
