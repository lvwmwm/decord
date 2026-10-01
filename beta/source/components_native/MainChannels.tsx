// Module ID: 15648
// Function ID: 15649
// Name: MainChannels
// Dependencies: [32, 19, 17, 15649, 1074, 15639, 21, 15651, 5898, 4836, 576, 4695, 1613, 15652, 15653, 15654, 15735, 15917, 4566, 15655, 15636, 15641, 15638, 15999, 4698, 11027, 2]

// Module 15648 (MainChannels)
import nativeDefault from "native" /* 576 */;
import HomeDrawerExperiment from "HomeDrawerExperiment" /* 4698 */;
import useRefValueDefault from "useRefValue" /* 5898 */;
import StartupProfiler from "StartupProfiler" /* 11027 */;
import isJankScreenReportingEnabled from "isJankScreenReportingEnabled" /* 15636 */;
import getJankScreenName from "getJankScreenName" /* 15638 */;
import JankScreenConstants from "JankScreenConstants" /* 15639 */;
import JankSlidingSurfaceReporterDefault from "JankSlidingSurfaceReporter" /* 15641 */;
import useGuildsRouteGuildId from "useGuildsRouteGuildId" /* 15651 */;
import messages_MessagesDefault from "messages/Messages" /* 15654 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 15655 */;
import RedesignChannelListDefault from "RedesignChannelList" /* 15735 */;
import HomePanelContent from "HomePanelContent" /* 15917 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import HomeDrawerStore from "HomeDrawerStore" /* 15649 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const StartupProfilerDefault = StartupProfiler;

let closure_12;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let rect;
let unpackModuleId;
function LeftPanelContent(panelStyles) {
  let first;
  let items3;
  let items5;
  let items6;
  let tmp17Result;
  let tmp6;
  panelStyles = panelStyles.panelStyles;
  let isChatBesideChannelList;
  let top;
  const tmp = closure_13();
  let closure_0 = tmp;
  first = undefined;
  let obj = useGuildsRouteGuildId;
  [first, tmp6] = obj.useGuildsRouteGuildAndChannelId();
  const ref = react.useRef(first);
  let items = [first];
  const effect = react.useEffect(() => {
    ref.current = current;
  }, items);
  let tmp12 = useRefValueDefault(ref);
  if (null != first && first !== ME) {
    tmp12 = first;
  }
  isChatBesideChannelList = tmp11(4695)().isChatBesideChannelList;
  top = tmp11(1613)().top;
  const items1 = [tmp, top];
  const memo = obj2.useMemo(() => {
    const items = [closure_0.sideContainer, ];
    const obj = { marginTop: top };
    items[1] = obj;
    return items;
  }, items1);
  const items2 = [tmp, isChatBesideChannelList];
  const memo1 = obj2.useMemo(() => {
    const items = [closure_0.side, isChatBesideChannelList && closure_0.sideTablet];
    return items;
  }, items2);
  const sum = DM_WIDTH + tmp11(15652)();
  let num = 0;
  const NativeFreezeScreens = tmp2(15653).NativeFreezeScreens;
  if (null != first && first !== ME) {
    num = 1;
  }
  const obj3 = { activeIndex: num, children: items3 };
  items3 = [unpackModuleId(messages_MessagesDefault, { style: memo1 }), unpackModuleId(RedesignChannelListDefault, { style: memo1, selectedGuildId: tmp12, selectedChannelId: tmp6 })];
  const tmp16Result = closure_12(NativeFreezeScreens, obj3);
  const items4 = [metroRequire.absoluteFill, ];
  let tmp20;
  if (isChatBesideChannelList) {
    tmp20 = sum;
  }
  const obj4 = { style: items4, children: items5 };
  items4[1] = { width: tmp20 };
  items5 = [unpackModuleId(HomePanelContent.HomePanelContent, {}), ];
  if (null == panelStyles) {
    const obj5 = { style: memo, pointerEvents: "box-none", nativeID: "messages-parent-view", children: tmp16Result };
    tmp17Result = tmp17(tmp19, obj5);
  } else {
    const obj6 = { style: items6, pointerEvents: "box-none", nativeID: "messages-parent-view", children: tmp16Result };
    items6 = [memo, panelStyles];
    tmp17Result = tmp17(tmp11(4566).View, obj6);
  }
  items5[1] = tmp17Result;
  return closure_12(hasOwnProperty, obj4);
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
  const tmp6 = closure_12;
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
  const NonCollapsableGestureDetector = tmp(15999).NonCollapsableGestureDetector;
  items[1] = unpackModuleId(NonCollapsableGestureDetector, obj5);
  return tmp6(Provider, obj2);
}
({ View: hasOwnProperty, StyleSheet: metroRequire } = react_native);
const DM_WIDTH = Constants.DM_WIDTH;
const ME = Constants.ME;
const HOME_DRAWER_SCREEN = JankScreenConstants.HOME_DRAWER_SCREEN;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { fill: { flex: 1 }, sideContainer: rect, side: obj2, sideTablet: obj3 };
rect = { position: "absolute", top: 0, left: DM_WIDTH, bottom: 0, right: 0, flexDirection: "row", borderLeftWidth: 1, borderTopWidth: 1, borderColor: nativeDefault.colors.APP_FRAME_BORDER, borderTopLeftRadius: nativeDefault.radii.xl };
createStyles = createStyles.createStyles;
obj2 = { borderTopLeftRadius: nativeDefault.radii.xl - 1, borderTopRightRadius: nativeDefault.radii.none };
obj3 = { borderTopRightRadius: nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
let closure_13 = createStyles(obj);
let closure_17 = react.memo(function LeftMenuTabsInner() {
  let tmp2Result;
  const tmp = closure_13();
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
  const obj = { profile: StartupProfiler.Profiles.LeftPanel, children: unpackModuleId(closure_17, {}) };
  const tmp = StartupProfilerDefault;
  return unpackModuleId(tmp, obj);
});
const result = size.fileFinishedImporting("components_native/MainChannels.tsx");

export default memoResult;
