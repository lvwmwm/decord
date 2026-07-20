// Module ID: 15704
// Function ID: 120028
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 15704 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function StreamPreview(channelId) {
  let stream;
  let voiceState;
  ({ voiceState, stream } = channelId);
  const arg1 = stream;
  channelId = channelId.channelId;
  const importDefault = channelId;
  const tmp = callback3();
  const context = importAllResult.useContext(importDefault(dependencyMap[23]));
  const setFocused = context.setFocused;
  const dependencyMap = setFocused;
  const items = [channelId, stream, setFocused];
  const callback = importAllResult.useCallback(() => {
    const voiceChannel = channelId(setFocused[24]).selectVoiceChannel(channelId);
    const obj = channelId(setFocused[24]);
    stream(setFocused[25]).watchStream(stream, { forceMultiple: true });
    const obj2 = stream(setFocused[25]);
    setFocused(stream(setFocused[26]).encodeStreamKey(stream));
  }, items);
  let obj = arg1(dependencyMap[27]);
  const items1 = [closure_11];
  let closure_3 = obj.useStateFromStores(items1, () => channel.getChannel(channelId));
  let obj1 = arg1(dependencyMap[27]);
  const items2 = [closure_12];
  const stateFromStores = obj1.useStateFromStores(items2, () => closure_12.can(constants.CONNECT, closure_3));
  obj = { style: tmp.activityInfoWrapper };
  obj = { debugLayout: 116525547387738200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, EMPTY_SEARCH_QUERY_STRING: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000631242212714641, minWidth: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007291122671433504, style: tmp.activityInfoHeader };
  const intl = arg1(dependencyMap[30]).intl;
  obj1 = {};
  let username = voiceState.nick;
  if (null == username) {
    username = voiceState.user.username;
  }
  obj1.username = username;
  obj.children = intl.format(arg1(dependencyMap[30]).t.I0mOAs, obj1);
  const items3 = [callback2(arg1(dependencyMap[29]).Text, obj), ];
  const obj2 = { style: tmp.previewImageWrapper };
  const tmp5 = closure_24;
  const tmp6 = importDefault(dependencyMap[28]);
  const tmp7 = callback2;
  obj2.children = callback2(arg1(dependencyMap[31]).VoicePanelStreamPreview, { mode: context.mode, disabled: !stateFromStores, stream, onPress: callback });
  items3[1] = callback2(importDefault(dependencyMap[28]), obj2);
  obj.children = items3;
  return tmp5(tmp6, obj);
}
function ActivityInfo(activity) {
  activity = activity.activity;
  const arg1 = activity;
  const analyticsLocations = activity.analyticsLocations;
  const importDefault = analyticsLocations;
  const tmp = callback3();
  const items = [activity.applicationId];
  const first = callback(importDefault(dependencyMap[32])(items), 1)[0];
  const dependencyMap = first;
  let obj1 = arg1(dependencyMap[33]);
  const embeddedActivityLocationChannelId = obj1.getEmbeddedActivityLocationChannelId(activity.location);
  const context = importAllResult.useContext(importDefault(dependencyMap[23]));
  const channelId = context.channelId;
  let closure_3 = channelId;
  const windowDimensions = context.windowDimensions;
  let callback = windowDimensions;
  const tmp4 = callback(importAllResult.useState(() => activity(first[35]).getWindowDimensions().width - 2 * (closure_18 + 16)), 2);
  const first1 = tmp4[0];
  let obj2 = arg1(dependencyMap[36]);
  const fn = function l() {
    return windowDimensions.get().width;
  };
  fn.__closure = { windowDimensions };
  fn.__workletHash = 16837592262556;
  fn.__initData = closure_28;
  const fn2 = function s(arg0, arg1) {
    if (arg0 !== arg1) {
      activity(first[36]).runOnJS(tmp6)(arg0 - 2 * (closure_18 + 16));
      const obj = activity(first[36]);
    }
  };
  let obj = { runOnJS: arg1(dependencyMap[36]).runOnJS, setActivityPreviewWidth: tmp6, EDGE_GUTTER };
  fn2.__closure = obj;
  fn2.__workletHash = 1481130207412;
  fn2.__initData = closure_29;
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
  let obj4 = arg1(dependencyMap[37]);
  obj = { userId: id.getId(), channelId, application: first };
  const embeddedActivityJoinability = obj4.useEmbeddedActivityJoinability(obj);
  let closure_6 = embeddedActivityJoinability;
  const tmp9 = embeddedActivityJoinability === arg1(dependencyMap[37]).EmbeddedActivityJoinability.CAN_JOIN;
  let closure_7 = tmp9;
  const items1 = [activity.launchId, analyticsLocations, first, tmp9, channelId, embeddedActivityJoinability];
  callback = importAllResult.useCallback(() => {
    const obj = { embeddedActivityJoinability };
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = channelId(tmp);
    obj.handleCanJoin = function() {
      return callback(...arguments);
    };
    analyticsLocations(first[38])(obj);
  }, items1);
  let tmp13Result = null;
  if (null != first) {
    obj1 = { style: tmp.activityInfoWrapper };
    obj2 = { debugLayout: 116525547387738200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, EMPTY_SEARCH_QUERY_STRING: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000631242212714641, minWidth: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007291122671433504, style: tmp.activityInfoHeader };
    const intl = arg1(dependencyMap[30]).intl;
    const obj3 = { n: arr2.length };
    obj2.children = intl.format(arg1(dependencyMap[30]).t.n/IJ6Y, obj3);
    const items2 = [callback2(arg1(dependencyMap[29]).Text, obj2), ];
    obj4 = { activeOpacity: 0.7, onPress: callback, style: tmp.previewImageWrapper, accessible: false };
    const obj5 = { style: tmp.previewImage };
    const tmp13 = closure_24;
    const tmp16 = importDefault(dependencyMap[28]);
    const tmp19 = closure_24;
    const obj6 = { imageBackground: tmp11, aspectRatio: 1.7777777777777777 };
    obj5.children = callback2(importDefault(dependencyMap[41]), obj6);
    const items3 = [callback2(importDefault(dependencyMap[28]), obj5), ];
    const obj7 = { style: tmp.joinButtonWrapper };
    const tmp21 = importDefault(dependencyMap[28]);
    const tmp23 = callback2;
    const obj8 = { 1026970544: "r", -2135711331: "getVisibleLayouts", 1362862178: "Array", 1449306697: "chart_with_downwards_trend" };
    const intl2 = arg1(dependencyMap[30]).intl;
    const obj9 = { name: first.name };
    obj8.text = intl2.formatToPlainString(arg1(dependencyMap[30]).t.YV/hE8, obj9);
    const obj10 = { variant: "entity" };
    const obj11 = { 9223372036854775807: "Golive Simulcast without prober 720p@500k", 0: 144.002, 0: null };
    const iconURL = first.getIconURL(20);
    let tmp28;
    if (null != iconURL) {
      tmp28 = iconURL;
    }
    obj11.uri = tmp28;
    obj10.source = obj11;
    obj8.icon = callback2(arg1(dependencyMap[42]).Button.Icon, obj10);
    obj8.onPress = callback;
    obj7.children = callback2(arg1(dependencyMap[42]).Button, obj8);
    items3[1] = tmp23(importDefault(dependencyMap[28]), obj7);
    obj4.children = items3;
    items2[1] = tmp19(arg1(dependencyMap[40]).PressableOpacity, obj4);
    obj1.children = items2;
    tmp13Result = tmp13(tmp16, obj1);
    const tmp24 = importDefault(dependencyMap[28]);
    const tmp25 = callback2;
    const tmp26 = callback2;
  }
  return tmp13Result;
}
function RoomMembersSection(arg0) {
  let channelId;
  let guildId;
  let iter2;
  let members;
  let title;
  ({ channelId, guildId } = arg0);
  ({ title, members } = arg0);
  let obj = { title, hasIcons: true };
  const items = [];
  const tmp2 = _createForOfIteratorHelperLoose(members);
  let iter = tmp2();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp3 = closure_14;
      let user = closure_14.getUser(value);
      if (null != user) {
        let tmp5 = closure_23;
        let tmp6 = closure_0;
        let tmp7 = closure_2;
        obj = { user, channelId, guildId };
        let tmp8 = closure_1;
        let obj3 = closure_1(closure_2[47]);
        obj.nick = obj3.getName(guildId, channelId, user);
        let arr = items.push(closure_23(closure_0(closure_2[46]).MemberRowItem, obj, value));
      }
      iter2 = tmp2();
      iter = iter2;
    } while (!iter2.done);
  }
  obj.children = items;
  return closure_23(arg1(dependencyMap[46]).VoicePanelFormSection, obj);
}
function RoomMembers(arg0) {
  let blockedMembers;
  let ignoredMembers;
  let members;
  let streamingMembers;
  ({ members, streamingMembers, blockedMembers, ignoredMembers } = arg0);
  const context = importAllResult.useContext(importDefault(closure_2[23]));
  const channelId = context.channelId;
  const arg1 = channelId;
  const guildId = context.guildId;
  const tmp2 = callback(importAllResult.useState(20), 2);
  const first = tmp2[0];
  const importDefault = first;
  closure_2 = tmp2[1];
  const sum = blockedMembers.size + ignoredMembers.size;
  const diff = members.length - sum;
  let obj = {};
  let tmp8 = sum > 0;
  if (tmp8) {
    obj = { channelId, blockedUserIds: blockedMembers, ignoredUserIds: ignoredMembers };
    tmp8 = callback2(closure_30, obj);
  }
  const items = [
    tmp8,
    streamingMembers.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      return callback2(closure_37, { channelId, voiceState: tmp, stream: tmp2 }, tmp2.ownerId);
    }),
  ,
  ,

  ];
  let tmp11 = blockedMembers.size > 0;
  if (tmp11) {
    obj = {};
    const intl = arg1(closure_2[30]).intl;
    const obj1 = { n: blockedMembers.size };
    obj.title = intl.formatToPlainString(arg1(closure_2[30]).t.pGJ1Qy, obj1);
    obj.members = blockedMembers;
    obj.channelId = channelId;
    obj.guildId = guildId;
    tmp11 = callback2(RoomMembersSection, obj);
  }
  items[2] = tmp11;
  let tmp16 = ignoredMembers.size > 0;
  if (tmp16) {
    const obj2 = {};
    const intl2 = arg1(closure_2[30]).intl;
    const obj3 = { n: ignoredMembers.size };
    obj2.title = intl2.formatToPlainString(arg1(closure_2[30]).t./pXOCN, obj3);
    obj2.members = ignoredMembers;
    obj2.channelId = channelId;
    obj2.guildId = guildId;
    tmp16 = callback2(RoomMembersSection, obj2);
  }
  items[3] = tmp16;
  let tmp22Result = diff > 0;
  if (tmp22Result) {
    const obj4 = { hasIcons: true };
    if (0 === sum) {
      const intl4 = arg1(closure_2[30]).intl;
      const obj5 = { n: members.length };
      let formatToPlainStringResult = intl4.formatToPlainString(arg1(closure_2[30]).t.vloEU7, obj5);
    } else {
      const intl3 = arg1(closure_2[30]).intl;
      const obj6 = { n: diff };
      formatToPlainStringResult = intl3.formatToPlainString(arg1(closure_2[30]).t.R0h4pE, obj6);
    }
    obj4.title = formatToPlainStringResult;
    const items1 = [];
    const tmp31 = _createForOfIteratorHelperLoose(members);
    let iter = tmp31();
    if (!iter.done) {
      const value = iter.value;
      while (items1.length < first) {
        let tmp32 = blockedMembers.has(value.user.id) || ignoredMembers.has(value.user.id);
        if (!tmp32) {
          let tmp33 = callback2;
          let tmp34 = arg1;
          let tmp35 = closure_2;
          let obj7 = { user: value.user, channelId, guildId };
          let tmp36 = importDefault;
          let obj11 = importDefault(closure_2[47]);
          obj7.nick = obj11.getName(guildId, channelId, value.user);
          let arr = items1.push(callback2(arg1(closure_2[46]).MemberRowItem, obj7, value.user.id));
        }
        let iter2 = tmp31();
        iter = iter2;
        if (iter2.done) {
          break;
        }
      }
    }
    const items2 = [items1, ];
    let tmp38 = diff > first;
    if (tmp38) {
      const obj8 = {};
      const intl5 = arg1(closure_2[30]).intl;
      obj8.label = intl5.string(arg1(closure_2[30]).t.F4MCUO);
      obj8.onPress = function onPress() {
        return callback(first + 20);
      };
      tmp38 = callback2(arg1(closure_2[48]).TableRow, obj8);
    }
    items2[1] = tmp38;
    obj4.children = items2;
    tmp22Result = closure_24(arg1(closure_2[46]).VoicePanelFormSection, obj4);
    const tmp22 = closure_24;
  }
  items[4] = tmp22Result;
  obj.children = items;
  return closure_24(closure_25, obj);
}
function PreJoinTransitioner(transitionState) {
  transitionState = transitionState.transitionState;
  const arg1 = transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const importDefault = transitionCleanUp;
  let obj = Object.create(null);
  obj.transitionState = 0;
  obj.transitionCleanUp = 0;
  const merged = Object.assign(transitionState, obj);
  const context = importAllResult.useContext(importDefault(dependencyMap[23]));
  const windowDimensions = context.windowDimensions;
  const dependencyMap = windowDimensions;
  const controlsSpecs = context.controlsSpecs;
  let closure_3 = controlsSpecs;
  const safeArea = context.safeArea;
  let closure_4 = safeArea;
  const preJoinContentSize = context.preJoinContentSize;
  const useReducedMotion = context.useReducedMotion;
  let closure_6 = useReducedMotion;
  obj = arg1(dependencyMap[36]);
  const fn = function o() {
    const height = windowDimensions.get().height;
    let obj = {};
    const diff = height - transitionCleanUp(windowDimensions[49])(0.8 * height);
    const sum = diff + controlsSpecs.get().height;
    obj.paddingBottom = sum + safeArea.get().bottom;
    let num = 1;
    let num2 = 1;
    if (transitionState === transitionState(windowDimensions[56]).TransitionStates.YEETED) {
      num2 = 0;
    }
    obj.opacity = transitionState(windowDimensions[55]).withSpring(num2);
    obj = {};
    const obj2 = transitionState(windowDimensions[55]);
    const obj4 = transitionState(windowDimensions[55]);
    if (useReducedMotion.get()) {
      num = 0;
    }
    const obj5 = transitionState(windowDimensions[36]);
    const fn = function n() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      if (flag) {
        flag = callback === callback(closure_2[56]).TransitionStates.YEETED;
      }
      if (flag) {
        callback(closure_2[36]).runOnJS(closure_1)();
        const obj = callback(closure_2[36]);
      }
    };
    obj = { transitionState, TransitionStates: transitionState(windowDimensions[56]).TransitionStates, runOnJS: transitionState(windowDimensions[36]).runOnJS, transitionCleanUp };
    fn.__closure = obj;
    fn.__workletHash = 2541522666097;
    fn.__initData = closure_34;
    obj.translateY = obj4.withSpring(transitionState(windowDimensions[36]).interpolate(num, [null, null], [1962935470, 1107296760]), closure_17, "respect-motion-settings", fn);
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { windowDimensions, roundToNearestPixel: importDefault(dependencyMap[49]), controlsSpecs, safeArea, withSpring: arg1(dependencyMap[55]).withSpring, transitionState, TransitionStates: arg1(dependencyMap[56]).TransitionStates, interpolate: arg1(dependencyMap[36]).interpolate, useReducedMotion, MODE_CHANGE_PHYSICS, runOnJS: arg1(dependencyMap[36]).runOnJS, transitionCleanUp };
  fn.__closure = obj;
  fn.__workletHash = 16643118377748;
  fn.__initData = closure_33;
  const items = [preJoinContentSize];
  const animatedStyle = obj.useAnimatedStyle(fn);
  const callback = importAllResult.useCallback((nativeEvent) => {
    const result = preJoinContentSize.set(transitionCleanUp(windowDimensions[49])(nativeEvent.nativeEvent.layout.height));
  }, items);
  const obj1 = { style: animatedStyle, collapsable: false };
  const tmp3 = callback3();
  const obj2 = { onLayout: callback, collapsable: false, style: tmp3.contentWrapper };
  const obj3 = {};
  const tmp7 = importDefault(dependencyMap[57]);
  const merged1 = Object.assign(merged);
  obj2.children = callback2(closure_32, obj3);
  obj1.children = callback2(importDefault(dependencyMap[28]), obj2);
  return callback2(tmp7, obj1);
}
function renderItem(arg0, arg1, transitionState, transitionCleanUp) {
  const merged = Object.assign(arg1);
  return callback2(PreJoinTransitioner, { transitionState, transitionCleanUp }, arg0);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
const StyleSheet = arg1(dependencyMap[3]).StyleSheet;
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
let closure_11 = importDefault(dependencyMap[9]);
let closure_12 = importDefault(dependencyMap[10]);
let closure_13 = importDefault(dependencyMap[11]);
let closure_14 = importDefault(dependencyMap[12]);
let closure_15 = importDefault(dependencyMap[13]);
let closure_16 = importDefault(dependencyMap[14]);
const MODE_CHANGE_PHYSICS = arg1(dependencyMap[15]).MODE_CHANGE_PHYSICS;
const EDGE_GUTTER = arg1(dependencyMap[16]).EDGE_GUTTER;
({ AnalyticEvents: closure_19, AnalyticsSections: closure_20, Permissions: closure_21 } = arg1(dependencyMap[17]));
let closure_22 = arg1(dependencyMap[18]).VoiceChannelWarningSurfaces;
const tmp2 = arg1(dependencyMap[17]);
({ jsx: closure_23, jsxs: closure_24, Fragment: closure_25 } = arg1(dependencyMap[19]));
let obj1 = arg1(dependencyMap[20]);
let obj = {};
obj = { paddingTop: EDGE_GUTTER + arg1(dependencyMap[21]).BASE_VOICE_PANEL_HEADER_HEIGHT + EDGE_GUTTER };
obj.contentWrapper = obj;
obj.channelInfoWrapper = { paddingHorizontal: 16 };
obj.subheading = { url: null, shapes: null, useCallback: null };
obj1 = { borderRadius: importDefault(dependencyMap[22]).radii.lg, backgroundColor: importDefault(dependencyMap[22]).colors.BLACK };
obj.previewImageWrapper = obj1;
const obj2 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2["opacity"] = 0.5;
obj.previewImage = obj2;
obj.activityInfoWrapper = { paddingHorizontal: 16 };
obj.activityInfoHeader = { marginBottom: 8 };
const obj3 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj3["display"] = "flex";
obj3["alignItems"] = "center";
obj3["justifyContent"] = "center";
obj.joinButtonWrapper = obj3;
obj.optInChannelsContainer = { marginHorizontal: 16 };
const obj4 = { "Bool(true)": 8, "Bool(true)": null, "Bool(true)": "\u270A\u{1F3FF}", gap: importDefault(dependencyMap[22]).space.PX_8, padding: importDefault(dependencyMap[22]).space.PX_8, borderRadius: importDefault(dependencyMap[22]).radii.xs, borderColor: importDefault(dependencyMap[22]).colors.ICON_FEEDBACK_WARNING, borderWidth: 1, backgroundColor: importDefault(dependencyMap[22]).colors.BACKGROUND_FEEDBACK_WARNING, marginHorizontal: importDefault(dependencyMap[22]).space.PX_16 };
obj.blockedMemberWarning = obj4;
obj.consolePreJoinPadding = { height: 36 };
let closure_26 = obj1.createStyles(obj);
let closure_27 = importAllResult.memo((hasMembers) => {
  const tmp = callback3();
  let tmp2 = null;
  if (!hasMembers.hasMembers) {
    let obj = { style: tmp.channelInfoWrapper };
    obj = { style: tmp.subheading };
    const intl = arg1(dependencyMap[30]).intl;
    obj.children = intl.string(arg1(dependencyMap[30]).t.sS2J0G);
    obj.children = callback2(arg1(dependencyMap[29]).Text, obj);
    tmp2 = callback2(importDefault(dependencyMap[28]), obj);
    const tmp6 = importDefault(dependencyMap[28]);
  }
  return tmp2;
});
let closure_28 = { code: "function VoicePanelPreJoinContentTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get().width;}" };
let closure_29 = { code: "function VoicePanelPreJoinContentTsx2(width,previous){const{runOnJS,setActivityPreviewWidth,EDGE_GUTTER}=this.__closure;if(width===previous)return;runOnJS(setActivityPreviewWidth)(width-(EDGE_GUTTER+16)*2);}" };
let closure_30 = importAllResult.memo((blockedUserIds) => {
  let channelId;
  let ignoredUserIds;
  blockedUserIds = blockedUserIds.blockedUserIds;
  ({ channelId, ignoredUserIds } = blockedUserIds);
  let obj = {};
  const tmp = callback3();
  obj.name = arg1(dependencyMap[44]).ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING;
  obj = { channel_id: channelId, blocked_user_ids: Array.from(blockedUserIds), warning_surface: constants2.PRE_JOIN_SHEET };
  obj.properties = obj;
  importDefault(dependencyMap[43])(obj);
  const size = ignoredUserIds.size;
  const size2 = blockedUserIds.size;
  const intl = arg1(dependencyMap[30]).intl;
  const stringResult = intl.string(arg1(dependencyMap[30]).t.CjrALd);
  if (size2 > 0) {
    if (size > 0) {
      const intl4 = arg1(dependencyMap[30]).intl;
      let stringResult1 = intl4.string(arg1(dependencyMap[30]).t.MpRfpC);
    }
    obj = { style: tmp.blockedMemberWarning };
    const obj1 = { color: "text-feedback-warning" };
    const items = [callback2(arg1(dependencyMap[45]).CircleErrorIcon, obj1), ];
    const obj2 = { INTEGRATION_CREATE: "r", ConstraintReasonCode: "isArray" };
    const obj3 = { flexShrink: 1 };
    obj2.style = obj3;
    const items1 = [stringResult1, " ", ];
    let tmp19 = null;
    if (null != stringResult) {
      const obj4 = { variant: "heading-sm/semibold", children: stringResult };
      tmp19 = callback2(arg1(dependencyMap[29]).Text, obj4);
    }
    items1[2] = tmp19;
    obj2.children = items1;
    items[1] = closure_24(arg1(dependencyMap[29]).Text, obj2);
    obj.children = items;
    return closure_24(importDefault(dependencyMap[28]), obj);
  }
  if (size > 0) {
    const intl3 = arg1(dependencyMap[30]).intl;
    const obj5 = { n: size };
    stringResult1 = intl3.format(arg1(dependencyMap[30]).t.u9trAZ, obj5);
  } else {
    const intl2 = arg1(dependencyMap[30]).intl;
    const obj6 = { n: size2 };
    stringResult1 = intl2.format(arg1(dependencyMap[30]).t.6X29zb, obj6);
  }
});
let closure_31 = importAllResult.memo((channelId) => {
  channelId = channelId.channelId;
  const arg1 = channelId;
  let obj = arg1(dependencyMap[27]);
  const items = [closure_10, closure_7, closure_15, closure_13];
  const items1 = [channelId];
  let tmp2 = null;
  if (obj.useStateFromStores(items, () => {
    const id = id.getId();
    const voiceStateForSession = voiceStateForSession.getVoiceStateForSession(id, store.getRemoteSessionId());
    const awaitingRemoteSessionInfo = store.getAwaitingRemoteSessionInfo();
    let channelId;
    if (null != awaitingRemoteSessionInfo) {
      channelId = awaitingRemoteSessionInfo.channelId;
    }
    let tmp6 = channelId === channelId;
    if (!tmp6) {
      let channelId1;
      if (null != tmp3) {
        channelId1 = tmp3.channelId;
      }
      let tmp9 = channelId1 === channelId;
      if (tmp9) {
        let sessionId;
        if (null != tmp3) {
          sessionId = tmp3.sessionId;
        }
        let str = "";
        if (null != sessionId) {
          str = sessionId;
        }
        tmp9 = null != sessionById.getSessionById(str);
      }
      tmp6 = tmp9;
    }
    return tmp6;
  }, items1)) {
    obj = { style: tmp.consolePreJoinPadding };
    tmp2 = callback2(importDefault(dependencyMap[28]), obj);
  }
  return tmp2;
});
let closure_32 = importAllResult.memo(function VoicePanelPreJoinContentInner(streamingMembers) {
  let activities;
  let blockedMembers;
  let ignoredMembers;
  let members;
  ({ members, blockedMembers, ignoredMembers, activities } = streamingMembers);
  const context = importAllResult.useContext(importDefault(dependencyMap[23]));
  const channelId = context.channelId;
  const arg1 = channelId;
  const guildId = context.guildId;
  const importDefault = guildId;
  let obj = arg1(dependencyMap[27]);
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId));
  const tmp = callback3();
  const tmp4 = importDefault(dependencyMap[50])(stateFromStores);
  const analyticsLocations = importDefault(dependencyMap[51])(importDefault(dependencyMap[52]).VOICE_PANEL_PRE_JOIN).analyticsLocations;
  const dependencyMap = analyticsLocations;
  const items1 = [channelId, guildId, analyticsLocations];
  const effect = importAllResult.useEffect(() => {
    let obj = guildId(analyticsLocations[53]);
    obj = { guild_id: guildId, channel_id: channelId, location_stack: analyticsLocations };
    obj.track(constants.VIEW_VOICE_CHANNEL, obj);
  }, items1);
  obj = {};
  obj = { hasMembers: members.length > 0 };
  const items2 = [callback2(closure_27, obj), , , , ];
  let tmp9 = null;
  if (tmp4) {
    const obj1 = { style: tmp.optInChannelsContainer, channel: stateFromStores, analyticsSection: constants.CHANNEL };
    tmp9 = callback2(importDefault(dependencyMap[54]), obj1);
  }
  items2[1] = tmp9;
  items2[2] = activities.map((activity) => callback(closure_38, { activity, analyticsLocations }, activity.launchId));
  let tmp14 = members.length > 0 || blockedMembers.size > 0 || ignoredMembers.size > 0;
  if (tmp14) {
    const obj2 = { members, streamingMembers: streamingMembers.streamingMembers, blockedMembers, ignoredMembers };
    tmp14 = callback2(RoomMembers, obj2);
  }
  items2[3] = tmp14;
  items2[4] = callback2(closure_31, { channelId });
  obj.children = items2;
  return closure_24(closure_25, obj);
});
let closure_33 = { code: "function VoicePanelPreJoinContentTsx3(){const{windowDimensions,roundToNearestPixel,controlsSpecs,safeArea,withSpring,transitionState,TransitionStates,interpolate,useReducedMotion,MODE_CHANGE_PHYSICS,runOnJS,transitionCleanUp}=this.__closure;const{height:windowHeight}=windowDimensions.get();return{paddingBottom:windowHeight-roundToNearestPixel(windowHeight*0.8)+controlsSpecs.get().height+safeArea.get().bottom,opacity:withSpring(transitionState===TransitionStates.YEETED?0:1),transform:[{translateY:withSpring(interpolate(!useReducedMotion.get()&&transitionState===TransitionStates.YEETED?1:0,[0,1],[0,400]),MODE_CHANGE_PHYSICS,'respect-motion-settings',function(finished=false){finished&&transitionState===TransitionStates.YEETED&&runOnJS(transitionCleanUp)();})}]};}" };
let closure_34 = { code: "function VoicePanelPreJoinContentTsx4(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;finished&&transitionState===TransitionStates.YEETED&&runOnJS(transitionCleanUp)();}" };
const tmp3 = arg1(dependencyMap[19]);
const memoResult = importAllResult.memo(function VoicePanelPreJoinWrapper() {
  const context = importAllResult.useContext(importDefault(dependencyMap[23]));
  const channelId = context.channelId;
  const arg1 = channelId;
  const guildId = context.guildId;
  const importDefault = guildId;
  const tmp2 = importDefault(dependencyMap[58])(channelId);
  const dependencyMap = tmp2;
  let obj = arg1(dependencyMap[27]);
  const items = [closure_16, closure_8, closure_6, closure_9];
  const items1 = [tmp2, channelId, guildId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let iter3;
    if (!tmp2) {
      let tmp5;
      if (null != guildId) {
        tmp5 = guildId;
      }
      const voiceStatesForChannelAlt = voiceStatesForChannelAlt.getVoiceStatesForChannelAlt(tmp2, tmp5);
      const blockedUsersForVoiceChannel = authStore.getBlockedUsersForVoiceChannel(channelId);
      const ignoredUsersForVoiceChannel = authStore.getIgnoredUsersForVoiceChannel(channelId);
      const items = [];
      const embeddedActivitiesForChannel = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(channelId);
      const tmp14 = callback(voiceStatesForChannelAlt);
      const iter = tmp14();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let value = iter2.value;
          if (value.voiceState.selfStream) {
            let tmp15 = closure_9;
            let tmp16 = closure_1;
            let streamForUser = closure_9.getStreamForUser(value.user.id, closure_1);
            let tmp18 = streamForUser;
            if (null != streamForUser) {
              let items1 = [value, streamForUser];
              let arr = items.push(items1);
              let tmp20 = streamForUser;
            }
          }
          iter3 = tmp14();
          iter2 = iter3;
        } while (!iter3.done);
      }
      const obj = { members: voiceStatesForChannelAlt, activities: embeddedActivitiesForChannel, streamingMembers: items, blockedMembers: blockedUsersForVoiceChannel, ignoredMembers: ignoredUsersForVoiceChannel };
      return obj;
    }
  }, items1, arg1(dependencyMap[59]).areVoicePanelPreJoinContentPropsEqual);
  obj = { item: stateFromStores, renderItem };
  return callback2(arg1(dependencyMap[56]).TransitionItem, obj);
});
const result = arg1(dependencyMap[60]).fileFinishedImporting("modules/voice_panel/native/prejoin/VoicePanelPreJoinContent.tsx");

export default memoResult;
