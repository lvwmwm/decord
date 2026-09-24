// Module ID: 11259
// Function ID: 11260
// Name: GuildLeaderboardStatCopy
// Dependencies: [4452, 1115, 2418, 2]
// Exports: getStatName

// Module 11259 (GuildLeaderboardStatCopy)
import _modDef2418 from "module_2418" /* 2418 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4452 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/GuildLeaderboardStatCopy.tsx");

export const getStatName = function getStatName(winningStat) {
  if (GuildLeaderboardTypes.GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_HOURS_PLAYED === winningStat) {
    const obj2 = { name: null, question: null };
    const intl7 = tmp(1115).intl;
    obj2.name = intl7.string(_modDef2418["8aHNu0"]);
    const intl8 = tmp(1115).intl;
    obj2.question = intl8.string(_modDef2418["A+HRrQ"]);
    return obj2;
  } else if (tmp(4452).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_DAYS_PLAYED === winningStat) {
    const obj3 = { name: null, question: null };
    const intl5 = tmp(1115).intl;
    obj3.name = intl5.string(_modDef2418.ZwDYuP);
    const intl6 = tmp(1115).intl;
    obj3.question = intl6.string(_modDef2418["9FItmd"]);
    return obj3;
  } else if (tmp(4452).GamingLeaderboardStat.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED === winningStat) {
    const obj4 = { name: null, question: null };
    const intl3 = tmp(1115).intl;
    obj4.name = intl3.string(_modDef2418.JeFo7p);
    const intl4 = tmp(1115).intl;
    obj4.question = intl4.string(_modDef2418.GXDPol);
    return obj4;
  } else {
    const obj = { name: null, question: null };
    const intl = tmp(1115).intl;
    obj.name = intl.string(_modDef2418.btBTIw);
    const intl2 = tmp(1115).intl;
    obj.question = intl2.string(_modDef2418.H8RhX0);
    return obj;
  }
};
