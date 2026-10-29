// Module ID: 16908
// Function ID: 16909
// Name: OrbsArcadeGameTile
// Dependencies: [19, 17, 5006, 16900, 16903, 1084, 21, 5005, 587, 5002, 558, 576, 504, 9650, 16876, 1504, 8830, 5707, 5295, 5271, 16909, 16924, 8014, 16938, 1125, 16917, 5281, 6754, 16939, 6965, 5071, 2]

// Module 16908 (OrbsArcadeGameTile)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import ColorUtils from "ColorUtils" /* 5002 */;
import LinearGradientDefault from "LinearGradient" /* 5295 */;
import AssetUtils from "AssetUtils" /* 9650 */;
import useIsCarouselInViewDefault from "useIsCarouselInView" /* 16876 */;
import OrbsArcadeNativeConstants from "OrbsArcadeNativeConstants" /* 16903 */;
import openOrbsArcadeSheets from "openOrbsArcadeSheets" /* 16917 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5006 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16900 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let theme;

let StyleSheet;
let c9;
let closure_4;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let rect;
let tmp;
const native = tmp(5071);
({ View: closure_4, StyleSheet } = react_native);
const ORBS_ARCADE_GAME_TILE_MIN_HEIGHT = OrbsArcadeNativeConstants.ORBS_ARCADE_GAME_TILE_MIN_HEIGHT;
const ThemeTypes = Constants.ThemeTypes;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let result = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  const internal = nativeDefault.internal;
  const semanticColor = internal.resolveSemanticColor(theme, nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
  const obj = ColorUtils;
  return obj.hexOpacityToRgba(semanticColor, 0);
});
createStyles = createStyles_mod;
const result1 = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  const internal = nativeDefault.internal;
  return internal.resolveSemanticColor(theme, nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
});
createStyles = createStyles_mod;
let closure_10 = createStyles.createStyleProperties({ gradientStart: result, gradientEnd: result1 });
createStyles = createStyles_mod;
let obj = { card: obj2, heroMedia: { position: "absolute", top: 0, left: 0, right: 0, height: "79.567%" }, heroVideo: { position: "absolute", top: 0, left: 0, right: 0 }, heroGradient: StyleSheet.absoluteFillObject, hero: { minHeight: ORBS_ARCADE_GAME_TILE_MIN_HEIGHT, justifyContent: "flex-end" }, overflowButton: rect, content: obj3, copy: obj4, buttonGroup: { paddingVertical: 0 } };
obj2 = { padding: 0, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
rect = { position: "absolute", top: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16 };
obj3 = { gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_16 };
obj4 = { gap: nativeDefault.space.PX_4 };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeGameTileContent(game) {
  let asset;
  let containerRef;
  let first;
  let gradientEnd;
  let gradientStart;
  let heroVideoAsset;
  let instructions;
  let isInView;
  let items3;
  let items5;
  let name;
  let obj7;
  let obj9;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp16;
  let tmp23;
  let tmp9;
  let useReducedMotion;
  let obj = game(576);
  const cResult = obj.c(66);
  game = game.game;
  const tmp4 = closure_11();
  ({ gradientStart, gradientEnd } = closure_10());
  ({ name, asset, heroVideoAsset, instructions } = game);
  let tmp6 = null;
  closure_10();
  if (null != instructions) {
    tmp6 = null;
    if ("" !== instructions) {
      tmp6 = instructions;
    }
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [OrbsArcadeStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== game.id) {
    const fn = function n() {
      const gameStateForGame = OrbsArcadeStore.getGameStateForGame(game.id);
      let currentRun;
      if (gameStateForGame != null) {
        currentRun = gameStateForGame.currentRun;
      }
      return null != currentRun;
    };
    const items1 = [game.id];
    cResult[1] = game.id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp10 = items1;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = game(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [AccessibilityStore];
    class F {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[4] = items2;
    cResult[5] = F;
    tmp13 = F;
    tmp12 = items2;
  } else {
    tmp12 = cResult[4];
    tmp13 = cResult[5];
  }
  const tmpResult4 = game(504);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp12, tmp13);
  if (cResult[6] !== heroVideoAsset) {
    let result = null;
    if (null != heroVideoAsset) {
      size = { width: heroVideoAsset.width, height: null };
      const tmpResult5 = game(9650);
      class F {
        constructor() {
          return useReducedMotion.useReducedMotion;
        }
      }
      result = tmpResult5.convertVideoToFirstFrameImageWithMediaProxy(heroVideoAsset.url, size);
    }
    class F {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[7] = result;
    tmp16 = result;
  } else {
    tmp16 = cResult[7];
  }
  if (asset == null) {
    asset = tmp16;
  }
  ({ containerRef, isInView } = useIsCarouselInViewDefault());
  useIsCarouselInViewDefault();
  let tmp20 = !isInView;
  const tmpResult6 = game(1504);
  if (isInView) {
    tmp20 = !tmpResult6.useIsFocused();
  }
  if (cResult[8] === asset) {
    if (cResult[9] === heroVideoAsset) {
      if (cResult[10] === tmp16) {
        if (cResult[11] === tmp20) {
          if (cResult[12] === stateFromStores1) {
            if (cResult[13] === tmp4.heroMedia) {
              const _Symbol = Symbol;
              class F {
                constructor() {
                  return useReducedMotion.useReducedMotion;
                }
              }
              if (cResult[19] === gradientEnd) {
                let tmp31;
                if (cResult[20] === gradientStart) {
                  tmp31 = cResult[21];
                }
                if (cResult[22] === tmp4.heroGradient) {
                  let tmp36;
                  let tmp39;
                  if (cResult[25] !== name) {
                    class F {
                      constructor() {
                        return useReducedMotion.useReducedMotion;
                      }
                    }
                    cResult[25] = name;
                    cResult[26] = tmp38;
                    tmp36 = tmp38;
                  } else {
                    tmp36 = cResult[26];
                  }
                  if (cResult[27] !== tmp6) {
                    if (null != tmp6) {
                      class F {
                        constructor() {
                          return useReducedMotion.useReducedMotion;
                        }
                      }
                    }
                    class F {
                      constructor() {
                        return useReducedMotion.useReducedMotion;
                      }
                    }
                    cResult[28] = null;
                    tmp39 = tmp40;
                  } else {
                    tmp39 = cResult[28];
                  }
                  class F {
                    constructor() {
                      return useReducedMotion.useReducedMotion;
                    }
                  }
                  const obj4 = { style: tmp4.copy, children: items3 };
                  items3 = [tmp36, tmp39];
                  cResult[29] = tmp4.copy;
                  cResult[30] = tmp36;
                  cResult[31] = tmp39;
                  cResult[32] = closure_9(closure_4, obj4);
                  const tmp45 = closure_9(closure_4, obj4);
                }
                class F {
                  constructor() {
                    return useReducedMotion.useReducedMotion;
                  }
                }
                tmp34[0] = tmp4.heroGradient;
                tmp34[1] = tmp29;
                tmp34[2] = tmp30;
                tmp34[3] = tmp28;
                tmp34[4] = tmp31;
                cResult[22] = tmp4.heroGradient;
                cResult[23] = tmp31;
                cResult[24] = closure_8(LinearGradientDefault, tmp34);
                const tmp35 = closure_8(LinearGradientDefault, tmp34);
              }
              const items4 = [gradientStart, gradientEnd];
              cResult[19] = gradientEnd;
              cResult[20] = gradientStart;
              cResult[21] = items4;
              tmp31 = items4;
            }
          }
        }
      }
    }
  }
  if (null != heroVideoAsset) {
    let tmp22Result;
    if (!stateFromStores1) {
      const obj5 = { style: items5, source: obj7, poster: tmp23, posterResizeMode: "cover", resizeMode: "cover", paused: tmp20, muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants" };
      items5 = [, ];
      const tmp22 = closure_8;
      class F {
        constructor() {
          return useReducedMotion.useReducedMotion;
        }
      }
      const obj6 = { aspectRatio: heroVideoAsset.width / heroVideoAsset.height };
      items5[1] = obj6;
      obj7 = { uri: heroVideoAsset.url };
      const VideoComponent = tmp(8830).VideoComponent;
      tmp22Result = tmp22(VideoComponent, obj5);
      tmp23 = tmp16;
    }
    cResult[8] = asset;
    class F {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[9] = heroVideoAsset;
    cResult[10] = tmp16;
    cResult[11] = tmp20;
    cResult[12] = stateFromStores1;
    cResult[13] = tmp4.heroMedia;
    cResult[14] = tmp4.heroVideo;
    cResult[15] = tmp22Result;
  }
  let tmp25 = null;
  if (null != asset) {
    const obj8 = { source: obj9, style: tmp4.heroMedia, resizeMode: "cover", enableAnimation: !stateFromStores1, paused: tmp20, accessible: false };
    obj9 = { uri: null };
    class F {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    tmp25 = closure_8(tmp18(5707), obj8);
  }
  tmp22Result = tmp25;
}) : (function OrbsArcadeGameTileContent(game) {
  let asset;
  let containerRef;
  let gradientEnd;
  let gradientStart;
  let heroVideoAsset;
  let intl;
  let intl2;
  let isInView;
  let items4;
  let items6;
  let items7;
  let obj18;
  let obj21;
  let obj7;
  let useReducedMotion;
  game = game.game;
  heroVideoAsset = undefined;
  const tmp = closure_11();
  ({ asset, heroVideoAsset } = game);
  const instructions = game.instructions;
  let tmp3 = null;
  ({ gradientStart, gradientEnd } = closure_10());
  const name = game.name;
  closure_10();
  if (null != instructions) {
    tmp3 = null;
    if ("" !== instructions) {
      tmp3 = instructions;
    }
  }
  let obj = game(504);
  const items = [OrbsArcadeStore];
  const items1 = [game.id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const gameStateForGame = OrbsArcadeStore.getGameStateForGame(game.id);
    let currentRun;
    if (gameStateForGame != null) {
      currentRun = gameStateForGame.currentRun;
    }
    return null != currentRun;
  }, items1);
  const obj2 = game(504);
  const items2 = [AccessibilityStore];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  const items3 = [heroVideoAsset];
  const memo = react.useMemo(() => {
    let result = null;
    if (null != heroVideoAsset) {
      size = { width: null, height: null };
      ({ width: obj2.width, height: obj2.height } = heroVideoAsset);
      const obj = AssetUtils;
      result = obj.convertVideoToFirstFrameImageWithMediaProxy(tmp.url, size);
    }
    return result;
  }, items3);
  if (asset == null) {
    asset = memo;
  }
  ({ isInView, containerRef } = heroVideoAsset(16876)());
  heroVideoAsset(16876)();
  let tmp11 = !isInView;
  const tmp4Result = game(1504);
  if (isInView) {
    tmp11 = !tmp4Result.useIsFocused();
  }
  const obj3 = { style: tmp.card, radius: 12, border: "subtle", children: null };
  const obj4 = { ref: containerRef, style: tmp.hero, children: null };
  if (null != heroVideoAsset) {
    let tmp15Result;
    let tmp19Result2;
    if (!stateFromStores1) {
      const obj5 = { style: items4, source: obj7, poster: memo, posterResizeMode: "cover", resizeMode: "cover", paused: tmp11, muted: true, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants" };
      items4 = [tmp.heroVideo, ];
      const obj6 = { aspectRatio: heroVideoAsset.width / heroVideoAsset.height };
      items4[1] = obj6;
      obj7 = { uri: heroVideoAsset.url };
      const VideoComponent = tmp4(8830).VideoComponent;
      tmp15Result = closure_8(VideoComponent, obj5);
    }
    const items5 = [tmp15Result, , ];
    const obj8 = { style: tmp.heroGradient, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, locations: [0, 0.55], colors: items6 };
    items6 = [gradientStart, gradientEnd];
    items5[1] = closure_8(heroVideoAsset(5295), obj8);
    const obj9 = { style: tmp.content, children: null };
    const obj10 = { style: tmp.copy, children: items7 };
    const obj11 = { variant: "heading-lg/semibold", color: "text-strong", children: name };
    items7 = [closure_8(tmp4(5271).Heading, obj11), ];
    let tmp19Result = null;
    if (null != tmp3) {
      const obj12 = { variant: "text-xs/medium", color: "text-subtle", children: tmp3 };
      tmp19Result = tmp19(tmp4(5271).Text, obj12);
    }
    items7[1] = tmp19Result;
    const items8 = [closure_9(closure_4, obj10), , ];
    const obj13 = { game };
    items8[1] = closure_8(heroVideoAsset(16909), obj13);
    let str2 = "vertical";
    const ButtonGroup = tmp4(6754).ButtonGroup;
    if (stateFromStores) {
      str2 = "horizontal";
    }
    const obj14 = { direction: str2, size: "md", style: tmp.buttonGroup, children: null };
    const obj15 = { game, size: "md" };
    const items9 = [closure_8(heroVideoAsset(16924), obj15), ];
    if (null != tmp3) {
      if (stateFromStores) {
        const obj16 = {
          variant: "secondary",
          size: "md",
          icon: heroVideoAsset(16938),
          accessibilityLabel: intl2.string(game(1125).t["uz4M/z"]),
          onPress() {
                  const obj = openOrbsArcadeSheets;
                  return obj.openOrbsArcadeHowToPlaySheet(game.id);
                }
        };
        const IconButton = tmp4(8014).IconButton;
        intl2 = tmp4(1125).intl;
        tmp19Result2 = tmp19(IconButton, obj16);
      }
      items9[1] = tmp19Result2;
      obj14.children = items9;
      items8[2] = closure_9(ButtonGroup, obj14);
      obj9.children = items8;
      items5[2] = closure_9(closure_4, obj9);
      obj4.children = items5;
      const items10 = [closure_9(closure_4, obj4), ];
      const obj17 = { style: tmp.overflowButton, children: closure_8(heroVideoAsset(16939), obj18) };
      obj18 = { game };
      items10[1] = closure_8(closure_4, obj17);
      obj3.children = items10;
      return closure_9(tmp13, obj3);
    }
    tmp19Result2 = null;
    if (null != tmp3) {
      const obj19 = {
        grow: true,
        variant: "secondary",
        text: intl.string(game(1125).t["uz4M/z"]),
        onPress() {
              const obj = openOrbsArcadeSheets;
              return obj.openOrbsArcadeHowToPlaySheet(game.id);
            }
      };
      const Button = tmp4(5281).Button;
      intl = tmp4(1125).intl;
      tmp19Result2 = tmp19(Button, obj19);
    }
  }
  let tmp17 = null;
  if (null != asset) {
    const obj20 = { source: obj21, style: tmp.heroMedia, resizeMode: "cover", enableAnimation: !stateFromStores1, paused: tmp11, accessible: false };
    obj21 = { uri: asset };
    tmp17 = closure_8(tmp9(5707), obj20);
  }
  tmp15Result = tmp17;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeGameTile(game) {
  let obj3;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  game = game.game;
  if (cResult[0] !== game) {
    const obj2 = { theme: ThemeTypes.ONYX, children: metroImportAll(closure_12, obj3) };
    obj3 = { game };
    const ThemeContextProvider = native.ThemeContextProvider;
    const tmp8 = metroImportAll(ThemeContextProvider, obj2);
    cResult[0] = game;
    cResult[1] = tmp8;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function OrbsArcadeGameTile(game) {
  game = game.game;
  const obj = { theme: ThemeTypes.ONYX, children: metroImportAll(closure_12, { game }) };
  const ThemeContextProvider = native.ThemeContextProvider;
  return metroImportAll(ThemeContextProvider, obj);
});
let size = size_mod;
const result2 = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeGameTile.tsx");

export default tmp7;
