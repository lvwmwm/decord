// Module ID: 8320
// Function ID: 65864
// Name: generateHydrationId
// Dependencies: [5, 6758, 1352, 1348, 1838, 4349, 4142, 8306, 8319, 653, 7087, 8321, 4351, 21, 566, 8322, 8326, 7810, 8327, 8328, 1212, 5069, 1934, 653, 2]
// Exports: compareGravityUnreadIds, contentTypeToText, createGravityMessageFromServer, customScoreToNumber, customStatusToContentInventoryEntry, determineContentType, getViewableFeedItemsArray, hydrateNextPage, icymiEnabled, isChannelCustomScoreEligible, isGuildItem, isItemNSFW, isItemUnreadInChannel, itemToType, numberToCustomScore, regenerateFeedAndClearReadStates, useGravityMessage, useGravityMessageItem, useICYMIMessage

// Module 8320 (generateHydrationId)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { ThreadChannelRecord } from "_callSuper";
import closure_6 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_12;
let closure_13;
const require = arg1;
function generateHydrationId(startingIndex, endingIndex) {
  return "hydration-" + startingIndex + "-" + endingIndex;
}
function hydrateItems(items, arg1, ICYMI_PAGE_SIZE) {
  return _hydrateItems(...arguments);
}
function _hydrateItems() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _hydrateNextPage() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _regenerateFeedAndClearReadStates() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ ChannelTypes: closure_12, GuildNSFWContentLevel: closure_13 } = ME);
let obj = { UNKNOWN: 0, [0]: "UNKNOWN", DEFAULT: 1, [1]: "DEFAULT", MORE: 2, [2]: "MORE", LESS: 3, [3]: "LESS", MUTED: 4, [4]: "MUTED" };
let result = require("_callSuper").fileFinishedImporting("modules/icymi/ICYMIUtils.tsx");

