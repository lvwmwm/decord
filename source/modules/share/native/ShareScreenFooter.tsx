// Module ID: 12791
// Function ID: 98017
// Name: ShareScreenFooter
// Dependencies: [0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 12791 (ShareScreenFooter)
import "result";
import { jsx } from "result";
import result from "result";

result = result.fileFinishedImporting("modules/share/native/ShareScreenFooter.tsx");

export default function ShareScreenFooter(arg0) {
  let appEntryKey;
  let canSend;
  let disabled;
  let handleMessageBlur;
  let handleMessageFocus;
  let handlePressEmoji;
  let handleSelectionChange;
  let isInputFocused;
  let isSending;
  let onSend;
  let preview;
  let sendLabel;
  let setText;
  let text;
  let textInputRef;
  ({ setText, isSending, onSend, disabled } = arg0);
  ({ text, preview, sendLabel, canSend, appEntryKey } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  let obj = arg1(dependencyMap[2]);
  const shareChatInputActions = obj.useShareChatInputActions(setText, undefined, appEntryKey);
  ({ textInputRef, isInputFocused, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } = shareChatInputActions);
  obj = { preview };
  obj = { "Bool(true)": "rgb(0, 122, 255)", "Bool(true)": "rgb(242, 242, 242)", text: sendLabel };
  let tmp4 = !canSend;
  if (!tmp4) {
    tmp4 = disabled;
  }
  obj.disabled = tmp4;
  let tmp5;
  if (!isSending) {
    tmp5 = onSend;
  }
  obj.onPress = tmp5;
  obj.loading = isSending;
  obj.sendButton = jsx(arg1(dependencyMap[4]).Button, obj);
  const obj1 = { inputRef: textInputRef, text, onChange: setText, onSelectionChange: handleSelectionChange, onFocus: handleMessageFocus, onBlur: handleMessageBlur, onPressEmoji: handlePressEmoji, onSend, disabled };
  obj.chatInput = jsx(importDefault(dependencyMap[5]), obj1);
  obj.avoidKeyboard = isInputFocused;
  return jsx(importDefault(dependencyMap[3]), obj);
};
