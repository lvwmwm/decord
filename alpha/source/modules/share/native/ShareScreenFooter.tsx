// Module ID: 15983
// Function ID: 15984
// Name: ShareScreenFooter
// Dependencies: [19, 21, 13612, 13613, 5788, 13625, 2]
// Exports: default

// Module 15983 (ShareScreenFooter)
import Fragment from "Fragment" /* 21 */;
import components_Button_Button from "components/Button/Button" /* 5788 */;
import useShareChatInputActions from "useShareChatInputActions" /* 13612 */;
import ShareFooterLayoutDefault from "ShareFooterLayout" /* 13613 */;
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