export { generateHydrationId };
export const ICYMICustomScore = obj;
export const isGuildItem = function isGuildItem(type) {
  let tmp = type.type === require(7087) /* MessageEmbedTypes */.ICYMIItemTypes.MESSAGE;
  if (!tmp) {
    tmp = type.type === require(7087) /* MessageEmbedTypes */.ICYMIItemTypes.GUILD_EVENT;
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
  obj["message"] = require(4351) /* createMinimalMessageRecord */.createMessageRecord(message.message);
  if (null != message.thread_channel) {
    fromServerResult = ThreadChannelRecord.fromServer(message.thread_channel, message.guild_id);
  }
  obj["threadChannel"] = fromServerResult;
  return obj;
};
export const isItemUnreadInChannel = function isItemUnreadInChannel(channel_id, message_id) {
  trackedAckMessageId = trackedAckMessageId.getTrackedAckMessageId(channel_id);
  let tmp2 = null == trackedAckMessageId;
  if (!tmp2) {
    const obj = importDefault(21);
    const extractTimestampResult = importDefault(21).extractTimestamp(message_id);
    tmp2 = extractTimestampResult > importDefault(21).extractTimestamp(trackedAckMessageId);
    const obj2 = importDefault(21);
  }
  return tmp2;
};
export const useGravityMessage = function useGravityMessage(message) {
  const _require = message;
  const items = [closure_8, closure_10];
  const items1 = [message];
  return _require(566).useStateFromStores(items, () => {
    message = outer1_8.getMessage(message.getChannelId(), message.id);
    if (null == message) {
      const hydratedItem = outer1_10.getHydratedItem(message.id);
      let message1;
      if (null != hydratedItem) {
        message1 = hydratedItem.message;
      }
      message = message1;
    }
    return message;
  }, items1);
};
export const useGravityMessageItem = function useGravityMessageItem(id) {
  const _require = id;
  const items = [closure_10];
  const items1 = [id.id];
  return _require(566).useStateFromStores(items, () => outer1_10.getHydratedItem(id.id), items1);
};
export const useICYMIMessage = function useICYMIMessage(id, before_message_id) {
  const _require = id;
  let closure_1 = before_message_id;
  const items = [closure_8, closure_10];
  const items1 = [id, before_message_id];
  return _require(566).useStateFromStores(items, () => {
    let tmp = null;
    if (null != closure_1) {
      let message = outer1_8.getMessage(closure_0, closure_1);
      if (null == message) {
        const hydratedItem = outer1_10.getHydratedItem(closure_1);
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
  return require(8322) /* apexExperiment */.getICYMIEnabled(customScores);
};
export const customStatusToContentInventoryEntry = function customStatusToContentInventoryEntry(data) {
  let obj = { id: data.id, type: require(7087) /* MessageEmbedTypes */.ICYMIItemTypes.CUSTOM_STATUS };
  obj = { id: data.id, author_id: data.data.user_id, author_type: require(8326) /* ContentInventoryAuthorType */.ContentInventoryAuthorType.USER, traits: [], participants: [], content_type: require(7810) /* ContentInventoryEntryType */.ContentInventoryEntryType.CUSTOM_STATUS };
  obj = { type: "custom_status_extra" };
  const text = data.data.text;
  let str = "";
  if (null != text) {
    str = text;
  }
  obj.status = str;
  obj.emoji_id = data.data.emoji_id;
  obj.emoji_name = data.data.emoji_name;
  obj.emoji_animated = data.data.emoji_animated;
  obj.attachments = data.data.attachments;
  obj.extra = obj;
  obj.activity = obj;
  ({ score: obj.score, score_components: obj.score_components } = data);
  return obj;
};
export const compareGravityUnreadIds = function compareGravityUnreadIds(id, id2) {
  let readTimestamp = store2.getReadTimestamp(id);
  if (null == readTimestamp) {
    let tmp2;
    if (null != arg2) {
      tmp2 = arg2[id];
    }
    readTimestamp = tmp2;
  }
  let readTimestamp1 = store2.getReadTimestamp(id2);
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
  let id = null;
  let diff = viewableItems.length - 1;
  let tmp2 = null;
  if (diff >= 0) {
    while (true) {
      tmp3 = viewableItems[diff];
      if (null != tmp3) {
        let tmp4 = id;
        let tmp5 = dependencyMap;
        let NON_ELIGIBLE_SCROLL_ITEMS = id(8327).NON_ELIGIBLE_SCROLL_ITEMS;
        if (!NON_ELIGIBLE_SCROLL_ITEMS.has(tmp3.item.data.kind)) {
          break;
        }
      }
      diff = diff - 1;
      tmp2 = null;
    }
    id = tmp3.item.id;
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
    guildScheduledEvent = guildScheduledEvent.getGuildScheduledEvent(data.data.eventId);
    if (null != guildScheduledEvent) {
      let guild_id = guildScheduledEvent.guild_id;
    }
  } else {
    return false;
  }
  channel = channel.getChannel(id);
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
      if (item.data.content.content_type === require(7810) /* ContentInventoryEntryType */.ContentInventoryEntryType.CUSTOM_STATUS) {
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
    return require(7087) /* MessageEmbedTypes */.ContentType.ANNOUNCEMENT;
  } else if (channel.type === constants.GUILD_FORUM) {
    return require(7087) /* MessageEmbedTypes */.ContentType.FORUM_POST;
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
          return require(7087) /* MessageEmbedTypes */.ContentType.POPULAR_MESSAGE;
        }
      }
    }
    if (message.attachments.length > 0) {
      if (obj.isValidImageAttachment(message.attachments[0])) {
        let IMAGE = tmp7(7087).ContentType.IMAGE;
      } else {
        const result = tmp7(8328).isValidVideoAttachment(message.attachments[0]);
        const ContentType = require(7087) /* MessageEmbedTypes */.ContentType;
        IMAGE = result ? ContentType.VIDEO : ContentType.FILE;
        const tmp7Result = tmp7(8328);
      }
      obj = require(8328) /* isValidImageAttachment */;
    } else {
      if (message.embeds.length > 0) {
        let INTERESTING = require(7087) /* MessageEmbedTypes */.ContentType.LINK;
      } else {
        INTERESTING = require(7087) /* MessageEmbedTypes */.ContentType.INTERESTING;
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
  if (require(7087) /* MessageEmbedTypes */.ContentType.POPULAR_MESSAGE === arg0) {
    const intl10 = require(1212) /* getSystemLocale */.intl;
    return intl10.string(require(1212) /* getSystemLocale */.t["H/2+cl"]);
  } else if (require(7087) /* MessageEmbedTypes */.ContentType.IMAGE === arg0) {
    const intl9 = require(1212) /* getSystemLocale */.intl;
    return intl9.string(require(1212) /* getSystemLocale */.t.gmOWAo);
  } else if (require(7087) /* MessageEmbedTypes */.ContentType.VIDEO === arg0) {
    const intl8 = require(1212) /* getSystemLocale */.intl;
    return intl8.string(require(1212) /* getSystemLocale */.t.swhcPM);
  } else if (require(7087) /* MessageEmbedTypes */.ContentType.LINK === arg0) {
    const intl7 = require(1212) /* getSystemLocale */.intl;
    return intl7.string(require(1212) /* getSystemLocale */.t.oj5yvD);
  } else if (require(7087) /* MessageEmbedTypes */.ContentType.THREAD === arg0) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    return intl6.string(require(1212) /* getSystemLocale */.t.DwLrLK);
  } else if (require(7087) /* MessageEmbedTypes */.ContentType.FORUM_POST === arg0) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t["Q9/6BS"]);
  } else if (require(7087) /* MessageEmbedTypes */.ContentType.CHANGED_STATUS === arg0) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t.TGrUmi);
  } else if (require(7087) /* MessageEmbedTypes */.ContentType.INTERESTING === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t["TahE/i"]);
  } else if (require(7087) /* MessageEmbedTypes */.ContentType.ANNOUNCEMENT === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const string = intl2.string;
    const t = require(1212) /* getSystemLocale */.t;
    if (flag) {
      let stringResult = string(t.E0MW8I);
    } else {
      stringResult = string(t["2ih63V"]);
    }
    return stringResult;
  } else if (require(7087) /* MessageEmbedTypes */.ContentType.FILE === arg0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.pYrnTY);
  }
};
export const regenerateFeedAndClearReadStates = function regenerateFeedAndClearReadStates(ACK_GRAVITY_REGENERATE_FEED_AND_CLEAR_READ_STATES_BUTTON) {
  return _regenerateFeedAndClearReadStates(...arguments);
};
