// Module ID: 9748
// Function ID: 9749
// Name: EmojiPickerUtils
// Dependencies: [19, 5771, 2067, 5750, 1372, 5775, 1074, 1375, 1218, 1374, 1255, 9749, 5016, 9741, 9744, 9745, 504, 1970, 9750, 1115, 4487, 4483, 1241, 12, 1091, 2026, 2]
// Exports: getAriaIdForEmojiCategory, getEmojiSubCategory, getSearchPlaceholder, getStringForEmojiCategory, getUnicodeEmojiCategories, initializeSearch, trackEmojiFavorited, trackEmojiFocus, trackEmojiSearchEmpty, trackEmojiSearchResultsViewed, trackEmojiSearchSelect, trackEmojiSearchStart, trackEmojiSelect, trackPremiumSettingsPaneOpened, useEmojiCategories, useEmojiInPriorityOrder, useEmojiSearchResults, useFavoriteEmojis, useFrequentlyUsedEmojis, useFrequentlyUsedReactionEmojis, useIsFavoriteEmoji

// Module 9748 (EmojiPickerUtils)
import DurationsDefault from "Durations" /* 1091 */;
import intl14 from "intl" /* 1115 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1218 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import v1 from "v1" /* 1255 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import UnicodeEmojisDefault from "UnicodeEmojis" /* 4483 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4487 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5016 */;
import ExpressionPickerGridStores from "ExpressionPickerGridStores" /* 9749 */;
import react_mod from "react" /* 19 */;
import EmojiStore from "EmojiStore" /* 5771 */;
import GuildStore from "GuildStore" /* 2067 */;
import SortedGuildStore from "SortedGuildStore" /* 5750 */;
import UserStore from "UserStore" /* 1372 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 5775 */;
import Constants from "Constants" /* 1074 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let map1;
let metroImportAll;
let unpackModuleId;
let react = react_mod;
({ EmojiCategories: metroImportAll, EmojiCategoryTypes: c9, EmojiSubCategory: c10 } = EmojiPickerConstants);
({ AnalyticEvents: unpackModuleId, AnalyticsPages: closure_12, AnalyticsSections: map1, AutoCompleteResultTypes: closure_14, SearchTypes: closure_15 } = Constants);
({ isExternalEmojiAllowedForIntention: closure_16, EmojiDisabledReasons: closure_17, EmojiIntention: closure_18 } = EmojiConstants);
const ExpressionPickerViewType = ExpressionPickerConstants.ExpressionPickerViewType;
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
const re21 = /-/g;
const throttleResult = module_12.throttle((emojiSuggestions) => {
  let results;
  emojiSuggestions = emojiSuggestions.emojiSuggestions;
  const analyticsLocation = emojiSuggestions.analyticsLocation;
  const obj = { suggestion_type: constants6.EMOJI, suggestion_quantity: emojiSuggestions.results.length, custom_quantity: results.filter((emoji) => null != emoji.emoji.id).length, load_id: emojiSuggestions.loadId, location: analyticsLocation };
  results = emojiSuggestions.results;
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const AUTO_SUGGEST_DISPLAYED = unpackModuleId.AUTO_SUGGEST_DISPLAYED;
  AppAnalyticsUtilsDefault;
  trackWithMetadata(AUTO_SUGGEST_DISPLAYED, obj);
}, DurationsDefault.Millis.HALF_SECOND, { leading: false, trailing: true });
let result = size.fileFinishedImporting("modules/emoji_picker/EmojiPickerUtils.tsx");

export const initializeSearch = function initializeSearch(intention) {
  let EMOJI;
  intention = intention.intention;
  const _location = intention.location;
  const obj = v1;
  const str = obj.v4();
  const replaced = str.replace(re21, "");
  const EmojiPickerStore = ExpressionPickerGridStores.EmojiPickerStore;
  EmojiPickerStore.setAnalyticsId(replaced);
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const SEARCH_OPENED = unpackModuleId.SEARCH_OPENED;
  AppAnalyticsUtilsDefault;
  if (constants8.REACTION === intention) {
    EMOJI = constants7.EMOJI_REACTION;
  } else if (tmp4.AUTO_SUGGESTION === intention) {
    EMOJI = constants7.EMOJI_AUTO_SUGGESTION;
  } else {
    EMOJI = constants7.EMOJI;
  }
  trackWithMetadata(SEARCH_OPENED, { search_type: EMOJI, load_id: replaced, location: _location });
};
export const useEmojiCategories = function useEmojiCategories(CHAT, channel, guildId, arg3, bypassPremiumEmojiEntitlement) {
  let newlyAddedEmojis;
  let topEmojis;
  _require = CHAT;
  importDefault = channel;
  let tmp = guildId;
  if (guildId === undefined) {
    let tmp2 = null;
    guildId = undefined;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    tmp = guildId;
  }
  guildId = tmp;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let flag2 = bypassPremiumEmojiEntitlement;
  if (bypassPremiumEmojiEntitlement === undefined) {
    flag2 = false;
  }
  let obj = require("TopEmojisUtils");
  const result = obj.maybeFetchTopEmojisByGuild(tmp);
  let tmp5 = closure_16(CHAT);
  let closure_5 = tmp5;
  guildId = tmp;
  const effect = flag.useEffect(() => {
    const FrecencyUserSettingsActionCreators = CHAT(guildId[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  let obj2 = require("get initialized");
  let items = [flag2];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items, () => {
    const disambiguatedEmojiContext = flag2.getDisambiguatedEmojiContext(guildId);
    return disambiguatedEmojiContext.getFrequentlyUsedEmojisWithoutFetchingLatest();
  });
  guildId = tmp;
  const effect1 = flag.useEffect(() => {
    const FrecencyUserSettingsActionCreators = CHAT(guildId[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  let obj3 = require("get initialized");
  let items1 = [flag2];
  const stateFromStoresArray1 = obj3.useStateFromStoresArray(items1, () => {
    const disambiguatedEmojiContext = flag2.getDisambiguatedEmojiContext(guildId);
    return disambiguatedEmojiContext.getFrequentlyUsedReactionEmojisWithoutFetchingLatest();
  });
  guildId = tmp;
  const effect2 = flag.useEffect(() => {
    const FrecencyUserSettingsActionCreators = CHAT(guildId[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  let obj4 = require("get initialized");
  const items2 = [flag2];
  const stateFromStoresArray2 = obj4.useStateFromStoresArray(items2, () => flag2.getDisambiguatedEmojiContext(guildId).favoriteEmojisWithoutFetchingLatest);
  let tmp12 = require("useTopAndNewlyAddedEmojis")(tmp, CHAT);
  ({ topEmojis, newlyAddedEmojis } = tmp12);
  const allEmojis = require("useEmojiHotrail")({ topEmojis, newlyAddedEmojis }).allEmojis;
  let obj5 = require("get initialized");
  const items3 = [flag2];
  const items4 = [tmp];
  const stateFromStores = obj5.useStateFromStores(items3, () => EmojiStore.getDisambiguatedEmojiContext(guildId), items4);
  let obj6 = require("get initialized");
  const items5 = [closure_5];
  const stateFromStores1 = obj6.useStateFromStores(items5, () => {
    const guild = GuildStore.getGuild(guildId);
    let name;
    if (guild != null) {
      name = guild.name;
    }
    return name;
  });
  let obj7 = require("get initialized");
  const items6 = [stateFromStoresArray1];
  const stateFromStores2 = obj7.useStateFromStores(items6, () => stateFromStoresArray1.getCurrentUser());
  let obj8 = require("PremiumTypeUtils");
  const isPremiumResult = obj8.isPremium(stateFromStores2);
  let c12 = isPremiumResult;
  let obj9 = require("SoundmojiSendingExperiment");
  const soundmojiEmojiPickerSectionExperiment = obj9.useSoundmojiEmojiPickerSectionExperiment({ location: "useEmojiCategories" });
  const items7 = [stateFromStores, channel, tmp, CHAT, isPremiumResult, allEmojis, stateFromStores1, stateFromStoresArray1, stateFromStoresArray, stateFromStoresArray2, tmp5, soundmojiEmojiPickerSectionExperiment, flag, flag2];
  return flag.useMemo(() => {
    let bypassPremiumEmojiEntitlement;
    let intention;
    let intl;
    function getEmojiUnavailableReasons(categoryEmojis) {
      const obj = channel(guildId[20]);
      const obj2 = { categoryEmojis, channel, guildId: getEmojiUnavailableReasons, intention, bypassPremiumEmojiEntitlement };
      return obj.getEmojiUnavailableReasons(obj2);
    }
    CHAT = stateFromStores.getGroupedCustomEmoji();
    channel = [];
    let obj = { type: allEmojis.SOUNDMOJI, name: intl.string(CHAT(guildId[19]).t.f0Ezmv), id: stateFromStoresArray2.SOUNDMOJI, isNitroLocked: false };
    const flattenedGuildIds = stateFromStoresArray.getFlattenedGuildIds();
    intl = CHAT(guildId[19]).intl;
    const tmp2 = ((flattenedGuildIds, GUILD) => {
      let emojisDisabled;
      let emojisPremiumLockedCount;
      let tmp10;
      const iter = flattenedGuildIds[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let guild;
        let tmp4 = constants;
        if (GUILD === constants.GUILD) {
          guild = GuildStore.getGuild(tmp2);
        }
        if (null != guild) {
          let value = intention.get(guild.id);
          let arr = value;
          if (null != value) {
            if (0 !== arr.length) {
              let tmp32 = getEmojiUnavailableReasons(arr);
              ({ emojisDisabled, emojisPremiumLockedCount } = tmp32);
              if (0 !== tmp32.emojisUnfiltered.length) {
                let hiddenEmojiIds = EmojiStore.getHiddenEmojiIds(guild.id);
                let tmp16 = null;
                if (GUILD === tmp4.GUILD) {
                  let obj = { type: tmp4.GUILD, guild, isNitroLocked: tmp10, emojis: arr, emojisDisabled, emojisHidden: hiddenEmojiIds };
                  tmp10 = !c12 && tmp33;
                  if (tmp10) {
                    tmp10 = emojisPremiumLockedCount === arr.length;
                  }
                  tmp16 = obj;
                }
                if (null != tmp16) {
                  if (guild.id === guildId) {
                    let arr3 = channel.unshift(tmp16);
                  } else {
                    let arr4 = channel.push(tmp16);
                  }
                }
              }
            }
          }
        }
        continue;
      }
    })(flattenedGuildIds, allEmojis.GUILD);
    const categories = flag2.categories;
    let tmp4 = soundmojiEmojiPickerSectionExperiment;
    if (tmp4) {
      let tmp5 = flag;
      if (tmp5) {
        let items = [obj];
        let tmp6 = items;
      }
      return tmp3((arr, id) => {
        let intl;
        let intl2;
        let intl3;
        let obj6;
        if (id === metroImportAll.TOP_GUILD_EMOJI) {
          const obj3 = { categoryEmojis: allEmojis, channel, guildId, intention, bypassPremiumEmojiEntitlement: flag2 };
          const obj8 = EmojiUtilsDefault;
          const emojiUnavailableReasons = obj8.getEmojiUnavailableReasons(obj3);
          const emojisUnfiltered = emojiUnavailableReasons.emojisUnfiltered;
          if (null != emojisUnfiltered) {
            if (0 !== emojisUnfiltered.length) {
              const push4 = arr.push;
              const obj4 = { type: constants.TOP_GUILD_EMOJI, id, name: intl3.formatToPlainString(intl14.t.W6Wi1X, obj6), isNitroLocked: false, emojis: emojisUnfiltered, emojisDisabled: tmp50 };
              intl3 = intl14.intl;
              obj6 = { guildName: stateFromStores1 };
              push4(obj4);
            }
          }
          return arr;
        } else if (id === metroImportAll.RECENT) {
          const items = [, ];
          ({ REACTION: arr4[0], DEFAULT_REACT_EMOJI: arr4[1] } = closure_18);
          const obj7 = { categoryEmojis: items.includes(intention) ? stateFromStoresArray1 : stateFromStoresArray, channel, guildId, intention, bypassPremiumEmojiEntitlement: flag2 };
          const obj5 = EmojiUtilsDefault;
          const emojiUnavailableReasons1 = obj5.getEmojiUnavailableReasons(obj7);
          const emojisUnfiltered1 = emojiUnavailableReasons1.emojisUnfiltered;
          if (null != emojisUnfiltered1) {
            if (0 !== emojisUnfiltered1.length) {
              const push3 = arr.push;
              const obj9 = { type: constants.RECENT, id, name: intl2.string(intl14.t["5TvaSm"]), isNitroLocked: false, emojis: emojisUnfiltered1, emojisDisabled: tmp37 };
              intl2 = intl14.intl;
              push3(obj9);
            }
          }
          return arr;
        } else if (id === metroImportAll.FAVORITES) {
          const obj10 = { categoryEmojis: stateFromStoresArray2, channel, guildId, intention, bypassPremiumEmojiEntitlement: flag2 };
          const obj2 = EmojiUtilsDefault;
          const emojiUnavailableReasons2 = obj2.getEmojiUnavailableReasons(obj10);
          const emojisUnfiltered2 = emojiUnavailableReasons2.emojisUnfiltered;
          if (null != emojisUnfiltered2) {
            if (0 !== emojisUnfiltered2.length) {
              const push2 = arr.push;
              const obj11 = { type: constants.FAVORITES, id, name: intl.string(intl14.t.y3LQCG), isNitroLocked: false, emojis: emojisUnfiltered2, emojisDisabled: tmp22 };
              intl = intl14.intl;
              push2(obj11);
            }
          }
          return arr;
        } else if (id === metroImportAll.CUSTOM) {
          let found = channel;
          arr = channel;
          if (!closure_5) {
            found = arr.filter((type) => {
              if (type.type === constants.GUILD) {
                flag = type.guild.id === getEmojiUnavailableReasons;
              } else {
                type = type.type;
                flag = false;
              }
              return flag;
            });
          }
          const push = arr.push;
          const items1 = [];
          HermesBuiltin.arraySpread(items1, found, 0);
          HermesBuiltin.apply(push, items1, arr);
        } else {
          const obj = { type: constants.UNICODE, id, name: id, isNitroLocked: false };
          arr.push(obj);
        }
        return arr;
      }, []);
    }
  }, items7);
};
export const getUnicodeEmojiCategories = function getUnicodeEmojiCategories() {
  const obj = UnicodeEmojisDefault;
  const categories = obj.getCategories();
  return categories.map((id) => ({ type: constants.UNICODE, id, name: id, isNitroLocked: false }));
};
export const trackPremiumSettingsPaneOpened = function trackPremiumSettingsPaneOpened(getGuildId) {
  let CUSTOM_STATUS_MODAL;
  let guildId;
  if (getGuildId != null) {
    guildId = getGuildId.getGuildId();
  }
  const obj = { location_page: null != guildId ? constants.GUILD_CHANNEL : constants.DM_CHANNEL, location_section: CUSTOM_STATUS_MODAL };
  const track = AnalyticsUtilsDefault.track;
  const PREMIUM_PROMOTION_OPENED = unpackModuleId.PREMIUM_PROMOTION_OPENED;
  AnalyticsUtilsDefault;
  if (null != getGuildId) {
    CUSTOM_STATUS_MODAL = map1.EMOJI_PICKER_POPOUT;
  } else {
    CUSTOM_STATUS_MODAL = map1.CUSTOM_STATUS_MODAL;
  }
  track(PREMIUM_PROMOTION_OPENED, obj);
};
export const trackEmojiSearchStart = function trackEmojiSearchStart(location, arg1) {
  let EMOJI;
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const SEARCH_STARTED = unpackModuleId.SEARCH_STARTED;
  AppAnalyticsUtilsDefault;
  if (constants8.REACTION === arg1) {
    EMOJI = constants7.EMOJI_REACTION;
  } else if (tmp3.AUTO_SUGGESTION === arg1) {
    EMOJI = constants7.EMOJI_AUTO_SUGGESTION;
  } else {
    EMOJI = constants7.EMOJI;
  }
  const obj = { search_type: EMOJI, location };
  const EmojiPickerStore = ExpressionPickerGridStores.EmojiPickerStore;
  const analyticsId = EmojiPickerStore.getAnalyticsId();
  if (null != analyticsId) {
    let obj3;
    if ("" !== analyticsId) {
      obj3 = { load_id: analyticsId };
      const obj2 = { load_id: analyticsId };
    }
    const merged = Object.assign(obj3);
    trackWithMetadata(SEARCH_STARTED, obj);
  }
  obj3 = {};
};
export const trackEmojiSearchResultsViewed = function trackEmojiSearchResultsViewed(arg0) {
  let EMOJI;
  let _location;
  let intention;
  let loadId;
  let numEmojiLocked;
  let searchQuery;
  let totalResults;
  ({ intention, loadId } = arg0);
  ({ totalResults, numEmojiLocked, location: _location, searchQuery } = arg0);
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const SEARCH_RESULT_VIEWED = unpackModuleId.SEARCH_RESULT_VIEWED;
  AppAnalyticsUtilsDefault;
  if (constants8.REACTION === intention) {
    EMOJI = constants7.EMOJI_REACTION;
  } else if (tmp2.AUTO_SUGGESTION === intention) {
    EMOJI = constants7.EMOJI_AUTO_SUGGESTION;
  } else {
    EMOJI = constants7.EMOJI;
  }
  const obj = { search_type: EMOJI, total_results: totalResults, num_results_locked: numEmojiLocked, query: searchQuery, location: _location };
  if (null != loadId) {
    let obj3;
    if ("" !== loadId) {
      obj3 = { load_id: loadId };
      const obj2 = { load_id: loadId };
    }
    const merged = Object.assign(obj3);
    trackWithMetadata(SEARCH_RESULT_VIEWED, obj);
  }
  obj3 = {};
};
export const trackEmojiSearchSelect = function trackEmojiSearchSelect(arg0) {
  let EMOJI;
  let _location;
  let emoji;
  let emojiSuggestions;
  let index;
  let intention;
  let isLocked;
  let messageId;
  let searchQuery;
  ({ emoji, emojiSuggestions, intention } = arg0);
  let name = emoji.uniqueName;
  ({ searchQuery, isLocked, location: _location, index, messageId } = arg0);
  if (name == null) {
    name = emoji.name;
  }
  if (constants8.REACTION === intention) {
    EMOJI = constants7.EMOJI_REACTION;
  } else if (tmp.AUTO_SUGGESTION === intention) {
    EMOJI = constants7.EMOJI_AUTO_SUGGESTION;
  } else {
    EMOJI = constants7.EMOJI;
  }
  const obj = { search_type: EMOJI, location: _location, expression_guild_id: emoji.guildId, emoji_id: emoji.id, emoji_name: name, is_custom: null != emoji.id, is_animated: emoji.animated, is_locked: isLocked, query: searchQuery, index_num: index };
  let loadId;
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const SEARCH_RESULT_SELECTED = unpackModuleId.SEARCH_RESULT_SELECTED;
  AppAnalyticsUtilsDefault;
  if (emojiSuggestions != null) {
    loadId = emojiSuggestions.loadId;
  }
  if (loadId == null) {
    const EmojiPickerStore = ExpressionPickerGridStores.EmojiPickerStore;
    loadId = EmojiPickerStore.getAnalyticsId();
  }
  if (null != loadId) {
    let obj3;
    if ("" !== loadId) {
      obj3 = { load_id: loadId };
      const obj2 = { load_id: loadId };
    }
    const merged = Object.assign(obj3);
    let length;
    if (emojiSuggestions != null) {
      const results = emojiSuggestions.results;
      if (results != null) {
        length = results.length;
      }
    }
    obj.total_results = length;
    let found;
    if (emojiSuggestions != null) {
      const results1 = emojiSuggestions.results;
      if (results1 != null) {
        const mapped = results1.map((emoji) => emoji.emoji.id);
        found = mapped.filter((item) => null != item);
      }
    }
    obj.emoji_suggestion_ids = found;
    obj.message_id = messageId;
    trackWithMetadata(SEARCH_RESULT_SELECTED, obj);
  }
  obj3 = {};
};
export const trackEmojiSearchEmpty = function trackEmojiSearchEmpty(arg0) {
  let EMOJI;
  let _location;
  let intention;
  let loadId;
  let searchQuery;
  ({ intention, loadId } = arg0);
  ({ location: _location, searchQuery } = arg0);
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const SEARCH_RESULT_EMPTY = unpackModuleId.SEARCH_RESULT_EMPTY;
  AppAnalyticsUtilsDefault;
  if (constants8.REACTION === intention) {
    EMOJI = constants7.EMOJI_REACTION;
  } else if (tmp2.AUTO_SUGGESTION === intention) {
    EMOJI = constants7.EMOJI_AUTO_SUGGESTION;
  } else {
    EMOJI = constants7.EMOJI;
  }
  const obj = { search_type: EMOJI, query: searchQuery, location: _location };
  if (null != loadId) {
    let obj3;
    if ("" !== loadId) {
      obj3 = { load_id: loadId };
      const obj2 = { load_id: loadId };
    }
    const merged = Object.assign(obj3);
    trackWithMetadata(SEARCH_RESULT_EMPTY, obj);
  }
  obj3 = {};
};
export const trackEmojiFocus = function trackEmojiFocus(arg0) {
  let emoji;
  let newlyAddedHighlight;
  let position;
  let subCategory;
  ({ emoji, subCategory } = arg0);
  ({ position, newlyAddedHighlight } = arg0);
  let str;
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  const EXPRESSION_PICKER_EXPRESSION_FOCUS = unpackModuleId.EXPRESSION_PICKER_EXPRESSION_FOCUS;
  AppAnalyticsUtilsDefault;
  if (subCategory != null) {
    str = subCategory.toString();
  }
  const obj = { expression_section: str, newly_added_highlight: newlyAddedHighlight, emoji_id: emoji.id, emoji_name: emoji.name, emoji_animated: emoji.animated, emoji_position: position };
  trackWithMetadata(EXPRESSION_PICKER_EXPRESSION_FOCUS, obj);
};
export const trackEmojiSelect = function trackEmojiSelect(arg0) {
  let EMOJI_PICKER_EMOJI_CLICKED;
  let EXPRESSION_PICKER_EXPRESSION_SELECTED;
  let _location;
  let category;
  let emoji;
  let isBurstReaction;
  let lockedReason;
  let messageId;
  let newlyAddedHighlight;
  let pickerIntention;
  let position;
  let str;
  let subCategory;
  let visibleRowIndex;
  ({ emoji, pickerIntention, subCategory } = arg0);
  ({ location: _location, category } = arg0);
  if (subCategory === undefined) {
    subCategory = constants3.NONE;
  }
  ({ isBurstReaction, lockedReason, position, newlyAddedHighlight, messageId, visibleRowIndex } = arg0);
  if (constants8.REACTION === pickerIntention) {
    EMOJI_PICKER_EMOJI_CLICKED = isBurstReaction ? tmp5.EMOJI_PICKER_SUPER_REACTION_EMOJI_CLICKED : tmp5.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
  } else if (tmp2.STATUS === pickerIntention) {
    EMOJI_PICKER_EMOJI_CLICKED = PremiumUpsellTypes.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
  } else {
    EMOJI_PICKER_EMOJI_CLICKED = PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED;
  }
  let name = emoji.uniqueName;
  if (name == null) {
    name = emoji.name;
  }
  const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
  AppAnalyticsUtilsDefault;
  if (null != lockedReason) {
    EXPRESSION_PICKER_EXPRESSION_SELECTED = unpackModuleId.EXPRESSION_PICKER_LOCKED_EXPRESSION_SELECTED;
  } else {
    EXPRESSION_PICKER_EXPRESSION_SELECTED = unpackModuleId.EXPRESSION_PICKER_EXPRESSION_SELECTED;
  }
  const obj = { type: EMOJI_PICKER_EMOJI_CLICKED, location: _location, expression_id: emoji.id, expression_name: name, expression_guild_id: emoji.guildId, is_custom: null != emoji.id, is_animated: emoji.animated, expression_picker_section: category, expression_section: str, emoji_position: position, newly_added_highlight: newlyAddedHighlight, is_burst: isBurstReaction, message_id: messageId };
  str = undefined;
  if (subCategory != null) {
    str = subCategory.toString();
  }
  let tmp10 = null != lockedReason;
  if (tmp10) {
    tmp10 = { locked_reason: closure_17[lockedReason], visible_row_index: visibleRowIndex };
    const obj2 = { locked_reason: closure_17[lockedReason], visible_row_index: visibleRowIndex };
  }
  const merged = Object.assign(tmp10);
  trackWithMetadata(EXPRESSION_PICKER_EXPRESSION_SELECTED, obj);
};
export const trackEmojiFavorited = function trackEmojiFavorited(emoji) {
  emoji = emoji.emoji;
  let name = emoji.uniqueName;
  const _location = emoji.location;
  if (name == null) {
    name = emoji.name;
  }
  const obj = AppAnalyticsUtilsDefault;
  const obj2 = { location: _location, expression_type: ExpressionPickerViewType.EMOJI, expression_id: emoji.id, expression_name: name, expression_guild_id: emoji.guildId, is_custom: null != emoji.id, is_animated: emoji.animated };
  obj.trackWithMetadata(unpackModuleId.EXPRESSION_FAVORITED, obj2);
};
export const throttledTrackEmojiAutoSuggestDisplayed = throttleResult;
export const getAriaIdForEmojiCategory = function getAriaIdForEmojiCategory(type, name) {
  let id;
  if (type.type === constants2.GUILD) {
    let str = "";
    if (null != name) {
      str = name.name;
    }
    id = str;
  } else {
    id = type.id;
  }
  return id;
};
export const getStringForEmojiCategory = function getStringForEmojiCategory(PREMIUM_UPSELL, guildName) {
  if (metroImportAll.TOP_GUILD_EMOJI === PREMIUM_UPSELL) {
    const intl13 = intl14.intl;
    const obj = { guildName };
    return intl13.formatToPlainString(intl14.t.W6Wi1X, obj);
  } else if (metroImportAll.RECENT === PREMIUM_UPSELL) {
    const intl12 = intl14.intl;
    return intl12.string(intl14.t["5TvaSm"]);
  } else if (metroImportAll.FAVORITES === PREMIUM_UPSELL) {
    const intl11 = intl14.intl;
    return intl11.string(intl14.t.y3LQCG);
  } else if (metroImportAll.ACTIVITY === PREMIUM_UPSELL) {
    const intl10 = intl14.intl;
    return intl10.string(intl14.t.O783tR);
  } else if (metroImportAll.FLAGS === PREMIUM_UPSELL) {
    const intl9 = intl14.intl;
    return intl9.string(intl14.t.vvaizu);
  } else if (metroImportAll.FOOD === PREMIUM_UPSELL) {
    const intl8 = intl14.intl;
    return intl8.string(intl14.t.ldm9aY);
  } else if (metroImportAll.NATURE === PREMIUM_UPSELL) {
    const intl7 = intl14.intl;
    return intl7.string(intl14.t.egIBDH);
  } else if (metroImportAll.OBJECTS === PREMIUM_UPSELL) {
    const intl6 = intl14.intl;
    return intl6.string(intl14.t.gWm7Mk);
  } else if (metroImportAll.PEOPLE === PREMIUM_UPSELL) {
    const intl5 = intl14.intl;
    return intl5.string(intl14.t.GX594D);
  } else if (metroImportAll.SYMBOLS === PREMIUM_UPSELL) {
    const intl4 = intl14.intl;
    return intl4.string(intl14.t.QXMYAb);
  } else if (metroImportAll.TRAVEL === PREMIUM_UPSELL) {
    const intl3 = intl14.intl;
    return intl3.string(intl14.t.w33hIP);
  } else if (metroImportAll.PREMIUM_UPSELL === PREMIUM_UPSELL) {
    const intl2 = intl14.intl;
    return intl2.string(intl14.t.pAF6xE);
  } else if (metroImportAll.SOUNDMOJI === PREMIUM_UPSELL) {
    const intl = intl14.intl;
    return intl.string(intl14.t.f0Ezmv);
  } else {
    let tmp3 = guildName;
    if (guildName == null) {
      tmp3 = PREMIUM_UPSELL;
    }
    return tmp3;
  }
};
export const useEmojiSearchResults = function useEmojiSearchResults(arg0, channel, intention, showOnlyUnicode) {
  let closure_0;
  _require = arg0;
  dependencyMap = intention;
  react = showOnlyUnicode;
  const effect = react.useEffect(() => {
    const FrecencyUserSettingsActionCreators = closure_0(intention[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const tmp2 = closure_16(intention);
  const includeExternalGuilds = tmp2;
  let obj = require("get initialized");
  const items = [includeExternalGuilds];
  const items1 = [arg0, channel, intention, tmp2, showOnlyUnicode];
  return obj.useStateFromStores(items, () => {
    const str = closure_0.replace(/^:/, "");
    const replaced = str.replace(/:$/, "");
    let result = null;
    if ("" !== replaced) {
      const obj = { channel, query: replaced, count: 0, intention, includeExternalGuilds, showOnlyUnicode };
      result = EmojiStore.searchWithoutFetchingLatest(obj);
    }
    return result;
  }, items1, require("get initialized").statesWillNeverBeEqual);
};
export const useFrequentlyUsedEmojis = function useFrequentlyUsedEmojis(arg0) {
  let closure_0;
  _require = arg0;
  const effect = react.useEffect(() => {
    const FrecencyUserSettingsActionCreators = CHAT(guildId[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [EmojiStore];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items, () => {
    const disambiguatedEmojiContext = flag2.getDisambiguatedEmojiContext(guildId);
    return disambiguatedEmojiContext.getFrequentlyUsedEmojisWithoutFetchingLatest();
  });
};
export const useFrequentlyUsedReactionEmojis = function useFrequentlyUsedReactionEmojis(guildId) {
  _require = guildId;
  const effect = react.useEffect(() => {
    const FrecencyUserSettingsActionCreators = CHAT(guildId[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [EmojiStore];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items, () => {
    const disambiguatedEmojiContext = flag2.getDisambiguatedEmojiContext(guildId);
    return disambiguatedEmojiContext.getFrequentlyUsedReactionEmojisWithoutFetchingLatest();
  });
};
export const useFavoriteEmojis = function useFavoriteEmojis(arg0) {
  let closure_0;
  _require = arg0;
  const effect = react.useEffect(() => {
    const FrecencyUserSettingsActionCreators = CHAT(guildId[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [EmojiStore];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items, () => flag2.getDisambiguatedEmojiContext(guildId).favoriteEmojisWithoutFetchingLatest);
};
export const useIsFavoriteEmoji = function useIsFavoriteEmoji(guildId, customEmojiFromJoinedGuild) {
  _require = guildId;
  let closure_1 = customEmojiFromJoinedGuild;
  const effect = react.useEffect(() => {
    const FrecencyUserSettingsActionCreators = guildId(dependencyMap[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [EmojiStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let result = null != customEmojiFromJoinedGuild;
    if (result) {
      const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(guildId);
      result = disambiguatedEmojiContext.isFavoriteEmojiWithoutFetchingLatest(tmp);
    }
    return result;
  });
};
export const useEmojiInPriorityOrder = function useEmojiInPriorityOrder(arg0) {
  let closure_0;
  _require = arg0;
  const effect = react.useEffect(() => {
    const FrecencyUserSettingsActionCreators = closure_0(dependencyMap[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [EmojiStore];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items, () => {
    const disambiguatedEmojiContext = EmojiStore.getDisambiguatedEmojiContext(closure_0);
    return disambiguatedEmojiContext.getEmojiInPriorityOrderWithoutFetchingLatest();
  });
};
export const getEmojiSubCategory = function getEmojiSubCategory(arr, arr2, arg2) {
  if (null == arg2) {
    return constants3.NONE;
  } else {
    let TOP_GUILD_EMOJI;
    const mapped = arr.map((id) => {
      let name = id.id;
      if (name == null) {
        name = id.uniqueName;
      }
      if (name == null) {
        name = id.name;
      }
      return name;
    });
    const mapped1 = arr2.map((id) => id.id);
    if (mapped.includes(arg2)) {
      TOP_GUILD_EMOJI = constants3.TOP_GUILD_EMOJI;
    } else {
      TOP_GUILD_EMOJI = mapped1.includes(arg2) ? tmp3.NEWLY_ADDED_EMOJI : tmp3.NONE;
    }
    return TOP_GUILD_EMOJI;
  }
};
export const getSearchPlaceholder = function getSearchPlaceholder(arg0, arg1) {
  let stringResult1;
  if (arg0 === constants8.REACTION) {
    let stringResult;
    const intl2 = intl14.intl;
    const string = intl2.string;
    const t = intl14.t;
    if (arg1) {
      stringResult = string(t["h7ES+n"]);
    } else {
      stringResult = string(t["6any2A"]);
    }
    stringResult1 = stringResult;
  } else {
    const intl = intl14.intl;
    stringResult1 = intl.string(intl14.t.KgK5qg);
  }
  return stringResult1;
};
