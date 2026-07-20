// Module ID: 11592
// Function ID: 90107
// Name: useGameServerFeaturedGameNames
// Dependencies: []
// Exports: default

// Module 11592 (useGameServerFeaturedGameNames)
const _module = require(dependencyMap[0]);
({ MINECRAFT_GAME_ID: closure_2, HYTALE_GAME_ID: closure_3 } = _module);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/premium/game_server/hooks/useGameServerFeaturedGameNames.tsx");

export default function useGameServerFeaturedGameNames() {
  let obj = require(dependencyMap[1]);
  const data = obj.useGame(closure_2).data;
  const data2 = require(dependencyMap[1]).useGame(closure_3).data;
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
