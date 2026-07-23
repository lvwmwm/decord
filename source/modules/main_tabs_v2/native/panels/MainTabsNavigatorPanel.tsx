// Module ID: 14788
// Function ID: 112783
// Dependencies: [57, 31, 27, 653, 33, 3, 4130, 689, 1457, 3984, 10850, 10849, 14789, 3989, 14790, 3982, 4138, 1207, 14791, 4140, 14794, 3991, 5089, 8831, 14795, 5217, 14796, 14797, 15254, 15255, 15256, 2]

// Module 14788
import _slicedToArray from "_slicedToArray";
import importAllResult from "set";
import get_ActivityIndicator from "getGuildsComponent";
import ME from "ME";
import jsxProd from "jsxProd";
import importDefaultResult from "ME";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ View: closure_5, StyleSheet: closure_6, Pressable: closure_7 } = get_ActivityIndicator);
({ ComponentActions: closure_8, ME: closure_9 } = ME);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
importDefaultResult = new importDefaultResult("MainTabsNavigatorPanel");
let obj = { container: { flex: 1 } };
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
obj.containerBackground = obj;
obj.tabsContainer = { flex: 1 };
let closure_13 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_14 = { code: "function MainTabsNavigatorPanelTsx1(){const{translateX,highestFullyRenderedScreenIndex}=this.__closure;return{opacity:translateX.get()>0&&highestFullyRenderedScreenIndex.get()<1?1:0};}" };
const memoResult = importAllResult.memo(function MainTabsNavigatorPanel() {
  let closure_13;
  let gesture;
  let isChatBesideChannelList;
  let isDragging;
  let panelGestureContext;
  let tmp = callback2();
  let obj = navigation(drawerWidth[8]);
  navigation = obj.useNavigation();
  const tmp3 = isChatLockedOpen(drawerWidth[9])();
  isChatLockedOpen = tmp3.isChatLockedOpen;
  let obj1 = navigation(drawerWidth[10]);
  drawerWidth = obj1.useDrawerWidth();
  let callback = importAllResult.useRef(isChatLockedOpen);
  importAllResult = importAllResult.useRef(false);
  const items = [isChatLockedOpen];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    if (ref.current !== isChatLockedOpen) {
      ref.current = isChatLockedOpen;
      let tmp3Result = drawerWidth;
      if (isChatLockedOpen) {
        tmp3Result = tmp3(tmp3Result[12]);
        const result = tmp3Result.convertPortraitToLandscapeScreens();
      } else {
        tmp3Result = tmp3(tmp3Result[13]);
        tmp3Result.dismissKeyboard();
        const result1 = tmp3(tmp3Result[12]).convertLandscapeToPortraitScreens();
        const tmp3Result1 = tmp3(tmp3Result[12]);
      }
      closure_4.current = true;
    }
  }, items);
  const arr2 = isChatLockedOpen(drawerWidth[14])(navigation);
  const tmp7 = callback(importAllResult.useState(() => {
    const first = arr2[0];
    let type;
    if (null != first) {
      type = first.type;
    }
    return type === navigation(drawerWidth[14]).ChannelScreenType.DEFAULT;
  }), 2);
  let first = tmp7[0];
  let closure_7 = tmp7[1];
  const first1 = arr2[0];
  let closure_9 = importAllResult.useRef(first1);
  const items1 = [first1];
  const effect = importAllResult.useEffect(() => {
    closure_9.current = first1;
  }, items1);
  const items2 = [navigation];
  callback = importAllResult.useCallback(() => {
    let name1;
    callback(false);
    const state = navigation.getState();
    let index = state.index;
    let name;
    if (null != state.routes[index]) {
      name = tmp3.name;
    }
    let num = 0;
    let num2 = 0;
    if ("channel" === name) {
      do {
        let sum = num + 1;
        index = index - 1;
        let tmp6 = state.routes[index];
        name1 = undefined;
        if (null != tmp6) {
          name1 = tmp6.name;
        }
        num = sum;
        num2 = sum;
      } while ("channel" === name1);
    }
    if (num2 > 0) {
      navigation.pop(num2);
    }
  }, items2);
  const tmp12 = callback(importAllResult.useState(() => navigation(drawerWidth[14]).isActiveTabsGuilds(navigation.getState())), 2);
  const first2 = tmp12[0];
  let closure_12 = tmp12[1];
  const tmp5 = isChatLockedOpen(drawerWidth[11])();
  [isChatBesideChannelList, closure_13] = callback(importAllResult.useState(() => first2), 2);
  const items3 = [navigation];
  const effect1 = importAllResult.useEffect(() => {
    function handleStateChange(data) {
      outer1_12(navigation(drawerWidth[14]).isActiveTabsGuilds(data.data.state));
    }
    handleStateChange.addListener("state", handleStateChange);
    return () => {
      handleStateChange.removeListener("state", handleStateChange);
    };
  }, items3);
  const items4 = [first2];
  const effect2 = importAllResult.useEffect(() => {
    callback2(first2);
  }, items4);
  if (isChatBesideChannelList) {
    isChatBesideChannelList = tmp3.isChatBesideChannelList;
  }
  let closure_15 = importAllResult.useRef(false);
  const items5 = [navigation, callback];
  const callback1 = importAllResult.useCallback((arg0) => {
    callback(arg0);
    closure_15.current = false;
    if (arg0) {
      if (null != ref2.current) {
        if ("channel" !== navigation.getState().routes[navigation.getState(navigation).index].name) {
          const rootNavigationRef = navigation(drawerWidth[15]).getRootNavigationRef();
          let name;
          if (null != rootNavigationRef) {
            const state = rootNavigationRef.getState();
            if (null != state) {
              let index;
              if (null != rootNavigationRef) {
                const state1 = rootNavigationRef.getState();
                if (null != state1) {
                  index = state1.index;
                }
              }
              if (null != state.routes[index]) {
                name = tmp10.name;
              }
            }
          }
          if ("modal" !== name) {
            closure_15.current = true;
            navigation(drawerWidth[16]).transitionToChannel(ref2.current.channelId);
            const obj = navigation(drawerWidth[16]);
          }
          const obj2 = navigation(drawerWidth[15]);
        }
      }
    } else {
      callback();
    }
  }, items5);
  let tmp19 = null != first1;
  callback2 = importAllResult.useCallback(() => {
    const ComponentDispatch = navigation(drawerWidth[17]).ComponentDispatch;
    ComponentDispatch.dispatch(first1.BOTTOM_CHANNEL_SCREEN_DRAG_START);
    navigation(drawerWidth[13]).dismissKeyboard();
  }, []);
  if (tmp19) {
    tmp19 = first1.type !== navigation(drawerWidth[14]).ChannelScreenType.FALLBACK_RENDERED;
  }
  let closure_16 = tmp19;
  obj = {};
  let tmp23 = isChatBesideChannelList;
  const tmp14 = callback(importAllResult.useState(() => first2), 2);
  if (isChatBesideChannelList) {
    tmp23 = isChatLockedOpen;
  }
  obj.canDrag = !tmp23 && tmp19;
  obj.onVisibilityChange = callback1;
  obj.onDragStart = callback2;
  const first3 = arr2[0];
  let type;
  if (null != first3) {
    type = first3.type;
  }
  obj.startShown = type === navigation(drawerWidth[14]).ChannelScreenType.DEFAULT;
  let tmp26;
  if (isChatBesideChannelList) {
    tmp26 = drawerWidth;
  }
  obj.openWidth = tmp26;
  const tmp22Result = isChatLockedOpen(drawerWidth[18])(obj);
  const translateX = tmp22Result.translateX;
  const movePanel = tmp22Result.movePanel;
  const maxWidth = tmp22Result.maxWidth;
  const isDraggingRef = tmp22Result.isDraggingRef;
  const items6 = [isChatBesideChannelList, drawerWidth];
  ({ gesture, panelGestureContext, isDragging } = tmp22Result);
  const effect3 = importAllResult.useEffect(() => {
    logger.log("Chat Layout Changed", { isNavigatorPanelsBesideChannelList: isChatBesideChannelList, drawerWidth });
  }, items6);
  obj = { handleExit: callback, maxWidth, movePanel, screens: arr2, firstScreen: first1 };
  let closure_22 = importAllResult.useRef(obj);
  const effect4 = importAllResult.useEffect(() => {
    closure_22.current = obj;
  });
  let type1;
  if (null != first1) {
    type1 = first1.type;
  }
  const items7 = [type1, translateX, isDraggingRef];
  const effect5 = importAllResult.useEffect(() => {
    let handleExit;
    let maxWidth;
    let movePanel;
    let screens;
    if (!isDraggingRef.current) {
      const current = ref4.current;
      ({ maxWidth, movePanel } = current);
      let type;
      ({ handleExit, screens } = current);
      if (null != first1) {
        type = first1.type;
      }
      const tmp8 = type === navigation(drawerWidth[14]).ChannelScreenType.DEFAULT;
      if (screens.length >= 2) {
        let num6 = 0;
        if (!tmp8) {
          num6 = maxWidth;
        }
        const result = translateX.set(num6);
        callback(tmp8);
      } else if (tmp8) {
        if (ref3.current) {
          ref3.current = false;
          if (translateX.get() === maxWidth) {
            handleExit();
          }
        } else {
          movePanel(true, false, 0, true);
        }
      } else if (movePanel(false, false, 0, false)) {
        navigation(drawerWidth[13]).dismissKeyboard();
        const obj = navigation(drawerWidth[13]);
      }
    }
  }, items7);
  let channelId;
  if (null != first1) {
    channelId = first1.channelId;
  }
  const items8 = [channelId];
  const effect6 = importAllResult.useEffect(() => {
    const firstScreen = ref4.current.firstScreen;
    let type;
    if (null != firstScreen) {
      type = firstScreen.type;
    }
    if (type === navigation(drawerWidth[14]).ChannelScreenType.BACKGROUND_SAVED) {
      let guildId = firstScreen.guildId;
      if (null == guildId) {
        guildId = closure_9;
      }
      isChatLockedOpen(drawerWidth[19]).preload(guildId, firstScreen.channelId);
      const obj = isChatLockedOpen(drawerWidth[19]);
    }
  }, items8);
  const items9 = [movePanel, tmp19];
  const callback3 = importAllResult.useCallback(() => {
    if (closure_16) {
      movePanel(true, false, 0, false);
    }
  }, items9);
  const items10 = [callback3, first, isChatLockedOpen, isChatBesideChannelList];
  if (isChatBesideChannelList) {
    if (isChatLockedOpen) {
      let tmp38 = arr2.length <= 1;
    }
    const items11 = [isChatLockedOpen, isChatBesideChannelList, maxWidth, translateX];
    const memo = importAllResult.useMemo(() => {
      let tmp = null;
      if (isChatBesideChannelList) {
        const obj = { translateX, maxWidth, isChatLockedOpen };
        tmp = callback(isChatLockedOpen(drawerWidth[20]), obj);
      }
      return tmp;
    }, items11);
    let obj4 = navigation(drawerWidth[21]);
    let num2 = 0;
    if (translateX.get() > 0) {
      num2 = -1;
    }
    const sharedValue = obj4.useSharedValue(num2);
    let obj5 = navigation(drawerWidth[21]);
    function se() {
      const obj = {};
      let num = 0;
      if (translateX.get() > 0) {
        num = 0;
        if (sharedValue.get() < 1) {
          num = 1;
        }
      }
      obj.opacity = num;
      return obj;
    }
    obj1 = { translateX, highestFullyRenderedScreenIndex: sharedValue };
    se.__closure = obj1;
    se.__workletHash = 10839500061449;
    se.__initData = isChatBesideChannelList;
    const animatedStyle = obj5.useAnimatedStyle(se);
    let obj7 = navigation(drawerWidth[23]);
    const isCustomThemeActive = obj7.useIsCustomThemeActive();
    let obj2 = { value: panelGestureContext };
    const obj3 = { gesture };
    obj4 = {};
    const items12 = [tmp.container, ];
    let containerBackground = !isCustomThemeActive;
    if (containerBackground) {
      containerBackground = tmp.containerBackground;
    }
    items12[1] = containerBackground;
    obj4.style = items12;
    obj4.collapsable = false;
    obj5 = { enabled: isChatBesideChannelList };
    const obj6 = {};
    const items13 = [tmp.tabsContainer, animatedStyle];
    obj6.style = items13;
    obj6.accessibilityElementsHidden = !tmp38;
    obj6.importantForAccessibility = "no-hide-descendants";
    const items14 = [callback(isChatLockedOpen(drawerWidth[27]), {}), ];
    let tmp61;
    if (tmp49) {
      obj7 = { translateX, maxWidth };
      tmp61 = callback(navigation(drawerWidth[28]).MainTabsContentScrim, obj7);
    }
    items14[1] = tmp61;
    obj6.children = items14;
    const items15 = [first2(isChatLockedOpen(drawerWidth[21]).View, obj6), callback(isChatLockedOpen(drawerWidth[29]), {}), ];
    let tmp69Result = null;
    if (arr2.length > 0) {
      const obj8 = { screens: arr2 };
      if (!first) {
        let tmp73 = isChatBesideChannelList;
        if (isChatBesideChannelList) {
          tmp73 = isChatLockedOpen;
        }
        first = tmp73;
      }
      obj8.screenStackActive = first;
      obj8.translateX = translateX;
      obj8.isDragging = isDragging;
      obj8.maxWidth = maxWidth;
      obj8.highestFullyRenderedScreenIndex = sharedValue;
      obj8.shouldFreeze = !isChatBesideChannelList;
      obj8.focusChatPressableComponent = tmp37;
      let tmp74;
      if (isChatBesideChannelList) {
        if (isChatLockedOpen) {
          tmp74 = tmp5;
        }
      }
      obj8.firstScreenWidth = tmp74;
      obj8.firstScreenFrame = memo;
      tmp69Result = callback(isChatLockedOpen(drawerWidth[30]), obj8);
      const tmp69 = callback;
      const tmp72 = isChatLockedOpen(drawerWidth[30]);
    }
    items15[2] = tmp69Result;
    obj5.children = items15;
    obj4.children = first2(navigation(drawerWidth[26]).SidebarCoachmarkOverlay, obj5);
    obj3.children = callback(arr2, obj4);
    obj2.children = callback(navigation(drawerWidth[25]).GestureDetector, obj3);
    return callback(isChatLockedOpen(drawerWidth[24]).Provider, obj2);
  }
  tmp38 = !first;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsNavigatorPanel.tsx");

export default memoResult;
