// Module ID: 9302
// Function ID: 9303
// Name: GameProfileHeader
// Dependencies: [19, 17, 9300, 21, 4972, 587, 558, 576, 5053, 9303, 9304, 5670, 5259, 9305, 9307, 5235, 9309, 2]

// Module 9302 (GameProfileHeader)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5053 */;
import LinearGradientDefault from "LinearGradient" /* 5259 */;
import FastImageDefault from "FastImage" /* 5670 */;
import useGameProfileHeroBackgroundURLDefault from "useGameProfileHeroBackgroundURL" /* 9304 */;
import GameCoverArtDefault from "GameCoverArt" /* 9305 */;
import AssetRegistryDefault from "AssetRegistry" /* 9309 */;
import react from "react" /* 19 */;
import GameProfileConstants from "GameProfileConstants" /* 9300 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4972 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;

let MOBILE_GAME_PROFILE_MAX_WIDTH;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let rect;
let size;
let size1;
let tmp;
const SKUUtils = tmp(9303);
let View = react_native.View;
({ DISCORD_APP_GAME_ID: hasOwnProperty, MOBILE_GAME_PROFILE_MAX_WIDTH } = GameProfileConstants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let c8 = 114;
let c9 = "rgba(0,0,0,0.3)";
let createStyles = createStyles_mod;
let obj = { container: obj2, artHero: rect, artHeroImage: { height: "100%", width: "100%", resizeMode: "cover" }, artHeroGradient: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }, headerContent: obj3, shadowContainer: obj4, coverContainer: size, iconContainer: size1, titleContainer: { flex: 1, flexDirection: "column", alignItems: "flex-start" }, titleRow: obj5, title: { flexShrink: 1 }, wavingWumpus: { width: 43, height: 40, flexShrink: 0, resizeMode: "contain" }, textShadow: obj6 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
rect = { width: "100%", position: "absolute", top: 0, bottom: -nativeDefault.space.PX_80, left: 0, right: 0 };
obj3 = { paddingTop: nativeDefault.space.PX_32, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "flex-end", maxWidth: MOBILE_GAME_PROFILE_MAX_WIDTH, alignSelf: "center", width: "100%" };
obj4 = { borderRadius: nativeDefault.radii.sm };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
size = { width: 85, height: 114, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
size1 = { width: 85, height: 85, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden" };
obj5 = { flexDirection: "row", alignItems: "flex-end", alignSelf: "stretch", gap: nativeDefault.space.PX_8 };
obj6 = { textShadowColor: nativeDefault.colors.BLACK, textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 1 };
let closure_10 = createStyles(obj);
const __initData = { code: "function GameProfileHeaderTsx1(){const{effectiveScrollY}=this.__closure;return{top:-Math.max(0,-effectiveScrollY.get())};}" };
const __initData2 = { code: "function GameProfileHeaderTsx2(){const{effectiveScrollY}=this.__closure;return{top:-Math.max(0,-effectiveScrollY.get())};}" };
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileHeader(arg0) {
  let game;
  let items1;
  let obj6;
  let onHeightMeasured;
  let scrollY;
  const tmp = require;
  let obj = react2;
  const cResult = obj.c(58);
  ({ game, scrollY, onHeightMeasured } = arg0);
  const tmp4 = closure_10();
  const obj2 = ReanimatedRexport;
  if (scrollY == null) {
    scrollY = obj2.useSharedValue(0);
  }
  const fn = function o() {
    const obj = { top: -Math.max(0, -scrollY.get()) };
    return obj;
  };
  fn.__closure = { effectiveScrollY: scrollY };
  fn.__workletHash = 1177397229282;
  fn.__initData = __initData;
  const tmpResult = ReanimatedRexport;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  if (cResult[0] !== game.genres) {
    const genres = game.genres;
    const mapped = genres.map(SKUUtils.getGenreText);
    const joined = mapped.join(", ");
    cResult[0] = game.genres;
    cResult[1] = joined;
  }
  const tmp9 = useGameProfileHeroBackgroundURLDefault(game, 1024);
  if (cResult[2] !== onHeightMeasured) {
    class I {
      constructor(nativeEvent) {
        if (onHeightMeasured != null) {
          tmp(nativeEvent.nativeEvent.layout.height);
        }
      }
    }
    cResult[2] = onHeightMeasured;
    cResult[3] = I;
  } else {
    class I {
      constructor(nativeEvent) {
        if (onHeightMeasured != null) {
          tmp(nativeEvent.nativeEvent.layout.height);
        }
      }
    }
  }
  if (cResult[4] === animatedStyle) {
    class I {
      constructor(nativeEvent) {
        if (onHeightMeasured != null) {
          tmp(nativeEvent.nativeEvent.layout.height);
        }
      }
    }
    if (cResult[7] === tmp9) {
      class I {
        constructor(nativeEvent) {
          if (onHeightMeasured != null) {
            tmp(nativeEvent.nativeEvent.layout.height);
          }
        }
      }
      if (cResult[10] !== tmp4.container.backgroundColor) {
        class I {
          constructor(nativeEvent) {
            if (onHeightMeasured != null) {
              tmp(nativeEvent.nativeEvent.layout.height);
            }
          }
        }
        const items = [c9, tmp4.container.backgroundColor];
        cResult[10] = tmp4.container.backgroundColor;
        cResult[11] = items;
      } else {
        class I {
          constructor(nativeEvent) {
            if (onHeightMeasured != null) {
              tmp(nativeEvent.nativeEvent.layout.height);
            }
          }
        }
      }
      if (cResult[12] === tmp4.artHeroGradient) {
        class I {
          constructor(nativeEvent) {
            if (onHeightMeasured != null) {
              tmp(nativeEvent.nativeEvent.layout.height);
            }
          }
        }
        if (cResult[15] === tmp11) {
          class I {
            constructor(nativeEvent) {
              if (onHeightMeasured != null) {
                tmp(nativeEvent.nativeEvent.layout.height);
              }
            }
          }
        }
        const obj3 = { style: tmp11, children: items1 };
        items1 = [tmp12, tmp15];
        cResult[15] = tmp11;
        cResult[16] = tmp12;
        cResult[17] = tmp15;
        cResult[18] = metroImportDefault(ReanimatedRexportDefault.View, obj3);
        const tmp20 = metroImportDefault(ReanimatedRexportDefault.View, obj3);
      }
      const obj4 = { colors: tmp14, style: tmp4.artHeroGradient };
      cResult[12] = tmp4.artHeroGradient;
      cResult[13] = tmp14;
      cResult[14] = metroRequire(LinearGradientDefault, obj4);
      const tmp17 = metroRequire(LinearGradientDefault, obj4);
    }
    let tmp13 = null != tmp9;
    if (tmp13) {
      class I {
        constructor(nativeEvent) {
          if (onHeightMeasured != null) {
            tmp(nativeEvent.nativeEvent.layout.height);
          }
        }
      }
      const obj5 = { source: obj6, style: tmp4.artHeroImage };
      obj6 = { uri: tmp9 };
      tmp13 = metroRequire(tmp8(5670), obj5);
    }
    cResult[7] = tmp9;
    cResult[8] = tmp4.artHeroImage;
    cResult[9] = tmp13;
  }
  const items2 = [tmp4.artHero, animatedStyle];
  cResult[4] = animatedStyle;
  cResult[5] = tmp4.artHero;
  cResult[6] = items2;
}) : (function GameProfileHeader(arg0) {
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
  ({ game, scrollY, onHeightMeasured } = arg0);
  scrollY = undefined;
  const tmp = closure_10();
  let obj = ReanimatedRexport;
  if (scrollY == null) {
    scrollY = obj.useSharedValue(0);
  }
  const fn = function f() {
    const obj = { top: -Math.max(0, -scrollY.get()) };
    return obj;
  };
  fn.__closure = { effectiveScrollY: scrollY };
  fn.__workletHash = 17327557152577;
  fn.__initData = __initData2;
  const genres = game.genres;
  const tmp2Result = ReanimatedRexport;
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  const name = game.name;
  const mapped = genres.map(tmp2(9303).getGenreText);
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
    tmp10 = metroRequire(tmp6(5670), obj4);
  }
  items2 = [tmp10, ];
  const obj6 = { colors: items3, style: tmp.artHeroGradient };
  items3 = [c9, tmp.container.backgroundColor];
  items2[1] = metroRequire(LinearGradientDefault, obj6);
  items4 = [metroImportDefault(View, obj3), ];
  const obj7 = { style: tmp.headerContent, children: items5 };
  const obj8 = { style: tmp.shadowContainer, children: metroRequire(GameCoverArtDefault, obj9) };
  obj9 = { game, coverImageSize: v114, iconImageSize: v114, coverContainerStyle: tmp.coverContainer, iconContainerStyle: tmp.iconContainer };
  items5 = [metroRequire(View, obj8), ];
  let tmp12Result = null != l30Rank;
  const obj10 = { style: tmp.titleContainer, children: items6 };
  if (tmp12Result) {
    const obj11 = { rank: l30Rank };
    tmp12Result = tmp12(tmp6(9307), obj11);
  }
  items6 = [tmp12Result, , ];
  const obj13 = { variant: "heading-xxl/semibold", color: "text-overlay-light", lineClamp: 2, style: items7, children: name };
  items7 = [, ];
  const obj12 = { style: tmp.titleRow, children: items8 };
  ({ textShadow: arr9[0], title: arr9[1] } = tmp);
  items8 = [metroRequire(tmp2(5235).Text, obj13), ];
  let tmp12Result3 = game.id === hasOwnProperty;
  if (tmp12Result3) {
    const obj14 = { source: AssetRegistryDefault, style: tmp.wavingWumpus, accessible: false, importantForAccessibility: "no" };
    const tmp6Result = FastImageDefault;
    tmp12Result3 = tmp12(tmp6Result, obj14);
  }
  items8[1] = tmp12Result3;
  items6[1] = metroImportDefault(View, obj12);
  let tmp12Result4 = null;
  if (null != joined) {
    tmp12Result4 = null;
    if ("" !== joined) {
      const obj15 = { variant: "text-md/normal", color: "text-overlay-light", lineClamp: 2, style: tmp.textShadow, children: joined };
      tmp12Result4 = tmp12(tmp2(5235).Text, obj15);
    }
  }
  items6[2] = tmp12Result4;
  items5[1] = metroImportDefault(View, obj10);
  items4[1] = metroImportDefault(View, obj7);
  return metroImportDefault(View, obj2);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileHeader.tsx");

export default tmp6;
