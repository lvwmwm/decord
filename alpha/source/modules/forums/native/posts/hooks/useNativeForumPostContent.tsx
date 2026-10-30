// Module ID: 13737
// Function ID: 13738
// Name: useNativeForumPostContent
// Dependencies: [1072, 5009, 1114, 6882, 6554, 2]
// Exports: default

// Module 13737 (useNativeForumPostContent)
import Constants from "Constants" /* 1072 */;
import intl10 from "intl" /* 1114 */;
import StickersUtils from "StickersUtils" /* 6554 */;
import isSystemMessageDefault from "isSystemMessage" /* 6882 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const MessageFlags = Constants.MessageFlags;
let closure_4 = createStyles.createStyles({ italics: { fontStyle: "italic" } });
const result = size.fileFinishedImporting("modules/forums/native/posts/hooks/useNativeForumPostContent.tsx");

export default function useNativeForumPostContent(arg0) {
  let intl9;
  let isMessageDeleted;
  let message;
  let messageContent;
  let messageLoaded;
  let senderModifier;
  ({ message, messageContent, senderModifier } = arg0);
  ({ messageLoaded, isMessageDeleted } = arg0);
  const tmp = closure_4();
  if (isMessageDeleted) {
    const obj2 = { content: intl9.string(intl10.t.U8Rr2l), style: tmp.italics, variant: "text-sm/normal" };
    intl9 = intl10.intl;
    return obj2;
  } else {
    if (null != message) {
      if (isSystemMessageDefault(message)) {
        return { content: messageContent, style: tmp.italics, variant: "text-sm/normal" };
      }
    }
    const tmp6 = null != message && message.ignored;
    if (!(null != message && message.blocked)) {
      if ("blocked" !== senderModifier) {
        if (!tmp6) {
          if ("ignored" !== senderModifier) {
            let content;
            if (message != null) {
              content = message.content;
            }
            let tmp9 = null == content;
            if (!tmp9) {
              let content1;
              if (message != null) {
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
              const isArray = Array.isArray(messageContent) && 0 === messageContent.length;
              tmp9 = isArray;
            }
            let tmp13 = null;
            if (messageLoaded) {
              let stringResult;
              if (null == message) {
                const intl6 = intl10.intl;
                stringResult = intl6.string(intl10.t.mE3KJN);
              } else {
                const obj5 = StickersUtils;
                if (obj5.getMessageStickers(message).length > 0) {
                  const intl5 = tmp27(1114).intl;
                  stringResult = intl5.string(tmp27(1114).t["7K5Lma"]);
                } else {
                  if (null != message.interaction) {
                    if ("" === message.content) {
                      const intl4 = tmp27(1114).intl;
                      stringResult = intl4.string(tmp27(1114).t["2v7kfl"]);
                    }
                  }
                  const tmp14 = MessageFlags;
                  if (message.hasFlag(MessageFlags.IS_VOICE_MESSAGE)) {
                    const intl3 = tmp27(1114).intl;
                    stringResult = intl3.string(tmp27(1114).t["6bhHrc"]);
                  } else if (message.hasFlag(tmp14.IS_COMPONENTS_V2)) {
                    const intl2 = tmp27(1114).intl;
                    stringResult = intl2.string(tmp27(1114).t.Xxm5i3);
                  } else {
                    stringResult = null;
                    const tmp15 = message.embeds.length > 0 || message.attachments.length > 0;
                    if (tmp15) {
                      const intl = tmp27(1114).intl;
                      stringResult = intl.string(tmp27(1114).t.JAKsM8);
                    }
                  }
                }
              }
              tmp13 = stringResult;
            }
            let tmp19 = messageContent;
            if (tmp9) {
              tmp19 = tmp13;
            }
            return { content: tmp19, style: null, variant: "text-sm/medium" };
          }
        }
      }
    }
    if (!(null != message && message.blocked)) {
      let stringResult1;
      if ("blocked" !== senderModifier) {
        const intl7 = intl10.intl;
        stringResult1 = intl7.string(intl10.t.yWK7ZM);
      }
      return { content: stringResult1, style: tmp.italics, variant: "text-sm/normal" };
    }
    const intl8 = intl10.intl;
    stringResult1 = intl8.string(intl10.t.Lkp2fB);
  }
};
