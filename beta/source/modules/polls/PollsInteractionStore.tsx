// Module ID: 10971
// Function ID: 10972
// Name: PollsInteractionStore
// Dependencies: [1243, 1248, 558, 11, 2]
// Exports: clearChannelPollState, clearPollState, getPollState, updatePollState, useChannelPollInteractions, useMessagePollInteractions

// Module 10971 (PollsInteractionStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import shallowEqualDefault from "shallowEqual" /* 558 */;
import module_1243 from "module_1243" /* 1243 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_3 = {};
let closure_4 = module_1243.createWithEqualityFn((arg0) => {
  let closure_0 = arg0;
  let obj = {
    pollsByChannelId: {},
    pollsByMessageId: {},
    updatePollState(arg0, arg1, arg2) {
      closure_0 = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      let obj = closure_0(dependencyMap[1]);
      obj.batchUpdates(() => {
        let tmp = closure_0((pollsByChannelId) => {
          let obj2;
          let obj4;
          let tmp4;
          const tmp = closure_1_2;
          if (pollsByChannelId.pollsByChannelId[closure_1_0] != null) {
            tmp4 = tmp3[closure_1_1];
          }
          const tmpResult = tmp(tmp4);
          const obj = { pollsByChannelId: obj2, pollsByMessageId: obj4 };
          obj2 = {};
          const merged = Object.assign(pollsByChannelId.pollsByChannelId);
          const obj3 = {};
          const merged1 = Object.assign(pollsByChannelId.pollsByChannelId[tmp2]);
          obj3[closure_1_1] = tmpResult;
          obj2[closure_1_0] = obj3;
          obj4 = {};
          const merged2 = Object.assign(pollsByChannelId.pollsByMessageId);
          obj4[closure_1_1] = tmpResult;
          return obj;
        });
      });
    }
  };
  return obj;
});
const result = size.fileFinishedImporting("modules/polls/PollsInteractionStore.tsx");

export const useMessagePollInteractions = function useMessagePollInteractions(arg0) {
  let closure_0 = arg0;
  return closure_4((arg0) => {
    closure_0 = arg0;
    const obj = {};
    const item = closure_0.forEach((item) => {
      if (null != pollsByMessageId.pollsByMessageId[item]) {
        obj[item] = pollsByMessageId.pollsByMessageId[item];
      }
    });
    return obj;
  }, shallowEqualDefault);
};
export const useChannelPollInteractions = function useChannelPollInteractions(arg0) {
  let closure_0 = arg0;
  return closure_4((arg0) => {
    let tmp = arg0.pollsByChannelId[closure_0];
    if (tmp == null) {
      tmp = closure_3;
    }
    return tmp;
  }, shallowEqualDefault);
};
export const clearChannelPollState = function clearChannelPollState(arg0) {
  let closure_0;
  let state;
  _require = arg0;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    state.setState((arg0) => {
      let pollsByChannelId;
      let pollsByMessageId;
      ({ pollsByChannelId, pollsByMessageId } = arg0);
      let obj2;
      let tmp2 = pollsByChannelId[closure_1_0];
      const tmp = closure_1_0;
      if (tmp2 == null) {
        tmp2 = closure_2_3;
      }
      const obj = SnowflakeUtilsDefault;
      const keys = obj.keys(tmp2);
      obj2 = {};
      const merged = Object.assign(pollsByMessageId);
      const item = keys.forEach((item) => {
        delete obj2[item];
      });
      const obj5 = {};
      const merged1 = Object.assign(pollsByChannelId);
      delete obj3[tmp];
      return { pollsByChannelId: obj5, pollsByMessageId: obj2 };
    });
  });
};
export const clearPollState = function clearPollState(arg0, arg1) {
  let closure_0;
  let state;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("react-native");
  obj.batchUpdates(() => {
    state.setState((arg0) => {
      let obj10;
      let pollsByChannelId;
      let pollsByMessageId;
      ({ pollsByChannelId, pollsByMessageId } = arg0);
      let obj = pollsByChannelId[closure_1_0];
      const tmp = closure_1_0;
      if (obj == null) {
        obj = {};
      }
      const obj4 = {};
      const merged = Object.assign(obj);
      delete obj2[closure_1_1];
      const obj5 = {};
      const merged1 = Object.assign(pollsByMessageId);
      delete obj3[closure_1_1];
      const obj9 = { pollsByChannelId: obj10, pollsByMessageId: obj5 };
      obj10 = {};
      const merged2 = Object.assign(pollsByChannelId);
      obj10[tmp] = obj4;
      return obj9;
    });
  });
};
export const updatePollState = function updatePollState(arg0, arg1, arg2) {
  const state = closure_4.getState();
  state.updatePollState(arg0, arg1, arg2);
};
export const getPollState = function getPollState(channelId, id) {
  const tmp = closure_4.getState().pollsByChannelId[channelId];
  let tmp2;
  if (tmp != null) {
    tmp2 = tmp[id];
  }
  return tmp2;
};
