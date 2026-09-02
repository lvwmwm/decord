// Module ID: 11484
// Function ID: 11485
// Name: useRedactableMediaAttachmentsForMessage
// Dependencies: [4735, 644, 10282, 6146, 6151, 2]
// Exports: useRedactableMediaAttachmentsForMessage, useRedactableMediaEmbedsForMessage

// Module 11484 (useRedactableMediaAttachmentsForMessage)
import closure_2 from "reinjectEphemerals" /* 4735 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/hooks/useExplicitMediaAttachmentsForMessage.tsx");

export const useRedactableMediaAttachmentsForMessage = function useRedactableMediaAttachmentsForMessage(channelId, messageId, attachmentId) {
  const _require = channelId;
  dependencyMap = messageId;
  closure_2 = attachmentId;
  const items = [closure_2];
  const stateFromStores = _require(644).useStateFromStores(items, () => attachmentId.getMessage(closure_0, closure_1));
  let obj = _require(644);
  closure_3 = _require(10282).useEnabledHarmTypesBitmaskForMessage(stateFromStores);
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
  const obj2 = _require(10282);
};
export const useRedactableMediaEmbedsForMessage = function useRedactableMediaEmbedsForMessage(channelId, messageId, embedId) {
  const _require = channelId;
  dependencyMap = messageId;
  closure_2 = embedId;
  const items = [closure_2];
  const stateFromStores = _require(644).useStateFromStores(items, () => embedId.getMessage(closure_0, closure_1));
  let obj = _require(644);
  closure_3 = _require(10282).useEnabledHarmTypesBitmaskForMessage(stateFromStores);
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
  const obj2 = _require(10282);
};
