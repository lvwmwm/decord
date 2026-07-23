// Module ID: 14591
// Function ID: 111253
// Name: DETECTABLE_GAME_TO_APPLICATION_ID_MAP
// Dependencies: [12635, 1327, 2]
// Exports: getGameIdsForDetectedGames

// Module 14591 (DETECTABLE_GAME_TO_APPLICATION_ID_MAP)
const obj = { [require(12635).DetectableAppNames.MINECRAFT]: "1402418491272986635", [require(12635).DetectableAppNames.FORTNITE]: "1402418703554842694", [require(12635).DetectableAppNames.GENSHIN]: "762434991303950386", [require(12635).DetectableAppNames.PUBG_MOBILE]: "1474086506955014275", [require(12635).DetectableAppNames.CALL_OF_DUTY_MOBILE]: "1474087680169082943", [require(12635).DetectableAppNames.CLASH_OF_CLANS]: "1441990808399253575", [require(12635).DetectableAppNames.MOBILE_LEGENDS_BANG_BANG]: "1441992389232165056", [require(12635).DetectableAppNames.GARENA_FREE_FIRE]: "1407144801089880165", [require(12635).DetectableAppNames.POKEMON_GO]: "1474100461203357870", [require(12635).DetectableAppNames.POKEMON_TCG_POCKET]: "1474100935126028351", [require(12635).DetectableAppNames.CLASH_ROYALE]: "1420796862369239162", [require(12635).DetectableAppNames.AMONG_US]: "1402418440685486130", [require(12635).DetectableAppNames.MONOPOLY_GO]: "1474101904765227169", [require(12635).DetectableAppNames.BRAWL_STARS]: "1474102260807106581", [require(12635).DetectableAppNames.BRAWLHALLA]: "356944273133928458", [require(12635).DetectableAppNames.WUTHERING_WAVES]: "1247227126416146462" };
const result = require("set").fileFinishedImporting("modules/game_community_upsell/native/GameCommunityConfig.tsx");

export const DETECTABLE_GAME_TO_APPLICATION_ID_MAP = obj;
export const getGameIdsForDetectedGames = function getGameIdsForDetectedGames(arg0) {
  const entries = Object.entries(arg0);
  const found = entries.filter((arg0) => {
    let tmp;
    [, tmp] = arg0;
    return tmp;
  });
  const mapped = found.map((arg0) => {
    let tmp;
    [tmp, ] = arg0;
    return outer1_2[tmp];
  });
  return mapped.filter(require(1327) /* isDiscordFrontendDevelopment */.isNotNullish);
};
