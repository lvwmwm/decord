// Module ID: 15814
// Function ID: 15815
// Name: ChannelsUnreadBar
// Dependencies: [32, 19, 17, 9577, 1074, 21, 4566, 4836, 576, 1364, 7298, 5288, 9578, 5016, 14629, 5280, 5284, 5404, 15350, 15348, 4832, 1115, 2]

// Module 15814 (ChannelsUnreadBar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4566 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5016 */;
import spring from "spring" /* 5280 */;
import springPresets from "springPresets" /* 5284 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 9577 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
const Pressable = react_native.Pressable;
({ getScaledSearchBarHeight: hasOwnProperty, VIEWABILITY_CONFIG: metroRequire } = RedesignChannelListConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = ReanimatedRexport.createAnimatedComponent(Pressable);
let closure_11 = createStyles.createStyles((arg0, arg1) => {
  let RED_400;
  let num2;
  let num = 5;
  if (arg0) {
    num = 6;
  }
  const obj = { position: "absolute", right: "50%", zIndex: 1, marginVertical: 12, marginHorizontal: 0, paddingRight: 9, paddingLeft: num, paddingVertical: 4, minHeight: 24, flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.round, backgroundColor: RED_400, elevation: 4, shadowColor: nativeDefault.colors.BLACK, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.08, shadowRadius: 4, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
  const tmp3 = nativeDefault;
  if (arg0) {
    RED_400 = tmp3.unsafe_rawColors.RED_400;
  } else {
    const colors = tmp3.colors;
    RED_400 = arg1 ? colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT : colors.BACKGROUND_SURFACE_HIGHEST;
  }
  const obj2 = { unreadBar: obj, text: { textTransform: "uppercase", marginTop: num2, marginLeft: 2, marginRight: 0 } };
  num2 = 0;
  const obj3 = PlatformUtils;
  if (obj3.isAndroid()) {
    num2 = -1;
  }
  return obj2;
});
let c12 = "text-xs/bold";
let closure_13 = { code: "function ChannelsUnreadBarTsx1(){const{shown,position,scrollPosition,listPaddingTop,searchBarHeight,justReachedEnd,runOnJS,resetReachedEnd,height,MARGIN,guildChannelsListUnreadBarInsetEnd,width,withSpring,springStandard,interpolate,pressed,ON_PRESS_SPRING}=this.__closure;const animatedShown=shown&&(position==='top'?scrollPosition!=null&&listPaddingTop!=null&&scrollPosition.get()>listPaddingTop+searchBarHeight:!justReachedEnd);if(justReachedEnd){runOnJS(resetReachedEnd)();}const offsetBase=height.get()-MARGIN;const value=animatedShown?position==='bottom'&&guildChannelsListUnreadBarInsetEnd!=null?-guildChannelsListUnreadBarInsetEnd.get():0:offsetBase*(position==='bottom'?1:-1);const opacity=animatedShown?1:0;const scale=width.get()>0?(width.get()+5)/width.get():1;return{opacity:withSpring(opacity,springStandard,'animate-always'),transform:[{translateY:withSpring(value,springStandard)},{translateX:width.get()/2},{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING)}]};}" };
const memoResult = react.memo(function ChannelsUnreadBar(position) {
  let ArrowSmallUpIcon;
  let MOBILE_UNREADBAR_TEXT_DEFAULT;
  let intl;
  let items8;
  let items9;
  let str2;
  let str3;
  position = position.position;
  const shown = position.shown;
  const onPress = position.onPress;
  const isMention = position.isMention;
  const guildChannelsListUnreadBarInsetEnd = position.guildChannelsListUnreadBarInsetEnd;
  const scrollPosition = position.scrollPosition;
  const listPaddingTop = position.listPaddingTop;
  const endReachedCounter = position.endReachedCounter;
  const headerHeight = position.headerHeight;
  let is_mention;
  closure_10 = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let youBarTotalHeight;
  let closure_15;
  let first1;
  let closure_17;
  let callback4;
  let obj = guildChannelsListUnreadBarInsetEnd;
  let flag = isMention;
  const useState = guildChannelsListUnreadBarInsetEnd.useState;
  if (isMention == null) {
    flag = false;
  }
  let tmp = isMention(useState(flag), 2);
  is_mention = tmp[0];
  closure_10 = tmp[1];
  let items = [isMention];
  const effect = obj.useEffect(() => {
    if (null != isMention) {
      closure_10(tmp);
    }
  }, items);
  let tmp4 = shown;
  let tmp6 = sharedValue(is_mention, shown(onPress[10])());
  let obj2 = position(onPress[11]);
  const fontScale = obj2.useFontScale();
  let obj3 = position(onPress[12]);
  let sum = obj3.scaleTextLineHeight(sharedValue1, fontScale) + 8;
  const obj4 = position(onPress[6]);
  sharedValue = obj4.useSharedValue(0);
  let obj5 = position(onPress[6]);
  const tmp9 = sharedValue1;
  sharedValue1 = obj5.useSharedValue(sum);
  let items1 = [sharedValue, sharedValue1];
  const items2 = [shown, is_mention, position];
  const callback = obj.useCallback((nativeEvent) => {
    const width = nativeEvent.nativeEvent.layout.width;
    if (0 !== width) {
      const result = sharedValue.set(width);
    }
    const height = nativeEvent.nativeEvent.layout.height;
    if (0 !== height) {
      const result1 = sharedValue1.set(height);
    }
  }, items1);
  const effect1 = obj.useEffect(() => {
    const tmp = shown;
    if (tmp) {
      const obj2 = { is_mention, position };
      const obj = AppAnalyticsUtilsDefault;
      obj.trackWithMetadata(AnalyticEvents.CHANNEL_LIST_UNREAD_BADGE_VIEWED, obj2);
    }
  }, items2);
  const items3 = [onPress, position, is_mention];
  const callback1 = obj.useCallback(() => {
    const obj = AppAnalyticsUtilsDefault;
    const obj2 = { is_mention, position };
    obj.trackWithMetadata(AnalyticEvents.CHANNEL_LIST_UNREAD_BADGE_CLICKED, obj2);
    onPress();
  }, items3);
  let obj6 = position(onPress[6]);
  sharedValue2 = obj6.useSharedValue(0);
  const items4 = [sharedValue2];
  const items5 = [sharedValue2];
  const callback2 = obj.useCallback(() => {
    const result = sharedValue2.set(1);
  }, items4);
  const callback3 = obj.useCallback(() => {
    const result = sharedValue2.set(0);
  }, items5);
  let obj7 = position(onPress[14]);
  youBarTotalHeight = obj7.useYouBarTotalHeight();
  const items6 = [headerHeight, position, youBarTotalHeight];
  const memo = obj.useMemo(() => {
    let obj;
    if ("bottom" === position) {
      obj = { bottom: youBarTotalHeight };
      const obj2 = { bottom: youBarTotalHeight };
    } else {
      obj = { top: headerHeight };
    }
    return obj;
  }, items6);
  const tmp21 = scrollPosition(fontScale);
  closure_15 = tmp21;
  const tmp22 = isMention(obj.useState(false), 2);
  first1 = tmp22[0];
  closure_17 = tmp22[1];
  const items7 = [endReachedCounter];
  const effect2 = obj.useEffect(() => {
    if (null != endReachedCounter) {
      closure_17(true);
    }
  }, items7);
  callback4 = obj.useCallback(() => {
    const timerId = setTimeout(() => {
      closure_1_17(false);
    }, metroRequire.minimumViewTime + 1);
  }, []);
  let obj8 = position(onPress[6]);
  class X {
    constructor() {
      let interpolateResult;
      let items;
      let obj6;
      let obj8;
      let result;
      let withSpring;
      let tmp = shown;
      if (tmp) {
        let tmp4;
        if ("top" === position) {
          let tmp6 = null != scrollPosition;
          const obj = scrollPosition;
          if (tmp6) {
            tmp6 = null != listPaddingTop;
          }
          if (tmp6) {
            tmp6 = obj.get() > listPaddingTop + closure_15;
          }
          tmp4 = tmp6;
        } else {
          tmp4 = !first1;
        }
        tmp = tmp4;
      }
      const tmp10 = first1;
      if (tmp10) {
        const obj2 = ReanimatedRexport2;
        obj2.runOnJS(callback4)();
      }
      if (tmp) {
        let num2 = 0;
        if ("bottom" === position) {
          num2 = 0;
          const obj3 = guildChannelsListUnreadBarInsetEnd;
          if (null != guildChannelsListUnreadBarInsetEnd) {
            num2 = -obj3.get();
          }
        }
        result = num2;
      } else {
        let num = -1;
        if ("bottom" === position) {
          num = 1;
        }
        result = tmp15 * num;
      }
      let num3 = 0;
      if (tmp) {
        num3 = 1;
      }
      let num4 = 1;
      if (sharedValue.get() > 0) {
        const sum = obj4.get() + 5;
        num4 = sum / obj4.get();
      }
      const obj5 = { opacity: obj6.withSpring(num3, springPresets.springStandard, "animate-always"), transform: items };
      obj6 = spring;
      const obj7 = { translateY: obj8.withSpring(result, springPresets.springStandard) };
      obj8 = spring;
      items = [obj7, { translateX: sharedValue.get() / 2 }, ];
      const obj10 = { scale: withSpring(interpolateResult, springPresets.ON_PRESS_SPRING) };
      ({ translateX: sharedValue.get() / 2 });
      withSpring = spring.withSpring;
      spring;
      const items1 = [1, num4];
      const obj11 = ReanimatedRexport2;
      items[2] = obj10;
      interpolateResult = obj11.interpolate(sharedValue2.get(), [0, 1], items1);
      return obj5;
    }
  }
  size = { shown, position, scrollPosition, listPaddingTop, searchBarHeight: tmp21, justReachedEnd: first1, runOnJS: position(onPress[6]).runOnJS, resetReachedEnd: callback4, height: sharedValue1, MARGIN: 12, guildChannelsListUnreadBarInsetEnd, width: sharedValue, withSpring: position(onPress[15]).withSpring, springStandard: position(onPress[16]).springStandard, interpolate: position(onPress[6]).interpolate, pressed: sharedValue2, ON_PRESS_SPRING: position(onPress[16]).ON_PRESS_SPRING };
  X.__closure = size;
  X.__workletHash = 978162815161;
  X.__initData = sharedValue2;
  const animatedStyle = obj8.useAnimatedStyle(X);
  if (is_mention) {
    ArrowSmallUpIcon = tmp7(tmp5[17]).AtIcon;
  } else if ("bottom" === position) {
    ArrowSmallUpIcon = tmp7(tmp5[18]).ArrowSmallDownIcon;
  } else {
    ArrowSmallUpIcon = tmp7(tmp5[19]).ArrowSmallUpIcon;
  }
  const tmp4Result = tmp4(onPress[8]);
  if (is_mention) {
    MOBILE_UNREADBAR_TEXT_DEFAULT = tmp4Result.unsafe_rawColors.WHITE;
  } else {
    MOBILE_UNREADBAR_TEXT_DEFAULT = tmp4Result.colors.MOBILE_UNREADBAR_TEXT_DEFAULT;
  }
  const obj9 = { style: items8, pointerEvents: str2, accessibilityRole: "button", onPress: callback1, onPressIn: callback2, onPressOut: callback3, hitSlop: 12, onLayout: callback, children: items9 };
  items8 = [tmp6.unreadBar, memo, animatedStyle];
  str2 = "none";
  const tmp27Result = headerHeight(ArrowSmallUpIcon, { color: MOBILE_UNREADBAR_TEXT_DEFAULT, size: "xxs" });
  const tmp30 = is_mention;
  const tmp31 = closure_10;
  if (shown) {
    str2 = "auto";
  }
  items9 = [tmp27Result, ];
  let obj10 = { style: tmp6.text, variant: tmp9, color: str3, maxFontSizeMultiplier: 1.5, children: intl.string(tmp7(tmp5[21]).t.y2b7CA) };
  str3 = "mobile-unreadbar-text-default";
  const Text = tmp7(tmp5[20]).Text;
  if (is_mention) {
    str3 = "text-overlay-light";
  }
  intl = tmp7(tmp5[21]).intl;
  items9[1] = headerHeight(Text, obj10);
  return tmp30(tmp31, obj9);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/channel_list_v2/native/unread_bars/ChannelsUnreadBar.tsx");

export default memoResult;
