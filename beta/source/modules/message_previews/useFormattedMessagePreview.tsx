// Module ID: 12958
// Function ID: 12959
// Name: useFormattedMessagePreview
// Dependencies: [502, 4409, 1376, 1078, 1094, 558, 568, 504, 8244, 4990, 1119, 4908, 7546, 12, 8249, 8334, 2]
// Exports: isMessageContentPreviewable

// Module 12958 (useFormattedMessagePreview)
import MessageTypes from "MessageTypes" /* 1094 */;
import util from "util" /* 1119 */;
import isForwardMessageDefault from "isForwardMessage" /* 7546 */;
import useIsCallActiveDefault from "useIsCallActive" /* 8244 */;
import SystemMessageUtilsDefault from "SystemMessageUtils" /* 8249 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RelationshipStore from "RelationshipStore" /* 4409 */;
import UserStore from "UserStore" /* 1376 */;

const require = globalThis.__r;

const useMessageAuthorDefault = tmp9(4990);
require = fn;
function formatMessagePreview(type, isBlocked) {
  if (isBlocked.isBlocked) {
    const obj2 = { type: "text", text: null };
    const intl29 = util.intl;
    obj2.text = intl29.string(util.t.XAkOo2);
    return obj2;
  } else if (tmp) {
    const obj3 = { type: "text", text: null };
    const intl28 = util.intl;
    obj3.text = intl28.string(util.t["G7p6v/"]);
    return obj3;
  } else {
    type = type.type;
    const tmp4 = require;
    if (MessageTypes.MessageTypes.DEFAULT !== type) {
      if (tmp4(1094).MessageTypes.CHANGELOG !== type) {
        if (tmp4(1094).MessageTypes.REPLY !== type) {
          if (tmp4(1094).MessageTypes.CHAT_INPUT_COMMAND !== type) {
            if (tmp4(1094).MessageTypes.CONTEXT_MENU_COMMAND !== type) {
              if (tmp4(1094).MessageTypes.POLL_RESULT !== type) {
                let flag = false;
              }
              if (flag) {
                if (1 === type.embeds.length) {
                  if (type.embeds[0].url === type.content) {
                    if (null != type.embeds[0].rawTitle) {
                      const obj4 = { type: "markup", markup: type.embeds[0].rawTitle };
                      let tmp10 = obj4;
                    }
                    if (null != tmp10) {
                      const obj5 = {};
                      const merged = Object.assign(tmp10);
                      obj5.authorLabel = tmp2;
                      return obj5;
                    }
                  }
                }
                if (null != type.content) {
                  if ("" !== type.content) {
                    const obj6 = { type: "message", message: type };
                    tmp10 = obj6;
                  }
                }
                if (type.hasFlag(MessageFlags.IS_VOICE_MESSAGE)) {
                  const obj7 = { type: "text", text: null };
                  const intl11 = tmp4(1119).intl;
                  obj7.text = intl11.string(tmp4(1119).t.slFYgi);
                  tmp10 = obj7;
                } else if (type.attachments.length > 0) {
                  const attachments = type.attachments;
                  const everyResult = attachments.every((filename) => require("MediaFormatTesters").isImageFile(filename.filename));
                  let everyResult1 = !everyResult;
                  if (!everyResult) {
                    const attachments2 = type.attachments;
                    everyResult1 = attachments2.every((filename) => require("MediaFormatTesters").isVideoFile(filename.filename));
                  }
                  let everyResult2 = !everyResult;
                  if (!everyResult) {
                    everyResult2 = !everyResult1;
                  }
                  if (everyResult2) {
                    const attachments3 = type.attachments;
                    everyResult2 = attachments3.every((filename) => require("MediaFormatTesters").isAudioFile(filename.filename));
                  }
                  if (everyResult) {
                    const obj8 = { type: "text", text: null, trailingIcon: "image" };
                    const intl10 = tmp4(1119).intl;
                    const obj9 = { count: type.attachments.length };
                    obj8.text = intl10.formatToPlainString(tmp4(1119).t.h4pFfU, obj9);
                    let obj14 = obj8;
                  } else if (everyResult1) {
                    const obj10 = { type: "text", text: null, trailingIcon: "video" };
                    const intl9 = tmp4(1119).intl;
                    const obj11 = { count: type.attachments.length };
                    obj10.text = intl9.formatToPlainString(tmp4(1119).t.SJ6pPX, obj11);
                    obj14 = obj10;
                  } else if (everyResult2) {
                    const obj12 = { type: "text", text: null, trailingIcon: "audio" };
                    const intl8 = tmp4(1119).intl;
                    const obj13 = { count: type.attachments.length };
                    obj12.text = intl8.formatToPlainString(tmp4(1119).t.fnO3hK, obj13);
                    obj14 = obj12;
                  } else {
                    obj14 = { type: "text", text: null, trailingIcon: "attachment" };
                    const intl7 = tmp4(1119).intl;
                    const obj15 = { count: type.attachments.length };
                    obj14.text = intl7.formatToPlainString(tmp4(1119).t["89ihS8"], obj15);
                  }
                  tmp10 = obj14;
                } else if (type.embeds.length > 0) {
                  const embeds = type.embeds;
                  const everyResult3 = embeds.every((url) => {
                    let isImageUrlResult = null != url.url;
                    if (isImageUrlResult) {
                      isImageUrlResult = require("MediaFormatTesters").isImageUrl(url.url);
                      const obj = require("MediaFormatTesters");
                    }
                    return isImageUrlResult;
                  });
                  let everyResult4 = !everyResult3;
                  if (!everyResult3) {
                    const embeds2 = type.embeds;
                    everyResult4 = embeds2.every((url) => {
                      let isVideoUrlResult = null != url.url;
                      if (isVideoUrlResult) {
                        isVideoUrlResult = require("MediaFormatTesters").isVideoUrl(url.url);
                        const obj = require("MediaFormatTesters");
                      }
                      return isVideoUrlResult;
                    });
                  }
                  let everyResult5 = !everyResult3;
                  if (!everyResult3) {
                    everyResult5 = !everyResult4;
                  }
                  if (everyResult5) {
                    const embeds3 = type.embeds;
                    everyResult5 = embeds3.every((url) => {
                      let isAudioFileResult = null != url.url;
                      if (isAudioFileResult) {
                        isAudioFileResult = require("MediaFormatTesters").isAudioFile(url.url);
                        const obj = require("MediaFormatTesters");
                      }
                      return isAudioFileResult;
                    });
                  }
                  if (everyResult3) {
                    const obj16 = { type: "text", text: null, trailingIcon: "image" };
                    const intl6 = tmp4(1119).intl;
                    const obj17 = { count: type.embeds.length };
                    obj16.text = intl6.formatToPlainString(tmp4(1119).t.h4pFfU, obj17);
                    let obj24 = obj16;
                  } else if (everyResult4) {
                    const obj18 = { type: "text", text: null, trailingIcon: "video" };
                    const intl5 = tmp4(1119).intl;
                    const obj19 = { count: type.embeds.length };
                    obj18.text = intl5.formatToPlainString(tmp4(1119).t.SJ6pPX, obj19);
                    obj24 = obj18;
                  } else if (everyResult5) {
                    const obj20 = { type: "text", text: null, trailingIcon: "audio" };
                    const intl4 = tmp4(1119).intl;
                    const obj21 = { count: type.embeds.length };
                    obj20.text = intl4.formatToPlainString(tmp4(1119).t.fnO3hK, obj21);
                    obj24 = obj20;
                  } else {
                    if (type.embeds.length > 0) {
                      if (null != type.embeds[0].rawTitle) {
                        const obj22 = { type: "markup", markup: type.embeds[0].rawTitle };
                        obj24 = obj22;
                      }
                    }
                    if (type.embeds.length > 0) {
                      if (null != type.embeds[0].rawDescription) {
                        const obj23 = { type: "markup", markup: type.embeds[0].rawDescription };
                        obj24 = obj23;
                      }
                    }
                    obj24 = { type: "text", text: null, trailingIcon: "link" };
                    const intl3 = tmp4(1119).intl;
                    const obj25 = { count: type.embeds.length };
                    obj24.text = intl3.formatToPlainString(tmp4(1119).t["9XuYjs"], obj25);
                  }
                  tmp10 = obj24;
                } else if (type.stickerItems.length > 0) {
                  const obj26 = { type: "text", text: type.stickerItems[0].name, trailingIcon: "sticker" };
                  tmp10 = obj26;
                } else if (type.isPoll()) {
                  const intl2 = tmp4(1119).intl;
                  const poll = type.poll;
                  let text;
                  if (poll != null) {
                    text = poll.question.text;
                  }
                  const obj27 = { type: "text", text: null };
                  const obj28 = { question: text };
                  obj27.text = intl2.formatToPlainString(tmp4(1119).t.ImizdM, obj28);
                  tmp10 = obj27;
                } else if (isForwardMessageDefault(type)) {
                  let obj = { type: "text", text: null };
                  const intl = tmp4(1119).intl;
                  obj.text = intl.string(tmp4(1119).t["9ddYKt"]);
                  tmp10 = obj;
                }
              }
              ({ authorNick, otherUser, otherUserNick, isCallActive, currentUserId } = isBlocked);
              if (type.type === tmp4(1094).MessageTypes.RECIPIENT_ADD) {
                if (null != otherUserNick) {
                  const obj29 = { type: "text", text: null };
                  const intl27 = tmp4(1119).intl;
                  const obj30 = { username: authorNick, usernameHook: tmp4(12).identity, otherUsername: otherUserNick, otherUsernameHook: tmp4(12).identity };
                  obj29.text = intl27.formatToPlainString(tmp4(1119).t.MMN2Jq, obj30);
                  let tmp21 = obj29;
                }
                let tmp29;
                if (null != tmp21) {
                  tmp29 = tmp21;
                }
                return tmp29;
              }
              if (type.type === tmp4(1094).MessageTypes.RECIPIENT_REMOVE) {
                if (null != otherUserNick) {
                  let id;
                  if (otherUser != null) {
                    id = otherUser.id;
                  }
                  if (type.author.id === id) {
                    const intl26 = tmp4(1119).intl;
                    const obj31 = { username: authorNick, usernameHook: tmp4(12).identity };
                    let formatToPlainStringResult = intl26.formatToPlainString(tmp4(1119).t["5v2xa8"], obj31);
                  } else {
                    const intl25 = tmp4(1119).intl;
                    const obj32 = { username: authorNick, usernameHook: tmp4(12).identity, otherUsername: otherUserNick, otherUsernameHook: tmp4(12).identity };
                    formatToPlainStringResult = intl25.formatToPlainString(tmp4(1119).t.L2FyVq, obj32);
                  }
                  const obj33 = { type: "text", text: formatToPlainStringResult };
                  tmp21 = obj33;
                }
              }
              if (type.type === tmp4(1094).MessageTypes.CALL) {
                if (isCallActive) {
                  const intl24 = tmp4(1119).intl;
                  let stringResult = intl24.string(tmp4(1119).t["NGg/fm"]);
                } else {
                  if (null != type.call) {
                    const participants = type.call.participants;
                    if (!participants.includes(currentUserId)) {
                      const intl22 = tmp4(1119).intl;
                      stringResult = intl22.string(tmp4(1119).t["2CnhoI"]);
                    }
                  }
                  const intl23 = tmp4(1119).intl;
                  stringResult = intl23.string(tmp4(1119).t.v05Xd6);
                }
                const obj34 = { type: "text", text: stringResult, color: null, trailingIcon: null };
                let str2;
                if (isCallActive) {
                  str2 = "text-feedback-positive";
                }
                obj34.color = str2;
                let str3 = "call-ended";
                if (isCallActive) {
                  str3 = "call-active";
                }
                obj34.trailingIcon = str3;
                tmp21 = obj34;
              } else if (type.type === tmp4(1094).MessageTypes.CHANNEL_NAME_CHANGE) {
                const obj35 = { type: "text", text: null };
                const intl21 = tmp4(1119).intl;
                const obj36 = { username: authorNick, usernameHook: tmp4(12).identity, channelName: type.content };
                obj35.text = intl21.formatToPlainString(tmp4(1119).t.oItgEw, obj36);
                tmp21 = obj35;
              } else if (type.type === tmp4(1094).MessageTypes.CHANNEL_ICON_CHANGE) {
                const obj37 = { type: "text", text: null };
                const intl20 = tmp4(1119).intl;
                const obj38 = { username: authorNick, usernameHook: tmp4(12).identity };
                obj37.text = intl20.formatToPlainString(tmp4(1119).t.OEdU6X, obj38);
                tmp21 = obj37;
              } else if (type.type === tmp4(1094).MessageTypes.CHANNEL_PINNED_MESSAGE) {
                const obj40 = { type: "text", text: null };
                const intl19 = tmp4(1119).intl;
                const obj41 = { username: authorNick, usernameHook: tmp4(12).identity };
                obj40.text = intl19.formatToPlainString(tmp4(1119).t.vfkjqx, obj41);
                tmp21 = obj40;
              } else if (type.type === tmp4(1094).MessageTypes.USER_JOIN) {
                const obj42 = { type: "text", text: null };
                const intl18 = tmp4(1119).intl;
                const obj43 = { username: authorNick, usernameHook: null };
                const systemMessageUserJoin = SystemMessageUtilsDefault.getSystemMessageUserJoin(type.id);
                obj43.usernameHook = tmp4(12).identity;
                obj42.text = intl18.formatToPlainString(systemMessageUserJoin, obj43);
                tmp21 = obj42;
              } else if (type.type === tmp4(1094).MessageTypes.THREAD_CREATED) {
                const obj44 = { type: "text", text: null };
                const intl17 = tmp4(1119).intl;
                const obj45 = { actorName: authorNick, actorHook: tmp4(12).identity, threadName: type.content, threadOnClick: tmp4(12).identity };
                obj44.text = intl17.formatToPlainString(tmp4(1119).t.SGaUAU, obj45);
                tmp21 = obj44;
              } else if (type.type === tmp4(1094).MessageTypes.PREMIUM_REFERRAL) {
                const obj46 = { type: "text", text: null };
                const intl16 = tmp4(1119).intl;
                const obj47 = { username: authorNick };
                obj46.text = intl16.formatToPlainString(tmp4(1119).t.lieTqU, obj47);
                tmp21 = obj46;
              } else if (type.type === tmp4(1094).MessageTypes.STAGE_START) {
                const obj48 = { type: "text", text: null };
                const intl15 = tmp4(1119).intl;
                const obj49 = { username: authorNick, usernameOnClick: tmp4(12).identity, topic: type.content };
                obj48.text = intl15.formatToPlainString(tmp4(1119).t.aZtRW8, obj49);
                tmp21 = obj48;
              } else if (type.type === tmp4(1094).MessageTypes.STAGE_END) {
                const obj50 = { type: "text", text: null };
                const intl14 = tmp4(1119).intl;
                const obj51 = { username: authorNick, usernameOnClick: tmp4(12).identity, topic: type.content };
                obj50.text = intl14.formatToPlainString(tmp4(1119).t.vMJhvG, obj51);
                tmp21 = obj50;
              } else if (type.type === tmp4(1094).MessageTypes.STAGE_SPEAKER) {
                const obj52 = { type: "text", text: null };
                const intl13 = tmp4(1119).intl;
                const obj53 = { username: authorNick, usernameOnClick: tmp4(12).identity };
                obj52.text = intl13.formatToPlainString(tmp4(1119).t.V4uCm4, obj53);
                tmp21 = obj52;
              } else if (type.type === tmp4(1094).MessageTypes.STAGE_TOPIC) {
                const obj54 = { type: "text", text: null };
                const intl12 = tmp4(1119).intl;
                const obj55 = { username: authorNick, usernameOnClick: tmp4(12).identity, topic: type.content };
                obj54.text = intl12.formatToPlainString(tmp4(1119).t.ro3RM0, obj55);
                tmp21 = obj54;
              } else if (type.type === tmp4(1094).MessageTypes.VOICE_SESSION) {
                const obj56 = { type: "text", text: tmp4(8334).getVoiceSessionMessageContent(type) };
                tmp21 = obj56;
                const tmp4Result = tmp4(8334);
              }
            }
          }
        }
      }
    }
    flag = true;
  }
}
const MessageFlags = fn(1078).MessageFlags;
const ReactCompilerGating = fn(558);
function isMessageContentPreviewable(message) {
  const type = message.type;
  if (MessageTypes.MessageTypes.DEFAULT !== type) {
    if (tmp(1094).MessageTypes.CHANGELOG !== type) {
      if (tmp(1094).MessageTypes.REPLY !== type) {
        if (tmp(1094).MessageTypes.CHAT_INPUT_COMMAND !== type) {
          if (tmp(1094).MessageTypes.CONTEXT_MENU_COMMAND !== type) {
            if (tmp(1094).MessageTypes.POLL_RESULT !== type) {
              if (tmp(1094).MessageTypes.AUTO_MODERATION_ACTION !== type) {
                return false;
              }
            }
          }
        }
      }
    }
  }
  return true;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_previews/useFormattedMessagePreview.tsx");

export { isMessageContentPreviewable };
export const useFormattedMessagePreview = ReactCompilerGating.isReactCompilerEnabled() ? ((author, id) => {
  const _require = author;
  const cResult = require("c").c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== author.author.id) {
    const fn = function c() {
      return { isBlocked: RelationshipStore.isBlocked(author.author.id), isIgnored: RelationshipStore.isIgnored(author.author.id) };
    };
    const items1 = [author.author.id];
    cResult[1] = author.author.id;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(first, tmp6, tmp7);
  ({ isBlocked, isIgnored } = stateFromStoresObject);
  const tmpResult = require("initialize");
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [AuthenticationStore];
    const fn2 = function h() {
      return id.getId();
    };
    cResult[4] = items2;
    cResult[5] = fn2;
    let tmp12 = fn2;
    let tmp11 = items2;
  } else {
    tmp11 = cResult[4];
    tmp12 = cResult[5];
  }
  const tmp10 = useIsCallActiveDefault(id.id, author.id);
  const stateFromStores = require("initialize").useStateFromStores(tmp11, tmp12);
  const nick = useMessageAuthorDefault(author).nick;
  let stringResult = nick;
  if (author.type !== require("MessageTypes").MessageTypes.USER_JOIN) {
    stringResult = nick;
    if (author.author.id === stateFromStores) {
      const intl = tmp(1119).intl;
      stringResult = intl.string(tmp(1119).t.LuZzxn);
    }
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [UserStore];
    cResult[6] = items3;
    let tmp16 = items3;
  } else {
    tmp16 = cResult[6];
  }
  if (cResult[7] === author.mentions[0]) {
    if (cResult[8] === author.mentions.length) {
      let tmp18 = cResult[9];
    }
    const stateFromStores1 = tmp(504).useStateFromStores(tmp16, tmp18);
    const tmpResult5 = tmp(504);
    const obj2 = { message: author, channel: id, currentUserId: stateFromStores, authorNick: stringResult, otherUser: stateFromStores1, otherUserNick: tmp(4990).useNullableUserAuthor(stateFromStores1, id).nick, isBlocked, isIgnored, isCallActive: tmp10 };
    return formatMessagePreview(author, obj2);
  }
  class I {
    constructor() {
      user = undefined;
      if (closure_0.mentions.length > 0) {
        tmp3 = closure_5;
        user = closure_5.getUser(tmp.mentions[0]);
      }
      return user;
    }
  }
  cResult[7] = author.mentions[0];
  cResult[8] = author.mentions.length;
  cResult[9] = I;
  tmp18 = I;
}) : ((author, channel) => {
  const _require = author;
  const items = [RelationshipStore];
  const items1 = [author.author.id];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ({ isBlocked: RelationshipStore.isBlocked(author.author.id), isIgnored: RelationshipStore.isIgnored(author.author.id) }), items1);
  ({ isBlocked, isIgnored } = stateFromStoresObject);
  const obj = require("initialize");
  const tmp4 = useIsCallActiveDefault(channel.id, author.id);
  const items2 = [AuthenticationStore];
  const stateFromStores = require("initialize").useStateFromStores(items2, () => id.getId());
  const nick = useMessageAuthorDefault(author).nick;
  let stringResult = nick;
  if (author.type !== require("MessageTypes").MessageTypes.USER_JOIN) {
    stringResult = nick;
    if (author.author.id === stateFromStores) {
      const intl = tmp(1119).intl;
      stringResult = intl.string(tmp(1119).t.LuZzxn);
    }
  }
  const obj2 = require("initialize");
  const items3 = [UserStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items3, () => {
    let user;
    if (author.mentions.length > 0) {
      user = UserStore.getUser(tmp.mentions[0]);
    }
    return user;
  });
  const tmpResult = require("initialize");
  const tmpResult2 = require("useMessageAuthor");
  return formatMessagePreview(author, { message: author, channel, currentUserId: stateFromStores, authorNick: stringResult, otherUser: stateFromStores1, otherUserNick: require("useMessageAuthor").useNullableUserAuthor(stateFromStores1, channel).nick, isBlocked, isIgnored, isCallActive: tmp4 });
});
export { formatMessagePreview };
