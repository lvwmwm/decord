// Module ID: 6924
// Function ID: 55198
// Name: _createForOfIteratorHelperLoose
// Dependencies: [4991, 5039, 1348, 1907, 1917, 1910, 1838, 3758, 3767, 3970, 1849, 653, 1852, 4320, 3829, 4565, 6925, 3803, 3771, 4572, 3969, 4319, 22, 4577, 1212, 6926, 4974, 1327, 3775, 2]

// Module 6924 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_7 } from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_10 from "_createForOfIteratorHelperLoose";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import ME from "ME";
import { EmojiIntention } from "set";
import merged from "textRegexp";
import importDefaultResult from "t";
import importDefaultResult1 from "t";
import importDefaultResult2 from "t";
import importDefaultResult3 from "t";
import importDefaultResult4 from "t";
import importDefaultResult5 from "t";
import merged2 from "textRegexp";
import importDefaultResult6 from "t";
import importDefaultResult7 from "t";

let MARKDOWN_SPOILER_REGEXP;
let MARKDOWN_STATIC_ROUTE_NAME_REGEXP;
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
function matchPrefix(arg0, str, sortBy) {
  let closure_0 = arg0;
  let closure_1 = str;
  let closure_2 = arg3;
  if (str[0] === arg0) {
    let _isNativeReflectConstruct = str.substring(arg0.length);
    const found = sortBy.sortBy((text) => -text.text.length).filter((text) => {
      const formatted = str.toLowerCase();
      return 1 === formatted.indexOf(text.text.toLowerCase());
    });
    const sortByResult = sortBy.sortBy((text) => -text.text.length);
    const mapped = found.sortBy((text) => {
      let num = 1;
      if (text.text === _isNativeReflectConstruct) {
        num = 0;
      }
      return num;
    }).map((text) => {
      const items = [closure_0 + text.text, text.id, closure_2];
      return items;
    });
    return mapped.first();
  }
}
function matchAndReturnText(codeBlock) {
  let closure_0 = codeBlock;
  return {
    order: codeBlock.order,
    match: codeBlock.match,
    parse(content) {
      return { type: type.type, content: content[0] };
    }
  };
}
function matchRegexAndReturnText(MARKDOWN_SPOILER_REGEXP) {
  const obj = {
    match: importDefault(3829).anyScopeRegex(MARKDOWN_SPOILER_REGEXP),
    parse(content) {
      return { type: "text", content: content[0] };
    }
  };
  return obj;
}
function rebuild(arr) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  let closure_2 = arg3;
  let c3 = "";
  const items = [];
  const item = arr.forEach((type) => {
    let done;
    if (null != dependencyMap) {
      if ("customEmoticon" === type.type) {
        tmp2(type.emoji, false);
      }
      if ("emoticon" === type.type) {
        let obj = callback(3771);
        const result = obj.translateSurrogatesToInlineEmoji(type.content);
        let match = outer1_21.exec(result);
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
                let tmp14 = outer1_21;
                match = outer1_21.exec(result);
                if (null === match) {
                  break;
                }
              }
            }
            let tmp9 = callback;
            let tmp10 = dependencyMap;
            let obj2 = callback(3771);
            byId = obj2.getByName(match[2]);
          }
        }
      }
    }
    if ("string" === typeof type.content) {
      type = type.type;
      if ("emoji" === type) {
        obj = { position: _var.length, length: type.content.length, id: type.id };
        items.push(obj);
        _var = _var + type.content;
      } else {
        if ("codeBlock" !== type) {
          if ("inlineCode" !== type) {
            if ("mention" !== type) {
              if ("roleMention" !== type) {
                if ("channel" !== type) {
                  _var = _var + callback(type.content);
                }
              }
            }
          }
        }
        if (true === lib.isNotification) {
          _var = _var + lib(6926).isolate(type.content);
          const obj4 = lib(6926);
        } else {
          _var = _var + type.content;
        }
      }
    } else {
      const _Array = Array;
      if (type.content.constructor === Array) {
        const tmp35 = outer1_25(type.content, lib, callback, dependencyMap);
        const tmp37 = outer1_22(tmp35.emoji);
        let iter2 = tmp37();
        if (!iter2.done) {
          do {
            let value = iter2.value;
            let tmp15 = items;
            obj = {};
            let tmp16 = var;
            obj.position = var.length + value.position;
            obj.length = value.length;
            obj.id = value.id;
            let arr = items.push(obj);
            let iter = tmp37();
            iter2 = iter;
            done = iter.done;
          } while (!done);
        }
        _var = _var + tmp35.content;
      }
    }
  });
  return { content: c3, emoji: items };
}
function parseAndRebuild(content, arg1, arg2) {
  return rebuild(callback(content, arg1), arg1, importDefault(3771).translateInlineEmojiToSurrogates, arg2).content;
}
function createParserState(getGuildId) {
  let guildId;
  if (null != getGuildId) {
    guildId = getGuildId.getGuildId();
  }
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
    const tmp10 = importDefault(22);
    const tmp10Result = importDefault(22)(mapped4.reduce((arr, userId) => {
      userId = userId.userId;
      const user = outer1_14.getUser(userId);
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
    const tmp12 = importDefault(22);
    const found = importDefault(22)(sortedRoles).filter((mentionable) => {
      mentionable = closure_1;
      if (!closure_1) {
        mentionable = mentionable.mentionable;
      }
      return mentionable;
    });
    const mapped1 = found.map((id) => ({ id: id.id, text: id.name }));
    const tmp12Result = importDefault(22)(sortedRoles);
    const tmp17 = importDefault(22);
    const mapped2 = importDefault(22)(textChannelNameDisambiguations.getTextChannelNameDisambiguations(guildId)).map((id) => ({ id: id.id, text: id.name }));
    if (null != guildId) {
      const tmp21 = importDefault(22);
      const found1 = importDefault(22)(guildId(4974).COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS).filter((arg0) => arg0 !== outer1_7);
      const tmp21Result = importDefault(22)(guildId(4974).COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS);
      const flatMapResult = found1.flatMap((arg0) => outer1_6.getChannels(guildId)[arg0].map((channel) => {
        channel = channel.channel;
        if (!channel.isCategory()) {
          const obj = { id: channel.channel.id, text: guildId(outer2_2[13]).computeChannelName(channel.channel, outer2_14, outer2_12) };
          let tmp3 = obj;
          const obj2 = guildId(outer2_2[13]);
        } else {
          tmp3 = null;
        }
        return tmp3;
      }));
      let items = found1.flatMap((arg0) => outer1_6.getChannels(guildId)[arg0].map((channel) => {
        channel = channel.channel;
        if (!channel.isCategory()) {
          const obj = { id: channel.channel.id, text: guildId(outer2_2[13]).computeChannelName(channel.channel, outer2_14, outer2_12) };
          let tmp3 = obj;
          const obj2 = guildId(outer2_2[13]);
        } else {
          tmp3 = null;
        }
        return tmp3;
      })).filter(guildId(1327).isNotNullish).value();
      const iter = found1.flatMap((arg0) => outer1_6.getChannels(guildId)[arg0].map((channel) => {
        channel = channel.channel;
        if (!channel.isCategory()) {
          const obj = { id: channel.channel.id, text: guildId(outer2_2[13]).computeChannelName(channel.channel, outer2_14, outer2_12) };
          let tmp3 = obj;
          const obj2 = guildId(outer2_2[13]);
        } else {
          tmp3 = null;
        }
        return tmp3;
      })).filter(guildId(1327).isNotNullish);
    } else {
      items = [];
    }
    const allActiveJoinedThreads = closure_4.computeAllActiveJoinedThreads(guildId);
    const mapped3 = allActiveJoinedThreads.map((id) => {
      const obj = { id: id.id, text: guildId(outer1_2[13]).computeChannelName(id, outer1_14, outer1_12) };
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
    members = members.getMembers(guildId);
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
    omitResult = importDefault(22).omit(obj4, ["spoiler", "timestamp"]);
    const obj2 = importDefault(22);
  }
  if (isNotification) {
    let translateSurrogatesToInlineEmoji = NOOP;
  } else {
    translateSurrogatesToInlineEmoji = importDefault(3771).translateSurrogatesToInlineEmoji;
  }
  const obj = { inline: true, guild, channelId: id, isNotification };
  obj4 = importDefault(3829);
  return rebuild(obj4.parserFor(omitResult)(content, obj), obj, translateSurrogatesToInlineEmoji);
}
const Permissions = ME.Permissions;
({ MARKDOWN_SPOILER_REGEXP, MARKDOWN_STATIC_ROUTE_NAME_REGEXP } = ME);
let tmp3 = /^<@!?(\d+)>/;
let tmp4 = /^<@&(\d+)>/;
const tmp5 = /^<#(\d+)>/;
const tmp6 = /^<a?:(\w+):(\d+)>/;
const re17 = /(@everyone|@here|@Clyde)\b/;
const re18 = /^[^\s]+@[^\s]+\.[^\s.]+/;
obj = { link: matchAndReturnText(require("t").defaultRules.link), autolink: matchAndReturnText(require("t").defaultRules.autolink), url: matchAndReturnText(require("t").defaultRules.url), inlineCode: matchAndReturnText(require("parseLink").RULES.inlineCode), codeBlock: matchAndReturnText(require("parseLink").RULES.codeBlock), rawUserMention: matchRegexAndReturnText(tmp3), rawRoleMention: matchRegexAndReturnText(tmp4), rawChannelMention: matchRegexAndReturnText(tmp5), rawEmoji: matchRegexAndReturnText(tmp6), mention: obj, channel: obj, emoticon: obj1 };
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
              const SILENT_RE = require(6925) /* regExp */.SILENT_RE;
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
    const tmp = (function matchChannelPrefix(arg0, str, channels) {
      if (str[0] === "#") {
        if ("\"" !== str[1]) {
          return outer1_24("#", str, channels, "channel");
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
          let closure_0 = str.substring(0, num2 + 1);
          let closure_1 = outer1_0(outer1_2[13]).unescapeChannelName(str.substring(2, num2));
          const obj = outer1_0(outer1_2[13]);
          const found = channels.sortBy((text) => -text.text.length).filter((text) => closure_1 === text.text);
          const mapped = found.map((id) => {
            const items = [closure_0, id.id, "channel"];
            return items;
          });
          return mapped.first();
        }
      }
    })("#", arg0, channels.channels);
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
    order: require("parseLink").RULES.emoji.order,
    match(arg0) {
      const EMOJI_NAME_RE = importDefault(3771).EMOJI_NAME_RE;
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
let obj3 = {};
obj3["match"] = function match(arg0, textExclusions) {
  if ("string" === typeof textExclusions.textExclusions) {
    if ("" !== textExclusions.textExclusions) {
      const result = require(4572) /* textRegexp */.textMarkupPatternWithExclusions(textExclusions.textExclusions);
      let match = result.exec(arg0);
      const obj = require(4572) /* textRegexp */;
    }
    return match;
  }
  match = null;
  if (null != importDefault(4572).match) {
    match = importDefault(4572).match(arg0, textExclusions, "");
    const str2 = importDefault(4572);
  }
};
obj.text = obj3;
let obj4 = { inlineCode: matchAndReturnText(require("parseLink").RULES.inlineCode), codeBlock: matchAndReturnText(require("parseLink").RULES.codeBlock) };
const obj5 = {};
obj1 = {
  match(arg0, arg1, arg2) {
    const ConvertEmoticons = require(3803) /* explicitContentFromProto */.ConvertEmoticons;
    if (ConvertEmoticons.getSetting()) {
      if (0 !== arg2.length) {
        if (!obj.test(arg2)) {
          return null;
        }
        obj = /\s$/;
      }
      const EMOJI_SHORTCUT_RE = importDefault(3771).EMOJI_SHORTCUT_RE;
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
    const obj = { type: "emoticon", content: importDefault(3771).convertShortcutToName(arg0[1]), isShortcut: true };
    return obj;
  }
};
let obj2 = {
  order: require("parseLink").RULES.emoji.order,
  match(arg0) {
    const EMOJI_NAME_RE = importDefault(3771).EMOJI_NAME_RE;
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
obj5.match = require("t").anyScopeRegex(tmp3);
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
    const str2 = importDefault(3969).getUserTag(user, obj);
    if (isNotification) {
      let id;
      if (null != guild) {
        id = guild.id;
      }
      let nickname = importDefault(4319).getNickname(id, channelId.channelId, user);
      if (null == nickname) {
        nickname = importDefault(3969).getGlobalName(user);
        const obj6 = importDefault(3969);
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
        obj = importDefault(22);
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
    const obj9 = importDefault(3969);
  }
};
obj4.mention = obj5;
let obj6 = {};
obj6.match = require("t").anyScopeRegex(tmp4);
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
obj7.match = require("t").anyScopeRegex(tmp5);
obj7.parse = function parse(arg0) {
  const channel = store2.getChannel(arg0[1]);
  const obj = {};
  if (null == channel) {
    let first = arg0[0];
  } else {
    const obj2 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
    first = obj2.computeChannelName(channel, closure_14, closure_12, true, true);
  }
  obj.content = first;
  return obj;
};
obj4.channel = obj7;
const obj8 = {};
obj8.match = require("t").anyScopeRegex(tmp6);
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
let obj9 = {};
obj9.match = require("t").anyScopeRegex(require("getSoundmojiFromMessage").soundmojiRawFormatRegex);
obj9.parse = function parse(arg0) {
  let tmp;
  let tmp2;
  [, tmp, tmp2] = arg0;
  return { content: "<sound:" + tmp + ":" + tmp2 + ">" };
};
obj4.soundboard = obj9;
const obj10 = {};
obj10.match = require("t").anyScopeRegex(MARKDOWN_SPOILER_REGEXP);
obj10.parse = function parse() {
  const obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.content = "<" + intl.string(require(1212) /* getSystemLocale */.t["F+x38C"]).toLowerCase() + ">";
  return obj;
};
obj4.spoiler = obj10;
const obj11 = {};
obj11.match = require("t").anyScopeRegex(MARKDOWN_STATIC_ROUTE_NAME_REGEXP);
obj11.parse = function parse(arg0) {
  return { content: "<id:" + arg0[1] + ">" };
};
obj4.staticRouteLink = obj11;
const obj12 = {};
const merged1 = Object.assign(require("parseLink").RULES.timestamp);
obj12["parse"] = function parse(arg0) {
  const items = [...arguments];
  const timestamp = importDefault(4565).RULES.timestamp;
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
obj4.text = {};
let items = [obj, obj4];
let item = items.forEach((arg0) => {
  let closure_0 = arg0;
  const keys = Object.keys(arg0);
  const item = keys.forEach((arg0, order) => {
    table[arg0].order = order;
  });
});
const obj13 = {};
let closure_20 = require("t").parserFor(obj);
const re21 = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;
const obj14 = {
  parse(getGuildId, content) {
    let tmp = arg2;
    let closure_0 = getGuildId;
    let obj;
    if (null == tmp) {
      tmp = createParserState(getGuildId);
    }
    obj = { content, tts: false, invalidEmojis: [], validNonShortcutEmojis: [] };
    obj.content = parseAndRebuild(obj.content, tmp, (emoji) => {
      obj = obj(outer1_2[28]);
      obj = { emoji, channel: closure_0, intention: outer1_16.CHAT };
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
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/MessageParser.tsx");

export default obj14;
export { parseAndRebuild };
export { createParserState };
