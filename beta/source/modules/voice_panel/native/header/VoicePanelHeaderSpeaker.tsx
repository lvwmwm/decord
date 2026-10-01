// Module ID: 16943
// Function ID: 16944
// Name: VoicePanelHeaderSpeaker
// Dependencies: [109, 19, 17, 16944, 4853, 9098, 16945, 2045, 4854, 1074, 21, 16946, 16918, 9097, 9260, 8962, 563, 9258, 9240, 16950, 1364, 9127, 9099, 1115, 9124, 9126, 16951, 9241, 4654, 2029, 5901, 16859, 13934, 2]

// Module 16943 (VoicePanelHeaderSpeaker)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import intl4 from "intl" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4654 */;
import NativeViewDefault from "NativeView" /* 5901 */;
import getConsoleIconDefault from "getConsoleIcon" /* 9258 */;
import VoicePanelIconButtonDefault from "VoicePanelIconButton" /* 16859 */;
import ConsoleVoiceUpsellStore from "ConsoleVoiceUpsellStore" /* 16944 */;
import useSpeakerTooltipsDefault from "useSpeakerTooltips" /* 16946 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react_mod from "react" /* 19 */;
import GameConsoleStore from "GameConsoleStore" /* 4853 */;
import AudioRouteStore from "AudioRouteStore" /* 9098 */;
import AudioRouteSwitchingStore from "AudioRouteSwitchingStore" /* 16945 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import SessionsStore from "SessionsStore" /* 4854 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_12;

let closure_14;
let closure_15;
let closure_16;
let tmp;
const showAudioOutputSelector = tmp(9127);
let closure_3 = ["ref"];
let react = react_mod;
const NativeModules = react_native.NativeModules;
const setVoiceUpsellDismissed = ConsoleVoiceUpsellStore.setVoiceUpsellDismissed;
const PlatformTypes = Constants.PlatformTypes;
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = Fragment);
let closure_17 = [];
let closure_18 = react.memo((arg0) => {
  let canShowTooltip;
  let targetRef;
  ({ targetRef, canShowTooltip } = arg0);
  useSpeakerTooltipsDefault(targetRef, canShowTooltip);
  return null;
});
const memoResult = react.memo(function VoicePanelHeaderSpeaker(isConnectedToVoiceChannel) {
  let c5;
  let c6;
  let items8;
  isConnectedToVoiceChannel = isConnectedToVoiceChannel.isConnectedToVoiceChannel;
  const channelId = isConnectedToVoiceChannel.channelId;
  const style = isConnectedToVoiceChannel.style;
  react = undefined;
  c6 = undefined;
  let disabled;
  closure_12 = undefined;
  let closure_14;
  let onPress;
  let stateFromStores2;
  let ref;
  let tmp = style;
  let tmp2 = channelId(style[12])();
  closure_3 = tmp2;
  let tmp3 = isConnectedToVoiceChannel;
  let obj = isConnectedToVoiceChannel(style[13]);
  const maskedSpeakerStates = obj.useMaskedSpeakerStates();
  const toggleAudio = maskedSpeakerStates.toggleAudio;
  ({ routeSource: c5, isAudioRouteEnabled: c6 } = maskedSpeakerStates);
  let tmp5 = channelId(style[14])();
  let closure_7 = tmp5;
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
  let tmp8 = arr5.length > 0;
  let tmp9 = channelId(style[19])(channelId);
  let tmp10 = tmp9.canConnect && !tmp9.isAtMaxCapacity;
  if (tmp10) {
    let tmp11 = isConnectedToVoiceChannel || tmp8;
    tmp10 = tmp11;
  }
  closure_14 = tmp10;
  const items4 = [channelId, isConnectedToVoiceChannel, toggleAudio];
  onPress = obj5.useCallback(() => {
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      const tmpResult = showAudioOutputSelector;
      const result = tmpResult.showAudioOutputSelector(channelId, isConnectedToVoiceChannel);
    } else {
      toggleAudio(channelId, isConnectedToVoiceChannel);
    }
  }, items4);
  const items5 = [stateFromStores];
  const tmp3Result = tmp3(tmp[16]);
  stateFromStores2 = tmp3Result.useStateFromStores(items5, () => stateFromStores.getCurrentRouteType());
  const items6 = [arr5, channelId, isConnectedToVoiceChannel, stateFromStores2, tmp5];
  const items7 = [tmp2];
  const memo = obj5.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    function _loop(item10074) {
      let intl;
      let intl2;
      let closure_0 = item10074;
      const tmp = PlatformTypes;
      if (item10074.type === PlatformTypes.XBOX) {
        let obj = {
          label: intl.string(intl4.t["qVE/VF"]),
          iconSource: getConsoleIconDefault(item10074.type),
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
      if (item10074.type === tmp.PLAYSTATION) {
        const push2 = items.push;
        const obj2 = {
          label: intl2.string(intl4.t.vzfxmY),
          iconSource: getConsoleIconDefault(item10074.type),
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
    let tmp = isConnectedToVoiceChannel;
    const tmp2 = style;
    let obj = isConnectedToVoiceChannel(style[20]);
    if (!obj.isAndroid()) {
      const tmp3 = arr5;
      if (0 !== arr5.length) {
        const items = [];
        let tmp9 = closure_7;
        let tmp5 = closure_7;
        if (!tmp5) {
          tmp5 = stateFromStores2 !== tmp(tmp2[22]).RouteTypes.SPEAKER;
        }
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
        if (!tmp9) {
          tmp9 = stateFromStores2 !== tmp(tmp2[22]).RouteTypes.RECEIVER;
        }
        if (!tmp9) {
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
        for (const item10074 of tmp3) {
          let tmp16 = _loop(item10074);
          continue;
        }
        return items;
      }
    }
    return ref;
  }, items6);
  const callback = obj5.useCallback(() => {
    const obj = DismissibleContentUnsafeUtils;
    const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
    setVoiceUpsellDismissed(true);
    closure_3.lock();
  }, items7);
  ref = obj5.useRef(null);
  if (tmp10) {
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
      tmp9 = closure_14;
      const tmp3 = _objectWithoutProperties(tmp, closure_3);
      const tmp4 = authStore3;
      const tmp5 = closure_15;
      const tmp7 = closure_18;
      const tmp8 = tmp.ref;
      if (closure_14) {
        tmp9 = isConnectedToVoiceChannel;
      }
      const items = [authStore2(tmp7, obj2), ];
      const obj3 = { style, ref: tmp8, children: authStore2(tmp12, obj4) };
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
      items[1] = authStore2(tmp11, obj3);
      return tmp4(tmp5, obj5);
    }
    const tmp3Result2 = tmp3(tmp[20]);
    if (!tmp3Result2.isAndroid()) {
      let renderButtonResult;
      if (tmp8) {
        let tmp16 = stateFromStores2;
        const obj6 = { children: items8 };
        const obj7 = { targetRef: ref, canShowTooltip: isConnectedToVoiceChannel };
        items8 = [closure_14(closure_18, obj7), ];
        const obj8 = { menuItems: memo, position: "bottom", align: "end", onRequestOpen: callback, onRequestClose: tmp2.unlock, children: renderButton };
        items8[1] = closure_14(tmp3(tmp[32]).MenuPopout, obj8);
        renderButtonResult = stateFromStores2(onPress, obj6);
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
