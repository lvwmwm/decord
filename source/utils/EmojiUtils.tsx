// Module ID: 3775
// Function ID: 29026
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 1352, 3758, 1849, 653, 1852, 3774, 3776, 4996, 3751, 7024, 1447, 1392, 2]
// Exports: countEmoji, getAllEmojiNamesString, getEmojiColors, getEmojiUrl

// Module 3775 (_createForOfIteratorHelperLoose)
import closure_3 from "set";
import _callSuper from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { Permissions } from "ME";
import set from "set";
import set from "_isNativeReflectConstruct";

let EmojiDisabledReasons;
let closure_10;
let closure_11;
let closure_13;
let closure_14;
let closure_4;
let closure_5;
let closure_9;
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
function isCustomEmoji(emoji) {
  let tmp = emoji.type === require(3774) /* EmojiTypes */.EmojiTypes.GUILD;
  if (!tmp) {
    tmp = null != emoji.guildId;
  }
  return tmp;
}
function isInternalEmojiForGuildId(emoji, guildId) {
  let tmp = null != emoji && null != guildId;
  if (tmp) {
    const tmp3 = isCustomEmoji(emoji);
    let tmp4 = !tmp3;
    if (tmp3) {
      tmp4 = guildId === emoji.guildId;
    }
    tmp = tmp4;
  }
  return tmp;
}
function getEmojiUnavailableReason(intention) {
  let channel;
  let emoji;
  let guildId;
  ({ emoji, channel, guildId } = intention);
  if (guildId === undefined) {
    guildId = undefined;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
  }
  intention = intention.intention;
  if (isCustomEmoji(emoji)) {
    if (intention !== constants.GUILD_PROFILE) {
      if (intention !== constants.NO_CUSTOM_EMOJI) {
        let tmp6 = null != channel;
        if (tmp6) {
          tmp6 = callback2(channel.type);
        }
        let tmp7 = null != channel;
        if (tmp7) {
          tmp7 = callback3(channel.type);
        }
        const tmp10 = isInternalEmojiForGuildId(emoji, guildId);
        if (intention === constants.COMMUNITY_CONTENT) {
          if (tmp10) {
            if (null != emoji.guildId) {
              let DISALLOW_EXTERNAL = null;
            }
            return DISALLOW_EXTERNAL;
          }
          DISALLOW_EXTERNAL = EmojiDisabledReasons.DISALLOW_EXTERNAL;
        } else {
          if (!callback4(intention)) {
            if (!isInternalEmojiForGuildId(emoji, guildId)) {
              if (!intention.forceIncludeExternalGuilds) {
                return EmojiDisabledReasons.DISALLOW_EXTERNAL;
              }
            }
          }
          if (tmp6) {
            if (!tmp10) {
              if (!tmp13) {
                return EmojiDisabledReasons.DISALLOW_EXTERNAL;
              }
            }
          }
          if (null != emoji.id) {
            if (!emoji.available) {
              return EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE;
            }
          }
          currentUser = currentUser.getCurrentUser();
          if (!obj.canUseEmojisEverywhere(currentUser)) {
            if (!tmp10) {
              if (intention === constants.STATUS) {
                return EmojiDisabledReasons.PREMIUM_LOCKED;
              } else if (!emoji.managed) {
                return EmojiDisabledReasons.PREMIUM_LOCKED;
              }
            }
          }
          obj = importDefault(3776);
          let tmp28;
          if (null != guildId) {
            tmp28 = guildId;
          }
          if (obj2.isUnusableRoleSubscriptionEmoji(emoji, tmp28)) {
            require(3751) /* isRestrictedFromShowingGuildPurchaseEntryPoints */.shouldHideGuildPurchaseEntryPoints(emoji.guildId) ? EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE : EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED;
            const obj5 = require(3751) /* isRestrictedFromShowingGuildPurchaseEntryPoints */;
          } else {
            let PREMIUM_LOCKED = null;
            if (emoji.animated) {
              PREMIUM_LOCKED = null;
              if (!obj3.canUseAnimatedEmojis(currentUser)) {
                PREMIUM_LOCKED = null;
                if (!obj4.isPurchasableRoleSubscriptionEmoji(emoji)) {
                  PREMIUM_LOCKED = EmojiDisabledReasons.PREMIUM_LOCKED;
                }
                obj4 = require(4996) /* isPurchasableRoleSubscriptionEmoji */;
              }
              obj3 = importDefault(3776);
            }
            return PREMIUM_LOCKED;
          }
          obj2 = require(4996) /* isPurchasableRoleSubscriptionEmoji */;
        }
      }
    }
    return EmojiDisabledReasons.DISALLOW_CUSTOM;
  } else {
    return null;
  }
}
async function _getEmojiColors(arg0, arg1) {
  return yield outer2_1(outer2_2[10]).getEmojiColors(arg0);
}
({ isGuildTextChannelType: closure_4, isGuildVocalChannelType: closure_5 } = _callSuper);
({ EMOJI_MAX_FILESIZE: closure_9, EMOJI_MAX_LENGTH: closure_10, EMOJI_RE: closure_11, EmojiDisabledReasons } = set);
({ EmojiIntention: closure_13, isExternalEmojiAllowedForIntention: closure_14 } = set);
let items = [, ];
({ PREMIUM_LOCKED: arr[0], ROLE_SUBSCRIPTION_LOCKED: arr[1] } = EmojiDisabledReasons);
set = new Set(items);
const items1 = [...set, EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE, EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE];
const set1 = new Set(items1);
const items2 = [, , , ];
({ DISALLOW_CUSTOM: arr3[0], DISALLOW_EXTERNAL: arr3[1], GUILD_SUBSCRIPTION_UNAVAILABLE: arr3[2], ONLY_GUILD_EMOJIS_ALLOWED: arr3[3] } = EmojiDisabledReasons);
const set2 = new Set(items2);
const result = set.fileFinishedImporting("utils/EmojiUtils.tsx");

