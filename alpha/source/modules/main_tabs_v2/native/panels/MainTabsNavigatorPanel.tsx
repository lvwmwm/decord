// Module ID: 18714
// Function ID: 18715
// Name: MainTabsNavigatorPanel
// Dependencies: [32, 19, 17, 1072, 21, 3, 5306, 575, 18715, 5493, 1503, 5495, 12423, 12421, 12424, 18716, 5501, 18717, 6063, 1108, 18718, 8134, 18721, 1655, 7495, 9062, 12011, 18722, 18723, 5598, 18730, 18731, 19358, 19359, 19360, 19580, 19177, 2]

// Module 18714 (MainTabsNavigatorPanel)
import LoggerDefault from "Logger" /* 3 */;
import nativeDefault from "native" /* 575 */;
import RootNavigationRef from "RootNavigationRef" /* 5493 */;
import ChatInputUtils from "ChatInputUtils" /* 5501 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 8134 */;
import useChannelScreensFromNavigation from "useChannelScreensFromNavigation" /* 18715 */;
import PanelsNavigationUtils from "PanelsNavigationUtils" /* 18716 */;
import ChannelScreenAnimatedFrameDefault from "ChannelScreenAnimatedFrame" /* 18721 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let navigation, set;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: hasOwnProperty, StyleSheet: metroRequire, Pressable: metroImportDefault } = react_native);
({ ComponentActions: metroImportAll, ME: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const tmp5 = new LoggerDefault("MainTabsNavigatorPanel");
let closure_12 = tmp5;
let obj = { container: { flex: 1 }, containerBackground: obj2, tabsContainer: { flex: 1 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_13 = createStyles.createStyles(obj);
let closure_14 = { code: "(function MainTabsNavigatorPanelTsx1(){let[translateX,highestFullyRenderedScreenIndex]=this.__closure;return{opacity:translateX.get()>0&&highestFullyRenderedScreenIndex.get()<1?1:0};})" };
const memoResult = react.memo(function MainTabsNavigatorPanel(showHeaderGradient) {
  let SidebarCoachmarkOverlay;
  let c3;
  let channelId1;
  let closure_2;
  let closure_4;
  let closure_6;
  let closure_7;
  let first1;
  let first3;
  let first4;
  let flag2;
  let isChatBesideChannelList;
  let isChatLockedOpen;
  let isDragging;
  let items15;
  let items17;
  let items18;
  let items19;
  let obj10;
  let obj9;
  let ref;
  let tmp25;
  let tmp41;
  let tmp59;
  let tmp60;
  let tmp61;
  let tmp71;
  let tmp72;
  let tmp77;
  let tmp78;
  let type1;
  const f137019 = () => first4;
  let flag = showHeaderGradient.showHeaderGradient;
  if (flag === undefined) {
    flag = true;
  }
  navigation = undefined;
  isChatLockedOpen = undefined;
  let drawerWidth;
  _slicedToArray = undefined;
  react = undefined;
  first1 = undefined;
  closure_6 = undefined;
  closure_7 = undefined;
  let first2;
  let ref2;
  let handleExit;
  let isNavigatorPanelsBesideChannelList;
  let logger;
  closure_13 = undefined;
  let panelGestureContext;
  let translateX;
  let movePanel;
  let maxWidth;
  let isDraggingRef;
  let obj5;
  let ref3;
  let callback4;
  let tmp = closure_13();
  let tmp2 = navigation;
  const tmp3 = drawerWidth;
  let obj = navigation(drawerWidth[10]);
  navigation = obj.useNavigation();
  let tmp6 = isChatLockedOpen(drawerWidth[11])();
  ({ isChatBesideChannelList, isChatLockedOpen } = tmp6);
  let obj2 = navigation(drawerWidth[12]);
  drawerWidth = obj2.useDrawerWidth();
  const tmp8 = isChatLockedOpen(drawerWidth[13])();
  const tmp9 = isChatLockedOpen(drawerWidth[14])();
  let seam;
  if (tmp9 != null) {
    seam = tmp9.seam;
  }
  if (seam == null) {
    seam = null;
  }
  _slicedToArray = react.useRef(isChatLockedOpen);
  react = react.useRef(false);
  const items = [isChatLockedOpen];
  const layoutEffect = react.useLayoutEffect(() => {
    if (ref.current !== isChatLockedOpen) {
      ref.current = isChatLockedOpen;
      if (isChatLockedOpen) {
        const tmp2Result = PanelsNavigationUtils;
        const result = tmp2Result.convertPortraitToLandscapeScreens();
      } else {
        const tmp2Result2 = ChatInputUtils;
        tmp2Result2.dismissKeyboard();
        const obj2 = PanelsNavigationUtils;
        const result1 = obj2.convertLandscapeToPortraitScreens();
      }
      closure_4.current = true;
    }
  }, items);
  const arr2 = isChatLockedOpen(tmp3[8])(navigation);
  const first = arr2[0];
  let type;
  if (first != null) {
    type = first.type;
  }
  const tmp14 = type === tmp2(tmp3[8]).ChannelScreenType.DEFAULT;
  [first1, closure_6] = obj3.useState(tmp14);
  [first3, closure_7] = react.useState(tmp14);
  first2 = arr2[0];
  ref2 = obj3.useRef(first2);
  const items1 = [first2];
  const effect = obj3.useEffect(() => {
    ref2.current = first2;
  }, items1);
  const items2 = [navigation];
  handleExit = obj3.useCallback(() => {
    let name1;
    closure_6(false);
    const state = navigation.getState();
    let index = state.index;
    let name;
    if (state.routes[index] != null) {
      name = tmp3.name;
    }
    let num = 0;
    let num2 = 0;
    if ("channel" === name) {
      do {
        let diff = index - 1;
        let tmp6 = state.routes[diff];
        name1 = undefined;
        if (tmp6 != null) {
          name1 = tmp6.name;
        }
        num = num + 1;
        index = diff;
        num2 = num;
      } while ("channel" === name1);
    }
    if (0 < num2) {
      navigation.pop(num2);
    }
  }, items2);
  first4 = undefined;
  closure_2 = undefined;
  c3 = undefined;
  [first4, closure_2] = react.useState(() => {
    const obj = navigation(drawerWidth[8]);
    return obj.isActiveTabsGuilds(navigation.getState());
  });
  [tmp25, c3] = react.useState(f137019);
  const items3 = [navigation];
  _slicedToArray(react.useState(f137019), 2);
  const effect1 = obj3.useEffect(() => {
    let addListenerResult1;
    let state;
    let obj = navigation(addListenerResult1[9]);
    const rootNavigationRef = obj.getRootNavigationRef();
    let current;
    const tmp = navigation;
    const tmp2 = addListenerResult1;
    if (rootNavigationRef != null) {
      current = rootNavigationRef.current;
    }
    function handleStateChange() {
      const obj = navigation(addListenerResult1[8]);
      addListenerResult1(obj.isActiveTabsGuilds(state.getState()));
    }
    const obj2 = navigation;
    navigation = navigation.addListener("state", handleStateChange);
    let addListenerResult;
    if (current != null) {
      addListenerResult = current.addListener("state", handleStateChange);
    }
    first4 = addListenerResult;
    addListenerResult1 = undefined;
    if (current != null) {
      addListenerResult1 = current.addListener("ready", handleStateChange);
    }
    const tmpResult = tmp(tmp2[8]);
    addListenerResult1(tmpResult.isActiveTabsGuilds(obj2.getState()));
    return () => {
      state();
      if (first4 != null) {
        first4();
      }
      if (addListenerResult1 != null) {
        addListenerResult1();
      }
    };
  }, items3);
  const items4 = [first4];
  const effect2 = obj3.useEffect(() => {
    _undefined(first4);
  }, items4);
  let tmp2Result = tmp2(tmp3[17]);
  let tmp30 = isChatBesideChannelList;
  if (tmp30) {
    tmp30 = tmp25 || tmp29;
  }
  isNavigatorPanelsBesideChannelList = tmp30;
  logger = obj3.useRef(false);
  const items5 = [navigation, handleExit];
  const callback1 = obj3.useCallback((arg0) => {
    closure_6(arg0);
    closure_7(arg0);
    logger.current = false;
    if (arg0) {
      if (null != ref2.current) {
        if ("channel" !== navigation.getState().routes[navigation.getState(navigation).index].name) {
          const obj2 = RootNavigationRef;
          const rootNavigationRef = obj2.getRootNavigationRef();
          let name;
          const tmp15 = require;
          if (rootNavigationRef != null) {
            const state = rootNavigationRef.getState();
            if (state != null) {
              let index;
              const routes = state.routes;
              if (rootNavigationRef != null) {
                const state1 = rootNavigationRef.getState();
                if (state1 != null) {
                  index = state1.index;
                }
              }
              if (routes[index] != null) {
                name = tmp12.name;
              }
            }
          }
          if ("modal" !== name) {
            tmp3.current = true;
            const tmp15Result = tmp15(6063);
            tmp15Result.transitionToChannel(tmp6.current.channelId);
          }
        }
      }
    } else {
      callback();
    }
  }, items5);
  const callback2 = obj3.useCallback((arg0) => {
    const tmp = arg0;
    if (tmp) {
      closure_7(true);
    }
  }, []);
  let tmp35 = null != first2;
  const callback3 = obj3.useCallback(() => {
    const ComponentDispatch = navigation(drawerWidth[19]).ComponentDispatch;
    ComponentDispatch.dispatch(first2.BOTTOM_CHANNEL_SCREEN_DRAG_START);
    const obj = navigation(drawerWidth[16]);
    obj.dismissKeyboard();
  }, []);
  if (tmp35) {
    tmp35 = first2.type !== tmp2(tmp3[8]).ChannelScreenType.FALLBACK_RENDERED;
  }
  closure_13 = tmp35;
  let tmp37 = tmp30;
  const tmp5Result = isChatLockedOpen(tmp3[20]);
  if (tmp30) {
    tmp37 = isChatLockedOpen;
  }
  const first5 = arr2[0];
  const obj4 = { canDrag: !tmp37 && tmp35, onVisibilityChange: callback1, onPreMovement: callback2, onDragStart: callback3, startShown: type1 === tmp2(tmp3[8]).ChannelScreenType.DEFAULT, openWidth: tmp41, foldSeam: seam };
  type1 = undefined;
  if (first5 != null) {
    type1 = first5.type;
  }
  tmp41 = undefined;
  if (tmp30) {
    tmp41 = drawerWidth;
  }
  const tmp5ResultResult = tmp5Result(obj4);
  panelGestureContext = tmp5ResultResult.panelGestureContext;
  translateX = tmp5ResultResult.translateX;
  movePanel = tmp5ResultResult.movePanel;
  maxWidth = tmp5ResultResult.maxWidth;
  isDraggingRef = tmp5ResultResult.isDraggingRef;
  const items6 = [tmp30, drawerWidth];
  ({ gesture, isDragging } = tmp5ResultResult);
  const effect3 = obj3.useEffect(() => {
    const obj = { isNavigatorPanelsBesideChannelList, drawerWidth };
    logger.log("Chat Layout Changed", obj);
  }, items6);
  const items7 = [panelGestureContext, tmp30];
  obj5 = { handleExit, maxWidth, movePanel, screens: arr2, firstScreen: first2 };
  const memo = obj3.useMemo(() => {
    const obj = { isNavigatorPanelsBesideChannelList };
    const merged = Object.assign(panelGestureContext);
    return obj;
  }, items7);
  ref3 = obj3.useRef(obj5);
  const effect4 = obj3.useEffect(() => {
    ref3.current = obj5;
  });
  let type2;
  const useEffect = obj3.useEffect;
  if (first2 != null) {
    type2 = first2.type;
  }
  const items8 = [type2, translateX, isDraggingRef];
  const effect5 = useEffect(() => {
    let screens;
    if (!isDraggingRef.current) {
      const current = ref3.current;
      ({ maxWidth, movePanel } = current);
      let type;
      ({ handleExit, screens } = current);
      if (first2 != null) {
        type = first2.type;
      }
      const tmp6 = type === useChannelScreensFromNavigation.ChannelScreenType.DEFAULT;
      const tmp4 = require;
      if (screens.length >= 2) {
        let num4 = 0;
        set = translateX.set;
        if (!tmp6) {
          num4 = maxWidth;
        }
        const result = set(num4);
        closure_6(tmp6);
        closure_7(tmp6);
      } else if (tmp6) {
        if (logger.current) {
          logger.current = false;
          if (translateX.get() === maxWidth) {
            handleExit();
          }
        } else {
          movePanel(true, false, 0, true);
        }
      } else if (movePanel(false, false, 0, false)) {
        const tmp4Result = tmp4(5501);
        tmp4Result.dismissKeyboard();
      }
    }
  }, items8);
  let channelId;
  const useEffect2 = obj3.useEffect;
  if (first2 != null) {
    channelId = first2.channelId;
  }
  const items9 = [channelId];
  const effect21 = useEffect2(() => {
    const firstScreen = ref3.current.firstScreen;
    let type;
    if (firstScreen != null) {
      type = firstScreen.type;
    }
    if (type === useChannelScreensFromNavigation.ChannelScreenType.BACKGROUND_SAVED) {
      let guildId = firstScreen.guildId;
      const preload = ChannelActionCreatorsDefault.preload;
      ChannelActionCreatorsDefault;
      if (guildId == null) {
        guildId = React4;
      }
      preload(guildId, firstScreen.channelId);
    }
  }, items9);
  const items10 = [movePanel, tmp35];
  callback4 = obj3.useCallback(() => {
    const tmp = closure_13;
    if (tmp) {
      movePanel(true, false, 0, false);
    }
  }, items10);
  const items11 = [callback4, first1, isChatLockedOpen, tmp30];
  if (tmp30) {
    let tmp52;
    let tmp70Result4;
    if (isChatLockedOpen) {
      let num = 1;
      tmp52 = arr2.length <= 1;
    }
    if (!first1) {
      first1 = tmp25 && isChatLockedOpen;
    }
    const items12 = [isChatLockedOpen, tmp30, maxWidth, translateX];
    const memo1 = obj3.useMemo(() => {
      let tmp = null;
      if (isNavigatorPanelsBesideChannelList) {
        const obj = { translateX, maxWidth, isChatLockedOpen };
        tmp = authStore(ChannelScreenAnimatedFrameDefault, obj);
      }
      return tmp;
    }, items12);
    const useSharedValue = tmp2(tmp3[23]).useSharedValue;
    let num2 = 0;
    let num3 = 0;
    tmp2(tmp3[23]);
    if (translateX.get() > 0) {
      num3 = -1;
    }
    const sharedValue = useSharedValue(num3);
    const items13 = [panelGestureContext, translateX, sharedValue];
    let c0;
    let c1;
    [tmp59, tmp60, tmp61] = items13;
    const tmp2Result6 = tmp2(tmp3[23]);
    class MainTabsNavigatorPanelTsx1 {
      constructor() {
        let opacity = 0;
        if (_undefined.get() > 0) {
          opacity = 0;
          if (_undefined2.get() < 1) {
            opacity = 1;
          }
        }
        return { opacity };
      }
    }
    const items14 = [tmp60, tmp61];
    MainTabsNavigatorPanelTsx1.__closure = items14;
    let num4 = 9133325578128;
    MainTabsNavigatorPanelTsx1.__workletHash = 9133325578128;
    MainTabsNavigatorPanelTsx1.__initData = tmp59;
    const animatedStyle = tmp2Result6.useAnimatedStyle(MainTabsNavigatorPanelTsx1);
    const tmp63 = isChatLockedOpen(tmp3[24])("channel_list_scrim");
    const tmp2Result7 = tmp2(tmp3[25]);
    const isCustomThemeActive = tmp2Result7.useIsCustomThemeActive();
    const obj6 = { value: memo, children: items15 };
    const Provider = tmp5(tmp3[26]).Provider;
    let tmp67Result = null;
    const tmp2Result8 = tmp2(tmp3[27]);
    if (tmp2Result8.isJankScreenReportingEnabled()) {
      const obj7 = { translateX, maxWidth, channelId: channelId1, showCreateThread: flag2 };
      channelId1 = undefined;
      const tmp5Result3 = isChatLockedOpen(tmp3[28]);
      const tmp67 = handleExit;
      if (first2 != null) {
        channelId1 = first2.channelId;
      }
      flag2 = undefined;
      if (first2 != null) {
        flag2 = first2.showCreateThread;
      }
      if (flag2 == null) {
        flag2 = false;
      }
      tmp67Result = tmp67(tmp5Result3, obj7);
    }
    items15 = [tmp67Result, ];
    const items16 = [tmp.container, ];
    let containerBackground = !isCustomThemeActive;
    const obj8 = { gesture, children: handleExit(tmp71, obj9) };
    const GestureDetector = tmp2(tmp3[29]).GestureDetector;
    tmp71 = first1;
    if (!isCustomThemeActive) {
      containerBackground = tmp.containerBackground;
    }
    items16[1] = containerBackground;
    obj9 = { style: items16, collapsable: false, children: isNavigatorPanelsBesideChannelList(SidebarCoachmarkOverlay, obj10) };
    SidebarCoachmarkOverlay = tmp2(tmp3[30]).SidebarCoachmarkOverlay;
    const obj11 = { style: items17, accessibilityElementsHidden: tmp72, importantForAccessibility: str2, children: items18 };
    items17 = [tmp.tabsContainer, animatedStyle];
    obj10 = { enabled: tmp25, children: items19 };
    tmp72 = !tmp52;
    const View = tmp5(tmp3[23]).View;
    items18 = [handleExit(tmp5(tmp3[31]), {}), ];
    let tmp70Result;
    if (tmp63) {
      const obj12 = { translateX, maxWidth };
      tmp70Result = tmp70(tmp2(tmp3[32]).MainTabsContentScrim, obj12);
    }
    items18[1] = tmp70Result;
    items19 = [isNavigatorPanelsBesideChannelList(View, obj11), , , ];
    let tmp70Result3 = null;
    if (flag) {
      tmp70Result3 = tmp70(tmp5(tmp3[33]), {});
    }
    items19[1] = tmp70Result3;
    if (arr2.length > 0) {
      const obj13 = { screens: arr2, screenStackActive: first1, screenStackVisible: tmp77, navigationTTIStackVisible: first1, translateX, isDragging, maxWidth, highestFullyRenderedScreenIndex: sharedValue, shouldFreeze: !tmp30, focusChatPressableComponent: tmp51, firstScreenWidth: tmp78, firstScreenFrame: memo1 };
      tmp77 = first1;
      const tmp5Result4 = isChatLockedOpen(tmp3[34]);
      if (!first1) {
        tmp77 = tmp30;
      }
      if (!first1) {
        first1 = first3;
      }
      tmp78 = undefined;
      if (tmp30) {
        if (isChatLockedOpen) {
          tmp78 = tmp8;
        }
      }
      tmp70Result4 = tmp70(tmp5Result4, obj13);
    } else {
      tmp70Result4 = null;
      if (tmp30) {
        tmp70Result4 = null;
        if (isChatLockedOpen) {
          const obj14 = { children: handleExit(isChatLockedOpen(tmp3[35]), {}) };
          const BackgroundChatPortal = tmp2(tmp3[17]).BackgroundChatPortal;
          tmp70Result4 = tmp70(BackgroundChatPortal, obj14);
        }
      }
    }
    items19[2] = tmp70Result4;
    items19[3] = handleExit(isChatLockedOpen(tmp3[36]), { placement: "main-tabs" });
    items15[1] = handleExit(GestureDetector, obj8);
    return isNavigatorPanelsBesideChannelList(Provider, obj6);
  }
  tmp52 = !first1;
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsNavigatorPanel.tsx");

export default memoResult;
