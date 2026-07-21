// Module ID: 15189
// Function ID: 114559
// Name: StyleSheet
// Dependencies: [0, 0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 15189 (StyleSheet)
import closure_3 from "__exportStarResult1";
import importAllResult from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import { MIDNIGHT_BORDER_WIDTH } from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import importDefaultResult from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

const StyleSheet = __exportStarResult1.StyleSheet;
const View = __exportStarResult1.View;
({ getIsChannelDetailsSearchActive: closure_7, setIsChannelDetailsSearchActive: closure_8 } = arg1(dependencyMap[3]));
({ AnalyticEvents: closure_10, ComponentActions: closure_11, ThemeTypes: closure_12 } = __exportStarResult1);
({ jsx: closure_13, jsxs: closure_14 } = __exportStarResult1);
importDefaultResult = new importDefaultResult("SwipeForMemberListWrapper");
const context = importAllResult.createContext(undefined);
let obj = {};
obj = { backgroundColor: require("__exportStarResult1").colors.BACKGROUND_BASE_LOW };
obj.memberListPreview = obj;
__exportStarResult1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
__exportStarResult1["overflow"] = "hidden";
obj.content = __exportStarResult1;
const obj2 = { 9223372036854775807: 10, 9223372036854775807: 10, backgroundColor: require("__exportStarResult1").colors.MODAL_BACKGROUND };
obj.memberListContainer = obj2;
const tmp3 = arg1(dependencyMap[3]);
obj.midnightBorder = { borderLeftColor: require("__exportStarResult1").colors.BORDER_STRONG, borderLeftWidth: MIDNIGHT_BORDER_WIDTH };
obj.midnightRightOverflow = { right: -MIDNIGHT_BORDER_WIDTH };
let closure_17 = __exportStarResult1.createStyles(obj);
let closure_18 = { code: "function SwipeForMemberListWrapperTsx1(){const{shownPixels}=this.__closure;return shownPixels.get()>0;}" };
let closure_19 = { code: "function SwipeForMemberListWrapperTsx2(isVisible,wasVisible){const{mainDisallowGesture,stackDisallowGesture,panelDisallowGesture}=this.__closure;var _stackDisallowGesture;if(isVisible===wasVisible)return;mainDisallowGesture.set(isVisible);(_stackDisallowGesture=stackDisallowGesture)===null||_stackDisallowGesture===void 0||_stackDisallowGesture.set(isVisible);if(!isVisible){panelDisallowGesture.set(false);}}" };
let closure_20 = { code: "function SwipeForMemberListWrapperTsx3(){const{isChatLockedOpen,mainTranslateX,stackTranslateX}=this.__closure;return!isChatLockedOpen&&mainTranslateX.get()>0||stackTranslateX!=null&&stackTranslateX.get()>0;}" };
let closure_21 = { code: "function SwipeForMemberListWrapperTsx4(isInactive,wasInactive){const{panelDisallowGesture}=this.__closure;if(isInactive===wasInactive)return;panelDisallowGesture.set(isInactive);}" };
let closure_22 = { code: "function SwipeForMemberListWrapperTsx5(){const{maxWidth,translateX}=this.__closure;return maxWidth-translateX.get();}" };
let closure_23 = { code: "function SwipeForMemberListWrapperTsx6(){const{theme,ThemeTypes,isChatBesideChannelList,translateX,MIDNIGHT_BORDER_WIDTH}=this.__closure;if(theme!==ThemeTypes.MIDNIGHT||isChatBesideChannelList)return translateX.get();return translateX.get()-MIDNIGHT_BORDER_WIDTH;}" };
let closure_24 = { code: "function SwipeForMemberListWrapperTsx7(){const{shownPixels,PEEK_PIXEL_THRESHOLD}=this.__closure;const exceedsPeekThreshold=shownPixels.get()>PEEK_PIXEL_THRESHOLD*2;return{display:exceedsPeekThreshold?'none':'flex',opacity:exceedsPeekThreshold?0:1-shownPixels.get()/PEEK_PIXEL_THRESHOLD};}" };
const obj3 = { borderLeftColor: require("__exportStarResult1").colors.BORDER_STRONG, borderLeftWidth: MIDNIGHT_BORDER_WIDTH };
const result = arg1(dependencyMap[33]).fileFinishedImporting("modules/main_tabs_v2/native/channel/SwipeForMemberListWrapper.tsx");

