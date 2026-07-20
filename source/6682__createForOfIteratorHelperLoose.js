// Module ID: 6682
// Function ID: 51665
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 6682 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let importDefault = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      importDefault = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function updateGuildTemplate(code) {
  if (null != code) {
    let value = map.get(code);
    if (null != value) {
      let obj = {};
      const merged = Object.assign(value);
    } else {
      obj = { code, state: GuildTemplateStates.RESOLVING };
    }
    arg1(obj);
    const _Map = Map;
    value = new.target;
    const map = new Map(map);
    const result = map.set(code, obj);
  }
}
function handleGuildTemplateResolveSuccess(guildTemplate) {
  resolveGuildTemplate(guildTemplate.guildTemplate);
}
function resolveGuildTemplate(code) {
  const importDefault = code;
  updateGuildTemplate(code.code, (arg0) => {
    const tmp = arg0(closure_1[6])(arg0);
    for (const key10011 in tmp) {
      let tmp2 = key10011;
      arg0[key10011] = tmp[key10011];
    }
  });
}
function handleGuildTemplateResolveFailure(code) {
  updateGuildTemplate(code.code, (arg0) => {
    arg0.state = constants.EXPIRED;
  });
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const GuildTemplateStates = arg1(dependencyMap[5]).GuildTemplateStates;
const map = new Map();
let closure_9 = null;
let tmp3 = (Store) => {
  class GuildTemplateStore {
    constructor() {
      self = this;
      tmp = closure_2(this, GuildTemplateStore);
      obj = closure_5(GuildTemplateStore);
      tmp2 = closure_4;
      if (closure_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = GuildTemplateStore;
  callback2(GuildTemplateStore, Store);
  let obj = {
    key: "getGuildTemplate",
    value(arg0) {
      if (null != arg0) {
        return store.get(arg0);
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getGuildTemplates",
    value() {
      return closure_8;
    }
  };
  items[1] = obj;
  obj = {
    key: "getForGuild",
    value(arg0) {
      let value;
      const tmp = callback3(store.keys());
      const iter = tmp();
      let iter2 = iter;
      if (!iter.done) {
        while (true) {
          let tmp2 = store;
          value = store.get(iter2.value);
          if (null != value) {
            if ("sourceGuildId" in value) {
              if (value.sourceGuildId === arg0) {
                let tmp4 = constants;
                if (value.state !== constants.EXPIRED) {
                  break;
                }
              }
            }
          }
          let iter3 = tmp();
          iter2 = iter3;
        }
        return value;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getDisplayedGuildTemplateCode",
    value() {
      return closure_9;
    }
  };
  return callback(GuildTemplateStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp3.displayName = "GuildTemplateStore";
tmp3 = new tmp3(importDefault(dependencyMap[8]), {
  GUILD_TEMPLATE_RESOLVE: function handleGuildTemplateResolve(code) {
    code = code.code;
    const map = new Map(map);
    const result = map.set(code, { code, state: GuildTemplateStates.RESOLVING });
  },
  GUILD_TEMPLATE_CREATE_SUCCESS: handleGuildTemplateResolveSuccess,
  GUILD_TEMPLATE_SYNC_SUCCESS: handleGuildTemplateResolveSuccess,
  GUILD_TEMPLATE_RESOLVE_SUCCESS: handleGuildTemplateResolveSuccess,
  GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS: function handleGuildTemplateLoadForGuildSuccess(guildTemplates) {
    guildTemplates = guildTemplates.guildTemplates;
    const item = guildTemplates.forEach((arg0) => {
      callback(arg0);
    });
  },
  GUILD_TEMPLATE_RESOLVE_FAILURE: handleGuildTemplateResolveFailure,
  GUILD_TEMPLATE_DELETE_SUCCESS: handleGuildTemplateResolveFailure,
  GUILD_TEMPLATE_ACCEPT: function handleGuildTemplateAccept(code) {
    updateGuildTemplate(code.code, (arg0) => {
      arg0.state = constants.ACCEPTING;
    });
  },
  GUILD_TEMPLATE_ACCEPT_SUCCESS: function handleGuildTemplateAcceptSuccess(code) {
    updateGuildTemplate(code.code, (usageCount) => {
      usageCount.state = constants.ACCEPTED;
      usageCount = usageCount.usageCount;
      let num = 0;
      if (null != usageCount) {
        num = usageCount;
      }
      usageCount.usageCount = num + 1;
    });
  },
  GUILD_TEMPLATE_ACCEPT_FAILURE: function handleAcceptInviteFailure(code) {
    updateGuildTemplate(code.code, (arg0) => {
      arg0.state = constants.RESOLVED;
    });
  },
  GUILD_TEMPLATE_MODAL_SHOW: function handleGuildTemplateModalShow(code) {
    code = code.code;
  },
  GUILD_TEMPLATE_MODAL_HIDE: function handleGuildTemplateModalHide() {
    let closure_9 = null;
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/guild_templates/GuildTemplateStore.tsx");

export default tmp3;
