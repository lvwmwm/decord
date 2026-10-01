// Module ID: 16559
// Function ID: 16560
// Name: ChannelDetailsTopic
// Dependencies: [32, 19, 17, 1372, 10377, 1074, 21, 1364, 4836, 16560, 4566, 5280, 4823, 5435, 4832, 5293, 504, 4678, 4981, 2]

// Module 16559 (ChannelDetailsTopic)
import Constants from "Constants" /* 1074 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4823 */;
import ChannelUtils from "ChannelUtils" /* 4981 */;
import spring from "spring" /* 5280 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1372 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10377 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c9;
let closure_12;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroRequire;
let unpackModuleId;
function GuildChannelDetailsTopic(channel) {
  let PressableOpacity;
  let Text;
  let closure_3;
  let closure_5;
  let first;
  let first1;
  let items10;
  let items11;
  let items8;
  let items9;
  let obj11;
  let obj14;
  let obj15;
  let obj16;
  let obj19;
  let str;
  let tmp25;
  let tmp27;
  channel = channel.channel;
  let flag = channel.initialExpanded;
  const textAlign = channel.textAlign;
  if (flag === undefined) {
    flag = false;
  }
  first = undefined;
  _slicedToArray = undefined;
  first1 = undefined;
  closure_5 = undefined;
  const tmp = closure_15();
  const tmp2 = channel;
  let obj = channel(first[9]);
  const channelTopicGradientBackground = obj.useChannelTopicGradientBackground();
  [first, _slicedToArray] = first1.useState(true);
  [first1, closure_5] = first1.useState(flag);
  let obj2 = channel(first[10]);
  const sharedValue = obj2.useSharedValue(undefined);
  const obj3 = channel(first[10]);
  const sharedValue1 = obj3.useSharedValue(undefined);
  const obj4 = channel(first[10]);
  const sharedValue2 = obj4.useSharedValue(constants.HIDDEN);
  const fn = function _() {
    const value = sharedValue1.get();
    let value2 = sharedValue.get();
    if (null != value2) {
      let obj;
      if (null != value) {
        const withSpring = spring.withSpring;
        spring;
        if (first1) {
          value2 = value;
        }
        obj = { height: withSpring(value2, c9) };
      }
      return obj;
    }
    obj = EMPTY_STYLE;
  };
  let expanded = EMPTY_STYLE;
  const obj5 = channel(first[10]);
  fn.__closure = { expandedHeight: sharedValue1, truncatedHeight: sharedValue, EMPTY_STYLE, withSpring: channel(first[11]).withSpring, expanded: first1, SPRING_CHANNEL_DETAILS };
  fn.__workletHash = 11932535786068;
  fn.__initData = __initData;
  ({ expandedHeight: sharedValue1, truncatedHeight: sharedValue, EMPTY_STYLE, withSpring: channel(first[11]).withSpring, expanded: first1, SPRING_CHANNEL_DETAILS });
  const animatedStyle = obj5.useAnimatedStyle(fn);
  const obj7 = channel(first[10]);
  class N {
    constructor() {
      let obj2;
      const obj = sharedValue1;
      if (null == sharedValue1.get()) {
        obj2 = EMPTY_STYLE;
      } else {
        obj2 = { height: obj.get() };
      }
      return obj2;
    }
  }
  N.__closure = { expandedHeight: sharedValue1, EMPTY_STYLE };
  N.__workletHash = 13643982891313;
  N.__initData = __initData2;
  const animatedStyle1 = obj7.useAnimatedStyle(N);
  const obj8 = channel(first[10]);
  class L {
    constructor() {
      let obj2;
      const obj = { opacity: obj2.withSpring(sharedValue2.get(), c9) };
      obj2 = spring;
      return obj;
    }
  }
  L.__closure = { withSpring: channel(first[11]).withSpring, gradient: sharedValue2, SPRING_CHANNEL_DETAILS };
  L.__workletHash = 12423301233362;
  L.__initData = __initData3;
  const items = [sharedValue2, first1];
  ({ withSpring: channel(first[11]).withSpring, gradient: sharedValue2, SPRING_CHANNEL_DETAILS });
  const animatedStyle2 = obj8.useAnimatedStyle(L);
  const items1 = [sharedValue1];
  const callback = first1.useCallback((nativeEvent) => {
    closure_3(nativeEvent.nativeEvent.lines.length > metroImportAll);
    if (nativeEvent.nativeEvent.lines.length > metroImportAll) {
      let HIDDEN;
      const tmp5 = first1;
      if (!tmp5) {
        HIDDEN = constants.VISIBLE;
      }
      tmp4(HIDDEN);
    }
    HIDDEN = constants.HIDDEN;
  }, items);
  const items2 = [first, first1, sharedValue2];
  const callback1 = first1.useCallback((nativeEvent) => sharedValue1.set(nativeEvent.nativeEvent.layout.height), items1);
  const memo = first1.useMemo(() => first ? (() => {
    closure_1_5(!first1);
    const result = sharedValue2.set(first1 ? tmp2.VISIBLE : tmp2.HIDDEN);
  }) : undefined, items2);
  const items3 = [sharedValue];
  const items4 = [, ];
  ({ id: arr5[0], topic: arr5[1] } = channel);
  const callback2 = first1.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout.height);
  }, items3);
  let memo1 = first1.useMemo(() => {
    const parseTopic = MarkupUtilsDefault.parseTopic;
    MarkupUtilsDefault;
    const obj = { channelId: channel.id, shouldNavigateBack: true, mentionPillOffsetY: num };
    const str = "" + channel.topic;
    return parseTopic(str.replace(/(\r\n|\n|\r)/gm, " "), true, obj);
  }, items4);
  const items5 = [, ];
  ({ id: arr6[0], topic: arr6[1] } = channel);
  const memo2 = first1.useMemo(() => {
    const obj = MarkupUtilsDefault;
    const obj2 = { channelId: channel.id, shouldNavigateBack: true, mentionPillOffsetY: num };
    return obj.parseTopic(channel.topic, true, obj2);
  }, items5);
  const items6 = [channel.id, sharedValue, sharedValue1, flag];
  const effect = first1.useEffect(() => {
    const result = sharedValue.set(undefined);
    const result1 = sharedValue1.set(undefined);
    closure_5(flag);
  }, items6);
  if (null == memo) {
    PressableOpacity = closure_5;
  } else {
    PressableOpacity = tmp2(tmp3[13]).PressableOpacity;
  }
  const obj10 = { style: tmp.hidden, pointerEvents: "none", importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: closure_11(tmp2(first[14]).Text, obj11) };
  obj11 = { variant: "heading-sm/normal", style: tmp.topicText, onTextLayout: callback, onLayout: callback1, children: memo2 };
  const items7 = [closure_11(closure_5, obj10), ];
  const obj12 = { style: items8, children: items10 };
  items8 = [tmp.topic, animatedStyle];
  const View = flag(tmp3[10]).View;
  const obj13 = { style: animatedStyle1, children: closure_11(PressableOpacity, obj14) };
  obj14 = { onPress: memo, activeOpacity: 0.7, children: closure_11(tmp25, obj15) };
  const View2 = flag(tmp3[10]).View;
  const tmp23 = closure_13;
  tmp25 = closure_5;
  if (!first1) {
    str = "none";
  }
  obj15 = { pointerEvents: str, children: closure_11(Text, obj16) };
  obj16 = { color: "interactive-text-default", variant: "heading-sm/normal", onLayout: callback2, lineClamp: tmp27, style: items9, children: memo1 };
  tmp27 = undefined;
  Text = tmp2(tmp3[14]).Text;
  if (!first1) {
    tmp27 = sharedValue2;
  }
  items9 = [tmp.topicText, , ];
  if (first1) {
    expanded = tmp.expanded;
  }
  items9[1] = expanded;
  items9[2] = { textAlign };
  if (first1) {
    memo1 = memo2;
  }
  const obj17 = { children: items7 };
  items10 = [closure_11(View2, obj13), ];
  const obj18 = { style: items11, pointerEvents: "none", children: closure_11(flag(first[15]), obj19) };
  items11 = [sharedValue.absoluteFill, animatedStyle2];
  const View3 = tmp26(tmp3[10]).View;
  obj19 = { style: tmp.gradient, start: VerticalGradient.START, end: VerticalGradient.END, colors: channelTopicGradientBackground };
  items10[1] = closure_11(View3, obj18);
  items7[1] = closure_12(View, obj12);
  return closure_12(tmp23, obj17);
}
function PrivateChannelDetailsTopic(channel) {
  let obj3;
  channel = channel.channel;
  const textAlign = channel.textAlign;
  let obj = channel(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const user = UserStore.getUser(channel.getRecipientId());
    let isProvisional;
    if (user != null) {
      isProvisional = user.isProvisional;
    }
    let userTag = null;
    if (!isProvisional) {
      const obj = UserUtilsDefault;
      userTag = obj.getUserTag(user);
    }
    return userTag;
  });
  let tmp4 = null;
  const tmp = channel;
  if (null != stateFromStores) {
    const obj2 = { variant: "heading-sm/normal", color: "interactive-text-default", style: obj3, children: stateFromStores };
    obj3 = { textAlign };
    tmp4 = closure_11(tmp(4832).Text, obj2);
  }
  return tmp4;
}
function GroupDMChannelDetailsTopic(channel) {
  let obj3;
  channel = channel.channel;
  const textAlign = channel.textAlign;
  let obj = channel(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = ChannelUtils;
    return obj.getPrivateChannelUserTagsString(channel.recipients, UserStore);
  });
  let tmp4 = null;
  const tmp = channel;
  if (null != stateFromStores) {
    const obj2 = { variant: "heading-sm/normal", color: "interactive-text-default", style: obj3, children: stateFromStores };
    obj3 = { textAlign };
    tmp4 = closure_11(tmp(4832).Text, obj2);
  }
  return tmp4;
}
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, StyleSheet: metroRequire } = react_native);
({ CHANNEL_TOPIC_LINE_CLAMP: metroImportAll, SPRING_CHANNEL_DETAILS: c9 } = ChannelDetailsConstants);
const VerticalGradient = Constants.VerticalGradient;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let num = 2;
if (PlatformUtils.isAndroid()) {
  num = 4;
}
let closure_15 = createStyles.createStyles({ hidden: { flex: 1, flexGrow: 1, position: "absolute", opacity: 0 }, topic: { overflow: "hidden" }, gradient: { flex: 1, flexGrow: 1 }, expanded: { textAlign: "center" }, topicText: { paddingVertical: 5 } });
const EMPTY_STYLE = {};
const constants = { HIDDEN: 0, [0]: "HIDDEN", VISIBLE: 1, [1]: "VISIBLE" };
const __initData = { code: "function ChannelDetailsTopicTsx1(){const{expandedHeight,truncatedHeight,EMPTY_STYLE,withSpring,expanded,SPRING_CHANNEL_DETAILS}=this.__closure;const _expandedHeight=expandedHeight.get();const _truncatedHeight=truncatedHeight.get();if(_truncatedHeight==null||_expandedHeight==null)return EMPTY_STYLE;return{height:withSpring(expanded?_expandedHeight:_truncatedHeight,SPRING_CHANNEL_DETAILS)};}" };
const __initData2 = { code: "function ChannelDetailsTopicTsx2(){const{expandedHeight,EMPTY_STYLE}=this.__closure;if(expandedHeight.get()==null)return EMPTY_STYLE;return{height:expandedHeight.get()};}" };
const __initData3 = { code: "function ChannelDetailsTopicTsx3(){const{withSpring,gradient,SPRING_CHANNEL_DETAILS}=this.__closure;return{opacity:withSpring(gradient.get(),SPRING_CHANNEL_DETAILS)};}" };
const memoResult = react.memo(function ChannelDetailsTopic(containerStyle) {
  let channel;
  let textAlign;
  let tmp3;
  ({ channel, textAlign } = containerStyle);
  containerStyle = containerStyle.containerStyle;
  if (textAlign === undefined) {
    textAlign = "center";
  }
  let flag = containerStyle.initialExpanded;
  if (flag === undefined) {
    flag = false;
  }
  if (channel.isDM()) {
    const obj2 = { channel, textAlign };
    tmp3 = unpackModuleId(PrivateChannelDetailsTopic, obj2);
  } else if (channel.isGroupDM()) {
    const obj3 = { channel, textAlign };
    tmp3 = unpackModuleId(GroupDMChannelDetailsTopic, obj3);
  } else {
    let tmp2 = null != channel.topic;
    if (tmp2) {
      const str = channel.topic;
      tmp2 = "" !== str.trim();
    }
    if (tmp2) {
      const obj = { channel, textAlign, initialExpanded: flag };
      tmp3 = unpackModuleId(GuildChannelDetailsTopic, obj);
    }
  }
  let tmp10 = null;
  if (null != tmp3) {
    const obj4 = { style: containerStyle, children: tmp3 };
    tmp10 = unpackModuleId(hasOwnProperty, obj4);
  }
  return tmp10;
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsTopic.tsx");

export default memoResult;
