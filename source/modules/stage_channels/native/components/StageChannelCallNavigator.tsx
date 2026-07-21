// Module ID: 10611
// Function ID: 82783
// Name: ModeratorViewOverlay
// Dependencies: [503316521, 352321552, 2046820358, 1040187433, 469762077, 33554448, 1912602624, 7581, 2, 31, 27, 653, 33, 4126, 1273, 3989, 10619, 4127, 5388, 1450, 8012, 10620, 10624, 10519, 4524, 5462, 5482, 10588, 10630, 675, 2, 1194, 1906]
// Exports: default

// Module 10611 (ModeratorViewOverlay)
import expandLocation from "expandLocation";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function ModeratorViewOverlay(channel) {
  channel = channel.channel;
  let obj = arg1(dependencyMap[5]);
  const tmp = callback(obj.useModeratorOverlayChannelState(channel.id), 2);
  const first = tmp[0];
  const arg1 = first;
  const importDefault = tmp3;
  const tmp4 = callback(React.useState(first), 2);
  const first1 = tmp4[0];
  const dependencyMap = first1;
  const callback = tmp4[1];
  let obj1 = arg1(dependencyMap[6]);
  const fn = function s() {
    const obj = {};
    let num = 0;
    if (first1) {
      num = 1;
    }
    obj.opacity = first(first1[7]).withSpring(num, closure_11);
    return obj;
  };
  obj = { withSpring: arg1(dependencyMap[7]).withSpring, showStartStageView: first1, viewAnimationConfig: closure_11 };
  fn.__closure = obj;
  fn.__workletHash = 3663814804791;
  fn.__initData = closure_13;
  const items = [first];
  const animatedStyle = obj1.useAnimatedStyle(fn);
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (!closure_0) {
        callback(false);
      }
    }, 500);
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  [][0] = tmp[1];
  let tmp9 = null;
  if (first1) {
    obj = {};
    const items1 = [closure_5.absoluteFill, , ];
    obj1 = { backgroundColor: importDefault(dependencyMap[8]).unsafe_rawColors.PRIMARY_800 };
    items1[1] = obj1;
    items1[2] = animatedStyle;
    obj.style = items1;
    const obj2 = { channel, onSkip: tmp8 };
    obj.children = callback2(importDefault(dependencyMap[9]), obj2);
    tmp9 = callback2(importDefault(dependencyMap[6]).View, obj);
  }
  return tmp9;
}
function JoinStageOverlay(channel) {
  const tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  const arg1 = first;
  const importDefault = tmp[1];
  let obj = arg1(dependencyMap[6]);
  const fn = function s() {
    const obj = {};
    let num = 0;
    if (first) {
      num = 1;
    }
    obj.opacity = first(closure_2[7]).withSpring(num, closure_11);
    return obj;
  };
  obj = { withSpring: arg1(dependencyMap[7]).withSpring, showOverlay: first, viewAnimationConfig: closure_11 };
  fn.__closure = obj;
  fn.__workletHash = 1929951426580;
  fn.__initData = closure_14;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      callback(true);
    }, 500);
    return () => {
      clearTimeout(closure_0);
    };
  }, []);
  obj = {};
  const items = [closure_5.absoluteFill, , ];
  const obj1 = { backgroundColor: importDefault(dependencyMap[8]).unsafe_rawColors.PRIMARY_800 };
  items[1] = obj1;
  items[2] = animatedStyle;
  obj.style = items;
  obj.children = callback2(importDefault(dependencyMap[10]), { channel: channel.channel });
  return callback2(importDefault(dependencyMap[6]).View, obj);
}
function StagePromptWrapper(channel) {
  const obj = { children: callback2(StagePromptInner, { channel: channel.channel }) };
  return callback2(arg1(dependencyMap[30]).DisableCustomTheme, obj);
}
function StagePromptInner(channel) {
  const tmp = expandLocation();
  return callback2(arg1(dependencyMap[31]).AnimatedStartStagePrompt, { channel: channel.channel, style: expandLocation().startStagePrompt });
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ StyleSheet: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
const ThemeTypes = arg1(dependencyMap[3]).ThemeTypes;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = arg1(dependencyMap[4]));
let closure_11 = { EMOJI_REACTIONS_ON_MESSAGES: "cleanHeader", overflow: "NitroWumpusOfferingRight3dIllustration", PREMIUM_TIER_2_PREMIUM_GUILD_3_YEARLY: "SAFETY_SEND_FRIEND_REQUESTS_MUTUAL_FRIENDS", AnnouncementsLockIcon: "setRemoteUserSpeakingStatus", isUploading: "setRemoteUserSpeaking", motorway: "setRemoteUserSpeaking" };
let closure_12 = { fullScreen: { flex: 1 } };
let closure_13 = { code: "function StageChannelCallNavigatorTsx1(){const{withSpring,showStartStageView,viewAnimationConfig}=this.__closure;return{opacity:withSpring(showStartStageView?1:0,viewAnimationConfig)};}" };
let closure_14 = { code: "function StageChannelCallNavigatorTsx2(){const{withSpring,showOverlay,viewAnimationConfig}=this.__closure;return{opacity:withSpring(showOverlay?1:0,viewAnimationConfig)};}" };
expandLocation = {};
expandLocation = { backgroundColor: require("result2").colors.BACKGROUND_SURFACE_HIGH };
expandLocation.startStagePrompt = expandLocation;
expandLocation = expandLocation.createStyles(expandLocation);
const result = _isNativeReflectConstruct.fileFinishedImporting("modules/stage_channels/native/components/StageChannelCallNavigator.tsx");

