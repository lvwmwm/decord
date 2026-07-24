// Module ID: 9901
// Function ID: 76598
// Name: useRedactableMediaAttachmentsForMessage
// Dependencies: [4349, 624, 9902, 5670, 5675, 2]
// Exports: useRedactableMediaAttachmentsForMessage, useRedactableMediaEmbedsForMessage

// Module 9901 (useRedactableMediaAttachmentsForMessage)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("useEnabledHarmTypesBitmaskForChannelAndAuthorId").fileFinishedImporting("modules/explicit_media_redaction/hooks/useExplicitMediaAttachmentsForMessage.tsx");

export const useRedactableMediaAttachmentsForMessage = function useRedactableMediaAttachmentsForMessage(channelId, messageId, attachmentId) {
  const _require = channelId;
  const dependencyMap = messageId;
  let _isNativeReflectConstruct = attachmentId;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(624).useStateFromStores(items, () => attachmentId.getMessage(closure_0, closure_1));
  let obj = _require(624);
  let closure_3 = _require(9902).useEnabledHarmTypesBitmaskForMessage(stateFromStores);
  if (null == stateFromStores) {
    return [];
  } else {
    let found;
    if (null != stateFromStores) {
      const attachments = stateFromStores.attachments;
      if (null != attachments) {
        found = attachments.filter(tmp2);
      }
    }
    if (null == found) {
      found = [];
    }
    return found;
  }
  const obj2 = _require(9902);
};
export const useRedactableMediaEmbedsForMessage = function useRedactableMediaEmbedsForMessage(channelId, messageId, embedId) {
  const _require = channelId;
  const dependencyMap = messageId;
  let _isNativeReflectConstruct = embedId;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(624).useStateFromStores(items, () => embedId.getMessage(closure_0, closure_1));
  let obj = _require(624);
  let closure_3 = _require(9902).useEnabledHarmTypesBitmaskForMessage(stateFromStores);
  if (null == stateFromStores) {
    return [];
  } else {
    let found;
    if (null != stateFromStores) {
      const embeds = stateFromStores.embeds;
      if (null != embeds) {
        found = embeds.filter(tmp2);
      }
    }
    if (null == found) {
      found = [];
    }
    return found;
  }
  const obj2 = _require(9902);
};
