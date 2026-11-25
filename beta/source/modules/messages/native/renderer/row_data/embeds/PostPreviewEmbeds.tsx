// Module ID: 14349
// Function ID: 14350
// Name: PostPreviewEmbeds
// Dependencies: [1071, 14350, 2]
// Exports: createPostPreviewEmbeds

// Module 14349 (PostPreviewEmbeds)
import Constants from "Constants" /* 1071 */;
import createMediaPostPreviewEmbedContentDefault from "createMediaPostPreviewEmbedContent" /* 14350 */;
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
