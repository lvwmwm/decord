// Module ID: 10651
// Function ID: 83038
// Name: ModeratorViewOverlay
// Dependencies: [57, 31, 27, 482, 33, 10652, 3991, 4542, 689, 10653, 10711, 10655, 10244, 10243, 9910, 10052, 4323, 10712, 10772, 3842, 10559, 10780, 10781, 10658, 10786, 10794, 10798, 10829, 10830, 4130, 10831, 10674, 2]
// Exports: default

// Module 10651 (ModeratorViewOverlay)
import _slicedToArray from "_slicedToArray";
import AgeVerificationSpeakerActionSheet from "AgeVerificationSpeakerActionSheet";
import get_ActivityIndicator from "module_10829";
import { ThemeTypes } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_8;
let closure_9;
const require = arg1;
function ModeratorViewOverlay(channel) {
  channel = channel.channel;
  let obj = first(first1[5]);
  const tmp = callback(obj.useModeratorOverlayChannelState(channel.id), 2);
  first = tmp[0];
  const importDefault = tmp3;
  const tmp4 = callback(React.useState(first), 2);
  first1 = tmp4[0];
  callback = tmp4[1];
  let obj1 = first(first1[6]);
  const fn = function s() {
    const obj = {};
    let num = 0;
    if (first1) {
      num = 1;
    }
    obj.opacity = first(first1[7]).withSpring(num, outer1_11);
    return obj;
  };
  obj = { withSpring: first(first1[7]).withSpring, showStartStageView: first1, viewAnimationConfig: closure_11 };
  fn.__closure = obj;
  fn.__workletHash = 3663814804791;
  fn.__initData = closure_13;
  const items = [first];
  const animatedStyle = obj1.useAnimatedStyle(fn);
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (!closure_0) {
        outer1_3(false);
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
    obj1 = { backgroundColor: importDefault(first1[8]).unsafe_rawColors.PRIMARY_800 };
    items1[1] = obj1;
    items1[2] = animatedStyle;
    obj.style = items1;
    const obj2 = { channel, onSkip: tmp8 };
    obj.children = callback2(importDefault(first1[9]), obj2);
    tmp9 = callback2(importDefault(first1[6]).View, obj);
  }
  return tmp9;
}
function JoinStageOverlay(channel) {
  const tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  const importDefault = tmp[1];
  let obj = first(3991);
  const fn = function s() {
    const obj = {};
    let num = 0;
    if (first) {
      num = 1;
    }
    obj.opacity = first(outer1_2[7]).withSpring(num, outer1_11);
    return obj;
  };
  obj = { withSpring: first(4542).withSpring, showOverlay: first, viewAnimationConfig: closure_11 };
  fn.__closure = obj;
  fn.__workletHash = 1929951426580;
  fn.__initData = closure_14;
  const animatedStyle = obj.useAnimatedStyle(fn);
  const effect = React.useEffect(() => {
    const timeout = setTimeout(() => {
      outer1_1(true);
    }, 500);
    return () => {
      clearTimeout(closure_0);
    };
  }, []);
  obj = {};
  const items = [closure_5.absoluteFill, , ];
  const obj1 = { backgroundColor: importDefault(689).unsafe_rawColors.PRIMARY_800 };
  items[1] = obj1;
  items[2] = animatedStyle;
  obj.style = items;
  obj.children = callback2(importDefault(10711), { channel: channel.channel });
  return callback2(importDefault(3991).View, obj);
}
function StagePromptWrapper(channel) {
  const obj = { children: callback2(StagePromptInner, { channel: channel.channel }) };
  return callback2(require(10831) /* RootThemeContextProvider */.DisableCustomTheme, obj);
}
function StagePromptInner(channel) {
  const tmp = _createForOfIteratorHelperLoose();
  return callback2(require(10674) /* AgeVerificationSpeakerActionSheet */.AnimatedStartStagePrompt, { channel: channel.channel, style: _createForOfIteratorHelperLoose().startStagePrompt });
}
({ StyleSheet: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9, Fragment: closure_10 } = jsxProd);
let closure_11 = { mass: 0.5, stiffness: 600, damping: 30, overshootClamping: false, restSpeedThreshold: 0.01, restDisplacementThreshold: 0.01 };
let closure_12 = { fullScreen: { flex: 1 } };
let closure_13 = { code: "function StageChannelCallNavigatorTsx1(){const{withSpring,showStartStageView,viewAnimationConfig}=this.__closure;return{opacity:withSpring(showStartStageView?1:0,viewAnimationConfig)};}" };
let closure_14 = { code: "function StageChannelCallNavigatorTsx2(){const{withSpring,showOverlay,viewAnimationConfig}=this.__closure;return{opacity:withSpring(showOverlay?1:0,viewAnimationConfig)};}" };
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.startStagePrompt = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/stage_channels/native/components/StageChannelCallNavigator.tsx");

