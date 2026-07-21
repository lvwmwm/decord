// Module ID: 14677
// Function ID: 110676
// Name: DM_WIDTH
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// Module 14677 (DM_WIDTH)
import closure_3 from "result";
import importAllResult from "result";
import result from "result";
import result from "result";
import result from "result";
import result from "result";
import result from "result";

({ View: closure_5, StyleSheet: closure_6 } = result);
const DM_WIDTH = result.DM_WIDTH;
const ME = result.ME;
({ jsx: closure_9, jsxs: closure_10 } = result);
let obj = {};
obj = { left: DM_WIDTH, borderColor: require("result").colors.APP_FRAME_BORDER, borderTopLeftRadius: require("result").radii.xl };
obj.sideContainer = obj;
result = { borderTopLeftRadius: require("result").radii.xl - 1, borderTopRightRadius: require("result").radii.none };
obj.side = result;
obj.sideTablet = { borderTopRightRadius: require("result").modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
let closure_11 = result.createStyles(obj);
let closure_12 = importAllResult.memo(function LeftMenuTabsInner() {
  let gesture;
  let homeDrawerState;
  let isGuildSelected;
  let panelStyles;
  let selectedChannelId;
  let selectedGuildId;
  const tmp = callback2();
  const arg1 = tmp;
  ({ isGuildSelected, selectedGuildId, selectedChannelId } = function useMainChannelsRouteInfo() {
    let obj = tmp(closure_2[5]);
    let tmp = callback(obj.useGuildsRouteGuildAndChannelId(), 2);
    const first = tmp[0];
    tmp = first;
    const ref = React.useRef(first);
    const isChatBesideChannelList = ref;
    const items = [first];
    const effect = React.useEffect(() => {
      ref.current = first;
    }, items);
    let tmp5 = null != first;
    if (tmp5) {
      tmp5 = first !== closure_8;
    }
    let tmp7 = isChatBesideChannelList(closure_2[6])(ref);
    obj = { isGuildSelected: tmp5 };
    if (tmp5) {
      tmp7 = first;
    }
    obj.selectedGuildId = tmp7;
    obj.selectedChannelId = tmp[1];
    return obj;
  }());
  const isChatBesideChannelList = importDefault(dependencyMap[9])().isChatBesideChannelList;
  const importDefault = isChatBesideChannelList;
  const items = [tmp, isChatBesideChannelList];
  const memo = importAllResult.useMemo(() => {
    const items = [tmp.side, ];
    let sideTablet = isChatBesideChannelList;
    if (isChatBesideChannelList) {
      sideTablet = tmp.sideTablet;
    }
    items[1] = sideTablet;
    return items;
  }, items);
  let obj = arg1(dependencyMap[10]);
  const homeGesture = obj.useHomeGesture();
  ({ gesture, panelStyles, homeDrawerState } = homeGesture);
  const sum = DM_WIDTH + importDefault(dependencyMap[11])();
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
  const items2 = [callback(arg1(dependencyMap[13]).HomePanelContent, {}), ];
  const obj3 = { style: items3 };
  const items3 = [panelStyles, tmp.sideContainer];
  const obj4 = {};
  let num = 0;
  if (isGuildSelected) {
    num = 1;
  }
  obj4.activeIndex = num;
  const items4 = [callback(importDefault(dependencyMap[16]), { style: memo }), callback(importDefault(dependencyMap[17]), { style: memo, selectedGuildId, selectedChannelId })];
  obj4.children = items4;
  obj3.children = closure_10(arg1(dependencyMap[15]).NativeFreezeScreens, obj4);
  items2[1] = callback(importDefault(dependencyMap[14]).View, obj3);
  obj1.children = items2;
  obj.children = closure_10(closure_5, obj1);
  obj.children = callback(arg1(dependencyMap[12]).NonCollapsableGestureDetector, obj);
  return callback(arg1(dependencyMap[10]).HomeDrawerStateContext.Provider, obj);
});
const obj2 = { borderTopRightRadius: require("result").modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
result = result.fileFinishedImporting("components_native/MainChannels.tsx");

export default importAllResult.memo(function MainChannelsRedesignInner() {
  const obj = { profile: arg1(dependencyMap[18]).Profiles.LeftPanel, children: callback(closure_12, {}) };
  return callback(importDefault(dependencyMap[18]), obj);
});
