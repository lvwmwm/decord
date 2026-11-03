// Module ID: 15289
// Function ID: 15290
// Name: PostPreviewEmbeds
// Dependencies: [1072, 15290, 2]
// Exports: createPostPreviewEmbeds

// Module 15289 (PostPreviewEmbeds)
import Constants from "Constants" /* 1072 */;
import createMediaPostPreviewEmbedContentDefault from "createMediaPostPreviewEmbedContent" /* 15290 */;
import size from "module_2" /* 2 */;

const MessageEmbedTypes = Constants.MessageEmbedTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/PostPreviewEmbeds.tsx");

export function createPostPreviewEmbeds(message, roleStyle, useReducedMotion) {
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
}
