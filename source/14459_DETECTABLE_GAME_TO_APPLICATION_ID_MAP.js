// Module ID: 14459
// Function ID: 108995
// Name: DETECTABLE_GAME_TO_APPLICATION_ID_MAP
// Dependencies: [0, 0, 0]
// Exports: getGameIdsForDetectedGames

// Module 14459 (DETECTABLE_GAME_TO_APPLICATION_ID_MAP)
import result from "result";

const obj = { [require(dependencyMap[0]).DetectableAppNames.MINECRAFT]: "1402418491272986635", [require(dependencyMap[0]).DetectableAppNames.FORTNITE]: "1402418703554842694", [require(dependencyMap[0]).DetectableAppNames.GENSHIN]: "762434991303950386", [require(dependencyMap[0]).DetectableAppNames.PUBG_MOBILE]: "1474086506955014275", [require(dependencyMap[0]).DetectableAppNames.CALL_OF_DUTY_MOBILE]: "1474087680169082943", [require(dependencyMap[0]).DetectableAppNames.CLASH_OF_CLANS]: "1441990808399253575", [require(dependencyMap[0]).DetectableAppNames.MOBILE_LEGENDS_BANG_BANG]: "1441992389232165056", [require(dependencyMap[0]).DetectableAppNames.GARENA_FREE_FIRE]: "1407144801089880165", [require(dependencyMap[0]).DetectableAppNames.POKEMON_GO]: "1474100461203357870", [require(dependencyMap[0]).DetectableAppNames.POKEMON_TCG_POCKET]: "1474100935126028351", [require(dependencyMap[0]).DetectableAppNames.CLASH_ROYALE]: "1420796862369239162", [require(dependencyMap[0]).DetectableAppNames.AMONG_US]: "1402418440685486130", [require(dependencyMap[0]).DetectableAppNames.MONOPOLY_GO]: "1474101904765227169", [require(dependencyMap[0]).DetectableAppNames.BRAWL_STARS]: "1474102260807106581", [require(dependencyMap[0]).DetectableAppNames.BRAWLHALLA]: "356944273133928458", [require(dependencyMap[0]).DetectableAppNames.WUTHERING_WAVES]: "1247227126416146462" };
result = result.fileFinishedImporting("modules/game_community_upsell/native/GameCommunityConfig.tsx");

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
    return closure_2[tmp];
  });
  return mapped.filter(require(dependencyMap[1]).isNotNullish);
};
