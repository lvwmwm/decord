// Module ID: 14876
// Function ID: 112066
// Dependencies: []

// Module 14876
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ getScaledSearchBarHeight: closure_5, VIEWABILITY_CONFIG: closure_6 } = arg1(dependencyMap[3]));
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]).createAnimatedComponent(arg1(dependencyMap[2]).Pressable);
const importDefaultResult = importDefault(dependencyMap[6]);
let closure_11 = arg1(dependencyMap[7]).createStyles((arg0, arg1) => {
  let obj = {};
  obj = {};
  let num = 5;
  if (arg0) {
    num = 6;
  }
  obj.paddingLeft = num;
  obj.borderRadius = importDefault(dependencyMap[8]).radii.round;
  const tmp = importDefault(dependencyMap[8]);
  if (arg0) {
    let RED_400 = tmp.unsafe_rawColors.RED_400;
  } else {
    const colors = tmp.colors;
    RED_400 = arg1 ? colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT : colors.BACKGROUND_SURFACE_HIGHEST;
  }
  obj.backgroundColor = RED_400;
  obj.shadowColor = importDefault(dependencyMap[8]).colors.BLACK;
  obj.shadowOffset = { aze: 131072.00314656927, azj: 0.000000000000000000000000000000000000000000000000000000011294471302334573 };
  obj.shadowOpacity = 0.08;
  obj.shadowRadius = 4;
  obj.borderWidth = 1;
  obj.borderColor = importDefault(dependencyMap[8]).colors.BORDER_SUBTLE;
  obj.unreadBar = obj;
  obj = { removeYearlyUpsell: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009314309555905229, flex: -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000084784747826077, paddingTop: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000162118904061442, paddingBottom: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000241907557916 };
  let num2 = 0;
  if (obj4.isAndroid()) {
    num2 = -1;
  }
  obj.marginTop = num2;
  obj.text = obj;
  return obj;
});
let closure_12 = { code: "function ChannelsUnreadBarTsx1(){const{shown,position,scrollPosition,listPaddingTop,searchBarHeight,justReachedEnd,runOnJS,resetReachedEnd,height,MARGIN,guildChannelsListUnreadBarInsetEnd,width,withSpring,springStandard,interpolate,pressed,ON_PRESS_SPRING}=this.__closure;const animatedShown=shown&&(position==='top'?scrollPosition!=null&&listPaddingTop!=null&&scrollPosition.get()>listPaddingTop+searchBarHeight:!justReachedEnd);if(justReachedEnd){runOnJS(resetReachedEnd)();}const offsetBase=height.get()-MARGIN;const value=animatedShown?position==='bottom'&&guildChannelsListUnreadBarInsetEnd!=null?-guildChannelsListUnreadBarInsetEnd.get():0:offsetBase*(position==='bottom'?1:-1);const opacity=animatedShown?1:0;const scale=width.get()>0?(width.get()+5)/width.get():1;return{opacity:withSpring(opacity,springStandard,'animate-always'),transform:[{translateY:withSpring(value,springStandard)},{translateX:width.get()/2},{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING)}]};}" };
const obj3 = arg1(dependencyMap[7]);
const memoResult = importAllResult.memo(function ChannelsUnreadBar(position) {
  position = position.position;
  const arg1 = position;
  const shown = position.shown;
  const importDefault = shown;
  const onPress = position.onPress;
  const dependencyMap = onPress;
  const isMention = position.isMention;
  let callback = isMention;
  const guildChannelsListUnreadBarInsetEnd = position.guildChannelsListUnreadBarInsetEnd;
  const scrollPosition = position.scrollPosition;
  const listPaddingTop = position.listPaddingTop;
  const endReachedCounter = position.endReachedCounter;
  const AnalyticEvents = endReachedCounter;
  const headerHeight = position.headerHeight;
  let first;
  let closure_10;
  let callback2;
  let closure_12;
  let sharedValue2;
  let youBarTotalHeight;
  let tmp19;
  let first1;
  let closure_17;
  let callback4;
  let tmp2 = null != isMention;
  if (tmp2) {
    tmp2 = isMention;
  }
  const tmp3 = callback(guildChannelsListUnreadBarInsetEnd.useState(tmp2), 2);
  first = tmp3[0];
  closure_10 = tmp3[1];
  const items = [isMention];
  const effect = importAllResult.useEffect(() => {
    if (null != isMention) {
      callback(isMention);
    }
  }, items);
  const tmp6 = callback2(first, importDefault(dependencyMap[10])());
  let obj = arg1(dependencyMap[11]);
  const fontScale = obj.useFontScale();
  let obj1 = arg1(dependencyMap[12]);
  const sum = obj1.scaleTextLineHeight("text-xs/bold", fontScale) + 8;
  let obj2 = arg1(dependencyMap[6]);
  const sharedValue = obj2.useSharedValue(0);
  callback2 = sharedValue;
  const sharedValue1 = arg1(dependencyMap[6]).useSharedValue(sum);
  closure_12 = sharedValue1;
  const items1 = [sharedValue, sharedValue1];
  const items2 = [shown, first, position];
  callback = importAllResult.useCallback((nativeEvent) => {
    const width = nativeEvent.nativeEvent.layout.width;
    if (0 !== width) {
      const result = sharedValue.set(width);
    }
    const height = nativeEvent.nativeEvent.layout.height;
    if (0 !== height) {
      const result1 = sharedValue1.set(height);
    }
  }, items1);
  const effect1 = importAllResult.useEffect(() => {
    if (shown) {
      let obj = shown(onPress[13]);
      obj = { is_mention: first, position };
      obj.trackWithMetadata(endReachedCounter.CHANNEL_LIST_UNREAD_BADGE_VIEWED, obj);
    }
  }, items2);
  const items3 = [onPress, position, first];
  const callback1 = importAllResult.useCallback(() => {
    let obj = shown(onPress[13]);
    obj = { is_mention: first, position };
    obj.trackWithMetadata(endReachedCounter.CHANNEL_LIST_UNREAD_BADGE_CLICKED, obj);
    onPress();
  }, items3);
  const obj4 = arg1(dependencyMap[6]);
  sharedValue2 = arg1(dependencyMap[6]).useSharedValue(0);
  const items4 = [sharedValue2];
  const items5 = [sharedValue2];
  callback2 = importAllResult.useCallback(() => {
    const result = sharedValue2.set(1);
  }, items4);
  const callback3 = importAllResult.useCallback(() => {
    const result = sharedValue2.set(0);
  }, items5);
  const obj5 = arg1(dependencyMap[6]);
  youBarTotalHeight = arg1(dependencyMap[14]).useYouBarTotalHeight();
  const items6 = [headerHeight, position, youBarTotalHeight];
  const memo = importAllResult.useMemo(() => {
    if ("bottom" === position) {
      let obj = { bottom: youBarTotalHeight };
    } else {
      obj = { top: headerHeight };
    }
    return obj;
  }, items6);
  tmp19 = scrollPosition(fontScale);
  const tmp20 = callback(guildChannelsListUnreadBarInsetEnd.useState(false), 2);
  first1 = tmp20[0];
  closure_17 = tmp20[1];
  const items7 = [endReachedCounter];
  const effect2 = importAllResult.useEffect(() => {
    if (null != endReachedCounter) {
      callback2(true);
    }
  }, items7);
  callback4 = importAllResult.useCallback(() => {
    const timerId = setTimeout(() => {
      callback(false);
    }, listPaddingTop.minimumViewTime + 1);
  }, []);
  const obj6 = arg1(dependencyMap[14]);
  class X {
    constructor() {
      tmp = shown;
      if (!shown) {
        tmp13 = closure_16;
        if (closure_16) {
          tmp14 = position;
          tmp15 = onPress;
          num = 6;
          obj = position(onPress[6]);
          tmp16 = closure_18;
          tmp17 = obj.runOnJS(closure_18)();
        }
        tmp18 = closure_12;
        num2 = 12;
        tmp20 = position;
        str2 = "bottom";
        if (tmp) {
          num4 = 0;
          if ("bottom" === tmp20) {
            tmp22 = closure_4;
            tmp23 = null;
            num4 = 0;
            if (null != closure_4) {
              tmp24 = closure_4;
              num4 = -closure_4.get();
            }
          }
          result = num4;
        } else {
          num3 = -1;
          if ("bottom" === tmp20) {
            num3 = 1;
          }
          result = tmp19 * num3;
        }
        num5 = 0;
        num6 = 0;
        if (tmp) {
          num6 = 1;
        }
        tmp25 = closure_11;
        num7 = 1;
        if (closure_11.get() > 0) {
          tmp26 = closure_11;
          num8 = 5;
          tmp28 = closure_11;
          sum = closure_11.get() + 5;
          num7 = sum / closure_11.get();
        }
        obj = {};
        tmp29 = position;
        tmp30 = onPress;
        num9 = 15;
        obj3 = position(onPress[15]);
        num10 = 16;
        str3 = "animate-always";
        obj.opacity = obj3.withSpring(num6, position(onPress[16]).springStandard, "animate-always");
        obj1 = {};
        obj5 = position(onPress[15]);
        obj1.translateY = obj5.withSpring(result, position(onPress[16]).springStandard);
        items = [, , ];
        items[0] = obj1;
        obj2 = {};
        tmp31 = closure_11;
        num11 = 2;
        obj2.translateX = closure_11.get() / 2;
        items[1] = obj2;
        obj3 = {};
        obj8 = position(onPress[15]);
        num12 = 6;
        obj9 = position(onPress[6]);
        tmp32 = closure_13;
        items1 = [24573934974154670000000000000000000000000000000000000000000000000000000000000];
        items1[1] = num7;
        interpolateResult = obj9.interpolate(closure_13.get(), [null, null], items1);
        obj3.scale = obj8.withSpring(interpolateResult, position(onPress[16]).ON_PRESS_SPRING);
        items[2] = obj3;
        obj.transform = items;
        return obj;
      } else {
        tmp2 = position;
        str = "top";
        if ("top" === position) {
          tmp5 = scrollPosition;
          tmp6 = null;
          tmp7 = null != scrollPosition;
          if (tmp7) {
            tmp8 = listPaddingTop;
            tmp7 = null != listPaddingTop;
          }
          if (tmp7) {
            tmp9 = scrollPosition;
            tmp10 = listPaddingTop;
            tmp11 = closure_15;
            tmp7 = scrollPosition.get() > listPaddingTop + closure_15;
          }
          tmp4 = tmp7;
        } else {
          tmp3 = closure_16;
          tmp4 = !closure_16;
        }
        tmp12 = tmp4;
      }
      return;
    }
  }
  obj = { shown, position, scrollPosition, listPaddingTop, searchBarHeight: tmp19, justReachedEnd: first1, runOnJS: arg1(dependencyMap[6]).runOnJS, resetReachedEnd: callback4, height: sharedValue1, MARGIN: 12, guildChannelsListUnreadBarInsetEnd, width: sharedValue, withSpring: arg1(dependencyMap[15]).withSpring, springStandard: arg1(dependencyMap[16]).springStandard, interpolate: arg1(dependencyMap[6]).interpolate, pressed: sharedValue2, ON_PRESS_SPRING: arg1(dependencyMap[16]).ON_PRESS_SPRING };
  X.__closure = obj;
  X.__workletHash = 978162815161;
  X.__initData = closure_12;
  const animatedStyle = arg1(dependencyMap[6]).useAnimatedStyle(X);
  if (first) {
    let ArrowSmallUpIcon = arg1(dependencyMap[17]).AtIcon;
  } else if ("bottom" === position) {
    ArrowSmallUpIcon = arg1(dependencyMap[18]).ArrowSmallDownIcon;
  } else {
    ArrowSmallUpIcon = arg1(dependencyMap[19]).ArrowSmallUpIcon;
  }
  obj = {};
  const tmp32 = importDefault(dependencyMap[8]);
  if (first) {
    let MOBILE_UNREADBAR_TEXT_DEFAULT = tmp32.unsafe_rawColors.WHITE;
  } else {
    MOBILE_UNREADBAR_TEXT_DEFAULT = tmp32.colors.MOBILE_UNREADBAR_TEXT_DEFAULT;
  }
  obj.color = MOBILE_UNREADBAR_TEXT_DEFAULT;
  obj.size = "xxs";
  obj1 = { style: items8 };
  const items8 = [tmp6.unreadBar, memo, animatedStyle];
  let str2 = "none";
  const obj7 = arg1(dependencyMap[6]);
  const tmp31 = headerHeight;
  if (shown) {
    str2 = "auto";
  }
  obj1.pointerEvents = str2;
  obj1.accessibilityRole = "button";
  obj1.onPress = callback1;
  obj1.onPressIn = callback2;
  obj1.onPressOut = callback3;
  obj1.hitSlop = 12;
  obj1.onLayout = callback;
  const items9 = [headerHeight(ArrowSmallUpIcon, obj), ];
  obj2 = { style: tmp6.text, variant: "text-xs/bold" };
  let str3 = "mobile-unreadbar-text-default";
  if (first) {
    str3 = "text-overlay-light";
  }
  obj2.color = str3;
  obj2.maxFontSizeMultiplier = 1.5;
  const intl = arg1(dependencyMap[21]).intl;
  obj2.children = intl.string(arg1(dependencyMap[21]).t.y2b7CA);
  items9[1] = headerHeight(arg1(dependencyMap[20]).Text, obj2);
  obj1.children = items9;
  return first(closure_10, obj1);
});
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/channel_list_v2/native/unread_bars/ChannelsUnreadBar.tsx");

export default memoResult;
