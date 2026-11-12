// Module ID: 19209
// Function ID: 19210
// Name: ChannelDetailsTopic
// Dependencies: [32, 19, 17, 1385, 10290, 1072, 21, 5170, 1377, 19210, 1652, 5793, 5911, 11217, 7076, 5783, 1113, 5747, 504, 5226, 6210, 2]

// Module 19209 (ChannelDetailsTopic)
import Constants from "Constants" /* 1072 */;
import UserUtilsDefault from "UserUtils" /* 5226 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5911 */;
import ChannelUtils from "ChannelUtils" /* 6210 */;
import MentionPillOffset from "MentionPillOffset" /* 11217 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1385 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10290 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size from "module_2" /* 2 */;

let absoluteFill;

let c9;
let closure_12;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroRequire;
let obj3;
let unpackModuleId;
function GuildChannelDetailsTopic(channel) {
  let PressableOpacity;
  let _undefined;
  let c6;
  let closure_3;
  let closure_5;
  let first;
  let first1;
  let items14;
  let items15;
  let items16;
  let items17;
  let obj12;
  let obj14;
  let obj17;
  let obj19;
  let obj7;
  let obj9;
  let string;
  let t;
  let tmp10;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp45;
  let tmp49;
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
  absoluteFill = undefined;
  const tmp = closure_14();
  const tmp2 = channel;
  let tmp3 = first;
  let obj = channel(first[9]);
  let obj2 = first1;
  const channelTopicGradientBackground = obj.useChannelTopicGradientBackground();
  [first, _slicedToArray] = first1.useState(true);
  [first1, closure_5] = first1.useState(flag);
  [tmp10, c6] = first1.useState();
  _slicedToArray(first1.useState(), 2);
  const obj3 = channel(first[10]);
  const sharedValue = obj3.useSharedValue(undefined);
  const obj4 = channel(first[10]);
  const sharedValue1 = obj4.useSharedValue(undefined);
  const obj5 = channel(first[10]);
  const sharedValue2 = obj5.useSharedValue(constants.HIDDEN);
  const items = [closure_17, sharedValue1, sharedValue, , , , ];
  let expanded = closure_15;
  items[3] = closure_15;
  const useAnimatedStyle = channel(first[10]).useAnimatedStyle;
  channel(first[10]);
  items[4] = channel(first[11]).withSpring;
  items[5] = first1;
  items[6] = sharedValue2;
  let c0;
  let c1;
  let c2;
  let c3;
  let c4;
  let c5;
  [tmp16, tmp17, tmp18, tmp19, tmp20, tmp21, tmp22] = items;
  class ChannelDetailsTopicTsx1 {
    constructor() {
      const value = _undefined.get();
      let value2 = _undefined2.get();
      if (null != value2) {
        let obj;
        if (null != value) {
          const tmp3 = c3;
          if (c4) {
            value2 = value;
          }
          obj = { height: tmp3(value2, c5) };
        }
        return obj;
      }
      obj = c2;
    }
  }
  const items1 = [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22];
  ChannelDetailsTopicTsx1.__closure = items1;
  ChannelDetailsTopicTsx1.__workletHash = 13417147111917;
  ChannelDetailsTopicTsx1.__initData = tmp16;
  const animatedStyle = useAnimatedStyle(ChannelDetailsTopicTsx1);
  const items2 = [closure_18, sharedValue1, expanded];
  c0 = undefined;
  c1 = undefined;
  [tmp24, tmp25, tmp26] = items2;
  const tmp15 = sharedValue2;
  const tmp2Result = tmp2(tmp3[10]);
  class ChannelDetailsTopicTsx2 {
    constructor() {
      let obj2;
      const obj = _undefined;
      if (null == _undefined.get()) {
        obj2 = c1;
      } else {
        obj2 = { height: obj.get() };
      }
      return obj2;
    }
  }
  const items3 = [tmp25, tmp26];
  ChannelDetailsTopicTsx2.__closure = items3;
  ChannelDetailsTopicTsx2.__workletHash = 9247180573864;
  ChannelDetailsTopicTsx2.__initData = tmp24;
  const animatedStyle1 = tmp2Result.useAnimatedStyle(ChannelDetailsTopicTsx2);
  const items4 = [closure_19, , , ];
  const useAnimatedStyle2 = tmp2(tmp3[10]).useAnimatedStyle;
  tmp2(tmp3[10]);
  items4[1] = tmp2(tmp3[11]).withSpring;
  items4[2] = sharedValue2;
  items4[3] = tmp15;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp29, tmp30, tmp31, tmp32] = items4;
  class ChannelDetailsTopicTsx3 {
    constructor() {
      const obj = { opacity: _undefined(_undefined2.get(), c2) };
      return obj;
    }
  }
  const items5 = [tmp30, tmp31, tmp32];
  ChannelDetailsTopicTsx3.__closure = items5;
  ChannelDetailsTopicTsx3.__workletHash = 16443247307275;
  ChannelDetailsTopicTsx3.__initData = tmp29;
  const items6 = [sharedValue2, first1];
  const animatedStyle2 = useAnimatedStyle2(ChannelDetailsTopicTsx3);
  const callback = obj2.useCallback((nativeEvent) => {
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
  }, items6);
  const items7 = [sharedValue1];
  const callback1 = obj2.useCallback((nativeEvent) => {
    const lines = nativeEvent.nativeEvent.lines;
    const substr = lines.slice(0, metroImportAll);
    const mapped = substr.map((text) => text.text);
    _undefined(mapped.join(""));
  }, []);
  const items8 = [first, first1, sharedValue2];
  const callback2 = obj2.useCallback((nativeEvent) => sharedValue1.set(nativeEvent.nativeEvent.layout.height), items7);
  const memo = obj2.useMemo(() => first ? (() => {
    closure_1_5(!first1);
    const result = sharedValue2.set(first1 ? tmp2.VISIBLE : tmp2.HIDDEN);
  }) : undefined, items8);
  const items9 = [sharedValue];
  const items10 = [, ];
  ({ id: arr11[0], topic: arr11[1] } = channel);
  const callback3 = obj2.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout.height);
  }, items9);
  let memo1 = obj2.useMemo(() => {
    const parseTopic = MarkupUtilsDefault.parseTopic;
    MarkupUtilsDefault;
    const obj = { channelId: channel.id, shouldNavigateBack: true, enableEmojiInteraction: true, textVariant: "heading-sm/normal", mentionPillOffsetY: MentionPillOffset.MENTION_PILL_OFFSET_Y };
    const str = "" + channel.topic;
    const replaced = str.replace(/(\r\n|\n|\r)/gm, " ");
    return parseTopic(replaced, true, obj);
  }, items10);
  const items11 = [, ];
  ({ id: arr12[0], topic: arr12[1] } = channel);
  const memo2 = obj2.useMemo(() => {
    const obj = MarkupUtilsDefault;
    const obj2 = { channelId: channel.id, shouldNavigateBack: true, enableEmojiInteraction: true, textVariant: "heading-sm/normal", mentionPillOffsetY: MentionPillOffset.MENTION_PILL_OFFSET_Y };
    return obj.parseTopic(channel.topic, true, obj2);
  }, items11);
  const items12 = [channel.id, sharedValue, sharedValue1, flag];
  const effect = obj2.useEffect(() => {
    const result = sharedValue.set(undefined);
    const result1 = sharedValue1.set(undefined);
    closure_5(flag);
    _undefined("");
  }, items12);
  if (null == memo) {
    PressableOpacity = closure_5;
  } else {
    PressableOpacity = tmp2(tmp3[14]).PressableOpacity;
  }
  const obj6 = { style: tmp.hidden, pointerEvents: "none", importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: closure_11(tmp2(tmp3[15]).Text, obj7) };
  obj7 = { variant: "heading-xs/medium", style: tmp.topicText, onTextLayout: callback, onLayout: callback2, children: memo2 };
  const items13 = [closure_11(closure_5, obj6), , ];
  const obj8 = { style: tmp.hidden, pointerEvents: "none", importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: closure_11(tmp2(tmp3[15]).Text, obj9) };
  obj9 = { variant: "heading-xs/medium", style: tmp.topicText, onTextLayout: callback1, children: memo1 };
  items13[1] = closure_11(closure_5, obj8);
  const obj10 = { style: items14, children: items16 };
  items14 = [tmp.topic, animatedStyle];
  const View = flag(tmp3[10]).View;
  const obj11 = { style: animatedStyle1, children: closure_11(PressableOpacity, obj12) };
  let tmp47 = null != memo;
  obj12 = { onPress: memo, activeOpacity: 0.7, children: closure_11(tmp45, obj17) };
  const View2 = flag(tmp3[10]).View;
  const tmp43 = closure_13;
  tmp45 = closure_5;
  if (tmp47) {
    let str = "";
    if (!first1) {
      str = tmp10;
    }
    const obj13 = { accessibilityRole: "button", accessibilityLabel: str, accessibilityHint: string(first1 ? t["6MwJo/"] : t.lBeKY2), accessibilityState: obj14 };
    const intl = tmp2(tmp3[16]).intl;
    string = intl.string;
    t = tmp2(tmp3[16]).t;
    tmp47 = obj13;
    obj14 = { expanded: first1 };
  }
  const merged = Object.assign(tmp47);
  const obj15 = { color: "interactive-text-default", variant: "heading-xs/medium", onLayout: callback3, lineClamp: tmp49, style: items15, children: memo1 };
  tmp49 = undefined;
  const Text = tmp2(tmp3[15]).Text;
  if (!first1) {
    tmp49 = sharedValue1;
  }
  items15 = [tmp.topicText, , ];
  if (first1) {
    expanded = tmp.expanded;
  }
  items15[1] = expanded;
  items15[2] = { textAlign };
  if (first1) {
    memo1 = memo2;
  }
  const obj16 = { children: items13 };
  obj17 = { children: closure_11(Text, obj15) };
  items16 = [closure_11(View2, obj11), ];
  const obj18 = { style: items17, pointerEvents: "none", children: closure_11(flag(tmp3[17]), obj19) };
  items17 = [absoluteFill.absoluteFill, animatedStyle2];
  const View3 = tmp46(tmp3[10]).View;
  obj19 = { style: tmp.gradient, start: VerticalGradient.START, end: VerticalGradient.END, colors: channelTopicGradientBackground };
  items16[1] = closure_11(View3, obj18);
  items13[2] = closure_12(View, obj10);
  return closure_12(tmp43, obj16);
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
    const obj2 = { variant: "heading-xs/medium", color: "interactive-text-default", style: obj3, children: stateFromStores };
    obj3 = { textAlign };
    tmp4 = closure_11(tmp(5783).Text, obj2);
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
    const obj2 = { variant: "heading-xs/medium", color: "interactive-text-default", style: obj3, children: stateFromStores };
    obj3 = { textAlign };
    tmp4 = closure_11(tmp(5783).Text, obj2);
  }
  return tmp4;
}
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, StyleSheet: metroRequire } = react_native);
({ CHANNEL_TOPIC_LINE_CLAMP: metroImportAll, SPRING_CHANNEL_DETAILS: c9 } = ChannelDetailsConstants);
const VerticalGradient = Constants.VerticalGradient;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { hidden: { flex: 1, flexGrow: 1, position: "absolute", opacity: 0 }, topic: { overflow: "hidden" }, gradient: { flex: 1, flexGrow: 1 }, expanded: { textAlign: "center" }, topicText: obj3 };
createStyles = createStyles.createStyles;
let obj2 = null;
if (!PlatformUtils.isAndroid()) {
  obj2 = { lineHeight: "r" };
}
obj3 = { paddingVertical: 5 };
let merged = Object.assign(obj2);
let closure_14 = createStyles(obj);
let closure_15 = {};
const constants = { HIDDEN: 0, [0]: "HIDDEN", VISIBLE: 1, [1]: "VISIBLE" };
let closure_17 = { code: "(function ChannelDetailsTopicTsx1(){let[expandedHeight,truncatedHeight,EMPTY_STYLE,withSpring,expanded,SPRING_CHANNEL_DETAILS]=this.__closure;const _expandedHeight=expandedHeight.get();const _truncatedHeight=truncatedHeight.get();if(_truncatedHeight==null||_expandedHeight==null)return EMPTY_STYLE;return{height:withSpring(expanded?_expandedHeight:_truncatedHeight,SPRING_CHANNEL_DETAILS)};})" };
let closure_18 = { code: "(function ChannelDetailsTopicTsx2(){let[expandedHeight,EMPTY_STYLE]=this.__closure;if(expandedHeight.get()==null)return EMPTY_STYLE;return{height:expandedHeight.get()};})" };
let closure_19 = { code: "(function ChannelDetailsTopicTsx3(){let[withSpring,gradient,SPRING_CHANNEL_DETAILS]=this.__closure;return{opacity:withSpring(gradient.get(),SPRING_CHANNEL_DETAILS)};})" };
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
