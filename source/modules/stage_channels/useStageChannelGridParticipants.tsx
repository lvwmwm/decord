// Module ID: 10787
// Function ID: 83751
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: useStageChannelParticipantsListThrottled, useThrottleDurationForChannel

// Module 10787 (_createForOfIteratorHelperLoose)
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
function useStageChannelParticipantsList(id, memo, flag) {
  memo = id;
  const dependencyMap = memo;
  let closure_2 = flag;
  const items = [closure_5];
  const items1 = [id];
  const stateFromStores = memo(dependencyMap[4]).useStateFromStores(items, () => {
    const items = [arg0, store.getParticipantsVersion(arg0)];
    return items;
  }, items1, memo(dependencyMap[5]).isVersionEqual);
  const React = stateFromStores;
  const obj = memo(dependencyMap[4]);
  const items2 = [closure_4];
  const items3 = [id];
  const stateFromStores1 = memo(dependencyMap[4]).useStateFromStores(items2, () => stateFromStores1.getSelectedParticipantId(arg0), items3);
  closure_4 = stateFromStores1;
  const items4 = [stateFromStores, memo, stateFromStores1, flag, id];
  return React.useMemo(() => {
    function pushSection(items2, arg1, arg2) {
      let found = items2;
      if (arg2) {
        found = items2.filter((id) => {
          let tmp = id.id !== closure_4;
          if (tmp) {
            tmp = arg1 > closure_2;
          }
          return tmp;
        });
      }
      const chunkResult = items(items1[7]).chunk(found, arg1);
      items1.push(chunkResult);
      items.push(chunkResult.length);
    }
    const stateFromStores = pushSection;
    const items = [];
    const arg0 = items;
    const items1 = [];
    const arg1 = items1;
    let num = -1;
    let arg2 = -1;
    const items2 = [];
    if (arg2) {
      const tmp6 = callback(store.getMutableParticipants(arg0, arg0(arg1[6]).StageChannelParticipantNamedIndex.SPEAKER));
      let iter = tmp6();
      if (!iter.done) {
        const value = iter.value;
        while (tmp7 === arg0(arg1[6]).StageChannelParticipantTypes.STREAM) {
          let tmp10 = stateFromStores1;
          if (value.id !== stateFromStores1) {
            let arr = items2.push(value);
          }
          num = num + 1;
          arg2 = num;
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
      participant = store.getParticipant(arg0, stateFromStores1);
    }
    if (null != participant) {
      if (participant.speaker) {
        const items3 = [participant];
        pushSection(items3, 1, false);
      }
      const items4 = [arg0(arg1[6]).StageChannelParticipantNamedIndex.SPEAKER, arg0(arg1[6]).StageChannelParticipantNamedIndex.AUDIENCE];
      const item = items4.forEach((arg0) => {
        const mutableParticipants = mutableParticipants.getMutableParticipants(pushSection[0], arg0);
        pushSection(mutableParticipants, items1[arg0], arg0 === items(items1[6]).StageChannelParticipantNamedIndex.SPEAKER);
      });
      pushSection(items2, 1, false);
      const items5 = [items, items1];
      return items5;
    }
    pushSection([], 1, false);
  }, items4);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = { SELECTED: 0, [0]: "SELECTED", SPEAKER: 1, [1]: "SPEAKER", AUDIENCE: 2, [2]: "AUDIENCE", MEDIA: 3, [3]: "MEDIA" };
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/stage_channels/useStageChannelGridParticipants.tsx");

export { useStageChannelParticipantsList };
export const useThrottleDurationForChannel = function useThrottleDurationForChannel(id) {
  const stageParticipantsCount = arg1(closure_1[8]).useStageParticipantsCount(id, arg1(closure_1[6]).StageChannelParticipantNamedIndex.AUDIENCE);
  const arg1 = stageParticipantsCount;
  const tmp2 = callback(React.useState(false), 2);
  let num = 0;
  closure_1 = tmp2[1];
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
  const items = [memo[closure_0(undefined, closure_1[6]).StageChannelParticipantNamedIndex.AUDIENCE]];
  const tmp5 = callback(memo(dependencyMap[9]).useThrottledState(tmp, throttleDurationForChannel, items), 2);
  const items1 = [first[flag ? closure_6.MEDIA : closure_6.SELECTED], first[closure_6.SPEAKER], tmp5[0][closure_6.AUDIENCE]];
  const items2 = [items1, ];
  const items3 = [tmp2[1][flag ? closure_6.MEDIA : closure_6.SELECTED], tmp2[1][closure_6.SPEAKER], tmp5[1][closure_6.AUDIENCE]];
  items2[1] = items3;
  return items2;
};
