// Module ID: 6846
// Function ID: 54127
// Name: hasAttachmentsEmbedsOrComponents
// Dependencies: [2]
// Exports: hasAttachmentsEmbedsComponentsOrSnapshots

// Module 6846 (hasAttachmentsEmbedsOrComponents)
function hasAttachmentsEmbedsOrComponents(attachments) {
  let tmp = null != attachments.attachments;
  if (tmp) {
    tmp = attachments.attachments.length > 0;
  }
  if (!tmp) {
    let tmp2 = null != attachments.embeds;
    if (tmp2) {
      tmp2 = attachments.embeds.length > 0;
    }
    tmp = tmp2;
  }
  if (!tmp) {
    let tmp3 = null != attachments.components;
    if (tmp3) {
      tmp3 = attachments.components.length > 0;
    }
    tmp = tmp3;
  }
  return tmp;
}
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaManagerUtils.tsx");

export const hasAttachmentsEmbedsComponentsOrSnapshots = function hasAttachmentsEmbedsComponentsOrSnapshots(message) {
  if (null == message) {
    return false;
  } else {
    const obj = "messageSnapshots" in message ? message.messageSnapshots : message.message_snapshots;
    let tmp2 = hasAttachmentsEmbedsOrComponents(message);
    if (!tmp2) {
      let tmp3 = null != obj;
      if (tmp3) {
        let someResult;
        if (null != obj) {
          someResult = obj.some((message) => outer1_0(message.message));
        }
        tmp3 = someResult;
      }
      tmp2 = tmp3;
    }
    return tmp2;
  }
};
