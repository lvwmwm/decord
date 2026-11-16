// Module ID: 13572
// Function ID: 13573
// Name: useExplicitMediaAttachmentsForMessage
// Dependencies: [6226, 563, 11245, 7560, 7566, 2]
// Exports: useRedactableMediaAttachmentsForMessage, useRedactableMediaEmbedsForMessage

// Module 13572 (useExplicitMediaAttachmentsForMessage)
import ObscuredMediaUtils from "ObscuredMediaUtils" /* 7560 */;
import ExplicitMediaRedactionModels from "ExplicitMediaRedactionModels" /* 7566 */;
import MessageStore from "MessageStore" /* 6226 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/hooks/useExplicitMediaAttachmentsForMessage.tsx");

export function useRedactableMediaAttachmentsForMessage(channelId, messageId, attachmentId) {
  _require = channelId;
  dependencyMap = messageId;
  let closure_2 = attachmentId;
  let obj = require("useStateFromStores");
  const items = [closure_2];
  const stateFromStores = obj.useStateFromStores(items, () => MessageStore.getMessage(channelId, messageId));
  let obj2 = require("useContentHarmTypes");
  let closure_3 = obj2.useEnabledHarmTypesBitmaskForMessage(stateFromStores);
  if (null == stateFromStores) {
    return [];
  } else {
    let found;
    if (stateFromStores != null) {
      const attachments = stateFromStores.attachments;
      if (attachments != null) {
        found = attachments.filter(tmp2);
      }
    }
    if (found == null) {
      found = [];
    }
    return found;
  }
}
export function useRedactableMediaEmbedsForMessage(channelId, messageId, embedId) {
  _require = channelId;
  dependencyMap = messageId;
  let closure_2 = embedId;
  let obj = require("useStateFromStores");
  const items = [closure_2];
  const stateFromStores = obj.useStateFromStores(items, () => MessageStore.getMessage(channelId, messageId));
  let obj2 = require("useContentHarmTypes");
  let closure_3 = obj2.useEnabledHarmTypesBitmaskForMessage(stateFromStores);
  if (null == stateFromStores) {
    return [];
  } else {
    let found;
    if (stateFromStores != null) {
      const embeds = stateFromStores.embeds;
      if (embeds != null) {
        found = embeds.filter(tmp2);
      }
    }
    if (found == null) {
      found = [];
    }
    return found;
  }
}
