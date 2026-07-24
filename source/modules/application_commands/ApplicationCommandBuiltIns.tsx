// Module ID: 8017
// Function ID: 63521
// Name: getOptionValue
// Dependencies: [5, 1348, 3758, 1849, 4566, 653, 8018, 1919, 4123, 6755, 1212, 8019, 1881, 3803, 8020, 8021, 5650, 8022, 669, 8024, 6691, 6923, 5048, 3969, 664, 8218, 3712, 4140, 44, 5627, 8219, 2]
// Exports: getBuiltInCommands

// Module 8017 (getOptionValue)
import importDefaultResult from "ME";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { BuiltInSectionId } from "TRUE_OPTION_NAME";
import ME from "ME";
import ROLL_DURATION_MS from "ROLL_DURATION_MS";
import { getDisableCommunicationDurationOptions as closure_11 } from "getFriendlyDurationString";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";

let ALLOWED_DICE_SIDES;
let DISPLAY_NAME_MAX_LENGTH;
let MAX_CHANNEL_NAME_LENGTH;
let MAX_DICE_COUNT;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function getOptionValue(arr, message) {
  let closure_0 = message;
  const iter = arr.find((name) => name.name === closure_0);
  let value;
  if (null != iter) {
    value = iter.value;
  }
  return value;
}
({ Permissions: closure_7, MARKDOWN_SPOILER_WRAPPER: closure_8, ME: closure_9 } = ME);
({ DISPLAY_NAME_MAX_LENGTH, MAX_CHANNEL_NAME_LENGTH } = ME);
({ ALLOWED_DICE_SIDES, MAX_DICE_COUNT } = ROLL_DURATION_MS);
let obj = {};
obj = { id: BuiltInSectionId.BUILT_IN, type: require("ApplicationCommandSectionType").ApplicationCommandSectionType.BUILT_IN };
Object.defineProperty(obj, "name", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.fI5MTa);
  },
  set: undefined
});
obj[BuiltInSectionId.BUILT_IN] = obj;
obj = { id: BuiltInSectionId.FRECENCY, type: require("ApplicationCommandSectionType").ApplicationCommandSectionType.BUILT_IN };
Object.defineProperty(obj, "name", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["+cGVV6"]);
  },
  set: undefined
});
obj[BuiltInSectionId.FRECENCY] = obj;
let items = [...require("get untranslatedDescription").default];
let obj1 = { id: "-1", untranslatedName: "shrug", displayName: "shrug", type: require("PermissionOverwriteType").ApplicationCommandType.CHAT, inputType: require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN_TEXT, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj1, "untranslatedDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.j5xUSW);
  },
  set: undefined
});
Object.defineProperty(obj1, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.j5xUSW);
  },
  set: undefined
});
let obj2 = { name: "message", displayName: "message", type: require("PermissionOverwriteType").ApplicationCommandOptionType.STRING };
Object.defineProperty(obj2, "description", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.JewOrS);
  },
  set: undefined
});
Object.defineProperty(obj2, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.JewOrS);
  },
  set: undefined
});
const items1 = [obj2];
obj1.options = items1;
obj1.execute = function execute(arr) {
  const obj = {};
  const tmp = getOptionValue(arr, "message");
  let str = "";
  if (null != tmp) {
    str = tmp;
  }
  obj.content = "" + str + " \u00AF\\_(\u30C4)_/\u00AF".trim();
  return obj;
};
items[tmp5] = obj1;
const sum = tmp5 + 1;
let obj3 = { id: "-2", untranslatedName: "tableflip", displayName: "tableflip", type: require("PermissionOverwriteType").ApplicationCommandType.CHAT, inputType: require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN_TEXT, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj3, "untranslatedDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.nrQRce);
  },
  set: undefined
});
Object.defineProperty(obj3, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.nrQRce);
  },
  set: undefined
});
let obj4 = { name: "message", displayName: "message", type: require("PermissionOverwriteType").ApplicationCommandOptionType.STRING };
Object.defineProperty(obj4, "description", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.EI80tw);
  },
  set: undefined
});
Object.defineProperty(obj4, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.EI80tw);
  },
  set: undefined
});
const items2 = [obj4];
obj3.options = items2;
obj3.execute = function execute(arr) {
  const obj = {};
  const tmp = getOptionValue(arr, "message");
  let str = "";
  if (null != tmp) {
    str = tmp;
  }
  obj.content = "" + str + " (\u256F\u00B0\u25A1\u00B0)\u256F\uFE35 \u253B\u2501\u253B".trim();
  return obj;
};
items[sum] = obj3;
const sum1 = sum + 1;
const obj5 = { id: "-3", untranslatedName: "unflip", displayName: "unflip", type: require("PermissionOverwriteType").ApplicationCommandType.CHAT, inputType: require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN_TEXT, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj5, "untranslatedDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.pnnn8e);
  },
  set: undefined
});
Object.defineProperty(obj5, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.pnnn8e);
  },
  set: undefined
});
let obj6 = { name: "message", displayName: "message", type: require("PermissionOverwriteType").ApplicationCommandOptionType.STRING };
Object.defineProperty(obj6, "description", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.ETs6go);
  },
  set: undefined
});
Object.defineProperty(obj6, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.ETs6go);
  },
  set: undefined
});
const items3 = [obj6];
obj5.options = items3;
obj5.execute = function execute(arr) {
  const obj = {};
  const tmp = getOptionValue(arr, "message");
  let str = "";
  if (null != tmp) {
    str = tmp;
  }
  obj.content = "" + str + " \u252C\u2500\u252C\u30CE( \u00BA _ \u00BA\u30CE)".trim();
  return obj;
};
items[sum1] = obj5;
const sum2 = sum1 + 1;
const obj7 = { id: "-4", untranslatedName: "tts", displayName: "tts", type: require("PermissionOverwriteType").ApplicationCommandType.CHAT, inputType: require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN_TEXT, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj7, "untranslatedDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.jZcIid);
  },
  set: undefined
});
Object.defineProperty(obj7, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.jZcIid);
  },
  set: undefined
});
const obj8 = { name: "message", displayName: "message", type: require("PermissionOverwriteType").ApplicationCommandOptionType.STRING };
Object.defineProperty(obj8, "description", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["k+sw9g"]);
  },
  set: undefined
});
Object.defineProperty(obj8, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["k+sw9g"]);
  },
  set: undefined
});
obj8.required = true;
const items4 = [obj8];
obj7.options = items4;
obj7.predicate = function predicate(channel) {
  channel = channel.channel;
  let setting = null != channel && !channel.isPrivate();
  if (setting) {
    const EnableTTSCommand = require(3803) /* explicitContentFromProto */.EnableTTSCommand;
    setting = EnableTTSCommand.getSetting();
  }
  if (setting) {
    setting = closure_5.can(constants.SEND_TTS_MESSAGES, channel);
  }
  return setting;
};
obj7.execute = function execute(arr) {
  const obj = {};
  const tmp = getOptionValue(arr, "message");
  let str = "";
  if (null != tmp) {
    str = tmp;
  }
  obj.content = str;
  obj.tts = true;
  return obj;
};
items[sum2] = obj7;
const sum3 = sum2 + 1;
const obj9 = { id: "-5", untranslatedName: "me", displayName: "me", type: require("PermissionOverwriteType").ApplicationCommandType.CHAT, inputType: require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN_TEXT, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj9, "untranslatedDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.UGO8fU);
  },
  set: undefined
});
Object.defineProperty(obj9, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.UGO8fU);
  },
  set: undefined
});
const obj10 = { name: "message", displayName: "message", type: require("PermissionOverwriteType").ApplicationCommandOptionType.STRING };
Object.defineProperty(obj10, "description", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.RWTgNd);
  },
  set: undefined
});
Object.defineProperty(obj10, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.RWTgNd);
  },
  set: undefined
});
obj10.required = true;
const items5 = [obj10];
obj9.options = items5;
obj9.execute = function execute(arr) {
  const obj = {};
  const tmp = getOptionValue(arr, "message");
  let str = "";
  if (null != tmp) {
    str = tmp;
  }
  obj.content = "_" + str + "_";
  return obj;
};
items[sum3] = obj9;
const sum4 = sum3 + 1;
const obj11 = { id: "-6", untranslatedName: "spoiler", displayName: "spoiler", type: require("PermissionOverwriteType").ApplicationCommandType.CHAT, inputType: require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN_TEXT, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj11, "untranslatedDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.v0eDdV);
  },
  set: undefined
});
Object.defineProperty(obj11, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.v0eDdV);
  },
  set: undefined
});
const obj12 = { name: "message", displayName: "message", type: require("PermissionOverwriteType").ApplicationCommandOptionType.STRING };
Object.defineProperty(obj12, "description", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.D13pbc);
  },
  set: undefined
});
Object.defineProperty(obj12, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.D13pbc);
  },
  set: undefined
});
obj12.required = true;
const items6 = [obj12];
obj11.options = items6;
obj11.execute = function execute(arr) {
  const tmp = getOptionValue(arr, "message");
  let str = "";
  if (null != tmp) {
    str = tmp;
  }
  const obj = { content: callback(str).trim() };
  return obj;
};
items[sum4] = obj11;
const sum5 = sum4 + 1;
const obj13 = { id: "-7", untranslatedName: "nick", displayName: "nick", type: require("PermissionOverwriteType").ApplicationCommandType.CHAT, inputType: require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj13, "untranslatedDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["jiHfS/"]);
  },
  set: undefined
});
Object.defineProperty(obj13, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["jiHfS/"]);
  },
  set: undefined
});
const obj14 = { name: "new_nick", displayName: "new_nick", type: require("PermissionOverwriteType").ApplicationCommandOptionType.STRING };
Object.defineProperty(obj14, "description", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.WTSzVu);
  },
  set: undefined
});
Object.defineProperty(obj14, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.WTSzVu);
  },
  set: undefined
});
obj14.maxLength = DISPLAY_NAME_MAX_LENGTH;
const items7 = [obj14];
obj13.options = items7;
obj13.predicate = function predicate(channel) {
  channel = channel.channel;
  let tmp = null != channel && !channel.isPrivate();
  if (tmp) {
    let canResult = closure_5.can(constants.CHANGE_NICKNAME, channel);
    if (!canResult) {
      canResult = closure_5.can(constants.MANAGE_NICKNAMES, channel);
    }
    tmp = canResult;
  }
  return tmp;
};
obj13.execute = function execute(arr) {
  let channel;
  let guild;
  ({ guild, channel } = arg1);
  if (null != guild) {
    if (null != channel) {
      const tmp3 = getOptionValue(arr, "new_nick");
      let str3 = "";
      if (null != tmp3) {
        str3 = tmp3;
      }
      const obj = importDefault(8020);
      const id = guild.id;
      const id2 = channel.id;
      if (!str3) {
        str3 = "";
      }
      obj.changeNickname(id, id2, closure_9, str3);
    }
  }
};
items[sum5] = obj13;
const sum6 = sum5 + 1;
const obj15 = { id: "-10", untranslatedName: "thread", displayName: "thread", type: require("PermissionOverwriteType").ApplicationCommandType.CHAT, inputType: require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj15, "untranslatedDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.t6ZAS0);
  },
  set: undefined
});
Object.defineProperty(obj15, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.t6ZAS0);
  },
  set: undefined
});
const obj16 = { name: "name", displayName: "name", type: require("PermissionOverwriteType").ApplicationCommandOptionType.STRING };
Object.defineProperty(obj16, "description", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.TffOfY);
  },
  set: undefined
});
Object.defineProperty(obj16, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.TffOfY);
  },
  set: undefined
});
obj16.required = true;
obj16.maxLength = MAX_CHANNEL_NAME_LENGTH;
const items8 = [obj16, ];
const obj17 = { name: "message", displayName: "message", type: require("PermissionOverwriteType").ApplicationCommandOptionType.STRING };
Object.defineProperty(obj17, "description", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.QXfSfU);
  },
  set: undefined
});
Object.defineProperty(obj17, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.QXfSfU);
  },
  set: undefined
});
Object.defineProperty(obj17, "maxLength", { get: () => require(8021) /* getMaxMessageLength_ */.getMaxMessageLength(), set: undefined });
obj17.required = true;
items8[1] = obj17;
obj15.options = items8;
obj15.predicate = function predicate(channel) {
  channel = channel.channel;
  let canStartPublicThread = null != channel;
  if (canStartPublicThread) {
    canStartPublicThread = require(5650) /* useCanStartPublicThread */.computeCanStartPublicThread(channel);
    const obj = require(5650) /* useCanStartPublicThread */;
  }
  return canStartPublicThread;
};
let closure_13 = importDefaultResult(async (arg0, arg1) => {
  const iter = (function*(arg0, channel) {
    channel = channel.channel;
    yield undefined;
    const tmp2 = outer1_16(arg0, "name");
    let str = "";
    let str2 = "";
    if (null != tmp2) {
      str2 = tmp2;
    }
    const tmp3 = outer1_16(arg0, "message");
    if (null != tmp3) {
      str = tmp3;
    }
    let obj = outer1_0(outer1_2[17]);
    const tmp4 = yield obj.createThread(channel, str2, outer1_0(outer1_2[18]).ChannelTypes.PUBLIC_THREAD, outer1_0(outer1_2[19]).getAutoArchiveDuration(channel, null), "Slash Command");
    const obj2 = outer1_0(outer1_2[19]);
    const obj3 = outer1_1(outer1_2[20]);
    obj = { location: outer1_12.THREAD_CREATION };
    obj3.sendMessage(tmp4.id, outer1_1(outer1_2[21]).parse(tmp4, str), true, obj);
  })();
  iter.next();
  return iter;
});
obj15.execute = function() {
  return callback3(...arguments);
};
items[sum6] = obj15;
const sum7 = sum6 + 1;
const obj18 = { id: "-11", untranslatedName: "kick", displayName: "kick", type: require("PermissionOverwriteType").ApplicationCommandType.CHAT, inputType: require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj18, "untranslatedDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["03N0UL"]);
  },
  set: undefined
});
Object.defineProperty(obj18, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["03N0UL"]);
  },
  set: undefined
});
const obj19 = { name: "user", displayName: "user", type: require("PermissionOverwriteType").ApplicationCommandOptionType.USER };
Object.defineProperty(obj19, "description", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.gF8IpD);
  },
  set: undefined
});
Object.defineProperty(obj19, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.gF8IpD);
  },
  set: undefined
});
obj19.required = true;
const items9 = [obj19, ];
const obj20 = { name: "reason", displayName: "reason", type: require("PermissionOverwriteType").ApplicationCommandOptionType.STRING };
Object.defineProperty(obj20, "description", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.QWldgj);
  },
  set: undefined
});
Object.defineProperty(obj20, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.QWldgj);
  },
  set: undefined
});
obj20.required = false;
items9[1] = obj20;
obj18.options = items9;
obj18.predicate = function predicate(guild) {
  return closure_5.can(constants.KICK_MEMBERS, guild.guild);
};
obj18.execute = function execute(arr, guild) {
  const _require = arr;
  guild = guild.guild;
  const channel = guild.channel;
  let str;
  async function _handler() {
    if (null != outer2_1) {
      if (null != outer2_2) {
        const user = outer3_6.getUser(outer2_3);
        if (null == user) {
          const _Error = Error;
          const error = new Error();
          throw error;
        } else {
          const tmp22 = outer3_16(outer2_0, "reason");
          let str = "";
          if (null != tmp22) {
            str = tmp22;
          }
          yield guild(channel[22]).kickUser(outer2_1.id, outer2_3, str);
          let obj = guild(channel[20]);
          const intl = callback(channel[10]).intl;
          obj = {};
          const obj4 = guild(channel[22]);
          const tmp19 = outer2_3;
          obj.user = guild(channel[23]).getUserTag(user);
          obj.sendBotMessage(outer2_2.id, intl.formatToPlainString(callback(channel[10]).t["9wzHDV"], obj));
          const obj3 = guild(channel[23]);
        }
      }
    }
  }
  if (null != guild) {
    if (null != channel) {
      const tmp9 = getOptionValue(arr, "user");
      str = "";
      if (null != tmp9) {
        str = tmp9;
      }
      if (closure_5.canManageUser(constants.KICK_MEMBERS, str, guild)) {
        (function handler() {
          return _handler(...arguments);
        })().catch(() => {
          const intl = arr(channel[10]).intl;
          guild(channel[20]).sendBotMessage(channel.id, intl.string(arr(channel[10]).t.l0gNlp));
        });
        const promise = (function handler() {
          return _handler(...arguments);
        })();
      } else {
        let intl = _require(channel[10]).intl;
        guild(channel[20]).sendBotMessage(channel.id, intl.string(_require(channel[10]).t["6RIwPI"]));
        let obj = guild(channel[20]);
      }
    }
  }
};
items[sum7] = obj18;
const sum8 = sum7 + 1;
const obj21 = { id: "-12", untranslatedName: "ban", displayName: "ban", type: require("PermissionOverwriteType").ApplicationCommandType.CHAT, inputType: require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj21, "untranslatedDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.HWuskv);
  },
  set: undefined
});
Object.defineProperty(obj21, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.HWuskv);
  },
  set: undefined
});
const obj22 = { name: "user", displayName: "user", type: require("PermissionOverwriteType").ApplicationCommandOptionType.USER };
Object.defineProperty(obj22, "description", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.z3XPjr);
  },
  set: undefined
});
Object.defineProperty(obj22, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.z3XPjr);
  },
  set: undefined
});
obj22.required = true;
const items10 = [obj22, , ];
const obj23 = { name: "delete_messages", displayName: "delete_messages", type: require("PermissionOverwriteType").ApplicationCommandOptionType.INTEGER };
Object.defineProperty(obj23, "description", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.smrvA6);
  },
  set: undefined
});
Object.defineProperty(obj23, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.smrvA6);
  },
  set: undefined
});
obj23.required = true;
Object.defineProperty(obj23, "choices", {
  get: () => {
    let obj = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj.name = intl.string(require(1212) /* getSystemLocale */.t["4obaMS"]);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj.displayName = intl2.string(require(1212) /* getSystemLocale */.t["4obaMS"]);
    obj.value = 0;
    const items = [obj, , , , , , ];
    obj = {};
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj.name = intl3.string(require(1212) /* getSystemLocale */.t.RKpitY);
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj.displayName = intl4.string(require(1212) /* getSystemLocale */.t.RKpitY);
    obj.value = importDefault(664).Seconds.HOUR;
    items[1] = obj;
    obj = {};
    const intl5 = require(1212) /* getSystemLocale */.intl;
    obj.name = intl5.string(require(1212) /* getSystemLocale */.t["8WfJZ8"]);
    const intl6 = require(1212) /* getSystemLocale */.intl;
    obj.displayName = intl6.string(require(1212) /* getSystemLocale */.t["8WfJZ8"]);
    obj.value = 6 * importDefault(664).Seconds.HOUR;
    items[2] = obj;
    const obj1 = {};
    const intl7 = require(1212) /* getSystemLocale */.intl;
    obj1.name = intl7.string(require(1212) /* getSystemLocale */.t.p1up7u);
    const intl8 = require(1212) /* getSystemLocale */.intl;
    obj1.displayName = intl8.string(require(1212) /* getSystemLocale */.t.p1up7u);
    obj1.value = 12 * importDefault(664).Seconds.HOUR;
    items[3] = obj1;
    const obj2 = {};
    const intl9 = require(1212) /* getSystemLocale */.intl;
    obj2.name = intl9.string(require(1212) /* getSystemLocale */.t.XuVkkD);
    const intl10 = require(1212) /* getSystemLocale */.intl;
    obj2.displayName = intl10.string(require(1212) /* getSystemLocale */.t.XuVkkD);
    obj2.value = importDefault(664).Seconds.DAY;
    items[4] = obj2;
    const obj3 = {};
    const intl11 = require(1212) /* getSystemLocale */.intl;
    obj3.name = intl11.string(require(1212) /* getSystemLocale */.t["gMcDS+"]);
    const intl12 = require(1212) /* getSystemLocale */.intl;
    obj3.displayName = intl12.string(require(1212) /* getSystemLocale */.t["gMcDS+"]);
    obj3.value = 3 * importDefault(664).Seconds.DAY;
    items[5] = obj3;
    const obj4 = {};
    const intl13 = require(1212) /* getSystemLocale */.intl;
    obj4.name = intl13.string(require(1212) /* getSystemLocale */.t.FA7IUk);
    const intl14 = require(1212) /* getSystemLocale */.intl;
    obj4.displayName = intl14.string(require(1212) /* getSystemLocale */.t.FA7IUk);
    obj4.value = 7 * importDefault(664).Seconds.DAY;
    items[6] = obj4;
    return items;
  },
  set: undefined
});
items10[1] = obj23;
const obj24 = { name: "reason", displayName: "reason", type: require("PermissionOverwriteType").ApplicationCommandOptionType.STRING };
Object.defineProperty(obj24, "description", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.dG4noU);
  },
  set: undefined
});
Object.defineProperty(obj24, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.dG4noU);
  },
  set: undefined
});
obj24.required = false;
items10[2] = obj24;
obj21.options = items10;
obj21.predicate = function predicate(guild) {
  return closure_5.can(constants.BAN_MEMBERS, guild.guild);
};
obj21.execute = function execute(arr, guild) {
  const _require = arr;
  guild = guild.guild;
  const channel = guild.channel;
  let str;
  async function _handler2() {
    if (null != outer2_1) {
      if (null != outer2_2) {
        let str2 = "";
        if ("" === outer2_3) {
          const _Error = Error;
          const error = new Error();
          throw error;
        } else {
          const tmp31 = outer3_16(outer2_0, "delete_messages");
          let num = 0;
          if (null != tmp31) {
            num = tmp31;
          }
          const tmp3 = outer3_16(outer2_0, "reason");
          if (null != tmp3) {
            str2 = tmp3;
          }
          const user = outer3_6.getUser(outer2_3);
          let sendBotMessageResult = guild(channel[22]);
          yield sendBotMessageResult.banUser(outer2_1.id, outer2_3, num, str2);
          const intl = callback(channel[10]).intl;
          sendBotMessageResult = {};
          if (null != user) {
            let userTag = guild(channel[23]).getUserTag(user);
            const obj4 = guild(channel[23]);
          } else {
            userTag = outer2_3;
          }
          sendBotMessageResult.user = userTag;
          sendBotMessageResult = guild(channel[20]).sendBotMessage(outer2_2.id, intl.formatToPlainString(callback(channel[10]).t.YflWdM, sendBotMessageResult));
          const obj2 = guild(channel[20]);
        }
      }
    }
  }
  if (null != guild) {
    if (null != channel) {
      const tmp9 = getOptionValue(arr, "user");
      str = "";
      if (null != tmp9) {
        str = tmp9;
      }
      if (closure_5.canManageUser(constants.BAN_MEMBERS, str, guild)) {
        (function handler() {
          return _handler2(...arguments);
        })().catch(() => {
          const intl = arr(channel[10]).intl;
          guild(channel[20]).sendBotMessage(channel.id, intl.string(arr(channel[10]).t.w2J6Qs));
        });
        const promise = (function handler() {
          return _handler2(...arguments);
        })();
      } else {
        let intl = _require(channel[10]).intl;
        guild(channel[20]).sendBotMessage(channel.id, intl.string(_require(channel[10]).t.R27LJl));
        const obj = guild(channel[20]);
      }
    }
  }
};
items[sum8] = obj21;
const sum9 = sum8 + 1;
const obj25 = { id: "-13", untranslatedName: "timeout", displayName: "timeout", type: require("PermissionOverwriteType").ApplicationCommandType.CHAT, inputType: require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj25, "untranslatedDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.KkPcep);
  },
  set: undefined
});
Object.defineProperty(obj25, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.KkPcep);
  },
  set: undefined
});
const obj26 = { name: "user", displayName: "user", type: require("PermissionOverwriteType").ApplicationCommandOptionType.USER };
Object.defineProperty(obj26, "description", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.UU3VRm);
  },
  set: undefined
});
Object.defineProperty(obj26, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.UU3VRm);
  },
  set: undefined
});
obj26.required = true;
const items11 = [obj26, , ];
const obj27 = { name: "duration", displayName: "duration", type: require("PermissionOverwriteType").ApplicationCommandOptionType.INTEGER };
Object.defineProperty(obj27, "description", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.SNqN1e);
  },
  set: undefined
});
Object.defineProperty(obj27, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.SNqN1e);
  },
  set: undefined
});
obj27.required = true;
Object.defineProperty(obj27, "choices", {
  get: () => callback2().map((label) => {
    const obj = {};
    const merged = Object.assign(label);
    obj["name"] = label.label;
    obj["displayName"] = label.label;
    return obj;
  }),
  set: undefined
});
items11[1] = obj27;
const obj28 = { name: "reason", displayName: "reason", type: require("PermissionOverwriteType").ApplicationCommandOptionType.STRING };
Object.defineProperty(obj28, "description", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.akHScA);
  },
  set: undefined
});
Object.defineProperty(obj28, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.akHScA);
  },
  set: undefined
});
obj28.required = false;
items11[2] = obj28;
obj25.options = items11;
obj25.predicate = function predicate(guild) {
  return closure_5.can(constants.MODERATE_MEMBERS, guild.guild);
};
obj25.execute = function execute(arr, guild) {
  const _require = arr;
  guild = guild.guild;
  const channel = guild.channel;
  let c3;
  async function _handler3() {
    if (null != outer2_1) {
      if (null != outer2_2) {
        const tmp20 = outer3_16(outer2_0, "duration");
        let str3 = "";
        let str = "";
        if (null != tmp20) {
          str = tmp20;
        }
        const tmp3 = outer3_16(outer2_0, "reason");
        if (null != tmp3) {
          str3 = tmp3;
        }
        const user = outer3_6.getUser(outer2_3);
        if (null == user) {
          const _Error = Error;
          const error = new Error();
          throw error;
        } else {
          let obj = { guildId: outer2_1.id, userId: outer2_3 };
          const obj4 = guild(channel[22]);
          const obj6 = guild(channel[26])();
          obj.communicationDisabledUntilTimestamp = guild(channel[26])().add(str, "s").toISOString();
          obj.duration = str;
          obj.reason = str3;
          yield obj4.setCommunicationDisabledUntil(obj);
          obj = guild(channel[20]);
          const intl = callback(channel[10]).intl;
          obj = {};
          const addResult = guild(channel[26])().add(str, "s");
          obj.user = guild(channel[23]).getUserTag(user);
          obj.duration = str;
          obj.sendBotMessage(outer2_2.id, intl.formatToPlainString(callback(channel[10]).t.BbRV6o, obj));
          const obj3 = guild(channel[23]);
        }
      }
    }
  }
  if (null != guild) {
    if (null != channel) {
      const tmp7 = getOptionValue(arr, "user");
      c3 = tmp7;
      if (obj2.canToggleCommunicationDisableOnUser(guild.id, tmp7)) {
        (function handler() {
          return _handler3(...arguments);
        })().catch(() => {
          const intl = arr(channel[10]).intl;
          guild(channel[20]).sendBotMessage(channel.id, intl.string(arr(channel[10]).t["+mWyVq"]));
        });
        const promise = (function handler() {
          return _handler3(...arguments);
        })();
      } else {
        let intl = _require(channel[10]).intl;
        guild(channel[20]).sendBotMessage(channel.id, intl.string(_require(channel[10]).t.F5pqSf));
        let obj = guild(channel[20]);
      }
      obj2 = _require(channel[25]);
    }
  }
};
items[sum9] = obj25;
const sum10 = sum9 + 1;
const obj29 = { id: "-14", untranslatedName: "msg", displayName: "msg", type: require("PermissionOverwriteType").ApplicationCommandType.CHAT, inputType: require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj29, "untranslatedDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.Dg8XZw);
  },
  set: undefined
});
Object.defineProperty(obj29, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.Dg8XZw);
  },
  set: undefined
});
const obj30 = { name: "user", displayName: "user", type: require("PermissionOverwriteType").ApplicationCommandOptionType.USER };
Object.defineProperty(obj30, "description", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["KmVq/D"]);
  },
  set: undefined
});
Object.defineProperty(obj30, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["KmVq/D"]);
  },
  set: undefined
});
obj30.required = true;
const items12 = [obj30, ];
const obj31 = { name: "message", displayName: "message", type: require("PermissionOverwriteType").ApplicationCommandOptionType.STRING };
Object.defineProperty(obj31, "description", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.oGUuOJ);
  },
  set: undefined
});
Object.defineProperty(obj31, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.oGUuOJ);
  },
  set: undefined
});
obj31.required = true;
Object.defineProperty(obj31, "maxLength", { get: () => require(8021) /* getMaxMessageLength_ */.getMaxMessageLength(), set: undefined });
items12[1] = obj31;
obj29.options = items12;
obj29.execute = function execute(arr, channel) {
  channel = channel.channel;
  let closure_1;
  let str3;
  async function _handler4(arg0) {
    let obj = callback(str3[27]);
    obj = { recipientIds: outer2_1 };
    yield obj.openPrivateChannel(obj).then((channelId) => {
      const channel = outer4_4.getChannel(channelId);
      callback(str3[28])(null != channel, "Newly created PrivateChannel is null");
      let obj = callback(str3[20]);
      obj = { location: outer4_12.PRIVATE_MESSAGE_COMMAND };
      obj.sendMessage(channel.id, callback(str3[21]).parse(channel, outer3_2), true, obj);
    });
  }
  if (null != channel) {
    closure_1 = getOptionValue(arr, "user");
    const tmp2 = getOptionValue(arr, "message");
    str3 = "";
    if (null != tmp2) {
      str3 = tmp2;
    }
    (function handler() {
      return _handler4(...arguments);
    })().catch(() => {
      const intl = channel(str3[10]).intl;
      callback(str3[20]).sendBotMessage(channel.id, intl.string(channel(str3[10]).t["3XaE95"]));
    });
    const promise = (function handler() {
      return _handler4(...arguments);
    })();
  }
};
items[sum10] = obj29;
const obj32 = { id: "-18", untranslatedName: "roll-dice", displayName: "roll-dice", type: require("PermissionOverwriteType").ApplicationCommandType.CHAT, inputType: require("ApplicationCommandSectionType").ApplicationCommandInputType.BUILT_IN, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj32, "untranslatedDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.reVgOh);
  },
  set: undefined
});
Object.defineProperty(obj32, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.reVgOh);
  },
  set: undefined
});
const obj33 = { name: "count", displayName: "count", type: require("PermissionOverwriteType").ApplicationCommandOptionType.INTEGER };
Object.defineProperty(obj33, "description", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.iSbJTZ, { max: MAX_DICE_COUNT });
  },
  set: undefined
});
Object.defineProperty(obj33, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.iSbJTZ, { max: MAX_DICE_COUNT });
  },
  set: undefined
});
obj33.minValue = 1;
obj33.maxValue = MAX_DICE_COUNT;
const items13 = [obj33, ];
const obj34 = { name: "size", displayName: "size", type: require("PermissionOverwriteType").ApplicationCommandOptionType.INTEGER };
Object.defineProperty(obj34, "description", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.pV214H);
  },
  set: undefined
});
Object.defineProperty(obj34, "displayDescription", {
  get: () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.pV214H);
  },
  set: undefined
});
obj34.choices = ALLOWED_DICE_SIDES.map((value) => ({ name: "D" + value, displayName: "D" + value, value }));
items13[1] = obj34;
obj32.options = items13;
obj32.execute = function execute(arr, channel) {
  channel = channel.channel;
  if (null != channel) {
    const tmp10 = getOptionValue(arr, "count");
    let num = 1;
    if (null != tmp10) {
      num = tmp10;
    }
    const tmp3 = getOptionValue(arr, "size");
    let num2 = 6;
    if (null != tmp3) {
      num2 = tmp3;
    }
    const NumberResult = Number(num);
    const NumberResult1 = Number(num2);
    require(5627) /* startDiceRoll */.startDiceRoll(channel.id, NumberResult, NumberResult1);
    const obj = require(5627) /* startDiceRoll */;
  }
};
items[sum10 + 1] = obj32;
const found = items.filter((untranslatedName) => {
  const items = ["gif", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"];
  return items.includes(untranslatedName.untranslatedName);
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/application_commands/ApplicationCommandBuiltIns.tsx");

export const PLATFORM_COMMANDS = require("get untranslatedDescription").default;
export const BUILT_IN_SECTIONS = obj;
export const BUILT_IN_COMMANDS = items;
export const BUILT_IN_COMMANDS_ORIGINAL = found;
export const getBuiltInCommands = function getBuiltInCommands(commandTypes, arg1, arg2) {
  let closure_0 = commandTypes;
  const importDefault = arg2;
  enabled = importDefault(enabled[30]).getConfig({ location: "getBuiltInCommands" }).enabled;
  return arg1 ? items : found.filter((type) => {
    let hasItem = commandTypes.includes(type.type);
    if (hasItem) {
      let tmp3 = !closure_1;
      if (!tmp3) {
        tmp3 = type.inputType === commandTypes(enabled[9]).ApplicationCommandInputType.BUILT_IN_TEXT;
      }
      if (!tmp3) {
        tmp3 = type.inputType === commandTypes(enabled[9]).ApplicationCommandInputType.BUILT_IN_INTEGRATION;
      }
      hasItem = tmp3;
    }
    if (hasItem) {
      let tmp8 = enabled;
      if (!enabled) {
        tmp8 = "roll-dice" !== type.untranslatedName;
      }
      hasItem = tmp8;
    }
    return hasItem;
  });
};
