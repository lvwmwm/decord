// Module ID: 15764
// Function ID: 120547
// Name: convertMsToSecs
// Dependencies: []
// Exports: default

// Module 15764 (convertMsToSecs)
let StyleSheet;
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
  const arg1 = message;
  const activeMediaPlayerSource = message.activeMediaPlayerSource;
  ({ isVoiceMessage, isControlVisible } = message);
  const tmp = callback4();
  let obj = arg1(closure_2[12]);
  const token = obj.useToken(importDefault(closure_2[11]).colors.BACKGROUND_SURFACE_HIGH);
  let obj1 = arg1(closure_2[13]);
  const items = [closure_8, closure_11, closure_10];
  const items1 = [message];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    let channel_id;
    if (null != message) {
      channel_id = message.channel_id;
    }
    const channel = channel.getChannel(channel_id);
    let channelName = null;
    if (null != channel) {
      const obj = message(closure_2[14]);
      channelName = obj.computeChannelName(channel, closure_11, closure_10, true, true);
    }
    return channelName;
  }, items1);
  const tmp4 = callback(React.useState(0), 2);
  const first = tmp4[0];
  const importDefault = first;
  closure_2 = tmp4[1];
  const tmp6 = callback(React.useState(0), 2);
  const first1 = tmp6[0];
  const callback = first1;
  const React = tmp6[1];
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
              str2 = importDefault(closure_2[15])(contentMessage.attachments[activeMediaPlayerSource.attachmentIndex]);
            }
          }
        }
        obj = {
          onLayout(nativeEvent) {
                  return callback2(nativeEvent.nativeEvent.layout.width);
                },
          children: str2
        };
        const tmp15 = callback2(arg1(closure_2[16]).Text, obj);
        obj = {
          accessibilityElementsHidden: isControlVisible,
          style: tmp.infoContent,
          onLayout(nativeEvent) {
                  return callback(nativeEvent.nativeEvent.layout.width);
                }
        };
        obj1 = { style: tmp.infoContainer };
        let tmp20 = tmp15;
        if (memo) {
          const obj2 = {};
          const obj3 = { flex: 1 };
          obj2.style = obj3;
          const obj4 = { children: tmp15 };
          const items3 = [callback2(arg1(closure_2[17]).Marquee, obj4), ];
          const obj5 = { start: { "Null": false, "Null": true }, end: { "Null": null, "Null": null }, locations: [null, null, null, null, null, null] };
          const items4 = [token, `${tmp2}CC`, `${tmp2}00`, `${tmp2}00`, `${tmp2}CC`, token];
          obj5.colors = items4;
          obj5.style = tmp.infoContainerGradient;
          items3[1] = callback2(importDefault(closure_2[18]), obj5);
          obj2.children = items3;
          tmp20 = callback3(closure_7, obj2);
        }
        const items5 = [tmp20, ];
        let tmp28 = null != stateFromStores;
        if (tmp28) {
          const obj6 = { 9223372036854775807: null, 9223372036854775807: null, 9223372036854775807: null, children: stateFromStores };
          tmp28 = callback2(arg1(closure_2[16]).Text, obj6);
        }
        items5[1] = tmp28;
        obj1.children = items5;
        obj.children = callback3(closure_7, obj1);
        return callback2(closure_7, obj);
      }
    }
  }
  return null;
}
function PiPControls(message) {
  message = message.message;
  const arg1 = message;
  const visible = message.visible;
  const importDefault = visible;
  const isVoiceMessage = message.isVoiceMessage;
  const tmp = callback4();
  const items = [message];
  const callback = React.useCallback(() => {
    if (null != message) {
      if (null != message.channel_id) {
        if (null != message.id) {
          const obj = visible(closure_2[19]);
          obj.trackJump(message.channel_id, message.id, "Media PIP", {});
          const channel = channel.getChannel(message.channel_id);
          let guildId;
          if (null != channel) {
            guildId = channel.getGuildId();
          }
          visible(closure_2[20])(closure_14.CHANNEL(guildId, message.channel_id, message.id), { "Bool(false)": null, "Bool(false)": null });
          const tmp4 = visible(closure_2[20]);
        }
      }
    }
  }, items);
  let obj = arg1(dependencyMap[21]);
  const fn = function u() {
    const obj = {};
    let num = 0;
    if (visible) {
      num = 1;
    }
    obj.opacity = message(closure_2[22]).withTiming(num, { duration: 200 });
    return obj;
  };
  obj = { withTiming: arg1(dependencyMap[22]).withTiming, visible };
  fn.__closure = obj;
  fn.__workletHash = 3641278982291;
  fn.__initData = closure_18;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const intl = arg1(dependencyMap[23]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[23]).t;
  if (isVoiceMessage) {
    let stringResult = string(t.KTonHP);
  } else {
    stringResult = string(t.13/7kX);
  }
  const intl2 = arg1(dependencyMap[23]).intl;
  const string2 = intl2.string;
  const t2 = arg1(dependencyMap[23]).t;
  if (isVoiceMessage) {
    let string2Result = string2(t2.6rhrVG);
  } else {
    string2Result = string2(t2.WAI6xu);
  }
  obj = { style: items1 };
  const items1 = [tmp.pipControls, animatedStyle];
  const items2 = [callback2(arg1(dependencyMap[24]).BackgroundBlurFill, { blurAmount: 0.05 }), , ];
  const obj1 = { disabled: !visible, style: items3, onPress: callback, accessible: true, accessibilityRole: "button" };
  const items3 = [, ];
  ({ pipButton: arr4[0], backButton: arr4[1] } = tmp);
  obj1.accessibilityLabel = stringResult;
  obj1.children = callback2(arg1(dependencyMap[25]).ArrowLargeLeftIcon, { size: "sm" });
  items2[1] = callback2(closure_6, obj1);
  const obj2 = { disabled: !visible, style: items4, onPress: message.handleClosePip, accessible: true, accessibilityRole: "button" };
  const items4 = [, ];
  ({ pipButton: arr5[0], dismissButton: arr5[1] } = tmp);
  obj2.accessibilityLabel = string2Result;
  obj2.children = callback2(arg1(dependencyMap[26]).XLargeIcon, { size: "sm" });
  items2[2] = callback2(closure_6, obj2);
  obj.children = items2;
  return callback3(importDefault(dependencyMap[21]).View, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ Easing: closure_5, StyleSheet, TouchableOpacity: closure_6, View: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
const tmp2 = arg1(dependencyMap[2]);
({ AnalyticEvents: closure_12, MessageFlags: closure_13, Routes: closure_14 } = arg1(dependencyMap[7]));
const SquarePIPReferenceDimensions = arg1(dependencyMap[8]).SquarePIPReferenceDimensions;
const tmp3 = arg1(dependencyMap[7]);
({ jsx: closure_15, jsxs: closure_16 } = arg1(dependencyMap[9]));
let obj = arg1(dependencyMap[10]);
obj = { container: obj };
obj = { height: SquarePIPReferenceDimensions.height, width: SquarePIPReferenceDimensions.width };
const obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1["zIndex"] = 5;
obj.pipControls = obj1;
const obj2 = { yM: "[1-9]", yMEd: "[1-9]", yMMM: "class", yMMMEd: "[^{}\\\\\\0-\\x1F\u007F \\t\\n\\r]", yMMMd: "[^{}\\\\\\0-\\x1F\u007F \\t\\n\\r]", borderRadius: importDefault(dependencyMap[11]).radii.round, borderColor: importDefault(dependencyMap[11]).colors.CONTROL_SECONDARY_BORDER_DEFAULT, tintColor: importDefault(dependencyMap[11]).colors.CONTROL_SECONDARY_TEXT_DEFAULT, backgroundColor: importDefault(dependencyMap[11]).colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT };
const merged1 = Object.assign(importDefault(dependencyMap[11]).shadows.SHADOW_LOW_HOVER);
obj.pipButton = obj2;
obj.dismissButton = { right: 8 };
obj.backButton = { left: 8 };
obj.infoContainer = {};
const merged2 = Object.assign(StyleSheet.absoluteFillObject);
obj.infoContainerGradient = {};
obj.infoContent = { name: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000783591315408, content: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012553428695741913, hash: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004549468503430741, applicationId: 38241935490721804000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
obj.actionContainer = { "Bool(true)": 1118977281899461000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007425802556469844, "Bool(true)": 0.00000000000000000000000000000000000000000000018957385603938207, "Bool(true)": 127277221446309020000000000, "Bool(true)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000037857671149805015 };
const obj4 = { "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, borderRadius: importDefault(dependencyMap[11]).radii.round, backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BRAND };
obj.playPauseButton = obj4;
const obj5 = {};
const merged3 = Object.assign(StyleSheet.absoluteFillObject);
obj5["justifyContent"] = "center";
obj5["alignItems"] = "center";
obj.progressBar = obj5;
let closure_17 = obj.createStyles(obj);
let closure_18 = { code: "function MediaPlaybackPipTsx1(){const{withTiming,visible}=this.__closure;return{opacity:withTiming(visible?1:0,{duration:200})};}" };
const obj3 = {};
const tmp4 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[34]).fileFinishedImporting("modules/media_panel/native/MediaPlaybackPip.tsx");

export default function MediaPlaybackPip() {
  let activeMediaPlayerSource;
  let closePip;
  let mediaSourceMessage;
  let progress;
  const tmp = callback4();
  let obj = arg1(dependencyMap[28]);
  let obj1 = arg1(dependencyMap[29]);
  const mediaPlayerManagerStore = obj.useMediaPlayerManagerStore(obj1.useShallow((isPlaying) => ({ isPlaying: isPlaying.isPlaying, progress: isPlaying.progress, activeMediaPlayerSource: isPlaying.activeMediaPlayerSource, mediaSourceMessage: isPlaying.mediaSourceMessage, closePip: isPlaying.closePip })));
  const isPlaying = mediaPlayerManagerStore.isPlaying;
  const arg1 = isPlaying;
  ({ progress, activeMediaPlayerSource } = mediaPlayerManagerStore);
  const importDefault = activeMediaPlayerSource;
  ({ mediaSourceMessage, closePip } = mediaPlayerManagerStore);
  const dependencyMap = closePip;
  let obj2 = arg1(dependencyMap[13]);
  const items = [closure_9];
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
  let callback = mediaSourceMessage;
  let tmp5 = null == mediaSourceMessage;
  if (!tmp5) {
    const contentMessage = mediaSourceMessage.getContentMessage();
    tmp5 = null == contentMessage;
    const obj4 = contentMessage;
  }
  if (!tmp5) {
    tmp5 = !obj4.hasFlag(constants.IS_VOICE_MESSAGE);
  }
  const React = tmp8;
  function useAnalyticsEffects(activeMediaPlayerSource, progress, mediaSourceMessage) {
    const isPlaying = activeMediaPlayerSource;
    activeMediaPlayerSource = progress;
    const closePip = mediaSourceMessage;
    let closure_3 = tmp8.useRef(null);
    const items = [progress, activeMediaPlayerSource, mediaSourceMessage];
    const effect = tmp8.useEffect(() => {
      let tmp = null == ref.current;
      if (tmp) {
        tmp = null != arg0;
      }
      if (tmp) {
        tmp = null != arg1;
      }
      if (tmp) {
        tmp = null != arg2;
      }
      if (tmp) {
        const obj = { initialProgress: arg1, activeMediaPlayerSource: arg0, message: arg2 };
        ref.current = obj;
      }
      let tmp9 = null != ref.current;
      if (tmp9) {
        tmp9 = null != arg1;
      }
      if (tmp9) {
        ref.current.finalProgress = arg1;
      }
    }, items);
    const effect1 = tmp8.useEffect(() => {
      const arg0 = new Date();
      return () => {
        let activeMediaPlayerSource;
        let finalProgress;
        let initialProgress;
        let message;
        let current = ref.current;
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
            hasFlagResult = contentMessage1.hasFlag(constants2.IS_VOICE_MESSAGE);
          }
        }
        obj.is_voice_message = hasFlagResult;
        let duration;
        if (null != finalProgress) {
          duration = finalProgress.duration;
        }
        obj.total_duration_secs = closure_19(duration);
        let time;
        if (null != initialProgress) {
          time = initialProgress.time;
        }
        obj.pip_playback_start_time_secs = closure_19(time);
        let time1;
        if (null != finalProgress) {
          time1 = finalProgress.time;
        }
        obj.pip_playback_end_time_secs = closure_19(time1);
        obj.pip_opened_timestamp = date.toISOString();
        const date = new Date();
        obj.pip_closed_timestamp = date.toISOString();
        callback(closure_2[27]).track(constants.MEDIA_PIP_ENDED, obj);
      };
    }, []);
  }(activeMediaPlayerSource, progress, mediaSourceMessage);
  const tmp10 = callback(React.useState(false), 2);
  let first = tmp10[0];
  const tmp12 = tmp10[1];
  const items2 = [first, tmp12, isPlaying];
  const effect = React.useEffect(() => {
    if (first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        if (closure_0) {
          callback(false);
        }
      }, 3000);
    }
    return () => clearTimeout(closure_0);
  }, items2);
  const dismissPanel = React.useContext(importDefault(dependencyMap[30])).dismissPanel;
  const items3 = [dismissPanel, closePip];
  callback = React.useCallback(() => {
    dismissPanel();
    closePip();
    activeMediaPlayerSource(closePip[28]).pauseCurrentPlayer();
  }, items3);
  let closure_8 = callback;
  function usePlaybackCompletionEffects(progress, callback) {
    const isPlaying = progress;
    const activeMediaPlayerSource = callback;
    let isCompleted;
    if (null != progress) {
      isCompleted = progress.isCompleted;
    }
    const items = [isCompleted, callback];
    const effect = tmp8.useEffect(() => {
      let isCompleted = null != isCompleted;
      if (isCompleted) {
        isCompleted = isCompleted.isCompleted;
      }
      if (isCompleted) {
        const _setTimeout = setTimeout;
        isCompleted = setTimeout(() => {
          callback();
        }, 2000);
      }
      return () => {
        clearTimeout(closure_0);
      };
    }, items);
  }(progress, callback);
  if (!first) {
    let isCompleted;
    if (null != progress) {
      isCompleted = progress.isCompleted;
    }
    first = true === isCompleted;
  }
  closure_9 = first;
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
    return closure_15(PlayIcon, { color: activeMediaPlayerSource(closePip[11]).colors.WHITE, size: "md" });
  }, items5);
  const items7 = [mediaSourceMessage, callback, first, !tmp5];
  const memo1 = React.useMemo(() => callback(closure_20, { message: mediaSourceMessage, activeMediaPlayerSource, isVoiceMessage: tmp8, isControlVisible: first }), items6);
  const memo2 = React.useMemo(() => callback(closure_21, { message: mediaSourceMessage, handleClosePip: callback, visible: first, isVoiceMessage: tmp8 }), items7);
  const intl = arg1(dependencyMap[23]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[23]).t;
  if (tmp5) {
    let stringResult = string(t.RscU7I);
  } else {
    stringResult = string(t.AlHqHT);
  }
  const intl2 = arg1(dependencyMap[23]).intl;
  const string2 = intl2.string;
  const t2 = arg1(dependencyMap[23]).t;
  if (tmp5) {
    let string2Result = string2(t2.ZcgDJX);
  } else {
    string2Result = string2(t2.3XohGn);
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
  obj1 = { style: tmp.progressBar, prefill: num, easing: first.out(first.linear) };
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
  const tmp24 = tmp12;
  const tmp25 = closure_16;
  const tmp26 = dismissPanel;
  const tmp27 = closure_15;
  obj1.tintColor = arg1(dependencyMap[12]).useToken(importDefault(dependencyMap[11]).colors.CONTROL_PRIMARY_BACKGROUND_DEFAULT);
  const obj8 = arg1(dependencyMap[12]);
  obj1.backgroundColor = arg1(dependencyMap[12]).useToken(importDefault(dependencyMap[11]).colors.BACKGROUND_MOD_MUTED);
  const items9 = [tmp27(arg1(dependencyMap[33]).AnimatedCircularProgress, obj1), ];
  obj2 = { style: tmp.playPauseButton, onPress: callback1, accessibilityRole: "button" };
  if (isPlaying) {
    stringResult = string2Result;
  }
  obj2.accessibilityLabel = stringResult;
  obj2.children = memo;
  items9[1] = closure_15(tmp12, obj2);
  obj.children = items9;
  items8[2] = tmp25(tmp26, obj);
  obj.children = items8;
  return tmp23(tmp24, obj);
};
