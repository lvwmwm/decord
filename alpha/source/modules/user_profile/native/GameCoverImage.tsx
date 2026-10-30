// Module ID: 14915
// Function ID: 14916
// Name: GameCoverImage
// Dependencies: [19, 17, 21, 5009, 575, 9355, 2]

// Module 14915 (GameCoverImage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import GameCoverArt from "GameCoverArt" /* 9355 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
const obj = { cover: obj2 };
obj2 = { aspectRatio: 0.75, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
let closure_4 = createStyles(obj);
const memoResult = react.memo(function GameCoverImage(arg0) {
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
});
const result = size.fileFinishedImporting("modules/user_profile/native/GameCoverImage.tsx");

export default memoResult;