export default function StageChannelCallNavigator(channel) {
  let c5;
  let isLive;
  let isModerator;
  let tmp9;
  channel = channel.channel;
  let importDefault;
  let first;
  let callback;
  let React;
  c5 = undefined;
  let closure_6;
  let obj = channel(first[11]);
  const stageChannelStartEvent = obj.useStageChannelStartEvent(channel.id);
  ({ isModerator, isLive } = stageChannelStartEvent);
  let obj1 = channel(first[12]);
  let tmp3 = isModerator;
  const isConnectedToVoiceChannel = obj1.useIsConnectedToVoiceChannel(channel);
  if (isModerator) {
    tmp3 = !isLive;
  }
  importDefault = tmp3;
  let obj2 = channel(first[5]);
  const tmp4 = callback(obj2.useModeratorOverlayChannelState(channel.id), 2);
  first = tmp4[0];
  callback = tmp6;
  const tmp7 = importDefault(first[13])(channel);
  React = tmp7;
  [tmp9, c5] = callback(React.useState(false), 2);
  const items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  const effect = React.useEffect(() => {
    let obj = _undefined(first[14]);
    obj = { guildId: channel.guild_id, channelId: channel.id };
    const messages = obj.fetchMessages(obj);
  }, items);
  closure_6 = React.useRef(channel.id);
  const effect1 = React.useEffect(() => {
    closure_6.current = channel.id;
  });
  const items1 = [tmp7];
  const effect2 = React.useEffect(() => {
    let tmp = null == c4;
    if (!tmp) {
      tmp = _undefined(first[15])(c4);
    }
    if (!tmp) {
      const participant = _undefined(first[16]).selectParticipant(ref.current, null);
      const obj = _undefined(first[16]);
    }
  }, items1);
  const items2 = [tmp3, tmp4[1], first];
  const effect3 = React.useEffect(() => {
    let tmp = first;
    if (first) {
      tmp = !c1;
    }
    if (tmp) {
      _undefined2();
    }
  }, items2);
  obj = { actionBar: callback2(importDefault(first[17]), { channel }), expandedControls: callback2(importDefault(first[18]), { channel }), isTouchingLeftScreenEdge: true, channel };
  obj = { theme: ThemeTypes.DARK };
  if (null != tmp7) {
    obj1 = { style: fullScreen.fullScreen };
    obj2 = { channel };
    const obj3 = {};
    const tmp34 = callback2;
    const tmp35 = closure_6;
    const tmp37 = closure_9;
    const tmp40 = importDefault(first[20]);
    const obj4 = { channel, selectedParticipant: tmp7 };
    obj3.children = callback2(channel(first[22]).ChannelCallSingleController, obj4);
    const items3 = [callback2(importDefault(first[21]), obj3), , ];
    const obj5 = {};
    const tmp42 = importDefault(first[21]);
    const obj6 = {
      channel,
      fullscreenStream: true,
      onOpenRTCDebugOverlay(arg0) {
          return _undefined3(true);
        }
    };
    obj5.header = callback2(importDefault(first[24]), obj6);
    const merged = Object.assign(obj);
    items3[1] = callback2(importDefault(first[23]), obj5);
    if (tmp9) {
      const obj7 = {
        onClose() {
              return _undefined3(false);
            }
      };
      tmp9 = callback2(importDefault(first[25]), obj7);
    }
    items3[2] = tmp9;
    obj2.children = items3;
    obj1.children = tmp37(tmp40, obj2);
    let tmp54Result = tmp34(tmp35, obj1);
    const tmp46 = importDefault(first[23]);
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
      tmp15 = importDefault(first[26]);
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
    const items5 = [callback2(importDefault(first[28]), obj12), ];
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
    items4[1] = closure_9(importDefault(first[23]), obj10);
    obj8.children = items4;
    tmp54Result = closure_9(closure_10, obj8);
    const tmp18 = closure_9;
    const tmp19 = importDefault;
    const tmp21 = importDefault(first[23]);
    const tmp22 = callback2;
    const tmp54 = closure_9;
    const tmp55 = closure_10;
    const tmp56 = callback2;
  }
  obj.children = tmp54Result;
  return callback2(channel(first[19]).ThemeContextProvider, obj);
};
