// Module ID: 7095
// Function ID: 7096
// Name: MessageParser
// Dependencies: [5771, 5818, 2045, 4467, 2108, 2102, 2067, 4469, 4479, 4679, 1372, 1074, 5306, 1375, 4989, 1930, 5304, 7096, 7097, 2021, 4483, 5312, 4678, 4988, 12, 5318, 1115, 7098, 5754, 1370, 4487, 2]
// Exports: parseAndRebuild

// Module 7095 (MessageParser)
import _modDef12 from "module_12" /* 12 */;
import intl2 from "intl" /* 1115 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import UserSettings from "UserSettings" /* 2021 */;
import GuildChannelStore2 from "GuildChannelStore" /* 4467 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4483 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4988 */;
import useChannelName from "useChannelName" /* 4989 */;
import MarkupRulesDefault from "MarkupRules" /* 5304 */;
import ChannelAutocompleteConstants from "ChannelAutocompleteConstants" /* 5306 */;
import MarkupTextRule2 from "MarkupTextRule" /* 5312 */;
import getSoundmojiASTFromString from "getSoundmojiASTFromString" /* 5318 */;
import AutocompleteBoundaryUtils from "AutocompleteBoundaryUtils" /* 7096 */;
import parseContentForSuppressNotifications from "parseContentForSuppressNotifications" /* 7097 */;
import EmojiStore from "EmojiStore" /* 5771 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 5818 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildRoleStore from "GuildRoleStore" /* 2102 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import StreamerModeStore from "StreamerModeStore" /* 4679 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import module_1930_mod from "module_1930" /* 1930 */;
import "module_1930";
import size from "module_2" /* 2 */;

const MarkupTextRuleDefault = MarkupTextRule2;
const GuildChannelStore = GuildChannelStore2;
let dependencyMap, importDefault;

