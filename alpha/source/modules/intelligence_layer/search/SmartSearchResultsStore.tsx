// Module ID: 12057
// Function ID: 12058
// Name: SmartSearchResultsStore
// Dependencies: [4717, 1389, 12055, 1456, 12058, 504, 584, 2]

// Module 12057 (SmartSearchResultsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import LRUCacheDefault from "LRUCache" /* 1456 */;
import SmartSearchTypes from "SmartSearchTypes" /* 12058 */;
import RelationshipStore from "RelationshipStore" /* 4717 */;
import UserStore from "UserStore" /* 1389 */;
import SmartSearchConstants from "SmartSearchConstants" /* 12055 */;
import size from "module_2" /* 2 */;

let MAX_CACHED_ANSWER_GUILDS;
let hasOwnProperty;
function handleReset() {
  closure_6.reset();
}
({ MAX_CACHED_ANSWERS_PER_GUILD: hasOwnProperty, MAX_CACHED_ANSWER_GUILDS } = SmartSearchConstants);
let obj = { max: MAX_CACHED_ANSWER_GUILDS };
const metroRequire = new LRUCacheDefault(obj);
const tmp3 = new LRUCacheDefault(obj);
const Store = get_initializedDefault.Store;
class SmartSearchResultsStore extends Store {
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
    let smartSearchResult;
    if (peekResult1 != null) {
      smartSearchResult = peekResult1.smartSearchResult;
    }
    if (smartSearchResult == null) {
      smartSearchResult = null;
    }
    return smartSearchResult;
  }
  getStatus(arg0, arg1) {
    const answer = this.getAnswer(arg0, arg1);
    let status;
    if (answer != null) {
      status = answer.status;
    }
    if (status == null) {
      status = null;
    }
    return status;
  }
  hasAnswer(guildId, requestKey) {
    const peekResult = closure_6.peek(guildId);
    let peekResult1;
    if (peekResult != null) {
      peekResult1 = peekResult.peek(requestKey);
    }
    if (peekResult1 == null) {
      peekResult1 = null;
    }
    return null != peekResult1;
  }
  getResultFeedback(guildId, requestKey) {
    const peekResult = closure_6.peek(guildId);
    let peekResult1;
    if (peekResult != null) {
      peekResult1 = peekResult.peek(requestKey);
    }
    if (peekResult1 == null) {
      peekResult1 = null;
    }
    let hasPositiveFeedback;
    if (peekResult1 != null) {
      hasPositiveFeedback = peekResult1.hasPositiveFeedback;
    }
    if (hasPositiveFeedback == null) {
      hasPositiveFeedback = null;
    }
    return hasPositiveFeedback;
  }
}
const prototype = SmartSearchResultsStore.prototype;
SmartSearchResultsStore.displayName = "SmartSearchResultsStore";
let obj2 = {
  SMART_SEARCH_FETCH_START: function handleFetchStart(smartSearchQuery) {
    let channelIds;
    let queryText;
    let requestKey;
    smartSearchQuery = smartSearchQuery.smartSearchQuery;
    const guildId = smartSearchQuery.guildId;
    ({ requestKey, queryText, channelIds } = smartSearchQuery);
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
    const obj3 = { smartSearchResult: { status: SmartSearchTypes.SmartSearchStatus.LOADING, queryText, answerText: "", citations: [], channelIds }, hasPositiveFeedback: null };
    ({ status: SmartSearchTypes.SmartSearchStatus.LOADING, queryText, answerText: "", citations: [], channelIds });
    const result1 = value.set(requestKey, obj3);
  },
  SMART_SEARCH_FETCH_SUCCESS: function handleFetchSuccess(smartSearchQuery) {
    let answerText;
    let channelIds;
    let citations;
    let queryText;
    let requestKey;
    let smartSearchStatus;
    smartSearchQuery = smartSearchQuery.smartSearchQuery;
    const guildId = smartSearchQuery.guildId;
    ({ smartSearchStatus, answerText, citations } = smartSearchQuery);
    ({ requestKey, queryText, channelIds } = smartSearchQuery);
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
    const obj3 = { smartSearchResult: { status: smartSearchStatus, queryText, answerText, citations, channelIds }, hasPositiveFeedback: null };
    const result1 = value.set(requestKey, obj3);
  },
  SMART_SEARCH_FETCH_FAILURE: function handleFetchFailure(smartSearchQuery) {
    let channelIds;
    let queryText;
    let requestKey;
    smartSearchQuery = smartSearchQuery.smartSearchQuery;
    const guildId = smartSearchQuery.guildId;
    const status = smartSearchQuery.status;
    ({ requestKey, queryText, channelIds } = smartSearchQuery);
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
    const obj3 = { smartSearchResult: { status, queryText, answerText: "", citations: [], channelIds }, hasPositiveFeedback: null };
    const result1 = value.set(requestKey, obj3);
  },
  SMART_SEARCH_SET_RESULT_FEEDBACK: function handleSetResultFeedback(arg0) {
    let hasPositiveFeedback;
    let smartSearchQuery;
    ({ smartSearchQuery, hasPositiveFeedback } = arg0);
    const requestKey = smartSearchQuery.requestKey;
    const peekResult = closure_6.peek(smartSearchQuery.guildId);
    let peekResult1;
    if (peekResult != null) {
      peekResult1 = peekResult.peek(requestKey);
    }
    if (peekResult1 == null) {
      peekResult1 = null;
    }
    if (null != peekResult1) {
      if (peekResult1.hasPositiveFeedback !== hasPositiveFeedback) {
        peekResult1.hasPositiveFeedback = hasPositiveFeedback;
      }
    }
    return false;
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
        const item = peekResult.forEach((smartSearchResult, index) => {
          let id;
          const channelIds = smartSearchResult.smartSearchResult.channelIds;
          let hasItem = channelIds.includes(channel.id);
          if (!hasItem) {
            const citations = smartSearchResult.smartSearchResult.citations;
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
const smartSearchResultsStore = new SmartSearchResultsStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/SmartSearchResultsStore.tsx");

export default smartSearchResultsStore;
