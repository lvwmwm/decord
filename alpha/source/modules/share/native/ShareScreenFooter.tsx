// Module ID: 15976
// Function ID: 15977
// Name: ShareScreenFooter
// Dependencies: [19, 21, 13626, 13627, 5768, 13639, 2]
// Exports: default

// Module 15976 (ShareScreenFooter)
import Fragment from "Fragment" /* 21 */;
import components_Button_Button from "components/Button/Button" /* 5768 */;
import useShareChatInputActions from "useShareChatInputActions" /* 13626 */;
import ShareFooterLayoutDefault from "ShareFooterLayout" /* 13627 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/share/native/ShareScreenFooter.tsx");

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
  const obj = useShareChatInputActions;
  const shareChatInputActions = obj.useShareChatInputActions(setText, undefined, appEntryKey);
  ({ textInputRef, isInputFocused, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } = shareChatInputActions);
  const tmp6 = !canSend;
  ShareFooterLayoutDefault;
  const Button = components_Button_Button.Button;
  return <tmp5 preview={preview} sendButton={null} chatInput={null} avoidKeyboard={isInputFocused} />;
};
