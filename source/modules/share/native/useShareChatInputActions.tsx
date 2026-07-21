// Module ID: 9886
// Function ID: 76543
// Name: useShareChatInputActions
// Dependencies: []
// Exports: useShareChatInputActions

// Module 9886 (useShareChatInputActions)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const EmojiIntention = arg1(dependencyMap[2]).EmojiIntention;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/share/native/useShareChatInputActions.tsx");

export const useShareChatInputActions = function useShareChatInputActions(setText, selectedDestinationChannel, appEntryKey) {
  let tmp3;
  selectedDestinationChannel = setText;
  const dependencyMap = selectedDestinationChannel;
  let callback = appEntryKey;
  const ref = React.useRef(null);
  const React = ref;
  let closure_4 = React.useRef({ bind: -536870861, cursor: -299892737 });
  [tmp3, closure_5] = callback(React.useState(false), 2);
  callback = React.useCallback((nativeEvent) => {
    const merged = Object.assign(nativeEvent.nativeEvent.selection);
    closure_4.current = {};
  }, []);
  const callback1 = React.useCallback(() => {
    callback(true);
  }, []);
  const items = [setText];
  const callback2 = React.useCallback(() => {
    callback(false);
  }, []);
  const callback3 = React.useCallback((id) => {
    let setText = "";
    if (null == id.id) {
      if (null != id.surrogates) {
        setText = id.surrogates;
      }
      setText((arr) => {
        const sum = arr.slice(0, ref.current.start) + closure_0;
        return sum + arr.slice(ref.current.end);
      });
      const current = ref.current;
      if (null != current) {
        current.focus();
      }
    }
    if (null != id.uniqueName) {
      if ("" !== id.uniqueName) {
        let name = id.uniqueName;
      }
      const _HermesInternal = HermesInternal;
      setText = ":" + name + ": ";
    }
    name = id.name;
  }, items);
  const callback4 = React.useCallback(() => {
    const current = ref.current;
    if (null != current) {
      current.focus();
    }
  }, []);
  const items1 = [callback4, callback3, selectedDestinationChannel, appEntryKey];
  const tmp2 = callback(React.useState(false), 2);
  return {
    textInputRef: ref,
    isInputFocused: tmp3,
    handleSelectionChange: callback,
    handleMessageFocus: callback1,
    handleMessageBlur: callback2,
    handlePressEmoji: React.useCallback(() => {
      const current = ref.current;
      if (null != current) {
        current.blur();
      }
      let obj = arg0(arg1[3]);
      obj = { onPressEmoji: callback3, onClose: callback4, pickerIntention: constants.CHAT, autoFocus: false, startExpanded: false, channel: arg1, appEntryKey: arg2 };
      let guildId;
      if (null != arg1) {
        guildId = arg1.getGuildId();
      }
      let tmp4;
      if (null != guildId) {
        tmp4 = guildId;
      }
      obj.guildId = tmp4;
      const result = obj.openEmojiPickerActionSheet(obj);
    }, items1)
  };
};
