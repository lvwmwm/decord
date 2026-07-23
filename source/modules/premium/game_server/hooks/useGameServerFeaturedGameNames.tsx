// Module ID: 11610
// Function ID: 90204
// Name: useGameServerFeaturedGameNames
// Dependencies: [4019, 6865, 2]
// Exports: default

// Module 11610 (useGameServerFeaturedGameNames)
import NewGamesCoachmarkContent from "NewGamesCoachmarkContent";

let closure_2;
let closure_3;
({ MINECRAFT_GAME_ID: closure_2, HYTALE_GAME_ID: closure_3 } = NewGamesCoachmarkContent);
const result = require("set").fileFinishedImporting("modules/premium/game_server/hooks/useGameServerFeaturedGameNames.tsx");

export default function useGameServerFeaturedGameNames() {
  let obj = require(6865) /* importDefaultResult1 */;
  const data = obj.useGame(closure_2).data;
  const data2 = require(6865) /* importDefaultResult1 */.useGame(closure_3).data;
  obj = {};
  let name;
  if (null != data) {
    name = data.name;
  }
  let str = "Minecraft";
  if (null != name) {
    str = name;
  }
  obj.gameName = str;
  let name1;
  if (null != data2) {
    name1 = data2.name;
  }
  let str2 = "Hytale";
  if (null != name1) {
    str2 = name1;
  }
  obj.gameName2 = str2;
  return obj;
};
