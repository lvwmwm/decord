// Module ID: 7532
// Function ID: 7533
// Name: EphemeralIndication
// Dependencies: [7384, 1086, 7533, 1127, 2114, 2]
// Exports: createEphemeralIndication

// Module 7532 (EphemeralIndication)
import intl6 from "intl" /* 1127 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2114 */;
import ApplicationCommandUserAppUtils from "ApplicationCommandUserAppUtils" /* 7533 */;
import GuildAutomodMessageStore from "GuildAutomodMessageStore" /* 7384 */;
import Constants from "Constants" /* 1086 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ HelpdeskArticles: closure_4, MessageFlags: hasOwnProperty } = Constants);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/EphemeralIndication.tsx");

export const createEphemeralIndication = function createEphemeralIndication(message) {
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let obj2;
  let obj3;
  let obj5;
  let obj6;
  let obj7;
  let obj9;
  if (message.hasFlag(hasOwnProperty.EPHEMERAL)) {
    const interactionMetadata = message.interactionMetadata;
    let ephemerality_reason;
    if (interactionMetadata != null) {
      ephemerality_reason = interactionMetadata.ephemerality_reason;
    }
    if (null != ephemerality_reason) {
      const interactionMetadata2 = message.interactionMetadata;
      let ephemerality_reason1;
      const getEphemeralReasonMessage = ApplicationCommandUserAppUtils.getEphemeralReasonMessage;
      ApplicationCommandUserAppUtils;
      if (interactionMetadata2 != null) {
        ephemerality_reason1 = interactionMetadata2.ephemerality_reason;
      }
      const obj = { content: intl2.formatToParts(intl6.t.xgCMRQ, obj2), helpArticleLink: obj5.getArticleURL(constants.USING_APPS_FAQ), helpButtonAccessibilityLabel: intl3.string(intl6.t.OIWSJe) };
      const ephemeralReasonMessage = getEphemeralReasonMessage(ephemerality_reason1);
      intl2 = tmp3(1127).intl;
      obj2 = { handleDelete: obj3, reason: ephemeralReasonMessage };
      obj3 = { action: "bindDismissMessage", message };
      obj5 = HelpdeskUtilsDefault;
      intl3 = tmp3(1127).intl;
      return obj;
    } else {
      const obj4 = { content: intl4.formatToParts(intl6.t.uX3ecL, obj6), helpArticleLink: obj9.getAppsSupportURL(constants.EPHEMERAL_MESSAGES), helpButtonAccessibilityLabel: intl5.string(intl6.t.htHOrp) };
      intl4 = intl6.intl;
      obj6 = { count: 1, countMessages: 1, handleDelete: obj7 };
      obj7 = { action: "bindDismissMessage", message };
      obj9 = HelpdeskUtilsDefault;
      intl5 = intl6.intl;
      const tmp12 = importDefault;
      const tmp13 = constants;
      if (null != GuildAutomodMessageStore.getMessage(message.id)) {
        const tmp12Result = tmp12(2114);
        obj4.helpArticleLink = tmp12Result.getArticleURL(tmp13.GUILD_AUTOMOD_BLOCKED_MESSAGE);
        const intl = tmp10(1127).intl;
        obj4.helpButtonAccessibilityLabel = intl.string(intl6.t.OiCBhP);
      }
      return obj4;
    }
  }
};
