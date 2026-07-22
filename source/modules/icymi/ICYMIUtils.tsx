// Module ID: 8314
// Function ID: 65827
// Name: generateHydrationId
// Dependencies: []
// Exports: compareGravityUnreadIds, contentTypeToText, createGravityMessageFromServer, customScoreToNumber, customStatusToContentInventoryEntry, determineContentType, getViewableFeedItemsArray, hydrateNextPage, icymiEnabled, isChannelCustomScoreEligible, isGuildItem, isItemNSFW, isItemUnreadInChannel, itemToType, numberToCustomScore, regenerateFeedAndClearReadStates, useGravityMessage, useGravityMessageItem, useICYMIMessage

// Module 8314 (generateHydrationId)
function generateHydrationId(startingIndex, endingIndex) {
  return "hydration-" + startingIndex + "-" + endingIndex;
}
function hydrateItems(items, arg1, ICYMI_PAGE_SIZE) {
  return _hydrateItems(...arguments);
}
function _hydrateItems() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _hydrateItems = obj;
  return obj(...arguments);
}
function _hydrateNextPage() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _hydrateNextPage = obj;
  return obj(...arguments);
}
function _regenerateFeedAndClearReadStates() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _regenerateFeedAndClearReadStates = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const ThreadChannelRecord = arg1(dependencyMap[2]).ThreadChannelRecord;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
({ ChannelTypes: closure_12, GuildNSFWContentLevel: closure_13 } = arg1(dependencyMap[9]));
const obj = { UNKNOWN: 0, [0]: "UNKNOWN", DEFAULT: 1, [1]: "DEFAULT", MORE: 2, [2]: "MORE", LESS: 3, [3]: "LESS", MUTED: 4, [4]: "MUTED" };
const tmp2 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/icymi/ICYMIUtils.tsx");

