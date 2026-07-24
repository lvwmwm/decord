// Module ID: 15947
// Function ID: 123153
// Name: convertMsToSecs
// Dependencies: [57, 31, 27, 1348, 4349, 3767, 1849, 653, 15817, 33, 4130, 689, 3834, 566, 4320, 7987, 4126, 15948, 4554, 6691, 5626, 3991, 4131, 1212, 8416, 5091, 4084, 675, 13511, 3745, 15945, 8332, 8330, 14006, 2]
// Exports: default

// Module 15947 (convertMsToSecs)
import _slicedToArray from "_slicedToArray";
import PauseIcon from "PauseIcon";
import get_ActivityIndicator from "expandLocation";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "CircularProgress";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function convertMsToSecs(arg0) {
  let result;
  if (null != arg0) {
    result = arg0 / 1000;
  }
  return result;
}
function MediaInfo(message) {
  let isControlVisible;
  let isVoiceMessage;
  message = message.message;
  const activeMediaPlayerSource = message.activeMediaPlayerSource;
  ({ isVoiceMessage, isControlVisible } = message);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = message(3834);
  const token = obj.useToken(first(689).colors.BACKGROUND_SURFACE_HIGH);
  let obj1 = message(566);
  const items = [_isNativeReflectConstruct, closure_11, closure_10];
  const items1 = [message];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    let channel_id;
    if (null != message) {
      channel_id = message.channel_id;
    }
    const channel = outer1_8.getChannel(channel_id);
    let channelName = null;
    if (null != channel) {
      const obj = message(4320);
      channelName = obj.computeChannelName(channel, outer1_11, outer1_10, true, true);
    }
    return channelName;
  }, items1);
  const tmp4 = first1(React.useState(0), 2);
  first = tmp4[0];
  const dependencyMap = tmp4[1];
  const tmp6 = first1(React.useState(0), 2);
  first1 = tmp6[0];
  React = tmp6[1];
  const items2 = [first1, first];
  const memo = React.useMemo(() => first1 >= first, items2);
  if (null != message) {
    const contentMessage = message.getContentMessage();
  }
  if (null != message) {
    if (null != contentMessage) {
      if (null != activeMediaPlayerSource) {
        if (isVoiceMessage) {
          let str2 = message.author.username;
        } else {
          str2 = "";
          if (contentMessage.attachments.length > 0) {
            str2 = "";
            if (null != activeMediaPlayerSource.attachmentIndex) {
              str2 = first(7987)(contentMessage.attachments[activeMediaPlayerSource.attachmentIndex]);
            }
          }
        }
        obj = {
          variant: "text-md/semibold",
          lineClamp: 1,
          ellipsizeMode: "clip",
          onLayout(nativeEvent) {
                  return callback(nativeEvent.nativeEvent.layout.width);
                },
          children: str2
        };
        const tmp15 = callback(message(4126).Text, obj);
        obj = {
          accessibilityElementsHidden: isControlVisible,
          style: tmp.infoContent,
          onLayout(nativeEvent) {
                  return dependencyMap(nativeEvent.nativeEvent.layout.width);
                }
        };
        obj1 = { style: tmp.infoContainer };
        let tmp20 = tmp15;
        if (memo) {
          const obj2 = {};
          const obj3 = { flex: 1 };
          obj2.style = obj3;
          const obj4 = { spacing: 20, speed: 0.2, children: tmp15 };
          const items3 = [callback(message(15948).Marquee, obj4), ];
          const obj5 = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, locations: [0, 0.1, 0.2, 0.8, 0.9, 1] };
          const items4 = [token, `${tmp2}CC`, `${tmp2}00`, `${tmp2}00`, `${tmp2}CC`, token];
          obj5.colors = items4;
          obj5.style = tmp.infoContainerGradient;
          items3[1] = callback(first(4554), obj5);
          obj2.children = items3;
          tmp20 = callback2(closure_7, obj2);
        }
        const items5 = [tmp20, ];
        let tmp28 = null != stateFromStores;
        if (tmp28) {
          const obj6 = { variant: "text-xs/medium", color: "text-subtle", lineClamp: 1, children: stateFromStores };
          tmp28 = callback(message(4126).Text, obj6);
        }
        items5[1] = tmp28;
        obj1.children = items5;
        obj.children = callback2(closure_7, obj1);
        return callback(closure_7, obj);
      }
    }
  }
  return null;
}
function PiPControls(message) {
  message = message.message;
  const visible = message.visible;
  const isVoiceMessage = message.isVoiceMessage;
  const tmp = _createForOfIteratorHelperLoose();
  const items = [message];
  const callback = React.useCallback(() => {
    if (null != message) {
      if (null != message.channel_id) {
        if (null != message.id) {
          const obj = visible(outer1_2[19]);
          obj.trackJump(message.channel_id, message.id, "Media PIP", {});
          const channel = outer1_8.getChannel(message.channel_id);
          let guildId;
          if (null != channel) {
            guildId = channel.getGuildId();
          }
          visible(outer1_2[20])(outer1_14.CHANNEL(guildId, message.channel_id, message.id), { navigationReplace: true, openChannel: true });
          const tmp4 = visible(outer1_2[20]);
        }
      }
    }
  }, items);
  let obj = message(3991);
  const fn = function u() {
    const obj = {};
    let num = 0;
    if (visible) {
      num = 1;
    }
    obj.opacity = message(outer1_2[22]).withTiming(num, { duration: 200 });
    return obj;
  };
  obj = { withTiming: message(4131).withTiming, visible };
  fn.__closure = obj;
  fn.__workletHash = 3641278982291;
  fn.__initData = closure_18;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const intl = message(1212).intl;
  const string = intl.string;
  const t = message(1212).t;
  if (isVoiceMessage) {
    let stringResult = string(t.KTonHP);
  } else {
    stringResult = string(t["13/7kX"]);
  }
  const intl2 = message(1212).intl;
  const string2 = intl2.string;
  const t2 = message(1212).t;
  if (isVoiceMessage) {
    let string2Result = string2(t2["6rhrVG"]);
  } else {
    string2Result = string2(t2.WAI6xu);
  }
  obj = { style: items1 };
  items1 = [tmp.pipControls, animatedStyle];
  const items2 = [callback(message(8416).BackgroundBlurFill, { blurAmount: 0.05 }), , ];
  const obj1 = { disabled: !visible, style: items3, onPress: callback, accessible: true, accessibilityRole: "button" };
  items3 = [, ];
  ({ pipButton: arr4[0], backButton: arr4[1] } = tmp);
  obj1.accessibilityLabel = stringResult;
  obj1.children = callback(message(5091).ArrowLargeLeftIcon, { size: "sm" });
  items2[1] = callback(closure_6, obj1);
  const obj2 = { disabled: !visible, style: items4, onPress: message.handleClosePip, accessible: true, accessibilityRole: "button" };
  items4 = [, ];
  ({ pipButton: arr5[0], dismissButton: arr5[1] } = tmp);
  obj2.accessibilityLabel = string2Result;
  obj2.children = callback(message(4084).XLargeIcon, { size: "sm" });
  items2[2] = callback(closure_6, obj2);
  obj.children = items2;
  return callback2(visible(3991).View, obj);
}
({ Easing: closure_5, StyleSheet, TouchableOpacity: closure_6, View: closure_7 } = get_ActivityIndicator);
({ AnalyticEvents: closure_12, MessageFlags: closure_13, Routes: closure_14 } = ME);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
_createForOfIteratorHelperLoose = { container: _createForOfIteratorHelperLoose };
_createForOfIteratorHelperLoose = { justifyContent: "center", alignItems: "center" };
({ height: obj3.height, width: obj3.width } = require("VoicePanelPIPModes").SquarePIPReferenceDimensions);
let obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1["zIndex"] = 5;
_createForOfIteratorHelperLoose.pipControls = obj1;
let obj2 = { position: "absolute", top: 8, padding: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_SECONDARY_BORDER_DEFAULT, tintColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_SECONDARY_TEXT_DEFAULT, backgroundColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT };
const merged1 = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_LOW_HOVER);
_createForOfIteratorHelperLoose.pipButton = obj2;
_createForOfIteratorHelperLoose.dismissButton = { right: 8 };
_createForOfIteratorHelperLoose.backButton = { left: 8 };
_createForOfIteratorHelperLoose.infoContainer = { justifyContent: "center", alignItems: "center", marginBottom: 8, height: 34 };
let obj3 = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose.infoContainerGradient = obj3;
_createForOfIteratorHelperLoose.infoContent = { justifyContent: "center", alignItems: "center", alignSelf: "stretch", marginHorizontal: 4 };
_createForOfIteratorHelperLoose.actionContainer = { justifyContent: "center", alignItems: "center", width: 48, height: 48, zIndex: 100 };
let obj4 = { justifyContent: "center", alignItems: "center", width: 32, height: 32, zIndex: 100, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND };
_createForOfIteratorHelperLoose.playPauseButton = obj4;
let obj5 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj5["justifyContent"] = "center";
obj5["alignItems"] = "center";
_createForOfIteratorHelperLoose.progressBar = obj5;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_18 = { code: "function MediaPlaybackPipTsx1(){const{withTiming,visible}=this.__closure;return{opacity:withTiming(visible?1:0,{duration:200})};}" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/media_panel/native/MediaPlaybackPip.tsx");

export default function MediaPlaybackPip() {
  let activeMediaPlayerSource;
  let closePip;
  let mediaSourceMessage;
  let progress;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = isPlaying(closePip[28]);
  let obj1 = isPlaying(closePip[29]);
  const mediaPlayerManagerStore = obj.useMediaPlayerManagerStore(obj1.useShallow((isPlaying) => ({ isPlaying: isPlaying.isPlaying, progress: isPlaying.progress, activeMediaPlayerSource: isPlaying.activeMediaPlayerSource, mediaSourceMessage: isPlaying.mediaSourceMessage, closePip: isPlaying.closePip })));
  isPlaying = mediaPlayerManagerStore.isPlaying;
  ({ progress, activeMediaPlayerSource } = mediaPlayerManagerStore);
  ({ mediaSourceMessage, closePip } = mediaPlayerManagerStore);
  let obj2 = isPlaying(closePip[13]);
  let items = [first];
  const items1 = [activeMediaPlayerSource];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let channelId;
    if (null != activeMediaPlayerSource) {
      channelId = activeMediaPlayerSource.channelId;
    }
    if (null != activeMediaPlayerSource) {
      const messageId = activeMediaPlayerSource.messageId;
    }
    let message = null;
    if (null != channelId) {
      message = null;
      if (null != messageId) {
        message = first.getMessage(channelId, messageId);
      }
    }
    return message;
  }, items1);
  if (null != stateFromStores) {
    mediaSourceMessage = stateFromStores;
  }
  let tmp5 = null == mediaSourceMessage;
  if (!tmp5) {
    let contentMessage = mediaSourceMessage.getContentMessage();
    tmp5 = null == contentMessage;
    const obj4 = contentMessage;
  }
  if (!tmp5) {
    tmp5 = !obj4.hasFlag(constants.IS_VOICE_MESSAGE);
  }
  const React = tmp8;
  (function useAnalyticsEffects(activeMediaPlayerSource, progress, mediaSourceMessage) {
    let closure_0 = activeMediaPlayerSource;
    let closure_1 = progress;
    let closure_2 = mediaSourceMessage;
    let _slicedToArray = tmp8.useRef(null);
    const items = [progress, activeMediaPlayerSource, mediaSourceMessage];
    const effect = tmp8.useEffect(() => {
      let tmp = null == ref.current;
      if (tmp) {
        tmp = null != closure_0;
      }
      if (tmp) {
        tmp = null != closure_1;
      }
      if (tmp) {
        tmp = null != closure_2;
      }
      if (tmp) {
        const obj = { initialProgress: closure_1, activeMediaPlayerSource: closure_0, message: closure_2 };
        ref.current = obj;
      }
      let tmp9 = null != ref.current;
      if (tmp9) {
        tmp9 = null != closure_1;
      }
      if (tmp9) {
        ref.current.finalProgress = closure_1;
      }
    }, items);
    const effect1 = tmp8.useEffect(() => {
      let date = new Date();
      return () => {
        let activeMediaPlayerSource;
        let finalProgress;
        let initialProgress;
        let message;
        let current = outer1_3.current;
        if (null == current) {
          current = {};
        }
        ({ activeMediaPlayerSource, message, initialProgress, finalProgress } = current);
        let attachmentIndex;
        if (null != activeMediaPlayerSource) {
          attachmentIndex = activeMediaPlayerSource.attachmentIndex;
        }
        let tmp2 = null;
        if (null != attachmentIndex) {
          let tmp3;
          if (null != message) {
            const contentMessage = message.getContentMessage();
            if (null != contentMessage) {
              tmp3 = contentMessage.attachments[activeMediaPlayerSource.attachmentIndex];
            }
          }
          tmp2 = tmp3;
        }
        const obj = {};
        let messageId;
        if (null != activeMediaPlayerSource) {
          messageId = activeMediaPlayerSource.messageId;
        }
        obj.message_id = messageId;
        let id;
        if (null != message) {
          id = message.author.id;
        }
        obj.sender_user_id = id;
        let content_type;
        if (null != tmp2) {
          content_type = tmp2.content_type;
        }
        obj.type = content_type;
        let hasFlagResult;
        if (null != message) {
          const contentMessage1 = message.getContentMessage();
          if (null != contentMessage1) {
            hasFlagResult = contentMessage1.hasFlag(outer3_13.IS_VOICE_MESSAGE);
          }
        }
        obj.is_voice_message = hasFlagResult;
        let duration;
        if (null != finalProgress) {
          duration = finalProgress.duration;
        }
        obj.total_duration_secs = outer3_19(duration);
        let time;
        if (null != initialProgress) {
          time = initialProgress.time;
        }
        obj.pip_playback_start_time_secs = outer3_19(time);
        let time1;
        if (null != finalProgress) {
          time1 = finalProgress.time;
        }
        obj.pip_playback_end_time_secs = outer3_19(time1);
        obj.pip_opened_timestamp = date.toISOString();
        date = new Date();
        obj.pip_closed_timestamp = date.toISOString();
        activeMediaPlayerSource(closePip[27]).track(outer3_12.MEDIA_PIP_ENDED, obj);
      };
    }, []);
  })(activeMediaPlayerSource, progress, mediaSourceMessage);
  const tmp10 = mediaSourceMessage(React.useState(false), 2);
  first = tmp10[0];
  let closure_6 = tmp12;
  const items2 = [first, tmp10[1], isPlaying];
  let effect = React.useEffect(() => {
    if (first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        if (closure_0) {
          outer1_6(false);
        }
      }, 3000);
    }
    return () => clearTimeout(closure_0);
  }, items2);
  const dismissPanel = React.useContext(activeMediaPlayerSource(closePip[30])).dismissPanel;
  const items3 = [dismissPanel, closePip];
  const callback = React.useCallback(() => {
    dismissPanel();
    closePip();
    activeMediaPlayerSource(closePip[28]).pauseCurrentPlayer();
  }, items3);
  (function usePlaybackCompletionEffects(progress, callback) {
    let closure_0 = progress;
    let closure_1 = callback;
    let isCompleted;
    if (null != progress) {
      isCompleted = progress.isCompleted;
    }
    const items = [isCompleted, callback];
    const effect = tmp8.useEffect(() => {
      let isCompleted = null != progress;
      if (isCompleted) {
        isCompleted = progress.isCompleted;
      }
      if (isCompleted) {
        const _setTimeout = setTimeout;
        progress = setTimeout(() => {
          outer1_1();
        }, 2000);
      }
      return () => {
        clearTimeout(closure_0);
      };
    }, items);
  })(progress, callback);
  if (!first) {
    let isCompleted;
    if (null != progress) {
      isCompleted = progress.isCompleted;
    }
    first = true === isCompleted;
  }
  const items4 = [isPlaying];
  const items5 = [isPlaying];
  const callback1 = React.useCallback(() => {
    const obj = activeMediaPlayerSource(closePip[28]);
    if (isPlaying) {
      obj.pauseCurrentPlayer();
      tmp12(true);
    } else {
      obj.playCurrentPlayer();
    }
  }, items4);
  const items6 = [mediaSourceMessage, activeMediaPlayerSource, !tmp5, first];
  const memo = React.useMemo(() => {
    if (isPlaying) {
      let PlayIcon = tmp2(tmp3[31]).PauseIcon;
    } else {
      PlayIcon = tmp2(tmp3[32]).PlayIcon;
    }
    return outer1_15(PlayIcon, { color: activeMediaPlayerSource(closePip[11]).colors.WHITE, size: "md" });
  }, items5);
  const items7 = [mediaSourceMessage, callback, first, !tmp5];
  const memo1 = React.useMemo(() => outer1_15(outer1_20, { message: mediaSourceMessage, activeMediaPlayerSource, isVoiceMessage: PauseIcon, isControlVisible: first }), items6);
  const memo2 = React.useMemo(() => outer1_15(outer1_21, { message: mediaSourceMessage, handleClosePip: callback, visible: first, isVoiceMessage: PauseIcon }), items7);
  const intl = isPlaying(closePip[23]).intl;
  const string = intl.string;
  const t = isPlaying(closePip[23]).t;
  if (tmp5) {
    let stringResult = string(t.RscU7I);
  } else {
    stringResult = string(t.AlHqHT);
  }
  const intl2 = isPlaying(closePip[23]).intl;
  const string2 = intl2.string;
  const t2 = isPlaying(closePip[23]).t;
  if (tmp5) {
    let string2Result = string2(t2.ZcgDJX);
  } else {
    string2Result = string2(t2["3XohGn"]);
  }
  let num = 0;
  if (null != progress) {
    num = progress.time / progress.duration * 100;
  }
  let num3 = 0;
  if (null != progress) {
    num3 = progress.duration - progress.time;
  }
  obj = {
    style: tmp.container,
    activeOpacity: 1,
    onPress() {
      if (!tmp) {
        tmp12(!first);
      }
    },
    accessible: false
  };
  const items8 = [memo2, memo1, ];
  obj = { style: tmp.actionContainer };
  obj1 = { style: tmp.progressBar, size: 48, width: 2, prefill: num, easing: first.out(first.linear) };
  let num4 = 0;
  if (isPlaying) {
    num4 = num3;
  }
  obj1.duration = num4;
  let num5 = 100;
  if (!isPlaying) {
    num5 = num;
  }
  obj1.fill = num5;
  obj1.rotation = 0;
  obj1.lineCap = "round";
  obj1.ref = React.useRef(null);
  const ref = React.useRef(null);
  const tmp23 = closure_16;
  const tmp24 = closure_6;
  const tmp25 = closure_16;
  const tmp26 = dismissPanel;
  const tmp27 = closure_15;
  obj1.tintColor = isPlaying(closePip[12]).useToken(activeMediaPlayerSource(closePip[11]).colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT);
  const obj8 = isPlaying(closePip[12]);
  obj1.backgroundColor = isPlaying(closePip[12]).useToken(activeMediaPlayerSource(closePip[11]).colors.BACKGROUND_MOD_MUTED);
  const items9 = [tmp27(isPlaying(closePip[33]).AnimatedCircularProgress, obj1), ];
  obj2 = { style: tmp.playPauseButton, onPress: callback1, accessibilityRole: "button" };
  if (isPlaying) {
    stringResult = string2Result;
  }
  obj2.accessibilityLabel = stringResult;
  obj2.children = memo;
  items9[1] = closure_15(closure_6, obj2);
  obj.children = items9;
  items8[2] = tmp25(tmp26, obj);
  obj.children = items8;
  return tmp23(tmp24, obj);
};