export default function StageChannelCallNavigator(channel) {
  let isLive;
  let isModerator;
  let tmp9;
  channel = channel.channel;
  const arg1 = channel;
  let importDefault;
  let dependencyMap;
  let callback;
  let React;
  let closure_5;
  let closure_6;
  let obj = arg1(dependencyMap[11]);
  const stageChannelStartEvent = obj.useStageChannelStartEvent(channel.id);
  ({ isModerator, isLive } = stageChannelStartEvent);
  let obj1 = arg1(dependencyMap[12]);
  let tmp3 = isModerator;
  const isConnectedToVoiceChannel = obj1.useIsConnectedToVoiceChannel(channel);
  if (isModerator) {
    tmp3 = !isLive;
  }
  importDefault = tmp3;
  let obj2 = arg1(dependencyMap[5]);
  const tmp4 = callback(obj2.useModeratorOverlayChannelState(channel.id), 2);
  const first = tmp4[0];
  dependencyMap = first;
  callback = tmp6;
  const tmp7 = importDefault(dependencyMap[13])(channel);
  React = tmp7;
  [tmp9, closure_5] = callback(React.useState(false), 2);
  const items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  const effect = React.useEffect(() => {
    let obj = tmp3(first[14]);
    obj = { guildId: channel.guild_id, channelId: channel.id };
    const messages = obj.fetchMessages(obj);
  }, items);
  closure_6 = React.useRef(channel.id);
  const effect1 = React.useEffect(() => {
    closure_6.current = channel.id;
  });
  const items1 = [tmp7];
  const effect2 = React.useEffect(() => {
    let tmp = null == tmp7;
    if (!tmp) {
      tmp = tmp3(first[15])(tmp7);
    }
    if (!tmp) {
      const participant = tmp3(first[16]).selectParticipant(ref.current, null);
      const obj = tmp3(first[16]);
    }
  }, items1);
  const items2 = [tmp3, tmp4[1], first];
  const effect3 = React.useEffect(() => {
    let tmp = first;
    if (first) {
      tmp = !tmp3;
    }
    if (tmp) {
      tmp6();
    }
  }, items2);
  obj = { actionBar: callback2(importDefault(dependencyMap[17]), { channel }), expandedControls: callback2(importDefault(dependencyMap[18]), { channel }), isTouchingLeftScreenEdge: true, channel };
  obj = { theme: ThemeTypes.DARK };
  if (null != tmp7) {
    obj1 = { style: fullScreen.fullScreen };
    obj2 = { channel };
    const obj3 = {};
    const tmp34 = callback2;
    const tmp35 = closure_6;
    const tmp37 = closure_9;
    const tmp40 = importDefault(dependencyMap[20]);
    const obj4 = { channel, selectedParticipant: tmp7 };
    obj3.children = callback2(arg1(dependencyMap[22]).ChannelCallSingleController, obj4);
    const items3 = [callback2(importDefault(dependencyMap[21]), obj3), , ];
    const obj5 = {};
    const tmp42 = importDefault(dependencyMap[21]);
    const obj6 = {
      channel,
      fullscreenStream: true,
      onOpenRTCDebugOverlay(arg0) {
          return _undefined(true);
        }
    };
    obj5.header = callback2(importDefault(dependencyMap[24]), obj6);
    const merged = Object.assign(obj);
    items3[1] = callback2(importDefault(dependencyMap[23]), obj5);
    if (tmp9) {
      const obj7 = {
        onClose() {
              return _undefined(false);
            }
      };
      tmp9 = callback2(importDefault(dependencyMap[25]), obj7);
    }
    items3[2] = tmp9;
    obj2.children = items3;
    obj1.children = tmp37(tmp40, obj2);
    let tmp54Result = tmp34(tmp35, obj1);
    const tmp46 = importDefault(dependencyMap[23]);
  } else {
    const obj8 = {};
    if (first) {
      let tmp15 = ModeratorViewOverlay;
    } else {
      if (isLive) {
        if (!isConnectedToVoiceChannel) {
          if (!first) {
            tmp15 = JoinStageOverlay;
          }
        }
      }
      tmp15 = importDefault(dependencyMap[26]);
    }
    const obj9 = { channel };
    const items4 = [callback2(tmp15, obj9), ];
    const obj10 = {};
    if (first) {
      let tmp24 = tmp23[27];
    } else {
      tmp24 = tmp23[24];
    }
    const obj11 = { channel };
    obj10.header = callback2(importDefault(tmp24), obj11);
    const merged1 = Object.assign(obj);
    const obj12 = { channel };
    const items5 = [callback2(importDefault(dependencyMap[28]), obj12), ];
    if (isModerator) {
      isModerator = !callback(React.useState(isLive), 1)[0];
    }
    if (isModerator) {
      isModerator = !first;
    }
    if (isModerator) {
      const obj13 = { channel };
      isModerator = callback2(StagePromptWrapper, obj13);
    }
    items5[1] = isModerator;
    obj10["children"] = items5;
    items4[1] = closure_9(importDefault(dependencyMap[23]), obj10);
    obj8.children = items4;
    tmp54Result = closure_9(closure_10, obj8);
    const tmp18 = closure_9;
    const tmp19 = importDefault;
    const tmp21 = importDefault(dependencyMap[23]);
    const tmp22 = callback2;
    const tmp54 = closure_9;
    const tmp55 = closure_10;
    const tmp56 = callback2;
  }
  obj.children = tmp54Result;
  return callback2(arg1(dependencyMap[19]).ThemeContextProvider, obj);
};
