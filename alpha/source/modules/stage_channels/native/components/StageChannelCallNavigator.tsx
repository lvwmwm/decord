// Module ID: 12815
// Function ID: 12816
// Name: StageChannelCallNavigator
// Dependencies: [32, 19, 17, 1083, 21, 12816, 1652, 5876, 575, 12817, 12884, 12819, 10944, 10943, 9003, 11930, 6003, 12885, 12966, 5314, 12625, 12974, 12975, 12823, 12980, 12989, 12991, 13020, 13021, 5243, 13022, 12844, 2]
// Exports: default

// Module 12815 (StageChannelCallNavigator)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import _mod1652 from "module_1652" /* 1652 */;
import spring_spring from "spring/spring" /* 5876 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 6003 */;
import MessageManagerDefault from "MessageManager" /* 9003 */;
import participantHasVideoDefault from "participantHasVideo" /* 11930 */;
import ModeratorOverlayState from "ModeratorOverlayState" /* 12816 */;
import ModeratorStartStageViewDefault from "ModeratorStartStageView" /* 12817 */;
import StageActionBarButtons from "StageActionBarButtons" /* 12844 */;
import JoinStageViewDefault from "JoinStageView" /* 12884 */;
import ThemeContextProvider_RootThemeContextProvider from "ThemeContextProvider/RootThemeContextProvider" /* 13022 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const _modDef1652 = _mod1652;
let importDefault;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
function ModeratorViewOverlay(channel) {
  let c2;
  let first;
  let items3;
  let obj5;
  let tmp10;
  let tmp11;
  let tmp6;
  let tmp8;
  let tmp9;
  channel = channel.channel;
  first = undefined;
  let tmp = dependencyMap;
  let obj = ModeratorOverlayState;
  [first, [][0]] = obj.useModeratorOverlayChannelState(channel.id);
  let closure_1 = tmp4;
  [tmp6, c2] = _slicedToArray(react.useState(first), 2);
  _slicedToArray(react.useState(first), 2);
  const items = [closure_13, , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[1] = spring_spring.withSpring;
  items[2] = tmp6;
  items[3] = closure_11;
  let c0;
  let c1;
  c2 = undefined;
  [tmp8, tmp9, tmp10, tmp11] = items;
  const obj2 = react;
  class StageChannelCallNavigatorTsx1 {
    constructor() {
      let num = 0;
      const tmp = c0;
      if (c1) {
        num = 1;
      }
      const obj = { opacity: tmp(num, c2) };
      return obj;
    }
  }
  const items1 = [tmp9, tmp10, tmp11];
  StageChannelCallNavigatorTsx1.__closure = items1;
  StageChannelCallNavigatorTsx1.__workletHash = 5590822981710;
  StageChannelCallNavigatorTsx1.__initData = tmp8;
  const items2 = [first];
  const animatedStyle = useAnimatedStyle(StageChannelCallNavigatorTsx1);
  const effect = obj2.useEffect(() => {
    let closure_0;
    const timeout = setTimeout(() => {
      const tmp = closure_0;
      if (!tmp) {
        closure_1_2(false);
      }
    }, 500);
    return () => {
      clearTimeout(closure_0);
    };
  }, items2);
  let tmp15 = null;
  if (tmp6) {
    const obj3 = { style: items3, children: metroImportAll(ModeratorStartStageViewDefault, obj5) };
    items3 = [hasOwnProperty.absoluteFill, , ];
    const obj4 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800 };
    const View = _modDef1652.View;
    items3[1] = obj4;
    items3[2] = animatedStyle;
    obj5 = { channel, onSkip: tmp14 };
    tmp15 = metroImportAll(View, obj3);
  }
  return tmp15;
}
function JoinStageOverlay(channel) {
  let closure_0;
  let first;
  let items2;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  closure_0 = undefined;
  let obj = react;
  channel = channel.channel;
  [first, closure_0] = react.useState(false);
  const items = [closure_15, , , ];
  const useAnimatedStyle = _mod1652.useAnimatedStyle;
  _mod1652;
  items[1] = spring_spring.withSpring;
  items[2] = first;
  items[3] = closure_11;
  let c0;
  let c1;
  let c2;
  [tmp5, tmp6, tmp7, tmp8] = items;
  class StageChannelCallNavigatorTsx2 {
    constructor() {
      let num = 0;
      const tmp = c0;
      if (c1) {
        num = 1;
      }
      const obj = { opacity: tmp(num, c2) };
      return obj;
    }
  }
  const items1 = [tmp6, tmp7, tmp8];
  StageChannelCallNavigatorTsx2.__closure = items1;
  StageChannelCallNavigatorTsx2.__workletHash = 5763143772621;
  StageChannelCallNavigatorTsx2.__initData = tmp5;
  const animatedStyle = useAnimatedStyle(StageChannelCallNavigatorTsx2);
  const effect = obj.useEffect(() => {
    const timeout = setTimeout(() => {
      closure_0(true);
    }, 500);
    return () => {
      clearTimeout(closure_0);
    };
  }, []);
  const obj2 = { style: items2, children: metroImportAll(JoinStageViewDefault, { channel }) };
  items2 = [hasOwnProperty.absoluteFill, , ];
  const obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_800 };
  const View = _modDef1652.View;
  items2[1] = obj3;
  items2[2] = animatedStyle;
  return metroImportAll(View, obj2);
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
let closure_11 = { mass: 0.5, stiffness: 600, damping: 30, overshootClamping: false };
const fullScreen = { fullScreen: { flex: 1 } };
let closure_13 = { code: "(function StageChannelCallNavigatorTsx1(){let[withSpring,showStartStageView,viewAnimationConfig]=this.__closure;return{opacity:withSpring(showStartStageView?1:0,viewAnimationConfig)};})" };
let closure_15 = { code: "(function StageChannelCallNavigatorTsx2(){let[withSpring,showOverlay,viewAnimationConfig]=this.__closure;return{opacity:withSpring(showOverlay?1:0,viewAnimationConfig)};})" };
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
        onClose: function onCloseRTCDebugOverlay() {
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
