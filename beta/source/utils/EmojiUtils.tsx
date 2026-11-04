// Module ID: 4964
// Function ID: 4965
// Name: EmojiUtils
// Dependencies: [5, 4965, 4867, 4946, 1383, 1072, 1386, 1385, 4963, 1983, 2047, 4968, 4938, 4970, 1488, 1409, 2]
// Exports: countEmoji, getAllEmojiNamesString, getEmojiColors, getEmojiUrl

// Module 4964 (EmojiUtils)
import Constants from "Constants" /* 1072 */;
import PremiumConstants from "PremiumConstants" /* 1385 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1409 */;
import ImageUtils from "ImageUtils" /* 1488 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1983 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2047 */;
import CreatorMonetizationRestrictionsUtils from "CreatorMonetizationRestrictionsUtils" /* 4938 */;
import EmojiTypes from "EmojiTypes" /* 4963 */;
import RoleSubscriptionEmojiUtils from "RoleSubscriptionEmojiUtils" /* 4968 */;
import EmojiUtilsPlatformedDefault from "EmojiUtilsPlatformed" /* 4970 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import EmojiPackStore from "EmojiPackStore" /* 4965 */;
import ChannelRecord from "ChannelRecord" /* 4867 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import UserStore from "UserStore" /* 1383 */;
import EmojiConstants from "EmojiConstants" /* 1386 */;
import size from "module_2" /* 2 */;

let animated, c1, c2, closure_1, closure_2, closure_3, closure_4, closure_5, closure_6, customExternal, dependencyMap, importDefault, managed, managedExternal;

