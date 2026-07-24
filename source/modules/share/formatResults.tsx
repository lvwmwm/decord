// Module ID: 7088
// Function ID: 56792
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 7089, 1348, 3758, 1849, 7106, 653, 4140, 7093, 7104, 1212, 1327, 22, 2]
// Exports: default, destinationKey, formatResultsWithHeaders, getDestinationIdFromChannelId, getOrResolveChannelIdFromDestinationId

// Module 7088 (_createForOfIteratorHelperLoose)
import ALLOWED_TYPES from "ALLOWED_TYPES";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { isAllowedType } from "ALLOWED_TYPES";
import ME from "ME";

let closure_10;
let closure_9;
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
function getChannelIdFromDestinationId(type) {
  if ("channel" === type.type) {
    return type.id;
  } else {
    const dMFromUserId = authStore.getDMFromUserId(type.id);
    let tmp4;
    if (null != dMFromUserId) {
      tmp4 = dMFromUserId;
    }
    return tmp4;
  }
}
async function _getOrResolveChannelIdFromDestinationId(arg0, arg1) {
  const tmp2 = outer2_13(arg0);
  if (null != tmp2) {
    return tmp2;
  } else if ("user" === tmp.type) {
    return yield outer2_1(outer2_2[7]).getOrEnsurePrivateChannel(arg0.id);
  }
  tmp = arg0;
}
function createAutocompleterResultForDestination(targetDestination) {
  if ("user" === targetDestination.type) {
    user = user.getUser(targetDestination.id);
    let tmp5 = null;
    if (null != user) {
      const obj = { type: require(7093) /* sortByMatchScore */.AutocompleterResultTypes.USER, record: user, score: 0 };
      tmp5 = obj;
    }
    return tmp5;
  } else {
    return importDefault(7104)(targetDestination.id);
  }
}
function canShareToChannel(type) {
  let tmp = arg1;
  if (type.type === require(7093) /* sortByMatchScore */.AutocompleterResultTypes.USER) {
    if (!tmp) {
      tmp = null != authStore.getDMChannelFromUserId(type.record.id);
    }
    let tmp10 = tmp;
  } else {
    tmp10 = type.type === require(7093) /* sortByMatchScore */.AutocompleterResultTypes.GROUP_DM;
    if (!tmp10) {
      let tmp3 = type.record.type !== constants2.GUILD_FORUM;
      if (tmp3) {
        tmp3 = type.record.type !== constants2.GUILD_MEDIA;
      }
      if (tmp3) {
        let canResult = closure_6.can(constants.VIEW_CHANNEL, type.record);
        if (canResult) {
          canResult = closure_6.can(constants.SEND_MESSAGES, type.record);
        }
        tmp3 = canResult;
      }
      tmp10 = tmp3;
    }
  }
  return tmp10;
}
function mergeAndDedupeResultsWithHeaders(tmp4Result, items1) {
  let done;
  let iter5;
  const set = new Set();
  if (null != items1) {
    const tmp2 = _createForOfIteratorHelperLoose(items1);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let addResult = set.add(iter.value);
        let iter2 = tmp2();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  }
  const items = [];
  const tmp4 = _createForOfIteratorHelperLoose(tmp4Result);
  const iter3 = tmp4();
  let iter4 = iter3;
  if (!iter3.done) {
    do {
      let value = iter4.value;
      let tmp7 = tmp5;
      let tmp8 = tmp6;
      if (null != value) {
        let tmp9 = require;
        let tmp10 = dependencyMap;
        tmp7 = value;
        tmp8 = tmp6;
        if (value.type !== require(7093) /* sortByMatchScore */.AutocompleterResultTypes.HEADER) {
          let id = value.record.id;
          tmp7 = tmp5;
          tmp8 = id;
          if (!set.has(id)) {
            let addResult1 = set.add(id);
            let tmp12 = tmp5;
            if (null != tmp5) {
              let arr = items.push(tmp5);
            }
            arr = items.push(value);
            tmp7 = tmp12;
            tmp8 = id;
          }
        }
      }
      iter5 = tmp4();
      tmp5 = tmp7;
      tmp6 = tmp8;
      iter4 = iter5;
    } while (!iter5.done);
  }
  return items;
}
function getLastChannelResult(selectedChannelId) {
  if (null == selectedChannelId) {
    return null;
  } else {
    const tmp11 = importDefault(7104)(selectedChannelId);
    let tmp8 = null;
    if (null != tmp11) {
      let tmp2 = null;
      if (isAllowedType(tmp11)) {
        let canResult = tmp11.type === require(7093) /* sortByMatchScore */.AutocompleterResultTypes.USER;
        if (!canResult) {
          canResult = closure_6.can(constants.VIEW_CHANNEL, tmp11.record);
        }
        tmp2 = null;
        if (canResult) {
          tmp2 = tmp11;
        }
      }
      tmp8 = tmp2;
    }
    return tmp8;
  }
}
function filterResults(arr, includeMissingDMs, channelFilter) {
  let tmp = channelFilter;
  let closure_0 = includeMissingDMs;
  if (channelFilter === undefined) {
    tmp = canShareToChannel;
  }
  const importDefault = tmp;
  return arr.filter((type) => {
    let isNotNullishResult = includeMissingDMs(outer1_2[11]).isNotNullish(type);
    if (isNotNullishResult) {
      let tmp4 = type.type === includeMissingDMs(outer1_2[8]).AutocompleterResultTypes.HEADER;
      if (!tmp4) {
        let tmp6 = outer1_8(type);
        if (tmp6) {
          tmp6 = tmp(type, includeMissingDMs);
        }
        tmp4 = tmp6;
      }
      isNotNullishResult = tmp4;
    }
    return isNotNullishResult;
  });
}
({ Permissions: closure_9, ChannelTypes: closure_10 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/share/formatResults.tsx");

export default function formatResults(queryMode) {
  let channelFilter;
  let frequentChannels;
  let includeMissingDMs;
  let originDestination;
  let pinnedDestinations;
  let selectedDestinations;
  let targetDestination;
  queryMode = queryMode.queryMode;
  ({ frequentChannels, targetDestination, selectedDestinations, pinnedDestinations, originDestination } = queryMode);
  ({ channelFilter, includeMissingDMs } = queryMode);
  if (queryMode.hasQuery) {
    return mergeAndDedupeResultsWithHeaders(filterResults(tmp, includeMissingDMs, channelFilter));
  } else {
    if (null != pinnedDestinations) {
      if (pinnedDestinations.length > 0) {
        let mapped = pinnedDestinations.map((arg0) => outer1_15(arg0));
      }
      channelHistory = channelHistory.getChannelHistory();
      if (channelHistory.length > 0) {
        let mapped1 = channelHistory.map((arg0) => originDestination(outer1_2[9])(arg0));
      } else {
        mapped1 = [];
      }
      if (frequentChannels.length > 0) {
        let mapped2 = frequentChannels.map((id) => originDestination(outer1_2[9])(id.id));
      } else {
        mapped2 = [];
      }
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(mapped, 0);
      let tmp8 = null;
      if (null != targetDestination) {
        tmp8 = createAutocompleterResultForDestination(targetDestination);
      }
      items[arraySpreadResult] = tmp8;
      arraySpreadResult = HermesBuiltin.arraySpread(mapped2, HermesBuiltin.arraySpread(mapped1, arraySpreadResult + 1));
      const tmp4Result = filterResults(items, includeMissingDMs, channelFilter);
      if (null != selectedDestinations) {
        const found = selectedDestinations.find((arg0) => queryMode(outer1_2[12]).isEqual(arg0, originDestination));
      }
      if (null != originDestination) {
        if (null == found) {
          let items1 = [originDestination.id];
        }
        if (null != queryMode) {
          let substr = mergeAndDedupeResultsWithHeaders(tmp4Result.filter((type) => type.type === queryMode), items1);
        } else {
          substr = mergeAndDedupeResultsWithHeaders(tmp4Result, items1).slice(0, 15);
          const arr8 = mergeAndDedupeResultsWithHeaders(tmp4Result, items1);
        }
        return substr;
      }
      items1 = [];
      const tmp4 = filterResults;
    }
    mapped = [];
  }
};
export const getDestinationIdFromChannelId = function getDestinationIdFromChannelId(channel_id) {
  const channel = authStore.getChannel(channel_id);
  let type;
  if (null != channel) {
    type = channel.type;
  }
  if (type === constants2.DM) {
    let obj = { type: "user", id: channel.recipients[0] };
  } else {
    obj = { type: "channel", id: channel_id };
  }
  return obj;
};
export const destinationKey = function destinationKey(type) {
  return "" + type.type + "-" + type.id;
};
export { getChannelIdFromDestinationId };
export const getOrResolveChannelIdFromDestinationId = function getOrResolveChannelIdFromDestinationId() {
  return _getOrResolveChannelIdFromDestinationId(...arguments);
};
export const formatResultsWithHeaders = function formatResultsWithHeaders(frequentChannels) {
  let hasNonEmptyQuery;
  let queryMode;
  let results;
  let selectedChannelId;
  let selectedResult;
  ({ results, selectedResult, queryMode } = frequentChannels);
  frequentChannels = frequentChannels.frequentChannels;
  ({ hasNonEmptyQuery, selectedChannelId } = frequentChannels);
  if (null != selectedResult) {
    const items = [selectedResult.record.id];
    let items1 = items;
  } else {
    items1 = [];
  }
  const intl = queryMode(1212).intl;
  const headerResult = queryMode(7093).createHeaderResult(intl.string(queryMode(1212).t.qm9dSj));
  if (hasNonEmptyQuery) {
    const items2 = [headerResult];
    HermesBuiltin.arraySpread(mergeAndDedupeResultsWithHeaders(results.filter(isAllowedType), items1), 1);
    return items2;
  } else {
    const mapped = frequentChannels.map((id) => outer1_1(outer1_2[9])(id.id));
    const found = mapped.filter(queryMode(1327).isNotNullish);
    const found1 = found.filter(isAllowedType);
    if (null != queryMode) {
      const items3 = [headerResult];
      HermesBuiltin.arraySpread(found1.filter((type) => type.type === queryMode), 1);
      let items4 = items3;
    } else {
      const intl2 = queryMode(1212).intl;
      items4 = [queryMode(7093).createHeaderResult(intl2.string(queryMode(1212).t["80lOZ1"])), getLastChannelResult(selectedChannelId), headerResult];
      HermesBuiltin.arraySpread(found1, 3);
      const obj2 = queryMode(7093);
    }
    return mergeAndDedupeResultsWithHeaders(items4, items1);
  }
  const obj = queryMode(7093);
};
