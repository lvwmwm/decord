// Module ID: 8658
// Function ID: 8659
// Name: ICYMIUtils
// Dependencies: [5, 7805, 2049, 2045, 2067, 5010, 4805, 8643, 8657, 1078, 8656, 8659, 5012, 11, 558, 568, 504, 8660, 8664, 8436, 8665, 8178, 1119, 7389, 1984, 1078, 2]
// Exports: compareGravityUnreadIds, contentTypeToText, createGravityMessageFromServer, customScoreToNumber, customStatusToContentInventoryEntry, determineContentType, getViewableFeedItemsArray, hydrateNextPage, icymiEnabled, isChannelCustomScoreEligible, isGuildItem, isItemNSFW, isItemUnreadInChannel, itemToType, numberToCustomScore, regenerateFeedAndClearReadStates

// Module 8658 (ICYMIUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5012 */;
import ForumPostMediaUtils from "ForumPostMediaUtils" /* 8178 */;
import ContentInventoryEntryType from "ContentInventoryEntryType" /* 8436 */;
import ICYMITypes from "ICYMITypes" /* 8656 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8659 */;
import ICYMIExperiment from "ICYMIExperiment" /* 8660 */;
import ContentInventoryAuthorType from "ContentInventoryAuthorType" /* 8664 */;
import ICYMIItemTypes from "ICYMIItemTypes" /* 8665 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7805 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import MessageStore from "MessageStore" /* 5010 */;
import ReadStateStore from "ReadStateStore" /* 4805 */;
import ICYMIStore from "ICYMIStore" /* 8643 */;
import ICYMIUnreadStateStore from "ICYMIUnreadStateStore" /* 8657 */;

const require = globalThis.__r;

