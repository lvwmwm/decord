// Module ID: 14914
// Function ID: 14915
// Name: useGameNameAndCoverImage
// Dependencies: [7474, 1114, 2]
// Exports: default

// Module 14914 (useGameNameAndCoverImage)
import useGame from "useGame" /* 7474 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/games/hooks/useGameNameAndCoverImage.tsx");

export default function useGameNameAndCoverImage(arg0, arg1, imageSize) {
  let iconURL;
  let name;
  let num = imageSize;
  const obj = useGame;
  const game = obj.useGame(arg0);
  const data = game.data;
  let coverURL;
  const isLoading = game.isLoading;
  if (data != null) {
    coverURL = data.getCoverURL(num);
  }
  if (coverURL == null) {
    coverURL = null;
  }
  const obj2 = { coverImageUrl: coverURL, iconImageUrl: iconURL, gameName: name, hasGameData: null != data, isLoading };
  iconURL = undefined;
  if (data != null) {
    const getIconURL = data.getIconURL;
    if (num == null) {
      num = 256;
    }
    iconURL = getIconURL(num);
  }
  if (iconURL == null) {
    iconURL = null;
  }
  name = undefined;
  if (data != null) {
    name = data.name;
  }
  if (name == null) {
    name = arg1;
  }
  if (name == null) {
    const intl = tmp(1114).intl;
    name = intl.string(tmp(1114).t.GIWFlF);
  }
  return obj2;
};
