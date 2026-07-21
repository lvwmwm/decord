// Module ID: 10221
// Function ID: 78979
// Name: isMessageContentPreviewable
// Dependencies: []
// Exports: useFormattedMessagePreview

// Module 10221 (isMessageContentPreviewable)
function isMessageContentPreviewable(messageRecord) {
  const type = messageRecord.type;
  if (arg1(dependencyMap[4]).MessageTypes.DEFAULT !== type) {
    if (arg1(dependencyMap[4]).MessageTypes.CHANGELOG !== type) {
      if (arg1(dependencyMap[4]).MessageTypes.REPLY !== type) {
        if (arg1(dependencyMap[4]).MessageTypes.CHAT_INPUT_COMMAND !== type) {
          if (arg1(dependencyMap[4]).MessageTypes.CONTEXT_MENU_COMMAND !== type) {
            if (arg1(dependencyMap[4]).MessageTypes.POLL_RESULT !== type) {
              if (arg1(dependencyMap[4]).MessageTypes.AUTO_MODERATION_ACTION !== type) {
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
function formatMessagePreview(type, isBlocked) {
  let authorNick;
  let isCallActive;
  let otherUser;
  let otherUserNick;
  if (isBlocked.isBlocked) {
    let obj = { type: "text" };
    const intl18 = isBlocked(dependencyMap[8]).intl;
    obj.text = intl18.string(isBlocked(dependencyMap[8]).t.XAkOo2);
    return obj;
  } else if (tmp) {
    obj = { type: "text" };
    const intl17 = isBlocked(dependencyMap[8]).intl;
    obj.text = intl17.string(isBlocked(dependencyMap[8]).t.G7p6v/);
    return obj;
  } else {
    if (isMessageContentPreviewable(type)) {
      const tmp4 = function formatMessageContentPreview(embeds) {
        if (1 === embeds.embeds.length) {
          if (embeds.embeds[0].url === embeds.content) {
            if (null != embeds.embeds[0].rawTitle) {
              let obj = { type: "markup", markup: embeds.embeds[0].rawTitle };
              return obj;
            }
          }
        }
        if (null != embeds.content) {
          if ("" !== embeds.content) {
            obj = { type: "message", message: embeds };
            return obj;
          }
        }
        if (embeds.hasFlag(constants.IS_VOICE_MESSAGE)) {
          const obj1 = { type: "text" };
          const intl11 = callback(closure_2[8]).intl;
          obj1.text = intl11.string(callback(closure_2[8]).t.slFYgi);
          return obj1;
        } else if (embeds.attachments.length > 0) {
          const attachments = embeds.attachments;
          const everyResult = attachments.every((filename) => callback(closure_2[9]).isImageFile(filename.filename));
          let everyResult1 = !everyResult;
          if (everyResult1) {
            const attachments2 = embeds.attachments;
            everyResult1 = attachments2.every((filename) => callback(closure_2[9]).isVideoFile(filename.filename));
          }
          let everyResult2 = !everyResult && !everyResult1;
          if (everyResult2) {
            const attachments3 = embeds.attachments;
            everyResult2 = attachments3.every((filename) => callback(closure_2[9]).isAudioFile(filename.filename));
          }
          if (everyResult) {
            const obj2 = { "Bool(true)": 24, "Bool(true)": 24, "Bool(true)": null };
            const intl10 = callback(closure_2[8]).intl;
            const obj3 = { count: embeds.attachments.length };
            obj2.text = intl10.formatToPlainString(callback(closure_2[8]).t.h4pFfU, obj3);
            let obj8 = obj2;
          } else if (everyResult1) {
            const obj4 = {};
            const intl9 = callback(closure_2[8]).intl;
            const obj5 = { count: embeds.attachments.length };
            obj4.text = intl9.formatToPlainString(callback(closure_2[8]).t.SJ6pPX, obj5);
            obj8 = obj4;
          } else if (everyResult2) {
            const obj6 = {};
            const intl8 = callback(closure_2[8]).intl;
            const obj7 = { count: embeds.attachments.length };
            obj6.text = intl8.formatToPlainString(callback(closure_2[8]).t.fnO3hK, obj7);
            obj8 = obj6;
          } else {
            obj8 = { "Bool(true)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020045222830224, "Bool(true)": 83748098031734900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(true)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002482846645991894 };
            const intl7 = callback(closure_2[8]).intl;
            const obj9 = { count: embeds.attachments.length };
            obj8.text = intl7.formatToPlainString(callback(closure_2[8]).t.89ihS8, obj9);
          }
          return obj8;
        } else if (embeds.embeds.length > 0) {
          embeds = embeds.embeds;
          const everyResult3 = embeds.every((url) => {
            let isImageUrlResult = null != url.url;
            if (isImageUrlResult) {
              isImageUrlResult = callback(closure_2[9]).isImageUrl(url.url);
              const obj = callback(closure_2[9]);
            }
            return isImageUrlResult;
          });
          let everyResult4 = !everyResult3;
          if (everyResult4) {
            const embeds2 = embeds.embeds;
            everyResult4 = embeds2.every((url) => {
              let isVideoUrlResult = null != url.url;
              if (isVideoUrlResult) {
                isVideoUrlResult = callback(closure_2[9]).isVideoUrl(url.url);
                const obj = callback(closure_2[9]);
              }
              return isVideoUrlResult;
            });
          }
          let everyResult5 = !everyResult3 && !everyResult4;
          if (everyResult5) {
            const embeds3 = embeds.embeds;
            everyResult5 = embeds3.every((url) => {
              let isAudioFileResult = null != url.url;
              if (isAudioFileResult) {
                isAudioFileResult = callback(closure_2[9]).isAudioFile(url.url);
                const obj = callback(closure_2[9]);
              }
              return isAudioFileResult;
            });
          }
          if (everyResult3) {
            const obj10 = { "Bool(true)": 24, "Bool(true)": 24, "Bool(true)": null };
            const intl6 = callback(closure_2[8]).intl;
            const obj11 = { count: embeds.embeds.length };
            obj10.text = intl6.formatToPlainString(callback(closure_2[8]).t.h4pFfU, obj11);
            let obj18 = obj10;
          } else if (everyResult4) {
            const obj12 = {};
            const intl5 = callback(closure_2[8]).intl;
            const obj13 = { count: embeds.embeds.length };
            obj12.text = intl5.formatToPlainString(callback(closure_2[8]).t.SJ6pPX, obj13);
            obj18 = obj12;
          } else if (everyResult5) {
            const obj14 = {};
            const intl4 = callback(closure_2[8]).intl;
            const obj15 = { count: embeds.embeds.length };
            obj14.text = intl4.formatToPlainString(callback(closure_2[8]).t.fnO3hK, obj15);
            obj18 = obj14;
          } else {
            if (embeds.embeds.length > 0) {
              if (null != embeds.embeds[0].rawTitle) {
                const obj16 = { type: "markup", markup: embeds.embeds[0].rawTitle };
                obj18 = obj16;
              }
            }
            if (embeds.embeds.length > 0) {
              if (null != embeds.embeds[0].rawDescription) {
                const obj17 = { type: "markup", markup: embeds.embeds[0].rawDescription };
                obj18 = obj17;
              }
            }
            obj18 = { "Bool(true)": "redesign/message-preview/medium", "Bool(true)": "text-link", "Bool(true)": "redesign/message-preview/medium" };
            const intl3 = callback(closure_2[8]).intl;
            const obj19 = { count: embeds.embeds.length };
            obj18.text = intl3.formatToPlainString(callback(closure_2[8]).t.9XuYjs, obj19);
          }
          return obj18;
        } else if (embeds.stickerItems.length > 0) {
          const obj20 = { "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, text: embeds.stickerItems[0].name };
          return obj20;
        } else if (embeds.isPoll()) {
          const obj21 = { type: "text" };
          let text;
          const intl2 = callback(closure_2[8]).intl;
          const obj22 = {};
          const poll = embeds.poll;
          if (null != poll) {
            text = poll.question.text;
          }
          obj22.question = text;
          obj21.text = intl2.formatToPlainString(callback(closure_2[8]).t.ImizdM, obj22);
          return obj21;
        } else if (callback2(closure_2[10])(embeds)) {
          obj = { type: "text" };
          const intl = callback(closure_2[8]).intl;
          obj.text = intl.string(callback(closure_2[8]).t.9ddYKt);
          return obj;
        }
      }(type);
      if (null != tmp4) {
        const obj1 = {};
        const merged = Object.assign(tmp4);
        obj1["authorLabel"] = tmp2;
        return obj1;
      }
    }
    ({ authorNick, otherUser, otherUserNick, isCallActive } = isBlocked);
    if (type.type === isBlocked(dependencyMap[4]).MessageTypes.RECIPIENT_ADD) {
      if (null != otherUserNick) {
        const obj2 = { type: "text" };
        const intl16 = isBlocked(dependencyMap[8]).intl;
        const obj3 = { username: authorNick, usernameHook: isBlocked(dependencyMap[11]).identity, otherUsername: otherUserNick, otherUsernameHook: isBlocked(dependencyMap[11]).identity };
        obj2.text = intl16.formatToPlainString(isBlocked(dependencyMap[8]).t.MMN2Jq, obj3);
        let tmp16 = obj2;
      }
      let tmp56;
      if (null != tmp16) {
        tmp56 = tmp16;
      }
      return tmp56;
    }
    if (type.type === isBlocked(dependencyMap[4]).MessageTypes.RECIPIENT_REMOVE) {
      if (null != otherUserNick) {
        const obj4 = { type: "text" };
        let id;
        if (null != otherUser) {
          id = otherUser.id;
        }
        if (type.author.id === id) {
          const intl15 = isBlocked(dependencyMap[8]).intl;
          const obj5 = { username: authorNick, usernameHook: isBlocked(dependencyMap[11]).identity };
          let formatToPlainStringResult = intl15.formatToPlainString(isBlocked(dependencyMap[8]).t.5v2xa8, obj5);
        } else {
          const intl14 = isBlocked(dependencyMap[8]).intl;
          const obj6 = { username: authorNick, usernameHook: isBlocked(dependencyMap[11]).identity, otherUsername: otherUserNick, otherUsernameHook: isBlocked(dependencyMap[11]).identity };
          formatToPlainStringResult = intl14.formatToPlainString(isBlocked(dependencyMap[8]).t.L2FyVq, obj6);
        }
        obj4.text = formatToPlainStringResult;
        tmp16 = obj4;
      }
    }
    if (type.type === isBlocked(dependencyMap[4]).MessageTypes.CALL) {
      const obj7 = { type: "text" };
      if (isCallActive) {
        const intl13 = isBlocked(dependencyMap[8]).intl;
        let stringResult = intl13.string(isBlocked(dependencyMap[8]).t.NGg/fm);
      } else {
        if (null != type.call) {
          const participants = type.call.participants;
          if (!participants.includes(isBlocked.currentUserId)) {
            const intl11 = isBlocked(dependencyMap[8]).intl;
            stringResult = intl11.string(isBlocked(dependencyMap[8]).t.2CnhoI);
          }
        }
        const intl12 = isBlocked(dependencyMap[8]).intl;
        stringResult = intl12.string(isBlocked(dependencyMap[8]).t.v05Xd6);
      }
      obj7.text = stringResult;
      let str12;
      if (isCallActive) {
        str12 = "text-feedback-positive";
      }
      obj7.color = str12;
      let str13 = "call-ended";
      if (isCallActive) {
        str13 = "call-active";
      }
      obj7.trailingIcon = str13;
      tmp16 = obj7;
    } else if (type.type === isBlocked(dependencyMap[4]).MessageTypes.CHANNEL_NAME_CHANGE) {
      const obj8 = { type: "text" };
      const intl10 = isBlocked(dependencyMap[8]).intl;
      const obj9 = { username: authorNick, usernameHook: isBlocked(dependencyMap[11]).identity, channelName: type.content };
      obj8.text = intl10.formatToPlainString(isBlocked(dependencyMap[8]).t.oItgEw, obj9);
      tmp16 = obj8;
    } else if (type.type === isBlocked(dependencyMap[4]).MessageTypes.CHANNEL_ICON_CHANGE) {
      const obj10 = { type: "text" };
      const intl9 = isBlocked(dependencyMap[8]).intl;
      const obj11 = { username: authorNick, usernameHook: isBlocked(dependencyMap[11]).identity };
      obj10.text = intl9.formatToPlainString(isBlocked(dependencyMap[8]).t.OEdU6X, obj11);
      tmp16 = obj10;
    } else if (type.type === isBlocked(dependencyMap[4]).MessageTypes.CHANNEL_PINNED_MESSAGE) {
      const obj12 = { type: "text" };
      const intl8 = isBlocked(dependencyMap[8]).intl;
      let obj13 = { username: authorNick, usernameHook: isBlocked(dependencyMap[11]).identity };
      obj12.text = intl8.formatToPlainString(isBlocked(dependencyMap[8]).t.vfkjqx, obj13);
      tmp16 = obj12;
    } else if (type.type === isBlocked(dependencyMap[4]).MessageTypes.USER_JOIN) {
      const obj14 = { type: "text" };
      const intl7 = isBlocked(dependencyMap[8]).intl;
      obj13 = importDefault(dependencyMap[12]);
      const obj15 = { username: authorNick };
      const systemMessageUserJoin = obj13.getSystemMessageUserJoin(type.id);
      obj15.usernameHook = isBlocked(dependencyMap[11]).identity;
      obj14.text = intl7.formatToPlainString(systemMessageUserJoin, obj15);
      tmp16 = obj14;
    } else if (type.type === isBlocked(dependencyMap[4]).MessageTypes.THREAD_CREATED) {
      const obj16 = { type: "text" };
      const intl6 = isBlocked(dependencyMap[8]).intl;
      const obj17 = { actorName: authorNick, actorHook: isBlocked(dependencyMap[11]).identity, threadName: type.content, threadOnClick: isBlocked(dependencyMap[11]).identity };
      obj16.text = intl6.formatToPlainString(isBlocked(dependencyMap[8]).t.SGaUAU, obj17);
      tmp16 = obj16;
    } else if (type.type === isBlocked(dependencyMap[4]).MessageTypes.PREMIUM_REFERRAL) {
      const obj18 = { type: "text" };
      const intl5 = isBlocked(dependencyMap[8]).intl;
      const obj19 = { username: authorNick };
      obj18.text = intl5.formatToPlainString(isBlocked(dependencyMap[8]).t.lieTqU, obj19);
      tmp16 = obj18;
    } else if (type.type === isBlocked(dependencyMap[4]).MessageTypes.STAGE_START) {
      const obj20 = { type: "text" };
      const intl4 = isBlocked(dependencyMap[8]).intl;
      const obj21 = { username: authorNick, usernameOnClick: isBlocked(dependencyMap[11]).identity, topic: type.content };
      obj20.text = intl4.formatToPlainString(isBlocked(dependencyMap[8]).t.aZtRW8, obj21);
      tmp16 = obj20;
    } else if (type.type === isBlocked(dependencyMap[4]).MessageTypes.STAGE_END) {
      const obj22 = { type: "text" };
      const intl3 = isBlocked(dependencyMap[8]).intl;
      const obj23 = { username: authorNick, usernameOnClick: isBlocked(dependencyMap[11]).identity, topic: type.content };
      obj22.text = intl3.formatToPlainString(isBlocked(dependencyMap[8]).t.vMJhvG, obj23);
      tmp16 = obj22;
    } else if (type.type === isBlocked(dependencyMap[4]).MessageTypes.STAGE_SPEAKER) {
      const obj24 = { type: "text" };
      const intl2 = isBlocked(dependencyMap[8]).intl;
      const obj25 = { username: authorNick, usernameOnClick: isBlocked(dependencyMap[11]).identity };
      obj24.text = intl2.formatToPlainString(isBlocked(dependencyMap[8]).t.V4uCm4, obj25);
      tmp16 = obj24;
    } else if (type.type === isBlocked(dependencyMap[4]).MessageTypes.STAGE_TOPIC) {
      obj = { type: "text" };
      const intl = isBlocked(dependencyMap[8]).intl;
      const obj26 = { username: authorNick, usernameOnClick: isBlocked(dependencyMap[11]).identity, topic: type.content };
      obj.text = intl.formatToPlainString(isBlocked(dependencyMap[8]).t.ro3RM0, obj26);
      tmp16 = obj;
    } else if (type.type === isBlocked(dependencyMap[4]).MessageTypes.VOICE_SESSION) {
      const obj27 = { type: "text", text: isBlocked(dependencyMap[13]).getVoiceSessionMessageContent(type) };
      tmp16 = obj27;
      const obj32 = isBlocked(dependencyMap[13]);
    }
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const MessageFlags = arg1(dependencyMap[3]).MessageFlags;
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/message_previews/useFormattedMessagePreview.tsx");

export { isMessageContentPreviewable };
export const useFormattedMessagePreview = function useFormattedMessagePreview(message, channel) {
  let isBlocked;
  let isIgnored;
  channel = message;
  let obj = channel(dependencyMap[5]);
  const items = [closure_4];
  const items1 = [message.author.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ isBlocked: closure_4.isBlocked(arg0.author.id), isIgnored: closure_4.isIgnored(arg0.author.id) }), items1);
  ({ isBlocked, isIgnored } = stateFromStoresObject);
  const tmp2 = importDefault(dependencyMap[6])(channel.id, message.id);
  const items2 = [closure_3];
  const stateFromStores = channel(dependencyMap[5]).useStateFromStores(items2, () => id.getId());
  const nick = importDefault(dependencyMap[7])(message).nick;
  let stringResult = nick;
  if (message.type !== channel(dependencyMap[4]).MessageTypes.USER_JOIN) {
    stringResult = nick;
    if (message.author.id === stateFromStores) {
      const intl = channel(dependencyMap[8]).intl;
      stringResult = intl.string(channel(dependencyMap[8]).t.LuZzxn);
    }
  }
  const obj2 = channel(dependencyMap[5]);
  const items3 = [closure_5];
  const stateFromStores1 = channel(dependencyMap[5]).useStateFromStores(items3, () => {
    let user;
    if (arg0.mentions.length > 0) {
      user = user.getUser(arg0.mentions[0]);
    }
    return user;
  });
  const obj3 = channel(dependencyMap[5]);
  obj = { message, channel, currentUserId: stateFromStores, authorNick: stringResult, otherUser: stateFromStores1, otherUserNick: channel(dependencyMap[7]).useNullableUserAuthor(stateFromStores1, channel).nick, isBlocked, isIgnored, isCallActive: tmp2 };
  return formatMessagePreview(message, obj);
};
export { formatMessagePreview };
