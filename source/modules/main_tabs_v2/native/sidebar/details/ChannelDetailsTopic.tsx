// Module ID: 15307
// Function ID: 116398
// Name: GuildChannelDetailsTopic
// Dependencies: []

// Module 15307 (GuildChannelDetailsTopic)
function GuildChannelDetailsTopic(channel) {
  channel = channel.channel;
  const arg1 = channel;
  let flag = channel.initialExpanded;
  if (flag === undefined) {
    flag = false;
  }
  const importDefault = flag;
  let dependencyMap;
  let callback;
  let React;
  let first1;
  let absoluteFill;
  let closure_7;
  let sharedValue1;
  let sharedValue2;
  const tmp = callback3();
  let obj = arg1(dependencyMap[9]);
  const token = obj.useToken(importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOWER);
  dependencyMap = token;
  const items = [token];
  const memo = React.useMemo(() => {
    const obj = flag(token[11])(token);
    const items = [flag(token[11])(token).alpha(0).hex(), token];
    return items;
  }, items);
  const tmp4 = callback(React.useState(true), 2);
  const first = tmp4[0];
  callback = first;
  React = tmp4[1];
  const tmp6 = callback(React.useState(flag), 2);
  first1 = tmp6[0];
  absoluteFill = tmp6[1];
  let obj1 = arg1(dependencyMap[12]);
  const sharedValue = obj1.useSharedValue(undefined);
  closure_7 = sharedValue;
  let obj2 = arg1(dependencyMap[12]);
  sharedValue1 = obj2.useSharedValue(undefined);
  let obj3 = arg1(dependencyMap[12]);
  sharedValue2 = obj3.useSharedValue(constants.HIDDEN);
  let obj4 = arg1(dependencyMap[12]);
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
    obj = closure_16;
  };
  obj = { expandedHeight: sharedValue1, truncatedHeight: sharedValue, EMPTY_STYLE: closure_16, withSpring: arg1(dependencyMap[13]).withSpring, expanded: first1, SPRING_CHANNEL_DETAILS: sharedValue2 };
  fn.__closure = obj;
  fn.__workletHash = 11932535786068;
  fn.__initData = closure_18;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  let obj6 = arg1(dependencyMap[12]);
  const fn2 = function f() {
    if (null == sharedValue1.get()) {
      let obj = closure_16;
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
  let obj8 = arg1(dependencyMap[12]);
  class L {
    constructor() {
      obj = {};
      obj2 = channel(BACKGROUND_BASE_LOWER[13]);
      obj.opacity = obj2.withSpring(HIDDEN.get(), HIDDEN);
      return obj;
    }
  }
  obj1 = { withSpring: arg1(dependencyMap[13]).withSpring, gradient: sharedValue2, SPRING_CHANNEL_DETAILS: sharedValue2 };
  L.__closure = obj1;
  L.__workletHash = 12423301233362;
  L.__initData = closure_20;
  const items1 = [sharedValue2, first1];
  const animatedStyle2 = obj8.useAnimatedStyle(L);
  const items2 = [sharedValue1];
  callback = React.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.lines.length > sharedValue1);
    if (nativeEvent.nativeEvent.lines.length > sharedValue1) {
      if (!first1) {
        let HIDDEN = constants.VISIBLE;
      }
      tmp4(HIDDEN);
    }
    HIDDEN = constants.HIDDEN;
  }, items1);
  const items3 = [first, first1, sharedValue2];
  const callback1 = React.useCallback((nativeEvent) => sharedValue1.set(nativeEvent.nativeEvent.layout.height), items2);
  const memo1 = React.useMemo(() => first ? () => {
    callback(!closure_5);
    const result = closure_9.set(tmp ? tmp3.HIDDEN : tmp3.VISIBLE);
  } : undefined, items3);
  const items4 = [sharedValue];
  const items5 = [, ];
  ({ id: arr6[0], topic: arr6[1] } = channel);
  const callback2 = React.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.layout.height);
  }, items4);
  let memo2 = React.useMemo(() => {
    let obj = flag(token[14]);
    obj = { channelId: channel.id, shouldNavigateBack: true, mentionPillOffsetY: closure_14 };
    return obj.parseTopic("" + channel.topic.replace(/(\r\n|\n|\r)/gm, " "), true, obj);
  }, items5);
  const items6 = [, ];
  ({ id: arr7[0], topic: arr7[1] } = channel);
  const memo3 = React.useMemo(() => {
    let obj = flag(token[14]);
    obj = { channelId: channel.id, shouldNavigateBack: true, mentionPillOffsetY: closure_14 };
    return obj.parseTopic(channel.topic, true, obj);
  }, items6);
  const items7 = [channel.id, sharedValue, sharedValue1, flag];
  const effect = React.useEffect(() => {
    const result = sharedValue.set(undefined);
    const result1 = sharedValue1.set(undefined);
    callback2(flag);
  }, items7);
  if (null == memo1) {
    let PressableOpacity = first1;
  } else {
    PressableOpacity = arg1(dependencyMap[15]).PressableOpacity;
  }
  obj2 = {};
  obj3 = { style: tmp.hidden, children: callback2(arg1(dependencyMap[16]).Text, obj4) };
  obj4 = { variant: "heading-sm/normal", style: tmp.topicText, onTextLayout: callback, onLayout: callback1, children: memo3 };
  const items8 = [callback2(first1, obj3), ];
  const obj5 = { style: items9 };
  const items9 = [tmp.topic, animatedStyle];
  obj6 = { style: animatedStyle1 };
  const obj7 = { onPress: memo1, activeOpacity: 0.7 };
  obj8 = { pointerEvents: str };
  const obj9 = { "Null": 24, "Null": 24, onLayout: callback2 };
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
    obj8.children = callback2(arg1(dependencyMap[16]).Text, obj9);
    obj7.children = callback2(first1, obj8);
    obj6.children = callback2(PressableOpacity, obj7);
    const items11 = [callback2(importDefault(dependencyMap[12]).View, obj6), ];
    const obj11 = {};
    const items12 = [absoluteFill.absoluteFill, animatedStyle2];
    obj11.style = items12;
    obj11.pointerEvents = "none";
    const obj12 = { style: tmp.gradient, start: VerticalGradient.START, end: VerticalGradient.END, colors: memo };
    obj11.children = callback2(importDefault(dependencyMap[17]), obj12);
    items11[1] = callback2(importDefault(dependencyMap[12]).View, obj11);
    obj5.children = items11;
    items8[1] = closure_12(importDefault(dependencyMap[12]).View, obj5);
    obj2.children = items8;
    return closure_12(closure_13, obj2);
  }
  expanded = tmp.expanded;
}
function PrivateChannelDetailsTopic(channel) {
  const arg1 = channel.channel;
  let obj = arg1(dependencyMap[18]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const user = user.getUser(channel.getRecipientId());
    if (null == user) {
      let userTag = callback(closure_2[19]).getUserTag(user);
      const obj = callback(closure_2[19]);
    } else {
      userTag = null;
    }
    return userTag;
  });
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { cachedAt: false, edpbxy: false };
    obj = { textAlign: channel.textAlign };
    obj.style = obj;
    obj.children = stateFromStores;
    tmp2 = callback2(arg1(dependencyMap[16]).Text, obj);
  }
  return tmp2;
}
function GroupDMChannelDetailsTopic(channel) {
  const arg1 = channel.channel;
  let obj = arg1(dependencyMap[18]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => channel(closure_2[20]).getPrivateChannelUserTagsString(channel.recipients, closure_7));
  let tmp2 = null;
  if (null != stateFromStores) {
    obj = { cachedAt: false, edpbxy: false };
    obj = { textAlign: channel.textAlign };
    obj.style = obj;
    obj.children = stateFromStores;
    tmp2 = callback2(arg1(dependencyMap[16]).Text, obj);
  }
  return tmp2;
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
let num = 2;
({ View: closure_5, StyleSheet: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[2]);
({ CHANNEL_TOPIC_LINE_CLAMP: closure_8, SPRING_CHANNEL_DETAILS: closure_9 } = arg1(dependencyMap[4]));
const VerticalGradient = arg1(dependencyMap[5]).VerticalGradient;
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = arg1(dependencyMap[6]));
const tmp4 = arg1(dependencyMap[6]);
if (obj2.isAndroid()) {
  num = 4;
}
const obj2 = arg1(dependencyMap[7]);
let closure_15 = arg1(dependencyMap[8]).createStyles({ hidden: { flex: "<string:1429688832>", height: "<string:3225546230>", borderRadius: "<string:1627390254>", backgroundColor: "<string:2652783095>" }, topic: { overflow: "hidden" }, gradient: { "Bool(true)": "<string:2491613185>", "Bool(true)": "<string:2941583362>" }, expanded: { textAlign: "center" }, topicText: { paddingVertical: 5 } });
let closure_16 = {};
let closure_17 = { HIDDEN: 0, [0]: "HIDDEN", VISIBLE: 1, [1]: "VISIBLE" };
let closure_18 = { code: "function ChannelDetailsTopicTsx1(){const{expandedHeight,truncatedHeight,EMPTY_STYLE,withSpring,expanded,SPRING_CHANNEL_DETAILS}=this.__closure;const _expandedHeight=expandedHeight.get();const _truncatedHeight=truncatedHeight.get();if(_truncatedHeight==null||_expandedHeight==null)return EMPTY_STYLE;return{height:withSpring(expanded?_expandedHeight:_truncatedHeight,SPRING_CHANNEL_DETAILS)};}" };
let closure_19 = { code: "function ChannelDetailsTopicTsx2(){const{expandedHeight,EMPTY_STYLE}=this.__closure;if(expandedHeight.get()==null)return EMPTY_STYLE;return{height:expandedHeight.get()};}" };
let closure_20 = { code: "function ChannelDetailsTopicTsx3(){const{withSpring,gradient,SPRING_CHANNEL_DETAILS}=this.__closure;return{opacity:withSpring(gradient.get(),SPRING_CHANNEL_DETAILS)};}" };
const obj3 = arg1(dependencyMap[8]);
const memoResult = importAllResult.memo(function ChannelDetailsTopic(initialExpanded) {
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
    let tmp3 = callback2(PrivateChannelDetailsTopic, obj);
  } else if (channel.isGroupDM()) {
    obj = { channel, textAlign };
    tmp3 = callback2(GroupDMChannelDetailsTopic, obj);
  } else {
    let tmp2 = null != channel.topic;
    if (tmp2) {
      tmp2 = "" !== channel.topic.trim();
      const str = channel.topic;
    }
    if (tmp2) {
      obj = { channel, textAlign, initialExpanded: flag };
      tmp3 = callback2(GuildChannelDetailsTopic, obj);
    }
  }
  let tmp10 = null;
  if (null != tmp3) {
    const obj1 = { style: initialExpanded.containerStyle, children: tmp3 };
    tmp10 = callback2(closure_5, obj1);
  }
  return tmp10;
});
const result = arg1(dependencyMap[21]).fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsTopic.tsx");

export default memoResult;
