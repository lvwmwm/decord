// Module ID: 7924
// Function ID: 63277
// Name: getIsPrivate
// Dependencies: []
// Exports: createThread, useCreateForumPostCommon, useCreateThreadCommon, usePrivateThreadMode

// Module 7924 (getIsPrivate)
function getIsPrivate(threadSettingsDraft, privateThreadMode) {
  let tmp = privateThreadMode === obj.PrivateOnly;
  if (!tmp) {
    const isPrivate = threadSettingsDraft.isPrivate;
    tmp = null != isPrivate && isPrivate;
    const tmp4 = null != isPrivate && isPrivate;
  }
  return tmp;
}
function trimToLength(arg0, length2) {
  let text = arg0;
  if (arg0.length > length2) {
    text = `${arg0.substring(0, length2)}...`;
  }
  return text;
}
function getDefaultThreadName(stateFromStores, parentMessageId) {
  let message = null;
  if (null != parentMessageId) {
    message = message.getMessage(stateFromStores.id, parentMessageId);
  }
  let contentMessage;
  if (null != message) {
    contentMessage = message.getContentMessage();
  }
  let rawTitle;
  if (null != contentMessage) {
    const embeds = contentMessage.embeds;
    if (null != embeds) {
      const first = embeds[0];
      if (null != first) {
        rawTitle = first.rawTitle;
      }
    }
  }
  let str = "";
  if (null != rawTitle) {
    str = rawTitle;
  }
  let text;
  if (null != message) {
    const poll = message.poll;
    if (null != poll) {
      const question = poll.question;
      if (null != question) {
        text = question.text;
      }
    }
  }
  let str2 = "";
  if (null != text) {
    str2 = text;
  }
  if ("" !== str) {
    return trimToLength(str, 40);
  } else if ("" !== str2) {
    return trimToLength(str2, 80);
  } else {
    let content;
    if (null != contentMessage) {
      content = contentMessage.content;
    }
    let str3 = "";
    if (null != content) {
      str3 = content;
    }
    const obj = importDefault(dependencyMap[13]);
    const str4 = importDefault(dependencyMap[13]).unparse(str3, stateFromStores.id, true);
    const tmp10 = importDefault(dependencyMap[14]);
    let str7 = importDefault(dependencyMap[14])(str4.split("\n")[0], true).replace(/^[ #-]+/, "");
    const items = [];
    const match = str7.match(/(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,./])+/);
    while (null != match) {
      if (null == match.index) {
        break;
      } else {
        let arr = items.push(str7.substring(0, match.index));
        arr = items.push(match[0]);
        str7 = str7.substring(match.index + match[0].length);
        // continue
      }
    }
    items.push(str7);
    let first1 = items[0];
    let num4 = 1;
    let tmp17 = first1;
    if (1 < items.length) {
      const sum = first1 + items[num4];
      tmp17 = first1;
      while (sum.length <= 40) {
        num4 = num4 + 1;
        first1 = sum;
        tmp17 = sum;
        if (num4 >= items.length) {
          break;
        }
      }
    }
    return trimToLength(tmp17, 40);
  }
}
function createThread_(channel, arg1, arg2, arg3) {
  return _createThread_(...arguments);
}
async function _createThread_(isForumLikeChannel, arg1, arg2, arg3, arg4) {
  let tmp3;
  const isForumLikeChannelResult = isForumLikeChannel.isForumLikeChannel();
  tmp3 = yield arg3();
  if (null == tmp3.body) {
    let obj = callback(closure_2[28]);
    obj = {};
    const intl = tmp3(closure_2[15]).intl;
    obj.title = intl.string(tmp3(closure_2[15]).t.j2d6Km);
    const intl2 = tmp3(closure_2[15]).intl;
    obj.body = intl2.string(tmp3(closure_2[15]).t.fEptJP);
    obj.show(obj);
  } else {
    obj = { type: "SLOWMODE_RESET_COOLDOWN", slowmodeType: CreateThread.CreateThread, channelId: isForumLikeChannel.id };
    callback(closure_2[29]).dispatch(obj);
    const obj5 = callback(closure_2[29]);
    const obj1 = { type: "THREAD_CREATE_LOCAL", channelId: tmp3.body.id };
    callback(closure_2[29]).dispatch(obj1);
    const AccessibilityAnnouncer = tmp3(closure_2[30]).AccessibilityAnnouncer;
    const intl3 = tmp3(closure_2[15]).intl;
    const t = tmp3(closure_2[15]).t;
    AccessibilityAnnouncer.announce(intl3.string(isForumLikeChannelResult ? t.zDAG2N : t.XkUoBb));
    const obj7 = callback(closure_2[29]);
  }
  let obj2 = callback(closure_2[27]);
  obj2 = {
    channelId: yield new Promise((arg0, arg1) => {
      if (null == arg0.body) {
        arg1();
      }
      const result = closure_8.addConditionalChangeListener(() => {
        const channel = channel.getChannel(arg0.body.id);
        const arg0 = channel;
        if (null != channel) {
          callback(closure_2[29]).wait(() => {
            channel(channel);
          });
          return false;
        }
      });
    }).id,
    limit: closure_20
  };
  yield obj2.fetchMessages(obj2);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const DraftType = arg1(dependencyMap[6]).DraftType;
let closure_11 = importDefault(dependencyMap[7]);
const SlowmodeType = arg1(dependencyMap[8]).SlowmodeType;
({ FORUM_POST_CREATION_AUTOMOD_ERRORS: closure_13, FORUM_POST_CREATION_UPLOAD_ERRORS: closure_14 } = arg1(dependencyMap[9]));
const tmp2 = arg1(dependencyMap[9]);
({ AbortCodes: closure_15, AnalyticEvents: closure_16, ChannelTypes: closure_17, Endpoints: closure_18, LoggingInviteTypes: closure_19, MAX_MESSAGES_PER_CHANNEL: closure_20, MessageFlags: closure_21 } = arg1(dependencyMap[10]));
const MessageSendLocation = arg1(dependencyMap[11]).MessageSendLocation;
const obj = { Disabled: 1, [1]: "Disabled", Enabled: 2, [2]: "Enabled", PrivateOnly: 3, [3]: "PrivateOnly" };
const tmp3 = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[34]).fileFinishedImporting("modules/threads/ThreadCreationHooks.tsx");

export const PrivateThreadMode = obj;
export const usePrivateThreadMode = function usePrivateThreadMode(parentChannel) {
  const obj = arg1(dependencyMap[12]);
  const canStartPublicThread = obj.useCanStartPublicThread(parentChannel);
  if (!obj2.useCanStartPrivateThread(parentChannel)) {
    return tmp2.Disabled;
  }
};
export { getIsPrivate };
export { getDefaultThreadName };
export const useCreateThreadCommon = function useCreateThreadCommon(parentChannel) {
  parentChannel = parentChannel.parentChannel;
  const arg1 = parentChannel;
  const parentMessageId = parentChannel.parentMessageId;
  const importDefault = parentMessageId;
  const threadSettings = parentChannel.threadSettings;
  const dependencyMap = threadSettings;
  const privateThreadMode = parentChannel.privateThreadMode;
  let closure_3 = privateThreadMode;
  const _location = parentChannel.location;
  let closure_4 = _location;
  const onThreadCreated = parentChannel.onThreadCreated;
  const React = onThreadCreated;
  const useDefaultThreadName = parentChannel.useDefaultThreadName;
  let closure_6 = useDefaultThreadName;
  let closure_7 = uploadHandler;
  const items = [parentChannel, parentMessageId, threadSettings, onThreadCreated, privateThreadMode, _location, useDefaultThreadName, parentChannel.uploadHandler];
  return React.useCallback(() => {
    let closure_0 = _location(async (arg0, arg1, arg2) => {
      let lib;
      let stringResult;
      let name;
      lib = callback2(name, closure_3);
      name = name.name;
      let str = "";
      if (null != name) {
        str = name;
      }
      stringResult = str;
      if ("" === str) {
        if (closure_6) {
          stringResult = callback3(lib, stringResult);
          if ("" === stringResult) {
            const intl = lib(name[15]).intl;
            stringResult = intl.string(lib(name[15]).t.7Xm5QI);
          }
        }
      }
      let obj = lib(name[16]);
      name = obj.getAutoArchiveDuration(lib);
      const channel = channel.getChannel(stringResult(name[17]).castMessageIdAsChannelId(stringResult));
      const tmp9 = yield closure_27(closure_0, [], undefined, () => {
        if (null != stringResult) {
          let result = closure_18.CHANNEL_MESSAGE_THREADS(lib.id, stringResult);
        } else {
          result = closure_18.CHANNEL_THREADS(lib.id);
        }
        const HTTP = lib(closure_2[18]).HTTP;
        let obj = { url: result };
        obj = { name: stringResult };
        if (lib) {
          let PUBLIC_THREAD = constants.PRIVATE_THREAD;
        } else if (lib.type === constants.GUILD_ANNOUNCEMENT) {
          PUBLIC_THREAD = constants.ANNOUNCEMENT_THREAD;
        } else {
          PUBLIC_THREAD = constants.PUBLIC_THREAD;
        }
        obj.type = PUBLIC_THREAD;
        obj.auto_archive_duration = closure_2;
        obj.location = closure_4;
        obj.body = obj;
        obj.rejectWithError = lib(closure_2[18]).rejectWithMigratedError();
        return HTTP.post(obj);
      });
      if (tmp9 !== channel) {
        const str2 = draft.getDraft(lib.id, closure_10.FirstThreadMessage);
        const trimmed = str2.trim();
        stringResult(name[19]).clearDraft(lib.id, closure_10.ThreadSettings);
        const obj11 = stringResult(name[19]);
        stringResult(name[19]).clearDraft(lib.id, closure_10.FirstThreadMessage);
        const obj12 = stringResult(name[19]);
        if (tmp10) {
          stringResult(name[19]).saveDraft(tmp9.id, str2, closure_10.ChannelMessage);
          const obj3 = stringResult(name[19]);
        }
        if (null != callback) {
          callback(tmp9);
        }
        if (null != closure_7) {
          if (null != arg2) {
            if (arg2.length > 0) {
              tmp18(tmp9, arg2, arg0, arg1);
            }
          }
        }
        if (null != arg1) {
          if (arg1.length > 0) {
            const obj7 = stringResult(name[27]);
            const id2 = tmp9.id;
            obj = { location: constants.THREAD_CREATION };
            obj7.sendStickers(id2, arg1, stringResult(name[13]).parse(tmp9, arg0), obj);
            const obj8 = stringResult(name[13]);
          }
        }
        const obj4 = stringResult(name[27]);
        const id = tmp9.id;
        const tmp10 = "" !== trimmed && trimmed !== arg0.trim();
        obj = { location: constants.THREAD_CREATION };
        obj4.sendMessage(id, stringResult(name[13]).parse(tmp9, arg0), undefined, obj);
        const obj5 = stringResult(name[13]);
      }
      const obj2 = stringResult(name[17]);
      stringResult(name[20]).clearAll(lib.id, closure_10.FirstThreadMessage);
    });
    return function() {
      return callback(...arguments);
    };
  }(), items);
};
export const createThread = function createThread(channel, arg1, PUBLIC_THREAD, autoArchiveDuration, arg4) {
  arg1 = channel;
  const importDefault = arg1;
  const dependencyMap = PUBLIC_THREAD;
  let closure_3 = autoArchiveDuration;
  let closure_4 = arg4;
  return createThread_(channel, [], undefined, () => {
    const HTTP = arg0(arg2[18]).HTTP;
    let obj = { url: closure_18.CHANNEL_THREADS(arg0.id), body: obj };
    obj = { name: arg1, type: arg2, auto_archive_duration: arg3, location: arg4, rejectWithError: arg0(arg2[18]).rejectWithMigratedError() };
    return HTTP.post(obj);
  });
};
export const useCreateForumPostCommon = function useCreateForumPostCommon(parentChannel) {
  parentChannel = parentChannel.parentChannel;
  const arg1 = parentChannel;
  const name = parentChannel.name;
  const importDefault = name;
  const appliedTags = parentChannel.appliedTags;
  const dependencyMap = appliedTags;
  const analyticsLocations = parentChannel.analyticsLocations;
  let closure_3 = analyticsLocations;
  const onThreadCreated = parentChannel.onThreadCreated;
  let closure_4 = onThreadCreated;
  const upload = parentChannel.upload;
  const React = upload;
  const activityAction = parentChannel.activityAction;
  let closure_6 = activityAction;
  const applicationId = parentChannel.applicationId;
  let closure_7 = applicationId;
  const voiceChatEnabled = parentChannel.voiceChatEnabled;
  let closure_8 = voiceChatEnabled;
  const items = [parentChannel, name, appliedTags, onThreadCreated, analyticsLocations, upload, activityAction, voiceChatEnabled, applicationId];
  return React.useCallback(() => {
    let closure_0 = onThreadCreated(async (arg0, arg1, arg2) => {
      let guildId;
      let obj;
      let tmp3 = arg0;
      let num = 0;
      if (tmp[0]) {
        obj = guildId(closure_2[22]);
        num = obj.addFlag(0, constants3.SUPPRESS_NOTIFICATIONS);
        tmp3 = tmp2;
      }
      let obj1 = guildId(closure_2[16]);
      const autoArchiveDuration = obj1.getAutoArchiveDuration(guildId, null);
      guildId = `${closure_18.CHANNEL_THREADS(closure_0.id)}?use_nested_fields=true`;
      obj = { name: obj, auto_archive_duration: autoArchiveDuration, applied_tags: closure_2 };
      obj = { content: tmp3, sticker_ids: arg1 };
      let tmp8;
      if (0 !== num) {
        tmp8 = num;
      }
      obj.flags = tmp8;
      obj.message = obj;
      let tmp10 = null;
      if (null != closure_6) {
        let session_id = closure_6.activity.session_id;
        if (null == session_id) {
          session_id = sessionId.getSessionId();
        }
        let tmp13 = null;
        if (null != session_id) {
          obj1 = { type: tmp11.type, session_id, target_user_id: tmp11.targetUserId };
          const party = tmp11.activity.party;
          let id;
          if (null != party) {
            id = party.id;
          }
          obj1.party_id = id;
          tmp13 = obj1;
        }
        tmp10 = tmp13;
      }
      let tmp15 = null != tmp10;
      if (tmp15) {
        tmp15 = null != closure_6;
      }
      if (tmp15) {
        tmp9.message.application_id = closure_6.activity.application_id;
        tmp9.message.activity = tmp10;
      }
      if (null != arg2) {
        if (arg2.length > 0) {
          const tmp21 = yield closure_5(arg2);
          const uploaderFile = tmp21.uploaderFile;
          const files = tmp21.files;
          tmp9.message.attachments = files.map((id) => callback(closure_2[23]).getAttachmentPayload(id, arg1));
        }
      }
      const tmp23 = yield closure_27(closure_0, closure_3, uploaderFile, () => {
        const HTTP = callback(closure_2[18]).HTTP;
        const obj = { url: callback, body: obj, rejectWithError: callback(closure_2[18]).rejectWithMigratedError() };
        return HTTP.post(obj);
      });
      const tmp = callback(obj(closure_2[21])(arg0), 2);
      obj(closure_2[19]).clearDraft(guildId.id, closure_10.ThreadSettings);
      const obj6 = obj(closure_2[19]);
      obj(closure_2[19]).clearDraft(guildId.id, closure_10.FirstThreadMessage);
      const obj7 = obj(closure_2[19]);
      obj(closure_2[20]).clearAll(guildId.id, closure_10.FirstThreadMessage);
      const obj8 = obj(closure_2[20]);
      const result = guildId(closure_2[25]).trackForumPostCreated({ guildId: guildId.guild_id, channelId: guildId.id, postId: tmp23.id, applicationId: sessionId, voiceChatEnabled: closure_8 });
      if (null != obj.message.application_id) {
        const obj3 = { location: constants4.THREAD_CREATION, invite_type: constants2.APPLICATION, application_id: obj.message.application_id, guild_id: guildId.getGuildId() };
        ({ id: obj12.channel_id, id: obj12.message_id } = tmp23);
        obj(closure_2[26]).trackWithMetadata(constants.INVITE_SENT, obj3);
        const obj11 = obj(closure_2[26]);
      }
      if (null != callback2) {
        callback2(tmp23);
      }
      return tmp23;
    });
    return function() {
      return callback(...arguments);
    };
  }(), items);
};
