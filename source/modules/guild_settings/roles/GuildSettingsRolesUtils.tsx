// Module ID: 16356
// Function ID: 127535
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 1917, 1849, 16347, 653, 566, 3969, 5150, 5047, 675, 5045, 1327, 2]
// Exports: filterFullMembersByQuery, filterRole, getSectionAnalyticsName, useGuildRoleMembers, useQueryGuildMembers

// Module 16356 (_createForOfIteratorHelperLoose)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { GuildSettingsRoleEditSections as closure_6 } from "MAX_SUBCATEGORIES";
import { AnalyticEvents } from "ME";

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
function useGuildMembers(id, callback) {
  const _require = id;
  let closure_1 = callback;
  let items = [_isNativeReflectConstruct];
  const items1 = [id, callback];
  stateFromStoresArray = _require(stateFromStoresArray[5]).useStateFromStoresArray(items, () => {
    const members = outer1_4.getMembers(closure_0);
    let found = members;
    if (null != closure_1) {
      found = members.filter(closure_1);
    }
    return found;
  }, items1);
  let obj = _require(stateFromStoresArray[5]);
  const items2 = [closure_5];
  const items3 = [stateFromStoresArray];
  const stateFromStoresObject = _require(stateFromStoresArray[5]).useStateFromStoresObject(items2, () => stateFromStoresArray.reduce((arg0, userId) => {
    const user = outer2_5.getUser(userId.userId);
    if (null != user) {
      arg0[userId.userId] = user;
    }
    return arg0;
  }, {}), items3);
  const items4 = [stateFromStoresArray, stateFromStoresObject, id];
  return stateFromStoresObject.useMemo(() => {
    let iter3;
    const items = [];
    const tmp = outer1_8(stateFromStoresArray);
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp2 = stateFromStoresObject;
        let obj = stateFromStoresObject[value.userId];
        if (null != obj) {
          obj = {};
          let nick = value.nick;
          let name = nick;
          if (null == nick) {
            let tmp3 = callback;
            let tmp4 = stateFromStoresArray;
            let obj2 = callback(stateFromStoresArray[6]);
            name = obj2.getName(obj);
          }
          obj.name = name;
          let tmp6 = callback;
          let tmp7 = stateFromStoresArray;
          let obj3 = callback(stateFromStoresArray[6]);
          obj.userTag = obj3.getUserTag(obj);
          obj.id = value.userId;
          let tmp8 = closure_0;
          obj.avatarSource = obj.getAvatarSource(closure_0);
          obj.avatarURL = obj.getAvatarURL(closure_0, 80);
          obj.bot = obj.bot;
          obj.verifiedBot = obj.isVerifiedBot();
          ({ roles: obj4.roles, userId: obj4.key } = value);
          obj.user = obj;
          let arr = items.push(obj);
          let tmp10 = nick;
        }
        iter3 = tmp();
        iter2 = iter3;
      } while (!iter3.done);
    }
    return items;
  }, items4);
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_settings/roles/GuildSettingsRolesUtils.tsx");

export const ADD_MEMBER_QUERY_LIMIT = 50;
export const MAX_PREFETCH_MEMBER_COUNT = 1000;
export { useGuildMembers };
export const useGuildRoleMembers = function useGuildRoleMembers(id, id2, onMembersLoadFail) {
  let closure_0 = id;
  let closure_1 = id2;
  let closure_2 = onMembersLoadFail;
  React = React.useRef(onMembersLoadFail);
  const effect = React.useEffect(() => {
    result.current = closure_2;
  });
  const items = [id, id2];
  const effect1 = React.useEffect(() => {
    const membersForRole = id(onMembersLoadFail[7]).requestMembersForRole(id, closure_1);
    membersForRole.catch(ref.current);
  }, items);
  const items1 = [id2];
  return useGuildMembers(id, React.useCallback((roles) => {
    roles = roles.roles;
    return roles.includes(closure_1);
  }, items1));
};
export const useQueryGuildMembers = function useQueryGuildMembers(id, formatted) {
  let closure_0 = id;
  let closure_1 = formatted;
  let closure_2 = React.useRef(false);
  const items = [id, formatted];
  const effect = React.useEffect(() => {
    let obj = callback(ref[8]);
    const members = obj.requestMembers(closure_0, callback, 200);
    let current = "" === callback;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      obj = { search_type: "Role Members" };
      callback(ref[9]).track(outer1_7.SEARCH_STARTED, obj);
      ref.current = true;
      const obj2 = callback(ref[9]);
    }
  }, items);
};
export const filterFullMembersByQuery = function filterFullMembersByQuery(str, id) {
  const formatted = str.trim().toLowerCase();
  let tmp8Result = id.id === formatted;
  if (!tmp8Result) {
    tmp8Result = importDefault(5045)(formatted, id.name.toLowerCase());
    const str2 = id.name;
    const tmp5 = importDefault(5045);
  }
  if (!tmp8Result) {
    tmp8Result = importDefault(5045)(formatted, id.userTag.toLowerCase());
    const str3 = id.userTag;
    const tmp8 = importDefault(5045);
  }
  return tmp8Result;
};
export const getSectionAnalyticsName = function getSectionAnalyticsName(arg0) {
  if (constants.MEMBERS === arg0) {
    return "Members";
  } else if (constants.PERMISSIONS === arg0) {
    return "Permissions";
  } else if (constants.DISPLAY === arg0) {
    return "Role Settings";
  } else if (constants.VERIFICATIONS === arg0) {
    return "Connections";
  } else {
    require(1327) /* isDiscordFrontendDevelopment */.assertNever(arg0);
  }
};
export const filterRole = function filterRole(name, str) {
  let hasItem = "" === str;
  if (!hasItem) {
    const formatted = name.name.toLowerCase();
    hasItem = formatted.includes(str.toLowerCase());
    str = name.name;
  }
  return hasItem;
};
