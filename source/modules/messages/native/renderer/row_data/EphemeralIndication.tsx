// Module ID: 7854
// Function ID: 61973
// Name: createEphemeralIndication
// Dependencies: [7716, 653, 7855, 1212, 1920, 2]
// Exports: createEphemeralIndication

// Module 7854 (createEphemeralIndication)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let closure_4;
let closure_5;
const require = arg1;
({ HelpdeskArticles: closure_4, MessageFlags: closure_5 } = ME);
const result = require("getEphemeralReasonMessage").fileFinishedImporting("modules/messages/native/renderer/row_data/EphemeralIndication.tsx");

export const createEphemeralIndication = function createEphemeralIndication(message) {
  if (message.hasFlag(constants2.EPHEMERAL)) {
    const interactionMetadata = message.interactionMetadata;
    let ephemerality_reason;
    if (null != interactionMetadata) {
      ephemerality_reason = interactionMetadata.ephemerality_reason;
    }
    if (null != ephemerality_reason) {
      let obj1 = require(7855) /* getEphemeralReasonMessage */;
      const interactionMetadata2 = message.interactionMetadata;
      let ephemerality_reason1;
      if (null != interactionMetadata2) {
        ephemerality_reason1 = interactionMetadata2.ephemerality_reason;
      }
      let obj = {};
      const ephemeralReasonMessage = obj1.getEphemeralReasonMessage(ephemerality_reason1);
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj = {};
      obj1 = { action: "bindDismissMessage", message };
      obj.handleDelete = obj1;
      obj.reason = ephemeralReasonMessage;
      obj.content = intl2.formatToParts(require(1212) /* getSystemLocale */.t.xgCMRQ, obj);
      obj.helpArticleLink = importDefault(1920).getArticleURL(constants.USING_APPS_FAQ);
      const intl3 = require(1212) /* getSystemLocale */.intl;
      obj.helpButtonAccessibilityLabel = intl3.string(require(1212) /* getSystemLocale */.t.OIWSJe);
      return obj;
    } else {
      const obj2 = {};
      const intl4 = require(1212) /* getSystemLocale */.intl;
      const obj3 = { count: 1, countMessages: 1 };
      const obj4 = { action: "bindDismissMessage", message };
      obj3.handleDelete = obj4;
      obj2.content = intl4.formatToParts(require(1212) /* getSystemLocale */.t.uX3ecL, obj3);
      obj2.helpArticleLink = importDefault(1920).getAppsSupportURL(constants.EPHEMERAL_MESSAGES);
      const intl5 = require(1212) /* getSystemLocale */.intl;
      obj2.helpButtonAccessibilityLabel = intl5.string(require(1212) /* getSystemLocale */.t.htHOrp);
      if (null != message.getMessage(message.id)) {
        obj = importDefault(1920);
        obj2.helpArticleLink = obj.getArticleURL(constants.GUILD_AUTOMOD_BLOCKED_MESSAGE);
        const intl = require(1212) /* getSystemLocale */.intl;
        obj2.helpButtonAccessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.OiCBhP);
      }
      return obj2;
    }
  }
};