export default {
  sanitizeEmojiName(first) {
    let length;
    const replaced = first.replace(closure_11, "");
    const substr = replaced.slice(0, closure_10);
    let tmp = substr;
    let tmp2 = substr;
    if (substr.length < 2) {
      do {
        let text = `${tmp}_`;
        tmp = text;
        tmp2 = text;
        length = `${tmp}_`.length;
      } while (length < 2);
    }
    return tmp2;
  },
  filterUnsupportedEmojis: require("getURL").filterUnsupportedEmojis,
  getURL: require("getURL").getURL,
  isInternalEmojiForGuildId,
  getEmojiUnavailableReason,
  isCustomEmoji,
  getEmojiUnavailableReasons(arg0) {
    let categoryEmojis;
    let channel;
    let guildId;
    let intention;
    let iter3;
    ({ categoryEmojis, channel, guildId, intention } = arg0);
    const set = new Set();
    const items = [];
    const tmp = _createForOfIteratorHelperLoose(categoryEmojis);
    const iter = tmp();
    let num = 0;
    let iter2 = iter;
    let flag = false;
    let num2 = 0;
    let flag2 = false;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp2 = getEmojiUnavailableReason;
        let obj = { emoji: value, channel, guildId, intention };
        let tmp3 = getEmojiUnavailableReason(obj);
        if (null != tmp3) {
          let tmp7 = set2;
          if (!set2.has(tmp3)) {
            let arr = items.push(value);
          }
          let tmp9 = set1;
          let tmp5 = num;
          let tmp6 = flag;
          if (set1.has(tmp3)) {
            if (null != value.id) {
              let addResult = set.add(value.id);
            }
            let tmp11 = set;
            let sum = num;
            let tmp13 = flag;
            if (set.has(tmp3)) {
              let tmp14 = flag;
              if (!flag) {
                let tmp15 = EmojiDisabledReasons;
                tmp14 = tmp3 !== EmojiDisabledReasons.PREMIUM_LOCKED;
              }
              if (!tmp14) {
                flag = true;
              }
              sum = num + 1;
              tmp13 = flag;
            }
            tmp5 = sum;
            tmp6 = tmp13;
          }
        } else {
          arr = items.push(value);
          tmp5 = num;
          tmp6 = flag;
        }
        iter3 = tmp();
        num = tmp5;
        flag = tmp6;
        iter2 = iter3;
        num2 = tmp5;
        flag2 = tmp6;
      } while (!iter3.done);
    }
    obj = { emojisDisabled: set, emojisUnfiltered: items, emojisPremiumLockedCount: num2, emojiNitroLocked: flag2 };
    return obj;
  },
  isEmojiFiltered(intention) {
    return set2.has(getEmojiUnavailableReason(intention));
  },
  isEmojiPremiumLocked(intention) {
    return set.has(getEmojiUnavailableReason(intention));
  },
  isEmojiCategoryNitroLocked(categoryEmojis) {
    let channel;
    let guildId;
    let intention;
    let iter3;
    categoryEmojis = categoryEmojis.categoryEmojis;
    ({ channel, guildId, intention } = categoryEmojis);
    const tmp = _createForOfIteratorHelperLoose(categoryEmojis);
    const iter = tmp();
    let flag = false;
    let iter2 = iter;
    let num = 0;
    let flag2 = false;
    let num2 = 0;
    if (!iter.done) {
      do {
        let tmp2 = getEmojiUnavailableReason;
        let obj = { emoji: iter2.value, channel, intention, guildId };
        let tmp3 = getEmojiUnavailableReason(obj);
        let tmp4 = EmojiDisabledReasons;
        if (tmp3 === EmojiDisabledReasons.PREMIUM_LOCKED) {
          let sum = num + 1;
          let flag3 = true;
        } else {
          let tmp5 = EmojiDisabledReasons;
          flag3 = flag;
          sum = num;
          if (tmp3 === EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) {
            sum = num + 1;
            flag3 = flag;
          }
        }
        iter3 = tmp();
        flag = flag3;
        num = sum;
        iter2 = iter3;
        flag2 = flag3;
        num2 = sum;
      } while (!iter3.done);
    }
    if (flag2) {
      flag2 = num2 === categoryEmojis.length;
    }
    return flag2;
  },
  isEmojiFilteredOrLocked(intention) {
    const self = this;
    return this.isEmojiFiltered(intention) || self.isEmojiPremiumLocked(intention);
  },
  isEmojiDisabled(intention) {
    return set1.has(getEmojiUnavailableReason(intention));
  },
  isFileTooBig(size) {
    return size.size > 2097152;
  },
  isDataTooBig(arg0) {
    return require(1447) /* fit */.dataUriFileSize(arg0) > closure_9;
  }
};
export const countEmoji = function countEmoji(arr) {
  let closure_0 = arg1;
  let c1 = 0;
  let c2 = 0;
  let c3 = 0;
  let c4 = 0;
  let c5 = 0;
  let c6 = 0;
  const item = arr.forEach((id) => {
    if (null != id.id) {
      if (id.type === callback(table[6]).EmojiTypes.GUILD) {
        if (id.guildId === callback) {
          if (id.managed) {
            closure_4 = closure_4 + 1;
          } else {
            closure_2 = closure_2 + 1;
          }
        } else if (id.managed) {
          closure_5 = closure_5 + 1;
        } else {
          closure_3 = closure_3 + 1;
        }
      }
      if (id.animated) {
        _isNativeReflectConstruct = _isNativeReflectConstruct + 1;
      }
    } else {
      closure_1 = closure_1 + 1;
    }
  });
  return { unicode: c1, custom: c2, customExternal: c3, managed: c4, managedExternal: c5, animated: c6 };
};
export const getEmojiColors = function getEmojiColors() {
  return _getEmojiColors(...arguments);
};
export const getEmojiUrl = function getEmojiUrl(arg0, arg1) {
  let animated;
  let id;
  let num = arg1;
  if (arg1 === undefined) {
    num = 32;
  }
  ({ id, animated } = arg0);
  if (null != id) {
    let obj = { id, size: num };
    let tmp7 = null != animated;
    if (tmp7) {
      tmp7 = animated;
    }
    obj.animated = tmp7;
    let emojiURL = importDefault(1392).getEmojiURL(obj);
    const obj2 = importDefault(1392);
  } else {
    obj = importDefault(7024);
    emojiURL = obj.getURL(tmp);
  }
  return emojiURL;
};
export const getAllEmojiNamesString = function getAllEmojiNamesString(emojiByIdOrName) {
  if ("allNamesString" in emojiByIdOrName) {
    let allNamesString = emojiByIdOrName.allNamesString;
  } else {
    const _HermesInternal = HermesInternal;
    allNamesString = ":" + emojiByIdOrName.name + ":";
  }
  return allNamesString;
};
