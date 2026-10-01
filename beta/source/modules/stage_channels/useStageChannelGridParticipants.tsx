// Module ID: 9531
// Function ID: 9532
// Name: useStageChannelGridParticipants
// Dependencies: [32, 19, 4852, 5730, 504, 5744, 5737, 12, 5743, 9532, 2]
// Exports: useStageChannelParticipantsList, useStageChannelParticipantsListThrottled, useThrottleDurationForChannel

// Module 9531 (useStageChannelGridParticipants)
import _mod12 from "module_12" /* 12 */;
import StageChannelParticipants from "StageChannelParticipants" /* 5737 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 5743 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4852 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 5730 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const f88922 = () => {
  const items = [id, StageChannelParticipantStore.getParticipantsVersion(id)];
  return items;
};
const f88923 = () => ChannelRTCStore.getSelectedParticipantId(id);
let closure_6 = { SELECTED: 0, [0]: "SELECTED", SPEAKER: 1, [1]: "SPEAKER", AUDIENCE: 2, [2]: "AUDIENCE", MEDIA: 3, [3]: "MEDIA" };
const result = size.fileFinishedImporting("modules/stage_channels/useStageChannelGridParticipants.tsx");

export const useStageChannelParticipantsList = function useStageChannelParticipantsList(arg0, arg1, arg2) {
  let closure_0;
  let closure_1;
  let stateFromStores1;
  _require = arg0;
  dependencyMap = arg1;
  let closure_2 = arg2;
  const items = [StageChannelParticipantStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, f88922, items1, require("SecondaryIndexMapUtils").isVersionEqual);
  const items2 = [stateFromStores1];
  const items3 = [arg0];
  const obj2 = require("get initialized");
  stateFromStores1 = obj2.useStateFromStores(items2, f88923, items3);
  const items4 = [stateFromStores, arg1, stateFromStores1, arg2, arg0];
  return stateFromStores.useMemo(() => {
    let items4;
    const items = [];
    const items1 = [];
    let num = -1;
    let c2 = -1;
    const items2 = [];
    let tmp = c2;
    if (tmp) {
      let tmp2 = StageChannelParticipantStore;
      let mutableParticipants = StageChannelParticipantStore.getMutableParticipants(items, id(memo[6]).StageChannelParticipantNamedIndex.SPEAKER);
      const iter = mutableParticipants[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp11 = nextResult;
        if (nextResult.type !== id(memo[6]).StageChannelParticipantTypes.STREAM) {
          iter.return();
          break;
        } else {
          if (tmp11.id !== stateFromStores1) {
            let arr = items2.push(tmp11);
          }
          let sum = num + 1;
          num = sum;
          c2 = sum;
          continue;
        }
        break;
      }
    }
    let participant = null;
    if (null != stateFromStores1) {
      participant = StageChannelParticipantStore.getParticipant(items, tmp22);
    }
    let speaker;
    if (participant != null) {
      speaker = participant.speaker;
    }
    if (speaker) {
      const items3 = [participant];
      items4 = items3;
    } else {
      items4 = [];
    }
    function pushSection(items2, arg1, arg2) {
      const obj = _mod12;
      const chunkResult = obj.chunk(items2, 1);
      items1.push(chunkResult);
      items.push(chunkResult.length);
    }
    pushSection(items4, 1, false);
    const items5 = [id(memo[6]).StageChannelParticipantNamedIndex.SPEAKER, id(memo[6]).StageChannelParticipantNamedIndex.AUDIENCE];
    const item = items5.forEach((item) => {
      const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(stateFromStores[0], item);
      const tmp = items1[item];
      let found = mutableParticipants;
      if (item === StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER) {
        found = mutableParticipants.filter((id, index) => id.id !== stateFromStores1 && index > closure_1_2);
      }
      const tmp2Result = _mod12;
      const chunkResult = tmp2Result.chunk(found, tmp);
      items1.push(chunkResult);
      items.push(chunkResult.length);
    });
    pushSection(items2, 1, false);
    const items6 = [items, items1];
    return items6;
  }, items4);
};
export const useThrottleDurationForChannel = function useThrottleDurationForChannel(id) {
  let closure_1;
  let first;
  const obj = StageChannelParticipantStoreHooks;
  const stageParticipantsCount = obj.useStageParticipantsCount(id, StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE);
  [first, closure_1] = react.useState(false);
  const items = [stageParticipantsCount];
  const effect = react.useEffect(() => {
    if (stageParticipantsCount > 100) {
      closure_1(true);
    } else if (tmp < 75) {
      closure_1(false);
    }
  }, items);
  let num = 0;
  if (first) {
    num = 5000;
  }
  return num;
};
export const useStageChannelParticipantsListThrottled = function useStageChannelParticipantsListThrottled(id, memo, throttleDurationForChannel, arg3) {
  let SELECTED;
  let stateFromStores1;
  let tmp10;
  let tmp12;
  let tmp5;
  let tmp6;
  let tmp9;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  _require = id;
  dependencyMap = memo;
  let obj = require("get initialized");
  let items = [StageChannelParticipantStore];
  let items1 = [id];
  const stateFromStores = obj.useStateFromStores(items, f88922, items1, require("SecondaryIndexMapUtils").isVersionEqual);
  let items2 = [stateFromStores1];
  let items3 = [id];
  const obj2 = require("get initialized");
  stateFromStores1 = obj2.useStateFromStores(items2, f88923, items3);
  let items4 = [stateFromStores, memo, stateFromStores1, flag, id];
  memo = stateFromStores.useMemo(() => {
    let items4;
    const items = [];
    const items1 = [];
    let num = -1;
    let c2 = -1;
    const items2 = [];
    let tmp = c2;
    if (tmp) {
      let tmp2 = StageChannelParticipantStore;
      let mutableParticipants = StageChannelParticipantStore.getMutableParticipants(items, id(memo[6]).StageChannelParticipantNamedIndex.SPEAKER);
      const iter = mutableParticipants[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp11 = nextResult;
        if (nextResult.type !== id(memo[6]).StageChannelParticipantTypes.STREAM) {
          iter.return();
          break;
        } else {
          if (tmp11.id !== stateFromStores1) {
            let arr = items2.push(tmp11);
          }
          let sum = num + 1;
          num = sum;
          c2 = sum;
          continue;
        }
        break;
      }
    }
    let participant = null;
    if (null != stateFromStores1) {
      participant = StageChannelParticipantStore.getParticipant(items, tmp22);
    }
    let speaker;
    if (participant != null) {
      speaker = participant.speaker;
    }
    if (speaker) {
      const items3 = [participant];
      items4 = items3;
    } else {
      items4 = [];
    }
    function pushSection(items2, arg1, arg2) {
      const obj = _mod12;
      const chunkResult = obj.chunk(items2, 1);
      items1.push(chunkResult);
      items.push(chunkResult.length);
    }
    pushSection(items4, 1, false);
    const items5 = [id(memo[6]).StageChannelParticipantNamedIndex.SPEAKER, id(memo[6]).StageChannelParticipantNamedIndex.AUDIENCE];
    const item = items5.forEach((item) => {
      const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(stateFromStores[0], item);
      const tmp = items1[item];
      let found = mutableParticipants;
      if (item === StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER) {
        found = mutableParticipants.filter((id, index) => id.id !== stateFromStores1 && index > closure_1_2);
      }
      const tmp2Result = _mod12;
      const chunkResult = tmp2Result.chunk(found, tmp);
      items1.push(chunkResult);
      items.push(chunkResult.length);
    });
    pushSection(items2, 1, false);
    const items6 = [items, items1];
    return items6;
  }, items4);
  [tmp5, tmp6] = flag(memo, 2);
  const tmp4 = flag(memo, 2);
  const useThrottledState = require("useThrottle").useThrottledState;
  const tmp7 = require("useThrottle");
  let items5 = [memo[require("StageChannelParticipants").StageChannelParticipantNamedIndex.AUDIENCE]];
  let tmp11 = closure_6;
  [tmp9, tmp10] = flag(useThrottledState(memo, throttleDurationForChannel, items5), 2);
  const tmp8 = flag(useThrottledState(memo, throttleDurationForChannel, items5), 2);
  if (flag) {
    SELECTED = tmp11.MEDIA;
    tmp12 = tmp11;
  } else {
    SELECTED = tmp11.SELECTED;
    tmp12 = tmp11;
  }
  let items6 = [tmp5[SELECTED], tmp5[tmp12.SPEAKER], tmp9[tmp12.AUDIENCE]];
  const items7 = [items6, ];
  const items8 = [tmp6[flag ? tmp12.MEDIA : tmp12.SELECTED], tmp6[tmp12.SPEAKER], tmp10[tmp12.AUDIENCE]];
  items7[1] = items8;
  return items7;
};
