// Module ID: 11980
// Function ID: 92633
// Name: useGameNameAndCoverImage
// Dependencies: [0, 0, 0]
// Exports: default

// Module 11980 (useGameNameAndCoverImage)
const result = require("__exportStarResult1").fileFinishedImporting("modules/games/hooks/useGameNameAndCoverImage.tsx");

export default function useGameNameAndCoverImage(arg0, arg1, arg2) {
  let stringResult = arg1;
  let obj = require(dependencyMap[0]);
  const game = obj.useGame(arg0);
  const data = game.data;
  obj = {};
  let coverURL;
  if (null != data) {
    coverURL = data.getCoverURL(arg2);
  }
  obj.coverImageUrl = coverURL;
  let name;
  if (null != data) {
    name = data.name;
  }
  if (null != name) {
    stringResult = name;
  }
  if (null == stringResult) {
    const intl = require(dependencyMap[1]).intl;
    stringResult = intl.string(require(dependencyMap[1]).t.GIWFlF);
  }
  obj.gameName = stringResult;
  obj.isLoading = game.isLoading;
  return obj;
};
