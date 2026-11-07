// Module ID: 19026
// Function ID: 19027
// Name: SwipeForMemberListWrapper
// Dependencies: [32, 19, 17, 9915, 9903, 1072, 21, 3, 5140, 575, 5889, 11383, 5317, 1652, 5721, 5369, 7270, 5323, 11700, 1108, 18380, 8915, 18391, 12230, 5315, 5314, 6154, 1500, 18950, 14231, 18384, 18389, 18386, 5420, 19027, 13951, 18943, 10855, 5738, 19028, 2]
// Exports: default

// Module 19026 (SwipeForMemberListWrapper)
import LoggerDefault from "Logger" /* 3 */;
import nativeDefault from "native" /* 575 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1108 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5314 */;
import RootNavigationRef from "RootNavigationRef" /* 5315 */;
import useChatLayout from "useChatLayout" /* 5317 */;
import ChatInputUtils from "ChatInputUtils" /* 5323 */;
import react_native from "react-native" /* 9903 */;
import getJankSurfaceName from "getJankSurfaceName" /* 18391 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import ChannelDetailsStore from "ChannelDetailsStore" /* 9915 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

let navigation;

let c10;
let closure_12;
let closure_14;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
let react = react_mod;
let StyleSheet = react_native2.StyleSheet;
let View = react_native2.View;
({ getIsChannelDetailsSearchActive: metroImportDefault, setIsChannelDetailsSearchActive: metroImportAll } = ChannelDetailsStore);
const ONYX_BORDER_WIDTH = react_native.ONYX_BORDER_WIDTH;
({ AnalyticEvents: c10, ComponentActions: unpackModuleId, ThemeTypes: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let closure_15 = new LoggerDefault("SwipeForMemberListWrapper");
const tmp6 = new LoggerDefault("SwipeForMemberListWrapper");
let createStyles = createStyles_mod;
let obj = { memberListPreview: obj2, content: obj3, memberListContainer: obj4, onyxBorder: obj5, onyxRightOverflow: { right: -ONYX_BORDER_WIDTH } };
obj2 = { flex: 1, justifyContent: "center", alignItems: "flex-start", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { overflow: "hidden" };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MODAL_BACKGROUND };
obj5 = { borderLeftColor: nativeDefault.colors.BORDER_STRONG, borderLeftWidth: ONYX_BORDER_WIDTH };
let closure_16 = createStyles(obj);
let closure_17 = { code: "(function SwipeForMemberListWrapperTsx1(){let[shownPixels]=this.__closure;return shownPixels.get()>0;})" };
let closure_18 = { code: "(function SwipeForMemberListWrapperTsx2(isVisible,wasVisible){let[mainDisallowGesture,stackDisallowGesture,panelDisallowGesture]=this.__closure;var _stackDisallowGesture;if(isVisible===wasVisible)return;mainDisallowGesture.set(isVisible);(_stackDisallowGesture=stackDisallowGesture)===null||_stackDisallowGesture===void 0||_stackDisallowGesture.set(isVisible);if(!isVisible){panelDisallowGesture.set(false);}})" };
let closure_19 = { code: "(function SwipeForMemberListWrapperTsx3(){let[isChatLockedOpen,mainTranslateX,stackTranslateX]=this.__closure;return!isChatLockedOpen&&mainTranslateX.get()>0||stackTranslateX!=null&&stackTranslateX.get()>0;})" };
let closure_20 = { code: "(function SwipeForMemberListWrapperTsx4(isInactive,wasInactive){let[panelDisallowGesture]=this.__closure;if(isInactive===wasInactive)return;panelDisallowGesture.set(isInactive);})" };
let closure_21 = { code: "(function SwipeForMemberListWrapperTsx5(){let[maxWidth,translateX]=this.__closure;return maxWidth-translateX.get();})" };
let closure_22 = { code: "(function SwipeForMemberListWrapperTsx6(){let[theme,ThemeTypes,isChatBesideChannelList,translateX,ONYX_BORDER_WIDTH]=this.__closure;if(theme!==ThemeTypes.ONYX||isChatBesideChannelList)return translateX.get();return translateX.get()-ONYX_BORDER_WIDTH;})" };
let closure_23 = { code: "(function SwipeForMemberListWrapperTsx7(){let[shownPixels,PEEK_PIXEL_THRESHOLD]=this.__closure;const exceedsPeekThreshold=shownPixels.get()>PEEK_PIXEL_THRESHOLD*2;return{display:exceedsPeekThreshold?'none':'flex',opacity:exceedsPeekThreshold?0:1-shownPixels.get()/PEEK_PIXEL_THRESHOLD};})" };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/SwipeForMemberListWrapper.tsx");

export default function _default(channelId) {
  let children;
  let closure_4;
  let closure_5;
  let gesture;
  let isDragging;
  let isNavigationTTIVisible;
  let items30;
  let items31;
  let items32;
  let items34;
  let items35;
  let movePanel;
  let obj11;
  let obj6;
  let panelGestureContext;
  let str;
  let style;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp42;
  let tmp43;
  let tmp44;
  let tmp45;
  let tmp46;
  let tmp47;
  let tmp49;
  let tmp50;
  let tmp51;
  let tmp52;
  let tmp53;
  let tmp54;
  let tmp59;
  let tmp60;
  let tmp61;
  let tmp71;
  let translateX;
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const isBackEnabled = channelId.isBackEnabled;
  react = undefined;
  panelGestureContext = undefined;
  movePanel = undefined;
  let derivedValue;
  let derivedStateFromSharedValue;
  let memo1;
  let callback3;
  let callback4;
  navigation = undefined;
  ({ isNavigationTTIVisible, children, style } = channelId);
  let tmp = closure_16();
  let tmp2 = screenIndex;
  let tmp3 = isBackEnabled;
  let tmp4 = screenIndex(isBackEnabled[15])();
  let closure_3 = tmp4;
  const isChatBesideChannelList = screenIndex(isBackEnabled[12])().isChatBesideChannelList;
  let obj = react;
  const tmp5 = closure_3(react.useState(channelId), 2);
  react = tmp5[1];
  const items = [channelId];
  const first = tmp5[0];
  const effect = react.useEffect(() => {
    const obj = channelId(isBackEnabled[16]);
    let closure_0 = obj.runAfterInteractions(() => {
      closure_1_4(closure_0);
    }, 200);
    return () => {
      closure_0.cancel();
    };
  }, items);
  const callback = react.useCallback(() => {
    const obj = channelId(isBackEnabled[17]);
    obj.dismissKeyboard();
  }, []);
  const tmp9 = screenIndex(isBackEnabled[18])(screenIndex);
  StyleSheet = tmp9;
  const items1 = [tmp4, tmp9];
  const items2 = [channelId, screenIndex];
  const memo = react.useMemo(() => {
    let sum;
    if (closure_3 === callback4.ONYX) {
      sum = closure_5 + ONYX_BORDER_WIDTH;
    } else {
      sum = closure_5;
    }
    return sum;
  }, items1);
  const callback1 = react.useCallback((arg0) => {
    const tmp = arg0;
    if (!tmp) {
      metroImportAll(channelId, false, "initial");
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      const obj = { channelId, screenIndex };
      ComponentDispatch.dispatch(unpackModuleId.CHANNEL_DETAILS_HIDDEN, obj);
    }
  }, items2);
  const tmp12 = screenIndex(isBackEnabled[20])({ canDrag: true, onDragStart: callback, onPreMovement: callback1, startShown: false, cancelOnSwipeRightFromStart: true, openWidth: memo });
  ({ gesture, panelGestureContext } = tmp12);
  ({ isDragging, translateX, movePanel } = tmp12);
  const maxWidth = tmp12.maxWidth;
  let obj2 = channelId(isBackEnabled[13]);
  const items3 = [closure_21, maxWidth, translateX];
  let c0;
  let c1;
  [tmp14, tmp15, tmp16] = items3;
  class SwipeForMemberListWrapperTsx5 {
    constructor() {
      return c0 - _undefined.get();
    }
  }
  const items4 = [tmp15, tmp16];
  SwipeForMemberListWrapperTsx5.__closure = items4;
  SwipeForMemberListWrapperTsx5.__workletHash = 10636144961030;
  SwipeForMemberListWrapperTsx5.__initData = tmp14;
  derivedValue = obj2.useDerivedValue(SwipeForMemberListWrapperTsx5);
  const tmp13Result = channelId(tmp3[21]);
  derivedStateFromSharedValue = tmp13Result.useDerivedStateFromSharedValue(derivedValue, (arg0) => arg0 > 0);
  const items5 = [derivedStateFromSharedValue, channelId, screenIndex];
  const effect1 = obj.useEffect(() => {
    const tmp = derivedStateFromSharedValue;
    if (tmp) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      const obj = { channelId, screenIndex };
      ComponentDispatch.dispatch(unpackModuleId.CHANNEL_DETAILS_SHOWN, obj);
    }
  }, items5);
  memo1 = obj.useMemo(() => ({}), []);
  const items6 = [memo1];
  const items7 = [memo1];
  const callback2 = obj.useCallback((arg0) => {
    const obj = getJankSurfaceName;
    const result = obj.recordJankChannelDetailsOpen(memo1, arg0);
  }, items6);
  const effect2 = obj.useEffect(() => () => {
    const obj = channelId(isBackEnabled[22]);
    const result = obj.setJankChannelDetailsOpen(memo1, false);
  }, items7);
  const items8 = [closure_22, tmp4, , , , ];
  items8[2] = callback4;
  items8[3] = isChatBesideChannelList;
  items8[4] = translateX;
  items8[5] = derivedStateFromSharedValue;
  c0 = undefined;
  c1 = undefined;
  let c2;
  let c3;
  let c4;
  [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29] = items8;
  const tmp13Result9 = channelId(tmp3[13]);
  class SwipeForMemberListWrapperTsx6 {
    constructor() {
      if (c0 === _undefined.ONYX) {
        let diff;
        const tmp = c2;
        if (!tmp) {
          diff = _undefined2.get() - c4;
        }
        return diff;
      }
      diff = _undefined2.get();
    }
  }
  const items9 = [tmp25, tmp26, tmp27, tmp28, tmp29];
  SwipeForMemberListWrapperTsx6.__closure = items9;
  SwipeForMemberListWrapperTsx6.__workletHash = 5263013881598;
  SwipeForMemberListWrapperTsx6.__initData = tmp24;
  const derivedValue1 = tmp13Result9.useDerivedValue(SwipeForMemberListWrapperTsx6);
  const items10 = [channelId, screenIndex, movePanel];
  callback3 = obj.useCallback((channelId) => {
    const tmp = channelId.channelId === channelId && channelId.screenIndex === screenIndex;
    if (tmp) {
      const obj = ChatInputUtils;
      obj.dismissKeyboard();
      if (true === channelId.search) {
        metroImportAll(channelId.channelId, true, "initial");
      }
      movePanel(true, false, 0, true);
    }
  }, items10);
  const items11 = [movePanel];
  callback4 = obj.useCallback(() => {
    movePanel(false, false, 0, true);
  }, items11);
  const items12 = [callback4];
  const effect3 = obj.useEffect(() => {
    const obj = screenIndex(isBackEnabled[23]);
    let closure_0 = obj.addRouteChangeListener(() => {
      callback4();
    });
    return () => {
      closure_0();
    };
  }, items12);
  const items13 = [callback3, callback4];
  const effect4 = obj.useEffect(() => {
    let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(unpackModuleId.SHOW_CHANNEL_DETAILS, callback3);
    let ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(unpackModuleId.HIDE_CHANNEL_DETAILS, callback4);
    return () => {
      const ComponentDispatch = channelId(isBackEnabled[19]).ComponentDispatch;
      ComponentDispatch.unsubscribe(callback3.SHOW_CHANNEL_DETAILS, closure_1_11);
      const ComponentDispatch2 = channelId(isBackEnabled[19]).ComponentDispatch;
      ComponentDispatch2.unsubscribe(callback3.HIDE_CHANNEL_DETAILS, callback4);
    };
  }, items13);
  const items14 = [derivedValue, callback4, channelId];
  const callback5 = obj.useCallback(() => {
    let params1;
    const obj = derivedValue;
    if (derivedValue.get() <= 0) {
      const verbose3 = closure_15.verbose;
      const obj2 = { shownPixels: obj.get() };
      verbose3("handleBackPress", "shownPixels <= 0", obj2);
      return false;
    } else {
      let flag;
      const obj9 = RootNavigationRef;
      const rootNavigationRef = obj9.getRootNavigationRef();
      let currentRoute;
      if (rootNavigationRef != null) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
      const tmp23Result = useChatLayout;
      const isChatLockedOpen = tmp23Result.getChatLayout().isChatLockedOpen;
      const tmp23Result3 = NavigationRouteUtils;
      let coerceChannelRouteResult = tmp23Result3.coerceChannelRoute(currentRoute);
      const tmp3 = null == coerceChannelRouteResult && isChatLockedOpen;
      if (tmp3) {
        const tmp23Result4 = NavigationRouteUtils;
        coerceChannelRouteResult = tmp23Result4.coerceGuildsRoute(currentRoute);
      }
      const obj3 = { route: coerceChannelRouteResult, channelId, currentRoute, isChatLockedOpen, routeParams: params1 };
      params1 = undefined;
      const verbose = closure_15.verbose;
      if (coerceChannelRouteResult != null) {
        params1 = coerceChannelRouteResult.params;
      }
      verbose("handleBackPress", obj3);
      if (null == coerceChannelRouteResult) {
        const obj4 = { currentRoute, isChatLockedOpen };
        closure_15.verbose("handleBackPress", "route is null", obj4);
        flag = false;
      } else {
        const params2 = coerceChannelRouteResult.params;
        channelId = undefined;
        if (params2 != null) {
          channelId = params2.channelId;
        }
        if (channelId !== channelId) {
          const params = coerceChannelRouteResult.params;
          let channelId1;
          const verbose2 = closure_15.verbose;
          if (params != null) {
            channelId1 = params.channelId;
          }
          const obj5 = { routeChannelId: channelId1, expectedChannelId: channelId };
          verbose2("handleBackPress", "route channelId mismatch", obj5);
          flag = false;
        } else if (metroImportDefault(channelId)) {
          closure_15.verbose("handleBackPress", "cancelling search before closing panel");
          metroImportAll(channelId, false, "initial");
          flag = true;
        } else {
          callback4();
          flag = true;
        }
      }
      return flag;
    }
  }, items14);
  tmp2(tmp3[26])(callback5, derivedStateFromSharedValue);
  const items15 = [channelId, screenIndex, callback4];
  const effect5 = obj.useEffect(() => {
    callback4();
  }, items15);
  const tmp13Result10 = channelId(tmp3[27]);
  navigation = tmp13Result10.useNavigation();
  const items16 = [channelId, screenIndex, derivedStateFromSharedValue];
  const effect6 = obj.useEffect(() => {
    const obj = screenIndex(isBackEnabled[10]);
    const obj2 = { channel_id: channelId, screen_index: String(screenIndex), member_list_open: derivedStateFromSharedValue };
    obj.trackWithMetadata(memo1.MEMBER_LIST_SWIPE_TOGGLED, obj2);
  }, items16);
  const items17 = [derivedStateFromSharedValue, channelId, screenIndex, isDragging];
  const effect7 = obj.useEffect(() => {
    const value = derivedStateFromSharedValue && isDragging.get();
    if (value) {
      const _String = String;
      const obj = { channel_id: channelId, screen_index: String(screenIndex) };
      const trackWithMetadata = screenIndex(isBackEnabled[10]).trackWithMetadata;
      const MEMBER_LIST_SWIPE_PEEK = memo1.MEMBER_LIST_SWIPE_PEEK;
      screenIndex(isBackEnabled[10]);
      trackWithMetadata(MEMBER_LIST_SWIPE_PEEK, obj);
    }
  }, items17);
  let gesture3;
  let disallowGesture2;
  let disallowGesture3;
  const context = obj.useContext(tmp2(tmp3[11]));
  const gesture2 = context.gesture;
  const disallowGesture = context.disallowGesture;
  const translateX2 = context.translateX;
  let context1 = obj.useContext(tmp13(tmp3[11]).MainTabsChannelScreenStackContext);
  if (context1 == null) {
    context1 = {};
  }
  gesture3 = context1.gesture;
  disallowGesture2 = context1.disallowGesture;
  disallowGesture3 = panelGestureContext.disallowGesture;
  const translateX3 = context1.translateX;
  const items18 = [gesture, gesture2, gesture3];
  let isChatLockedOpen = tmp2(tmp3[12])().isChatLockedOpen;
  const memo2 = obj.useMemo(() => {
    let result;
    if (null == gesture3) {
      result = gesture.simultaneousWithExternalGesture(gesture2);
    } else {
      result = gesture.simultaneousWithExternalGesture(gesture2, tmp);
    }
    return result;
  }, items18);
  const items19 = [closure_17, derivedValue];
  c0 = undefined;
  [tmp42, tmp43] = items19;
  const tmp13Result11 = channelId(tmp3[13]);
  class SwipeForMemberListWrapperTsx1 {
    constructor() {
      return _undefined.get() > 0;
    }
  }
  const items20 = [tmp43];
  SwipeForMemberListWrapperTsx1.__closure = items20;
  SwipeForMemberListWrapperTsx1.__workletHash = 17478574073517;
  SwipeForMemberListWrapperTsx1.__initData = tmp42;
  const items21 = [closure_18, disallowGesture, disallowGesture2, disallowGesture3];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp44, tmp45, tmp46, tmp47] = items21;
  class SwipeForMemberListWrapperTsx2 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const result = _undefined.set(arg0);
        const obj = c1;
        if (c1 != null) {
          const result1 = obj.set(arg0);
        }
        if (!arg0) {
          const result2 = _undefined2.set(false);
        }
      }
    }
  }
  const items22 = [tmp45, tmp46, tmp47];
  SwipeForMemberListWrapperTsx2.__closure = items22;
  SwipeForMemberListWrapperTsx2.__workletHash = 6834415820461;
  SwipeForMemberListWrapperTsx2.__initData = tmp44;
  const animatedReaction = tmp13Result11.useAnimatedReaction(SwipeForMemberListWrapperTsx1, SwipeForMemberListWrapperTsx2);
  const items23 = [closure_19, isChatLockedOpen, translateX2, translateX3];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp49, tmp50, tmp51, tmp52] = items23;
  const tmp13Result12 = channelId(tmp3[13]);
  class SwipeForMemberListWrapperTsx3 {
    constructor() {
      let tmp = !c0 && _undefined.get() > 0;
      if (!tmp) {
        let tmp4 = null != c2;
        const obj = c2;
        if (tmp4) {
          tmp4 = obj.get() > 0;
        }
        tmp = tmp4;
      }
      return tmp;
    }
  }
  const items24 = [tmp50, tmp51, tmp52];
  SwipeForMemberListWrapperTsx3.__closure = items24;
  SwipeForMemberListWrapperTsx3.__workletHash = 14309871449646;
  SwipeForMemberListWrapperTsx3.__initData = tmp49;
  const items25 = [closure_20, disallowGesture3];
  c0 = undefined;
  [tmp53, tmp54] = items25;
  class SwipeForMemberListWrapperTsx4 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        const result = _undefined.set(arg0);
      }
    }
  }
  const items26 = [tmp54];
  SwipeForMemberListWrapperTsx4.__closure = items26;
  SwipeForMemberListWrapperTsx4.__workletHash = 10562317341127;
  SwipeForMemberListWrapperTsx4.__initData = tmp53;
  const animatedReaction1 = tmp13Result12.useAnimatedReaction(SwipeForMemberListWrapperTsx3, SwipeForMemberListWrapperTsx4);
  const tmp13Result13 = channelId(tmp3[14]);
  const unmountEffect = tmp13Result13.useUnmountEffect(() => {
    const result = disallowGesture3.set(false);
    const result1 = disallowGesture.set(false);
    const obj = disallowGesture2;
    if (disallowGesture2 != null) {
      const result2 = obj.set(false);
    }
  });
  const items27 = [panelGestureContext, channelId, screenIndex, derivedStateFromSharedValue];
  const memo3 = obj.useMemo(() => {
    const obj = { channelId, screenIndex, isPanelActive: derivedStateFromSharedValue };
    const merged = Object.assign(panelGestureContext);
    return obj;
  }, items27);
  const tmp13Result14 = channelId(tmp3[28]);
  const mainTabsChannelScreenStyles = tmp13Result14.useMainTabsChannelScreenStyles(isDragging, derivedValue1, maxWidth);
  const items28 = [closure_23, derivedValue, 150];
  c0 = undefined;
  c1 = undefined;
  [tmp59, tmp60, tmp61] = items28;
  const tmp13Result15 = channelId(tmp3[13]);
  class SwipeForMemberListWrapperTsx7 {
    constructor() {
      let num;
      const tmp2 = _undefined.get() > 2 * c1;
      let str = "flex";
      const obj = _undefined;
      const tmp = c1;
      if (tmp2) {
        str = "none";
      }
      const obj2 = { display: str, opacity: num };
      num = 0;
      if (!tmp2) {
        num = 1 - obj.get() / tmp;
      }
      return obj2;
    }
  }
  const items29 = [tmp60, tmp61];
  SwipeForMemberListWrapperTsx7.__closure = items29;
  SwipeForMemberListWrapperTsx7.__workletHash = 2478251364213;
  SwipeForMemberListWrapperTsx7.__initData = tmp59;
  const animatedStyle = tmp13Result15.useAnimatedStyle(SwipeForMemberListWrapperTsx7);
  let obj3 = { value: memo3, children: items30 };
  const Provider = tmp13(tmp3[29]).SwipeForMemberListContext.Provider;
  let tmp64 = null;
  const tmp13Result16 = channelId(tmp3[30]);
  if (tmp13Result16.isJankScreenReportingEnabled()) {
    let obj4 = { position: translateX, openAt: 0, closedAt: maxWidth, resolveOpenName: channelId(tmp3[32]).getBaseScreenName, resolveClosedName: channelId(tmp3[32]).getBaseScreenName, onCoveringChange: callback2 };
    const tmp2Result = tmp2(tmp3[31]);
    tmp64 = navigation(tmp2Result, obj4);
  }
  items30 = [tmp64, ];
  let obj5 = { gesture: memo2, children: closure_14(panelGestureContext, obj6) };
  obj6 = {
    onAccessibilityEscape() {
      const tmp = isBackEnabled;
      if (tmp) {
        navigation.goBack();
      }
    },
    style,
    children: items32
  };
  const GestureDetector = tmp13(tmp3[33]).GestureDetector;
  const obj7 = { name: "channel_screen", navigationKey: channelId, definition: channelId(tmp3[35]).CHANNEL_NAVIGATION_TTI, visibilityMode: "prerendered", isVisible: isNavigationTTIVisible, descendantTracking: "included", accessibilityElementsHidden: derivedStateFromSharedValue || undefined, importantForAccessibility: str, style: tmp.content, children: items31 };
  const NavTTISurfaceProvider = tmp13(tmp3[34]).NavTTISurfaceProvider;
  str = undefined;
  if (derivedStateFromSharedValue) {
    str = "no-hide-descendants";
  }
  items31 = [children, navigation(channelId(tmp3[36]).MainTabsContentScrim, { translateX: derivedValue1, maxWidth })];
  items32 = [closure_14(NavTTISurfaceProvider, obj7), ];
  const items33 = [mainTabsChannelScreenStyles, tmp.memberListContainer, , ];
  let onyxBorder;
  View = tmp2(tmp3[13]).View;
  if (tmp4 === callback4.ONYX) {
    onyxBorder = tmp.onyxBorder;
  }
  items33[2] = onyxBorder;
  let onyxRightOverflow;
  if (!isChatBesideChannelList) {
    if (tmp4 === callback4.ONYX) {
      onyxRightOverflow = tmp.onyxRightOverflow;
    }
  }
  const obj8 = { style: items33, accessibilityElementsHidden: tmp71, importantForAccessibility: str2, children: items34 };
  items33[3] = onyxRightOverflow;
  tmp71 = !derivedStateFromSharedValue;
  items34 = [navigation(tmp2(tmp3[37]), { absolute: true, withOverlay: true, overlayOpacity: 0.5 }), , ];
  let obj9 = { children: navigation(tmp2(tmp3[39]), { isShowing: derivedStateFromSharedValue, channelId: first, isSearchLocked: false, onBackPress: callback5, componentWidth: tmp9, onChannelDeleted: callback4 }) };
  const LayerScope = tmp13(tmp3[38]).LayerScope;
  items34[1] = navigation(LayerScope, obj9);
  const obj10 = { style: items35, children: navigation(panelGestureContext, obj11) };
  items35 = [StyleSheet.absoluteFill, animatedStyle];
  obj11 = { style: tmp.memberListPreview };
  const View2 = tmp2(tmp3[13]).View;
  items34[2] = navigation(View2, obj10);
  items32[1] = closure_14(View, obj8);
  items30[1] = navigation(GestureDetector, obj5);
  return closure_14(Provider, obj3);
};
