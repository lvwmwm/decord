// Module ID: 14847
// Function ID: 113204
// Name: DM_WIDTH
// Dependencies: [57, 31, 27, 653, 33, 14848, 5122, 4130, 689, 3984, 14849, 14854, 14855, 14856, 3991, 14939, 14940, 15010, 10883, 2]

// Module 14847 (DM_WIDTH)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_9;
let require = arg1;
({ View: closure_5, StyleSheet: closure_6 } = get_ActivityIndicator);
const DM_WIDTH = ME.DM_WIDTH;
ME = ME.ME;
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let obj = {};
obj = { position: "absolute", top: 0, left: DM_WIDTH, bottom: 0, right: 0, flexDirection: "row", borderLeftWidth: 1, borderTopWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.APP_FRAME_BORDER, borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.xl };
obj.sideContainer = obj;
_createForOfIteratorHelperLoose = { borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.xl - 1, borderTopRightRadius: require("_createForOfIteratorHelperLoose").radii.none };
obj.side = _createForOfIteratorHelperLoose;
obj.sideTablet = { borderTopRightRadius: require("_createForOfIteratorHelperLoose").modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
let closure_11 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_12 = importAllResult.memo(function LeftMenuTabsInner() {
  let gesture;
  let homeDrawerState;
  let isGuildSelected;
  let panelStyles;
  let selectedChannelId;
  let selectedGuildId;
  let tmp = callback2();
  const require = tmp;
  ({ isGuildSelected, selectedGuildId, selectedChannelId } = (function useMainChannelsRouteInfo() {
    let obj = tmp(outer1_2[5]);
    tmp = outer1_3(obj.useGuildsRouteGuildAndChannelId(), 2);
    const first = tmp[0];
    const ref = outer1_4.useRef(first);
    const items = [first];
    const effect = outer1_4.useEffect(() => {
      ref.current = first;
    }, items);
    let tmp5 = null != first;
    if (tmp5) {
      tmp5 = first !== outer1_8;
    }
    let tmp7 = isChatBesideChannelList(outer1_2[6])(ref);
    obj = { isGuildSelected: tmp5 };
    if (tmp5) {
      tmp7 = first;
    }
    obj.selectedGuildId = tmp7;
    obj.selectedChannelId = tmp[1];
    return obj;
  })());
  isChatBesideChannelList = isChatBesideChannelList(3984)().isChatBesideChannelList;
  let items = [tmp, isChatBesideChannelList];
  const memo = importAllResult.useMemo(() => {
    const items = [tmp.side, ];
    let sideTablet = isChatBesideChannelList;
    if (isChatBesideChannelList) {
      sideTablet = tmp.sideTablet;
    }
    items[1] = sideTablet;
    return items;
  }, items);
  let obj = require(14849) /* HOME_DRAWER_FLING_PHYSICS */;
  const homeGesture = obj.useHomeGesture();
  ({ gesture, panelStyles, homeDrawerState } = homeGesture);
  const sum = DM_WIDTH + isChatBesideChannelList(14854)();
  obj = { value: homeDrawerState };
  obj = { gesture };
  const obj1 = {};
  const items1 = [absoluteFill.absoluteFill, ];
  const obj2 = {};
  let tmp9;
  if (isChatBesideChannelList) {
    tmp9 = sum;
  }
  obj2.width = tmp9;
  items1[1] = obj2;
  obj1.style = items1;
  const items2 = [callback(require(14856) /* HomePanelContent */.HomePanelContent, {}), ];
  const obj3 = { style: null, pointerEvents: "box-none", nativeID: "messages-parent-view" };
  const items3 = [panelStyles, tmp.sideContainer];
  obj3.style = items3;
  const obj4 = {};
  let num = 0;
  if (isGuildSelected) {
    num = 1;
  }
  obj4.activeIndex = num;
  const items4 = [callback(isChatBesideChannelList(14940), { style: memo }), callback(isChatBesideChannelList(15010), { style: memo, selectedGuildId, selectedChannelId })];
  obj4.children = items4;
  obj3.children = closure_10(require(14939) /* NativeFreezeScreens */.NativeFreezeScreens, obj4);
  items2[1] = callback(isChatBesideChannelList(3991).View, obj3);
  obj1.children = items2;
  obj.children = closure_10(closure_5, obj1);
  obj.children = callback(require(14855) /* NonCollapsableGestureDetector */.NonCollapsableGestureDetector, obj);
  return callback(require(14849) /* HOME_DRAWER_FLING_PHYSICS */.HomeDrawerStateContext.Provider, obj);
});
let obj2 = { borderTopRightRadius: require("_createForOfIteratorHelperLoose").modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
const memoResult = importAllResult.memo(function MainChannelsRedesignInner() {
  const obj = { profile: require(10883) /* setLevels */.Profiles.LeftPanel, children: callback(closure_12, {}) };
  return callback(importDefault(10883), obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("components_native/MainChannels.tsx");

export default memoResult;
