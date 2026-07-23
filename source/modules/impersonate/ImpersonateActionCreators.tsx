// Module ID: 5064
// Function ID: 43889
// Name: _createForOfIteratorHelperLoose
// Dependencies: [1348, 1907, 1917, 1910, 3758, 1906, 4325, 1909, 653, 1355, 675, 4324, 1915, 686, 1198, 2]
// Exports: startImpersonating, stopImpersonating, updateImpersonatedData, updateImpersonatedRoles

// Module 5064 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import ME from "ME";
import { isStaticChannelRoute } from "set";

let closure_11;
let closure_12;
let closure_13;
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
function updateImpersonating(guildId, type) {
  data = data.getData(guildId);
  if (tmp2) {
    let obj = importDefault(675);
    obj = {};
    const _Object = Object;
    obj.num_roles = Object.keys(data.roles).length;
    const merged = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectGuildAnalyticsMetadata(guildId));
    obj["is_viewing_as_member"] = data.type === require(1915) /* ImpersonateType */.ImpersonateType.NEW_MEMBER;
    obj.track(constants2.VIEW_AS_ROLES_SELECTED, obj);
    const obj3 = require(4324) /* _createForOfIteratorHelperLoose */;
    obj = { type: "IMPERSONATE_UPDATE", guildId };
    const obj1 = {};
    const merged1 = Object.assign(data);
    const merged2 = Object.assign(type);
    obj.data = obj1;
    importDefault(686).dispatch(obj);
    puntFromSelectedChannelIfInaccessible(guildId);
    const obj4 = importDefault(686);
  }
}
function puntFromSelectedChannelIfInaccessible(guildId) {
  channelId = channelId.getChannelId(guildId);
  if (null == channelId) {
    if (!closure_7.can(constants.VIEW_CHANNEL, tmp2)) {
      defaultChannel = defaultChannel.getDefaultChannel(guildId);
      if (null != defaultChannel) {
        require(1198) /* shouldNavigate */.transitionTo(closure_12.CHANNEL(guildId, defaultChannel.id));
        const obj = require(1198) /* shouldNavigate */;
      }
    }
  }
}
function updateImpersonatedChannels(guildId, items1, items2) {
  const set = new Set(optedInChannels.getOptedInChannels(guildId));
  const item = items1.forEach((arg0) => set.add(arg0));
  const item1 = items2.forEach((arg0) => set.delete(arg0));
  updateImpersonating(guildId, { type: set(1915).ImpersonateType.NEW_MEMBER, optInChannels: set });
}
({ Permissions: closure_11, Routes: closure_12, AnalyticEvents: closure_13 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/impersonate/ImpersonateActionCreators.tsx");

export const startImpersonating = function startImpersonating(guildId, data) {
  let obj = importDefault(675);
  obj = { num_roles: Object.keys(data.roles).length };
  const merged = Object.assign(require(4324) /* _createForOfIteratorHelperLoose */.collectGuildAnalyticsMetadata(guildId));
  obj["is_viewing_as_member"] = data.type === require(1915) /* ImpersonateType */.ImpersonateType.NEW_MEMBER;
  obj.track(constants2.VIEW_AS_ROLES_SELECTED, obj);
  const obj3 = require(4324) /* _createForOfIteratorHelperLoose */;
  obj = { type: "IMPERSONATE_UPDATE", guildId, data };
  importDefault(686).dispatch(obj);
  puntFromSelectedChannelIfInaccessible(guildId);
};
export { updateImpersonating };
export const stopImpersonating = function stopImpersonating(guildId) {
  let obj = importDefault(686);
  obj = { type: "IMPERSONATE_STOP", guildId };
  obj.dispatch(obj);
};
export { updateImpersonatedChannels };
export const updateImpersonatedRoles = function updateImpersonatedRoles(guildId, arg1) {
  let done;
  (function optIntoPrivateChannelsForGrantedRolesForPreview(guildId, arg1) {
    let closure_0 = guildId;
    let items = [...outer1_4.getSelectableChannelIds(guildId), ...outer1_4.getVocalChannelIds(guildId)];
    let closure_2 = Array.from(arg1);
    const result = outer1_4.addConditionalChangeListener(() => {
      selfMember = outer2_5.getSelfMember(selfMember);
      if (null == selfMember) {
        return false;
      } else if (closure_2.some((arg0) => {
        const roles = selfMember.roles;
        return !roles.includes(arg0);
      })) {
        return true;
      } else {
        const items = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(outer2_4.getSelectableChannelIds(selfMember), 0);
        arraySpreadResult = HermesBuiltin.arraySpread(outer2_4.getVocalChannelIds(selfMember), arraySpreadResult);
        const found = items.filter((arg0) => !outer1_1.includes(arg0));
        if (found.length > 0) {
          outer2_19(selfMember, found, []);
        }
        return false;
      }
    });
  })(guildId, arg1);
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
  obj = { type: require(1915) /* ImpersonateType */.ImpersonateType.NEW_MEMBER, roles: obj };
  updateImpersonating(guildId, obj);
};
export const updateImpersonatedData = function updateImpersonatedData(id, arg1) {
  const merged = Object.assign(arg1);
  updateImpersonating(id, { type: require(1915) /* ImpersonateType */.ImpersonateType.NEW_MEMBER });
};
