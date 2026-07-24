// Module ID: 9366
// Function ID: 73082
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 4991, 1838, 4970, 1849, 4995, 653, 1852, 1314, 1851, 491, 9367, 4324, 9368, 9370, 9371, 566, 1872, 9372, 1212, 3775, 3771, 675, 22, 664, 1331, 2]
// Exports: getAriaIdForEmojiCategory, getEmojiSubCategory, getSearchPlaceholder, getStringForEmojiCategory, getUnicodeEmojiCategories, initializeSearch, trackEmojiFavorited, trackEmojiFocus, trackEmojiSearchEmpty, trackEmojiSearchResultsViewed, trackEmojiSearchSelect, trackEmojiSearchStart, trackEmojiSelect, trackPremiumSettingsPaneOpened, useEmojiCategories, useEmojiInPriorityOrder, useEmojiSearchResults, useIsFavoriteEmoji

// Module 9366 (_createForOfIteratorHelperLoose)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import EmojiCategoryTypes from "EmojiCategoryTypes";
import ME from "ME";
import set from "set";
import { ExpressionPickerViewType } from "ExpressionPickerViewType";
import { PremiumUpsellTypes } from "GuildFeatures";
import apply from "expandLocation";
import set from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_8;
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
function searchTypeForIntention(intention) {
  if (constants8.REACTION === intention) {
    return constants7.EMOJI_REACTION;
  } else if (constants8.AUTO_SUGGESTION === intention) {
    return constants7.EMOJI_AUTO_SUGGESTION;
  } else {
    return constants7.EMOJI;
  }
}
function loadIdPayload(loadId) {
  if (null != loadId) {
    if ("" !== loadId) {
      const obj = { load_id: loadId };
    }
    return {};
  }
}
function useFrequentlyUsedEmojis(guildId) {
  const _require = guildId;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = guildId(outer1_2[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStoresArray(items, () => {
    const disambiguatedEmojiContext = outer1_4.getDisambiguatedEmojiContext(closure_0);
    return disambiguatedEmojiContext.getFrequentlyUsedEmojisWithoutFetchingLatest();
  });
}
function useFrequentlyUsedReactionEmojis(guildId) {
  const _require = guildId;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = guildId(outer1_2[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStoresArray(items, () => {
    const disambiguatedEmojiContext = outer1_4.getDisambiguatedEmojiContext(closure_0);
    return disambiguatedEmojiContext.getFrequentlyUsedReactionEmojisWithoutFetchingLatest();
  });
}
function useFavoriteEmojis(guildId) {
  const _require = guildId;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = guildId(outer1_2[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStoresArray(items, () => outer1_4.getDisambiguatedEmojiContext(closure_0).favoriteEmojisWithoutFetchingLatest);
}
({ EmojiCategories: closure_8, EmojiCategoryTypes: closure_9, EmojiSubCategory: closure_10 } = EmojiCategoryTypes);
({ AnalyticEvents: closure_11, AnalyticsPages: closure_12, AnalyticsSections: closure_13, AutoCompleteResultTypes: closure_14, SearchTypes: closure_15 } = ME);
({ isExternalEmojiAllowedForIntention: closure_16, EmojiDisabledReasons: closure_17, EmojiIntention: closure_18 } = set);
const re21 = /-/g;
let result = set.fileFinishedImporting("modules/emoji_picker/EmojiPickerUtils.tsx");

export const initializeSearch = function initializeSearch(arg0) {
  let _location;
  let intention;
  ({ intention, location: _location } = arg0);
  let obj = require(491) /* v1 */;
  const replaced = obj.v4().replace(closure_21, "");
  const EmojiPickerStore = require(9367) /* createStore */.EmojiPickerStore;
  EmojiPickerStore.setAnalyticsId(replaced);
  const str = obj.v4();
  obj = { search_type: searchTypeForIntention(intention), load_id: replaced, location: _location };
  importDefault(4324).trackWithMetadata(constants4.SEARCH_OPENED, obj);
};
export const useEmojiCategories = function useEmojiCategories(CHAT, channel, guildId) {
  let newlyAddedEmojis;
  let topEmojis;
  let tmp = guildId;
  let flag = arg3;
  const _require = CHAT;
  const importDefault = channel;
  if (guildId === undefined) {
    guildId = undefined;
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    tmp = guildId;
  }
  const dependencyMap = tmp;
  if (flag === undefined) {
    flag = false;
  }
  let c4;
  let c5;
  let c6;
  let c7;
  let allEmojis;
  let stateFromStores;
  let stateFromStores1;
  let c11;
  let soundmojiEmojiPickerSectionExperiment;
  const result = _require(9368).maybeFetchTopEmojisByGuild(tmp);
  let tmp5 = callback(CHAT);
  c4 = tmp5;
  let tmp6 = useFrequentlyUsedEmojis(tmp);
  c5 = tmp6;
  let tmp7 = useFrequentlyUsedReactionEmojis(tmp);
  c6 = tmp7;
  let tmp8 = useFavoriteEmojis(tmp);
  c7 = tmp8;
  let obj = _require(9368);
  ({ topEmojis, newlyAddedEmojis } = importDefault(9370)(tmp, CHAT));
  allEmojis = importDefault(9371)({ topEmojis, newlyAddedEmojis }).allEmojis;
  const tmp9 = importDefault(9370)(tmp, CHAT);
  let items = [c4];
  let items1 = [tmp];
  stateFromStores = _require(566).useStateFromStores(items, () => _undefined.getDisambiguatedEmojiContext(closure_2), items1);
  let obj2 = _require(566);
  const items2 = [c5];
  stateFromStores1 = _require(566).useStateFromStores(items2, () => {
    const guild = _undefined2.getGuild(closure_2);
    let name;
    if (null != guild) {
      name = guild.name;
    }
    return name;
  });
  const obj3 = _require(566);
  const items3 = [c7];
  const stateFromStores2 = _require(566).useStateFromStores(items3, () => _undefined4.getCurrentUser());
  const obj4 = _require(566);
  const isPremiumResult = _require(1872).isPremium(stateFromStores2);
  c11 = isPremiumResult;
  const obj5 = _require(1872);
  soundmojiEmojiPickerSectionExperiment = _require(9372).useSoundmojiEmojiPickerSectionExperiment({ location: "useEmojiCategories" });
  const items4 = [stateFromStores, channel, tmp, CHAT, isPremiumResult, allEmojis, stateFromStores1, tmp7, tmp6, tmp8, tmp5, soundmojiEmojiPickerSectionExperiment, flag];
  return flag.useMemo(() => {
    let emojiNitroLocked;
    let emojisDisabled;
    let emojisPremiumLockedCount;
    let iter2;
    function getEmojiUnavailableReasons(value) {
      let obj = getEmojiUnavailableReasons(3775);
      obj = { categoryEmojis: value, channel: getEmojiUnavailableReasons, guildId: outer1_2, intention: items };
      return obj.getEmojiUnavailableReasons(obj);
    }
    const groupedCustomEmoji = stateFromStores.getGroupedCustomEmoji();
    let items = [];
    let obj = { type: stateFromStores.SOUNDMOJI };
    const flattenedGuildIds = _undefined3.getFlattenedGuildIds();
    let intl = CHAT(tmp[19]).intl;
    obj.name = intl.string(CHAT(tmp[19]).t.f0Ezmv);
    obj.id = allEmojis.SOUNDMOJI;
    obj.isNitroLocked = false;
    const GUILD = stateFromStores.GUILD;
    const tmp2 = outer1_22(flattenedGuildIds);
    if (!iter.done) {
      do {
        let tmp10 = stateFromStores;
        let guild;
        if (GUILD === stateFromStores.GUILD) {
          let tmp12 = _undefined2;
          guild = _undefined2.getGuild(tmp9);
        }
        let tmp13 = tmp4;
        let tmp14 = tmp5;
        let tmp15 = tmp6;
        let tmp16 = tmp7;
        let tmp17 = tmp8;
        if (null != guild) {
          let value = groupedCustomEmoji.get(guild.id);
          let tmp30 = value;
          tmp13 = tmp4;
          tmp14 = tmp5;
          tmp15 = tmp6;
          tmp16 = tmp7;
          tmp17 = tmp8;
          if (null != value) {
            let tmp31 = value;
            tmp13 = tmp4;
            tmp14 = tmp5;
            tmp15 = tmp6;
            tmp16 = tmp7;
            tmp17 = tmp8;
            if (0 !== value.length) {
              let emojiUnavailableReasons = getEmojiUnavailableReasons(value);
              ({ emojisDisabled, emojisPremiumLockedCount, emojiNitroLocked } = emojiUnavailableReasons);
              let tmp33 = value;
              tmp13 = emojisDisabled;
              tmp14 = emojisPremiumLockedCount;
              tmp15 = emojiNitroLocked;
              tmp16 = tmp7;
              tmp17 = tmp8;
              if (0 !== emojiUnavailableReasons.emojisUnfiltered.length) {
                let tmp34 = _undefined;
                let hiddenEmojiIds = _undefined.getHiddenEmojiIds(guild.id);
                let tmp36 = stateFromStores;
                let tmp20 = null;
                if (GUILD === stateFromStores.GUILD) {
                  obj = {};
                  let tmp18 = stateFromStores;
                  obj.type = stateFromStores.GUILD;
                  obj.guild = guild;
                  let tmp19 = c11;
                  obj.isNitroLocked = !c11 && emojiNitroLocked && emojisPremiumLockedCount === value.length;
                  obj.emojis = value;
                  obj.emojisDisabled = emojisDisabled;
                  obj.emojisHidden = hiddenEmojiIds;
                  tmp20 = obj;
                }
                let tmp21 = value;
                tmp13 = emojisDisabled;
                tmp14 = emojisPremiumLockedCount;
                tmp15 = emojiNitroLocked;
                tmp16 = hiddenEmojiIds;
                tmp17 = tmp20;
                if (null != tmp20) {
                  let tmp22 = tmp;
                  if (guild.id === tmp) {
                    let arr = items.unshift(tmp20);
                    let tmp26 = value;
                    tmp13 = emojisDisabled;
                    tmp14 = emojisPremiumLockedCount;
                    tmp15 = emojiNitroLocked;
                    tmp16 = hiddenEmojiIds;
                    tmp17 = tmp20;
                  } else {
                    arr = items.push(tmp20);
                    let tmp24 = value;
                    tmp13 = emojisDisabled;
                    tmp14 = emojisPremiumLockedCount;
                    tmp15 = emojiNitroLocked;
                    tmp16 = hiddenEmojiIds;
                    tmp17 = tmp20;
                  }
                }
              }
            }
          }
        }
        iter2 = tmp2();
        tmp4 = tmp13;
        tmp5 = tmp14;
        tmp6 = tmp15;
        tmp7 = tmp16;
        tmp8 = tmp17;
        let tmp3 = iter2;
      } while (!iter2.done);
    }
    if (soundmojiEmojiPickerSectionExperiment) {
      if (flag) {
        let items1 = [obj];
      }
      return tmp27((arr, id) => {
        if (id === allEmojis.TOP_GUILD_EMOJI) {
          const emojisUnfiltered = getEmojiUnavailableReasons(outer1_8).emojisUnfiltered;
          if (null != emojisUnfiltered) {
            if (0 !== emojisUnfiltered.length) {
              let obj = { type: stateFromStores.TOP_GUILD_EMOJI, id };
              const intl3 = items(1212).intl;
              obj = { guildName: outer1_10 };
              obj.name = intl3.formatToPlainString(items(1212).t.W6Wi1X, obj);
              obj.isNitroLocked = false;
              obj.emojis = emojisUnfiltered;
              obj.emojisDisabled = tmp36;
              arr.push(obj);
            }
          }
          return arr;
        } else if (id === allEmojis.RECENT) {
          items = [outer2_18.REACTION, outer2_18.DEFAULT_REACT_EMOJI];
          const emojisUnfiltered1 = getEmojiUnavailableReasons(items.includes(items) ? outer1_6 : outer1_5).emojisUnfiltered;
          if (null != emojisUnfiltered1) {
            if (0 !== emojisUnfiltered1.length) {
              const obj1 = { type: stateFromStores.RECENT, id };
              const intl2 = items(1212).intl;
              obj1.name = intl2.string(items(1212).t["5TvaSm"]);
              obj1.isNitroLocked = false;
              obj1.emojis = emojisUnfiltered1;
              obj1.emojisDisabled = tmp27;
              arr.push(obj1);
            }
          }
          return arr;
        } else if (id === allEmojis.FAVORITES) {
          const emojisUnfiltered2 = getEmojiUnavailableReasons(outer1_7).emojisUnfiltered;
          if (null != emojisUnfiltered2) {
            if (0 !== emojisUnfiltered2.length) {
              const obj2 = { type: stateFromStores.FAVORITES, id };
              const intl = items(1212).intl;
              obj2.name = intl.string(items(1212).t.y3LQCG);
              obj2.isNitroLocked = false;
              obj2.emojis = emojisUnfiltered2;
              obj2.emojisDisabled = tmp16;
              arr.push(obj2);
            }
          }
          return arr;
        } else if (id === allEmojis.CUSTOM) {
          let found = items;
          if (!outer1_4) {
            found = items.filter((type) => {
              if (type.type === stateFromStores.GUILD) {
                let flag = type.guild.id === outer2_2;
              } else {
                type = type.type;
                flag = false;
              }
              return flag;
            });
          }
          const push = arr.push;
          const items1 = [];
          HermesBuiltin.arraySpread(found, 0);
          HermesBuiltin.apply(items1, arr);
        } else {
          obj = { type: stateFromStores.UNICODE, id, name: id, isNitroLocked: false };
          arr.push(obj);
        }
        return arr;
      }, []);
    }
  }, items4);
};
export const getUnicodeEmojiCategories = function getUnicodeEmojiCategories() {
  const categories = importDefault(3771).getCategories();
  return categories.map((id) => ({ type: outer1_9.UNICODE, id, name: id, isNitroLocked: false }));
};
export const trackPremiumSettingsPaneOpened = function trackPremiumSettingsPaneOpened(getGuildId) {
  let guildId;
  if (null != getGuildId) {
    guildId = getGuildId.getGuildId();
  }
  let obj = importDefault(675);
  obj = { location_page: null != guildId ? tmp3.GUILD_CHANNEL : tmp3.DM_CHANNEL };
  if (null != getGuildId) {
    let CUSTOM_STATUS_MODAL = constants5.EMOJI_PICKER_POPOUT;
  } else {
    CUSTOM_STATUS_MODAL = constants5.CUSTOM_STATUS_MODAL;
  }
  obj.location_section = CUSTOM_STATUS_MODAL;
  obj.track(constants4.PREMIUM_PROMOTION_OPENED, obj);
};
export const trackEmojiSearchStart = function trackEmojiSearchStart(location, intention) {
  let obj = importDefault(4324);
  obj = { search_type: searchTypeForIntention(intention), location };
  const EmojiPickerStore = require(9367) /* createStore */.EmojiPickerStore;
  const merged = Object.assign(loadIdPayload(EmojiPickerStore.getAnalyticsId()));
  obj.trackWithMetadata(constants4.SEARCH_STARTED, obj);
};
export const trackEmojiSearchResultsViewed = function trackEmojiSearchResultsViewed(arg0) {
  let _location;
  let intention;
  let loadId;
  let numEmojiLocked;
  let searchQuery;
  let totalResults;
  ({ totalResults, numEmojiLocked, location: _location, searchQuery, intention, loadId } = arg0);
  let obj = importDefault(4324);
  obj = { search_type: searchTypeForIntention(intention), total_results: totalResults, num_results_locked: numEmojiLocked, query: searchQuery, location: _location };
  const merged = Object.assign(loadIdPayload(loadId));
  obj.trackWithMetadata(constants4.SEARCH_RESULT_VIEWED, obj);
};
export const trackEmojiSearchSelect = function trackEmojiSearchSelect(arg0) {
  let _location;
  let emoji;
  let emojiSuggestions;
  let index;
  let intention;
  let isLocked;
  let messageId;
  let searchQuery;
  ({ emoji, emojiSuggestions } = arg0);
  let name = emoji.uniqueName;
  ({ searchQuery, isLocked, location: _location, intention, index, messageId } = arg0);
  if (null == name) {
    name = emoji.name;
  }
  let obj = importDefault(4324);
  obj = { search_type: searchTypeForIntention(intention), location: _location, expression_guild_id: emoji.guildId, emoji_id: emoji.id, emoji_name: name, is_custom: null != emoji.id, is_animated: emoji.animated, is_locked: isLocked, query: searchQuery, index_num: index };
  let loadId;
  if (null != emojiSuggestions) {
    loadId = emojiSuggestions.loadId;
  }
  if (null == loadId) {
    const EmojiPickerStore = require(9367) /* createStore */.EmojiPickerStore;
    loadId = EmojiPickerStore.getAnalyticsId();
  }
  const merged = Object.assign(loadIdPayload(loadId));
  let length;
  if (null != emojiSuggestions) {
    const results = emojiSuggestions.results;
    if (null != results) {
      length = results.length;
    }
  }
  obj["total_results"] = length;
  let found;
  if (null != emojiSuggestions) {
    const results1 = emojiSuggestions.results;
    if (null != results1) {
      const mapped = results1.map((emoji) => emoji.emoji.id);
      found = mapped.filter((arg0) => null != arg0);
    }
  }
  obj["emoji_suggestion_ids"] = found;
  obj["message_id"] = messageId;
  obj.trackWithMetadata(constants4.SEARCH_RESULT_SELECTED, obj);
};
export const trackEmojiSearchEmpty = function trackEmojiSearchEmpty(arg0) {
  let _location;
  let intention;
  let loadId;
  let searchQuery;
  ({ location: _location, searchQuery, intention, loadId } = arg0);
  let obj = importDefault(4324);
  obj = { search_type: searchTypeForIntention(intention), query: searchQuery, location: _location };
  const merged = Object.assign(loadIdPayload(loadId));
  obj.trackWithMetadata(constants4.SEARCH_RESULT_EMPTY, obj);
};
export const trackEmojiFocus = function trackEmojiFocus(arg0) {
  let emoji;
  let newlyAddedHighlight;
  let position;
  let subCategory;
  ({ emoji, subCategory } = arg0);
  ({ position, newlyAddedHighlight } = arg0);
  let obj = importDefault(4324);
  obj = {};
  let str;
  if (null != subCategory) {
    str = subCategory.toString();
  }
  obj.expression_section = str;
  obj.newly_added_highlight = newlyAddedHighlight;
  ({ id: obj2.emoji_id, name: obj2.emoji_name, animated: obj2.emoji_animated } = emoji);
  obj.emoji_position = position;
  obj.trackWithMetadata(constants4.EXPRESSION_PICKER_EXPRESSION_FOCUS, obj);
};
export const trackEmojiSelect = function trackEmojiSelect(arg0) {
  let _location;
  let category;
  let emoji;
  let isBurstReaction;
  let lockedReason;
  let pickerIntention;
  let subCategory;
  ({ emoji, pickerIntention, subCategory } = arg0);
  ({ location: _location, category } = arg0);
  if (subCategory === undefined) {
    subCategory = constants3.NONE;
  }
  ({ isBurstReaction, lockedReason } = arg0);
  if (constants8.REACTION !== pickerIntention) {
    if (constants8.STATUS === pickerIntention) {
      let EMOJI_PICKER_EMOJI_CLICKED = PremiumUpsellTypes.EMOJI_PICKER_STATUS_EMOJI_CLICKED;
    } else {
      EMOJI_PICKER_EMOJI_CLICKED = PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED;
    }
    let name = emoji.uniqueName;
    if (null == name) {
      name = emoji.name;
    }
    let obj = importDefault(4324);
    if (null != lockedReason) {
      let EXPRESSION_PICKER_EXPRESSION_SELECTED = constants4.EXPRESSION_PICKER_LOCKED_EXPRESSION_SELECTED;
    } else {
      EXPRESSION_PICKER_EXPRESSION_SELECTED = constants4.EXPRESSION_PICKER_EXPRESSION_SELECTED;
    }
    obj = { type: EMOJI_PICKER_EMOJI_CLICKED, location: _location, expression_id: emoji.id, expression_name: name, expression_guild_id: emoji.guildId, is_custom: null != emoji.id, is_animated: emoji.animated, expression_picker_section: category };
    let str;
    if (null != subCategory) {
      str = subCategory.toString();
    }
    obj.expression_section = str;
    obj.emoji_position = tmp2;
    obj.newly_added_highlight = tmp3;
    obj.is_burst = isBurstReaction;
    obj.message_id = tmp4;
    let tmp17 = null != lockedReason;
    if (tmp17) {
      obj = { locked_reason: table[lockedReason], visible_row_index: tmp5 };
      tmp17 = obj;
    }
    const merged = Object.assign(tmp17);
    obj.trackWithMetadata(EXPRESSION_PICKER_EXPRESSION_SELECTED, obj);
  }
};
export const trackEmojiFavorited = function trackEmojiFavorited(emoji) {
  emoji = emoji.emoji;
  let name = emoji.uniqueName;
  if (null == name) {
    name = emoji.name;
  }
  let obj = importDefault(4324);
  obj = { location: emoji.location, expression_type: ExpressionPickerViewType.EMOJI, expression_id: emoji.id, expression_name: name, expression_guild_id: emoji.guildId, is_custom: null != emoji.id, is_animated: emoji.animated };
  obj.trackWithMetadata(constants4.EXPRESSION_FAVORITED, obj);
};
export const throttledTrackEmojiAutoSuggestDisplayed = apply.throttle((emojiSuggestions) => {
  emojiSuggestions = emojiSuggestions.emojiSuggestions;
  let obj = importDefault(4324);
  obj = { suggestion_type: constants6.EMOJI, suggestion_quantity: emojiSuggestions.results.length, custom_quantity: results.filter((emoji) => null != emoji.emoji.id).length, load_id: emojiSuggestions.loadId, location: emojiSuggestions.analyticsLocation };
  results = emojiSuggestions.results;
  obj.trackWithMetadata(constants4.AUTO_SUGGEST_DISPLAYED, obj);
}, require("set").Millis.HALF_SECOND, { leading: false, trailing: true });
export const getAriaIdForEmojiCategory = function getAriaIdForEmojiCategory(type, name) {
  if (type.type === constants2.GUILD) {
    let str = "";
    if (null != name) {
      str = name.name;
    }
    let id = str;
  } else {
    id = type.id;
  }
  return id;
};
export const getStringForEmojiCategory = function getStringForEmojiCategory(PREMIUM_UPSELL) {
  let tmp = PREMIUM_UPSELL;
  if (constants.TOP_GUILD_EMOJI === PREMIUM_UPSELL) {
    const intl13 = require(1212) /* getSystemLocale */.intl;
    const obj = { guildName: arg1 };
    return intl13.formatToPlainString(require(1212) /* getSystemLocale */.t.W6Wi1X, obj);
  } else if (constants.RECENT === tmp) {
    const intl12 = require(1212) /* getSystemLocale */.intl;
    return intl12.string(require(1212) /* getSystemLocale */.t["5TvaSm"]);
  } else if (constants.FAVORITES === tmp) {
    const intl11 = require(1212) /* getSystemLocale */.intl;
    return intl11.string(require(1212) /* getSystemLocale */.t.y3LQCG);
  } else if (constants.ACTIVITY === tmp) {
    const intl10 = require(1212) /* getSystemLocale */.intl;
    return intl10.string(require(1212) /* getSystemLocale */.t.O783tR);
  } else if (constants.FLAGS === tmp) {
    const intl9 = require(1212) /* getSystemLocale */.intl;
    return intl9.string(require(1212) /* getSystemLocale */.t.vvaizu);
  } else if (constants.FOOD === tmp) {
    const intl8 = require(1212) /* getSystemLocale */.intl;
    return intl8.string(require(1212) /* getSystemLocale */.t.ldm9aY);
  } else if (constants.NATURE === tmp) {
    const intl7 = require(1212) /* getSystemLocale */.intl;
    return intl7.string(require(1212) /* getSystemLocale */.t.egIBDH);
  } else if (constants.OBJECTS === tmp) {
    const intl6 = require(1212) /* getSystemLocale */.intl;
    return intl6.string(require(1212) /* getSystemLocale */.t.gWm7Mk);
  } else if (constants.PEOPLE === tmp) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t.GX594D);
  } else if (constants.SYMBOLS === tmp) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t.QXMYAb);
  } else if (constants.TRAVEL === tmp) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.w33hIP);
  } else if (constants.PREMIUM_UPSELL === tmp) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.pAF6xE);
  } else if (constants.SOUNDMOJI === tmp) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.f0Ezmv);
  } else {
    if (null != arg1) {
      tmp = arg1;
    }
    return tmp;
  }
};
export const useEmojiSearchResults = function useEmojiSearchResults(arg0, arg1, arg2, arg3) {
  const _require = arg0;
  let closure_1 = arg1;
  const dependencyMap = arg2;
  const React = arg3;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = lib(table[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const tmp2 = callback(arg2);
  let _isNativeReflectConstruct = tmp2;
  const items = [_isNativeReflectConstruct];
  const items1 = [arg0, arg1, arg2, tmp2, arg3];
  return _require(566).useStateFromStores(items, () => {
    const replaced = lib.replace(/^:/, "").replace(/:$/, "");
    let result = null;
    if ("" !== replaced) {
      const obj = { channel: closure_1, query: replaced, count: 0, intention: closure_2, includeExternalGuilds: tmp2, showOnlyUnicode: result };
      result = tmp2.searchWithoutFetchingLatest(obj);
    }
    return result;
  }, items1, _require(566).statesWillNeverBeEqual);
};
export { useFrequentlyUsedEmojis };
export { useFrequentlyUsedReactionEmojis };
export { useFavoriteEmojis };
export const useIsFavoriteEmoji = function useIsFavoriteEmoji(guildId, customEmojiFromJoinedGuild) {
  const _require = guildId;
  let closure_1 = customEmojiFromJoinedGuild;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = guildId(outer1_2[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => {
    let result = null != closure_1;
    if (result) {
      const disambiguatedEmojiContext = outer1_4.getDisambiguatedEmojiContext(closure_0);
      result = disambiguatedEmojiContext.isFavoriteEmojiWithoutFetchingLatest(closure_1);
    }
    return result;
  });
};
export const useEmojiInPriorityOrder = function useEmojiInPriorityOrder(arg0) {
  const _require = arg0;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = callback(outer1_2[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStoresArray(items, () => {
    const disambiguatedEmojiContext = outer1_4.getDisambiguatedEmojiContext(closure_0);
    return disambiguatedEmojiContext.getEmojiInPriorityOrderWithoutFetchingLatest();
  });
};
export const getEmojiSubCategory = function getEmojiSubCategory(arr, arr2) {
  if (null == arg2) {
    return constants3.NONE;
  } else {
    const mapped = arr.map((id) => {
      let name = id.id;
      if (null == name) {
        name = id.uniqueName;
      }
      if (null == name) {
        name = id.name;
      }
      return name;
    });
    const mapped1 = arr2.map((id) => id.id);
    if (mapped.includes(arg2)) {
      let TOP_GUILD_EMOJI = constants3.TOP_GUILD_EMOJI;
    } else {
      TOP_GUILD_EMOJI = mapped1.includes(arg2) ? tmp.NEWLY_ADDED_EMOJI : tmp.NONE;
    }
    return TOP_GUILD_EMOJI;
  }
};
export const getSearchPlaceholder = function getSearchPlaceholder(arg0, arg1) {
  if (arg0 === constants8.REACTION) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const string = intl2.string;
    h7ES_n = require(1212) /* getSystemLocale */.t;
    if (arg1) {
      h7ES_n = h7ES_n["h7ES+n"];
      let stringResult = string(h7ES_n);
    } else {
      stringResult = string(h7ES_n["6any2A"]);
    }
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.KgK5qg);
  }
};
