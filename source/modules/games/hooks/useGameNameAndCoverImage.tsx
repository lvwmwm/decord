// Module ID: 12347
// Function ID: 12348
// Name: useGameNameAndCoverImage
// Dependencies: [7092, 1236, 2]
// Exports: default

// Module 12347 (useGameNameAndCoverImage)
const result = require("set").fileFinishedImporting("modules/games/hooks/useGameNameAndCoverImage.tsx");

export default function useGameNameAndCoverImage(arg0, arg1, size) {
  let obj = require(7092) /* importDefaultResult1 */;
  const game = obj.useGame(arg0);
  const data = game.data;
  let coverURL;
  if (data != null) {
    coverURL = data.getCoverURL(size);
  }
  obj = { coverImageUrl: coverURL, gameName: null, isLoading: null };
  let name;
  if (data != null) {
    name = data.name;
  }
  if (name == null) {
    name = arg1;
  }
  if (name == null) {
    const intl = tmp(1236).intl;
    name = intl.string(tmp(1236).t.GIWFlF);
  }
  obj[1] = name;
  obj[2] = game.isLoading;
  return obj;
};
