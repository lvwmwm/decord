// Module ID: 7880
// Function ID: 7881
// Name: MessageReactionsStore
// Dependencies: [4710, 1404, 2064, 1390, 504, 7881, 584, 2]

// Module 7880 (MessageReactionsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ReactionActionCreatorsAll from "ReactionActionCreators" /* 7881 */;
import LurkingStore from "LurkingStore" /* 4710 */;
import UserRecord from "UserRecord" /* 1404 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import UserStore from "UserStore" /* 1390 */;
import size from "module_2" /* 2 */;

let closure_6, map, set;

function handleReaction(userId) {
  userId = userId.userId;
  const type = userId.type;
  const ensureResult = Reaction.ensure(userId.messageId, userId.emoji, userId.reactionType);
  if ("MESSAGE_REACTION_ADD" === type) {
    const user = UserStore.getUser(userId);
    if (null != user) {
      const users2 = ensureResult.users;
      const result = users2.set(userId, user);
    }
  } else {
    const users = ensureResult.users;
    users.delete(userId);
  }
}
const metroRequire = {};
class Reaction {
  constructor() {
    const obj = Object.create(new.target.prototype);
    obj.fetched = false;
    obj.users = new Map();
    new Map();
    return obj;
  }
  static ensure(arg0, arg1, arg2) {
    let id;
    let name;
    ({ name, id } = arg1);
    if (id == null) {
      id = "";
    }
    const combined = "" + arg0 + ":" + name + ":" + id + ":" + arg2;
    let tmp3 = closure_6[combined];
    const tmp2 = closure_6;
    if (tmp3 == null) {
      const self = this;
      if (typeof Reaction === "function") {
        const obj = Object.create(Reaction.prototype);
        obj.fetched = false;
        const _Map = Map;
        const self2 = this;
        const self3 = this;
        obj.users = new Map();
        tmp3 = obj;
        map = new Map();
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    tmp2[combined] = tmp3;
    return tmp3;
  }
}
const Store = get_initializedDefault.Store;
class MessageReactionsStore extends Store {
  initialize() {
    this.waitFor(ChannelStore, LurkingStore, UserStore);
  }
  getReactions(channelId, messageId, emoji, limit, VOTE) {
    const ensureResult = Reaction.ensure(messageId, emoji, VOTE);
    if (!ensureResult.fetched) {
      const channel = ChannelStore.getChannel(channelId);
      let guildId = null;
      if (null != channel) {
        guildId = channel.getGuildId();
      }
      const obj = { channelId, messageId, emoji, limit, type: VOTE };
      const obj2 = ReactionActionCreatorsAll;
      const reactors = obj2.getReactors(obj);
      ensureResult.fetched = true;
    }
    return ensureResult.users;
  }
}
const prototype = MessageReactionsStore.prototype;
MessageReactionsStore.displayName = "MessageReactionsStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_6 = {};
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_ADD_USERS: function handleAddUserReactions(users) {
    users = undefined;
    users = Reaction.ensure(users.messageId, users.emoji, users.reactionType);
    const item = users.forEach((id) => {
      users = users.users;
      id = id.id;
      set = users.set;
      const tmp = new UserRecord(id);
      return set(id, tmp);
    });
  }
};
const messageReactionsStore = new MessageReactionsStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/MessageReactionsStore.tsx");

export default messageReactionsStore;
