// Module ID: 13683
// Function ID: 13684
// Name: CustomTypingIndicatorUtils
// Dependencies: [6790, 8723, 4858, 6766, 1384, 1072, 1387, 1392, 3867, 4955, 4959, 1406, 1084, 4946, 504, 2]
// Exports: getCustomTypingIndicatorSuggestionMessage, getCustomTypingIndicatorSuggestionPresets, getCustomTypingIndicatorSuggestionWithNameMessage, getRandomCustomTypingIndicatorAnimation, getRandomCustomTypingIndicatorSuggestion, getSurpriseMeEmojiPool, getViewableCustomTypingIndicatorConfig, pickRandomCustomTypingIndicatorEmojis, useCurrentCustomTypingIndicatorConfig

// Module 13683 (CustomTypingIndicatorUtils)
import Constants from "Constants" /* 1072 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1084 */;
import EmojiConstants from "EmojiConstants" /* 1387 */;
import user2 from "user" /* 1392 */;
import CustomTypingIndicatorTypes from "CustomTypingIndicatorTypes" /* 1406 */;
import _modDef3867 from "module_3867" /* 3867 */;
import PermissionUtilsAll from "PermissionUtils" /* 4946 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4955 */;
import EmojiStore from "EmojiStore" /* 6790 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8723 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import SortedGuildStore from "SortedGuildStore" /* 6766 */;
import UserStore from "UserStore" /* 1384 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set, usableGuildEmoji;

const Permissions = Constants.Permissions;
const EmojiIntention = EmojiConstants.EmojiIntention;
let obj = {};
obj[user2.TypingSuggestion.UNSPECIFIED] = _modDef3867["6Cdy4a"];
obj[user2.TypingSuggestion.YAPPING] = _modDef3867.E5VRaj;
obj[user2.TypingSuggestion.VENTING] = _modDef3867.xmxdPC;
obj[user2.TypingSuggestion.OVERSHARING] = _modDef3867["qGaH/9"];
obj[user2.TypingSuggestion.BARKING] = _modDef3867.M282uk;
obj[user2.TypingSuggestion.BABBLING] = _modDef3867.myNZDT;
obj[user2.TypingSuggestion.DAYDREAMING] = _modDef3867.F7RLTP;
obj[user2.TypingSuggestion.MEOWING] = _modDef3867.EfxyQI;
let obj2 = {};
obj2[user2.TypingSuggestion.UNSPECIFIED] = _modDef3867.kh4K4F;
obj2[user2.TypingSuggestion.YAPPING] = _modDef3867.m9AeqG;
obj2[user2.TypingSuggestion.VENTING] = _modDef3867["SZ0/Qu"];
obj2[user2.TypingSuggestion.OVERSHARING] = _modDef3867.N8cWE8;
obj2[user2.TypingSuggestion.BARKING] = _modDef3867.L5aWEN;
obj2[user2.TypingSuggestion.BABBLING] = _modDef3867.AoBaEw;
obj2[user2.TypingSuggestion.DAYDREAMING] = _modDef3867["3hOLod"];
obj2[user2.TypingSuggestion.MEOWING] = _modDef3867["0Z9/o9"];
let items = [user2.TypingSuggestion.UNSPECIFIED, user2.TypingSuggestion.YAPPING, user2.TypingSuggestion.VENTING, user2.TypingSuggestion.OVERSHARING, user2.TypingSuggestion.BARKING, user2.TypingSuggestion.BABBLING, user2.TypingSuggestion.DAYDREAMING, user2.TypingSuggestion.MEOWING];
let items1 = [user2.TypingIndicatorAnimation.PULSE, user2.TypingIndicatorAnimation.RING, user2.TypingIndicatorAnimation.WAVE];
let size = size_mod;
const result = size.fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorUtils.tsx");

export function getSurpriseMeEmojiPool() {
  obj = UnicodeEmojisDefault;
  const categories = obj.getCategories();
  items = [
    ...categories.flatMap((item) => {
      obj = UnicodeEmojisDefault;
      const byCategory = obj.getByCategory(item);
      let mapped;
      if (byCategory != null) {
        mapped = byCategory.map((name) => ({ name: name.surrogates }));
      }
      if (mapped == null) {
        mapped = [];
      }
      return mapped;
    })
  ];
  const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
  HermesBuiltin.arraySpread(items, flattenedGuildIds.flatMap((item) => {
    usableGuildEmoji = usableGuildEmoji.getUsableGuildEmoji(item);
    const found = usableGuildEmoji.filter((emoji) => {
      obj2 = { emoji, channel: null, guildId: "Array", intention: constants.TYPING_INDICATOR, bypassPremiumEmojiEntitlement: null };
      obj = closure_1_1(closure_1_3[10]);
      return null == obj.getEmojiUnavailableReason(obj2);
    });
    return found.map((id) => ({ id: id.id, name: id.name, animated: id.animated }));
  }), tmp2);
  return items;
}
export function pickRandomCustomTypingIndicatorEmojis(current) {
  let closure_0 = current;
  const bound = Math.min(CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT, current.length);
  set = new Set();
  if (set.size < bound) {
    do {
      let _Math = Math;
      let _Math2 = Math;
      let addResult = set.add(Math.floor(Math.random() * current.length));
      size = set.size;
    } while (size < bound);
  }
  items = [...set];
  return items.map((item) => closure_0[item]);
}
export function getRandomCustomTypingIndicatorAnimation() {
  return items1[Math.floor(Math, Math.random(Math) * items1.length)];
}
export function getCustomTypingIndicatorSuggestionPresets() {
  return items;
}
export function getCustomTypingIndicatorSuggestionMessage(typingSuggestion) {
  let tmp2 = obj[typingSuggestion];
  if (tmp2 == null) {
    tmp2 = tmp[user2.TypingSuggestion.UNSPECIFIED];
  }
  return tmp2;
}
export function getCustomTypingIndicatorSuggestionWithNameMessage(suggestion) {
  let tmp2 = obj2[suggestion];
  if (tmp2 == null) {
    tmp2 = tmp[user2.TypingSuggestion.UNSPECIFIED];
  }
  return tmp2;
}
export function getRandomCustomTypingIndicatorSuggestion() {
  return items[Math.floor(Math, Math.random(Math) * items.length)];
}
export function getViewableCustomTypingIndicatorConfig(customTypingIndicatorConfig, channel, user, guildEmojis) {
  let closure_0 = guildEmojis;
  if (null != channel.getGuildId()) {
    if (0 !== customTypingIndicatorConfig.emojis.length) {
      const emojis = customTypingIndicatorConfig.emojis;
      if (emojis.some((id) => {
        let tmp = null != id.id;
        if (tmp) {
          let tmp3;
          if (closure_0 != null) {
            tmp3 = tmp2[id.id];
          }
          tmp = null == tmp3;
        }
        return tmp;
      })) {
        channel = null;
        if (channel.isThread()) {
          channel = null;
          if (null != channel.parent_id) {
            const tmp2 = ChannelStore;
            channel = ChannelStore.getChannel(channel.parent_id);
          }
        }
        let tmp3 = user;
        const has = BigFlagUtilsAll.has;
        BigFlagUtilsAll;
        obj = { user, context: channel };
        const computePermissions = PermissionUtilsAll.computePermissions;
        PermissionUtilsAll;
        let tmp9 = customTypingIndicatorConfig;
        if (!has(computePermissions(obj), Permissions.USE_EXTERNAL_EMOJIS)) {
          obj2 = { emojis: [] };
          const merged = Object.assign(customTypingIndicatorConfig);
          tmp9 = obj2;
        }
        return tmp9;
      } else {
        return customTypingIndicatorConfig;
      }
    }
  }
  return customTypingIndicatorConfig;
}
export function useCurrentCustomTypingIndicatorConfig(isTryItOut) {
  _require = isTryItOut;
  obj = require("get initialized");
  items = [UserProfileSettingsStore, UserStore];
  items1 = [isTryItOut];
  return obj.useStateFromStores(items, () => {
    if (isTryItOut) {
      let EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2 = obj.getTryItOutChanges().tryItOutCustomTypingIndicatorStyle;
      if (EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2 == null) {
        EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2 = CustomTypingIndicatorTypes.EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
      }
      return EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2;
    } else {
      let typingIndicatorStyle;
      let EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG = obj.getPendingChanges().pendingCustomTypingIndicatorStyle;
      if (undefined !== EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG) {
        if (EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG == null) {
          EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG = CustomTypingIndicatorTypes.EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
        }
        typingIndicatorStyle = EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
      } else {
        const currentUser = UserStore.getCurrentUser();
        typingIndicatorStyle = undefined;
        if (currentUser != null) {
          typingIndicatorStyle = currentUser.typingIndicatorStyle;
        }
        if (typingIndicatorStyle == null) {
          typingIndicatorStyle = CustomTypingIndicatorTypes.EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
        }
      }
      return typingIndicatorStyle;
    }
  }, items1);
}
