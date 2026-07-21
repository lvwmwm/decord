// Module ID: 5334
// Function ID: 45461
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: startImpersonating, stopImpersonating, updateImpersonatedData, updateImpersonatedRoles

// Module 5334 (_createForOfIteratorHelperLoose)
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
function updateImpersonating(guildId, type) {
  const data = data.getData(guildId);
  if (tmp2) {
    let obj = importDefault(dependencyMap[10]);
    obj = {};
    const _Object = Object;
    obj.num_roles = Object.keys(data.roles).length;
    const merged = Object.assign(type(dependencyMap[11]).collectGuildAnalyticsMetadata(guildId));
    obj["is_viewing_as_member"] = data.type === type(dependencyMap[12]).ImpersonateType.NEW_MEMBER;
    obj.track(constants2.VIEW_AS_ROLES_SELECTED, obj);
    const obj3 = type(dependencyMap[11]);
    obj = { type: "IMPERSONATE_UPDATE", guildId };
    const obj1 = {};
    const merged1 = Object.assign(data);
    const merged2 = Object.assign(type);
    obj.data = obj1;
    importDefault(dependencyMap[13]).dispatch(obj);
    puntFromSelectedChannelIfInaccessible(guildId);
    const obj4 = importDefault(dependencyMap[13]);
  }
}
function puntFromSelectedChannelIfInaccessible(guildId) {
  const channelId = channelId.getChannelId(guildId);
  if (null == channelId) {
    if (!closure_7.can(constants.VIEW_CHANNEL, tmp2)) {
      const defaultChannel = defaultChannel.getDefaultChannel(guildId);
      if (null != defaultChannel) {
        arg1(dependencyMap[14]).transitionTo(closure_12.CHANNEL(guildId, defaultChannel.id));
        const obj = arg1(dependencyMap[14]);
      }
    }
  }
}
function updateImpersonatedChannels(guildId, items1, items2) {
  const set = new Set(optedInChannels.getOptedInChannels(guildId));
  items1 = set;
  const item = items1.forEach((arg0) => set.add(arg0));
  const item1 = items2.forEach((arg0) => set.delete(arg0));
  updateImpersonating(guildId, { type: items1(dependencyMap[12]).ImpersonateType.NEW_MEMBER, optInChannels: set });
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
({ Permissions: closure_11, Routes: closure_12, AnalyticEvents: closure_13 } = arg1(dependencyMap[8]));
const isStaticChannelRoute = arg1(dependencyMap[9]).isStaticChannelRoute;
const tmp2 = arg1(dependencyMap[8]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/impersonate/ImpersonateActionCreators.tsx");

export const startImpersonating = function startImpersonating(guildId, data) {
  let obj = importDefault(dependencyMap[10]);
  obj = { num_roles: Object.keys(data.roles).length };
  const merged = Object.assign(data(dependencyMap[11]).collectGuildAnalyticsMetadata(guildId));
  obj["is_viewing_as_member"] = data.type === data(dependencyMap[12]).ImpersonateType.NEW_MEMBER;
  obj.track(constants2.VIEW_AS_ROLES_SELECTED, obj);
  const obj3 = data(dependencyMap[11]);
  obj = { type: "IMPERSONATE_UPDATE", guildId, data };
  importDefault(dependencyMap[13]).dispatch(obj);
  puntFromSelectedChannelIfInaccessible(guildId);
};
export { updateImpersonating };
export const stopImpersonating = function stopImpersonating(guildId) {
  let obj = importDefault(dependencyMap[13]);
  obj = { type: "IMPERSONATE_STOP", guildId };
  obj.dispatch(obj);
};
export { updateImpersonatedChannels };
export const updateImpersonatedRoles = function updateImpersonatedRoles(guildId, arg1) {
  let done;
  function optIntoPrivateChannelsForGrantedRolesForPreview(guildId, arg1) {
    const items = [...closure_4.getSelectableChannelIds(guildId), ...closure_4.getVocalChannelIds(guildId)];
    let closure_2 = Array.from(arg1);
    const result = closure_4.addConditionalChangeListener(() => {
      const selfMember = selfMember.getSelfMember(arg0);
      const arg0 = selfMember;
      if (null == selfMember) {
        return false;
      } else if (closure_2.some((arg0) => {
        const roles = selfMember.roles;
        return !roles.includes(arg0);
      })) {
        return true;
      } else {
        const items = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(store.getSelectableChannelIds(arg0), 0);
        arraySpreadResult = HermesBuiltin.arraySpread(store.getVocalChannelIds(arg0), arraySpreadResult);
        const found = items.filter((arg0) => !closure_1.includes(arg0));
        if (found.length > 0) {
          callback(arg0, found, []);
        }
        return false;
      }
    });
  }(guildId, arg1);
  let obj = {};
  const tmp2 = _createForOfIteratorHelperLoose(manyRoles.getManyRoles(guildId, arg1));
  let iter = tmp2();
  if (!iter.done) {
    do {
      let value = iter.value;
      obj[value.id] = value;
      let iter2 = tmp2();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  obj = { type: arg1(dependencyMap[12]).ImpersonateType.NEW_MEMBER, roles: obj };
  updateImpersonating(guildId, obj);
};
export const updateImpersonatedData = function updateImpersonatedData(id, arg1) {
  const merged = Object.assign(arg1);
  updateImpersonating(id, { type: arg1(dependencyMap[12]).ImpersonateType.NEW_MEMBER });
};
