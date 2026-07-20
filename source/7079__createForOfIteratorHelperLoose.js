// Module ID: 7079
// Function ID: 56715
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 7086, 7087, 1907, 3765, 1849, 5312, 5243, 22, 5315, 7088, 1331, 5316]
// Exports: default, destinationKey, formatResultsWithHeaders, getDestinationIdFromChannelId, getOrResolveChannelIdFromDestinationId

// Module 7079 (_createForOfIteratorHelperLoose)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { isAllowedType } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import requestMembersDebounced from "requestMembersDebounced";

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
async function _getOrResolveChannelIdFromDestinationId(id, arg1) {
  const tmp2 = callback2(id);
  if (null != tmp2) {
    return tmp2;
  } else if ("user" === tmp.type) {
    return yield callback(closure_2[7]).getOrEnsurePrivateChannel(id.id);
  }
  const tmp = id;
}
function createAutocompleterResultForDestination(targetDestination) {
  if ("user" === targetDestination.type) {
    const user = user.getUser(targetDestination.id);
    let tmp5 = null;
    if (null != user) {
      const obj = { type: arg1(dependencyMap[8]).AutocompleterResultTypes.USER, record: user, score: 0 };
      tmp5 = obj;
    }
    return tmp5;
  } else {
    return importDefault(dependencyMap[9])(targetDestination.id);
  }
}
function canShareToChannel(type) {
  let tmp = arg1;
  if (type.type === arg1(dependencyMap[8]).AutocompleterResultTypes.USER) {
    if (!tmp) {
      tmp = null != authStore.getDMChannelFromUserId(type.record.id);
    }
    let tmp10 = tmp;
  } else {
    tmp10 = type.type === arg1(dependencyMap[8]).AutocompleterResultTypes.GROUP_DM;
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
        let tmp9 = closure_0;
        let tmp10 = closure_2;
        tmp7 = value;
        tmp8 = tmp6;
        if (value.type !== closure_0(closure_2[8]).AutocompleterResultTypes.HEADER) {
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
      let tmp5 = tmp7;
      let tmp6 = tmp8;
      iter4 = iter5;
    } while (!iter5.done);
  }
  return items;
}
function getLastChannelResult(selectedChannelId) {
  if (null == selectedChannelId) {
    return null;
  } else {
    const tmp11 = importDefault(dependencyMap[9])(selectedChannelId);
    let tmp8 = null;
    if (null != tmp11) {
      let tmp2 = null;
      if (isAllowedType(tmp11)) {
        let canResult = tmp11.type === arg1(dependencyMap[8]).AutocompleterResultTypes.USER;
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
  if (channelFilter === undefined) {
    tmp = canShareToChannel;
  }
  const importDefault = tmp;
  return arr.filter((type) => {
    let isNotNullishResult = arg1(closure_2[11]).isNotNullish(type);
    if (isNotNullishResult) {
      let tmp4 = type.type === arg1(closure_2[8]).AutocompleterResultTypes.HEADER;
      if (!tmp4) {
        let tmp6 = callback(type);
        if (tmp6) {
          tmp6 = tmp(type, arg1);
        }
        tmp4 = tmp6;
      }
      isNotNullishResult = tmp4;
    }
    return isNotNullishResult;
  });
}
({ Permissions: closure_9, ChannelTypes: closure_10 } = _isNativeReflectConstruct);
const result = requestMembersDebounced.fileFinishedImporting("modules/share/formatResults.tsx");

export default function formatResults(queryMode) {
  let channelFilter;
  let frequentChannels;
  let includeMissingDMs;
  let originDestination;
  let pinnedDestinations;
  let selectedDestinations;
  let targetDestination;
  queryMode = queryMode.queryMode;
  const arg1 = queryMode;
  ({ frequentChannels, targetDestination, selectedDestinations, pinnedDestinations, originDestination } = queryMode);
  const importDefault = originDestination;
  ({ channelFilter, includeMissingDMs } = queryMode);
  if (queryMode.hasQuery) {
    return mergeAndDedupeResultsWithHeaders(filterResults(tmp, includeMissingDMs, channelFilter));
  } else {
    if (null != pinnedDestinations) {
      if (pinnedDestinations.length > 0) {
        let mapped = pinnedDestinations.map((arg0) => callback(arg0));
      }
      const channelHistory = channelHistory.getChannelHistory();
      if (channelHistory.length > 0) {
        let mapped1 = channelHistory.map((arg0) => originDestination(closure_2[9])(arg0));
      } else {
        mapped1 = [];
      }
      if (frequentChannels.length > 0) {
        let mapped2 = frequentChannels.map((id) => originDestination(closure_2[9])(id.id));
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
        const found = selectedDestinations.find((arg0) => queryMode(closure_2[12]).isEqual(arg0, originDestination));
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
  const arg1 = queryMode;
  frequentChannels = frequentChannels.frequentChannels;
  ({ hasNonEmptyQuery, selectedChannelId } = frequentChannels);
  if (null != selectedResult) {
    const items = [selectedResult.record.id];
    let items1 = items;
  } else {
    items1 = [];
  }
  const intl = arg1(dependencyMap[10]).intl;
  const headerResult = arg1(dependencyMap[8]).createHeaderResult(intl.string(arg1(dependencyMap[10]).t.qm9dSj));
  if (hasNonEmptyQuery) {
    const items2 = [headerResult];
    HermesBuiltin.arraySpread(mergeAndDedupeResultsWithHeaders(results.filter(isAllowedType), items1), 1);
    return items2;
  } else {
    const mapped = frequentChannels.map((id) => callback(closure_2[9])(id.id));
    const found = mapped.filter(arg1(dependencyMap[11]).isNotNullish);
    const found1 = found.filter(isAllowedType);
    if (null != queryMode) {
      const items3 = [headerResult];
      HermesBuiltin.arraySpread(found1.filter((type) => type.type === queryMode), 1);
      let items4 = items3;
    } else {
      const intl2 = arg1(dependencyMap[10]).intl;
      items4 = [arg1(dependencyMap[8]).createHeaderResult(intl2.string(arg1(dependencyMap[10]).t.80lOZ1)), getLastChannelResult(selectedChannelId), headerResult];
      HermesBuiltin.arraySpread(found1, 3);
      const obj2 = arg1(dependencyMap[8]);
    }
    return mergeAndDedupeResultsWithHeaders(items4, items1);
  }
  const obj = arg1(dependencyMap[8]);
};
