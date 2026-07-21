// Module ID: 4347
// Function ID: 38546
// Name: createMinimalMessageRecord
// Dependencies: [31, 1917, 1849, 4358, 566, 4360, 2, 31, 4120, 566, 4359, 2, 1348, 1917, 1838, 2, 5, 57]
// Exports: canEditMessageWithStickers, hasEphemeralAppearance, updateMessageRecord, updateServerMessage

// Module 4347 (createMinimalMessageRecord)
import module_31 from "module_31";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";
import useDisplayNameStylesEnabled from "useDisplayNameStylesEnabled";
import initialize from "initialize";
import context from "context";
import result2 from "result2";
import _slicedToArray from "_slicedToArray";

function createMinimalMessageRecord(timestamp) {
  let tmp = closure_5;
  const obj = {};
  const merged = Object.assign(timestamp);
  obj["timestamp"] = new Date(timestamp.timestamp);
  let date1 = null;
  if (null != timestamp.edited_timestamp) {
    const _Date = Date;
    date1 = new Date(timestamp.edited_timestamp);
  }
  obj["editedTimestamp"] = date1;
  let attachments = timestamp.attachments;
  if (null == attachments) {
    attachments = [];
  }
  obj["attachments"] = attachments;
  obj["embeds"] = transformEmbeds(timestamp);
  const date = new Date(timestamp.timestamp);
  let components = timestamp.components;
  if (null == components) {
    components = [];
  }
  obj["components"] = arg1(dependencyMap[7]).transformComponents(components);
  const NON_PARSED = constants3.NON_PARSED;
  if (NON_PARSED.has(timestamp.type)) {
    let items = [];
  } else {
    items = importDefault(dependencyMap[8])(timestamp.content);
  }
  obj["codedLinks"] = items;
  tmp = new tmp(obj);
  return tmp;
}
function createMessageRecord(message, message) {
  let interactionData;
  let reactions;
  let obj = message;
  if (message === undefined) {
    obj = {};
  }
  ({ reactions, interactionData } = obj);
  let obj1 = createMinimalMessageRecord(message);
  const mentions = message.mentions;
  let mapped;
  if (null != mentions) {
    mapped = mentions.map((id) => id.id);
  }
  if (null == mapped) {
    mapped = [];
  }
  let mention_roles = message.mention_roles;
  if (null == mention_roles) {
    mention_roles = [];
  }
  let mention_channels = message.mention_channels;
  if (null == mention_channels) {
    mention_channels = [];
  }
  let mention_games = message.mention_games;
  if (null == mention_games) {
    mention_games = [];
  }
  if (null == message.author) {
    let user = importDefaultResult;
  } else if (null != message.webhook_id) {
    const prototype2 = importDefaultResult.prototype;
    user = new importDefaultResult(message.author);
  } else {
    user = user.getUser(message.author.id);
    if (null == user) {
      const prototype = importDefaultResult.prototype;
      user = new importDefaultResult(message.author);
    }
  }
  obj = { channel_id: message.channel_id, author: user };
  const messageAuthor = message(dependencyMap[9]).getMessageAuthor(obj);
  let gift_info;
  if (null != message) {
    gift_info = message.gift_info;
  }
  let fromServer = null;
  if (null != message.interaction) {
    fromServer = module_31.createFromServer(message.interaction);
  }
  if (message.type === constants2.THREAD_STARTER_MESSAGE) {
    const referenced_message = message.referenced_message;
    let id;
    if (null != referenced_message) {
      const author = referenced_message.author;
      if (null != author) {
        id = author.id;
      }
    }
  }
  let str = message.content;
  let tmp15;
  if (message.type === constants2.PREMIUM_REFERRAL) {
    let content;
    if (obj5.isProbablyAValidSnowflake(message.content)) {
      content = message.content;
    }
    str = "";
    tmp15 = content;
    const obj5 = importDefault(dependencyMap[10]);
  }
  let tmp19;
  if (message.type === constants2.PREMIUM_GROUP_INVITE) {
    let content1;
    if (obj6.isProbablyAValidSnowflake(message.content)) {
      content1 = message.content;
    }
    str = "";
    tmp19 = content1;
    const obj6 = importDefault(dependencyMap[10]);
  }
  let tmp23 = closure_6;
  obj = {};
  const merged = Object.assign(message);
  const merged1 = Object.assign(messageAuthor);
  const merged2 = Object.assign(obj1.toJS());
  obj["author"] = user;
  obj["webhookId"] = message.webhook_id;
  let isBlockedForMessageResult = initialize.isBlockedForMessage(message);
  if (!isBlockedForMessageResult) {
    let isBlockedResult = null != tmp13;
    if (isBlockedResult) {
      isBlockedResult = initialize.isBlocked(tmp13);
    }
    isBlockedForMessageResult = isBlockedResult;
  }
  obj["blocked"] = isBlockedForMessageResult;
  let isIgnoredForMessageResult = initialize.isIgnoredForMessage(message);
  if (!isIgnoredForMessageResult) {
    let isIgnoredResult = null != tmp13;
    if (isIgnoredResult) {
      isIgnoredResult = initialize.isIgnored(tmp13);
    }
    isIgnoredForMessageResult = isIgnoredResult;
  }
  obj["ignored"] = isIgnoredForMessageResult;
  obj["mentionEveryone"] = message.mention_everyone;
  obj["mentions"] = mapped;
  obj["mentionRoles"] = mention_roles;
  obj["mentionChannels"] = mention_channels;
  obj["mentionGames"] = mention_games;
  obj["messageReference"] = message.message_reference;
  const obj3 = message(dependencyMap[9]);
  obj1 = { userId: store.getId(), channelId: message.channel_id, mentionEveryone: tmp33 };
  const mention_everyone = message.mention_everyone;
  obj1.mentionUsers = mapped;
  obj1.mentionRoles = mention_roles;
  obj["mentioned"] = message(dependencyMap[11]).isMentioned(obj1);
  const obj8 = message(dependencyMap[11]);
  const tmp33 = null != mention_everyone && mention_everyone;
  const obj10 = message(dependencyMap[12]);
  const isGiftCodeEmbedResult = message(dependencyMap[12]).isGiftCodeEmbed(message);
  const findGiftCodes = message(dependencyMap[12]).findGiftCodes;
  if (isGiftCodeEmbedResult) {
    let url;
    if (null != message) {
      url = message.embeds[0].url;
    }
    let findGiftCodesResult = findGiftCodes(url);
  } else {
    findGiftCodesResult = findGiftCodes(message.content);
  }
  obj["giftCodes"] = findGiftCodesResult;
  obj["content"] = str;
  obj["referralTrialOfferId"] = tmp15;
  obj["premiumGroupInviteId"] = tmp19;
  obj["call"] = transformMessageCall(message.call, obj1.timestamp);
  obj["messageSnapshots"] = transformMessageSnapshots(message);
  if (null == reactions) {
    reactions = message.reactions;
  }
  obj["reactions"] = transformReactions(reactions, message.poll);
  obj["interaction"] = fromServer;
  if (null == interactionData) {
    interactionData = message.interaction_data;
  }
  obj["interactionData"] = interactionData;
  obj["interactionMetadata"] = message.interaction_metadata;
  obj["roleSubscriptionData"] = message.role_subscription_data;
  obj["purchaseNotification"] = message.purchase_notification;
  let tmp39;
  if (null != message.poll) {
    tmp39 = importDefault(dependencyMap[13])(message.poll);
  }
  obj["poll"] = tmp39;
  obj["sharedClientTheme"] = message.shared_client_theme;
  let tmp42;
  if (null != gift_info) {
    tmp42 = gift_info;
  }
  obj["giftInfo"] = tmp42;
  obj["giftingPrompt"] = message.gifting_prompt;
  obj["boostingPrompt"] = message.boosting_prompt;
  tmp23 = new tmp23(obj);
  return tmp23;
}
function transformMessageCall(call, timestamp) {
  if (null != call) {
    let tmp = null;
    if (null != call.ended_timestamp) {
      const _Date = Date;
      const date = new Date(call.ended_timestamp);
      tmp = importDefault(dependencyMap[14])(date);
      const tmp4 = importDefault(dependencyMap[14]);
    }
    let durationResult = null;
    if (null != tmp) {
      let obj = importDefault(dependencyMap[14]);
      durationResult = obj.duration(tmp.diff(timestamp));
    }
    obj = { participants: call.participants, endedTimestamp: tmp, duration: durationResult };
    return obj;
  } else {
    return null;
  }
}
function transformEmbeds(embeds) {
  const arg1 = embeds;
  if (null == embeds.embeds) {
    return [];
  } else {
    embeds = embeds.embeds;
    const mapped = embeds.map((self) => self(closure_2[15]).sanitizeEmbed(self.channel_id, self.id, self));
    return arg1(dependencyMap[15]).mergeEmbedsOnURL(mapped);
  }
}
function transformReactions(arg0, results) {
  let items = arg0;
  if (null == arg0) {
    results = undefined;
    if (null != results) {
      results = results.results;
    }
    if (null == results) {
      return [];
    }
  }
  let mapped;
  if (null != results) {
    results = results.results;
    if (null != results) {
      const answer_counts = results.answer_counts;
      mapped = answer_counts.map((me_vote) => {
        let obj = { count_details: obj, me_vote: me_vote.me_voted };
        obj = { vote: me_vote.count };
        obj = { id: str.toString() };
        obj.emoji = obj;
        obj.me = false;
        obj.me_burst = false;
        obj.count = me_vote.count;
        obj.burst_count = 0;
        return obj;
      });
    }
  }
  if (null == items) {
    items = [];
  }
  const items1 = [...items];
  if (null == mapped) {
    mapped = [];
  }
  HermesBuiltin.arraySpread(mapped, tmp2);
  return items1.map((arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    let count_details;
    if (null != obj) {
      count_details = obj.count_details;
    }
    if (null != count_details) {
      const burst = obj.count_details.burst;
      let num = 0;
      if (null != burst) {
        num = burst;
      }
      obj.burst_count = num;
      const normal = obj.count_details.normal;
      let num2 = 0;
      if (null != normal) {
        num2 = normal;
      }
      obj.count = num2;
    }
    if (obj.count < 0) {
      obj.count = 0;
    }
    if (obj.burst_count < 0) {
      obj.burst_count = 0;
    }
    return obj;
  });
}
function transformMessageSnapshots(message_snapshots) {
  if (null == message_snapshots.message_snapshots) {
    let items = [];
  } else {
    message_snapshots = message_snapshots.message_snapshots;
    items = message_snapshots.map((message) => {
      const obj = { message: callback(message.message), moderator_report: message.moderator_report };
      return new closure_4({ message: callback(message.message), moderator_report: message.moderator_report });
    });
  }
  return items;
}
({ MessageSnapshotRecord: closure_4, MinimalMessageRecord: closure_5 } = _isNativeReflectConstruct);
({ MessageFlags: closure_11, MessageTypes: closure_12, MessageTypesSets: closure_13 } = result2);
importDefaultResult = new importDefaultResult({});
const result = _slicedToArray.fileFinishedImporting("modules/messages/MessageRecordUtils.tsx");

