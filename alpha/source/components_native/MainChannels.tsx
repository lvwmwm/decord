// Module ID: 18410
// Function ID: 18411
// Name: MainChannels
// Dependencies: [32, 19, 17, 18411, 1072, 18400, 21, 18413, 7022, 5140, 575, 18388, 5317, 1627, 18414, 18415, 18416, 18498, 18691, 1652, 18417, 18397, 18402, 18399, 18786, 5320, 11721, 2]

// Module 18410 (MainChannels)
import nativeDefault from "native" /* 575 */;
import HomeDrawerExperiment from "HomeDrawerExperiment" /* 5320 */;
import StartupProfiler from "StartupProfiler" /* 11721 */;
import useAppFrameDefault from "useAppFrame" /* 18388 */;
import isJankScreenReportingEnabled from "isJankScreenReportingEnabled" /* 18397 */;
import getJankScreenName from "getJankScreenName" /* 18399 */;
import JankScreenConstants from "JankScreenConstants" /* 18400 */;
import JankSlidingSurfaceReporterDefault from "JankSlidingSurfaceReporter" /* 18402 */;
import useGuildsRouteGuildId from "useGuildsRouteGuildId" /* 18413 */;
import messages_MessagesDefault from "messages/Messages" /* 18416 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 18417 */;
import RedesignChannelListDefault from "RedesignChannelList" /* 18498 */;
import HomePanelContent from "HomePanelContent" /* 18691 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import HomeDrawerStore from "HomeDrawerStore" /* 18411 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const StartupProfilerDefault = StartupProfiler;

let c9;
let closure_12;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroRequire;
let unpackModuleId;
function LeftPanelContent(panelStyles) {
  let first;
  let items3;
  let items6;
  let items7;
  let tmp17Result2;
  let tmp7;
  panelStyles = panelStyles.panelStyles;
  let isChatBesideChannelList;
  let top;
  const hasFrame = useAppFrameDefault().hasFrame;
  const tmp3 = closure_14(hasFrame);
  let closure_0 = tmp3;
  first = undefined;
  let obj = useGuildsRouteGuildId;
  [first, tmp7] = obj.useGuildsRouteGuildAndChannelId();
  const ref = react.useRef(first);
  let items = [first];
  const effect = react.useEffect(() => {
    ref.current = current;
  }, items);
  let tmp12 = tmp(7022)(ref);
  if (null != first && first !== React4) {
    tmp12 = first;
  }
  isChatBesideChannelList = tmp(5317)().isChatBesideChannelList;
  top = tmp(1627)().top;
  const items1 = [tmp3, top];
  const memo = obj2.useMemo(() => {
    const items = [closure_0.sideContainer, ];
    const obj = { marginTop: top };
    items[1] = obj;
    return items;
  }, items1);
  const items2 = [tmp3, isChatBesideChannelList];
  const memo1 = obj2.useMemo(() => {
    const items = [closure_0.side, isChatBesideChannelList && closure_0.sideTablet];
    return items;
  }, items2);
  const sum = metroImportAll + tmp(18414)();
  let num = 0;
  const NativeFreezeScreens = tmp4(18415).NativeFreezeScreens;
  if (null != first && first !== React4) {
    num = 1;
  }
  const obj3 = { activeIndex: num, children: items3 };
  items3 = [unpackModuleId(messages_MessagesDefault, { style: memo1 }), unpackModuleId(RedesignChannelListDefault, { style: memo1, selectedGuildId: tmp12, selectedChannelId: tmp7 })];
  const items4 = [authStore2(NativeFreezeScreens, obj3), ];
  let tmp17Result = null;
  const tmp18 = map1;
  if (hasFrame) {
    const obj4 = { pointerEvents: "none", style: tmp3.framedBorder };
    tmp17Result = tmp17(hasOwnProperty, obj4);
  }
  items4[1] = tmp17Result;
  const tmp16Result = authStore2(tmp18, { children: items4 });
  const items5 = [metroRequire.absoluteFill, ];
  let tmp23;
  if (isChatBesideChannelList) {
    tmp23 = sum;
  }
  const obj5 = { style: items5, children: items6 };
  items5[1] = { width: tmp23 };
  items6 = [unpackModuleId(HomePanelContent.HomePanelContent, {}), ];
  if (null == panelStyles) {
    const obj6 = { style: memo, pointerEvents: "box-none", nativeID: "messages-parent-view", children: tmp16Result };
    tmp17Result2 = tmp17(tmp22, obj6);
  } else {
    const obj7 = { style: items7, pointerEvents: "box-none", nativeID: "messages-parent-view", children: tmp16Result };
    items7 = [memo, panelStyles];
    tmp17Result2 = tmp17(tmp(1652).View, obj7);
  }
  items6[1] = tmp17Result2;
  return authStore2(hasOwnProperty, obj5);
}
function resolveHomeDrawerName() {
  return HOME_DRAWER_SCREEN;
}
function LeftPanelHomeDrawerContainer() {
  let gesture;
  let items;
  let panelStyles;
  const obj = useHomeDrawerGesture;
  const homeGesture = obj.useHomeGesture();
  const homeDrawerContext = homeGesture.homeDrawerContext;
  ({ gesture, panelStyles } = homeGesture);
  const tmp4 = HomeDrawerStore((panelX) => panelX.panelX);
  const tmp5 = HomeDrawerStore((maxX) => maxX.maxX);
  const obj2 = { value: homeDrawerContext, children: items };
  const Provider = useHomeDrawerGesture.HomeDrawerStateContext.Provider;
  let tmp7 = null;
  const obj3 = isJankScreenReportingEnabled;
  const tmp6 = authStore2;
  if (obj3.isJankScreenReportingEnabled()) {
    tmp7 = null;
    if (homeDrawerContext.enableHome) {
      tmp7 = null;
      if (tmp5 > 0) {
        const obj4 = { position: tmp4, openAt: tmp5, closedAt: 0, resolveOpenName: resolveHomeDrawerName, resolveClosedName: getJankScreenName.getBaseScreenName };
        const tmp10 = JankSlidingSurfaceReporterDefault;
        tmp7 = unpackModuleId(tmp10, obj4);
      }
    }
  }
  items = [tmp7, ];
  const obj5 = { gesture, children: unpackModuleId(LeftPanelContent, { panelStyles }) };
  const NonCollapsableGestureDetector = tmp(18786).NonCollapsableGestureDetector;
  items[1] = unpackModuleId(NonCollapsableGestureDetector, obj5);
  return tmp6(Provider, obj2);
}
({ View: hasOwnProperty, StyleSheet: metroRequire } = react_native);
({ DM_WIDTH: metroImportAll, ME: c9 } = Constants);
const HOME_DRAWER_SCREEN = JankScreenConstants.HOME_DRAWER_SCREEN;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let closure_14 = createStyles.createStyles(() => {
  let num;
  let num2;
  let obj4;
  let rect;
  let xl;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const obj = { fill: { flex: 1 }, sideContainer: rect, side: { borderTopLeftRadius: flag ? xl : xl - 1, borderTopRightRadius: nativeDefault.radii.none }, sideTablet: { borderTopRightRadius: nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS }, framedBorder: obj4 };
  rect = { position: "absolute", top: 0, left: metroImportAll, bottom: 0, right: 0, flexDirection: "row", borderLeftWidth: num, borderTopWidth: num2, borderColor: nativeDefault.colors.APP_FRAME_BORDER, borderTopLeftRadius: nativeDefault.radii.xl };
  num = 1;
  if (flag) {
    num = 0;
  }
  num2 = 1;
  if (flag) {
    num2 = 0;
  }
  xl = nativeDefault.radii.xl;
  ({ borderTopLeftRadius: flag ? xl : xl - 1, borderTopRightRadius: nativeDefault.radii.none });
  obj4 = { borderLeftWidth: 1, borderTopWidth: 1, borderColor: nativeDefault.colors.APP_FRAME_BORDER, borderTopLeftRadius: nativeDefault.radii.xl };
  ({ borderTopRightRadius: nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS });
  const merged = Object.assign(metroRequire.absoluteFillObject);
  return obj;
});
let closure_18 = react.memo(function LeftMenuTabsInner() {
  let tmp2Result;
  const tmp = closure_14();
  const MobileHomeDrawerExperiment = HomeDrawerExperiment.MobileHomeDrawerExperiment;
  if (MobileHomeDrawerExperiment.useConfig({ location: "gesture" }).enableHome) {
    tmp2Result = tmp2(LeftPanelHomeDrawerContainer, {});
  } else {
    const obj = { style: tmp.fill, children: unpackModuleId(LeftPanelContent, {}) };
    tmp2Result = tmp2(hasOwnProperty, obj);
  }
  return tmp2Result;
});
const memoResult = react.memo(function MainChannelsRedesignInner() {
  const obj = { profile: StartupProfiler.Profiles.LeftPanel, children: unpackModuleId(closure_18, {}) };
  const tmp = StartupProfilerDefault;
  return unpackModuleId(tmp, obj);
});
const result = size.fileFinishedImporting("components_native/MainChannels.tsx");

export default memoResult;
