// Module ID: 1318
// Function ID: 15484
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: b64ToPreloadedUserSettingsProto, b64ToProtoWithType, mergeTopLevelFields, mutateUserChannelSettings, protoToB64WithType, runMigrations, serializeUsageHistory

// Module 1318 (_createForOfIteratorHelperLoose)
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
function b64ToProto(ProtoClass, settings) {
  if (null == settings) {
    return null;
  } else {
    const obj = settings(dependencyMap[3]);
    return ProtoClass.fromBinary(obj.base64decode(settings), obj);
  }
}
function protoToB64(ProtoClass, protoToSave) {
  return protoToSave(dependencyMap[3]).base64encode(ProtoClass.toBinary(protoToSave));
}
function mutateUserGuildSettings(guilds, arg1, arg2) {
  if (null == guilds.guilds) {
    const AllGuildSettings = arg1(dependencyMap[4]).AllGuildSettings;
    guilds.guilds = AllGuildSettings.create();
  }
  return mutateUserGuildSettingsInternal(guilds.guilds, arg1, arg2);
}
function mutateUserGuildSettingsInternal(guilds, arg1, arg2) {
  let tmp = arg1;
  let tmp2 = null != arg1;
  if (tmp2) {
    tmp2 = "null" !== tmp;
  }
  if (!tmp2) {
    tmp = ZERO_STRING_GUILD_ID;
  }
  if (!(tmp in guilds.guilds)) {
    const GuildSettings = arg1(dependencyMap[4]).GuildSettings;
    guilds.guilds[tmp] = GuildSettings.create();
  }
  return arg2(guilds.guilds[tmp]);
}
function mutateUserChannelSettingsInternal(channels, arg1, arg2) {
  if (!(arg1 in channels.channels)) {
    const ChannelSettings = arg1(dependencyMap[4]).ChannelSettings;
    channels.channels[arg1] = ChannelSettings.create();
  }
  return arg2(channels.channels[arg1]);
}
let closure_3 = importDefault(dependencyMap[0]);
const UserSettingsTypes = arg1(dependencyMap[1]).UserSettingsTypes;
const ZERO_STRING_GUILD_ID = arg1(dependencyMap[2]).ZERO_STRING_GUILD_ID;
let obj = {
  readerFactory(buf) {
    const textDecoder = new TextDecoder("utf-8");
    const binaryReader = new arg1(dependencyMap[3]).BinaryReader(buf, textDecoder);
    return binaryReader;
  }
};
obj = { [UserSettingsTypes.PRELOADED_USER_SETTINGS]: arg1(dependencyMap[4]).PreloadedUserSettings, [UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: arg1(dependencyMap[5]).FrecencyUserSettings };
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/user_settings/UserSettingsUtils.tsx");

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
  return b64ToProto(arg1(dependencyMap[4]).PreloadedUserSettings, settings);
};
export const protoToB64WithType = function protoToB64WithType(arg0, protoToSave) {
  return protoToB64(obj[arg0], protoToSave);
};
export { protoToB64 };
export const mergeTopLevelFields = function mergeTopLevelFields(ProtoClass, proto, proto2) {
  const obj = {};
  const merged = Object.assign(proto);
  for (const key10008 in arg2) {
    let tmp3 = key10008;
    delete r0[r8];
  }
  ProtoClass.mergePartial(obj, proto2);
  return obj;
};
export { mutateUserGuildSettings };
export { mutateUserGuildSettingsInternal };
export const mutateUserChannelSettings = function mutateUserChannelSettings(inbox, arg1, id, arg3) {
  arg1 = id;
  const importDefault = arg3;
  return mutateUserGuildSettings(inbox, arg1, (arg0) => callback(arg0, arg2, arg3));
};
export { mutateUserChannelSettingsInternal };
export const runMigrations = function runMigrations(proto, arg1) {
  let iter5;
  if (null == proto.versions) {
    const Versions = arg1(dependencyMap[6]).Versions;
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
export const serializeUsageHistory = function serializeUsageHistory(usageHistory, closure_18) {
  let done;
  let length;
  const entries = Object.entries(usageHistory);
  let tmp = entries;
  if (entries.length > closure_18) {
    let obj = importDefault(dependencyMap[7]);
    const reversed = obj.sortBy(entries, (arg0) => {
      let tmp;
      [, tmp] = arg0;
      return tmp.recentUses[tmp.recentUses.length - 1];
    }).reverse();
    tmp = reversed;
    if (reversed.length > closure_18) {
      do {
        let arr = reversed.pop();
        tmp = reversed;
        length = reversed.length;
      } while (length > closure_18);
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
      let tmp6 = closure_3;
      let tmp7 = closure_3(iter.value, 2);
      let tmp8 = tmp7[1];
      let tmp9 = closure_0;
      let tmp10 = closure_2;
      let FrecencyItem = closure_0(closure_2[5]).FrecencyItem;
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
