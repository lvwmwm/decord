// Module ID: 6693
// Function ID: 51765
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 15, 17, 18, 5720, 5719, 566, 686, 2]

// Module 6693 (_createForOfIteratorHelperLoose)
import createResolvedGuildTemplate from "createResolvedGuildTemplate";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { GuildTemplateStates } from "GUILD_TEMPLATES_MEMBER_COUNT_PROMOTION_THRESHOLD";

function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
    map = new Map(map);
    const result = map.set(code, obj);
  }
}
function handleGuildTemplateResolveSuccess(guildTemplate) {
  resolveGuildTemplate(guildTemplate.guildTemplate);
}
function resolveGuildTemplate(code) {
  let closure_0 = code;
  updateGuildTemplate(code.code, (arg0) => {
    const tmp = code(outer1_1[6])(code);
    for (const key10011 in tmp) {
      let tmp2 = key10011;
      arg0[key10011] = tmp[key10011];
      continue;
    }
  });
}
function handleGuildTemplateResolveFailure(code) {
  updateGuildTemplate(code.code, (arg0) => {
    arg0.state = outer1_7.EXPIRED;
  });
}
let map = new Map();
let c9 = null;
let tmp3 = ((Store) => {
  class GuildTemplateStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, GuildTemplateStore);
      obj = outer1_5(GuildTemplateStore);
      tmp2 = outer1_4;
      if (outer1_12()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildTemplateStore, Store);
  let obj = {
    key: "getGuildTemplate",
    value(arg0) {
      if (null != arg0) {
        return outer1_8.get(arg0);
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getGuildTemplates",
    value() {
      return outer1_8;
    }
  };
  items[1] = obj;
  obj = {
    key: "getForGuild",
    value(arg0) {
      let value;
      const tmp = outer1_10(outer1_8.keys());
      const iter = tmp();
      let iter2 = iter;
      if (!iter.done) {
        while (true) {
          let tmp2 = outer1_8;
          value = outer1_8.get(iter2.value);
          if (null != value) {
            if ("sourceGuildId" in value) {
              if (value.sourceGuildId === arg0) {
                let tmp4 = outer1_7;
                if (value.state !== outer1_7.EXPIRED) {
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
      return outer1_9;
    }
  };
  return callback(GuildTemplateStore, items);
})(require("initialize").Store);
tmp3.displayName = "GuildTemplateStore";
tmp3 = new tmp3(require("dispatcher"), {
  GUILD_TEMPLATE_RESOLVE: function handleGuildTemplateResolve(code) {
    code = code.code;
    map = new Map(map);
    const result = map.set(code, { code, state: GuildTemplateStates.RESOLVING });
  },
  GUILD_TEMPLATE_CREATE_SUCCESS: handleGuildTemplateResolveSuccess,
  GUILD_TEMPLATE_SYNC_SUCCESS: handleGuildTemplateResolveSuccess,
  GUILD_TEMPLATE_RESOLVE_SUCCESS: handleGuildTemplateResolveSuccess,
  GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS: function handleGuildTemplateLoadForGuildSuccess(guildTemplates) {
    guildTemplates = guildTemplates.guildTemplates;
    const item = guildTemplates.forEach((arg0) => {
      outer1_14(arg0);
    });
  },
  GUILD_TEMPLATE_RESOLVE_FAILURE: handleGuildTemplateResolveFailure,
  GUILD_TEMPLATE_DELETE_SUCCESS: handleGuildTemplateResolveFailure,
  GUILD_TEMPLATE_ACCEPT: function handleGuildTemplateAccept(code) {
    updateGuildTemplate(code.code, (arg0) => {
      arg0.state = outer1_7.ACCEPTING;
    });
  },
  GUILD_TEMPLATE_ACCEPT_SUCCESS: function handleGuildTemplateAcceptSuccess(code) {
    updateGuildTemplate(code.code, (usageCount) => {
      usageCount.state = outer1_7.ACCEPTED;
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
      arg0.state = outer1_7.RESOLVED;
    });
  },
  GUILD_TEMPLATE_MODAL_SHOW: function handleGuildTemplateModalShow(code) {
    code = code.code;
  },
  GUILD_TEMPLATE_MODAL_HIDE: function handleGuildTemplateModalHide() {
    let c9 = null;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_templates/GuildTemplateStore.tsx");

export default tmp3;
