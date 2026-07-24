// Module ID: 12964
// Function ID: 100529
// Name: ShareScreenFooter
// Dependencies: [31, 33, 9926, 9927, 4543, 9935, 2]
// Exports: default

// Module 12964 (ShareScreenFooter)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useShareChatInputActions").fileFinishedImporting("modules/share/native/ShareScreenFooter.tsx");

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
  let obj = require(9926) /* useShareChatInputActions */;
  const shareChatInputActions = obj.useShareChatInputActions(setText, undefined, appEntryKey);
  ({ textInputRef, isInputFocused, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } = shareChatInputActions);
  obj = { preview };
  obj = { variant: "primary", size: "md", text: sendLabel };
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
  obj.sendButton = jsx(require(4543) /* Button */.Button, { variant: "primary", size: "md", text: sendLabel });
  const obj1 = { inputRef: textInputRef, text, onChange: setText, onSelectionChange: handleSelectionChange, onFocus: handleMessageFocus, onBlur: handleMessageBlur, onPressEmoji: handlePressEmoji, onSend, disabled };
  obj.chatInput = jsx(importDefault(9935), { inputRef: textInputRef, text, onChange: setText, onSelectionChange: handleSelectionChange, onFocus: handleMessageFocus, onBlur: handleMessageBlur, onPressEmoji: handlePressEmoji, onSend, disabled });
  obj.avoidKeyboard = isInputFocused;
  return jsx(importDefault(9927), { variant: "primary", size: "md", text: sendLabel });
};
