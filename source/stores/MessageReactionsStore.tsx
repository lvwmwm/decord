// Module ID: 6999
// Function ID: 55981
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6999 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleReaction(userId) {
  userId = userId.userId;
  const ensureResult = closure_12.ensure(userId.messageId, userId.emoji, userId.reactionType);
  if ("MESSAGE_REACTION_ADD" === userId.type) {
    const user = user.getUser(userId);
    if (null != user) {
      const users2 = ensureResult.users;
      const result = users2.set(userId, user);
    }
  } else {
    const users = ensureResult.users;
    users.delete(userId);
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
let closure_11 = {};
let closure_12 = () => {
  class Reaction {
    constructor() {
      tmp = closure_5(this, Reaction);
      this.fetched = false;
      map = new Map();
      this.users = map;
      return;
    }
  }
  const importAll = Reaction;
  const items = [
    {
      key: "ensure",
      value(arg0, arg1, arg2) {
        let id;
        let name;
        ({ name, id } = arg1);
        let str = "";
        if (null != id) {
          str = id;
        }
        const combined = "" + arg0 + ":" + name + ":" + str + ":" + arg2;
        let tmp3 = closure_11[combined];
        if (null == tmp3) {
          const prototype = Reaction.prototype;
          tmp3 = new Reaction();
        }
        closure_11[combined] = tmp3;
        return tmp3;
      }
    }
  ];
  return callback2(Reaction, null, items);
}();
let tmp2 = (Store) => {
  class MessageReactionsStore {
    constructor() {
      self = this;
      tmp = closure_5(this, MessageReactionsStore);
      obj = closure_3(MessageReactionsStore);
      tmp2 = closure_2;
      if (closure_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importAll = MessageReactionsStore;
  callback(MessageReactionsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_9, closure_7, closure_10);
    }
  };
  const items = [obj, ];
  obj = {
    key: "getReactions",
    value(channelId, messageId, emoji, limit, type) {
      const ensureResult = closure_12.ensure(messageId, emoji, type);
      if (!ensureResult.fetched) {
        const channel = channel.getChannel(channelId);
        let guildId = null;
        if (null != channel) {
          guildId = channel.getGuildId();
        }
        const obj = { channelId, messageId, emoji, limit, type };
        const reactors = MessageReactionsStore(closure_1[9]).getReactors(obj);
        ensureResult.fetched = true;
        const obj2 = MessageReactionsStore(closure_1[9]);
      }
      return ensureResult.users;
    }
  };
  items[1] = obj;
  return callback2(MessageReactionsStore, items);
}(importDefault(dependencyMap[10]).Store);
tmp2.displayName = "MessageReactionsStore";
tmp2 = new tmp2(importDefault(dependencyMap[11]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_11 = {};
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_ADD_USERS: function handleAddUserReactions(users) {
    users = users.users;
    let closure_0 = closure_12.ensure(users.messageId, users.emoji, users.reactionType);
    const item = users.forEach((id) => {
      const users = users.users;
      return users.set(id.id, new closure_8(id));
    });
  }
});
const result = arg1(dependencyMap[12]).fileFinishedImporting("stores/MessageReactionsStore.tsx");

export default tmp2;
