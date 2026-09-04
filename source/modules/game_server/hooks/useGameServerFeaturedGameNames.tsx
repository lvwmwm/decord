// Module ID: 12509
// Function ID: 12510
// Name: useGameServerFeaturedGameNames
// Dependencies: [4369, 7247, 2]
// Exports: default

// Module 12509 (useGameServerFeaturedGameNames)
import set from "set" /* 2 */;
import importDefaultResult1 from "importDefaultResult1" /* 7247 */;
import str11 from "str11" /* 4369 */;

({ MINECRAFT_GAME_ID: obj1, HYTALE_GAME_ID: c3 } = str11);
const result = set.fileFinishedImporting("modules/game_server/hooks/useGameServerFeaturedGameNames.tsx");

export default function useGameServerFeaturedGameNames() {
  let obj = importDefaultResult1;
  const data = obj.useGame(closure_2).data;
  const data2 = importDefaultResult1.useGame(closure_3).data;
  let str;
  if (data != null) {
    str = data.name;
  }
  if (str == null) {
    str = "Minecraft";
  }
  obj = { gameName: str, gameName2: null };
  let str2;
  if (data2 != null) {
    str2 = data2.name;
  }
  if (str2 == null) {
    str2 = "Hytale";
  }
  obj[1] = str2;
  return obj;
};
