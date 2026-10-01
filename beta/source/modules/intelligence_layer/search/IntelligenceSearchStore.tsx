// Module ID: 11846
// Function ID: 11847
// Name: IntelligenceSearchStore
// Dependencies: [4479, 1372, 11847, 1439, 11848, 11849, 504, 573, 2]

// Module 11846 (IntelligenceSearchStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import LRUCacheDefault from "LRUCache" /* 1439 */;
import IntelligenceSearchTypes from "IntelligenceSearchTypes" /* 11848 */;
import IntelligenceSearchUtils from "IntelligenceSearchUtils" /* 11849 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import IntelligenceSearchConstants from "IntelligenceSearchConstants" /* 11847 */;
import size from "module_2" /* 2 */;

let set;

let MAX_CACHED_ANSWER_GUILDS;
let hasOwnProperty;
function handleReset() {
  closure_6.reset();
}
({ MAX_CACHED_ANSWERS_PER_GUILD: hasOwnProperty, MAX_CACHED_ANSWER_GUILDS } = IntelligenceSearchConstants);
let obj = { max: MAX_CACHED_ANSWER_GUILDS };
const metroRequire = new LRUCacheDefault(obj);
const tmp3 = new LRUCacheDefault(obj);
const Store = get_initializedDefault.Store;
class IntelligenceSearchStore extends Store {
  initialize() {
    this.waitFor(RelationshipStore, UserStore);
  }
  getAnswer(arg0, arg1) {
    const peekResult = closure_6.peek(arg0);
    let peekResult1;
    if (peekResult != null) {
      peekResult1 = peekResult.peek(arg1);
    }
    if (peekResult1 == null) {
      peekResult1 = null;
    }
    return peekResult1;
  }
  getStatus(arg0, arg1) {
    const peekResult = closure_6.peek(arg0);
    let peekResult1;
    if (peekResult != null) {
      peekResult1 = peekResult.peek(arg1);
    }
    if (peekResult1 == null) {
      peekResult1 = null;
    }
    let status;
    if (peekResult1 != null) {
      status = peekResult1.status;
    }
    if (status == null) {
      status = null;
    }
    return status;
  }
  hasAnswer(arg0, arg1) {
    const peekResult = closure_6.peek(arg0);
    let peekResult1;
    if (peekResult != null) {
      peekResult1 = peekResult.peek(arg1);
    }
    if (peekResult1 == null) {
      peekResult1 = null;
    }
    return null != peekResult1;
  }
}
const prototype = IntelligenceSearchStore.prototype;
IntelligenceSearchStore.displayName = "IntelligenceSearchStore";
let obj2 = {
  INTELLIGENCE_SEARCH_FETCH_START: function handleFetchStart(guildId) {
    let channelIds;
    let queryText;
    let requestKey;
    guildId = guildId.guildId;
    ({ requestKey, queryText, channelIds } = guildId);
    let value = closure_6.get(guildId);
    const obj = closure_6;
    if (null == value) {
      const self = this;
      const self2 = this;
      const obj2 = { max: hasOwnProperty };
      const tmp5 = new LRUCacheDefault(obj2);
      const result = obj.set(guildId, tmp5);
      value = tmp5;
    }
    const obj3 = { status: IntelligenceSearchTypes.IntelligenceSearchStatus.LOADING, queryText, answerText: "", citations: [], channelIds };
    const result1 = value.set(requestKey, obj3);
  },
  INTELLIGENCE_SEARCH_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let channelIds;
    let guildId;
    let requestKey;
    let response;
    let tmpResult;
    ({ guildId, response } = arg0);
    ({ requestKey, channelIds } = arg0);
    const obj = IntelligenceSearchUtils;
    const result = obj.hydrateAndFilterCitations(response);
    let value = closure_6.get(guildId);
    const obj2 = closure_6;
    if (null == value) {
      const self = this;
      const self2 = this;
      const obj3 = { max: hasOwnProperty };
      const tmp7 = new LRUCacheDefault(obj3);
      const result1 = obj2.set(guildId, tmp7);
      value = tmp7;
    }
    const obj5 = { status: tmpResult.resolveSearchStatus(response, result.length), queryText: null, answerText: null, citations: result, channelIds };
    set = value.set;
    ({ query_text: obj4.queryText, answer_text: obj4.answerText } = response);
    tmpResult = IntelligenceSearchUtils;
    const result2 = set(requestKey, obj5);
  },
  INTELLIGENCE_SEARCH_FETCH_FAILURE: function handleFetchFailure(guildId) {
    let channelIds;
    let queryText;
    let requestKey;
    let status;
    guildId = guildId.guildId;
    ({ requestKey, status, queryText, channelIds } = guildId);
    let value = closure_6.get(guildId);
    const obj = closure_6;
    if (null == value) {
      const self = this;
      const self2 = this;
      const obj2 = { max: hasOwnProperty };
      const tmp5 = new LRUCacheDefault(obj2);
      const result = obj.set(guildId, tmp5);
      value = tmp5;
    }
    const result1 = value.set(requestKey, { status, queryText, answerText: "", citations: [], channelIds });
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    const obj = closure_6;
    if (closure_6.has(guild.id)) {
      obj.del(guild.id);
    } else {
      return false;
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    channel = channel.channel;
    let c1;
    let items;
    if (null == channel.guild_id) {
      return false;
    } else {
      const peekResult = closure_6.peek(channel.guild_id);
      c1 = peekResult;
      if (null == peekResult) {
        return false;
      } else {
        items = [];
        const item = peekResult.forEach((channelIds, index) => {
          let id;
          channelIds = channelIds.channelIds;
          let hasItem = channelIds.includes(channel.id);
          if (!hasItem) {
            const citations = channelIds.citations;
            hasItem = citations.some((channelId) => channelId.channelId === id.id);
          }
          if (hasItem) {
            items.push(index);
          }
        });
        if (0 === items.length) {
          return false;
        } else {
          const item1 = items.forEach((item) => {
            _undefined.del(item);
          });
        }
      }
    }
  },
  CONNECTION_OPEN: handleReset,
  LOGOUT: handleReset
};
const intelligenceSearchStore = new IntelligenceSearchStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/IntelligenceSearchStore.tsx");

export default intelligenceSearchStore;
