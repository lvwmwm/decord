// Module ID: 14878
// Function ID: 14879
// Name: useGameNameAndCoverImage
// Dependencies: [558, 576, 7466, 1125, 2]

// Module 14878 (useGameNameAndCoverImage)
import react from "react" /* 576 */;
import useGame from "useGame" /* 7466 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGameNameAndCoverImage(arg0, arg1, rounded) {
  let data;
  let isLoading;
  const obj = react;
  const cResult = obj.c(15);
  const obj2 = useGame;
  const game = obj2.useGame(arg0);
  ({ data, isLoading } = game);
  if (cResult[0] === data) {
    let tmp5;
    if (cResult[1] === rounded) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === data) {
      let tmp7;
      if (cResult[4] === rounded) {
        tmp7 = cResult[5];
      }
      let name;
      const tmp10 = cResult[6];
      if (data != null) {
        name = data.name;
      }
      if (tmp10 === name) {
        let tmp14;
        if (cResult[7] === arg1) {
          tmp14 = cResult[8];
        }
        if (cResult[9] === isLoading) {
          if (cResult[10] === tmp5) {
            if (cResult[11] === tmp7) {
              if (cResult[12] === tmp14) {
                let tmp18;
                if (cResult[13] === null != data) {
                  tmp18 = cResult[14];
                }
                return tmp18;
              }
            }
          }
        }
        const obj3 = { coverImageUrl: tmp5, iconImageUrl: tmp7, gameName: tmp14, hasGameData: null != data, isLoading };
        cResult[9] = isLoading;
        cResult[10] = tmp5;
        cResult[11] = tmp7;
        cResult[12] = tmp14;
        cResult[13] = null != data;
        cResult[14] = obj3;
        tmp18 = obj3;
      }
      let name1;
      if (data != null) {
        name1 = data.name;
      }
      if (name1 == null) {
        name1 = arg1;
      }
      if (name1 == null) {
        const intl = tmp(1125).intl;
        name1 = intl.string(tmp(1125).t.GIWFlF);
      }
      let name2;
      if (data != null) {
        name2 = data.name;
      }
      cResult[6] = name2;
      cResult[7] = arg1;
      cResult[8] = name1;
      tmp14 = name1;
    }
    let iconURL;
    if (data != null) {
      let num = rounded;
      const getIconURL = data.getIconURL;
      if (rounded == null) {
        num = 256;
      }
      iconURL = getIconURL(num);
    }
    if (iconURL == null) {
      iconURL = null;
    }
    cResult[3] = data;
    cResult[4] = rounded;
    cResult[5] = iconURL;
    tmp7 = iconURL;
  }
  let coverURL;
  if (data != null) {
    coverURL = data.getCoverURL(rounded);
  }
  if (coverURL == null) {
    coverURL = null;
  }
  cResult[0] = data;
  cResult[1] = rounded;
  cResult[2] = coverURL;
  tmp5 = coverURL;
}) : (function useGameNameAndCoverImage(arg0, arg1, rounded) {
  let iconURL;
  let name;
  let num = rounded;
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
    const intl = tmp(1125).intl;
    name = intl.string(tmp(1125).t.GIWFlF);
  }
  return obj2;
});
const result = size.fileFinishedImporting("modules/games/hooks/useGameNameAndCoverImage.tsx");

export default tmp2;
