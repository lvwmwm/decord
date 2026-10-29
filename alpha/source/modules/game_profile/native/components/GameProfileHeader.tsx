// Module ID: 9338
// Function ID: 9339
// Name: GameProfileHeader
// Dependencies: [19, 17, 9336, 21, 5005, 587, 558, 576, 5086, 9339, 9340, 5707, 5295, 9341, 9343, 5271, 9345, 2]

// Module 9338 (GameProfileHeader)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5086 */;
import LinearGradientDefault from "LinearGradient" /* 5295 */;
import FastImageDefault from "FastImage" /* 5707 */;
import useGameProfileHeroBackgroundURLDefault from "useGameProfileHeroBackgroundURL" /* 9340 */;
import GameCoverArtDefault from "GameCoverArt" /* 9341 */;
import AssetRegistryDefault from "AssetRegistry" /* 9345 */;
import react from "react" /* 19 */;
import GameProfileConstants from "GameProfileConstants" /* 9336 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

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
let obj7;
let rect;
let tmp;
const Text_Text = tmp(5271);
const SKUUtils = tmp(9339);
const GameCoverArt = tmp(9341);
let View = react_native.View;
({ DISCORD_APP_GAME_ID: hasOwnProperty, MOBILE_GAME_PROFILE_MAX_WIDTH } = GameProfileConstants);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let c8 = "rgba(0,0,0,0.3)";
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
let closure_9 = createStyles(obj);
const __initData = { code: "function GameProfileHeaderTsx1(){const{effectiveScrollY}=this.__closure;return{top:-Math.max(0,-effectiveScrollY.get())};}" };
const __initData2 = { code: "function GameProfileHeaderTsx2(){const{effectiveScrollY}=this.__closure;return{top:-Math.max(0,-effectiveScrollY.get())};}" };
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileHeader(arg0) {
  let game;
  let items1;
  let items2;
  let items3;
  let items4;
  let items6;
  let obj16;
  let onHeightMeasured;
  let scrollY;
  let tmp10;
  let tmp6;
  const tmp = require;
  let obj = react2;
  const cResult = obj.c(57);
  ({ game, scrollY, onHeightMeasured } = arg0);
  const tmp4 = closure_9();
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
  const name = game.name;
  if (cResult[0] !== game.genres) {
    const genres = game.genres;
    const mapped = genres.map(SKUUtils.getGenreText);
    const joined = mapped.join(", ");
    cResult[0] = game.genres;
    cResult[1] = joined;
    tmp6 = joined;
  } else {
    tmp6 = cResult[1];
  }
  const l30Rank = game.l30Rank;
  const tmp9 = useGameProfileHeroBackgroundURLDefault(game, 1024);
  if (cResult[2] !== onHeightMeasured) {
    const fn2 = function b(nativeEvent) {
      if (onHeightMeasured != null) {
        tmp(nativeEvent.nativeEvent.layout.height);
      }
    };
    cResult[2] = onHeightMeasured;
    cResult[3] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === animatedStyle) {
    let tmp11;
    if (cResult[5] === tmp4.artHero) {
      tmp11 = cResult[6];
    }
    if (cResult[7] === tmp9) {
      let tmp12;
      let tmp15;
      if (cResult[8] === tmp4.artHeroImage) {
        tmp12 = cResult[9];
      }
      if (cResult[10] !== tmp4.container.backgroundColor) {
        const items = [c8, tmp4.container.backgroundColor];
        cResult[10] = tmp4.container.backgroundColor;
        cResult[11] = items;
        tmp15 = items;
      } else {
        tmp15 = cResult[11];
      }
      if (cResult[12] === tmp4.artHeroGradient) {
        let tmp17;
        if (cResult[13] === tmp15) {
          tmp17 = cResult[14];
        }
        if (cResult[15] === tmp11) {
          if (cResult[16] === tmp12) {
            let tmp20;
            if (cResult[17] === tmp17) {
              tmp20 = cResult[18];
            }
            if (cResult[19] === game) {
              let tmp23;
              if (cResult[20] === tmp4.coverContainer) {
                tmp23 = cResult[21];
              }
              if (cResult[22] === tmp4.shadowContainer) {
                let tmp27;
                let tmp31;
                if (cResult[23] === tmp23) {
                  tmp27 = cResult[24];
                }
                if (cResult[25] !== l30Rank) {
                  let tmp32 = null != l30Rank;
                  if (tmp32) {
                    const obj3 = { rank: l30Rank };
                    tmp32 = metroRequire(tmp8(9343), obj3);
                  }
                  cResult[25] = l30Rank;
                  cResult[26] = tmp32;
                  tmp31 = tmp32;
                } else {
                  tmp31 = cResult[26];
                }
                if (cResult[27] === tmp4.textShadow) {
                  let tmp34;
                  if (cResult[28] === tmp4.title) {
                    tmp34 = cResult[29];
                  }
                  if (cResult[30] === name) {
                    let tmp35;
                    if (cResult[31] === tmp34) {
                      tmp35 = cResult[32];
                    }
                    if (cResult[33] === game.id) {
                      let tmp38;
                      if (cResult[34] === tmp4.wavingWumpus) {
                        tmp38 = cResult[35];
                      }
                      if (cResult[36] === tmp4.titleRow) {
                        if (cResult[37] === tmp35) {
                          let tmp43;
                          if (cResult[38] === tmp38) {
                            tmp43 = cResult[39];
                          }
                          if (cResult[40] === tmp6) {
                            let tmp47;
                            if (cResult[41] === tmp4.textShadow) {
                              tmp47 = cResult[42];
                            }
                            if (cResult[43] === tmp4.titleContainer) {
                              if (cResult[44] === tmp31) {
                                if (cResult[45] === tmp43) {
                                  let tmp50;
                                  if (cResult[46] === tmp47) {
                                    tmp50 = cResult[47];
                                  }
                                  if (cResult[48] === tmp4.headerContent) {
                                    if (cResult[49] === tmp50) {
                                      let tmp54;
                                      if (cResult[50] === tmp27) {
                                        tmp54 = cResult[51];
                                      }
                                      if (cResult[52] === tmp10) {
                                        if (cResult[53] === tmp4.container) {
                                          if (cResult[54] === tmp54) {
                                            let tmp58;
                                            if (cResult[55] === tmp20) {
                                              tmp58 = cResult[56];
                                            }
                                            return tmp58;
                                          }
                                        }
                                      }
                                      const obj4 = { style: tmp4.container, onLayout: tmp10, children: items1 };
                                      items1 = [tmp20, tmp54];
                                      const tmp61 = metroImportDefault(View, obj4);
                                      cResult[52] = tmp10;
                                      cResult[53] = tmp4.container;
                                      cResult[54] = tmp54;
                                      cResult[55] = tmp20;
                                      cResult[56] = tmp61;
                                      tmp58 = tmp61;
                                    }
                                  }
                                  const obj5 = { style: tmp4.headerContent, children: items2 };
                                  items2 = [tmp27, tmp50];
                                  const tmp57 = metroImportDefault(View, obj5);
                                  cResult[48] = tmp4.headerContent;
                                  cResult[49] = tmp50;
                                  cResult[50] = tmp27;
                                  cResult[51] = tmp57;
                                  tmp54 = tmp57;
                                }
                              }
                            }
                            const obj6 = { style: tmp4.titleContainer, children: items3 };
                            items3 = [tmp31, tmp43, tmp47];
                            const tmp53 = metroImportDefault(View, obj6);
                            cResult[43] = tmp4.titleContainer;
                            cResult[44] = tmp31;
                            cResult[45] = tmp43;
                            cResult[46] = tmp47;
                            cResult[47] = tmp53;
                            tmp50 = tmp53;
                          }
                          let tmp48 = null;
                          if (null != tmp6) {
                            tmp48 = null;
                            if ("" !== tmp6) {
                              const obj7 = { variant: "text-md/normal", color: "text-overlay-light", lineClamp: 2, style: tmp4.textShadow, children: tmp6 };
                              tmp48 = metroRequire(Text_Text.Text, obj7);
                            }
                          }
                          cResult[40] = tmp6;
                          cResult[41] = tmp4.textShadow;
                          cResult[42] = tmp48;
                          tmp47 = tmp48;
                        }
                      }
                      const obj8 = { style: tmp4.titleRow, children: items4 };
                      items4 = [tmp35, tmp38];
                      const tmp46 = metroImportDefault(View, obj8);
                      cResult[36] = tmp4.titleRow;
                      cResult[37] = tmp35;
                      cResult[38] = tmp38;
                      cResult[39] = tmp46;
                      tmp43 = tmp46;
                    }
                    let tmp40 = game.id === hasOwnProperty;
                    if (tmp40) {
                      const obj9 = { source: AssetRegistryDefault, style: tmp4.wavingWumpus, accessible: false, importantForAccessibility: "no" };
                      const tmp8Result = FastImageDefault;
                      tmp40 = metroRequire(tmp8Result, obj9);
                    }
                    cResult[33] = game.id;
                    cResult[34] = tmp4.wavingWumpus;
                    cResult[35] = tmp40;
                    tmp38 = tmp40;
                  }
                  const obj10 = { variant: "heading-xxl/semibold", color: "text-overlay-light", lineClamp: 2, style: tmp34, children: name };
                  const tmp37 = metroRequire(Text_Text.Text, obj10);
                  cResult[30] = name;
                  cResult[31] = tmp34;
                  cResult[32] = tmp37;
                  tmp35 = tmp37;
                }
                const items5 = [, ];
                ({ textShadow: arr5[0], title: arr5[1] } = tmp4);
                cResult[27] = tmp4.textShadow;
                cResult[28] = tmp4.title;
                cResult[29] = items5;
                tmp34 = items5;
              }
              const obj11 = { style: tmp4.shadowContainer, children: tmp23 };
              const tmp30 = metroRequire(View, obj11);
              cResult[22] = tmp4.shadowContainer;
              cResult[23] = tmp23;
              cResult[24] = tmp30;
              tmp27 = tmp30;
            }
            const obj12 = { game, imageSize: 114, size: GameCoverArt.GameCoverArtSize.LARGE, style: tmp4.coverContainer };
            const tmp8Result2 = GameCoverArtDefault;
            const tmp26 = metroRequire(tmp8Result2, obj12);
            cResult[19] = game;
            cResult[20] = tmp4.coverContainer;
            cResult[21] = tmp26;
            tmp23 = tmp26;
          }
        }
        const obj13 = { style: tmp11, children: items6 };
        items6 = [tmp12, tmp17];
        const tmp22 = metroImportDefault(ReanimatedRexportDefault.View, obj13);
        cResult[15] = tmp11;
        cResult[16] = tmp12;
        cResult[17] = tmp17;
        cResult[18] = tmp22;
        tmp20 = tmp22;
      }
      const obj14 = { colors: tmp15, style: tmp4.artHeroGradient };
      const tmp19 = metroRequire(LinearGradientDefault, obj14);
      cResult[12] = tmp4.artHeroGradient;
      cResult[13] = tmp15;
      cResult[14] = tmp19;
      tmp17 = tmp19;
    }
    let tmp13 = null != tmp9;
    if (tmp13) {
      const obj15 = { source: obj16, style: tmp4.artHeroImage };
      obj16 = { uri: tmp9 };
      tmp13 = metroRequire(tmp8(5707), obj15);
    }
    cResult[7] = tmp9;
    cResult[8] = tmp4.artHeroImage;
    cResult[9] = tmp13;
    tmp12 = tmp13;
  }
  const items7 = [tmp4.artHero, animatedStyle];
  cResult[4] = animatedStyle;
  cResult[5] = tmp4.artHero;
  cResult[6] = items7;
  tmp11 = items7;
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
  let tmp6Result;
  ({ game, scrollY, onHeightMeasured } = arg0);
  scrollY = undefined;
  const tmp = closure_9();
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
  const mapped = genres.map(tmp2(9339).getGenreText);
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
    tmp10 = metroRequire(tmp6(5707), obj4);
  }
  items2 = [tmp10, ];
  const obj6 = { colors: items3, style: tmp.artHeroGradient };
  items3 = [c8, tmp.container.backgroundColor];
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
    tmp12Result = tmp12(tmp6(9343), obj11);
  }
  items6 = [tmp12Result, , ];
  const obj13 = { variant: "heading-xxl/semibold", color: "text-overlay-light", lineClamp: 2, style: items7, children: name };
  items7 = [, ];
  const obj12 = { style: tmp.titleRow, children: items8 };
  ({ textShadow: arr9[0], title: arr9[1] } = tmp);
  items8 = [metroRequire(tmp2(5271).Text, obj13), ];
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
      tmp12Result4 = tmp12(tmp2(5271).Text, obj15);
    }
  }
  items6[2] = tmp12Result4;
  items5[1] = metroImportDefault(View, obj10);
  items4[1] = metroImportDefault(View, obj7);
  return metroImportDefault(View, obj2);
});
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileHeader.tsx");

export default tmp6;
