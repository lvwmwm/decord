// Module ID: 17290
// Function ID: 17291
// Name: OrbsArcadeGameTile
// Dependencies: [32, 19, 17, 5171, 17282, 17285, 1072, 21, 5170, 575, 5167, 504, 9801, 17258, 1500, 17291, 17292, 17293, 7065, 8965, 5872, 5745, 5781, 17319, 6847, 17301, 8119, 17324, 1113, 5788, 17325, 5229, 2]
// Exports: default

// Module 17290 (OrbsArcadeGameTile)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import ColorUtils from "ColorUtils" /* 5167 */;
import native from "native" /* 5229 */;
import AssetUtils from "AssetUtils" /* 9801 */;
import OrbsArcadeAnalytics from "OrbsArcadeAnalytics" /* 17292 */;
import openOrbsArcadeSheets from "openOrbsArcadeSheets" /* 17293 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 17282 */;
import OrbsArcadeNativeConstants from "OrbsArcadeNativeConstants" /* 17285 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

let theme;

let c10;
let c9;
let closure_12;
let hasOwnProperty;
let map1;
let metroRequire;
function OrbsArcadeGameTileContent(game) {
  let _undefined;
  let _undefined2;
  let asset;
  let c3;
  let c4;
  let containerRef;
  let gradientEnd;
  let gradientStart;
  let heroVideoAsset;
  let intl;
  let intl2;
  let isInView;
  let items6;
  let items7;
  let items8;
  let obj19;
  let obj22;
  let obj8;
  let tmp5;
  let useReducedMotion;
  game = game.game;
  const surface = game.surface;
  heroVideoAsset = undefined;
  _slicedToArray = undefined;
  react = undefined;
  const tmp = closure_14();
  ({ asset, heroVideoAsset } = game);
  const instructions = game.instructions;
  let result = null;
  ({ gradientStart, gradientEnd } = tmp);
  const name = game.name;
  if (null != heroVideoAsset) {
    result = null;
    if (heroVideoAsset.width > 0) {
      result = null;
      if (heroVideoAsset.height > 0) {
        result = heroVideoAsset.width / heroVideoAsset.height;
      }
    }
  }
  const tmp3 = closure_15(result);
  let obj = react;
  [tmp5, c3] = _slicedToArray(react.useState(null), 2);
  const tmp4 = _slicedToArray(react.useState(null), 2);
  [size, c4] = react.useState(null);
  let num2 = 0.52;
  _slicedToArray(react.useState(null), 2);
  const callback = react.useCallback((nativeEvent) => {
    const layout = nativeEvent.nativeEvent.layout;
    size = { width: layout.width, height: layout.height };
    _undefined2(size);
  }, []);
  if (null != result) {
    num2 = 0.52;
    if (null != size) {
      num2 = 0.52;
      if (size.height > 0) {
        const _Math = Math;
        num2 = Math.min(0.52, size.width / result / size.height);
      }
    }
  }
  let tmp9 = null;
  if (null != instructions) {
    tmp9 = null;
    if ("" !== instructions) {
      tmp9 = instructions;
    }
  }
  const obj2 = game(heroVideoAsset[11]);
  const items = [OrbsArcadeStore];
  const items1 = [game.id];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const gameStateForGame = OrbsArcadeStore.getGameStateForGame(game.id);
    let currentRun;
    if (gameStateForGame != null) {
      currentRun = gameStateForGame.currentRun;
    }
    return null != currentRun;
  }, items1);
  const items2 = [AccessibilityStore];
  const obj3 = game(heroVideoAsset[11]);
  const stateFromStores1 = obj3.useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  const items3 = [heroVideoAsset];
  const memo = obj.useMemo(() => {
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
  ({ isInView, containerRef } = surface(heroVideoAsset[13])());
  surface(heroVideoAsset[13])();
  const tmp10Result = game(heroVideoAsset[14]);
  if (isInView) {
    isInView = tmp10Result.useIsFocused();
  }
  surface(heroVideoAsset[15])(game, surface, isInView);
  const items4 = [game, surface];
  const callback1 = obj.useCallback(() => {
    const trackOrbsArcadeCtaClicked = OrbsArcadeAnalytics.trackOrbsArcadeCtaClicked;
    OrbsArcadeAnalytics;
    const result = trackOrbsArcadeCtaClicked(game, OrbsArcadeAnalytics.OrbsArcadeCta.HOW_TO_PLAY, OrbsArcadeAnalytics.OrbsArcadeCtaLocation.GAME_TILE, surface);
    const obj = openOrbsArcadeSheets;
    const result1 = obj.openOrbsArcadeHowToPlaySheet(game.id, surface);
  }, items4);
  const obj4 = { style: tmp3.card, radius: 12, border: "faint", children: null };
  const obj5 = { ref: containerRef, style: tmp3.hero, onLayout: callback, children: null };
  const obj6 = { style: tmp3.heroMediaFrame, children: null };
  if (null != heroVideoAsset) {
    if (!stateFromStores1) {
      let tmp22Result;
      let tmp22Result5;
      if (tmp5 !== heroVideoAsset.url) {
        const obj7 = {
          style: tmp3.heroMedia,
          source: obj8,
          poster: memo,
          posterResizeMode: "cover",
          resizeMode: "cover",
          paused: !isInView,
          onError() {
                  return _undefined(heroVideoAsset.url);
                },
          muted: true,
          disableFocus: true,
          preventsDisplaySleepDuringVideoPlayback: false,
          importantForAccessibility: "no-hide-descendants"
        };
        obj8 = { uri: heroVideoAsset.url };
        const VideoComponent = tmp10(tmp11[19]).VideoComponent;
        tmp22Result = tmp22(VideoComponent, obj7);
      }
      obj6.children = tmp22Result;
      const items5 = [closure_12(closure_6, obj6), , ];
      const obj9 = { style: tmp3.heroGradient, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, locations: items6, colors: items7 };
      items6 = [0, num2];
      items7 = [gradientStart, gradientEnd];
      items5[1] = closure_12(surface(heroVideoAsset[21]), obj9);
      const obj10 = { style: tmp3.content, children: null };
      const obj11 = { style: tmp3.copy, children: items8 };
      const obj12 = { variant: "heading-lg/semibold", color: "text-default", children: name };
      items8 = [closure_12(game(heroVideoAsset[22]).Heading, obj12), ];
      let tmp22Result4 = null;
      if (null != tmp9) {
        const obj13 = { variant: "body-xs/medium", color: "text-default", style: tmp3.description, children: tmp9 };
        tmp22Result4 = tmp22(tmp10(tmp11[22]).Text, obj13);
      }
      items8[1] = tmp22Result4;
      const items9 = [closure_13(closure_6, obj11), , ];
      const obj14 = { game, surface };
      items9[1] = closure_12(surface(heroVideoAsset[23]), obj14);
      let str2 = "vertical";
      const ButtonGroup = tmp10(tmp11[24]).ButtonGroup;
      if (stateFromStores) {
        str2 = "horizontal";
      }
      const obj15 = { direction: str2, size: "md", style: tmp3.buttonGroup, children: null };
      const obj16 = { game, size: "md", location: game(heroVideoAsset[16]).OrbsArcadeCtaLocation.GAME_TILE, surface };
      const tmp15Result = surface(heroVideoAsset[25]);
      const items10 = [closure_12(tmp15Result, obj16), ];
      if (null != tmp9) {
        if (stateFromStores) {
          const obj17 = { variant: "secondary", size: "md", icon: surface(heroVideoAsset[27]), accessibilityLabel: intl2.string(game(heroVideoAsset[28]).t["uz4M/z"]), onPress: callback1 };
          const IconButton = tmp10(tmp11[26]).IconButton;
          intl2 = tmp10(tmp11[28]).intl;
          tmp22Result5 = tmp22(IconButton, obj17);
        }
        items10[1] = tmp22Result5;
        obj15.children = items10;
        items9[2] = closure_13(ButtonGroup, obj15);
        obj10.children = items9;
        items5[2] = closure_13(closure_6, obj10);
        obj5.children = items5;
        const items11 = [closure_13(closure_6, obj5), ];
        const obj18 = { style: tmp3.overflowButton, children: closure_12(surface(heroVideoAsset[30]), obj19) };
        obj19 = { game, surface };
        items11[1] = closure_12(closure_6, obj18);
        obj4.children = items11;
        return closure_13(tmp20, obj4);
      }
      tmp22Result5 = null;
      if (null != tmp9) {
        const obj20 = { grow: true, variant: "secondary", text: intl.string(game(heroVideoAsset[28]).t["uz4M/z"]), onPress: callback1 };
        const Button = tmp10(tmp11[29]).Button;
        intl = tmp10(tmp11[28]).intl;
        tmp22Result5 = tmp22(Button, obj20);
      }
    }
  }
  let tmp22Result6 = null;
  if (null != asset) {
    const obj21 = { source: obj22, style: tmp3.heroMedia, resizeMode: "cover", enableAnimation: !stateFromStores1, paused: !isInView, accessible: false };
    obj22 = { uri: asset };
    tmp22Result6 = tmp22(tmp15(tmp11[20]), obj21);
  }
  tmp22Result = tmp22Result6;
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
({ ORBS_ARCADE_GAME_TILE_MAX_WIDTH: c9, ORBS_ARCADE_GAME_TILE_MIN_HEIGHT: c10 } = OrbsArcadeNativeConstants);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let result = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  const internal = nativeDefault.internal;
  const semanticColor = internal.resolveSemanticColor(theme, nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
  const obj = ColorUtils;
  return obj.hexOpacityToRgba(semanticColor, 0);
});
createStyles = createStyles_mod;
let result1 = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  const internal = nativeDefault.internal;
  return internal.resolveSemanticColor(theme, nativeDefault.colors.BACKGROUND_SURFACE_HIGH);
});
createStyles = createStyles_mod;
let closure_14 = createStyles.createStyleProperties({ gradientStart: result, gradientEnd: result1 });
createStyles = createStyles_mod;
let closure_15 = createStyles.createStyles((aspectRatio) => {
  let min;
  let rect;
  let rect1;
  let result;
  let str;
  let tmp;
  const obj = { minHeight, width: "100%", maxWidth: min(tmp, result), alignSelf: "center", padding: 0, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
  result = React4;
  const _Math = Math;
  min = Math.min;
  tmp = React4;
  if (null != aspectRatio) {
    result = minHeight * aspectRatio;
  }
  const obj3 = { card: obj, heroMediaFrame: rect, heroMedia: null, heroGradient: null, hero: { flexGrow: 1, justifyContent: "flex-end" }, overflowButton: rect1, content: { gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_16 }, copy: { gap: nativeDefault.space.PX_4 }, description: { opacity: 0.8 }, buttonGroup: { paddingVertical: 0 } };
  rect = { position: "absolute", top: 0, left: 0, right: 0, aspectRatio, height: str, overflow: "hidden" };
  str = undefined;
  if (null == aspectRatio) {
    str = "79.567%";
  }
  ({ absoluteFillObject: obj2.heroMedia, absoluteFillObject: obj2.heroGradient } = hasOwnProperty);
  rect1 = { position: "absolute", top: tmp3(575).space.PX_16, right: tmp3(575).space.PX_16 };
  ({ gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_16 });
  ({ gap: nativeDefault.space.PX_4 });
  return obj3;
});
let size = size_mod;
const result2 = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeGameTile.tsx");

export default function OrbsArcadeGameTile(arg0) {
  let game;
  let surface;
  ({ game, surface } = arg0);
  const obj = { theme: ThemeTypes.ONYX, children: authStore2(OrbsArcadeGameTileContent, { game, surface }) };
  const ThemeContextProvider = native.ThemeContextProvider;
  return authStore2(ThemeContextProvider, obj);
};
