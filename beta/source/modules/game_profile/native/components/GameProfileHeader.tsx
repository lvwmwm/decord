// Module ID: 8169
// Function ID: 8170
// Name: GameProfileHeader
// Dependencies: [19, 17, 8167, 21, 4836, 576, 4566, 8170, 8171, 5293, 8172, 4832, 2]
// Exports: default

// Module 8169 (GameProfileHeader)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import Text_Text from "Text/Text" /* 4832 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import GameProfileConstants from "GameProfileConstants" /* 8167 */;
import useGameProfileHeroBackgroundURLDefault from "useGameProfileHeroBackgroundURL" /* 8171 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let rect;
let size;
let size1;
({ View: closure_4, Image: hasOwnProperty } = react_native);
const MOBILE_GAME_PROFILE_MAX_WIDTH = GameProfileConstants.MOBILE_GAME_PROFILE_MAX_WIDTH;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, artHero: rect, artHeroImage: { height: "100%", width: "100%", resizeMode: "cover" }, artHeroGradient: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }, headerContent: obj3, shadowContainer: obj4, coverContainer: size, iconContainer: size1, image: { width: "100%", height: "100%" }, titleContainer: { flex: 1, flexDirection: "column", alignItems: "flex-start" }, textShadow: obj5 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
rect = { width: "100%", position: "absolute", top: 0, bottom: -nativeDefault.space.PX_80, left: 0, right: 0 };
obj3 = { paddingTop: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "flex-end", maxWidth: MOBILE_GAME_PROFILE_MAX_WIDTH, alignSelf: "center", width: "100%" };
obj4 = { borderRadius: nativeDefault.radii.sm };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
size = { width: 85, height: 114, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
size1 = { width: 85, height: 85, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
obj5 = { textShadowColor: nativeDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 1 };
let closure_8 = createStyles(obj);
const __initData = { code: "function GameProfileHeaderTsx1(){const{effectiveScrollY}=this.__closure;return{top:-Math.max(0,-effectiveScrollY.get())};}" };
size = size_mod;
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileHeader.tsx");

export default function GameProfileHeader(game) {
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj10;
  let obj11;
  let obj12;
  let obj14;
  let obj5;
  let onHeightMeasured;
  let scrollY;
  let tmp15Result;
  game = game.game;
  ({ scrollY, onHeightMeasured } = game);
  scrollY = undefined;
  const tmp = closure_8();
  let obj = ReanimatedRexport;
  if (scrollY == null) {
    scrollY = obj.useSharedValue(0);
  }
  const fn = function _() {
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
  const mapped = genres.map(tmp2(8170).getGenreText);
  const joined = mapped.join(", ");
  const l30Rank = game.l30Rank;
  const tmp7 = useGameProfileHeroBackgroundURLDefault(game, 1024);
  const items = [game];
  const memo = react.useMemo(() => game.getCoverURL(114), items);
  const items1 = [game];
  const memo1 = react.useMemo(() => game.getIconURL(114), items1);
  const items2 = [onHeightMeasured];
  const obj3 = { style: items3, children: items4 };
  items3 = [tmp.artHero, animatedStyle];
  let tmp12 = null != tmp7;
  const obj2 = {
    style: tmp.container,
    onLayout: react.useCallback((nativeEvent) => {
      if (onHeightMeasured != null) {
        tmp(nativeEvent.nativeEvent.layout.height);
      }
    }, items2),
    children: items6
  };
  const View = ReanimatedRexportDefault.View;
  if (tmp12) {
    const obj4 = { source: obj5, style: tmp.artHeroImage };
    obj5 = { uri: tmp7 };
    tmp12 = metroRequire(hasOwnProperty, obj4);
  }
  items4 = [tmp12, ];
  const obj6 = { colors: items5, style: tmp.artHeroGradient };
  items5 = ["rgba(0,0,0,0.3)", tmp.container.backgroundColor];
  items4[1] = metroRequire(LinearGradientDefault, obj6);
  items6 = [metroImportDefault(View, obj3), ];
  const obj7 = { style: tmp.headerContent, children: items7 };
  const obj8 = { style: tmp.shadowContainer, children: metroRequire(React3, obj12) };
  if (null != memo) {
    const obj9 = { style: tmp.coverContainer, children: metroRequire(hasOwnProperty, obj10) };
    obj10 = { source: obj11, style: tmp.image };
    obj12 = obj9;
    obj11 = { uri: memo };
  } else {
    obj12 = { style: tmp.iconContainer, children: tmp15Result };
    tmp15Result = null != memo1;
    if (tmp15Result) {
      const obj13 = { source: obj14, style: tmp.image };
      obj14 = { uri: memo1 };
      tmp15Result = tmp15(hasOwnProperty, obj13);
    }
  }
  items7 = [metroRequire(React3, obj8), ];
  let tmp15Result3 = null != l30Rank;
  const obj15 = { style: tmp.titleContainer, children: items8 };
  if (tmp15Result3) {
    const obj16 = { rank: l30Rank };
    tmp15Result3 = tmp15(tmp6(8172), obj16);
  }
  items8 = [tmp15Result3, , ];
  const obj17 = { variant: "heading-xxl/semibold", color: "text-overlay-light", lineClamp: 2, style: tmp.textShadow, children: name };
  items8[1] = metroRequire(Text_Text.Text, obj17);
  let tmp15Result4 = null;
  if (null != joined) {
    tmp15Result4 = null;
    if ("" !== joined) {
      const obj18 = { variant: "text-md/normal", color: "text-overlay-light", lineClamp: 2, style: tmp.textShadow, children: joined };
      tmp15Result4 = tmp15(tmp2(4832).Text, obj18);
    }
  }
  items8[2] = tmp15Result4;
  items7[1] = metroImportDefault(React3, obj15);
  items6[1] = metroImportDefault(React3, obj7);
  return metroImportDefault(React3, obj2);
};
