// Module ID: 13248
// Function ID: 13249
// Name: OnlineFriendsStore
// Dependencies: [4877, 4482, 1086, 2068, 504, 585, 2]

// Module 13248 (OnlineFriendsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 585 */;
import Constants from "Constants" /* 1086 */;
import SetUtils from "SetUtils" /* 2068 */;
import PresenceStore from "PresenceStore" /* 4877 */;
import RelationshipStore from "RelationshipStore" /* 4482 */;
import size from "module_2" /* 2 */;

function upsert(id) {
  if (RelationshipStore.isFriend(id)) {
    let deleteResult;
    if (PresenceStore.getStatus(id) !== StatusTypes.OFFLINE) {
      const hasItem = set.has(id);
      let flag = !hasItem;
      if (flag) {
        set.add(id);
        flag = true;
      }
      deleteResult = flag;
    }
    return deleteResult;
  }
  deleteResult = set.delete(id);
}
function rebuild() {
  set = new Set();
  const friendIDs = RelationshipStore.getFriendIDs();
  for (const item10014 of friendIDs) {
    let tmp2 = item10014;
    if (PresenceStore.getStatus(item10014) !== StatusTypes.OFFLINE) {
      let addResult = set.add(tmp2);
    }
    continue;
  }
  const obj2 = SetUtils;
  return !obj2.areSetsEqual(set, set);
}
const StatusTypes = Constants.StatusTypes;
let set = new Set();
const Store = get_initializedDefault.Store;
class OnlineFriendsStore extends Store {
  initialize() {
    this.waitFor(PresenceStore, RelationshipStore);
  }
  getOnlineFriendCount() {
    return set.size;
  }
}
const prototype = OnlineFriendsStore.prototype;
OnlineFriendsStore.displayName = "OnlineFriendsStore";
const obj = {
  CONNECTION_OPEN: rebuild,
  CONNECTION_OPEN_SUPPLEMENTAL: rebuild,
  OVERLAY_INITIALIZE: rebuild,
  PRESENCES_REPLACE: rebuild,
  GUILD_CREATE: rebuild,
  GUILD_DELETE: rebuild,
  GUILD_MEMBER_REMOVE: function handleGuildMemberRemove(user) {
    const id = user.user.id;
    if (RelationshipStore.isFriend(id)) {
      let deleteResult;
      if (PresenceStore.getStatus(id) !== StatusTypes.OFFLINE) {
        const hasItem = set.has(id);
        let flag = !hasItem;
        if (flag) {
          set.add(id);
          flag = true;
        }
        deleteResult = flag;
      }
      return deleteResult;
    }
    deleteResult = set.delete(id);
  },
  PRESENCE_UPDATES: function handlePresenceUpdates(arg0) {
    let flag = false;
    const tmp = arg0.updates[Symbol.iterator]();
    while (tmp !== undefined) {
      let tmp4 = upsert(tmp2.user.id) || flag;
      flag = tmp4;
      continue;
    }
    return flag;
  },
  RELATIONSHIP_ADD: function handleRelationshipAdd(relationship) {
    const id = relationship.relationship.id;
    if (RelationshipStore.isFriend(id)) {
      let deleteResult;
      if (PresenceStore.getStatus(id) !== StatusTypes.OFFLINE) {
        const hasItem = set.has(id);
        let flag = !hasItem;
        if (flag) {
          set.add(id);
          flag = true;
        }
        deleteResult = flag;
      }
      return deleteResult;
    }
    deleteResult = set.delete(id);
  },
  RELATIONSHIP_REMOVE: function handleRelationshipRemove(relationship) {
    const id = relationship.relationship.id;
    if (RelationshipStore.isFriend(id)) {
      let deleteResult;
      if (PresenceStore.getStatus(id) !== StatusTypes.OFFLINE) {
        const hasItem = set.has(id);
        let flag = !hasItem;
        if (flag) {
          set.add(id);
          flag = true;
        }
        deleteResult = flag;
      }
      return deleteResult;
    }
    deleteResult = set.delete(id);
  },
  RELATIONSHIP_UPDATE: function handleRelationshipUpdate(relationship) {
    const id = relationship.relationship.id;
    if (RelationshipStore.isFriend(id)) {
      let deleteResult;
      if (PresenceStore.getStatus(id) !== StatusTypes.OFFLINE) {
        const hasItem = set.has(id);
        let flag = !hasItem;
        if (flag) {
          set.add(id);
          flag = true;
        }
        deleteResult = flag;
      }
      return deleteResult;
    }
    deleteResult = set.delete(id);
  },
  LOGOUT: function handleLogout() {
    const tmp = set.size > 0;
    set = new Set();
    return tmp;
  }
};
const onlineFriendsStore = new OnlineFriendsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/friends/OnlineFriendsStore.tsx");

export default onlineFriendsStore;
