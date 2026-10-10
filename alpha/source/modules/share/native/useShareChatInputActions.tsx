// Module ID: 11578
// Function ID: 11579
// Name: useShareChatInputActions
// Dependencies: [32, 19, 1393, 558, 576, 9426, 2]

// Module 11578 (useShareChatInputActions)
import EmojiConstants from "EmojiConstants" /* 1393 */;
import openEmojiPickerActionSheet2 from "openEmojiPickerActionSheet" /* 9426 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, onPressEmoji;

const EmojiIntention = EmojiConstants.EmojiIntention;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShareChatInputActions(arg0, channel, appEntryKey) {
  let closure_0;
  let closure_5;
  let first;
  let ref;
  let tmp11;
  _require = arg0;
  dependencyMap = channel;
  let obj = require("react");
  const cResult = obj.c(14);
  let obj2 = ref;
  ref = ref.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { start: 0, end: 0 };
    cResult[0] = obj3;
    first = obj3;
  } else {
    first = cResult[0];
  }
  let closure_4 = obj2.useRef(first);
  [r10032, closure_5] = appEntryKey(obj2.useState(false), 2);
  const tmp4 = appEntryKey(obj2.useState(false), 2);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function v(nativeEvent) {
      const obj = {};
      const merged = Object.assign(nativeEvent.nativeEvent.selection);
      closure_4.current = obj;
    };
    cResult[1] = fn;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        closure_5(true);
      }
    }
    cResult[2] = E;
  } else {
    class E {
      constructor() {
        closure_5(true);
      }
    }
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        closure_5(true);
      }
    }
    cResult[3] = tmp8;
  } else {
    class E {
      constructor() {
        closure_5(true);
      }
    }
  }
  if (cResult[4] !== arg0) {
    class E {
      constructor() {
        closure_5(true);
      }
    }
    cResult[4] = arg0;
    cResult[5] = tmp10;
  } else {
    class E {
      constructor() {
        closure_5(true);
      }
    }
  }
  onPressEmoji = tmp9;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        const current = ref.current;
        if (current != null) {
          current.focus();
        }
      }
    }
    cResult[6] = F;
    tmp11 = F;
  } else {
    class F {
      constructor() {
        const current = ref.current;
        if (current != null) {
          current.focus();
        }
      }
    }
  }
  F = tmp11;
  if (cResult[7] === appEntryKey) {
    class F {
      constructor() {
        const current = ref.current;
        if (current != null) {
          current.focus();
        }
      }
    }
  }
  class R {
    constructor() {
      let guildId;
      const current = ref.current;
      if (current != null) {
        current.blur();
      }
      const obj = { onPressEmoji, onClose: F, pickerIntention: EmojiIntention.CHAT, autoFocus: false, startExpanded: false, channel, appEntryKey, guildId };
      guildId = undefined;
      const openEmojiPickerActionSheet = openEmojiPickerActionSheet2.openEmojiPickerActionSheet;
      openEmojiPickerActionSheet2;
      const obj2 = channel;
      if (channel != null) {
        guildId = obj2.getGuildId();
      }
      const result = openEmojiPickerActionSheet(obj);
    }
  }
  cResult[7] = appEntryKey;
  cResult[8] = channel;
  cResult[9] = tmp9;
  cResult[10] = R;
}) : (function useShareChatInputActions(arg0, channel, appEntryKey) {
  let closure_5;
  let ref;
  let tmp3;
  let closure_0 = arg0;
  ref = ref.useRef(null);
  let closure_4 = ref.useRef({ start: 0, end: 0 });
  const tmp2 = appEntryKey(ref.useState(false), 2);
  [tmp3, closure_5] = tmp2;
  const callback = ref.useCallback((nativeEvent) => {
    const obj = {};
    const merged = Object.assign(nativeEvent.nativeEvent.selection);
    closure_4.current = obj;
  }, []);
  const callback1 = ref.useCallback(() => {
    closure_5(true);
  }, []);
  const items = [arg0];
  const callback2 = ref.useCallback(() => {
    closure_5(false);
  }, []);
  const callback3 = ref.useCallback((id) => {
    let surrogates = "";
    if (null == id.id) {
      if (null != id.surrogates) {
        surrogates = id.surrogates;
      }
      surrogates((arr) => {
        const sum = arr.slice(0, ref.current.start) + closure_0;
        return sum + arr.slice(ref.current.end);
      });
      const current = ref.current;
      if (current != null) {
        current.focus();
      }
    }
    if (null != id.uniqueName) {
      let name;
      if ("" !== id.uniqueName) {
        name = id.uniqueName;
      }
      const _HermesInternal = HermesInternal;
      surrogates = ":" + name + ": ";
    }
    name = id.name;
  }, items);
  const callback4 = ref.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.focus();
    }
  }, []);
  const items1 = [callback4, callback3, channel, appEntryKey];
  let obj = {
    textInputRef: ref,
    isInputFocused: tmp3,
    handleSelectionChange: callback,
    handleMessageFocus: callback1,
    handleMessageBlur: callback2,
    handlePressEmoji: ref.useCallback(() => {
      let guildId;
      const current = ref.current;
      if (current != null) {
        current.blur();
      }
      const obj = { onPressEmoji: callback3, onClose: callback4, pickerIntention: EmojiIntention.CHAT, autoFocus: false, startExpanded: false, channel, appEntryKey, guildId };
      guildId = undefined;
      const openEmojiPickerActionSheet = openEmojiPickerActionSheet2.openEmojiPickerActionSheet;
      openEmojiPickerActionSheet2;
      const obj2 = channel;
      if (channel != null) {
        guildId = obj2.getGuildId();
      }
      const result = openEmojiPickerActionSheet(obj);
    }, items1)
  };
  return obj;
});
let result = size.fileFinishedImporting("modules/share/native/useShareChatInputActions.tsx");

export const useShareChatInputActions = tmp2;
