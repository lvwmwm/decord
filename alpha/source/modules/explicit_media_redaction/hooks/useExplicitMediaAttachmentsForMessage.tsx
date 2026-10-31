// Module ID: 13292
// Function ID: 13293
// Name: useExplicitMediaAttachmentsForMessage
// Dependencies: [6061, 563, 11081, 7463, 7469, 2]
// Exports: useRedactableMediaAttachmentsForMessage, useRedactableMediaEmbedsForMessage

// Module 13292 (useExplicitMediaAttachmentsForMessage)
import ObscuredMediaUtils from "ObscuredMediaUtils" /* 7463 */;
import ExplicitMediaRedactionModels from "ExplicitMediaRedactionModels" /* 7469 */;
import MessageStore from "MessageStore" /* 6061 */;
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
