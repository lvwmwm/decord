// Module ID: 8940
// Function ID: 8941
// Name: StageChannelCallNavigator
// Dependencies: [32, 19, 17, 1085, 21, 8941, 4566, 5280, 576, 8942, 9397, 8955, 8833, 8832, 9398, 8899, 5037, 9401, 9473, 4540, 8837, 9481, 9482, 8958, 9487, 9497, 9501, 9533, 9534, 4836, 9535, 9353, 2]
// Exports: default

// Module 8940 (StageChannelCallNavigator)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4566 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5037 */;
import spring from "spring" /* 5280 */;
import participantHasVideoDefault from "participantHasVideo" /* 8899 */;
import StageActionBarButtons from "StageActionBarButtons" /* 9353 */;
import JoinStageViewDefault from "JoinStageView" /* 9397 */;
import MessageManagerDefault from "MessageManager" /* 9398 */;
import ThemeContextProvider_RootThemeContextProvider from "ThemeContextProvider/RootThemeContextProvider" /* 9535 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
function ModeratorViewOverlay(channel) {
  let closure_1;
  let closure_3;
  let first;
  let items1;
  let obj6;
  channel = channel.channel;
  first = undefined;
  let first1;
  _slicedToArray = undefined;
  let tmp = first1;
  let obj = first(first1[5]);
  [first, [][0]] = obj.useModeratorOverlayChannelState(channel.id);
  importDefault = tmp4;
  const tmp5 = _slicedToArray(react.useState(first), 2);
  first1 = tmp5[0];
  _slicedToArray = tmp5[1];
  const fn = function s() {
    let num = 0;
    const withSpring = spring.withSpring;
    spring;
    if (first1) {
      num = 1;
    }
    const obj = { opacity: withSpring(num, viewAnimationConfig) };
    return obj;
  };
  const obj2 = first(first1[6]);
  fn.__closure = { withSpring: first(first1[7]).withSpring, showStartStageView: first1, viewAnimationConfig };
  fn.__workletHash = 3663814804791;
  fn.__initData = __initData;
  const items = [first];
  ({ withSpring: first(first1[7]).withSpring, showStartStageView: first1, viewAnimationConfig });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const effect = react.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => {
      const tmp = closure_0;
      if (!tmp) {
        closure_1_3(false);
      }
    }, 500);
    return () => {
      clearTimeout(closure_0);
    };
  }, items);
  let tmp10 = null;
  if (first1) {
    const obj4 = { style: items1, children: closure_8(require("ModeratorStartStageView"), obj6) };
    items1 = [closure_5.absoluteFill, , ];
    const obj5 = { backgroundColor: require("native").unsafe_rawColors.PRIMARY_800 };
    const View = require("ReanimatedRexport").View;
    items1[1] = obj5;
    items1[2] = animatedStyle;
    obj6 = { channel, onSkip: tmp9 };
    tmp10 = closure_8(View, obj4);
  }
  return tmp10;
}
function JoinStageOverlay(channel) {
  let closure_1;
  let items;
  let showOverlay;
  showOverlay = undefined;
  importDefault = undefined;
  channel = channel.channel;
  [showOverlay, importDefault] = react.useState(false);
  let obj = showOverlay(4566);
  const fn = function s() {
    let num = 0;
    const withSpring = spring.withSpring;
    spring;
    if (first) {
      num = 1;
    }
    const obj = { opacity: withSpring(num, viewAnimationConfig) };
    return obj;
  };
  fn.__closure = { withSpring: showOverlay(5280).withSpring, showOverlay, viewAnimationConfig };
  fn.__workletHash = 1929951426580;
  fn.__initData = __initData2;
  ({ withSpring: showOverlay(5280).withSpring, showOverlay, viewAnimationConfig });
  const animatedStyle = obj.useAnimatedStyle(fn);
  const effect = react.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => {
      closure_1_1(true);
    }, 500);
    return () => {
      clearTimeout(closure_0);
    };
  }, []);
  const obj3 = { style: items, children: closure_8(JoinStageViewDefault, { channel }) };
  items = [closure_5.absoluteFill, , ];
  const obj4 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800 };
  const View = ReanimatedRexportDefault.View;
  items[1] = obj4;
  items[2] = animatedStyle;
  return closure_8(View, obj3);
}
function StagePromptWrapper(channel) {
  channel = channel.channel;
  const obj = { children: metroImportAll(StagePromptInner, { channel }) };
  const DisableCustomTheme = ThemeContextProvider_RootThemeContextProvider.DisableCustomTheme;
  return metroImportAll(DisableCustomTheme, obj);
}
function StagePromptInner(channel) {
  channel = channel.channel;
  const obj = { channel, style: closure_17().startStagePrompt };
  return metroImportAll(StageActionBarButtons.AnimatedStartStagePrompt, obj);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ StyleSheet: hasOwnProperty, View: metroRequire } = react_native);
const ThemeTypes = Constants.ThemeTypes;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
const viewAnimationConfig = { mass: 0.5, stiffness: 600, damping: 30, overshootClamping: false, restSpeedThreshold: 0.01, restDisplacementThreshold: 0.01 };
const fullScreen = { fullScreen: { flex: 1 } };
const __initData = { code: "function StageChannelCallNavigatorTsx1(){const{withSpring,showStartStageView,viewAnimationConfig}=this.__closure;return{opacity:withSpring(showStartStageView?1:0,viewAnimationConfig)};}" };
const __initData2 = { code: "function StageChannelCallNavigatorTsx2(){const{withSpring,showOverlay,viewAnimationConfig}=this.__closure;return{opacity:withSpring(showOverlay?1:0,viewAnimationConfig)};}" };
let obj = { startStagePrompt: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_17 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelCallNavigator.tsx");

export default function StageChannelCallNavigator(channel) {
  let _undefined;
  let c5;
  let closure_1;
  let closure_3;
  let closure_4;
  let isLive;
  let isModerator;
  let items3;
  let items5;
  let obj11;
  let obj15;
  let obj7;
  let obj9;
  let tmp11Result;
  let tmp14;
  let tmp19Result;
  let tmp19Result2;
  let tmp29;
  channel = channel.channel;
  importDefault = undefined;
  let first1;
  _slicedToArray = undefined;
  react = undefined;
  c5 = undefined;
  let ref;
  let tmp = channel;
  let tmp2 = first1;
  let obj = channel(first1[11]);
  const stageChannelStartEvent = obj.useStageChannelStartEvent(channel.id);
  ({ isModerator, isLive } = stageChannelStartEvent);
  let obj2 = react;
  const first = _slicedToArray(react.useState(isLive), 1)[0];
  let tmp7 = isModerator;
  const obj3 = channel(first1[12]);
  const isConnectedToVoiceChannel = obj3.useIsConnectedToVoiceChannel(channel);
  if (isModerator) {
    tmp7 = !isLive;
  }
  importDefault = tmp7;
  const tmpResult = tmp(tmp2[5]);
  const tmp4Result = _slicedToArray(tmpResult.useModeratorOverlayChannelState(channel.id), 2);
  first1 = tmp4Result[0];
  _slicedToArray = tmp10;
  const tmp12 = require("useSelectedParticipant")(channel);
  react = tmp12;
  [tmp14, c5] = _slicedToArray(obj2.useState(false), 2);
  const items = [, ];
  ({ id: arr[0], guild_id: arr[1] } = channel);
  _slicedToArray(obj2.useState(false), 2);
  const effect = obj2.useEffect(() => {
    const obj = MessageManagerDefault;
    const obj2 = { guildId: channel.guild_id, channelId: channel.id };
    const messages = obj.fetchMessages(obj2);
  }, items);
  ref = obj2.useRef(channel.id);
  const effect1 = obj2.useEffect(() => {
    ref.current = channel.id;
  });
  const items1 = [tmp12];
  const effect2 = obj2.useEffect(() => {
    const tmp2 = null == closure_4 || participantHasVideoDefault(tmp);
    if (!tmp2) {
      const obj = ChannelRTCActionCreatorsDefault;
      const participant = obj.selectParticipant(ref.current, null);
    }
  }, items1);
  const items2 = [tmp7, tmp4Result[1], first1];
  const effect3 = obj2.useEffect(() => {
    const tmp = first1 && !closure_1;
    if (tmp) {
      closure_3();
    }
  }, items2);
  const obj4 = { actionBar: closure_8(require("StageActionBar"), { channel }), expandedControls: closure_8(require("StageChannelExpandedControls"), { channel }), isTouchingLeftScreenEdge: true, channel };
  const obj5 = { theme: ThemeTypes.DARK, children: tmp19Result2 };
  const ThemeContextProvider = tmp(tmp2[19]).ThemeContextProvider;
  if (null != tmp12) {
    const obj6 = { style: fullScreen.fullScreen, children: tmp29(tmp11Result, obj7) };
    obj7 = { channel, children: items3 };
    const obj8 = { children: closure_8(tmp(tmp2[22]).ChannelCallSingleController, obj9) };
    obj9 = { channel, selectedParticipant: tmp12 };
    tmp11Result = require("RevealProvider");
    const tmp11Result5 = require("GestureContainer");
    items3 = [closure_8(tmp11Result5, obj8), , ];
    const obj10 = { header: closure_8(require("StageActionHeader"), obj11) };
    obj11 = {
      channel,
      fullscreenStream: true,
      onOpenRTCDebugOverlay() {
          return _undefined(true);
        }
    };
    const tmp11Result6 = require("FocusedControls");
    const merged = Object.assign(obj4);
    items3[1] = closure_8(tmp11Result6, obj10);
    const tmp27 = ref;
    tmp29 = closure_9;
    if (tmp19Result) {
      const obj12 = {
        onClose() {
              return _undefined(false);
            }
      };
      tmp19Result = closure_8(require("RTCDebugOverlay"), obj12);
    }
    items3[2] = tmp19Result;
    tmp19Result2 = tmp19(tmp27, obj6);
  } else {
    let tmp11Result7;
    const tmp37 = closure_10;
    if (first1) {
      tmp11Result7 = ModeratorViewOverlay;
    } else {
      if (isLive) {
        if (!isConnectedToVoiceChannel) {
          if (!first1) {
            tmp11Result7 = JoinStageOverlay;
          }
        }
      }
      tmp11Result7 = tmp11(tmp2[26]);
    }
    const obj13 = { channel };
    const items4 = [closure_8(tmp11Result7, obj13), ];
    const obj14 = { header: closure_8(importDefault(first1 ? tmp2[27] : tmp2[24]), obj15), children: items5 };
    obj15 = { channel };
    const tmp11Result8 = require("FocusedControls");
    const merged1 = Object.assign(obj4);
    const obj16 = { channel };
    items5 = [closure_8(require("ActiveSpeakerTooltip"), obj16), ];
    if (isModerator) {
      isModerator = !first;
    }
    if (isModerator) {
      isModerator = !first1;
    }
    if (isModerator) {
      const obj17 = { channel };
      isModerator = tmp19(StagePromptWrapper, obj17);
    }
    const obj18 = { children: items4 };
    items5[1] = isModerator;
    items4[1] = closure_9(tmp11Result8, obj14);
    tmp19Result2 = tmp36(tmp37, obj18);
  }
  return closure_8(ThemeContextProvider, obj5);
};
