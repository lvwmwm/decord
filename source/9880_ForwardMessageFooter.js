// Module ID: 9880
// Function ID: 76510
// Name: ForwardMessageFooter
// Dependencies: []
// Exports: ForwardMessageFooter

// Module 9880 (ForwardMessageFooter)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const DraftType = arg1(dependencyMap[2]).DraftType;
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/forwarding/native/ForwardMessageFooter.tsx");

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
  const arg1 = message;
  ({ selectedDestinations, isSending, onSend } = message);
  const importDefault = onSend;
  ({ forwardOptions, sendLabel, canSend } = message);
  let obj = arg1(dependencyMap[4]);
  const trackForwardEditContextMessageOnce = obj.useTrackForwardEditContextMessageOnce();
  const dependencyMap = trackForwardEditContextMessageOnce;
  let obj1 = arg1(dependencyMap[5]);
  const selectedDestinationChannel = obj1.useSelectedDestinationChannel(selectedDestinations);
  const items = [closure_5];
  const tmp3 = callback(React.useState(arg1(dependencyMap[6]).useStateFromStoresObject(items, () => draft.getDraft(message.channel_id, closure_6.ForwardContextMessage))), 2);
  const first = tmp3[0];
  let callback = first;
  const React = tmp4;
  const items1 = [message, trackForwardEditContextMessageOnce];
  const items2 = [first, message.channel_id];
  callback = React.useCallback((arg0) => {
    tmp4(arg0);
    trackForwardEditContextMessageOnce(message.channel_id, message.id);
  }, items1);
  const effect = React.useEffect(() => {
    onSend(trackForwardEditContextMessageOnce[7]).saveDraft(message.channel_id, first, closure_6.ForwardContextMessage);
  }, items2);
  const obj3 = arg1(dependencyMap[6]);
  const shareChatInputActions = arg1(dependencyMap[8]).useShareChatInputActions(tmp4, selectedDestinationChannel);
  const items3 = [first, message.channel_id, onSend];
  ({ textInputRef, isInputFocused, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } = shareChatInputActions);
  const callback1 = React.useCallback(() => {
    onSend(trackForwardEditContextMessageOnce[7]).clearDraft(message.channel_id, closure_6.ForwardContextMessage);
    onSend(first);
  }, items3);
  const obj4 = arg1(dependencyMap[8]);
  const destinationNamesWithSlowmode = arg1(dependencyMap[5]).useDestinationNamesWithSlowmode(selectedDestinations);
  let formatToPlainStringResult;
  if (destinationNamesWithSlowmode.length > 0) {
    if (first.length > 0) {
      const intl = arg1(dependencyMap[9]).intl;
      obj = { count: destinationNamesWithSlowmode.length, channelNames: destinationNamesWithSlowmode.join(", ") };
      formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[9]).t.xJFpij, obj);
    }
  }
  obj = {};
  const obj5 = arg1(dependencyMap[5]);
  obj.preview = jsx(arg1(dependencyMap[11]).ForwardPreview, { message, channel: selectedDestinationChannel, forwardOptions });
  obj1 = { text: sendLabel, disabled: !canSend };
  let tmp14;
  if (!isSending) {
    tmp14 = callback1;
  }
  obj1.onPress = tmp14;
  obj1.loading = isSending;
  obj.sendButton = jsx(arg1(dependencyMap[12]).Button, obj1);
  obj.chatInput = jsx(importDefault(dependencyMap[13]), { inputRef: textInputRef, text: first, onChange: callback, onSelectionChange: handleSelectionChange, onFocus: handleMessageFocus, onBlur: handleMessageBlur, onPressEmoji: handlePressEmoji, onSend: callback1 });
  obj.warningText = formatToPlainStringResult;
  obj.avoidKeyboard = isInputFocused;
  return jsx(importDefault(dependencyMap[10]), obj);
};
