// Module ID: 9352
// Function ID: 9353
// Name: GameProfileHeader
// Dependencies: [19, 17, 9350, 21, 5009, 575, 5090, 9353, 9354, 5712, 5582, 9355, 9357, 5619, 9359, 2]
// Exports: default

// Module 9352 (GameProfileHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import LinearGradientDefault from "LinearGradient" /* 5582 */;
import FastImageDefault from "FastImage" /* 5712 */;
import useGameProfileHeroBackgroundURLDefault from "useGameProfileHeroBackgroundURL" /* 9354 */;
import GameCoverArt from "GameCoverArt" /* 9355 */;
import AssetRegistryDefault from "AssetRegistry" /* 9359 */;
import react from "react" /* 19 */;
import GameProfileConstants from "GameProfileConstants" /* 9350 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
const GameCoverArtDefault = GameCoverArt;

let MOBILE_GAME_PROFILE_MAX_WIDTH;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let rect;
let View = react_native.View;
({ DISCORD_APP_GAME_ID: hasOwnProperty, MOBILE_GAME_PROFILE_MAX_WIDTH } = GameProfileConstants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, artHero: rect, artHeroImage: { height: "100%", width: "100%", resizeMode: "cover" }, artHeroGradient: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }, headerContent: obj3, shadowContainer: obj4, coverContainer: obj5, titleContainer: { flex: 1, flexDirection: "column", alignItems: "flex-start" }, titleRow: obj6, title: { flexShrink: 1 }, wavingWumpus: { width: 43, height: 40, flexShrink: 0, resizeMode: "contain" }, textShadow: obj7 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
rect = { width: "100%", position: "absolute", top: 0, bottom: -nativeDefault.space.PX_80, left: 0, right: 0 };
obj3 = { paddingTop: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "flex-end", maxWidth: MOBILE_GAME_PROFILE_MAX_WIDTH, alignSelf: "center", width: "100%" };
obj4 = { borderRadius: nativeDefault.radii.sm };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj5 = { aspectRatio: 0.75, height: 114, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
obj6 = { flexDirection: "row", alignItems: "flex-end", alignSelf: "stretch", gap: nativeDefault.space.PX_8 };
obj7 = { textShadowColor: nativeDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 1 };
let closure_8 = createStyles(obj);
const __initData = { code: "function GameProfileHeaderTsx1(){const{effectiveScrollY}=this.__closure;return{top:-Math.max(0,-effectiveScrollY.get())};}" };
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileHeader.tsx");

export default function GameProfileHeader(arg0) {
  let game;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj5;
  let obj9;
  let onHeightMeasured;
  let scrollY;
  let tmp6Result;
  ({ game, scrollY, onHeightMeasured } = arg0);
  scrollY = undefined;
  const tmp = closure_8();
  let obj = ReanimatedRexport;
  if (scrollY == null) {
    scrollY = obj.useSharedValue(0);
  }
  const fn = function x() {
    const obj = { top: -Math.max(0, -scrollY.get()) };
    return obj;
  };
  fn.__closure = { effectiveScrollY: scrollY };
  fn.__workletHash = 1177397229282;
  fn.__initData = __initData;
  const genres = game.genres;
  const tmp2Result = ReanimatedRexport;
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  const name = game.name;
  const mapped = genres.map(tmp2(9353).getGenreText);
  const joined = mapped.join(", ");
  const l30Rank = game.l30Rank;
  const tmp7 = useGameProfileHeroBackgroundURLDefault(game, 1024);
  const items = [onHeightMeasured];
  const obj3 = { style: items1, children: items2 };
  items1 = [tmp.artHero, animatedStyle];
  let tmp10 = null != tmp7;
  const obj2 = {
    style: tmp.container,
    onLayout: react.useCallback((nativeEvent) => {
      if (onHeightMeasured != null) {
        tmp(nativeEvent.nativeEvent.layout.height);
      }
    }, items),
    children: items4
  };
  View = ReanimatedRexportDefault.View;
  if (tmp10) {
    const obj4 = { source: obj5, style: tmp.artHeroImage };
    obj5 = { uri: tmp7 };
    tmp10 = metroRequire(tmp6(5712), obj4);
  }
  items2 = [tmp10, ];
  const obj6 = { colors: items3, style: tmp.artHeroGradient };
  items3 = ["rgba(0,0,0,0.3)", tmp.container.backgroundColor];
  items2[1] = metroRequire(LinearGradientDefault, obj6);
  items4 = [metroImportDefault(View, obj3), ];
  const obj7 = { style: tmp.headerContent, children: items5 };
  const obj8 = { style: tmp.shadowContainer, children: metroRequire(tmp6Result, obj9) };
  obj9 = { game, imageSize: 114, size: GameCoverArt.GameCoverArtSize.LARGE, style: tmp.coverContainer };
  tmp6Result = GameCoverArtDefault;
  items5 = [metroRequire(View, obj8), ];
  let tmp12Result = null != l30Rank;
  const obj10 = { style: tmp.titleContainer, children: items6 };
  if (tmp12Result) {
    const obj11 = { rank: l30Rank };
    tmp12Result = tmp12(tmp6(9357), obj11);
  }
  items6 = [tmp12Result, , ];
  const obj13 = { variant: "heading-xxl/semibold", color: "text-overlay-light", lineClamp: 2, style: items7, children: name };
  items7 = [, ];
  const obj12 = { style: tmp.titleRow, children: items8 };
  ({ textShadow: arr9[0], title: arr9[1] } = tmp);
  items8 = [metroRequire(tmp2(5619).Text, obj13), ];
  let tmp12Result3 = game.id === hasOwnProperty;
  if (tmp12Result3) {
    const obj14 = { source: AssetRegistryDefault, style: tmp.wavingWumpus, accessible: false, importantForAccessibility: "no" };
    const tmp6Result2 = FastImageDefault;
    tmp12Result3 = tmp12(tmp6Result2, obj14);
  }
  items8[1] = tmp12Result3;
  items6[1] = metroImportDefault(View, obj12);
  let tmp12Result4 = null;
  if (null != joined) {
    tmp12Result4 = null;
    if ("" !== joined) {
      const obj15 = { variant: "text-md/normal", color: "text-overlay-light", lineClamp: 2, style: tmp.textShadow, children: joined };
      tmp12Result4 = tmp12(tmp2(5619).Text, obj15);
    }
  }
  items6[2] = tmp12Result4;
  items5[1] = metroImportDefault(View, obj10);
  items4[1] = metroImportDefault(View, obj7);
  return metroImportDefault(View, obj2);
};
