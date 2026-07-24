// Module ID: 15471
// Function ID: 118894
// Name: GuildChannelDetailsTopic
// Dependencies: [57, 31, 27, 1849, 9140, 653, 33, 477, 4130, 3834, 689, 666, 3991, 4542, 4120, 4660, 4126, 4554, 566, 3969, 4312, 2]

// Module 15471 (GuildChannelDetailsTopic)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ChannelDetailsNavigatorScreens from "ChannelDetailsNavigatorScreens";
import { VerticalGradient } from "ME";
import jsxProd from "jsxProd";
import set from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "get ActivityIndicator";

let closure_11;
let closure_12;
let closure_13;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
function GuildChannelDetailsTopic(channel) {
  channel = channel.channel;
  let flag = channel.initialExpanded;
  if (flag === undefined) {
    flag = false;
  }
  let token;
  let first;
  let importAllResult;
  let first1;
  let absoluteFill;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  const tmp = callback2();
  let obj = channel(token[9]);
  token = obj.useToken(flag(token[10]).colors.BACKGROUND_BASE_LOWER);
  let items = [token];
  const memo = importAllResult.useMemo(() => {
    const obj = flag(token[11])(token);
    const items = [flag(token[11])(token).alpha(0).hex(), token];
    return items;
  }, items);
  const tmp4 = first(importAllResult.useState(true), 2);
  first = tmp4[0];
  importAllResult = tmp4[1];
  const tmp6 = first(importAllResult.useState(flag), 2);
  first1 = tmp6[0];
  absoluteFill = tmp6[1];
  let obj1 = channel(token[12]);
  sharedValue = obj1.useSharedValue(undefined);
  let obj2 = channel(token[12]);
  sharedValue1 = obj2.useSharedValue(undefined);
  let obj3 = channel(token[12]);
  sharedValue2 = obj3.useSharedValue(constants.HIDDEN);
  let obj4 = channel(token[12]);
  const fn = function _() {
    let value = sharedValue1.get();
    value = sharedValue.get();
    if (null != value) {
      if (null != value) {
        let obj = { height: channel(token[13]).withSpring(value, sharedValue2) };
        const obj2 = channel(token[13]);
      }
      return obj;
    }
    obj = outer1_16;
  };
  obj = { expandedHeight: sharedValue1, truncatedHeight: sharedValue, EMPTY_STYLE: closure_16, withSpring: channel(token[13]).withSpring, expanded: first1, SPRING_CHANNEL_DETAILS: sharedValue2 };
  fn.__closure = obj;
  fn.__workletHash = 11932535786068;
  fn.__initData = closure_18;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  let obj6 = channel(token[12]);
  const fn2 = function f() {
    if (null == sharedValue1.get()) {
      let obj = outer1_16;
    } else {
      obj = { height: sharedValue1.get() };
    }
    return obj;
  };
  obj = { expandedHeight: sharedValue1, EMPTY_STYLE: closure_16 };
  fn2.__closure = obj;
  fn2.__workletHash = 13643982891313;
  fn2.__initData = closure_19;
  const animatedStyle1 = obj6.useAnimatedStyle(fn2);
  let obj8 = channel(token[12]);
  class L {
    constructor() {
      obj = {};
      obj2 = channel(BACKGROUND_BASE_LOWER[13]);
      obj.opacity = obj2.withSpring(HIDDEN.get(), HIDDEN);
      return obj;
    }
  }
  obj1 = { withSpring: channel(token[13]).withSpring, gradient: sharedValue2, SPRING_CHANNEL_DETAILS: sharedValue2 };
  L.__closure = obj1;
  L.__workletHash = 12423301233362;
  L.__initData = closure_20;
  const items1 = [sharedValue2, first1];
  const animatedStyle2 = obj8.useAnimatedStyle(L);
  const items2 = [sharedValue1];
  const callback = importAllResult.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.lines.length > sharedValue1);
    if (nativeEvent.nativeEvent.lines.length > sharedValue1) {
      if (!first1) {
        let HIDDEN = outer1_17.VISIBLE;
      }
      tmp4(HIDDEN);
    }
    HIDDEN = outer1_17.HIDDEN;
  }, items1);
  const items3 = [first, first1, sharedValue2];
  const callback1 = importAllResult.useCallback((nativeEvent) => sharedValue1.set(nativeEvent.nativeEvent.layout.height), items2);
  const memo1 = importAllResult.useMemo(() => first ? (() => {
    outer1_6(!outer1_5);
    const result = outer1_9.set(tmp ? tmp3.HIDDEN : tmp3.VISIBLE);
  }) : undefined, items3);
  const items4 = [sharedValue];
  const items5 = [, ];
  ({ id: arr6[0], topic: arr6[1] } = channel);
  callback2 = importAllResult.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout.height);
  }, items4);
  let memo2 = importAllResult.useMemo(() => {
    let obj = flag(token[14]);
    obj = { channelId: channel.id, shouldNavigateBack: true, mentionPillOffsetY: outer1_14 };
    return obj.parseTopic("" + channel.topic.replace(/(\r\n|\n|\r)/gm, " "), true, obj);
  }, items5);
  const items6 = [, ];
  ({ id: arr7[0], topic: arr7[1] } = channel);
  const memo3 = importAllResult.useMemo(() => {
    let obj = flag(token[14]);
    obj = { channelId: channel.id, shouldNavigateBack: true, mentionPillOffsetY: outer1_14 };
    return obj.parseTopic(channel.topic, true, obj);
  }, items6);
  const items7 = [channel.id, sharedValue, sharedValue1, flag];
  const effect = importAllResult.useEffect(() => {
    const result = sharedValue.set(undefined);
    const result1 = sharedValue1.set(undefined);
    callback2(flag);
  }, items7);
  if (null == memo1) {
    let PressableOpacity = first1;
  } else {
    PressableOpacity = channel(token[15]).PressableOpacity;
  }
  obj2 = {};
  obj3 = { style: tmp.hidden, pointerEvents: "none", importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true };
  obj4 = { variant: "heading-sm/normal", style: tmp.topicText, onTextLayout: callback, onLayout: callback1, children: memo3 };
  obj3.children = callback(channel(token[16]).Text, obj4);
  const items8 = [callback(first1, obj3), ];
  const obj5 = { style: items9 };
  items9 = [tmp.topic, animatedStyle];
  obj6 = { style: animatedStyle1 };
  const obj7 = { onPress: memo1, activeOpacity: 0.7 };
  obj8 = { pointerEvents: str };
  const obj9 = { color: "interactive-text-default", variant: "heading-sm/normal", onLayout: callback2 };
  let tmp31;
  if (!first1) {
    tmp31 = sharedValue1;
  }
  obj9.lineClamp = tmp31;
  const items10 = [tmp.topicText, , ];
  if (!first1) {
    if (first) {
      let expanded = closure_16;
    }
    items10[1] = expanded;
    const obj10 = { textAlign: channel.textAlign };
    items10[2] = obj10;
    obj9.style = items10;
    if (first1) {
      memo2 = memo3;
    }
    obj9.children = memo2;
    obj8.children = callback(channel(token[16]).Text, obj9);
    obj7.children = callback(first1, obj8);
    obj6.children = callback(PressableOpacity, obj7);
    const items11 = [callback(flag(token[12]).View, obj6), ];
    const obj11 = {};
    const items12 = [absoluteFill.absoluteFill, animatedStyle2];
    obj11.style = items12;
    obj11.pointerEvents = "none";
    const obj12 = { style: tmp.gradient, start: VerticalGradient.START, end: VerticalGradient.END, colors: memo };
    obj11.children = callback(flag(token[17]), obj12);
    items11[1] = callback(flag(token[12]).View, obj11);
    obj5.children = items11;
    items8[1] = closure_12(flag(token[12]).View, obj5);
    obj2.children = items8;
    return closure_12(closure_13, obj2);
  }
  expanded = tmp.expanded;
}
function PrivateChannelDetailsTopic(channel) {
  channel = channel.channel;
  let obj = channel(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const user = outer1_7.getUser(channel.getRecipientId());
    if (null == user) {
      let userTag = outer1_1(outer1_2[19]).getUserTag(user);
      const obj = outer1_1(outer1_2[19]);
    } else {
      userTag = null;
    }
    return userTag;
  });
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { variant: "heading-sm/normal", color: "interactive-text-default" };
    obj = { textAlign: channel.textAlign };
    obj.style = obj;
    obj.children = stateFromStores;
    tmp2 = callback(channel(4126).Text, obj);
  }
  return tmp2;
}
function GroupDMChannelDetailsTopic(channel) {
  channel = channel.channel;
  let obj = channel(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => channel(outer1_2[20]).getPrivateChannelUserTagsString(channel.recipients, outer1_7));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { variant: "heading-sm/normal", color: "interactive-text-default" };
    obj = { textAlign: channel.textAlign };
    obj.style = obj;
    obj.children = stateFromStores;
    tmp2 = callback(channel(4126).Text, obj);
  }
  return tmp2;
}
let num = 2;
({ View: closure_5, StyleSheet: closure_6 } = get_ActivityIndicator);
({ CHANNEL_TOPIC_LINE_CLAMP: closure_8, SPRING_CHANNEL_DETAILS: closure_9 } = ChannelDetailsNavigatorScreens);
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = jsxProd);
if (set.isAndroid()) {
  num = 4;
}
let closure_15 = _createForOfIteratorHelperLoose.createStyles({ hidden: { flex: 1, flexGrow: 1, position: "absolute", opacity: 0 }, topic: { overflow: "hidden" }, gradient: { flex: 1, flexGrow: 1 }, expanded: { textAlign: "center" }, topicText: { paddingVertical: 5 } });
let closure_16 = {};
let closure_17 = { HIDDEN: 0, [0]: "HIDDEN", VISIBLE: 1, [1]: "VISIBLE" };
let closure_18 = { code: "function ChannelDetailsTopicTsx1(){const{expandedHeight,truncatedHeight,EMPTY_STYLE,withSpring,expanded,SPRING_CHANNEL_DETAILS}=this.__closure;const _expandedHeight=expandedHeight.get();const _truncatedHeight=truncatedHeight.get();if(_truncatedHeight==null||_expandedHeight==null)return EMPTY_STYLE;return{height:withSpring(expanded?_expandedHeight:_truncatedHeight,SPRING_CHANNEL_DETAILS)};}" };
let closure_19 = { code: "function ChannelDetailsTopicTsx2(){const{expandedHeight,EMPTY_STYLE}=this.__closure;if(expandedHeight.get()==null)return EMPTY_STYLE;return{height:expandedHeight.get()};}" };
let closure_20 = { code: "function ChannelDetailsTopicTsx3(){const{withSpring,gradient,SPRING_CHANNEL_DETAILS}=this.__closure;return{opacity:withSpring(gradient.get(),SPRING_CHANNEL_DETAILS)};}" };
let result = set.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsTopic.tsx");

export default importAllResult.memo(function ChannelDetailsTopic(initialExpanded) {
  let channel;
  let textAlign;
  ({ channel, textAlign } = initialExpanded);
  if (textAlign === undefined) {
    textAlign = "center";
  }
  let flag = initialExpanded.initialExpanded;
  if (flag === undefined) {
    flag = false;
  }
  if (channel.isDM()) {
    let obj = { channel, textAlign };
    let tmp3 = callback(PrivateChannelDetailsTopic, obj);
  } else if (channel.isGroupDM()) {
    obj = { channel, textAlign };
    tmp3 = callback(GroupDMChannelDetailsTopic, obj);
  } else {
    let tmp2 = null != channel.topic;
    if (tmp2) {
      tmp2 = "" !== channel.topic.trim();
      const str = channel.topic;
    }
    if (tmp2) {
      obj = { channel, textAlign, initialExpanded: flag };
      tmp3 = callback(GuildChannelDetailsTopic, obj);
    }
  }
  let tmp10 = null;
  if (null != tmp3) {
    const obj1 = { style: initialExpanded.containerStyle, children: tmp3 };
    tmp10 = callback(closure_5, obj1);
  }
  return tmp10;
});
