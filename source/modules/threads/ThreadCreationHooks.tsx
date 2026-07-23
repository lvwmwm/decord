// Module ID: 7935
// Function ID: 63349
// Name: getIsPrivate
// Dependencies: [57, 5, 31, 5682, 1194, 1348, 4468, 4349, 6928, 1211, 653, 4123, 5650, 6924, 7936, 1212, 7937, 21, 507, 7019, 7938, 6925, 1360, 4666, 7939, 7009, 4324, 6691, 4470, 686, 3976, 664, 6996, 8141, 2]
// Exports: createThread, useCreateForumPostCommon, useCreateThreadCommon, usePrivateThreadMode

// Module 7935 (getIsPrivate)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "set";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { DraftType } from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { SlowmodeType } from "_isNativeReflectConstruct";
import AbortCodes from "AbortCodes";
import ME from "ME";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";

let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
const require = arg1;
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
    const obj = importDefault(6924);
    const str4 = importDefault(6924).unparse(str3, stateFromStores.id, true);
    const tmp10 = importDefault(7936);
    let str7 = importDefault(7936)(str4.split("\n")[0], true).replace(/^[ #-]+/, "");
    const items = [];
    const match = str7.match(/(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,./])+/);
    while (null != match) {
      if (null == match.index) {
        break;
      } else {
        let arr = items.push(str7.substring(0, match.index));
        arr = items.push(match[0]);
        str7 = str7.substring(match.index + match[0].length);
        continue;
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
async function _createThread_(arg0, arg1, arg2, arg3, arg4) {
  let c0;
  const isForumLikeChannelResult = arg0.isForumLikeChannel();
  const tmp3 = yield arg3();
  c0 = tmp3;
  if (null == tmp3.body) {
    let obj = outer2_1(outer2_2[28]);
    obj = {};
    const intl = outer2_0(outer2_2[15]).intl;
    obj.title = intl.string(outer2_0(outer2_2[15]).t.j2d6Km);
    const intl2 = outer2_0(outer2_2[15]).intl;
    obj.body = intl2.string(outer2_0(outer2_2[15]).t.fEptJP);
    obj.show(obj);
  } else {
    obj = { type: "SLOWMODE_RESET_COOLDOWN", slowmodeType: outer2_12.CreateThread, channelId: arg0.id };
    outer2_1(outer2_2[29]).dispatch(obj);
    const obj5 = outer2_1(outer2_2[29]);
    const obj1 = { type: "THREAD_CREATE_LOCAL", channelId: tmp3.body.id };
    outer2_1(outer2_2[29]).dispatch(obj1);
    const AccessibilityAnnouncer = outer2_0(outer2_2[30]).AccessibilityAnnouncer;
    const intl3 = outer2_0(outer2_2[15]).intl;
    const t = outer2_0(outer2_2[15]).t;
    AccessibilityAnnouncer.announce(intl3.string(isForumLikeChannelResult ? t.zDAG2N : t.XkUoBb));
    const obj7 = outer2_1(outer2_2[29]);
  }
  let obj2 = outer2_1(outer2_2[27]);
  obj2 = {
    channelId: yield new Promise((arg0, arg1) => {
      const _undefined = arg0;
      if (null == _undefined.body) {
        arg1();
      }
      const result = outer3_8.addConditionalChangeListener(() => {
        const channel = outer4_8.getChannel(body.body.id);
        if (null != channel) {
          outer4_1(outer4_2[29]).wait(() => {
            channel(channel);
          });
          return false;
        }
      });
    }).id,
    limit: outer2_20
  };
  yield obj2.fetchMessages(obj2);
}
({ FORUM_POST_CREATION_AUTOMOD_ERRORS: closure_13, FORUM_POST_CREATION_UPLOAD_ERRORS: closure_14 } = AbortCodes);
({ AbortCodes: closure_15, AnalyticEvents: closure_16, ChannelTypes: closure_17, Endpoints: closure_18, LoggingInviteTypes: closure_19, MAX_MESSAGES_PER_CHANNEL: closure_20, MessageFlags: closure_21 } = ME);
let obj = { Disabled: 1, [1]: "Disabled", Enabled: 2, [2]: "Enabled", PrivateOnly: 3, [3]: "PrivateOnly" };
let result = require("result").fileFinishedImporting("modules/threads/ThreadCreationHooks.tsx");

export const PrivateThreadMode = obj;
export const usePrivateThreadMode = function usePrivateThreadMode(parentChannel) {
  const obj = require(5650) /* useCanStartPublicThread */;
  const canStartPublicThread = obj.useCanStartPublicThread(parentChannel);
  if (!obj2.useCanStartPrivateThread(parentChannel)) {
    return tmp2.Disabled;
  }
};
export { getIsPrivate };
export { getDefaultThreadName };
export const useCreateThreadCommon = function useCreateThreadCommon(parentChannel) {
  parentChannel = parentChannel.parentChannel;
  const parentMessageId = parentChannel.parentMessageId;
  const threadSettings = parentChannel.threadSettings;
  const privateThreadMode = parentChannel.privateThreadMode;
  const _location = parentChannel.location;
  const onThreadCreated = parentChannel.onThreadCreated;
  const useDefaultThreadName = parentChannel.useDefaultThreadName;
  const uploadHandler = parentChannel.uploadHandler;
  const items = [parentChannel, parentMessageId, threadSettings, onThreadCreated, privateThreadMode, _location, useDefaultThreadName, uploadHandler];
  return onThreadCreated.useCallback((() => {
    let closure_0 = _location(async (arg0, arg1, arg2) => {
      let user;
      let str;
      let autoArchiveDuration;
      user = outer3_24(outer2_2, outer2_3);
      const name = outer2_2.name;
      str = "";
      if (null != name) {
        str = name;
      }
      if ("" === str) {
        if (outer2_6) {
          let stringResult = outer3_26(user, outer2_1);
          if ("" === stringResult) {
            const intl = parentChannel(threadSettings[15]).intl;
            stringResult = intl.string(parentChannel(threadSettings[15]).t["7Xm5QI"]);
          }
          str = stringResult;
        }
      }
      let obj = parentChannel(threadSettings[16]);
      autoArchiveDuration = obj.getAutoArchiveDuration(user);
      const channel = outer3_8.getChannel(parentMessageId(threadSettings[17]).castMessageIdAsChannelId(outer2_1));
      const tmp9 = yield outer3_27(closure_0, [], undefined, () => {
        if (null != outer3_1) {
          let result = outer4_18.CHANNEL_MESSAGE_THREADS(user.id, outer3_1);
        } else {
          result = outer4_18.CHANNEL_THREADS(user.id);
        }
        const HTTP = parentChannel(threadSettings[18]).HTTP;
        let obj = { url: result };
        obj = { name: str };
        if (user) {
          let PUBLIC_THREAD = outer4_17.PRIVATE_THREAD;
        } else if (user.type === outer4_17.GUILD_ANNOUNCEMENT) {
          PUBLIC_THREAD = outer4_17.ANNOUNCEMENT_THREAD;
        } else {
          PUBLIC_THREAD = outer4_17.PUBLIC_THREAD;
        }
        obj.type = PUBLIC_THREAD;
        obj.auto_archive_duration = closure_2;
        obj.location = outer3_4;
        obj.body = obj;
        obj.rejectWithError = parentChannel(threadSettings[18]).rejectWithMigratedError();
        return HTTP.post(obj);
      });
      if (tmp9 !== channel) {
        const str2 = outer3_9.getDraft(user.id, outer3_10.FirstThreadMessage);
        const trimmed = str2.trim();
        parentMessageId(threadSettings[19]).clearDraft(user.id, outer3_10.ThreadSettings);
        const obj11 = parentMessageId(threadSettings[19]);
        parentMessageId(threadSettings[19]).clearDraft(user.id, outer3_10.FirstThreadMessage);
        const obj12 = parentMessageId(threadSettings[19]);
        if (tmp10) {
          parentMessageId(threadSettings[19]).saveDraft(tmp9.id, str2, outer3_10.ChannelMessage);
          const obj3 = parentMessageId(threadSettings[19]);
        }
        if (null != outer2_5) {
          outer2_5(tmp9);
        }
        if (null != outer2_7) {
          if (null != arg2) {
            if (arg2.length > 0) {
              tmp18(tmp9, arg2, arg0, arg1);
            }
          }
        }
        if (null != arg1) {
          if (arg1.length > 0) {
            const obj7 = parentMessageId(threadSettings[27]);
            const id2 = tmp9.id;
            obj = { location: outer3_22.THREAD_CREATION };
            obj7.sendStickers(id2, arg1, parentMessageId(threadSettings[13]).parse(tmp9, arg0), obj);
            const obj8 = parentMessageId(threadSettings[13]);
          }
        }
        const obj4 = parentMessageId(threadSettings[27]);
        const id = tmp9.id;
        tmp10 = "" !== trimmed && trimmed !== arg0.trim();
        obj = { location: outer3_22.THREAD_CREATION };
        obj4.sendMessage(id, parentMessageId(threadSettings[13]).parse(tmp9, arg0), undefined, obj);
        const obj5 = parentMessageId(threadSettings[13]);
      }
      const obj2 = parentMessageId(threadSettings[17]);
      parentMessageId(threadSettings[20]).clearAll(user.id, outer3_10.FirstThreadMessage);
    });
    return function() {
      return callback(...arguments);
    };
  })(), items);
};
export const createThread = function createThread(channel, arg1, PUBLIC_THREAD, autoArchiveDuration, arg4) {
  let closure_0 = channel;
  let closure_1 = arg1;
  let closure_2 = PUBLIC_THREAD;
  let _slicedToArray = autoArchiveDuration;
  let _isNativeReflectConstruct = arg4;
  return createThread_(channel, [], undefined, () => {
    const HTTP = channel(PUBLIC_THREAD[18]).HTTP;
    obj = { url: outer1_18.CHANNEL_THREADS(channel.id), body: obj };
    obj = { name: closure_1, type: PUBLIC_THREAD, auto_archive_duration: _slicedToArray, location: _isNativeReflectConstruct, rejectWithError: channel(PUBLIC_THREAD[18]).rejectWithMigratedError() };
    return HTTP.post(obj);
  });
};
export const useCreateForumPostCommon = function useCreateForumPostCommon(parentChannel) {
  parentChannel = parentChannel.parentChannel;
  const name = parentChannel.name;
  const appliedTags = parentChannel.appliedTags;
  const analyticsLocations = parentChannel.analyticsLocations;
  const onThreadCreated = parentChannel.onThreadCreated;
  const upload = parentChannel.upload;
  const activityAction = parentChannel.activityAction;
  const applicationId = parentChannel.applicationId;
  const voiceChatEnabled = parentChannel.voiceChatEnabled;
  const items = [parentChannel, name, appliedTags, onThreadCreated, analyticsLocations, upload, activityAction, voiceChatEnabled, applicationId];
  return upload.useCallback((() => {
    let closure_0 = onThreadCreated(async (arg0, arg1, arg2) => {
      let guildId;
      let obj;
      let tmp3 = arg0;
      let num = 0;
      if (tmp[0]) {
        obj = parentChannel(appliedTags[22]);
        num = obj.addFlag(0, outer3_21.SUPPRESS_NOTIFICATIONS);
        tmp3 = tmp2;
      }
      let obj1 = parentChannel(appliedTags[16]);
      const autoArchiveDuration = obj1.getAutoArchiveDuration(guildId, null);
      guildId = `${outer3_18.CHANNEL_THREADS(closure_0.id)}?use_nested_fields=true`;
      obj = { name: outer2_1, auto_archive_duration: autoArchiveDuration, applied_tags: outer2_2 };
      obj = { content: tmp3, sticker_ids: arg1 };
      let tmp8;
      if (0 !== num) {
        tmp8 = num;
      }
      obj.flags = tmp8;
      obj.message = obj;
      let tmp10 = null;
      if (null != outer2_6) {
        let session_id = outer2_6.activity.session_id;
        if (null == session_id) {
          session_id = applicationId.getSessionId();
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
        tmp15 = null != outer2_6;
      }
      if (tmp15) {
        tmp9.message.application_id = outer2_6.activity.application_id;
        tmp9.message.activity = tmp10;
      }
      if (null != arg2) {
        if (arg2.length > 0) {
          const tmp21 = yield outer2_5(arg2);
          const uploaderFile = tmp21.uploaderFile;
          const files = tmp21.files;
          tmp9.message.attachments = files.map((id) => parentChannel(appliedTags[23]).getAttachmentPayload(id, arg1));
        }
      }
      const tmp23 = yield outer3_27(closure_0, outer2_3, uploaderFile, () => {
        const HTTP = parentChannel(appliedTags[18]).HTTP;
        obj = { url: closure_0, body: obj, rejectWithError: parentChannel(appliedTags[18]).rejectWithMigratedError() };
        return HTTP.post(obj);
      });
      tmp = analyticsLocations(name(appliedTags[21])(arg0), 2);
      name(appliedTags[19]).clearDraft(guildId.id, outer3_10.ThreadSettings);
      const obj6 = name(appliedTags[19]);
      name(appliedTags[19]).clearDraft(guildId.id, outer3_10.FirstThreadMessage);
      const obj7 = name(appliedTags[19]);
      name(appliedTags[20]).clearAll(guildId.id, outer3_10.FirstThreadMessage);
      const obj8 = name(appliedTags[20]);
      const result = parentChannel(appliedTags[25]).trackForumPostCreated({ guildId: guildId.guild_id, channelId: guildId.id, postId: tmp23.id, applicationId: outer2_7, voiceChatEnabled: outer2_8 });
      if (null != obj.message.application_id) {
        const obj3 = { location: outer3_22.THREAD_CREATION, invite_type: outer3_19.APPLICATION, application_id: obj.message.application_id, guild_id: guildId.getGuildId() };
        ({ id: obj12.channel_id, id: obj12.message_id } = tmp23);
        name(appliedTags[26]).trackWithMetadata(outer3_16.INVITE_SENT, obj3);
        const obj11 = name(appliedTags[26]);
      }
      if (null != outer2_4) {
        outer2_4(tmp23);
      }
      return tmp23;
    });
    return function() {
      return callback(...arguments);
    };
  })(), items);
};
