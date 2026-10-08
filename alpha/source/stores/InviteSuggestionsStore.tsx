// Module ID: 8673
// Function ID: 8674
// Name: InviteSuggestionsStore
// Dependencies: [8674, 7336, 2063, 5956, 2124, 4707, 4717, 1085, 7418, 8660, 6100, 1387, 504, 584, 2]

// Module 8673 (InviteSuggestionsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import sortByMatchScoreDefault from "sortByMatchScore" /* 6100 */;
import Constants2 from "Constants" /* 7418 */;
import InstantInviteUtils from "InstantInviteUtils" /* 8660 */;
import QuickSwitcherStore from "QuickSwitcherStore" /* 8674 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7336 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import GuildMemberRequesterStore from "GuildMemberRequesterStore" /* 5956 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import PermissionStore from "PermissionStore" /* 4707 */;
import RelationshipStore from "RelationshipStore" /* 4717 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let channelHistory;

let closure_16;
let closure_17;
function requestMembership(rows) {
  const tmp = getOmitGuildId();
  if (null != tmp) {
    const iter = rows[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = nextResult;
      let tmp6 = require;
      let tmp7 = dependencyMap;
      let tmp8 = nextResult.type !== InstantInviteUtils.RowTypes.DM;
      if (tmp8) {
        tmp8 = tmp5.type !== tmp6(tmp7[9]).RowTypes.FRIEND;
      }
      if (!tmp8) {
        let member = GuildMemberRequesterStore.requestMember(tmp, tmp5.item.id);
      }
      continue;
    }
  }
}
function compareRowsByMatchScore(score, score2) {
  let num = 0;
  if (null != score.score) {
    num = 0;
    if (null != score2.score) {
      const obj = { score: score.score };
      const obj2 = { score: score2.score };
      num = sortByMatchScoreDefault(obj, obj2);
    }
  }
  return num;
}
function getOmitGuildId() {
  let id = null;
  if (null != user) {
    id = null;
    if (inviteTargetType !== InviteTargetTypes.EMBEDDED_APPLICATION) {
      let type;
      if (channel != null) {
        type = channel.type;
      }
      id = null;
      if (type !== constants.GUILD_VOICE) {
        id = user.id;
      }
    }
  }
  return id;
}
({ ChannelTypes: closure_16, Permissions: closure_17 } = Constants);
const InviteTargetTypes = Constants2.InviteTargetTypes;
let set = new Set();
let rows = [];
let map = new Map();
let counts = { numFriends: 0, numDms: 0, numGroupDms: 0, numChannels: 0 };
let query = "";
const Store = get_initializedDefault.Store;
class InviteSuggestionsStore extends Store {
  initialize() {
    this.waitFor(ChannelStore, GuildMemberRequesterStore, GuildMemberStore, PermissionStore, QuickSwitcherStore, RelationshipStore, UserAffinitiesV2Store);
  }
  getInviteSuggestionRows() {
    return rows;
  }
  getTotalSuggestionsCount() {
    return length;
  }
  getInitialCounts() {
    return counts;
  }
  getSelectedInviteMetadata(row) {
    const value = map.get(row);
    const userAffinities = UserAffinitiesV2Store.getUserAffinities();
    if (null != value) {
      return { rowNum: value.index, isAffinitySuggestion: row.isSuggested, numTotal: rows.length, numAffinityConnections: arr.length, isFiltered };
    }
  }
}
const prototype = InviteSuggestionsStore.prototype;
InviteSuggestionsStore.displayName = "InviteSuggestionsStore";
let obj = {
  LOAD_INVITE_SUGGESTIONS: function refreshInviteSuggestions(arg0) {
    let closure_1_5;
    let closure_1_6;
    let closure_1_7;
    ({ inviteTargetType, guild: closure_1_5, channel: closure_1_6, applicationId: closure_1_7 } = arg0);
    query = "";
    const blockedOrIgnoredIDs = RelationshipStore.getBlockedOrIgnoredIDs();
    const obj = InstantInviteUtils;
    const obj2 = { channel, applicationId, inviteTargetType };
    const usersAlreadyJoined = obj.getUsersAlreadyJoined(obj2);
    const items = [...usersAlreadyJoined];
    new Set(items);
    let closure_4 = "" !== query;
    const tmp4 = (function _computeRows(query) {
      let constants2;
      let set1;
      set = new Set();
      const tmp = closure_25();
      const obj2 = set1(closure_2[9]);
      const mostRecentDMedUser = obj2.getMostRecentDMedUser(omitUserIds, tmp);
      const isBlockedOrIgnoredResult = null == mostRecentDMedUser || blockedOrIgnored.isBlockedOrIgnored(mostRecentDMedUser.id);
      if (!isBlockedOrIgnoredResult) {
        set.add(mostRecentDMedUser.id);
      }
      userAffinities = userAffinities.getUserAffinities();
      for (const item10031 of userAffinities) {
        let addResult1 = set.add(item10031.otherUserId);
        continue;
      }
      set1 = new Set();
      if (inviteTargetType === constants.EMBEDDED_APPLICATION) {
        channelHistory = channelHistory.getChannelHistory();
        const mapped = channelHistory.map((item) => channel.getChannel(item));
        const found = mapped.filter(set1(closure_2[11]).isNotNullish);
        const found1 = found.filter((type) => type.type === constants.GUILD_TEXT);
        const found2 = found1.filter((item) => closure_1_14.can(constants2.SEND_MESSAGES, item));
        const substr = found2.slice(0, 3);
        const item = substr.forEach((id) => set1.add(id.id));
      }
      const obj = { query, omitUserIds, suggestedUserIds: set, maxRowsWithoutQuery: 100, omitGuildId: tmp, suggestedChannelIds: set1, inviteTargetType };
      const obj3 = set1(closure_2[9]);
      return obj3.generateRowsForQuery(obj);
    })(query);
    rows = tmp4.rows;
    counts = tmp4.counts;
    if (closure_4) {
      const sorted = rows.sort(compareRowsByMatchScore);
    }
    new Map();
    const item = rows.forEach((item, index) => {
      const obj = { index };
      const result = map.set(item, obj);
    });
    requestMembership(rows);
  },
  INVITE_SUGGESTIONS_SEARCH: function handleSearch(query) {
    query = query.query;
    let closure_4 = "" !== query;
    ({ rows, counts } = (function _computeRows(query) {
      let constants2;
      let set1;
      set = new Set();
      const tmp = closure_25();
      const obj2 = set1(closure_2[9]);
      const mostRecentDMedUser = obj2.getMostRecentDMedUser(omitUserIds, tmp);
      const isBlockedOrIgnoredResult = null == mostRecentDMedUser || blockedOrIgnored.isBlockedOrIgnored(mostRecentDMedUser.id);
      if (!isBlockedOrIgnoredResult) {
        set.add(mostRecentDMedUser.id);
      }
      userAffinities = userAffinities.getUserAffinities();
      for (const item10031 of userAffinities) {
        let addResult1 = set.add(item10031.otherUserId);
        continue;
      }
      set1 = new Set();
      if (inviteTargetType === constants.EMBEDDED_APPLICATION) {
        channelHistory = channelHistory.getChannelHistory();
        const mapped = channelHistory.map((item) => channel.getChannel(item));
        const found = mapped.filter(set1(closure_2[11]).isNotNullish);
        const found1 = found.filter((type) => type.type === constants.GUILD_TEXT);
        const found2 = found1.filter((item) => closure_1_14.can(constants2.SEND_MESSAGES, item));
        const substr = found2.slice(0, 3);
        const item = substr.forEach((id) => set1.add(id.id));
      }
      const obj = { query, omitUserIds, suggestedUserIds: set, maxRowsWithoutQuery: 100, omitGuildId: tmp, suggestedChannelIds: set1, inviteTargetType };
      const obj3 = set1(closure_2[9]);
      return obj3.generateRowsForQuery(obj);
    })(query));
    (function _computeRows(query) {
      let constants2;
      let set1;
      set = new Set();
      const tmp = closure_25();
      const obj2 = set1(closure_2[9]);
      const mostRecentDMedUser = obj2.getMostRecentDMedUser(omitUserIds, tmp);
      const isBlockedOrIgnoredResult = null == mostRecentDMedUser || blockedOrIgnored.isBlockedOrIgnored(mostRecentDMedUser.id);
      if (!isBlockedOrIgnoredResult) {
        set.add(mostRecentDMedUser.id);
      }
      userAffinities = userAffinities.getUserAffinities();
      for (const item10031 of userAffinities) {
        let addResult1 = set.add(item10031.otherUserId);
        continue;
      }
      set1 = new Set();
      if (inviteTargetType === constants.EMBEDDED_APPLICATION) {
        channelHistory = channelHistory.getChannelHistory();
        const mapped = channelHistory.map((item) => channel.getChannel(item));
        const found = mapped.filter(set1(closure_2[11]).isNotNullish);
        const found1 = found.filter((type) => type.type === constants.GUILD_TEXT);
        const found2 = found1.filter((item) => closure_1_14.can(constants2.SEND_MESSAGES, item));
        const substr = found2.slice(0, 3);
        const item = substr.forEach((id) => set1.add(id.id));
      }
      const obj = { query, omitUserIds, suggestedUserIds: set, maxRowsWithoutQuery: 100, omitGuildId: tmp, suggestedChannelIds: set1, inviteTargetType };
      const obj3 = set1(closure_2[9]);
      return obj3.generateRowsForQuery(obj);
    })(query);
    const tmp2 = closure_4;
    if (tmp2) {
      const sorted = rows.sort(compareRowsByMatchScore);
    }
    new Map();
    const item = rows.forEach((item, index) => {
      const obj = { index };
      const result = map.set(item, obj);
    });
    requestMembership(rows);
  },
  GUILD_MEMBERS_CHUNK_BATCH: function handleGuildMembersChunkBatch(chunks) {
    let blockedOrIgnored;
    let omitUserIds;
    chunks = chunks.chunks;
    set = undefined;
    let id = null;
    if (null != user) {
      id = null;
      if (inviteTargetType !== InviteTargetTypes.EMBEDDED_APPLICATION) {
        let type;
        if (channel != null) {
          type = channel.type;
        }
        let tmp5 = constants;
        id = null;
        if (type !== constants.GUILD_VOICE) {
          let tmp6 = user;
          id = user.id;
        }
      }
    }
    if (null == id) {
      return false;
    } else {
      const _Set = Set;
      const self3 = this;
      const self4 = this;
      set = new Set(rows.map((item) => item.item.id));
      if (chunks.some((guildId) => {
        let someResult = guildId.guildId === id;
        if (someResult) {
          const members = guildId.members;
          someResult = members.some((user) => set.has(user.user.id));
        }
        return someResult;
      })) {
        let tmp7 = query;
        let closure_4 = "" !== query;
        let tmp8 = (function _computeRows(query) {
          let constants2;
          let set1;
          set = new Set();
          const tmp = closure_25();
          const obj2 = set1(closure_2[9]);
          const mostRecentDMedUser = obj2.getMostRecentDMedUser(omitUserIds, tmp);
          const isBlockedOrIgnoredResult = null == mostRecentDMedUser || blockedOrIgnored.isBlockedOrIgnored(mostRecentDMedUser.id);
          if (!isBlockedOrIgnoredResult) {
            set.add(mostRecentDMedUser.id);
          }
          userAffinities = userAffinities.getUserAffinities();
          for (const item10031 of userAffinities) {
            let addResult1 = set.add(item10031.otherUserId);
            continue;
          }
          set1 = new Set();
          if (inviteTargetType === constants.EMBEDDED_APPLICATION) {
            channelHistory = channelHistory.getChannelHistory();
            const mapped = channelHistory.map((item) => channel.getChannel(item));
            const found = mapped.filter(set1(closure_2[11]).isNotNullish);
            const found1 = found.filter((type) => type.type === constants.GUILD_TEXT);
            const found2 = found1.filter((item) => closure_1_14.can(constants2.SEND_MESSAGES, item));
            const substr = found2.slice(0, 3);
            const item = substr.forEach((id) => set1.add(id.id));
          }
          const obj = { query, omitUserIds, suggestedUserIds: set, maxRowsWithoutQuery: 100, omitGuildId: tmp, suggestedChannelIds: set1, inviteTargetType };
          const obj3 = set1(closure_2[9]);
          return obj3.generateRowsForQuery(obj);
        })(query);
        ({ rows, counts } = tmp8);
        let tmp9 = closure_4;
        if (tmp9) {
          let tmp10 = compareRowsByMatchScore;
          const sorted = rows.sort(compareRowsByMatchScore);
        }
        const _Map = Map;
        const self = this;
        const self2 = this;
        map = new Map();
        let item = rows.forEach((item, index) => {
          const obj = { index };
          const result = map.set(item, obj);
        });
        requestMembership(rows);
      } else {
        return false;
      }
    }
  }
};
const inviteSuggestionsStore = new InviteSuggestionsStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/InviteSuggestionsStore.tsx");

export default inviteSuggestionsStore;
