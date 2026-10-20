// Module ID: 7651
// Function ID: 7652
// Name: handleExplicitMediaScanTimeoutForMessage
// Dependencies: [7341, 7348, 2]
// Exports: handleExplicitMediaScanTimeoutForMessage

// Module 7651 (handleExplicitMediaScanTimeoutForMessage)
import ExplicitMediaRedactionConstants from "ExplicitMediaRedactionConstants" /* 7341 */;
import findComponentMediaDefault from "findComponentMedia" /* 7348 */;
import size from "module_2" /* 2 */;

function failOverComponentMedia(components) {
  let num;
  const tmp = findComponentMediaDefault(components);
  const iter = tmp[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let obj = { version: FAILOVER_SCAN_VERSION, flags: num };
    let contentScanMetadata = nextResult.contentScanMetadata;
    num = undefined;
    if (contentScanMetadata != null) {
      num = contentScanMetadata.flags;
    }
    if (num == null) {
      num = 0;
    }
    nextResult.contentScanMetadata = obj;
    continue;
  }
}
const FAILOVER_SCAN_VERSION = ExplicitMediaRedactionConstants.FAILOVER_SCAN_VERSION;
const result = size.fileFinishedImporting("modules/explicit_media_redaction/handleExplicitMediaScanTimeoutForMessage.tsx");

export const handleExplicitMediaScanTimeoutForMessage = function handleExplicitMediaScanTimeoutForMessage(message) {
  const f98138 = (item) => {
    item.content_scan_version = -1;
    return item;
  };
  const f98139 = (components) => {
    components.contentScanVersion = -1;
    components = components.components;
    const tmp = closure_1_3;
    if (components == null) {
      components = [];
    }
    tmp(components);
    return components;
  };
  let attachments = message.attachments;
  let embeds = message.embeds;
  const attachments1 = attachments.map(f98138);
  let components = message.components;
  const embeds1 = embeds.map(f98139);
  failOverComponentMedia(components);
  const messageSnapshots = message.messageSnapshots;
  let messageSnapshots1 = messageSnapshots;
  if (null != messageSnapshots) {
    messageSnapshots1 = messageSnapshots;
    if (0 !== messageSnapshots.length) {
      messageSnapshots1 = messageSnapshots.map((message) => {
        message = message.message;
        const attachments = message.attachments;
        const embeds = message.embeds;
        const mapped = attachments.map(f98138);
        let components = message.components;
        const mapped1 = embeds.map(f98139);
        failOverComponentMedia(components);
        const obj = { message: message.merge({ attachments: mapped, embeds: mapped1, components }) };
        return message.merge(obj);
      });
    }
  }
  return message.merge({ attachments: attachments1, embeds: embeds1, components, messageSnapshots: messageSnapshots1 });
};
