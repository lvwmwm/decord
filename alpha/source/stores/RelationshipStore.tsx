// Module ID: 4946
// Function ID: 4947
// Name: RelationshipStore
// Dependencies: [32, 4947, 1389, 1084, 584, 504, 4924, 2]

// Module 4946 (RelationshipStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1084 */;
import GuildLeaderboardTypes from "GuildLeaderboardTypes" /* 4924 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import MessageRecord from "MessageRecord" /* 4947 */;
import UserStore from "UserStore" /* 1389 */;
import size_mod from "module_2" /* 2 */;

let closure_16;

function markAllUserIdListsStale() {
  set3.add("friends");
  set3.add("blocked");
  set3.add("ignored");
  set3.add("blockedOrIgnored");
}
function flushStaleUserIdLists() {
  for (const item10005 of set3) {
    closure_20[item10005] = undefined;
    continue;
  }
  set3.clear();
}
function upsertRelationship(id, type) {
  const value = map.get(id);
  const obj = map;
  if (value !== type) {
    if (null != value) {
      const value3 = map1.get(value);
      if (value3 != null) {
        value3.delete(id);
      }
    }
    const result = obj.set(id, type);
    const value4 = map1.get(type);
    const tmp5 = map1;
    if (null != value4) {
      value4.add(id);
    } else {
      const _Set = Set;
      const items = [id];
      const self = this;
      const self2 = this;
      set = tmp5.set;
      set1 = new Set(items);
      const result1 = set(type, set1);
    }
    if (value === RelationshipTypes.FRIEND) {
      set3.add("friends");
    } else if (value === RelationshipTypes.BLOCKED) {
      set3.add("blocked");
      set3.add("ignored");
      set3.add("blockedOrIgnored");
    }
    if (type === RelationshipTypes.FRIEND) {
      set3.add("friends");
    } else if (type === RelationshipTypes.BLOCKED) {
      set3.add("blocked");
      set3.add("ignored");
      set3.add("blockedOrIgnored");
    }
  }
}
function removeRelationship(arg0) {
  const value = map.get(arg0);
  const obj = map;
  if (null != value) {
    obj.delete(arg0);
    const value2 = map1.get(value);
    if (value2 != null) {
      value2.delete(arg0);
    }
    if (value === RelationshipTypes.FRIEND) {
      set3.add("friends");
    } else if (value === tmp3.BLOCKED) {
      set3.add("blocked");
      set3.add("ignored");
      set3.add("blockedOrIgnored");
    }
  }
}
function recountPending() {
  size = set2.size;
  const _Math = Math;
  const value = map1.get(RelationshipTypes.PENDING_INCOMING);
  let num;
  if (value != null) {
    num = value.size;
  }
  if (num == null) {
    num = 0;
  }
  closure_17 = max(num - size - size, 0);
  closure_15 = closure_15 + 1;
}
const RelationshipTypes = Constants.RelationshipTypes;
const map = new Map();
let obj6 = {};
let obj10 = {};
let obj11 = {};
let set = new Set();
let set1 = new Set();
const set2 = new Set();
let obj12 = {};
let closure_15 = 0;
const authStore3 = {};
let closure_17 = 0;
let size = 0;
let closure_20 = { friends: "left", blocked: "ix", ignored: "Math", blockedOrIgnored: "shapes" };
const set3 = new Set();
const map1 = new Map();
const Store = get_initializedDefault.Store;
class RelationshipStore extends Store {
  initialize() {
    this.waitFor(UserStore);
  }
  isFriend(id) {
    const tmp = null != id && map.get(id) === RelationshipTypes.FRIEND;
    return tmp;
  }
  isBlockedOrIgnored(id) {
    const self = this;
    const tmp = this.isBlocked(id) || self.isIgnored(id);
    return tmp;
  }
  isBlockedOrIgnoredForMessage(message) {
    const self = this;
    const tmp = this.isBlockedForMessage(message) || self.isIgnoredForMessage(message);
    return tmp;
  }
  isBlocked(arg0) {
    const tmp = null != arg0 && map.get(arg0) === RelationshipTypes.BLOCKED;
    return tmp;
  }
  isBlockedForMessage(message) {
    let leaderboard;
    const self = this;
    if (null != message.author) {
      if (map.get(message.author.id) === RelationshipTypes.BLOCKED) {
        return true;
      }
    }
    const isBlocked = self.isBlocked;
    const tmp3 = MessageRecord;
    if (message instanceof MessageRecord) {
      const interactionMetadata = message.interactionMetadata;
      let id;
      if (interactionMetadata != null) {
        const user2 = interactionMetadata.user;
        if (user2 != null) {
          id = user2.id;
        }
      }
      if (isBlocked(id)) {
        return true;
      }
    } else {
      const interaction_metadata = message.interaction_metadata;
      let id1;
      if (interaction_metadata != null) {
        const user = interaction_metadata.user;
        if (user != null) {
          id1 = user.id;
        }
      }
      if (isBlocked(id1)) {
        return true;
      }
    }
    if (message instanceof tmp3) {
      const guildSpaceData = message.guildSpaceData;
      let leaderboard1;
      if (guildSpaceData != null) {
        leaderboard1 = guildSpaceData.leaderboard;
      }
      leaderboard = leaderboard1;
    } else {
      const guild_space_data = message.guild_space_data;
      if (guild_space_data != null) {
        leaderboard = guild_space_data.leaderboard;
      }
    }
    let someResult = null != leaderboard;
    if (someResult) {
      const obj = GuildLeaderboardTypes;
      const guildSpaceLeaderboardUserIds = obj.getGuildSpaceLeaderboardUserIds(leaderboard);
      someResult = guildSpaceLeaderboardUserIds.some((item) => self.isBlocked(item));
    }
    return someResult;
  }
  isIgnored(arg0) {
    let tmp = null != arg0;
    if (tmp) {
      const hasItem = map.get(arg0) !== RelationshipTypes.BLOCKED && set1.has(arg0);
      tmp = hasItem;
    }
    return tmp;
  }
  isIgnoredForMessage(message) {
    let leaderboard;
    const self = this;
    if (null != message.author) {
      if (self.isIgnored(message.author.id)) {
        return true;
      }
    }
    const isIgnored = self.isIgnored;
    const tmp = MessageRecord;
    if (message instanceof MessageRecord) {
      const interactionMetadata = message.interactionMetadata;
      let id;
      if (interactionMetadata != null) {
        const user2 = interactionMetadata.user;
        if (user2 != null) {
          id = user2.id;
        }
      }
      if (isIgnored(id)) {
        return true;
      }
    } else {
      const interaction_metadata = message.interaction_metadata;
      let id1;
      if (interaction_metadata != null) {
        const user = interaction_metadata.user;
        if (user != null) {
          id1 = user.id;
        }
      }
      if (isIgnored(id1)) {
        return true;
      }
    }
    if (message instanceof tmp) {
      const guildSpaceData = message.guildSpaceData;
      let leaderboard1;
      if (guildSpaceData != null) {
        leaderboard1 = guildSpaceData.leaderboard;
      }
      leaderboard = leaderboard1;
    } else {
      const guild_space_data = message.guild_space_data;
      if (guild_space_data != null) {
        leaderboard = guild_space_data.leaderboard;
      }
    }
    let someResult = null != leaderboard;
    if (someResult) {
      const obj = GuildLeaderboardTypes;
      const guildSpaceLeaderboardUserIds = obj.getGuildSpaceLeaderboardUserIds(leaderboard);
      someResult = guildSpaceLeaderboardUserIds.some((item) => self.isIgnored(item));
    }
    return someResult;
  }
  isUnfilteredPendingIncoming(nextResult) {
    const self = this;
    const tmp = map.get(nextResult) === RelationshipTypes.PENDING_INCOMING && !self.isSpam(nextResult) && !self.isIgnored(nextResult);
    return tmp;
  }
  getPendingCount() {
    return closure_17;
  }
  getSpamCount() {
    return size;
  }
  getPendingIgnoredCount() {
    return size;
  }
  getOutgoingCount() {
    const value = map1.get(RelationshipTypes.PENDING_OUTGOING);
    let num;
    if (value != null) {
      num = value.size;
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }
  getFriendCount() {
    const value = map1.get(RelationshipTypes.FRIEND);
    let num;
    if (value != null) {
      num = value.size;
    }
    if (num == null) {
      num = 0;
    }
    return num;
  }
  getRelationshipCount() {
    return map.size;
  }
  getMutableRelationships() {
    return map;
  }
  getVersion() {
    return closure_15;
  }
  isSpam(arg0) {
    return set.has(arg0);
  }
  getRelationshipType(arg0) {
    let NONE = map.get(arg0);
    if (null == NONE) {
      NONE = RelationshipTypes.NONE;
    }
    return NONE;
  }
  getNickname(arg0) {
    return obj6[arg0];
  }
  getSince(userId) {
    return obj10[userId];
  }
  getSinces() {
    return obj10;
  }
  getNote(arg0) {
    return obj11[arg0];
  }
  getFriendIDs() {
    if (null == closure_20.friends) {
      const _Array = Array;
      let items = map1.get(RelationshipTypes.FRIEND);
      if (items == null) {
        items = [];
      }
      closure_20.friends = from(items);
    }
    return closure_20.friends;
  }
  getBlockedIDs() {
    if (null == closure_20.blocked) {
      const _Array = Array;
      let items = map1.get(RelationshipTypes.BLOCKED);
      if (items == null) {
        items = [];
      }
      closure_20.blocked = from(items);
    }
    return closure_20.blocked;
  }
  getIgnoredIDs() {
    const self = this;
    if (null == closure_20.ignored) {
      const _Array = Array;
      const arr = Array.from(set1.values());
      closure_20.ignored = arr.filter((item) => self.isIgnored(item));
    }
    return closure_20.ignored;
  }
  getBlockedOrIgnoredIDs() {
    let tmp = closure_20;
    if (null == closure_20.blockedOrIgnored) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(set1);
      const value = map1.get(RelationshipTypes.BLOCKED);
      if (null != value) {
        for (const item10019 of value) {
          let addResult = set.add(item10019);
          continue;
        }
      }
      closure_20.blockedOrIgnored = set;
      tmp = closure_20;
    }
    return tmp.blockedOrIgnored;
  }
  getOriginApplicationId(id) {
    return obj12[id];
  }
  isStranger(userId) {
    if (null != closure_16[userId]) {
      const _Date = Date;
      if (closure_16[userId].expiry < Date.now()) {
        delete closure_16[tmp];
      } else {
        return closure_16[userId].isStranger;
      }
    }
  }
}
const prototype = RelationshipStore.prototype;
RelationshipStore.displayName = "RelationshipStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen(relationships) {
    map.clear();
    map1.clear();
    obj6 = {};
    obj10 = {};
    obj11 = {};
    set1.clear();
    set.clear();
    set2.clear();
    set3.add("friends");
    set3.add("blocked");
    set3.add("ignored");
    set3.add("blockedOrIgnored");
    obj12 = {};
    closure_16 = {};
    relationships = relationships.relationships;
    const item = relationships.forEach((id) => {
      upsertRelationship(id.id, id.type);
      if (null != id.nickname) {
        obj6[id.id] = id.nickname;
      }
      if (null != id.since) {
        obj10[id.id] = id.since;
      }
      if (null != id.note) {
        obj11[id.id] = id.note;
      }
      if (id.is_spam_request) {
        set.add(id.id);
      }
      if (null != id.origin_application_id) {
        obj12[id.id] = id.origin_application_id;
      }
      if (id.user_ignored) {
        id = id.id;
        const obj = set2;
        if (!set2.has(id)) {
          obj.add(id);
          set4.add("ignored");
          set4.add("blockedOrIgnored");
        }
        if (id.type === constants.PENDING_INCOMING) {
          set3.add(id.id);
        }
      }
    });
    flushStaleUserIdLists();
    size = set2.size;
    const _Math = Math;
    const value = map1.get(RelationshipTypes.PENDING_INCOMING);
    let num;
    if (value != null) {
      num = value.size;
    }
    if (num == null) {
      num = 0;
    }
    closure_17 = max(num - size - size, 0);
    closure_15 = closure_15 + 1;
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(arg0) {
    map.clear();
    map1.clear();
    markAllUserIdListsStale();
    const tmp4 = arg0.relationships[Symbol.iterator]();
    while (tmp4 !== undefined) {
      let tmp7 = _slicedToArray(tmp5, 2);
      let tmp9 = upsertRelationship(tmp7[0], tmp7[1]);
      continue;
    }
    flushStaleUserIdLists();
    recountPending();
  },
  RELATIONSHIP_ADD: function handleRelationshipAdd(relationship) {
    const value = map.get(relationship.relationship.id);
    upsertRelationship(relationship.relationship.id, relationship.relationship.type);
    if (null != relationship.relationship.nickname) {
      const obj = {};
      const merged = Object.assign(obj6);
      obj[relationship.relationship.id] = relationship.relationship.nickname;
      obj6 = obj;
    }
    if (null != relationship.relationship.since) {
      const obj2 = {};
      const merged1 = Object.assign(obj10);
      obj2[relationship.relationship.id] = relationship.relationship.since;
    }
    if (null != relationship.relationship.note) {
      const obj3 = {};
      const merged2 = Object.assign(obj11);
      obj3[relationship.relationship.id] = relationship.relationship.note;
    }
    if (null != relationship.relationship.originApplicationId) {
      const obj4 = {};
      const merged3 = Object.assign(obj12);
      obj4[relationship.relationship.id] = relationship.relationship.originApplicationId;
    }
    if (relationship.relationship.isSpamRequest) {
      set.add(relationship.relationship.id);
    } else {
      set.delete(relationship.relationship.id);
    }
    const id = relationship.relationship.id;
    obj6 = set1;
    if (relationship.relationship.userIgnored) {
      if (!obj6.has(id)) {
        obj6.add(id);
        set3.add("ignored");
        set3.add("blockedOrIgnored");
      }
      if (relationship.relationship.type === RelationshipTypes.PENDING_INCOMING) {
        set2.add(relationship.relationship.id);
      } else if (relationship.relationship.type === tmp27.FRIEND) {
        set2.delete(relationship.relationship.id);
      }
    } else {
      if (obj6.delete(id)) {
        set3.add("ignored");
        set3.add("blockedOrIgnored");
      }
      set2.delete(relationship.relationship.id);
    }
    flushStaleUserIdLists();
    size = set2.size;
    const _Math = Math;
    const value2 = map1.get(RelationshipTypes.PENDING_INCOMING);
    let num;
    if (value2 != null) {
      num = value2.size;
    }
    if (num == null) {
      num = 0;
    }
    closure_17 = max(num - size - size, 0);
    closure_15 = closure_15 + 1;
    const tmp35 = relationship.relationship.type === RelationshipTypes.FRIEND && value === RelationshipTypes.PENDING_OUTGOING;
    if (tmp35) {
      const obj8 = { type: "FRIEND_REQUEST_ACCEPTED", user: relationship.relationship.user };
      const obj7 = DispatcherDefault;
      obj7.dispatch(obj8);
    }
  },
  RELATIONSHIP_REMOVE: function handleRelationshipRemove(relationship) {
    const id = relationship.relationship.id;
    const value = map.get(id);
    const obj = map;
    if (null != value) {
      obj.delete(id);
      const value3 = map1.get(value);
      if (value3 != null) {
        value3.delete(id);
      }
      if (value === RelationshipTypes.FRIEND) {
        set3.add("friends");
      } else if (value === tmp3.BLOCKED) {
        set3.add("blocked");
        set3.add("ignored");
        set3.add("blockedOrIgnored");
      }
    }
    if (null != obj6[relationship.relationship.id]) {
      obj6 = {};
      const merged = Object.assign(obj6);
      delete obj2[relationship.relationship.id];
    }
    if (null != obj10[relationship.relationship.id]) {
      obj10 = {};
      const merged1 = Object.assign(obj10);
      delete obj3[relationship.relationship.id];
    }
    if (null != obj11[relationship.relationship.id]) {
      obj11 = {};
      const merged2 = Object.assign(obj11);
      delete obj4[relationship.relationship.id];
    }
    if (null != obj12[relationship.relationship.id]) {
      obj12 = {};
      const merged3 = Object.assign(obj12);
      delete obj5[relationship.relationship.id];
    }
    if (!relationship.relationship.userIgnored) {
      if (set1.delete(relationship.relationship.id)) {
        set3.add("ignored");
        set3.add("blockedOrIgnored");
      }
    }
    set2.delete(relationship.relationship.id);
    set.delete(relationship.relationship.id);
    flushStaleUserIdLists();
    size = set2.size;
    const _Math = Math;
    const value4 = map1.get(RelationshipTypes.PENDING_INCOMING);
    let num;
    if (value4 != null) {
      num = value4.size;
    }
    if (num == null) {
      num = 0;
    }
    closure_17 = max(num - size - size, 0);
    closure_15 = closure_15 + 1;
  },
  RELATIONSHIP_UPDATE: function handleRelationshipUpdate(relationship) {
    relationship = relationship.relationship;
    upsertRelationship(relationship.id, relationship.type);
    if (null == relationship.since) {
      delete obj10[relationship.id];
    } else {
      obj10[relationship.id] = relationship.since;
    }
    if (null == relationship.nickname) {
      delete obj6[relationship.id];
    } else {
      obj6[relationship.id] = relationship.nickname;
    }
    if (null == relationship.note) {
      delete obj11[relationship.id];
    } else {
      obj11[relationship.id] = relationship.note;
    }
    if (relationship.isSpamRequest) {
      set.add(relationship.id);
    } else {
      set.delete(relationship.id);
    }
    if (null != closure_16[relationship.id]) {
      delete closure_16[relationship.id];
    }
    if (null == relationship.originApplicationId) {
      delete obj12[relationship.id];
    } else {
      obj12[relationship.id] = relationship.originApplicationId;
    }
    const id = relationship.id;
    if (relationship.userIgnored) {
      if (!set1.has(id)) {
        set1.add(id);
        set3.add("ignored");
        set3.add("blockedOrIgnored");
      }
      if (relationship.type === RelationshipTypes.PENDING_INCOMING) {
        set2.add(relationship.id);
      }
    } else {
      if (set1.delete(id)) {
        set3.add("ignored");
        set3.add("blockedOrIgnored");
      }
      set2.delete(relationship.id);
    }
    flushStaleUserIdLists();
    size = set2.size;
    const _Math = Math;
    const value = map1.get(RelationshipTypes.PENDING_INCOMING);
    let num;
    if (value != null) {
      num = value.size;
    }
    if (num == null) {
      num = 0;
    }
    closure_17 = max(num - size - size, 0);
    closure_15 = closure_15 + 1;
  },
  RELATIONSHIP_PENDING_INCOMING_REMOVED: function handlePendingIncomingRemoved() {
    const keys = map.keys();
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if (map.get(nextResult) === RelationshipTypes.PENDING_INCOMING) {
        let tmp7 = nextResult;
        let tmp8 = removeRelationship(tmp3);
        let deleteResult = set.delete(tmp3);
        let deleteResult1 = set2.delete(tmp3);
        delete closure_16[tmp7];
      }
      continue;
    }
    flushStaleUserIdLists();
    recountPending();
  },
  UPDATE_STRANGER_STATUS: function handleUpdateStrangerStatus(isStranger) {
    closure_16[isStranger.userId] = { expiry: Date.now() + 300000, isStranger: isStranger.isStranger };
    ({ expiry: Date.now() + 300000, isStranger: isStranger.isStranger });
  }
};
const relationshipStore = new RelationshipStore(DispatcherDefault, obj);
size = size_mod;
let result = size.fileFinishedImporting("stores/RelationshipStore.tsx");

export default relationshipStore;
