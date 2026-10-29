// Module ID: 18883
// Function ID: 18884
// Name: OrbsArcadeGameScreen
// Dependencies: [19, 17, 6833, 16900, 1084, 5646, 18884, 6834, 21, 5005, 587, 16907, 16917, 558, 576, 1631, 504, 1504, 11871, 10879, 11598, 11872, 11876, 18885, 18886, 5071, 2]

// Module 18883 (OrbsArcadeGameScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import Link from "Link" /* 1504 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5646 */;
import leaveFrame from "leaveFrame" /* 10879 */;
import ActivityPanelNativeConstants from "ActivityPanelNativeConstants" /* 18884 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6833 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16900 */;
import FramesConstants from "FramesConstants" /* 6834 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let frame, game, set;

let FrameLayoutModes;
let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let rect;
let unpackModuleId;
const f138155 = (id) => id.id;
const View = react_native.View;
const ThemeTypes = Constants.ThemeTypes;
const ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT = ActivityPanelConstants.ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT;
const DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG = ActivityPanelNativeConstants.DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG;
({ getFrameLaunchParams: metroImportAll, isLaunched: c9, FrameLayoutModes } = FramesConstants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const OrbsArcadeGame = "OrbsArcadeGame";
const presentation = { layoutMode: FrameLayoutModes.FOCUSED, portraitSafeAreasConfig: DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG };
let createStyles = createStyles_mod;
let obj = { container: obj2, wrapper: obj3, header: rect };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BLACK };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, overflow: "hidden", borderTopStartRadius: nativeDefault.radii.lg, borderTopEndRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
rect = { position: "absolute", top: 0, left: 0, right: 0, height: ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK };
let closure_14 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeGameScreen(navigation) {
  let first;
  let frameId;
  let items2;
  let tmp8;
  let tmp9;
  let tmp = navigation;
  let obj = navigation(frameId[14]);
  const cResult = obj.c(43);
  navigation = navigation.navigation;
  const route = navigation.route;
  const params = route.params;
  frameId = params.frameId;
  const gameId = params.gameId;
  const claimableRewardIdsAtLaunch = params.claimableRewardIdsAtLaunch;
  const tmp4 = closure_14();
  let tmp5 = route;
  const rect = route(frameId[15])();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [closure_5];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== frameId) {
    const fn = function p() {
      return FramesStore.getFrame(frameId);
    };
    const items1 = [frameId];
    cResult[1] = frameId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(frameId[16]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
  closure_5 = tmp11;
  if (cResult[4] === null != stateFromStores) {
    if (cResult[5] === navigation) {
      let tmp12;
      let tmp13;
      if (cResult[6] === route.key) {
        tmp12 = cResult[7];
        tmp13 = cResult[8];
      }
      let obj3 = gameId;
      const effect = gameId.useEffect(tmp12, tmp13);
      let applicationId;
      let tmp5Result = tmp5(tmp2[18]);
      if (stateFromStores != null) {
        applicationId = stateFromStores.applicationId;
      }
      if (applicationId == null) {
        applicationId = null;
      }
      tmp5Result(applicationId);
      if (cResult[9] === frameId) {
        let tmp18;
        let tmp19;
        if (cResult[10] === gameId) {
          tmp18 = cResult[11];
          tmp19 = cResult[12];
        }
        const effect1 = obj3.useEffect(tmp18, tmp19);
        if (cResult[13] === claimableRewardIdsAtLaunch) {
          if (cResult[14] === gameId) {
            let tmp21;
            let tmp22;
            let tmp24;
            if (cResult[15] === navigation) {
              tmp21 = cResult[16];
              tmp22 = cResult[17];
            }
            const effect2 = obj3.useEffect(tmp21, tmp22);
            if (cResult[18] !== frameId) {
              const fn2 = function x() {
                const obj = leaveFrame;
                return obj.leaveFrame(frameId);
              };
              cResult[18] = frameId;
              class G {
                constructor() {
                  return navigation.addListener("beforeRemove", function() {
                    let closure_0 = claimableRewardIdsAtLaunch;
                    const obj = game;
                    game = game.getGame(gameId);
                    if (null != game) {
                      const _Set = Set;
                      const obj3 = navigation(frameId[11]);
                      const orbsArcadeClaimableRewards = obj3.getOrbsArcadeClaimableRewards(game.rewards, obj.getGameStateForGame(tmp));
                      const mapped = orbsArcadeClaimableRewards.map(f138155);
                      const self = this;
                      const self2 = this;
                      set = new Set(mapped.filter(function() { /* body not rendered: F138156 */ }));
                      const tmp5 = navigation;
                      const tmp6 = frameId;
                      if (set.size > 0) {
                        const tmp5Result = tmp5(tmp6[12]);
                        const result = tmp5Result.openOrbsArcadeRewardUnlockedSheet(tmp, set);
                      }
                    }
                  });
                }
              }
              cResult[19] = fn2;
              tmp24 = fn2;
            } else {
              tmp24 = cResult[19];
            }
            class G {
              constructor() {
                return navigation.addListener("beforeRemove", function() {
                  let closure_0 = claimableRewardIdsAtLaunch;
                  const obj = game;
                  game = game.getGame(gameId);
                  if (null != game) {
                    const _Set = Set;
                    const obj3 = navigation(frameId[11]);
                    const orbsArcadeClaimableRewards = obj3.getOrbsArcadeClaimableRewards(game.rewards, obj.getGameStateForGame(tmp));
                    const mapped = orbsArcadeClaimableRewards.map(f138155);
                    const self = this;
                    const self2 = this;
                    set = new Set(mapped.filter(function() { /* body not rendered: F138156 */ }));
                    const tmp5 = navigation;
                    const tmp6 = frameId;
                    if (set.size > 0) {
                      const tmp5Result = tmp5(tmp6[12]);
                      const result = tmp5Result.openOrbsArcadeRewardUnlockedSheet(tmp, set);
                    }
                  }
                });
              }
            }
            if (cResult[22] === tmp4.container) {
              let tmp26;
              if (cResult[23] === tmp25) {
                tmp26 = cResult[24];
              }
              const _Symbol = Symbol;
              class G {
                constructor() {
                  return navigation.addListener("beforeRemove", function() {
                    let closure_0 = claimableRewardIdsAtLaunch;
                    const obj = game;
                    game = game.getGame(gameId);
                    if (null != game) {
                      const _Set = Set;
                      const obj3 = navigation(frameId[11]);
                      const orbsArcadeClaimableRewards = obj3.getOrbsArcadeClaimableRewards(game.rewards, obj.getGameStateForGame(tmp));
                      const mapped = orbsArcadeClaimableRewards.map(f138155);
                      const self = this;
                      const self2 = this;
                      set = new Set(mapped.filter(function() { /* body not rendered: F138156 */ }));
                      const tmp5 = navigation;
                      const tmp6 = frameId;
                      if (set.size > 0) {
                        const tmp5Result = tmp5(tmp6[12]);
                        const result = tmp5Result.openOrbsArcadeRewardUnlockedSheet(tmp, set);
                      }
                    }
                  });
                }
              }
              if (cResult[26] === stateFromStores) {
                let tmp29;
                if (cResult[27] === frameId) {
                  tmp29 = cResult[28];
                }
                if (cResult[29] === stateFromStores) {
                  if (cResult[30] === gameId) {
                    if (cResult[31] === tmp24) {
                      if (cResult[32] === rect.left) {
                        if (cResult[33] === rect.right) {
                          let tmp35;
                          if (cResult[34] === tmp4.header) {
                            tmp35 = cResult[35];
                          }
                          if (cResult[36] === tmp4.wrapper) {
                            if (cResult[37] === tmp29) {
                              let tmp37;
                              if (cResult[38] === tmp35) {
                                tmp37 = cResult[39];
                              }
                              if (cResult[40] === tmp26) {
                                let tmp40;
                                if (cResult[41] === tmp37) {
                                  tmp40 = cResult[42];
                                }
                                return tmp40;
                              }
                              class G {
                                constructor() {
                                  return navigation.addListener("beforeRemove", function() {
                                    let closure_0 = claimableRewardIdsAtLaunch;
                                    const obj = game;
                                    game = game.getGame(gameId);
                                    if (null != game) {
                                      const _Set = Set;
                                      const obj3 = navigation(frameId[11]);
                                      const orbsArcadeClaimableRewards = obj3.getOrbsArcadeClaimableRewards(game.rewards, obj.getGameStateForGame(tmp));
                                      const mapped = orbsArcadeClaimableRewards.map(f138155);
                                      const self = this;
                                      const self2 = this;
                                      set = new Set(mapped.filter(function() { /* body not rendered: F138156 */ }));
                                      const tmp5 = navigation;
                                      const tmp6 = frameId;
                                      if (set.size > 0) {
                                        const tmp5Result = tmp5(tmp6[12]);
                                        const result = tmp5Result.openOrbsArcadeRewardUnlockedSheet(tmp, set);
                                      }
                                    }
                                  });
                                }
                              }
                              tmp42[0] = ThemeTypes.DARK;
                              const obj2 = { style: null, children: items2 };
                              class P {
                                constructor() {
                                  return () => {
                                    frame = frame.getFrame(closure_1_2);
                                    let tmp3 = null != frame;
                                    const tmp = closure_1_2;
                                    if (tmp3) {
                                      const tmp5 = closure_2_8(frame);
                                      let customId;
                                      if (tmp5 != null) {
                                        customId = tmp5.customId;
                                      }
                                      tmp3 = customId === gameId;
                                    }
                                    if (tmp3) {
                                      const obj = navigation(frameId[19]);
                                      obj.leaveFrame(tmp);
                                    }
                                  };
                                }
                              }
                              items2 = [tmp28, tmp37];
                              const ThemeContextProvider = tmp(tmp2[25]).ThemeContextProvider;
                              tmp42[1] = closure_11(claimableRewardIdsAtLaunch, obj2);
                              const tmp46 = closure_10(ThemeContextProvider, tmp42);
                              cResult[40] = tmp26;
                              cResult[41] = tmp37;
                              cResult[42] = tmp46;
                              tmp40 = tmp46;
                            }
                          }
                          class G {
                            constructor() {
                              return navigation.addListener("beforeRemove", function() {
                                let closure_0 = claimableRewardIdsAtLaunch;
                                const obj = game;
                                game = game.getGame(gameId);
                                if (null != game) {
                                  const _Set = Set;
                                  const obj3 = navigation(frameId[11]);
                                  const orbsArcadeClaimableRewards = obj3.getOrbsArcadeClaimableRewards(game.rewards, obj.getGameStateForGame(tmp));
                                  const mapped = orbsArcadeClaimableRewards.map(f138155);
                                  const self = this;
                                  const self2 = this;
                                  set = new Set(mapped.filter(function() { /* body not rendered: F138156 */ }));
                                  const tmp5 = navigation;
                                  const tmp6 = frameId;
                                  if (set.size > 0) {
                                    const tmp5Result = tmp5(tmp6[12]);
                                    const result = tmp5Result.openOrbsArcadeRewardUnlockedSheet(tmp, set);
                                  }
                                }
                              });
                            }
                          }
                          const items3 = [tmp29, tmp35];
                          const obj4 = { style: tmp4.wrapper, children: null };
                          class P {
                            constructor() {
                              return () => {
                                frame = frame.getFrame(closure_1_2);
                                let tmp3 = null != frame;
                                const tmp = closure_1_2;
                                if (tmp3) {
                                  const tmp5 = closure_2_8(frame);
                                  let customId;
                                  if (tmp5 != null) {
                                    customId = tmp5.customId;
                                  }
                                  tmp3 = customId === gameId;
                                }
                                if (tmp3) {
                                  const obj = navigation(frameId[19]);
                                  obj.leaveFrame(tmp);
                                }
                              };
                            }
                          }
                          const tmp39 = closure_11(claimableRewardIdsAtLaunch, obj4);
                          cResult[36] = tmp4.wrapper;
                          cResult[37] = tmp29;
                          cResult[38] = tmp35;
                          cResult[39] = tmp39;
                          tmp37 = tmp39;
                        }
                      }
                    }
                  }
                }
                class G {
                  constructor() {
                    return navigation.addListener("beforeRemove", function() {
                      let closure_0 = claimableRewardIdsAtLaunch;
                      const obj = game;
                      game = game.getGame(gameId);
                      if (null != game) {
                        const _Set = Set;
                        const obj3 = navigation(frameId[11]);
                        const orbsArcadeClaimableRewards = obj3.getOrbsArcadeClaimableRewards(game.rewards, obj.getGameStateForGame(tmp));
                        const mapped = orbsArcadeClaimableRewards.map(f138155);
                        const self = this;
                        const self2 = this;
                        set = new Set(mapped.filter(function() { /* body not rendered: F138156 */ }));
                        const tmp5 = navigation;
                        const tmp6 = frameId;
                        if (set.size > 0) {
                          const tmp5Result = tmp5(tmp6[12]);
                          const result = tmp5Result.openOrbsArcadeRewardUnlockedSheet(tmp, set);
                        }
                      }
                    });
                  }
                }
                cResult[29] = stateFromStores;
                cResult[30] = gameId;
                class P {
                  constructor() {
                    return () => {
                      frame = frame.getFrame(closure_1_2);
                      let tmp3 = null != frame;
                      const tmp = closure_1_2;
                      if (tmp3) {
                        const tmp5 = closure_2_8(frame);
                        let customId;
                        if (tmp5 != null) {
                          customId = tmp5.customId;
                        }
                        tmp3 = customId === gameId;
                      }
                      if (tmp3) {
                        const obj = navigation(frameId[19]);
                        obj.leaveFrame(tmp);
                      }
                    };
                  }
                }
                cResult[32] = rect.left;
                cResult[33] = rect.right;
                cResult[34] = tmp4.header;
                cResult[35] = null;
                tmp35 = tmp36;
              }
              let tmp31 = null;
              if (closure_9(stateFromStores)) {
                const obj5 = { frameId, level: tmp(frameId[22]).FrameStackLevel.AboveAppContent, presentation };
                class G {
                  constructor() {
                    return navigation.addListener("beforeRemove", function() {
                      let closure_0 = claimableRewardIdsAtLaunch;
                      const obj = game;
                      game = game.getGame(gameId);
                      if (null != game) {
                        const _Set = Set;
                        const obj3 = navigation(frameId[11]);
                        const orbsArcadeClaimableRewards = obj3.getOrbsArcadeClaimableRewards(game.rewards, obj.getGameStateForGame(tmp));
                        const mapped = orbsArcadeClaimableRewards.map(f138155);
                        const self = this;
                        const self2 = this;
                        set = new Set(mapped.filter(function() { /* body not rendered: F138156 */ }));
                        const tmp5 = navigation;
                        const tmp6 = frameId;
                        if (set.size > 0) {
                          const tmp5Result = tmp5(tmp6[12]);
                          const result = tmp5Result.openOrbsArcadeRewardUnlockedSheet(tmp, set);
                        }
                      }
                    });
                  }
                }
                tmp31 = closure_10(tmp33, obj5);
              }
              class P {
                constructor() {
                  return () => {
                    frame = frame.getFrame(closure_1_2);
                    let tmp3 = null != frame;
                    const tmp = closure_1_2;
                    if (tmp3) {
                      const tmp5 = closure_2_8(frame);
                      let customId;
                      if (tmp5 != null) {
                        customId = tmp5.customId;
                      }
                      tmp3 = customId === gameId;
                    }
                    if (tmp3) {
                      const obj = navigation(frameId[19]);
                      obj.leaveFrame(tmp);
                    }
                  };
                }
              }
              cResult[27] = frameId;
              cResult[28] = tmp31;
              tmp29 = tmp31;
            }
            const items4 = [tmp4.container, tmp25];
            class P {
              constructor() {
                return () => {
                  frame = frame.getFrame(closure_1_2);
                  let tmp3 = null != frame;
                  const tmp = closure_1_2;
                  if (tmp3) {
                    const tmp5 = closure_2_8(frame);
                    let customId;
                    if (tmp5 != null) {
                      customId = tmp5.customId;
                    }
                    tmp3 = customId === gameId;
                  }
                  if (tmp3) {
                    const obj = navigation(frameId[19]);
                    obj.leaveFrame(tmp);
                  }
                };
              }
            }
            cResult[23] = tmp25;
            cResult[24] = items4;
            tmp26 = items4;
          }
        }
        class G {
          constructor() {
            return navigation.addListener("beforeRemove", function() {
              let closure_0 = claimableRewardIdsAtLaunch;
              const obj = game;
              game = game.getGame(gameId);
              if (null != game) {
                const _Set = Set;
                const obj3 = navigation(frameId[11]);
                const orbsArcadeClaimableRewards = obj3.getOrbsArcadeClaimableRewards(game.rewards, obj.getGameStateForGame(tmp));
                const mapped = orbsArcadeClaimableRewards.map(f138155);
                const self = this;
                const self2 = this;
                set = new Set(mapped.filter(function() { /* body not rendered: F138156 */ }));
                const tmp5 = navigation;
                const tmp6 = frameId;
                if (set.size > 0) {
                  const tmp5Result = tmp5(tmp6[12]);
                  const result = tmp5Result.openOrbsArcadeRewardUnlockedSheet(tmp, set);
                }
              }
            });
          }
        }
        const items5 = [navigation, gameId, claimableRewardIdsAtLaunch];
        class P {
          constructor() {
            return () => {
              frame = frame.getFrame(closure_1_2);
              let tmp3 = null != frame;
              const tmp = closure_1_2;
              if (tmp3) {
                const tmp5 = closure_2_8(frame);
                let customId;
                if (tmp5 != null) {
                  customId = tmp5.customId;
                }
                tmp3 = customId === gameId;
              }
              if (tmp3) {
                const obj = navigation(frameId[19]);
                obj.leaveFrame(tmp);
              }
            };
          }
        }
        cResult[14] = gameId;
        cResult[15] = navigation;
        cResult[16] = G;
        cResult[17] = items5;
        tmp22 = items5;
        tmp21 = G;
      }
      class P {
        constructor() {
          return () => {
            frame = frame.getFrame(closure_1_2);
            let tmp3 = null != frame;
            const tmp = closure_1_2;
            if (tmp3) {
              const tmp5 = closure_2_8(frame);
              let customId;
              if (tmp5 != null) {
                customId = tmp5.customId;
              }
              tmp3 = customId === gameId;
            }
            if (tmp3) {
              const obj = navigation(frameId[19]);
              obj.leaveFrame(tmp);
            }
          };
        }
      }
      const items6 = [frameId, gameId];
      cResult[9] = frameId;
      cResult[10] = gameId;
      cResult[11] = P;
      cResult[12] = items6;
      tmp19 = items6;
      tmp18 = P;
    }
  }
  class T {
    constructor() {
      const tmp = closure_5;
      if (!tmp) {
        const dispatch = navigation.dispatch;
        const obj = { source: route.key };
        const CommonActions = Link.CommonActions;
        const merged = Object.assign(CommonActions.goBack());
        dispatch(obj);
      }
    }
  }
  const items7 = [null != stateFromStores, navigation, route.key];
  cResult[4] = null != stateFromStores;
  cResult[5] = navigation;
  cResult[6] = route.key;
  cResult[7] = T;
  cResult[8] = items7;
  tmp13 = items7;
  tmp12 = T;
}) : (function OrbsArcadeGameScreen(navigation) {
  let items10;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj4;
  navigation = navigation.navigation;
  const route = navigation.route;
  let closure_5;
  const params = route.params;
  const frameId = params.frameId;
  const gameId = params.gameId;
  const claimableRewardIdsAtLaunch = params.claimableRewardIdsAtLaunch;
  let tmp = closure_14();
  let tmp3 = frameId;
  const rect = route(frameId[15])();
  let obj = navigation(frameId[16]);
  const items = [closure_5];
  const items1 = [frameId];
  const stateFromStores = obj.useStateFromStores(items, () => FramesStore.getFrame(frameId), items1);
  let tmp6 = null != stateFromStores;
  closure_5 = tmp6;
  const items2 = [tmp6, navigation, route.key];
  const effect = gameId.useEffect(() => {
    const tmp = closure_5;
    if (!tmp) {
      const dispatch = navigation.dispatch;
      const obj = { source: route.key };
      const CommonActions = Link.CommonActions;
      const merged = Object.assign(CommonActions.goBack());
      dispatch(obj);
    }
  }, items2);
  let applicationId;
  const tmp8 = route(frameId[18]);
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  if (applicationId == null) {
    applicationId = null;
  }
  tmp8(applicationId);
  const items3 = [frameId, gameId];
  const effect1 = obj2.useEffect(() => () => {
    frame = frame.getFrame(closure_1_2);
    let tmp3 = null != frame;
    const tmp = closure_1_2;
    if (tmp3) {
      const tmp5 = closure_2_8(frame);
      let customId;
      if (tmp5 != null) {
        customId = tmp5.customId;
      }
      tmp3 = customId === gameId;
    }
    if (tmp3) {
      const obj = navigation(frameId[19]);
      obj.leaveFrame(tmp);
    }
  }, items3);
  const items4 = [navigation, gameId, claimableRewardIdsAtLaunch];
  const effect2 = obj2.useEffect(() => navigation.addListener("beforeRemove", function() {
    let closure_0 = claimableRewardIdsAtLaunch;
    const obj = game;
    game = game.getGame(gameId);
    if (null != game) {
      const _Set = Set;
      const obj3 = navigation(frameId[11]);
      const orbsArcadeClaimableRewards = obj3.getOrbsArcadeClaimableRewards(game.rewards, obj.getGameStateForGame(tmp));
      const mapped = orbsArcadeClaimableRewards.map(f138155);
      const self = this;
      const self2 = this;
      set = new Set(mapped.filter((item) => !closure_0.includes(item)));
      const tmp5 = navigation;
      const tmp6 = frameId;
      if (set.size > 0) {
        const tmp5Result = tmp5(tmp6[12]);
        const result = tmp5Result.openOrbsArcadeRewardUnlockedSheet(tmp, set);
      }
    }
  }), items4);
  const items5 = [frameId];
  const callback = obj2.useCallback(() => {
    const obj = leaveFrame;
    return obj.leaveFrame(frameId);
  }, items5);
  let obj3 = { theme: ThemeTypes.DARK, children: closure_11(claimableRewardIdsAtLaunch, obj4) };
  obj4 = { style: items6, children: items7 };
  items6 = [tmp.container, { paddingTop: rect.top }];
  const ThemeContextProvider = tmp4(tmp3[25]).ThemeContextProvider;
  items7 = [, ];
  const obj5 = { wakeLockKey: OrbsArcadeGame };
  items7[0] = closure_10(route(tmp3[20]), obj5);
  let tmp14Result = null;
  const obj6 = { style: tmp.wrapper, children: items8 };
  if (closure_9(stateFromStores)) {
    const obj7 = { frameId, level: navigation(tmp3[22]).FrameStackLevel.AboveAppContent, presentation };
    const tmp2Result = route(tmp3[21]);
    tmp14Result = tmp14(tmp2Result, obj7);
  }
  items8 = [tmp14Result, ];
  let tmp15Result = null;
  if (null != stateFromStores) {
    const obj8 = { style: items9, children: items10 };
    items9 = [tmp.header, ];
    items9[1] = { paddingLeft: route(tmp3[10]).space.PX_8 + rect.left, paddingRight: route(tmp3[10]).space.PX_8 + rect.right };
    const obj10 = { gameId, applicationId: stateFromStores.applicationId };
    const obj9 = { paddingLeft: route(tmp3[10]).space.PX_8 + rect.left, paddingRight: route(tmp3[10]).space.PX_8 + rect.right };
    items10 = [closure_10(tmp2(tmp3[23]), obj10), ];
    const obj11 = { onPress: callback };
    items10[1] = closure_10(navigation(tmp3[24]).BaseLeaveActivityButton, obj11);
    tmp15Result = tmp15(tmp16, obj8);
  }
  items8[1] = tmp15Result;
  items7[1] = closure_11(claimableRewardIdsAtLaunch, obj6);
  return closure_10(ThemeContextProvider, obj3);
});
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeGameScreen.tsx");

export default tmp5;
