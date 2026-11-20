// Module ID: 13347
// Function ID: 13348
// Name: useGameServerFeaturedGameNames
// Dependencies: [8213, 8933, 2]
// Exports: default

// Module 13347 (useGameServerFeaturedGameNames)
import useGame from "useGame" /* 8933 */;
import GameServerConstants from "GameServerConstants" /* 8213 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ MINECRAFT_GAME_ID: c2, HYTALE_GAME_ID: c3 } = GameServerConstants);
const result = size.fileFinishedImporting("modules/game_server/hooks/useGameServerFeaturedGameNames.tsx");

export default function useGameServerFeaturedGameNames() {
  let str2;
  const obj = useGame;
  const data = obj.useGame(React2).data;
  const obj2 = useGame;
  const data2 = obj2.useGame(_false).data;
  let str;
  if (data != null) {
    str = data.name;
  }
  if (str == null) {
    str = "Minecraft";
  }
  const obj3 = { gameName: str, gameName2: str2 };
  str2 = undefined;
  if (data2 != null) {
    str2 = data2.name;
  }
  if (str2 == null) {
    str2 = "Hytale";
  }
  return obj3;
};
