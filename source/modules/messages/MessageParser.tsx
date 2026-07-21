// Module ID: 6918
// Function ID: 55141
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 6918 (_createForOfIteratorHelperLoose)
let MARKDOWN_SPOILER_REGEXP;
let MARKDOWN_STATIC_ROUTE_NAME_REGEXP;
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
function matchPrefix(arg0, str, sortBy) {
  str = arg0;
  const importDefault = str;
  const dependencyMap = arg3;
  if (str[0] === arg0) {
    let closure_3 = str.substring(arg0.length);
    const found = sortBy.sortBy((text) => -text.text.length).filter((text) => {
      const formatted = arg1.toLowerCase();
      return 1 === formatted.indexOf(text.text.toLowerCase());
    });
    const sortByResult = sortBy.sortBy((text) => -text.text.length);
    const mapped = found.sortBy((text) => {
      let num = 1;
      if (text.text === closure_3) {
        num = 0;
      }
      return num;
    }).map((text) => {
      const items = [text + text.text, text.id, arg3];
      return items;
    });
    return mapped.first();
  }
}
function matchAndReturnText(codeBlock) {
  const arg1 = codeBlock;
  return {
    order: codeBlock.order,
    match: codeBlock.match,
    parse(content) {
      return { type: content.type, content: content[0] };
    }
  };
}
function matchRegexAndReturnText(MARKDOWN_SPOILER_REGEXP) {
  const obj = {
    match: importDefault(dependencyMap[14]).anyScopeRegex(MARKDOWN_SPOILER_REGEXP),
    parse(content) {
      return { type: "text", content: content[0] };
    }
  };
  return obj;
}
function rebuild(arr) {
  const importDefault = arg2;
  const dependencyMap = arg3;
  let closure_3 = "";
  const items = [];
  let closure_4 = items;
  const item = arr.forEach((type) => {
    let done;
    if (null != arg3) {
      if ("customEmoticon" === type.type) {
        tmp2(type.emoji, false);
      }
      if ("emoticon" === type.type) {
        let obj = arg2(arg3[18]);
        const result = obj.translateSurrogatesToInlineEmoji(type.content);
        let match = regex.exec(result);
        if (null !== match) {
          while (true) {
            if (null != match[1]) {
              if ("" !== match[1]) {
                let byId;
                if (tmp.emojiContext) {
                  let emojiContext = tmp.emojiContext;
                  byId = emojiContext.getById(match[1]);
                }
                if (byId) {
                  let tmp12 = type.isShortcut || false;
                  let tmp2Result = tmp2(byId, tmp12);
                }
                let tmp14 = regex;
                match = regex.exec(result);
                if (null === match) {
                  break;
                }
              }
            }
            let tmp9 = arg2;
            let tmp10 = arg3;
            let obj2 = arg2(arg3[18]);
            byId = obj2.getByName(match[2]);
          }
        }
      }
    }
    if ("string" === typeof type.content) {
      type = type.type;
      if ("emoji" === type) {
        obj = { position: length.length, length: type.content.length, id: type.id };
        items.push(obj);
        let length = length + type.content;
      } else {
        if ("codeBlock" !== type) {
          if ("inlineCode" !== type) {
            if ("mention" !== type) {
              if ("roleMention" !== type) {
                if ("channel" !== type) {
                  length = length + arg2(type.content);
                }
              }
            }
          }
        }
        if (true === arg1.isNotification) {
          length = length + arg1(arg3[25]).isolate(type.content);
          const obj4 = arg1(arg3[25]);
        } else {
          length = length + type.content;
        }
      }
    } else {
      const _Array = Array;
      if (type.content.constructor === Array) {
        const tmp35 = callback2(type.content, arg1, arg2, arg3);
        const tmp37 = callback(tmp35.emoji);
        let iter2 = tmp37();
        if (!iter2.done) {
          do {
            let value = iter2.value;
            let tmp15 = closure_4;
            obj = {};
            let tmp16 = closure_3;
            obj.position = closure_3.length + value.position;
            obj.length = value.length;
            obj.id = value.id;
            let arr = closure_4.push(obj);
            let iter = tmp37();
            iter2 = iter;
            done = iter.done;
          } while (!done);
        }
        length = length + tmp35.content;
      }
    }
  });
  return { content: closure_3, emoji: items };
}
function parseAndRebuild(content, arg1, arg2) {
  return rebuild(callback(content, arg1), arg1, importDefault(dependencyMap[18]).translateInlineEmojiToSurrogates, arg2).content;
}
function createParserState(getGuildId) {
  let guildId;
  if (null != getGuildId) {
    guildId = getGuildId.getGuildId();
  }
  const arg1 = guildId;
  let guild = null;
  if (null != guildId) {
    guild = store4.getGuild(guildId);
  }
  const importDefault = closure_11.can(Permissions.MENTION_EVERYONE, getGuildId);
  if (null != getGuildId) {
    if (getGuildId.isPrivate()) {
      const recipients = getGuildId.recipients;
      const mapped = recipients.map((userId) => ({ userId, nick: null }));
      const currentUser = authStore.getCurrentUser();
      let mapped4 = mapped;
      if (null != currentUser) {
        let obj = { userId: currentUser.id, nick: null };
        mapped.push(obj);
        mapped4 = mapped;
      }
    }
    const tmp10 = importDefault(dependencyMap[22]);
    const tmp10Result = importDefault(dependencyMap[22])(mapped4.reduce((arr, userId) => {
      userId = userId.userId;
      const user = user.getUser(userId);
      if (null != user) {
        const obj = { id: userId, text: user.tag };
        arr.push(obj);
      }
      return arr;
    }, []));
    if (null != guild) {
      let sortedRoles = store3.getSortedRoles(guild.id);
    } else {
      sortedRoles = [];
    }
    const tmp12 = importDefault(dependencyMap[22]);
    const found = importDefault(dependencyMap[22])(sortedRoles).filter((mentionable) => {
      mentionable = closure_1;
      if (!closure_1) {
        mentionable = mentionable.mentionable;
      }
      return mentionable;
    });
    const mapped1 = found.map((id) => ({ id: id.id, text: id.name }));
    const tmp12Result = importDefault(dependencyMap[22])(sortedRoles);
    const tmp17 = importDefault(dependencyMap[22]);
    const mapped2 = importDefault(dependencyMap[22])(textChannelNameDisambiguations.getTextChannelNameDisambiguations(guildId)).map((id) => ({ id: id.id, text: id.name }));
    if (null != guildId) {
      const tmp21 = importDefault(dependencyMap[22]);
      const found1 = importDefault(dependencyMap[22])(arg1(dependencyMap[26]).COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS).filter((arg0) => arg0 !== closure_7);
      const tmp21Result = importDefault(dependencyMap[22])(arg1(dependencyMap[26]).COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS);
      const flatMapResult = found1.flatMap((arg0) => channels.getChannels(guildId)[arg0].map((channel) => {
        channel = channel.channel;
        if (!channel.isCategory()) {
          const obj = { id: channel.channel.id, text: callback(closure_2[13]).computeChannelName(channel.channel, closure_14, closure_12) };
          let tmp3 = obj;
          const obj2 = callback(closure_2[13]);
        } else {
          tmp3 = null;
        }
        return tmp3;
      }));
      let items = found1.flatMap((arg0) => channels.getChannels(guildId)[arg0].map((channel) => {
        channel = channel.channel;
        if (!channel.isCategory()) {
          const obj = { id: channel.channel.id, text: callback(closure_2[13]).computeChannelName(channel.channel, closure_14, closure_12) };
          let tmp3 = obj;
          const obj2 = callback(closure_2[13]);
        } else {
          tmp3 = null;
        }
        return tmp3;
      })).filter(arg1(dependencyMap[27]).isNotNullish).value();
      const iter = found1.flatMap((arg0) => channels.getChannels(guildId)[arg0].map((channel) => {
        channel = channel.channel;
        if (!channel.isCategory()) {
          const obj = { id: channel.channel.id, text: callback(closure_2[13]).computeChannelName(channel.channel, closure_14, closure_12) };
          let tmp3 = obj;
          const obj2 = callback(closure_2[13]);
        } else {
          tmp3 = null;
        }
        return tmp3;
      })).filter(arg1(dependencyMap[27]).isNotNullish);
    } else {
      items = [];
    }
    const allActiveJoinedThreads = closure_4.computeAllActiveJoinedThreads(guildId);
    const mapped3 = allActiveJoinedThreads.map((id) => {
      const obj = { id: id.id, text: guildId(closure_2[13]).computeChannelName(id, closure_14, closure_12) };
      return obj;
    });
    const disambiguatedEmojiContext = store.getDisambiguatedEmojiContext(guildId);
    const escapedCustomEmoticonNames = disambiguatedEmojiContext.getEscapedCustomEmoticonNames();
    const customEmoji = disambiguatedEmojiContext.getCustomEmoji();
    obj = { inline: true, mentionableRoles: mapped1, guild, users: tmp10Result };
    const customEmoticonRegex = disambiguatedEmojiContext.getCustomEmoticonRegex();
    const combined = mapped2.concat(items);
    obj.channels = combined.concat(mapped3);
    obj.emojiContext = disambiguatedEmojiContext;
    obj.customEmoticonsRegex = customEmoticonRegex;
    obj.customEmoji = customEmoji;
    obj.textExclusions = escapedCustomEmoticonNames;
    obj.isNotification = false;
    return obj;
  }
  if (null != guildId) {
    const members = members.getMembers(guildId);
    mapped4 = members.map((userId) => ({ userId: userId.userId, nick: userId.nick }));
  } else {
    mapped4 = [];
  }
}
function NOOP(arg0) {
  return arg0;
}
function unparseWithMeta(content, id, isNotification) {
  const channel = store2.getChannel(id);
  let guildId = null;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  let guild = null;
  if (null != guildId) {
    guild = store4.getGuild(guildId);
  }
  if (isNotification) {
    let omitResult = obj4;
  } else {
    omitResult = importDefault(dependencyMap[22]).omit(obj4, []);
    const obj2 = importDefault(dependencyMap[22]);
  }
  if (isNotification) {
    let translateSurrogatesToInlineEmoji = NOOP;
  } else {
    translateSurrogatesToInlineEmoji = importDefault(dependencyMap[18]).translateSurrogatesToInlineEmoji;
  }
  const obj = { inline: true, guild, channelId: id, isNotification };
  const obj4 = importDefault(dependencyMap[14]);
  return rebuild(obj4.parserFor(omitResult)(content, obj), obj, translateSurrogatesToInlineEmoji);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = arg1(dependencyMap[3]).GUILD_SELECTABLE_CHANNELS_KEY;
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
let closure_14 = importDefault(dependencyMap[10]);
const tmp2 = arg1(dependencyMap[11]);
const Permissions = tmp2.Permissions;
({ MARKDOWN_SPOILER_REGEXP, MARKDOWN_STATIC_ROUTE_NAME_REGEXP } = tmp2);
const EmojiIntention = arg1(dependencyMap[12]).EmojiIntention;
const tmp3 = /^<@!?(\d+)>/;
const tmp4 = /^<@&(\d+)>/;
const tmp5 = /^<#(\d+)>/;
const tmp6 = /^<a?:(\w+):(\d+)>/;
let closure_17 = /(@everyone|@here|@Clyde)\b/;
let closure_18 = /^[^\s]+@[^\s]+\.[^\s.]+/;
let obj = { link: matchAndReturnText(importDefault(dependencyMap[14]).defaultRules.link), autolink: matchAndReturnText(importDefault(dependencyMap[14]).defaultRules.autolink), url: matchAndReturnText(importDefault(dependencyMap[14]).defaultRules.url), inlineCode: matchAndReturnText(importDefault(dependencyMap[15]).RULES.inlineCode), codeBlock: matchAndReturnText(importDefault(dependencyMap[15]).RULES.codeBlock), rawUserMention: matchRegexAndReturnText(tmp3), rawRoleMention: matchRegexAndReturnText(tmp4), rawChannelMention: matchRegexAndReturnText(tmp5), rawEmoji: matchRegexAndReturnText(tmp6), mention: obj, channel: obj, emoticon: obj1 };
obj = {
  match(arg0, users, str) {
    const parts = str.split(" ");
    if (regex2.test(parts.pop() + arg0)) {
      return null;
    } else {
      const tmp3 = matchPrefix("@", arg0, users.users, "mention");
      if (null != tmp3) {
        return tmp3;
      } else {
        const tmp11 = matchPrefix("@", arg0, users.mentionableRoles, "roleMention");
        if (null != tmp11) {
          return tmp11;
        } else {
          users = users.users;
          const tmp14 = matchPrefix("@", arg0, users.map((text) => {
            const obj = {};
            const merged = Object.assign(text);
            obj["text"] = text.text.split("#")[0];
            return obj;
          }), "mention");
          if (null == tmp14) {
            return null;
          } else {
            const match = regex.exec(arg0);
            if (null != match) {
              if (tmp14[0].length <= match[0].length) {
                return null;
              }
            }
            if ("" === str) {
              const SILENT_RE = users(dependencyMap[16]).SILENT_RE;
              const match1 = SILENT_RE.exec(arg0);
              if (null != match1) {
                if (tmp14[0].length <= match1[0].length) {
                  return null;
                }
              }
            }
            return tmp14;
          }
        }
      }
    }
  },
  parse(arg0) {
    let tmp;
    let tmp3;
    [, tmp, tmp3] = arg0;
    let str = "@";
    if ("roleMention" === tmp3) {
      str = `@&`;
    }
    const obj = { type: tmp2, content: "<" + str + tmp + ">" };
    return obj;
  }
};
obj = {
  match(arg0, channels) {
    const tmp = function matchChannelPrefix(arg0, str, channels) {
      if (str[0] === "#") {
        if ("\"" !== str[1]) {
          return callback2("#", str, channels, "channel");
        } else {
          let num3 = 2;
          let num2 = 2;
          if (2 < str.length) {
            while (true) {
              if ("\\" !== str[num3]) {
                let sum = num3;
                num2 = num3;
                if ("\"" === str[num3]) {
                  break;
                }
              } else {
                sum = num3 + 1;
              }
              num3 = sum + 1;
              num2 = num3;
              if (num3 >= str.length) {
                break;
              }
            }
          }
          const callback = str.substring(0, num2 + 1);
          let closure_1 = callback(closure_2[13]).unescapeChannelName(str.substring(2, num2));
          const obj = callback(closure_2[13]);
          const found = channels.sortBy((text) => -text.text.length).filter((text) => closure_1 === text.text);
          const mapped = found.map((id) => {
            const items = [closure_0, id.id, "channel"];
            return items;
          });
          return mapped.first();
        }
      }
    }("#", arg0, channels.channels);
    let tmp2 = null;
    if (null != tmp) {
      tmp2 = tmp;
    }
    return tmp2;
  },
  parse(arg0) {
    return { type: "text", content: "<#" + arg0[1] + ">" };
  },
  emoji: {
    order: importDefault(dependencyMap[15]).RULES.emoji.order,
    match(arg0) {
      const EMOJI_NAME_RE = importDefault(dependencyMap[18]).EMOJI_NAME_RE;
      return EMOJI_NAME_RE.exec(arg0);
    },
    parse(arg0, arg1, customEmoji) {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      customEmoji = customEmoji.customEmoji;
      const value = customEmoji.get(tmp2);
      let tmp4 = null;
      if (null != value) {
        tmp4 = value;
      }
      if (null != tmp4) {
        let obj = { type: "customEmoticon" };
        let str3 = "";
        if (true === tmp4.animated) {
          str3 = "a";
        }
        let name = tmp4.originalName;
        if (null == name) {
          name = tmp4.name;
        }
        const _HermesInternal = HermesInternal;
        obj.content = "<" + str3 + ":" + name + ":" + tmp4.id + ">";
        obj.emoji = tmp4;
      } else {
        obj = { type: "text", content: tmp };
      }
      return obj;
    }
  },
  customEmoticons: {
    match(arg0, customEmoticonsRegex) {
      customEmoticonsRegex = customEmoticonsRegex.customEmoticonsRegex;
      let match;
      if (null != customEmoticonsRegex) {
        match = customEmoticonsRegex.exec(arg0);
      }
      let tmp3 = null;
      if (null != match) {
        tmp3 = match;
      }
      return tmp3;
    },
    parse(arg0, arg1, emojiContext) {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      emojiContext = emojiContext.emojiContext;
      const emoticonByName = emojiContext.getEmoticonByName(tmp2);
      if (null != emoticonByName) {
        let obj = { type: "customEmoticon" };
        let str3 = "";
        if (true === emoticonByName.animated) {
          str3 = "a";
        }
        const _HermesInternal = HermesInternal;
        obj.content = "<" + str3 + ":" + emoticonByName.name + ":" + emoticonByName.id + ">";
        obj.emoji = emoticonByName;
      } else {
        obj = { type: "text", content: tmp };
      }
      return obj;
    }
  }
};
const obj3 = {};
const merged = Object.assign(importDefault(dependencyMap[19]));
obj3["match"] = function match(arg0, textExclusions) {
  if ("string" === typeof textExclusions.textExclusions) {
    if ("" !== textExclusions.textExclusions) {
      const result = textExclusions(dependencyMap[19]).textMarkupPatternWithExclusions(textExclusions.textExclusions);
      let match = result.exec(arg0);
      const obj = textExclusions(dependencyMap[19]);
    }
    return match;
  }
  match = null;
  if (null != importDefault(dependencyMap[19]).match) {
    match = importDefault(dependencyMap[19]).match(arg0, textExclusions, "");
    const str2 = importDefault(dependencyMap[19]);
  }
};
obj.text = obj3;
const obj4 = { inlineCode: matchAndReturnText(importDefault(dependencyMap[15]).RULES.inlineCode), codeBlock: matchAndReturnText(importDefault(dependencyMap[15]).RULES.codeBlock) };
const obj5 = {};
const obj1 = {
  match(arg0, arg1, arg2) {
    const ConvertEmoticons = arg1(dependencyMap[17]).ConvertEmoticons;
    if (ConvertEmoticons.getSetting()) {
      if (0 !== arg2.length) {
        if (!obj.test(arg2)) {
          return null;
        }
        const obj = /\s$/;
      }
      const EMOJI_SHORTCUT_RE = importDefault(dependencyMap[18]).EMOJI_SHORTCUT_RE;
      const match = EMOJI_SHORTCUT_RE.exec(arg0);
      let tmp7 = null;
      if (null != match) {
        if (match[0].length !== arg0.length) {
          if (" " !== arg0[match[0].length]) {
            tmp7 = null;
          }
        }
        tmp7 = match;
      }
      return tmp7;
    } else {
      return null;
    }
  },
  parse(arg0) {
    const obj = { content: importDefault(dependencyMap[18]).convertShortcutToName(arg0[1]) };
    return obj;
  }
};
const obj2 = {
  order: importDefault(dependencyMap[15]).RULES.emoji.order,
  match(arg0) {
    const EMOJI_NAME_RE = importDefault(dependencyMap[18]).EMOJI_NAME_RE;
    return EMOJI_NAME_RE.exec(arg0);
  },
  parse(arg0, arg1, customEmoji) {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    customEmoji = customEmoji.customEmoji;
    const value = customEmoji.get(tmp2);
    let tmp4 = null;
    if (null != value) {
      tmp4 = value;
    }
    if (null != tmp4) {
      let obj = { type: "customEmoticon" };
      let str3 = "";
      if (true === tmp4.animated) {
        str3 = "a";
      }
      let name = tmp4.originalName;
      if (null == name) {
        name = tmp4.name;
      }
      const _HermesInternal = HermesInternal;
      obj.content = "<" + str3 + ":" + name + ":" + tmp4.id + ">";
      obj.emoji = tmp4;
    } else {
      obj = { type: "text", content: tmp };
    }
    return obj;
  }
};
obj5.match = importDefault(dependencyMap[14]).anyScopeRegex(tmp3);
obj5.parse = function parse(arg0, arg1, channelId) {
  let guild;
  let isNotification;
  ({ isNotification, guild } = channelId);
  let closure_0;
  const user = authStore.getUser(arg0[1]);
  if (null == user) {
    let obj = { content: arg0[0] };
    return obj;
  } else {
    obj = {};
    let str = "always";
    if (isNotification) {
      str = "always";
      if (enabled.enabled) {
        str = "never";
      }
    }
    obj.identifiable = str;
    const str2 = importDefault(dependencyMap[20]).getUserTag(user, obj);
    if (isNotification) {
      let id;
      if (null != guild) {
        id = guild.id;
      }
      let nickname = importDefault(dependencyMap[21]).getNickname(id, channelId.channelId, user);
      if (null == nickname) {
        nickname = importDefault(dependencyMap[20]).getGlobalName(user);
        const obj6 = importDefault(dependencyMap[20]);
      }
      const obj1 = {};
      if (null != nickname) {
        const _HermesInternal6 = HermesInternal;
        let combined = "@" + nickname;
      } else {
        const _HermesInternal5 = HermesInternal;
        combined = "@" + str2;
      }
      obj1.content = combined;
      return obj1;
    } else if (user.bot) {
      const obj2 = {};
      const _HermesInternal4 = HermesInternal;
      obj2.content = "@" + str2;
      return obj2;
    } else {
      let id1;
      if (null != guild) {
        id1 = guild.id;
      }
      let str4 = "";
      if (null != id1) {
        closure_0 = str2.toLowerCase();
        obj = importDefault(dependencyMap[22]);
        let str5 = "";
        if (obj.some(store3.getUnsafeMutableRoles(guild.id), (name) => closure_0.startsWith(name.name.toLowerCase()))) {
          const _HermesInternal = HermesInternal;
          const combined1 = "" + user.discriminator;
          const _HermesInternal2 = HermesInternal;
          str5 = "#" + combined1.padStart(4, "0");
        }
        str4 = str5;
      }
      const obj3 = {};
      const _HermesInternal3 = HermesInternal;
      obj3.content = "@" + str2 + str4;
      return obj3;
    }
    const obj9 = importDefault(dependencyMap[20]);
  }
};
obj4.mention = obj5;
const obj6 = {};
const importDefaultResult = importDefault(dependencyMap[14]);
obj6.match = importDefault(dependencyMap[14]).anyScopeRegex(tmp4);
obj6.parse = function parse(content, arg1, guild) {
  guild = guild.guild;
  if (null != guild) {
    const role = store3.getRole(guild.id, content[1]);
    if (null != role) {
      let obj = {};
      const _HermesInternal = HermesInternal;
      obj.content = "@" + role.name;
      return obj;
    }
  }
  obj = { content: content[0] };
  return obj;
};
obj4.roleMention = obj6;
const obj7 = {};
const importDefaultResult1 = importDefault(dependencyMap[14]);
obj7.match = importDefault(dependencyMap[14]).anyScopeRegex(tmp5);
obj7.parse = function parse(arg0) {
  const channel = store2.getChannel(arg0[1]);
  const obj = {};
  if (null == channel) {
    let first = arg0[0];
  } else {
    const obj2 = arg1(dependencyMap[13]);
    first = obj2.computeChannelName(channel, closure_14, closure_12, true, true);
  }
  obj.content = first;
  return obj;
};
obj4.channel = obj7;
const obj8 = {};
const importDefaultResult2 = importDefault(dependencyMap[14]);
obj8.match = importDefault(dependencyMap[14]).anyScopeRegex(tmp6);
obj8.parse = function parse(arg0, arg1, guild) {
  let name;
  let tmp;
  [, name, tmp] = arg0;
  guild = guild.guild;
  let id = null;
  if (guild) {
    id = guild.id;
  }
  const disambiguatedEmojiContext = store.getDisambiguatedEmojiContext(id);
  const byId = disambiguatedEmojiContext.getById(tmp);
  const obj = {};
  if (null != byId) {
    name = byId.name;
  }
  obj.content = ":" + name + ":";
  obj.id = tmp;
  return obj;
};
obj4.emoji = obj8;
const obj9 = {};
const importDefaultResult3 = importDefault(dependencyMap[14]);
obj9.match = importDefault(dependencyMap[14]).anyScopeRegex(arg1(dependencyMap[23]).soundmojiRawFormatRegex);
obj9.parse = function parse(arg0) {
  let tmp;
  let tmp2;
  [, tmp, tmp2] = arg0;
  return { content: "<sound:" + tmp + ":" + tmp2 + ">" };
};
obj4.soundboard = obj9;
const obj10 = {};
const importDefaultResult4 = importDefault(dependencyMap[14]);
obj10.match = importDefault(dependencyMap[14]).anyScopeRegex(MARKDOWN_SPOILER_REGEXP);
obj10.parse = function parse() {
  const obj = {};
  const intl = arg1(dependencyMap[24]).intl;
  obj.content = "<" + intl.string(arg1(dependencyMap[24]).t.F+x38C).toLowerCase() + ">";
  return obj;
};
obj4.spoiler = obj10;
const obj11 = {};
const importDefaultResult5 = importDefault(dependencyMap[14]);
obj11.match = importDefault(dependencyMap[14]).anyScopeRegex(MARKDOWN_STATIC_ROUTE_NAME_REGEXP);
obj11.parse = function parse(arg0) {
  return { content: "<id:" + arg0[1] + ">" };
};
obj4.staticRouteLink = obj11;
const obj12 = {};
const merged1 = Object.assign(importDefault(dependencyMap[15]).RULES.timestamp);
obj12["parse"] = function parse(arg0) {
  const items = [...arguments];
  const timestamp = importDefault(dependencyMap[15]).RULES.timestamp;
  const items1 = [...items];
  const applyResult = timestamp.parse.apply(items1);
  if ("text" === applyResult.type) {
    let obj = { content: applyResult.content };
  } else {
    obj = { content: applyResult.formatted };
  }
  return obj;
};
obj4.timestamp = obj12;
const merged2 = Object.assign(importDefault(dependencyMap[19]));
obj4.text = {};
const items = [obj, obj4];
const item = items.forEach((arg0) => {
  const arg1 = arg0;
  const keys = Object.keys(arg0);
  const item = keys.forEach((arg0, order) => {
    arg0[arg0].order = order;
  });
});
const importDefaultResult6 = importDefault(dependencyMap[14]);
const obj13 = {};
let closure_20 = importDefault(dependencyMap[14]).parserFor(obj);
let closure_21 = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;
const importDefaultResult7 = importDefault(dependencyMap[14]);
const obj14 = {
  parse(getGuildId, content) {
    let tmp = arg2;
    content = getGuildId;
    let importDefault;
    if (null == tmp) {
      tmp = createParserState(getGuildId);
    }
    const obj = { content, tts: false, invalidEmojis: [], validNonShortcutEmojis: [] };
    importDefault = obj;
    obj.content = parseAndRebuild(obj.content, tmp, (emoji) => {
      let obj = obj(closure_2[28]);
      obj = { emoji, channel: emoji, intention: constants.CHAT };
      if (obj.isEmojiPremiumLocked(obj)) {
        const invalidEmojis = obj.invalidEmojis;
        invalidEmojis.push(emoji);
      } else if (!arg1) {
        const prop = obj.validNonShortcutEmojis;
        prop.push(emoji);
      }
    });
    return obj;
  },
  parsePreprocessor(getGuildId, arg1) {
    return callback(arg1, createParserState(getGuildId));
  },
  unparse(content, id, isNotification) {
    return unparseWithMeta(content, id, isNotification).content;
  },
  unparseWithMeta
};
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/messages/MessageParser.tsx");

export default obj14;
export { parseAndRebuild };
export { createParserState };
