// Module ID: 16962
// Function ID: 16963
// Name: OrbsArcadeGameTile
// Dependencies: [19, 17, 5010, 16954, 16957, 1072, 21, 5009, 575, 5006, 504, 9675, 16930, 1499, 6971, 8864, 5712, 5582, 5619, 16963, 6761, 16978, 8020, 16992, 1114, 16971, 5629, 16993, 5075, 2]
// Exports: default

// Module 16962 (OrbsArcadeGameTile)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import ColorUtils from "ColorUtils" /* 5006 */;
import native from "native" /* 5075 */;
import AssetUtils from "AssetUtils" /* 9675 */;
import OrbsArcadeNativeConstants from "OrbsArcadeNativeConstants" /* 16957 */;
import openOrbsArcadeSheets from "openOrbsArcadeSheets" /* 16971 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16954 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
function OrbsArcadeGameTileContent(game) {
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
  ({ isInView, containerRef } = heroVideoAsset(16930)());
  heroVideoAsset(16930)();
  let tmp11 = !isInView;
  const tmp4Result = game(1499);
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
      const VideoComponent = tmp4(8864).VideoComponent;
      tmp15Result = closure_8(VideoComponent, obj5);
    }
    const items5 = [tmp15Result, , ];
    const obj8 = { style: tmp.heroGradient, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, locations: [0, 0.55], colors: items6 };
    items6 = [gradientStart, gradientEnd];
    items5[1] = closure_8(heroVideoAsset(5582), obj8);
    const obj9 = { style: tmp.content, children: null };
    const obj10 = { style: tmp.copy, children: items7 };
    const obj11 = { variant: "heading-lg/semibold", color: "text-strong", children: name };
    items7 = [closure_8(tmp4(5619).Heading, obj11), ];
    let tmp19Result = null;
    if (null != tmp3) {
      const obj12 = { variant: "text-xs/medium", color: "text-subtle", children: tmp3 };
      tmp19Result = tmp19(tmp4(5619).Text, obj12);
    }
    items7[1] = tmp19Result;
    const items8 = [closure_9(closure_4, obj10), , ];
    const obj13 = { game };
    items8[1] = closure_8(heroVideoAsset(16963), obj13);
    let str2 = "vertical";
    const ButtonGroup = tmp4(6761).ButtonGroup;
    if (stateFromStores) {
      str2 = "horizontal";
    }
    const obj14 = { direction: str2, size: "md", style: tmp.buttonGroup, children: null };
    const obj15 = { game, size: "md" };
    const items9 = [closure_8(heroVideoAsset(16978), obj15), ];
    if (null != tmp3) {
      if (stateFromStores) {
        const obj16 = {
          variant: "secondary",
          size: "md",
          icon: heroVideoAsset(16992),
          accessibilityLabel: intl2.string(game(1114).t["uz4M/z"]),
          onPress() {
                  const obj = openOrbsArcadeSheets;
                  return obj.openOrbsArcadeHowToPlaySheet(game.id);
                }
        };
        const IconButton = tmp4(8020).IconButton;
        intl2 = tmp4(1114).intl;
        tmp19Result2 = tmp19(IconButton, obj16);
      }
      items9[1] = tmp19Result2;
      obj14.children = items9;
      items8[2] = closure_9(ButtonGroup, obj14);
      obj9.children = items8;
      items5[2] = closure_9(closure_4, obj9);
      obj4.children = items5;
      const items10 = [closure_9(closure_4, obj4), ];
      const obj17 = { style: tmp.overflowButton, children: closure_8(heroVideoAsset(16993), obj18) };
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
        text: intl.string(game(1114).t["uz4M/z"]),
        onPress() {
              const obj = openOrbsArcadeSheets;
              return obj.openOrbsArcadeHowToPlaySheet(game.id);
            }
      };
      const Button = tmp4(5629).Button;
      intl = tmp4(1114).intl;
      tmp19Result2 = tmp19(Button, obj19);
    }
  }
  let tmp17 = null;
  if (null != asset) {
    const obj20 = { source: obj21, style: tmp.heroMedia, resizeMode: "cover", enableAnimation: !stateFromStores1, paused: tmp11, accessible: false };
    obj21 = { uri: asset };
    tmp17 = closure_8(tmp9(5712), obj20);
  }
  tmp15Result = tmp17;
}
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
let size = size_mod;
const result2 = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeGameTile.tsx");

export default function OrbsArcadeGameTile(game) {
  game = game.game;
  const obj = { theme: ThemeTypes.ONYX, children: metroImportAll(OrbsArcadeGameTileContent, { game }) };
  const ThemeContextProvider = native.ThemeContextProvider;
  return metroImportAll(ThemeContextProvider, obj);
};
