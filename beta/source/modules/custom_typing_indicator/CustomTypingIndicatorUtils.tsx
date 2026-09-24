// Module ID: 12139
// Function ID: 12140
// Name: CustomTypingIndicatorUtils
// Dependencies: [5710, 8466, 2045, 5689, 1376, 1078, 1379, 1384, 3716, 4445, 4449, 1397, 1090, 4436, 558, 568, 504, 2]
// Exports: getCustomTypingIndicatorSuggestionMessage, getCustomTypingIndicatorSuggestionPresets, getCustomTypingIndicatorSuggestionWithNameMessage, getRandomCustomTypingIndicatorAnimation, getRandomCustomTypingIndicatorSuggestion, getSurpriseMeEmojiPool, getViewableCustomTypingIndicatorConfig, pickRandomCustomTypingIndicatorEmojis

// Module 12139 (CustomTypingIndicatorUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1090 */;
import CustomTypingIndicatorTypes from "CustomTypingIndicatorTypes" /* 1397 */;
import _modDef3716 from "module_3716" /* 3716 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4445 */;
import EmojiStore from "EmojiStore" /* 5710 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8466 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import SortedGuildStore from "SortedGuildStore" /* 5689 */;
import UserStore from "UserStore" /* 1376 */;

const require = globalThis.__r;

require = fn;
const Permissions = fn(1078).Permissions;
const EmojiIntention = fn(1379).EmojiIntention;
let obj = {};
obj[fn(1384).TypingSuggestion.UNSPECIFIED] = _modDef3716["6Cdy4a"];
obj[fn(1384).TypingSuggestion.YAPPING] = _modDef3716.E5VRaj;
obj[fn(1384).TypingSuggestion.VENTING] = _modDef3716.xmxdPC;
obj[fn(1384).TypingSuggestion.OVERSHARING] = _modDef3716["qGaH/9"];
obj[fn(1384).TypingSuggestion.BARKING] = _modDef3716.M282uk;
obj[fn(1384).TypingSuggestion.BABBLING] = _modDef3716.myNZDT;
obj[fn(1384).TypingSuggestion.DAYDREAMING] = _modDef3716.F7RLTP;
obj[fn(1384).TypingSuggestion.MEOWING] = _modDef3716.EfxyQI;
let obj2 = {};
obj2[fn(1384).TypingSuggestion.UNSPECIFIED] = _modDef3716.kh4K4F;
obj2[fn(1384).TypingSuggestion.YAPPING] = _modDef3716.m9AeqG;
obj2[fn(1384).TypingSuggestion.VENTING] = _modDef3716["SZ0/Qu"];
obj2[fn(1384).TypingSuggestion.OVERSHARING] = _modDef3716.N8cWE8;
obj2[fn(1384).TypingSuggestion.BARKING] = _modDef3716.L5aWEN;
obj2[fn(1384).TypingSuggestion.BABBLING] = _modDef3716.AoBaEw;
obj2[fn(1384).TypingSuggestion.DAYDREAMING] = _modDef3716["3hOLod"];
obj2[fn(1384).TypingSuggestion.MEOWING] = _modDef3716["0Z9/o9"];
let items = [fn(1384).TypingSuggestion.UNSPECIFIED, fn(1384).TypingSuggestion.YAPPING, fn(1384).TypingSuggestion.VENTING, fn(1384).TypingSuggestion.OVERSHARING, fn(1384).TypingSuggestion.BARKING, fn(1384).TypingSuggestion.BABBLING, fn(1384).TypingSuggestion.DAYDREAMING, fn(1384).TypingSuggestion.MEOWING];
let items1 = [fn(1384).TypingIndicatorAnimation.PULSE, fn(1384).TypingIndicatorAnimation.RING, fn(1384).TypingIndicatorAnimation.WAVE];
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/CustomTypingIndicatorUtils.tsx");

