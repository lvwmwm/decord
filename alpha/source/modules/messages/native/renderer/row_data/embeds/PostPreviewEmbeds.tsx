// Module ID: 13380
// Function ID: 13381
// Name: PostPreviewEmbeds
// Dependencies: [1085, 13381, 2]
// Exports: createPostPreviewEmbeds

// Module 13380 (PostPreviewEmbeds)
import Constants from "Constants" /* 1085 */;
import createMediaPostPreviewEmbedContentDefault from "createMediaPostPreviewEmbedContent" /* 13381 */;
import size from "module_2" /* 2 */;

const MessageEmbedTypes = Constants.MessageEmbedTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/PostPreviewEmbeds.tsx");

export const createPostPreviewEmbeds = function createPostPreviewEmbeds(message, roleStyle, useReducedMotion) {
  let closure_0 = message;
  let closure_1 = roleStyle;
  let flag = useReducedMotion;
  if (useReducedMotion === undefined) {
    flag = false;
  }
  const items = [];
  const embeds = message.embeds;
  if (embeds != null) {
    const item = embeds.forEach((type) => {
      if (type.type === MessageEmbedTypes.POST_PREVIEW) {
        const tmp6 = createMediaPostPreviewEmbedContentDefault(message, roleStyle, type.url, flag);
        if (null != tmp6) {
          items.push(tmp6);
        }
      }
    });
  }
  return items;
};
