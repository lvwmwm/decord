// Module ID: 13321
// Function ID: 13322
// Name: ShareScreenFooter
// Dependencies: [19, 21, 11139, 11140, 4755, 11148, 2]
// Exports: default

// Module 13321 (ShareScreenFooter)
import "noop";
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
  ({ setText, canSend, isSending, onSend, disabled } = arg0);
  ({ text, preview, sendLabel, appEntryKey } = arg0);
  if (disabled === undefined) {
    disabled = false;
  }
  let obj = require(11139) /* useShareChatInputActions */;
  const shareChatInputActions = obj.useShareChatInputActions(setText, undefined, appEntryKey);
  ({ textInputRef, isInputFocused, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } = shareChatInputActions);
  obj = { preview, sendButton: null, chatInput: null, avoidKeyboard: null };
  obj = { variant: "primary", size: "md", text: sendLabel, disabled: null, onPress: null, loading: null };
  let tmp6 = !canSend;
  if (canSend) {
    tmp6 = disabled;
  }
  obj[3] = tmp6;
  let tmp7;
  if (!isSending) {
    tmp7 = onSend;
  }
  obj[4] = tmp7;
  obj[5] = isSending;
  obj[1] = jsx(require(4755) /* Button */.Button, { variant: "primary", size: "md", text: sendLabel, disabled: null, onPress: null, loading: null });
  obj[2] = jsx(importDefault(11148), { inputRef: textInputRef, text, onChange: setText, onSelectionChange: handleSelectionChange, onFocus: handleMessageFocus, onBlur: handleMessageBlur, onPressEmoji: handlePressEmoji, onSend, disabled });
  obj[3] = isInputFocused;
  return jsx(importDefault(11140), { variant: "primary", size: "md", text: sendLabel, disabled: null, onPress: null, loading: null });
};
