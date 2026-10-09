// Module ID: 18442
// Function ID: 18443
// Name: GuildRoleSubscriptionBenefitEditorModalStateStore
// Dependencies: [1267, 1272, 558, 576, 4692, 2]
// Exports: initializeImperatively, resetImperatively

// Module 18442 (GuildRoleSubscriptionBenefitEditorModalStateStore)
import react from "react" /* 576 */;
import react_native from "react-native" /* 1272 */;
import module_1267 from "module_1267" /* 1267 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const _slicedToArray = tmp(4692);
let closure_2 = Object.freeze({ name: "", emojiId: "code", emojiName: "useEffect", description: "track", refId: "apply" });
let closure_3 = module_1267.createWithEqualityFn((arg0) => {
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
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDescriptionState() {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(arg0) {
      const items = [, ];
      ({ description: arr[0], setDescription: arr[1] } = arg0);
      return items;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_3(first, _slicedToArray.shallow);
}) : (function useDescriptionState() {
  return closure_3((arg0) => {
    const items = [, ];
    ({ description: arr[0], setDescription: arr[1] } = arg0);
    return items;
  }, _slicedToArray.shallow);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEmojiIdState() {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(arg0) {
      const items = [, ];
      ({ emojiId: arr[0], setEmojiId: arr[1] } = arg0);
      return items;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_3(first, _slicedToArray.shallow);
}) : (function useEmojiIdState() {
  return closure_3((arg0) => {
    const items = [, ];
    ({ emojiId: arr[0], setEmojiId: arr[1] } = arg0);
    return items;
  }, _slicedToArray.shallow);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEmojiNameState() {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(arg0) {
      const items = [, ];
      ({ emojiName: arr[0], setEmojiName: arr[1] } = arg0);
      return items;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_3(first, _slicedToArray.shallow);
}) : (function useEmojiNameState() {
  return closure_3((arg0) => {
    const items = [, ];
    ({ emojiName: arr[0], setEmojiName: arr[1] } = arg0);
    return items;
  }, _slicedToArray.shallow);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useNameState() {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(arg0) {
      const items = [, ];
      ({ name: arr[0], setName: arr[1] } = arg0);
      return items;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_3(first, _slicedToArray.shallow);
}) : (function useNameState() {
  return closure_3((arg0) => {
    const items = [, ];
    ({ name: arr[0], setName: arr[1] } = arg0);
    return items;
  }, _slicedToArray.shallow);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useRefIdState() {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(arg0) {
      const items = [, ];
      ({ refId: arr[0], setRefId: arr[1] } = arg0);
      return items;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_3(first, _slicedToArray.shallow);
}) : (function useRefIdState() {
  return closure_3((arg0) => {
    const items = [, ];
    ({ refId: arr[0], setRefId: arr[1] } = arg0);
    return items;
  }, _slicedToArray.shallow);
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
export const useDescriptionState = tmp2;
export const useEmojiIdState = tmp3;
export const useEmojiNameState = tmp4;
export const useNameState = tmp5;
export const useRefIdState = tmp6;
