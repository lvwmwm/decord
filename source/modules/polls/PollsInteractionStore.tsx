// Module ID: 7896
// Function ID: 62867
// Name: useMessagePollInteractions
// Dependencies: []
// Exports: clearChannelPollState, clearPollState, getPollState, updatePollState, useChannelPollInteractions, useMessagePollInteractions

// Module 7896 (useMessagePollInteractions)
let closure_3 = {};
const _module = require(dependencyMap[0]);
let closure_4 = _module.createWithEqualityFn((arg0) => {
  const require = arg0;
  return {
    pollsByChannelId: {},
    pollsByMessageId: {},
    updatePollState(arg0, arg1, arg2) {
      arg0(arg2[1]).batchUpdates(() => {
        arg0((pollsByChannelId) => {
          let tmp3;
          if (null != pollsByChannelId.pollsByChannelId[closure_0]) {
            tmp3 = tmp2[closure_1];
          }
          const tmpResult = closure_2(tmp3);
          let obj = {};
          obj = {};
          const merged = Object.assign(pollsByChannelId.pollsByChannelId);
          obj = {};
          const merged1 = Object.assign(pollsByChannelId.pollsByChannelId[closure_0]);
          obj[closure_1] = tmpResult;
          obj[closure_0] = obj;
          obj.pollsByChannelId = obj;
          const obj1 = {};
          const merged2 = Object.assign(pollsByChannelId.pollsByMessageId);
          obj1[closure_1] = tmpResult;
          obj.pollsByMessageId = obj1;
          return obj;
        });
      });
    }
  };
});
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/polls/PollsInteractionStore.tsx");

export const useMessagePollInteractions = function useMessagePollInteractions(arg0) {
  const require = arg0;
  return store((arg0) => {
    const obj = {};
    const item = arg0.forEach((arg0) => {
      if (null != arg0.pollsByMessageId[arg0]) {
        obj[arg0] = tmp;
      }
    });
    return obj;
  }, importDefault(dependencyMap[2]));
};
export const useChannelPollInteractions = function useChannelPollInteractions(arg0) {
  const require = arg0;
  return store((arg0) => {
    let tmp = arg0.pollsByChannelId[closure_0];
    if (null == tmp) {
      tmp = closure_3;
    }
    return tmp;
  }, importDefault(dependencyMap[2]));
};
export const clearChannelPollState = function clearChannelPollState(arg0) {
  const require = arg0;
  require(dependencyMap[1]).batchUpdates(() => {
    state.setState((arg0) => {
      let pollsByChannelId;
      let pollsByMessageId;
      ({ pollsByChannelId, pollsByMessageId } = arg0);
      pollsByMessageId = undefined;
      let tmp = pollsByChannelId[closure_0];
      if (null == tmp) {
        tmp = closure_3;
      }
      pollsByMessageId = callback(closure_2[3]);
      const keys = pollsByMessageId.keys(tmp);
      pollsByMessageId = {};
      const merged = Object.assign(pollsByMessageId);
      const item = keys.forEach((arg0) => {
        delete r1[r0];
      });
      const merged1 = Object.assign(pollsByChannelId);
      delete r2[r0];
      return { pollsByChannelId: {}, pollsByMessageId };
    });
  });
};
export const clearPollState = function clearPollState(arg0, arg1) {
  const require = arg0;
  const importDefault = arg1;
  require(dependencyMap[1]).batchUpdates(() => {
    state.setState((arg0) => {
      let pollsByChannelId;
      let pollsByMessageId;
      ({ pollsByChannelId, pollsByMessageId } = arg0);
      let obj = {};
      obj = pollsByChannelId[closure_0];
      if (null == obj) {
        obj = {};
      }
      const merged = Object.assign(obj);
      delete r4[r0];
      obj = {};
      const merged1 = Object.assign(pollsByMessageId);
      delete r1[r0];
      const obj1 = {};
      const obj2 = {};
      const merged2 = Object.assign(pollsByChannelId);
      obj2[closure_0] = obj;
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
