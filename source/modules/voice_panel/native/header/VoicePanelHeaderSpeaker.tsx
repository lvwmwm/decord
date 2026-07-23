// Module ID: 15800
// Function ID: 121967
// Name: _createForOfIteratorHelperLoose
// Dependencies: [29, 31, 27, 15801, 4144, 15802, 8837, 1348, 4145, 653, 33, 15804, 15777, 8836, 9056, 8934, 624, 9054, 8933, 15808, 477, 8861, 8838, 1212, 8858, 8860, 15809, 8935, 3946, 1334, 5517, 15717, 13045, 2]

// Module 15800 (_createForOfIteratorHelperLoose)
import DismissibleContent from "DismissibleContent";
import importAllResult from "module_15717";
import { NativeModules } from "onConnectToConsole";
import { setVoiceUpsellDismissed } from "useConsoleVoiceUpsellStore";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import { PlatformTypes } from "ME";
import jsxProd from "set";

let closure_14;
let closure_15;
let closure_16;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
let closure_3 = ["ref"];
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
let closure_17 = [];
let closure_18 = importAllResult.memo((arg0) => {
  let canShowTooltip;
  let targetRef;
  ({ targetRef, canShowTooltip } = arg0);
  importDefault(15804)(targetRef, canShowTooltip);
  return null;
});
const memoResult = importAllResult.memo(function VoicePanelHeaderSpeaker(isConnectedToVoiceChannel) {
  let c5;
  let c6;
  isConnectedToVoiceChannel = isConnectedToVoiceChannel.isConnectedToVoiceChannel;
  const channelId = isConnectedToVoiceChannel.channelId;
  const style = isConnectedToVoiceChannel.style;
  c6 = undefined;
  let stateFromStores;
  let closure_10;
  let closure_12;
  let callback;
  let closure_15;
  let stateFromStores2;
  let ref;
  function renderButton(arg0) {
    let tmp = arg0;
    if (null == arg0) {
      let obj = { onPress: closure_15, ref: undefined };
      tmp = obj;
    }
    obj = {};
    obj = { targetRef: ref };
    let tmp8 = c14;
    if (c14) {
      tmp8 = isConnectedToVoiceChannel;
    }
    obj.canShowTooltip = tmp8;
    const items = [c14(outer1_18, obj), ];
    const obj1 = { style, ref };
    const tmp3 = toggleAudio(tmp, closure_3);
    const tmp4 = stateFromStores2;
    const tmp5 = closure_15;
    const tmp6 = c14;
    const tmp7 = outer1_18;
    const obj2 = { ref: tmp.ref };
    const tmp10 = channelId(style[30]);
    const merged = Object.assign(tmp3);
    obj2["disabled"] = closure_10;
    let str;
    if (isConnectedToVoiceChannel) {
      if (c6) {
        str = "primary-overlay";
      }
    }
    obj2["overrideVariant"] = str;
    obj2["loading"] = null != stateFromStores;
    obj2["icon"] = null != closure_12 ? closure_12 : c5;
    const intl = isConnectedToVoiceChannel(style[23]).intl;
    obj2["accessibilityLabel"] = intl.string(isConnectedToVoiceChannel(style[23]).t.dnI0AL);
    obj1.children = c14(channelId(style[31]), obj2);
    items[1] = c14(tmp10, obj1);
    obj.children = items;
    return tmp4(tmp5, obj);
  }
  let tmp = channelId(style[12])();
  let closure_3 = tmp;
  let obj = isConnectedToVoiceChannel(style[13]);
  const maskedSpeakerStates = obj.useMaskedSpeakerStates();
  const toggleAudio = maskedSpeakerStates.toggleAudio;
  ({ routeSource: c5, isAudioRouteEnabled: c6 } = maskedSpeakerStates);
  let tmp3 = channelId(style[14])();
  const setVoiceUpsellDismissed = tmp3;
  let _isNativeReflectConstruct = channelId(style[15])();
  let obj1 = isConnectedToVoiceChannel(style[16]);
  let items = [_isNativeReflectConstruct];
  stateFromStores = obj1.useStateFromStores(items, () => awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  const items1 = [stateFromStores];
  closure_10 = isConnectedToVoiceChannel(style[16]).useStateFromStores(items1, () => stateFromStores.getQueueAudioSwap());
  const obj3 = isConnectedToVoiceChannel(style[16]);
  const items2 = [closure_12];
  const stateFromStores1 = isConnectedToVoiceChannel(style[16]).useStateFromStores(items2, () => {
    let sessionId;
    if (null != awaitingRemoteSessionInfo) {
      sessionId = awaitingRemoteSessionInfo.sessionId;
    }
    let str = "";
    if (null != sessionId) {
      str = sessionId;
    }
    return sessionById.getSessionById(str);
  });
  const items3 = [stateFromStores, stateFromStores1];
  closure_12 = importAllResult.useMemo(() => {
    let type;
    if (null != stateFromStores) {
      type = stateFromStores.type;
    }
    if (null == type) {
      let os;
      if (null != stateFromStores1) {
        const clientInfo = stateFromStores1.clientInfo;
        if (null != clientInfo) {
          os = clientInfo.os;
        }
      }
      type = os;
    }
    let tmp6 = null;
    if (null != type) {
      tmp6 = channelId(style[17])(type);
    }
    return tmp6;
  }, items3);
  const arr5 = channelId(style[18])();
  let tmp7 = channelId(style[19])(channelId);
  let tmp8 = tmp7.canConnect && !tmp7.isAtMaxCapacity;
  if (tmp8) {
    let tmp9 = isConnectedToVoiceChannel;
    if (!isConnectedToVoiceChannel) {
      tmp9 = tmp6;
    }
    tmp8 = tmp9;
  }
  callback = tmp8;
  const items4 = [channelId, isConnectedToVoiceChannel, toggleAudio];
  closure_15 = importAllResult.useCallback(() => {
    if (obj.isAndroid()) {
      const result = isConnectedToVoiceChannel(style[21]).showAudioOutputSelector(channelId, isConnectedToVoiceChannel);
      const obj2 = isConnectedToVoiceChannel(style[21]);
    } else {
      toggleAudio(channelId, isConnectedToVoiceChannel);
    }
  }, items4);
  const obj4 = isConnectedToVoiceChannel(style[16]);
  const items5 = [closure_10];
  stateFromStores2 = isConnectedToVoiceChannel(style[16]).useStateFromStores(items5, () => currentRouteType.getCurrentRouteType());
  const items6 = [arr5, channelId, isConnectedToVoiceChannel, stateFromStores2, tmp3];
  const items7 = [tmp];
  const memo = importAllResult.useMemo(() => {
    let done;
    let obj = isConnectedToVoiceChannel(style[20]);
    if (!obj.isAndroid()) {
      if (0 !== arr5.length) {
        let items = [];
        let tmp5 = closure_7;
        if (!closure_7) {
          tmp5 = stateFromStores2 !== isConnectedToVoiceChannel(style[22]).RouteTypes.SPEAKER;
        }
        if (!tmp5) {
          obj = {};
          let intl = isConnectedToVoiceChannel(style[23]).intl;
          obj.label = intl.string(isConnectedToVoiceChannel(style[23]).t.gvQIzx);
          obj.iconSource = channelId(style[24]);
          obj.showIconFirst = false;
          obj.action = function action() {
            const AudioRoutePicker = c6.AudioRoutePicker;
            let toggleSpeakerResult;
            if (null != AudioRoutePicker) {
              toggleSpeakerResult = AudioRoutePicker.toggleSpeaker(false);
            }
            return toggleSpeakerResult;
          };
          items.push(obj);
        }
        let tmp10 = closure_7;
        if (!closure_7) {
          tmp10 = stateFromStores2 !== isConnectedToVoiceChannel(style[22]).RouteTypes.RECEIVER;
        }
        if (!tmp10) {
          obj = {};
          let intl2 = isConnectedToVoiceChannel(style[23]).intl;
          obj.label = intl2.string(isConnectedToVoiceChannel(style[23]).t.wwTN1g);
          obj.iconSource = channelId(style[25]);
          obj.showIconFirst = false;
          obj.action = function action() {
            const AudioRoutePicker = c6.AudioRoutePicker;
            let toggleSpeakerResult;
            if (null != AudioRoutePicker) {
              toggleSpeakerResult = AudioRoutePicker.toggleSpeaker(true);
            }
            return toggleSpeakerResult;
          };
          items.push(obj);
        }
        const obj1 = {};
        const intl3 = isConnectedToVoiceChannel(style[23]).intl;
        obj1.label = intl3.string(isConnectedToVoiceChannel(style[23]).t.dnI0AL);
        obj1.iconSource = channelId(style[26]);
        obj1.showIconFirst = false;
        obj1.action = function action() {
          const result = isConnectedToVoiceChannel(style[21]).showAudioOutputSelector(outer1_1, items);
        };
        items.push(obj1);
        function _loop(value) {
          const items = value;
          if (value.type === arr5.XBOX) {
            let obj = {};
            const intl = isConnectedToVoiceChannel(style[23]).intl;
            obj.label = intl.string(isConnectedToVoiceChannel(style[23]).t["qVE/VF"]);
            obj.iconSource = channelId(style[17])(value.type);
            obj.showIconFirst = false;
            obj.action = function action() {
              const channel = stateFromStores1.getChannel(outer2_1);
              if (null != channel) {
                isConnectedToVoiceChannel(style[27]).onConnectToConsole(channel, closure_0);
                const obj = isConnectedToVoiceChannel(style[27]);
              }
            };
            items.push(obj);
          }
          if (value.type === arr5.PLAYSTATION) {
            obj = {};
            const intl2 = isConnectedToVoiceChannel(style[23]).intl;
            obj.label = intl2.string(isConnectedToVoiceChannel(style[23]).t.vzfxmY);
            obj.iconSource = channelId(style[17])(value.type);
            obj.showIconFirst = false;
            obj.action = function action() {
              const channel = stateFromStores1.getChannel(outer2_1);
              if (null != channel) {
                isConnectedToVoiceChannel(style[27]).onConnectToConsole(channel, closure_0);
                const obj = isConnectedToVoiceChannel(style[27]);
              }
            };
            items.push(obj);
          }
        }
        const tmp24 = outer1_19(arr5);
        let iter = tmp24();
        if (!iter.done) {
          do {
            let _loopResult = _loop(iter.value);
            let iter2 = tmp24();
            iter = iter2;
            done = iter2.done;
          } while (!done);
        }
        return items;
      }
    }
    return ref;
  }, items6);
  callback = importAllResult.useCallback(() => {
    const result = isConnectedToVoiceChannel(style[28]).UNSAFE_markDismissibleContentAsDismissed(isConnectedToVoiceChannel(style[29]).DismissibleContent.DONUT_MOBILE_NUX);
    tmp3(true);
    tmp.lock();
  }, items7);
  ref = importAllResult.useRef(null);
  if (tmp8) {
    if (!obj6.isAndroid()) {
      if (tmp6) {
        obj = {};
        obj = { targetRef: ref, canShowTooltip: isConnectedToVoiceChannel };
        const items8 = [callback(closure_18, obj), ];
        obj1 = { menuItems: memo, position: "bottom", align: "end", onRequestOpen: callback, onRequestClose: tmp.unlock, children: renderButton };
        items8[1] = callback(isConnectedToVoiceChannel(style[32]).MenuPopout, obj1);
        obj.children = items8;
        let renderButtonResult = stateFromStores2(closure_15, obj);
      }
      return renderButtonResult;
    }
    renderButtonResult = renderButton();
    obj6 = isConnectedToVoiceChannel(style[20]);
  } else {
    return null;
  }
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderSpeaker.tsx");

export default memoResult;