export const getSurpriseMeEmojiPool = function getSurpriseMeEmojiPool() {
  const categories = UnicodeEmojisDefault.getCategories();
  items = [
    ...categories.flatMap((item) => {
      const byCategory = UnicodeEmojisDefault.getByCategory(item);
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
  HermesBuiltin.arraySpread(flattenedGuildIds.flatMap((item) => {
    usableGuildEmoji = usableGuildEmoji.getUsableGuildEmoji(item);
    const found = usableGuildEmoji.filter((emoji) => {
      obj2 = { emoji, channel: null, guildId: "Array", intention: constants.TYPING_INDICATOR, bypassPremiumEmojiEntitlement: null };
      return null == closure_1_1(closure_1_3[10]).getEmojiUnavailableReason(obj2);
    });
    return found.map((id) => ({ id: id.id, name: id.name, animated: id.animated }));
  }), tmp);
  return items;
};
export const pickRandomCustomTypingIndicatorEmojis = function pickRandomCustomTypingIndicatorEmojis(current) {
  let size;
  closure_0 = current;
  const bound = Math.min(CustomTypingIndicatorTypes.CUSTOM_TYPING_INDICATOR_EMOJI_COUNT, current.length);
  const set = new Set();
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
};
export const getRandomCustomTypingIndicatorAnimation = function getRandomCustomTypingIndicatorAnimation() {
  return items1[Math.floor(Math, Math.random(Math) * items1.length)];
};
export function getCustomTypingIndicatorSuggestionPresets() {
  return items;
}
export const getCustomTypingIndicatorSuggestionMessage = function getCustomTypingIndicatorSuggestionMessage(typingSuggestion) {
  return obj[typingSuggestion];
};
export const getCustomTypingIndicatorSuggestionWithNameMessage = function getCustomTypingIndicatorSuggestionWithNameMessage(suggestion) {
  return obj2[suggestion];
};
export const getRandomCustomTypingIndicatorSuggestion = function getRandomCustomTypingIndicatorSuggestion() {
  return items[Math.floor(Math, Math.random(Math) * items.length)];
};
export const getViewableCustomTypingIndicatorConfig = function getViewableCustomTypingIndicatorConfig(customTypingIndicatorConfig, channel, user, guildEmojis) {
  closure_0 = guildEmojis;
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
            channel = ChannelStore.getChannel(channel.parent_id);
          }
        }
        obj = BigFlagUtilsAll;
        const obj3 = { user, context: null };
        obj3.context = channel;
        let tmp7 = customTypingIndicatorConfig;
        if (!obj.has(obj2.computePermissions(obj3), Permissions.USE_EXTERNAL_EMOJIS)) {
          const obj4 = {};
          const merged = Object.assign(customTypingIndicatorConfig);
          obj4.emojis = [];
          tmp7 = obj4;
        }
        return tmp7;
      } else {
        return customTypingIndicatorConfig;
      }
    }
  }
  return customTypingIndicatorConfig;
};
export const useCurrentCustomTypingIndicatorConfig = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [UserProfileSettingsStore, UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      if (closure_0) {
        let EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2 = obj.getTryItOutChanges().tryItOutCustomTypingIndicatorStyle;
        if (EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2 == null) {
          EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2 = CustomTypingIndicatorTypes.EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
        }
        return EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2;
      } else {
        let EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG = obj.getPendingChanges().pendingCustomTypingIndicatorStyle;
        if (undefined !== EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG) {
          if (EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG == null) {
            EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG = CustomTypingIndicatorTypes.EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
          }
          let typingIndicatorStyle = EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
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
    };
    items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  obj = require("c");
  return require("initialize").useStateFromStores(first, tmp7, tmp8);
}) : ((arg0) => {
  _require = arg0;
  items = [UserProfileSettingsStore, UserStore];
  items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
    if (closure_0) {
      let EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2 = obj.getTryItOutChanges().tryItOutCustomTypingIndicatorStyle;
      if (EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2 == null) {
        EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2 = CustomTypingIndicatorTypes.EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
      }
      return EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG2;
    } else {
      let EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG = obj.getPendingChanges().pendingCustomTypingIndicatorStyle;
      if (undefined !== EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG) {
        if (EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG == null) {
          EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG = CustomTypingIndicatorTypes.EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
        }
        let typingIndicatorStyle = EMPTY_CUSTOM_TYPING_INDICATOR_CONFIG;
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
});
