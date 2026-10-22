// Module ID: 18361
// Function ID: 18362
// Name: ExternalPipViewVideo
// Dependencies: [32, 19, 17, 4821, 1392, 21, 4969, 587, 558, 576, 5672, 1128, 5220, 504, 6767, 11399, 18362, 5244, 1202, 5824, 5810, 5238, 18363, 11392, 18364, 2]

// Module 18361 (ExternalPipViewVideo)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1128 */;
import Text_Text from "Text/Text" /* 5220 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5672 */;
import ExternalPipDefault from "ExternalPip" /* 5810 */;
import VideoActionCreators from "VideoActionCreators" /* 18363 */;
import useExternalPipParticipantDefault from "useExternalPipParticipant" /* 18364 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import UserStore from "UserStore" /* 1392 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4969 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, importDefault;

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
  const fn2 = function h() {
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
  let backgroundColor;
  let first;
  let gradientStops;
  let items2;
  let tmp10;
  let tmp7;
  let tmp8;
  const obj = userId(576);
  const cResult = obj.c(33);
  userId = userId.userId;
  const channelId = userId.channelId;
  const speaking = userId.speaking;
  const tmp4 = closure_14();
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
    const fn2 = function x() {
      const channel = ChannelStore.getChannel(channelId);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      return guild_id;
    };
    cResult[4] = channelId;
    cResult[5] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult4 = userId(504);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp8, tmp10);
  const tmpResult5 = userId(6767);
  const avatarDecoration = tmpResult5.useAvatarDecoration(stateFromStores, stateFromStores1);
  if (cResult[6] === stateFromStores1) {
    let tmp13;
    if (cResult[7] === userId) {
      tmp13 = cResult[8];
    }
    const tmpResult6 = userId(11399);
    const avatarSpeakingColor = tmpResult6.useAvatarSpeakingColor(tmp13);
    if (cResult[9] === stateFromStores1) {
      let tmp15;
      if (cResult[10] === stateFromStores) {
        tmp15 = cResult[11];
      }
      if (cResult[12] === stateFromStores1) {
        if (cResult[13] === tmp15) {
          let tmp18;
          let tmp21;
          if (cResult[14] === userId) {
            tmp18 = cResult[15];
          }
          ({ gradientStops, backgroundColor } = channelId(18362)(tmp18));
          channelId(18362)(tmp18);
          const tmp19 = channelId;
          if (cResult[16] !== backgroundColor) {
            const obj2 = { backgroundColor };
            cResult[16] = backgroundColor;
            cResult[17] = obj2;
            tmp21 = obj2;
          } else {
            tmp21 = cResult[17];
          }
          if (cResult[18] === tmp4.user) {
            let tmp22;
            let tmp23;
            if (cResult[19] === tmp21) {
              tmp22 = cResult[20];
            }
            if (cResult[21] !== gradientStops) {
              let tmp24 = null;
              if (null != gradientStops) {
                const obj3 = { colors: gradientStops, start, end, style: StyleSheet.absoluteFill, pointerEvents: "none" };
                tmp24 = closure_11(tmp19(5244), obj3);
              }
              cResult[21] = gradientStops;
              cResult[22] = tmp24;
              tmp23 = tmp24;
            } else {
              tmp23 = cResult[22];
            }
            if (cResult[23] === avatarDecoration) {
              if (cResult[24] === stateFromStores1) {
                if (cResult[25] === speaking) {
                  if (cResult[26] === avatarSpeakingColor) {
                    let tmp29;
                    if (cResult[27] === stateFromStores) {
                      tmp29 = cResult[28];
                    }
                    if (cResult[29] === tmp23) {
                      if (cResult[30] === tmp29) {
                        let tmp32;
                        if (cResult[31] === tmp22) {
                          tmp32 = cResult[32];
                        }
                        return tmp32;
                      }
                    }
                    const obj4 = { style: tmp22, children: items2 };
                    items2 = [tmp23, tmp29];
                    const tmp35 = closure_12(closure_7, obj4);
                    cResult[29] = tmp23;
                    cResult[30] = tmp29;
                    cResult[31] = tmp22;
                    cResult[32] = tmp35;
                    tmp32 = tmp35;
                  }
                }
              }
            }
            let tmp30 = null;
            if (null != stateFromStores) {
              const obj5 = { user: stateFromStores, avatarDecoration, guildId: stateFromStores1, size: userId(1202).AvatarSizes.XXLARGE, speaking, speakingColor: avatarSpeakingColor };
              const Avatar = tmp(1202).Avatar;
              tmp30 = closure_11(Avatar, obj5);
            }
            cResult[23] = avatarDecoration;
            cResult[24] = stateFromStores1;
            cResult[25] = speaking;
            cResult[26] = avatarSpeakingColor;
            cResult[27] = stateFromStores;
            cResult[28] = tmp30;
            tmp29 = tmp30;
          }
          const items3 = [tmp4.user, tmp21];
          cResult[18] = tmp4.user;
          cResult[19] = tmp21;
          cResult[20] = items3;
          tmp22 = items3;
        }
      }
      const obj6 = { userId, guildId: stateFromStores1, avatarURI: tmp15, location: "ExternalPipViewVideo-native" };
      cResult[12] = stateFromStores1;
      cResult[13] = tmp15;
      cResult[14] = userId;
      cResult[15] = obj6;
      tmp18 = obj6;
    }
    let avatarURL;
    if (stateFromStores != null) {
      avatarURL = stateFromStores.getAvatarURL(stateFromStores1, 80, false);
    }
    cResult[9] = stateFromStores1;
    cResult[10] = stateFromStores;
    cResult[11] = avatarURL;
    tmp15 = avatarURL;
  }
  const obj7 = { userId, guildId: stateFromStores1 };
  cResult[6] = stateFromStores1;
  cResult[7] = userId;
  cResult[8] = obj7;
  tmp13 = obj7;
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
  const obj4 = userId(6767);
  const avatarDecoration = obj4.useAvatarDecoration(stateFromStores, stateFromStores1);
  const obj5 = userId(11399);
  const avatarSpeakingColor = obj5.useAvatarSpeakingColor({ userId, guildId: stateFromStores1 });
  const obj2 = { userId, guildId: stateFromStores1, avatarURI: avatarURL, location: "ExternalPipViewVideo-native" };
  avatarURL = undefined;
  const tmp8 = channelId(18362);
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
    tmp13 = closure_11(tmp7(5244), obj7);
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
  let closure_2;
  let first;
  let items1;
  let obj6;
  let streamReadLongTime;
  let streamReadyCallback;
  let tmp11;
  let tmp7;
  let tmp8;
  const tmp = streamId;
  let obj = streamId(576);
  const cResult = obj.c(26);
  streamId = streamId.streamId;
  const userId = streamId.userId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { location: "ExternalPipViewVideoStream" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmpResult = tmp(5824);
  const surfaceDirectRendererExperiment = tmpResult.useSurfaceDirectRendererExperiment(userId, first);
  const tmp6 = closure_17(streamId);
  const streamReady = tmp6.streamReady;
  ({ streamReadLongTime, streamReadyCallback } = tmp6);
  if (cResult[1] !== streamReady) {
    const fn = function b() {
      if (null != streamReady) {
        const obj = ExternalPipDefault;
        obj.setPipContentReady();
      }
    };
    const items = [streamReady];
    cResult[1] = streamReady;
    cResult[2] = fn;
    cResult[3] = items;
    tmp8 = items;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const effect = react.useEffect(tmp7, tmp8);
  const tmp10 = closure_14();
  let num5 = 1;
  if (null == streamReady) {
    num5 = 0;
  }
  if (cResult[4] !== num5) {
    const obj3 = { opacity: num5 };
    cResult[4] = num5;
    cResult[5] = obj3;
    tmp11 = obj3;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === tmp10.video) {
    let tmp12;
    let tmp16;
    if (cResult[7] === tmp11) {
      tmp12 = cResult[8];
    }
    const tmpResult2 = tmp(5238);
    const token = tmpResult2.useToken(streamReady(587).colors.TEXT_FEEDBACK_INFO);
    dependencyMap = closure_8.get();
    const tmp13 = streamReady;
    if (cResult[9] !== streamId) {
      const fn2 = function w(nativeEvent) {
        let height;
        let width;
        if (null != streamId) {
          ({ width, height } = nativeEvent.nativeEvent.layout);
          size = { width: width * closure_2, height: height * closure_2 };
          const obj = VideoActionCreators;
          obj.updateVideoSize(tmp, size, 1);
        }
      };
      cResult[9] = streamId;
      cResult[10] = fn2;
      tmp16 = fn2;
    } else {
      tmp16 = cResult[10];
    }
    if (cResult[11] === tmp16) {
      if (cResult[12] === streamId) {
        if (cResult[13] === streamReadyCallback) {
          if (cResult[14] === tmp12) {
            let tmp17;
            if (cResult[15] === surfaceDirectRendererExperiment) {
              tmp17 = cResult[16];
            }
            if (cResult[17] === token) {
              if (cResult[18] === streamReadLongTime) {
                if (cResult[19] === streamReady) {
                  if (cResult[20] === tmp10.videoUnavailableSpinner) {
                    let tmp20;
                    if (cResult[21] === tmp10.videoUnavailableWrap) {
                      tmp20 = cResult[22];
                    }
                    if (cResult[23] === tmp17) {
                      let tmp25;
                      if (cResult[24] === tmp20) {
                        tmp25 = cResult[25];
                      }
                      return tmp25;
                    }
                    const obj4 = { children: items1 };
                    items1 = [tmp17, tmp20];
                    const tmp28 = closure_12(closure_13, obj4);
                    cResult[23] = tmp17;
                    cResult[24] = tmp20;
                    cResult[25] = tmp28;
                    tmp25 = tmp28;
                  }
                }
              }
            }
            let tmp21 = null;
            if (null == streamReady) {
              tmp21 = null;
              if (streamReadLongTime) {
                const obj5 = { style: tmp10.videoUnavailableWrap, children: closure_11(closure_5, obj6) };
                obj6 = { style: tmp10.videoUnavailableSpinner, size: "large", color: token };
                tmp21 = closure_11(closure_7, obj5);
              }
            }
            cResult[17] = token;
            cResult[18] = streamReadLongTime;
            cResult[19] = streamReady;
            cResult[20] = tmp10.videoUnavailableSpinner;
            cResult[21] = tmp10.videoUnavailableWrap;
            cResult[22] = tmp21;
            tmp20 = tmp21;
          }
        }
      }
    }
    const obj7 = { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, style: tmp12, streamId, onReady: streamReadyCallback, onLayout: tmp16 };
    const tmp19 = closure_11(tmp13(11392), obj7);
    cResult[11] = tmp16;
    cResult[12] = streamId;
    cResult[13] = streamReadyCallback;
    cResult[14] = tmp12;
    cResult[15] = surfaceDirectRendererExperiment;
    cResult[16] = tmp19;
    tmp17 = tmp19;
  }
  const items2 = [tmp10.video, tmp11];
  cResult[6] = tmp10.video;
  cResult[7] = tmp11;
  cResult[8] = items2;
  tmp12 = items2;
}) : (function ExternalPipViewVideoStream(streamId) {
  let obj4;
  let streamReadLongTime;
  let streamReadyCallback;
  let video;
  streamId = streamId.streamId;
  const userId = streamId.userId;
  let obj = streamId(5824);
  const surfaceDirectRendererExperiment = obj.useSurfaceDirectRendererExperiment(userId, { location: "ExternalPipViewVideoStream" });
  const tmp2 = closure_17(streamId);
  const streamReady = tmp2.streamReady;
  let items = [streamReady];
  ({ streamReadLongTime, streamReadyCallback } = tmp2);
  const effect = react.useEffect(() => {
    if (null != streamReady) {
      const obj = ExternalPipDefault;
      obj.setPipContentReady();
    }
  }, items);
  const tmp4 = closure_14();
  dependencyMap = tmp4;
  const items1 = [tmp4, streamReady];
  const memo = react.useMemo(() => {
    const items = [video.video, ];
    let num = 1;
    if (null == streamReady) {
      num = 0;
    }
    items[1] = { opacity: num };
    return items;
  }, items1);
  const obj2 = streamId(5238);
  const token = obj2.useToken(streamReady(587).colors.TEXT_FEEDBACK_INFO);
  const value = closure_8.get();
  let c3 = value;
  const items2 = [streamId, value];
  const callback = react.useCallback((nativeEvent) => {
    let height;
    let width;
    if (null != streamId) {
      ({ width, height } = nativeEvent.nativeEvent.layout);
      size = { width: width * c3, height: height * c3 };
      const obj = VideoActionCreators;
      obj.updateVideoSize(tmp, size, 1);
    }
  }, items2);
  const children = [closure_11(streamReady(11392), { useSurfaceDirectRenderer: surfaceDirectRendererExperiment, style: memo, streamId, onReady: streamReadyCallback, onLayout: callback }), ];
  let tmp11Result = null;
  const tmp10 = closure_13;
  const tmp9 = closure_12;
  if (null == streamReady) {
    tmp11Result = null;
    if (streamReadLongTime) {
      const obj3 = { style: tmp4.videoUnavailableWrap, children: closure_11(closure_5, obj4) };
      obj4 = { style: tmp4.videoUnavailableSpinner, size: "large", color: token };
      tmp11Result = tmp11(closure_7, obj3);
    }
  }
  children[1] = tmp11Result;
  return tmp9(tmp10, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ExternalPipViewVideo(onLayout) {
  let channelId;
  let closure_1;
  let first;
  let participantType;
  let selectedParticipantSpeaking;
  let selectedParticipantStreamId;
  let selectedParticipantUserId;
  let obj = onLayout(576);
  const cResult = obj.c(17);
  onLayout = onLayout.onLayout;
  const tmp2 = closure_14();
  ({ channelId, participantType, selectedParticipantStreamId, selectedParticipantUserId, selectedParticipantSpeaking } = useExternalPipParticipantDefault());
  const tmp3 = useExternalPipParticipantDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      const obj = closure_1(dependencyMap[20]);
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
      if (cResult[3] === selectedParticipantUserId) {
        tmp5 = cResult[4];
      }
      const effect = react.useEffect(first, tmp5);
      importDefault = tmp9;
      if (cResult[5] === null != selectedParticipantStreamId) {
        let tmp10;
        let tmp14;
        if (cResult[6] === onLayout) {
          tmp10 = cResult[7];
        }
        if (cResult[8] === channelId) {
          if (cResult[9] === selectedParticipantSpeaking) {
            if (cResult[10] === selectedParticipantStreamId) {
              let tmp11;
              if (cResult[11] === selectedParticipantUserId) {
                tmp11 = cResult[12];
              }
              if (cResult[13] === tmp10) {
                if (cResult[14] === tmp2.container) {
                  let tmp19;
                  if (cResult[15] === tmp11) {
                    tmp19 = cResult[16];
                  }
                  return tmp19;
                }
              }
              const obj2 = { style: tmp2.container, onLayout: tmp10, children: null };
              class R {
                constructor(arg0) {
                  const tmp = closure_1;
                  if (!tmp) {
                    const obj = ExternalPipDefault;
                    obj.setPipContentReady();
                  }
                  if (onLayout != null) {
                    tmp5(arg0);
                  }
                }
              }
              const tmp22 = closure_11(closure_7, obj2);
              cResult[13] = tmp10;
              cResult[14] = tmp2.container;
              cResult[15] = tmp11;
              cResult[16] = tmp22;
              tmp19 = tmp22;
            }
          }
        }
        if (null != selectedParticipantStreamId) {
          const obj3 = { streamId: selectedParticipantStreamId, userId: selectedParticipantUserId };
          tmp14 = closure_11(closure_20, obj3);
        } else if (null != selectedParticipantUserId) {
          const obj4 = { userId: selectedParticipantUserId, channelId, speaking: selectedParticipantSpeaking };
          tmp14 = closure_11(closure_19, obj4);
        } else {
          tmp14 = closure_11(closure_18, {});
        }
        cResult[8] = channelId;
        cResult[9] = selectedParticipantSpeaking;
        class R {
          constructor(arg0) {
            const tmp = closure_1;
            if (!tmp) {
              const obj = ExternalPipDefault;
              obj.setPipContentReady();
            }
            if (onLayout != null) {
              tmp5(arg0);
            }
          }
        }
        cResult[10] = selectedParticipantStreamId;
        cResult[11] = selectedParticipantUserId;
        cResult[12] = tmp14;
        tmp11 = tmp14;
      }
      class R {
        constructor(arg0) {
          const tmp = closure_1;
          if (!tmp) {
            const obj = ExternalPipDefault;
            obj.setPipContentReady();
          }
          if (onLayout != null) {
            tmp5(arg0);
          }
        }
      }
      cResult[5] = null != selectedParticipantStreamId;
      cResult[6] = onLayout;
      cResult[7] = R;
      tmp10 = R;
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
  let closure_1;
  let selectedParticipantSpeaking;
  let selectedParticipantStreamId;
  let selectedParticipantUserId;
  let tmp5Result;
  onLayout = onLayout.onLayout;
  let tmp = closure_14();
  const tmp2 = useExternalPipParticipantDefault();
  ({ selectedParticipantStreamId, selectedParticipantUserId } = tmp2);
  const items = [selectedParticipantStreamId, selectedParticipantUserId, ];
  ({ participantType: arr[2], channelId, selectedParticipantSpeaking } = tmp2);
  const effect = react.useEffect(() => {
    const obj = closure_1(dependencyMap[20]);
    obj.refreshPipUi();
  }, items);
  importDefault = tmp4;
  const items1 = [null != selectedParticipantStreamId, onLayout];
  const tmp5 = closure_11;
  let obj = {
    style: tmp.container,
    onLayout: react.useCallback((arg0) => {
      const tmp = closure_1;
      if (!tmp) {
        const obj = ExternalPipDefault;
        obj.setPipContentReady();
      }
      if (onLayout != null) {
        tmp5(arg0);
      }
    }, items1),
    children: tmp5Result
  };
  const tmp6 = closure_7;
  if (null != selectedParticipantStreamId) {
    const obj2 = { streamId: selectedParticipantStreamId, userId: selectedParticipantUserId };
    tmp5Result = tmp5(closure_20, obj2);
  } else if (null != selectedParticipantUserId) {
    const obj3 = { userId: selectedParticipantUserId, channelId, speaking: selectedParticipantSpeaking };
    tmp5Result = tmp5(closure_19, obj3);
  } else {
    tmp5Result = tmp5(closure_18, {});
  }
  return tmp5(tmp6, obj);
}));
let size = size_mod;
const result = size.fileFinishedImporting("modules/external_pip/ExternalPipViewVideo.android.tsx");

export default memoResult;
