// Module ID: 10813
// Function ID: 10814
// Name: GuildLeaderboardStatCopy
// Dependencies: [5163, 1113, 2587, 2]
// Exports: getStatName

// Module 10813 (GuildLeaderboardStatCopy)
import _modDef2587 from "module_2587" /* 2587 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 5163 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/GuildLeaderboardStatCopy.tsx");

export function getStatName(currentLeaderStat) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED === currentLeaderStat) {
    const obj2 = { name: intl7.string(_modDef2587["8aHNu0"]), question: intl8.string(_modDef2587["A+HRrQ"]) };
    intl7 = tmp(1113).intl;
    intl8 = tmp(1113).intl;
    return obj2;
  } else if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED === currentLeaderStat) {
    const obj3 = { name: intl5.string(_modDef2587.ZwDYuP), question: intl6.string(_modDef2587["9FItmd"]) };
    intl5 = tmp(1113).intl;
    intl6 = tmp(1113).intl;
    return obj3;
  } else if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED === currentLeaderStat) {
    const obj4 = { name: intl3.string(_modDef2587.JeFo7p), question: intl4.string(_modDef2587.GXDPol) };
    intl3 = tmp(1113).intl;
    intl4 = tmp(1113).intl;
    return obj4;
  } else {
    const obj = { name: intl.string(_modDef2587.btBTIw), question: intl2.string(_modDef2587.H8RhX0) };
    intl = tmp(1113).intl;
    intl2 = tmp(1113).intl;
    return obj;
  }
}
