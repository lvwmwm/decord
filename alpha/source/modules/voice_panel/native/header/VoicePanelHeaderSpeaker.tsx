// Module ID: 17792
// Function ID: 17793
// Name: VoicePanelHeaderSpeaker
// Dependencies: [109, 19, 17, 17793, 5111, 5132, 17794, 2065, 5112, 1085, 21, 558, 17795, 576, 17737, 8785, 11070, 11025, 573, 13022, 11108, 17799, 1382, 8792, 5133, 1126, 8789, 8791, 17800, 13021, 4938, 2049, 6161, 17722, 14202, 2]

// Module 17792 (VoicePanelHeaderSpeaker)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4938 */;
import NativeViewDefault from "NativeView" /* 6161 */;
import useOnConnectToConsole from "useOnConnectToConsole" /* 13021 */;
import getConsoleIconDefault from "getConsoleIcon" /* 13022 */;
import VoicePanelIconButtonDefault from "VoicePanelIconButton" /* 17722 */;
import ConsoleVoiceUpsellStore from "ConsoleVoiceUpsellStore" /* 17793 */;
import useSpeakerTooltipsDefault from "useSpeakerTooltips" /* 17795 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;
import GameConsoleStore_mod from "GameConsoleStore" /* 5111 */;
import AudioRouteStore from "AudioRouteStore" /* 5132 */;
import AudioRouteSwitchingStore from "AudioRouteSwitchingStore" /* 17794 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import SessionsStore from "SessionsStore" /* 5112 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_15;
let closure_16;
let closure_17;
let tmp;
const showAudioOutputSelector = tmp(8792);
let closure_3 = ["ref"];
let closure_4 = ["ref"];
let react = react_mod;
const NativeModules = react_native.NativeModules;
const setVoiceUpsellDismissed = ConsoleVoiceUpsellStore.setVoiceUpsellDismissed;
let GameConsoleStore = GameConsoleStore_mod;
const PlatformTypes = Constants.PlatformTypes;
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = Fragment);
let closure_18 = [];
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SpeakerTooltipEffects(arg0) {
  let canShowTooltip;
  let targetRef;
  ({ targetRef, canShowTooltip } = arg0);
  useSpeakerTooltipsDefault(targetRef, canShowTooltip);
  return null;
}) : (function SpeakerTooltipEffects(arg0) {
  let canShowTooltip;
  let targetRef;
  ({ targetRef, canShowTooltip } = arg0);
  useSpeakerTooltipsDefault(targetRef, canShowTooltip);
  return null;
}));
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelHeaderSpeaker(isConnectedToVoiceChannel) {
  let canConnect;
  let loading;
  let onPress;
  let stateFromStores3;
  let style;
  let targetRef;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp18;
  let tmp22;
  let tmp27;
  let tmp29;
  let tmp31;
  let tmp32;
  let tmp9;
  let tmp = isConnectedToVoiceChannel;
  const tmp2 = style;
  let obj = isConnectedToVoiceChannel(style[13]);
  const cResult = obj.c(53);
  isConnectedToVoiceChannel = isConnectedToVoiceChannel.isConnectedToVoiceChannel;
  const channelId = isConnectedToVoiceChannel.channelId;
  style = isConnectedToVoiceChannel.style;
  let tmp4 = channelId;
  let tmp5 = channelId(style[14])();
  closure_3 = tmp5;
  let obj2 = isConnectedToVoiceChannel(style[15]);
  const maskedSpeakerStates = obj2.useMaskedSpeakerStates();
  const toggleAudio = maskedSpeakerStates.toggleAudio;
  const routeSource = maskedSpeakerStates.routeSource;
  const isAudioRouteEnabled = maskedSpeakerStates.isAudioRouteEnabled;
  let tmp7 = channelId(style[16])();
  let tmp8 = channelId(style[17])();
  let closure_7 = tmp8;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp11 = GameConsoleStore;
    let items = [GameConsoleStore];
    class R {
      constructor() {
        return loading.getAwaitingRemoteSessionInfo();
      }
    }
    cResult[0] = items;
    cResult[1] = R;
    tmp9 = items;
    tmp10 = R;
  } else {
    [tmp9, tmp10] = cResult;
  }
  let tmpResult = tmp(tmp2[18]);
  const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp10);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp15 = stateFromStores3;
    const items1 = [stateFromStores3];
    class R {
      constructor() {
        return loading.getAwaitingRemoteSessionInfo();
      }
    }
    cResult[2] = items1;
    cResult[3] = tmp16;
    tmp14 = tmp16;
    tmp13 = items1;
  } else {
    tmp13 = cResult[2];
    tmp14 = cResult[3];
  }
  const tmpResult4 = tmp(tmp2[18]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp13, tmp14);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [SessionsStore];
    class R {
      constructor() {
        return loading.getAwaitingRemoteSessionInfo();
      }
    }
    cResult[4] = items2;
    tmp18 = items2;
  } else {
    tmp18 = cResult[4];
  }
  let sessionId;
  const tmp20 = cResult[5];
  if (tmp8 != null) {
    sessionId = tmp8.sessionId;
  }
  if (tmp20 !== sessionId) {
    let sessionId1;
    if (tmp8 != null) {
      sessionId1 = tmp8.sessionId;
    }
    const fn = function q() {
      let str;
      const getSessionById = SessionsStore.getSessionById;
      if (closure_7 != null) {
        str = closure_7.sessionId;
      }
      if (str == null) {
        str = "";
      }
      return getSessionById(str);
    };
    class R {
      constructor() {
        return loading.getAwaitingRemoteSessionInfo();
      }
    }
    cResult[5] = sessionId1;
    cResult[6] = fn;
    tmp22 = fn;
  } else {
    tmp22 = cResult[6];
  }
  const tmpResult5 = tmp(tmp2[18]);
  const stateFromStores2 = tmpResult5.useStateFromStores(tmp18, tmp22);
  GameConsoleStore = null != stateFromStores;
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  if (type == null) {
    let os;
    if (stateFromStores2 != null) {
      const clientInfo = stateFromStores2.clientInfo;
      if (clientInfo != null) {
        os = clientInfo.os;
      }
    }
    type = os;
  }
  if (cResult[7] !== type) {
    let tmp28 = null;
    if (null != type) {
      tmp28 = tmp4(tmp2[19])(type);
    }
    class R {
      constructor() {
        return loading.getAwaitingRemoteSessionInfo();
      }
    }
    cResult[8] = tmp28;
    tmp27 = tmp28;
  } else {
    tmp27 = cResult[8];
  }
  const currentRouteType = tmp27;
  const arr4 = tmp4(tmp2[20])();
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [canConnect];
    class R {
      constructor() {
        return loading.getAwaitingRemoteSessionInfo();
      }
    }
    cResult[9] = items3;
    tmp29 = items3;
  } else {
    tmp29 = cResult[9];
  }
  if (cResult[10] !== channelId) {
    class K {
      constructor() {
        const channel = ChannelStore.getChannel(channelId);
        let flag;
        if (channel != null) {
          flag = channel.isGuildStageVoice();
        }
        if (flag == null) {
          flag = false;
        }
        return flag;
      }
    }
    const items4 = [channelId];
    class R {
      constructor() {
        return loading.getAwaitingRemoteSessionInfo();
      }
    }
    cResult[10] = channelId;
    cResult[11] = items4;
    cResult[12] = K;
    tmp32 = K;
    tmp31 = items4;
  } else {
    class K {
      constructor() {
        const channel = ChannelStore.getChannel(channelId);
        let flag;
        if (channel != null) {
          flag = channel.isGuildStageVoice();
        }
        if (flag == null) {
          flag = false;
        }
        return flag;
      }
    }
    tmp32 = cResult[12];
  }
  const tmpResult6 = tmp(tmp2[18]);
  stateFromStores3 = tmpResult6.useStateFromStores(tmp29, tmp32, tmp31);
  let tmp34 = !stateFromStores3;
  if (tmp34) {
    class K {
      constructor() {
        const channel = ChannelStore.getChannel(channelId);
        let flag;
        if (channel != null) {
          flag = channel.isGuildStageVoice();
        }
        if (flag == null) {
          flag = false;
        }
        return flag;
      }
    }
    tmp34 = arr4.length > 0;
  }
  canConnect = tmp4(tmp2[21])(channelId).canConnect;
  let tmp36 = isConnectedToVoiceChannel;
  tmp4(tmp2[21])(channelId);
  if (!tmp36) {
    class K {
      constructor() {
        const channel = ChannelStore.getChannel(channelId);
        let flag;
        if (channel != null) {
          flag = channel.isGuildStageVoice();
        }
        if (flag == null) {
          flag = false;
        }
        return flag;
      }
    }
    if (canConnect) {
      class K {
        constructor() {
          const channel = ChannelStore.getChannel(channelId);
          let flag;
          if (channel != null) {
            flag = channel.isGuildStageVoice();
          }
          if (flag == null) {
            flag = false;
          }
          return flag;
        }
      }
    }
    tmp36 = canConnect;
  }
  canConnect = tmp36;
  if (cResult[13] === channelId) {
    class K {
      constructor() {
        const channel = ChannelStore.getChannel(channelId);
        let flag;
        if (channel != null) {
          flag = channel.isGuildStageVoice();
        }
        if (flag == null) {
          flag = false;
        }
        return flag;
      }
    }
  }
  class Z {
    constructor() {
      const obj = PlatformUtils;
      if (obj.isAndroid()) {
        const tmpResult = showAudioOutputSelector;
        const result = tmpResult.showAudioOutputSelector(channelId, isConnectedToVoiceChannel);
      } else {
        toggleAudio(channelId, isConnectedToVoiceChannel);
      }
    }
  }
  cResult[13] = channelId;
  cResult[14] = isConnectedToVoiceChannel;
  cResult[15] = toggleAudio;
  cResult[16] = Z;
}) : (function VoicePanelHeaderSpeaker(isConnectedToVoiceChannel) {
  let c5;
  let c6;
  let items10;
  isConnectedToVoiceChannel = isConnectedToVoiceChannel.isConnectedToVoiceChannel;
  const channelId = isConnectedToVoiceChannel.channelId;
  const style = isConnectedToVoiceChannel.style;
  c5 = undefined;
  react = undefined;
  let stateFromStores;
  let stateFromStores1;
  let closure_13;
  let closure_16;
  let canConnect;
  let onPress;
  let stateFromStores3;
  let ref;
  let tmp2 = style;
  let tmp = channelId;
  let tmp3 = channelId(style[14])();
  closure_3 = tmp3;
  let tmp4 = isConnectedToVoiceChannel;
  let obj = isConnectedToVoiceChannel(style[15]);
  const maskedSpeakerStates = obj.useMaskedSpeakerStates();
  const toggleAudio = maskedSpeakerStates.toggleAudio;
  ({ routeSource: c5, isAudioRouteEnabled: c6 } = maskedSpeakerStates);
  const tmp6 = channelId(style[16])();
  let closure_7 = tmp6;
  const sessionId = channelId(style[17])();
  let obj2 = isConnectedToVoiceChannel(style[18]);
  let items = [stateFromStores];
  stateFromStores = obj2.useStateFromStores(items, () => stateFromStores.getAwaitingRemoteSessionInfo());
  let obj3 = isConnectedToVoiceChannel(style[18]);
  const items1 = [stateFromStores1];
  const disabled = obj3.useStateFromStores(items1, () => stateFromStores1.getQueueAudioSwap());
  let obj4 = isConnectedToVoiceChannel(style[18]);
  const items2 = [closure_13];
  stateFromStores1 = obj4.useStateFromStores(items2, () => {
    let str;
    const getSessionById = SessionsStore.getSessionById;
    if (sessionId != null) {
      str = sessionId.sessionId;
    }
    if (str == null) {
      str = "";
    }
    return getSessionById(str);
  });
  const loading = null != stateFromStores;
  let obj5 = react;
  const items3 = [stateFromStores, stateFromStores1];
  closure_13 = react.useMemo(() => {
    let type;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    if (type == null) {
      let os;
      if (stateFromStores1 != null) {
        const clientInfo = stateFromStores1.clientInfo;
        if (clientInfo != null) {
          os = clientInfo.os;
        }
      }
      type = os;
    }
    let tmp3 = null;
    if (null != type) {
      tmp3 = getConsoleIconDefault(type);
    }
    return tmp3;
  }, items3);
  const arr5 = channelId(style[20])();
  const items4 = [loading];
  const items5 = [channelId];
  const obj6 = isConnectedToVoiceChannel(style[18]);
  const stateFromStores2 = obj6.useStateFromStores(items4, () => {
    const channel = ChannelStore.getChannel(channelId);
    let flag;
    if (channel != null) {
      flag = channel.isGuildStageVoice();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }, items5);
  let tmp10 = !stateFromStores2;
  if (tmp10) {
    tmp10 = arr5.length > 0;
  }
  closure_16 = tmp10;
  let tmp11 = tmp(tmp2[21])(channelId);
  canConnect = tmp11.canConnect;
  let tmp12 = isConnectedToVoiceChannel;
  if (!tmp12) {
    if (canConnect) {
      canConnect = !tmp11.isAtMaxCapacity;
    }
    if (canConnect) {
      canConnect = tmp10;
    }
    tmp12 = canConnect;
  }
  canConnect = tmp12;
  const items6 = [channelId, isConnectedToVoiceChannel, toggleAudio];
  onPress = obj5.useCallback(() => {
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      const tmpResult = showAudioOutputSelector;
      const result = tmpResult.showAudioOutputSelector(channelId, isConnectedToVoiceChannel);
    } else {
      toggleAudio(channelId, isConnectedToVoiceChannel);
    }
  }, items6);
  const items7 = [disabled];
  const tmp4Result = tmp4(tmp2[18]);
  stateFromStores3 = tmp4Result.useStateFromStores(items7, () => disabled.getCurrentRouteType());
  const items8 = [arr5, tmp10, channelId, isConnectedToVoiceChannel, stateFromStores3, tmp6];
  const items9 = [tmp3];
  const memo = obj5.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let tmp = isConnectedToVoiceChannel;
    const tmp2 = style;
    let obj = isConnectedToVoiceChannel(style[22]);
    if (!obj.isAndroid()) {
      const tmp3 = closure_16;
      if (tmp3) {
        const items = [];
        let tmp4 = closure_7;
        const tmp5 = closure_7 || stateFromStores3 !== tmp(tmp2[24]).RouteTypes.SPEAKER;
        if (!tmp5) {
          let obj2 = {
            label: intl.string(tmp(tmp2[25]).t.gvQIzx),
            iconSource: channelId(tmp2[26]),
            showIconFirst: false,
            action() {
                    const AudioRoutePicker = closure_1_7.AudioRoutePicker;
                    let toggleSpeakerResult;
                    if (AudioRoutePicker != null) {
                      toggleSpeakerResult = AudioRoutePicker.toggleSpeaker(false);
                    }
                    return toggleSpeakerResult;
                  }
          };
          let push = items.push;
          intl = tmp(tmp2[25]).intl;
          push(obj2);
        }
        if (!tmp4) {
          tmp4 = stateFromStores3 !== tmp(tmp2[24]).RouteTypes.RECEIVER;
        }
        if (!tmp4) {
          let push2 = items.push;
          const obj3 = {
            label: intl2.string(tmp(tmp2[25]).t.wwTN1g),
            iconSource: channelId(tmp2[27]),
            showIconFirst: false,
            action() {
                    const AudioRoutePicker = closure_1_7.AudioRoutePicker;
                    let toggleSpeakerResult;
                    if (AudioRoutePicker != null) {
                      toggleSpeakerResult = AudioRoutePicker.toggleSpeaker(true);
                    }
                    return toggleSpeakerResult;
                  }
          };
          intl2 = tmp(tmp2[25]).intl;
          push2(obj3);
        }
        const push3 = items.push;
        const obj4 = {
          label: intl3.string(tmp(tmp2[25]).t.dnI0AL),
          iconSource: channelId(tmp2[28]),
          showIconFirst: false,
          action() {
                const obj = isConnectedToVoiceChannel(style[23]);
                const result = obj.showAudioOutputSelector(channelId, items);
              }
        };
        intl3 = tmp(tmp2[25]).intl;
        push3(obj4);
        function _loop2(iter) {
          let intl;
          let intl2;
          let closure_0 = iter;
          const tmp = PlatformTypes;
          if (iter.type === PlatformTypes.XBOX) {
            let obj = {
              label: intl.string(intl4.t["qVE/VF"]),
              iconSource: getConsoleIconDefault(iter.type),
              showIconFirst: false,
              action() {
                  const channel = loading.getChannel(closure_2_1);
                  if (null != channel) {
                    const obj = items(style[29]);
                    obj.onConnectToConsole(channel, closure_0);
                  }
                }
            };
            const push = items.push;
            intl = intl4.intl;
            push(obj);
          }
          if (iter.type === tmp.PLAYSTATION) {
            const push2 = items.push;
            const obj2 = {
              label: intl2.string(intl4.t.vzfxmY),
              iconSource: getConsoleIconDefault(iter.type),
              showIconFirst: false,
              action() {
                  const channel = loading.getChannel(closure_2_1);
                  if (null != channel) {
                    const obj = items(style[29]);
                    obj.onConnectToConsole(channel, closure_0);
                  }
                }
            };
            intl2 = intl4.intl;
            push2(obj2);
          }
        }
        const iter = arr5[Symbol.iterator]();
        while (iter !== undefined) {
          let _loop2Result = _loop2(iter.next());
          continue;
        }
        return items;
      }
    }
    return onPress;
  }, items8);
  const callback = obj5.useCallback(() => {
    const obj = DismissibleContentUnsafeUtils;
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
    setVoiceUpsellDismissed(true);
    closure_3.lock();
  }, items9);
  ref = obj5.useRef(null);
  if (tmp12) {
    function renderButton(arg0) {
      let intl;
      let obj4;
      let str;
      let tmp12;
      let tmp15;
      let tmp9;
      let tmp = arg0;
      if (arg0 == null) {
        tmp = { onPress, ref: "Array" };
        const obj = { onPress, ref: "Array" };
      }
      const obj2 = { targetRef: tmp.ref, canShowTooltip: tmp9 };
      tmp9 = !stateFromStores2;
      const tmp3 = _objectWithoutProperties(tmp, closure_4);
      const tmp4 = closure_17;
      const tmp5 = authStore4;
      const tmp7 = closure_19;
      const tmp8 = tmp.ref;
      if (!stateFromStores2) {
        tmp9 = canConnect;
      }
      if (tmp9) {
        tmp9 = isConnectedToVoiceChannel;
      }
      const items = [authStore3(tmp7, obj2), ];
      const obj3 = { style, ref: tmp8, children: authStore3(tmp12, obj4) };
      obj4 = { ref: tmp.ref, disabled, overrideVariant: str, loading, icon: tmp15, accessibilityLabel: intl.string(intl4.t.dnI0AL) };
      const tmp11 = NativeViewDefault;
      tmp12 = VoicePanelIconButtonDefault;
      const merged = Object.assign(tmp3);
      str = undefined;
      if (isConnectedToVoiceChannel) {
        if (c6) {
          str = "primary-overlay";
        }
      }
      tmp15 = closure_13;
      if (closure_13 == null) {
        tmp15 = c5;
      }
      const obj5 = { children: items };
      intl = intl4.intl;
      items[1] = authStore3(tmp11, obj3);
      return tmp4(tmp5, obj5);
    }
    const tmp4Result2 = tmp4(tmp2[22]);
    if (!tmp4Result2.isAndroid()) {
      let renderButtonResult;
      if (tmp10) {
        const obj7 = { children: items10 };
        const obj8 = { targetRef: ref, canShowTooltip: isConnectedToVoiceChannel };
        items10 = [stateFromStores2(stateFromStores3, obj8), ];
        const obj9 = { menuItems: memo, position: "bottom", align: "end", onRequestOpen: callback, onRequestClose: tmp3.unlock, children: renderButton };
        items10[1] = stateFromStores2(tmp4(tmp2[34]).MenuPopout, obj9);
        renderButtonResult = canConnect(closure_16, obj7);
      }
      return renderButtonResult;
    }
    renderButtonResult = renderButton();
  } else {
    return null;
  }
}));
let result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderSpeaker.tsx");

export default memoResult;