let MARKDOWN_SPOILER_REGEXP;
let MARKDOWN_STATIC_ROUTE_NAME_REGEXP;
let closure_15;
let module_1930;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj15;
let obj16;
let obj17;
let obj18;
let obj2;
let obj3;
let obj4;
let obj5;
let obj7;
let obj9;
let str;
let str2;
let str3;
let str4;
let str5;
let str6;
let str7;
function match(arg0) {
  const EMOJI_NAME_RE = UnicodeEmojisDefault.EMOJI_NAME_RE;
  return EMOJI_NAME_RE.exec(arg0);
}
function parse(arg0, arg1, customEmoji) {
  let obj;
  let tmp;
  let tmp2;
  [tmp, tmp2] = arg0;
  customEmoji = customEmoji.customEmoji;
  let value = customEmoji.get(tmp2);
  if (value == null) {
    value = null;
  }
  if (null != value) {
    let str = "";
    if (true === value.animated) {
      str = "a";
    }
    let name = value.originalName;
    if (name == null) {
      name = value.name;
    }
    const _HermesInternal = HermesInternal;
    obj = { type: "customEmoticon", content: "<" + str + ":" + name + ":" + value.id + ">", emoji: value };
    const obj2 = { type: "customEmoticon", content: "<" + str + ":" + name + ":" + value.id + ">", emoji: value };
  } else {
    obj = { type: "text", content: tmp };
  }
  return obj;
}
const f83958 = (text) => -text.text.length;
const parse2 = function parse(content) {
  return { type: str7.type, content: content[0] };
};
const parse3 = function parse(content) {
  return { type: "text", content: content[0] };
};
function rebuild(arr, arg1, arg2, arg3) {
  let c3;
  let closure_0 = arg1;
  let closure_1 = arg2;
  let closure_2 = arg3;
  content = "";
  const items = [];
  const item = arr.forEach((content) => {
    let regex;
    function handleEmoji(emojiContext, type, f83978) {
      if (null != f83978) {
        if ("customEmoticon" === type.type) {
          f83978(type.emoji, false);
        }
        if ("emoticon" === type.type) {
          obj = closure_1_1(closure_1_2[20]);
          const result = obj.translateSurrogatesToInlineEmoji(type.content);
          let match = regex.exec(result);
          if (null !== match) {
            while (true) {
              if (null != match[1]) {
                if ("" !== match[1]) {
                  let byId;
                  if (emojiContext.emojiContext) {
                    emojiContext = emojiContext.emojiContext;
                    byId = emojiContext.getById(match[1]);
                  }
                  if (byId) {
                    let tmp11 = type.isShortcut || false;
                    let tmp12 = f83978(byId, tmp11);
                  }
                  match = regex.exec(result);
                  if (null === match) {
                    break;
                  }
                }
              }
              let obj2 = closure_1_1(closure_1_2[20]);
              byId = obj2.getByName(match[2]);
            }
          }
        }
      }
    }
    handleEmoji(channel, content, f83978);
    const tmp2 = f83978;
    if (typeof content.content === "string") {
      const type = content.type;
      if ("emoji" === type) {
        const obj3 = { position: closure_3.length, length: content.content.length, id: content.id };
        closure_4.push(obj3);
        closure_3 = closure_3 + content.content;
      } else {
        if ("codeBlock" !== type) {
          if ("inlineCode" !== type) {
            if ("mention" !== type) {
              if ("roleMention" !== type) {
                if ("gameMention" !== type) {
                  if ("channel" !== type) {
                    let tmp9 = closure_3;
                    closure_3 = closure_3 + closure_1(content.content);
                  }
                }
              }
            }
          }
        }
        if (true === channel.isNotification) {
          let tmp12 = closure_3;
          let tmp13 = channel;
          let obj2 = channel(dependencyMap[27]);
          closure_3 = closure_3 + obj2.isolate(content.content);
        } else {
          let tmp11 = closure_3;
          closure_3 = closure_3 + content.content;
        }
      }
    } else {
      const _Array = Array;
      if (content.content.constructor === Array) {
        const tmp24 = rebuild(content.content, channel, closure_1, tmp2);
        const emoji = tmp24.emoji;
        content = tmp24.content;
        for (const item10008 of emoji) {
          obj = { position: closure_3.length + item10008.position, length: null, id: null };
          ({ length: obj.length, id: obj.id } = item10008);
          let arr2 = closure_4.push(obj);
          continue;
        }
        let tmp8 = closure_3;
        closure_3 = closure_3 + content;
      }
    }
  });
  return { content, emoji: items };
}
function createParserState(getGuildId, arr) {
  let arr2;
  let closure_1;
  let combined;
  let customEmoticonRegex;
  let items;
  let mapped1;
  let sortedRoles;
  let tmp9Result2Result;
  let guildId;
  if (getGuildId != null) {
    guildId = getGuildId.getGuildId();
  }
  let guild = null;
  if (null != guildId) {
    let tmp3 = GuildStore;
    guild = GuildStore.getGuild(guildId);
  }
  importDefault = PermissionStore.can(constants.MENTION_EVERYONE, getGuildId);
  let isPrivateResult;
  if (getGuildId != null) {
    isPrivateResult = getGuildId.isPrivate();
  }
  if (isPrivateResult) {
    const recipients = getGuildId.recipients;
    const mapped = recipients.map((userId) => ({ userId, nick: null }));
    const currentUser = UserStore.getCurrentUser();
    mapped1 = mapped;
    if (null != currentUser) {
      let obj = { userId: currentUser.id, nick: null };
      arr = mapped.push(obj);
      mapped1 = mapped;
    }
  } else if (null != guildId) {
    const members = GuildMemberStore.getMembers(guildId);
    mapped1 = members.map((userId) => ({ userId: userId.userId, nick: userId.nick }));
  } else {
    mapped1 = [];
  }
  const tmp11 = _modDef12;
  const tmp11Result = tmp11(mapped1.reduce((arr, userId) => {
    userId = userId.userId;
    user = user.getUser(userId);
    if (null != user) {
      const obj = { id: userId, text: user.tag };
      arr.push(obj);
    }
    return arr;
  }, []));
  const tmp13 = _modDef12;
  if (null != guild) {
    sortedRoles = GuildRoleStore.getSortedRoles(guild.id);
  } else {
    sortedRoles = [];
  }
  const tmp13Result = tmp13(sortedRoles);
  const found = tmp13Result.filter((mentionable) => closure_1 || mentionable.mentionable);
  const mapped2 = found.map((id) => ({ id: id.id, text: id.name }));
  const tmp9Result = _modDef12;
  const tmp9ResultResult = tmp9Result(GuildChannelStore.getTextChannelNameDisambiguations(guildId));
  const mapped3 = tmp9ResultResult.map((id) => ({ id: id.id, text: id.name }));
  if (null != guildId) {
    const tmp9Result3 = _modDef12;
    const tmp9Result1Result = tmp9Result3(guildId(5754).COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS);
    const found1 = tmp9Result1Result.filter((item) => item !== closure_1_7);
    const flatMapResult = found1.flatMap((item) => {
      const arr = GuildChannelStore.getChannels(guildId)[item];
      return arr.map((channel) => {
        let obj2;
        let tmp3;
        channel = channel.channel;
        if (!channel.isCategory()) {
          const obj = { id: channel.channel.id, text: obj2.computeChannelName(channel.channel, user, closure_1_12) };
          tmp3 = obj;
          obj2 = guildId(closure_1_2[14]);
        } else {
          tmp3 = null;
        }
        return tmp3;
      });
    });
    const iter = flatMapResult.filter(guildId(1370).isNotNullish);
    items = iter.value();
  } else {
    items = [];
  }
  const allActiveJoinedThreads = ActiveJoinedThreadsStore.computeAllActiveJoinedThreads(guildId);
  const mapped4 = allActiveJoinedThreads.map((id) => {
    let obj2;
    const obj = { id: id.id, text: obj2.computeChannelName(id, user, RelationshipStore) };
    obj2 = guildId(dependencyMap[14]);
    return obj;
  });
  const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(guildId);
  const escapedCustomEmoticonNames = disambiguatedEmojiContext.getEscapedCustomEmoticonNames();
  const customEmoji = disambiguatedEmojiContext.getCustomEmoji();
  let obj2 = { inline: true, mentionableRoles: mapped2, guild, users: tmp11Result, games: tmp9Result2Result.map((id) => ({ id: id.id, text: id.name })), channels: combined.concat(mapped4), emojiContext: disambiguatedEmojiContext, customEmoticonsRegex: customEmoticonRegex, customEmoji, textExclusions: escapedCustomEmoticonNames, isNotification: false };
  customEmoticonRegex = disambiguatedEmojiContext.getCustomEmoticonRegex();
  const tmp9Result4 = _modDef12;
  if (null != arr) {
    const _Array = Array;
    arr2 = Array.from(arr.values());
  } else {
    arr2 = [];
  }
  tmp9Result2Result = tmp9Result4(arr2);
  combined = mapped3.concat(items);
  return obj2;
}
function NOOP(arg0) {
  return arg0;
}
function unparseWithMeta(content1, id, isNotification) {
  let c2;
  let c3;
  let omitResult;
  let translateSurrogatesToInlineEmoji;
  const channel = ChannelStore.getChannel(id);
  let guildId = null;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  let guild = null;
  if (null != guildId) {
    guild = GuildStore.getGuild(guildId);
  }
  const tmp4 = isNotification;
  if (tmp4) {
    omitResult = obj8;
  } else {
    const obj2 = translateSurrogatesToInlineEmoji(12);
    omitResult = obj2.omit(obj8, ["spoiler", "timestamp", "unicodeEmoji"]);
  }
  if (isNotification) {
    translateSurrogatesToInlineEmoji = NOOP;
  } else {
    translateSurrogatesToInlineEmoji = translateSurrogatesToInlineEmoji(4483).translateSurrogatesToInlineEmoji;
  }
  const obj = { inline: true, guild, channelId: id, isNotification };
  const obj4 = translateSurrogatesToInlineEmoji(1930);
  dependencyMap = undefined;
  content = "";
  const items = [];
  const arr = obj4.parserFor(omitResult)(content1, obj);
  const item = arr.forEach((content) => {
    let regex;
    function handleEmoji(emojiContext, type, f83978) {
      if (null != f83978) {
        if ("customEmoticon" === type.type) {
          f83978(type.emoji, false);
        }
        if ("emoticon" === type.type) {
          obj = closure_1_1(closure_1_2[20]);
          const result = obj.translateSurrogatesToInlineEmoji(type.content);
          let match = regex.exec(result);
          if (null !== match) {
            while (true) {
              if (null != match[1]) {
                if ("" !== match[1]) {
                  let byId;
                  if (emojiContext.emojiContext) {
                    emojiContext = emojiContext.emojiContext;
                    byId = emojiContext.getById(match[1]);
                  }
                  if (byId) {
                    let tmp11 = type.isShortcut || false;
                    let tmp12 = f83978(byId, tmp11);
                  }
                  match = regex.exec(result);
                  if (null === match) {
                    break;
                  }
                }
              }
              let obj2 = closure_1_1(closure_1_2[20]);
              byId = obj2.getByName(match[2]);
            }
          }
        }
      }
    }
    handleEmoji(channel, content, f83978);
    const tmp2 = f83978;
    if (typeof content.content === "string") {
      const type = content.type;
      if ("emoji" === type) {
        const obj3 = { position: closure_3.length, length: content.content.length, id: content.id };
        closure_4.push(obj3);
        closure_3 = closure_3 + content.content;
      } else {
        if ("codeBlock" !== type) {
          if ("inlineCode" !== type) {
            if ("mention" !== type) {
              if ("roleMention" !== type) {
                if ("gameMention" !== type) {
                  if ("channel" !== type) {
                    let tmp9 = closure_3;
                    closure_3 = closure_3 + closure_1(content.content);
                  }
                }
              }
            }
          }
        }
        if (true === channel.isNotification) {
          let tmp12 = closure_3;
          let tmp13 = channel;
          let obj2 = channel(dependencyMap[27]);
          closure_3 = closure_3 + obj2.isolate(content.content);
        } else {
          let tmp11 = closure_3;
          closure_3 = closure_3 + content.content;
        }
      }
    } else {
      const _Array = Array;
      if (content.content.constructor === Array) {
        const tmp24 = rebuild(content.content, channel, closure_1, tmp2);
        const emoji = tmp24.emoji;
        content = tmp24.content;
        for (const item10008 of emoji) {
          obj = { position: closure_3.length + item10008.position, length: null, id: null };
          ({ length: obj.length, id: obj.id } = item10008);
          let arr2 = closure_4.push(obj);
          continue;
        }
        let tmp8 = closure_3;
        closure_3 = closure_3 + content;
      }
    }
  });
  return { content, emoji: items };
}
let closure_7 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
({ Permissions: closure_15, MARKDOWN_SPOILER_REGEXP, MARKDOWN_STATIC_ROUTE_NAME_REGEXP } = Constants);
const GAME_MENTION_SENTINEL = ChannelAutocompleteConstants.GAME_MENTION_SENTINEL;
const EmojiIntention = EmojiConstants.EmojiIntention;
let tmp3 = /^<@!?(\d+)>/;
let tmp4 = /^<@&(\d+)>/;
let tmp5 = /^<#(\d+)>/;
let tmp6 = /^<a?:(\w+):(\d+)>/;
const re18 = /(@everyone|@here|@Clyde)\b/;
const re19 = /^[^\s]+@[^\s]+\.[^\s.]+/;
let obj = {
  link: { order: str.order, match: str.match, parse: parse2 },
  autolink: { order: str2.order, match: str2.match, parse: parse2 },
  url: { order: str3.order, match: str3.match, parse: parse2 },
  inlineCode: { order: str4.order, match: str4.match, parse: parse2 },
  codeBlock: { order: str5.order, match: str5.match, parse: parse2 },
  rawUserMention: obj2,
  rawRoleMention: obj3,
  rawChannelMention: obj4,
  rawEmoji: obj5,
  mention: {
    match(str, games, str2) {
      const parts = str2.split(" ");
      if (null == str2[str2.length - 1]) {
        if (re19.test(tmp2)) {
          return null;
        }
      } else {
        const AUTOCOMPLETE_BOUNDARY_CHARACTERS_SET = AutocompleteBoundaryUtils.AUTOCOMPLETE_BOUNDARY_CHARACTERS_SET;
      }
      games = games.games;
      let closure_0 = GAME_MENTION_SENTINEL;
      let closure_1 = str;
      const gameMention = "gameMention";
      let closure_3;
      let firstResult;
      if (str[0] === GAME_MENTION_SENTINEL) {
        closure_3 = str.substring(arr.length);
        const sortByResult = games.sortBy(f83958);
        const found = sortByResult.filter((text) => {
          const str = text.text;
          const formatted = closure_1.toLowerCase();
          return 1 === formatted.indexOf(str.toLowerCase());
        });
        const sortByResult1 = found.sortBy((text) => {
          let num = 1;
          if (text.text === closure_3) {
            num = 0;
          }
          return num;
        });
        const mapped = sortByResult1.map((text) => {
          const items = [c0 + text.text, text.id, channel_str];
          return items;
        });
        firstResult = mapped.first();
      }
      if (null != firstResult) {
        return firstResult;
      } else {
        const users = games.users;
        let c0 = "@";
        closure_1 = str;
        let mention = "mention";
        closure_3 = undefined;
        let firstResult1;
        if (str[0] === "@") {
          closure_3 = str.substring("@".length);
          const sortByResult2 = users.sortBy(f83958);
          const found1 = sortByResult2.filter((text) => {
            const str = text.text;
            const formatted = closure_1.toLowerCase();
            return 1 === formatted.indexOf(str.toLowerCase());
          });
          const sortByResult3 = found1.sortBy((text) => {
            let num = 1;
            if (text.text === closure_3) {
              num = 0;
            }
            return num;
          });
          const mapped1 = sortByResult3.map((text) => {
            const items = [c0 + text.text, text.id, channel_str];
            return items;
          });
          firstResult1 = mapped1.first();
        }
        if (null != firstResult1) {
          return firstResult1;
        } else {
          const mentionableRoles = games.mentionableRoles;
          c0 = "@";
          closure_1 = str;
          const roleMention = "roleMention";
          closure_3 = undefined;
          let firstResult2;
          if (str[0] === "@") {
            closure_3 = str.substring("@".length);
            const sortByResult4 = mentionableRoles.sortBy(f83958);
            const found2 = sortByResult4.filter((text) => {
              const str = text.text;
              const formatted = closure_1.toLowerCase();
              return 1 === formatted.indexOf(str.toLowerCase());
            });
            const sortByResult5 = found2.sortBy((text) => {
              let num = 1;
              if (text.text === closure_3) {
                num = 0;
              }
              return num;
            });
            const mapped2 = sortByResult5.map((text) => {
              const items = [c0 + text.text, text.id, channel_str];
              return items;
            });
            firstResult2 = mapped2.first();
          }
          if (null != firstResult2) {
            return firstResult2;
          } else {
            const users1 = games.users;
            const mapped3 = users1.map((text) => {
              const obj = { text: str.split("#")[0] };
              const merged = Object.assign(text);
              return obj;
            });
            c0 = "@";
            closure_1 = str;
            mention = "mention";
            closure_3 = undefined;
            let firstResult3;
            if (str[0] === "@") {
              closure_3 = str.substring("@".length);
              const sortByResult6 = mapped3.sortBy(f83958);
              const found3 = sortByResult6.filter((text) => {
                const str = text.text;
                const formatted = closure_1.toLowerCase();
                return 1 === formatted.indexOf(str.toLowerCase());
              });
              const sortByResult7 = found3.sortBy((text) => {
                let num = 1;
                if (text.text === closure_3) {
                  num = 0;
                }
                return num;
              });
              const mapped4 = sortByResult7.map((text) => {
                const items = [c0 + text.text, text.id, channel_str];
                return items;
              });
              firstResult3 = mapped4.first();
            }
            if (null == firstResult3) {
              return null;
            } else {
              const match = re18.exec(str);
              if (null != match) {
                if (firstResult3[0].length <= match[0].length) {
                  return null;
                }
              }
              str = "";
              if ("" === str2) {
                const SILENT_RE = parseContentForSuppressNotifications.SILENT_RE;
                const match1 = SILENT_RE.exec(str);
                if (null != match1) {
                  if (firstResult3[0].length <= match1[0].length) {
                    return null;
                  }
                }
              }
              return firstResult3;
            }
          }
        }
      }
    },
    parse(arg0) {
      let tmp;
      let tmp2;
      [, tmp, tmp2] = arg0;
      if ("gameMention" === tmp2) {
        const _HermesInternal2 = HermesInternal;
        const obj2 = { type: tmp2, content: "<@$" + tmp + ">" };
        return obj2;
      } else {
        let str = "@";
        if ("roleMention" === tmp2) {
          str = "@&";
        }
        const _HermesInternal = HermesInternal;
        const obj = { type: tmp2, content: "<" + str + tmp + ">" };
        return obj;
      }
    }
  },
  channel: {
    match(str, channels) {
      channels = channels.channels;
      let closure_0;
      let closure_1;
      let firstResult1;
      if (str[0] === "#") {
        if ("\"" !== str[1]) {
          let c0 = "#";
          closure_1 = str;
          str = "channel";
          const channel_str = "channel";
          let firstResult;
          if (str[0] === "#") {
            let closure_3 = str.substring("#".length);
            const sortByResult = channels.sortBy(f83958);
            const found = sortByResult.filter((text) => {
              const str = text.text;
              const formatted = closure_1.toLowerCase();
              return 1 === formatted.indexOf(str.toLowerCase());
            });
            const sortByResult1 = found.sortBy((text) => {
              let num = 1;
              if (text.text === closure_3) {
                num = 0;
              }
              return num;
            });
            const mapped = sortByResult1.map((text) => {
              const items = [c0 + text.text, text.id, channel_str];
              return items;
            });
            firstResult = mapped.first();
          }
          firstResult1 = firstResult;
        } else {
          let num2 = 2;
          let num = 2;
          if (2 < str.length) {
            while (true) {
              let sum;
              if ("\\" !== str[num2]) {
                sum = num2;
                num = num2;
                if ("\"" === str[num2]) {
                  break;
                }
              } else {
                sum = num2 + 1;
              }
              num2 = sum + 1;
              num = num2;
              if (num2 >= str.length) {
                break;
              }
            }
          }
          closure_0 = str.substring(0, num + 1);
          const obj = useChannelName;
          closure_1 = obj.unescapeChannelName(str.substring(2, num));
          const sortByResult2 = channels.sortBy((text) => -text.text.length);
          const found1 = sortByResult2.filter((text) => closure_1 === text.text);
          const mapped1 = found1.map((id) => {
            const items = [closure_0, id.id, "channel"];
            return items;
          });
          firstResult1 = mapped1.first();
        }
      }
      if (firstResult1 == null) {
        firstResult1 = null;
      }
      return firstResult1;
    },
    parse(arg0) {
      const obj = { type: "text", content: "<#" + arg0[1] + ">" };
      return obj;
    }
  },
  emoticon: {
    match(arg0, arg1, arg2) {
      const ConvertEmoticons = UserSettings.ConvertEmoticons;
      if (ConvertEmoticons.getSetting()) {
        if (0 !== arg2.length) {
          const obj = /\s$/;
          if (!obj.test(arg2)) {
            return null;
          }
        }
        const EMOJI_SHORTCUT_RE = UnicodeEmojisDefault.EMOJI_SHORTCUT_RE;
        const match = EMOJI_SHORTCUT_RE.exec(arg0);
        let tmp9 = null;
        if (null != match) {
          if (match[0].length !== arg0.length) {
            if (" " !== arg0[match[0].length]) {
              tmp9 = null;
            }
          }
          tmp9 = match;
        }
        return tmp9;
      } else {
        return null;
      }
    },
    parse(arg0) {
      let obj2;
      const obj = { type: "emoticon", content: obj2.convertShortcutToName(arg0[1]), isShortcut: true };
      obj2 = UnicodeEmojisDefault;
      return obj;
    }
  },
  emoji: { order: MarkupRulesDefault.RULES.emoji.order, match, parse },
  customEmoticons: {
    match(arg0, customEmoticonsRegex) {
      customEmoticonsRegex = customEmoticonsRegex.customEmoticonsRegex;
      let match;
      if (customEmoticonsRegex != null) {
        match = customEmoticonsRegex.exec(arg0);
      }
      if (match == null) {
        match = null;
      }
      return match;
    },
    parse(arg0, arg1, emojiContext) {
      let obj;
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      emojiContext = emojiContext.emojiContext;
      const emoticonByName = emojiContext.getEmoticonByName(tmp2);
      if (null != emoticonByName) {
        let str = "";
        if (true === emoticonByName.animated) {
          str = "a";
        }
        const _HermesInternal = HermesInternal;
        obj = { type: "customEmoticon", content: "<" + str + ":" + emoticonByName.name + ":" + emoticonByName.id + ">", emoji: emoticonByName };
        const obj2 = { type: "customEmoticon", content: "<" + str + ":" + emoticonByName.name + ":" + emoticonByName.id + ">", emoji: emoticonByName };
      } else {
        obj = { type: "text", content: tmp };
      }
      return obj;
    }
  },
  text: obj7
};
str = module_1930.defaultRules.link;
str2 = module_1930.defaultRules.autolink;
str3 = module_1930.defaultRules.url;
str4 = MarkupRulesDefault.RULES.inlineCode;
str5 = MarkupRulesDefault.RULES.codeBlock;
obj2 = { match: module_1930.anyScopeRegex(tmp3), parse: parse3 };
module_1930 = module_1930_mod;
obj3 = { match: module_1930.anyScopeRegex(tmp4), parse: parse3 };
module_1930 = module_1930_mod;
obj4 = { match: module_1930.anyScopeRegex(tmp5), parse: parse3 };
module_1930 = module_1930_mod;
obj5 = { match: module_1930.anyScopeRegex(tmp6), parse: parse3 };
module_1930 = module_1930_mod;
obj7 = {
  match(arg0, textExclusions) {
    let match;
    if (typeof textExclusions.textExclusions === "string") {
      if ("" !== textExclusions.textExclusions) {
        const obj = MarkupTextRule2;
        const result = obj.textMarkupPatternWithExclusions(textExclusions.textExclusions);
        match = result.exec(arg0);
      }
      return match;
    }
    match = null;
    if (null != MarkupTextRuleDefault.match) {
      const str = MarkupTextRuleDefault;
      match = str.match(arg0, textExclusions, "");
    }
  }
};
({ order: MarkupRulesDefault.RULES.emoji.order, match, parse });
Object.assign(MarkupTextRuleDefault);
const obj8 = { inlineCode: { order: str6.order, match: str6.match, parse: parse2 }, codeBlock: { order: str7.order, match: str7.match, parse: parse2 }, mention: obj9, roleMention: obj10, channel: obj11, emoji: obj12, soundboard: obj13, unicodeEmoji: obj14, spoiler: obj15, staticRouteLink: obj16, timestamp: obj17, text: obj18 };
str6 = MarkupRulesDefault.RULES.inlineCode;
str7 = MarkupRulesDefault.RULES.codeBlock;
obj9 = {
  match: module_1930.anyScopeRegex(tmp3),
  parse(arg0, arg1, channelId) {
    let guild;
    let isNotification;
    ({ isNotification, guild } = channelId);
    let closure_0;
    channelId = channelId.channelId;
    const user = UserStore.getUser(arg0[1]);
    if (null == user) {
      return { content: arg0[0] };
    } else {
      let str = "always";
      const getUserTag = UserUtilsDefault.getUserTag;
      UserUtilsDefault;
      if (isNotification) {
        str = "always";
        if (StreamerModeStore.enabled) {
          str = "never";
        }
      }
      const obj = { identifiable: str };
      const str2 = getUserTag(user, obj);
      if (isNotification) {
        let combined;
        let id;
        const getNickname = NicknameUtilsDefault.getNickname;
        NicknameUtilsDefault;
        if (guild != null) {
          id = guild.id;
        }
        let nickname = getNickname(id, channelId, user);
        if (nickname == null) {
          const tmp14Result3 = UserUtilsDefault;
          nickname = tmp14Result3.getGlobalName(user);
        }
        if (null != nickname) {
          const _HermesInternal6 = HermesInternal;
          combined = "@" + nickname;
        } else {
          const _HermesInternal5 = HermesInternal;
          combined = "@" + str2;
        }
        return { content: combined };
      } else if (user.bot) {
        const _HermesInternal4 = HermesInternal;
        const obj4 = { content: "@" + str2 };
        return obj4;
      } else {
        let id1;
        if (guild != null) {
          id1 = guild.id;
        }
        let str4 = "";
        if (null != id1) {
          closure_0 = str2.toLowerCase();
          let str5 = "";
          const tmp14Result4 = _modDef12;
          if (tmp14Result4.some(GuildRoleStore.getUnsafeMutableRoles(guild.id), (name) => {
            const str = name.name;
            return closure_0.startsWith(str.toLowerCase());
          })) {
            const _HermesInternal = HermesInternal;
            const combined1 = "" + user.discriminator;
            const _HermesInternal2 = HermesInternal;
            str5 = "#" + combined1.padStart(4, "0");
          }
          str4 = str5;
        }
        const _HermesInternal3 = HermesInternal;
        const obj5 = { content: "@" + str2 + str4 };
        return obj5;
      }
    }
  }
};
module_1930 = module_1930_mod;
obj10 = {
  match: module_1930.anyScopeRegex(tmp4),
  parse(content, arg1, guild) {
    guild = guild.guild;
    if (null != guild) {
      const role = GuildRoleStore.getRole(guild.id, content[1]);
      if (null != role) {
        const _HermesInternal = HermesInternal;
        const obj2 = { content: "@" + role.name };
        return obj2;
      }
    }
    return { content: content[0] };
  }
};
module_1930 = module_1930_mod;
obj11 = {
  match: module_1930.anyScopeRegex(tmp5),
  parse(arg0) {
    const channel = ChannelStore.getChannel(arg0[1]);
    if (null == channel) {
      content = arg0[0];
    } else {
      const obj = useChannelName;
      content = obj.computeChannelName(channel, UserStore, RelationshipStore, true, true);
    }
    return { content };
  }
};
module_1930 = module_1930_mod;
obj12 = {
  match: module_1930.anyScopeRegex(tmp6),
  parse(arg0, arg1, guild) {
    let name;
    let tmp;
    [, name, tmp] = arg0;
    guild = guild.guild;
    let id = null;
    const getDisambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext;
    if (guild) {
      id = guild.id;
    }
    const disambiguatedEmojiContext = getDisambiguatedEmojiContext(id);
    const byId = disambiguatedEmojiContext.getById(tmp);
    if (null != byId) {
      name = byId.name;
    }
    const obj = { content: ":" + name + ":", id: tmp };
    return obj;
  }
};
module_1930 = module_1930_mod;
obj13 = {
  match: module_1930.anyScopeRegex(getSoundmojiASTFromString.soundmojiRawFormatRegex),
  parse(arg0) {
    let tmp;
    let tmp2;
    [, tmp, tmp2] = arg0;
    const obj = { content: "<sound:" + tmp + ":" + tmp2 + ">" };
    return obj;
  }
};
module_1930 = module_1930_mod;
obj14 = {
  match: module_1930.anyScopeRegex(UnicodeEmojisDefault.EMOJI_NAME_RE),
  parse(arg0) {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    const obj = UnicodeEmojisDefault;
    const result = obj.convertNameToSurrogate(tmp2);
    if ("" !== result) {
      content = result;
    }
    return { content };
  }
};
module_1930 = module_1930_mod;
obj15 = {
  match: module_1930.anyScopeRegex(MARKDOWN_SPOILER_REGEXP),
  parse() {
    let str;
    const obj = { content: "<" + str.toLowerCase() + ">" };
    const intl = intl2.intl;
    str = intl.string(intl2.t["F+x38C"]);
    return obj;
  }
};
module_1930 = module_1930_mod;
obj16 = {
  match: module_1930.anyScopeRegex(MARKDOWN_STATIC_ROUTE_NAME_REGEXP),
  parse(arg0) {
    const obj = { content: "<id:" + arg0[1] + ">" };
    return obj;
  }
};
obj17 = {
  parse() {
    let obj;
    const items = [...arguments];
    const timestamp = MarkupRulesDefault.RULES.timestamp;
    const items1 = [...items];
    const applyResult = timestamp.parse.apply(items1);
    if ("text" === applyResult.type) {
      obj = { content: applyResult.content };
      const obj2 = { content: applyResult.content };
    } else {
      obj = { content: applyResult.formatted };
    }
    return obj;
  }
};
const merged1 = Object.assign(MarkupRulesDefault.RULES.timestamp);
obj18 = {};
const MarkupTextRule = Object.assign(MarkupTextRuleDefault);
let items = [obj, obj8];
let item = items.forEach((item) => {
  const keys = Object.keys(item);
  item = keys.forEach((item, order) => {
    item[item].order = order;
  });
});
module_1930 = module_1930_mod;
let closure_21 = module_1930.parserFor(obj);
const re22 = /(?:<a?:\w+:(\d+)>)|:(?:([^\s:]+?)(?:::skin-tone-\d)?:)/g;
const obj19 = {
  parse(getGuildId, content, arg2, arr) {
    let closure_0 = getGuildId;
    let tmp = arg2;
    let obj;
    if (tmp == null) {
      let tmp2 = arr;
      tmp = createParserState(getGuildId, arr);
    }
    obj = { content, tts: false, invalidEmojis: [], validNonShortcutEmojis: [] };
    closure_0 = tmp;
    arr = closure_21(obj.content, tmp);
    let closure_1 = obj(4483).translateInlineEmojiToSurrogates;
    const f83978 = (emoji, arg1) => {
      obj = obj(dependencyMap[30]);
      const obj2 = { emoji, channel, intention: constants.CHAT };
      if (obj.isEmojiPremiumLocked(obj2)) {
        const invalidEmojis = closure_1.invalidEmojis;
        invalidEmojis.push(emoji);
      } else {
        const tmp = arg1;
        if (!tmp) {
          const prop = closure_1.validNonShortcutEmojis;
          prop.push(emoji);
        }
      }
    };
    content = "";
    let closure_4 = [];
    const item = arr.forEach((content) => {
      let regex;
      function handleEmoji(emojiContext, type, f83978) {
        if (null != f83978) {
          if ("customEmoticon" === type.type) {
            f83978(type.emoji, false);
          }
          if ("emoticon" === type.type) {
            obj = closure_1_1(closure_1_2[20]);
            const result = obj.translateSurrogatesToInlineEmoji(type.content);
            let match = regex.exec(result);
            if (null !== match) {
              while (true) {
                if (null != match[1]) {
                  if ("" !== match[1]) {
                    let byId;
                    if (emojiContext.emojiContext) {
                      emojiContext = emojiContext.emojiContext;
                      byId = emojiContext.getById(match[1]);
                    }
                    if (byId) {
                      let tmp11 = type.isShortcut || false;
                      let tmp12 = f83978(byId, tmp11);
                    }
                    match = regex.exec(result);
                    if (null === match) {
                      break;
                    }
                  }
                }
                let obj2 = closure_1_1(closure_1_2[20]);
                byId = obj2.getByName(match[2]);
              }
            }
          }
        }
      }
      handleEmoji(channel, content, f83978);
      const tmp2 = f83978;
      if (typeof content.content === "string") {
        const type = content.type;
        if ("emoji" === type) {
          const obj3 = { position: closure_3.length, length: content.content.length, id: content.id };
          closure_4.push(obj3);
          closure_3 = closure_3 + content.content;
        } else {
          if ("codeBlock" !== type) {
            if ("inlineCode" !== type) {
              if ("mention" !== type) {
                if ("roleMention" !== type) {
                  if ("gameMention" !== type) {
                    if ("channel" !== type) {
                      let tmp9 = closure_3;
                      closure_3 = closure_3 + closure_1(content.content);
                    }
                  }
                }
              }
            }
          }
          if (true === channel.isNotification) {
            let tmp12 = closure_3;
            let tmp13 = channel;
            let obj2 = channel(dependencyMap[27]);
            closure_3 = closure_3 + obj2.isolate(content.content);
          } else {
            let tmp11 = closure_3;
            closure_3 = closure_3 + content.content;
          }
        }
      } else {
        const _Array = Array;
        if (content.content.constructor === Array) {
          const tmp24 = rebuild(content.content, channel, closure_1, tmp2);
          const emoji = tmp24.emoji;
          content = tmp24.content;
          for (const item10008 of emoji) {
            obj = { position: closure_3.length + item10008.position, length: null, id: null };
            ({ length: obj.length, id: obj.id } = item10008);
            let arr2 = closure_4.push(obj);
            continue;
          }
          let tmp8 = closure_3;
          closure_3 = closure_3 + content;
        }
      }
    });
    obj.content = content;
    return obj;
  },
  parsePreprocessor(getGuildId, arg1) {
    return closure_21(arg1, createParserState(getGuildId));
  },
  unparse(content1, id, isNotification) {
    return unparseWithMeta(content1, id, isNotification).content;
  },
  unparseWithMeta
};
let result = size.fileFinishedImporting("modules/messages/MessageParser.tsx");

