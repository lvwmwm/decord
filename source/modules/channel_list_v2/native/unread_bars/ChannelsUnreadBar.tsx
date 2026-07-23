// Module ID: 15010
// Function ID: 114335
// Dependencies: [57, 31, 27, 10260, 653, 33, 3991, 4130, 689, 477, 8830, 4549, 9889, 4324, 13999, 4542, 4546, 4647, 14707, 13953, 4126, 1212, 2]

// Module 15010
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import hairlineWidth from "hairlineWidth";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "module_3991";

let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
({ getScaledSearchBarHeight: closure_5, VIEWABILITY_CONFIG: closure_6 } = hairlineWidth);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = require("module_3991").createAnimatedComponent(require("get ActivityIndicator").Pressable);
let closure_11 = _createForOfIteratorHelperLoose.createStyles((arg0, arg1) => {
  let obj = {};
  obj = { position: "absolute", right: "50%", zIndex: 1, marginVertical: 12, marginHorizontal: 0, paddingRight: 9, paddingLeft: null, paddingVertical: 4, minHeight: 24, flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: null, backgroundColor: null, elevation: 4 };
  let num = 5;
  if (arg0) {
    num = 6;
  }
  obj.paddingLeft = num;
  obj.borderRadius = importDefault(689).radii.round;
  const tmp = importDefault(689);
  if (arg0) {
    let RED_400 = tmp.unsafe_rawColors.RED_400;
  } else {
    const colors = tmp.colors;
    RED_400 = arg1 ? colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT : colors.BACKGROUND_SURFACE_HIGHEST;
  }
  obj.backgroundColor = RED_400;
  obj.shadowColor = importDefault(689).colors.BLACK;
  obj.shadowOffset = { width: 0, height: 1 };
  obj.shadowOpacity = 0.08;
  obj.shadowRadius = 4;
  obj.borderWidth = 1;
  obj.borderColor = importDefault(689).colors.BORDER_SUBTLE;
  obj.unreadBar = obj;
  obj = { textTransform: "uppercase", marginTop: null, marginLeft: 2, marginRight: 0 };
  let num2 = 0;
  if (obj4.isAndroid()) {
    num2 = -1;
  }
  obj.marginTop = num2;
  obj.text = obj;
  return obj;
});
let closure_12 = { code: "function ChannelsUnreadBarTsx1(){const{shown,position,scrollPosition,listPaddingTop,searchBarHeight,justReachedEnd,runOnJS,resetReachedEnd,height,MARGIN,guildChannelsListUnreadBarInsetEnd,width,withSpring,springStandard,interpolate,pressed,ON_PRESS_SPRING}=this.__closure;const animatedShown=shown&&(position==='top'?scrollPosition!=null&&listPaddingTop!=null&&scrollPosition.get()>listPaddingTop+searchBarHeight:!justReachedEnd);if(justReachedEnd){runOnJS(resetReachedEnd)();}const offsetBase=height.get()-MARGIN;const value=animatedShown?position==='bottom'&&guildChannelsListUnreadBarInsetEnd!=null?-guildChannelsListUnreadBarInsetEnd.get():0:offsetBase*(position==='bottom'?1:-1);const opacity=animatedShown?1:0;const scale=width.get()>0?(width.get()+5)/width.get():1;return{opacity:withSpring(opacity,springStandard,'animate-always'),transform:[{translateY:withSpring(value,springStandard)},{translateX:width.get()/2},{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING)}]};}" };
const memoResult = importAllResult.memo(function ChannelsUnreadBar(position) {
  position = position.position;
  const shown = position.shown;
  const onPress = position.onPress;
  const isMention = position.isMention;
  const guildChannelsListUnreadBarInsetEnd = position.guildChannelsListUnreadBarInsetEnd;
  const scrollPosition = position.scrollPosition;
  const listPaddingTop = position.listPaddingTop;
  const endReachedCounter = position.endReachedCounter;
  const headerHeight = position.headerHeight;
  let first;
  let closure_10;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let youBarTotalHeight;
  let c15;
  let first1;
  let closure_17;
  let callback4;
  let tmp2 = null != isMention;
  if (tmp2) {
    tmp2 = isMention;
  }
  const tmp3 = isMention(guildChannelsListUnreadBarInsetEnd.useState(tmp2), 2);
  first = tmp3[0];
  closure_10 = tmp3[1];
  let items = [isMention];
  const effect = guildChannelsListUnreadBarInsetEnd.useEffect(() => {
    if (null != isMention) {
      callback(isMention);
    }
  }, items);
  const tmp6 = sharedValue(first, shown(onPress[10])());
  let obj = position(onPress[11]);
  const fontScale = obj.useFontScale();
  let obj1 = position(onPress[12]);
  let sum = obj1.scaleTextLineHeight("text-xs/bold", fontScale) + 8;
  let obj2 = position(onPress[6]);
  sharedValue = obj2.useSharedValue(0);
  sharedValue1 = position(onPress[6]).useSharedValue(sum);
  let items1 = [sharedValue, sharedValue1];
  const items2 = [shown, first, position];
  const callback = guildChannelsListUnreadBarInsetEnd.useCallback((nativeEvent) => {
    const width = nativeEvent.nativeEvent.layout.width;
    if (0 !== width) {
      const result = sharedValue.set(width);
    }
    const height = nativeEvent.nativeEvent.layout.height;
    if (0 !== height) {
      const result1 = sharedValue1.set(height);
    }
  }, items1);
  const effect1 = guildChannelsListUnreadBarInsetEnd.useEffect(() => {
    if (shown) {
      let obj = shown(onPress[13]);
      obj = { is_mention: first, position };
      obj.trackWithMetadata(endReachedCounter.CHANNEL_LIST_UNREAD_BADGE_VIEWED, obj);
    }
  }, items2);
  const items3 = [onPress, position, first];
  const callback1 = guildChannelsListUnreadBarInsetEnd.useCallback(() => {
    let obj = shown(onPress[13]);
    obj = { is_mention: first, position };
    obj.trackWithMetadata(endReachedCounter.CHANNEL_LIST_UNREAD_BADGE_CLICKED, obj);
    onPress();
  }, items3);
  const obj4 = position(onPress[6]);
  sharedValue2 = position(onPress[6]).useSharedValue(0);
  const items4 = [sharedValue2];
  const items5 = [sharedValue2];
  const callback2 = guildChannelsListUnreadBarInsetEnd.useCallback(() => {
    const result = sharedValue2.set(1);
  }, items4);
  const callback3 = guildChannelsListUnreadBarInsetEnd.useCallback(() => {
    const result = sharedValue2.set(0);
  }, items5);
  let obj5 = position(onPress[6]);
  youBarTotalHeight = position(onPress[14]).useYouBarTotalHeight();
  const items6 = [headerHeight, position, youBarTotalHeight];
  const memo = guildChannelsListUnreadBarInsetEnd.useMemo(() => {
    if ("bottom" === position) {
      let obj = { bottom: youBarTotalHeight };
    } else {
      obj = { top: headerHeight };
    }
    return obj;
  }, items6);
  const tmp19 = scrollPosition(fontScale);
  c15 = tmp19;
  const tmp20 = isMention(guildChannelsListUnreadBarInsetEnd.useState(false), 2);
  first1 = tmp20[0];
  closure_17 = tmp20[1];
  const items7 = [endReachedCounter];
  const effect2 = guildChannelsListUnreadBarInsetEnd.useEffect(() => {
    if (null != endReachedCounter) {
      callback2(true);
    }
  }, items7);
  callback4 = guildChannelsListUnreadBarInsetEnd.useCallback(() => {
    const timerId = setTimeout(() => {
      outer1_17(false);
    }, listPaddingTop.minimumViewTime + 1);
  }, []);
  const obj6 = position(onPress[14]);
  class X {
    constructor() {
      tmp = shown;
      if (!shown) {
        tmp13 = c16;
        if (c16) {
          tmp14 = position;
          tmp15 = onPress;
          num = 6;
          obj = position(onPress[6]);
          tmp16 = c18;
          tmp17 = obj.runOnJS(c18)();
        }
        tmp18 = c12;
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
        tmp25 = c11;
        num7 = 1;
        if (c11.get() > 0) {
          tmp26 = c11;
          num8 = 5;
          tmp28 = c11;
          sum = c11.get() + 5;
          num7 = sum / c11.get();
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
        tmp31 = c11;
        num11 = 2;
        obj2.translateX = c11.get() / 2;
        items[1] = obj2;
        obj3 = {};
        obj8 = position(onPress[15]);
        num12 = 6;
        obj9 = position(onPress[6]);
        tmp32 = c13;
        items1 = [1];
        items1[1] = num7;
        interpolateResult = obj9.interpolate(c13.get(), [0, 1], items1);
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
            tmp11 = c15;
            tmp7 = scrollPosition.get() > listPaddingTop + c15;
          }
          tmp4 = tmp7;
        } else {
          tmp3 = c16;
          tmp4 = !c16;
        }
        tmp12 = tmp4;
      }
      return;
    }
  }
  obj = { shown, position, scrollPosition, listPaddingTop, searchBarHeight: tmp19, justReachedEnd: first1, runOnJS: position(onPress[6]).runOnJS, resetReachedEnd: callback4, height: sharedValue1, MARGIN: 12, guildChannelsListUnreadBarInsetEnd, width: sharedValue, withSpring: position(onPress[15]).withSpring, springStandard: position(onPress[16]).springStandard, interpolate: position(onPress[6]).interpolate, pressed: sharedValue2, ON_PRESS_SPRING: position(onPress[16]).ON_PRESS_SPRING };
  X.__closure = obj;
  X.__workletHash = 978162815161;
  X.__initData = sharedValue1;
  const animatedStyle = position(onPress[6]).useAnimatedStyle(X);
  if (first) {
    let ArrowSmallUpIcon = position(onPress[17]).AtIcon;
  } else if ("bottom" === position) {
    ArrowSmallUpIcon = position(onPress[18]).ArrowSmallDownIcon;
  } else {
    ArrowSmallUpIcon = position(onPress[19]).ArrowSmallUpIcon;
  }
  obj = {};
  const tmp32 = shown(onPress[8]);
  if (first) {
    let MOBILE_UNREADBAR_TEXT_DEFAULT = tmp32.unsafe_rawColors.WHITE;
  } else {
    MOBILE_UNREADBAR_TEXT_DEFAULT = tmp32.colors.MOBILE_UNREADBAR_TEXT_DEFAULT;
  }
  obj.color = MOBILE_UNREADBAR_TEXT_DEFAULT;
  obj.size = "xxs";
  obj1 = { style: items8 };
  items8 = [tmp6.unreadBar, memo, animatedStyle];
  let str2 = "none";
  const obj7 = position(onPress[6]);
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
  const intl = position(onPress[21]).intl;
  obj2.children = intl.string(position(onPress[21]).t.y2b7CA);
  items9[1] = headerHeight(position(onPress[20]).Text, obj2);
  obj1.children = items9;
  return first(closure_10, obj1);
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/channel_list_v2/native/unread_bars/ChannelsUnreadBar.tsx");

export default memoResult;
