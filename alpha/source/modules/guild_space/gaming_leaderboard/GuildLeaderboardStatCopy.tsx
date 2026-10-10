// Module ID: 10274
// Function ID: 10275
// Name: GuildLeaderboardStatCopy
// Dependencies: [4738, 1126, 2472, 2]
// Exports: getStatName

// Module 10274 (GuildLeaderboardStatCopy)
import _modDef2472 from "module_2472" /* 2472 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4738 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/GuildLeaderboardStatCopy.tsx");

export const getStatName = function getStatName(currentLeaderStat) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED === currentLeaderStat) {
    const obj2 = { name: intl7.string(_modDef2472["8aHNu0"]), question: intl8.string(_modDef2472["A+HRrQ"]) };
    intl7 = tmp(1126).intl;
    intl8 = tmp(1126).intl;
    return obj2;
  } else if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED === currentLeaderStat) {
    const obj3 = { name: intl5.string(_modDef2472.ZwDYuP), question: intl6.string(_modDef2472["9FItmd"]) };
    intl5 = tmp(1126).intl;
    intl6 = tmp(1126).intl;
    return obj3;
  } else if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED === currentLeaderStat) {
    const obj4 = { name: intl3.string(_modDef2472.JeFo7p), question: intl4.string(_modDef2472.GXDPol) };
    intl3 = tmp(1126).intl;
    intl4 = tmp(1126).intl;
    return obj4;
  } else {
    const obj = { name: intl.string(_modDef2472.btBTIw), question: intl2.string(_modDef2472.H8RhX0) };
    intl = tmp(1126).intl;
    intl2 = tmp(1126).intl;
    return obj;
  }
};
