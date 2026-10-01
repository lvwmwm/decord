// Module ID: 10368
// Function ID: 10369
// Name: GuildLeaderboardStatCopy
// Dependencies: [4457, 1115, 2419, 2]
// Exports: getStatName

// Module 10368 (GuildLeaderboardStatCopy)
import _modDef2419 from "module_2419" /* 2419 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4457 */;
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
    const obj2 = { name: intl7.string(_modDef2419["8aHNu0"]), question: intl8.string(_modDef2419["A+HRrQ"]) };
    intl7 = tmp(1115).intl;
    intl8 = tmp(1115).intl;
    return obj2;
  } else if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED === winningStat) {
    const obj3 = { name: intl5.string(_modDef2419.ZwDYuP), question: intl6.string(_modDef2419["9FItmd"]) };
    intl5 = tmp(1115).intl;
    intl6 = tmp(1115).intl;
    return obj3;
  } else if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED === winningStat) {
    const obj4 = { name: intl3.string(_modDef2419.JeFo7p), question: intl4.string(_modDef2419.GXDPol) };
    intl3 = tmp(1115).intl;
    intl4 = tmp(1115).intl;
    return obj4;
  } else {
    const obj = { name: intl.string(_modDef2419.btBTIw), question: intl2.string(_modDef2419.H8RhX0) };
    intl = tmp(1115).intl;
    intl2 = tmp(1115).intl;
    return obj;
  }
};
