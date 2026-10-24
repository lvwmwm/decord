// Module ID: 18360
// Function ID: 18361
// Name: OrbsArcadeGameScreen
// Dependencies: [19, 17, 6775, 16390, 1087, 5609, 18361, 6776, 21, 4971, 587, 16396, 16406, 558, 576, 1633, 504, 1506, 11886, 10765, 11500, 11887, 11891, 18362, 18363, 5037, 2]

// Module 18360 (OrbsArcadeGameScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import Link from "Link" /* 1506 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5609 */;
import leaveFrame from "leaveFrame" /* 10765 */;
import ActivityPanelNativeConstants from "ActivityPanelNativeConstants" /* 18361 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6775 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 16390 */;
import FramesConstants from "FramesConstants" /* 6776 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let game, set;

let FrameLayoutModes;
let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let rect;
const f135389 = (id) => id.id;
const View = react_native.View;
const ThemeTypes = Constants.ThemeTypes;
const ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT = ActivityPanelConstants.ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT;
const DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG = ActivityPanelNativeConstants.DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG;
({ isLaunched: metroImportAll, FrameLayoutModes } = FramesConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
const OrbsArcadeGame = "OrbsArcadeGame";
const presentation = { layoutMode: FrameLayoutModes.FOCUSED, portraitSafeAreasConfig: DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG };
let createStyles = createStyles_mod;
let obj = { container: obj2, wrapper: obj3, header: rect };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BLACK };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, overflow: "hidden", borderTopStartRadius: nativeDefault.radii.lg, borderTopEndRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
rect = { position: "absolute", top: 0, left: 0, right: 0, height: ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK };
let closure_13 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeGameScreen(navigation) {
  let first;
  let frameId;
  let tmp10;
  let tmp9;
  let tmp = navigation;
  let obj = navigation(frameId[14]);
  const cResult = obj.c(41);
  navigation = navigation.navigation;
  const route = navigation.route;
  const params = route.params;
  frameId = params.frameId;
  const gameId = params.gameId;
  const claimableRewardIdsAtLaunch = params.claimableRewardIdsAtLaunch;
  closure_13();
  let tmp5 = route;
  let tmp6 = route(frameId[15])();
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
    tmp10 = items1;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = tmp(frameId[16]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp9, tmp10);
  closure_5 = tmp12;
  if (cResult[4] === null != stateFromStores) {
    if (cResult[5] === navigation) {
      let tmp13;
      let tmp14;
      let tmp20;
      let tmp19;
      if (cResult[6] === route.key) {
        tmp13 = cResult[7];
        tmp14 = cResult[8];
      }
      let obj3 = gameId;
      const effect = gameId.useEffect(tmp13, tmp14);
      let applicationId;
      let tmp5Result = tmp5(tmp2[18]);
      if (stateFromStores != null) {
        applicationId = stateFromStores.applicationId;
      }
      if (applicationId == null) {
        applicationId = null;
      }
      tmp5Result(applicationId);
      if (cResult[9] !== frameId) {
        class O {
          constructor() {
            return () => {
              const tmp = closure_1_2;
              if (null != frame.getFrame(closure_1_2)) {
                const obj = navigation(frameId[19]);
                obj.leaveFrame(tmp);
              }
            };
          }
        }
        const items2 = [frameId];
        cResult[9] = frameId;
        cResult[10] = O;
        cResult[11] = items2;
        tmp20 = items2;
        tmp19 = O;
      } else {
        class O {
          constructor() {
            return () => {
              const tmp = closure_1_2;
              if (null != frame.getFrame(closure_1_2)) {
                const obj = navigation(frameId[19]);
                obj.leaveFrame(tmp);
              }
            };
          }
        }
        tmp20 = cResult[11];
      }
      const effect1 = obj3.useEffect(tmp19, tmp20);
      if (cResult[12] === claimableRewardIdsAtLaunch) {
        class O {
          constructor() {
            return () => {
              const tmp = closure_1_2;
              if (null != frame.getFrame(closure_1_2)) {
                const obj = navigation(frameId[19]);
                obj.leaveFrame(tmp);
              }
            };
          }
        }
      }
      class B {
        constructor() {
          return navigation.addListener("beforeRemove", function() {
            let closure_0 = claimableRewardIdsAtLaunch;
            const obj = game;
            game = game.getGame(gameId);
            if (null != game) {
              const _Set = Set;
              const obj3 = navigation(frameId[11]);
              const orbsArcadeClaimableRewards = obj3.getOrbsArcadeClaimableRewards(game.rewards, obj.getGameStateForGame(tmp));
              const mapped = orbsArcadeClaimableRewards.map(f135389);
              const self = this;
              const self2 = this;
              set = new Set(mapped.filter(() => { /* body not rendered: F135390 */ }));
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
      const items3 = [navigation, gameId, claimableRewardIdsAtLaunch];
      cResult[12] = claimableRewardIdsAtLaunch;
      cResult[13] = gameId;
      cResult[14] = navigation;
      cResult[15] = B;
      cResult[16] = items3;
    }
  }
  class F {
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
  const items4 = [null != stateFromStores, navigation, route.key];
  cResult[4] = null != stateFromStores;
  cResult[5] = navigation;
  cResult[6] = route.key;
  cResult[7] = F;
  cResult[8] = items4;
  tmp14 = items4;
  tmp13 = F;
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
  let tmp = closure_13();
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
  const items3 = [frameId];
  const effect1 = obj2.useEffect(() => {
    let frame;
    return () => {
      const tmp = closure_1_2;
      if (null != frame.getFrame(closure_1_2)) {
        const obj = navigation(frameId[19]);
        obj.leaveFrame(tmp);
      }
    };
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
      const mapped = orbsArcadeClaimableRewards.map(f135389);
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
  let obj3 = { theme: ThemeTypes.DARK, children: closure_10(claimableRewardIdsAtLaunch, obj4) };
  obj4 = { style: items6, children: items7 };
  items6 = [tmp.container, { paddingTop: rect.top }];
  const ThemeContextProvider = tmp4(tmp3[25]).ThemeContextProvider;
  items7 = [, ];
  const obj5 = { wakeLockKey: OrbsArcadeGame };
  items7[0] = closure_9(route(frameId[20]), obj5);
  let tmp14Result = null;
  const obj6 = { style: tmp.wrapper, children: items8 };
  if (closure_8(stateFromStores)) {
    const obj7 = { frameId, level: navigation(frameId[22]).FrameStackLevel.AboveAppContent, presentation };
    const tmp2Result = route(frameId[21]);
    tmp14Result = tmp14(tmp2Result, obj7);
  }
  items8 = [tmp14Result, ];
  let tmp15Result = null;
  if (null != stateFromStores) {
    const obj8 = { style: items9, children: items10 };
    items9 = [tmp.header, ];
    items9[1] = { paddingLeft: route(frameId[10]).space.PX_8 + rect.left, paddingRight: route(frameId[10]).space.PX_8 + rect.right };
    const obj10 = { applicationId: stateFromStores.applicationId };
    const obj9 = { paddingLeft: route(frameId[10]).space.PX_8 + rect.left, paddingRight: route(frameId[10]).space.PX_8 + rect.right };
    items10 = [closure_9(tmp2(tmp3[23]), obj10), ];
    const obj11 = { onPress: callback };
    items10[1] = closure_9(navigation(frameId[24]).BaseLeaveActivityButton, obj11);
    tmp15Result = tmp15(tmp16, obj8);
  }
  items8[1] = tmp15Result;
  items7[1] = closure_10(claimableRewardIdsAtLaunch, obj6);
  return closure_9(ThemeContextProvider, obj3);
});
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeGameScreen.tsx");

export default tmp5;
