// Module ID: 4049
// Function ID: 33758
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 4050, 4051, 1838, 24, 1193, 21, 664, 2]

// Module 4049 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createBuffer";
import importDefaultResult1 from "createBuffer";
import importDefaultResult2 from "createBuffer";
import importDefaultResult3 from "createBuffer";
import importDefaultResult4 from "createBuffer";
import importDefaultResult5 from "createBuffer";
import importDefaultResult6 from "createBuffer";
import importDefaultResult7 from "createBuffer";

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
function isInRange(arg0, arg1, arg2) {
  const obj = importDefault(24)(arg0);
  let tmp = null;
  if (null != arg1) {
    tmp = importDefault(24)(arg1);
  }
  let tmp5 = null;
  if (null != arg2) {
    tmp5 = importDefault(24)(arg2);
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
      let tmp6 = callback;
      let tmp7 = callback(iter2.value, 2);
      [tmp8, tmp9] = tmp7;
      let tmp10 = importDefault;
      let tmp11 = dependencyMap;
      let obj = importDefault(1193);
      let tmp12 = tmp9;
      let tmp13 = tmp3;
      if (obj.v3("min_id") !== tmp8) {
        let tmp14 = importDefault;
        let tmp15 = dependencyMap;
        let obj2 = importDefault(1193);
        tmp12 = tmp2;
        tmp13 = tmp3;
        if (obj2.v3("max_id") === tmp8) {
          tmp12 = tmp2;
          tmp13 = tmp9;
        }
      }
      iter3 = tmp();
      tmp2 = tmp12;
      tmp3 = tmp13;
      iter2 = iter3;
      tmp4 = tmp12;
      tmp5 = tmp13;
    } while (!iter3.done);
  }
  obj = { min: tmp4, max: tmp5 };
  return obj;
}
let obj = {};
obj[require("createBuffer").v3("guild_ids")] = (arg0) => {
  let iter2;
  let tmp4;
  let tmp5;
  let importDefault = [];
  const tmp = _createForOfIteratorHelperLoose(arg0);
  let iter = tmp();
  if (!iter.done) {
    do {
      let tmp2 = callback;
      let tmp3 = callback(iter.value, 2);
      let tmp6 = importDefault;
      let tmp7 = dependencyMap;
      [tmp4, tmp5] = tmp3;
      let obj = importDefault(1193);
      if (tmp4 === obj.v3("guild_ids")) {
        importDefault = tmp5;
      }
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
  return (arg0) => closure_0.includes(arg0);
};
obj[require("createBuffer").v3("guild_id_range")] = (arg0) => {
  let dependencyMap;
  let importDefault;
  ({ min: importDefault, max: dependencyMap } = getRangeData(arg0));
  return (arg0) => outer1_8(arg0, closure_0, closure_1);
};
obj[require("createBuffer").v3("guild_age_range_days")] = (arg0) => {
  let dependencyMap;
  let importDefault;
  ({ min: importDefault, max: dependencyMap } = getRangeData(arg0));
  return (arg0) => {
    const obj = outer1_0(outer1_1[6]);
    return outer1_8(Math.floor(outer1_0(outer1_1[6]).age(arg0) / outer1_0(outer1_1[7]).Millis.DAY), closure_0, closure_1);
  };
};
obj[require("createBuffer").v3("guild_member_count_range")] = (arg0) => {
  let dependencyMap;
  let importDefault;
  ({ min: importDefault, max: dependencyMap } = getRangeData(arg0));
  return (arg0) => {
    const memberCount = outer1_4.getMemberCount(arg0);
    let tmp2 = null != memberCount;
    if (tmp2) {
      tmp2 = outer1_8(memberCount, closure_0, closure_1);
    }
    return tmp2;
  };
};
obj[require("createBuffer").v3("guild_has_feature")] = (arg0) => {
  let closure_0 = callback(callback(arg0, 1)[0], 2)[1];
  return (guildId) => {
    let guild = outer1_5.getGuild(guildId);
    if (null == guild) {
      guild = outer1_3.getGuild(guildId);
    }
    let someResult = null != guild;
    if (someResult) {
      someResult = guild.some((arg0) => {
        const features = guild.features;
        return features.has(arg0);
      });
    }
    return someResult;
  };
};
obj[require("createBuffer").v3("guild_hub_types")] = (arg0) => {
  let closure_0 = callback(callback(arg0, 1)[0], 2)[1];
  return (guildId) => {
    let guild = outer1_5.getGuild(guildId);
    if (null == guild) {
      guild = outer1_3.getGuild(guildId);
    }
    let someResult = null != guild;
    if (someResult) {
      someResult = "number" === typeof guild.hubType;
    }
    if (someResult) {
      someResult = guild.some((arg0) => guild.hubType === arg0);
    }
    return someResult;
  };
};
obj[require("createBuffer").v3("guild_has_vanity_url")] = (arg0) => {
  let closure_0 = callback(callback(arg0, 1)[0], 2)[1];
  return (guildId) => {
    let guild = outer1_5.getGuild(guildId);
    if (null == guild) {
      guild = outer1_3.getGuild(guildId);
    }
    if (null == guild) {
      return false;
    } else {
      return closure_0 === (null != guild.vanityURLCode);
    }
  };
};
obj[require("createBuffer").v3("guild_in_range_by_hash")] = (arg0) => {
  let iter2;
  let tmp5;
  let tmp6;
  const tmp = _createForOfIteratorHelperLoose(arg0);
  let iter = tmp();
  if (!iter.done) {
    do {
      let tmp3 = callback;
      let tmp4 = callback(iter.value, 2);
      [tmp5, tmp6] = tmp4;
      let tmp7 = importDefault;
      let tmp8 = dependencyMap;
      let obj = importDefault(1193);
      if (obj.v3("hash_key") === tmp5) {
        importDefault = tmp6;
        let tmp11 = tmp2;
      } else {
        let tmp9 = importDefault;
        let tmp10 = dependencyMap;
        let obj2 = importDefault(1193);
        tmp11 = tmp2;
        if (obj2.v3("target") === tmp5) {
          let _parseInt = parseInt;
          let parsed = parseInt(tmp6);
          let num = 0;
          if (null != parsed) {
            num = parsed;
          }
          dependencyMap = num;
          tmp11 = parsed;
        }
      }
      iter2 = tmp();
      tmp2 = tmp11;
      iter = iter2;
    } while (!iter2.done);
  }
  return (arg0) => {
    const v3Result = outer1_0(outer1_1[5]).v3("" + closure_0 + ":" + arg0);
    return (v3Result > 0 ? v3Result + v3Result : v3Result >>> 0) % 10000 < closure_1;
  };
};
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/experiments/GuildFilters.tsx");

export const GUILD_FILTERS = obj;
