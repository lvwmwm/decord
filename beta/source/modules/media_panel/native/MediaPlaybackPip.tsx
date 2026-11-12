// Module ID: 19790
// Function ID: 19791
// Name: MediaPlaybackPip
// Dependencies: [32, 19, 17, 5019, 6226, 5112, 1385, 1072, 19521, 21, 5170, 575, 5756, 504, 5808, 8947, 5783, 19791, 5747, 7745, 7518, 1652, 5402, 1113, 9105, 7101, 10919, 1252, 16742, 5087, 19788, 8957, 8955, 19792, 2]
// Exports: default

// Module 19790 (MediaPlaybackPip)
import nativeDefault from "native" /* 575 */;
import _modDef1652 from "module_1652" /* 1652 */;
import useChannelName from "useChannelName" /* 5808 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7745 */;
import MediaPlayerManagerDefault from "MediaPlayerManager" /* 16742 */;
import VoicePanelPIPConstants from "VoicePanelPIPConstants" /* 19521 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import MessageStore from "MessageStore" /* 6226 */;
import RelationshipStore from "RelationshipStore" /* 5112 */;
import UserStore from "UserStore" /* 1385 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let StyleSheet;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
function MediaInfo(message) {
  let closure_2;
  let closure_4;
  let contentMessage;
  let isControlVisible;
  let isVoiceMessage;
  let items3;
  let items4;
  let items5;
  let obj5;
  message = message.message;
  const activeMediaPlayerSource = message.activeMediaPlayerSource;
  let first;
  let first1;
  react = undefined;
  ({ isVoiceMessage, isControlVisible } = message);
  const tmp = closure_17();
  let obj = message(5756);
  const token = obj.useToken(first(575).colors.BACKGROUND_SURFACE_HIGH);
  const items = [ChannelStore, UserStore, RelationshipStore];
  const items1 = [message];
  const obj2 = message(504);
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let channel_id;
    const getChannel = ChannelStore.getChannel;
    if (message != null) {
      channel_id = message.channel_id;
    }
    const channel = getChannel(channel_id);
    let channelName = null;
    if (null != channel) {
      const obj = useChannelName;
      channelName = obj.computeChannelName(channel, UserStore, RelationshipStore, true, true);
    }
    return channelName;
  }, items1);
  const tmp7 = first1(react.useState(0), 2);
  first = tmp7[0];
  dependencyMap = tmp7[1];
  const tmp9 = first1(react.useState(0), 2);
  first1 = tmp9[0];
  react = tmp9[1];
  const items2 = [first1, first];
  const memo = react.useMemo(() => first1 >= first, items2);
  if (message != null) {
    contentMessage = message.getContentMessage();
  }
  if (null != message) {
    if (null != contentMessage) {
      if (null != activeMediaPlayerSource) {
        let str2;
        if (isVoiceMessage) {
          str2 = message.author.username;
        } else {
          str2 = "";
          if (contentMessage.attachments.length > 0) {
            str2 = "";
            if (null != activeMediaPlayerSource.attachmentIndex) {
              str2 = tmp4(8947)(contentMessage.attachments[activeMediaPlayerSource.attachmentIndex]);
            }
          }
        }
        const obj3 = {
          variant: "body-md/semibold",
          lineClamp: 1,
          ellipsizeMode: "clip",
          onLayout(nativeEvent) {
                  return closure_4(nativeEvent.nativeEvent.layout.width);
                },
          children: str2
        };
        const tmp14 = closure_15(message(5783).Text, obj3);
        const obj4 = {
          accessibilityElementsHidden: isControlVisible,
          style: tmp.infoContent,
          onLayout(nativeEvent) {
                  return closure_2(nativeEvent.nativeEvent.layout.width);
                },
          children: closure_16(closure_7, obj5)
        };
        let tmp16Result = tmp14;
        obj5 = { style: tmp.infoContainer, children: items5 };
        if (memo) {
          const obj6 = { style: { flex: 1 }, children: items3 };
          const obj7 = { spacing: 20, speed: 0.2, children: tmp14 };
          items3 = [closure_15(message(19791).Marquee, obj7), ];
          const obj8 = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, locations: [0, 0.1, 0.2, 0.8, 0.9, 1], colors: items4, style: tmp.infoContainerGradient };
          items4 = [token, `${tmp5}CC`, `${tmp5}00`, `${tmp5}00`, `${tmp5}CC`, token];
          items3[1] = closure_15(first(5747), obj8);
          tmp16Result = tmp16(tmp15, obj6);
        }
        items5 = [tmp16Result, ];
        let tmp13Result = null != stateFromStores;
        if (tmp13Result) {
          const obj9 = { variant: "body-xs/medium", color: "text-subtle", lineClamp: 1, children: stateFromStores };
          tmp13Result = tmp13(tmp2(5783).Text, obj9);
        }
        items5[1] = tmp13Result;
        return closure_15(closure_7, obj4);
      }
    }
  }
  return null;
}
function PiPControls(message) {
  let isVoiceMessage;
  let items3;
  let items4;
  let items5;
  let items6;
  let string2Result;
  let stringResult;
  let tmp6;
  let tmp7;
  let tmp8;
  let visible;
  message = message.message;
  ({ visible, isVoiceMessage } = message);
  const handleClosePip = message.handleClosePip;
  let tmp = closure_17();
  const items = [message];
  const callback = react.useCallback(() => {
    if (null != message) {
      if (null != message.channel_id) {
        if (null != message.id) {
          const obj = MessageActionCreatorsDefault;
          obj.trackJump(message.channel_id, message.id, "Media PIP", {});
          const channel = ChannelStore.getChannel(tmp.channel_id);
          let guildId;
          const tmp6 = importDefault;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          const tmp6Result = tmp6(7518);
          tmp6Result(authStore3.CHANNEL(guildId, message.channel_id, message.id), { navigationReplace: true, openChannel: true });
        }
      }
    }
  }, items);
  const items1 = [closure_19, , ];
  const useAnimatedStyle = message(1652).useAnimatedStyle;
  message(1652);
  items1[1] = message(5402).withTiming;
  items1[2] = visible;
  let c0;
  let c1;
  [tmp6, tmp7, tmp8] = items1;
  class MediaPlaybackPipTsx1 {
    constructor() {
      let num = 0;
      const tmp = c0;
      if (c1) {
        num = 1;
      }
      const obj = { opacity: tmp(num, { duration: 200 }) };
      return obj;
    }
  }
  const items2 = [tmp7, tmp8];
  MediaPlaybackPipTsx1.__closure = items2;
  MediaPlaybackPipTsx1.__workletHash = 16892004000938;
  MediaPlaybackPipTsx1.__initData = tmp6;
  const animatedStyle = useAnimatedStyle(MediaPlaybackPipTsx1);
  const intl = tmp3(1113).intl;
  const string = intl.string;
  const t = tmp3(1113).t;
  if (isVoiceMessage) {
    stringResult = string(t.KTonHP);
  } else {
    stringResult = string(t["13/7kX"]);
  }
  const intl2 = tmp3(1113).intl;
  const string2 = intl2.string;
  const t2 = tmp3(1113).t;
  if (isVoiceMessage) {
    string2Result = string2(t2["6rhrVG"]);
  } else {
    string2Result = string2(t2.WAI6xu);
  }
  let obj = { style: items3, children: items4 };
  items3 = [tmp.pipControls, animatedStyle];
  const View = _modDef1652.View;
  items4 = [closure_15(message(9105).BackgroundBlurFill, { blurAmount: 0.05 }), , ];
  const obj2 = { disabled: !visible, style: items5, onPress: callback, accessible: true, accessibilityRole: "button", accessibilityLabel: stringResult, children: closure_15(message(7101).ArrowLargeLeftIcon, { size: "sm" }) };
  items5 = [, ];
  ({ pipButton: arr6[0], backButton: arr6[1] } = tmp);
  items4[1] = closure_15(closure_6, obj2);
  const obj3 = { disabled: !visible, style: items6, onPress: handleClosePip, accessible: true, accessibilityRole: "button", accessibilityLabel: string2Result, children: closure_15(message(10919).XLargeIcon, { size: "sm" }) };
  items6 = [, ];
  ({ pipButton: arr7[0], dismissButton: arr7[1] } = tmp);
  items4[2] = closure_15(closure_6, obj3);
  return closure_16(View, obj);
}
let react = react_mod;
({ Easing: hasOwnProperty, StyleSheet, TouchableOpacity: metroRequire, View: metroImportDefault } = react_native);
({ AnalyticEvents: closure_12, MessageFlags: map1, Routes: closure_14 } = Constants);
const SquarePIPReferenceDimensions = VoicePanelPIPConstants.SquarePIPReferenceDimensions;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { justifyContent: "center", alignItems: "center", height: SquarePIPReferenceDimensions.height, width: SquarePIPReferenceDimensions.width }, pipControls: obj2, pipButton: obj3, dismissButton: { right: 8 }, backButton: { left: 8 }, infoContainer: { justifyContent: "center", alignItems: "center", marginBottom: 8, height: 34 }, infoContainerGradient: obj4, infoContent: { justifyContent: "center", alignItems: "center", alignSelf: "stretch", marginHorizontal: 4 }, actionContainer: { justifyContent: "center", alignItems: "center", width: 48, height: 48, zIndex: 100 }, playPauseButton: size, progressBar: obj5 };
obj2 = { zIndex: 5 };
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { position: "absolute", top: 8, padding: 8, borderRadius: nativeDefault.radii.round, borderWidth: 1, borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT, tintColor: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT };
const merged1 = Object.assign(nativeDefault.shadows.SHADOW_LOW_HOVER);
obj4 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
size = { justifyContent: "center", alignItems: "center", width: 32, height: 32, zIndex: 100, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj5 = { justifyContent: "center", alignItems: "center" };
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
let closure_17 = createStyles(obj);
let closure_19 = { code: "(function MediaPlaybackPipTsx1(){let[withTiming,visible]=this.__closure;return{opacity:withTiming(visible?1:0,{duration:200})};})" };
size = size_mod;
let result = size.fileFinishedImporting("modules/media_panel/native/MediaPlaybackPip.tsx");

export default function MediaPlaybackPip() {
  let activeMediaPlayerSource;
  let closePip;
  let constants2;
  let first;
  let isPlaying;
  let items10;
  let items11;
  let mediaSourceMessage;
  let num4;
  let num5;
  let progress;
  let string2Result;
  let stringResult;
  let tmp3Result;
  let tmp3Result2;
  let tmp = closure_17();
  let obj = react;
  let tmp3 = isPlaying;
  const ref = react.useRef(null);
  const useMediaPlayerManagerStore = isPlaying(closePip[28]).useMediaPlayerManagerStore;
  const tmp5 = isPlaying(closePip[28]);
  const obj2 = isPlaying(closePip[29]);
  const mediaPlayerManagerStore = useMediaPlayerManagerStore(obj2.useShallow((isPlaying) => ({ isPlaying: isPlaying.isPlaying, progress: isPlaying.progress, activeMediaPlayerSource: isPlaying.activeMediaPlayerSource, mediaSourceMessage: isPlaying.mediaSourceMessage, closePip: isPlaying.closePip })));
  isPlaying = mediaPlayerManagerStore.isPlaying;
  ({ progress, activeMediaPlayerSource } = mediaPlayerManagerStore);
  ({ mediaSourceMessage, closePip } = mediaPlayerManagerStore);
  const items = [first];
  const items1 = [activeMediaPlayerSource];
  const obj3 = isPlaying(closePip[13]);
  const stateFromStores = obj3.useStateFromStores(items, () => {
    let messageId;
    let channelId;
    if (activeMediaPlayerSource != null) {
      channelId = tmp.channelId;
    }
    if (activeMediaPlayerSource != null) {
      messageId = tmp.messageId;
    }
    let message = null;
    if (null != channelId) {
      message = null;
      if (null != messageId) {
        message = MessageStore.getMessage(channelId, messageId);
      }
    }
    return message;
  }, items1);
  if (null != stateFromStores) {
    mediaSourceMessage = stateFromStores;
  }
  let hasFlagResult;
  if (mediaSourceMessage != null) {
    let contentMessage = mediaSourceMessage.getContentMessage();
    if (contentMessage != null) {
      let tmp9 = constants;
      hasFlagResult = contentMessage.hasFlag(constants.IS_VOICE_MESSAGE);
    }
  }
  react = tmp10;
  let closure_3 = obj.useRef(null);
  const items2 = [progress, activeMediaPlayerSource, mediaSourceMessage];
  const effect = obj.useEffect(() => {
    const tmp2 = null == ref.current && null != activeMediaPlayerSource && null != progress && null != mediaSourceMessage;
    if (tmp2) {
      const obj = { initialProgress: progress, activeMediaPlayerSource, message: mediaSourceMessage };
      ref.current = obj;
    }
    const tmp9 = null != tmp.current && null != progress;
    if (tmp9) {
      ref.current.finalProgress = progress;
    }
  }, items2);
  const effect1 = obj.useEffect(() => {
    let date = new Date();
    return () => {
      let content_type;
      let finalProgress;
      let id;
      let initialProgress;
      let message;
      let result;
      let result1;
      let result2;
      let current = ref.current;
      if (current == null) {
        current = {};
      }
      ({ activeMediaPlayerSource, message, initialProgress, finalProgress } = current);
      let attachmentIndex;
      if (activeMediaPlayerSource != null) {
        attachmentIndex = activeMediaPlayerSource.attachmentIndex;
      }
      let tmp2 = null;
      if (null != attachmentIndex) {
        let tmp3;
        if (message != null) {
          const contentMessage = message.getContentMessage();
          if (contentMessage != null) {
            tmp3 = contentMessage.attachments[activeMediaPlayerSource.attachmentIndex];
          }
        }
        tmp2 = tmp3;
      }
      let messageId;
      if (activeMediaPlayerSource != null) {
        messageId = activeMediaPlayerSource.messageId;
      }
      const obj = { message_id: messageId, sender_user_id: id, type: content_type, is_voice_message: hasFlagResult, total_duration_secs: result, pip_playback_start_time_secs: result1, pip_playback_end_time_secs: result2, pip_opened_timestamp: date.toISOString(), pip_closed_timestamp: date.toISOString() };
      id = undefined;
      if (message != null) {
        id = message.author.id;
      }
      content_type = undefined;
      if (tmp2 != null) {
        content_type = tmp2.content_type;
      }
      hasFlagResult = undefined;
      if (message != null) {
        const contentMessage1 = message.getContentMessage();
        if (contentMessage1 != null) {
          hasFlagResult = contentMessage1.hasFlag(constants2.IS_VOICE_MESSAGE);
        }
      }
      let duration;
      if (finalProgress != null) {
        duration = finalProgress.duration;
      }
      result = undefined;
      if (null != duration) {
        result = duration / 1000;
      }
      let time;
      if (initialProgress != null) {
        time = initialProgress.time;
      }
      result1 = undefined;
      if (null != time) {
        result1 = time / 1000;
      }
      let time1;
      if (finalProgress != null) {
        time1 = finalProgress.time;
      }
      result2 = undefined;
      if (null != time1) {
        result2 = time1 / 1000;
      }
      date = new Date();
      const obj5 = activeMediaPlayerSource(closePip[27]);
      obj5.track(constants.MEDIA_PIP_ENDED, obj);
    };
  }, []);
  const tmp13 = mediaSourceMessage(obj.useState(false), 2);
  first = tmp13[0];
  let closure_6 = tmp15;
  const items3 = [first, tmp13[1], isPlaying];
  const effect2 = obj.useEffect(() => {
    let closure_0;
    let tmp = first;
    if (tmp) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        const tmp = closure_0;
        if (tmp) {
          closure_1_6(false);
        }
      }, 3000);
    }
    return () => clearTimeout(closure_0);
  }, items3);
  const dismissPanel = obj.useContext(activeMediaPlayerSource(tmp4[30])).dismissPanel;
  const items4 = [dismissPanel, closePip];
  const handleClosePip = obj.useCallback(() => {
    dismissPanel();
    closePip();
    const obj = MediaPlayerManagerDefault;
    obj.pauseCurrentPlayer();
  }, items4);
  let isCompleted;
  const useEffect = obj.useEffect;
  if (progress != null) {
    isCompleted = progress.isCompleted;
  }
  const items5 = [isCompleted, handleClosePip];
  const effect3 = useEffect(() => {
    let closure_0;
    let isCompleted;
    if (progress != null) {
      isCompleted = progress.isCompleted;
    }
    if (isCompleted) {
      const _setTimeout = setTimeout;
      progress = setTimeout(() => {
        callback();
      }, 2000);
    }
    return () => {
      clearTimeout(closure_0);
    };
  }, items5);
  if (!first) {
    let isCompleted1;
    if (progress != null) {
      isCompleted1 = progress.isCompleted;
    }
    first = true === isCompleted1;
  }
  const items6 = [isPlaying];
  const items7 = [isPlaying];
  const callback1 = obj.useCallback(() => {
    const obj = MediaPlayerManagerDefault;
    if (isPlaying) {
      obj.pauseCurrentPlayer();
      closure_6(true);
    } else {
      obj.playCurrentPlayer();
    }
  }, items6);
  const items8 = [mediaSourceMessage, activeMediaPlayerSource, tmp10, first];
  const memo = obj.useMemo(() => {
    let PlayIcon;
    const tmp = closure_15;
    if (isPlaying) {
      PlayIcon = tmp2(8957).PauseIcon;
    } else {
      PlayIcon = tmp2(8955).PlayIcon;
    }
    const obj = { color: nativeDefault.colors.WHITE, size: "md" };
    return tmp(PlayIcon, obj);
  }, items7);
  const items9 = [mediaSourceMessage, handleClosePip, first, tmp10];
  const memo1 = obj.useMemo(() => {
    const obj = { message: mediaSourceMessage, activeMediaPlayerSource, isVoiceMessage: react, isControlVisible: first };
    return closure_15(MediaInfo, obj);
  }, items8);
  const memo2 = obj.useMemo(() => {
    const obj = { message: mediaSourceMessage, handleClosePip, visible: first, isVoiceMessage: react };
    return closure_15(PiPControls, obj);
  }, items9);
  const intl = tmp3(tmp4[23]).intl;
  const string = intl.string;
  const t = tmp3(tmp4[23]).t;
  if (hasFlagResult) {
    stringResult = string(t.AlHqHT);
  } else {
    stringResult = string(t.RscU7I);
  }
  const intl2 = tmp3(tmp4[23]).intl;
  const string2 = intl2.string;
  const t2 = tmp3(tmp4[23]).t;
  if (hasFlagResult) {
    string2Result = string2(t2["3XohGn"]);
  } else {
    string2Result = string2(t2.ZcgDJX);
  }
  let num = 0;
  if (null != progress) {
    num = progress.time / progress.duration * 100;
  }
  let num3 = 0;
  if (null != progress) {
    num3 = progress.duration - progress.time;
  }
  const obj4 = {
    style: tmp.container,
    activeOpacity: 1,
    onPress() {
      const tmp = !isPlaying && first;
      if (!tmp) {
        closure_6(!first);
      }
    },
    accessible: false,
    children: items10
  };
  items10 = [memo2, memo1, ];
  let obj5 = { style: tmp.actionContainer, children: items11 };
  const obj6 = { style: tmp.progressBar, size: 48, width: 2, prefill: num, easing: first.out(first.linear), duration: num4, fill: num5, rotation: 0, lineCap: "round", ref, tintColor: tmp3Result.useToken(activeMediaPlayerSource(closePip[11]).colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT), backgroundColor: tmp3Result2.useToken(activeMediaPlayerSource(closePip[11]).colors.BACKGROUND_MOD_MUTED) };
  const AnimatedCircularProgress = tmp3(tmp4[33]).AnimatedCircularProgress;
  num4 = 0;
  const tmp30 = dismissPanel;
  if (isPlaying) {
    num4 = num3;
  }
  num5 = 100;
  if (!isPlaying) {
    num5 = num;
  }
  tmp3Result = tmp3(closePip[12]);
  tmp3Result2 = tmp3(closePip[12]);
  items11 = [closure_15(AnimatedCircularProgress, obj6), ];
  const obj7 = { style: tmp.playPauseButton, onPress: callback1, accessibilityRole: "button", accessibilityLabel: stringResult, children: memo };
  if (isPlaying) {
    stringResult = string2Result;
  }
  items11[1] = closure_15(closure_6, obj7);
  items10[2] = closure_16(tmp30, obj5);
  return closure_16(closure_6, obj4);
};
