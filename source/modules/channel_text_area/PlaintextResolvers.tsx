// Module ID: 8232
// Function ID: 64885
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 4991, 5039, 1348, 1907, 1917, 1910, 1838, 3758, 3767, 1849, 653, 1852, 6926, 4320, 21, 4974, 3771, 3775, 2]
// Exports: resolveApplicationCommandOption

// Module 8232 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { GUILD_SELECTABLE_CHANNELS_KEY as closure_8 } from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_11 from "_createForOfIteratorHelperLoose";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import { Permissions } from "ME";
import { EmojiIntention } from "set";

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
function resolvePlaintextInlineVoid(arr, source, id, intention) {
  let obj = intention;
  if (null == intention) {
    obj = {};
  }
  const allowUsers = obj.allowUsers;
  const allowRoles = obj.allowRoles;
  let first = arr[0];
  if ("@" === first) {
    return (function resolveUserOrRole(arr, source, id, arg3, arg4) {
      let tmp = outer1_3(arr.slice(1).split("#", 2), 2);
      const first = tmp[0];
      let closure_1 = tmp3;
      let guild = null;
      if (null != source) {
        guild = outer1_11.getGuild(source);
      }
      if (arg4) {
        if (null == tmp3) {
          if (null != guild) {
            const tmp8 = outer1_17(outer1_10.getSortedRoles(guild.id));
            const iter = tmp8();
            let iter2 = iter;
            if (!iter.done) {
              const value = iter2.value;
              while (first !== value.name) {
                let iter3 = tmp8();
                iter2 = iter3;
              }
              let obj = { type: "roleMention", roleId: value.id };
              obj = { text: "" };
              const items = [obj];
              obj.children = items;
              return obj;
            }
          }
        }
      }
      if (arg3) {
        let channel = null;
        if (null != id) {
          channel = outer1_6.getChannel(id);
        }
        if (null == channel) {
          return null;
        } else {
          if (channel.isPrivate()) {
            let recipients = channel.recipients;
          } else {
            const members = outer1_9.getMembers(source);
            recipients = members.map((userId) => userId.userId);
          }
          const mapped = recipients.map((arg0) => outer2_14.getUser(arg0));
          const found = mapped.filter((arg0) => {
            let tmp = undefined !== arg0;
            if (tmp) {
              tmp = outer2_20(first, closure_1, arg0);
            }
            return tmp;
          });
          if (1 === found.length) {
            const first1 = found[0];
            obj = { requireExact: true };
            if (outer1_20(first, tmp3, first1, obj)) {
              const obj1 = { type: "userMention", userId: first1.id };
              const obj2 = { text: "" };
              const items1 = [obj2];
              obj1.children = items1;
              return obj1;
            }
          }
        }
      }
      return null;
    })(arr, source, id, tmp, tmp2);
  } else if (":" === first) {
    const EMOJI_NAME_RE = importDefault(3771).EMOJI_NAME_RE;
    const match = EMOJI_NAME_RE.exec(arr);
    let tmp47 = null;
    if (null != match) {
      disambiguatedEmojiContext = disambiguatedEmojiContext.getDisambiguatedEmojiContext(source);
      const customEmoji = disambiguatedEmojiContext.getCustomEmoji();
      let obj2 = customEmoji.get(match[1]);
      let channel = null;
      if (null != id) {
        channel = channel.getChannel(id);
      }
      tmp47 = null;
      if (null != obj2) {
        obj = { emoji: obj2, channel, intention: EmojiIntention.CHAT };
        tmp47 = null;
        if (!obj17.isEmojiFiltered(obj)) {
          obj = { type: "customEmoji" };
          let obj1 = { emojiId: obj2.id };
          if (!("require_colons" in obj2)) {
            obj1.name = obj2.name;
            obj1.animated = true === obj2.animated;
            obj1.jumboable = false;
            obj.emoji = obj1;
            obj2 = { text: "" };
            obj1 = [obj2];
            obj.children = obj1;
          }
          const _HermesInternal = HermesInternal;
          const combined = ":" + obj2.name + ":";
        }
        obj17 = importDefault(3775);
      }
    }
    return tmp47;
  } else if ("#" === first) {
    let tmp4 = null;
    if (null != source) {
      if (arr.length > 3) {
        if ("\"" === arr[1]) {
          if ("\"" === arr[arr.length - 1]) {
            obj1 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
            let unescapeChannelNameResult = obj1.unescapeChannelName(arr.slice(2, arr.length - 1));
          }
          const textChannelNameDisambiguations = store.getTextChannelNameDisambiguations(source);
          let obj3 = importDefault(21);
          const tmp13 = _createForOfIteratorHelperLoose(obj3.keys(textChannelNameDisambiguations));
          let iter = tmp13();
          let iter2 = iter;
          if (iter.done) {
            const tmp17 = _createForOfIteratorHelperLoose(require(4974) /* _createForOfIteratorHelperLoose */.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS);
            const iter4 = tmp17();
            let iter5 = iter4;
            if (!iter4.done) {
              while (true) {
                let value = iter5.value;
                let tmp19 = closure_8;
                let tmp20 = tmp18;
                if (value !== closure_8) {
                  let tmp62 = _createForOfIteratorHelperLoose;
                  let tmp63 = store;
                  let tmp64 = _createForOfIteratorHelperLoose(store.getChannels(source)[value]);
                  let iter15 = tmp64();
                  let iter7 = iter15;
                  let tmp65 = iter15;
                  let tmp66 = tmp64;
                  tmp20 = tmp18;
                  if (!iter15.done) {
                    while (true) {
                      channel = iter7.value.channel;
                      let tmp21 = require;
                      let tmp22 = dependencyMap;
                      let obj6 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
                      let tmp23 = closure_14;
                      let tmp24 = closure_13;
                      if (obj6.computeChannelName(channel, closure_14, closure_13) !== unescapeChannelNameResult) {
                        let iter6 = tmp64();
                        iter7 = iter6;
                        let tmp27 = iter6;
                        let tmp28 = tmp64;
                        tmp20 = channel;
                        continue;
                      } else if (!channel.isCategory()) {
                        break;
                      } else {
                        let tmp25 = closure_12;
                        let tmp26 = Permissions;
                        if (closure_12.can(Permissions.VIEW_CHANNEL, channel)) {
                          break;
                        }
                      }
                    }
                    obj3 = {};
                    let str4 = "channelMention";
                    obj3.type = "channelMention";
                    obj3.channelId = channel.id;
                    let obj4 = {};
                    let str5 = "";
                    obj4.text = "";
                    let items = [obj4];
                    obj3.children = items;
                    tmp4 = obj3;
                  }
                }
                let iter8 = tmp17();
                tmp18 = tmp20;
                iter5 = iter8;
              }
            }
            activeJoinedThreadsForGuild = activeJoinedThreadsForGuild.getActiveJoinedThreadsForGuild(source);
            const tmp34 = _createForOfIteratorHelperLoose(importDefault(21).keys(activeJoinedThreadsForGuild));
            const iter9 = tmp34();
            let iter10 = iter9;
            tmp4 = null;
            if (!iter9.done) {
              while (true) {
                let value1 = iter10.value;
                let tmp35 = _createForOfIteratorHelperLoose;
                let tmp36 = importDefault;
                let tmp37 = dependencyMap;
                let obj10 = importDefault(21);
                let tmp38 = _createForOfIteratorHelperLoose(obj10.keys(activeJoinedThreadsForGuild[value1]));
                let iter11 = tmp38();
                let iter12 = iter11;
                if (iter11.done) {
                  let iter14 = tmp34();
                  iter10 = iter14;
                  tmp4 = null;
                } else {
                  let channel2 = activeJoinedThreadsForGuild[value1][iter12.value].channel;
                  let tmp39 = require;
                  let tmp40 = dependencyMap;
                  let obj11 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
                  let tmp41 = closure_14;
                  let tmp42 = closure_13;
                  while (obj11.computeChannelName(channel2, closure_14, closure_13) !== unescapeChannelNameResult) {
                    let iter13 = tmp38();
                    iter12 = iter13;
                    let tmp43 = channel2;
                    continue;
                  }
                  let obj5 = {};
                  let str6 = "channelMention";
                  obj5.type = "channelMention";
                  obj5.channelId = channel2.id;
                  obj6 = {};
                  let str7 = "";
                  obj6.text = "";
                  let items1 = [obj6];
                  obj5.children = items1;
                  tmp4 = obj5;
                }
              }
            }
            const obj9 = importDefault(21);
          } else {
            obj2 = iter2.value;
            while (textChannelNameDisambiguations[obj2].name !== unescapeChannelNameResult) {
              let iter3 = tmp13();
              iter2 = iter3;
            }
            const obj7 = { type: "channelMention", channelId: obj2 };
            const obj8 = { text: "" };
            const items2 = [obj8];
            obj7.children = items2;
            tmp4 = obj7;
          }
        }
      }
      unescapeChannelNameResult = arr.slice(1);
    }
    return tmp4;
  } else {
    return null;
  }
}
function matchesUser(arg0, arg1, username) {
  let obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  let flag = obj.requireExact;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = null != username;
  if (tmp) {
    username = username.username;
    if (flag) {
      let startsWithResult = username === arg0;
    } else {
      startsWithResult = username.startsWith(arg0);
    }
    if (startsWithResult) {
      let str = "0";
      if (null != arg1) {
        str = arg1;
      }
      startsWithResult = username.discriminator === str;
    }
    tmp = startsWithResult;
  }
  return tmp;
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/channel_text_area/PlaintextResolvers.tsx");

export { resolvePlaintextInlineVoid };
export const resolveApplicationCommandOption = function resolveApplicationCommandOption(text, source, id, intention) {
  const tmp = resolvePlaintextInlineVoid(text, source, id, intention);
  let voidToOptionValueResult = null;
  if (null != tmp) {
    voidToOptionValueResult = require(6926) /* toRichValue */.voidToOptionValue(tmp);
    const obj = require(6926) /* toRichValue */;
  }
  return voidToOptionValueResult;
};
