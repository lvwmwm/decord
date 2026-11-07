// Module ID: 15215
// Function ID: 15216
// Name: GameCoverImage
// Dependencies: [19, 17, 21, 5140, 15197, 575, 9456, 2]

// Module 15215 (GameCoverImage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import GameCoverArt from "GameCoverArt" /* 9456 */;
import UserProfileGameWidgetConstants from "UserProfileGameWidgetConstants" /* 15197 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
const obj = { cover: obj2 };
obj2 = { aspectRatio: UserProfileGameWidgetConstants.GAME_COVER_ASPECT_RATIO, borderRadius: UserProfileGameWidgetConstants.GAME_COVER_BORDER_RADIUS, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
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
