// Module ID: 15649
// Function ID: 119495
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: useControllerPIPState

// Module 15649 (_createForOfIteratorHelperLoose)
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const VoicePanelModes = arg1(dependencyMap[7]).VoicePanelModes;
const ActivityPanelModes = arg1(dependencyMap[8]).ActivityPanelModes;
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/voice_panel/native/pip/useControllerPIPState.tsx");

export const useControllerPIPState = function useControllerPIPState(channelId) {
  let connected;
  let dimensions;
  let focusedId;
  let participant;
  let tmp10;
  channelId = channelId.channelId;
  const arg1 = channelId;
  ({ connected, focusedId } = channelId);
  const importDefault = focusedId;
  const layoutManager = channelId.layoutManager;
  const dependencyMap = layoutManager;
  const mode = channelId.mode;
  const ref = React.useRef({ id: undefined, mode: undefined });
  const tmp2 = callback(React.useState(undefined), 2);
  const first = tmp2[0];
  const callback = first;
  const React = tmp2[1];
  let closure_5 = React.useRef(first);
  const insertionEffect = React.useInsertionEffect(() => {
    closure_5.current = first;
  });
  const tmp5 = function useShowSecondaryPIP(channelId) {
    channelId = channelId.channelId;
    const mode = channelId.mode;
    const focusedId = mode;
    const tmp = focusedId(layoutManager[9])(channelId);
    const layoutManager = tmp;
    const items = [closure_5, closure_7, closure_8];
    const items1 = [channelId, tmp, mode];
    return channelId(layoutManager[10]).useStateFromStores(items, () => {
      const channel = store2.getChannel(channelId);
      if (null != channel) {
        if (channel.isVocal()) {
          if (!tmp) {
            return false;
          }
        }
      }
      const connectedFrame = connectedFrame.getConnectedFrame();
      if (null != connectedFrame) {
        if (tmp3 === constants2.PIP) {
          return true;
        }
      }
      const connectedActivityLocation = store.getConnectedActivityLocation();
      if (null == connectedActivityLocation) {
        return false;
      } else {
        const embeddedActivityLocationChannelId = channelId(tmp[11]).getEmbeddedActivityLocationChannelId(connectedActivityLocation);
        const channel1 = store2.getChannel(embeddedActivityLocationChannelId);
        let result = null != channel1;
        const activityPanelMode = store.getActivityPanelMode();
        if (result) {
          result = channelId(tmp[12]).isActivityInTextSupportedForChannel(channel1);
          const obj2 = channelId(tmp[12]);
        }
        if (result) {
          result = embeddedActivityLocationChannelId !== channelId;
        }
        let tmp13 = activityPanelMode === constants2.PIP;
        if (tmp13) {
          let tmp16 = mode === constants.PIP;
          if (!tmp16) {
            tmp16 = embeddedActivityLocationChannelId !== channelId;
          }
          tmp13 = tmp16;
        }
        if (result) {
          result = tmp13;
        }
        return result;
      }
    }, items1);
  }({ channelId, mode });
  const tmp6 = importDefault(dependencyMap[14])(channelId);
  const first1 = callback(React.useState(() => focusedId(layoutManager[15])((arg0) => arg0(), 1000, { leading: true })), 1)[0];
  let closure_6 = first1;
  const items = [first1];
  const layoutEffect = React.useLayoutEffect(() => () => closure_6.cancel(), items);
  [tmp10, closure_7] = callback(React.useState(() => layoutManager.getTargetDimensions(focusedId)), 2);
  let obj = { connected, mode, focusedId, participantTargetDimensions: tmp10, selfHasVideo: tmp6, showSecondaryPIP: tmp5 };
  const tmp9 = callback(React.useState(() => layoutManager.getTargetDimensions(focusedId)), 2);
  ({ participant, dimensions } = importDefault(dependencyMap[16])(channelId, layoutManager, focusedId, first, obj));
  obj = {};
  const merged = Object.assign(ref.current);
  const merged1 = Object.assign(dimensions);
  let id;
  if (null != participant) {
    id = participant.id;
  }
  obj["id"] = id;
  obj["showSecondaryPIP"] = tmp5;
  const tmp11 = importDefault(dependencyMap[16])(channelId, layoutManager, focusedId, first, obj);
  obj["mode"] = arg1(dependencyMap[17]).getPIPMode({ channelId, connected, manuallyFocusedId: focusedId, mode, selfHasVideo: tmp6 });
  const items1 = [channelId, first1];
  const obj3 = arg1(dependencyMap[17]);
  const effect = React.useEffect(() => {
    const items = [closure_9, first1];
    const batchedStoreListener = new channelId(layoutManager[10]).BatchedStoreListener(items, () => {
      const tmp = callback2(speakers.getSpeakers());
      const iter = tmp();
      let iter2 = iter;
      let tmp2;
      if (!iter.done) {
        const value = iter2.value;
        tmp2 = value;
        while (null == participant.getParticipant(batchedStoreListener, value)) {
          let iter3 = tmp();
          iter2 = iter3;
          if (iter3.done) {
            break;
          }
        }
      }
      const batchedStoreListener = tmp2;
      if (tmp5) {
        if (null == ref.current) {
          callback(tmp2);
        } else {
          participant(() => callback(tmp2));
        }
      }
    });
    const channelId = batchedStoreListener;
    batchedStoreListener.attach("pipstate-change-listeners-" + channelId);
    return () => batchedStoreListener.detach();
  }, items1);
  const items2 = [focusedId, layoutManager, tmp10];
  const effect1 = React.useEffect(() => {
    function updateParticipantDimensions() {
      callback((safeAreaState) => {
        let targetDimensions = targetDimensions.getTargetDimensions(closure_1);
        if (obj.cheapWorkletShallowEqual(safeAreaState, targetDimensions)) {
          targetDimensions = safeAreaState;
        }
        return targetDimensions;
      });
    }
    const result = updateParticipantDimensions();
    return layoutManager.subscribeFromItem(updateParticipantDimensions);
  }, items2);
  importDefault(dependencyMap[18])(channelId, layoutManager, focusedId);
  return function useCachedPipState(safeAreaState, ref) {
    let current = safeAreaState;
    const channelId = safeAreaState;
    const focusedId = ref;
    const tmp = !channelId(layoutManager[13]).cheapWorkletShallowEqual(safeAreaState, ref.current);
    const layoutManager = tmp;
    const effect = React.useEffect(() => {
      if (tmp) {
        arg1.current = arg0;
        const tmp = arg1;
      }
    });
    if (!tmp) {
      current = ref.current;
    }
    return current;
  }(obj, ref);
};
