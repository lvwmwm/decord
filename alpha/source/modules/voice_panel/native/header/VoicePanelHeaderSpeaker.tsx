// Module ID: 19225
// Function ID: 19226
// Name: VoicePanelHeaderSpeaker
// Dependencies: [109, 19, 17, 19226, 5765, 5784, 19227, 4863, 5766, 1072, 21, 19228, 19199, 9221, 11937, 11859, 563, 14738, 11975, 19232, 1375, 9228, 5785, 1113, 9225, 9227, 19233, 14737, 5044, 4847, 6960, 19143, 15819, 2]

// Module 19225 (VoicePanelHeaderSpeaker)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import intl4 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import dismissible_content from "dismissible_content" /* 4847 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5044 */;
import NativeViewDefault from "NativeView" /* 6960 */;
import getConsoleIconDefault from "getConsoleIcon" /* 14738 */;
import VoicePanelIconButtonDefault from "VoicePanelIconButton" /* 19143 */;
import ConsoleVoiceUpsellStore from "ConsoleVoiceUpsellStore" /* 19226 */;
import useSpeakerTooltipsDefault from "useSpeakerTooltips" /* 19228 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 5765 */;
import AudioRouteStore from "AudioRouteStore" /* 5784 */;
import AudioRouteSwitchingStore from "AudioRouteSwitchingStore" /* 19227 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import SessionsStore from "SessionsStore" /* 5766 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_14;
let closure_15;
let closure_16;
let tmp;
const showAudioOutputSelector = tmp(9228);
let closure_3 = ["ref"];
let react = react_mod;
const NativeModules = react_native.NativeModules;
const setVoiceUpsellDismissed = ConsoleVoiceUpsellStore.setVoiceUpsellDismissed;
const PlatformTypes = Constants.PlatformTypes;
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = Fragment);
let closure_17 = [];
let closure_18 = react.memo(function SpeakerTooltipEffects(arg0) {
  let canShowTooltip;
  let targetRef;
  ({ targetRef, canShowTooltip } = arg0);
  useSpeakerTooltipsDefault(targetRef, canShowTooltip);
  return null;
});
const memoResult = react.memo(function VoicePanelHeaderSpeaker(isConnectedToVoiceChannel) {
  let c5;
  let c6;
  let items10;
  isConnectedToVoiceChannel = isConnectedToVoiceChannel.isConnectedToVoiceChannel;
  const channelId = isConnectedToVoiceChannel.channelId;
  const style = isConnectedToVoiceChannel.style;
  react = undefined;
  c6 = undefined;
  let disabled;
  let closure_12;
  let closure_15;
  let canConnect;
  let onPress;
  let stateFromStores3;
  let ref;
  let tmp2 = style;
  let tmp = channelId;
  let tmp3 = channelId(style[12])();
  closure_3 = tmp3;
  let tmp4 = isConnectedToVoiceChannel;
  let obj = isConnectedToVoiceChannel(style[13]);
  const maskedSpeakerStates = obj.useMaskedSpeakerStates();
  const toggleAudio = maskedSpeakerStates.toggleAudio;
  ({ routeSource: c5, isAudioRouteEnabled: c6 } = maskedSpeakerStates);
  const tmp6 = channelId(style[14])();
  let closure_7 = tmp6;
  const awaitingRemoteSessionInfo = channelId(style[15])();
  let obj2 = isConnectedToVoiceChannel(style[16]);
  let items = [awaitingRemoteSessionInfo];
  const stateFromStores = obj2.useStateFromStores(items, () => awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  let obj3 = isConnectedToVoiceChannel(style[16]);
  const items1 = [disabled];
  disabled = obj3.useStateFromStores(items1, () => disabled.getQueueAudioSwap());
  let obj4 = isConnectedToVoiceChannel(style[16]);
  const items2 = [closure_12];
  const stateFromStores1 = obj4.useStateFromStores(items2, () => {
    let str;
    const getSessionById = SessionsStore.getSessionById;
    if (awaitingRemoteSessionInfo != null) {
      str = awaitingRemoteSessionInfo.sessionId;
    }
    if (str == null) {
      str = "";
    }
    return getSessionById(str);
  });
  let obj5 = react;
  const items3 = [stateFromStores, stateFromStores1];
  closure_12 = react.useMemo(() => {
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
  const arr5 = channelId(style[18])();
  const items4 = [stateFromStores1];
  const items5 = [channelId];
  const obj6 = isConnectedToVoiceChannel(style[16]);
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
  closure_15 = tmp10;
  let tmp11 = tmp(tmp2[19])(channelId);
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
  const items7 = [stateFromStores];
  const tmp4Result = tmp4(tmp2[16]);
  stateFromStores3 = tmp4Result.useStateFromStores(items7, () => stateFromStores.getCurrentRouteType());
  const items8 = [arr5, tmp10, channelId, isConnectedToVoiceChannel, stateFromStores3, tmp6];
  const items9 = [tmp3];
  const memo = obj5.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let tmp = isConnectedToVoiceChannel;
    const tmp2 = style;
    let obj = isConnectedToVoiceChannel(style[20]);
    if (!obj.isAndroid()) {
      const tmp3 = closure_15;
      if (tmp3) {
        const items = [];
        let tmp4 = closure_7;
        const tmp5 = closure_7 || stateFromStores3 !== tmp(tmp2[22]).RouteTypes.SPEAKER;
        if (!tmp5) {
          let obj2 = {
            label: intl.string(tmp(tmp2[23]).t.gvQIzx),
            iconSource: channelId(tmp2[24]),
            showIconFirst: false,
            action() {
                    const AudioRoutePicker = closure_1_6.AudioRoutePicker;
                    let toggleSpeakerResult;
                    if (AudioRoutePicker != null) {
                      toggleSpeakerResult = AudioRoutePicker.toggleSpeaker(false);
                    }
                    return toggleSpeakerResult;
                  }
          };
          let push = items.push;
          intl = tmp(tmp2[23]).intl;
          push(obj2);
        }
        if (!tmp4) {
          tmp4 = stateFromStores3 !== tmp(tmp2[22]).RouteTypes.RECEIVER;
        }
        if (!tmp4) {
          let push2 = items.push;
          const obj3 = {
            label: intl2.string(tmp(tmp2[23]).t.wwTN1g),
            iconSource: channelId(tmp2[25]),
            showIconFirst: false,
            action() {
                    const AudioRoutePicker = closure_1_6.AudioRoutePicker;
                    let toggleSpeakerResult;
                    if (AudioRoutePicker != null) {
                      toggleSpeakerResult = AudioRoutePicker.toggleSpeaker(true);
                    }
                    return toggleSpeakerResult;
                  }
          };
          intl2 = tmp(tmp2[23]).intl;
          push2(obj3);
        }
        const push3 = items.push;
        const obj4 = {
          label: intl3.string(tmp(tmp2[23]).t.dnI0AL),
          iconSource: channelId(tmp2[26]),
          showIconFirst: false,
          action() {
                const obj = isConnectedToVoiceChannel(style[21]);
                const result = obj.showAudioOutputSelector(channelId, items);
              }
        };
        intl3 = tmp(tmp2[23]).intl;
        push3(obj4);
        function _loop(iter) {
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
                  const channel = stateFromStores1.getChannel(closure_2_1);
                  if (null != channel) {
                    const obj = items(style[27]);
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
                  const channel = stateFromStores1.getChannel(closure_2_1);
                  if (null != channel) {
                    const obj = items(style[27]);
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
          let _loopResult = _loop(iter.next());
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
        tmp = { onPress, ref: "a" };
        const obj = { onPress, ref: "a" };
      }
      const obj2 = { targetRef: tmp.ref, canShowTooltip: tmp9 };
      tmp9 = !stateFromStores2;
      const tmp3 = _objectWithoutProperties(tmp, closure_3);
      const tmp4 = authStore4;
      const tmp5 = closure_15;
      const tmp7 = closure_18;
      const tmp8 = tmp.ref;
      if (!stateFromStores2) {
        tmp9 = canConnect;
      }
      if (tmp9) {
        tmp9 = isConnectedToVoiceChannel;
      }
      const items = [authStore3(tmp7, obj2), ];
      const obj3 = { style, ref: tmp8, children: authStore3(tmp12, obj4) };
      obj4 = { ref: tmp.ref, disabled, overrideVariant: str, loading: null != stateFromStores, icon: tmp15, accessibilityLabel: intl.string(intl4.t.dnI0AL) };
      const tmp11 = NativeViewDefault;
      tmp12 = VoicePanelIconButtonDefault;
      const merged = Object.assign(tmp3);
      str = undefined;
      if (isConnectedToVoiceChannel) {
        if (c6) {
          str = "primary-overlay";
        }
      }
      tmp15 = closure_12;
      if (closure_12 == null) {
        tmp15 = c5;
      }
      const obj5 = { children: items };
      intl = intl4.intl;
      items[1] = authStore3(tmp11, obj3);
      return tmp4(tmp5, obj5);
    }
    const tmp4Result2 = tmp4(tmp2[20]);
    if (!tmp4Result2.isAndroid()) {
      let renderButtonResult;
      if (tmp10) {
        const obj7 = { children: items10 };
        const obj8 = { targetRef: ref, canShowTooltip: isConnectedToVoiceChannel };
        items10 = [stateFromStores2(stateFromStores3, obj8), ];
        const obj9 = { menuItems: memo, position: "bottom", align: "end", onRequestOpen: callback, onRequestClose: tmp3.unlock, children: renderButton };
        items10[1] = stateFromStores2(tmp4(tmp2[32]).MenuPopout, obj9);
        renderButtonResult = canConnect(closure_15, obj7);
      }
      return renderButtonResult;
    }
    renderButtonResult = renderButton();
  } else {
    return null;
  }
});
let result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderSpeaker.tsx");

export default memoResult;