let EmojiDisabledReasons;
let c10;
let closure_12;
let closure_14;
let closure_15;
let hasOwnProperty;
let metroRequire;
let unpackModuleId;
function getEmojiUnavailableReason(forceIncludeExternalGuilds) {
  let bypassPremiumEmojiEntitlement;
  let channel;
  let emoji;
  let guildId;
  let intention;
  ({ emoji, channel, guildId } = forceIncludeExternalGuilds);
  if (guildId === undefined) {
    let guildId1;
    if (channel != null) {
      guildId1 = channel.getGuildId();
    }
    guildId = guildId1;
  }
  ({ intention, bypassPremiumEmojiEntitlement } = forceIncludeExternalGuilds);
  forceIncludeExternalGuilds = forceIncludeExternalGuilds.forceIncludeExternalGuilds;
  if (emoji.type === EmojiTypes.EmojiTypes.PACK) {
    if (intention !== constants.GUILD_PROFILE) {
      let DISALLOW_CUSTOM;
      if (intention !== constants.NO_CUSTOM_EMOJI) {
        if (closure_15(intention)) {
          let DISALLOW_CUSTOM2;
          if (EmojiPackStore.isPackEmojiUsable(emoji)) {
            let PREMIUM_LOCKED = null;
            const tmp3Result = PremiumTypeUtils;
            if (!tmp3Result.isPremium(UserStore.getCurrentUser(), PremiumTypes.TIER_2)) {
              PREMIUM_LOCKED = EmojiDisabledReasons.PREMIUM_LOCKED;
            }
            DISALLOW_CUSTOM2 = PREMIUM_LOCKED;
          } else {
            DISALLOW_CUSTOM2 = EmojiDisabledReasons.DISALLOW_CUSTOM;
          }
          DISALLOW_CUSTOM = DISALLOW_CUSTOM2;
        } else {
          DISALLOW_CUSTOM = EmojiDisabledReasons.DISALLOW_EXTERNAL;
        }
      }
      return DISALLOW_CUSTOM;
    }
    DISALLOW_CUSTOM = EmojiDisabledReasons.DISALLOW_CUSTOM;
  } else {
    const type3 = emoji.type;
    let flag = true;
    if (EmojiTypes.EmojiTypes.GUILD !== type3) {
      flag = true;
      if (EmojiTypes.EmojiTypes.PACK !== type3) {
        flag = null != emoji.guildId;
      }
    }
    if (flag) {
      if (intention !== constants.GUILD_PROFILE) {
        if (intention !== constants.NO_CUSTOM_EMOJI) {
          const tmp9 = null != channel && hasOwnProperty(channel.type);
          null != channel && metroRequire(channel.type);
          let tmp12 = null != emoji && null != guildId;
          if (tmp12) {
            const type = emoji.type;
            let flag2 = true;
            if (EmojiTypes.EmojiTypes.GUILD !== type) {
              flag2 = true;
              if (EmojiTypes.EmojiTypes.PACK !== type) {
                flag2 = null != emoji.guildId;
              }
            }
            let tmp13 = !flag2;
            if (flag2) {
              tmp13 = guildId === emoji.guildId;
            }
            tmp12 = tmp13;
          }
          if (intention === constants.COMMUNITY_CONTENT) {
            if (tmp12) {
              let DISALLOW_EXTERNAL;
              if (null != emoji.guildId) {
                DISALLOW_EXTERNAL = null;
              }
              return DISALLOW_EXTERNAL;
            }
            DISALLOW_EXTERNAL = EmojiDisabledReasons.DISALLOW_EXTERNAL;
          } else {
            let PREMIUM_LOCKED1;
            if (!closure_15(intention)) {
              let tmp17 = null != emoji && null != guildId;
              if (tmp17) {
                const type2 = emoji.type;
                let flag3 = true;
                if (EmojiTypes.EmojiTypes.GUILD !== type2) {
                  flag3 = true;
                  if (EmojiTypes.EmojiTypes.PACK !== type2) {
                    flag3 = null != emoji.guildId;
                  }
                }
                let tmp18 = !flag3;
                if (flag3) {
                  tmp18 = guildId === emoji.guildId;
                }
                tmp17 = tmp18;
              }
              if (!tmp17) {
                if (!forceIncludeExternalGuilds) {
                  return EmojiDisabledReasons.DISALLOW_EXTERNAL;
                }
              }
            }
            if (tmp9) {
              if (!tmp12) {
                if (!tmp16) {
                  return EmojiDisabledReasons.DISALLOW_EXTERNAL;
                }
              }
            }
            if (null != emoji.id) {
              if (!emoji.available) {
                return EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE;
              }
            }
            const currentUser = UserStore.getCurrentUser();
            if (!bypassPremiumEmojiEntitlement) {
              obj = PremiumUtilsDefault;
              if (!obj.canUseEmojisEverywhere(currentUser)) {
                if (!tmp12) {
                  if (intention === constants.STATUS) {
                    return EmojiDisabledReasons.PREMIUM_LOCKED;
                  } else if (!emoji.managed) {
                    return EmojiDisabledReasons.PREMIUM_LOCKED;
                  }
                }
              }
            }
            const isUnusableRoleSubscriptionEmoji = RoleSubscriptionEmojiUtils.isUnusableRoleSubscriptionEmoji;
            RoleSubscriptionEmojiUtils;
            if (isUnusableRoleSubscriptionEmoji(emoji, guildId)) {
              const tmp3Result5 = CreatorMonetizationRestrictionsUtils;
              PREMIUM_LOCKED1 = tmp3Result5.shouldHideGuildPurchaseEntryPoints(emoji.guildId) ? tmp31.ROLE_SUBSCRIPTION_UNAVAILABLE : tmp31.ROLE_SUBSCRIPTION_LOCKED;
            } else {
              PREMIUM_LOCKED1 = null;
              if (emoji.animated) {
                PREMIUM_LOCKED1 = null;
                if (!bypassPremiumEmojiEntitlement) {
                  PREMIUM_LOCKED1 = null;
                  const obj2 = PremiumUtilsDefault;
                  if (!obj2.canUseAnimatedEmojis(currentUser)) {
                    PREMIUM_LOCKED1 = null;
                    const tmp3Result6 = RoleSubscriptionEmojiUtils;
                    if (!tmp3Result6.isPurchasableRoleSubscriptionEmoji(emoji)) {
                      PREMIUM_LOCKED1 = EmojiDisabledReasons.PREMIUM_LOCKED;
                    }
                  }
                }
              }
            }
            return PREMIUM_LOCKED1;
          }
        }
      }
      return EmojiDisabledReasons.DISALLOW_CUSTOM;
    } else {
      return null;
    }
  }
}
let obj = function _getEmojiColors() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c2 = 1;
            c1 = 1;
            const obj5 = { value: obj3.getEmojiColors(closure_0), done: false };
            obj3 = EmojiUtilsPlatformedDefault;
            return obj5;
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp7) {
        c1 = 3;
        throw tmp7;
      }
    }
  });
  return obj(...arguments);
};
({ isGuildTextChannelType: hasOwnProperty, isGuildVocalChannelType: metroRequire } = ChannelRecord);
const Permissions = Constants.Permissions;
({ EMOJI_MAX_FILESIZE: c10, EMOJI_MAX_LENGTH: unpackModuleId, EMOJI_RE: closure_12, EmojiDisabledReasons } = EmojiConstants);
({ EmojiIntention: closure_14, isExternalEmojiAllowedForIntention: closure_15 } = EmojiConstants);
const PremiumTypes = PremiumConstants.PremiumTypes;
const items = [, ];
({ PREMIUM_LOCKED: arr[0], ROLE_SUBSCRIPTION_LOCKED: arr[1] } = EmojiDisabledReasons);
const set = new Set(items);
const items1 = [...set, EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE, EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE];
const set1 = new Set(items1);
const items2 = [, , , ];
({ DISALLOW_CUSTOM: arr3[0], DISALLOW_EXTERNAL: arr3[1], GUILD_SUBSCRIPTION_UNAVAILABLE: arr3[2], ONLY_GUILD_EMOJIS_ALLOWED: arr3[3] } = EmojiDisabledReasons);
const set2 = new Set(items2);
obj = {
  sanitizeEmojiName(str) {
    let length;
    const replaced = str.replace(authStore2, "");
    const substr = replaced.slice(0, unpackModuleId);
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
  filterUnsupportedEmojis: EmojiUtilsPlatformedDefault.filterUnsupportedEmojis,
  getURL: EmojiUtilsPlatformedDefault.getURL,
  isInternalEmojiForGuildId(type, arg1) {
    let tmp = null != type && null != arg1;
    if (tmp) {
      type = type.type;
      let flag = true;
      const tmp2 = require;
      if (EmojiTypes.EmojiTypes.GUILD !== type) {
        flag = true;
        if (tmp2(4963).EmojiTypes.PACK !== type) {
          flag = null != type.guildId;
        }
      }
      let tmp4 = !flag;
      if (flag) {
        tmp4 = arg1 === type.guildId;
      }
      tmp = tmp4;
    }
    return tmp;
  },
  getEmojiUnavailableReason,
  isCustomEmoji(emoji) {
    const type = emoji.type;
    if (EmojiTypes.EmojiTypes.GUILD !== type) {
      if (EmojiTypes.EmojiTypes.PACK !== type) {
        return null != emoji.guildId;
      }
    }
    return true;
  },
  getEmojiUnavailableReasons(categoryEmojis) {
    let bypassPremiumEmojiEntitlement;
    let channel;
    let guildId;
    let intention;
    categoryEmojis = categoryEmojis.categoryEmojis;
    ({ channel, guildId, intention, bypassPremiumEmojiEntitlement } = categoryEmojis);
    const emojisDisabled = new Set();
    const emojisUnfiltered = [];
    let emojisPremiumLockedCount = 0;
    let emojiNitroLocked = false;
    const iter = categoryEmojis[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      obj = { emoji: nextResult, channel, guildId, intention, bypassPremiumEmojiEntitlement };
      let tmp4 = getEmojiUnavailableReason(obj);
      let tmp5 = tmp4;
      if (null != tmp4) {
        if (!set2.has(tmp5)) {
          let arr = emojisUnfiltered.push(tmp2);
        }
        if (set1.has(tmp5)) {
          if (null != tmp2.id) {
            let addResult = emojisDisabled.add(tmp2.id);
          }
          if (set.has(tmp5)) {
            let tmp19 = emojiNitroLocked;
            if (!tmp19) {
              tmp19 = tmp5 !== EmojiDisabledReasons.PREMIUM_LOCKED;
            }
            if (!tmp19) {
              emojiNitroLocked = true;
            }
            emojisPremiumLockedCount = emojisPremiumLockedCount + 1;
          }
        }
      } else {
        let arr3 = emojisUnfiltered.push(tmp2);
      }
      continue;
    }
    return { emojisDisabled, emojisUnfiltered, emojisPremiumLockedCount, emojiNitroLocked };
  },
  isEmojiFiltered(forceIncludeExternalGuilds) {
    return set2.has(getEmojiUnavailableReason(forceIncludeExternalGuilds));
  },
  isEmojiPremiumLocked(forceIncludeExternalGuilds) {
    return set.has(getEmojiUnavailableReason(forceIncludeExternalGuilds));
  },
  isEmojiCategoryNitroLocked(categoryEmojis) {
    let channel;
    let guildId;
    let intention;
    categoryEmojis = categoryEmojis.categoryEmojis;
    let flag = false;
    let num = 0;
    ({ channel, guildId, intention } = categoryEmojis);
    const tmp = categoryEmojis[Symbol.iterator]();
    while (tmp !== undefined) {
      obj = { emoji: tmp2, channel, intention, guildId };
      let tmp4 = getEmojiUnavailableReason(obj);
      if (tmp4 === EmojiDisabledReasons.PREMIUM_LOCKED) {
        flag = true;
        num = num + 1;
      } else if (tmp5 === tmp6.GUILD_SUBSCRIPTION_UNAVAILABLE) {
        num = num + 1;
      }
      continue;
    }
    if (flag) {
      flag = num === categoryEmojis.length;
    }
    return flag;
  },
  isEmojiFilteredOrLocked(forceIncludeExternalGuilds) {
    const self = this;
    const tmp = this.isEmojiFiltered(forceIncludeExternalGuilds) || self.isEmojiPremiumLocked(forceIncludeExternalGuilds);
    return tmp;
  },
  isEmojiDisabled(forceIncludeExternalGuilds) {
    return set1.has(getEmojiUnavailableReason(forceIncludeExternalGuilds));
  },
  isFileTooBig(size) {
    return size.size > 2097152;
  },
  isDataTooBig(base64) {
    obj = ImageUtils;
    return obj.dataUriFileSize(base64) > authStore;
  }
};
const result = size.fileFinishedImporting("utils/EmojiUtils.tsx");

export default obj;
export function countEmoji(arr, arg1) {
  let closure_0 = arg1;
  importDefault = 0;
  dependencyMap = 0;
  customExternal = 0;
  managed = 0;
  managedExternal = 0;
  animated = 0;
  const item = arr.forEach((id) => {
    if (null != id.id) {
      const type = id.type;
      const tmp2 = require;
      if (EmojiTypes.EmojiTypes.GUILD === type) {
        if (id.guildId === closure_0) {
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
      } else if (tmp2(4963).EmojiTypes.PACK === type) {
        closure_3 = closure_3 + 1;
      }
      if (id.animated) {
        closure_6 = closure_6 + 1;
      }
    } else {
      closure_1 = closure_1 + 1;
    }
  });
  return { unicode: importDefault, custom: dependencyMap, customExternal, managed, managedExternal, animated };
}
export function getEmojiColors() {
  return obj(...arguments);
}
export function getEmojiUrl(arg0, arg1) {
  let emojiURL;
  let id;
  let num = arg1;
  if (arg1 === undefined) {
    num = 32;
  }
  ({ id, animated } = arg0);
  if (null != id) {
    const obj2 = { id, size: num, animated };
    const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
    AvatarUtilsDefault;
    if (animated == null) {
      animated = false;
    }
    emojiURL = getEmojiURL(obj2);
  } else {
    obj = EmojiUtilsPlatformedDefault;
    emojiURL = obj.getURL(tmp);
  }
  return emojiURL;
}
export function getAllEmojiNamesString(emojiByIdOrName) {
  let allNamesString;
  if ("allNamesString" in emojiByIdOrName) {
    allNamesString = emojiByIdOrName.allNamesString;
  } else {
    const _HermesInternal = HermesInternal;
    allNamesString = ":" + emojiByIdOrName.name + ":";
  }
  return allNamesString;
}
