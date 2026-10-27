// Module ID: 10676
// Function ID: 10677
// Name: GuildLeaderboardStatCopy
// Dependencies: [4892, 1125, 2439, 2]
// Exports: getStatName

// Module 10676 (GuildLeaderboardStatCopy)
import _modDef2439 from "module_2439" /* 2439 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4892 */;
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
    const obj2 = { name: intl7.string(_modDef2439["8aHNu0"]), question: intl8.string(_modDef2439["A+HRrQ"]) };
    intl7 = tmp(1125).intl;
    intl8 = tmp(1125).intl;
    return obj2;
  } else if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED === currentLeaderStat) {
    const obj3 = { name: intl5.string(_modDef2439.ZwDYuP), question: intl6.string(_modDef2439["9FItmd"]) };
    intl5 = tmp(1125).intl;
    intl6 = tmp(1125).intl;
    return obj3;
  } else if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED === currentLeaderStat) {
    const obj4 = { name: intl3.string(_modDef2439.JeFo7p), question: intl4.string(_modDef2439.GXDPol) };
    intl3 = tmp(1125).intl;
    intl4 = tmp(1125).intl;
    return obj4;
  } else {
    const obj = { name: intl.string(_modDef2439.btBTIw), question: intl2.string(_modDef2439.H8RhX0) };
    intl = tmp(1125).intl;
    intl2 = tmp(1125).intl;
    return obj;
  }
};
