// Module ID: 9893
// Function ID: 76591
// Name: ForwardMessageFooter
// Dependencies: [57, 31, 4468, 33, 9873, 7088, 566, 7019, 9894, 1212, 9895, 9896, 4543, 9903, 2]
// Exports: ForwardMessageFooter

// Module 9893 (ForwardMessageFooter)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { DraftType } from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/forwarding/native/ForwardMessageFooter.tsx");

export const ForwardMessageFooter = function ForwardMessageFooter(message) {
  let canSend;
  let forwardOptions;
  let handleMessageBlur;
  let handleMessageFocus;
  let handlePressEmoji;
  let handleSelectionChange;
  let isInputFocused;
  let isSending;
  let onSend;
  let selectedDestinations;
  let sendLabel;
  let textInputRef;
  message = message.message;
  ({ selectedDestinations, isSending, onSend } = message);
  ({ forwardOptions, sendLabel, canSend } = message);
  let obj = message(trackForwardEditContextMessageOnce[4]);
  trackForwardEditContextMessageOnce = obj.useTrackForwardEditContextMessageOnce();
  let obj1 = message(trackForwardEditContextMessageOnce[5]);
  const selectedDestinationChannel = obj1.useSelectedDestinationChannel(selectedDestinations);
  const items = [_isNativeReflectConstruct];
  const tmp3 = first(React.useState(message(trackForwardEditContextMessageOnce[6]).useStateFromStoresObject(items, () => outer1_5.getDraft(message.channel_id, outer1_6.ForwardContextMessage))), 2);
  first = tmp3[0];
  React = tmp4;
  const items1 = [message, trackForwardEditContextMessageOnce];
  const items2 = [first, message.channel_id];
  const callback = React.useCallback((arg0) => {
    tmp4(arg0);
    trackForwardEditContextMessageOnce(message.channel_id, message.id);
  }, items1);
  const effect = React.useEffect(() => {
    onSend(trackForwardEditContextMessageOnce[7]).saveDraft(message.channel_id, first, outer1_6.ForwardContextMessage);
  }, items2);
  const obj3 = message(trackForwardEditContextMessageOnce[6]);
  const shareChatInputActions = message(trackForwardEditContextMessageOnce[8]).useShareChatInputActions(tmp4, selectedDestinationChannel);
  const items3 = [first, message.channel_id, onSend];
  ({ textInputRef, isInputFocused, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } = shareChatInputActions);
  const callback1 = React.useCallback(() => {
    onSend(trackForwardEditContextMessageOnce[7]).clearDraft(message.channel_id, outer1_6.ForwardContextMessage);
    onSend(first);
  }, items3);
  const obj4 = message(trackForwardEditContextMessageOnce[8]);
  const destinationNamesWithSlowmode = message(trackForwardEditContextMessageOnce[5]).useDestinationNamesWithSlowmode(selectedDestinations);
  let formatToPlainStringResult;
  if (destinationNamesWithSlowmode.length > 0) {
    if (first.length > 0) {
      const intl = message(trackForwardEditContextMessageOnce[9]).intl;
      obj = { count: destinationNamesWithSlowmode.length, channelNames: destinationNamesWithSlowmode.join(", ") };
      formatToPlainStringResult = intl.formatToPlainString(message(trackForwardEditContextMessageOnce[9]).t.xJFpij, obj);
    }
  }
  obj = {};
  const obj5 = message(trackForwardEditContextMessageOnce[5]);
  obj.preview = jsx(message(trackForwardEditContextMessageOnce[11]).ForwardPreview, { message, channel: selectedDestinationChannel, forwardOptions });
  obj1 = { variant: "primary", size: "md", text: sendLabel, disabled: !canSend };
  let tmp14;
  if (!isSending) {
    tmp14 = callback1;
  }
  obj1.onPress = tmp14;
  obj1.loading = isSending;
  obj.sendButton = jsx(message(trackForwardEditContextMessageOnce[12]).Button, { variant: "primary", size: "md", text: sendLabel, disabled: !canSend });
  obj.chatInput = jsx(onSend(trackForwardEditContextMessageOnce[13]), { inputRef: textInputRef, text: first, onChange: callback, onSelectionChange: handleSelectionChange, onFocus: handleMessageFocus, onBlur: handleMessageBlur, onPressEmoji: handlePressEmoji, onSend: callback1 });
  obj.warningText = formatToPlainStringResult;
  obj.avoidKeyboard = isInputFocused;
  return jsx(onSend(trackForwardEditContextMessageOnce[10]), {});
};