require = fn;
function generateHydrationId(startingIndex, endingIndex) {
  return "hydration-" + startingIndex + "-" + endingIndex;
}
function hydrateItems() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_17 = async function _hydrateItems(arg0, value) {
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
      return { value: "IconComponent", done: null };
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
          const obj5 = { value, done: true };
          return obj5;
        } else {
          dependencyMap = hydratedItems.getHydratedItems();
          const substr = dependencyMap.slice(closure_1, dependencyMap2);
          if (0 !== substr.length) {
            const hydratedAttempt = ICYMIActionCreatorsDefault.loadHydratedAttempt(generateHydrationId(tmp23, tmp24));
            const found = substr.filter((item) => null == dependencyMap[item.id]);
            const found1 = found.filter((type) => type.type === dependencyMap(8656).ICYMIItemTypes.MESSAGE);
            const mapped = found1.map((channel_id) => ({ channel_id: channel_id.data.channel_id, message_id: channel_id.data.message_id }));
            const mapped1 = found.map((type) => {
              if (type.type === dependencyMap(8656).ICYMIItemTypes.MESSAGE) {
                const message_context = type.data.message_context;
                let reply_message_id;
                if (message_context != null) {
                  reply_message_id = message_context.reply_message_id;
                }
                const items = [];
                if (null != reply_message_id) {
                  const obj = { channel_id: type.data.channel_id, message_id: type.data.message_context.reply_message_id };
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
            const found2 = mapped1.flat().filter(Boolean);
            const found3 = found.filter((type) => type.type === dependencyMap(8656).ICYMIItemTypes.ACTIVITY);
            const mapped2 = found3.map((data) => ({ user_id: data.data.user_id, content_id: data.data.content_id }));
            const flatResult = mapped1.flat();
            const obj6 = { messageItems: null, activityItems: null };
            let items = [];
            HermesBuiltin.arraySpread(found2, HermesBuiltin.arraySpread(mapped, 0));
            obj6.messageItems = items;
            obj6.activityItems = mapped2;
            c4 = 1;
            c3 = 1;
            const obj7 = { value: ICYMIActionCreatorsDefault.fetchHydrated(tmp23, tmp24, obj6), done: false };
            return obj7;
          }
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        let obj = { value, done: true };
        return obj;
      }
      c3 = 3;
      return { value: "IconComponent", done: null };
    } catch (tmp17) {
      c3 = tmp;
      throw tmp17;
    }
  }
};
let closure_18 = async function _hydrateNextPage(arg0, value) {
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
      return { value: "IconComponent", done: null };
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
          HermesBuiltin.arraySpread(readDisplayItems, HermesBuiltin.arraySpread(unreadDisplayItems, 0));
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
        const obj = { value, done: true };
        return obj;
      } else {
        c0 = 3;
        return { value: "IconComponent", done: null };
      }
    } catch (tmp5) {
      c0 = tmp;
      throw tmp5;
    }
  }
};
let closure_19 = async function _regenerateFeedAndClearReadStates(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          constants = tmp2;
          closure_1 = tmp5;
          closure_129_0 = object;
          let ack;
          let AnalyticsObjectTypes;
          c3 = 1;
          c4 = 1;
          const obj5 = { value: require("asyncRequireImpl")(paths[23], paths.paths), done: false };
          return obj5;
        }
      } else if (1 === tmp5) {
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
          const obj8 = { value: closure_130_0(closure_130_2[24])(closure_130_2[25], closure_130_2.paths), done: false };
          return obj8;
        }
      } else if (2 === tmp5) {
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
            let tmp2 = type.type === object(constants[10]).ICYMIItemTypes.MESSAGE;
            if (tmp2) {
              tmp2 = type.data.channel_type === constants.GUILD_ANNOUNCEMENT;
            }
            if (tmp2) {
              tmp2 = closure_1(tmp[13]).compare(closure_2_9.ackMessageId(type.data.channel_id), type.data.message_id) >= 0;
              const obj = closure_1(tmp[13]);
            }
            if (tmp2) {
              const channel_id = type.data.channel_id;
              const obj2 = { object, objectType: constants.ACK_SEMI_AUTOMATIC };
              closure_1_1(channel_id, obj2, true, true, closure_1(tmp[13]).atPreviousMillisecond(type.data.message_id));
              const obj3 = closure_1(tmp[13]);
            }
          });
          c3 = 3;
          c4 = 1;
          const obj11 = { value: closure_130_1(closure_130_2[11]).clearReadStates(), done: false };
          return obj11;
        }
      } else if (3 === tmp5) {
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
          const obj14 = { value: closure_130_1(closure_130_2[11]).fetchDehydrated({ isReloading: true, forceRefresh: true }), done: false };
          return obj14;
        }
      } else if (4 === tmp5) {
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
          const obj16 = { value: closure_130_1(closure_130_2[11]).reloadICYMITab(), done: false };
          return obj16;
        }
      } else if (5 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj17 = { value, done: true };
          return obj17;
        } else {
          c3 = 6;
          c4 = 1;
          const obj18 = { value: closure_130_1(closure_130_2[11]).getGuildChannelScores(), done: false };
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
        const recommendedGuilds = closure_130_1(closure_130_2[11]).getRecommendedGuilds();
        c4 = 3;
        return { value: "IconComponent", done: null };
      }
    } catch (tmp36) {
      c4 = tmp;
      throw tmp36;
    }
  }
};
const ThreadChannelRecord = fn(2049).ThreadChannelRecord;
const Constants = fn(1078);
({ ChannelTypes: closure_12, GuildNSFWContentLevel: map1 } = Constants);
const ICYMICustomScore = { UNKNOWN: 0, [0]: "UNKNOWN", DEFAULT: 1, [1]: "DEFAULT", MORE: 2, [2]: "MORE", LESS: 3, [3]: "LESS", MUTED: 4, [4]: "MUTED" };
fn(558);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageStore, ICYMIStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function a() {
      let message = MessageStore.getMessage(channelId.getChannelId(), channelId.id);
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
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7, tmp8);
}) : ((arg0) => {
  _require = arg0;
  const items = [MessageStore, ICYMIStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    let message = MessageStore.getMessage(channelId.getChannelId(), channelId.id);
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
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  _require = id;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ICYMIStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const fn = function a() {
      return ICYMIStore.getHydratedItem(id.id);
    };
    const items1 = [id.id];
    cResult[1] = id.id;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : ((id) => {
  _require = id;
  const items = [ICYMIStore];
  const items1 = [id.id];
  return require("initialize").useStateFromStores(items, () => ICYMIStore.getHydratedItem(id.id), items1);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/ICYMIUtils.tsx");

export { generateHydrationId };
export { ICYMICustomScore };
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
    tmp2 = stateFromStores.type === tmp.GUILD_ANNOUNCEMENT || stateFromStores.type === tmp.GUILD_TEXT;
    const tmp3 = stateFromStores.type === tmp.GUILD_ANNOUNCEMENT || stateFromStores.type === tmp.GUILD_TEXT;
  }
  return tmp2;
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
  } else if (tmp.LESS === DEFAULT) {
    return -1;
  } else if (tmp.MUTED === DEFAULT) {
    return -2;
  } else {
    return 0;
  }
};
export { hydrateItems };
export const hydrateNextPage = function hydrateNextPage() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createGravityMessageFromServer = function createGravityMessageFromServer(message, arg1) {
  const obj = {};
  const merged = Object.assign(arg1);
  obj.message = MessageRecordUtils.createMessageRecord(message.message);
  let fromServerResult;
  if (null != message.thread_channel) {
    fromServerResult = ThreadChannelRecord.fromServer(message.thread_channel, message.guild_id);
  }
  obj.threadChannel = fromServerResult;
  return obj;
};
export const isItemUnreadInChannel = function isItemUnreadInChannel(channel_id, message_id) {
  const trackedAckMessageId = ReadStateStore.getTrackedAckMessageId(channel_id);
  let tmp2 = null == trackedAckMessageId;
  if (!tmp2) {
    const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(message_id);
    tmp2 = extractTimestampResult > SnowflakeUtilsDefault.extractTimestamp(trackedAckMessageId);
  }
  return tmp2;
};
export const useGravityMessage = tmp3;
export const useGravityMessageItem = tmp4;
export const useICYMIMessage = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageStore, ICYMIStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === arg1) {
      let tmp7 = cResult[3];
      let tmp8 = cResult[4];
    }
    return require("initialize").useStateFromStores(first, tmp7, tmp8);
  }
  const fn = function s() {
    let tmp2 = null;
    if (null != closure_1) {
      let message = MessageStore.getMessage(closure_0, tmp);
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
  };
  const items1 = [arg0, arg1];
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
}) : ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  const items = [MessageStore, ICYMIStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != closure_1) {
      let message = MessageStore.getMessage(closure_0, tmp);
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
});
export const icymiEnabled = function icymiEnabled(customScores) {
  return ICYMIExperiment.getICYMIEnabled(customScores);
};
export const customStatusToContentInventoryEntry = function customStatusToContentInventoryEntry(notificationItem) {
  const obj = { id: notificationItem.id, type: ICYMITypes.ICYMIItemTypes.CUSTOM_STATUS, activity: null, score: null, score_components: null };
  const obj2 = { id: notificationItem.id, author_id: notificationItem.data.user_id, author_type: ContentInventoryAuthorType.ContentInventoryAuthorType.USER, traits: [], participants: [], content_type: ContentInventoryEntryType.ContentInventoryEntryType.CUSTOM_STATUS, extra: null };
  let str = notificationItem.data.text;
  if (str == null) {
    str = "";
  }
  obj2.extra = { type: "custom_status_extra", status: str, emoji_id: notificationItem.data.emoji_id, emoji_name: notificationItem.data.emoji_name, emoji_animated: notificationItem.data.emoji_animated, attachments: notificationItem.data.attachments };
  obj.activity = obj2;
  ({ score: obj.score, score_components: obj.score_components } = notificationItem);
  return obj;
};
export const compareGravityUnreadIds = function compareGravityUnreadIds(id, id2, arg2) {
  let readTimestamp = ICYMIUnreadStateStore.getReadTimestamp(id);
  if (null == readTimestamp) {
    let tmp2;
    if (arg2 != null) {
      tmp2 = arg2[id];
    }
    readTimestamp = tmp2;
  }
  let readTimestamp1 = ICYMIUnreadStateStore.getReadTimestamp(id2);
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
    let num = num2;
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
    const guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(data.data.eventId);
    if (guildScheduledEvent != null) {
      const guild_id = guildScheduledEvent.guild_id;
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
    guild = null;
    if (null != guild_id1) {
      guild = GuildStore.getGuild(guild_id1);
    }
    let nsfwLevel;
    if (guild != null) {
      nsfwLevel = guild.nsfwLevel;
    }
    let tmp11 = nsfwLevel === constants2.EXPLICIT;
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
      if (0 !== mapped.length) {
        if (mapped.reduce((acc, item) => acc + item) > 10) {
          return ICYMITypes.ContentType.POPULAR_MESSAGE;
        }
      }
    }
    if (message.attachments.length > 0) {
      let ContentType = dependencyMap;
      if (obj.isValidImageAttachment(message.attachments[0])) {
        ContentType = tmp6(8656).ContentType;
        let IMAGE = ContentType.IMAGE;
      } else {
        const result = tmp6(8178).isValidVideoAttachment(message.attachments[0]);
        const ContentType2 = tmp6(8656).ContentType;
        IMAGE = result ? ContentType2.VIDEO : ContentType2.FILE;
        const tmp6Result = tmp6(8178);
      }
      obj = ForumPostMediaUtils;
    } else {
      if (message.embeds.length > 0) {
        let INTERESTING = ICYMITypes.ContentType.LINK;
      } else {
        INTERESTING = ICYMITypes.ContentType.INTERESTING;
      }
      return INTERESTING;
    }
  }
};
export const contentTypeToText = function contentTypeToText(ANNOUNCEMENT, mentioned) {
  let flag = mentioned;
  if (mentioned === undefined) {
    flag = false;
  }
  if (ICYMITypes.ContentType.POPULAR_MESSAGE === ANNOUNCEMENT) {
    const intl10 = tmp(1119).intl;
    return intl10.string(tmp(1119).t["H/2+cl"]);
  } else if (tmp(8656).ContentType.IMAGE === ANNOUNCEMENT) {
    const intl9 = tmp(1119).intl;
    return intl9.string(tmp(1119).t.gmOWAo);
  } else if (tmp(8656).ContentType.VIDEO === ANNOUNCEMENT) {
    const intl8 = tmp(1119).intl;
    return intl8.string(tmp(1119).t.swhcPM);
  } else if (tmp(8656).ContentType.LINK === ANNOUNCEMENT) {
    const intl7 = tmp(1119).intl;
    return intl7.string(tmp(1119).t.oj5yvD);
  } else if (tmp(8656).ContentType.THREAD === ANNOUNCEMENT) {
    const intl6 = tmp(1119).intl;
    return intl6.string(tmp(1119).t.DwLrLK);
  } else if (tmp(8656).ContentType.FORUM_POST === ANNOUNCEMENT) {
    const intl5 = tmp(1119).intl;
    return intl5.string(tmp(1119).t["Q9/6BS"]);
  } else if (tmp(8656).ContentType.CHANGED_STATUS === ANNOUNCEMENT) {
    const intl4 = tmp(1119).intl;
    return intl4.string(tmp(1119).t.TGrUmi);
  } else if (tmp(8656).ContentType.INTERESTING === ANNOUNCEMENT) {
    const intl3 = tmp(1119).intl;
    return intl3.string(tmp(1119).t["TahE/i"]);
  } else if (tmp(8656).ContentType.ANNOUNCEMENT === ANNOUNCEMENT) {
    const intl2 = tmp(1119).intl;
    const string = intl2.string;
    const t = tmp(1119).t;
    if (flag) {
      let stringResult = string(t.E0MW8I);
    } else {
      stringResult = string(t["2ih63V"]);
    }
    return stringResult;
  } else if (tmp(8656).ContentType.FILE === ANNOUNCEMENT) {
    const intl = tmp(1119).intl;
    return intl.string(tmp(1119).t.pYrnTY);
  }
};
export const regenerateFeedAndClearReadStates = function regenerateFeedAndClearReadStates() {
  const self = this;
  const apply = closure_19.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