export default obj19;
export const parseAndRebuild = function parseAndRebuild(arg0, arg1, arg2) {
  let closure_1;
  let closure_2;
  let closure_0 = arg1;
  const arr = closure_21(arg0, arg1);
  importDefault = UnicodeEmojisDefault.translateInlineEmojiToSurrogates;
  dependencyMap = arg2;
  let c3 = "";
  let closure_4 = [];
  const item = arr.forEach((content) => {
    let regex;
    function handleEmoji(emojiContext, type, f83978) {
      if (null != f83978) {
        if ("customEmoticon" === type.type) {
          f83978(type.emoji, false);
        }
        if ("emoticon" === type.type) {
          obj = closure_1_1(closure_1_2[20]);
          const result = obj.translateSurrogatesToInlineEmoji(type.content);
          let match = regex.exec(result);
          if (null !== match) {
            while (true) {
              if (null != match[1]) {
                if ("" !== match[1]) {
                  let byId;
                  if (emojiContext.emojiContext) {
                    emojiContext = emojiContext.emojiContext;
                    byId = emojiContext.getById(match[1]);
                  }
                  if (byId) {
                    let tmp11 = type.isShortcut || false;
                    let tmp12 = f83978(byId, tmp11);
                  }
                  match = regex.exec(result);
                  if (null === match) {
                    break;
                  }
                }
              }
              let obj2 = closure_1_1(closure_1_2[20]);
              byId = obj2.getByName(match[2]);
            }
          }
        }
      }
    }
    handleEmoji(channel, content, f83978);
    const tmp2 = f83978;
    if (typeof content.content === "string") {
      const type = content.type;
      if ("emoji" === type) {
        const obj3 = { position: closure_3.length, length: content.content.length, id: content.id };
        closure_4.push(obj3);
        closure_3 = closure_3 + content.content;
      } else {
        if ("codeBlock" !== type) {
          if ("inlineCode" !== type) {
            if ("mention" !== type) {
              if ("roleMention" !== type) {
                if ("gameMention" !== type) {
                  if ("channel" !== type) {
                    let tmp9 = closure_3;
                    closure_3 = closure_3 + closure_1(content.content);
                  }
                }
              }
            }
          }
        }
        if (true === channel.isNotification) {
          let tmp12 = closure_3;
          let tmp13 = channel;
          let obj2 = channel(dependencyMap[27]);
          closure_3 = closure_3 + obj2.isolate(content.content);
        } else {
          let tmp11 = closure_3;
          closure_3 = closure_3 + content.content;
        }
      }
    } else {
      const _Array = Array;
      if (content.content.constructor === Array) {
        const tmp24 = rebuild(content.content, channel, closure_1, tmp2);
        const emoji = tmp24.emoji;
        content = tmp24.content;
        for (const item10008 of emoji) {
          obj = { position: closure_3.length + item10008.position, length: null, id: null };
          ({ length: obj.length, id: obj.id } = item10008);
          let arr2 = closure_4.push(obj);
          continue;
        }
        let tmp8 = closure_3;
        closure_3 = closure_3 + content;
      }
    }
  });
  return c3;
};
export { createParserState };
