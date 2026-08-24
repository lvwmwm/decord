// Module ID: 12848
// Function ID: 12849
// Name: createPostPreviewEmbeds
// Dependencies: [676, 12849, 2]
// Exports: createPostPreviewEmbeds

// Module 12848 (createPostPreviewEmbeds)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;

const MessageEmbedTypes = ME.MessageEmbedTypes;
const result = set.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/PostPreviewEmbeds.tsx");

export const createPostPreviewEmbeds = function createPostPreviewEmbeds(message, roleStyle, useReducedMotion) {
  closure_0 = message;
  closure_1 = roleStyle;
  let flag = useReducedMotion;
  if (useReducedMotion === undefined) {
    flag = false;
  }
  const items = [];
  const embeds = message.embeds;
  if (embeds != null) {
    const item = embeds.forEach((type) => {
      if (type.type === flag.POST_PREVIEW) {
        const tmp6 = message(table[1])(message, table, type.url, flag);
        if (null != tmp6) {
          items.push(tmp6);
        }
      }
    });
  }
  return items;
};
