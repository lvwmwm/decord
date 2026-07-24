// Module ID: 7003
// Function ID: 56024
// Name: _isNativeReflectConstruct
// Dependencies: [15, 17, 18, 6, 7, 3759, 1857, 1348, 1849, 7004, 566, 686, 2]

// Module 7003 (_isNativeReflectConstruct)
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";

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
    user = user.getUser(userId);
    if (null != user) {
      const users2 = ensureResult.users;
      const result = users2.set(userId, user);
    }
  } else {
    const users = ensureResult.users;
    users.delete(userId);
  }
}
let closure_11 = {};
let closure_12 = (() => {
  class Reaction {
    constructor() {
      tmp = outer1_5(this, Reaction);
      this.fetched = false;
      map = new Map();
      this.users = map;
      return;
    }
  }
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
        let tmp3 = outer1_11[combined];
        if (null == tmp3) {
          const prototype = Reaction.prototype;
          tmp3 = new Reaction();
        }
        outer1_11[combined] = tmp3;
        return tmp3;
      }
    }
  ];
  return callback2(Reaction, null, items);
})();
let tmp2 = ((Store) => {
  class MessageReactionsStore {
    constructor() {
      self = this;
      tmp = outer1_5(this, MessageReactionsStore);
      obj = outer1_3(MessageReactionsStore);
      tmp2 = outer1_2;
      if (outer1_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback(MessageReactionsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_9, outer1_7, outer1_10);
    }
  };
  const items = [obj, ];
  obj = {
    key: "getReactions",
    value(channelId, messageId, emoji, limit, type) {
      const ensureResult = outer1_12.ensure(messageId, emoji, type);
      if (!ensureResult.fetched) {
        const channel = outer1_9.getChannel(channelId);
        let guildId = null;
        if (null != channel) {
          guildId = channel.getGuildId();
        }
        const obj = { channelId, messageId, emoji, limit, type };
        const reactors = MessageReactionsStore(outer1_1[9]).getReactors(obj);
        ensureResult.fetched = true;
        const obj2 = MessageReactionsStore(outer1_1[9]);
      }
      return ensureResult.users;
    }
  };
  items[1] = obj;
  return callback2(MessageReactionsStore, items);
})(require("initialize").Store);
tmp2.displayName = "MessageReactionsStore";
tmp2 = new tmp2(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_11 = {};
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_ADD_USERS: function handleAddUserReactions(users) {
    users = users.users;
    let closure_0 = closure_12.ensure(users.messageId, users.emoji, users.reactionType);
    const item = users.forEach((id) => {
      users = users.users;
      return users.set(id.id, new outer1_8(id));
    });
  }
});
let result = require("_inherits").fileFinishedImporting("stores/MessageReactionsStore.tsx");

export default tmp2;
