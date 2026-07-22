// Module ID: 6735
// Function ID: 52465
// Name: getEmbedFieldFromMessage
// Dependencies: []
// Exports: default, extractAutomodNotificationFields, getActionHeaderText, getActionHeaderTextMobile, getQuarantineReasonString, getRaidAlertResolveCTAText, getUserIdOfAutomodAction, isAutomodMessageRecord, isAutomodNotification, useAutomodAlertActions

// Module 6735 (getEmbedFieldFromMessage)
function getEmbedFieldFromMessage(embeds, APPLICATION_NAME) {
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
          const found = fields.find((rawName) => rawName.rawName === arg1);
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
          const found1 = fields1.find((rawName) => rawName.rawName === arg1);
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
  const tmp = getEmbedFieldFromMessage(message, arg1(dependencyMap[7]).AutomodMessageEmbedKeys.DECISION_OUTCOME);
  return null != tmp ? tmp : undefined;
}
function getQuarantineTypeFromMessage(message) {
  const tmp = getEmbedFieldFromMessage(message, arg1(dependencyMap[7]).AutomodMessageEmbedKeys.QUARANTINE_USER);
  return null != tmp ? tmp : undefined;
}
function getQuarantineActionFromMessage(message) {
  const tmp = getEmbedFieldFromMessage(message, arg1(dependencyMap[7]).AutomodMessageEmbedKeys.QUARANTINE_USER_ACTION);
  return null != tmp ? tmp : undefined;
}
function getProfileUpdateTypeFromMessage(message) {
  const tmp = getEmbedFieldFromMessage(message, arg1(dependencyMap[7]).AutomodMessageEmbedKeys.BLOCK_PROFILE_UPDATE_TYPE);
  return null != tmp ? tmp : undefined;
}
function getQuarantineEventFromMessage(message) {
  const tmp = getEmbedFieldFromMessage(message, arg1(dependencyMap[7]).AutomodMessageEmbedKeys.QUARANTINE_EVENT);
  return null != tmp ? tmp : undefined;
}
function _getUserProfileRuleHeaderText(arg0, arg1, arg2) {
  if (arg1(dependencyMap[8]).AutomodQuarantineUserActionMessageEmbedKeys.BLOCK_PROFILE_UPDATE === arg1) {
    if (arg1(dependencyMap[9]).AutomodBlockProfileUpdateMessageEmbedKeys.NICKNAME_UPDATE === arg0) {
      const intl6 = arg1(dependencyMap[10]).intl;
      let stringResult = intl6.string(arg1(dependencyMap[10]).t.t98DPb);
    } else if (arg1(dependencyMap[9]).AutomodBlockProfileUpdateMessageEmbedKeys.NICKNAME_RESET === arg0) {
      const intl5 = arg1(dependencyMap[10]).intl;
      stringResult = intl5.string(arg1(dependencyMap[10]).t.7u/rlU);
    }
    return stringResult;
  } else if (arg1(dependencyMap[8]).AutomodQuarantineUserActionMessageEmbedKeys.QUARANTINE_USER === arg1) {
    if (arg1(dependencyMap[11]).AutomodQuarantineEventMessageEmbedKeys.MESSAGE_SEND === arg2) {
      const intl4 = arg1(dependencyMap[10]).intl;
      let stringResult1 = intl4.string(arg1(dependencyMap[10]).t.PmSMMS);
    } else if (arg1(dependencyMap[11]).AutomodQuarantineEventMessageEmbedKeys.GUILD_JOIN === arg2) {
      const intl3 = arg1(dependencyMap[10]).intl;
      stringResult1 = intl3.string(arg1(dependencyMap[10]).t.m9wWzo);
    } else if (arg1(dependencyMap[11]).AutomodQuarantineEventMessageEmbedKeys.USERNAME_UPDATE === arg2) {
      const intl2 = arg1(dependencyMap[10]).intl;
      stringResult1 = intl2.string(arg1(dependencyMap[10]).t.KNSkC6);
    } else if (arg1(dependencyMap[11]).AutomodQuarantineEventMessageEmbedKeys.CLAN_TAG_UPDATE === arg2) {
      const intl7 = arg1(dependencyMap[10]).intl;
      stringResult1 = intl7.string(arg1(dependencyMap[10]).t.qV4K6j);
    }
    return stringResult1;
  } else if (arg1(dependencyMap[8]).AutomodQuarantineUserActionMessageEmbedKeys.BLOCK_GUEST_JOIN === arg1) {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.MrYeyS);
  }
}
function extractAutomodMessageFields(message) {
  let tmp;
  const tmp2 = getEmbedFieldFromMessage(message, arg1(dependencyMap[7]).AutomodMessageEmbedKeys.CHANNEL_ID);
  let obj = arg1(dependencyMap[17]);
  const result = obj.parseAlertActionsExecution(getEmbedFieldFromMessage(message, arg1(dependencyMap[7]).AutomodMessageEmbedKeys.ALERT_ACTIONS_EXECUTION));
  obj = { content: getMessageContentFromEmbed(message), ruleName: getEmbedFieldFromMessage(message, arg1(dependencyMap[7]).AutomodMessageEmbedKeys.RULE_NAME), decisionId: getEmbedFieldFromMessage(message, arg1(dependencyMap[7]).AutomodMessageEmbedKeys.DECISION_ID), keyword: getEmbedFieldFromMessage(message, arg1(dependencyMap[7]).AutomodMessageEmbedKeys.KEYWORD), keywordMatchedContent: getEmbedFieldFromMessage(message, arg1(dependencyMap[7]).AutomodMessageEmbedKeys.KEYWORD_MATCHED_CONTENT), flaggedMessageId: getEmbedFieldFromMessage(message, arg1(dependencyMap[7]).AutomodMessageEmbedKeys.FLAGGED_MESSAGE_ID), timeoutDuration: getEmbedFieldFromMessage(message, arg1(dependencyMap[7]).AutomodMessageEmbedKeys.TIMEOUT_DURATION), quarantineType: getEmbedFieldFromMessage(message, arg1(dependencyMap[7]).AutomodMessageEmbedKeys.QUARANTINE_USER), quarantineAction: getEmbedFieldFromMessage(message, arg1(dependencyMap[7]).AutomodMessageEmbedKeys.QUARANTINE_USER_ACTION), decisionReason: getEmbedFieldFromMessage(message, arg1(dependencyMap[7]).AutomodMessageEmbedKeys.DECISION_REASON), applicationName: getEmbedFieldFromMessage(message, arg1(dependencyMap[7]).AutomodMessageEmbedKeys.APPLICATION_NAME), interactionUserId: getEmbedFieldFromMessage(message, arg1(dependencyMap[7]).AutomodMessageEmbedKeys.INTERACTION_USER_ID), interactionCallbackType: getEmbedFieldFromMessage(message, arg1(dependencyMap[7]).AutomodMessageEmbedKeys.INTERACTION_CALLBACK_TYPE), embedChannel: channel.getChannel(tmp2), embedChannelId: tmp2 };
  if (null != result) {
    tmp = result;
  }
  obj.alertActionsExecution = tmp;
  return obj;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
({ MessageEmbedTypes: closure_8, MessageTypes: closure_9, NOOP_NULL: closure_10, Permissions: closure_11 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/guild_automod/AutomodMessageUtils.tsx");

export default function useAutomodMessageFields(arg0) {
  const arg1 = arg0;
  const items = [arg0];
  const memo = React.useMemo(() => callback(arg0), items);
  const dependencyMap = memo;
  let obj = arg1(dependencyMap[18]);
  const items1 = [closure_4];
  const items2 = [memo.embedChannelId];
  obj = {};
  const stateFromStores = obj.useStateFromStores(items1, () => channel.getChannel(memo.embedChannelId), items2);
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
    someResult = embeds.some((type) => type.type === constants.AUTO_MODERATION_NOTIFICATION);
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
  const tmp3 = getQuarantineEventFromMessage(message);
  const tmp8 = getEmbedFieldFromMessage(message, author(dependencyMap[7]).AutomodMessageEmbedKeys.APPLICATION_NAME);
  if (null != tmp8) {
    let username2 = user.getUser(interactionUserId);
    if (tmp7 === author(dependencyMap[12]).AutomodInteractionCallbackTypeEmbedKeys.MODAL) {
      if (null != username2) {
        if (tmp6 !== author(dependencyMap[13]).AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
          const intl6 = author(dependencyMap[10]).intl;
          let obj = { applicationName: tmp8 };
          username2 = username2.username;
          obj.interactionUser = username2;
          username = username.username;
          obj.integrationOwner = username;
          let formatToPlainStringResult = intl6.formatToPlainString(author(dependencyMap[10]).t.Xy2Iw+, obj);
        } else {
          const intl5 = author(dependencyMap[10]).intl;
          obj = { applicationName: tmp8, interactionUser: username2.username, integrationOwner: username.username };
          formatToPlainStringResult = intl5.formatToPlainString(author(dependencyMap[10]).t.MCK/t7, obj);
        }
      }
    }
    if (tmp6 !== author(dependencyMap[13]).AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
      const intl4 = author(dependencyMap[10]).intl;
      const obj1 = { applicationName: tmp8, integrationOwner: username.username };
      let formatToPlainStringResult1 = intl4.formatToPlainString(author(dependencyMap[10]).t.0Kmtr7, obj1);
    } else {
      const intl3 = author(dependencyMap[10]).intl;
      obj = { applicationName: tmp8, integrationOwner: username.username };
      formatToPlainStringResult1 = intl3.formatToPlainString(author(dependencyMap[10]).t.I0FiWp, obj);
    }
    return formatToPlainStringResult1;
  } else {
    if (tmp6 !== author(dependencyMap[13]).AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
      const intl2 = author(dependencyMap[10]).intl;
      let stringResult = intl2.string(author(dependencyMap[10]).t.Oo38tv);
    } else {
      const intl = author(dependencyMap[10]).intl;
      stringResult = intl.string(author(dependencyMap[10]).t.2kuGkD);
    }
    return stringResult;
  }
  const tmp7 = getEmbedFieldFromMessage(message, author(dependencyMap[7]).AutomodMessageEmbedKeys.INTERACTION_CALLBACK_TYPE);
};
export const getActionHeaderText = function getActionHeaderText(embeds, channel, arg2, integrationOwnerHook, interactionUserHook) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = closure_10;
  }
  if (null != channel) {
    let obj = channel(dependencyMap[14]);
    let channelName = obj.computeChannelName(channel, closure_7, closure_6);
  } else {
    const intl = channel(dependencyMap[10]).intl;
    channelName = intl.string(channel(dependencyMap[10]).t.J90oLW);
  }
  const tmp9 = getProfileUpdateTypeFromMessage(embeds);
  const tmp10 = getQuarantineActionFromMessage(embeds);
  const tmp11 = getQuarantineEventFromMessage(embeds);
  const tmp13 = getDecisionOutcomeFromMessage(embeds);
  const tmp12 = getQuarantineTypeFromMessage(embeds);
  const tmp15 = getEmbedFieldFromMessage(embeds, channel(dependencyMap[7]).AutomodMessageEmbedKeys.APPLICATION_NAME);
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
  const tmp20 = getEmbedFieldFromMessage(embeds, channel(dependencyMap[7]).AutomodMessageEmbedKeys.VOICE_CHANNEL_STATUS_OUTCOME);
  if (null == tmp20) {
    if (null != null) {
      return null;
    } else {
      if (null == tmp15) {
        if (tmp13 !== channel(dependencyMap[13]).AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
          const intl4 = channel(dependencyMap[10]).intl;
          obj = { channelName, channelHook: tmp19 };
          let formatResult = intl4.format(channel(dependencyMap[10]).t.IZg0VQ, obj);
        } else {
          const intl3 = channel(dependencyMap[10]).intl;
          obj = { channelName, channelHook: tmp19 };
          formatResult = intl3.format(channel(dependencyMap[10]).t.lOIOSK, obj);
        }
      }
      if (tmp14 !== channel(dependencyMap[12]).AutomodInteractionCallbackTypeEmbedKeys.MODAL) {
        if (tmp13 !== channel(dependencyMap[13]).AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
          const intl6 = channel(dependencyMap[10]).intl;
          const obj1 = { applicationName: tmp15, channelName, channelHook: tmp19, integrationOwnerHook };
          let formatResult1 = intl6.format(channel(dependencyMap[10]).t.AXQufN, obj1);
        } else {
          const intl5 = channel(dependencyMap[10]).intl;
          const obj2 = { applicationName: tmp15, channelName, channelHook: tmp19, integrationOwnerHook };
          formatResult1 = intl5.format(channel(dependencyMap[10]).t.s3tjMN, obj2);
        }
      }
      if (tmp13 !== channel(dependencyMap[13]).AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
        const intl8 = channel(dependencyMap[10]).intl;
        const obj3 = { applicationName: tmp15, interactionUserHook, integrationOwnerHook };
        let formatResult2 = intl8.format(channel(dependencyMap[10]).t.4xL9Sk, obj3);
      } else {
        const intl7 = channel(dependencyMap[10]).intl;
        const obj4 = { applicationName: tmp15, interactionUserHook, integrationOwnerHook };
        formatResult2 = intl7.format(channel(dependencyMap[10]).t.S3lNIT, obj4);
      }
    }
  } else {
    if ("blocked" === tmp20) {
      let bma6cs = channel(dependencyMap[10]).t.cLQrqz;
    } else {
      bma6cs = channel(dependencyMap[10]).t.bma6cs;
    }
    const intl2 = channel(dependencyMap[10]).intl;
    const obj5 = { channelName, channelHook: tmp };
    intl2.format(bma6cs, obj5);
  }
};
export const getQuarantineReasonString = function getQuarantineReasonString(quarantineType) {
  if (arg1(dependencyMap[15]).AutomodQuarantineUserMessageEmbedKeys.NICKNAME === quarantineType) {
    const intl5 = arg1(dependencyMap[10]).intl;
    return intl5.string(arg1(dependencyMap[10]).t.fkBQa/);
  } else if (arg1(dependencyMap[15]).AutomodQuarantineUserMessageEmbedKeys.USERNAME === quarantineType) {
    const intl4 = arg1(dependencyMap[10]).intl;
    return intl4.string(arg1(dependencyMap[10]).t.pJQVnr);
  } else if (arg1(dependencyMap[15]).AutomodQuarantineUserMessageEmbedKeys.GLOBAL_NAME === quarantineType) {
    const intl3 = arg1(dependencyMap[10]).intl;
    return intl3.string(arg1(dependencyMap[10]).t.V9eJ85);
  } else if (arg1(dependencyMap[15]).AutomodQuarantineUserMessageEmbedKeys.CLAN_TAG === quarantineType) {
    const intl2 = arg1(dependencyMap[10]).intl;
    return intl2.string(arg1(dependencyMap[10]).t.Rtum01);
  } else {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.pJQVnr);
  }
};
export const extractAutomodNotificationFields = function extractAutomodNotificationFields(message) {
  const tmp = getEmbedFieldFromMessage(message, arg1(dependencyMap[16]).AutomodNotificationEmbedKeys.NOTIFICATION_TYPE);
  const tmp2 = getEmbedFieldFromMessage(message, arg1(dependencyMap[16]).AutomodNotificationEmbedKeys.JOIN_ATTEMPTS);
  const tmp3 = getEmbedFieldFromMessage(message, arg1(dependencyMap[16]).AutomodNotificationEmbedKeys.RAID_DATETIME);
  const tmp4 = getEmbedFieldFromMessage(message, arg1(dependencyMap[16]).AutomodNotificationEmbedKeys.DMS_SENT);
  const tmp5 = getEmbedFieldFromMessage(message, arg1(dependencyMap[16]).AutomodNotificationEmbedKeys.RAID_TYPE);
  const tmp6 = getEmbedFieldFromMessage(message, arg1(dependencyMap[16]).AutomodNotificationEmbedKeys.RESOLVED_REASON);
  const tmp7 = getEmbedFieldFromMessage(message, arg1(dependencyMap[16]).AutomodNotificationEmbedKeys.DECISION_ID);
  const tmp8 = getEmbedFieldFromMessage(message, arg1(dependencyMap[16]).AutomodNotificationEmbedKeys.SUSPICIOUS_MENTION_ACTIVITY_UNTIL);
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
    const intl5 = arg1(dependencyMap[10]).intl;
    return intl5.string(arg1(dependencyMap[10]).t.Gh3A0O);
  } else if (arg1(dependencyMap[19]).RaidResolutionType.LEGITIMATE_ACTIVITY === resolvedReason) {
    const intl4 = arg1(dependencyMap[10]).intl;
    return intl4.string(arg1(dependencyMap[10]).t.riQ+HH);
  } else if (arg1(dependencyMap[19]).RaidResolutionType.DM_SPAM === resolvedReason) {
    const intl3 = arg1(dependencyMap[10]).intl;
    return intl3.string(arg1(dependencyMap[10]).t.j5V0ij);
  } else if (arg1(dependencyMap[19]).RaidResolutionType.JOIN_RAID === resolvedReason) {
    const intl2 = arg1(dependencyMap[10]).intl;
    return intl2.string(arg1(dependencyMap[10]).t.qhaRbG);
  } else {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.GPg6JM);
  }
};
export const getUserIdOfAutomodAction = function getUserIdOfAutomodAction(message) {
  return getEmbedFieldFromMessage(message, arg1(dependencyMap[16]).AutomodNotificationEmbedKeys.ACTION_BY_USER_ID);
};
