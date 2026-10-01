// Module ID: 12751
// Function ID: 12752
// Name: InteractionStatus
// Dependencies: [7573, 1115, 2]
// Exports: createInteractionStatus

// Module 12751 (InteractionStatus)
import intl5 from "intl" /* 1115 */;
import InteractionUtils from "InteractionUtils" /* 7573 */;
import size from "module_2" /* 2 */;

const constants = { LOADING: 0, [0]: "LOADING", FAILED: 1, [1]: "FAILED", EPHEMERAL_SUCCESS: 999, [999]: "EPHEMERAL_SUCCESS" };
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/interaction/InteractionStatus.tsx");

export const createInteractionStatus = function createInteractionStatus(message, interaction) {
  let intl2;
  let intl3;
  let intl4;
  const obj = InteractionUtils;
  const interactionStatusViewState = obj.getInteractionStatusViewState(message, interaction);
  if (InteractionUtils.InteractionStatusViewState.SENDING === interactionStatusViewState) {
    const obj2 = { text: intl4.string(intl5.t.RiLfBY), state: constants.LOADING };
    intl4 = tmp(1115).intl;
    return obj2;
  } else if (InteractionUtils.InteractionStatusViewState.CREATED === interactionStatusViewState) {
    const obj3 = { text: intl3.formatToPlainString(intl5.t["7ePV4t"], obj4), state: constants.LOADING };
    intl3 = tmp(1115).intl;
    return obj3;
  } else if (InteractionUtils.InteractionStatusViewState.TIMED_OUT === interactionStatusViewState) {
    const obj5 = { text: intl2.string(intl5.t.h8hzPd), state: constants.FAILED };
    intl2 = tmp(1115).intl;
    return obj5;
  } else if (InteractionUtils.InteractionStatusViewState.FAILED === interactionStatusViewState) {
    let interactionError = message.interactionError;
    if (interactionError == null) {
      const intl = tmp(1115).intl;
      interactionError = intl.string(tmp(1115).t.VCsUJu);
    }
    return { text: interactionError, state: constants.FAILED };
  } else if (InteractionUtils.InteractionStatusViewState.EPHEMERAL_SUCCESS === interactionStatusViewState) {
    return { text: "", state: constants.EPHEMERAL_SUCCESS };
  }
};