export default function _default(channelId) {
  let children;
  let isDragging;
  let style;
  let translateX;
  channelId = channelId.channelId;
  const arg1 = channelId;
  const screenIndex = channelId.screenIndex;
  const importDefault = screenIndex;
  const dependencyMap = channelId.isBackEnabled;
  ({ children, style } = channelId);
  const tmp = callback2();
  const tmp2 = importDefault(dependencyMap[15])();
  let callback = tmp2;
  const isChatBesideChannelList = importDefault(dependencyMap[12])().isChatBesideChannelList;
  const tmp3 = callback(isChatBesideChannelList.useState(channelId), 2);
  const absoluteFill = tmp3[1];
  const items = [channelId];
  const effect = importAllResult.useEffect(() => {
    const channelId = channelId(isBackEnabled[16]).runAfterInteractions(() => {
      callback(closure_0);
    }, 200);
    return () => {
      closure_0.cancel();
    };
  }, items);
  callback = importAllResult.useCallback(() => {
    channelId(isBackEnabled[17]).dismissKeyboard();
  }, []);
  const tmp6 = importDefault(dependencyMap[18])(screenIndex);
  const View = tmp6;
  const items1 = [tmp2, tmp6];
  const items2 = [channelId, screenIndex];
  const memo = importAllResult.useMemo(() => {
    if (tmp2 === derivedStateFromSharedValue.MIDNIGHT) {
      let sum = tmp6 + movePanel;
      const tmp2 = tmp6;
    } else {
      sum = tmp6;
    }
    return sum;
  }, items1);
  const callback1 = importAllResult.useCallback((arg0) => {
    if (!arg0) {
      translateX(channelId, false, "initial");
      const ComponentDispatch = channelId(isBackEnabled[19]).ComponentDispatch;
      const obj = { channelId, screenIndex };
      ComponentDispatch.dispatch(derivedValue.CHANNEL_DETAILS_HIDDEN, obj);
    }
  }, items2);
  const tmp9 = importDefault(dependencyMap[20])({ onDragStart: callback, onPreMovement: callback1, openWidth: memo });
  const panelGestureContext = tmp9.panelGestureContext;
  ({ isDragging, translateX } = tmp9);
  const movePanel = tmp9.movePanel;
  const MIDNIGHT_BORDER_WIDTH = movePanel;
  const maxWidth = tmp9.maxWidth;
  let obj = arg1(dependencyMap[13]);
  class X {
    constructor() {
      return maxWidth - translateX.get();
    }
  }
  X.__closure = { maxWidth, translateX };
  X.__workletHash = 10842481670591;
  X.__initData = closure_22;
  const derivedValue = obj.useDerivedValue(X);
  let obj1 = arg1(dependencyMap[21]);
  const derivedStateFromSharedValue = obj1.useDerivedStateFromSharedValue(derivedValue, (arg0) => arg0 > 0);
  const items3 = [derivedStateFromSharedValue, channelId, screenIndex];
  const effect1 = importAllResult.useEffect(() => {
    if (derivedStateFromSharedValue) {
      const ComponentDispatch = channelId(isBackEnabled[19]).ComponentDispatch;
      const obj = { channelId, screenIndex };
      ComponentDispatch.dispatch(derivedValue.CHANNEL_DETAILS_SHOWN, obj);
    }
  }, items3);
  let obj2 = arg1(dependencyMap[13]);
  function te() {
    if (tmp2 === derivedStateFromSharedValue.MIDNIGHT) {
      if (!isChatBesideChannelList) {
        let diff = translateX.get() - movePanel;
        const tmp2 = translateX;
      }
      return diff;
    }
    diff = translateX.get();
  }
  obj = { theme: tmp2, ThemeTypes: derivedStateFromSharedValue, isChatBesideChannelList, translateX, MIDNIGHT_BORDER_WIDTH };
  te.__closure = obj;
  te.__workletHash = 5498466465211;
  te.__initData = closure_23;
  const derivedValue1 = obj2.useDerivedValue(te);
  const items4 = [channelId, screenIndex, movePanel];
  const callback2 = importAllResult.useCallback((channelId) => {
    let tmp = channelId.channelId === channelId;
    if (tmp) {
      tmp = channelId.screenIndex === screenIndex;
    }
    if (tmp) {
      channelId(isBackEnabled[17]).dismissKeyboard();
      if (true === channelId.search) {
        translateX(channelId.channelId, true, "initial");
      }
      movePanel(true, false, 0, true);
      const obj = channelId(isBackEnabled[17]);
    }
  }, items4);
  const items5 = [movePanel];
  const callback3 = importAllResult.useCallback(() => {
    movePanel(false, false, 0, true);
  }, items5);
  const items6 = [callback3];
  const effect2 = importAllResult.useEffect(() => {
    let closure_0 = screenIndex(isBackEnabled[22]).addRouteChangeListener(() => {
      callback2();
    });
    return () => {
      callback();
    };
  }, items6);
  const items7 = [callback2, callback3];
  const effect3 = importAllResult.useEffect(() => {
    const ComponentDispatch = channelId(isBackEnabled[19]).ComponentDispatch;
    const subscription = ComponentDispatch.subscribe(derivedValue.SHOW_CHANNEL_DETAILS, callback2);
    const ComponentDispatch2 = channelId(isBackEnabled[19]).ComponentDispatch;
    const subscription1 = ComponentDispatch2.subscribe(derivedValue.HIDE_CHANNEL_DETAILS, callback3);
    return () => {
      const ComponentDispatch = callback(closure_2[19]).ComponentDispatch;
      ComponentDispatch.unsubscribe(constants.SHOW_CHANNEL_DETAILS, closure_13);
      const ComponentDispatch2 = callback(closure_2[19]).ComponentDispatch;
      ComponentDispatch2.unsubscribe(constants.HIDE_CHANNEL_DETAILS, closure_14);
    };
  }, items7);
  const items8 = [derivedValue, callback3, channelId];
  const callback4 = importAllResult.useCallback(() => {
    if (derivedValue.get() <= 0) {
      let obj = { shownPixels: derivedValue.get() };
      navigation.verbose("handleBackPress", "shownPixels <= 0", obj);
      return false;
    } else {
      const rootNavigationRef = channelId(isBackEnabled[23]).getRootNavigationRef();
      let currentRoute;
      if (null != rootNavigationRef) {
        currentRoute = rootNavigationRef.getCurrentRoute();
      }
      obj = channelId(isBackEnabled[12]);
      const isChatLockedOpen = obj.getChatLayout().isChatLockedOpen;
      let obj1 = channelId(isBackEnabled[24]);
      const coerceChannelRouteResult = obj1.coerceChannelRoute(currentRoute);
      let coerceGuildsRouteResult = coerceChannelRouteResult;
      if (tmp5) {
        let obj2 = channelId(isBackEnabled[24]);
        coerceGuildsRouteResult = obj2.coerceGuildsRoute(currentRoute);
      }
      obj = { route: coerceGuildsRouteResult, channelId, currentRoute, isChatLockedOpen };
      let params;
      if (null != coerceGuildsRouteResult) {
        params = coerceGuildsRouteResult.params;
      }
      obj.routeParams = params;
      navigation.verbose("handleBackPress", obj);
      if (null == coerceGuildsRouteResult) {
        obj1 = { currentRoute, isChatLockedOpen };
        navigation.verbose("handleBackPress", "route is null", obj1);
        let flag = false;
      } else {
        const params2 = coerceGuildsRouteResult.params;
        let channelId;
        if (null != params2) {
          channelId = params2.channelId;
        }
        if (channelId !== channelId) {
          obj2 = {};
          params = coerceGuildsRouteResult.params;
          let channelId1;
          if (null != params) {
            channelId1 = params.channelId;
          }
          obj2.routeChannelId = channelId1;
          obj2.expectedChannelId = channelId;
          navigation.verbose("handleBackPress", "route channelId mismatch", obj2);
          flag = false;
        } else if (panelGestureContext(channelId)) {
          navigation.verbose("handleBackPress", "cancelling search before closing panel");
          translateX(channelId, false, "initial");
          flag = true;
        } else {
          callback3();
          flag = true;
        }
      }
      return flag;
    }
  }, items8);
  importDefault(dependencyMap[25])(callback4, derivedStateFromSharedValue);
  const items9 = [channelId, screenIndex, callback3];
  const effect4 = importAllResult.useEffect(() => {
    callback3();
  }, items9);
  let obj4 = arg1(dependencyMap[26]);
  let closure_15 = obj4.useNavigation();
  function useAnalyticsEffect(channelId, screenIndex, isDragging, derivedStateFromSharedValue) {
    const isBackEnabled = isDragging;
    const items = [channelId, screenIndex, derivedStateFromSharedValue];
    const effect = isChatBesideChannelList.useEffect(() => {
      let obj = arg1(arg2[10]);
      obj = { channel_id: arg0, screen_index: String(arg1), member_list_open: arg3 };
      obj.trackWithMetadata(constants.MEMBER_LIST_SWIPE_TOGGLED, obj);
    }, items);
    const items1 = [derivedStateFromSharedValue, channelId, screenIndex, isDragging];
    const effect1 = isChatBesideChannelList.useEffect(() => {
      let value = arg3;
      if (arg3) {
        value = arg2.get();
      }
      if (value) {
        let obj = arg1(arg2[10]);
        obj = { channel_id: arg0 };
        const _String = String;
        obj.screen_index = String(arg1);
        obj.trackWithMetadata(constants.MEMBER_LIST_SWIPE_PEEK, obj);
      }
    }, items1);
  }(channelId, screenIndex, isDragging, derivedStateFromSharedValue);
  const items10 = [panelGestureContext, channelId, screenIndex, derivedStateFromSharedValue];
  const memo1 = importAllResult.useMemo(() => {
    const obj = {};
    const merged = Object.assign(panelGestureContext);
    obj["channelId"] = channelId;
    obj["screenIndex"] = screenIndex;
    obj["isPanelActive"] = derivedStateFromSharedValue;
    return obj;
  }, items10);
  let obj5 = arg1(dependencyMap[27]);
  const mainTabsChannelScreenStyles = obj5.useMainTabsChannelScreenStyles(isDragging, derivedValue1, maxWidth);
  let obj6 = arg1(dependencyMap[13]);
  function le() {
    const tmp = derivedValue.get() > 300;
    const obj = {};
    let str = "flex";
    if (tmp) {
      str = "none";
    }
    obj.display = str;
    let num = 0;
    if (!tmp) {
      num = 1 - derivedValue.get() / 150;
    }
    obj.opacity = num;
    return obj;
  }
  le.__closure = { shownPixels: derivedValue, PEEK_PIXEL_THRESHOLD: 150 };
  le.__workletHash = 9468759128012;
  le.__initData = closure_24;
  obj = { value: memo1 };
  const animatedStyle = obj6.useAnimatedStyle(le);
  obj1 = {
    gesture: function useGestureCompositionEffect(gesture, derivedValue, panelGestureContext) {
      const channelId = gesture;
      const screenIndex = derivedValue;
      const context = isChatBesideChannelList.useContext(screenIndex(isBackEnabled[11]));
      gesture = context.gesture;
      const isBackEnabled = gesture;
      const disallowGesture = context.disallowGesture;
      let translateX = context.translateX;
      const isChatBesideChannelList = translateX;
      let context1 = isChatBesideChannelList.useContext(channelId(isBackEnabled[11]).MainTabsChannelScreenStackContext);
      if (null == context1) {
        context1 = {};
      }
      const gesture2 = context1.gesture;
      let closure_5 = gesture2;
      const disallowGesture2 = context1.disallowGesture;
      const translateX2 = context1.translateX;
      panelGestureContext = translateX2;
      const disallowGesture3 = panelGestureContext.disallowGesture;
      translateX = disallowGesture3;
      const isChatLockedOpen = screenIndex(isBackEnabled[12])().isChatLockedOpen;
      const movePanel = isChatLockedOpen;
      const items = [gesture, gesture, gesture2];
      const memo = isChatBesideChannelList.useMemo(() => {
        if (null == gesture2) {
          let result = arg0.simultaneousWithExternalGesture(gesture);
        } else {
          result = arg0.simultaneousWithExternalGesture(gesture, gesture2);
        }
        return result;
      }, items);
      const fn = function u() {
        return arg1.get() > 0;
      };
      fn.__closure = { shownPixels: derivedValue };
      fn.__workletHash = 15116046915956;
      fn.__initData = closure_18;
      const fn2 = function c(arg0, arg1) {
        if (arg0 !== arg1) {
          const result = disallowGesture.set(arg0);
          if (null != disallowGesture2) {
            const result1 = disallowGesture2.set(arg0);
          }
          if (!arg0) {
            const result2 = disallowGesture3.set(false);
          }
        }
      };
      fn2.__closure = { mainDisallowGesture: disallowGesture, stackDisallowGesture: disallowGesture2, panelDisallowGesture: disallowGesture3 };
      fn2.__workletHash = 13681610289748;
      fn2.__initData = closure_19;
      const animatedReaction = channelId(isBackEnabled[13]).useAnimatedReaction(fn, fn2);
      const obj2 = channelId(isBackEnabled[13]);
      const fn3 = function _() {
        let tmp = !isChatLockedOpen;
        if (tmp) {
          tmp = translateX.get() > 0;
        }
        if (!tmp) {
          let tmp5 = null != translateX2;
          if (tmp5) {
            tmp5 = translateX2.get() > 0;
          }
          tmp = tmp5;
        }
        return tmp;
      };
      fn3.__closure = { isChatLockedOpen, mainTranslateX: translateX, stackTranslateX: translateX2 };
      fn3.__workletHash = 11938850302839;
      fn3.__initData = closure_20;
      const fn4 = function h(arg0, arg1) {
        if (arg0 !== arg1) {
          const result = disallowGesture3.set(arg0);
        }
      };
      fn4.__closure = { panelDisallowGesture: disallowGesture3 };
      fn4.__workletHash = 3362957347102;
      fn4.__initData = closure_21;
      const animatedReaction1 = channelId(isBackEnabled[13]).useAnimatedReaction(fn3, fn4);
      const obj3 = channelId(isBackEnabled[13]);
      const unmountEffect = channelId(isBackEnabled[14]).useUnmountEffect(() => {
        const result = disallowGesture3.set(false);
        const result1 = disallowGesture.set(false);
        if (null != disallowGesture2) {
          const result2 = disallowGesture2.set(false);
        }
      });
      return memo;
    }(tmp9.gesture, derivedValue, panelGestureContext)
  };
  obj2 = {
    style,
    onAccessibilityEscape() {
      if (isBackEnabled) {
        navigation.goBack();
      }
    }
  };
  const obj3 = { style: tmp.content, accessibilityElementsHidden: !!derivedStateFromSharedValue };
  let str;
  if (derivedStateFromSharedValue) {
    str = "no-hide-descendants";
  }
  obj3.importantForAccessibility = str;
  const items11 = [children, callback2(arg1(dependencyMap[29]).MainTabsContentScrim, { translateX: derivedValue1, maxWidth })];
  obj3.children = items11;
  const items12 = [callback3(View, obj3), ];
  obj4 = {};
  const items13 = [mainTabsChannelScreenStyles, tmp.memberListContainer, , ];
  let midnightBorder;
  if (tmp2 === derivedStateFromSharedValue.MIDNIGHT) {
    midnightBorder = tmp.midnightBorder;
  }
  items13[2] = midnightBorder;
  let prop;
  if (!isChatBesideChannelList) {
    if (tmp2 === derivedStateFromSharedValue.MIDNIGHT) {
      prop = tmp.midnightRightOverflow;
    }
  }
  items13[3] = prop;
  obj4.style = items13;
  obj4.accessibilityElementsHidden = !derivedStateFromSharedValue || undefined;
  obj4.importantForAccessibility = "no-hide-descendants";
  const items14 = [callback2(importDefault(dependencyMap[30]), {}), , ];
  obj5 = { children: callback2(importDefault(dependencyMap[32]), { isShowing: derivedStateFromSharedValue, channelId: tmp3[0], isSearchLocked: false, onBackPress: callback4, componentWidth: tmp6, onChannelDeleted: callback3 }) };
  items14[1] = callback2(arg1(dependencyMap[31]).LayerScope, obj5);
  obj6 = { style: items15 };
  const items15 = [absoluteFill.absoluteFill, animatedStyle];
  obj6.children = callback2(View, { style: tmp.memberListPreview });
  items14[2] = callback2(importDefault(dependencyMap[13]).View, obj6);
  obj4.children = items14;
  items12[1] = callback3(importDefault(dependencyMap[13]).View, obj4);
  obj2.children = items12;
  obj1.children = callback3(View, obj2);
  obj.children = callback2(arg1(dependencyMap[28]).GestureDetector, obj1);
  return callback2(context.Provider, obj);
};
export const SwipeForMemberListContext = context;
