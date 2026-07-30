// Module ID: 13038
// Function ID: 13039
// Name: ShareScreenFooter
// Dependencies: [19, 21, 9913, 9914, 4600, 9922, 2]
// Exports: default

// Module 13038 (ShareScreenFooter)
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
  let obj = require(9913) /* useShareChatInputActions */;
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
  obj[1] = jsx(require(4600) /* Button */.Button, { variant: "primary", size: "md", text: sendLabel, disabled: null, onPress: null, loading: null });
  obj[2] = jsx(importDefault(9922), { inputRef: textInputRef, text, onChange: setText, onSelectionChange: handleSelectionChange, onFocus: handleMessageFocus, onBlur: handleMessageBlur, onPressEmoji: handlePressEmoji, onSend, disabled });
  obj[3] = isInputFocused;
  return jsx(importDefault(9914), { variant: "primary", size: "md", text: sendLabel, disabled: null, onPress: null, loading: null });
};
