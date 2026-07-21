// Module ID: 15672
// Function ID: 119712
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 15672 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
let closure_3 = [null];
let closure_4 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const NativeModules = arg1(dependencyMap[2]).NativeModules;
const setVoiceUpsellDismissed = arg1(dependencyMap[3]).setVoiceUpsellDismissed;
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
const PlatformTypes = arg1(dependencyMap[9]).PlatformTypes;
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = arg1(dependencyMap[10]));
let closure_17 = [];
let closure_18 = importAllResult.memo((arg0) => {
  let canShowTooltip;
  let targetRef;
  ({ targetRef, canShowTooltip } = arg0);
  importDefault(dependencyMap[11])(targetRef, canShowTooltip);
  return null;
});
const tmp2 = arg1(dependencyMap[10]);
const memoResult = importAllResult.memo(function VoicePanelHeaderSpeaker(isConnectedToVoiceChannel) {
  isConnectedToVoiceChannel = isConnectedToVoiceChannel.isConnectedToVoiceChannel;
  const arg1 = isConnectedToVoiceChannel;
  const channelId = isConnectedToVoiceChannel.channelId;
  const importDefault = channelId;
  const dependencyMap = isConnectedToVoiceChannel.style;
  let React;
  let closure_6;
  let closure_9;
  let closure_10;
  let closure_12;
  let tmp8;
  let closure_15;
  let stateFromStores2;
  let closure_17;
  function renderButton(arg0) {
    let tmp = arg0;
    if (null == arg0) {
      let obj = { onPress: closure_15, ref: undefined };
      tmp = obj;
    }
    obj = {};
    obj = { targetRef: ref };
    if (tmp8) {
      const tmp8 = isConnectedToVoiceChannel;
    }
    obj.canShowTooltip = tmp8;
    const items = [tmp8(closure_18, obj), ];
    const obj1 = { style, ref };
    const tmp3 = toggleAudio(tmp, tmp);
    const tmp4 = stateFromStores2;
    const tmp5 = closure_15;
    const tmp6 = tmp8;
    const tmp7 = closure_18;
    const obj2 = { ref: tmp.ref };
    const tmp10 = channelId(style[30]);
    const merged = Object.assign(tmp3);
    obj2["disabled"] = closure_10;
    let str;
    if (isConnectedToVoiceChannel) {
      if (closure_6) {
        str = "primary-overlay";
      }
    }
    obj2["overrideVariant"] = str;
    obj2["loading"] = null != stateFromStores;
    obj2["icon"] = null != closure_12 ? closure_12 : closure_5;
    const intl = isConnectedToVoiceChannel(style[23]).intl;
    obj2["accessibilityLabel"] = intl.string(isConnectedToVoiceChannel(style[23]).t.dnI0AL);
    obj1.children = tmp8(channelId(style[31]), obj2);
    items[1] = tmp8(tmp10, obj1);
    obj.children = items;
    return tmp4(tmp5, obj);
  }
  const tmp = importDefault(dependencyMap[12])();
  let closure_3 = tmp;
  let obj = arg1(dependencyMap[13]);
  const maskedSpeakerStates = obj.useMaskedSpeakerStates();
  const toggleAudio = maskedSpeakerStates.toggleAudio;
  let closure_4 = toggleAudio;
  ({ routeSource: closure_5, isAudioRouteEnabled: closure_6 } = maskedSpeakerStates);
  const tmp3 = importDefault(dependencyMap[14])();
  const setVoiceUpsellDismissed = tmp3;
  let closure_8 = importDefault(dependencyMap[15])();
  let obj1 = arg1(dependencyMap[16]);
  const items = [closure_8];
  const stateFromStores = obj1.useStateFromStores(items, () => awaitingRemoteSessionInfo.getAwaitingRemoteSessionInfo());
  closure_9 = stateFromStores;
  const items1 = [closure_9];
  closure_10 = arg1(dependencyMap[16]).useStateFromStores(items1, () => stateFromStores.getQueueAudioSwap());
  const obj3 = arg1(dependencyMap[16]);
  const items2 = [closure_12];
  const stateFromStores1 = arg1(dependencyMap[16]).useStateFromStores(items2, () => {
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
  let closure_11 = stateFromStores1;
  const items3 = [stateFromStores, stateFromStores1];
  closure_12 = React.useMemo(() => {
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
  const arr5 = importDefault(dependencyMap[18])();
  const PlatformTypes = arr5;
  const tmp7 = importDefault(dependencyMap[19])(channelId);
  tmp8 = tmp7.canConnect && !tmp7.isAtMaxCapacity;
  if (tmp8) {
    let tmp9 = isConnectedToVoiceChannel;
    if (!isConnectedToVoiceChannel) {
      tmp9 = tmp6;
    }
    tmp8 = tmp9;
  }
  const items4 = [channelId, isConnectedToVoiceChannel, toggleAudio];
  closure_15 = React.useCallback(() => {
    if (obj.isAndroid()) {
      const result = isConnectedToVoiceChannel(style[21]).showAudioOutputSelector(channelId, isConnectedToVoiceChannel);
      const obj2 = isConnectedToVoiceChannel(style[21]);
    } else {
      toggleAudio(channelId, isConnectedToVoiceChannel);
    }
  }, items4);
  const obj4 = arg1(dependencyMap[16]);
  const items5 = [closure_10];
  stateFromStores2 = arg1(dependencyMap[16]).useStateFromStores(items5, () => currentRouteType.getCurrentRouteType());
  const items6 = [arr5, channelId, isConnectedToVoiceChannel, stateFromStores2, tmp3];
  const items7 = [tmp];
  const memo = React.useMemo(() => {
    let done;
    let obj = isConnectedToVoiceChannel(style[20]);
    if (!obj.isAndroid()) {
      if (0 !== arr5.length) {
        const items = [];
        const isConnectedToVoiceChannel = items;
        let tmp5 = tmp3;
        if (!tmp3) {
          tmp5 = stateFromStores2 !== isConnectedToVoiceChannel(style[22]).RouteTypes.SPEAKER;
        }
        if (!tmp5) {
          obj = {};
          const intl = isConnectedToVoiceChannel(style[23]).intl;
          obj.label = intl.string(isConnectedToVoiceChannel(style[23]).t.gvQIzx);
          obj.iconSource = channelId(style[24]);
          obj.showIconFirst = false;
          obj.action = function action() {
            const AudioRoutePicker = closure_6.AudioRoutePicker;
            let toggleSpeakerResult;
            if (null != AudioRoutePicker) {
              toggleSpeakerResult = AudioRoutePicker.toggleSpeaker(false);
            }
            return toggleSpeakerResult;
          };
          items.push(obj);
        }
        let tmp10 = tmp3;
        if (!tmp3) {
          tmp10 = stateFromStores2 !== isConnectedToVoiceChannel(style[22]).RouteTypes.RECEIVER;
        }
        if (!tmp10) {
          obj = {};
          const intl2 = isConnectedToVoiceChannel(style[23]).intl;
          obj.label = intl2.string(isConnectedToVoiceChannel(style[23]).t.wwTN1g);
          obj.iconSource = channelId(style[25]);
          obj.showIconFirst = false;
          obj.action = function action() {
            const AudioRoutePicker = closure_6.AudioRoutePicker;
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
          const result = items(closure_2[21]).showAudioOutputSelector(closure_1, items);
        };
        items.push(obj1);
        function _loop(value) {
          const items = value;
          if (value.type === constants.XBOX) {
            let obj = {};
            const intl = items(closure_2[23]).intl;
            obj.label = intl.string(items(closure_2[23]).t.qVE/VF);
            obj.iconSource = callback(closure_2[17])(value.type);
            obj.showIconFirst = false;
            obj.action = function action() {
              const channel = store.getChannel(closure_1);
              if (null != channel) {
                arg0(closure_2[27]).onConnectToConsole(channel, arg0);
                const obj = arg0(closure_2[27]);
              }
            };
            items.push(obj);
          }
          if (value.type === constants.PLAYSTATION) {
            obj = {};
            const intl2 = items(closure_2[23]).intl;
            obj.label = intl2.string(items(closure_2[23]).t.vzfxmY);
            obj.iconSource = callback(closure_2[17])(value.type);
            obj.showIconFirst = false;
            obj.action = function action() {
              const channel = store.getChannel(closure_1);
              if (null != channel) {
                arg0(closure_2[27]).onConnectToConsole(channel, arg0);
                const obj = arg0(closure_2[27]);
              }
            };
            items.push(obj);
          }
        }
        const tmp24 = callback(arr5);
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
  const callback = React.useCallback(() => {
    const result = isConnectedToVoiceChannel(style[28]).UNSAFE_markDismissibleContentAsDismissed(isConnectedToVoiceChannel(style[29]).DismissibleContent.DONUT_MOBILE_NUX);
    tmp3(true);
    tmp.lock();
  }, items7);
  const ref = React.useRef(null);
  closure_17 = ref;
  if (tmp8) {
    if (!obj6.isAndroid()) {
      if (tmp6) {
        obj = {};
        obj = { targetRef: ref, canShowTooltip: isConnectedToVoiceChannel };
        const items8 = [tmp8(closure_18, obj), ];
        obj1 = { "Null": "<string:83707277>", "Null": "<string:1125533521>", "Null": "100%", menuItems: memo, onRequestOpen: callback, onRequestClose: tmp.unlock, children: renderButton };
        items8[1] = tmp8(arg1(dependencyMap[32]).MenuPopout, obj1);
        obj.children = items8;
        let renderButtonResult = stateFromStores2(closure_15, obj);
      }
      return renderButtonResult;
    }
    renderButtonResult = renderButton();
    const obj6 = arg1(dependencyMap[20]);
  } else {
    return null;
  }
});
const result = arg1(dependencyMap[33]).fileFinishedImporting("modules/voice_panel/native/header/VoicePanelHeaderSpeaker.tsx");

export default memoResult;
