// Module ID: 10798
// Function ID: 83824
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 31, 4143, 4951, 566, 4964, 4957, 22, 4963, 10799, 2]
// Exports: useStageChannelParticipantsListThrottled, useThrottleDurationForChannel

// Module 10798 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

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
function useStageChannelParticipantsList(id, memo, flag) {
  const _require = id;
  const dependencyMap = memo;
  let _slicedToArray = flag;
  let items = [closure_5];
  let items1 = [id];
  const stateFromStores = _require(566).useStateFromStores(items, () => {
    const items = [closure_0, outer1_5.getParticipantsVersion(closure_0)];
    return items;
  }, items1, _require(4964).isVersionEqual);
  const obj = _require(566);
  let items2 = [stateFromStores1];
  let items3 = [id];
  stateFromStores1 = _require(566).useStateFromStores(items2, () => stateFromStores1.getSelectedParticipantId(closure_0), items3);
  let items4 = [stateFromStores, memo, stateFromStores1, flag, id];
  return stateFromStores.useMemo(() => {
    function pushSection(items2, arg1, arg2) {
      let found = items2;
      if (arg2) {
        found = items2.filter((id) => {
          let tmp = id.id !== outer2_4;
          if (tmp) {
            tmp = arg1 > outer1_2;
          }
          return tmp;
        });
      }
      const chunkResult = items(items1[7]).chunk(found, arg1);
      items1.push(chunkResult);
      items.push(chunkResult.length);
    }
    const items = [];
    const items1 = [];
    let num = -1;
    num = -1;
    const items2 = [];
    if (num) {
      const tmp6 = outer1_7(outer1_5.getMutableParticipants(items, id(memo[6]).StageChannelParticipantNamedIndex.SPEAKER));
      let iter = tmp6();
      if (!iter.done) {
        const value = iter.value;
        while (tmp7 === id(memo[6]).StageChannelParticipantTypes.STREAM) {
          let tmp10 = stateFromStores1;
          if (value.id !== stateFromStores1) {
            let arr = items2.push(value);
          }
          num = num + 1;
          let iter2 = tmp6();
          iter = iter2;
          if (iter2.done) {
            break;
          }
        }
      }
    }
    let participant = null;
    if (null != stateFromStores1) {
      participant = outer1_5.getParticipant(items, stateFromStores1);
    }
    if (null != participant) {
      if (participant.speaker) {
        const items3 = [participant];
        pushSection(items3, 1, false);
      }
      const items4 = [id(memo[6]).StageChannelParticipantNamedIndex.SPEAKER, id(memo[6]).StageChannelParticipantNamedIndex.AUDIENCE];
      const item = items4.forEach((arg0) => {
        const mutableParticipants = outer2_5.getMutableParticipants(pushSection[0], arg0);
        pushSection(mutableParticipants, items1[arg0], arg0 === items(items1[6]).StageChannelParticipantNamedIndex.SPEAKER);
      });
      pushSection(items2, 1, false);
      const items5 = [items, items1];
      return items5;
    }
    pushSection([], 1, false);
  }, items4);
}
let closure_6 = { SELECTED: 0, [0]: "SELECTED", SPEAKER: 1, [1]: "SPEAKER", AUDIENCE: 2, [2]: "AUDIENCE", MEDIA: 3, [3]: "MEDIA" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/useStageChannelGridParticipants.tsx");

export { useStageChannelParticipantsList };
export const useThrottleDurationForChannel = function useThrottleDurationForChannel(id) {
  stageParticipantsCount = stageParticipantsCount(4963).useStageParticipantsCount(id, stageParticipantsCount(4957).StageChannelParticipantNamedIndex.AUDIENCE);
  const tmp2 = callback(React.useState(false), 2);
  let num = 0;
  const dependencyMap = tmp2[1];
  const items = [stageParticipantsCount];
  const effect = React.useEffect(() => {
    if (stageParticipantsCount > 100) {
      callback(true);
    } else if (stageParticipantsCount < 75) {
      callback(false);
    }
  }, items);
  if (tmp2[0]) {
    num = 5000;
  }
  return num;
};
export const useStageChannelParticipantsListThrottled = function useStageChannelParticipantsListThrottled(id, memo, throttleDurationForChannel, flag) {
  if (flag === undefined) {
    flag = false;
  }
  const tmp = useStageChannelParticipantsList(id, memo, flag);
  const tmp2 = callback(tmp, 2);
  const first = tmp2[0];
  const items = [memo[require(undefined, 4957) /* sortKey */.StageChannelParticipantNamedIndex.AUDIENCE]];
  const tmp5 = callback(require(10799) /* throttleStateFn */.useThrottledState(tmp, throttleDurationForChannel, items), 2);
  const items1 = [first[flag ? constants.MEDIA : constants.SELECTED], first[constants.SPEAKER], tmp5[0][constants.AUDIENCE]];
  const items2 = [items1, ];
  const items3 = [tmp2[1][flag ? constants.MEDIA : constants.SELECTED], tmp2[1][constants.SPEAKER], tmp5[1][constants.AUDIENCE]];
  items2[1] = items3;
  return items2;
};
