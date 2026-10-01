// Module ID: 16848
// Function ID: 16849
// Name: ActivityPanelHeader
// Dependencies: [32, 19, 17, 2044, 8502, 1085, 21, 4836, 576, 1613, 4566, 16845, 4540, 6073, 16849, 504, 6589, 16850, 16854, 16855, 16860, 16839, 2]
// Exports: useBaseActivityPanelHeader

// Module 16848 (ActivityPanelHeader)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 4540 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6073 */;
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 6589 */;
import BlurVisualEffectViewDefault from "BlurVisualEffectView" /* 16849 */;
import InviteActivityButtonDefault from "InviteActivityButton" /* 16850 */;
import MinimizeActivityButtonDefault from "MinimizeActivityButton" /* 16854 */;
import LeaveActivityButtonDefault from "LeaveActivityButton" /* 16860 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ActivityPanelConstants from "ActivityPanelConstants" /* 8502 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let StyleSheet;
let c10;
let c9;
let closure_12;
let hasOwnProperty;
let map1;
let metroImportAll;
let obj2;
let obj4;
let size;
function useBaseActivityPanelHeaderContent(landscape) {
  let closure_2;
  let obj3;
  let pipState;
  let tmp6;
  let wrapperOffset;
  landscape = landscape.landscape;
  const setMode = landscape.setMode;
  ({ wrapperOffset, pipState } = landscape);
  const tmp = closure_14();
  dependencyMap = tmp;
  const tmp2 = setMode(1613)();
  let closure_3 = tmp2;
  let items = [landscape];
  const items1 = [landscape, tmp2, , ];
  ({ panelHeader: arr2[2], panelLandscape: arr2[3] } = tmp);
  const memo = react.useMemo(() => {
    let num = 0;
    if (!landscape) {
      num = nativeDefault.radii.lg;
    }
    const items = [StyleSheet.absoluteFill, { borderTopStartRadius: num, borderTopEndRadius: num }];
    return items;
  }, items);
  const fn = function c() {
    const obj = ReanimatedRexport;
    obj.runOnJS(setMode)(constants.PIP);
  };
  let obj = { runOnJS: landscape(4566).runOnJS, setMode, ActivityPanelModes };
  const memo1 = react.useMemo(() => {
    let num2;
    let num3;
    let num4;
    let num = 8;
    if (landscape) {
      num = 24;
    }
    const items = [closure_2.panelHeader, , ];
    let panelLandscape;
    if (landscape) {
      panelLandscape = closure_2.panelLandscape;
    }
    items[1] = panelLandscape;
    const obj = { paddingTop: num, paddingBottom: num2, paddingLeft: num4, paddingRight: num3 };
    num2 = 8;
    if (landscape) {
      num2 = 24;
    }
    num3 = 16;
    num4 = 16;
    if (!landscape) {
      num4 = 8 + closure_3.left;
    }
    if (!landscape) {
      num3 = 8 + closure_3.right;
    }
    items[2] = obj;
    return items;
  }, items1);
  const useCallback = react.useCallback;
  fn.__closure = obj;
  fn.__workletHash = 14504167937928;
  fn.__initData = __initData;
  const items2 = [setMode];
  const obj2 = { gesture: tmp6(obj3), headerWrapperStyles: memo, headerStyles: memo1, styles: tmp };
  const callback = useCallback(fn, items2);
  obj3 = { mode: landscape(16845).MorphablePanelModes.PANEL, panGestureEnabled: true, pipState, swipeRequiresPop: true, wrapperOffset, onPanMinimizeGestureEnd: callback, disableHorizontalSafeAreas: true };
  tmp6 = setMode(16845);
  return obj2;
}
class BaseActivityPanelContent {
  constructor(landscape) {
    let GestureDetector;
    let children;
    let gesture;
    let hasConnectedActivity;
    let headerStyles;
    let headerWrapperStyles;
    let items;
    let obj2;
    let obj3;
    let tmp7;
    landscape = landscape.landscape;
    ({ children, hasConnectedActivity, gesture, headerWrapperStyles, headerStyles } = landscape);
    let tmp3Result2 = null;
    if (hasConnectedActivity) {
      const obj = { theme: ThemeTypes.DARK, children: closure_12(GestureDetector, obj2) };
      const ThemeContextProvider = native.ThemeContextProvider;
      obj2 = { gesture, children: tmp7(hasOwnProperty, obj3) };
      obj3 = { style: headerWrapperStyles, children: items };
      GestureDetector = LegacyBaseButton.GestureDetector;
      items = [closure_12(BlurVisualEffectViewDefault, {}), , ];
      let tmp3Result = !landscape;
      tmp7 = map1;
      if (tmp3Result) {
        const obj4 = { style: tmp.pullIndicator };
        tmp3Result = tmp3(tmp8, obj4);
      }
      items[1] = tmp3Result;
      const obj5 = { style: headerStyles, children };
      items[2] = closure_12(hasOwnProperty, obj5);
      tmp3Result2 = tmp3(ThemeContextProvider, obj);
    }
    return tmp3Result2;
  }
}
({ View: hasOwnProperty, StyleSheet } = react_native);
({ ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT: metroImportAll, LANDSCAPE_IFRAME_HORIZONTAL_MARGIN: c9, ActivityPanelModes: c10 } = ActivityPanelConstants);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { panelHeader: obj2, panelLandscape: { flexDirection: "column-reverse" }, headerContainer: { position: "absolute", top: 0 }, pullIndicator: size };
obj2 = { justifyContent: "space-between", alignItems: "center", flexDirection: "row", gap: 8 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
size = { backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.sm, width: 32, height: 4, alignSelf: "center", marginTop: 4, opacity: 0.3 };
let closure_14 = createStyles(obj);
const __initData = { code: "function ActivityPanelHeaderTsx1(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PIP);}" };
createStyles = createStyles_mod;
let obj3 = { buttonContainer: obj4, buttonContainerLandscape: { flexDirection: "column-reverse" } };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexShrink: 1 };
const styles = createStyles.createStyles(obj3);
let closure_19 = react.memo(function ActivityPanelHeaderContentInner(wrapperOffset) {
  let gesture;
  let headerStyles;
  let headerWrapperStyles;
  let items3;
  let items4;
  let landscape;
  let setMode;
  ({ landscape, setMode } = wrapperOffset);
  const obj = { landscape, setMode, wrapperOffset: wrapperOffset.wrapperOffset, pipState: wrapperOffset.pipState };
  ({ gesture, headerWrapperStyles, headerStyles } = useBaseActivityPanelHeaderContent(obj));
  useBaseActivityPanelHeaderContent(obj);
  const items = [EmbeddedActivitiesStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(EmbeddedActivitiesStore.getConnectedActivityLocation()), []);
  let applicationId;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  const items1 = [applicationId];
  const first = _slicedToArray(useGetOrFetchApplicationsDefault(items1), 1)[0];
  const tmp7 = styles();
  let id;
  const tmp9 = InviteActivityButtonDefault;
  if (first != null) {
    id = first.id;
  }
  const tmp8Result = closure_12(tmp9, { applicationId: id });
  const items2 = [tmp7.buttonContainer, ];
  let prop;
  const obj3 = { hasConnectedActivity: null != stateFromStores, gesture, headerWrapperStyles, headerStyles, landscape, children: items4 };
  const tmp13 = BaseActivityPanelContent;
  const tmp14 = hasOwnProperty;
  if (landscape) {
    prop = tmp7.buttonContainerLandscape;
  }
  const obj4 = { style: items2, children: items3 };
  items2[1] = prop;
  let tmp17;
  const tmp5Result = MinimizeActivityButtonDefault;
  if (!landscape) {
    let name;
    if (first != null) {
      name = first.name;
    }
    tmp17 = name;
  }
  items3 = [closure_12(tmp5Result, { activityName: tmp17, setMode }), , ];
  let tmp8Result2 = null != applicationId;
  if (tmp8Result2) {
    const obj5 = { applicationId };
    tmp8Result2 = tmp8(tmp5(16855), obj5);
  }
  items3[1] = tmp8Result2;
  let tmp20 = null;
  if (landscape) {
    tmp20 = tmp8Result;
  }
  items3[2] = tmp20;
  items4 = [map1(tmp14, obj4), , ];
  let tmp21 = null;
  if (!landscape) {
    tmp21 = tmp8Result;
  }
  items4[1] = tmp21;
  const tmp5Result2 = LeaveActivityButtonDefault;
  items4[2] = closure_12(tmp5Result2, { selfEmbeddedActivity: stateFromStores, setMode });
  return map1(tmp13, obj3);
});
const memoResult = react.memo(() => {
  let obj2;
  let pipState;
  let setMode;
  let wrapperOffset;
  let wrapperDimensions;
  let tmp = wrapperDimensions(16839);
  const tmp2 = closure_14();
  const headerContainer = tmp2;
  const context = react.useContext(tmp);
  wrapperDimensions = context.wrapperDimensions;
  let items = [tmp2.headerContainer, wrapperDimensions.isWindowLandscape];
  ({ setMode, wrapperOffset, pipState } = context);
  const obj = {
    style: react.useMemo(() => {
      let num;
      let str;
      let str2;
      let tmp;
      if (wrapperDimensions.isWindowLandscape) {
        str2 = React4;
        tmp = 0;
        num = null;
        str = "auto";
      } else {
        str = metroImportAll;
        str2 = "auto";
        tmp = null;
        num = 0;
      }
      const items = [headerContainer.headerContainer, { width: str2, height: str, right: 0, left: num, bottom: tmp }];
      return items;
    }, items),
    children: closure_12(closure_19, obj2)
  };
  obj2 = { landscape: wrapperDimensions.isWindowLandscape, setMode, wrapperOffset, pipState };
  return closure_12(closure_5, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/activities/panel/native/ActivityPanelHeader.tsx");

export default memoResult;
export { useBaseActivityPanelHeaderContent };
export { BaseActivityPanelContent };
export const useMinimizeAndQuestButtonContainerStyles = styles;
export const useBaseActivityPanelHeader = function useBaseActivityPanelHeader(context) {
  let items;
  let pipState;
  let setMode;
  let wrapperOffset;
  context = context.context;
  const tmp = closure_14();
  let closure_0 = tmp;
  const context1 = react.useContext(context);
  const wrapperDimensions = context1.wrapperDimensions;
  const obj = {
    headerStyles: react.useMemo(() => {
      let num;
      let str;
      let str2;
      let tmp;
      if (wrapperDimensions.isWindowLandscape) {
        str2 = React4;
        tmp = 0;
        num = null;
        str = "auto";
      } else {
        str = metroImportAll;
        str2 = "auto";
        tmp = null;
        num = 0;
      }
      const items = [headerContainer.headerContainer, { width: str2, height: str, right: 0, left: num, bottom: tmp }];
      return items;
    }, items),
    wrapperDimensions,
    setMode,
    wrapperOffset,
    pipState
  };
  items = [tmp.headerContainer, wrapperDimensions.isWindowLandscape];
  ({ setMode, wrapperOffset, pipState } = context1);
  return obj;
};
