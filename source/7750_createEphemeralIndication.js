// Module ID: 7750
// Function ID: 61575
// Name: createEphemeralIndication
// Dependencies: []
// Exports: createEphemeralIndication

// Module 7750 (createEphemeralIndication)
let closure_3 = importDefault(dependencyMap[0]);
({ HelpdeskArticles: closure_4, MessageFlags: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/messages/native/renderer/row_data/EphemeralIndication.tsx");

export const createEphemeralIndication = function createEphemeralIndication(message) {
  if (message.hasFlag(constants2.EPHEMERAL)) {
    const interactionMetadata = message.interactionMetadata;
    let ephemerality_reason;
    if (null != interactionMetadata) {
      ephemerality_reason = interactionMetadata.ephemerality_reason;
    }
    if (null != ephemerality_reason) {
      let obj1 = arg1(dependencyMap[2]);
      const interactionMetadata2 = message.interactionMetadata;
      let ephemerality_reason1;
      if (null != interactionMetadata2) {
        ephemerality_reason1 = interactionMetadata2.ephemerality_reason;
      }
      let obj = {};
      const ephemeralReasonMessage = obj1.getEphemeralReasonMessage(ephemerality_reason1);
      const intl2 = arg1(dependencyMap[3]).intl;
      obj = {};
      obj1 = { action: "bindDismissMessage", message };
      obj.handleDelete = obj1;
      obj.reason = ephemeralReasonMessage;
      obj.content = intl2.formatToParts(arg1(dependencyMap[3]).t.xgCMRQ, obj);
      obj.helpArticleLink = importDefault(dependencyMap[4]).getArticleURL(constants.USING_APPS_FAQ);
      const intl3 = arg1(dependencyMap[3]).intl;
      obj.helpButtonAccessibilityLabel = intl3.string(arg1(dependencyMap[3]).t.OIWSJe);
      return obj;
    } else {
      const obj2 = {};
      const intl4 = arg1(dependencyMap[3]).intl;
      const obj3 = { city: "innocent", subdivision: "innocent" };
      const obj4 = { action: "bindDismissMessage", message };
      obj3.handleDelete = obj4;
      obj2.content = intl4.formatToParts(arg1(dependencyMap[3]).t.uX3ecL, obj3);
      obj2.helpArticleLink = importDefault(dependencyMap[4]).getAppsSupportURL(constants.EPHEMERAL_MESSAGES);
      const intl5 = arg1(dependencyMap[3]).intl;
      obj2.helpButtonAccessibilityLabel = intl5.string(arg1(dependencyMap[3]).t.htHOrp);
      if (null != message.getMessage(message.id)) {
        obj = importDefault(dependencyMap[4]);
        obj2.helpArticleLink = obj.getArticleURL(constants.GUILD_AUTOMOD_BLOCKED_MESSAGE);
        const intl = arg1(dependencyMap[3]).intl;
        obj2.helpButtonAccessibilityLabel = intl.string(arg1(dependencyMap[3]).t.OiCBhP);
      }
      return obj2;
    }
  }
};
