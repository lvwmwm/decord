// Module ID: 10258
// Function ID: 10259
// Name: GuildLeaderboardStatCopy
// Dependencies: [4695, 1126, 2469, 2]
// Exports: getStatName

// Module 10258 (GuildLeaderboardStatCopy)
import _modDef2469 from "module_2469" /* 2469 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4695 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/GuildLeaderboardStatCopy.tsx");

export const getStatName = function getStatName(winningStat) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED === winningStat) {
    const obj2 = { name: intl7.string(_modDef2469["8aHNu0"]), question: intl8.string(_modDef2469["A+HRrQ"]) };
    intl7 = tmp(1126).intl;
    intl8 = tmp(1126).intl;
    return obj2;
  } else if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED === winningStat) {
    const obj3 = { name: intl5.string(_modDef2469.ZwDYuP), question: intl6.string(_modDef2469["9FItmd"]) };
    intl5 = tmp(1126).intl;
    intl6 = tmp(1126).intl;
    return obj3;
  } else if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED === winningStat) {
    const obj4 = { name: intl3.string(_modDef2469.JeFo7p), question: intl4.string(_modDef2469.GXDPol) };
    intl3 = tmp(1126).intl;
    intl4 = tmp(1126).intl;
    return obj4;
  } else {
    const obj = { name: intl.string(_modDef2469.btBTIw), question: intl2.string(_modDef2469.H8RhX0) };
    intl = tmp(1126).intl;
    intl2 = tmp(1126).intl;
    return obj;
  }
};
