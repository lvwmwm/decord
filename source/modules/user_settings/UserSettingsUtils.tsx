// Module ID: 1318
// Function ID: 15491
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 662, 653, 1284, 1282, 1317, 1283, 22, 2]
// Exports: b64ToPreloadedUserSettingsProto, b64ToProtoWithType, mergeTopLevelFields, mutateUserChannelSettings, protoToB64WithType, runMigrations, serializeUsageHistory

// Module 1318 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import { UserSettingsTypes } from "MAX_FAVORITES";
import { ZERO_STRING_GUILD_ID } from "ME";

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
function b64ToProto(ProtoClass, settings) {
  if (null == settings) {
    return null;
  } else {
    const obj = require(1284);
    return ProtoClass.fromBinary(obj.base64decode(settings), obj);
  }
}
function protoToB64(ProtoClass, protoToSave) {
  return require(1284).base64encode(ProtoClass.toBinary(protoToSave));
}
function mutateUserGuildSettings(guilds, closure_0, closure_1) {
  if (null == guilds.guilds) {
    const AllGuildSettings = require(1282) /* _callSuper */.AllGuildSettings;
    guilds.guilds = AllGuildSettings.create();
  }
  return mutateUserGuildSettingsInternal(guilds.guilds, closure_0, closure_1);
}
function mutateUserGuildSettingsInternal(guilds, closure_0, closure_1) {
  let tmp = closure_0;
  let tmp2 = null != closure_0;
  if (tmp2) {
    tmp2 = "null" !== tmp;
  }
  if (!tmp2) {
    tmp = ZERO_STRING_GUILD_ID;
  }
  if (!(tmp in guilds.guilds)) {
    const GuildSettings = require(1282) /* _callSuper */.GuildSettings;
    guilds.guilds[tmp] = GuildSettings.create();
  }
  return closure_1(guilds.guilds[tmp]);
}
function mutateUserChannelSettingsInternal(channels, closure_0, closure_1) {
  if (!(closure_0 in channels.channels)) {
    const ChannelSettings = require(1282) /* _callSuper */.ChannelSettings;
    channels.channels[closure_0] = ChannelSettings.create();
  }
  return closure_1(channels.channels[closure_0]);
}
let obj = {
  readerFactory(buf) {
    const textDecoder = new TextDecoder("utf-8");
    const binaryReader = new require(1284).BinaryReader(buf, textDecoder);
    return binaryReader;
  }
};
obj = { [UserSettingsTypes.PRELOADED_USER_SETTINGS]: require("_callSuper").PreloadedUserSettings, [UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: require("_callSuper").FrecencyUserSettings };
const result = require("ME").fileFinishedImporting("modules/user_settings/UserSettingsUtils.tsx");

export const BINARY_READ_OPTIONS = obj;
export const b64ToProtoWithType = function b64ToProtoWithType(type, proto) {
  let tmp = null;
  if (null != proto) {
    let tmp3 = null;
    if (type in obj) {
      tmp3 = b64ToProto(obj[type], proto);
    }
    tmp = tmp3;
  }
  return tmp;
};
export { b64ToProto };
export const b64ToPreloadedUserSettingsProto = function b64ToPreloadedUserSettingsProto(settings) {
  return b64ToProto(require(1282) /* _callSuper */.PreloadedUserSettings, settings);
};
export const protoToB64WithType = function protoToB64WithType(arg0, protoToSave) {
  return protoToB64(obj[arg0], protoToSave);
};
export { protoToB64 };
export const mergeTopLevelFields = function mergeTopLevelFields(ProtoClass, proto, proto2) {
  const obj = {};
  const merged = Object.assign(proto);
  for (const key10008 in arg2) {
    let tmp5 = key10008;
    delete tmp[tmp2];
    continue;
  }
  ProtoClass.mergePartial(obj, proto2);
  return obj;
};
export { mutateUserGuildSettings };
export { mutateUserGuildSettingsInternal };
export const mutateUserChannelSettings = function mutateUserChannelSettings(inbox, closure_0, id, arg3) {
  closure_0 = id;
  let closure_1 = arg3;
  return mutateUserGuildSettings(inbox, closure_0, (arg0) => outer1_13(arg0, closure_0, closure_1));
};
export { mutateUserChannelSettingsInternal };
export const runMigrations = function runMigrations(proto, arg1) {
  let iter5;
  if (null == proto.versions) {
    const Versions = require(1283) /* _isNativeReflectConstruct */.Versions;
    proto.versions = Versions.create();
  }
  const tmp3 = _createForOfIteratorHelperLoose(arg1);
  let iter = tmp3();
  let num2 = 0;
  if (!iter.done) {
    let value = iter.value;
    while (value.version > num2) {
      num2 = value.version;
      let iter2 = tmp3();
      iter = iter2;
    }
    const _Error = Error;
    throw Error("Migrations are out of order or there is a duplicate version");
  }
  const items = [];
  const tmp6 = _createForOfIteratorHelperLoose(arg1);
  const iter3 = tmp6();
  let iter4 = iter3;
  let flag = false;
  let flag2 = false;
  if (!iter3.done) {
    do {
      value = iter4.value;
      if (value.version <= proto.versions.clientVersion) {
        let flag3 = flag;
        if (tmp5) {
          flag3 = flag;
          if (null != value.cleanup) {
            let cleanupResult = value.cleanup();
            flag3 = flag;
          }
        }
      } else {
        proto.versions.clientVersion = value.version;
        if (false !== value.run(proto)) {
          flag3 = true;
          if (null != value.cleanup) {
            let arr = items.push(value.cleanup);
            flag3 = true;
          }
        } else {
          flag3 = flag;
          if (null != value.cleanup) {
            let cleanupResult1 = value.cleanup();
            flag3 = flag;
          }
        }
      }
      iter5 = tmp6();
      flag = flag3;
      iter4 = iter5;
      flag2 = flag3;
    } while (!iter5.done);
  }
  const obj = { proto, isDirty: flag2, cleanupFuncs: items };
  return obj;
};
export const serializeUsageHistory = function serializeUsageHistory(usageHistory, outer2_18) {
  let done;
  let length;
  const entries = Object.entries(usageHistory);
  let tmp = entries;
  if (entries.length > outer2_18) {
    let obj = importDefault(22);
    const reversed = obj.sortBy(entries, (arg0) => {
      let tmp;
      [, tmp] = arg0;
      return tmp.recentUses[tmp.recentUses.length - 1];
    }).reverse();
    tmp = reversed;
    if (reversed.length > outer2_18) {
      do {
        let arr = reversed.pop();
        tmp = reversed;
        length = reversed.length;
      } while (length > outer2_18);
    }
    const sortByResult = obj.sortBy(entries, (arg0) => {
      let tmp;
      [, tmp] = arg0;
      return tmp.recentUses[tmp.recentUses.length - 1];
    });
  }
  obj = {};
  const tmp5 = _createForOfIteratorHelperLoose(tmp);
  let iter = tmp5();
  if (!iter.done) {
    do {
      let tmp6 = callback;
      let tmp7 = callback(iter.value, 2);
      let tmp8 = tmp7[1];
      let tmp9 = require;
      let tmp10 = dependencyMap;
      let FrecencyItem = require(1317) /* _callSuper */.FrecencyItem;
      obj = FrecencyItem.create();
      obj.frecency = tmp8.frecency;
      let recentUses = tmp8.recentUses;
      let found = recentUses.filter((arg0) => {
        let tmp = null != arg0;
        if (tmp) {
          tmp = arg0 > 0;
        }
        return tmp;
      });
      let _String = String;
      obj.recentUses = found.map(String);
      let _Math = Math;
      obj.score = Math.round(tmp8.score);
      obj.totalUses = tmp8.totalUses;
      obj[tmp7[0]] = obj;
      let iter2 = tmp5();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  return obj;
};
