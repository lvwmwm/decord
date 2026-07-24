// Module ID: 7983
// Function ID: 63173
// Name: createInteractionStatus
// Dependencies: [7889, 1212, 2]
// Exports: createInteractionStatus

// Module 7983 (createInteractionStatus)
let closure_2 = { LOADING: 0, [0]: "LOADING", FAILED: 1, [1]: "FAILED", EPHEMERAL_SUCCESS: 999, [999]: "EPHEMERAL_SUCCESS" };
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/row_data/interaction/InteractionStatus.tsx");

export const createInteractionStatus = function createInteractionStatus(message, interaction) {
  let obj = require(7889) /* _createForOfIteratorHelperLoose */;
  const interactionStatusViewState = obj.getInteractionStatusViewState(message, interaction);
  if (require(7889) /* _createForOfIteratorHelperLoose */.InteractionStatusViewState.SENDING === interactionStatusViewState) {
    obj = {};
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj.text = intl4.string(require(1212) /* getSystemLocale */.t.RiLfBY);
    obj.state = constants.LOADING;
    return obj;
  } else if (require(7889) /* _createForOfIteratorHelperLoose */.InteractionStatusViewState.CREATED === interactionStatusViewState) {
    obj = {};
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const obj1 = { applicationName: message.author.username };
    obj.text = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t["7ePV4t"], obj1);
    obj.state = constants.LOADING;
    return obj;
  } else if (require(7889) /* _createForOfIteratorHelperLoose */.InteractionStatusViewState.TIMED_OUT === interactionStatusViewState) {
    const obj2 = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj2.text = intl2.string(require(1212) /* getSystemLocale */.t.h8hzPd);
    obj2.state = constants.FAILED;
    return obj2;
  } else if (require(7889) /* _createForOfIteratorHelperLoose */.InteractionStatusViewState.FAILED === interactionStatusViewState) {
    const obj3 = {};
    let interactionError = message.interactionError;
    if (null == interactionError) {
      const intl = require(1212) /* getSystemLocale */.intl;
      interactionError = intl.string(require(1212) /* getSystemLocale */.t.VCsUJu);
    }
    obj3.text = interactionError;
    obj3.state = constants.FAILED;
    return obj3;
  } else if (require(7889) /* _createForOfIteratorHelperLoose */.InteractionStatusViewState.EPHEMERAL_SUCCESS === interactionStatusViewState) {
    const obj4 = { text: "", state: constants.EPHEMERAL_SUCCESS };
    return obj4;
  }
};
