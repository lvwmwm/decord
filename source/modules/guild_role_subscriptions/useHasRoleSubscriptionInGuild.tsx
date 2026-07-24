// Module ID: 5633
// Function ID: 48064
// Name: _createForOfIteratorHelperLoose
// Dependencies: [1194, 1917, 1910, 1838, 653, 566, 2]
// Exports: default

// Module 5633 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_5 from "_createForOfIteratorHelperLoose";
import { GuildFeatures } from "ME";

const require = arg1;
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
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/guild_role_subscriptions/useHasRoleSubscriptionInGuild.tsx");

export default function useHasRoleSubscriptionInGuild(arg0) {
  const _require = arg0;
  let items = [_isNativeReflectConstruct, closure_3];
  stateFromStores = _require(stateFromStores[5]).useStateFromStores(items, () => {
    let member = null;
    if (null != closure_0) {
      member = outer1_3.getMember(closure_0, outer1_2.getId());
    }
    return member;
  });
  const obj = _require(stateFromStores[5]);
  const items1 = [closure_5, _createForOfIteratorHelperLoose];
  const items2 = [arg0, stateFromStores];
  return _require(stateFromStores[5]).useStateFromStores(items1, () => {
    let rolesSnapshot;
    if (null != closure_0) {
      rolesSnapshot = outer1_4.getRolesSnapshot(closure_0);
    }
    const items = [outer1_5];
    return outer1_9(closure_0, rolesSnapshot, stateFromStores, items);
  }, items2);
};
export { computeHasRoleSubscriptionsInGuild };
