// Module ID: 14879
// Function ID: 14880
// Name: GameCoverImage
// Dependencies: [19, 17, 21, 5005, 587, 558, 576, 9341, 2]

// Module 14879 (GameCoverImage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import GameCoverArt from "GameCoverArt" /* 9341 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { cover: obj2 };
obj2 = { aspectRatio: 0.75, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
let closure_4 = createStyles(obj);
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GameCoverImage(arg0) {
  let coverImageUrl;
  let gameName;
  let hasGameData;
  let iconImageUrl;
  let isLoading;
  let tmp5;
  let width;
  const obj = react2;
  const cResult = obj.c(12);
  ({ coverImageUrl, iconImageUrl, gameName, width } = arg0);
  ({ hasGameData, isLoading } = arg0);
  const tmp4 = closure_4();
  if (cResult[0] !== width) {
    const obj2 = { width };
    cResult[0] = width;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.cover) {
    let tmp6;
    let tmp10;
    if (cResult[3] === tmp5) {
      tmp6 = cResult[4];
    }
    if (!isLoading) {
      let tmp7;
      if (hasGameData) {
        if (cResult[7] === coverImageUrl) {
          if (cResult[8] === gameName) {
            if (cResult[9] === iconImageUrl) {
              if (cResult[10] === tmp6) {
                tmp7 = cResult[11];
              }
            }
          }
        }
        const GameCoverArtFromURLs = tmp(9341).GameCoverArtFromURLs;
        const tmp9 = <GameCoverArtFromURLs coverUrl={coverImageUrl} iconUrl={iconImageUrl} gameName={gameName} size={GameCoverArt.GameCoverArtSize.COMPACT} style={tmp6} accessible={false} />;
        cResult[7] = coverImageUrl;
        cResult[8] = gameName;
        cResult[9] = iconImageUrl;
        cResult[10] = tmp6;
        cResult[11] = tmp9;
        tmp7 = tmp9;
      }
      return tmp7;
    }
    if (cResult[5] !== tmp6) {
      const tmp13 = <View style={tmp6} />;
      cResult[5] = tmp6;
      cResult[6] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[6];
    }
    tmp7 = tmp10;
  }
  const items = [tmp4.cover, tmp5];
  cResult[2] = tmp4.cover;
  cResult[3] = tmp5;
  cResult[4] = items;
  tmp6 = items;
}) : (function GameCoverImage(arg0) {
  let coverImageUrl;
  let gameName;
  let hasGameData;
  let iconImageUrl;
  let isLoading;
  let width;
  ({ coverImageUrl, iconImageUrl, gameName, hasGameData, isLoading, width } = arg0);
  const items = [closure_4().cover, { width }];
  if (!isLoading) {
    let tmp4;
    if (hasGameData) {
      const GameCoverArtFromURLs = GameCoverArt.GameCoverArtFromURLs;
      tmp4 = <GameCoverArtFromURLs coverUrl={coverImageUrl} iconUrl={iconImageUrl} gameName={gameName} size={GameCoverArt.GameCoverArtSize.COMPACT} style={items} accessible={false} />;
    }
    return tmp4;
  }
  tmp4 = <View style={items} />;
}));
const result = size.fileFinishedImporting("modules/user_profile/native/GameCoverImage.tsx");

export default memoResult;
