// Module ID: 19404
// Function ID: 19405
// Name: OrbsArcadeGameScreen
// Dependencies: [19, 17, 6934, 17375, 1072, 5813, 19405, 6935, 21, 5170, 575, 17382, 17386, 1627, 504, 1500, 12460, 11047, 17385, 5231, 12033, 12469, 12473, 19406, 19407, 2]
// Exports: default

// Module 19404 (OrbsArcadeGameScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import Link from "Link" /* 1500 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5813 */;
import leaveFrame from "leaveFrame" /* 11047 */;
import ActivityPanelNativeConstants from "ActivityPanelNativeConstants" /* 19405 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6934 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 17375 */;
import FramesConstants from "FramesConstants" /* 6935 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let set;

let FrameLayoutModes;
let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let rect;
let unpackModuleId;
const View = react_native.View;
let ThemeTypes = Constants.ThemeTypes;
const ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT = ActivityPanelConstants.ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT;
const DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG = ActivityPanelNativeConstants.DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG;
({ getFrameLaunchParams: metroImportAll, isLaunched: c9, FrameLayoutModes } = FramesConstants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const presentation = { layoutMode: FrameLayoutModes.FOCUSED, portraitSafeAreasConfig: DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG };
let createStyles = createStyles_mod;
let obj = { container: obj2, wrapper: obj3, header: rect };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BLACK };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, overflow: "hidden", borderTopStartRadius: nativeDefault.radii.lg, borderTopEndRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
rect = { position: "absolute", top: 0, left: 0, right: 0, height: ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK };
let closure_13 = createStyles(obj);
let result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeGameScreen.tsx");

export default function OrbsArcadeGameScreen(navigation) {
  let closure_7;
  let items10;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj4;
  navigation = navigation.navigation;
  const route = navigation.route;
  const params = route.params;
  const frameId = params.frameId;
  const gameId = params.gameId;
  const claimableRewardIdsAtLaunch = params.claimableRewardIdsAtLaunch;
  const runIdAtLaunch = params.runIdAtLaunch;
  const surface = params.surface;
  let tmp = closure_13();
  let tmp3 = frameId;
  const rect = route(frameId[13])();
  let obj = navigation(frameId[14]);
  const items = [runIdAtLaunch];
  const items1 = [frameId];
  const stateFromStores = obj.useStateFromStores(items, () => FramesStore.getFrame(frameId), items1);
  ThemeTypes = tmp6;
  let obj2 = gameId;
  const items2 = [null != stateFromStores, navigation, route.key];
  const effect = gameId.useEffect(() => {
    const tmp = closure_7;
    if (!tmp) {
      const dispatch = navigation.dispatch;
      const obj = { source: route.key };
      const CommonActions = Link.CommonActions;
      const merged = Object.assign(CommonActions.goBack());
      dispatch(obj);
    }
  }, items2);
  let applicationId;
  const tmp8 = route(frameId[16]);
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  if (applicationId == null) {
    applicationId = null;
  }
  tmp8(applicationId);
  const items3 = [frameId, gameId];
  const effect1 = obj2.useEffect(() => () => {
    const frame = runIdAtLaunch.getFrame(closure_1_2);
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
      const obj = navigation(frameId[17]);
      obj.leaveFrame(tmp);
    }
  }, items3);
  const items4 = [navigation, gameId, claimableRewardIdsAtLaunch, runIdAtLaunch, surface];
  const effect2 = obj2.useEffect(() => navigation.addListener("beforeRemove", function() {
    const obj = navigation(frameId[18]);
    const result = obj.trackOrbsArcadeGameClosed(gameId, runIdAtLaunch);
    let closure_0 = claimableRewardIdsAtLaunch;
    const game = surface.getGame(gameId);
    const obj2 = surface;
    const tmp5 = closure_1_6;
    if (null != game) {
      const _Set = Set;
      const tmpResult = navigation(frameId[11]);
      const orbsArcadeClaimableRewards = tmpResult.getOrbsArcadeClaimableRewards(game.rewards, obj2.getGameStateForGame(tmp3));
      const mapped = orbsArcadeClaimableRewards.map((id) => id.id);
      const self = this;
      const self2 = this;
      set = new Set(mapped.filter((item) => !closure_0.includes(item)));
      if (set.size > 0) {
        const tmpResult2 = navigation(frameId[12]);
        const result1 = tmpResult2.openOrbsArcadeRewardUnlockedSheet(tmp3, tmp5, set);
      }
    }
  }), items4);
  const items5 = [frameId];
  const callback = obj2.useCallback(() => {
    const obj = leaveFrame;
    return obj.leaveFrame(frameId);
  }, items5);
  const obj3 = { theme: ThemeTypes.DARK, children: closure_11(claimableRewardIdsAtLaunch, obj4) };
  obj4 = { style: items6, children: items7 };
  items6 = [tmp.container, { paddingTop: rect.top }];
  const ThemeContextProvider = tmp4(tmp3[19]).ThemeContextProvider;
  items7 = [closure_10(tmp2(tmp3[20]), { wakeLockKey: "OrbsArcadeGame" }), ];
  let tmp14Result = null;
  const obj5 = { style: tmp.wrapper, children: items8 };
  if (closure_9(stateFromStores)) {
    const obj6 = { frameId, level: navigation(tmp3[22]).FrameStackLevel.AboveAppContent, presentation };
    const tmp2Result = route(tmp3[21]);
    tmp14Result = tmp14(tmp2Result, obj6);
  }
  items8 = [tmp14Result, ];
  let tmp15Result = null;
  if (null != stateFromStores) {
    const obj7 = { style: items9, children: items10 };
    items9 = [tmp.header, ];
    items9[1] = { paddingLeft: route(tmp3[10]).space.PX_8 + rect.left, paddingRight: route(tmp3[10]).space.PX_8 + rect.right };
    const obj8 = { paddingLeft: route(tmp3[10]).space.PX_8 + rect.left, paddingRight: route(tmp3[10]).space.PX_8 + rect.right };
    const obj9 = { gameId, applicationId: stateFromStores.applicationId };
    items10 = [closure_10(tmp2(tmp3[23]), obj9), ];
    const obj10 = { onPress: callback };
    items10[1] = closure_10(navigation(tmp3[24]).BaseLeaveActivityButton, obj10);
    tmp15Result = tmp15(tmp16, obj7);
  }
  items8[1] = tmp15Result;
  items7[1] = closure_11(claimableRewardIdsAtLaunch, obj5);
  return closure_10(ThemeContextProvider, obj3);
};