export { createMessageRecord };
export const updateServerMessage = function updateServerMessage(message, message2) {
  if (null != message2.edited_timestamp) {
    let obj = {};
    const merged = Object.assign(message2);
    obj["reactions"] = message.reactions;
    obj["interaction_data"] = message.interaction_data;
  } else {
    obj = {};
    const merged1 = Object.assign(message);
    const merged2 = Object.assign(message2);
  }
  return obj;
};
export const updateMessageRecord = function updateMessageRecord(message, message2) {
  if (null != message2.edited_timestamp) {
    let obj = {};
    ({ reactions: obj20.reactions, interactionData: obj20.interactionData } = message);
    return createMessageRecord(message2, obj);
  } else {
    let result = message;
    if (null != message2.call) {
      result = message.set("call", transformMessageCall(message2.call, message.timestamp));
    }
    let result1 = result;
    if (null != message2.attachments) {
      result1 = result.set("attachments", message2.attachments);
    }
    let result2 = result1;
    if (null != message2.application) {
      result2 = result1.set("application", message2.application);
    }
    let result3 = result2;
    if (null != message2.activity) {
      result3 = result2.set("activity", message2.activity);
    }
    let tmp2 = null != message2.content;
    if (tmp2) {
      tmp2 = "" !== message2.content;
    }
    let result4 = result3;
    if (tmp2) {
      result4 = result3.set("content", message2.content);
    }
    let result5 = result4;
    if (null != message2.embeds) {
      result5 = result4.set("embeds", transformEmbeds(message2));
    }
    let result6 = result5;
    if (null != message2.message_snapshots) {
      result6 = result5.set("messageSnapshots", transformMessageSnapshots(message2));
    }
    let result7 = result6;
    if (message2.pinned !== result6.pinned) {
      result7 = result6.set("pinned", message2.pinned);
    }
    let result8 = result7;
    if (tmp5) {
      const prototype = importDefaultResult.prototype;
      const tmp9 = new importDefaultResult(message2.author);
      result8 = result7.set("author", tmp9);
    }
    let result9 = result8;
    if (tmp11) {
      result9 = result8.set("flags", message2.flags);
    }
    let result10 = result9;
    if (null != message2.components) {
      result10 = result9.set("components", message2(dependencyMap[7]).transformComponents(message2.components));
      const obj12 = message2(dependencyMap[7]);
    }
    let result11 = result10;
    if (null != message2.role_subscription_data) {
      result11 = result10.set("roleSubscriptionData", message2.role_subscription_data);
    }
    let result12 = result11;
    if (null != message2.reactions) {
      let reactions = message.reactions;
      if (null == reactions) {
        reactions = message2.reactions;
      }
      result12 = result11.set("reactions", transformReactions(reactions));
      const tmp14 = transformReactions;
    }
    let result13 = result12;
    if (null != message2.poll) {
      result13 = result12.set("poll", importDefault(dependencyMap[13])(message2.poll));
    }
    let result14 = result13;
    let flag = false;
    if (null != message2.mentions) {
      const mentions = message2.mentions;
      result14 = result13.set("mentions", mentions.map((id) => id.id));
      flag = true;
    }
    let result15 = result14;
    if (null != message2.mention_everyone) {
      result15 = result14.set("mentionEveryone", message2.mention_everyone);
      flag = true;
    }
    let result16 = result15;
    if (null != message2.mention_roles) {
      result16 = result15.set("mentionRoles", message2.mention_roles);
      flag = true;
    }
    let result17 = result16;
    if (flag) {
      obj = { message: result16, userId: store.getId() };
      result17 = result16.set("mentioned", importDefault(dependencyMap[11])(obj));
      const tmp20 = importDefault(dependencyMap[11]);
    }
    return result17;
  }
};
export const canEditMessageWithStickers = function canEditMessageWithStickers(content) {
  let tmp = 0 === arg1(dependencyMap[16]).getMessageStickers(content).length;
  if (!tmp) {
    tmp = "" !== content.content;
  }
  return tmp;
};
export const hasEphemeralAppearance = function hasEphemeralAppearance(message) {
  let hasFlagResult = message.hasFlag(constants.EPHEMERAL);
  if (hasFlagResult) {
    hasFlagResult = message.type !== constants2.IN_GAME_MESSAGE_NUX;
  }
  return hasFlagResult;
};
