// Module ID: 9198
// Function ID: 9199
// Name: useGameNameAndCoverImage
// Dependencies: [7551, 1115, 2]
// Exports: default

// Module 9198 (useGameNameAndCoverImage)
import useGame from "useGame" /* 7551 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/games/hooks/useGameNameAndCoverImage.tsx");

export default function useGameNameAndCoverImage(arg0, arg1, size) {
  const game = useGame.useGame(arg0);
  const data = game.data;
  let coverURL;
  if (data != null) {
    coverURL = data.getCoverURL(size);
  }
  const obj2 = { coverImageUrl: coverURL, gameName: null, isLoading: null };
  let name;
  if (data != null) {
    name = data.name;
  }
  if (name == null) {
    name = arg1;
  }
  if (name == null) {
    const intl = tmp(1115).intl;
    name = intl.string(tmp(1115).t.GIWFlF);
  }
  obj2.gameName = name;
  obj2.isLoading = game.isLoading;
  return obj2;
};
