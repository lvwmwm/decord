// Module ID: 16435
// Function ID: 16436
// Name: SwipeForMemberListWrapper
// Dependencies: [32, 19, 17, 7301, 7289, 1074, 21, 3, 4836, 576, 5016, 15635, 4695, 4566, 5298, 4767, 6459, 4701, 11020, 1110, 15631, 7715, 15643, 12305, 4693, 4692, 5276, 1486, 16173, 15636, 15641, 15638, 6073, 16436, 16437, 16168, 5437, 6577, 16438, 2]
// Exports: default

// Module 16435 (SwipeForMemberListWrapper)
import LoggerDefault from "Logger" /* 3 */;
import nativeDefault from "native" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4692 */;
import RootNavigationRef from "RootNavigationRef" /* 4693 */;
import useChatLayout from "useChatLayout" /* 4695 */;
import ChatInputUtils from "ChatInputUtils" /* 4701 */;
import react_native from "react-native" /* 7289 */;
import getJankSurfaceName from "getJankSurfaceName" /* 15643 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import ChannelDetailsStore from "ChannelDetailsStore" /* 7301 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

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
let _slicedToArray = _slicedToArray_mod;
let StyleSheet = react_native2.StyleSheet;
let View = react_native2.View;
({ getIsChannelDetailsSearchActive: metroImportDefault, setIsChannelDetailsSearchActive: metroImportAll } = ChannelDetailsStore);
const ONYX_BORDER_WIDTH = react_native.ONYX_BORDER_WIDTH;
({ AnalyticEvents: c10, ComponentActions: unpackModuleId, ThemeTypes: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let closure_15 = new LoggerDefault("SwipeForMemberListWrapper");
const tmp6 = new LoggerDefault("SwipeForMemberListWrapper");
let context = react.createContext(undefined);
let createStyles = createStyles_mod;
let obj = { memberListPreview: obj2, content: obj3, memberListContainer: obj4, onyxBorder: obj5, onyxRightOverflow: { right: -ONYX_BORDER_WIDTH } };
obj2 = { flex: 1, justifyContent: "center", alignItems: "flex-start", overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { overflow: "hidden" };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { flex: 1, overflow: "hidden", backgroundColor: nativeDefault.colors.MODAL_BACKGROUND };
obj5 = { borderLeftColor: nativeDefault.colors.BORDER_STRONG, borderLeftWidth: ONYX_BORDER_WIDTH };
let closure_17 = createStyles(obj);
const __initData = { code: "function SwipeForMemberListWrapperTsx1(){const{shownPixels}=this.__closure;return shownPixels.get()>0;}" };
const __initData2 = { code: "function SwipeForMemberListWrapperTsx2(isVisible,wasVisible){const{mainDisallowGesture,stackDisallowGesture,panelDisallowGesture}=this.__closure;var _stackDisallowGesture;if(isVisible===wasVisible)return;mainDisallowGesture.set(isVisible);(_stackDisallowGesture=stackDisallowGesture)===null||_stackDisallowGesture===void 0||_stackDisallowGesture.set(isVisible);if(!isVisible){panelDisallowGesture.set(false);}}" };
const __initData3 = { code: "function SwipeForMemberListWrapperTsx3(){const{isChatLockedOpen,mainTranslateX,stackTranslateX}=this.__closure;return!isChatLockedOpen&&mainTranslateX.get()>0||stackTranslateX!=null&&stackTranslateX.get()>0;}" };
const __initData4 = { code: "function SwipeForMemberListWrapperTsx4(isInactive,wasInactive){const{panelDisallowGesture}=this.__closure;if(isInactive===wasInactive)return;panelDisallowGesture.set(isInactive);}" };
const __initData5 = { code: "function SwipeForMemberListWrapperTsx5(){const{maxWidth,translateX}=this.__closure;return maxWidth-translateX.get();}" };
const __initData6 = { code: "function SwipeForMemberListWrapperTsx6(){const{theme,ThemeTypes,isChatBesideChannelList,translateX,ONYX_BORDER_WIDTH}=this.__closure;if(theme!==ThemeTypes.ONYX||isChatBesideChannelList)return translateX.get();return translateX.get()-ONYX_BORDER_WIDTH;}" };
const __initData7 = { code: "function SwipeForMemberListWrapperTsx7(){const{shownPixels,PEEK_PIXEL_THRESHOLD}=this.__closure;const exceedsPeekThreshold=shownPixels.get()>PEEK_PIXEL_THRESHOLD*2;return{display:exceedsPeekThreshold?'none':'flex',opacity:exceedsPeekThreshold?0:1-shownPixels.get()/PEEK_PIXEL_THRESHOLD};}" };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/SwipeForMemberListWrapper.tsx");

export default function _default(channelId) {
  let children;
  let closure_3;
  let closure_5;
  let first;
  let gesture;
  let isDragging;
  let isNavigationTTIVisible;
  let items16;
  let items17;
  let items18;
  let items20;
  let items21;
  let obj10;
  let obj15;
  let panelGestureContext;
  let str;
  let style;
  let tmp47;
  let translateX;
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const isBackEnabled = channelId.isBackEnabled;
  StyleSheet = undefined;
  panelGestureContext = undefined;
  translateX = undefined;
  let derivedValue;
  let derivedStateFromSharedValue;
  let memo1;
  let callback3;
  let callback4;
  context = undefined;
  ({ isNavigationTTIVisible, children, style } = channelId);
  let tmp = closure_17();
  let tmp3 = isBackEnabled;
  let tmp4 = screenIndex(isBackEnabled[15])();
  _slicedToArray = tmp4;
  const isChatBesideChannelList = screenIndex(isBackEnabled[12])().isChatBesideChannelList;
  let obj = isChatBesideChannelList;
  [first, StyleSheet] = isChatBesideChannelList.useState(channelId);
  const items = [channelId];
  const effect = isChatBesideChannelList.useEffect(() => {
    const obj = channelId(isBackEnabled[16]);
    let closure_0 = obj.runAfterInteractions(() => {
      closure_1_5(closure_0);
    }, 200);
    return () => {
      closure_0.cancel();
    };
  }, items);
  const callback = isChatBesideChannelList.useCallback(() => {
    const obj = channelId(isBackEnabled[17]);
    obj.dismissKeyboard();
  }, []);
  const tmp9 = screenIndex(isBackEnabled[18])(screenIndex);
  let closure_6 = tmp9;
  const items1 = [tmp4, tmp9];
  const items2 = [channelId, screenIndex];
  const memo = isChatBesideChannelList.useMemo(() => {
    let sum;
    if (closure_3 === derivedStateFromSharedValue.ONYX) {
      sum = closure_6 + ONYX_BORDER_WIDTH;
    } else {
      sum = closure_6;
    }
    return sum;
  }, items1);
  const callback1 = isChatBesideChannelList.useCallback((arg0) => {
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
  ({ isDragging, translateX } = tmp12);
  const movePanel = tmp12.movePanel;
  const maxWidth = tmp12.maxWidth;
  let obj2 = channelId(isBackEnabled[13]);
  class F {
    constructor() {
      return maxWidth - translateX.get();
    }
  }
  F.__closure = { maxWidth, translateX };
  F.__workletHash = 10842481670591;
  F.__initData = __initData5;
  derivedValue = obj2.useDerivedValue(F);
  let obj3 = channelId(isBackEnabled[21]);
  derivedStateFromSharedValue = obj3.useDerivedStateFromSharedValue(derivedValue, (arg0) => arg0 > 0);
  const items3 = [derivedStateFromSharedValue, channelId, screenIndex];
  const effect1 = isChatBesideChannelList.useEffect(() => {
    const tmp = derivedStateFromSharedValue;
    if (tmp) {
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      const obj = { channelId, screenIndex };
      ComponentDispatch.dispatch(unpackModuleId.CHANNEL_DETAILS_SHOWN, obj);
    }
  }, items3);
  memo1 = isChatBesideChannelList.useMemo(() => ({}), []);
  const items4 = [memo1];
  const items5 = [memo1];
  const callback2 = isChatBesideChannelList.useCallback((arg0) => {
    const obj = getJankSurfaceName;
    const result = obj.recordJankChannelDetailsOpen(memo1, arg0);
  }, items4);
  const effect2 = isChatBesideChannelList.useEffect(() => () => {
    const obj = channelId(isBackEnabled[22]);
    const result = obj.setJankChannelDetailsOpen(memo1, false);
  }, items5);
  let obj4 = channelId(isBackEnabled[13]);
  function ae() {
    if (closure_3 === derivedStateFromSharedValue.ONYX) {
      let diff;
      const tmp = isChatBesideChannelList;
      if (!tmp) {
        diff = translateX.get() - ONYX_BORDER_WIDTH;
      }
      return diff;
    }
    diff = translateX.get();
  }
  let obj5 = { theme: tmp4, ThemeTypes: derivedStateFromSharedValue, isChatBesideChannelList, translateX, ONYX_BORDER_WIDTH: movePanel };
  ae.__closure = obj5;
  ae.__workletHash = 2787360249959;
  ae.__initData = __initData6;
  const derivedValue1 = obj4.useDerivedValue(ae);
  const items6 = [channelId, screenIndex, movePanel];
  callback3 = isChatBesideChannelList.useCallback((channelId) => {
    const tmp = channelId.channelId === channelId && channelId.screenIndex === screenIndex;
    if (tmp) {
      const obj = ChatInputUtils;
      obj.dismissKeyboard();
      if (true === channelId.search) {
        metroImportAll(channelId.channelId, true, "initial");
      }
      movePanel(true, false, 0, true);
    }
  }, items6);
  const items7 = [movePanel];
  callback4 = isChatBesideChannelList.useCallback(() => {
    movePanel(false, false, 0, true);
  }, items7);
  const items8 = [callback4];
  const effect3 = isChatBesideChannelList.useEffect(() => {
    const obj = screenIndex(isBackEnabled[23]);
    let closure_0 = obj.addRouteChangeListener(() => {
      callback4();
    });
    return () => {
      closure_0();
    };
  }, items8);
  const items9 = [callback3, callback4];
  const effect4 = isChatBesideChannelList.useEffect(() => {
    let ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(unpackModuleId.SHOW_CHANNEL_DETAILS, callback3);
    let ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(unpackModuleId.HIDE_CHANNEL_DETAILS, callback4);
    return () => {
      const ComponentDispatch = channelId(isBackEnabled[19]).ComponentDispatch;
      ComponentDispatch.unsubscribe(derivedValue.SHOW_CHANNEL_DETAILS, callback3);
      const ComponentDispatch2 = channelId(isBackEnabled[19]).ComponentDispatch;
      ComponentDispatch2.unsubscribe(derivedValue.HIDE_CHANNEL_DETAILS, callback4);
    };
  }, items9);
  const items10 = [derivedValue, callback4, channelId];
  const callback5 = isChatBesideChannelList.useCallback(() => {
    let params1;
    const obj = derivedValue;
    if (derivedValue.get() <= 0) {
      const verbose3 = callback4.verbose;
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
      const verbose = callback4.verbose;
      if (coerceChannelRouteResult != null) {
        params1 = coerceChannelRouteResult.params;
      }
      verbose("handleBackPress", obj3);
      if (null == coerceChannelRouteResult) {
        const obj4 = { currentRoute, isChatLockedOpen };
        callback4.verbose("handleBackPress", "route is null", obj4);
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
          const verbose2 = callback4.verbose;
          if (params != null) {
            channelId1 = params.channelId;
          }
          const obj5 = { routeChannelId: channelId1, expectedChannelId: channelId };
          verbose2("handleBackPress", "route channelId mismatch", obj5);
          flag = false;
        } else if (metroImportDefault(channelId)) {
          callback4.verbose("handleBackPress", "cancelling search before closing panel");
          metroImportAll(channelId, false, "initial");
          flag = true;
        } else {
          callback4();
          flag = true;
        }
      }
      return flag;
    }
  }, items10);
  screenIndex(isBackEnabled[26])(callback5, derivedStateFromSharedValue);
  const items11 = [channelId, screenIndex, callback4];
  const effect5 = isChatBesideChannelList.useEffect(() => {
    callback4();
  }, items11);
  const obj6 = channelId(isBackEnabled[27]);
  obj6.useNavigation();
  const items12 = [channelId, screenIndex, derivedStateFromSharedValue];
  const effect6 = isChatBesideChannelList.useEffect(() => {
    const obj = screenIndex(isBackEnabled[10]);
    const obj2 = { channel_id: channelId, screen_index: String(screenIndex), member_list_open: derivedStateFromSharedValue };
    obj.trackWithMetadata(maxWidth.MEMBER_LIST_SWIPE_TOGGLED, obj2);
  }, items12);
  const items13 = [derivedStateFromSharedValue, channelId, screenIndex, isDragging];
  const effect7 = isChatBesideChannelList.useEffect(() => {
    const value = derivedStateFromSharedValue && isDragging.get();
    if (value) {
      const _String = String;
      const obj = { channel_id: channelId, screen_index: String(screenIndex) };
      const trackWithMetadata = screenIndex(isBackEnabled[10]).trackWithMetadata;
      const MEMBER_LIST_SWIPE_PEEK = maxWidth.MEMBER_LIST_SWIPE_PEEK;
      screenIndex(isBackEnabled[10]);
      trackWithMetadata(MEMBER_LIST_SWIPE_PEEK, obj);
    }
  }, items13);
  let gesture3;
  let disallowGesture2;
  let translateX3;
  let disallowGesture3;
  let isChatLockedOpen;
  context = isChatBesideChannelList.useContext(screenIndex(isBackEnabled[11]));
  const gesture2 = context.gesture;
  const disallowGesture = context.disallowGesture;
  const translateX2 = context.translateX;
  let context1 = isChatBesideChannelList.useContext(channelId(isBackEnabled[11]).MainTabsChannelScreenStackContext);
  if (context1 == null) {
    context1 = {};
  }
  gesture3 = context1.gesture;
  disallowGesture2 = context1.disallowGesture;
  translateX3 = context1.translateX;
  disallowGesture3 = panelGestureContext.disallowGesture;
  isChatLockedOpen = tmp2(tmp3[12])().isChatLockedOpen;
  const items14 = [gesture, gesture2, gesture3];
  const memo2 = obj.useMemo(() => {
    let result;
    if (null == gesture3) {
      result = gesture.simultaneousWithExternalGesture(gesture2);
    } else {
      result = gesture.simultaneousWithExternalGesture(gesture2, tmp);
    }
    return result;
  }, items14);
  const fn = function c() {
    return derivedValue.get() > 0;
  };
  fn.__closure = { shownPixels: derivedValue };
  fn.__workletHash = 15116046915956;
  fn.__initData = __initData;
  const fn2 = function o(arg0, arg1) {
    if (arg0 !== arg1) {
      const result = disallowGesture.set(arg0);
      const obj = disallowGesture2;
      if (disallowGesture2 != null) {
        const result1 = obj.set(arg0);
      }
      if (!arg0) {
        const result2 = disallowGesture3.set(false);
      }
    }
  };
  fn2.__closure = { mainDisallowGesture: disallowGesture, stackDisallowGesture: disallowGesture2, panelDisallowGesture: disallowGesture3 };
  fn2.__workletHash = 13681610289748;
  fn2.__initData = __initData2;
  const tmp13Result = channelId(tmp3[13]);
  const animatedReaction = tmp13Result.useAnimatedReaction(fn, fn2);
  const fn3 = function h() {
    let tmp = !isChatLockedOpen && translateX2.get() > 0;
    if (!tmp) {
      let tmp4 = null != translateX3;
      const obj = translateX3;
      if (tmp4) {
        tmp4 = obj.get() > 0;
      }
      tmp = tmp4;
    }
    return tmp;
  };
  fn3.__closure = { isChatLockedOpen, mainTranslateX: translateX2, stackTranslateX: translateX3 };
  fn3.__workletHash = 11938850302839;
  fn3.__initData = __initData3;
  const fn4 = function u(arg0, arg1) {
    if (arg0 !== arg1) {
      const result = disallowGesture3.set(arg0);
    }
  };
  fn4.__closure = { panelDisallowGesture: disallowGesture3 };
  fn4.__workletHash = 3362957347102;
  fn4.__initData = __initData4;
  const tmp13Result6 = channelId(tmp3[13]);
  const animatedReaction1 = tmp13Result6.useAnimatedReaction(fn3, fn4);
  const tmp13Result7 = channelId(tmp3[14]);
  const unmountEffect = tmp13Result7.useUnmountEffect(() => {
    const result = disallowGesture3.set(false);
    const result1 = disallowGesture.set(false);
    const obj = disallowGesture2;
    if (disallowGesture2 != null) {
      const result2 = obj.set(false);
    }
  });
  const items15 = [panelGestureContext, channelId, screenIndex, derivedStateFromSharedValue];
  const memo3 = obj.useMemo(() => {
    const obj = { channelId, screenIndex, isPanelActive: derivedStateFromSharedValue };
    const merged = Object.assign(panelGestureContext);
    return obj;
  }, items15);
  const tmp13Result8 = channelId(tmp3[28]);
  const mainTabsChannelScreenStyles = tmp13Result8.useMainTabsChannelScreenStyles(isDragging, derivedValue1, maxWidth);
  function ue() {
    let num;
    const tmp = derivedValue.get() > 300;
    let str = "flex";
    const obj = derivedValue;
    if (tmp) {
      str = "none";
    }
    const obj2 = { display: str, opacity: num };
    num = 0;
    if (!tmp) {
      num = 1 - obj.get() / 150;
    }
    return obj2;
  }
  ue.__closure = { shownPixels: derivedValue, PEEK_PIXEL_THRESHOLD: 150 };
  ue.__workletHash = 9468759128012;
  ue.__initData = __initData7;
  const obj7 = { value: memo3, children: items16 };
  const tmp13Result9 = channelId(tmp3[13]);
  const animatedStyle = tmp13Result9.useAnimatedStyle(ue);
  const Provider = context.Provider;
  let tmp40 = null;
  const tmp13Result10 = channelId(tmp3[29]);
  if (tmp13Result10.isJankScreenReportingEnabled()) {
    const obj8 = { position: translateX, openAt: 0, closedAt: maxWidth, resolveOpenName: channelId(tmp3[31]).getBaseScreenName, resolveClosedName: channelId(tmp3[31]).getBaseScreenName, onCoveringChange: callback2 };
    const tmp2Result = screenIndex(tmp3[30]);
    tmp40 = memo1(tmp2Result, obj8);
  }
  items16 = [tmp40, ];
  let obj9 = { gesture: memo2, children: callback3(closure_6, obj10) };
  obj10 = {
    onAccessibilityEscape() {
      const tmp = isBackEnabled;
      if (tmp) {
        navigation.goBack();
      }
    },
    style,
    children: items18
  };
  const GestureDetector = tmp13(tmp3[32]).GestureDetector;
  const obj11 = { name: "channel_screen", navigationKey: channelId, definition: channelId(tmp3[34]).CHANNEL_NAVIGATION_TTI, visibilityMode: "prerendered", isVisible: isNavigationTTIVisible, descendantTracking: "included", accessibilityElementsHidden: derivedStateFromSharedValue || undefined, importantForAccessibility: str, style: tmp.content, children: items17 };
  const NavTTISurfaceProvider = tmp13(tmp3[33]).NavTTISurfaceProvider;
  str = undefined;
  if (derivedStateFromSharedValue) {
    str = "no-hide-descendants";
  }
  items17 = [children, memo1(channelId(tmp3[35]).MainTabsContentScrim, { translateX: derivedValue1, maxWidth })];
  items18 = [callback3(NavTTISurfaceProvider, obj11), ];
  const items19 = [mainTabsChannelScreenStyles, tmp.memberListContainer, , ];
  let onyxBorder;
  View = tmp2(tmp3[13]).View;
  if (tmp4 === derivedStateFromSharedValue.ONYX) {
    onyxBorder = tmp.onyxBorder;
  }
  items19[2] = onyxBorder;
  let onyxRightOverflow;
  if (!isChatBesideChannelList) {
    if (tmp4 === derivedStateFromSharedValue.ONYX) {
      onyxRightOverflow = tmp.onyxRightOverflow;
    }
  }
  const obj12 = { style: items19, accessibilityElementsHidden: tmp47, importantForAccessibility: str2, children: items20 };
  items19[3] = onyxRightOverflow;
  tmp47 = !derivedStateFromSharedValue;
  items20 = [memo1(tmp2(tmp3[36]), { absolute: true, withOverlay: true, overlayOpacity: 0.5 }), , ];
  const obj13 = { children: memo1(screenIndex(tmp3[38]), { isShowing: derivedStateFromSharedValue, channelId: first, isSearchLocked: false, onBackPress: callback5, componentWidth: tmp9, onChannelDeleted: callback4 }) };
  const LayerScope = tmp13(tmp3[37]).LayerScope;
  items20[1] = memo1(LayerScope, obj13);
  const obj14 = { style: items21, children: memo1(closure_6, obj15) };
  items21 = [StyleSheet.absoluteFill, animatedStyle];
  obj15 = { style: tmp.memberListPreview };
  const View2 = tmp2(tmp3[13]).View;
  items20[2] = memo1(View2, obj14);
  items18[1] = callback3(View, obj12);
  items16[1] = memo1(GestureDetector, obj9);
  return callback3(Provider, obj7);
};
export const SwipeForMemberListContext = context;
