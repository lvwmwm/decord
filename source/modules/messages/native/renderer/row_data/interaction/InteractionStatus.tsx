// Module ID: 7889
// Function ID: 62802
// Name: createInteractionStatus
// Dependencies: []
// Exports: createInteractionStatus

// Module 7889 (createInteractionStatus)
let closure_2 = { LOADING: 0, [0]: "LOADING", FAILED: 1, [1]: "FAILED", EPHEMERAL_SUCCESS: 999, [999]: "EPHEMERAL_SUCCESS" };
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/row_data/interaction/InteractionStatus.tsx");

export const createInteractionStatus = function createInteractionStatus(message, interaction) {
  let obj = require(dependencyMap[0]);
  const interactionStatusViewState = obj.getInteractionStatusViewState(message, interaction);
  if (require(dependencyMap[0]).InteractionStatusViewState.SENDING === interactionStatusViewState) {
    obj = {};
    const intl4 = require(dependencyMap[1]).intl;
    obj.text = intl4.string(require(dependencyMap[1]).t.RiLfBY);
    obj.state = constants.LOADING;
    return obj;
  } else if (require(dependencyMap[0]).InteractionStatusViewState.CREATED === interactionStatusViewState) {
    obj = {};
    const intl3 = require(dependencyMap[1]).intl;
    const obj1 = { applicationName: message.author.username };
    obj.text = intl3.formatToPlainString(require(dependencyMap[1]).t.7ePV4t, obj1);
    obj.state = constants.LOADING;
    return obj;
  } else if (require(dependencyMap[0]).InteractionStatusViewState.TIMED_OUT === interactionStatusViewState) {
    const obj2 = {};
    const intl2 = require(dependencyMap[1]).intl;
    obj2.text = intl2.string(require(dependencyMap[1]).t.h8hzPd);
    obj2.state = constants.FAILED;
    return obj2;
  } else if (require(dependencyMap[0]).InteractionStatusViewState.FAILED === interactionStatusViewState) {
    const obj3 = {};
    let interactionError = message.interactionError;
    if (null == interactionError) {
      const intl = require(dependencyMap[1]).intl;
      interactionError = intl.string(require(dependencyMap[1]).t.VCsUJu);
    }
    obj3.text = interactionError;
    obj3.state = constants.FAILED;
    return obj3;
  } else if (require(dependencyMap[0]).InteractionStatusViewState.EPHEMERAL_SUCCESS === interactionStatusViewState) {
    const obj4 = { text: "", state: constants.EPHEMERAL_SUCCESS };
    return obj4;
  }
};
