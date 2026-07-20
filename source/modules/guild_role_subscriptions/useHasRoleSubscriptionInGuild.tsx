// Module ID: 5627
// Function ID: 47969
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 5627 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
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
      arg1 = tmp;
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
function computeHasRoleSubscriptionsInGuild(guildId, unsafeMutableRoles) {
  let obj;
  let tmp = arg2;
  let tmp2 = arg3;
  if (arg2 === undefined) {
    let member = null;
    if (null != guildId) {
      member = member.getMember(guildId, id.getId());
    }
    tmp = member;
  }
  if (tmp2 === undefined) {
    const items = [closure_5];
    tmp2 = items;
  }
  [obj] = tmp2;
  const guild = obj.getGuild(guildId);
  if (null != guild) {
    if (null != tmp) {
      const features = guild.features;
      if (features.has(GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) {
        const tmp9 = _createForOfIteratorHelperLoose(tmp.roles);
        const iter = tmp9();
        let iter2 = iter;
        if (!iter.done) {
          while (true) {
            let tmp10;
            if (null != unsafeMutableRoles) {
              tmp10 = unsafeMutableRoles[iter2.value];
            }
            let prop;
            if (null != tmp10) {
              let tags = tmp10.tags;
              let tmp12 = tags;
              if (null != tags) {
                prop = tags.subscription_listing_id;
                let tmp13 = tags;
              }
            }
            if (null != prop) {
              break;
            } else {
              let iter3 = tmp9();
              iter2 = iter3;
            }
          }
          return true;
        }
        return false;
      }
    }
  }
  return false;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const GuildFeatures = arg1(dependencyMap[4]).GuildFeatures;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_role_subscriptions/useHasRoleSubscriptionInGuild.tsx");

export default function useHasRoleSubscriptionInGuild(arg0) {
  const arg1 = arg0;
  const items = [closure_2, closure_3];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => {
    let member = null;
    if (null != arg0) {
      member = member.getMember(arg0, id.getId());
    }
    return member;
  });
  const dependencyMap = stateFromStores;
  const obj = arg1(dependencyMap[5]);
  const items1 = [closure_5, closure_4];
  const items2 = [arg0, stateFromStores];
  return arg1(dependencyMap[5]).useStateFromStores(items1, () => {
    let rolesSnapshot;
    if (null != arg0) {
      rolesSnapshot = rolesSnapshot.getRolesSnapshot(arg0);
    }
    const items = [closure_5];
    return closure_9(arg0, rolesSnapshot, stateFromStores, items);
  }, items2);
};
export { computeHasRoleSubscriptionsInGuild };
