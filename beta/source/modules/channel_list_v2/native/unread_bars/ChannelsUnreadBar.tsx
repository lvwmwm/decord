// Module ID: 18612
// Function ID: 18613
// Name: ChannelsUnreadBar
// Dependencies: [32, 19, 17, 5914, 1072, 21, 1652, 5170, 575, 1377, 9945, 5798, 5915, 5921, 17435, 1705, 5793, 5794, 8766, 13302, 13300, 5783, 1113, 2]

// Module 18612 (ChannelsUnreadBar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5921 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 5914 */;
import Fragment from "Fragment" /* 21 */;
import module_1652 from "module_1652" /* 1652 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let bodyxssemibold;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
const Pressable = react_native.Pressable;
({ getScaledSearchBarHeight: hasOwnProperty, VIEWABILITY_CONFIG: metroRequire } = RedesignChannelListConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = module_1652.createAnimatedComponent(Pressable);
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
  const obj2 = { unreadBar: obj, text: { marginTop: num2, marginLeft: 2, marginRight: 0 } };
  num2 = 0;
  const obj3 = PlatformUtils;
  if (obj3.isAndroid()) {
    num2 = -1;
  }
  return obj2;
});
let c12 = "body-xs/semibold";
let closure_13 = { code: "(function ChannelsUnreadBarTsx1(){let[shown,position,scrollPosition,listPaddingTop,searchBarHeight,justReachedEnd,scheduleOnRN,resetReachedEnd,height,MARGIN,guildChannelsListUnreadBarInsetEnd,width,withSpring,springStandard,interpolate,pressed,ON_PRESS_SPRING]=this.__closure;const animatedShown=shown&&(position==='top'?scrollPosition!=null&&listPaddingTop!=null&&scrollPosition.get()>listPaddingTop+searchBarHeight:!justReachedEnd);if(justReachedEnd){scheduleOnRN(resetReachedEnd);}const offsetBase=height.get()-MARGIN;const value=animatedShown?position==='bottom'&&guildChannelsListUnreadBarInsetEnd!=null?-guildChannelsListUnreadBarInsetEnd.get():0:offsetBase*(position==='bottom'?1:-1);const opacity=animatedShown?1:0;const scale=width.get()>0?(width.get()+5)/width.get():1;return{opacity:withSpring(opacity,springStandard,'animate-always'),transform:[{translateY:withSpring(value,springStandard)},{translateX:width.get()/2},{scale:withSpring(interpolate(pressed.get(),[0,1],[1,scale]),ON_PRESS_SPRING)}]};})" };
const memoResult = react.memo(function ChannelsUnreadBar(position) {
  let ArrowSmallUpIcon;
  let MOBILE_UNREADBAR_TEXT_DEFAULT;
  let closure_12;
  let guildChannelsListUnreadBarInsetEnd;
  let items10;
  let items11;
  let listPaddingTop;
  let scrollPosition;
  let str2;
  let str3;
  let stringResult;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp40;
  let tmp41;
  let tmp42;
  let tmp43;
  let tmp44;
  position = position.position;
  const shown = position.shown;
  const onPress = position.onPress;
  const isMention = position.isMention;
  const endReachedCounter = position.endReachedCounter;
  const headerHeight = position.headerHeight;
  let is_mention;
  let closure_7;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let youBarTotalHeight;
  bodyxssemibold = undefined;
  let obj = endReachedCounter;
  let flag = isMention;
  ({ guildChannelsListUnreadBarInsetEnd, scrollPosition, listPaddingTop } = position);
  const useState = endReachedCounter.useState;
  if (isMention == null) {
    flag = false;
  }
  let tmp = isMention(useState(flag), 2);
  is_mention = tmp[0];
  closure_7 = tmp[1];
  let items = [isMention];
  const effect = obj.useEffect(() => {
    if (null != isMention) {
      closure_7(tmp);
    }
  }, items);
  let tmp4 = shown;
  let tmp6 = youBarTotalHeight(is_mention, shown(onPress[10])());
  let obj2 = position(onPress[11]);
  const fontScale = obj2.useFontScale();
  const obj3 = position(onPress[12]);
  let sum = obj3.scaleTextLineHeight(bodyxssemibold, fontScale) + 8;
  let obj4 = position(onPress[6]);
  sharedValue = obj4.useSharedValue(0);
  const obj5 = position(onPress[6]);
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
  const obj6 = position(onPress[6]);
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
  const tmp21 = headerHeight(fontScale);
  const tmp22 = isMention(obj.useState(false), 2);
  const tmp9 = bodyxssemibold;
  bodyxssemibold = tmp22[1];
  const items7 = [endReachedCounter];
  const first1 = tmp22[0];
  const effect2 = obj.useEffect(() => {
    if (null != endReachedCounter) {
      closure_12(true);
    }
  }, items7);
  const callback4 = obj.useCallback(() => {
    const timerId = setTimeout(() => {
      closure_1_12(false);
    }, metroRequire.minimumViewTime + 1);
  }, []);
  const items8 = [closure_13, shown, position, scrollPosition, listPaddingTop, tmp21, first1, , , , , , , , , , , ];
  const useAnimatedStyle = position(onPress[6]).useAnimatedStyle;
  position(onPress[6]);
  items8[7] = position(onPress[15]).scheduleOnRN;
  items8[8] = callback4;
  items8[9] = sharedValue1;
  items8[10] = 12;
  items8[11] = guildChannelsListUnreadBarInsetEnd;
  items8[12] = sharedValue;
  items8[13] = position(onPress[16]).withSpring;
  items8[14] = position(onPress[17]).springStandard;
  items8[15] = position(onPress[6]).interpolate;
  items8[16] = sharedValue2;
  items8[17] = position(onPress[17]).ON_PRESS_SPRING;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  let c10;
  let c11;
  let c12;
  let c13;
  let c14;
  let c15;
  let c16;
  [tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44] = items8;
  class ChannelsUnreadBarTsx1 {
    constructor() {
      let items;
      let items1;
      let result;
      let tmp = c0;
      if (tmp) {
        let tmp4;
        if ("top" === c1) {
          let tmp6 = null != c2;
          const obj = c2;
          if (tmp6) {
            tmp6 = null != c3;
          }
          if (tmp6) {
            tmp6 = obj.get() > c3 + c4;
          }
          tmp4 = tmp6;
        } else {
          tmp4 = !c5;
        }
        tmp = tmp4;
      }
      const tmp10 = c5;
      if (tmp10) {
        _undefined(c7);
      }
      if (tmp) {
        let num2 = 0;
        if ("bottom" === c1) {
          num2 = 0;
          const obj2 = c10;
          if (null != c10) {
            num2 = -obj2.get();
          }
        }
        result = num2;
      } else {
        let num = -1;
        if ("bottom" === c1) {
          num = 1;
        }
        result = tmp14 * num;
      }
      let num3 = 0;
      if (tmp) {
        num3 = 1;
      }
      let num4 = 1;
      if (_undefined2.get() > 0) {
        const sum = obj3.get() + 5;
        num4 = sum / obj3.get();
      }
      const obj4 = { opacity: _undefined3(num3, c13, "animate-always"), transform: items };
      items = [{ translateY: _undefined3(result, c13) }, , ];
      ({ translateY: _undefined3(result, c13) });
      items[1] = { translateX: _undefined2.get() / 2 };
      const obj7 = { scale: _undefined3(_undefined4(_undefined5.get(), [0, 1], items1), c16) };
      items1 = [1, num4];
      ({ translateX: _undefined2.get() / 2 });
      items[2] = obj7;
      return obj4;
    }
  }
  const items9 = [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44];
  ChannelsUnreadBarTsx1.__closure = items9;
  ChannelsUnreadBarTsx1.__workletHash = 15777306615393;
  ChannelsUnreadBarTsx1.__initData = tmp27;
  const animatedStyle = useAnimatedStyle(ChannelsUnreadBarTsx1);
  if (is_mention) {
    ArrowSmallUpIcon = tmp7(tmp5[18]).AtIcon;
  } else if ("bottom" === position) {
    ArrowSmallUpIcon = tmp7(tmp5[19]).ArrowSmallDownIcon;
  } else {
    ArrowSmallUpIcon = tmp7(tmp5[20]).ArrowSmallUpIcon;
  }
  const tmp4Result = tmp4(onPress[8]);
  if (is_mention) {
    MOBILE_UNREADBAR_TEXT_DEFAULT = tmp4Result.unsafe_rawColors.WHITE;
  } else {
    MOBILE_UNREADBAR_TEXT_DEFAULT = tmp4Result.colors.MOBILE_UNREADBAR_TEXT_DEFAULT;
  }
  const obj8 = { style: items10, pointerEvents: str2, accessibilityRole: "button", onPress: callback1, onPressIn: callback2, onPressOut: callback3, hitSlop: 12, onLayout: callback, children: items11 };
  items10 = [tmp6.unreadBar, memo, animatedStyle];
  str2 = "none";
  const tmp46Result = sharedValue(ArrowSmallUpIcon, { color: MOBILE_UNREADBAR_TEXT_DEFAULT, size: "xxs" });
  const tmp49 = sharedValue1;
  const tmp50 = sharedValue2;
  if (shown) {
    str2 = "auto";
  }
  items11 = [tmp46Result, ];
  const obj9 = { style: tmp6.text, variant: tmp9, color: str3, maxFontSizeMultiplier: 1.5, children: stringResult.toLocaleUpperCase(position(onPress[22]).intl.currentLocale) };
  str3 = "mobile-unreadbar-text-default";
  const Text = tmp7(tmp5[21]).Text;
  if (is_mention) {
    str3 = "text-overlay-light";
  }
  const intl = tmp7(tmp5[22]).intl;
  stringResult = intl.string(position(onPress[22]).t.y2b7CA);
  items11[1] = sharedValue(Text, obj9);
  return tmp49(tmp50, obj8);
});
let result = size.fileFinishedImporting("modules/channel_list_v2/native/unread_bars/ChannelsUnreadBar.tsx");

export default memoResult;
