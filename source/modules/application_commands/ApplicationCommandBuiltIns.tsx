// Module ID: 7923
// Function ID: 63149
// Name: getOptionValue
// Dependencies: []
// Exports: getBuiltInCommands

// Module 7923 (getOptionValue)
let ALLOWED_DICE_SIDES;
let DISPLAY_NAME_MAX_LENGTH;
let MAX_CHANNEL_NAME_LENGTH;
let MAX_DICE_COUNT;
function getOptionValue(arr, message) {
  const iter = arr.find((name) => name.name === arg1);
  let value;
  if (null != iter) {
    value = iter.value;
  }
  return value;
}
const importDefaultResult = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const BuiltInSectionId = arg1(dependencyMap[4]).BuiltInSectionId;
const tmp3 = arg1(dependencyMap[5]);
({ Permissions: closure_7, MARKDOWN_SPOILER_WRAPPER: closure_8, ME: closure_9 } = tmp3);
({ DISPLAY_NAME_MAX_LENGTH, MAX_CHANNEL_NAME_LENGTH } = tmp3);
({ ALLOWED_DICE_SIDES, MAX_DICE_COUNT } = arg1(dependencyMap[6]));
let closure_11 = arg1(dependencyMap[7]).getDisableCommunicationDurationOptions;
const MessageSendLocation = arg1(dependencyMap[8]).MessageSendLocation;
let obj = {};
obj = { id: BuiltInSectionId.BUILT_IN, type: arg1(dependencyMap[9]).ApplicationCommandSectionType.BUILT_IN };
Object.defineProperty(obj, "name", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.fI5MTa);
  },
  set: undefined
});
obj[BuiltInSectionId.BUILT_IN] = obj;
obj = { id: BuiltInSectionId.FRECENCY, type: arg1(dependencyMap[9]).ApplicationCommandSectionType.BUILT_IN };
Object.defineProperty(obj, "name", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.+cGVV6);
  },
  set: undefined
});
obj[BuiltInSectionId.FRECENCY] = obj;
const items = [...arg1(dependencyMap[11]).default];
const obj1 = { type: arg1(dependencyMap[12]).ApplicationCommandType.CHAT, inputType: arg1(dependencyMap[9]).ApplicationCommandInputType.BUILT_IN_TEXT, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj1, "untranslatedDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.j5xUSW);
  },
  set: undefined
});
Object.defineProperty(obj1, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.j5xUSW);
  },
  set: undefined
});
const obj2 = { type: arg1(dependencyMap[12]).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj2, "description", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.JewOrS);
  },
  set: undefined
});
Object.defineProperty(obj2, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.JewOrS);
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
const obj3 = { type: arg1(dependencyMap[12]).ApplicationCommandType.CHAT, inputType: arg1(dependencyMap[9]).ApplicationCommandInputType.BUILT_IN_TEXT, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj3, "untranslatedDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.nrQRce);
  },
  set: undefined
});
Object.defineProperty(obj3, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.nrQRce);
  },
  set: undefined
});
const obj4 = { type: arg1(dependencyMap[12]).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj4, "description", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.EI80tw);
  },
  set: undefined
});
Object.defineProperty(obj4, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.EI80tw);
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
const obj5 = { type: arg1(dependencyMap[12]).ApplicationCommandType.CHAT, inputType: arg1(dependencyMap[9]).ApplicationCommandInputType.BUILT_IN_TEXT, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj5, "untranslatedDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.pnnn8e);
  },
  set: undefined
});
Object.defineProperty(obj5, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.pnnn8e);
  },
  set: undefined
});
const obj6 = { type: arg1(dependencyMap[12]).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj6, "description", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.ETs6go);
  },
  set: undefined
});
Object.defineProperty(obj6, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.ETs6go);
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
const obj7 = { lineHeight: false, flex: false, alignSelf: false, type: arg1(dependencyMap[12]).ApplicationCommandType.CHAT, inputType: arg1(dependencyMap[9]).ApplicationCommandInputType.BUILT_IN_TEXT, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj7, "untranslatedDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.jZcIid);
  },
  set: undefined
});
Object.defineProperty(obj7, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.jZcIid);
  },
  set: undefined
});
const obj8 = { type: arg1(dependencyMap[12]).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj8, "description", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.k+sw9g);
  },
  set: undefined
});
Object.defineProperty(obj8, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.k+sw9g);
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
    const EnableTTSCommand = arg1(dependencyMap[13]).EnableTTSCommand;
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
const obj9 = { lineHeight: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005226104704568478, flex: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011082505471144278, alignSelf: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000031315130858456104, type: arg1(dependencyMap[12]).ApplicationCommandType.CHAT, inputType: arg1(dependencyMap[9]).ApplicationCommandInputType.BUILT_IN_TEXT, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj9, "untranslatedDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.UGO8fU);
  },
  set: undefined
});
Object.defineProperty(obj9, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.UGO8fU);
  },
  set: undefined
});
const obj10 = { type: arg1(dependencyMap[12]).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj10, "description", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.RWTgNd);
  },
  set: undefined
});
Object.defineProperty(obj10, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.RWTgNd);
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
const obj11 = { lineHeight: true, flex: "/assets/images/native/premium/upsell", alignSelf: 49, type: arg1(dependencyMap[12]).ApplicationCommandType.CHAT, inputType: arg1(dependencyMap[9]).ApplicationCommandInputType.BUILT_IN_TEXT, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj11, "untranslatedDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.v0eDdV);
  },
  set: undefined
});
Object.defineProperty(obj11, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.v0eDdV);
  },
  set: undefined
});
const obj12 = { type: arg1(dependencyMap[12]).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj12, "description", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.D13pbc);
  },
  set: undefined
});
Object.defineProperty(obj12, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.D13pbc);
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
const obj13 = { type: arg1(dependencyMap[12]).ApplicationCommandType.CHAT, inputType: arg1(dependencyMap[9]).ApplicationCommandInputType.BUILT_IN, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj13, "untranslatedDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.jiHfS/);
  },
  set: undefined
});
Object.defineProperty(obj13, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.jiHfS/);
  },
  set: undefined
});
const obj14 = { "Bool(false)": null, "Bool(false)": "6922badb2f007833b3becc6f00bcb5a4", type: arg1(dependencyMap[12]).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj14, "description", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.WTSzVu);
  },
  set: undefined
});
Object.defineProperty(obj14, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.WTSzVu);
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
      const obj = importDefault(dependencyMap[14]);
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
const obj15 = { type: arg1(dependencyMap[12]).ApplicationCommandType.CHAT, inputType: arg1(dependencyMap[9]).ApplicationCommandInputType.BUILT_IN, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj15, "untranslatedDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.t6ZAS0);
  },
  set: undefined
});
Object.defineProperty(obj15, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.t6ZAS0);
  },
  set: undefined
});
const obj16 = { type: arg1(dependencyMap[12]).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj16, "description", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.TffOfY);
  },
  set: undefined
});
Object.defineProperty(obj16, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.TffOfY);
  },
  set: undefined
});
obj16.required = true;
obj16.maxLength = MAX_CHANNEL_NAME_LENGTH;
const items8 = [obj16, ];
const obj17 = { type: arg1(dependencyMap[12]).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj17, "description", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.QXfSfU);
  },
  set: undefined
});
Object.defineProperty(obj17, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.QXfSfU);
  },
  set: undefined
});
Object.defineProperty(obj17, "maxLength", { get: () => arg1(dependencyMap[15]).getMaxMessageLength(), set: undefined });
obj17.required = true;
items8[1] = obj17;
obj15.options = items8;
obj15.predicate = function predicate(channel) {
  channel = channel.channel;
  let canStartPublicThread = null != channel;
  if (canStartPublicThread) {
    canStartPublicThread = arg1(dependencyMap[16]).computeCanStartPublicThread(channel);
    const obj = arg1(dependencyMap[16]);
  }
  return canStartPublicThread;
};
let closure_13 = importDefaultResult(async (arg0, arg1) => {
  const fn = function*(arg0, channel) {
    channel = channel.channel;
    yield undefined;
    const tmp2 = callback3(arg0, "name");
    let str = "";
    let str2 = "";
    if (null != tmp2) {
      str2 = tmp2;
    }
    const tmp3 = callback3(arg0, "message");
    if (null != tmp3) {
      str = tmp3;
    }
    let obj = callback(closure_2[17]);
    const tmp4 = yield obj.createThread(channel, str2, closure_0(closure_2[18]).ChannelTypes.PUBLIC_THREAD, callback(closure_2[19]).getAutoArchiveDuration(channel, null), "Slash Command");
    const obj2 = callback(closure_2[19]);
    const obj3 = callback2(closure_2[20]);
    obj = { location: constants.THREAD_CREATION };
    obj3.sendMessage(tmp4.id, callback2(closure_2[21]).parse(tmp4, str), true, obj);
  };
  fn.next();
  return fn;
});
obj15.execute = function() {
  return callback3(...arguments);
};
items[sum6] = obj15;
const sum7 = sum6 + 1;
const obj18 = { type: arg1(dependencyMap[12]).ApplicationCommandType.CHAT, inputType: arg1(dependencyMap[9]).ApplicationCommandInputType.BUILT_IN, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj18, "untranslatedDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.03N0UL);
  },
  set: undefined
});
Object.defineProperty(obj18, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.03N0UL);
  },
  set: undefined
});
const obj19 = { "Bool(false)": "/assets/modules/premium/roadblocks/images", "Bool(false)": 552, type: arg1(dependencyMap[12]).ApplicationCommandOptionType.USER };
Object.defineProperty(obj19, "description", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.gF8IpD);
  },
  set: undefined
});
Object.defineProperty(obj19, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.gF8IpD);
  },
  set: undefined
});
obj19.required = true;
const items9 = [obj19, ];
const obj20 = { type: arg1(dependencyMap[12]).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj20, "description", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.QWldgj);
  },
  set: undefined
});
Object.defineProperty(obj20, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.QWldgj);
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
  guild = arr;
  guild = guild.guild;
  const importDefault = guild;
  const channel = guild.channel;
  const dependencyMap = channel;
  async function _handler() {
    if (null != callback2) {
      if (null != id) {
        const user = user.getUser(closure_3);
        if (null == user) {
          const _Error = Error;
          const error = new Error();
          throw error;
        } else {
          const tmp22 = callback3(callback, "reason");
          let str = "";
          if (null != tmp22) {
            str = tmp22;
          }
          yield callback2(id[22]).kickUser(closure_1.id, closure_3, str);
          let obj = callback2(id[20]);
          const intl = callback(id[10]).intl;
          obj = {};
          const obj4 = callback2(id[22]);
          const tmp19 = closure_3;
          obj.user = callback2(id[23]).getUserTag(user);
          obj.sendBotMessage(id.id, intl.formatToPlainString(callback(id[10]).t.9wzHDV, obj));
          const obj3 = callback2(id[23]);
        }
      }
    }
  }
  if (null != guild) {
    if (null != channel) {
      const tmp9 = getOptionValue(arr, "user");
      let str = "";
      if (null != tmp9) {
        str = tmp9;
      }
      if (closure_5.canManageUser(constants.KICK_MEMBERS, str, guild)) {
        function handler() {
          return _handler(...arguments);
        }().catch(() => {
          const intl = arg0(channel[10]).intl;
          guild(channel[20]).sendBotMessage(channel.id, intl.string(arg0(channel[10]).t.l0gNlp));
        });
        const promise = function handler() {
          return _handler(...arguments);
        }();
      } else {
        const intl = guild(dependencyMap[10]).intl;
        importDefault(dependencyMap[20]).sendBotMessage(channel.id, intl.string(guild(dependencyMap[10]).t.6RIwPI));
        const obj = importDefault(dependencyMap[20]);
      }
    }
  }
};
items[sum7] = obj18;
const sum8 = sum7 + 1;
const obj21 = { type: arg1(dependencyMap[12]).ApplicationCommandType.CHAT, inputType: arg1(dependencyMap[9]).ApplicationCommandInputType.BUILT_IN, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj21, "untranslatedDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.HWuskv);
  },
  set: undefined
});
Object.defineProperty(obj21, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.HWuskv);
  },
  set: undefined
});
const obj22 = { "Bool(false)": "/assets/modules/premium/roadblocks/images", "Bool(false)": 552, type: arg1(dependencyMap[12]).ApplicationCommandOptionType.USER };
Object.defineProperty(obj22, "description", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.z3XPjr);
  },
  set: undefined
});
Object.defineProperty(obj22, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.z3XPjr);
  },
  set: undefined
});
obj22.required = true;
const items10 = [obj22, , ];
const obj23 = { "Bool(false)": "<string:3084210432>", "Bool(false)": "<string:1410482449>", type: arg1(dependencyMap[12]).ApplicationCommandOptionType.INTEGER };
Object.defineProperty(obj23, "description", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.smrvA6);
  },
  set: undefined
});
Object.defineProperty(obj23, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.smrvA6);
  },
  set: undefined
});
obj23.required = true;
Object.defineProperty(obj23, "choices", {
  get: () => {
    let obj = {};
    const intl = arg1(dependencyMap[10]).intl;
    obj.name = intl.string(arg1(dependencyMap[10]).t.4obaMS);
    const intl2 = arg1(dependencyMap[10]).intl;
    obj.displayName = intl2.string(arg1(dependencyMap[10]).t.4obaMS);
    obj.value = 0;
    const items = [obj, , , , , , ];
    obj = {};
    const intl3 = arg1(dependencyMap[10]).intl;
    obj.name = intl3.string(arg1(dependencyMap[10]).t.RKpitY);
    const intl4 = arg1(dependencyMap[10]).intl;
    obj.displayName = intl4.string(arg1(dependencyMap[10]).t.RKpitY);
    obj.value = importDefault(dependencyMap[24]).Seconds.HOUR;
    items[1] = obj;
    obj = {};
    const intl5 = arg1(dependencyMap[10]).intl;
    obj.name = intl5.string(arg1(dependencyMap[10]).t.8WfJZ8);
    const intl6 = arg1(dependencyMap[10]).intl;
    obj.displayName = intl6.string(arg1(dependencyMap[10]).t.8WfJZ8);
    obj.value = 6 * importDefault(dependencyMap[24]).Seconds.HOUR;
    items[2] = obj;
    const obj1 = {};
    const intl7 = arg1(dependencyMap[10]).intl;
    obj1.name = intl7.string(arg1(dependencyMap[10]).t.p1up7u);
    const intl8 = arg1(dependencyMap[10]).intl;
    obj1.displayName = intl8.string(arg1(dependencyMap[10]).t.p1up7u);
    obj1.value = 12 * importDefault(dependencyMap[24]).Seconds.HOUR;
    items[3] = obj1;
    const obj2 = {};
    const intl9 = arg1(dependencyMap[10]).intl;
    obj2.name = intl9.string(arg1(dependencyMap[10]).t.XuVkkD);
    const intl10 = arg1(dependencyMap[10]).intl;
    obj2.displayName = intl10.string(arg1(dependencyMap[10]).t.XuVkkD);
    obj2.value = importDefault(dependencyMap[24]).Seconds.DAY;
    items[4] = obj2;
    const obj3 = {};
    const intl11 = arg1(dependencyMap[10]).intl;
    obj3.name = intl11.string(arg1(dependencyMap[10]).t.gMcDS+);
    const intl12 = arg1(dependencyMap[10]).intl;
    obj3.displayName = intl12.string(arg1(dependencyMap[10]).t.gMcDS+);
    obj3.value = 3 * importDefault(dependencyMap[24]).Seconds.DAY;
    items[5] = obj3;
    const obj4 = {};
    const intl13 = arg1(dependencyMap[10]).intl;
    obj4.name = intl13.string(arg1(dependencyMap[10]).t.FA7IUk);
    const intl14 = arg1(dependencyMap[10]).intl;
    obj4.displayName = intl14.string(arg1(dependencyMap[10]).t.FA7IUk);
    obj4.value = 7 * importDefault(dependencyMap[24]).Seconds.DAY;
    items[6] = obj4;
    return items;
  },
  set: undefined
});
items10[1] = obj23;
const obj24 = { type: arg1(dependencyMap[12]).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj24, "description", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.dG4noU);
  },
  set: undefined
});
Object.defineProperty(obj24, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.dG4noU);
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
  guild = arr;
  guild = guild.guild;
  const importDefault = guild;
  const channel = guild.channel;
  const dependencyMap = channel;
  async function _handler2() {
    if (null != callback2) {
      if (null != id) {
        let str2 = "";
        if ("" === closure_3) {
          const _Error = Error;
          const error = new Error();
          throw error;
        } else {
          const tmp31 = callback3(callback, "delete_messages");
          let num = 0;
          if (null != tmp31) {
            num = tmp31;
          }
          const tmp3 = callback3(callback, "reason");
          if (null != tmp3) {
            str2 = tmp3;
          }
          const user = user.getUser(closure_3);
          let sendBotMessageResult = callback2(id[22]);
          yield sendBotMessageResult.banUser(closure_1.id, closure_3, num, str2);
          const intl = callback(id[10]).intl;
          sendBotMessageResult = {};
          if (null != user) {
            let userTag = callback2(id[23]).getUserTag(user);
            const obj4 = callback2(id[23]);
          } else {
            userTag = closure_3;
          }
          sendBotMessageResult.user = userTag;
          sendBotMessageResult = callback2(id[20]).sendBotMessage(id.id, intl.formatToPlainString(callback(id[10]).t.YflWdM, sendBotMessageResult));
          const obj2 = callback2(id[20]);
        }
      }
    }
  }
  if (null != guild) {
    if (null != channel) {
      const tmp9 = getOptionValue(arr, "user");
      let str = "";
      if (null != tmp9) {
        str = tmp9;
      }
      if (closure_5.canManageUser(constants.BAN_MEMBERS, str, guild)) {
        function handler() {
          return _handler2(...arguments);
        }().catch(() => {
          const intl = arg0(channel[10]).intl;
          guild(channel[20]).sendBotMessage(channel.id, intl.string(arg0(channel[10]).t.w2J6Qs));
        });
        const promise = function handler() {
          return _handler2(...arguments);
        }();
      } else {
        const intl = guild(dependencyMap[10]).intl;
        importDefault(dependencyMap[20]).sendBotMessage(channel.id, intl.string(guild(dependencyMap[10]).t.R27LJl));
        const obj = importDefault(dependencyMap[20]);
      }
    }
  }
};
items[sum8] = obj21;
const sum9 = sum8 + 1;
const obj25 = { lineHeight: "<string:16777506>", flex: "<string:1345667345>", alignSelf: "<string:1124139010>", type: arg1(dependencyMap[12]).ApplicationCommandType.CHAT, inputType: arg1(dependencyMap[9]).ApplicationCommandInputType.BUILT_IN, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj25, "untranslatedDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.KkPcep);
  },
  set: undefined
});
Object.defineProperty(obj25, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.KkPcep);
  },
  set: undefined
});
const obj26 = { "Bool(false)": "/assets/modules/premium/roadblocks/images", "Bool(false)": 552, type: arg1(dependencyMap[12]).ApplicationCommandOptionType.USER };
Object.defineProperty(obj26, "description", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.UU3VRm);
  },
  set: undefined
});
Object.defineProperty(obj26, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.UU3VRm);
  },
  set: undefined
});
obj26.required = true;
const items11 = [obj26, , ];
const obj27 = { "Bool(false)": "Array", "Bool(false)": "merman", type: arg1(dependencyMap[12]).ApplicationCommandOptionType.INTEGER };
Object.defineProperty(obj27, "description", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.SNqN1e);
  },
  set: undefined
});
Object.defineProperty(obj27, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.SNqN1e);
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
const obj28 = { type: arg1(dependencyMap[12]).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj28, "description", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.akHScA);
  },
  set: undefined
});
Object.defineProperty(obj28, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.akHScA);
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
  guild = arr;
  guild = guild.guild;
  const importDefault = guild;
  const channel = guild.channel;
  const dependencyMap = channel;
  async function _handler3() {
    if (null != lib) {
      if (null != id) {
        const tmp20 = callback2(callback, "duration");
        let str3 = "";
        let str = "";
        if (null != tmp20) {
          str = tmp20;
        }
        const tmp3 = callback2(callback, "reason");
        if (null != tmp3) {
          str3 = tmp3;
        }
        const user = user.getUser(closure_3);
        if (null == user) {
          const _Error = Error;
          const error = new Error();
          throw error;
        } else {
          let obj = { guildId: lib.id, userId: closure_3 };
          const obj4 = lib(id[22]);
          const obj6 = lib(id[26])();
          obj.communicationDisabledUntilTimestamp = lib(id[26])().add(str, "s").toISOString();
          obj.duration = str;
          obj.reason = str3;
          yield obj4.setCommunicationDisabledUntil(obj);
          obj = lib(id[20]);
          const intl = callback(id[10]).intl;
          obj = {};
          const addResult = lib(id[26])().add(str, "s");
          obj.user = lib(id[23]).getUserTag(user);
          obj.duration = str;
          obj.sendBotMessage(id.id, intl.formatToPlainString(callback(id[10]).t.BbRV6o, obj));
          const obj3 = lib(id[23]);
        }
      }
    }
  }
  if (null != guild) {
    if (null != channel) {
      const tmp7 = getOptionValue(arr, "user");
      if (obj2.canToggleCommunicationDisableOnUser(guild.id, tmp7)) {
        function handler() {
          return _handler3(...arguments);
        }().catch(() => {
          const intl = arg0(channel[10]).intl;
          guild(channel[20]).sendBotMessage(channel.id, intl.string(arg0(channel[10]).t.+mWyVq));
        });
        const promise = function handler() {
          return _handler3(...arguments);
        }();
      } else {
        const intl = guild(dependencyMap[10]).intl;
        importDefault(dependencyMap[20]).sendBotMessage(channel.id, intl.string(guild(dependencyMap[10]).t.F5pqSf));
        const obj = importDefault(dependencyMap[20]);
      }
      const obj2 = guild(dependencyMap[25]);
    }
  }
};
items[sum9] = obj25;
const sum10 = sum9 + 1;
const obj29 = { lineHeight: 488, flex: 240, alignSelf: null, type: arg1(dependencyMap[12]).ApplicationCommandType.CHAT, inputType: arg1(dependencyMap[9]).ApplicationCommandInputType.BUILT_IN, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj29, "untranslatedDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.Dg8XZw);
  },
  set: undefined
});
Object.defineProperty(obj29, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.Dg8XZw);
  },
  set: undefined
});
const obj30 = { "Bool(false)": "/assets/modules/premium/roadblocks/images", "Bool(false)": 552, type: arg1(dependencyMap[12]).ApplicationCommandOptionType.USER };
Object.defineProperty(obj30, "description", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.KmVq/D);
  },
  set: undefined
});
Object.defineProperty(obj30, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.KmVq/D);
  },
  set: undefined
});
obj30.required = true;
const items12 = [obj30, ];
const obj31 = { type: arg1(dependencyMap[12]).ApplicationCommandOptionType.STRING };
Object.defineProperty(obj31, "description", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.oGUuOJ);
  },
  set: undefined
});
Object.defineProperty(obj31, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.oGUuOJ);
  },
  set: undefined
});
obj31.required = true;
Object.defineProperty(obj31, "maxLength", { get: () => arg1(dependencyMap[15]).getMaxMessageLength(), set: undefined });
items12[1] = obj31;
obj29.options = items12;
obj29.execute = function execute(arr, channel) {
  channel = channel.channel;
  let closure_1;
  let dependencyMap;
  async function _handler4(arg0) {
    let obj = callback(closure_2[27]);
    obj = { recipientIds: callback };
    yield obj.openPrivateChannel(obj).then((channelId) => {
      const channel = channel.getChannel(channelId);
      callback(closure_2[28])(null != channel, "Newly created PrivateChannel is null");
      let obj = callback(closure_2[20]);
      obj = { location: constants.PRIVATE_MESSAGE_COMMAND };
      obj.sendMessage(channel.id, callback(closure_2[21]).parse(channel, closure_2), true, obj);
    });
  }
  if (null != channel) {
    closure_1 = getOptionValue(arr, "user");
    const tmp2 = getOptionValue(arr, "message");
    let str3 = "";
    if (null != tmp2) {
      str3 = tmp2;
    }
    dependencyMap = str3;
    function handler() {
      return _handler4(...arguments);
    }().catch(() => {
      const intl = channel(str3[10]).intl;
      callback(str3[20]).sendBotMessage(channel.id, intl.string(channel(str3[10]).t.3XaE95));
    });
    const promise = function handler() {
      return _handler4(...arguments);
    }();
  }
};
items[sum10] = obj29;
const obj32 = { lineHeight: "1653812d24f945a581bfdacd052d1cd9", flex: "app_icons_upsell", alignSelf: "png", type: arg1(dependencyMap[12]).ApplicationCommandType.CHAT, inputType: arg1(dependencyMap[9]).ApplicationCommandInputType.BUILT_IN, applicationId: BuiltInSectionId.BUILT_IN };
Object.defineProperty(obj32, "untranslatedDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.reVgOh);
  },
  set: undefined
});
Object.defineProperty(obj32, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.reVgOh);
  },
  set: undefined
});
const obj33 = { type: arg1(dependencyMap[12]).ApplicationCommandOptionType.INTEGER };
Object.defineProperty(obj33, "description", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.formatToPlainString(arg1(dependencyMap[10]).t.iSbJTZ, { max: MAX_DICE_COUNT });
  },
  set: undefined
});
Object.defineProperty(obj33, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.formatToPlainString(arg1(dependencyMap[10]).t.iSbJTZ, { max: MAX_DICE_COUNT });
  },
  set: undefined
});
obj33.minValue = 1;
obj33.maxValue = MAX_DICE_COUNT;
const items13 = [obj33, ];
const obj34 = { "Bool(false)": "/assets/modules/saved_messages", "Bool(false)": 297, type: arg1(dependencyMap[12]).ApplicationCommandOptionType.INTEGER };
Object.defineProperty(obj34, "description", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.pV214H);
  },
  set: undefined
});
Object.defineProperty(obj34, "displayDescription", {
  get: () => {
    const intl = arg1(dependencyMap[10]).intl;
    return intl.string(arg1(dependencyMap[10]).t.pV214H);
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
    channel(dependencyMap[29]).startDiceRoll(channel.id, NumberResult, NumberResult1);
    const obj = channel(dependencyMap[29]);
  }
};
items[sum10 + 1] = obj32;
const found = items.filter((untranslatedName) => {
  const items = [false, false, false, false, false, false, false, false, false];
  return items.includes(untranslatedName.untranslatedName);
});
const tmp4 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/application_commands/ApplicationCommandBuiltIns.tsx");

export const PLATFORM_COMMANDS = arg1(dependencyMap[11]).default;
export const BUILT_IN_SECTIONS = obj;
export const BUILT_IN_COMMANDS = items;
export const BUILT_IN_COMMANDS_ORIGINAL = found;
export const getBuiltInCommands = function getBuiltInCommands(commandTypes, arg1, arg2) {
  arg1 = commandTypes;
  const importDefault = arg2;
  const dependencyMap = importDefault(dependencyMap[30]).getConfig({ location: "getBuiltInCommands" }).enabled;
  return arg1 ? items : found.filter((type) => {
    let hasItem = type.includes(type.type);
    if (hasItem) {
      let tmp3 = !arg2;
      if (!tmp3) {
        tmp3 = type.inputType === type(enabled[9]).ApplicationCommandInputType.BUILT_IN_TEXT;
      }
      if (!tmp3) {
        tmp3 = type.inputType === type(enabled[9]).ApplicationCommandInputType.BUILT_IN_INTEGRATION;
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
