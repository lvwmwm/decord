// Module ID: 11188
// Function ID: 11189
// Name: ForwardMessageFooter
// Dependencies: [32, 19, 5200, 21, 11177, 11180, 504, 7196, 11189, 1115, 11190, 11191, 5281, 11201, 2]
// Exports: ForwardMessageFooter

// Module 11188 (ForwardMessageFooter)
import Fragment from "Fragment" /* 21 */;
import DraftStore2 from "DraftStore" /* 5200 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 7196 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

const DraftStore = DraftStore2;

let react = react_mod;
const DraftType = DraftStore2.DraftType;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/forwarding/native/ForwardMessageFooter.tsx");

export const ForwardMessageFooter = function ForwardMessageFooter(message) {
  let canSend;
  let closure_4;
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
  let trackForwardEditContextMessageOnce;
  let text;
  react = undefined;
  ({ forwardOptions, sendLabel, canSend } = message);
  let obj = message(trackForwardEditContextMessageOnce[4]);
  trackForwardEditContextMessageOnce = obj.useTrackForwardEditContextMessageOnce();
  const obj2 = message(trackForwardEditContextMessageOnce[5]);
  const selectedDestinationChannel = obj2.useSelectedDestinationChannel(selectedDestinations);
  const items = [DraftStore];
  const obj3 = message(trackForwardEditContextMessageOnce[6]);
  const tmp5 = text(react.useState(obj3.useStateFromStoresObject(items, () => DraftStore.getDraft(message.channel_id, DraftType.ForwardContextMessage))), 2);
  text = tmp5[0];
  react = tmp6;
  const items1 = [message, trackForwardEditContextMessageOnce];
  const items2 = [text, message.channel_id];
  const callback = react.useCallback((arg0) => {
    closure_4(arg0);
    trackForwardEditContextMessageOnce(message.channel_id, message.id);
  }, items1);
  const effect = react.useEffect(() => {
    const obj = DraftActionCreatorsDefault;
    obj.saveDraft(message.channel_id, first, DraftType.ForwardContextMessage);
  }, items2);
  const obj4 = message(trackForwardEditContextMessageOnce[8]);
  const shareChatInputActions = obj4.useShareChatInputActions(tmp6, selectedDestinationChannel);
  const items3 = [text, message.channel_id, onSend];
  ({ textInputRef, isInputFocused, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } = shareChatInputActions);
  const callback1 = react.useCallback(() => {
    const obj = DraftActionCreatorsDefault;
    obj.clearDraft(message.channel_id, DraftType.ForwardContextMessage);
    onSend(first);
  }, items3);
  const obj5 = message(trackForwardEditContextMessageOnce[5]);
  const destinationNamesWithSlowmode = obj5.useDestinationNamesWithSlowmode(selectedDestinations);
  let formatToPlainStringResult;
  if (destinationNamesWithSlowmode.length > 0) {
    if (text.length > 0) {
      const intl = tmp(tmp2[9]).intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj6 = { count: destinationNamesWithSlowmode.length, channelNames: destinationNamesWithSlowmode.join(", ") };
      const xJFpij = tmp(tmp2[9]).t.xJFpij;
      formatToPlainStringResult = formatToPlainString(xJFpij, obj6);
    }
  }
  onSend(trackForwardEditContextMessageOnce[10]);
  const Button = tmp(tmp2[12]).Button;
  return <tmp14 preview={null} sendButton={null} chatInput={null} warningText={formatToPlainStringResult} avoidKeyboard={isInputFocused} />;
};
