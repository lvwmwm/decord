// Module ID: 12552
// Function ID: 97105
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 5, 653, 12553, 686, 4452, 6244, 675, 4325, 4207, 664, 2]
// Exports: archiveSubscriptionListing, createSubscriptionGroupListing, createSubscriptionListing, deleteSubscriptionGroupListing, deleteSubscriptionListing, fetchAllSubscriptionListingsDataForGuild, fetchMonetizationRestrictions, fetchSubscriptionListingForPlan, fetchSubscriptionsSettings, updateSubscriptionGroupListing, updateSubscriptionListing, updateSubscriptionTrial, updateSubscriptionsSettings

// Module 12552 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _deletePaymentSource from "_deletePaymentSource";
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
function _fetchSubscriptionsSettings() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _updateSubscriptionsSettings() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchAllSubscriptionListingsDataForGuild() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _createSubscriptionGroupListing() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _updateSubscriptionGroupListing() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _deleteSubscriptionGroupListing() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchSubscriptionListingForPlan() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _deleteSubscriptionListing() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _archiveSubscriptionListing() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _updateSubscriptionTrial() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function fetchGuildRoleSubscriptionGroupListing() {
  return _fetchGuildRoleSubscriptionGroupListing(...arguments);
}
function _fetchGuildRoleSubscriptionGroupListing() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _createSubscriptionListing() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _updateSubscriptionListing() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _fetchMonetizationRestrictions() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("ME").fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsActionCreators.tsx");

export const fetchSubscriptionsSettings = function fetchSubscriptionsSettings(id) {
  return _fetchSubscriptionsSettings(...arguments);
};
export const updateSubscriptionsSettings = function updateSubscriptionsSettings(HeaderActionButton, arg1) {
  return _updateSubscriptionsSettings(...arguments);
};
export const fetchAllSubscriptionListingsDataForGuild = function fetchAllSubscriptionListingsDataForGuild(closure_0, arg1) {
  return _fetchAllSubscriptionListingsDataForGuild(...arguments);
};
export const createSubscriptionGroupListing = function createSubscriptionGroupListing() {
  return _createSubscriptionGroupListing(...arguments);
};
export const updateSubscriptionGroupListing = function updateSubscriptionGroupListing(arg0, arg1, arg2) {
  return _updateSubscriptionGroupListing(...arguments);
};
export const deleteSubscriptionGroupListing = function deleteSubscriptionGroupListing() {
  return _deleteSubscriptionGroupListing(...arguments);
};
export const fetchSubscriptionListingForPlan = function fetchSubscriptionListingForPlan() {
  return _fetchSubscriptionListingForPlan(...arguments);
};
export const deleteSubscriptionListing = function deleteSubscriptionListing() {
  return _deleteSubscriptionListing(...arguments);
};
export const archiveSubscriptionListing = function archiveSubscriptionListing() {
  return _archiveSubscriptionListing(...arguments);
};
export const updateSubscriptionTrial = function updateSubscriptionTrial(guildId, id, arg2) {
  return _updateSubscriptionTrial(...arguments);
};
export { fetchGuildRoleSubscriptionGroupListing };
export const createSubscriptionListing = function createSubscriptionListing(arg0) {
  return _createSubscriptionListing(...arguments);
};
export const updateSubscriptionListing = function updateSubscriptionListing(arg0) {
  return _updateSubscriptionListing(...arguments);
};
export const fetchMonetizationRestrictions = function fetchMonetizationRestrictions(id, arg1) {
  return _fetchMonetizationRestrictions(...arguments);
};
