// Module ID: 16984
// Function ID: 16985
// Name: VoicePanelPreJoinContent
// Dependencies: [5, 32, 19, 17, 2044, 4853, 13276, 4858, 502, 2045, 1993, 4469, 4854, 1372, 4855, 4860, 11755, 11758, 1074, 13281, 4861, 21, 4836, 11759, 576, 11754, 504, 5046, 7841, 5723, 4978, 4888, 5901, 4832, 1115, 12612, 6589, 4458, 16973, 1479, 4566, 8825, 8824, 8933, 5435, 16971, 5281, 8230, 1249, 6028, 9131, 4988, 5917, 10456, 10966, 6583, 6603, 1241, 16918, 16940, 16985, 5280, 4540, 6494, 16861, 16987, 2]

// Module 16984 (VoicePanelPreJoinContent)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl6 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import native from "native" /* 4540 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import Text_Text from "Text/Text" /* 4832 */;
import Constants2 from "Constants" /* 4861 */;
import StreamKeyUtils from "StreamKeyUtils" /* 4888 */;
import StreamActionCreators from "StreamActionCreators" /* 4978 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4988 */;
import spring from "spring" /* 5280 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5723 */;
import NativeViewDefault from "NativeView" /* 5901 */;
import CircleErrorIcon from "CircleErrorIcon" /* 6028 */;
import StageChannelModalActionCreators from "StageChannelModalActionCreators" /* 7841 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8230 */;
import FormComponents from "FormComponents" /* 9131 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10456 */;
import VoicePanelConstants from "VoicePanelConstants" /* 11755 */;
import VoicePanelCardConstants from "VoicePanelCardConstants" /* 11758 */;
import calculateVoicePanelHeaderSpecs from "calculateVoicePanelHeaderSpecs" /* 11759 */;
import SharedSpaceWarningConstants from "SharedSpaceWarningConstants" /* 13281 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import GameConsoleStore from "GameConsoleStore" /* 4853 */;
import VoiceChannelBlockedUserStore from "VoiceChannelBlockedUserStore" /* 13276 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4858 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import SessionsStore from "SessionsStore" /* 4854 */;
import UserStore from "UserStore" /* 1372 */;
import VoiceStateStore from "VoiceStateStore" /* 4855 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4860 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let blockedUserIds, c0, dependencyMap, embeddedActivitiesForChannel, hasMembers;

let closure_20;
let closure_21;
let closure_22;
let closure_25;
let closure_26;
let closure_27;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
function StreamPreview(channelId) {
  let I0mOAs;
  let format;
  let items3;
  let obj6;
  let obj8;
  let stream;
  let tmp11Result;
  let voiceState;
  ({ voiceState, stream } = channelId);
  channelId = channelId.channelId;
  let setFocused;
  const tmp = closure_28();
  const context = react.useContext(channelId(setFocused[25]));
  setFocused = context.setFocused;
  const mode = context.mode;
  const obj = stream(setFocused[26]);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj3 = stream(setFocused[27]);
  const items1 = [stateFromStores, channelId, stream, setFocused];
  const shouldHideChannelContent = obj3.useShouldHideChannelContent(stateFromStores);
  const callback = react.useCallback(() => {
    let isGuildStageVoiceResult;
    if (stateFromStores != null) {
      isGuildStageVoiceResult = obj.isGuildStageVoice();
    }
    if (isGuildStageVoiceResult) {
      const obj5 = StageChannelModalActionCreators;
      obj5.connectAndOpen(stateFromStores);
    } else {
      const obj2 = SelectedChannelActionCreatorsDefault;
      const voiceChannel = obj2.selectVoiceChannel(channelId);
      const obj3 = StreamActionCreators;
      obj3.watchStream(stream, { forceMultiple: true });
      const obj4 = StreamKeyUtils;
      setFocused(obj4.encodeStreamKey(stream));
    }
  }, items1);
  let obj4 = stream(setFocused[26]);
  const items2 = [PermissionStore];
  let isGuildStageVoiceResult;
  const stateFromStores1 = obj4.useStateFromStores(items2, () => PermissionStore.can(constants.CONNECT, stateFromStores));
  if (stateFromStores != null) {
    isGuildStageVoiceResult = stateFromStores.isGuildStageVoice();
  }
  if (!isGuildStageVoiceResult) {
    let obj2 = { style: tmp.activityInfoWrapper, children: items3 };
    let obj5 = { variant: "text-sm/semibold", style: tmp.activityInfoHeader, color: "text-default", children: format(I0mOAs, obj6) };
    const tmp2Result = channelId(setFocused[32]);
    const Text = tmp5(tmp3[33]).Text;
    const intl = tmp5(tmp3[34]).intl;
    format = intl.format;
    let username = voiceState.nick;
    I0mOAs = tmp5(tmp3[34]).t.I0mOAs;
    const tmp11 = closure_26;
    if (username == null) {
      username = voiceState.user.username;
    }
    obj6 = { username };
    items3 = [tmp13(Text, obj5), ];
    const obj7 = { style: tmp.previewImageWrapper, children: closure_25(stream(setFocused[35]).VoicePanelStreamPreview, obj8) };
    obj8 = { mode, disabled: !stateFromStores1, stream, onPress: callback };
    const tmp2Result2 = channelId(setFocused[32]);
    items3[1] = closure_25(tmp2Result2, obj7);
    tmp11Result = tmp11(tmp2Result, obj2);
  } else {
    tmp11Result = null;
  }
  return tmp11Result;
}
function ActivityInfo(activity) {
  let Button;
  let Icon;
  let closure_5;
  let intl;
  let intl2;
  let items2;
  let items3;
  let obj11;
  let obj13;
  let obj14;
  let obj15;
  let obj8;
  activity = activity.activity;
  let analyticsLocations = activity.analyticsLocations;
  let application;
  let windowDimensions;
  react = undefined;
  let tmp = closure_28();
  const tmp2 = analyticsLocations;
  const items = [activity.applicationId];
  application = windowDimensions(analyticsLocations(application[36])(items), 1)[0];
  let obj2 = activity(application[37]);
  const embeddedActivityLocationChannelId = obj2.getEmbeddedActivityLocationChannelId(activity.location);
  const arr2 = analyticsLocations(application[38])(activity.applicationId, embeddedActivityLocationChannelId);
  const context = react.useContext(analyticsLocations(application[25]));
  const channelId = context.channelId;
  windowDimensions = context.windowDimensions;
  const tmp7 = windowDimensions(react.useState(() => {
    const obj = activity(first[39]);
    return obj.getWindowDimensions().width - 2 * (EDGE_GUTTER + 16);
  }), 2);
  react = tmp9;
  const first1 = tmp7[0];
  let obj3 = activity(application[40]);
  const fn = function u() {
    return windowDimensions.get().width;
  };
  fn.__closure = { windowDimensions };
  fn.__workletHash = 16837592262556;
  fn.__initData = __initData;
  const fn2 = function c(arg0, arg1) {
    if (arg0 !== arg1) {
      const obj = ReanimatedRexport;
      obj.runOnJS(closure_5)(arg0 - 2 * (EDGE_GUTTER + 16));
    }
  };
  let obj = { runOnJS: activity(application[40]).runOnJS, setActivityPreviewWidth: tmp9, EDGE_GUTTER };
  fn2.__closure = obj;
  fn2.__workletHash = 1481130207412;
  fn2.__initData = __initData2;
  const animatedReaction = obj3.useAnimatedReaction(fn, fn2);
  let obj5 = activity(application[41]);
  let obj4 = { userId: AuthenticationStore.getId(), channelId, application };
  const embeddedActivityJoinability = obj5.useEmbeddedActivityJoinability(obj4);
  const tmp12 = embeddedActivityJoinability === activity(application[41]).EmbeddedActivityJoinability.CAN_JOIN;
  let closure_7 = tmp12;
  const items1 = [activity.launchId, analyticsLocations, application, tmp12, channelId, embeddedActivityJoinability];
  const callback = react.useCallback(() => {
    let inputApplication;
    let obj = {
      embeddedActivityJoinability,
      handleCanJoin: function() {
        return closure_0(...arguments);
      }
    };
    const tmp = analyticsLocations(first[42]);
    let closure_0 = channelId(function*(arg0, value) {
      let v3;
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (0 === analyticsLocations) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              const tmp19 = closure_1_7;
              if (tmp19) {
                if (null != inputApplication) {
                  const obj6 = { channelId, applicationId: inputApplication.id, launchId: c0.launchId, inputApplication, analyticsLocations };
                  analyticsLocations = 1;
                  const obj3 = c0(application[42]);
                  c0 = 1;
                  const obj7 = { value: obj3.maybeJoinEmbeddedActivity(obj6), done: false };
                  return obj7;
                }
              } else {
                const obj2 = analyticsLocations(application[29]);
                const voiceChannel = obj2.selectVoiceChannel(channelId);
              }
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c0 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp15) {
          c0 = 3;
          throw tmp15;
        }
      }
    });
    tmp(obj);
  }, items1);
  let tmp16Result = null;
  if (null != application) {
    let obj6 = { style: tmp.activityInfoWrapper, children: items2 };
    let obj7 = { variant: "text-sm/semibold", style: tmp.activityInfoHeader, color: "text-default", children: intl.format(tmp4(tmp3[34]).t["n/IJ6Y"], obj8) };
    const tmp2Result = tmp2(application[32]);
    const Text = tmp4(tmp3[33]).Text;
    intl = tmp4(tmp3[34]).intl;
    obj8 = { n: arr2.length };
    items2 = [closure_25(Text, obj7), ];
    const obj9 = { activeOpacity: 0.7, onPress: callback, style: tmp.previewImageWrapper, accessible: false, children: items3 };
    const PressableOpacity = tmp4(tmp3[44]).PressableOpacity;
    const obj10 = { style: tmp.previewImage, children: closure_25(tmp2(application[45]), obj11) };
    obj11 = { imageBackground: tmp14, aspectRatio: 1.7777777777777777 };
    const tmp2Result3 = tmp2(application[32]);
    items3 = [closure_25(tmp2Result3, obj10), ];
    const obj12 = { style: tmp.joinButtonWrapper, children: closure_25(Button, obj13) };
    obj13 = { text: intl2.formatToPlainString(activity(application[34]).t["YV/hE8"], obj14), size: "sm", iconPosition: "start", variant: "primary-overlay", icon: closure_25(Icon, obj15), onPress: callback };
    const tmp2Result4 = tmp2(application[32]);
    Button = tmp4(tmp3[46]).Button;
    intl2 = tmp4(tmp3[34]).intl;
    obj14 = { name: application.name };
    Icon = tmp4(tmp3[46]).Button.Icon;
    const iconURL = application.getIconURL(20);
    obj15 = { variant: "entity", source: size };
    size = { uri: iconURL, width: 20, height: 20 };
    items3[1] = closure_25(tmp2Result4, obj12);
    items2[1] = closure_26(PressableOpacity, obj9);
    tmp16Result = tmp16(tmp2Result, obj6);
  }
  return tmp16Result;
}
function RoomMembersSection(title) {
  let channelId;
  let guildId;
  ({ members: require, channelId: importDefault, guildId: dependencyMap } = title);
  let obj = {
    title: title.title,
    hasIcons: true,
    children: (() => {
      let obj2;
      const items = [];
      const iter = require[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = nextResult;
        let user = UserStore.getUser(nextResult);
        let tmp6 = user;
        if (null != user) {
          let push = items.push;
          let obj = { user: tmp6, channelId: importDefault, guildId: dependencyMap, nick: obj2.getName(dependencyMap, importDefault, tmp6) };
          let MemberRowItem = FormComponents.MemberRowItem;
          obj2 = NicknameUtilsDefault;
          let arr = push(closure_25(MemberRowItem, obj, tmp3));
        }
        continue;
      }
      return items;
    })()
  };
  const VoicePanelFormSection = FormComponents.VoicePanelFormSection;
  return closure_25(VoicePanelFormSection, obj);
}
function RoomMembers(members) {
  let blockedMembers;
  let intl;
  let intl2;
  let intl5;
  let items1;
  let obj3;
  let obj5;
  let streamingMembers;
  members = members.members;
  ({ streamingMembers, blockedMembers } = members);
  const ignoredMembers = members.ignoredMembers;
  let first;
  let tmp = ignoredMembers;
  const context = first.useContext(blockedMembers(ignoredMembers[25]));
  const channelId = context.channelId;
  const guildId = context.guildId;
  let tmp3 = guildId(first.useState(20), 2);
  first = tmp3[0];
  let closure_6 = tmp3[1];
  const sum = blockedMembers.size + ignoredMembers.size;
  const diff = members.length - sum;
  let tmp7 = closure_26;
  let tmp9 = sum > 0;
  let tmp8 = closure_27;
  if (tmp9) {
    let tmp10 = closure_25;
    let tmp11 = closure_34;
    let obj = { channelId, blockedUserIds: blockedMembers, ignoredUserIds: ignoredMembers };
    tmp9 = closure_25(closure_34, obj);
  }
  const children = [
    tmp9,
    streamingMembers.map((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      const obj = { channelId, voiceState: tmp, stream: tmp2 };
      return closure_25(StreamPreview, obj, tmp2.ownerId);
    }),
  ,
  ,

  ];
  let tmp12 = blockedMembers.size > 0;
  if (tmp12) {
    let tmp14 = RoomMembersSection;
    let obj2 = { title: intl.formatToPlainString(members(tmp[34]).t.pGJ1Qy, obj3), members: blockedMembers, channelId, guildId };
    let tmp15 = members;
    intl = members(tmp[34]).intl;
    obj3 = { n: blockedMembers.size };
    tmp12 = closure_25(RoomMembersSection, obj2);
  }
  children[2] = tmp12;
  let tmp16 = ignoredMembers.size > 0;
  if (tmp16) {
    const obj4 = { title: intl2.formatToPlainString(members(tmp[34]).t["/pXOCN"], obj5), members: ignoredMembers, channelId, guildId };
    intl2 = members(tmp[34]).intl;
    obj5 = { n: ignoredMembers.size };
    tmp16 = closure_25(RoomMembersSection, obj4);
  }
  children[3] = tmp16;
  let tmp7Result = diff > 0;
  if (tmp7Result) {
    let formatToPlainStringResult;
    const VoicePanelFormSection = members(tmp[50]).VoicePanelFormSection;
    if (0 === sum) {
      const intl4 = tmp21(tmp[34]).intl;
      const obj6 = { n: members.length };
      formatToPlainStringResult = intl4.formatToPlainString(tmp21(tmp[34]).t.vloEU7, obj6);
    } else {
      const intl3 = tmp21(tmp[34]).intl;
      const obj7 = { n: diff };
      formatToPlainStringResult = intl3.formatToPlainString(tmp21(tmp[34]).t.R0h4pE, obj7);
    }
    const obj8 = { hasIcons: true, title: formatToPlainStringResult, children: items1 };
    items1 = [
      (() => {
          const items = [];
          for (const item10007 of members) {
            let tmp = item10007;
            if (items.length >= first) {
              obj.return();
              break;
            } else {
              let hasItem = blockedMembers.has(tmp.user.id);
              if (!hasItem) {
                hasItem = ignoredMembers.has(tmp.user.id);
              }
              if (!hasItem) {
                let push = items.push;
                let obj2 = { user: tmp.user, channelId, guildId, nick: obj3.getName(guildId, channelId, tmp.user), showGameActivity: true };
                let MemberRowItem = FormComponents.MemberRowItem;
                let obj3 = NicknameUtilsDefault;
                let arr = push(closure_25(MemberRowItem, obj2, tmp.user.id));
              }
              continue;
            }
            return items;
          }
        })(),

    ];
    let tmp23 = diff > first;
    if (tmp23) {
      const obj9 = {
        label: intl5.string(members(tmp[34]).t.F4MCUO),
        onPress() {
              return closure_6(first + 20);
            }
      };
      const TableRow = tmp21(tmp[52]).TableRow;
      intl5 = tmp21(tmp[34]).intl;
      tmp23 = closure_25(TableRow, obj9);
    }
    items1[1] = tmp23;
    tmp7Result = tmp7(VoicePanelFormSection, obj8);
  }
  children[4] = tmp7Result;
  return tmp7(tmp8, { children });
}
function PreJoinTransitioner(transitionState) {
  let obj4;
  let obj5;
  let tmp7;
  transitionState = transitionState.transitionState;
  const transitionCleanUp = transitionState.transitionCleanUp;
  const merged = Object.assign(transitionState, Object.assign({ transitionState: 0, transitionCleanUp: 0 }));
  let windowDimensions;
  let preJoinContentSize;
  const tmp2 = closure_28();
  const context = preJoinContentSize.useContext(transitionCleanUp(windowDimensions[25]));
  windowDimensions = context.windowDimensions;
  const controlsSpecs = context.controlsSpecs;
  const safeArea = context.safeArea;
  preJoinContentSize = context.preJoinContentSize;
  const useReducedMotion = context.useReducedMotion;
  let obj = transitionState(windowDimensions[40]);
  let fn = function l() {
    let fn;
    let interpolateResult;
    let items;
    let num2;
    let sum;
    let withSpring;
    const height = windowDimensions.get().height;
    let obj = { paddingBottom: sum + safeArea.get().bottom, opacity: withSpring(num2), transform: items };
    const diff = height - roundToNearestPixelDefault(0.8 * height);
    sum = diff + controlsSpecs.get().height;
    withSpring = spring.withSpring;
    let num = 1;
    num2 = 1;
    if (transitionState === native.TransitionStates.YEETED) {
      num2 = 0;
    }
    const withSpring2 = tmp4(5280).withSpring;
    spring;
    const interpolate = tmp4(4566).interpolate;
    ReanimatedRexport;
    if (useReducedMotion.get()) {
      num = 0;
    }
    const obj2 = { translateY: withSpring2(interpolateResult, MODE_CHANGE_PHYSICS, "respect-motion-settings", fn) };
    fn = function o() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      if (flag) {
        flag = closure_1_0 === transitionState(windowDimensions[62]).TransitionStates.YEETED;
      }
      if (flag) {
        const obj = transitionState(windowDimensions[40]);
        obj.runOnJS(transitionCleanUp)();
      }
    };
    interpolateResult = interpolate(num, [0, 1], [0, 400]);
    fn.__closure = { transitionState, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, transitionCleanUp };
    fn.__workletHash = 2541522666097;
    fn.__initData = __initData;
    ({ transitionState, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, transitionCleanUp });
    items = [obj2];
    return obj;
  };
  let obj2 = { windowDimensions, roundToNearestPixel: transitionCleanUp(windowDimensions[53]), controlsSpecs, safeArea, withSpring: transitionState(windowDimensions[61]).withSpring, transitionState, TransitionStates: transitionState(windowDimensions[62]).TransitionStates, interpolate: transitionState(windowDimensions[40]).interpolate, useReducedMotion, MODE_CHANGE_PHYSICS, runOnJS: transitionState(windowDimensions[40]).runOnJS, transitionCleanUp };
  fn.__closure = obj2;
  fn.__workletHash = 16643118377748;
  fn.__initData = __initData3;
  let items = [preJoinContentSize];
  const animatedStyle = obj.useAnimatedStyle(fn);
  const callback = preJoinContentSize.useCallback((nativeEvent) => {
    const result = preJoinContentSize.set(roundToNearestPixelDefault(nativeEvent.nativeEvent.layout.height));
  }, items);
  const obj3 = { style: animatedStyle, collapsable: false, children: closure_25(tmp7, obj4) };
  const tmp6 = transitionCleanUp(windowDimensions[63]);
  obj4 = { onLayout: callback, collapsable: false, style: tmp2.contentWrapper, children: closure_25(closure_38, obj5) };
  obj5 = {};
  tmp7 = transitionCleanUp(windowDimensions[32]);
  const merged1 = Object.assign(merged);
  return closure_25(tmp6, obj3);
}
function renderItem(arg0, arg1, transitionState, transitionCleanUp) {
  const obj = { transitionState, transitionCleanUp };
  const merged = Object.assign(arg1);
  return closure_25(PreJoinTransitioner, obj, arg0);
}
let react = react_mod;
const StyleSheet = react_native.StyleSheet;
const MODE_CHANGE_PHYSICS = VoicePanelConstants.MODE_CHANGE_PHYSICS;
const EDGE_GUTTER = VoicePanelCardConstants.EDGE_GUTTER;
({ AnalyticEvents: closure_20, AnalyticsSections: closure_21, Permissions: closure_22 } = Constants);
const constants4 = SharedSpaceWarningConstants.VoiceChannelWarningSurfaces;
const Features = Constants2.Features;
({ jsx: closure_25, jsxs: closure_26, Fragment: closure_27 } = Fragment);
let createStyles = createStyles_mod;
let obj = { contentWrapper: obj2, channelInfoWrapper: { paddingHorizontal: 16 }, subheading: { textAlign: "center", paddingTop: 16, paddingBottom: 16 }, previewImageWrapper: obj3, previewImage: obj4, activityInfoWrapper: { paddingHorizontal: 16 }, activityInfoHeader: { marginBottom: 8 }, joinButtonWrapper: obj5, optInChannelsContainer: { marginHorizontal: 16 }, blockedMemberWarning: obj6, consolePreJoinPadding: { height: 36 } };
obj2 = { paddingTop: EDGE_GUTTER + calculateVoicePanelHeaderSpecs.BASE_VOICE_PANEL_HEADER_HEIGHT + EDGE_GUTTER, gap: 24, paddingBottom: 16 };
createStyles = createStyles.createStyles;
obj3 = { position: "relative", width: "100%", aspectRatio: 1.7777777777777777, borderRadius: nativeDefault.radii.lg, overflow: "hidden", justifyContent: "center", backgroundColor: nativeDefault.colors.BLACK };
obj4 = { opacity: 0.5 };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj5 = { display: "flex", alignItems: "center", justifyContent: "center" };
let merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj6 = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xs, borderColor: nativeDefault.colors.ICON_FEEDBACK_WARNING, borderWidth: 1, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, marginHorizontal: nativeDefault.space.PX_16 };
let closure_28 = createStyles(obj);
let closure_30 = react.memo((hasMembers) => {
  let Text;
  let intl;
  let obj2;
  hasMembers = hasMembers.hasMembers;
  const tmp = closure_28();
  let tmp2 = null;
  if (!hasMembers) {
    const obj = { style: tmp.channelInfoWrapper, children: closure_25(Text, obj2) };
    obj2 = { variant: "text-sm/medium", color: "text-default", style: tmp.subheading, children: intl.string(intl6.t.sS2J0G) };
    const tmp6 = NativeViewDefault;
    Text = Text_Text.Text;
    intl = intl6.intl;
    tmp2 = closure_25(tmp6, obj);
  }
  return tmp2;
});
const __initData = { code: "function VoicePanelPreJoinContentTsx1(){const{windowDimensions}=this.__closure;return windowDimensions.get().width;}" };
const __initData2 = { code: "function VoicePanelPreJoinContentTsx2(width,previous){const{runOnJS,setActivityPreviewWidth,EDGE_GUTTER}=this.__closure;if(width===previous)return;runOnJS(setActivityPreviewWidth)(width-(EDGE_GUTTER+16)*2);}" };
let closure_34 = react.memo((blockedUserIds) => {
  let channelId;
  let ignoredUserIds;
  let items;
  let items1;
  let stringResult1;
  blockedUserIds = blockedUserIds.blockedUserIds;
  ({ channelId, ignoredUserIds } = blockedUserIds);
  const obj = { name: discord_common_AnalyticsUtils.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING, properties: { channel_id: channelId, blocked_user_ids: Array.from(blockedUserIds), warning_surface: constants4.PRE_JOIN_SHEET } };
  const tmp = closure_28();
  const tmp4 = useTrackImpressionDefault;
  ({ channel_id: channelId, blocked_user_ids: Array.from(blockedUserIds), warning_surface: constants4.PRE_JOIN_SHEET });
  tmp4(obj);
  size = ignoredUserIds.size;
  const size2 = blockedUserIds.size;
  const intl = intl6.intl;
  const stringResult = intl.string(intl6.t.CjrALd);
  if (size2 > 0) {
    if (size > 0) {
      const intl4 = tmp5(1115).intl;
      stringResult1 = intl4.string(tmp5(1115).t.MpRfpC);
    }
    const obj3 = { style: tmp.blockedMemberWarning, children: items };
    items = [, ];
    const tmp2Result = NativeViewDefault;
    items[0] = closure_25(CircleErrorIcon.CircleErrorIcon, { color: "text-feedback-warning" });
    const obj4 = { variant: "text-sm/bold", color: "interactive-text-active", style: { flexShrink: 1 }, children: items1 };
    items1 = [stringResult1, " ", ];
    let tmp11Result = null;
    const Text = tmp5(4832).Text;
    const tmp11 = closure_25;
    if (null != stringResult) {
      const obj5 = { variant: "heading-sm/semibold", children: stringResult };
      tmp11Result = tmp11(tmp5(4832).Text, obj5);
    }
    items1[2] = tmp11Result;
    items[1] = prioritySpeakerDucking(Text, obj4);
    return prioritySpeakerDucking(tmp2Result, obj3);
  }
  if (size > 0) {
    const intl3 = tmp5(1115).intl;
    const obj6 = { n: size };
    stringResult1 = intl3.format(tmp5(1115).t.u9trAZ, obj6);
  } else {
    const intl2 = tmp5(1115).intl;
    const obj7 = { n: size2 };
    stringResult1 = intl2.format(tmp5(1115).t["6X29zb"], obj7);
  }
});
let closure_37 = react.memo((channelId) => {
  channelId = channelId.channelId;
  const tmp = closure_28();
  let obj = channelId(504);
  const items = [AuthenticationStore, GameConsoleStore, VoiceStateStore, SessionsStore];
  const items1 = [channelId];
  let tmp3 = null;
  if (obj.useStateFromStores(items, () => {
    const id = AuthenticationStore.getId();
    const voiceStateForSession = VoiceStateStore.getVoiceStateForSession(id, GameConsoleStore.getRemoteSessionId());
    const awaitingRemoteSessionInfo = GameConsoleStore.getAwaitingRemoteSessionInfo();
    channelId = undefined;
    if (awaitingRemoteSessionInfo != null) {
      channelId = awaitingRemoteSessionInfo.channelId;
    }
    let tmp6 = channelId === channelId;
    if (!tmp6) {
      let channelId1;
      if (voiceStateForSession != null) {
        channelId1 = voiceStateForSession.channelId;
      }
      let tmp8 = channelId1 === tmp5;
      if (tmp8) {
        let str;
        const getSessionById = SessionsStore.getSessionById;
        if (voiceStateForSession != null) {
          str = voiceStateForSession.sessionId;
        }
        if (str == null) {
          str = "";
        }
        tmp8 = null != getSessionById(str);
      }
      tmp6 = tmp8;
    }
    return tmp6;
  }, items1)) {
    const tmp5 = importDefault;
    const obj2 = { style: tmp.consolePreJoinPadding };
    tmp3 = closure_25(NativeViewDefault, obj2);
  }
  return tmp3;
});
let closure_38 = react.memo(function VoicePanelPreJoinContentInner(members) {
  members = members.members;
  const blockedMembers = members.blockedMembers;
  const ignoredMembers = members.ignoredMembers;
  const activities = members.activities;
  let analyticsLocations;
  const streamingMembers = members.streamingMembers;
  let tmp2 = blockedMembers;
  const tmp = closure_28();
  const context = analyticsLocations.useContext(blockedMembers(ignoredMembers[25]));
  const channelId = context.channelId;
  const guildId = context.guildId;
  let obj = members(ignoredMembers[26]);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const tmp6 = blockedMembers(ignoredMembers[54])(stateFromStores);
  const tmp7 = blockedMembers(ignoredMembers[55]);
  analyticsLocations = tmp7(blockedMembers(ignoredMembers[56]).VOICE_PANEL_PRE_JOIN).analyticsLocations;
  const items1 = [channelId, guildId, analyticsLocations];
  const effect = analyticsLocations.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { guild_id: guildId, channel_id: channelId, location_stack: analyticsLocations };
    obj.track(constants.VIEW_VOICE_CHANNEL, obj2);
  }, items1);
  const items2 = [members, blockedMembers, ignoredMembers];
  const memo = analyticsLocations.useMemo(() => members.filter((user) => {
    const hasItem = set.has(user.user.id);
    const tmp2 = !hasItem && !set2.has(user.user.id);
    return tmp2;
  }), items2);
  const tmp10 = blockedMembers(ignoredMembers[58])();
  let closure_6 = tmp10;
  const items3 = [tmp10];
  const effect1 = analyticsLocations.useEffect(() => {
    closure_6.lock();
    return () => {
      closure_1_6.unlock();
    };
  }, items3);
  let obj2 = { hasMembers: members.length > 0 };
  const items4 = [closure_25(closure_30, obj2), , , , , ];
  let tmp14Result = null;
  const tmp12 = closure_26;
  const tmp13 = closure_27;
  if (tmp6) {
    const obj3 = { style: tmp.optInChannelsContainer, channel: stateFromStores, analyticsSection: constants2.CHANNEL };
    tmp14Result = tmp14(tmp2(tmp3[59]), obj3);
  }
  items4[1] = tmp14Result;
  items4[2] = activities.map((activity) => {
    const obj = { activity, analyticsLocations };
    return closure_25(ActivityInfo, obj, activity.launchId);
  });
  let tmp14Result3 = members.length > 0 || blockedMembers.size > 0 || ignoredMembers.size > 0;
  if (tmp14Result3) {
    const obj4 = { members, streamingMembers, blockedMembers, ignoredMembers };
    tmp14Result3 = tmp14(RoomMembers, obj4);
  }
  items4[3] = tmp14Result3;
  let tmp14Result4 = null != guildId;
  if (tmp14Result4) {
    const obj5 = { members: memo, guildId };
    tmp14Result4 = tmp14(tmp2(tmp3[60]), obj5);
  }
  const obj6 = { children: items4 };
  items4[4] = tmp14Result4;
  items4[5] = closure_25(closure_37, { channelId });
  return tmp12(tmp13, obj6);
});
const __initData3 = { code: "function VoicePanelPreJoinContentTsx3(){const{windowDimensions,roundToNearestPixel,controlsSpecs,safeArea,withSpring,transitionState,TransitionStates,interpolate,useReducedMotion,MODE_CHANGE_PHYSICS,runOnJS,transitionCleanUp}=this.__closure;const{height:windowHeight}=windowDimensions.get();return{paddingBottom:windowHeight-roundToNearestPixel(windowHeight*0.8)+controlsSpecs.get().height+safeArea.get().bottom,opacity:withSpring(transitionState===TransitionStates.YEETED?0:1),transform:[{translateY:withSpring(interpolate(!useReducedMotion.get()&&transitionState===TransitionStates.YEETED?1:0,[0,1],[0,400]),MODE_CHANGE_PHYSICS,'respect-motion-settings',function(finished=false){finished&&transitionState===TransitionStates.YEETED&&runOnJS(transitionCleanUp)();})}]};}" };
let closure_40 = { code: "function VoicePanelPreJoinContentTsx4(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;finished&&transitionState===TransitionStates.YEETED&&runOnJS(transitionCleanUp)();}" };
const memoResult = react.memo(function VoicePanelPreJoinWrapper() {
  let closure_2;
  let guildId;
  const context = react.useContext(guildId(11754));
  const channelId = context.channelId;
  guildId = context.guildId;
  const tmp2 = guildId(16861)(channelId);
  dependencyMap = tmp2;
  let obj = channelId(504);
  let items = [SortedVoiceStateStore, VoiceChannelBlockedUserStore, EmbeddedActivitiesStore, MediaEngineStore, ApplicationStreamingStore];
  let items1 = [tmp2, channelId, guildId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const tmp = closure_2;
    if (!tmp) {
      const getVoiceStatesForChannelAlt = SortedVoiceStateStore.getVoiceStatesForChannelAlt;
      const voiceStatesForChannelAlt = getVoiceStatesForChannelAlt(tmp3, guildId);
      let tmp7 = authStore;
      const blockedUsersForVoiceChannel = authStore.getBlockedUsersForVoiceChannel(tmp3);
      let tmp10 = embeddedActivitiesForChannel;
      const ignoredUsersForVoiceChannel = authStore.getIgnoredUsersForVoiceChannel(tmp3);
      embeddedActivitiesForChannel = embeddedActivitiesForChannel.getEmbeddedActivitiesForChannel(tmp3);
      const obj = {
        members: voiceStatesForChannelAlt,
        activities: embeddedActivitiesForChannel,
        streamingMembers: (() => {
            const items = [];
            if (MediaEngineStore.supports(Features.VIDEO)) {
              const iter = voiceStatesForChannelAlt[Symbol.iterator]();
              const nextResult = iter.next();
              while (iter !== undefined) {
                let tmp7 = nextResult;
                if (nextResult.voiceState.selfStream) {
                  let streamForUser = ApplicationStreamingStore.getStreamForUser(tmp7.user.id, guildId);
                  if (null != streamForUser) {
                    let items1 = [tmp7, ];
                    items1[1] = tmp12;
                    let arr = items.push(items1);
                  }
                }
                continue;
              }
              return items;
            } else {
              return items;
            }
          })(),
        blockedMembers: blockedUsersForVoiceChannel,
        ignoredMembers: ignoredUsersForVoiceChannel
      };
      return obj;
    }
  }, items1, channelId(16987).areVoicePanelPreJoinContentPropsEqual);
  const obj2 = { item: stateFromStores, renderItem };
  return closure_25(channelId(4540).TransitionItem, obj2);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/voice_panel/native/prejoin/VoicePanelPreJoinContent.tsx");

export default memoResult;
