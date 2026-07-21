// Module ID: 11138
// Function ID: 86640
// Name: useNativeForumPostContent
// Dependencies: []
// Exports: default

// Module 11138 (useNativeForumPostContent)
const MessageFlags = require(dependencyMap[0]).MessageFlags;
const _module = require(dependencyMap[1]);
let closure_4 = _module.createStyles({ italics: { fontStyle: "italic" } });
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/forums/native/posts/hooks/useNativeForumPostContent.tsx");

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
    const intl9 = require(dependencyMap[2]).intl;
    obj.content = intl9.string(require(dependencyMap[2]).t.U8Rr2l);
    obj.style = tmp.italics;
    obj.variant = "text-sm/normal";
    return obj;
  } else {
    if (null != message) {
      if (importDefault(dependencyMap[3])(message)) {
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
              obj = { "Null": true, "Null": true, "Null": true };
              let tmp31 = messageContent;
              if (tmp9) {
                tmp31 = null;
              }
              obj.content = tmp31;
              return obj;
            } else if (null == message) {
              const intl6 = require(dependencyMap[2]).intl;
              let stringResult = intl6.string(require(dependencyMap[2]).t.mE3KJN);
            } else {
              if (obj5.getMessageStickers(message).length > 0) {
                const intl5 = require(dependencyMap[2]).intl;
                stringResult = intl5.string(require(dependencyMap[2]).t.7K5Lma);
              } else {
                if (null != message.interaction) {
                  if ("" === message.content) {
                    const intl4 = require(dependencyMap[2]).intl;
                    stringResult = intl4.string(require(dependencyMap[2]).t.2v7kfl);
                  }
                }
                if (message.hasFlag(MessageFlags.IS_VOICE_MESSAGE)) {
                  const intl3 = require(dependencyMap[2]).intl;
                  stringResult = intl3.string(require(dependencyMap[2]).t.6bhHrc);
                } else if (message.hasFlag(MessageFlags.IS_COMPONENTS_V2)) {
                  const intl2 = require(dependencyMap[2]).intl;
                  stringResult = intl2.string(require(dependencyMap[2]).t.Xxm5i3);
                } else {
                  stringResult = null;
                  if (tmp16) {
                    const intl = require(dependencyMap[2]).intl;
                    stringResult = intl.string(require(dependencyMap[2]).t.JAKsM8);
                  }
                  const tmp16 = message.embeds.length > 0 || message.attachments.length > 0;
                }
              }
              const obj5 = require(dependencyMap[4]);
            }
          }
        }
      }
    }
    const obj1 = {};
    if (!(null != message && message.blocked)) {
      if (!tmp7) {
        const intl7 = require(dependencyMap[2]).intl;
        let stringResult1 = intl7.string(require(dependencyMap[2]).t.yWK7ZM);
      }
      obj1.content = stringResult1;
      obj1.style = tmp.italics;
      obj1.variant = "text-sm/normal";
      return obj1;
    }
    const intl8 = require(dependencyMap[2]).intl;
    stringResult1 = intl8.string(require(dependencyMap[2]).t.Lkp2fB);
    const tmp6 = null != message && message.ignored;
  }
};