export { generateHydrationId };
export const ICYMICustomScore = obj;
export const isGuildItem = function isGuildItem(type) {
  let tmp = type.type === arg1(dependencyMap[10]).ICYMIItemTypes.MESSAGE;
  if (!tmp) {
    tmp = type.type === arg1(dependencyMap[10]).ICYMIItemTypes.GUILD_EVENT;
  }
  return tmp;
};
export const isChannelCustomScoreEligible = function isChannelCustomScoreEligible(stateFromStores) {
  let tmp = stateFromStores.type === constants.GUILD_FORUM;
  if (!tmp) {
    let tmp3 = stateFromStores.type === constants.GUILD_ANNOUNCEMENT;
    if (!tmp3) {
      tmp3 = stateFromStores.type === constants.GUILD_TEXT;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const numberToCustomScore = function numberToCustomScore(stateFromStores1) {
  if (stateFromStores1 < -1.5) {
    let DEFAULT = obj.MUTED;
  } else if (stateFromStores1 < 0) {
    DEFAULT = obj.LESS;
  } else if (stateFromStores1 > 0) {
    DEFAULT = obj.MORE;
  } else {
    DEFAULT = obj.DEFAULT;
  }
  return DEFAULT;
};
export const customScoreToNumber = function customScoreToNumber(DEFAULT) {
  if (obj.MORE === DEFAULT) {
    return 1;
  } else if (obj.LESS === DEFAULT) {
    return -1;
  } else if (obj.MUTED === DEFAULT) {
    return -2;
  } else {
    return 0;
  }
};
export { hydrateItems };
export const hydrateNextPage = function hydrateNextPage() {
  return _hydrateNextPage(...arguments);
};
export const createGravityMessageFromServer = function createGravityMessageFromServer(message, arg1) {
  const obj = {};
  const merged = Object.assign(arg1);
  let fromServerResult;
  obj["message"] = arg1(dependencyMap[12]).createMessageRecord(message.message);
  if (null != message.thread_channel) {
    fromServerResult = ThreadChannelRecord.fromServer(message.thread_channel, message.guild_id);
  }
  obj["threadChannel"] = fromServerResult;
  return obj;
};
export const isItemUnreadInChannel = function isItemUnreadInChannel(channel_id, message_id) {
  const trackedAckMessageId = trackedAckMessageId.getTrackedAckMessageId(channel_id);
  let tmp2 = null == trackedAckMessageId;
  if (!tmp2) {
    const obj = importDefault(dependencyMap[13]);
    const extractTimestampResult = importDefault(dependencyMap[13]).extractTimestamp(message_id);
    tmp2 = extractTimestampResult > importDefault(dependencyMap[13]).extractTimestamp(trackedAckMessageId);
    const obj2 = importDefault(dependencyMap[13]);
  }
  return tmp2;
};
export const useGravityMessage = function useGravityMessage(message) {
  const arg1 = message;
  const items = [closure_8, closure_10];
  const items1 = [message];
  return arg1(dependencyMap[14]).useStateFromStores(items, (self) => {
    let message = message.getMessage(self.getChannelId(), self.id);
    if (null == message) {
      const hydratedItem = hydratedItem.getHydratedItem(self.id);
      let message1;
      if (null != hydratedItem) {
        message1 = hydratedItem.message;
      }
      message = message1;
    }
    if (null == message) {
      message = self;
    }
    return message;
  }, items1);
};
export const useGravityMessageItem = function useGravityMessageItem(id) {
  const arg1 = id;
  const items = [closure_10];
  const items1 = [id.id];
  return arg1(dependencyMap[14]).useStateFromStores(items, () => hydratedItem.getHydratedItem(arg0.id), items1);
};
export const useICYMIMessage = function useICYMIMessage(id, before_message_id) {
  before_message_id = id;
  const importDefault = before_message_id;
  const items = [closure_8, closure_10];
  const items1 = [id, before_message_id];
  return before_message_id(dependencyMap[14]).useStateFromStores(items, () => {
    let tmp = null;
    if (null != arg1) {
      let message = message.getMessage(arg0, arg1);
      if (null == message) {
        const hydratedItem = hydratedItem.getHydratedItem(arg1);
        let message1;
        if (null != hydratedItem) {
          message1 = hydratedItem.message;
        }
        message = message1;
      }
      tmp = message;
    }
    return tmp;
  }, items1);
};
export const icymiEnabled = function icymiEnabled(customScores) {
  return arg1(dependencyMap[15]).getICYMIEnabled(customScores);
};
export const customStatusToContentInventoryEntry = function customStatusToContentInventoryEntry(notificationItem) {
  let obj = { id: notificationItem.id, type: arg1(dependencyMap[10]).ICYMIItemTypes.CUSTOM_STATUS };
  obj = { id: notificationItem.id, author_id: notificationItem.data.user_id, author_type: arg1(dependencyMap[16]).ContentInventoryAuthorType.USER, traits: [], participants: [], content_type: arg1(dependencyMap[17]).ContentInventoryEntryType.CUSTOM_STATUS };
  obj = { type: "custom_status_extra" };
  const text = notificationItem.data.text;
  let str = "";
  if (null != text) {
    str = text;
  }
  obj.status = str;
  obj.emoji_id = notificationItem.data.emoji_id;
  obj.emoji_name = notificationItem.data.emoji_name;
  obj.emoji_animated = notificationItem.data.emoji_animated;
  obj.attachments = notificationItem.data.attachments;
  obj.extra = obj;
  obj.activity = obj;
  ({ score: obj.score, score_components: obj.score_components } = notificationItem);
  return obj;
};
export const compareGravityUnreadIds = function compareGravityUnreadIds(id, id2) {
  let readTimestamp = store.getReadTimestamp(id);
  if (null == readTimestamp) {
    let tmp2;
    if (null != arg2) {
      tmp2 = arg2[id];
    }
    readTimestamp = tmp2;
  }
  let readTimestamp1 = store.getReadTimestamp(id2);
  if (null == readTimestamp1) {
    let tmp4;
    if (null != arg2) {
      tmp4 = arg2[id2];
    }
    readTimestamp1 = tmp4;
  }
  if (null != readTimestamp) {
    let num2 = -1;
    if (null != readTimestamp) {
      let num3 = 1;
      if (null != readTimestamp1) {
        num3 = readTimestamp1 - readTimestamp;
      }
      num2 = num3;
    }
    let num = num2;
  } else {
    num = 0;
  }
  return num;
};
export const getViewableFeedItemsArray = function getViewableFeedItemsArray(viewableItems) {
  let tmp3;
  const items = [...closure_10.getUnreadDisplayItems(), ...closure_10.getReadDisplayItems()];
  let arg1 = null;
  let diff = viewableItems.length - 1;
  let tmp2 = null;
  if (diff >= 0) {
    while (true) {
      tmp3 = viewableItems[diff];
      if (null != tmp3) {
        let tmp4 = arg1;
        let tmp5 = dependencyMap;
        let NON_ELIGIBLE_SCROLL_ITEMS = arg1(dependencyMap[18]).NON_ELIGIBLE_SCROLL_ITEMS;
        if (!NON_ELIGIBLE_SCROLL_ITEMS.has(tmp3.item.data.kind)) {
          break;
        }
      }
      diff = diff - 1;
      tmp2 = null;
    }
    const id = tmp3.item.id;
    arg1 = id;
    tmp2 = id;
  }
  if (null == tmp2) {
    return [];
  } else {
    const findIndexResult = items.findIndex((id) => id.id === id);
    if (findIndexResult < 0) {
      let items1 = [];
    } else {
      items1 = items.slice(0, findIndexResult + 1);
    }
    return items1;
  }
};
export const isItemNSFW = function isItemNSFW(data) {
  const kind = data.data.kind;
  if ("message" === kind) {
    let id = data.data.message.channel_id;
  } else if ("forumThread" === kind) {
    id = data.data.threadChannel.id;
  } else if ("guildEvent" === kind) {
    const guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(data.data.eventId);
    if (null != guildScheduledEvent) {
      let guild_id = guildScheduledEvent.guild_id;
    }
  } else {
    return false;
  }
  const channel = channel.getChannel(id);
  if (null != channel) {
    if (channel.nsfw) {
      return true;
    }
  }
  guild_id = undefined;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  let guild = null;
  if (null != guild_id) {
    guild = guild.getGuild(guild_id);
  }
  let nsfwLevel;
  if (null != guild) {
    nsfwLevel = guild.nsfwLevel;
  }
  let tmp9 = nsfwLevel === constants2.EXPLICIT;
  if (!tmp9) {
    let nsfwLevel1;
    if (null != guild) {
      nsfwLevel1 = guild.nsfwLevel;
    }
    tmp9 = nsfwLevel1 === constants2.AGE_RESTRICTED;
  }
  return tmp9;
};
export const itemToType = function itemToType(item) {
  const kind = item.data.kind;
  if ("end" === kind) {
    return "end";
  } else if ("loading" === kind) {
    return "loading";
  } else if ("bottomLoading" === kind) {
    return "bottomLoading";
  } else {
    let str11 = "message";
    if ("message" === kind) {
      let str10 = "announcement";
      if (item.channelType !== constants.GUILD_ANNOUNCEMENT) {
        const messageContext = item.data.messageContext;
        let prop;
        if (null != messageContext) {
          prop = messageContext.external_content_application_id;
        }
        if (null != prop) {
          str11 = "game_message";
        }
        str10 = str11;
      }
      return str10;
    } else if ("guildEvent" === kind) {
      return "guild_event";
    } else if ("contentInventory" === kind) {
      let str8 = "hotwheels_gaming_activity";
      if (item.data.content.content_type === arg1(dependencyMap[17]).ContentInventoryEntryType.CUSTOM_STATUS) {
        str8 = "hotwheels_custom_status";
      }
      return str8;
    } else if ("recommendedGuilds" === kind) {
      return "recommended_guilds";
    } else if ("forumThread" === kind) {
      return "forum_thread";
    } else if ("icymiHeader" === kind) {
      return "icymi_header";
    } else {
      return "unknown";
    }
  }
};
export const determineContentType = function determineContentType(channel, message) {
  if (channel.type === constants.GUILD_ANNOUNCEMENT) {
    return message(dependencyMap[10]).ContentType.ANNOUNCEMENT;
  } else if (channel.type === constants.GUILD_FORUM) {
    return message(dependencyMap[10]).ContentType.FORUM_POST;
  } else {
    if (null != message.reactions) {
      const reactions = message.reactions;
      const mapped = reactions.map((count_details) => {
        let num = 0;
        if (null != count_details.count_details) {
          const burst = count_details.count_details.burst;
          let num2 = 0;
          if (null != burst) {
            num2 = burst;
          }
          const normal = count_details.count_details.normal;
          let num3 = 0;
          if (null != normal) {
            num3 = normal;
          }
          num = num2 + num3;
        }
        return num;
      });
      if (0 !== mapped.length) {
        if (mapped.reduce((arg0, arg1) => arg0 + arg1) > 10) {
          return message(dependencyMap[10]).ContentType.POPULAR_MESSAGE;
        }
      }
    }
    if (message.attachments.length > 0) {
      if (obj.isValidImageAttachment(message.attachments[0])) {
        let IMAGE = tmp7(tmp8[10]).ContentType.IMAGE;
      } else {
        const result = tmp7(tmp8[19]).isValidVideoAttachment(message.attachments[0]);
        const ContentType = message(dependencyMap[10]).ContentType;
        IMAGE = result ? ContentType.VIDEO : ContentType.FILE;
        const tmp7Result = tmp7(tmp8[19]);
      }
      const obj = message(dependencyMap[19]);
    } else {
      if (message.embeds.length > 0) {
        let INTERESTING = message(dependencyMap[10]).ContentType.LINK;
      } else {
        INTERESTING = message(dependencyMap[10]).ContentType.INTERESTING;
      }
      return INTERESTING;
    }
  }
};
export const contentTypeToText = function contentTypeToText(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (arg1(dependencyMap[10]).ContentType.POPULAR_MESSAGE === arg0) {
    const intl10 = arg1(dependencyMap[20]).intl;
    return intl10.string(arg1(dependencyMap[20]).t.H/2+cl);
  } else if (arg1(dependencyMap[10]).ContentType.IMAGE === arg0) {
    const intl9 = arg1(dependencyMap[20]).intl;
    return intl9.string(arg1(dependencyMap[20]).t.gmOWAo);
  } else if (arg1(dependencyMap[10]).ContentType.VIDEO === arg0) {
    const intl8 = arg1(dependencyMap[20]).intl;
    return intl8.string(arg1(dependencyMap[20]).t.swhcPM);
  } else if (arg1(dependencyMap[10]).ContentType.LINK === arg0) {
    const intl7 = arg1(dependencyMap[20]).intl;
    return intl7.string(arg1(dependencyMap[20]).t.oj5yvD);
  } else if (arg1(dependencyMap[10]).ContentType.THREAD === arg0) {
    const intl6 = arg1(dependencyMap[20]).intl;
    return intl6.string(arg1(dependencyMap[20]).t.DwLrLK);
  } else if (arg1(dependencyMap[10]).ContentType.FORUM_POST === arg0) {
    const intl5 = arg1(dependencyMap[20]).intl;
    return intl5.string(arg1(dependencyMap[20]).t.Q9/6BS);
  } else if (arg1(dependencyMap[10]).ContentType.CHANGED_STATUS === arg0) {
    const intl4 = arg1(dependencyMap[20]).intl;
    return intl4.string(arg1(dependencyMap[20]).t.TGrUmi);
  } else if (arg1(dependencyMap[10]).ContentType.INTERESTING === arg0) {
    const intl3 = arg1(dependencyMap[20]).intl;
    return intl3.string(arg1(dependencyMap[20]).t.TahE/i);
  } else if (arg1(dependencyMap[10]).ContentType.ANNOUNCEMENT === arg0) {
    const intl2 = arg1(dependencyMap[20]).intl;
    const string = intl2.string;
    const t = arg1(dependencyMap[20]).t;
    if (flag) {
      let stringResult = string(t.E0MW8I);
    } else {
      stringResult = string(t.2ih63V);
    }
    return stringResult;
  } else if (arg1(dependencyMap[10]).ContentType.FILE === arg0) {
    const intl = arg1(dependencyMap[20]).intl;
    return intl.string(arg1(dependencyMap[20]).t.pYrnTY);
  }
};
export const regenerateFeedAndClearReadStates = function regenerateFeedAndClearReadStates(ACK_GRAVITY_REGENERATE_FEED_AND_CLEAR_READ_STATES_BUTTON) {
  return _regenerateFeedAndClearReadStates(...arguments);
};
