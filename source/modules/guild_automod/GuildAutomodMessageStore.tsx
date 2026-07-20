// Module ID: 7616
// Function ID: 61008
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7616 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function removeFailedMessage(id) {
  if (null != closure_13[id]) {
    delete r0[r2];
  }
  closure_14 = closure_14 + 1;
}
function handleMessageSendFailedAutomod(messageData) {
  messageData = messageData.messageData;
  let obj = arg1(dependencyMap[8]);
  const failedMessageId = obj.getFailedMessageId(messageData);
  obj = { id: failedMessageId, isBlockedEdit: arg1(dependencyMap[8]).isMessageDataEdit(messageData), messageData };
  const obj3 = arg1(dependencyMap[8]);
  obj.errorMessage = arg1(dependencyMap[9]).getAutomodErrorMessage(messageData, messageData.errorResponseBody);
  closure_13[failedMessageId] = obj;
  closure_14 = closure_14 + 1;
  return true;
}
function handleLoadMessages(messages) {
  messages = messages.messages;
  const channel = channel.getChannel(messages.channelId);
  let guildId;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  if (null == guildId) {
    return false;
  } else {
    const reduced = messages.reduce((arg0, type) => {
      let tmp = arg0;
      if (type.type === constants.AUTO_MODERATION_ACTION) {
        const embeds = type.embeds;
        let someResult;
        if (null != embeds) {
          someResult = embeds.some((type) => type.type === constants.AUTO_MODERATION_NOTIFICATION);
        }
        tmp = arg0;
        if (someResult) {
          if (null == arg0) {
            const id = type.id;
          } else {
            const obj = callback(closure_2[12]);
          }
          tmp = id;
        }
      }
      return tmp;
    }, closure_16[guildId]);
    let flag = null != reduced;
    if (flag) {
      flag = closure_16[guildId] !== reduced;
    }
    if (flag) {
      closure_16[guildId] = reduced;
      flag = true;
    }
    return flag;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
({ AbortCodes: closure_10, MessageEmbedTypes: closure_11, MessageTypes: closure_12 } = arg1(dependencyMap[7]));
let closure_13 = {};
let closure_14 = 0;
let closure_15 = {};
let closure_16 = {};
let tmp3 = (PersistedStore) => {
  class GuildAutomodMessageStore {
    constructor() {
      self = this;
      tmp = closure_3(this, GuildAutomodMessageStore);
      obj = closure_6(GuildAutomodMessageStore);
      tmp2 = closure_5;
      if (closure_17()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GuildAutomodMessageStore;
  callback2(GuildAutomodMessageStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      this.waitFor(closure_8, closure_9);
      if (null != arg0) {
        ({ automodFailedMessages: closure_13, mentionRaidDetectionByGuild: closure_15 } = arg0);
      }
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getState",
    value() {
      return { automodFailedMessages: closure_13, mentionRaidDetectionByGuild: closure_15, lastIncidentAlertMessage: closure_16 };
    }
  };
  items[1] = obj;
  obj = {
    key: "getMessage",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        let tmp4 = null;
        if (null != closure_13[arg0]) {
          tmp4 = tmp3;
        }
        tmp = tmp4;
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getMessagesVersion",
    value() {
      return closure_14;
    }
  };
  items[4] = {
    key: "getMentionRaidDetected",
    value(arg0) {
      let tmp2 = null;
      if (null != closure_15[arg0]) {
        tmp2 = tmp;
      }
      return tmp2;
    }
  };
  items[5] = {
    key: "getLastIncidentAlertMessage",
    value(arg0) {
      let tmp2 = null;
      if (null != closure_16[arg0]) {
        tmp2 = tmp;
      }
      return tmp2;
    }
  };
  return callback(GuildAutomodMessageStore, items);
}(importDefault(dependencyMap[13]).PersistedStore);
tmp3.displayName = "GuildAutomodMessageStore";
tmp3.persistKey = "GuildAutomodMessages";
tmp3 = new tmp3(importDefault(dependencyMap[14]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let flag = 0 !== Object.keys(closure_13).length;
    if (flag) {
      closure_13 = {};
      closure_14 = closure_14 + 1;
      flag = true;
    }
    return flag;
  },
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  LOCAL_MESSAGES_LOADED: handleLoadMessages,
  MESSAGE_CREATE: function handleIncidentAlertMessageCreate(arg0) {
    let guildId;
    let message;
    ({ guildId, message } = arg0);
    if (null == guildId) {
      return false;
    } else if (message.type !== constants2.AUTO_MODERATION_ACTION) {
      return false;
    } else {
      const messageRecord = arg1(dependencyMap[10]).createMessageRecord(message);
      const obj2 = arg1(dependencyMap[10]);
      const tmp10 = !arg1(dependencyMap[11]).isAutomodMessageRecord(messageRecord);
      let tmp5 = !tmp10;
      if (!tmp10) {
        const tmp3 = !arg1(dependencyMap[11]).isAutomodNotification(messageRecord);
        let flag = !tmp3;
        if (!tmp3) {
          closure_16[guildId] = messageRecord.id;
          flag = true;
        }
        tmp5 = flag;
        const obj = arg1(dependencyMap[11]);
      }
      return tmp5;
    }
  },
  MESSAGE_SEND_FAILED_AUTOMOD: handleMessageSendFailedAutomod,
  MESSAGE_EDIT_FAILED_AUTOMOD: handleMessageSendFailedAutomod,
  REMOVE_AUTOMOD_MESSAGE_NOTICE: function handleMessageNoticeRemove(messageId) {
    removeFailedMessage(messageId.messageId);
    return true;
  },
  MESSAGE_END_EDIT: function handleMessageEndEdit(response) {
    response = response.response;
    let body;
    if (null != response) {
      body = response.body;
    }
    if (null == body) {
      return false;
    } else if (response.body.code === constants.AUTOMOD_MESSAGE_BLOCKED) {
      return false;
    } else {
      const id = response.body.id;
      if (null == id) {
        return false;
      } else {
        removeFailedMessage(id);
      }
    }
  },
  AUTO_MODERATION_MENTION_RAID_DETECTION: function handleMentionRaidDetection(decisionId) {
    const guildId = decisionId.guildId;
    closure_15[guildId] = { guildId, decisionId: decisionId.decisionId, suspiciousMentionActivityUntil: decisionId.suspiciousMentionActivityUntil };
    return true;
  },
  AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function handleMentionRaidNoticeDismiss(arg0) {
    delete r0[r1];
    return true;
  }
});
const obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let flag = 0 !== Object.keys(closure_13).length;
    if (flag) {
      closure_13 = {};
      closure_14 = closure_14 + 1;
      flag = true;
    }
    return flag;
  },
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  LOCAL_MESSAGES_LOADED: handleLoadMessages,
  MESSAGE_CREATE: function handleIncidentAlertMessageCreate(arg0) {
    let guildId;
    let message;
    ({ guildId, message } = arg0);
    if (null == guildId) {
      return false;
    } else if (message.type !== constants2.AUTO_MODERATION_ACTION) {
      return false;
    } else {
      const messageRecord = arg1(dependencyMap[10]).createMessageRecord(message);
      const obj2 = arg1(dependencyMap[10]);
      const tmp10 = !arg1(dependencyMap[11]).isAutomodMessageRecord(messageRecord);
      let tmp5 = !tmp10;
      if (!tmp10) {
        const tmp3 = !arg1(dependencyMap[11]).isAutomodNotification(messageRecord);
        let flag = !tmp3;
        if (!tmp3) {
          closure_16[guildId] = messageRecord.id;
          flag = true;
        }
        tmp5 = flag;
        const obj = arg1(dependencyMap[11]);
      }
      return tmp5;
    }
  },
  MESSAGE_SEND_FAILED_AUTOMOD: handleMessageSendFailedAutomod,
  MESSAGE_EDIT_FAILED_AUTOMOD: handleMessageSendFailedAutomod,
  REMOVE_AUTOMOD_MESSAGE_NOTICE: function handleMessageNoticeRemove(messageId) {
    removeFailedMessage(messageId.messageId);
    return true;
  },
  MESSAGE_END_EDIT: function handleMessageEndEdit(response) {
    response = response.response;
    let body;
    if (null != response) {
      body = response.body;
    }
    if (null == body) {
      return false;
    } else if (response.body.code === constants.AUTOMOD_MESSAGE_BLOCKED) {
      return false;
    } else {
      const id = response.body.id;
      if (null == id) {
        return false;
      } else {
        removeFailedMessage(id);
      }
    }
  },
  AUTO_MODERATION_MENTION_RAID_DETECTION: function handleMentionRaidDetection(decisionId) {
    const guildId = decisionId.guildId;
    closure_15[guildId] = { guildId, decisionId: decisionId.decisionId, suspiciousMentionActivityUntil: decisionId.suspiciousMentionActivityUntil };
    return true;
  },
  AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS: function handleMentionRaidNoticeDismiss(arg0) {
    delete r0[r1];
    return true;
  }
};
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/guild_automod/GuildAutomodMessageStore.tsx");

export default tmp3;
