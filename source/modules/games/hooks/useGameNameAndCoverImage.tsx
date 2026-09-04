// Module ID: 8850
// Function ID: 8851
// Name: useGameNameAndCoverImage
// Dependencies: [7247, 1233, 2]
// Exports: default

// Module 8850 (useGameNameAndCoverImage)
import set from "set" /* 2 */;
import importDefaultResult1 from "importDefaultResult1" /* 7247 */;

const result = set.fileFinishedImporting("modules/games/hooks/useGameNameAndCoverImage.tsx");

export default function useGameNameAndCoverImage(arg0, arg1, size) {
  let obj = importDefaultResult1;
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
    const intl = tmp(1233).intl;
    name = intl.string(tmp(1233).t.GIWFlF);
  }
  obj[1] = name;
  obj[2] = game.isLoading;
  return obj;
};
