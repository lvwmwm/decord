// Module ID: 10251
// Function ID: 10252
// Name: GameProfileHeader
// Dependencies: [19, 17, 10249, 21, 5243, 575, 1652, 10252, 10253, 5957, 5830, 10254, 10256, 5866, 10258, 2]
// Exports: default

// Module 10251 (GameProfileHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import LinearGradientDefault from "LinearGradient" /* 5830 */;
import FastImageDefault from "FastImage" /* 5957 */;
import useGameProfileHeroBackgroundURLDefault from "useGameProfileHeroBackgroundURL" /* 10253 */;
import GameCoverArt from "GameCoverArt" /* 10254 */;
import AssetRegistryDefault from "AssetRegistry" /* 10258 */;
import react from "react" /* 19 */;
import GameProfileConstants from "GameProfileConstants" /* 10249 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const _modDef1652 = _mod1652;
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
let closure_9 = { code: "(function GameProfileHeaderTsx1(){let[effectiveScrollY]=this.__closure;return{top:-Math.max(0,-effectiveScrollY.get())};})" };
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileHeader.tsx");

export default function GameProfileHeader(arg0) {
  let game;
  let items10;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj5;
  let obj9;
  let onHeightMeasured;
  let scrollY;
  let tmp10Result;
  let tmp6;
  let tmp7;
  ({ game, scrollY, onHeightMeasured } = arg0);
  const tmp = closure_8();
  let obj = _mod1652;
  const sharedValue = obj.useSharedValue(0);
  const items = [closure_9, ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  if (scrollY == null) {
    scrollY = sharedValue;
  }
  items[1] = scrollY;
  [tmp6, tmp7] = items;
  class GameProfileHeaderTsx1 {
    constructor() {
      const obj = { top: -Math.max(0, -closure_1_0.get()) };
      return obj;
    }
  }
  const items1 = [tmp7];
  GameProfileHeaderTsx1.__closure = items1;
  GameProfileHeaderTsx1.__workletHash = 14790445044571;
  GameProfileHeaderTsx1.__initData = tmp6;
  const genres = game.genres;
  const animatedStyle = useAnimatedStyle(GameProfileHeaderTsx1);
  const name = game.name;
  const mapped = genres.map(tmp2(10252).getGenreText);
  const joined = mapped.join(", ");
  const l30Rank = game.l30Rank;
  const tmp11 = useGameProfileHeroBackgroundURLDefault(game, 1024);
  const items2 = [onHeightMeasured];
  const obj3 = { style: items3, children: items4 };
  items3 = [tmp.artHero, animatedStyle];
  let tmp14 = null != tmp11;
  const obj2 = {
    style: tmp.container,
    onLayout: react.useCallback((nativeEvent) => {
      if (onHeightMeasured != null) {
        tmp(nativeEvent.nativeEvent.layout.height);
      }
    }, items2),
    children: items6
  };
  View = _modDef1652.View;
  if (tmp14) {
    const obj4 = { source: obj5, style: tmp.artHeroImage };
    obj5 = { uri: tmp11 };
    tmp14 = metroRequire(tmp10(5957), obj4);
  }
  items4 = [tmp14, ];
  const obj6 = { colors: items5, style: tmp.artHeroGradient };
  items5 = ["rgba(0,0,0,0.3)", tmp.container.backgroundColor];
  items4[1] = metroRequire(LinearGradientDefault, obj6);
  items6 = [metroImportDefault(View, obj3), ];
  const obj7 = { style: tmp.headerContent, children: items7 };
  const obj8 = { style: tmp.shadowContainer, children: metroRequire(tmp10Result, obj9) };
  obj9 = { game, imageSize: 114, size: GameCoverArt.GameCoverArtSize.LARGE, style: tmp.coverContainer };
  tmp10Result = GameCoverArtDefault;
  items7 = [metroRequire(View, obj8), ];
  let tmp16Result = null != l30Rank;
  const obj10 = { style: tmp.titleContainer, children: items8 };
  if (tmp16Result) {
    const obj11 = { rank: l30Rank };
    tmp16Result = tmp16(tmp10(10256), obj11);
  }
  items8 = [tmp16Result, , ];
  const obj13 = { variant: "heading-xxl/semibold", color: "text-overlay-light", lineClamp: 2, style: items9, children: name };
  items9 = [, ];
  const obj12 = { style: tmp.titleRow, children: items10 };
  ({ textShadow: arr11[0], title: arr11[1] } = tmp);
  items10 = [metroRequire(tmp2(5866).Text, obj13), ];
  let tmp16Result3 = game.id === hasOwnProperty;
  if (tmp16Result3) {
    const obj14 = { source: AssetRegistryDefault, style: tmp.wavingWumpus, accessible: false, importantForAccessibility: "no" };
    const tmp10Result2 = FastImageDefault;
    tmp16Result3 = tmp16(tmp10Result2, obj14);
  }
  items10[1] = tmp16Result3;
  items8[1] = metroImportDefault(View, obj12);
  let tmp16Result4 = null;
  if (null != joined) {
    tmp16Result4 = null;
    if ("" !== joined) {
      const obj15 = { variant: "body-md/normal", color: "text-overlay-light", lineClamp: 2, style: tmp.textShadow, children: joined };
      tmp16Result4 = tmp16(tmp2(5866).Text, obj15);
    }
  }
  items8[2] = tmp16Result4;
  items7[1] = metroImportDefault(View, obj10);
  items6[1] = metroImportDefault(View, obj7);
  return metroImportDefault(View, obj2);
};
