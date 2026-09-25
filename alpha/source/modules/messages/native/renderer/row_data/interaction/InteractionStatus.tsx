// Module ID: 12735
// Function ID: 12736
// Name: InteractionStatus
// Dependencies: [7565, 1115, 2]
// Exports: createInteractionStatus

// Module 12735 (InteractionStatus)
import InteractionUtils from "InteractionUtils" /* 7565 */;
import size from "module_2" /* 2 */;

const constants = { LOADING: 0, [0]: "LOADING", FAILED: 1, [1]: "FAILED", EPHEMERAL_SUCCESS: 999, [999]: "EPHEMERAL_SUCCESS" };
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/interaction/InteractionStatus.tsx");

export const createInteractionStatus = function createInteractionStatus(message, interaction) {
  const interactionStatusViewState = InteractionUtils.getInteractionStatusViewState(message, interaction);
  if (InteractionUtils.InteractionStatusViewState.SENDING === interactionStatusViewState) {
    const obj2 = { text: null, state: null };
    const intl4 = tmp(1115).intl;
    obj2.text = intl4.string(tmp(1115).t.RiLfBY);
    obj2.state = constants.LOADING;
    return obj2;
  } else if (tmp(7565).InteractionStatusViewState.CREATED === interactionStatusViewState) {
    const obj3 = { text: null, state: null };
    const intl3 = tmp(1115).intl;
    const obj4 = { applicationName: message.author.username };
    obj3.text = intl3.formatToPlainString(tmp(1115).t["7ePV4t"], obj4);
    obj3.state = constants.LOADING;
    return obj3;
  } else if (tmp(7565).InteractionStatusViewState.TIMED_OUT === interactionStatusViewState) {
    const obj5 = { text: null, state: null };
    const intl2 = tmp(1115).intl;
    obj5.text = intl2.string(tmp(1115).t.h8hzPd);
    obj5.state = constants.FAILED;
    return obj5;
  } else if (tmp(7565).InteractionStatusViewState.FAILED === interactionStatusViewState) {
    let interactionError = message.interactionError;
    if (interactionError == null) {
      const intl = tmp(1115).intl;
      interactionError = intl.string(tmp(1115).t.VCsUJu);
    }
    const obj6 = { text: interactionError, state: constants.FAILED };
    return obj6;
  } else if (tmp(7565).InteractionStatusViewState.EPHEMERAL_SUCCESS === interactionStatusViewState) {
    const obj7 = { text: "", state: constants.EPHEMERAL_SUCCESS };
    return obj7;
  }
};
