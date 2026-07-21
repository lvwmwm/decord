// Module ID: 12199
// Function ID: 93741
// Name: createPostPreviewEmbeds
// Dependencies: []
// Exports: createPostPreviewEmbeds

// Module 12199 (createPostPreviewEmbeds)
const MessageEmbedTypes = require(dependencyMap[0]).MessageEmbedTypes;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/PostPreviewEmbeds.tsx");

export const createPostPreviewEmbeds = function createPostPreviewEmbeds(message, roleStyle, useReducedMotion) {
  let flag = useReducedMotion;
  const importDefault = message;
  const dependencyMap = roleStyle;
  if (useReducedMotion === undefined) {
    flag = false;
  }
  const MessageEmbedTypes = flag;
  const items = [];
  const embeds = message.embeds;
  if (null != embeds) {
    const item = embeds.forEach((type) => {
      if (type.type === flag.POST_PREVIEW) {
        const tmp6 = type(arg1[1])(type, arg1, type.url, flag);
        if (null != tmp6) {
          items.push(tmp6);
        }
      }
    });
  }
  return items;
};
