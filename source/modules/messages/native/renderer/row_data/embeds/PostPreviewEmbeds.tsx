// Module ID: 12317
// Function ID: 95918
// Name: createPostPreviewEmbeds
// Dependencies: [653, 12318, 2]
// Exports: createPostPreviewEmbeds

// Module 12317 (createPostPreviewEmbeds)
import { MessageEmbedTypes } from "ME";

const result = require("set").fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/PostPreviewEmbeds.tsx");

export const createPostPreviewEmbeds = function createPostPreviewEmbeds(message, roleStyle, useReducedMotion) {
  let flag = useReducedMotion;
  let closure_0 = message;
  let closure_1 = roleStyle;
  if (useReducedMotion === undefined) {
    flag = false;
  }
  const items = [];
  const embeds = message.embeds;
  if (null != embeds) {
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
