// Module ID: 9884
// Function ID: 76534
// Name: useForwardPreviewContent
// Dependencies: []
// Exports: useForwardPreviewContent

// Module 9884 (useForwardPreviewContent)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/forwarding/ForwardPreviewUtils.tsx");

export const useForwardPreviewContent = function useForwardPreviewContent(message) {
  let forwardOptions;
  message = message.message;
  const arg1 = message;
  ({ channel: closure_1, forwardOptions } = message);
  let closure_2;
  let onlyEmbedIndices;
  let onlyAttachmentIds;
  if (null != forwardOptions) {
    onlyAttachmentIds = forwardOptions.onlyAttachmentIds;
  }
  closure_2 = onlyAttachmentIds;
  onlyEmbedIndices = undefined;
  if (null != forwardOptions) {
    onlyEmbedIndices = forwardOptions.onlyEmbedIndices;
  }
  const first = message.messageSnapshots[0];
  message = undefined;
  if (null != first) {
    message = first.message;
  }
  let attachments = message.attachments;
  if (null != onlyAttachmentIds) {
    const attachments1 = message.attachments;
    attachments = attachments1.filter((id) => onlyAttachmentIds.includes(id.id));
  } else if (null != onlyEmbedIndices) {
    attachments = [];
  }
  const items = [];
  let obj = arg1(dependencyMap[1]);
  const items1 = [closure_2];
  if (obj.useStateFromStores(items1, () => {
    let shouldStripEmbedsResult = null != closure_1;
    if (shouldStripEmbedsResult) {
      shouldStripEmbedsResult = !message(closure_1[2]).canEmbedLinks(closure_1, onlyAttachmentIds);
      const obj = message(closure_1[2]);
    }
    if (shouldStripEmbedsResult) {
      shouldStripEmbedsResult = message(closure_1[2]).shouldStripEmbeds(message);
      const obj2 = message(closure_1[2]);
    }
    return shouldStripEmbedsResult;
  })) {
    let tmp6 = null != onlyEmbedIndices;
    if (!tmp6) {
      tmp6 = "" === message.content && items.length > 0;
      const tmp7 = "" === message.content && items.length > 0;
    }
    let result = message;
    if (tmp6) {
      const mapped = items.map((url) => url.url);
      result = message.set("content", mapped.join("\n"));
    }
    let tmp8 = "" === result.content;
    if (tmp8) {
      const first1 = result.embeds[0];
      let rawDescription;
      if (null != first1) {
        rawDescription = first1.rawDescription;
      }
      tmp8 = null != rawDescription;
    }
    let result1 = result;
    if (tmp8) {
      result1 = result.set("content", result.embeds[0].rawDescription);
    }
    obj = { attachments, embeds: items, hasContent: "" !== result1.content && null == onlyAttachmentIds, contentMessage: result1 };
    return obj;
  } else {
    let embeds = message.embeds;
    if (null != onlyEmbedIndices) {
      const embeds1 = message.embeds;
      embeds = embeds1.filter((arg0, arg1) => onlyEmbedIndices.includes(arg1));
    } else if (null != onlyAttachmentIds) {
      embeds = [];
    }
  }
};
