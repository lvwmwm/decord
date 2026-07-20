// Module ID: 3773
// Function ID: 29015
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: countEmoji, getAllEmojiNamesString, getEmojiColors, getEmojiUrl

// Module 3773 (_createForOfIteratorHelperLoose)
let EmojiDisabledReasons;
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
function isCustomEmoji(emoji) {
  let tmp = emoji.type === arg1(dependencyMap[6]).EmojiTypes.GUILD;
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
          const currentUser = currentUser.getCurrentUser();
          if (!obj.canUseEmojisEverywhere(currentUser)) {
            if (!tmp10) {
              if (intention === constants.STATUS) {
                return EmojiDisabledReasons.PREMIUM_LOCKED;
              } else if (!emoji.managed) {
                return EmojiDisabledReasons.PREMIUM_LOCKED;
              }
            }
          }
          const obj = importDefault(dependencyMap[7]);
          let tmp28;
          if (null != guildId) {
            tmp28 = guildId;
          }
          if (obj2.isUnusableRoleSubscriptionEmoji(emoji, tmp28)) {
            arg1(dependencyMap[9]).shouldHideGuildPurchaseEntryPoints(emoji.guildId) ? EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE : EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED;
            const obj5 = arg1(dependencyMap[9]);
          } else {
            let PREMIUM_LOCKED = null;
            if (emoji.animated) {
              PREMIUM_LOCKED = null;
              if (!obj3.canUseAnimatedEmojis(currentUser)) {
                PREMIUM_LOCKED = null;
                if (!obj4.isPurchasableRoleSubscriptionEmoji(emoji)) {
                  PREMIUM_LOCKED = EmojiDisabledReasons.PREMIUM_LOCKED;
                }
                const obj4 = arg1(dependencyMap[8]);
              }
              const obj3 = importDefault(dependencyMap[7]);
            }
            return PREMIUM_LOCKED;
          }
          const obj2 = arg1(dependencyMap[8]);
        }
      }
    }
    return EmojiDisabledReasons.DISALLOW_CUSTOM;
  } else {
    return null;
  }
}
async function _getEmojiColors(arg0, arg1) {
  return yield callback(closure_2[10]).getEmojiColors(arg0);
}
let closure_3 = importDefault(dependencyMap[0]);
({ isGuildTextChannelType: closure_4, isGuildVocalChannelType: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
const Permissions = arg1(dependencyMap[4]).Permissions;
const tmp3 = arg1(dependencyMap[5]);
({ EMOJI_MAX_FILESIZE: closure_9, EMOJI_MAX_LENGTH: closure_10, EMOJI_RE: closure_11, EmojiDisabledReasons } = tmp3);
({ EmojiIntention: closure_13, isExternalEmojiAllowedForIntention: closure_14 } = tmp3);
const items = [, ];
({ PREMIUM_LOCKED: arr[0], ROLE_SUBSCRIPTION_LOCKED: arr[1] } = EmojiDisabledReasons);
const set = new Set(items);
const items1 = [...set, EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE, EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE];
const set1 = new Set(items1);
const items2 = [, , , ];
({ DISALLOW_CUSTOM: arr3[0], DISALLOW_EXTERNAL: arr3[1], GUILD_SUBSCRIPTION_UNAVAILABLE: arr3[2], ONLY_GUILD_EMOJIS_ALLOWED: arr3[3] } = EmojiDisabledReasons);
const set2 = new Set(items2);
const tmp2 = arg1(dependencyMap[1]);
const obj = {
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
  filterUnsupportedEmojis: importDefault(dependencyMap[10]).filterUnsupportedEmojis,
  getURL: importDefault(dependencyMap[10]).getURL,
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
        let tmp2 = closure_22;
        let obj = { emoji: value, channel, guildId, intention };
        let tmp3 = closure_22(obj);
        if (null != tmp3) {
          let tmp7 = closure_17;
          if (!closure_17.has(tmp3)) {
            let arr = items.push(value);
          }
          let tmp9 = closure_16;
          let tmp5 = num;
          let tmp6 = flag;
          if (closure_16.has(tmp3)) {
            if (null != value.id) {
              let addResult = set.add(value.id);
            }
            let tmp11 = closure_15;
            let sum = num;
            let tmp13 = flag;
            if (closure_15.has(tmp3)) {
              let tmp14 = flag;
              if (!flag) {
                let tmp15 = closure_12;
                tmp14 = tmp3 !== closure_12.PREMIUM_LOCKED;
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
        let tmp2 = closure_22;
        let obj = { emoji: iter2.value, channel, intention, guildId };
        let tmp3 = closure_22(obj);
        let tmp4 = closure_12;
        if (tmp3 === closure_12.PREMIUM_LOCKED) {
          let sum = num + 1;
          let flag3 = true;
        } else {
          let tmp5 = closure_12;
          flag3 = flag;
          sum = num;
          if (tmp3 === closure_12.GUILD_SUBSCRIPTION_UNAVAILABLE) {
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
    return arg1(dependencyMap[11]).dataUriFileSize(arg0) > closure_9;
  }
};
const result = arg1(dependencyMap[13]).fileFinishedImporting("utils/EmojiUtils.tsx");

export default obj;
export const countEmoji = function countEmoji(arr) {
  let closure_1 = 0;
  let closure_2 = 0;
  let closure_3 = 0;
  let closure_4 = 0;
  let closure_5 = 0;
  let closure_6 = 0;
  const item = arr.forEach((id) => {
    if (null != id.id) {
      if (id.type === arg1(closure_2[6]).EmojiTypes.GUILD) {
        if (id.guildId === arg1) {
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
        closure_6 = closure_6 + 1;
      }
    } else {
      closure_1 = closure_1 + 1;
    }
  });
  return { unicode: closure_1, custom: closure_2, customExternal: closure_3, managed: closure_4, managedExternal: closure_5, animated: closure_6 };
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
    let emojiURL = importDefault(dependencyMap[12]).getEmojiURL(obj);
    const obj2 = importDefault(dependencyMap[12]);
  } else {
    obj = importDefault(dependencyMap[10]);
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
