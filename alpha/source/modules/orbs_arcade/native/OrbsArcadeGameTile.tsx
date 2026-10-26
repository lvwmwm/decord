// Module ID: 16401
// Function ID: 16402
// Name: OrbsArcadeGameTile
// Dependencies: [19, 17, 16394, 16396, 1087, 21, 4971, 587, 4968, 558, 576, 504, 5669, 5258, 5234, 16402, 16417, 7959, 16431, 1128, 16410, 5244, 6696, 16432, 6905, 5037, 2]

// Module 16401 (OrbsArcadeGameTile)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import ColorUtils from "ColorUtils" /* 4968 */;
import LinearGradientDefault from "LinearGradient" /* 5258 */;
import FastImageDefault from "FastImage" /* 5669 */;
import OrbsArcadeNativeConstants from "OrbsArcadeNativeConstants" /* 16396 */;
import OrbsArcadeRewardShelfDefault from "OrbsArcadeRewardShelf" /* 16402 */;
import openOrbsArcadeSheets from "openOrbsArcadeSheets" /* 16410 */;
import OrbsArcadePlayButtonDefault from "OrbsArcadePlayButton" /* 16417 */;
import AssetRegistryDefault from "AssetRegistry" /* 16431 */;
import OrbsArcadeGameContextMenuDefault from "OrbsArcadeGameContextMenu" /* 16432 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16394 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let theme;

let StyleSheet;
let c3;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let rect;
let tmp;
const native = tmp(5037);
({ View: c3, StyleSheet } = react_native);
const ORBS_ARCADE_GAME_TILE_MIN_HEIGHT = OrbsArcadeNativeConstants.ORBS_ARCADE_GAME_TILE_MIN_HEIGHT;
const ThemeTypes = Constants.ThemeTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
const result = createStyles.experimental_createToken((theme) => {
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
let closure_8 = createStyles.createStyleProperties({ gradientStart: result, gradientEnd: result1 });
createStyles = createStyles_mod;
let obj = { card: obj2, heroImage: { position: "absolute", top: 0, left: 0, right: 0, height: "79.567%", resizeMode: "cover" }, heroGradient: StyleSheet.absoluteFillObject, hero: { minHeight: ORBS_ARCADE_GAME_TILE_MIN_HEIGHT, justifyContent: "flex-end" }, overflowButton: rect, content: obj3, copy: obj4, buttonGroup: { paddingVertical: 0 } };
obj2 = { padding: 0, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
rect = { position: "absolute", top: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16 };
obj3 = { gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_16 };
obj4 = { gap: nativeDefault.space.PX_4 };
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeGameTileContent(game) {
  let asset;
  let first;
  let gradientEnd;
  let gradientStart;
  let instructions;
  let intl;
  let intl2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let name;
  let obj17;
  let tmp10;
  let tmp9;
  let obj = game(576);
  const cResult = obj.c(56);
  game = game.game;
  const tmp4 = closure_9();
  ({ gradientStart, gradientEnd } = closure_8());
  ({ name, asset, instructions } = game);
  let tmp6 = null;
  closure_8();
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
    const fn = function s() {
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
  if (cResult[4] === asset) {
    let tmp12;
    let tmp18;
    let tmp17;
    let tmp16;
    if (cResult[5] === tmp4.heroImage) {
      tmp12 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const point = { x: 0, y: 0 };
      const point1 = { x: 0, y: 1 };
      const items2 = [0, 0.55];
      cResult[7] = point;
      cResult[8] = point1;
      cResult[9] = items2;
      tmp18 = items2;
      tmp17 = point1;
      tmp16 = point;
    } else {
      tmp16 = cResult[7];
      tmp17 = cResult[8];
      tmp18 = cResult[9];
    }
    if (cResult[10] === gradientEnd) {
      let tmp19;
      if (cResult[11] === gradientStart) {
        tmp19 = cResult[12];
      }
      if (cResult[13] === tmp4.heroGradient) {
        let tmp20;
        let tmp24;
        let tmp27;
        if (cResult[14] === tmp19) {
          tmp20 = cResult[15];
        }
        if (cResult[16] !== name) {
          const obj2 = { variant: "heading-lg/semibold", color: "text-strong", children: name };
          const tmp26 = closure_6(game(5234).Heading, obj2);
          cResult[16] = name;
          cResult[17] = tmp26;
          tmp24 = tmp26;
        } else {
          tmp24 = cResult[17];
        }
        if (cResult[18] !== tmp6) {
          let tmp28 = null;
          if (null != tmp6) {
            const obj3 = { variant: "text-xs/medium", color: "text-subtle", children: tmp6 };
            tmp28 = closure_6(tmp(5234).Text, obj3);
          }
          cResult[18] = tmp6;
          cResult[19] = tmp28;
          tmp27 = tmp28;
        } else {
          tmp27 = cResult[19];
        }
        if (cResult[20] === tmp4.copy) {
          if (cResult[21] === tmp24) {
            let tmp30;
            let tmp34;
            let tmp38;
            let tmp42;
            let tmp43;
            if (cResult[22] === tmp27) {
              tmp30 = cResult[23];
            }
            if (cResult[24] !== game) {
              const obj4 = { game };
              const tmp37 = closure_6(OrbsArcadeRewardShelfDefault, obj4);
              cResult[24] = game;
              cResult[25] = tmp37;
              tmp34 = tmp37;
            } else {
              tmp34 = cResult[25];
            }
            let str2 = "vertical";
            if (stateFromStores) {
              str2 = "horizontal";
            }
            if (cResult[26] !== game) {
              const obj5 = { game, size: "md" };
              const tmp41 = closure_6(OrbsArcadePlayButtonDefault, obj5);
              cResult[26] = game;
              cResult[27] = tmp41;
              tmp38 = tmp41;
            } else {
              tmp38 = cResult[27];
            }
            if (cResult[28] === game.id) {
              if (cResult[29] === stateFromStores) {
                if (cResult[30] === tmp6) {
                  tmp42 = cResult[31];
                }
                if (cResult[32] === tmp4.buttonGroup) {
                  if (cResult[33] === str2) {
                    if (cResult[34] === tmp38) {
                      let tmp47;
                      if (cResult[35] === tmp42) {
                        tmp47 = cResult[36];
                      }
                      if (cResult[37] === tmp4.content) {
                        if (cResult[38] === tmp30) {
                          if (cResult[39] === tmp34) {
                            let tmp50;
                            if (cResult[40] === tmp47) {
                              tmp50 = cResult[41];
                            }
                            if (cResult[42] === tmp4.hero) {
                              if (cResult[43] === tmp50) {
                                if (cResult[44] === tmp12) {
                                  let tmp54;
                                  let tmp58;
                                  if (cResult[45] === tmp20) {
                                    tmp54 = cResult[46];
                                  }
                                  if (cResult[47] !== game) {
                                    const obj6 = { game };
                                    const tmp61 = closure_6(OrbsArcadeGameContextMenuDefault, obj6);
                                    cResult[47] = game;
                                    cResult[48] = tmp61;
                                    tmp58 = tmp61;
                                  } else {
                                    tmp58 = cResult[48];
                                  }
                                  if (cResult[49] === tmp4.overflowButton) {
                                    let tmp62;
                                    if (cResult[50] === tmp58) {
                                      tmp62 = cResult[51];
                                    }
                                    if (cResult[52] === tmp4.card) {
                                      if (cResult[53] === tmp54) {
                                        let tmp66;
                                        if (cResult[54] === tmp62) {
                                          tmp66 = cResult[55];
                                        }
                                        return tmp66;
                                      }
                                    }
                                    const obj7 = { style: tmp4.card, radius: 12, border: "subtle", children: items3 };
                                    items3 = [tmp54, tmp62];
                                    const tmp68 = closure_7(game(6905).Card, obj7);
                                    cResult[52] = tmp4.card;
                                    cResult[53] = tmp54;
                                    cResult[54] = tmp62;
                                    cResult[55] = tmp68;
                                    tmp66 = tmp68;
                                  }
                                  const obj8 = { style: tmp4.overflowButton, children: tmp58 };
                                  const tmp65 = closure_6(closure_3, obj8);
                                  cResult[49] = tmp4.overflowButton;
                                  cResult[50] = tmp58;
                                  cResult[51] = tmp65;
                                  tmp62 = tmp65;
                                }
                              }
                            }
                            const obj9 = { style: tmp4.hero, children: items4 };
                            items4 = [tmp12, tmp20, tmp50];
                            const tmp57 = closure_7(closure_3, obj9);
                            cResult[42] = tmp4.hero;
                            cResult[43] = tmp50;
                            cResult[44] = tmp12;
                            cResult[45] = tmp20;
                            cResult[46] = tmp57;
                            tmp54 = tmp57;
                          }
                        }
                      }
                      const obj10 = { style: tmp4.content, children: items5 };
                      items5 = [tmp30, tmp34, tmp47];
                      const tmp53 = closure_7(closure_3, obj10);
                      cResult[37] = tmp4.content;
                      cResult[38] = tmp30;
                      cResult[39] = tmp34;
                      cResult[40] = tmp47;
                      cResult[41] = tmp53;
                      tmp50 = tmp53;
                    }
                  }
                }
                const obj11 = { direction: str2, size: "md", style: tmp4.buttonGroup, children: items6 };
                items6 = [tmp38, tmp42];
                const tmp49 = closure_7(game(6696).ButtonGroup, obj11);
                cResult[32] = tmp4.buttonGroup;
                cResult[33] = str2;
                cResult[34] = tmp38;
                cResult[35] = tmp42;
                cResult[36] = tmp49;
                tmp47 = tmp49;
              }
            }
            if (null != tmp6) {
              if (stateFromStores) {
                const obj12 = {
                  variant: "secondary",
                  size: "md",
                  icon: AssetRegistryDefault,
                  accessibilityLabel: intl2.string(game(1128).t["uz4M/z"]),
                  onPress() {
                                  const obj = openOrbsArcadeSheets;
                                  return obj.openOrbsArcadeHowToPlaySheet(game.id);
                                }
                };
                const IconButton = tmp(7959).IconButton;
                intl2 = tmp(1128).intl;
                tmp43 = closure_6(IconButton, obj12);
              }
              cResult[28] = game.id;
              cResult[29] = stateFromStores;
              cResult[30] = tmp6;
              cResult[31] = tmp43;
              tmp42 = tmp43;
            }
            tmp43 = null;
            if (null != tmp6) {
              const obj13 = {
                grow: true,
                variant: "secondary",
                text: intl.string(game(1128).t["uz4M/z"]),
                onPress() {
                              const obj = openOrbsArcadeSheets;
                              return obj.openOrbsArcadeHowToPlaySheet(game.id);
                            }
              };
              const Button = tmp(5244).Button;
              intl = tmp(1128).intl;
              tmp43 = closure_6(Button, obj13);
            }
          }
        }
        const obj14 = { style: tmp4.copy, children: items7 };
        items7 = [tmp24, tmp27];
        const tmp33 = closure_7(closure_3, obj14);
        cResult[20] = tmp4.copy;
        cResult[21] = tmp24;
        cResult[22] = tmp27;
        cResult[23] = tmp33;
        tmp30 = tmp33;
      }
      const obj15 = { style: tmp4.heroGradient, start: tmp16, end: tmp17, locations: tmp18, colors: tmp19 };
      const tmp23 = closure_6(LinearGradientDefault, obj15);
      cResult[13] = tmp4.heroGradient;
      cResult[14] = tmp19;
      cResult[15] = tmp23;
      tmp20 = tmp23;
    }
    const items8 = [gradientStart, gradientEnd];
    cResult[10] = gradientEnd;
    cResult[11] = gradientStart;
    cResult[12] = items8;
    tmp19 = items8;
  }
  let tmp13 = null;
  if (null != asset) {
    const obj16 = { source: obj17, style: tmp4.heroImage, accessible: false };
    obj17 = { uri: asset };
    tmp13 = closure_6(FastImageDefault, obj16);
  }
  cResult[4] = asset;
  cResult[5] = tmp4.heroImage;
  cResult[6] = tmp13;
  tmp12 = tmp13;
}) : (function OrbsArcadeGameTileContent(game) {
  let asset;
  let gradientEnd;
  let gradientStart;
  let instructions;
  let intl;
  let intl2;
  let items3;
  let items4;
  let obj13;
  let obj5;
  let tmp12Result2;
  game = game.game;
  const tmp = closure_9();
  ({ asset, instructions } = game);
  let tmp3 = null;
  ({ gradientStart, gradientEnd } = closure_8());
  const name = game.name;
  closure_8();
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
  const obj2 = { style: tmp.card, radius: 12, border: "subtle", children: null };
  const obj3 = { style: tmp.hero, children: null };
  let tmp9 = null;
  const Card = game(6905).Card;
  if (null != asset) {
    const obj4 = { source: obj5, style: tmp.heroImage, accessible: false };
    obj5 = { uri: asset };
    tmp9 = closure_6(FastImageDefault, obj4);
  }
  const items2 = [tmp9, , ];
  const obj6 = { style: tmp.heroGradient, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, locations: [0, 0.55], colors: items3 };
  items3 = [gradientStart, gradientEnd];
  items2[1] = closure_6(LinearGradientDefault, obj6);
  const obj7 = { style: tmp.content, children: null };
  const obj8 = { style: tmp.copy, children: items4 };
  items4 = [closure_6(game(5234).Heading, { variant: "heading-lg/semibold", color: "text-strong", children: name }), ];
  let tmp12Result = null;
  if (null != tmp3) {
    const obj9 = { variant: "text-xs/medium", color: "text-subtle", children: tmp3 };
    tmp12Result = tmp12(tmp4(5234).Text, obj9);
  }
  items4[1] = tmp12Result;
  const items5 = [closure_7(closure_3, obj8), closure_6(OrbsArcadeRewardShelfDefault, { game }), ];
  let str2 = "vertical";
  const ButtonGroup = tmp4(6696).ButtonGroup;
  if (stateFromStores) {
    str2 = "horizontal";
  }
  const obj10 = { direction: str2, size: "md", style: tmp.buttonGroup, children: null };
  const items6 = [closure_6(OrbsArcadePlayButtonDefault, { game, size: "md" }), ];
  if (null != tmp3) {
    if (stateFromStores) {
      const obj11 = {
        variant: "secondary",
        size: "md",
        icon: AssetRegistryDefault,
        accessibilityLabel: intl2.string(game(1128).t["uz4M/z"]),
        onPress() {
              const obj = openOrbsArcadeSheets;
              return obj.openOrbsArcadeHowToPlaySheet(game.id);
            }
      };
      const IconButton = tmp4(7959).IconButton;
      intl2 = tmp4(1128).intl;
      tmp12Result2 = tmp12(IconButton, obj11);
    }
    items6[1] = tmp12Result2;
    obj10.children = items6;
    items5[2] = closure_7(ButtonGroup, obj10);
    obj7.children = items5;
    items2[2] = closure_7(closure_3, obj7);
    obj3.children = items2;
    const items7 = [closure_7(closure_3, obj3), ];
    const obj12 = { style: tmp.overflowButton, children: closure_6(OrbsArcadeGameContextMenuDefault, obj13) };
    obj13 = { game };
    items7[1] = closure_6(closure_3, obj12);
    obj2.children = items7;
    return closure_7(Card, obj2);
  }
  tmp12Result2 = null;
  if (null != tmp3) {
    const obj14 = {
      grow: true,
      variant: "secondary",
      text: intl.string(game(1128).t["uz4M/z"]),
      onPress() {
          const obj = openOrbsArcadeSheets;
          return obj.openOrbsArcadeHowToPlaySheet(game.id);
        }
    };
    const Button = tmp4(5244).Button;
    intl = tmp4(1128).intl;
    tmp12Result2 = tmp12(Button, obj14);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeGameTile(game) {
  let obj3;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(2);
  game = game.game;
  if (cResult[0] !== game) {
    const obj2 = { theme: ThemeTypes.ONYX, children: metroRequire(closure_10, obj3) };
    obj3 = { game };
    const ThemeContextProvider = native.ThemeContextProvider;
    const tmp8 = metroRequire(ThemeContextProvider, obj2);
    cResult[0] = game;
    cResult[1] = tmp8;
    tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function OrbsArcadeGameTile(game) {
  game = game.game;
  const obj = { theme: ThemeTypes.ONYX, children: metroRequire(closure_10, { game }) };
  const ThemeContextProvider = native.ThemeContextProvider;
  return metroRequire(ThemeContextProvider, obj);
});
const result2 = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeGameTile.tsx");

export default tmp8;
