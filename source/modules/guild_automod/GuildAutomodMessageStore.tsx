// Module ID: 7627
// Function ID: 61079
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1348, 4349, 653, 7076, 7109, 4351, 6740, 21, 566, 686, 2]

// Module 7627 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "ME";
import set from "set";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_10;
let closure_11;
let closure_12;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function removeFailedMessage(id) {
  if (null != table[id]) {
    delete tmp[tmp2];
  }
  closure_14 = closure_14 + 1;
}
function handleMessageSendFailedAutomod(messageData) {
  messageData = messageData.messageData;
  let obj = require(7076) /* _isNativeReflectConstruct */;
  const failedMessageId = obj.getFailedMessageId(messageData);
  obj = { id: failedMessageId, isBlockedEdit: require(7076) /* _isNativeReflectConstruct */.isMessageDataEdit(messageData), messageData };
  const obj3 = require(7076) /* _isNativeReflectConstruct */;
  obj.errorMessage = require(7109) /* _callSuper */.getAutomodErrorMessage(messageData, messageData.errorResponseBody);
  closure_13[failedMessageId] = obj;
  closure_14 = closure_14 + 1;
  return true;
}
function handleLoadMessages(messages) {
  messages = messages.messages;
  channel = channel.getChannel(messages.channelId);
  let guildId;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  if (null == guildId) {
    return false;
  } else {
    const reduced = messages.reduce((arg0, type) => {
      let tmp = arg0;
      if (type.type === outer1_12.AUTO_MODERATION_ACTION) {
        const embeds = type.embeds;
        let someResult;
        if (null != embeds) {
          someResult = embeds.some((type) => type.type === outer2_11.AUTO_MODERATION_NOTIFICATION);
        }
        tmp = arg0;
        if (someResult) {
          if (null == arg0) {
            const id = type.id;
          } else {
            const obj = outer1_1(outer1_2[12]);
          }
          tmp = id;
        }
      }
      return tmp;
    }, dependencyMap[guildId]);
    let flag = null != reduced;
    if (flag) {
      flag = dependencyMap[guildId] !== reduced;
    }
    if (flag) {
      dependencyMap[guildId] = reduced;
      flag = true;
    }
    return flag;
  }
}
({ AbortCodes: closure_10, MessageEmbedTypes: closure_11, MessageTypes: closure_12 } = ME);
let closure_13 = {};
let c14 = 0;
let closure_15 = {};
let closure_16 = {};
let tmp3 = ((PersistedStore) => {
  class GuildAutomodMessageStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, GuildAutomodMessageStore);
      obj = outer1_6(GuildAutomodMessageStore);
      tmp2 = outer1_5;
      if (outer1_17()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildAutomodMessageStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let outer1_13;
      let outer1_15;
      this.waitFor(outer1_8, outer1_9);
      if (null != arg0) {
        ({ automodFailedMessages: outer1_13, mentionRaidDetectionByGuild: outer1_15 } = arg0);
      }
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getState",
    value() {
      return { automodFailedMessages: outer1_13, mentionRaidDetectionByGuild: outer1_15, lastIncidentAlertMessage: outer1_16 };
    }
  };
  items[1] = obj;
  obj = {
    key: "getMessage",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        let tmp4 = null;
        if (null != outer1_13[arg0]) {
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
      return outer1_14;
    }
  };
  items[4] = {
    key: "getMentionRaidDetected",
    value(arg0) {
      let tmp2 = null;
      if (null != outer1_15[arg0]) {
        tmp2 = tmp;
      }
      return tmp2;
    }
  };
  items[5] = {
    key: "getLastIncidentAlertMessage",
    value(arg0) {
      let tmp2 = null;
      if (null != outer1_16[arg0]) {
        tmp2 = tmp;
      }
      return tmp2;
    }
  };
  return callback(GuildAutomodMessageStore, items);
})(require("initialize").PersistedStore);
tmp3.displayName = "GuildAutomodMessageStore";
tmp3.persistKey = "GuildAutomodMessages";
tmp3 = new tmp3(require("dispatcher"), {
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
      const messageRecord = require(4351) /* createMinimalMessageRecord */.createMessageRecord(message);
      const obj2 = require(4351) /* createMinimalMessageRecord */;
      const tmp10 = !require(6740) /* getEmbedFieldFromMessage */.isAutomodMessageRecord(messageRecord);
      let tmp5 = !tmp10;
      if (!tmp10) {
        const tmp3 = !require(6740) /* getEmbedFieldFromMessage */.isAutomodNotification(messageRecord);
        let flag = !tmp3;
        if (!tmp3) {
          closure_16[guildId] = messageRecord.id;
          flag = true;
        }
        tmp5 = flag;
        const obj = require(6740) /* getEmbedFieldFromMessage */;
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
    delete tmp[tmp2];
    return true;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_automod/GuildAutomodMessageStore.tsx");

export default tmp3;
