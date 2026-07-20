// Module ID: 11972
// Function ID: 92579
// Name: useGameNameAndCoverImage
// Dependencies: []
// Exports: default

// Module 11972 (useGameNameAndCoverImage)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/games/hooks/useGameNameAndCoverImage.tsx");

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
