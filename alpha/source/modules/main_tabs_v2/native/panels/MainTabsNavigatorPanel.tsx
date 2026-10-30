// Module ID: 17997
// Function ID: 17998
// Name: MainTabsNavigatorPanel
// Dependencies: [32, 19, 17, 1072, 21, 3, 5009, 575, 1499, 5196, 11522, 11520, 11523, 17998, 5202, 17999, 5194, 5751, 1109, 18000, 7479, 18003, 5090, 6994, 9802, 12056, 18004, 18005, 5298, 18012, 18013, 18545, 18546, 18547, 18769, 2]

// Module 17997 (MainTabsNavigatorPanel)
import LoggerDefault from "Logger" /* 3 */;
import nativeDefault from "native" /* 575 */;
import RootNavigationRef from "RootNavigationRef" /* 5194 */;
import ChatInputUtils from "ChatInputUtils" /* 5202 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7479 */;
import PanelsNavigationUtils from "PanelsNavigationUtils" /* 17998 */;
import useChannelScreensFromNavigation from "useChannelScreensFromNavigation" /* 17999 */;
import ChannelScreenAnimatedFrameDefault from "ChannelScreenAnimatedFrame" /* 18003 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
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
let closure_14 = { code: "function MainTabsNavigatorPanelTsx1(){const{translateX,highestFullyRenderedScreenIndex}=this.__closure;return{opacity:translateX.get()>0&&highestFullyRenderedScreenIndex.get()<1?1:0};}" };
const memoResult = react.memo(function MainTabsNavigatorPanel(showHeaderGradient) {
  let SidebarCoachmarkOverlay;
  let _undefined;
  let c13;
  let channelId1;
  let closure_4;
  let closure_6;
  let closure_7;
  let first1;
  let first3;
  let first4;
  let flag2;
  let gesture;
  let isDragging;
  let items12;
  let items14;
  let items15;
  let items16;
  let logger;
  let obj10;
  let obj11;
  let panelGestureContext;
  let ref;
  let tmp25;
  let tmp37;
  let tmp62;
  let tmp63;
  let tmp68;
  let tmp69;
  let type1;
  const f113161 = () => first4;
  let flag = showHeaderGradient.showHeaderGradient;
  if (flag === undefined) {
    flag = true;
  }
  navigation = undefined;
  let isChatLockedOpen;
  let drawerWidth;
  _slicedToArray = undefined;
  react = undefined;
  first1 = undefined;
  closure_6 = undefined;
  closure_7 = undefined;
  let first2;
  let ref2;
  let handleExit;
  first4 = undefined;
  logger = undefined;
  c13 = undefined;
  let ref3;
  let closure_16;
  let translateX;
  let movePanel;
  let maxWidth;
  let isDraggingRef;
  let obj5;
  let ref4;
  let callback4;
  let sharedValue;
  let tmp = c13();
  const tmp3 = drawerWidth;
  let obj = navigation(drawerWidth[8]);
  navigation = obj.useNavigation();
  let tmp6 = isChatLockedOpen(drawerWidth[9])();
  isChatLockedOpen = tmp6.isChatLockedOpen;
  let isChatBesideChannelList = tmp6.isChatBesideChannelList;
  let obj2 = navigation(drawerWidth[10]);
  drawerWidth = obj2.useDrawerWidth();
  const tmp8 = isChatLockedOpen(drawerWidth[11])();
  const tmp9 = isChatLockedOpen(drawerWidth[12])();
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
  const arr2 = isChatLockedOpen(tmp3[15])(navigation);
  const first = arr2[0];
  let type;
  if (first != null) {
    type = first.type;
  }
  const tmp14 = type === navigation(tmp3[15]).ChannelScreenType.DEFAULT;
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
  [first4, logger] = react.useState(() => {
    const obj = useChannelScreensFromNavigation;
    return obj.isActiveTabsGuilds(navigation.getState());
  });
  [tmp25, c13] = react.useState(f113161);
  const items3 = [navigation];
  _slicedToArray(react.useState(f113161), 2);
  const effect1 = obj3.useEffect(() => {
    function handleStateChange(data) {
      const obj = navigation(drawerWidth[15]);
      logger(obj.isActiveTabsGuilds(data.data.state));
    }
    handleStateChange.addListener("state", handleStateChange);
    return () => {
      navigation.removeListener("state", handleStateChange);
    };
  }, items3);
  const items4 = [first4];
  const effect2 = obj3.useEffect(() => {
    _undefined(first4);
  }, items4);
  isChatBesideChannelList = tmp25;
  ref3 = obj3.useRef(false);
  const items5 = [navigation, handleExit];
  const callback1 = obj3.useCallback((arg0) => {
    closure_6(arg0);
    closure_7(arg0);
    ref3.current = false;
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
            const tmp15Result = tmp15(5751);
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
  let tmp31 = null != first2;
  const callback3 = obj3.useCallback(() => {
    const ComponentDispatch = navigation(drawerWidth[18]).ComponentDispatch;
    ComponentDispatch.dispatch(first2.BOTTOM_CHANNEL_SCREEN_DRAG_START);
    const obj = navigation(drawerWidth[14]);
    obj.dismissKeyboard();
  }, []);
  if (tmp31) {
    tmp31 = first2.type !== tmp2(tmp3[15]).ChannelScreenType.FALLBACK_RENDERED;
  }
  closure_16 = tmp31;
  let tmp33 = tmp25;
  const tmp5Result = isChatLockedOpen(tmp3[19]);
  if (tmp25) {
    tmp33 = isChatLockedOpen;
  }
  const first5 = arr2[0];
  const obj4 = { canDrag: !tmp33 && tmp31, onVisibilityChange: callback1, onPreMovement: callback2, onDragStart: callback3, startShown: type1 === navigation(tmp3[15]).ChannelScreenType.DEFAULT, openWidth: tmp37, foldSeam: seam };
  type1 = undefined;
  if (first5 != null) {
    type1 = first5.type;
  }
  tmp37 = undefined;
  if (tmp25) {
    tmp37 = drawerWidth;
  }
  const tmp5ResultResult = tmp5Result(obj4);
  translateX = tmp5ResultResult.translateX;
  movePanel = tmp5ResultResult.movePanel;
  maxWidth = tmp5ResultResult.maxWidth;
  isDraggingRef = tmp5ResultResult.isDraggingRef;
  const items6 = [tmp25, drawerWidth];
  ({ gesture, panelGestureContext, isDragging } = tmp5ResultResult);
  const effect3 = obj3.useEffect(() => {
    const obj = { isNavigatorPanelsBesideChannelList: isChatBesideChannelList, drawerWidth };
    logger.log("Chat Layout Changed", obj);
  }, items6);
  obj5 = { handleExit, maxWidth, movePanel, screens: arr2, firstScreen: first2 };
  ref4 = obj3.useRef(obj5);
  const effect4 = obj3.useEffect(() => {
    ref4.current = obj5;
  });
  let type2;
  const useEffect = obj3.useEffect;
  if (first2 != null) {
    type2 = first2.type;
  }
  const items7 = [type2, translateX, isDraggingRef];
  const effect5 = useEffect(() => {
    let screens;
    if (!isDraggingRef.current) {
      const current = ref4.current;
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
        if (ref3.current) {
          ref3.current = false;
          if (translateX.get() === maxWidth) {
            handleExit();
          }
        } else {
          movePanel(true, false, 0, true);
        }
      } else if (movePanel(false, false, 0, false)) {
        const tmp4Result = tmp4(5202);
        tmp4Result.dismissKeyboard();
      }
    }
  }, items7);
  let channelId;
  const useEffect2 = obj3.useEffect;
  if (first2 != null) {
    channelId = first2.channelId;
  }
  const items8 = [channelId];
  const effect21 = useEffect2(() => {
    const firstScreen = ref4.current.firstScreen;
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
  }, items8);
  const items9 = [movePanel, tmp31];
  callback4 = obj3.useCallback(() => {
    const tmp = closure_16;
    if (tmp) {
      movePanel(true, false, 0, false);
    }
  }, items9);
  const items10 = [callback4, first1, isChatLockedOpen, tmp25];
  if (tmp25) {
    let tmp47;
    let tmp61Result4;
    if (isChatLockedOpen) {
      let num = 1;
      tmp47 = arr2.length <= 1;
    }
    if (!first1) {
      first1 = tmp25 && isChatLockedOpen;
    }
    const items11 = [isChatLockedOpen, tmp25, maxWidth, translateX];
    const memo = obj3.useMemo(() => {
      let tmp = null;
      if (isChatBesideChannelList) {
        const obj = { translateX, maxWidth, isChatLockedOpen };
        tmp = authStore(ChannelScreenAnimatedFrameDefault, obj);
      }
      return tmp;
    }, items11);
    let tmp2Result = tmp2(tmp3[22]);
    const useSharedValue = tmp2Result.useSharedValue;
    let num2 = 0;
    let num3 = 0;
    if (translateX.get() > 0) {
      num3 = -1;
    }
    sharedValue = useSharedValue(num3);
    function he() {
      let opacity = 0;
      if (translateX.get() > 0) {
        opacity = 0;
        if (sharedValue.get() < 1) {
          opacity = 1;
        }
      }
      return { opacity };
    }
    const obj6 = { translateX, highestFullyRenderedScreenIndex: sharedValue };
    he.__closure = obj6;
    let num4 = 10839500061449;
    he.__workletHash = 10839500061449;
    he.__initData = isChatBesideChannelList;
    const tmp2Result4 = navigation(tmp3[22]);
    const animatedStyle = tmp2Result4.useAnimatedStyle(he);
    const tmp54 = isChatLockedOpen(tmp3[23])("channel_list_scrim");
    const tmp2Result5 = navigation(tmp3[24]);
    const isCustomThemeActive = tmp2Result5.useIsCustomThemeActive();
    const obj7 = { value: panelGestureContext, children: items12 };
    const Provider = tmp5(tmp3[25]).Provider;
    let tmp58Result = null;
    const tmp2Result6 = navigation(tmp3[26]);
    if (tmp2Result6.isJankScreenReportingEnabled()) {
      const obj8 = { translateX, maxWidth, channelId: channelId1, showCreateThread: flag2 };
      channelId1 = undefined;
      const tmp58 = handleExit;
      const tmp5Result3 = isChatLockedOpen(tmp3[27]);
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
      tmp58Result = tmp58(tmp5Result3, obj8);
    }
    items12 = [tmp58Result, ];
    const items13 = [tmp.container, ];
    let containerBackground = !isCustomThemeActive;
    const obj9 = { gesture, children: handleExit(tmp62, obj10) };
    const GestureDetector = tmp2(tmp3[28]).GestureDetector;
    tmp62 = first1;
    if (!isCustomThemeActive) {
      containerBackground = tmp.containerBackground;
    }
    items13[1] = containerBackground;
    obj10 = { style: items13, collapsable: false, children: first4(SidebarCoachmarkOverlay, obj11) };
    obj11 = { enabled: tmp25, children: items16 };
    SidebarCoachmarkOverlay = tmp2(tmp3[29]).SidebarCoachmarkOverlay;
    const obj12 = { style: items14, accessibilityElementsHidden: tmp63, importantForAccessibility: str2, children: items15 };
    items14 = [tmp.tabsContainer, animatedStyle];
    tmp63 = !tmp47;
    const View = tmp5(tmp3[22]).View;
    items15 = [handleExit(tmp5(tmp3[30]), {}), ];
    let tmp61Result;
    if (tmp54) {
      const obj13 = { translateX, maxWidth };
      tmp61Result = tmp61(tmp2(tmp3[31]).MainTabsContentScrim, obj13);
    }
    items15[1] = tmp61Result;
    items16 = [first4(View, obj12), , ];
    let tmp61Result3 = null;
    if (flag) {
      tmp61Result3 = tmp61(tmp5(tmp3[32]), {});
    }
    items16[1] = tmp61Result3;
    if (arr2.length > 0) {
      const obj14 = { screens: arr2, screenStackActive: first1, screenStackVisible: tmp68, navigationTTIStackVisible: first1, translateX, isDragging, maxWidth, highestFullyRenderedScreenIndex: sharedValue, shouldFreeze: !tmp25, focusChatPressableComponent: tmp46, firstScreenWidth: tmp69, firstScreenFrame: memo };
      tmp68 = first1;
      const tmp5Result4 = isChatLockedOpen(tmp3[33]);
      if (!first1) {
        tmp68 = tmp25;
      }
      if (!first1) {
        first1 = first3;
      }
      tmp69 = undefined;
      if (tmp25) {
        if (isChatLockedOpen) {
          tmp69 = tmp8;
        }
      }
      tmp61Result4 = tmp61(tmp5Result4, obj14);
    } else {
      tmp61Result4 = null;
      if (tmp25) {
        tmp61Result4 = null;
        if (isChatLockedOpen) {
          tmp61Result4 = tmp61(tmp5(tmp3[34]), {});
        }
      }
    }
    items16[2] = tmp61Result4;
    items12[1] = handleExit(GestureDetector, obj9);
    return first4(Provider, obj7);
  }
  tmp47 = !first1;
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsNavigatorPanel.tsx");

export default memoResult;
