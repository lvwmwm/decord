// Module ID: 6740
// Function ID: 52497
// Name: getEmbedFieldFromMessage
// Dependencies: [57, 31, 1348, 3758, 3767, 1849, 653, 6741, 6742, 6743, 1212, 6744, 6745, 6746, 4320, 6747, 6748, 6749, 566, 6750, 2]
// Exports: default, extractAutomodNotificationFields, getActionHeaderText, getActionHeaderTextMobile, getQuarantineReasonString, getRaidAlertResolveCTAText, getUserIdOfAutomodAction, isAutomodMessageRecord, isAutomodNotification, useAutomodAlertActions

// Module 6740 (getEmbedFieldFromMessage)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_10;
let closure_11;
let closure_8;
let closure_9;
const require = arg1;
function getEmbedFieldFromMessage(embeds, APPLICATION_NAME) {
  let closure_0 = APPLICATION_NAME;
  embeds = embeds.embeds;
  if (null == embeds) {
    embeds = [];
  }
  const first = callback(embeds, 1)[0];
  if (null != first) {
    if (first.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue;
      if (null != first) {
        const fields = first.fields;
        if (null != fields) {
          const found = fields.find((rawName) => rawName.rawName === closure_0);
          if (null != found) {
            rawValue = found.rawValue;
          }
        }
      }
      return rawValue;
    } else if (first.type === constants.AUTO_MODERATION_NOTIFICATION) {
      let rawValue1;
      if (null != first) {
        const fields1 = first.fields;
        if (null != fields1) {
          const found1 = fields1.find((rawName) => rawName.rawName === closure_0);
          if (null != found1) {
            rawValue1 = found1.rawValue;
          }
        }
      }
      return rawValue1;
    }
  }
}
function getMessageContentFromEmbed(embeds) {
  embeds = embeds.embeds;
  if (null == embeds) {
    embeds = [];
  }
  let rawDescription;
  const first = callback(embeds, 1)[0];
  if (null != first) {
    rawDescription = first.rawDescription;
  }
  let str = "";
  if (null != rawDescription) {
    str = rawDescription;
  }
  return str;
}
function getDecisionOutcomeFromMessage(message) {
  const tmp = getEmbedFieldFromMessage(message, require(6741) /* AutomodMessageEmbedKeys */.AutomodMessageEmbedKeys.DECISION_OUTCOME);
  return null != tmp ? tmp : undefined;
}
function getQuarantineTypeFromMessage(message) {
  const tmp = getEmbedFieldFromMessage(message, require(6741) /* AutomodMessageEmbedKeys */.AutomodMessageEmbedKeys.QUARANTINE_USER);
  return null != tmp ? tmp : undefined;
}
function getQuarantineActionFromMessage(message) {
  const tmp = getEmbedFieldFromMessage(message, require(6741) /* AutomodMessageEmbedKeys */.AutomodMessageEmbedKeys.QUARANTINE_USER_ACTION);
  return null != tmp ? tmp : undefined;
}
function getProfileUpdateTypeFromMessage(message) {
  const tmp = getEmbedFieldFromMessage(message, require(6741) /* AutomodMessageEmbedKeys */.AutomodMessageEmbedKeys.BLOCK_PROFILE_UPDATE_TYPE);
  return null != tmp ? tmp : undefined;
}
function getQuarantineEventFromMessage(message) {
  const tmp = getEmbedFieldFromMessage(message, require(6741) /* AutomodMessageEmbedKeys */.AutomodMessageEmbedKeys.QUARANTINE_EVENT);
  return null != tmp ? tmp : undefined;
}
function _getUserProfileRuleHeaderText(arg0, arg1, arg2) {
  if (require(6742) /* AutomodQuarantineUserActionMessageEmbedKeys */.AutomodQuarantineUserActionMessageEmbedKeys.BLOCK_PROFILE_UPDATE === arg1) {
    if (require(6743) /* AutomodBlockProfileUpdateMessageEmbedKeys */.AutomodBlockProfileUpdateMessageEmbedKeys.NICKNAME_UPDATE === arg0) {
      const intl6 = require(1212) /* getSystemLocale */.intl;
      let stringResult = intl6.string(require(1212) /* getSystemLocale */.t.t98DPb);
    } else if (require(6743) /* AutomodBlockProfileUpdateMessageEmbedKeys */.AutomodBlockProfileUpdateMessageEmbedKeys.NICKNAME_RESET === arg0) {
      const intl5 = require(1212) /* getSystemLocale */.intl;
      stringResult = intl5.string(require(1212) /* getSystemLocale */.t["7u/rlU"]);
    }
    return stringResult;
  } else if (require(6742) /* AutomodQuarantineUserActionMessageEmbedKeys */.AutomodQuarantineUserActionMessageEmbedKeys.QUARANTINE_USER === arg1) {
    if (require(6744) /* AutomodQuarantineEventMessageEmbedKeys */.AutomodQuarantineEventMessageEmbedKeys.MESSAGE_SEND === arg2) {
      const intl4 = require(1212) /* getSystemLocale */.intl;
      let stringResult1 = intl4.string(require(1212) /* getSystemLocale */.t.PmSMMS);
    } else if (require(6744) /* AutomodQuarantineEventMessageEmbedKeys */.AutomodQuarantineEventMessageEmbedKeys.GUILD_JOIN === arg2) {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      stringResult1 = intl3.string(require(1212) /* getSystemLocale */.t.m9wWzo);
    } else if (require(6744) /* AutomodQuarantineEventMessageEmbedKeys */.AutomodQuarantineEventMessageEmbedKeys.USERNAME_UPDATE === arg2) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      stringResult1 = intl2.string(require(1212) /* getSystemLocale */.t.KNSkC6);
    } else if (require(6744) /* AutomodQuarantineEventMessageEmbedKeys */.AutomodQuarantineEventMessageEmbedKeys.CLAN_TAG_UPDATE === arg2) {
      const intl7 = require(1212) /* getSystemLocale */.intl;
      stringResult1 = intl7.string(require(1212) /* getSystemLocale */.t.qV4K6j);
    }
    return stringResult1;
  } else if (require(6742) /* AutomodQuarantineUserActionMessageEmbedKeys */.AutomodQuarantineUserActionMessageEmbedKeys.BLOCK_GUEST_JOIN === arg1) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.MrYeyS);
  }
}
function extractAutomodMessageFields(message) {
  let tmp;
  const tmp2 = getEmbedFieldFromMessage(message, require(6741) /* AutomodMessageEmbedKeys */.AutomodMessageEmbedKeys.CHANNEL_ID);
  let obj = require(6749) /* AutomodAlertActionType */;
  const result = obj.parseAlertActionsExecution(getEmbedFieldFromMessage(message, require(6741) /* AutomodMessageEmbedKeys */.AutomodMessageEmbedKeys.ALERT_ACTIONS_EXECUTION));
  obj = { content: getMessageContentFromEmbed(message), ruleName: getEmbedFieldFromMessage(message, require(6741) /* AutomodMessageEmbedKeys */.AutomodMessageEmbedKeys.RULE_NAME), decisionId: getEmbedFieldFromMessage(message, require(6741) /* AutomodMessageEmbedKeys */.AutomodMessageEmbedKeys.DECISION_ID), keyword: getEmbedFieldFromMessage(message, require(6741) /* AutomodMessageEmbedKeys */.AutomodMessageEmbedKeys.KEYWORD), keywordMatchedContent: getEmbedFieldFromMessage(message, require(6741) /* AutomodMessageEmbedKeys */.AutomodMessageEmbedKeys.KEYWORD_MATCHED_CONTENT), flaggedMessageId: getEmbedFieldFromMessage(message, require(6741) /* AutomodMessageEmbedKeys */.AutomodMessageEmbedKeys.FLAGGED_MESSAGE_ID), timeoutDuration: getEmbedFieldFromMessage(message, require(6741) /* AutomodMessageEmbedKeys */.AutomodMessageEmbedKeys.TIMEOUT_DURATION), quarantineType: getEmbedFieldFromMessage(message, require(6741) /* AutomodMessageEmbedKeys */.AutomodMessageEmbedKeys.QUARANTINE_USER), quarantineAction: getEmbedFieldFromMessage(message, require(6741) /* AutomodMessageEmbedKeys */.AutomodMessageEmbedKeys.QUARANTINE_USER_ACTION), decisionReason: getEmbedFieldFromMessage(message, require(6741) /* AutomodMessageEmbedKeys */.AutomodMessageEmbedKeys.DECISION_REASON), applicationName: getEmbedFieldFromMessage(message, require(6741) /* AutomodMessageEmbedKeys */.AutomodMessageEmbedKeys.APPLICATION_NAME), interactionUserId: getEmbedFieldFromMessage(message, require(6741) /* AutomodMessageEmbedKeys */.AutomodMessageEmbedKeys.INTERACTION_USER_ID), interactionCallbackType: getEmbedFieldFromMessage(message, require(6741) /* AutomodMessageEmbedKeys */.AutomodMessageEmbedKeys.INTERACTION_CALLBACK_TYPE), embedChannel: channel.getChannel(tmp2), embedChannelId: tmp2 };
  if (null != result) {
    tmp = result;
  }
  obj.alertActionsExecution = tmp;
  return obj;
}
({ MessageEmbedTypes: closure_8, MessageTypes: closure_9, NOOP_NULL: closure_10, Permissions: closure_11 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_automod/AutomodMessageUtils.tsx");

export default function useAutomodMessageFields(arg0) {
  const _require = arg0;
  const items = [arg0];
  const memo = React.useMemo(() => outer1_20(closure_0), items);
  let obj = _require(memo[18]);
  const items1 = [_isNativeReflectConstruct];
  const items2 = [memo.embedChannelId];
  obj = {};
  const stateFromStores = obj.useStateFromStores(items1, () => outer1_4.getChannel(memo.embedChannelId), items2);
  const merged = Object.assign(memo);
  obj["embedChannel"] = stateFromStores;
  return obj;
};
export const isAutomodMessageRecord = function isAutomodMessageRecord(message) {
  return message.type === constants2.AUTO_MODERATION_ACTION;
};
export const isAutomodNotification = function isAutomodNotification(message) {
  const embeds = message.embeds;
  let someResult;
  if (null != embeds) {
    someResult = embeds.some((type) => type.type === outer1_8.AUTO_MODERATION_NOTIFICATION);
  }
  return someResult;
};
export const getActionHeaderTextMobile = function getActionHeaderTextMobile(message, author, interactionUserId) {
  let username = author;
  const tmp = getProfileUpdateTypeFromMessage(message);
  const tmp2 = getQuarantineActionFromMessage(message);
  if (null != getQuarantineTypeFromMessage(message)) {
    const tmp5 = _getUserProfileRuleHeaderText(tmp, tmp2, tmp3);
    if (null != tmp5) {
      return tmp5;
    }
  }
  const tmp6 = getDecisionOutcomeFromMessage(message);
  tmp3 = getQuarantineEventFromMessage(message);
  const tmp8 = getEmbedFieldFromMessage(message, require(6741) /* AutomodMessageEmbedKeys */.AutomodMessageEmbedKeys.APPLICATION_NAME);
  if (null != tmp8) {
    let username2 = user.getUser(interactionUserId);
    if (tmp7 === require(6745) /* AutomodInteractionCallbackTypeEmbedKeys */.AutomodInteractionCallbackTypeEmbedKeys.MODAL) {
      if (null != username2) {
        if (tmp6 !== require(6746) /* AutomodDecisionOutcomeEmbedKeys */.AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
          const intl6 = require(1212) /* getSystemLocale */.intl;
          let obj = { applicationName: tmp8 };
          username2 = username2.username;
          obj.interactionUser = username2;
          username = username.username;
          obj.integrationOwner = username;
          let formatToPlainStringResult = intl6.formatToPlainString(require(1212) /* getSystemLocale */.t["Xy2Iw+"], obj);
        } else {
          const intl5 = require(1212) /* getSystemLocale */.intl;
          obj = { applicationName: tmp8, interactionUser: username2.username, integrationOwner: username.username };
          formatToPlainStringResult = intl5.formatToPlainString(require(1212) /* getSystemLocale */.t["MCK/t7"], obj);
        }
      }
    }
    if (tmp6 !== require(6746) /* AutomodDecisionOutcomeEmbedKeys */.AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
      const intl4 = require(1212) /* getSystemLocale */.intl;
      const obj1 = { applicationName: tmp8, integrationOwner: username.username };
      let formatToPlainStringResult1 = intl4.formatToPlainString(require(1212) /* getSystemLocale */.t["0Kmtr7"], obj1);
    } else {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      obj = { applicationName: tmp8, integrationOwner: username.username };
      formatToPlainStringResult1 = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.I0FiWp, obj);
    }
    return formatToPlainStringResult1;
  } else {
    if (tmp6 !== require(6746) /* AutomodDecisionOutcomeEmbedKeys */.AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      let stringResult = intl2.string(require(1212) /* getSystemLocale */.t.Oo38tv);
    } else {
      const intl = require(1212) /* getSystemLocale */.intl;
      stringResult = intl.string(require(1212) /* getSystemLocale */.t["2kuGkD"]);
    }
    return stringResult;
  }
  tmp7 = getEmbedFieldFromMessage(message, require(6741) /* AutomodMessageEmbedKeys */.AutomodMessageEmbedKeys.INTERACTION_CALLBACK_TYPE);
};
export const getActionHeaderText = function getActionHeaderText(embeds, channel, arg2, integrationOwnerHook, interactionUserHook) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = closure_10;
  }
  if (null != channel) {
    let obj = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
    let channelName = obj.computeChannelName(channel, closure_7, closure_6);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    channelName = intl.string(require(1212) /* getSystemLocale */.t.J90oLW);
  }
  const tmp9 = getProfileUpdateTypeFromMessage(embeds);
  const tmp10 = getQuarantineActionFromMessage(embeds);
  const tmp11 = getQuarantineEventFromMessage(embeds);
  const tmp13 = getDecisionOutcomeFromMessage(embeds);
  const tmp12 = getQuarantineTypeFromMessage(embeds);
  const tmp15 = getEmbedFieldFromMessage(embeds, require(6741) /* AutomodMessageEmbedKeys */.AutomodMessageEmbedKeys.APPLICATION_NAME);
  if (null != tmp12) {
    const tmp17 = _getUserProfileRuleHeaderText(tmp9, tmp10, tmp11);
    if (null != tmp17) {
      return tmp17;
    }
  }
  if (null == channel) {
    let tmp19 = closure_10;
  } else {
    tmp19 = tmp;
  }
  const tmp20 = getEmbedFieldFromMessage(embeds, require(6741) /* AutomodMessageEmbedKeys */.AutomodMessageEmbedKeys.VOICE_CHANNEL_STATUS_OUTCOME);
  if (null == tmp20) {
    if (null != null) {
      return null;
    } else {
      if (null == tmp15) {
        if (tmp13 !== require(6746) /* AutomodDecisionOutcomeEmbedKeys */.AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
          const intl4 = require(1212) /* getSystemLocale */.intl;
          obj = { channelName, channelHook: tmp19 };
          let formatResult = intl4.format(require(1212) /* getSystemLocale */.t.IZg0VQ, obj);
        } else {
          const intl3 = require(1212) /* getSystemLocale */.intl;
          obj = { channelName, channelHook: tmp19 };
          formatResult = intl3.format(require(1212) /* getSystemLocale */.t.lOIOSK, obj);
        }
      }
      if (tmp14 !== require(6745) /* AutomodInteractionCallbackTypeEmbedKeys */.AutomodInteractionCallbackTypeEmbedKeys.MODAL) {
        if (tmp13 !== require(6746) /* AutomodDecisionOutcomeEmbedKeys */.AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
          const intl6 = require(1212) /* getSystemLocale */.intl;
          const obj1 = { applicationName: tmp15, channelName, channelHook: tmp19, integrationOwnerHook };
          let formatResult1 = intl6.format(require(1212) /* getSystemLocale */.t.AXQufN, obj1);
        } else {
          const intl5 = require(1212) /* getSystemLocale */.intl;
          const obj2 = { applicationName: tmp15, channelName, channelHook: tmp19, integrationOwnerHook };
          formatResult1 = intl5.format(require(1212) /* getSystemLocale */.t.s3tjMN, obj2);
        }
      }
      if (tmp13 !== require(6746) /* AutomodDecisionOutcomeEmbedKeys */.AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
        const intl8 = require(1212) /* getSystemLocale */.intl;
        const obj3 = { applicationName: tmp15, interactionUserHook, integrationOwnerHook };
        let formatResult2 = intl8.format(require(1212) /* getSystemLocale */.t["4xL9Sk"], obj3);
      } else {
        const intl7 = require(1212) /* getSystemLocale */.intl;
        const obj4 = { applicationName: tmp15, interactionUserHook, integrationOwnerHook };
        formatResult2 = intl7.format(require(1212) /* getSystemLocale */.t.S3lNIT, obj4);
      }
    }
  } else {
    if ("blocked" === tmp20) {
      let bma6cs = require(1212) /* getSystemLocale */.t.cLQrqz;
    } else {
      bma6cs = require(1212) /* getSystemLocale */.t.bma6cs;
    }
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj5 = { channelName, channelHook: tmp };
    intl2.format(bma6cs, obj5);
  }
};
export const getQuarantineReasonString = function getQuarantineReasonString(quarantineType) {
  if (require(6747) /* AutomodQuarantineUserMessageEmbedKeys */.AutomodQuarantineUserMessageEmbedKeys.NICKNAME === quarantineType) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t["fkBQa/"]);
  } else if (require(6747) /* AutomodQuarantineUserMessageEmbedKeys */.AutomodQuarantineUserMessageEmbedKeys.USERNAME === quarantineType) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t.pJQVnr);
  } else if (require(6747) /* AutomodQuarantineUserMessageEmbedKeys */.AutomodQuarantineUserMessageEmbedKeys.GLOBAL_NAME === quarantineType) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.V9eJ85);
  } else if (require(6747) /* AutomodQuarantineUserMessageEmbedKeys */.AutomodQuarantineUserMessageEmbedKeys.CLAN_TAG === quarantineType) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.Rtum01);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.pJQVnr);
  }
};
export const extractAutomodNotificationFields = function extractAutomodNotificationFields(message) {
  const tmp = getEmbedFieldFromMessage(message, require(6748) /* AutomodNotificationEmbedKeys */.AutomodNotificationEmbedKeys.NOTIFICATION_TYPE);
  const tmp2 = getEmbedFieldFromMessage(message, require(6748) /* AutomodNotificationEmbedKeys */.AutomodNotificationEmbedKeys.JOIN_ATTEMPTS);
  const tmp3 = getEmbedFieldFromMessage(message, require(6748) /* AutomodNotificationEmbedKeys */.AutomodNotificationEmbedKeys.RAID_DATETIME);
  const tmp4 = getEmbedFieldFromMessage(message, require(6748) /* AutomodNotificationEmbedKeys */.AutomodNotificationEmbedKeys.DMS_SENT);
  const tmp5 = getEmbedFieldFromMessage(message, require(6748) /* AutomodNotificationEmbedKeys */.AutomodNotificationEmbedKeys.RAID_TYPE);
  const tmp6 = getEmbedFieldFromMessage(message, require(6748) /* AutomodNotificationEmbedKeys */.AutomodNotificationEmbedKeys.RESOLVED_REASON);
  const tmp7 = getEmbedFieldFromMessage(message, require(6748) /* AutomodNotificationEmbedKeys */.AutomodNotificationEmbedKeys.DECISION_ID);
  const tmp8 = getEmbedFieldFromMessage(message, require(6748) /* AutomodNotificationEmbedKeys */.AutomodNotificationEmbedKeys.SUSPICIOUS_MENTION_ACTIVITY_UNTIL);
  const obj = {};
  let tmp9 = null;
  if (null != tmp) {
    tmp9 = tmp;
  }
  let tmp10;
  if (null != tmp9) {
    tmp10 = tmp9;
  }
  obj.notificationType = tmp10;
  let parsed;
  if (null != tmp2) {
    const _parseInt = parseInt;
    parsed = parseInt(tmp2);
  }
  obj.joinAttempts = parsed;
  let date;
  if (null != tmp3) {
    const _Date = Date;
    date = new Date(tmp3);
  }
  obj.raidDatetime = date;
  let parsed1;
  if (null != tmp4) {
    const _parseInt2 = parseInt;
    parsed1 = parseInt(tmp4);
  }
  obj.dmsSent = parsed1;
  let tmp20;
  if (null != tmp5) {
    tmp20 = tmp5;
  }
  obj.raidType = tmp20;
  let tmp21;
  if (null != tmp6) {
    tmp21 = tmp6;
  }
  obj.resolvedReason = tmp21;
  let tmp22;
  if (null != tmp7) {
    tmp22 = tmp7;
  }
  obj.decisionId = tmp22;
  let date1;
  if (null != tmp8) {
    const _Date2 = Date;
    date1 = new Date(tmp8);
  }
  obj.suspiciousMentionActivityUntil = date1;
  return obj;
};
export { extractAutomodMessageFields };
export const useAutomodAlertActions = function useAutomodAlertActions(message) {
  if (null == message) {
    return null;
  } else {
    const alertActionsExecution = extractAutomodMessageFields(message).alertActionsExecution;
    let tmp2 = null;
    if (null != alertActionsExecution) {
      tmp2 = alertActionsExecution;
    }
    return tmp2;
  }
};
export const getRaidAlertResolveCTAText = function getRaidAlertResolveCTAText(resolvedReason) {
  if (null == resolvedReason) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t.Gh3A0O);
  } else if (require(6750) /* Feedback */.RaidResolutionType.LEGITIMATE_ACTIVITY === resolvedReason) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t["riQ+HH"]);
  } else if (require(6750) /* Feedback */.RaidResolutionType.DM_SPAM === resolvedReason) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.j5V0ij);
  } else if (require(6750) /* Feedback */.RaidResolutionType.JOIN_RAID === resolvedReason) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.qhaRbG);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.GPg6JM);
  }
};
export const getUserIdOfAutomodAction = function getUserIdOfAutomodAction(message) {
  return getEmbedFieldFromMessage(message, require(6748) /* AutomodNotificationEmbedKeys */.AutomodNotificationEmbedKeys.ACTION_BY_USER_ID);
};
