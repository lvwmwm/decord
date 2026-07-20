// Module ID: 4047
// Function ID: 33741
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 4047 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let importDefault = Symbol_iterator;
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
      importDefault = tmp;
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
function isInRange(arg0, arg1, arg2) {
  const obj = importDefault(dependencyMap[4])(arg0);
  let tmp = null;
  if (null != arg1) {
    tmp = importDefault(dependencyMap[4])(arg1);
  }
  let tmp5 = null;
  if (null != arg2) {
    tmp5 = importDefault(dependencyMap[4])(arg2);
  }
  let tmp10 = tmp9;
  if (null != tmp) {
    tmp10 = !obj.lesser(tmp);
  }
  let tmp12 = tmp10;
  if (tmp10) {
    let tmp15 = tmp14;
    if (null != tmp5) {
      tmp15 = !obj.greater(tmp5);
    }
    tmp12 = tmp15;
  }
  return tmp12;
}
function getRangeData(arg0) {
  let iter3;
  let tmp8;
  let tmp9;
  const tmp = _createForOfIteratorHelperLoose(arg0);
  const iter = tmp();
  let iter2 = iter;
  let tmp4;
  let tmp5;
  if (!iter.done) {
    do {
      let tmp6 = closure_2;
      let tmp7 = closure_2(iter2.value, 2);
      [tmp8, tmp9] = tmp7;
      let tmp10 = closure_0;
      let tmp11 = closure_1;
      let obj = closure_0(closure_1[5]);
      let tmp12 = tmp9;
      let tmp13 = tmp3;
      if (obj.v3("min_id") !== tmp8) {
        let tmp14 = closure_0;
        let tmp15 = closure_1;
        let obj2 = closure_0(closure_1[5]);
        tmp12 = tmp2;
        tmp13 = tmp3;
        if (obj2.v3("max_id") === tmp8) {
          tmp12 = tmp2;
          tmp13 = tmp9;
        }
      }
      iter3 = tmp();
      let tmp2 = tmp12;
      let tmp3 = tmp13;
      iter2 = iter3;
      tmp4 = tmp12;
      tmp5 = tmp13;
    } while (!iter3.done);
  }
  obj = { min: tmp4, max: tmp5 };
  return obj;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
const obj = {};
obj[importDefault(dependencyMap[5]).v3("guild_ids")] = (arg0) => {
  let iter2;
  let tmp4;
  let tmp5;
  let closure_0 = [];
  const tmp = _createForOfIteratorHelperLoose(arg0);
  let iter = tmp();
  if (!iter.done) {
    do {
      let tmp2 = closure_2;
      let tmp3 = closure_2(iter.value, 2);
      let tmp6 = closure_0;
      let tmp7 = closure_1;
      [tmp4, tmp5] = tmp3;
      let obj = closure_0(closure_1[5]);
      if (tmp4 === obj.v3("guild_ids")) {
        closure_0 = tmp5;
      }
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
  return (arg0) => closure_0.includes(arg0);
};
const importDefaultResult = importDefault(dependencyMap[5]);
obj[importDefault(dependencyMap[5]).v3("guild_id_range")] = (arg0) => {
  ({ min: closure_0, max: closure_1 } = getRangeData(arg0));
  return (arg0) => callback(arg0, closure_0, closure_1);
};
const importDefaultResult1 = importDefault(dependencyMap[5]);
obj[importDefault(dependencyMap[5]).v3("guild_age_range_days")] = (arg0) => {
  ({ min: closure_0, max: closure_1 } = getRangeData(arg0));
  return (arg0) => {
    const obj = callback(closure_1[6]);
    return callback2(Math.floor(callback(closure_1[6]).age(arg0) / callback(closure_1[7]).Millis.DAY), callback, closure_1);
  };
};
const importDefaultResult2 = importDefault(dependencyMap[5]);
obj[importDefault(dependencyMap[5]).v3("guild_member_count_range")] = (arg0) => {
  ({ min: closure_0, max: closure_1 } = getRangeData(arg0));
  return (arg0) => {
    const memberCount = memberCount.getMemberCount(arg0);
    let tmp2 = null != memberCount;
    if (tmp2) {
      tmp2 = callback(memberCount, closure_0, closure_1);
    }
    return tmp2;
  };
};
const importDefaultResult3 = importDefault(dependencyMap[5]);
obj[importDefault(dependencyMap[5]).v3("guild_has_feature")] = (arg0) => {
  let closure_0 = callback(callback(arg0, 1)[0], 2)[1];
  return (guildId) => {
    let guild = guild2.getGuild(guildId);
    if (null == guild) {
      guild = guild.getGuild(guildId);
    }
    let closure_0 = guild;
    let someResult = null != guild;
    if (someResult) {
      someResult = closure_0.some((arg0) => {
        const features = guild.features;
        return features.has(arg0);
      });
    }
    return someResult;
  };
};
const importDefaultResult4 = importDefault(dependencyMap[5]);
obj[importDefault(dependencyMap[5]).v3("guild_hub_types")] = (arg0) => {
  let closure_0 = callback(callback(arg0, 1)[0], 2)[1];
  return (guildId) => {
    let guild = guild2.getGuild(guildId);
    if (null == guild) {
      guild = guild.getGuild(guildId);
    }
    let closure_0 = guild;
    let someResult = null != guild;
    if (someResult) {
      someResult = "number" === typeof guild.hubType;
    }
    if (someResult) {
      someResult = closure_0.some((arg0) => guild.hubType === arg0);
    }
    return someResult;
  };
};
const importDefaultResult5 = importDefault(dependencyMap[5]);
obj[importDefault(dependencyMap[5]).v3("guild_has_vanity_url")] = (arg0) => {
  let closure_0 = callback(callback(arg0, 1)[0], 2)[1];
  return (guildId) => {
    let guild = guild2.getGuild(guildId);
    if (null == guild) {
      guild = guild.getGuild(guildId);
    }
    if (null == guild) {
      return false;
    } else {
      return closure_0 === (null != guild.vanityURLCode);
    }
  };
};
const importDefaultResult6 = importDefault(dependencyMap[5]);
obj[importDefault(dependencyMap[5]).v3("guild_in_range_by_hash")] = (arg0) => {
  let iter2;
  let tmp5;
  let tmp6;
  const tmp = _createForOfIteratorHelperLoose(arg0);
  let iter = tmp();
  if (!iter.done) {
    do {
      let tmp3 = closure_2;
      let tmp4 = closure_2(iter.value, 2);
      [tmp5, tmp6] = tmp4;
      let tmp7 = closure_0;
      let tmp8 = closure_1;
      let obj = closure_0(closure_1[5]);
      if (obj.v3("hash_key") === tmp5) {
        closure_0 = tmp6;
        let tmp11 = tmp2;
      } else {
        let tmp9 = closure_0;
        let tmp10 = closure_1;
        let obj2 = closure_0(closure_1[5]);
        tmp11 = tmp2;
        if (obj2.v3("target") === tmp5) {
          let _parseInt = parseInt;
          let parsed = parseInt(tmp6);
          let num = 0;
          if (null != parsed) {
            num = parsed;
          }
          closure_1 = num;
          tmp11 = parsed;
        }
      }
      iter2 = tmp();
      let tmp2 = tmp11;
      iter = iter2;
    } while (!iter2.done);
  }
  return (arg0) => {
    const v3Result = callback(closure_1[5]).v3("" + callback + ":" + arg0);
    return v3Result > 0 ? v3Result + v3Result : v3Result >>> 0 % 10000 < closure_1;
  };
};
const importDefaultResult7 = importDefault(dependencyMap[5]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/experiments/GuildFilters.tsx");

export const GUILD_FILTERS = obj;
