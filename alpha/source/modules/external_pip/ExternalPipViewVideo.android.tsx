// Module ID: 18271
// Function ID: 18272
// Name: ExternalPipViewVideo
// Dependencies: [32, 19, 17, 4821, 1392, 21, 4966, 587, 558, 576, 5668, 1128, 5216, 504, 6761, 11371, 18272, 5240, 1202, 5819, 5234, 18273, 11364, 18274, 5804, 2]

// Module 18271 (ExternalPipViewVideo)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1128 */;
import Text_Text from "Text/Text" /* 5216 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5668 */;
import ExternalPipDefault from "ExternalPip" /* 5804 */;
import VideoActionCreators from "VideoActionCreators" /* 18273 */;
import useExternalPipParticipantDefault from "useExternalPipParticipant" /* 18274 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import UserStore from "UserStore" /* 1392 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4966 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, importDefault, updateVideoSizeResult;

let StyleSheet;
let closure_12;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let unpackModuleId;
({ ActivityIndicator: hasOwnProperty, StyleSheet } = react_native);
({ View: metroImportDefault, PixelRatio: metroImportAll } = react_native);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, video: obj3, videoUnavailableWrap: obj4, videoUnavailableSpinner: obj5, unavailable: obj6, unavailableText: obj7, user: obj8 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { margin: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.sm, justifyContent: "center", alignContent: "center", flexDirection: "row", alignItems: "center", flexWrap: "wrap", flex: 1 };
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj5 = { marginTop: nativeDefault.space.PX_16 };
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_8, margin: nativeDefault.space.PX_8, justifyContent: "center", alignContent: "center", alignItems: "center", flexDirection: "row", flexWrap: "wrap", flex: 1 };
obj7 = { marginLeft: nativeDefault.space.PX_4, textAlign: "center" };
obj8 = { alignItems: "center", justifyContent: "center" };
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
let closure_14 = createStyles(obj);
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function useStreamReady(arg0, arg1) {
  let closure_129_4;
  let closure_3;
  let first;
  let tmp5;
  let tmp6;
  let closure_0 = arg0;
  const obj = react2;
  const cResult = obj.c(10);
  let num = 300;
  if (undefined !== arg1) {
    num = arg1;
  }
  [first, closure_3] = react.useState(undefined);
  [tmp5, closure_129_4] = _slicedToArray(react.useState(false), 2);
  const obj2 = react;
  const tmp4 = _slicedToArray(react.useState(false), 2);
  if (cResult[0] !== arg0) {
    const fn = function s() {
      return closure_3(closure_0);
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === first) {
    let tmp7;
    let tmp8;
    if (cResult[3] === num) {
      tmp7 = cResult[4];
      tmp8 = cResult[5];
    }
    const effect = obj2.useEffect(tmp7, tmp8);
    if (cResult[6] === tmp5) {
      if (cResult[7] === first) {
        let tmp10;
        if (cResult[8] === tmp6) {
          tmp10 = cResult[9];
        }
        return tmp10;
      }
    }
    const obj3 = { streamReady: first, streamReadLongTime: tmp5, streamReadyCallback: tmp6 };
    cResult[6] = tmp5;
    cResult[7] = first;
    cResult[8] = tmp6;
    cResult[9] = obj3;
    tmp10 = obj3;
  }
  const fn2 = function x() {
    if (null == first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_1_4(true);
      }, num);
      return () => {
        clearTimeout(closure_0);
      };
    } else {
      closure_4(false);
    }
  };
  const items = [first, num];
  cResult[2] = first;
  cResult[3] = num;
  cResult[4] = fn2;
  cResult[5] = items;
  tmp8 = items;
  tmp7 = fn2;
}) : (function useStreamReady(arg0) {
  let closure_3;
  let closure_4;
  let streamReadLongTime;
  let streamReady;
  let closure_0 = arg0;
  let num = arg1;
  if (arg1 === undefined) {
    num = 300;
  }
  streamReady = undefined;
  closure_3 = undefined;
  closure_4 = undefined;
  [streamReady, closure_3] = react.useState(undefined);
  [streamReadLongTime, closure_4] = react.useState(false);
  const items = [arg0];
  const items1 = [streamReady, num];
  const streamReadyCallback = react.useCallback(() => closure_3(closure_0), items);
  const effect = react.useEffect(() => {
    if (null == streamReady) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_1_4(true);
      }, num);
      return () => {
        clearTimeout(closure_0);
      };
    } else {
      closure_4(false);
    }
  }, items1);
  return { streamReady, streamReadLongTime, streamReadyCallback };
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExternalPipViewVideoUnavailable() {
  let first;
  let items;
  let tmp10;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(7);
  const tmp4 = closure_14();
  const unavailable = tmp4.unavailable;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = unpackModuleId(CircleInformationIcon.CircleInformationIcon, {});
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  const unavailableText = tmp4.unavailableText;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1128).intl;
    const stringResult = intl.string(intl2.t.Nzo5nz);
    cResult[1] = stringResult;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== tmp4.unavailableText) {
    const obj2 = { variant: "text-md/semibold", style: unavailableText, lineClamp: 1, children: tmp8 };
    const tmp12 = unpackModuleId(Text_Text.Text, obj2);
    cResult[2] = tmp4.unavailableText;
    cResult[3] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === tmp4.unavailable) {
    let tmp13;
    if (cResult[5] === tmp10) {
      tmp13 = cResult[6];
    }
    return tmp13;
  }
  const obj3 = { style: unavailable, children: items };
  items = [first, tmp10];
  const tmp14 = authStore2(metroImportDefault, obj3);
  cResult[4] = tmp4.unavailable;
  cResult[5] = tmp10;
  cResult[6] = tmp14;
  tmp13 = tmp14;
}) : (function ExternalPipViewVideoUnavailable() {
  let intl;
  let items;
  const tmp = closure_14();
  const obj = { style: tmp.unavailable, children: items };
  items = [unpackModuleId(CircleInformationIcon.CircleInformationIcon, {}), ];
  const obj2 = { variant: "text-md/semibold", style: tmp.unavailableText, lineClamp: 1, children: intl.string(intl2.t.Nzo5nz) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items[1] = unpackModuleId(Text, obj2);
  return authStore2(metroImportDefault, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExternalPipViewVideoUser(userId) {
  let first;
  let obj3;
  let tmp10;
  let tmp7;
  let tmp8;
  const obj = userId(576);
  const cResult = obj.c(33);
  userId = userId.userId;
  const channelId = userId.channelId;
  closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function l() {
      return UserStore.getUser(userId);
    };
    cResult[1] = userId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = userId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== channelId) {
    class R {
      constructor() {
        const channel = ChannelStore.getChannel(channelId);
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        return guild_id;
      }
    }
    cResult[4] = channelId;
    cResult[5] = R;
    tmp10 = R;
  } else {
    class R {
      constructor() {
        const channel = ChannelStore.getChannel(channelId);
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        return guild_id;
      }
    }
  }
  const tmpResult4 = userId(504);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp8, tmp10);
  const tmpResult5 = userId(6761);
  const avatarDecoration = tmpResult5.useAvatarDecoration(stateFromStores, stateFromStores1);
  if (cResult[6] === stateFromStores1) {
    class R {
      constructor() {
        const channel = ChannelStore.getChannel(channelId);
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        return guild_id;
      }
    }
    const tmpResult6 = userId(11371);
    const avatarSpeakingColor = tmpResult6.useAvatarSpeakingColor(obj3);
    if (cResult[9] === stateFromStores1) {
      class R {
        constructor() {
          const channel = ChannelStore.getChannel(channelId);
          let guild_id;
          if (channel != null) {
            guild_id = channel.guild_id;
          }
          return guild_id;
        }
      }
      if (cResult[12] === stateFromStores1) {
        class R {
          constructor() {
            const channel = ChannelStore.getChannel(channelId);
            let guild_id;
            if (channel != null) {
              guild_id = channel.guild_id;
            }
            return guild_id;
          }
        }
      }
      const obj2 = { userId, guildId: stateFromStores1, avatarURI: tmp14, location: "ExternalPipViewVideo-native" };
      cResult[12] = stateFromStores1;
      cResult[13] = tmp14;
      cResult[14] = userId;
      cResult[15] = obj2;
    }
    let avatarURL;
    if (stateFromStores != null) {
      class R {
        constructor() {
          const channel = ChannelStore.getChannel(channelId);
          let guild_id;
          if (channel != null) {
            guild_id = channel.guild_id;
          }
          return guild_id;
        }
      }
      avatarURL = stateFromStores.getAvatarURL(stateFromStores1, 80, false);
    }
    cResult[9] = stateFromStores1;
    cResult[10] = stateFromStores;
    cResult[11] = avatarURL;
  }
  obj3 = { userId, guildId: stateFromStores1 };
  cResult[6] = stateFromStores1;
  cResult[7] = userId;
  cResult[8] = obj3;
}) : (function ExternalPipViewVideoUser(userId) {
  let avatarURL;
  let backgroundColor;
  let gradientStops;
  let items3;
  let user;
  userId = userId.userId;
  const channelId = userId.channelId;
  backgroundColor = undefined;
  const speaking = userId.speaking;
  const tmp = closure_14();
  dependencyMap = tmp;
  let obj = userId(504);
  let items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(userId));
  const items1 = [ChannelStore];
  const obj3 = userId(504);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    const channel = ChannelStore.getChannel(channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  });
  const obj4 = userId(6761);
  const avatarDecoration = obj4.useAvatarDecoration(stateFromStores, stateFromStores1);
  const obj5 = userId(11371);
  const avatarSpeakingColor = obj5.useAvatarSpeakingColor({ userId, guildId: stateFromStores1 });
  const obj2 = { userId, guildId: stateFromStores1, avatarURI: avatarURL, location: "ExternalPipViewVideo-native" };
  avatarURL = undefined;
  const tmp8 = channelId(18272);
  const tmp7 = channelId;
  if (stateFromStores != null) {
    avatarURL = stateFromStores.getAvatarURL(stateFromStores1, 80, false);
  }
  ({ gradientStops, backgroundColor } = tmp8(obj2));
  const items2 = [tmp.user, backgroundColor];
  tmp8(obj2);
  let tmp13 = null;
  const obj6 = {
    style: react.useMemo(() => {
      const items = [user.user, ];
      const obj = { backgroundColor };
      items[1] = obj;
      return items;
    }, items2),
    children: items3
  };
  const tmp11 = closure_12;
  const tmp12 = closure_7;
  if (null != gradientStops) {
    const obj7 = { colors: gradientStops, start, end, style: StyleSheet.absoluteFill, pointerEvents: "none" };
    tmp13 = closure_11(tmp7(5240), obj7);
  }
  items3 = [tmp13, ];
  let tmp18 = null;
  if (null != stateFromStores) {
    const obj8 = { user: stateFromStores, avatarDecoration, guildId: stateFromStores1, size: userId(1202).AvatarSizes.XXLARGE, speaking, speakingColor: avatarSpeakingColor };
    const Avatar = tmp2(1202).Avatar;
    tmp18 = closure_11(Avatar, obj8);
  }
  items3[1] = tmp18;
  return tmp11(tmp12, obj6);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExternalPipViewVideoStream(streamId) {
  let closure_1;
  let first;
  let streamReadLongTime;
  let streamReady;
  let streamReadyCallback;
  let tmp8;
  const tmp = streamId;
  let obj = streamId(576);
  const cResult = obj.c(23);
  streamId = streamId.streamId;
  const userId = streamId.userId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "ExternalPipViewVideoStream" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmpResult = tmp(5819);
  const surfaceDirectRendererExperiment = tmpResult.useSurfaceDirectRendererExperiment(userId, first);
  ({ streamReady, streamReadLongTime, streamReadyCallback } = closure_17(streamId));
  closure_17(streamId);
  const tmp7 = closure_14();
  let num2 = 1;
  if (null == streamReady) {
    num2 = 0;
  }
  if (cResult[1] !== num2) {
    const obj3 = { opacity: num2 };
    cResult[1] = num2;
    cResult[2] = obj3;
    tmp8 = obj3;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === tmp7.video) {
    let tmp9;
    if (cResult[4] === tmp8) {
      tmp9 = cResult[5];
    }
    const tmpResult2 = tmp(5234);
    const token = tmpResult2.useToken(nativeDefault.colors.TEXT_FEEDBACK_INFO);
    const tmp10 = importDefault;
    importDefault = closure_8.get();
    if (cResult[6] !== streamId) {
      class U {
        constructor(arg0) {
          if (null != streamId) {
            tmp2 = streamId;
            tmp3 = closure_0;
            tmp4 = closure_2;
            ({ width, height } = streamId.nativeEvent.layout);
            obj = closure_0(closure_2[21]);
            size = { width: null, height: null };
            tmp5 = closure_1;
            size.width = width * closure_1;
            size.height = height * closure_1;
            num = 1;
            updateVideoSizeResult = obj.updateVideoSize(tmp, size, 1);
          }
          return;
        }
      }
      cResult[6] = streamId;
      cResult[7] = U;
    } else {
      class U {
        constructor(arg0) {
          if (null != streamId) {
            tmp2 = streamId;
            tmp3 = closure_0;
            tmp4 = closure_2;
            ({ width, height } = streamId.nativeEvent.layout);
            obj = closure_0(closure_2[21]);
            size = { width: null, height: null };
            tmp5 = closure_1;
            size.width = width * closure_1;
            size.height = height * closure_1;
            num = 1;
            updateVideoSizeResult = obj.updateVideoSize(tmp, size, 1);
          }
          return;
        }
      }
    }
    if (cResult[8] === tmp13) {
      class U {
        constructor(arg0) {
          if (null != streamId) {
            tmp2 = streamId;
            tmp3 = closure_0;
            tmp4 = closure_2;
            ({ width, height } = streamId.nativeEvent.layout);
            obj = closure_0(closure_2[21]);
            size = { width: null, height: null };
            tmp5 = closure_1;
            size.width = width * closure_1;
            size.height = height * closure_1;
            num = 1;
            updateVideoSizeResult = obj.updateVideoSize(tmp, size, 1);
          }
          return;
        }
      }
    }
    const obj4 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, style: tmp9, streamId, onReady: streamReadyCallback, onLayout: tmp13 };
    cResult[8] = tmp13;
    cResult[9] = streamId;
    cResult[10] = streamReadyCallback;
    cResult[11] = tmp9;
    cResult[12] = surfaceDirectRendererExperiment;
    cResult[13] = closure_11(tmp10(11364), obj4);
    const tmp16 = closure_11(tmp10(11364), obj4);
  }
  const items = [tmp7.video, tmp8];
  cResult[3] = tmp7.video;
  cResult[4] = tmp8;
  cResult[5] = items;
  tmp9 = items;
}) : (function ExternalPipViewVideoStream(streamId) {
  let obj4;
  let streamReadLongTime;
  let streamReadyCallback;
  let video;
  streamId = streamId.streamId;
  const userId = streamId.userId;
  let obj = streamId(5819);
  const surfaceDirectRendererExperiment = obj.useSurfaceDirectRendererExperiment(userId, { location: "ExternalPipViewVideoStream" });
  const tmp2 = closure_17(streamId);
  const streamReady = tmp2.streamReady;
  ({ streamReadLongTime, streamReadyCallback } = tmp2);
  const tmp3 = closure_14();
  dependencyMap = tmp3;
  let items = [tmp3, streamReady];
  const memo = react.useMemo(() => {
    const items = [video.video, ];
    let num = 1;
    if (null == streamReady) {
      num = 0;
    }
    items[1] = { opacity: num };
    return items;
  }, items);
  const obj2 = streamId(5234);
  const token = obj2.useToken(streamReady(587).colors.TEXT_FEEDBACK_INFO);
  const value = closure_8.get();
  let c3 = value;
  const items1 = [streamId, value];
  const callback = react.useCallback((nativeEvent) => {
    let height;
    let width;
    if (null != streamId) {
      ({ width, height } = nativeEvent.nativeEvent.layout);
      size = { width: width * c3, height: height * c3 };
      const obj = VideoActionCreators;
      obj.updateVideoSize(tmp, size, 1);
    }
  }, items1);
  const children = [closure_11(streamReady(11364), { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, style: memo, streamId, onReady: streamReadyCallback, onLayout: callback }), ];
  let tmp10Result = null;
  const tmp8 = closure_12;
  const tmp9 = closure_13;
  if (null == streamReady) {
    tmp10Result = null;
    if (streamReadLongTime) {
      const obj3 = { style: tmp3.videoUnavailableWrap, children: closure_11(closure_5, obj4) };
      obj4 = { style: tmp3.videoUnavailableSpinner, size: "large", color: token };
      tmp10Result = tmp10(closure_7, obj3);
    }
  }
  children[1] = tmp10Result;
  return tmp8(tmp9, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ExternalPipViewVideo(onLayout) {
  let channelId;
  let first;
  let participantType;
  let selectedParticipantSpeaking;
  let selectedParticipantStreamId;
  let selectedParticipantUserId;
  let obj = react2;
  const cResult = obj.c(14);
  onLayout = onLayout.onLayout;
  const tmp2 = closure_14();
  ({ channelId, participantType, selectedParticipantStreamId, selectedParticipantUserId, selectedParticipantSpeaking } = useExternalPipParticipantDefault());
  useExternalPipParticipantDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      const obj = ExternalPipDefault;
      obj.refreshPipUi();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === participantType) {
    if (cResult[2] === selectedParticipantStreamId) {
      let tmp5;
      let tmp12;
      if (cResult[3] === selectedParticipantUserId) {
        tmp5 = cResult[4];
      }
      const effect = react.useEffect(first, tmp5);
      if (cResult[5] === channelId) {
        if (cResult[6] === selectedParticipantSpeaking) {
          if (cResult[7] === selectedParticipantStreamId) {
            let tmp8;
            if (cResult[8] === selectedParticipantUserId) {
              tmp8 = cResult[9];
            }
            if (cResult[10] === onLayout) {
              if (cResult[11] === tmp2.container) {
                let tmp17;
                if (cResult[12] === tmp8) {
                  tmp17 = cResult[13];
                }
                return tmp17;
              }
            }
            const obj2 = { style: tmp2.container, onLayout, children: tmp8 };
            const tmp20 = unpackModuleId(metroImportDefault, obj2);
            cResult[10] = onLayout;
            cResult[11] = tmp2.container;
            cResult[12] = tmp8;
            cResult[13] = tmp20;
            tmp17 = tmp20;
          }
        }
      }
      if (null != selectedParticipantStreamId) {
        const obj3 = { streamId: selectedParticipantStreamId, userId: selectedParticipantUserId };
        tmp12 = unpackModuleId(closure_20, obj3);
      } else if (null != selectedParticipantUserId) {
        const obj4 = { userId: selectedParticipantUserId, channelId, speaking: selectedParticipantSpeaking };
        tmp12 = unpackModuleId(closure_19, obj4);
      } else {
        tmp12 = unpackModuleId(closure_18, {});
      }
      cResult[5] = channelId;
      cResult[6] = selectedParticipantSpeaking;
      cResult[7] = selectedParticipantStreamId;
      cResult[8] = selectedParticipantUserId;
      cResult[9] = tmp12;
      tmp8 = tmp12;
    }
  }
  const items = [selectedParticipantStreamId, selectedParticipantUserId, participantType];
  cResult[1] = participantType;
  cResult[2] = selectedParticipantStreamId;
  cResult[3] = selectedParticipantUserId;
  cResult[4] = items;
  tmp5 = items;
}) : (function ExternalPipViewVideo(onLayout) {
  let channelId;
  let selectedParticipantSpeaking;
  let selectedParticipantStreamId;
  let selectedParticipantUserId;
  let tmp4Result;
  onLayout = onLayout.onLayout;
  const tmp = closure_14();
  const tmp2 = useExternalPipParticipantDefault();
  ({ selectedParticipantStreamId, selectedParticipantUserId } = tmp2);
  const items = [selectedParticipantStreamId, selectedParticipantUserId, ];
  ({ participantType: arr[2], channelId, selectedParticipantSpeaking } = tmp2);
  const effect = react.useEffect(() => {
    const obj = ExternalPipDefault;
    obj.refreshPipUi();
  }, items);
  let obj = { style: tmp.container, onLayout, children: tmp4Result };
  const tmp5 = metroImportDefault;
  if (null != selectedParticipantStreamId) {
    const obj2 = { streamId: selectedParticipantStreamId, userId: selectedParticipantUserId };
    tmp4Result = tmp4(closure_20, obj2);
  } else if (null != selectedParticipantUserId) {
    const obj3 = { userId: selectedParticipantUserId, channelId, speaking: selectedParticipantSpeaking };
    tmp4Result = tmp4(closure_19, obj3);
  } else {
    tmp4Result = tmp4(closure_18, {});
  }
  return unpackModuleId(tmp5, obj);
}));
let size = size_mod;
const result = size.fileFinishedImporting("modules/external_pip/ExternalPipViewVideo.android.tsx");

export default memoResult;
