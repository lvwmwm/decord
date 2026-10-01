// Module ID: 11192
// Function ID: 11193
// Name: ForwardPreviewUtils
// Dependencies: [4469, 504, 5196, 2]
// Exports: useForwardPreviewContent

// Module 11192 (ForwardPreviewUtils)
import EmbedUtils from "EmbedUtils" /* 5196 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import size from "module_2" /* 2 */;

let set;

let result = size.fileFinishedImporting("modules/forwarding/ForwardPreviewUtils.tsx");

export const useForwardPreviewContent = function useForwardPreviewContent(message) {
  let forwardOptions;
  message = message.message;
  ({ channel: dependencyMap, forwardOptions } = message);
  let onlyEmbedIndices;
  let onlyAttachmentIds;
  if (forwardOptions != null) {
    onlyAttachmentIds = forwardOptions.onlyAttachmentIds;
  }
  onlyEmbedIndices = undefined;
  if (forwardOptions != null) {
    onlyEmbedIndices = forwardOptions.onlyEmbedIndices;
  }
  const first = message.messageSnapshots[0];
  let message1;
  if (first != null) {
    message1 = first.message;
  }
  if (message1 == null) {
    message1 = message;
  }
  let attachments = message1.attachments;
  if (null != onlyAttachmentIds) {
    const attachments1 = message1.attachments;
    attachments = attachments1.filter((id) => onlyAttachmentIds.includes(id.id));
  } else if (null != onlyEmbedIndices) {
    attachments = [];
  }
  let items = [];
  let obj = message(504);
  const items1 = [onlyAttachmentIds];
  if (!obj.useStateFromStores(items1, () => {
    let shouldStripEmbedsResult = null != dependencyMap;
    if (shouldStripEmbedsResult) {
      const obj = EmbedUtils;
      shouldStripEmbedsResult = !obj.canEmbedLinks(tmp, PermissionStore);
    }
    if (shouldStripEmbedsResult) {
      const obj2 = EmbedUtils;
      shouldStripEmbedsResult = obj2.shouldStripEmbeds(message);
    }
    return shouldStripEmbedsResult;
  })) {
    let embeds = message1.embeds;
    if (null != onlyEmbedIndices) {
      const embeds1 = message1.embeds;
      embeds = embeds1.filter((item, index) => onlyEmbedIndices.includes(index));
    } else if (null != onlyAttachmentIds) {
      embeds = [];
    }
    items = embeds;
  }
  let tmp5 = null != onlyEmbedIndices;
  if (!tmp5) {
    tmp5 = "" === message1.content && items.length > 0;
    const tmp6 = "" === message1.content && items.length > 0;
  }
  let result = message1;
  if (tmp5) {
    set = message1.set;
    const mapped = items.map((url) => url.url);
    result = set("content", mapped.join("\n"));
  }
  let tmp7 = "" === result.content;
  if (tmp7) {
    const first1 = result.embeds[0];
    let rawDescription;
    if (first1 != null) {
      rawDescription = first1.rawDescription;
    }
    tmp7 = null != rawDescription;
  }
  let result1 = result;
  if (tmp7) {
    result1 = result.set("content", result.embeds[0].rawDescription);
  }
  let obj2 = { attachments, embeds: items, hasContent: "" !== result1.content && null == onlyAttachmentIds, contentMessage: result1 };
  return obj2;
};
