// Module ID: 11149
// Function ID: 86703
// Name: useNativeForumPostContent
// Dependencies: [653, 4130, 1212, 5651, 4466, 2]
// Exports: default

// Module 11149 (useNativeForumPostContent)
import { MessageFlags } from "ME";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4 = _createForOfIteratorHelperLoose.createStyles({ italics: { fontStyle: "italic" } });
const result = require("getSystemLocale").fileFinishedImporting("modules/forums/native/posts/hooks/useNativeForumPostContent.tsx");

export default function useNativeForumPostContent(arg0) {
  let isMessageDeleted;
  let message;
  let messageContent;
  let messageLoaded;
  let senderModifier;
  ({ message, messageContent, senderModifier } = arg0);
  ({ messageLoaded, isMessageDeleted } = arg0);
  const tmp = callback();
  if (isMessageDeleted) {
    let obj = {};
    const intl9 = require(1212) /* getSystemLocale */.intl;
    obj.content = intl9.string(require(1212) /* getSystemLocale */.t.U8Rr2l);
    obj.style = tmp.italics;
    obj.variant = "text-sm/normal";
    return obj;
  } else {
    if (null != message) {
      if (importDefault(5651)(message)) {
        obj = { content: messageContent, style: tmp.italics, variant: "text-sm/normal" };
        return obj;
      }
    }
    if (!(null != message && message.blocked)) {
      if (!tmp7) {
        if (!tmp6) {
          if ("ignored" !== senderModifier) {
            let content;
            if (null != message) {
              content = message.content;
            }
            let tmp9 = null == content;
            if (!tmp9) {
              let content1;
              if (null != message) {
                content1 = message.content;
              }
              tmp9 = "" === content1;
            }
            if (!tmp9) {
              tmp9 = null == messageContent;
            }
            if (!tmp9) {
              tmp9 = "" === messageContent;
            }
            if (!tmp9) {
              const _Array = Array;
              let isArray = Array.isArray(messageContent);
              if (isArray) {
                isArray = 0 === messageContent.length;
              }
              tmp9 = isArray;
            }
            if (!messageLoaded) {
              obj = { content: null, style: null, variant: "text-sm/medium" };
              let tmp31 = messageContent;
              if (tmp9) {
                tmp31 = null;
              }
              obj.content = tmp31;
              return obj;
            } else if (null == message) {
              const intl6 = require(1212) /* getSystemLocale */.intl;
              let stringResult = intl6.string(require(1212) /* getSystemLocale */.t.mE3KJN);
            } else {
              if (obj5.getMessageStickers(message).length > 0) {
                const intl5 = require(1212) /* getSystemLocale */.intl;
                stringResult = intl5.string(require(1212) /* getSystemLocale */.t["7K5Lma"]);
              } else {
                if (null != message.interaction) {
                  if ("" === message.content) {
                    const intl4 = require(1212) /* getSystemLocale */.intl;
                    stringResult = intl4.string(require(1212) /* getSystemLocale */.t["2v7kfl"]);
                  }
                }
                if (message.hasFlag(MessageFlags.IS_VOICE_MESSAGE)) {
                  const intl3 = require(1212) /* getSystemLocale */.intl;
                  stringResult = intl3.string(require(1212) /* getSystemLocale */.t["6bhHrc"]);
                } else if (message.hasFlag(MessageFlags.IS_COMPONENTS_V2)) {
                  const intl2 = require(1212) /* getSystemLocale */.intl;
                  stringResult = intl2.string(require(1212) /* getSystemLocale */.t.Xxm5i3);
                } else {
                  stringResult = null;
                  if (tmp16) {
                    const intl = require(1212) /* getSystemLocale */.intl;
                    stringResult = intl.string(require(1212) /* getSystemLocale */.t.JAKsM8);
                  }
                  tmp16 = message.embeds.length > 0 || message.attachments.length > 0;
                }
              }
              obj5 = require(4466) /* getStickerPackPreviewSticker */;
            }
          }
        }
      }
    }
    const obj1 = {};
    if (!(null != message && message.blocked)) {
      if (!tmp7) {
        const intl7 = require(1212) /* getSystemLocale */.intl;
        let stringResult1 = intl7.string(require(1212) /* getSystemLocale */.t.yWK7ZM);
      }
      obj1.content = stringResult1;
      obj1.style = tmp.italics;
      obj1.variant = "text-sm/normal";
      return obj1;
    }
    const intl8 = require(1212) /* getSystemLocale */.intl;
    stringResult1 = intl8.string(require(1212) /* getSystemLocale */.t.Lkp2fB);
    tmp6 = null != message && message.ignored;
  }
};
