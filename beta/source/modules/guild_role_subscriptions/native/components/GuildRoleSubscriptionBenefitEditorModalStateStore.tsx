// Module ID: 17580
// Function ID: 17581
// Name: GuildRoleSubscriptionBenefitEditorModalStateStore
// Dependencies: [1243, 1248, 4452, 2]
// Exports: initializeImperatively, resetImperatively, useDescriptionState, useEmojiIdState, useEmojiNameState, useNameState, useRefIdState

// Module 17580 (GuildRoleSubscriptionBenefitEditorModalStateStore)
import react_native from "react-native" /* 1248 */;
import _slicedToArray from "_slicedToArray" /* 4452 */;
import module_1243 from "module_1243" /* 1243 */;
import size from "module_2" /* 2 */;

let closure_2 = Object.freeze({ name: "", emojiId: "alignItems", emojiName: "sk", description: "HermesInternal", refId: "Array" });
let closure_3 = module_1243.createWithEqualityFn((arg0) => {
  let closure_0 = arg0;
  let obj = {
    setEmojiId(emoji_id) {
      const emojiId = emoji_id;
      let obj = emojiId(dependencyMap[1]);
      obj.batchUpdates(() => {
        const obj = { emojiId };
        return emojiId(obj);
      });
    },
    setEmojiName(emoji_name) {
      const emojiName = emoji_name;
      let obj = emojiName(dependencyMap[1]);
      obj.batchUpdates(() => {
        const obj = { emojiName };
        return emojiName(obj);
      });
    },
    setName(name) {
      let obj = name(dependencyMap[1]);
      obj.batchUpdates(() => {
        const obj = { name };
        return name(obj);
      });
    },
    setDescription(description) {
      let obj = description(dependencyMap[1]);
      obj.batchUpdates(() => {
        const obj = { description };
        return description(obj);
      });
    },
    setRefId(ref_id) {
      const refId = ref_id;
      let obj = refId(dependencyMap[1]);
      obj.batchUpdates(() => {
        const obj = { refId };
        return refId(obj);
      });
    },
    reset() {
      const obj = react_native;
      obj.batchUpdates(() => closure_1_0(closure_2_2));
    }
  };
  const merged = Object.assign(closure_2);
  return obj;
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionBenefitEditorModalStateStore.tsx");

export const resetImperatively = function resetImperatively() {
  const state = closure_3.getState();
  state.reset();
};
export const initializeImperatively = function initializeImperatively(benefit) {
  let setDescription;
  let setEmojiId;
  let setEmojiName;
  let setName;
  let setRefId;
  const state = closure_3.getState();
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
  return closure_3((arg0) => {
    const items = [, ];
    ({ description: arr[0], setDescription: arr[1] } = arg0);
    return items;
  }, _slicedToArray.shallow);
};
export const useEmojiIdState = function useEmojiIdState() {
  return closure_3((arg0) => {
    const items = [, ];
    ({ emojiId: arr[0], setEmojiId: arr[1] } = arg0);
    return items;
  }, _slicedToArray.shallow);
};
export const useEmojiNameState = function useEmojiNameState() {
  return closure_3((arg0) => {
    const items = [, ];
    ({ emojiName: arr[0], setEmojiName: arr[1] } = arg0);
    return items;
  }, _slicedToArray.shallow);
};
export const useNameState = function useNameState() {
  return closure_3((arg0) => {
    const items = [, ];
    ({ name: arr[0], setName: arr[1] } = arg0);
    return items;
  }, _slicedToArray.shallow);
};
export const useRefIdState = function useRefIdState() {
  return closure_3((arg0) => {
    const items = [, ];
    ({ refId: arr[0], setRefId: arr[1] } = arg0);
    return items;
  }, _slicedToArray.shallow);
};
