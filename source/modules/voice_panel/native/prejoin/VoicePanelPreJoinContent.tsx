// Module ID: 15887
// Function ID: 122634
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 57, 31, 27, 1347, 4144, 12708, 4149, 1194, 1348, 3758, 4145, 1849, 4146, 4203, 10047, 10050, 653, 12713, 33, 4130, 10053, 689, 10046, 4944, 4309, 4194, 566, 5515, 4126, 1212, 11987, 5468, 3748, 15878, 1450, 3991, 10549, 10548, 10643, 4660, 15876, 4543, 8604, 480, 7577, 8904, 4319, 5165, 9923, 10465, 5462, 5482, 675, 15844, 4542, 4476, 7678, 15766, 15888, 2]

// Module 15887 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import module_7678 from "module_7678";
import importAllResult from "VoicePanelStreamPreview";
import { StyleSheet } from "initialize";
import closure_6 from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import { MODE_CHANGE_PHYSICS } from "VoicePanelModes";
import { EDGE_GUTTER } from "CARD_SIZE";
import ME from "ME";
import { VoiceChannelWarningSurfaces as closure_22 } from "GdmWarningMedium";
import jsxProd from "getEmbeddedActivityLocationChannelId";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_19;
let closure_20;
let closure_21;
let closure_23;
let closure_24;
let closure_25;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
  channelId = channelId.channelId;
  const tmp = callback3();
  const context = importAllResult.useContext(channelId(setFocused[23]));
  setFocused = context.setFocused;
  const items = [channelId, stream, setFocused];
  const callback = importAllResult.useCallback(() => {
    const voiceChannel = channelId(setFocused[24]).selectVoiceChannel(channelId);
    const obj = channelId(setFocused[24]);
    stream(setFocused[25]).watchStream(stream, { forceMultiple: true });
    const obj2 = stream(setFocused[25]);
    setFocused(stream(setFocused[26]).encodeStreamKey(stream));
  }, items);
  let obj = stream(setFocused[27]);
  const items1 = [closure_11];
  let _isNativeReflectConstruct = obj.useStateFromStores(items1, () => outer1_11.getChannel(channelId));
  let obj1 = stream(setFocused[27]);
  const items2 = [closure_12];
  const stateFromStores = obj1.useStateFromStores(items2, () => outer1_12.can(outer1_21.CONNECT, _isNativeReflectConstruct));
  obj = { style: tmp.activityInfoWrapper };
  obj = { variant: "text-sm/semibold", style: tmp.activityInfoHeader, color: "text-default" };
  const intl = stream(setFocused[30]).intl;
  obj1 = {};
  let username = voiceState.nick;
  if (null == username) {
    username = voiceState.user.username;
  }
  obj1.username = username;
  obj.children = intl.format(stream(setFocused[30]).t.I0mOAs, obj1);
  const items3 = [callback2(stream(setFocused[29]).Text, obj), ];
  let obj2 = { style: tmp.previewImageWrapper };
  const tmp5 = closure_24;
  const tmp6 = channelId(setFocused[28]);
  const tmp7 = callback2;
  obj2.children = callback2(stream(setFocused[31]).VoicePanelStreamPreview, { mode: context.mode, disabled: !stateFromStores, stream, onPress: callback });
  items3[1] = callback2(channelId(setFocused[28]), obj2);
  obj.children = items3;
  return tmp5(tmp6, obj);
}
function ActivityInfo(activity) {
  activity = activity.activity;
  const analyticsLocations = activity.analyticsLocations;
  const tmp = callback3();
  const items = [activity.applicationId];
  first = windowDimensions(analyticsLocations(first[32])(items), 1)[0];
  let obj1 = activity(first[33]);
  const embeddedActivityLocationChannelId = obj1.getEmbeddedActivityLocationChannelId(activity.location);
  const context = importAllResult.useContext(analyticsLocations(first[23]));
  const channelId = context.channelId;
  windowDimensions = context.windowDimensions;
  const tmp4 = windowDimensions(importAllResult.useState(() => activity(first[35]).getWindowDimensions().width - 2 * (outer1_18 + 16)), 2);
  const first1 = tmp4[0];
  let obj2 = activity(first[36]);
  const fn = function l() {
    return windowDimensions.get().width;
  };
  fn.__closure = { windowDimensions };
  fn.__workletHash = 16837592262556;
  fn.__initData = closure_28;
  const fn2 = function s(arg0, arg1) {
    if (arg0 !== arg1) {
      activity(first[36]).runOnJS(closure_5)(arg0 - 2 * (outer1_18 + 16));
      const obj = activity(first[36]);
    }
  };
  let obj = { runOnJS: activity(first[36]).runOnJS, setActivityPreviewWidth: tmp6, EDGE_GUTTER };
  fn2.__closure = obj;
  fn2.__workletHash = 1481130207412;
  fn2.__initData = closure_29;
  const animatedReaction = obj2.useAnimatedReaction(fn, fn2);
  let obj4 = activity(first[37]);
  obj = { userId: id.getId(), channelId, application: first };
  const embeddedActivityJoinability = obj4.useEmbeddedActivityJoinability(obj);
  const tmp9 = embeddedActivityJoinability === activity(first[37]).EmbeddedActivityJoinability.CAN_JOIN;
  let closure_7 = tmp9;
  const items1 = [activity.launchId, analyticsLocations, first, tmp9, channelId, embeddedActivityJoinability];
  const callback = importAllResult.useCallback(() => {
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
    obj2 = { variant: "text-sm/semibold", style: tmp.activityInfoHeader, color: "text-default" };
    const intl = activity(first[30]).intl;
    const obj3 = { n: arr2.length };
    obj2.children = intl.format(activity(first[30]).t["n/IJ6Y"], obj3);
    const items2 = [callback2(activity(first[29]).Text, obj2), ];
    obj4 = { activeOpacity: 0.7, onPress: callback, style: tmp.previewImageWrapper, accessible: false };
    const obj5 = { style: tmp.previewImage };
    const tmp13 = closure_24;
    const tmp16 = analyticsLocations(first[28]);
    const tmp19 = closure_24;
    const obj6 = { imageBackground: tmp11, aspectRatio: 1.7777777777777777 };
    obj5.children = callback2(analyticsLocations(first[41]), obj6);
    const items3 = [callback2(analyticsLocations(first[28]), obj5), ];
    const obj7 = { style: tmp.joinButtonWrapper };
    const tmp21 = analyticsLocations(first[28]);
    const tmp23 = callback2;
    const obj8 = { text: null, size: "sm", iconPosition: "start", variant: "primary-overlay" };
    const intl2 = activity(first[30]).intl;
    const obj9 = { name: first.name };
    obj8.text = intl2.formatToPlainString(activity(first[30]).t["YV/hE8"], obj9);
    const obj10 = { variant: "entity" };
    const obj11 = { uri: null, width: 20, height: 20 };
    const iconURL = first.getIconURL(20);
    let tmp28;
    if (null != iconURL) {
      tmp28 = iconURL;
    }
    obj11.uri = tmp28;
    obj10.source = obj11;
    obj8.icon = callback2(activity(first[42]).Button.Icon, obj10);
    obj8.onPress = callback;
    obj7.children = callback2(activity(first[42]).Button, obj8);
    items3[1] = tmp23(analyticsLocations(first[28]), obj7);
    obj4.children = items3;
    items2[1] = tmp19(activity(first[40]).PressableOpacity, obj4);
    obj1.children = items2;
    tmp13Result = tmp13(tmp16, obj1);
    const tmp24 = analyticsLocations(first[28]);
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
      let tmp3 = user;
      user = user.getUser(value);
      if (null != user) {
        let tmp5 = callback2;
        let tmp6 = require;
        let tmp7 = dependencyMap;
        obj = { user, channelId, guildId };
        let tmp8 = importDefault;
        let obj3 = importDefault(4319);
        obj.nick = obj3.getName(guildId, channelId, user);
        let arr = items.push(callback2(require(8904) /* VoiceBadges */.MemberRowItem, obj, value));
      }
      iter2 = tmp2();
      iter = iter2;
    } while (!iter2.done);
  }
  obj.children = items;
  return callback2(require(8904) /* VoiceBadges */.VoicePanelFormSection, obj);
}
function RoomMembers(arg0) {
  let blockedMembers;
  let ignoredMembers;
  let members;
  let streamingMembers;
  ({ members, streamingMembers, blockedMembers, ignoredMembers } = arg0);
  const context = importAllResult.useContext(first(10046));
  const channelId = context.channelId;
  const guildId = context.guildId;
  const tmp2 = callback(importAllResult.useState(20), 2);
  first = tmp2[0];
  const dependencyMap = tmp2[1];
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
      return outer1_23(outer1_37, { channelId, voiceState: tmp, stream: tmp2 }, tmp2.ownerId);
    }),
  ,
  ,

  ];
  let tmp11 = blockedMembers.size > 0;
  if (tmp11) {
    obj = {};
    const intl = channelId(1212).intl;
    const obj1 = { n: blockedMembers.size };
    obj.title = intl.formatToPlainString(channelId(1212).t.pGJ1Qy, obj1);
    obj.members = blockedMembers;
    obj.channelId = channelId;
    obj.guildId = guildId;
    tmp11 = callback2(RoomMembersSection, obj);
  }
  items[2] = tmp11;
  let tmp16 = ignoredMembers.size > 0;
  if (tmp16) {
    const obj2 = {};
    const intl2 = channelId(1212).intl;
    const obj3 = { n: ignoredMembers.size };
    obj2.title = intl2.formatToPlainString(channelId(1212).t["/pXOCN"], obj3);
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
      const intl4 = channelId(1212).intl;
      const obj5 = { n: members.length };
      let formatToPlainStringResult = intl4.formatToPlainString(channelId(1212).t.vloEU7, obj5);
    } else {
      const intl3 = channelId(1212).intl;
      const obj6 = { n: diff };
      formatToPlainStringResult = intl3.formatToPlainString(channelId(1212).t.R0h4pE, obj6);
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
          let tmp34 = channelId;
          let tmp35 = dependencyMap;
          let obj7 = { user: value.user, channelId, guildId };
          let tmp36 = first;
          let obj11 = first(4319);
          obj7.nick = obj11.getName(guildId, channelId, value.user);
          let arr = items1.push(callback2(channelId(8904).MemberRowItem, obj7, value.user.id));
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
      const intl5 = channelId(1212).intl;
      obj8.label = intl5.string(channelId(1212).t.F4MCUO);
      obj8.onPress = function onPress() {
        return callback(first + 20);
      };
      tmp38 = callback2(channelId(5165).TableRow, obj8);
    }
    items2[1] = tmp38;
    obj4.children = items2;
    tmp22Result = closure_24(channelId(8904).VoicePanelFormSection, obj4);
    const tmp22 = closure_24;
  }
  items[4] = tmp22Result;
  obj.children = items;
  return closure_24(closure_25, obj);
}
function PreJoinTransitioner(transitionState) {
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  let obj = Object.create(null);
  obj.transitionState = 0;
  obj.transitionCleanUp = 0;
  const merged = Object.assign(transitionState, obj);
  const context = preJoinContentSize.useContext(transitionCleanUp(windowDimensions[23]));
  windowDimensions = context.windowDimensions;
  const controlsSpecs = context.controlsSpecs;
  const safeArea = context.safeArea;
  preJoinContentSize = context.preJoinContentSize;
  const useReducedMotion = context.useReducedMotion;
  obj = transitionState(windowDimensions[36]);
  let fn = function o() {
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
        flag = outer1_0 === transitionState(windowDimensions[56]).TransitionStates.YEETED;
      }
      if (flag) {
        transitionState(windowDimensions[36]).runOnJS(outer1_1)();
        const obj = transitionState(windowDimensions[36]);
      }
    };
    obj = { transitionState, TransitionStates: transitionState(windowDimensions[56]).TransitionStates, runOnJS: transitionState(windowDimensions[36]).runOnJS, transitionCleanUp };
    fn.__closure = obj;
    fn.__workletHash = 2541522666097;
    fn.__initData = outer1_34;
    obj.translateY = obj4.withSpring(transitionState(windowDimensions[36]).interpolate(num, [0, 1], [0, 400]), outer1_17, "respect-motion-settings", fn);
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { windowDimensions, roundToNearestPixel: transitionCleanUp(windowDimensions[49]), controlsSpecs, safeArea, withSpring: transitionState(windowDimensions[55]).withSpring, transitionState, TransitionStates: transitionState(windowDimensions[56]).TransitionStates, interpolate: transitionState(windowDimensions[36]).interpolate, useReducedMotion, MODE_CHANGE_PHYSICS, runOnJS: transitionState(windowDimensions[36]).runOnJS, transitionCleanUp };
  fn.__closure = obj;
  fn.__workletHash = 16643118377748;
  fn.__initData = closure_33;
  let items = [preJoinContentSize];
  const animatedStyle = obj.useAnimatedStyle(fn);
  const callback = preJoinContentSize.useCallback((nativeEvent) => {
    const result = preJoinContentSize.set(transitionCleanUp(windowDimensions[49])(nativeEvent.nativeEvent.layout.height));
  }, items);
  const obj1 = { style: animatedStyle, collapsable: false };
  const tmp3 = callback3();
  let obj2 = { onLayout: callback, collapsable: false, style: tmp3.contentWrapper };
  const obj3 = {};
  const tmp7 = transitionCleanUp(windowDimensions[57]);
  const merged1 = Object.assign(merged);
  obj2.children = callback2(closure_32, obj3);
  obj1.children = callback2(transitionCleanUp(windowDimensions[28]), obj2);
  return callback2(tmp7, obj1);
}
function renderItem(arg0, arg1, transitionState, transitionCleanUp) {
  const merged = Object.assign(arg1);
  return callback2(PreJoinTransitioner, { transitionState, transitionCleanUp }, arg0);
}
({ AnalyticEvents: closure_19, AnalyticsSections: closure_20, Permissions: closure_21 } = ME);
({ jsx: closure_23, jsxs: closure_24, Fragment: closure_25 } = jsxProd);
let obj = {};
obj = { paddingTop: EDGE_GUTTER + require("t").BASE_VOICE_PANEL_HEADER_HEIGHT + EDGE_GUTTER, gap: 24, paddingBottom: 16 };
obj.contentWrapper = obj;
obj.channelInfoWrapper = { paddingHorizontal: 16 };
obj.subheading = { textAlign: "center", paddingTop: 16, paddingBottom: 16 };
_createForOfIteratorHelperLoose = { position: "relative", width: "100%", aspectRatio: 1.7777777777777777, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, overflow: "hidden", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BLACK };
obj.previewImageWrapper = _createForOfIteratorHelperLoose;
let obj2 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj2["opacity"] = 0.5;
obj.previewImage = obj2;
obj.activityInfoWrapper = { paddingHorizontal: 16 };
obj.activityInfoHeader = { marginBottom: 8 };
let obj3 = {};
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj3["display"] = "flex";
obj3["alignItems"] = "center";
obj3["justifyContent"] = "center";
obj.joinButtonWrapper = obj3;
obj.optInChannelsContainer = { marginHorizontal: 16 };
let obj4 = { display: "flex", flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8, padding: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, borderColor: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_WARNING, borderWidth: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_WARNING, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.blockedMemberWarning = obj4;
obj.consolePreJoinPadding = { height: 36 };
let closure_26 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_27 = importAllResult.memo((hasMembers) => {
  const tmp = callback3();
  let tmp2 = null;
  if (!hasMembers.hasMembers) {
    let obj = { style: tmp.channelInfoWrapper };
    obj = { variant: "text-sm/medium", color: "text-default", style: tmp.subheading };
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.children = intl.string(require(1212) /* getSystemLocale */.t.sS2J0G);
    obj.children = callback2(require(4126) /* Text */.Text, obj);
    tmp2 = callback2(importDefault(5515), obj);
    const tmp6 = importDefault(5515);
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
  obj.name = require(480) /* isThrottled */.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING;
  obj = { channel_id: channelId, blocked_user_ids: Array.from(blockedUserIds), warning_surface: constants2.PRE_JOIN_SHEET };
  obj.properties = obj;
  importDefault(8604)(obj);
  const size = ignoredUserIds.size;
  const size2 = blockedUserIds.size;
  const intl = require(1212) /* getSystemLocale */.intl;
  const stringResult = intl.string(require(1212) /* getSystemLocale */.t.CjrALd);
  if (size2 > 0) {
    if (size > 0) {
      const intl4 = require(1212) /* getSystemLocale */.intl;
      let stringResult1 = intl4.string(require(1212) /* getSystemLocale */.t.MpRfpC);
    }
    obj = { style: tmp.blockedMemberWarning };
    const obj1 = { color: "text-feedback-warning" };
    const items = [callback2(require(7577) /* CircleErrorIcon */.CircleErrorIcon, obj1), ];
    const obj2 = { variant: "text-sm/bold", color: "interactive-text-active" };
    const obj3 = { flexShrink: 1 };
    obj2.style = obj3;
    const items1 = [stringResult1, " ", ];
    let tmp19 = null;
    if (null != stringResult) {
      const obj4 = { variant: "heading-sm/semibold", children: stringResult };
      tmp19 = callback2(require(4126) /* Text */.Text, obj4);
    }
    items1[2] = tmp19;
    obj2.children = items1;
    items[1] = closure_24(require(4126) /* Text */.Text, obj2);
    obj.children = items;
    return closure_24(importDefault(5515), obj);
  }
  if (size > 0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const obj5 = { n: size };
    stringResult1 = intl3.format(require(1212) /* getSystemLocale */.t.u9trAZ, obj5);
  } else {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj6 = { n: size2 };
    stringResult1 = intl2.format(require(1212) /* getSystemLocale */.t["6X29zb"], obj6);
  }
});
let closure_31 = importAllResult.memo((channelId) => {
  channelId = channelId.channelId;
  let obj = channelId(566);
  const items = [closure_10, closure_7, closure_15, closure_13];
  const items1 = [channelId];
  let tmp2 = null;
  if (obj.useStateFromStores(items, () => {
    const id = outer1_10.getId();
    const voiceStateForSession = outer1_15.getVoiceStateForSession(id, outer1_7.getRemoteSessionId());
    const awaitingRemoteSessionInfo = outer1_7.getAwaitingRemoteSessionInfo();
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
        tmp9 = null != outer1_13.getSessionById(str);
      }
      tmp6 = tmp9;
    }
    return tmp6;
  }, items1)) {
    obj = { style: tmp.consolePreJoinPadding };
    tmp2 = callback2(importDefault(5515), obj);
  }
  return tmp2;
});
let closure_32 = importAllResult.memo(function VoicePanelPreJoinContentInner(streamingMembers) {
  let activities;
  let blockedMembers;
  let ignoredMembers;
  let members;
  ({ members, blockedMembers, ignoredMembers, activities } = streamingMembers);
  const context = importAllResult.useContext(guildId(analyticsLocations[23]));
  const channelId = context.channelId;
  guildId = context.guildId;
  let obj = channelId(analyticsLocations[27]);
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_11.getChannel(channelId));
  const tmp = callback3();
  const tmp4 = guildId(analyticsLocations[50])(stateFromStores);
  analyticsLocations = guildId(analyticsLocations[51])(guildId(analyticsLocations[52]).VOICE_PANEL_PRE_JOIN).analyticsLocations;
  const items1 = [channelId, guildId, analyticsLocations];
  const effect = importAllResult.useEffect(() => {
    let obj = guildId(analyticsLocations[53]);
    obj = { guild_id: guildId, channel_id: channelId, location_stack: analyticsLocations };
    obj.track(outer1_19.VIEW_VOICE_CHANNEL, obj);
  }, items1);
  obj = {};
  obj = { hasMembers: members.length > 0 };
  const items2 = [callback2(closure_27, obj), , , , ];
  let tmp9 = null;
  if (tmp4) {
    const obj1 = { style: tmp.optInChannelsContainer, channel: stateFromStores, analyticsSection: constants.CHANNEL };
    tmp9 = callback2(guildId(analyticsLocations[54]), obj1);
  }
  items2[1] = tmp9;
  items2[2] = activities.map((activity) => outer1_23(outer1_38, { activity, analyticsLocations }, activity.launchId));
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
const memoResult = importAllResult.memo(function VoicePanelPreJoinWrapper() {
  const context = importAllResult.useContext(guildId(10046));
  const channelId = context.channelId;
  guildId = context.guildId;
  const tmp2 = guildId(15766)(channelId);
  const dependencyMap = tmp2;
  let obj = channelId(566);
  let items = [closure_16, closure_8, closure_6, closure_9];
  let items1 = [tmp2, channelId, guildId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let iter3;
    if (!closure_2) {
      let tmp5;
      if (null != guildId) {
        tmp5 = guildId;
      }
      const voiceStatesForChannelAlt = outer1_16.getVoiceStatesForChannelAlt(channelId, tmp5);
      const blockedUsersForVoiceChannel = outer1_8.getBlockedUsersForVoiceChannel(channelId);
      const ignoredUsersForVoiceChannel = outer1_8.getIgnoredUsersForVoiceChannel(channelId);
      const items = [];
      const embeddedActivitiesForChannel = outer1_6.getEmbeddedActivitiesForChannel(channelId);
      const tmp14 = outer1_35(voiceStatesForChannelAlt);
      const iter = tmp14();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let value = iter2.value;
          if (value.voiceState.selfStream) {
            let tmp15 = outer1_9;
            let tmp16 = guildId;
            let streamForUser = outer1_9.getStreamForUser(value.user.id, guildId);
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
  }, items1, channelId(15888).areVoicePanelPreJoinContentPropsEqual);
  obj = { item: stateFromStores, renderItem };
  return callback2(channelId(4476).TransitionItem, obj);
});
let result = require("result").fileFinishedImporting("modules/voice_panel/native/prejoin/VoicePanelPreJoinContent.tsx");

export default memoResult;
