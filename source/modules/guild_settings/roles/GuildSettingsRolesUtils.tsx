// Module ID: 16176
// Function ID: 124935
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: filterFullMembersByQuery, filterRole, getSectionAnalyticsName, useGuildRoleMembers, useQueryGuildMembers

// Module 16176 (_createForOfIteratorHelperLoose)
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
function useGuildMembers(id, callback) {
  callback = id;
  const importDefault = callback;
  const items = [closure_4];
  const items1 = [id, callback];
  const stateFromStoresArray = callback(dependencyMap[5]).useStateFromStoresArray(items, () => {
    const members = members.getMembers(arg0);
    let found = members;
    if (null != arg1) {
      found = members.filter(arg1);
    }
    return found;
  }, items1);
  const dependencyMap = stateFromStoresArray;
  const obj = callback(dependencyMap[5]);
  const items2 = [closure_5];
  const items3 = [stateFromStoresArray];
  const stateFromStoresObject = callback(dependencyMap[5]).useStateFromStoresObject(items2, () => stateFromStoresArray.reduce((arg0, userId) => {
    const user = user.getUser(userId.userId);
    if (null != user) {
      arg0[userId.userId] = user;
    }
    return arg0;
  }, {}), items3);
  const React = stateFromStoresObject;
  const items4 = [stateFromStoresArray, stateFromStoresObject, id];
  return React.useMemo(() => {
    let iter3;
    const items = [];
    const tmp = callback(stateFromStoresArray);
    const iter = tmp();
    let iter2 = iter;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp2 = closure_3;
        let obj = closure_3[value.userId];
        if (null != obj) {
          obj = {};
          let nick = value.nick;
          let name = nick;
          if (null == nick) {
            let tmp3 = closure_1;
            let tmp4 = closure_2;
            let obj2 = closure_1(closure_2[6]);
            name = obj2.getName(obj);
          }
          obj.name = name;
          let tmp6 = closure_1;
          let tmp7 = closure_2;
          let obj3 = closure_1(closure_2[6]);
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
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).GuildSettingsRoleEditSections;
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/guild_settings/roles/GuildSettingsRolesUtils.tsx");

export const ADD_MEMBER_QUERY_LIMIT = 50;
export const MAX_PREFETCH_MEMBER_COUNT = 1000;
export { useGuildMembers };
export const useGuildRoleMembers = function useGuildRoleMembers(id, id2, onMembersLoadFail) {
  id2 = id;
  const importDefault = id2;
  const dependencyMap = onMembersLoadFail;
  const React = React.useRef(onMembersLoadFail);
  const effect = React.useEffect(() => {
    closure_3.current = arg2;
  });
  const items = [id, id2];
  const effect1 = React.useEffect(() => {
    const membersForRole = arg0(arg2[7]).requestMembersForRole(arg0, arg1);
    membersForRole.catch(ref.current);
  }, items);
  const items1 = [id2];
  return useGuildMembers(id, React.useCallback((roles) => {
    roles = roles.roles;
    return roles.includes(arg1);
  }, items1));
};
export const useQueryGuildMembers = function useQueryGuildMembers(id, formatted) {
  formatted = id;
  const importDefault = formatted;
  let closure_2 = React.useRef(false);
  const items = [id, formatted];
  const effect = React.useEffect(() => {
    let obj = arg1(ref[8]);
    const members = obj.requestMembers(arg0, arg1, 200);
    let current = "" === arg1;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      obj = { search_type: "Role Members" };
      arg1(ref[9]).track(constants.SEARCH_STARTED, obj);
      ref.current = true;
      const obj2 = arg1(ref[9]);
    }
  }, items);
};
export const filterFullMembersByQuery = function filterFullMembersByQuery(str, id) {
  const formatted = str.trim().toLowerCase();
  let tmp8Result = id.id === formatted;
  if (!tmp8Result) {
    tmp8Result = importDefault(dependencyMap[10])(formatted, id.name.toLowerCase());
    const str2 = id.name;
    const tmp5 = importDefault(dependencyMap[10]);
  }
  if (!tmp8Result) {
    tmp8Result = importDefault(dependencyMap[10])(formatted, id.userTag.toLowerCase());
    const str3 = id.userTag;
    const tmp8 = importDefault(dependencyMap[10]);
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
    arg1(dependencyMap[11]).assertNever(arg0);
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
