// Module ID: 18192
// Function ID: 18193
// Name: OrbsArcadeGameScreen
// Dependencies: [19, 17, 6754, 1087, 5591, 18193, 6755, 21, 4966, 587, 558, 576, 1633, 504, 1506, 11801, 10723, 11432, 11802, 11806, 18194, 18197, 5020, 2]

// Module 18192 (OrbsArcadeGameScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import Link from "Link" /* 1506 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 5591 */;
import leaveFrame from "leaveFrame" /* 10723 */;
import ActivityPanelNativeConstants from "ActivityPanelNativeConstants" /* 18193 */;
import react_mod from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6754 */;
import FramesConstants from "FramesConstants" /* 6755 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4966 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let FrameLayoutModes;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let rect;
let react = react_mod;
const View = react_native.View;
const ThemeTypes = Constants.ThemeTypes;
const ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT = ActivityPanelConstants.ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT;
const DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG = ActivityPanelNativeConstants.DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG;
({ isLaunched: metroImportDefault, FrameLayoutModes } = FramesConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const OrbsArcadeGame = "OrbsArcadeGame";
const presentation = { layoutMode: FrameLayoutModes.FOCUSED, portraitSafeAreasConfig: DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG };
let createStyles = createStyles_mod;
let obj = { container: obj2, wrapper: obj3, header: rect };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BLACK };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, overflow: "hidden", borderTopStartRadius: nativeDefault.radii.lg, borderTopEndRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
rect = { position: "absolute", top: 0, left: 0, right: 0, height: ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT, flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK };
let closure_12 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbsArcadeGameScreen(navigation) {
  let closure_3;
  let first;
  let frame;
  let frameId;
  let items3;
  let items4;
  let tmp8;
  let tmp9;
  let tmp = navigation;
  let obj = navigation(frameId[11]);
  const cResult = obj.c(36);
  navigation = navigation.navigation;
  const route = navigation.route;
  frameId = route.params.frameId;
  const tmp4 = closure_12();
  const rect = route(frameId[12])();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FramesStore];
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
  const tmpResult = tmp(frameId[13]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
  react = tmp11;
  if (cResult[4] === null != stateFromStores) {
    if (cResult[5] === navigation) {
      let tmp12;
      let tmp13;
      let tmp19;
      let tmp18;
      if (cResult[6] === route.key) {
        tmp12 = cResult[7];
        tmp13 = cResult[8];
      }
      const effect = react.useEffect(tmp12, tmp13);
      let applicationId;
      const obj3 = react;
      const tmp5Result = route(frameId[15]);
      if (stateFromStores != null) {
        applicationId = stateFromStores.applicationId;
      }
      if (applicationId == null) {
        applicationId = null;
      }
      tmp5Result(applicationId);
      if (cResult[9] !== frameId) {
        class T {
          constructor() {
            return () => {
              const tmp = closure_1_2;
              if (null != frame.getFrame(closure_1_2)) {
                const obj = navigation(frameId[16]);
                obj.leaveFrame(tmp);
              }
            };
          }
        }
        const items2 = [frameId];
        cResult[9] = frameId;
        cResult[10] = T;
        cResult[11] = items2;
        tmp19 = items2;
        tmp18 = T;
      } else {
        class T {
          constructor() {
            return () => {
              const tmp = closure_1_2;
              if (null != frame.getFrame(closure_1_2)) {
                const obj = navigation(frameId[16]);
                obj.leaveFrame(tmp);
              }
            };
          }
        }
        tmp19 = cResult[11];
      }
      const effect1 = obj3.useEffect(tmp18, tmp19);
      if (cResult[12] !== frameId) {
        class O {
          constructor() {
            const obj = leaveFrame;
            return obj.leaveFrame(frameId);
          }
        }
        cResult[12] = frameId;
        cResult[13] = O;
      } else {
        class O {
          constructor() {
            const obj = leaveFrame;
            return obj.leaveFrame(frameId);
          }
        }
      }
      if (cResult[14] !== rect.top) {
        class O {
          constructor() {
            const obj = leaveFrame;
            return obj.leaveFrame(frameId);
          }
        }
        tmp23[0] = rect.top;
        cResult[14] = rect.top;
        cResult[15] = tmp23;
      } else {
        class O {
          constructor() {
            const obj = leaveFrame;
            return obj.leaveFrame(frameId);
          }
        }
      }
      if (cResult[16] === tmp4.container) {
        class O {
          constructor() {
            const obj = leaveFrame;
            return obj.leaveFrame(frameId);
          }
        }
        const _Symbol = Symbol;
        if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
          class O {
            constructor() {
              const obj = leaveFrame;
              return obj.leaveFrame(frameId);
            }
          }
          const obj2 = { wakeLockKey: OrbsArcadeGame };
          cResult[19] = closure_8(route(frameId[17]), obj2);
          const tmp27 = closure_8(route(frameId[17]), obj2);
        } else {
          class O {
            constructor() {
              const obj = leaveFrame;
              return obj.leaveFrame(frameId);
            }
          }
        }
        if (cResult[20] === stateFromStores) {
          class O {
            constructor() {
              const obj = leaveFrame;
              return obj.leaveFrame(frameId);
            }
          }
          if (cResult[23] === stateFromStores) {
            class O {
              constructor() {
                const obj = leaveFrame;
                return obj.leaveFrame(frameId);
              }
            }
          }
          let tmp34 = null;
          if (null != stateFromStores) {
            class O {
              constructor() {
                const obj = leaveFrame;
                return obj.leaveFrame(frameId);
              }
            }
            const obj4 = { style: items3, children: items4 };
            items3 = [tmp4.header, ];
            items3[1] = { paddingLeft: route(frameId[9]).space.PX_8 + rect.left, paddingRight: route(frameId[9]).space.PX_8 + rect.right };
            const obj5 = { paddingLeft: route(frameId[9]).space.PX_8 + rect.left, paddingRight: route(frameId[9]).space.PX_8 + rect.right };
            const obj6 = { applicationId: stateFromStores.applicationId };
            items4 = [closure_8(tmp5(tmp2[20]), obj6), ];
            const obj7 = { onPress: tmp21 };
            items4[1] = closure_8(tmp(frameId[21]).BaseLeaveActivityButton, obj7);
            tmp34 = closure_9(View, obj4);
          }
          cResult[23] = stateFromStores;
          cResult[24] = tmp21;
          cResult[25] = rect.left;
          cResult[26] = rect.right;
          cResult[27] = tmp4.header;
          cResult[28] = tmp34;
        }
        let tmp30 = null;
        if (closure_7(stateFromStores)) {
          class O {
            constructor() {
              const obj = leaveFrame;
              return obj.leaveFrame(frameId);
            }
          }
          const obj8 = { frameId, level: tmp(frameId[19]).FrameStackLevel.AboveAppContent, presentation };
          const tmp5Result2 = route(frameId[18]);
          tmp30 = closure_8(tmp5Result2, obj8);
        }
        cResult[20] = stateFromStores;
        cResult[21] = frameId;
        cResult[22] = tmp30;
      }
      const items5 = [tmp4.container, tmp22];
      cResult[16] = tmp4.container;
      cResult[17] = tmp22;
      cResult[18] = items5;
    }
  }
  class L {
    constructor() {
      const tmp = closure_3;
      if (!tmp) {
        const dispatch = navigation.dispatch;
        const obj = { source: route.key };
        const CommonActions = Link.CommonActions;
        const merged = Object.assign(CommonActions.goBack());
        dispatch(obj);
      }
    }
  }
  const items6 = [null != stateFromStores, navigation, route.key];
  cResult[4] = null != stateFromStores;
  cResult[5] = navigation;
  cResult[6] = route.key;
  cResult[7] = L;
  cResult[8] = items6;
  tmp13 = items6;
  tmp12 = L;
}) : (function OrbsArcadeGameScreen(navigation) {
  let closure_3;
  let frame;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj4;
  navigation = navigation.navigation;
  const route = navigation.route;
  const frameId = route.params.frameId;
  let tmp = closure_12();
  const rect = route(frameId[12])();
  let obj = navigation(frameId[13]);
  const items = [FramesStore];
  const items1 = [frameId];
  const stateFromStores = obj.useStateFromStores(items, () => FramesStore.getFrame(frameId), items1);
  react = tmp6;
  const items2 = [null != stateFromStores, navigation, route.key];
  const effect = react.useEffect(() => {
    const tmp = closure_3;
    if (!tmp) {
      const dispatch = navigation.dispatch;
      const obj = { source: route.key };
      const CommonActions = Link.CommonActions;
      const merged = Object.assign(CommonActions.goBack());
      dispatch(obj);
    }
  }, items2);
  let applicationId;
  const tmp8 = route(frameId[15]);
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  if (applicationId == null) {
    applicationId = null;
  }
  tmp8(applicationId);
  const items3 = [frameId];
  const effect1 = obj2.useEffect(() => () => {
    const tmp = closure_1_2;
    if (null != frame.getFrame(closure_1_2)) {
      const obj = navigation(frameId[16]);
      obj.leaveFrame(tmp);
    }
  }, items3);
  const items4 = [frameId];
  const callback = obj2.useCallback(() => {
    const obj = leaveFrame;
    return obj.leaveFrame(frameId);
  }, items4);
  const obj3 = { theme: ThemeTypes.DARK, children: closure_9(View, obj4) };
  obj4 = { style: items5, children: items6 };
  items5 = [tmp.container, { paddingTop: rect.top }];
  const ThemeContextProvider = tmp4(tmp3[22]).ThemeContextProvider;
  items6 = [, ];
  const obj5 = { wakeLockKey: OrbsArcadeGame };
  items6[0] = closure_8(route(frameId[17]), obj5);
  let tmp13Result = null;
  const obj6 = { style: tmp.wrapper, children: items7 };
  if (closure_7(stateFromStores)) {
    const obj7 = { frameId, level: navigation(frameId[19]).FrameStackLevel.AboveAppContent, presentation };
    const tmp2Result = route(frameId[18]);
    tmp13Result = tmp13(tmp2Result, obj7);
  }
  items7 = [tmp13Result, ];
  let tmp14Result = null;
  if (null != stateFromStores) {
    const obj8 = { style: items8, children: items9 };
    items8 = [tmp.header, ];
    items8[1] = { paddingLeft: route(frameId[9]).space.PX_8 + rect.left, paddingRight: route(frameId[9]).space.PX_8 + rect.right };
    const obj10 = { applicationId: stateFromStores.applicationId };
    const obj9 = { paddingLeft: route(frameId[9]).space.PX_8 + rect.left, paddingRight: route(frameId[9]).space.PX_8 + rect.right };
    items9 = [closure_8(tmp2(tmp3[20]), obj10), ];
    const obj11 = { onPress: callback };
    items9[1] = closure_8(navigation(frameId[21]).BaseLeaveActivityButton, obj11);
    tmp14Result = tmp14(tmp15, obj8);
  }
  items7[1] = tmp14Result;
  items6[1] = closure_9(View, obj6);
  return closure_8(ThemeContextProvider, obj3);
});
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeGameScreen.tsx");

export default tmp5;
