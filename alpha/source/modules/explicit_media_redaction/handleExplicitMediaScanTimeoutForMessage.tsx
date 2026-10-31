// Module ID: 7771
// Function ID: 7772
// Name: handleExplicitMediaScanTimeoutForMessage
// Dependencies: [7466, 12, 7473, 2]
// Exports: handleExplicitMediaScanTimeoutForMessage

// Module 7771 (handleExplicitMediaScanTimeoutForMessage)
import _mod12 from "module_12" /* 12 */;
import ExplicitMediaRedactionConstants from "ExplicitMediaRedactionConstants" /* 7466 */;
import findComponentMediaDefault from "findComponentMedia" /* 7473 */;
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

export function handleExplicitMediaScanTimeoutForMessage(message) {
  const f91569 = (item) => {
    const obj = { content_scan_version: -1 };
    const merged = Object.assign(item);
    return obj;
  };
  const f91570 = (components) => {
    if (null == components.components) {
      const obj2 = { contentScanVersion: -1 };
      const merged = Object.assign(components);
      return obj2;
    } else {
      const obj = closure_1_0(closure_1_2[1]);
      const cloneDeepResult = obj.cloneDeep(components.components);
      closure_1_4(cloneDeepResult);
      const obj3 = { contentScanVersion: -1, components: cloneDeepResult };
      const merged1 = Object.assign(components);
      return obj3;
    }
  };
  let attachments = message.attachments;
  let embeds = message.embeds;
  const attachments1 = attachments.map(f91569);
  const embeds1 = embeds.map(f91570);
  let obj = _mod12;
  const components = obj.cloneDeep(message.components);
  const tmp4 = failOverComponentMedia(components);
  const messageSnapshots = message.messageSnapshots;
  let messageSnapshots1 = messageSnapshots;
  if (null != messageSnapshots) {
    messageSnapshots1 = messageSnapshots;
    if (0 !== messageSnapshots.length) {
      messageSnapshots1 = messageSnapshots.map((message) => {
        message = message.message;
        const attachments = message.attachments;
        const embeds = message.embeds;
        const mapped = attachments.map(f91569);
        const mapped1 = embeds.map(f91570);
        let obj = _mod12;
        let cloneDeepResult = obj.cloneDeep(message.components);
        failOverComponentMedia(cloneDeepResult);
        let obj2 = { message: message.merge({ attachments: mapped, embeds: mapped1, components: cloneDeepResult }) };
        return message.merge(obj2);
      });
    }
  }
  return message.merge({ attachments: attachments1, embeds: embeds1, components, messageSnapshots: messageSnapshots1 });
}
