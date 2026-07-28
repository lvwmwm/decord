// Module ID: 12039
// Function ID: 92907
// Name: useGameNameAndCoverImage
// Dependencies: [5888, 1212, 2]
// Exports: default

// Module 12039 (useGameNameAndCoverImage)
const result = require("set").fileFinishedImporting("modules/games/hooks/useGameNameAndCoverImage.tsx");

export default function useGameNameAndCoverImage(arg0, arg1, arg2) {
  let stringResult = arg1;
  let obj = require(5888) /* importDefaultResult1 */;
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
    const intl = require(1212) /* getSystemLocale */.intl;
    stringResult = intl.string(require(1212) /* getSystemLocale */.t.GIWFlF);
  }
  obj.gameName = stringResult;
  obj.isLoading = game.isLoading;
  return obj;
};
