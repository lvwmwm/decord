// Module ID: 9856
// Function ID: 76323
// Name: useRedactableMediaAttachmentsForMessage
// Dependencies: []
// Exports: useRedactableMediaAttachmentsForMessage, useRedactableMediaEmbedsForMessage

// Module 9856 (useRedactableMediaAttachmentsForMessage)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/explicit_media_redaction/hooks/useExplicitMediaAttachmentsForMessage.tsx");

export const useRedactableMediaAttachmentsForMessage = function useRedactableMediaAttachmentsForMessage(channelId, messageId, attachmentId) {
  messageId = channelId;
  const dependencyMap = messageId;
  let closure_2 = attachmentId;
  const items = [closure_2];
  const stateFromStores = messageId(dependencyMap[1]).useStateFromStores(items, () => arg2.getMessage(arg0, arg1));
  const obj = messageId(dependencyMap[1]);
  let closure_3 = messageId(dependencyMap[2]).useEnabledHarmTypesBitmaskForMessage(stateFromStores);
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
  const obj2 = messageId(dependencyMap[2]);
};
export const useRedactableMediaEmbedsForMessage = function useRedactableMediaEmbedsForMessage(channelId, messageId, embedId) {
  messageId = channelId;
  const dependencyMap = messageId;
  let closure_2 = embedId;
  const items = [closure_2];
  const stateFromStores = messageId(dependencyMap[1]).useStateFromStores(items, () => arg2.getMessage(arg0, arg1));
  const obj = messageId(dependencyMap[1]);
  let closure_3 = messageId(dependencyMap[2]).useEnabledHarmTypesBitmaskForMessage(stateFromStores);
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
  const obj2 = messageId(dependencyMap[2]);
};
