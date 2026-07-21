// Module ID: 16322
// Function ID: 125952
// Name: resetImperatively
// Dependencies: []
// Exports: initializeImperatively, resetImperatively, useDescriptionState, useEmojiIdState, useEmojiNameState, useNameState, useRefIdState

// Module 16322 (resetImperatively)
let closure_2 = Object.freeze({ name: "", emojiId: undefined, emojiName: undefined, description: undefined, refId: undefined });
const _module = require(dependencyMap[0]);
let closure_3 = _module.createWithEqualityFn((arg0) => {
  const require = arg0;
  const obj = {};
  const merged = Object.assign(closure_2);
  obj["setEmojiId"] = function setEmojiId(emoji_id) {
    emoji_id(closure_1[1]).batchUpdates(() => arg0({ emojiId: arg0 }));
  };
  obj["setEmojiName"] = function setEmojiName(emoji_name) {
    emoji_name(closure_1[1]).batchUpdates(() => arg0({ emojiName: arg0 }));
  };
  obj["setName"] = function setName(arg0) {
    arg0(closure_1[1]).batchUpdates(() => arg0({ name: arg0 }));
  };
  obj["setDescription"] = function setDescription(description) {
    description(closure_1[1]).batchUpdates(() => arg0({ description: arg0 }));
  };
  obj["setRefId"] = function setRefId(ref_id) {
    ref_id(closure_1[1]).batchUpdates(() => arg0({ refId: arg0 }));
  };
  obj["reset"] = function reset() {
    arg0(closure_1[1]).batchUpdates(() => callback(closure_2));
  };
  return obj;
});
const _module1 = require(dependencyMap[3]);
const result = _module1.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitEditorModalStateStore.tsx");

export const resetImperatively = function resetImperatively() {
  const state = store.getState();
  state.reset();
};
export const initializeImperatively = function initializeImperatively(benefit) {
  let setDescription;
  let setEmojiId;
  let setEmojiName;
  let setName;
  let setRefId;
  const state = store.getState();
  ({ setDescription, setEmojiId, setEmojiName, setName, setRefId } = state);
  state.reset();
  if (null != benefit.description) {
    setDescription(benefit.description);
  }
  setEmojiId(benefit.emoji_id);
  setEmojiName(benefit.emoji_name);
  setName(benefit.name);
  if (null != benefit.ref_id) {
    setRefId(benefit.ref_id);
  }
};
export const useDescriptionState = function useDescriptionState() {
  return store((arg0) => {
    const items = [, ];
    ({ description: arr[0], setDescription: arr[1] } = arg0);
    return items;
  }, require(dependencyMap[2]).shallow);
};
export const useEmojiIdState = function useEmojiIdState() {
  return store((arg0) => {
    const items = [, ];
    ({ emojiId: arr[0], setEmojiId: arr[1] } = arg0);
    return items;
  }, require(dependencyMap[2]).shallow);
};
export const useEmojiNameState = function useEmojiNameState() {
  return store((arg0) => {
    const items = [, ];
    ({ emojiName: arr[0], setEmojiName: arr[1] } = arg0);
    return items;
  }, require(dependencyMap[2]).shallow);
};
export const useNameState = function useNameState() {
  return store((arg0) => {
    const items = [, ];
    ({ name: arr[0], setName: arr[1] } = arg0);
    return items;
  }, require(dependencyMap[2]).shallow);
};
export const useRefIdState = function useRefIdState() {
  return store((arg0) => {
    const items = [, ];
    ({ refId: arr[0], setRefId: arr[1] } = arg0);
    return items;
  }, require(dependencyMap[2]).shallow);
};
