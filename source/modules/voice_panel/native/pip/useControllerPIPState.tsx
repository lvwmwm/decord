// Module ID: 15766
// Function ID: 121668
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 1347, 4143, 10479, 1348, 4952, 10015, 10226, 15719, 566, 3748, 7918, 9423, 15767, 572, 15768, 15769, 15771, 2]
// Exports: useControllerPIPState

// Module 15766 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { VoicePanelModes } from "VoicePanelModes";
import { ActivityPanelModes } from "ActivityPanelModes";

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
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/voice_panel/native/pip/useControllerPIPState.tsx");

export const useControllerPIPState = function useControllerPIPState(channelId) {
  let closure_7;
  let connected;
  let dimensions;
  let focusedId;
  let participant;
  let tmp10;
  channelId = channelId.channelId;
  ({ connected, focusedId } = channelId);
  let layoutManager = channelId.layoutManager;
  let mode = channelId.mode;
  let obj = { id: undefined, mode: undefined, width: 0, height: 0, containerHeight: 0, showSecondaryPIP: false };
  const ref = React.useRef(obj);
  let tmp2 = first(React.useState(undefined), 2);
  first = tmp2[0];
  React = tmp2[1];
  let _createForOfIteratorHelperLoose = React.useRef(first);
  const insertionEffect = React.useInsertionEffect(() => {
    _createForOfIteratorHelperLoose.current = first;
  });
  const tmp5 = (function useShowSecondaryPIP(channelId) {
    channelId = channelId.channelId;
    const mode = channelId.mode;
    const tmp = focusedId(layoutManager[9])(channelId);
    layoutManager = tmp;
    const items = [_createForOfIteratorHelperLoose, outer1_7, outer1_8];
    const items1 = [channelId, tmp, mode];
    return channelId(layoutManager[10]).useStateFromStores(items, () => {
      const channel = outer2_8.getChannel(channelId);
      if (null != channel) {
        if (channel.isVocal()) {
          if (!closure_2) {
            return false;
          }
        }
      }
      const connectedFrame = outer2_7.getConnectedFrame();
      if (null != connectedFrame) {
        if (tmp3 === outer2_11.PIP) {
          return true;
        }
      }
      const connectedActivityLocation = store.getConnectedActivityLocation();
      if (null == connectedActivityLocation) {
        return false;
      } else {
        const embeddedActivityLocationChannelId = channelId(layoutManager[11]).getEmbeddedActivityLocationChannelId(connectedActivityLocation);
        const channel1 = outer2_8.getChannel(embeddedActivityLocationChannelId);
        let result = null != channel1;
        const activityPanelMode = store.getActivityPanelMode();
        if (result) {
          result = channelId(layoutManager[12]).isActivityInTextSupportedForChannel(channel1);
          const obj2 = channelId(layoutManager[12]);
        }
        if (result) {
          result = embeddedActivityLocationChannelId !== channelId;
        }
        let tmp13 = activityPanelMode === outer2_11.PIP;
        if (tmp13) {
          let tmp16 = mode === outer2_10.PIP;
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
  })({ channelId, mode });
  const tmp6 = focusedId(layoutManager[14])(channelId);
  const first1 = first(React.useState(() => focusedId(layoutManager[15])((arg0) => arg0(), 1000, { leading: true })), 1)[0];
  let items = [first1];
  const layoutEffect = React.useLayoutEffect(() => () => outer1_6.cancel(), items);
  [tmp10, closure_7] = first(React.useState(() => layoutManager.getTargetDimensions(focusedId)), 2);
  obj = { connected, mode, focusedId, participantTargetDimensions: tmp10, selfHasVideo: tmp6, showSecondaryPIP: tmp5 };
  const tmp9 = first(React.useState(() => layoutManager.getTargetDimensions(focusedId)), 2);
  ({ participant, dimensions } = focusedId(layoutManager[16])(channelId, layoutManager, focusedId, first, obj));
  obj = {};
  const merged = Object.assign(ref.current);
  const merged1 = Object.assign(dimensions);
  let id;
  if (null != participant) {
    id = participant.id;
  }
  obj["id"] = id;
  obj["showSecondaryPIP"] = tmp5;
  const tmp11 = focusedId(layoutManager[16])(channelId, layoutManager, focusedId, first, obj);
  obj["mode"] = channelId(layoutManager[17]).getPIPMode({ channelId, connected, manuallyFocusedId: focusedId, mode, selfHasVideo: tmp6 });
  let items1 = [channelId, first1];
  const obj4 = channelId(layoutManager[17]);
  let effect = React.useEffect(() => {
    const items = [outer1_9, first1];
    let batchedStoreListener = new channelId(layoutManager[10]).BatchedStoreListener(items, () => {
      const tmp = outer2_12(outer2_9.getSpeakers());
      const iter = tmp();
      let iter2 = iter;
      let tmp2;
      if (!iter.done) {
        const value = iter2.value;
        tmp2 = value;
        while (null == first1.getParticipant(batchedStoreListener, value)) {
          let iter3 = tmp();
          iter2 = iter3;
          if (iter3.done) {
            break;
          }
        }
      }
      batchedStoreListener = tmp2;
      if (tmp5) {
        if (null == outer1_5.current) {
          outer1_4(tmp2);
        } else {
          outer1_6(() => outer2_4(closure_0));
        }
      }
    });
    batchedStoreListener.attach("pipstate-change-listeners-" + batchedStoreListener);
    return () => batchedStoreListener.detach();
  }, items1);
  const items2 = [focusedId, layoutManager, tmp10];
  const effect1 = React.useEffect(() => {
    function updateParticipantDimensions() {
      outer1_7((safeAreaState) => {
        let targetDimensions = outer2_2.getTargetDimensions(outer2_1);
        if (obj.cheapWorkletShallowEqual(safeAreaState, targetDimensions)) {
          targetDimensions = safeAreaState;
        }
        return targetDimensions;
      });
    }
    const result = updateParticipantDimensions();
    return layoutManager.subscribeFromItem(updateParticipantDimensions);
  }, items2);
  focusedId(layoutManager[18])(channelId, layoutManager, focusedId);
  return (function useCachedPipState(safeAreaState, ref) {
    let current = safeAreaState;
    let closure_0 = safeAreaState;
    let closure_1 = ref;
    const tmp = !channelId(layoutManager[13]).cheapWorkletShallowEqual(safeAreaState, ref.current);
    layoutManager = tmp;
    const effect = React.useEffect(() => {
      if (closure_2) {
        closure_1.current = closure_0;
      }
    });
    if (!tmp) {
      current = ref.current;
    }
    return current;
  })(obj, ref);
};
