// Module ID: 7798
// Function ID: 7799
// Name: ICYMIUtils
// Dependencies: [5, 6946, 2049, 2045, 2067, 5056, 4851, 7783, 7797, 1074, 7796, 7799, 5058, 11, 504, 7800, 7804, 7587, 7805, 7323, 1115, 6531, 1981, 1074, 2]
// Exports: compareGravityUnreadIds, contentTypeToText, createGravityMessageFromServer, customScoreToNumber, customStatusToContentInventoryEntry, determineContentType, getViewableFeedItemsArray, hydrateNextPage, icymiEnabled, isChannelCustomScoreEligible, isGuildItem, isItemNSFW, isItemUnreadInChannel, itemToType, numberToCustomScore, regenerateFeedAndClearReadStates, useGravityMessage, useGravityMessageItem, useICYMIMessage

// Module 7798 (ICYMIUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import intl11 from "intl" /* 1115 */;
import ChannelRecord from "ChannelRecord" /* 2049 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5058 */;
import ForumPostMediaUtils from "ForumPostMediaUtils" /* 7323 */;
import ContentInventoryEntryType from "ContentInventoryEntryType" /* 7587 */;
import ICYMITypes from "ICYMITypes" /* 7796 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 7799 */;
import ICYMIExperiment from "ICYMIExperiment" /* 7800 */;
import ContentInventoryAuthorType from "ContentInventoryAuthorType" /* 7804 */;
import ICYMIItemTypes from "ICYMIItemTypes" /* 7805 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 6946 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import MessageStore from "MessageStore" /* 5056 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;
import ICYMIStore from "ICYMIStore" /* 7783 */;
import ICYMIUnreadStateStore from "ICYMIUnreadStateStore" /* 7797 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, c1, c3, c4, constants;

let closure_12;
let map1;
function generateHydrationId(startingIndex, endingIndex) {
  return "hydration-" + startingIndex + "-" + endingIndex;
}
function hydrateItems() {
  return obj(...arguments);
}
let obj = function _hydrateItems() {
  let hydratedItems;
  obj = _asyncToGenerator(async (arg0, value, arg2) => {
    let closure_0;
    let items;
    let closure_1 = value;
    let closure_2 = arg2;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const hydratedItems2 = hydratedItems.getHydratedItems();
            const substr = hydratedItems2.slice(closure_1, closure_2);
            if (0 !== substr.length) {
              let obj2 = ICYMIActionCreatorsDefault;
              const hydratedAttempt = obj2.loadHydratedAttempt(generateHydrationId(tmp23, tmp24));
              const found = substr.filter((item) => null == closure_0[item.id]);
              const found1 = found.filter((type) => type.type === closure_1_0(closure_1_2[10]).ICYMIItemTypes.MESSAGE);
              const mapped = found1.map((channel_id) => ({ channel_id: channel_id.data.channel_id, message_id: channel_id.data.message_id }));
              const mapped1 = found.map((type) => {
                if (type.type === closure_1_0(closure_1_2[10]).ICYMIItemTypes.MESSAGE) {
                  const message_context = type.data.message_context;
                  let reply_message_id;
                  if (message_context != null) {
                    reply_message_id = message_context.reply_message_id;
                  }
                  const items = [];
                  if (null != reply_message_id) {
                    obj = { channel_id: type.data.channel_id, message_id: type.data.message_context.reply_message_id };
                    items.push(obj);
                  }
                  const message_context2 = type.data.message_context;
                  let before_message_id;
                  if (message_context2 != null) {
                    before_message_id = message_context2.before_message_id;
                  }
                  if (null != before_message_id) {
                    const obj2 = { channel_id: type.data.channel_id, message_id: type.data.message_context.before_message_id };
                    items.push(obj2);
                  }
                  const message_context3 = type.data.message_context;
                  let after_message_id;
                  if (message_context3 != null) {
                    after_message_id = message_context3.after_message_id;
                  }
                  if (null != after_message_id) {
                    const obj3 = { channel_id: type.data.channel_id, message_id: type.data.message_context.after_message_id };
                    items.push(obj3);
                  }
                  return items;
                } else {
                  return [];
                }
              });
              const _Boolean = Boolean;
              const flatResult = mapped1.flat();
              const found2 = flatResult.filter(Boolean);
              const found3 = found.filter((type) => type.type === closure_1_0(closure_1_2[10]).ICYMIItemTypes.ACTIVITY);
              const mapped2 = found3.map((data) => ({ user_id: data.data.user_id, content_id: data.data.content_id }));
              const obj5 = { messageItems: items, activityItems: mapped2 };
              items = [];
              const fetchHydrated = ICYMIActionCreatorsDefault.fetchHydrated;
              HermesBuiltin.arraySpread(items, found2, HermesBuiltin.arraySpread(items, mapped, 0));
              c4 = 1;
              c3 = 1;
              const obj6 = { value: fetchHydrated(closure_1, closure_2, obj5), done: false };
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        }
        c3 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp18) {
        c3 = 3;
        throw tmp18;
      }
    }
  });
  return obj(...arguments);
};
obj = function _hydrateNextPage() {
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const unreadDisplayItems = ICYMIStore.getUnreadDisplayItems();
            const readDisplayItems = ICYMIStore.getReadDisplayItems();
            const nextIndexToHydrate = ICYMIStore.getNextIndexToHydrate();
            const items = [];
            HermesBuiltin.arraySpread(items, readDisplayItems, HermesBuiltin.arraySpread(items, unreadDisplayItems, 0));
            c1 = 1;
            c0 = 1;
            const obj4 = { value: hydrateItems(items, nextIndexToHydrate, nextIndexToHydrate + require("ICYMITypes").ICYMI_PAGE_SIZE), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp5) {
        c0 = 3;
        throw tmp5;
      }
    }
  });
  return obj(...arguments);
};
obj = function _regenerateFeedAndClearReadStates() {
  let paths;
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let closure_2;
    let obj12;
    let obj6;
    let obj9;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        const tmp4 = c3;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            constants = tmp;
            let closure_1 = tmp4;
            let ack;
            let AnalyticsObjectTypes;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: require("asyncRequire")(paths[21], paths.paths), done: false };
            return obj5;
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            ack = value.ack;
            c3 = 2;
            c4 = 1;
            const obj8 = { value: closure_130_0(closure_130_2[22])(closure_130_2[23], closure_130_2.paths), done: false };
            return obj8;
          }
        } else if (2 === tmp4) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            AnalyticsObjectTypes = value.AnalyticsObjectTypes;
            const dehydratedItems = closure_130_10.getDehydratedItems();
            const item = dehydratedItems.forEach((type) => {
              let tmp2 = type.type === object(constants[10]).ICYMIItemTypes.MESSAGE && type.data.channel_type === constants.GUILD_ANNOUNCEMENT;
              if (tmp2) {
                obj = closure_1(constants[13]);
                tmp2 = obj.compare(closure_2_9.ackMessageId(type.data.channel_id), type.data.message_id) >= 0;
              }
              if (tmp2) {
                const channel_id = type.data.channel_id;
                const obj2 = { object, objectType: constants.ACK_SEMI_AUTOMATIC };
                const obj3 = closure_1(constants[13]);
                closure_1_1(channel_id, obj2, true, true, obj3.atPreviousMillisecond(type.data.message_id));
              }
            });
            c3 = 3;
            c4 = 1;
            const obj11 = { value: obj12.clearReadStates(), done: false };
            obj12 = closure_130_1(closure_130_2[11]);
            return obj11;
          }
        } else if (3 === tmp4) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            c3 = 4;
            c4 = 1;
            const obj14 = { value: obj9.fetchDehydrated({ isReloading: true, forceRefresh: true }), done: false };
            obj9 = closure_130_1(closure_130_2[11]);
            return obj14;
          }
        } else if (4 === tmp4) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj15 = { value, done: true };
            return obj15;
          } else {
            c3 = 5;
            c4 = 1;
            const obj16 = { value: obj6.reloadICYMITab(), done: false };
            obj6 = closure_130_1(closure_130_2[11]);
            return obj16;
          }
        } else if (5 === tmp4) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj17 = { value, done: true };
            return obj17;
          } else {
            let obj3 = closure_130_1(closure_130_2[11]);
            c3 = 6;
            c4 = 1;
            const obj18 = { value: obj3.getGuildChannelScores(), done: false };
            return obj18;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj19 = { value, done: true };
          return obj19;
        } else {
          obj = closure_130_1(closure_130_2[11]);
          const recommendedGuilds = obj.getRecommendedGuilds();
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp35) {
        c4 = 3;
        throw tmp35;
      }
    }
  });
  return obj(...arguments);
};
const ThreadChannelRecord = ChannelRecord.ThreadChannelRecord;
({ ChannelTypes: closure_12, GuildNSFWContentLevel: map1 } = Constants);
obj = { UNKNOWN: 0, [0]: "UNKNOWN", DEFAULT: 1, [1]: "DEFAULT", MORE: 2, [2]: "MORE", LESS: 3, [3]: "LESS", MUTED: 4, [4]: "MUTED" };
let result = size.fileFinishedImporting("modules/icymi/ICYMIUtils.tsx");

export { generateHydrationId };
export const ICYMICustomScore = obj;
export const isGuildItem = function isGuildItem(type) {
  let tmp3 = type.type === ICYMITypes.ICYMIItemTypes.MESSAGE;
  if (!tmp3) {
    tmp3 = type.type === ICYMITypes.ICYMIItemTypes.GUILD_EVENT;
  }
  return tmp3;
};
export const isChannelCustomScoreEligible = function isChannelCustomScoreEligible(stateFromStores) {
  let tmp2 = stateFromStores.type === constants.GUILD_FORUM;
  if (!tmp2) {
    tmp2 = stateFromStores.type === constants.GUILD_ANNOUNCEMENT || stateFromStores.type === constants.GUILD_TEXT;
  }
  return tmp2;
};
export const numberToCustomScore = function numberToCustomScore(stateFromStores1) {
  let DEFAULT;
  if (stateFromStores1 < -1.5) {
    DEFAULT = obj.MUTED;
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
  return obj(...arguments);
};
export const createGravityMessageFromServer = function createGravityMessageFromServer(message, arg1) {
  let fromServerResult;
  let obj2;
  obj = { message: obj2.createMessageRecord(message.message), threadChannel: fromServerResult };
  const merged = Object.assign(arg1);
  fromServerResult = undefined;
  obj2 = MessageRecordUtils;
  if (null != message.thread_channel) {
    fromServerResult = ThreadChannelRecord.fromServer(message.thread_channel, message.guild_id);
  }
  return obj;
};
export const isItemUnreadInChannel = function isItemUnreadInChannel(channel_id, message_id) {
  const trackedAckMessageId = ReadStateStore.getTrackedAckMessageId(channel_id);
  let tmp2 = null == trackedAckMessageId;
  if (!tmp2) {
    obj = SnowflakeUtilsDefault;
    const extractTimestampResult = obj.extractTimestamp(message_id);
    const obj2 = SnowflakeUtilsDefault;
    tmp2 = extractTimestampResult > obj2.extractTimestamp(trackedAckMessageId);
  }
  return tmp2;
};
export const useGravityMessage = function useGravityMessage(message) {
  _require = message;
  const items = [MessageStore, ICYMIStore];
  const items1 = [message];
  obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    message = MessageStore.getMessage(message.getChannelId(), message.id);
    if (message == null) {
      const hydratedItem = ICYMIStore.getHydratedItem(tmp.id);
      let message1;
      if (hydratedItem != null) {
        message1 = hydratedItem.message;
      }
      message = message1;
    }
    if (message == null) {
      message = tmp;
    }
    return message;
  }, items1);
};
export const useGravityMessageItem = function useGravityMessageItem(id) {
  _require = id;
  const items = [ICYMIStore];
  const items1 = [id.id];
  obj = require("get initialized");
  return obj.useStateFromStores(items, () => ICYMIStore.getHydratedItem(id.id), items1);
};
export const useICYMIMessage = function useICYMIMessage(id, reply_message_id) {
  _require = id;
  let closure_1 = reply_message_id;
  const items = [MessageStore, ICYMIStore];
  const items1 = [id, reply_message_id];
  obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != reply_message_id) {
      let message = MessageStore.getMessage(id, tmp);
      if (message == null) {
        const hydratedItem = ICYMIStore.getHydratedItem(tmp);
        let message1;
        if (hydratedItem != null) {
          message1 = hydratedItem.message;
        }
        message = message1;
      }
      tmp2 = message;
    }
    return tmp2;
  }, items1);
};
export const icymiEnabled = function icymiEnabled(customScores) {
  obj = ICYMIExperiment;
  return obj.getICYMIEnabled(customScores);
};
export const customStatusToContentInventoryEntry = function customStatusToContentInventoryEntry(notificationItem) {
  let obj2;
  let str;
  obj = { id: notificationItem.id, type: ICYMITypes.ICYMIItemTypes.CUSTOM_STATUS, activity: obj2, score: null, score_components: null };
  obj2 = { id: notificationItem.id, author_id: notificationItem.data.user_id, author_type: ContentInventoryAuthorType.ContentInventoryAuthorType.USER, traits: [], participants: [], content_type: ContentInventoryEntryType.ContentInventoryEntryType.CUSTOM_STATUS, extra: { type: "custom_status_extra", status: str, emoji_id: notificationItem.data.emoji_id, emoji_name: notificationItem.data.emoji_name, emoji_animated: notificationItem.data.emoji_animated, attachments: notificationItem.data.attachments } };
  str = notificationItem.data.text;
  if (str == null) {
    str = "";
  }
  ({ score: obj.score, score_components: obj.score_components } = notificationItem);
  return obj;
};
export const compareGravityUnreadIds = function compareGravityUnreadIds(id, id2, arg2) {
  let num;
  let readTimestamp = ICYMIUnreadStateStore.getReadTimestamp(id);
  obj = ICYMIUnreadStateStore;
  if (null == readTimestamp) {
    let tmp2;
    if (arg2 != null) {
      tmp2 = arg2[id];
    }
    readTimestamp = tmp2;
  }
  let readTimestamp1 = obj.getReadTimestamp(id2);
  if (null == readTimestamp1) {
    let tmp4;
    if (arg2 != null) {
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
    num = num2;
  } else {
    num = 0;
  }
  return num;
};
export const getViewableFeedItemsArray = function getViewableFeedItemsArray(viewableItems) {
  let tmp3;
  const items = [...ICYMIStore.getUnreadDisplayItems(), ...ICYMIStore.getReadDisplayItems()];
  let id = null;
  let diff = viewableItems.length - 1;
  let tmp2 = null;
  if (0 <= diff) {
    while (true) {
      tmp3 = viewableItems[diff];
      if (null != tmp3) {
        let NON_ELIGIBLE_SCROLL_ITEMS = ICYMIItemTypes.NON_ELIGIBLE_SCROLL_ITEMS;
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
    let items1;
    const findIndexResult = items.findIndex((id) => id.id === id);
    if (findIndexResult < 0) {
      items1 = [];
    } else {
      items1 = items.slice(0, findIndexResult + 1);
    }
    return items1;
  }
};
export const isItemNSFW = function isItemNSFW(data) {
  let guild_id;
  let id;
  const kind = data.data.kind;
  if ("message" === kind) {
    id = data.data.message.channel_id;
  } else if ("forumThread" === kind) {
    id = data.data.threadChannel.id;
  } else if ("guildEvent" === kind) {
    const guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(data.data.eventId);
    if (guildScheduledEvent != null) {
      guild_id = guildScheduledEvent.guild_id;
    }
  } else {
    return false;
  }
  const channel = ChannelStore.getChannel(id);
  let nsfw;
  if (channel != null) {
    nsfw = channel.nsfw;
  }
  if (nsfw) {
    return true;
  } else {
    let guild_id1;
    if (channel != null) {
      guild_id1 = channel.guild_id;
    }
    if (guild_id1 == null) {
      guild_id1 = guild_id;
    }
    let guild = null;
    if (null != guild_id1) {
      guild = GuildStore.getGuild(guild_id1);
    }
    let nsfwLevel;
    if (guild != null) {
      nsfwLevel = guild.nsfwLevel;
    }
    let tmp11 = nsfwLevel === map1.EXPLICIT;
    if (!tmp11) {
      let nsfwLevel1;
      if (guild != null) {
        nsfwLevel1 = guild.nsfwLevel;
      }
      tmp11 = nsfwLevel1 === tmp10.AGE_RESTRICTED;
    }
    return tmp11;
  }
};
export const itemToType = function itemToType(data) {
  const kind = data.data.kind;
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
      if (data.channelType !== constants.GUILD_ANNOUNCEMENT) {
        const messageContext = data.data.messageContext;
        let prop;
        if (messageContext != null) {
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
      if (data.data.content.content_type === ContentInventoryEntryType.ContentInventoryEntryType.CUSTOM_STATUS) {
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
    return ICYMITypes.ContentType.ANNOUNCEMENT;
  } else if (channel.type === tmp.GUILD_FORUM) {
    return ICYMITypes.ContentType.FORUM_POST;
  } else {
    let INTERESTING;
    if (null != message.reactions) {
      const reactions = message.reactions;
      const mapped = reactions.map((count_details) => {
        let num = 0;
        if (null != count_details.count_details) {
          let num2 = count_details.count_details.burst;
          if (num2 == null) {
            num2 = 0;
          }
          let num3 = count_details.count_details.normal;
          if (num3 == null) {
            num3 = 0;
          }
          num = num2 + num3;
        }
        return num;
      });
      let num = 0;
      if (0 !== mapped.length) {
        let num2 = 10;
        if (mapped.reduce((acc, item) => acc + item) > 10) {
          return ICYMITypes.ContentType.POPULAR_MESSAGE;
        }
      }
    }
    let num3 = 0;
    if (message.attachments.length > 0) {
      let IMAGE;
      obj = ForumPostMediaUtils;
      if (obj.isValidImageAttachment(message.attachments[0])) {
        IMAGE = tmp6(7796).ContentType.IMAGE;
      } else {
        const tmp6Result = ForumPostMediaUtils;
        const result = tmp6Result.isValidVideoAttachment(message.attachments[0]);
        const ContentType = tmp6(7796).ContentType;
        IMAGE = result ? ContentType.VIDEO : ContentType.FILE;
      }
      INTERESTING = IMAGE;
    } else if (message.embeds.length > 0) {
      INTERESTING = ICYMITypes.ContentType.LINK;
    } else {
      INTERESTING = ICYMITypes.ContentType.INTERESTING;
    }
    return INTERESTING;
  }
};
export const contentTypeToText = function contentTypeToText(ANNOUNCEMENT, mentioned) {
  let flag = mentioned;
  if (mentioned === undefined) {
    flag = false;
  }
  if (ICYMITypes.ContentType.POPULAR_MESSAGE === ANNOUNCEMENT) {
    const intl10 = tmp(1115).intl;
    return intl10.string(intl11.t["H/2+cl"]);
  } else if (ICYMITypes.ContentType.IMAGE === ANNOUNCEMENT) {
    const intl9 = tmp(1115).intl;
    return intl9.string(intl11.t.gmOWAo);
  } else if (ICYMITypes.ContentType.VIDEO === ANNOUNCEMENT) {
    const intl8 = tmp(1115).intl;
    return intl8.string(intl11.t.swhcPM);
  } else if (ICYMITypes.ContentType.LINK === ANNOUNCEMENT) {
    const intl7 = tmp(1115).intl;
    return intl7.string(intl11.t.oj5yvD);
  } else if (ICYMITypes.ContentType.THREAD === ANNOUNCEMENT) {
    const intl6 = tmp(1115).intl;
    return intl6.string(intl11.t.DwLrLK);
  } else if (ICYMITypes.ContentType.FORUM_POST === ANNOUNCEMENT) {
    const intl5 = tmp(1115).intl;
    return intl5.string(intl11.t["Q9/6BS"]);
  } else if (ICYMITypes.ContentType.CHANGED_STATUS === ANNOUNCEMENT) {
    const intl4 = tmp(1115).intl;
    return intl4.string(intl11.t.TGrUmi);
  } else if (ICYMITypes.ContentType.INTERESTING === ANNOUNCEMENT) {
    const intl3 = tmp(1115).intl;
    return intl3.string(intl11.t["TahE/i"]);
  } else if (ICYMITypes.ContentType.ANNOUNCEMENT === ANNOUNCEMENT) {
    let stringResult;
    const intl2 = tmp(1115).intl;
    const string = intl2.string;
    const t = tmp(1115).t;
    if (flag) {
      stringResult = string(t.E0MW8I);
    } else {
      stringResult = string(t["2ih63V"]);
    }
    return stringResult;
  } else if (ICYMITypes.ContentType.FILE === ANNOUNCEMENT) {
    const intl = tmp(1115).intl;
    return intl.string(intl11.t.pYrnTY);
  }
};
export const regenerateFeedAndClearReadStates = function regenerateFeedAndClearReadStates() {
  return obj(...arguments);
};
