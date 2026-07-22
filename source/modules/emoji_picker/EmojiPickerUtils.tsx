// Module ID: 9323
// Function ID: 72832
// Name: _createForOfIteratorHelperLoose
// Dependencies: [31, 4120, 1852, 33, 4126, 689, 477, 566, 1392, 5148, 4124, 1212, 4524, 3841, 3829, 2, 31, 27, 4120, 1345, 33, 3989, 566, 3832, 689, 4127, 4538]
// Exports: getAriaIdForEmojiCategory, getEmojiSubCategory, getSearchPlaceholder, getStringForEmojiCategory, getUnicodeEmojiCategories, initializeSearch, trackEmojiFavorited, trackEmojiFocus, trackEmojiSearchEmpty, trackEmojiSearchResultsViewed, trackEmojiSearchSelect, trackEmojiSearchStart, trackEmojiSelect, trackPremiumSettingsPaneOpened, useEmojiCategories, useEmojiInPriorityOrder, useEmojiSearchResults, useIsFavoriteEmoji

// Module 9323 (_createForOfIteratorHelperLoose)
import module_31 from "module_31";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import set from "set";
import module_33 from "module_33";
import closure_7 from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import module_477 from "module_477";
import initialize from "initialize";
import { ExpressionPickerViewType } from "getAvatarURL";
import { PremiumUpsellTypes } from "Emoji";
import map from "map";
import withSpring from "withSpring";

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
  const arg1 = guildId;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = arg0(closure_2[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [_isNativeReflectConstruct];
  return arg1(dependencyMap[16]).useStateFromStoresArray(items, () => {
    const disambiguatedEmojiContext = disambiguatedEmojiContext.getDisambiguatedEmojiContext(arg0);
    return disambiguatedEmojiContext.getFrequentlyUsedEmojisWithoutFetchingLatest();
  });
}
function useFrequentlyUsedReactionEmojis(guildId) {
  const arg1 = guildId;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = arg0(closure_2[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [_isNativeReflectConstruct];
  return arg1(dependencyMap[16]).useStateFromStoresArray(items, () => {
    const disambiguatedEmojiContext = disambiguatedEmojiContext.getDisambiguatedEmojiContext(arg0);
    return disambiguatedEmojiContext.getFrequentlyUsedReactionEmojisWithoutFetchingLatest();
  });
}
function useFavoriteEmojis(guildId) {
  const arg1 = guildId;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = arg0(closure_2[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [_isNativeReflectConstruct];
  return arg1(dependencyMap[16]).useStateFromStoresArray(items, () => disambiguatedEmojiContext.getDisambiguatedEmojiContext(arg0).favoriteEmojisWithoutFetchingLatest);
}
({ EmojiCategories: closure_8, EmojiCategoryTypes: closure_9, EmojiSubCategory: closure_10 } = _createForOfIteratorHelperLoose);
({ AnalyticEvents: closure_11, AnalyticsPages: closure_12, AnalyticsSections: closure_13, AutoCompleteResultTypes: closure_14, SearchTypes: closure_15 } = module_477);
({ isExternalEmojiAllowedForIntention: closure_16, EmojiDisabledReasons: closure_17, EmojiIntention: closure_18 } = initialize);
let closure_21 = /-/g;
const result = withSpring.fileFinishedImporting("modules/emoji_picker/EmojiPickerUtils.tsx");

export const initializeSearch = function initializeSearch(arg0) {
  let _location;
  let intention;
  ({ intention, location: _location } = arg0);
  let obj = arg1(dependencyMap[10]);
  const replaced = obj.v4().replace(closure_21, "");
  const EmojiPickerStore = arg1(dependencyMap[11]).EmojiPickerStore;
  EmojiPickerStore.setAnalyticsId(replaced);
  const str = obj.v4();
  obj = { search_type: searchTypeForIntention(intention), load_id: replaced, location: _location };
  importDefault(dependencyMap[12]).trackWithMetadata(constants4.SEARCH_OPENED, obj);
};
export const useEmojiCategories = function useEmojiCategories(CHAT, channel, guildId) {
  let newlyAddedEmojis;
  let topEmojis;
  let tmp = guildId;
  let flag = arg3;
  channel = CHAT;
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
  const React = flag;
  let _isNativeReflectConstruct;
  let set;
  let module_33;
  let closure_7;
  let allEmojis;
  let stateFromStores;
  let stateFromStores1;
  let isPremiumResult;
  let soundmojiEmojiPickerSectionExperiment;
  const result = channel(dependencyMap[13]).maybeFetchTopEmojisByGuild(tmp);
  const tmp5 = callback(CHAT);
  _isNativeReflectConstruct = tmp5;
  const tmp6 = useFrequentlyUsedEmojis(tmp);
  set = tmp6;
  const tmp7 = useFrequentlyUsedReactionEmojis(tmp);
  module_33 = tmp7;
  const tmp8 = useFavoriteEmojis(tmp);
  closure_7 = tmp8;
  const obj = channel(dependencyMap[13]);
  ({ topEmojis, newlyAddedEmojis } = importDefault(dependencyMap[14])(tmp, CHAT));
  allEmojis = importDefault(dependencyMap[15])({ topEmojis, newlyAddedEmojis }).allEmojis;
  const tmp9 = importDefault(dependencyMap[14])(tmp, CHAT);
  const items = [_isNativeReflectConstruct];
  const items1 = [tmp];
  stateFromStores = channel(dependencyMap[16]).useStateFromStores(items, () => tmp5.getDisambiguatedEmojiContext(tmp), items1);
  const obj2 = channel(dependencyMap[16]);
  const items2 = [set];
  stateFromStores1 = channel(dependencyMap[16]).useStateFromStores(items2, () => {
    const guild = tmp6.getGuild(tmp);
    let name;
    if (null != guild) {
      name = guild.name;
    }
    return name;
  });
  const obj3 = channel(dependencyMap[16]);
  const items3 = [closure_7];
  const stateFromStores2 = channel(dependencyMap[16]).useStateFromStores(items3, () => tmp8.getCurrentUser());
  const obj4 = channel(dependencyMap[16]);
  isPremiumResult = channel(dependencyMap[17]).isPremium(stateFromStores2);
  const obj5 = channel(dependencyMap[17]);
  soundmojiEmojiPickerSectionExperiment = channel(dependencyMap[18]).useSoundmojiEmojiPickerSectionExperiment({ location: "useEmojiCategories" });
  const items4 = [stateFromStores, channel, tmp, CHAT, isPremiumResult, allEmojis, stateFromStores1, tmp7, tmp6, tmp8, tmp5, soundmojiEmojiPickerSectionExperiment, flag];
  return React.useMemo(() => {
    let emojiNitroLocked;
    let emojisDisabled;
    let emojisPremiumLockedCount;
    let iter2;
    let tmp7;
    function getEmojiUnavailableReasons(value) {
      let obj = getEmojiUnavailableReasons(closure_2[20]);
      obj = { categoryEmojis: value, channel: getEmojiUnavailableReasons, guildId: closure_2, intention: items };
      return obj.getEmojiUnavailableReasons(obj);
    }
    const arg1 = getEmojiUnavailableReasons;
    const groupedCustomEmoji = stateFromStores.getGroupedCustomEmoji();
    const items = [];
    const arg0 = items;
    let obj = { type: stateFromStores.SOUNDMOJI };
    const flattenedGuildIds = tmp7.getFlattenedGuildIds();
    const intl = arg0(tmp[19]).intl;
    obj.name = intl.string(arg0(tmp[19]).t.f0Ezmv);
    obj.id = allEmojis.SOUNDMOJI;
    obj.isNitroLocked = false;
    const GUILD = stateFromStores.GUILD;
    const tmp2 = callback(flattenedGuildIds);
    if (!iter.done) {
      do {
        let tmp10 = closure_9;
        let guild;
        if (GUILD === closure_9.GUILD) {
          let tmp12 = set;
          guild = set.getGuild(tmp9);
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
                let tmp34 = _isNativeReflectConstruct;
                let hiddenEmojiIds = _isNativeReflectConstruct.getHiddenEmojiIds(guild.id);
                let tmp36 = closure_9;
                let tmp20 = null;
                if (GUILD === closure_9.GUILD) {
                  obj = {};
                  let tmp18 = closure_9;
                  obj.type = closure_9.GUILD;
                  obj.guild = guild;
                  let tmp19 = closure_11;
                  obj.isNitroLocked = !closure_11 && emojiNitroLocked && emojisPremiumLockedCount === value.length;
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
                  let tmp22 = closure_2;
                  if (guild.id === closure_2) {
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
        let tmp4 = tmp13;
        let tmp5 = tmp14;
        let tmp6 = tmp15;
        tmp7 = tmp16;
        let tmp8 = tmp17;
        let tmp3 = iter2;
      } while (!iter2.done);
    }
    if (soundmojiEmojiPickerSectionExperiment) {
      if (flag) {
        const items1 = [obj];
      }
      return tmp27((arr, id) => {
        if (id === constants.TOP_GUILD_EMOJI) {
          const emojisUnfiltered = getEmojiUnavailableReasons(constants).emojisUnfiltered;
          if (null != emojisUnfiltered) {
            if (0 !== emojisUnfiltered.length) {
              let obj = { type: constants2.TOP_GUILD_EMOJI, id };
              const intl3 = items(closure_2[19]).intl;
              obj = { guildName: closure_10 };
              obj.name = intl3.formatToPlainString(items(closure_2[19]).t.W6Wi1X, obj);
              obj.isNitroLocked = false;
              obj.emojis = emojisUnfiltered;
              obj.emojisDisabled = tmp36;
              arr.push(obj);
            }
          }
          return arr;
        } else if (id === constants.RECENT) {
          const items = [constants3.REACTION, constants3.DEFAULT_REACT_EMOJI];
          const emojisUnfiltered1 = getEmojiUnavailableReasons(items.includes(items) ? module_33 : set).emojisUnfiltered;
          if (null != emojisUnfiltered1) {
            if (0 !== emojisUnfiltered1.length) {
              const obj1 = { type: constants2.RECENT, id };
              const intl2 = items(closure_2[19]).intl;
              obj1.name = intl2.string(items(closure_2[19]).t.5TvaSm);
              obj1.isNitroLocked = false;
              obj1.emojis = emojisUnfiltered1;
              obj1.emojisDisabled = tmp27;
              arr.push(obj1);
            }
          }
          return arr;
        } else if (id === constants.FAVORITES) {
          const emojisUnfiltered2 = getEmojiUnavailableReasons(closure_7).emojisUnfiltered;
          if (null != emojisUnfiltered2) {
            if (0 !== emojisUnfiltered2.length) {
              const obj2 = { type: constants2.FAVORITES, id };
              const intl = items(closure_2[19]).intl;
              obj2.name = intl.string(items(closure_2[19]).t.y3LQCG);
              obj2.isNitroLocked = false;
              obj2.emojis = emojisUnfiltered2;
              obj2.emojisDisabled = tmp16;
              arr.push(obj2);
            }
          }
          return arr;
        } else if (id === constants.CUSTOM) {
          let found = items;
          if (!_isNativeReflectConstruct) {
            found = items.filter((type) => {
              if (type.type === constants.GUILD) {
                let flag = type.guild.id === closure_2;
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
          obj = { type: constants2.UNICODE, id, name: id, isNitroLocked: false };
          arr.push(obj);
        }
        return arr;
      }, []);
    }
  }, items4);
};
export const getUnicodeEmojiCategories = function getUnicodeEmojiCategories() {
  const categories = importDefault(dependencyMap[21]).getCategories();
  return categories.map((id) => ({ type: constants.UNICODE, id, name: id, isNitroLocked: false }));
};
export const trackPremiumSettingsPaneOpened = function trackPremiumSettingsPaneOpened(getGuildId) {
  let guildId;
  if (null != getGuildId) {
    guildId = getGuildId.getGuildId();
  }
  let obj = importDefault(dependencyMap[22]);
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
  let obj = importDefault(dependencyMap[12]);
  obj = { search_type: searchTypeForIntention(intention), location };
  const EmojiPickerStore = intention(dependencyMap[11]).EmojiPickerStore;
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
  let obj = importDefault(dependencyMap[12]);
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
  let obj = importDefault(dependencyMap[12]);
  obj = { search_type: searchTypeForIntention(intention), location: _location, expression_guild_id: emoji.guildId, emoji_id: emoji.id, emoji_name: name, is_custom: null != emoji.id, is_animated: emoji.animated, is_locked: isLocked, query: searchQuery, index_num: index };
  let loadId;
  if (null != emojiSuggestions) {
    loadId = emojiSuggestions.loadId;
  }
  if (null == loadId) {
    const EmojiPickerStore = arg1(dependencyMap[11]).EmojiPickerStore;
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
  let obj = importDefault(dependencyMap[12]);
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
  let obj = importDefault(dependencyMap[12]);
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
    let obj = importDefault(dependencyMap[12]);
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
      obj = { locked_reason: closure_17[lockedReason], visible_row_index: tmp5 };
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
  let obj = importDefault(dependencyMap[12]);
  obj = { location: emoji.location, expression_type: ExpressionPickerViewType.EMOJI, expression_id: emoji.id, expression_name: name, expression_guild_id: emoji.guildId, is_custom: null != emoji.id, is_animated: emoji.animated };
  obj.trackWithMetadata(constants4.EXPRESSION_FAVORITED, obj);
};
export const throttledTrackEmojiAutoSuggestDisplayed = require("map").throttle((emojiSuggestions) => {
  emojiSuggestions = emojiSuggestions.emojiSuggestions;
  let obj = importDefault(dependencyMap[12]);
  obj = { suggestion_type: constants6.EMOJI, suggestion_quantity: emojiSuggestions.results.length, custom_quantity: results.filter((emoji) => null != emoji.emoji.id).length, load_id: emojiSuggestions.loadId, location: emojiSuggestions.analyticsLocation };
  const results = emojiSuggestions.results;
  obj.trackWithMetadata(constants4.AUTO_SUGGEST_DISPLAYED, obj);
}, require("_createForOfIteratorHelperLoose").Millis.HALF_SECOND, { flex: 1766088043, marginRight: 827788593 });
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
    const intl13 = arg1(dependencyMap[19]).intl;
    const obj = { guildName: arg1 };
    return intl13.formatToPlainString(arg1(dependencyMap[19]).t.W6Wi1X, obj);
  } else if (constants.RECENT === tmp) {
    const intl12 = arg1(dependencyMap[19]).intl;
    return intl12.string(arg1(dependencyMap[19]).t.5TvaSm);
  } else if (constants.FAVORITES === tmp) {
    const intl11 = arg1(dependencyMap[19]).intl;
    return intl11.string(arg1(dependencyMap[19]).t.y3LQCG);
  } else if (constants.ACTIVITY === tmp) {
    const intl10 = arg1(dependencyMap[19]).intl;
    return intl10.string(arg1(dependencyMap[19]).t.O783tR);
  } else if (constants.FLAGS === tmp) {
    const intl9 = arg1(dependencyMap[19]).intl;
    return intl9.string(arg1(dependencyMap[19]).t.vvaizu);
  } else if (constants.FOOD === tmp) {
    const intl8 = arg1(dependencyMap[19]).intl;
    return intl8.string(arg1(dependencyMap[19]).t.ldm9aY);
  } else if (constants.NATURE === tmp) {
    const intl7 = arg1(dependencyMap[19]).intl;
    return intl7.string(arg1(dependencyMap[19]).t.egIBDH);
  } else if (constants.OBJECTS === tmp) {
    const intl6 = arg1(dependencyMap[19]).intl;
    return intl6.string(arg1(dependencyMap[19]).t.gWm7Mk);
  } else if (constants.PEOPLE === tmp) {
    const intl5 = arg1(dependencyMap[19]).intl;
    return intl5.string(arg1(dependencyMap[19]).t.GX594D);
  } else if (constants.SYMBOLS === tmp) {
    const intl4 = arg1(dependencyMap[19]).intl;
    return intl4.string(arg1(dependencyMap[19]).t.QXMYAb);
  } else if (constants.TRAVEL === tmp) {
    const intl3 = arg1(dependencyMap[19]).intl;
    return intl3.string(arg1(dependencyMap[19]).t.w33hIP);
  } else if (constants.PREMIUM_UPSELL === tmp) {
    const intl2 = arg1(dependencyMap[19]).intl;
    return intl2.string(arg1(dependencyMap[19]).t.pAF6xE);
  } else if (constants.SOUNDMOJI === tmp) {
    const intl = arg1(dependencyMap[19]).intl;
    return intl.string(arg1(dependencyMap[19]).t.f0Ezmv);
  } else {
    if (null != arg1) {
      tmp = arg1;
    }
    return tmp;
  }
};
export const useEmojiSearchResults = function useEmojiSearchResults(arg0, arg1, arg2, arg3) {
  arg1 = arg0;
  const importDefault = arg1;
  const dependencyMap = arg2;
  const React = arg3;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = arg0(arg2[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const tmp2 = callback(arg2);
  let _isNativeReflectConstruct = tmp2;
  const items = [_isNativeReflectConstruct];
  const items1 = [arg0, arg1, arg2, tmp2, arg3];
  return arg1(dependencyMap[16]).useStateFromStores(items, () => {
    const replaced = arg0.replace(/^:/, "").replace(/:$/, "");
    let result = null;
    if ("" !== replaced) {
      const obj = { channel: arg1, query: replaced, count: 0, intention: arg2, includeExternalGuilds: tmp2, showOnlyUnicode: arg3 };
      result = tmp2.searchWithoutFetchingLatest(obj);
    }
    return result;
  }, items1, arg1(dependencyMap[16]).statesWillNeverBeEqual);
};
export { useFrequentlyUsedEmojis };
export { useFrequentlyUsedReactionEmojis };
export { useFavoriteEmojis };
export const useIsFavoriteEmoji = function useIsFavoriteEmoji(guildId, customEmojiFromJoinedGuild) {
  customEmojiFromJoinedGuild = guildId;
  const importDefault = customEmojiFromJoinedGuild;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = arg0(closure_2[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [_isNativeReflectConstruct];
  return customEmojiFromJoinedGuild(dependencyMap[16]).useStateFromStores(items, () => {
    let result = null != arg1;
    if (result) {
      const disambiguatedEmojiContext = disambiguatedEmojiContext.getDisambiguatedEmojiContext(arg0);
      result = disambiguatedEmojiContext.isFavoriteEmojiWithoutFetchingLatest(arg1);
    }
    return result;
  });
};
export const useEmojiInPriorityOrder = function useEmojiInPriorityOrder(arg0) {
  const arg1 = arg0;
  const effect = React.useEffect(() => {
    const FrecencyUserSettingsActionCreators = arg0(closure_2[25]).FrecencyUserSettingsActionCreators;
    const ifNecessary = FrecencyUserSettingsActionCreators.loadIfNecessary();
  }, []);
  const items = [_isNativeReflectConstruct];
  return arg1(dependencyMap[16]).useStateFromStoresArray(items, () => {
    const disambiguatedEmojiContext = disambiguatedEmojiContext.getDisambiguatedEmojiContext(arg0);
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
    const intl2 = arg1(dependencyMap[19]).intl;
    const string = intl2.string;
    h7ES+n = arg1(dependencyMap[19]).t;
    if (arg1) {
      h7ES+n = h7ES_n.h7ES+n;
      let stringResult = string(h7ES_n);
    } else {
      stringResult = string(h7ES_n.6any2A);
    }
  } else {
    const intl = arg1(dependencyMap[19]).intl;
    return intl.string(arg1(dependencyMap[19]).t.KgK5qg);
  }
};
