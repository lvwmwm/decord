// Module ID: 12112
// Function ID: 12113
// Name: GameCoverImage
// Dependencies: [19, 17, 21, 5306, 12104, 575, 1113, 10321, 2]

// Module 12112 (GameCoverImage)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import GameCoverArt from "GameCoverArt" /* 10321 */;
import UserProfileGameWidgetConstants from "UserProfileGameWidgetConstants" /* 12104 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { cover: obj2, coverArt: { width: "100%", height: "100%" } };
obj2 = { aspectRatio: UserProfileGameWidgetConstants.GAME_COVER_ASPECT_RATIO, borderRadius: UserProfileGameWidgetConstants.GAME_COVER_BORDER_RADIUS, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
let closure_4 = createStyles(obj);
const memoResult = react.memo(function GameCoverImage(ref) {
  let accessible;
  let coverImageUrl;
  let gameName;
  let hasGameData;
  let iconImageUrl;
  let isLoading;
  let width;
  ({ gameName, isLoading, accessible } = ref);
  ({ coverImageUrl, iconImageUrl, hasGameData, width } = ref);
  if (accessible === undefined) {
    accessible = true;
  }
  ref = ref.ref;
  const tmp = closure_4();
  const items = [tmp.cover, { width }];
  let stringResult = gameName;
  if (isLoading) {
    const intl = intl2.intl;
    stringResult = intl.string(intl2.t.ZTNur7);
  }
  let tmp2Result = !isLoading && hasGameData;
  if (tmp2Result) {
    const obj2 = { coverUrl: coverImageUrl, iconUrl: iconImageUrl, gameName, size: GameCoverArt.GameCoverArtSize.COMPACT, style: tmp.coverArt, accessible: false };
    const GameCoverArtFromURLs = GameCoverArt.GameCoverArtFromURLs;
    tmp2Result = tmp2(GameCoverArtFromURLs, obj2);
  }
  return <tmp3 ref={ref} style={items} accessible={accessible} accessibilityRole="image" accessibilityLabel={stringResult}>{tmp2Result}</tmp3>;
});
const result = size.fileFinishedImporting("modules/user_profile/native/GameCoverImage.tsx");

export default memoResult;
