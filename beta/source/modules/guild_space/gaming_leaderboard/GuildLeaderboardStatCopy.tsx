// Module ID: 10411
// Function ID: 10412
// Name: GuildLeaderboardStatCopy
// Dependencies: [4460, 1127, 2422, 2]
// Exports: getStatName

// Module 10411 (GuildLeaderboardStatCopy)
import _modDef2422 from "module_2422" /* 2422 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4460 */;
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
    const obj2 = { name: intl7.string(_modDef2422["8aHNu0"]), question: intl8.string(_modDef2422["A+HRrQ"]) };
    intl7 = tmp(1127).intl;
    intl8 = tmp(1127).intl;
    return obj2;
  } else if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED === winningStat) {
    const obj3 = { name: intl5.string(_modDef2422.ZwDYuP), question: intl6.string(_modDef2422["9FItmd"]) };
    intl5 = tmp(1127).intl;
    intl6 = tmp(1127).intl;
    return obj3;
  } else if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED === winningStat) {
    const obj4 = { name: intl3.string(_modDef2422.JeFo7p), question: intl4.string(_modDef2422.GXDPol) };
    intl3 = tmp(1127).intl;
    intl4 = tmp(1127).intl;
    return obj4;
  } else {
    const obj = { name: intl.string(_modDef2422.btBTIw), question: intl2.string(_modDef2422.H8RhX0) };
    intl = tmp(1127).intl;
    intl2 = tmp(1127).intl;
    return obj;
  }
};
