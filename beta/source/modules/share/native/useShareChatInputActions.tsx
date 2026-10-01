// Module ID: 11189
// Function ID: 11190
// Name: useShareChatInputActions
// Dependencies: [32, 19, 1375, 10583, 2]
// Exports: useShareChatInputActions

// Module 11189 (useShareChatInputActions)
import EmojiConstants from "EmojiConstants" /* 1375 */;
import openEmojiPickerActionSheet2 from "openEmojiPickerActionSheet" /* 10583 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let _slicedToArray = _slicedToArray_mod;
const EmojiIntention = EmojiConstants.EmojiIntention;
let result = size.fileFinishedImporting("modules/share/native/useShareChatInputActions.tsx");

export const useShareChatInputActions = function useShareChatInputActions(setText, selectedDestinationChannel, appEntryKey) {
  let closure_5;
  let ref;
  let tmp3;
  const channel = selectedDestinationChannel;
  _slicedToArray = appEntryKey;
  ref = ref.useRef(null);
  let closure_4 = ref.useRef({ start: 0, end: 0 });
  const tmp2 = _slicedToArray(ref.useState(false), 2);
  [tmp3, closure_5] = tmp2;
  const callback = ref.useCallback((nativeEvent) => {
    const obj = {};
    const merged = Object.assign(nativeEvent.nativeEvent.selection);
    closure_4.current = obj;
  }, []);
  const callback1 = ref.useCallback(() => {
    closure_5(true);
  }, []);
  const items = [setText];
  const callback2 = ref.useCallback(() => {
    closure_5(false);
  }, []);
  const callback3 = ref.useCallback((id) => {
    let closure_0;
    setText = "";
    if (null == id.id) {
      if (null != id.surrogates) {
        setText = id.surrogates;
      }
      setText((arr) => {
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
      setText = ":" + name + ": ";
    }
    name = id.name;
  }, items);
  const callback4 = ref.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      current.focus();
    }
  }, []);
  const items1 = [callback4, callback3, selectedDestinationChannel, appEntryKey];
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
};
