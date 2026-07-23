// Module ID: 7902
// Function ID: 62914
// Name: useMessagePollInteractions
// Dependencies: [677, 682, 620, 21, 2]
// Exports: clearChannelPollState, clearPollState, getPollState, updatePollState, useChannelPollInteractions, useMessagePollInteractions

// Module 7902 (useMessagePollInteractions)
import useStoreWithEqualityFn from "useStoreWithEqualityFn";

let closure_3 = {};
let closure_4 = useStoreWithEqualityFn.createWithEqualityFn((arg0) => {
  let closure_0 = arg0;
  return {
    pollsByChannelId: {},
    pollsByMessageId: {},
    updatePollState(arg0, arg1, arg2) {
      const callback = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      callback(outer1_2[1]).batchUpdates(() => {
        callback((pollsByChannelId) => {
          let tmp3;
          if (null != pollsByChannelId.pollsByChannelId[outer1_0]) {
            tmp3 = tmp2[outer1_1];
          }
          const tmpResult = outer1_2(tmp3);
          let obj = {};
          obj = {};
          const merged = Object.assign(pollsByChannelId.pollsByChannelId);
          obj = {};
          const merged1 = Object.assign(pollsByChannelId.pollsByChannelId[outer1_0]);
          obj[outer1_1] = tmpResult;
          obj[outer1_0] = obj;
          obj.pollsByChannelId = obj;
          const obj1 = {};
          const merged2 = Object.assign(pollsByChannelId.pollsByMessageId);
          obj1[outer1_1] = tmpResult;
          obj.pollsByMessageId = obj1;
          return obj;
        });
      });
    }
  };
});
const result = require("shallowEqual").fileFinishedImporting("modules/polls/PollsInteractionStore.tsx");

export const useMessagePollInteractions = function useMessagePollInteractions(arg0) {
  let closure_0 = arg0;
  return store((arg0) => {
    let closure_0 = arg0;
    const obj = {};
    const item = closure_0.forEach((arg0) => {
      if (null != pollsByMessageId.pollsByMessageId[arg0]) {
        obj[arg0] = tmp;
      }
    });
    return obj;
  }, importDefault(620));
};
export const useChannelPollInteractions = function useChannelPollInteractions(arg0) {
  let closure_0 = arg0;
  return store((arg0) => {
    let tmp = arg0.pollsByChannelId[closure_0];
    if (null == tmp) {
      tmp = outer1_3;
    }
    return tmp;
  }, importDefault(620));
};
export const clearChannelPollState = function clearChannelPollState(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => {
    outer1_4.setState((arg0) => {
      let pollsByChannelId;
      let pollsByMessageId;
      ({ pollsByChannelId, pollsByMessageId } = arg0);
      pollsByMessageId = undefined;
      let tmp3 = pollsByChannelId[outer1_0];
      if (null == tmp3) {
        tmp3 = outer2_3;
      }
      pollsByMessageId = outer2_1(outer2_2[3]);
      const keys = pollsByMessageId.keys(tmp3);
      pollsByMessageId = {};
      const merged = Object.assign(pollsByMessageId);
      const item = keys.forEach((arg0) => {
        delete tmp2[tmp];
      });
      const merged1 = Object.assign(pollsByChannelId);
      delete tmp2[tmp];
      return { pollsByChannelId: {}, pollsByMessageId };
    });
  });
};
export const clearPollState = function clearPollState(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  _require(682).batchUpdates(() => {
    outer1_4.setState((arg0) => {
      let pollsByChannelId;
      let pollsByMessageId;
      ({ pollsByChannelId, pollsByMessageId } = arg0);
      let obj = {};
      obj = pollsByChannelId[outer1_0];
      if (null == obj) {
        obj = {};
      }
      const merged = Object.assign(obj);
      delete tmp3[tmp];
      obj = {};
      const merged1 = Object.assign(pollsByMessageId);
      delete tmp2[tmp];
      const obj1 = {};
      const obj2 = {};
      const merged2 = Object.assign(pollsByChannelId);
      obj2[outer1_0] = obj;
      obj1.pollsByChannelId = obj2;
      obj1.pollsByMessageId = obj;
      return obj1;
    });
  });
};
export const updatePollState = function updatePollState(arg0, arg1, arg2) {
  const state = store.getState();
  state.updatePollState(arg0, arg1, arg2);
};
export const getPollState = function getPollState(channelId, id) {
  const tmp = store.getState().pollsByChannelId[channelId];
  let tmp2;
  if (null != tmp) {
    tmp2 = tmp[id];
  }
  return tmp2;
};
