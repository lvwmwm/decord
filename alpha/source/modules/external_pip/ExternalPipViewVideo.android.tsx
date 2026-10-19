// Module ID: 18136
// Function ID: 18137
// Name: ExternalPipViewVideo
// Dependencies: [32, 19, 17, 2068, 1392, 5214, 21, 5191, 587, 558, 576, 11284, 5145, 1128, 5187, 504, 6330, 11302, 18137, 5491, 1202, 5331, 4913, 18138, 11295, 18139, 5320, 2]

// Module 18136 (ExternalPipViewVideo)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5187 */;
import CallConstants from "CallConstants" /* 5214 */;
import ExternalPipDefault from "ExternalPip" /* 5320 */;
import VideoActionCreators from "VideoActionCreators" /* 18138 */;
import useExternalPipParticipantDefault from "useExternalPipParticipant" /* 18139 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import UserStore from "UserStore" /* 1392 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5191 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, flag, importDefault;

let StyleSheet;
let closure_12;
let closure_14;
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
let obj9;
({ ActivityIndicator: hasOwnProperty, StyleSheet } = react_native);
({ View: metroImportDefault, PixelRatio: metroImportAll } = react_native);
const ParticipantTypes = CallConstants.ParticipantTypes;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, video: obj3, videoUnavailableWrap: obj4, videoUnavailableSpinner: obj5, unavailable: obj6, unavailableText: obj7, unavaiableImage: obj8, user: obj9 };
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
obj8 = { marginBottom: nativeDefault.space.PX_8, resizeMode: "contain", aspectRatio: 2.5, width: "80%" };
obj9 = { alignItems: "center", justifyContent: "center" };
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
let closure_15 = createStyles(obj);
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function useStreamReady(arg0, arg1) {
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
  class R {
    constructor() {
      if (null == closure_2) {
        tmp3 = globalThis;
        _setTimeout = setTimeout;
        tmp4 = closure_1;
        closure_0 = setTimeout(() => {
          closure_1_4(true);
        }, closure_1);
        return () => {
          clearTimeout(closure_0);
        };
      } else {
        tmp = closure_4;
        flag = false;
        tmp2 = closure_4(false);
        return;
      }
    }
  }
  const items = [first, num];
  cResult[2] = first;
  cResult[3] = num;
  cResult[4] = R;
  cResult[5] = items;
  tmp8 = items;
  tmp7 = R;
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
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExternalPipViewVideoUnavailable(wasStream) {
  let items;
  let tmp6Result;
  const obj = react2;
  const cResult = obj.c(12);
  wasStream = wasStream.wasStream;
  const tmp4 = closure_15();
  if (cResult[0] === tmp4.unavaiableImage) {
    let tmp5;
    let tmp8;
    if (cResult[1] === wasStream) {
      tmp5 = cResult[2];
    }
    if (cResult[3] !== wasStream) {
      let result;
      const intl = tmp(1128).intl;
      if (wasStream) {
        result = intl.formatToMarkdownString(tmp(1128).t["1Ww0Hi"], {});
      } else {
        result = intl.string(tmp(1128).t.Nzo5nz);
      }
      cResult[3] = wasStream;
      cResult[4] = result;
      tmp8 = result;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp4.unavailableText) {
      let tmp10;
      if (cResult[6] === tmp8) {
        tmp10 = cResult[7];
      }
      if (cResult[8] === tmp4.unavailable) {
        if (cResult[9] === tmp5) {
          let tmp13;
          if (cResult[10] === tmp10) {
            tmp13 = cResult[11];
          }
          return tmp13;
        }
      }
      const obj2 = { style: tmp4.unavailable, children: items };
      items = [tmp5, tmp10];
      const tmp16 = map1(metroImportDefault, obj2);
      cResult[8] = tmp4.unavailable;
      cResult[9] = tmp5;
      cResult[10] = tmp10;
      cResult[11] = tmp16;
      tmp13 = tmp16;
    }
    const obj3 = { variant: "text-md/semibold", style: tmp4.unavailableText, lineClamp: 1, children: tmp8 };
    const tmp12 = authStore2(Text_Text.Text, obj3);
    cResult[5] = tmp4.unavailableText;
    cResult[6] = tmp8;
    cResult[7] = tmp12;
    tmp10 = tmp12;
  }
  if (wasStream) {
    const obj4 = { style: tmp4.unavaiableImage };
    tmp6Result = tmp6(tmp(11284).StreamEnded, obj4);
  } else {
    tmp6Result = tmp6(tmp(5145).CircleInformationIcon, {});
  }
  cResult[0] = tmp4.unavaiableImage;
  cResult[1] = wasStream;
  cResult[2] = tmp6Result;
  tmp5 = tmp6Result;
}) : (function ExternalPipViewVideoUnavailable(wasStream) {
  let items;
  let result;
  let tmp10;
  let tmp4Result;
  let tmp8;
  wasStream = wasStream.wasStream;
  const tmp = closure_15();
  const obj = { style: tmp.unavailable, children: items };
  const tmp2 = map1;
  const tmp3 = metroImportDefault;
  if (wasStream) {
    const obj2 = { style: tmp.unavaiableImage };
    tmp4Result = tmp4(tmp5(11284).StreamEnded, obj2);
    tmp8 = tmp4;
    tmp10 = tmp5;
  } else {
    tmp4Result = tmp4(tmp5(5145).CircleInformationIcon, {});
    tmp8 = tmp4;
    tmp10 = tmp5;
  }
  items = [tmp4Result, ];
  const obj3 = { variant: "text-md/semibold", style: tmp.unavailableText, lineClamp: 1, children: result };
  const Text = tmp10(5187).Text;
  const intl = tmp10(1128).intl;
  if (wasStream) {
    result = intl.formatToMarkdownString(tmp10(1128).t["1Ww0Hi"], {});
  } else {
    result = intl.string(tmp10(1128).t.Nzo5nz);
  }
  items[1] = tmp8(Text, obj3);
  return tmp2(tmp3, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExternalPipViewVideoUser(userId) {
  let first;
  let obj3;
  let tmp10;
  let tmp7;
  let tmp8;
  const obj = userId(576);
  const cResult = obj.c(33);
  userId = userId.userId;
  const channelId = userId.channelId;
  closure_15();
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
    class C {
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
    cResult[5] = C;
    tmp10 = C;
  } else {
    class C {
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
  const tmpResult5 = userId(6330);
  const avatarDecoration = tmpResult5.useAvatarDecoration(stateFromStores, stateFromStores1);
  if (cResult[6] === stateFromStores1) {
    class C {
      constructor() {
        const channel = ChannelStore.getChannel(channelId);
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        return guild_id;
      }
    }
    const tmpResult6 = userId(11302);
    const avatarSpeakingColor = tmpResult6.useAvatarSpeakingColor(obj3);
    if (cResult[9] === stateFromStores1) {
      class C {
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
        class C {
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
      class C {
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
  const tmp = closure_15();
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
  const obj4 = userId(6330);
  const avatarDecoration = obj4.useAvatarDecoration(stateFromStores, stateFromStores1);
  const obj5 = userId(11302);
  const avatarSpeakingColor = obj5.useAvatarSpeakingColor({ userId, guildId: stateFromStores1 });
  const obj2 = { userId, guildId: stateFromStores1, avatarURI: avatarURL, location: "ExternalPipViewVideo-native" };
  avatarURL = undefined;
  const tmp8 = channelId(18137);
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
  const tmp11 = closure_13;
  const tmp12 = closure_7;
  if (null != gradientStops) {
    const obj7 = { colors: gradientStops, start, end, style: StyleSheet.absoluteFill, pointerEvents: "none" };
    tmp13 = closure_12(tmp7(5491), obj7);
  }
  items3 = [tmp13, ];
  let tmp18 = null;
  if (null != stateFromStores) {
    const obj8 = { user: stateFromStores, avatarDecoration, guildId: stateFromStores1, size: userId(1202).AvatarSizes.XXLARGE, speaking, speakingColor: avatarSpeakingColor };
    const Avatar = tmp2(1202).Avatar;
    tmp18 = closure_12(Avatar, obj8);
  }
  items3[1] = tmp18;
  return tmp11(tmp12, obj6);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExternalPipViewVideoStream(streamId) {
  let closure_1;
  let first;
  let items;
  let obj6;
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
  const tmpResult = tmp(5331);
  const surfaceDirectRendererExperiment = tmpResult.useSurfaceDirectRendererExperiment(userId, first);
  ({ streamReady, streamReadLongTime, streamReadyCallback } = closure_18(streamId));
  closure_18(streamId);
  const tmp7 = closure_15();
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
    let tmp13;
    if (cResult[4] === tmp8) {
      tmp9 = cResult[5];
    }
    const tmpResult2 = tmp(4913);
    const token = tmpResult2.useToken(nativeDefault.colors.TEXT_FEEDBACK_INFO);
    const tmp10 = importDefault;
    importDefault = closure_8.get();
    if (cResult[6] !== streamId) {
      const fn = function _(nativeEvent) {
        let height;
        let width;
        if (null != streamId) {
          ({ width, height } = nativeEvent.nativeEvent.layout);
          size = { width: width * closure_1, height: height * closure_1 };
          const obj = VideoActionCreators;
          obj.updateVideoSize(tmp, size, 1);
        }
      };
      cResult[6] = streamId;
      cResult[7] = fn;
      tmp13 = fn;
    } else {
      tmp13 = cResult[7];
    }
    if (cResult[8] === tmp13) {
      if (cResult[9] === streamId) {
        if (cResult[10] === streamReadyCallback) {
          if (cResult[11] === tmp9) {
            let tmp14;
            if (cResult[12] === surfaceDirectRendererExperiment) {
              tmp14 = cResult[13];
            }
            if (cResult[14] === token) {
              if (cResult[15] === streamReadLongTime) {
                if (cResult[16] === streamReady) {
                  if (cResult[17] === tmp7.videoUnavailableSpinner) {
                    let tmp17;
                    if (cResult[18] === tmp7.videoUnavailableWrap) {
                      tmp17 = cResult[19];
                    }
                    if (cResult[20] === tmp14) {
                      let tmp22;
                      if (cResult[21] === tmp17) {
                        tmp22 = cResult[22];
                      }
                      return tmp22;
                    }
                    const obj4 = { children: items };
                    items = [tmp14, tmp17];
                    const tmp25 = closure_13(closure_14, obj4);
                    cResult[20] = tmp14;
                    cResult[21] = tmp17;
                    cResult[22] = tmp25;
                    tmp22 = tmp25;
                  }
                }
              }
            }
            let tmp18 = null;
            if (null == streamReady) {
              tmp18 = null;
              if (streamReadLongTime) {
                const obj5 = { style: tmp7.videoUnavailableWrap, children: closure_12(closure_5, obj6) };
                obj6 = { style: tmp7.videoUnavailableSpinner, size: "large", color: token };
                tmp18 = closure_12(closure_7, obj5);
              }
            }
            cResult[14] = token;
            cResult[15] = streamReadLongTime;
            cResult[16] = streamReady;
            cResult[17] = tmp7.videoUnavailableSpinner;
            cResult[18] = tmp7.videoUnavailableWrap;
            cResult[19] = tmp18;
            tmp17 = tmp18;
          }
        }
      }
    }
    const obj7 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, style: tmp9, streamId, onReady: streamReadyCallback, onLayout: tmp13 };
    const tmp16 = closure_12(tmp10(11295), obj7);
    cResult[8] = tmp13;
    cResult[9] = streamId;
    cResult[10] = streamReadyCallback;
    cResult[11] = tmp9;
    cResult[12] = surfaceDirectRendererExperiment;
    cResult[13] = tmp16;
    tmp14 = tmp16;
  }
  const items1 = [tmp7.video, tmp8];
  cResult[3] = tmp7.video;
  cResult[4] = tmp8;
  cResult[5] = items1;
  tmp9 = items1;
}) : (function ExternalPipViewVideoStream(streamId) {
  let obj4;
  let streamReadLongTime;
  let streamReadyCallback;
  let video;
  streamId = streamId.streamId;
  const userId = streamId.userId;
  let obj = streamId(5331);
  const surfaceDirectRendererExperiment = obj.useSurfaceDirectRendererExperiment(userId, { location: "ExternalPipViewVideoStream" });
  const tmp2 = closure_18(streamId);
  const streamReady = tmp2.streamReady;
  ({ streamReadLongTime, streamReadyCallback } = tmp2);
  const tmp3 = closure_15();
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
  const obj2 = streamId(4913);
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
  const children = [closure_12(streamReady(11295), { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, style: memo, streamId, onReady: streamReadyCallback, onLayout: callback }), ];
  let tmp10Result = null;
  const tmp8 = closure_13;
  const tmp9 = closure_14;
  if (null == streamReady) {
    tmp10Result = null;
    if (streamReadLongTime) {
      const obj3 = { style: tmp3.videoUnavailableWrap, children: closure_12(closure_5, obj4) };
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
  let focusedParticipantType;
  let selectedParticipantSpeaking;
  let selectedParticipantStreamId;
  let selectedParticipantUserId;
  let obj = react2;
  const cResult = obj.c(15);
  onLayout = onLayout.onLayout;
  const tmp2 = closure_15();
  ({ channelId, selectedParticipantStreamId, selectedParticipantUserId, selectedParticipantSpeaking, focusedParticipantType } = useExternalPipParticipantDefault());
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
  if (cResult[1] === focusedParticipantType) {
    if (cResult[2] === selectedParticipantStreamId) {
      let tmp5;
      let tmp10Result;
      if (cResult[3] === selectedParticipantUserId) {
        tmp5 = cResult[4];
      }
      const effect = react.useEffect(first, tmp5);
      if (cResult[5] === channelId) {
        if (cResult[6] === focusedParticipantType) {
          if (cResult[7] === selectedParticipantSpeaking) {
            if (cResult[8] === selectedParticipantStreamId) {
              let tmp8;
              if (cResult[9] === selectedParticipantUserId) {
                tmp8 = cResult[10];
              }
              if (cResult[11] === onLayout) {
                if (cResult[12] === tmp2.container) {
                  let tmp18;
                  if (cResult[13] === tmp8) {
                    tmp18 = cResult[14];
                  }
                  return tmp18;
                }
              }
              const obj2 = { style: tmp2.container, onLayout, children: tmp8 };
              const tmp21 = authStore2(metroImportDefault, obj2);
              cResult[11] = onLayout;
              cResult[12] = tmp2.container;
              cResult[13] = tmp8;
              cResult[14] = tmp21;
              tmp18 = tmp21;
            }
          }
        }
      }
      if (null != selectedParticipantStreamId) {
        const obj3 = { streamId: selectedParticipantStreamId, userId: selectedParticipantUserId };
        tmp10Result = authStore2(closure_21, obj3);
      } else if (null != selectedParticipantUserId) {
        const obj4 = { userId: selectedParticipantUserId, channelId, speaking: selectedParticipantSpeaking };
        tmp10Result = authStore2(closure_20, obj4);
      } else {
        let tmp12 = focusedParticipantType === ParticipantTypes.STREAM;
        const tmp10 = authStore2;
        const tmp11 = closure_19;
        if (!tmp12) {
          tmp12 = focusedParticipantType === ParticipantTypes.HIDDEN_STREAM;
        }
        const obj5 = { wasStream: tmp12 };
        tmp10Result = tmp10(tmp11, obj5);
      }
      cResult[5] = channelId;
      cResult[6] = focusedParticipantType;
      cResult[7] = selectedParticipantSpeaking;
      cResult[8] = selectedParticipantStreamId;
      cResult[9] = selectedParticipantUserId;
      cResult[10] = tmp10Result;
      tmp8 = tmp10Result;
    }
  }
  const items = [selectedParticipantStreamId, selectedParticipantUserId, focusedParticipantType];
  cResult[1] = focusedParticipantType;
  cResult[2] = selectedParticipantStreamId;
  cResult[3] = selectedParticipantUserId;
  cResult[4] = items;
  tmp5 = items;
}) : (function ExternalPipViewVideo(onLayout) {
  let channelId;
  let focusedParticipantType;
  let selectedParticipantSpeaking;
  let selectedParticipantStreamId;
  let selectedParticipantUserId;
  let tmp4Result;
  onLayout = onLayout.onLayout;
  const tmp = closure_15();
  const tmp2 = useExternalPipParticipantDefault();
  ({ selectedParticipantStreamId, selectedParticipantUserId, focusedParticipantType } = tmp2);
  const items = [selectedParticipantStreamId, selectedParticipantUserId, focusedParticipantType];
  ({ channelId, selectedParticipantSpeaking } = tmp2);
  const effect = react.useEffect(() => {
    const obj = ExternalPipDefault;
    obj.refreshPipUi();
  }, items);
  let obj = { style: tmp.container, onLayout, children: tmp4Result };
  const tmp5 = metroImportDefault;
  if (null != selectedParticipantStreamId) {
    const obj2 = { streamId: selectedParticipantStreamId, userId: selectedParticipantUserId };
    tmp4Result = tmp4(closure_21, obj2);
  } else if (null != selectedParticipantUserId) {
    const obj3 = { userId: selectedParticipantUserId, channelId, speaking: selectedParticipantSpeaking };
    tmp4Result = tmp4(closure_20, obj3);
  } else {
    let tmp7 = focusedParticipantType === ParticipantTypes.STREAM;
    const tmp6 = closure_19;
    if (!tmp7) {
      tmp7 = focusedParticipantType === ParticipantTypes.HIDDEN_STREAM;
    }
    const obj4 = { wasStream: tmp7 };
    tmp4Result = tmp4(tmp6, obj4);
  }
  return authStore2(tmp5, obj);
}));
let size = size_mod;
let result = size.fileFinishedImporting("modules/external_pip/ExternalPipViewVideo.android.tsx");

export default memoResult;
