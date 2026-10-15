// Module ID: 9676
// Function ID: 9677
// Name: EmojiPickerList
// Dependencies: [19, 6207, 9650, 1085, 1393, 1241, 1392, 21, 558, 576, 7073, 7098, 9677, 9655, 9654, 9678, 9679, 9680, 9502, 9501, 9490, 5116, 5117, 4824, 5041, 9682, 4865, 1126, 9726, 9651, 9727, 2041, 9733, 9730, 9734, 9738, 9731, 9741, 9742, 9749, 9751, 9753, 2]

// Module 9676 (EmojiPickerList)
import intl2 from "intl" /* 1126 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1241 */;
import PremiumConstants from "PremiumConstants" /* 1392 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4824 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4865 */;
import ChatInputUtils from "ChatInputUtils" /* 5041 */;
import HapticUtils from "HapticUtils" /* 5116 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5117 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 6207 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7098 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9490 */;
import EmojiPickerListConstants from "EmojiPickerListConstants" /* 9650 */;
import EmojiPickerUtils from "EmojiPickerUtils" /* 9651 */;
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9654 */;
import RoleSubscriptionUpsellUtilsDefault from "RoleSubscriptionUpsellUtils" /* 9682 */;
import trackEmojiSuggestionSelectedDefault from "trackEmojiSuggestionSelected" /* 9726 */;
import useEmojiPickerData from "useEmojiPickerData" /* 9727 */;
import PremiumUpsellSectionDividerDefault from "PremiumUpsellSectionDivider" /* 9730 */;
import EmojiPickerListComponents from "EmojiPickerListComponents" /* 9733 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import EmojiConstants from "EmojiConstants" /* 1393 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let containerWidth, onLongPressEmoji, onPressEmoji;

let c10;
let c9;
let closure_14;
let closure_15;
let closure_16;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
const EmojiCategoryTypes = EmojiPickerConstants.EmojiCategoryTypes;
const IMAGE_SIZE = EmojiPickerListConstants.IMAGE_SIZE;
({ AnalyticsObjects: metroRequire, AnalyticsPages: metroImportDefault, AnalyticsSections: metroImportAll, UpsellTypes: c9 } = Constants);
({ EmojiDisabledReasons: c10, EmojiIntention: unpackModuleId } = EmojiConstants);
const MIN_MARGIN = ExpressionPickerConstants.MIN_MARGIN;
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = Fragment);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function EmojiPickerList(guildId) {
  let analyticsObject;
  let bottomSheetIndex;
  let categories;
  let categoryIndexActive;
  let channel;
  let computeCategories;
  let computeSearchResults;
  let emojiPickerListRef;
  let emojis;
  let inPortalKeyboard;
  let insetBottom;
  let insetTop;
  let items;
  let messageId;
  let num7;
  let onShowNitroUpsell;
  let rounded;
  let searchQueryRef;
  let shouldShowUpsell;
  const tmp = categories;
  let obj = categories(channel[9]);
  const cResult = obj.c(70);
  ({ bottomSheetIndex, categories } = guildId);
  ({ categoryIndexActive, emojiPickerListRef } = guildId);
  ({ emojis, channel } = guildId);
  guildId = guildId.guildId;
  onPressEmoji = guildId.onPressEmoji;
  onLongPressEmoji = guildId.onLongPressEmoji;
  const emojiPickerIntention = guildId.emojiPickerIntention;
  ({ insetBottom, insetTop, inPortalKeyboard, searchQueryRef } = guildId);
  ({ analyticsObject, messageId } = guildId);
  const bypassPremiumEmojiEntitlement = guildId.bypassPremiumEmojiEntitlement;
  let num = 0;
  if (undefined !== insetBottom) {
    num = insetBottom;
  }
  let num2 = 0;
  if (undefined !== insetTop) {
    num2 = insetTop;
  }
  const tmp6 = emojiPickerListRef(channel[10]);
  const analyticsLocations = tmp6(emojiPickerListRef(tmp2[11]).EMOJI).analyticsLocations;
  const tmp7 = emojiPickerListRef(tmp2[12])(tmp4);
  containerWidth = tmp7;
  rounded = Math.floor((tmp7 - rounded) / (onLongPressEmoji + rounded));
  const newlyAddedEmojis = emojiPickerListRef(tmp2[13])(guildId, emojiPickerIntention).newlyAddedEmojis;
  let id = null;
  if (newlyAddedEmojis.length > 0) {
    id = newlyAddedEmojis[0].id;
  }
  if (cResult[0] === guildId) {
    let tmp10;
    let tmp11;
    if (cResult[1] === id) {
      tmp10 = cResult[2];
      tmp11 = cResult[3];
    }
    const effect = guildId.useEffect(tmp10, tmp11);
    let tmp14 = tmp5(tmp2[15])();
    if (cResult[4] === analyticsObject) {
      if (cResult[5] === emojiPickerIntention) {
        let tmp15;
        let searchResults;
        if (cResult[6] === rounded) {
          tmp15 = cResult[7];
        }
        const tmpResult = tmp(channel[16]);
        const trackOnEmojiPickerOpenedForReactions = tmpResult.useTrackOnEmojiPickerOpenedForReactions(tmp15);
        ({ computeCategories, computeSearchResults } = emojiPickerListRef(channel[17])());
        const tmp17 = emojiPickerListRef(channel[17])();
        if (cResult[8] === categories) {
          if (cResult[9] === computeCategories) {
            if (cResult[10] === computeSearchResults) {
              if (cResult[11] === emojis) {
                if (cResult[12] === tmp14) {
                  let arr3;
                  let tmp19;
                  if (cResult[13] === rounded) {
                    arr3 = cResult[14];
                  }
                  const _Symbol = Symbol;
                  let str = "react.memo_cache_sentinel";
                  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmpResult3 = tmp(channel[18]);
                    const upsellType = tmpResult3.getUpsellType(tmp(tmp2[19]).EntitlementFeatureNames.EMOJIS_EVERYWHERE);
                    cResult[15] = upsellType;
                    tmp19 = upsellType;
                  } else {
                    tmp19 = cResult[15];
                  }
                  const tmpResult4 = tmp(channel[20]);
                  const useTier0UpsellContent = tmpResult4.usePremiumUpsellConfig(tmp19).useTier0UpsellContent;
                  if (cResult[16] === analyticsLocations) {
                    if (cResult[17] === bypassPremiumEmojiEntitlement) {
                      if (cResult[18] === categories) {
                        if (cResult[19] === channel) {
                          if (cResult[20] === guildId) {
                            if (cResult[21] === emojiPickerIntention) {
                              if (cResult[22] === messageId) {
                                if (cResult[23] === onPressEmoji) {
                                  let tmp21;
                                  let tmp22;
                                  if (cResult[24] === searchQueryRef) {
                                    tmp21 = cResult[25];
                                  }
                                  onPressEmoji = tmp21;
                                  if (cResult[26] !== onLongPressEmoji) {
                                    function se(arg0) {
                                      if (onLongPressEmoji != null) {
                                        tmp(arg0);
                                      }
                                    }
                                    cResult[26] = onLongPressEmoji;
                                    cResult[27] = se;
                                    tmp22 = se;
                                  } else {
                                    tmp22 = cResult[27];
                                  }
                                  onLongPressEmoji = tmp22;
                                  if (cResult[28] === arr3) {
                                    if (cResult[29] === tmp14) {
                                      let tmp23;
                                      if (cResult[30] === rounded) {
                                        tmp23 = cResult[31];
                                      }
                                      const tmp24 = emojiPickerListRef(channel[30])(tmp23);
                                      const AnimateEmoji = tmp(tmp2[31]).AnimateEmoji;
                                      const setting = AnimateEmoji.useSetting();
                                      if (cResult[32] === analyticsLocations) {
                                        if (cResult[33] === setting) {
                                          let guild_id;
                                          const tmp26 = cResult[34];
                                          if (channel != null) {
                                            guild_id = channel.guild_id;
                                          }
                                          if (tmp26 === guild_id) {
                                            if (cResult[35] === tmp7) {
                                              if (cResult[36] === emojiPickerListRef) {
                                                if (cResult[37] === tmp22) {
                                                  if (cResult[38] === tmp21) {
                                                    if (cResult[39] === rounded) {
                                                      let tmp28;
                                                      if (cResult[40] === useTier0UpsellContent) {
                                                        tmp28 = cResult[41];
                                                      }
                                                      ({ shouldShowUpsell, onShowNitroUpsell } = emojiPickerListRef(channel[37])());
                                                      emojiPickerListRef(channel[37])();
                                                      if (0 === arr3.length) {
                                                        if (cResult[42] === num) {
                                                          let tmp45;
                                                          if (cResult[43] === num2) {
                                                            tmp45 = cResult[44];
                                                          }
                                                          return tmp45;
                                                        }
                                                        let obj2 = { inActionSheet: true, insetTop: num2, insetBottom: num };
                                                        cResult[42] = num;
                                                        cResult[43] = num2;
                                                        cResult[44] = useTier0UpsellContent(emojiPickerListRef(channel[38]), obj2);
                                                        const tmp47 = useTier0UpsellContent(emojiPickerListRef(channel[38]), obj2);
                                                        class Ee {
                                                          constructor(item) {
                                                            let emojis;
                                                            let emojisDisabled;
                                                            let footer;
                                                            let index;
                                                            let isSectionNitroLocked;
                                                            let items;
                                                            let row;
                                                            let target;
                                                            item = item.item;
                                                            const type = item.type;
                                                            ({ target, index } = item);
                                                            if (useEmojiPickerData.EmojiPickerItemType.NATIVE_SECTION !== type) {
                                                              if (useEmojiPickerData.EmojiPickerItemType.PLACEHOLDER !== type) {
                                                                if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW_SLIM !== type) {
                                                                  if (useEmojiPickerData.EmojiPickerItemType.TITLE === type) {
                                                                    const title = item.title;
                                                                    if ("StickyHeader" === target) {
                                                                      const current = emojiPickerListRef.current;
                                                                      if (current != null) {
                                                                        const result = current.onStickyHeaderRendered(index);
                                                                      }
                                                                    }
                                                                    const obj2 = { label: title, isSectionNitroLocked: item.isSectionNitroLocked, useTier0UpsellContent };
                                                                    return syncedClientThemes(EmojiPickerListComponents.Section, obj2);
                                                                  } else if (useEmojiPickerData.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK === type) {
                                                                    const obj3 = { position: item.position, useTier0UpsellContent };
                                                                    return syncedClientThemes(PremiumUpsellSectionDividerDefault, obj3);
                                                                  } else {
                                                                    let tmp27Result;
                                                                    if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW === type) {
                                                                      ({ emojis, emojisDisabled, footer, row, isSectionNitroLocked } = item);
                                                                      const obj4 = { emojis, emojisDisabled, category: footer, rowSize: rounded, containerWidth, onPressEmoji, onLongPressEmoji, animateEmoji: setting, row, isSectionNitroLocked };
                                                                      tmp27Result = syncedClientThemes(tmp(9734).EmojiPickerListRow, obj4);
                                                                    } else if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW_NSFW === type) {
                                                                      tmp27Result = syncedClientThemes(tmp(9733).NSFWRow, {});
                                                                    } else if (useEmojiPickerData.EmojiPickerItemType.FOOTER_UPSELL === type) {
                                                                      let guild_id;
                                                                      const PremiumSearchUpsell = tmp(9738).PremiumSearchUpsell;
                                                                      const tmp27 = syncedClientThemes;
                                                                      if (channel != null) {
                                                                        guild_id = channel.guild_id;
                                                                      }
                                                                      const obj = { guildId: guild_id, analyticsLocations, useTier0UpsellContent };
                                                                      tmp27Result = tmp27(PremiumSearchUpsell, obj);
                                                                    }
                                                                    let tmp16 = true === item.isSectionNitroLocked;
                                                                    const tmp14 = closure_16;
                                                                    const tmp15 = closure_15;
                                                                    if (tmp16) {
                                                                      const obj5 = { useTier0UpsellContent };
                                                                      tmp16 = syncedClientThemes(tmp(9731).PremiumUpsellGradientBackground, obj5);
                                                                    }
                                                                    const obj6 = { children: items };
                                                                    items = [tmp16, tmp27Result];
                                                                    return tmp14(tmp15, obj6);
                                                                  }
                                                                }
                                                              }
                                                            }
                                                            return null;
                                                          }
                                                        }
                                                      } else {
                                                        let tmp5Result = tmp5(tmp14 ? tmp2[39] : tmp2[40]);
                                                        const hasSearchUpsell = tmp24.hasSearchUpsell;
                                                        let tmp32 = guildId;
                                                        if (guildId == null) {
                                                          let guild_id1;
                                                          if (channel != null) {
                                                            guild_id1 = channel.guild_id;
                                                          }
                                                          tmp32 = guild_id1;
                                                        }
                                                        if (cResult[45] === tmp5Result) {
                                                          if (cResult[46] === analyticsLocations) {
                                                            if (cResult[47] === setting) {
                                                              if (cResult[48] === bottomSheetIndex) {
                                                                if (cResult[49] === categoryIndexActive) {
                                                                  if (cResult[50] === tmp24) {
                                                                    if (cResult[51] === emojiPickerListRef) {
                                                                      if (cResult[52] === (undefined !== inPortalKeyboard && inPortalKeyboard)) {
                                                                        if (cResult[53] === num) {
                                                                          if (cResult[54] === num2) {
                                                                            if (cResult[55] === tmp22) {
                                                                              if (cResult[56] === tmp21) {
                                                                                if (cResult[57] === onShowNitroUpsell) {
                                                                                  if (cResult[58] === tmp28) {
                                                                                    if (cResult[59] === tmp32) {
                                                                                      let tmp34;
                                                                                      if (cResult[60] === useTier0UpsellContent) {
                                                                                        tmp34 = cResult[61];
                                                                                      }
                                                                                      if (cResult[62] === bottomSheetIndex) {
                                                                                        if (cResult[63] === hasSearchUpsell) {
                                                                                          if (cResult[64] === (undefined !== inPortalKeyboard && inPortalKeyboard)) {
                                                                                            let tmp37;
                                                                                            if (cResult[65] === shouldShowUpsell) {
                                                                                              tmp37 = cResult[66];
                                                                                            }
                                                                                            if (cResult[67] === tmp34) {
                                                                                              let tmp41;
                                                                                              if (cResult[68] === tmp37) {
                                                                                                tmp41 = cResult[69];
                                                                                              }
                                                                                              return tmp41;
                                                                                            }
                                                                                            let obj3 = { children: items };
                                                                                            items = [tmp34, tmp37];
                                                                                            const tmp44 = onLongPressEmoji(onPressEmoji, obj3);
                                                                                            cResult[67] = tmp34;
                                                                                            class Ee {
                                                                                              constructor(item) {
                                                                                                let emojis;
                                                                                                let emojisDisabled;
                                                                                                let footer;
                                                                                                let index;
                                                                                                let isSectionNitroLocked;
                                                                                                let items;
                                                                                                let row;
                                                                                                let target;
                                                                                                item = item.item;
                                                                                                const type = item.type;
                                                                                                ({ target, index } = item);
                                                                                                if (useEmojiPickerData.EmojiPickerItemType.NATIVE_SECTION !== type) {
                                                                                                  if (useEmojiPickerData.EmojiPickerItemType.PLACEHOLDER !== type) {
                                                                                                    if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW_SLIM !== type) {
                                                                                                      if (useEmojiPickerData.EmojiPickerItemType.TITLE === type) {
                                                                                                        const title = item.title;
                                                                                                        if ("StickyHeader" === target) {
                                                                                                          const current = emojiPickerListRef.current;
                                                                                                          if (current != null) {
                                                                                                            const result = current.onStickyHeaderRendered(index);
                                                                                                          }
                                                                                                        }
                                                                                                        const obj2 = { label: title, isSectionNitroLocked: item.isSectionNitroLocked, useTier0UpsellContent };
                                                                                                        return syncedClientThemes(EmojiPickerListComponents.Section, obj2);
                                                                                                      } else if (useEmojiPickerData.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK === type) {
                                                                                                        const obj3 = { position: item.position, useTier0UpsellContent };
                                                                                                        return syncedClientThemes(PremiumUpsellSectionDividerDefault, obj3);
                                                                                                      } else {
                                                                                                        let tmp27Result;
                                                                                                        if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW === type) {
                                                                                                          ({ emojis, emojisDisabled, footer, row, isSectionNitroLocked } = item);
                                                                                                          const obj4 = { emojis, emojisDisabled, category: footer, rowSize: rounded, containerWidth, onPressEmoji, onLongPressEmoji, animateEmoji: setting, row, isSectionNitroLocked };
                                                                                                          tmp27Result = syncedClientThemes(tmp(9734).EmojiPickerListRow, obj4);
                                                                                                        } else if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW_NSFW === type) {
                                                                                                          tmp27Result = syncedClientThemes(tmp(9733).NSFWRow, {});
                                                                                                        } else if (useEmojiPickerData.EmojiPickerItemType.FOOTER_UPSELL === type) {
                                                                                                          let guild_id;
                                                                                                          const PremiumSearchUpsell = tmp(9738).PremiumSearchUpsell;
                                                                                                          const tmp27 = syncedClientThemes;
                                                                                                          if (channel != null) {
                                                                                                            guild_id = channel.guild_id;
                                                                                                          }
                                                                                                          const obj = { guildId: guild_id, analyticsLocations, useTier0UpsellContent };
                                                                                                          tmp27Result = tmp27(PremiumSearchUpsell, obj);
                                                                                                        }
                                                                                                        let tmp16 = true === item.isSectionNitroLocked;
                                                                                                        const tmp14 = closure_16;
                                                                                                        const tmp15 = closure_15;
                                                                                                        if (tmp16) {
                                                                                                          const obj5 = { useTier0UpsellContent };
                                                                                                          tmp16 = syncedClientThemes(tmp(9731).PremiumUpsellGradientBackground, obj5);
                                                                                                        }
                                                                                                        const obj6 = { children: items };
                                                                                                        items = [tmp16, tmp27Result];
                                                                                                        return tmp14(tmp15, obj6);
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                                return null;
                                                                                              }
                                                                                            }
                                                                                            cResult[68] = tmp37;
                                                                                            cResult[69] = tmp44;
                                                                                            tmp41 = tmp44;
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                      let tmp38 = !hasSearchUpsell;
                                                                                      if (tmp38) {
                                                                                        let obj4 = { bottomSheetIndex, featureName: tmp(tmp2[19]).EntitlementFeatureNames.EMOJIS_EVERYWHERE, inPortalKeyboard: tmp4, shouldShow: shouldShowUpsell };
                                                                                        const tmp5Result2 = emojiPickerListRef(channel[41]);
                                                                                        tmp38 = useTier0UpsellContent(tmp5Result2, obj4);
                                                                                      }
                                                                                      cResult[62] = bottomSheetIndex;
                                                                                      cResult[63] = hasSearchUpsell;
                                                                                      cResult[64] = undefined !== inPortalKeyboard && inPortalKeyboard;
                                                                                      cResult[65] = shouldShowUpsell;
                                                                                      class Ee {
                                                                                        constructor(item) {
                                                                                          let emojis;
                                                                                          let emojisDisabled;
                                                                                          let footer;
                                                                                          let index;
                                                                                          let isSectionNitroLocked;
                                                                                          let items;
                                                                                          let row;
                                                                                          let target;
                                                                                          item = item.item;
                                                                                          const type = item.type;
                                                                                          ({ target, index } = item);
                                                                                          if (useEmojiPickerData.EmojiPickerItemType.NATIVE_SECTION !== type) {
                                                                                            if (useEmojiPickerData.EmojiPickerItemType.PLACEHOLDER !== type) {
                                                                                              if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW_SLIM !== type) {
                                                                                                if (useEmojiPickerData.EmojiPickerItemType.TITLE === type) {
                                                                                                  const title = item.title;
                                                                                                  if ("StickyHeader" === target) {
                                                                                                    const current = emojiPickerListRef.current;
                                                                                                    if (current != null) {
                                                                                                      const result = current.onStickyHeaderRendered(index);
                                                                                                    }
                                                                                                  }
                                                                                                  const obj2 = { label: title, isSectionNitroLocked: item.isSectionNitroLocked, useTier0UpsellContent };
                                                                                                  return syncedClientThemes(EmojiPickerListComponents.Section, obj2);
                                                                                                } else if (useEmojiPickerData.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK === type) {
                                                                                                  const obj3 = { position: item.position, useTier0UpsellContent };
                                                                                                  return syncedClientThemes(PremiumUpsellSectionDividerDefault, obj3);
                                                                                                } else {
                                                                                                  let tmp27Result;
                                                                                                  if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW === type) {
                                                                                                    ({ emojis, emojisDisabled, footer, row, isSectionNitroLocked } = item);
                                                                                                    const obj4 = { emojis, emojisDisabled, category: footer, rowSize: rounded, containerWidth, onPressEmoji, onLongPressEmoji, animateEmoji: setting, row, isSectionNitroLocked };
                                                                                                    tmp27Result = syncedClientThemes(tmp(9734).EmojiPickerListRow, obj4);
                                                                                                  } else if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW_NSFW === type) {
                                                                                                    tmp27Result = syncedClientThemes(tmp(9733).NSFWRow, {});
                                                                                                  } else if (useEmojiPickerData.EmojiPickerItemType.FOOTER_UPSELL === type) {
                                                                                                    let guild_id;
                                                                                                    const PremiumSearchUpsell = tmp(9738).PremiumSearchUpsell;
                                                                                                    const tmp27 = syncedClientThemes;
                                                                                                    if (channel != null) {
                                                                                                      guild_id = channel.guild_id;
                                                                                                    }
                                                                                                    const obj = { guildId: guild_id, analyticsLocations, useTier0UpsellContent };
                                                                                                    tmp27Result = tmp27(PremiumSearchUpsell, obj);
                                                                                                  }
                                                                                                  let tmp16 = true === item.isSectionNitroLocked;
                                                                                                  const tmp14 = closure_16;
                                                                                                  const tmp15 = closure_15;
                                                                                                  if (tmp16) {
                                                                                                    const obj5 = { useTier0UpsellContent };
                                                                                                    tmp16 = syncedClientThemes(tmp(9731).PremiumUpsellGradientBackground, obj5);
                                                                                                  }
                                                                                                  const obj6 = { children: items };
                                                                                                  items = [tmp16, tmp27Result];
                                                                                                  return tmp14(tmp15, obj6);
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                          return null;
                                                                                        }
                                                                                      }
                                                                                      cResult[66] = tmp38;
                                                                                      tmp37 = tmp38;
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                        let obj5 = { analyticsLocations, animateEmoji: setting, bottomSheetIndex, categoryIndexActive, data: tmp24, guildId: null, inPortalKeyboard: tmp4, onPressEmoji: tmp21, onLongPressEmoji: tmp22, onShowNitroUpsell, paddingBottom: num, paddingTop: num2, ref: emojiPickerListRef, renderItem: tmp28, useTier0UpsellContent };
                                                        class Ee {
                                                          constructor(item) {
                                                            let emojis;
                                                            let emojisDisabled;
                                                            let footer;
                                                            let index;
                                                            let isSectionNitroLocked;
                                                            let items;
                                                            let row;
                                                            let target;
                                                            item = item.item;
                                                            const type = item.type;
                                                            ({ target, index } = item);
                                                            if (useEmojiPickerData.EmojiPickerItemType.NATIVE_SECTION !== type) {
                                                              if (useEmojiPickerData.EmojiPickerItemType.PLACEHOLDER !== type) {
                                                                if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW_SLIM !== type) {
                                                                  if (useEmojiPickerData.EmojiPickerItemType.TITLE === type) {
                                                                    const title = item.title;
                                                                    if ("StickyHeader" === target) {
                                                                      const current = emojiPickerListRef.current;
                                                                      if (current != null) {
                                                                        const result = current.onStickyHeaderRendered(index);
                                                                      }
                                                                    }
                                                                    const obj2 = { label: title, isSectionNitroLocked: item.isSectionNitroLocked, useTier0UpsellContent };
                                                                    return syncedClientThemes(EmojiPickerListComponents.Section, obj2);
                                                                  } else if (useEmojiPickerData.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK === type) {
                                                                    const obj3 = { position: item.position, useTier0UpsellContent };
                                                                    return syncedClientThemes(PremiumUpsellSectionDividerDefault, obj3);
                                                                  } else {
                                                                    let tmp27Result;
                                                                    if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW === type) {
                                                                      ({ emojis, emojisDisabled, footer, row, isSectionNitroLocked } = item);
                                                                      const obj4 = { emojis, emojisDisabled, category: footer, rowSize: rounded, containerWidth, onPressEmoji, onLongPressEmoji, animateEmoji: setting, row, isSectionNitroLocked };
                                                                      tmp27Result = syncedClientThemes(tmp(9734).EmojiPickerListRow, obj4);
                                                                    } else if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW_NSFW === type) {
                                                                      tmp27Result = syncedClientThemes(tmp(9733).NSFWRow, {});
                                                                    } else if (useEmojiPickerData.EmojiPickerItemType.FOOTER_UPSELL === type) {
                                                                      let guild_id;
                                                                      const PremiumSearchUpsell = tmp(9738).PremiumSearchUpsell;
                                                                      const tmp27 = syncedClientThemes;
                                                                      if (channel != null) {
                                                                        guild_id = channel.guild_id;
                                                                      }
                                                                      const obj = { guildId: guild_id, analyticsLocations, useTier0UpsellContent };
                                                                      tmp27Result = tmp27(PremiumSearchUpsell, obj);
                                                                    }
                                                                    let tmp16 = true === item.isSectionNitroLocked;
                                                                    const tmp14 = closure_16;
                                                                    const tmp15 = closure_15;
                                                                    if (tmp16) {
                                                                      const obj5 = { useTier0UpsellContent };
                                                                      tmp16 = syncedClientThemes(tmp(9731).PremiumUpsellGradientBackground, obj5);
                                                                    }
                                                                    const obj6 = { children: items };
                                                                    items = [tmp16, tmp27Result];
                                                                    return tmp14(tmp15, obj6);
                                                                  }
                                                                }
                                                              }
                                                            }
                                                            return null;
                                                          }
                                                        }
                                                        const tmp36 = useTier0UpsellContent(tmp5Result, obj5);
                                                        cResult[45] = tmp5Result;
                                                        cResult[46] = analyticsLocations;
                                                        cResult[47] = setting;
                                                        cResult[48] = bottomSheetIndex;
                                                        cResult[49] = categoryIndexActive;
                                                        cResult[50] = tmp24;
                                                        cResult[51] = emojiPickerListRef;
                                                        cResult[52] = undefined !== inPortalKeyboard && inPortalKeyboard;
                                                        cResult[53] = num;
                                                        cResult[54] = num2;
                                                        cResult[55] = tmp22;
                                                        cResult[56] = tmp21;
                                                        cResult[57] = onShowNitroUpsell;
                                                        cResult[58] = tmp28;
                                                        cResult[59] = tmp32;
                                                        cResult[60] = useTier0UpsellContent;
                                                        cResult[61] = tmp36;
                                                        tmp34 = tmp36;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      cResult[32] = analyticsLocations;
                                      cResult[33] = setting;
                                      let guild_id2;
                                      if (channel != null) {
                                        guild_id2 = channel.guild_id;
                                      }
                                      class Ee {
                                        constructor(item) {
                                          let emojis;
                                          let emojisDisabled;
                                          let footer;
                                          let index;
                                          let isSectionNitroLocked;
                                          let items;
                                          let row;
                                          let target;
                                          item = item.item;
                                          const type = item.type;
                                          ({ target, index } = item);
                                          if (useEmojiPickerData.EmojiPickerItemType.NATIVE_SECTION !== type) {
                                            if (useEmojiPickerData.EmojiPickerItemType.PLACEHOLDER !== type) {
                                              if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW_SLIM !== type) {
                                                if (useEmojiPickerData.EmojiPickerItemType.TITLE === type) {
                                                  const title = item.title;
                                                  if ("StickyHeader" === target) {
                                                    const current = emojiPickerListRef.current;
                                                    if (current != null) {
                                                      const result = current.onStickyHeaderRendered(index);
                                                    }
                                                  }
                                                  const obj2 = { label: title, isSectionNitroLocked: item.isSectionNitroLocked, useTier0UpsellContent };
                                                  return syncedClientThemes(EmojiPickerListComponents.Section, obj2);
                                                } else if (useEmojiPickerData.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK === type) {
                                                  const obj3 = { position: item.position, useTier0UpsellContent };
                                                  return syncedClientThemes(PremiumUpsellSectionDividerDefault, obj3);
                                                } else {
                                                  let tmp27Result;
                                                  if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW === type) {
                                                    ({ emojis, emojisDisabled, footer, row, isSectionNitroLocked } = item);
                                                    const obj4 = { emojis, emojisDisabled, category: footer, rowSize: rounded, containerWidth, onPressEmoji, onLongPressEmoji, animateEmoji: setting, row, isSectionNitroLocked };
                                                    tmp27Result = syncedClientThemes(tmp(9734).EmojiPickerListRow, obj4);
                                                  } else if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW_NSFW === type) {
                                                    tmp27Result = syncedClientThemes(tmp(9733).NSFWRow, {});
                                                  } else if (useEmojiPickerData.EmojiPickerItemType.FOOTER_UPSELL === type) {
                                                    let guild_id;
                                                    const PremiumSearchUpsell = tmp(9738).PremiumSearchUpsell;
                                                    const tmp27 = syncedClientThemes;
                                                    if (channel != null) {
                                                      guild_id = channel.guild_id;
                                                    }
                                                    const obj = { guildId: guild_id, analyticsLocations, useTier0UpsellContent };
                                                    tmp27Result = tmp27(PremiumSearchUpsell, obj);
                                                  }
                                                  let tmp16 = true === item.isSectionNitroLocked;
                                                  const tmp14 = closure_16;
                                                  const tmp15 = closure_15;
                                                  if (tmp16) {
                                                    const obj5 = { useTier0UpsellContent };
                                                    tmp16 = syncedClientThemes(tmp(9731).PremiumUpsellGradientBackground, obj5);
                                                  }
                                                  const obj6 = { children: items };
                                                  items = [tmp16, tmp27Result];
                                                  return tmp14(tmp15, obj6);
                                                }
                                              }
                                            }
                                          }
                                          return null;
                                        }
                                      }
                                      cResult[34] = guild_id2;
                                      cResult[35] = tmp7;
                                      cResult[36] = emojiPickerListRef;
                                      cResult[37] = tmp22;
                                      cResult[38] = tmp21;
                                      cResult[39] = rounded;
                                      cResult[40] = useTier0UpsellContent;
                                      cResult[41] = Ee;
                                      tmp28 = Ee;
                                    }
                                  }
                                  let obj6 = { emojiSections: arr3, rowSize: rounded, isNativeEmojiPickerEnabled: tmp14 };
                                  cResult[28] = arr3;
                                  cResult[30] = rounded;
                                  cResult[31] = obj6;
                                  tmp23 = obj6;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  function ne(emoji, category) {
                    let emojis;
                    let intl;
                    let obj11;
                    let obj13;
                    let obj6;
                    let obj7;
                    let tmp20;
                    let tmp27;
                    let str;
                    if (searchQueryRef != null) {
                      str = searchQueryRef.current;
                    }
                    if (str == null) {
                      str = "";
                    }
                    const obj = HapticUtils;
                    const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
                    const obj2 = EmojiUtilsDefault;
                    const obj3 = { emoji, channel, intention: emojiPickerIntention, guildId, bypassPremiumEmojiEntitlement };
                    const emojiUnavailableReason = obj2.getEmojiUnavailableReason(obj3);
                    if (null === emojiUnavailableReason) {
                      if (onPressEmoji != null) {
                        onPressEmoji(emoji);
                      }
                    } else if (analyticsLocations.ROLE_SUBSCRIPTION_LOCKED === emojiUnavailableReason) {
                      const tmp3Result = ChatInputUtils;
                      tmp3Result.dismissKeyboard();
                      if (null != emoji.guildId) {
                        const obj4 = { guildId: emoji.guildId };
                        const tmp5Result = RoleSubscriptionUpsellUtilsDefault;
                        const result1 = tmp5Result.handleShowEmojiUpsellAlert(obj4);
                      }
                    } else if (tmp53.PREMIUM_LOCKED === emojiUnavailableReason) {
                      let DM_CHANNEL;
                      let EMOJI_PICKER_EMOJI_CLICKED;
                      let guild_id;
                      const obj5 = { initialUpsellKey: emoji.animated ? React4.ANIMATED_EMOJI : React4.GLOBAL_EMOJI, analyticsLocation: obj6, analyticsLocations: tmp20, analyticsProperties: obj7 };
                      const handleShowUpsellAlert = PremiumUpsellUtilsDefault.handleShowUpsellAlert;
                      PremiumUpsellUtilsDefault;
                      if (channel != null) {
                        guild_id = tmp7.guild_id;
                      }
                      if (null != guild_id) {
                        DM_CHANNEL = metroImportDefault.GUILD_CHANNEL;
                      } else {
                        DM_CHANNEL = metroImportDefault.DM_CHANNEL;
                      }
                      obj6 = { page: DM_CHANNEL, section: metroImportAll.EMOJI_PICKER_POPOUT, object: metroRequire.EMOJI };
                      if (category === EmojiCategoryTypes.SUGGESTED) {
                        const items = [];
                        const arraySpreadResult = HermesBuiltin.arraySpread(items, analyticsLocations, 0);
                        items[arraySpreadResult] = AnalyticsLocationDefault.EMOJI_SUGGESTIONS;
                        tmp20 = items;
                      } else {
                        tmp20 = analyticsLocations;
                      }
                      if (emojiPickerIntention === unpackModuleId.REACTION) {
                        EMOJI_PICKER_EMOJI_CLICKED = PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
                      } else {
                        EMOJI_PICKER_EMOJI_CLICKED = PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED;
                      }
                      obj7 = { type: EMOJI_PICKER_EMOJI_CLICKED, is_animated: emoji.animated, is_external: tmp27, has_search_query: str.length > 0 };
                      tmp27 = null != emoji.guildId;
                      if (tmp27) {
                        let guild_id1;
                        guildId = emoji.guildId;
                        if (channel != null) {
                          guild_id1 = tmp7.guild_id;
                        }
                        tmp27 = guildId !== guild_id1;
                      }
                      const result2 = handleShowUpsellAlert(obj5);
                    } else {
                      const obj8 = { text: intl.string(intl2.t.VsE5yG) };
                      const open = ToastActionCreatorsDefault.open;
                      ToastActionCreatorsDefault;
                      intl = tmp3(1126).intl;
                      open("EMOJI_PICKER_LIST_PRESS_DISABLED", obj8);
                    }
                    if (null == emojiUnavailableReason) {
                      if (category === EmojiCategoryTypes.SUGGESTED) {
                        const found = categories.find((type) => type.type === constants.SUGGESTED);
                        const obj9 = { emoji, displayedSuggestions: emojis };
                        emojis = undefined;
                        const tmp5Result6 = trackEmojiSuggestionSelectedDefault;
                        if (found != null) {
                          emojis = found.emojis;
                        }
                        if (emojis == null) {
                          emojis = [];
                        }
                        tmp5Result6(obj9);
                      }
                    }
                    const tmp3Result2 = EmojiPickerUtils;
                    if (str.length > 0) {
                      let DM_CHANNEL3;
                      let guild_id2;
                      const trackEmojiSearchSelect = tmp3Result2.trackEmojiSearchSelect;
                      const obj10 = { emoji, location: obj11, searchQuery: str, intention: emojiPickerIntention, messageId };
                      if (channel != null) {
                        guild_id2 = tmp7.guild_id;
                      }
                      if (null != guild_id2) {
                        DM_CHANNEL3 = metroImportDefault.GUILD_CHANNEL;
                      } else {
                        DM_CHANNEL3 = metroImportDefault.DM_CHANNEL;
                      }
                      obj11 = { page: DM_CHANNEL3, section: metroImportAll.EMOJI_PICKER_POPOUT, object: metroRequire.EMOJI };
                      const result3 = trackEmojiSearchSelect(obj10);
                    } else {
                      let DM_CHANNEL2;
                      let guild_id3;
                      const trackEmojiSelect = tmp3Result2.trackEmojiSelect;
                      const obj12 = { emoji, pickerIntention: emojiPickerIntention, category, location: obj13, messageId };
                      if (channel != null) {
                        guild_id3 = tmp7.guild_id;
                      }
                      if (null != guild_id3) {
                        DM_CHANNEL2 = metroImportDefault.GUILD_CHANNEL;
                      } else {
                        DM_CHANNEL2 = metroImportDefault.DM_CHANNEL;
                      }
                      obj13 = { page: DM_CHANNEL2, section: metroImportAll.EMOJI_PICKER_POPOUT, object: metroRequire.EMOJI };
                      trackEmojiSelect(obj12);
                    }
                  }
                  cResult[16] = analyticsLocations;
                  cResult[17] = bypassPremiumEmojiEntitlement;
                  cResult[18] = categories;
                  cResult[19] = channel;
                  cResult[20] = guildId;
                  cResult[21] = emojiPickerIntention;
                  cResult[22] = messageId;
                  cResult[23] = onPressEmoji;
                  cResult[24] = searchQueryRef;
                  cResult[25] = ne;
                  tmp21 = ne;
                }
              }
            }
          }
        }
        if (null != emojis) {
          let obj7 = { emojis, rowSize: rounded, limit: num7 };
          num7 = undefined;
          if (tmp14) {
            num7 = 200;
          }
          searchResults = computeSearchResults(obj7);
        } else {
          let obj8 = { categories, rowSize: rounded, isNativeEmojiPickerEnabled: tmp14 };
          searchResults = computeCategories(obj8);
        }
        cResult[8] = categories;
        cResult[9] = computeCategories;
        cResult[10] = computeSearchResults;
        cResult[11] = emojis;
        cResult[12] = tmp14;
        cResult[13] = rounded;
        cResult[14] = searchResults;
        arr3 = searchResults;
      }
    }
    let obj9 = { intention: emojiPickerIntention, rowSize: rounded, analyticsObject };
    cResult[4] = analyticsObject;
    cResult[6] = rounded;
    cResult[7] = obj9;
    tmp15 = obj9;
  }
  const fn = function u() {
    const obj = TopEmojisActionCreators;
    const result = obj.updateNewlyAddedLastSeen(guildId, id);
  };
  const items1 = [id, guildId];
  cResult[0] = guildId;
  cResult[1] = id;
  cResult[2] = fn;
  cResult[3] = items1;
  tmp11 = items1;
  tmp10 = fn;
}) : (function EmojiPickerList(emojiPickerListRef) {
  let bottomSheetIndex;
  let categories;
  let channel;
  let emojis;
  let num3;
  let tmp12Result;
  ({ bottomSheetIndex, categories } = emojiPickerListRef);
  emojiPickerListRef = emojiPickerListRef.emojiPickerListRef;
  ({ emojis, channel } = emojiPickerListRef);
  let guildId = emojiPickerListRef.guildId;
  onPressEmoji = emojiPickerListRef.onPressEmoji;
  onLongPressEmoji = emojiPickerListRef.onLongPressEmoji;
  const emojiPickerIntention = emojiPickerListRef.emojiPickerIntention;
  let num = emojiPickerListRef.insetBottom;
  const categoryIndexActive = emojiPickerListRef.categoryIndexActive;
  if (num === undefined) {
    num = 0;
  }
  let num2 = emojiPickerListRef.insetTop;
  if (num2 === undefined) {
    num2 = 0;
  }
  let flag = emojiPickerListRef.inPortalKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  const searchQueryRef = emojiPickerListRef.searchQueryRef;
  const messageId = emojiPickerListRef.messageId;
  const bypassPremiumEmojiEntitlement = emojiPickerListRef.bypassPremiumEmojiEntitlement;
  let rounded;
  let useTier0UpsellContent;
  onPressEmoji = undefined;
  let callback1;
  let setting;
  const tmp = emojiPickerListRef;
  const analyticsObject = emojiPickerListRef.analyticsObject;
  const tmp3 = emojiPickerListRef(channel[10]);
  const analyticsLocations = tmp3(emojiPickerListRef(channel[11]).EMOJI).analyticsLocations;
  const tmp4 = emojiPickerListRef(channel[12])(flag);
  containerWidth = tmp4;
  rounded = Math.floor((tmp4 - rounded) / (onLongPressEmoji + rounded));
  const newlyAddedEmojis = emojiPickerListRef(channel[13])(guildId, emojiPickerIntention).newlyAddedEmojis;
  let id = null;
  if (newlyAddedEmojis.length > 0) {
    id = newlyAddedEmojis[0].id;
  }
  let obj = guildId;
  let items = [id, guildId];
  const effect = guildId.useEffect(() => {
    const obj = TopEmojisActionCreators;
    const result = obj.updateNewlyAddedLastSeen(guildId, id);
  }, items);
  const tmp8 = tmp(channel[15])();
  let obj2 = categories(tmp2[16]);
  const trackOnEmojiPickerOpenedForReactions = obj2.useTrackOnEmojiPickerOpenedForReactions({ intention: emojiPickerIntention, rowSize: rounded, analyticsObject });
  tmp(channel[17])();
  if (null != emojis) {
    let obj3 = { emojis, rowSize: rounded, limit: num3 };
    num3 = undefined;
    if (tmp8) {
      num3 = 200;
    }
    tmp12Result = tmp13(obj3);
  } else {
    let obj4 = { categories, rowSize: rounded, isNativeEmojiPickerEnabled: tmp8 };
    tmp12Result = tmp12(obj4);
  }
  const usePremiumUpsellConfig = tmp9(tmp2[20]).usePremiumUpsellConfig;
  categories(channel[20]);
  const tmp9Result2 = categories(channel[18]);
  useTier0UpsellContent = usePremiumUpsellConfig(tmp9Result2.getUpsellType(tmp9(tmp2[19]).EntitlementFeatureNames.EMOJIS_EVERYWHERE)).useTier0UpsellContent;
  const items1 = [searchQueryRef, channel, emojiPickerIntention, guildId, categories, onPressEmoji, analyticsLocations, messageId, bypassPremiumEmojiEntitlement];
  onPressEmoji = obj.useCallback((emoji, category) => {
    let emojis;
    let intl;
    let obj11;
    let obj13;
    let obj6;
    let obj7;
    let tmp20;
    let tmp27;
    let str;
    if (searchQueryRef != null) {
      str = searchQueryRef.current;
    }
    if (str == null) {
      str = "";
    }
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT);
    const obj2 = EmojiUtilsDefault;
    const obj3 = { emoji, channel, intention: emojiPickerIntention, guildId, bypassPremiumEmojiEntitlement };
    const emojiUnavailableReason = obj2.getEmojiUnavailableReason(obj3);
    if (null === emojiUnavailableReason) {
      if (onPressEmoji != null) {
        onPressEmoji(emoji);
      }
    } else if (analyticsLocations.ROLE_SUBSCRIPTION_LOCKED === emojiUnavailableReason) {
      const tmp3Result = ChatInputUtils;
      tmp3Result.dismissKeyboard();
      if (null != emoji.guildId) {
        const obj4 = { guildId: emoji.guildId };
        const tmp5Result = RoleSubscriptionUpsellUtilsDefault;
        const result1 = tmp5Result.handleShowEmojiUpsellAlert(obj4);
      }
    } else if (tmp53.PREMIUM_LOCKED === emojiUnavailableReason) {
      let DM_CHANNEL;
      let EMOJI_PICKER_EMOJI_CLICKED;
      let guild_id;
      const obj5 = { initialUpsellKey: emoji.animated ? React4.ANIMATED_EMOJI : React4.GLOBAL_EMOJI, analyticsLocation: obj6, analyticsLocations: tmp20, analyticsProperties: obj7 };
      const handleShowUpsellAlert = PremiumUpsellUtilsDefault.handleShowUpsellAlert;
      PremiumUpsellUtilsDefault;
      if (channel != null) {
        guild_id = tmp7.guild_id;
      }
      if (null != guild_id) {
        DM_CHANNEL = metroImportDefault.GUILD_CHANNEL;
      } else {
        DM_CHANNEL = metroImportDefault.DM_CHANNEL;
      }
      obj6 = { page: DM_CHANNEL, section: metroImportAll.EMOJI_PICKER_POPOUT, object: metroRequire.EMOJI };
      if (category === EmojiCategoryTypes.SUGGESTED) {
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items, analyticsLocations, 0);
        items[arraySpreadResult] = AnalyticsLocationDefault.EMOJI_SUGGESTIONS;
        tmp20 = items;
      } else {
        tmp20 = analyticsLocations;
      }
      if (emojiPickerIntention === unpackModuleId.REACTION) {
        EMOJI_PICKER_EMOJI_CLICKED = PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
      } else {
        EMOJI_PICKER_EMOJI_CLICKED = PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED;
      }
      obj7 = { type: EMOJI_PICKER_EMOJI_CLICKED, is_animated: emoji.animated, is_external: tmp27, has_search_query: str.length > 0 };
      tmp27 = null != emoji.guildId;
      if (tmp27) {
        let guild_id1;
        guildId = emoji.guildId;
        if (channel != null) {
          guild_id1 = tmp7.guild_id;
        }
        tmp27 = guildId !== guild_id1;
      }
      const result2 = handleShowUpsellAlert(obj5);
    } else {
      const obj8 = { text: intl.string(intl2.t.VsE5yG) };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = tmp3(1126).intl;
      open("EMOJI_PICKER_LIST_PRESS_DISABLED", obj8);
    }
    if (null == emojiUnavailableReason) {
      if (category === EmojiCategoryTypes.SUGGESTED) {
        const found = categories.find((type) => type.type === constants.SUGGESTED);
        const obj9 = { emoji, displayedSuggestions: emojis };
        emojis = undefined;
        const tmp5Result6 = trackEmojiSuggestionSelectedDefault;
        if (found != null) {
          emojis = found.emojis;
        }
        if (emojis == null) {
          emojis = [];
        }
        tmp5Result6(obj9);
      }
    }
    const tmp3Result2 = EmojiPickerUtils;
    if (str.length > 0) {
      let DM_CHANNEL3;
      let guild_id2;
      const trackEmojiSearchSelect = tmp3Result2.trackEmojiSearchSelect;
      const obj10 = { emoji, location: obj11, searchQuery: str, intention: emojiPickerIntention, messageId };
      if (channel != null) {
        guild_id2 = tmp7.guild_id;
      }
      if (null != guild_id2) {
        DM_CHANNEL3 = metroImportDefault.GUILD_CHANNEL;
      } else {
        DM_CHANNEL3 = metroImportDefault.DM_CHANNEL;
      }
      obj11 = { page: DM_CHANNEL3, section: metroImportAll.EMOJI_PICKER_POPOUT, object: metroRequire.EMOJI };
      const result3 = trackEmojiSearchSelect(obj10);
    } else {
      let DM_CHANNEL2;
      let guild_id3;
      const trackEmojiSelect = tmp3Result2.trackEmojiSelect;
      const obj12 = { emoji, pickerIntention: emojiPickerIntention, category, location: obj13, messageId };
      if (channel != null) {
        guild_id3 = tmp7.guild_id;
      }
      if (null != guild_id3) {
        DM_CHANNEL2 = metroImportDefault.GUILD_CHANNEL;
      } else {
        DM_CHANNEL2 = metroImportDefault.DM_CHANNEL;
      }
      obj13 = { page: DM_CHANNEL2, section: metroImportAll.EMOJI_PICKER_POPOUT, object: metroRequire.EMOJI };
      trackEmojiSelect(obj12);
    }
  }, items1);
  const items2 = [onLongPressEmoji];
  callback1 = obj.useCallback((arg0) => {
    if (onLongPressEmoji != null) {
      tmp(arg0);
    }
  }, items2);
  const tmp17 = tmp(channel[30])({ emojiSections: tmp12Result, rowSize: rounded, isNativeEmojiPickerEnabled: tmp8 });
  const AnimateEmoji = tmp9(tmp2[31]).AnimateEmoji;
  setting = AnimateEmoji.useSetting();
  const items3 = [analyticsLocations, onPressEmoji, callback1, channel, rounded, tmp4, setting, emojiPickerListRef, useTier0UpsellContent];
  const callback2 = obj.useCallback((item) => {
    let emojis;
    let emojisDisabled;
    let footer;
    let index;
    let isSectionNitroLocked;
    let items;
    let row;
    let target;
    item = item.item;
    const type = item.type;
    ({ target, index } = item);
    if (useEmojiPickerData.EmojiPickerItemType.NATIVE_SECTION !== type) {
      if (useEmojiPickerData.EmojiPickerItemType.PLACEHOLDER !== type) {
        if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW_SLIM !== type) {
          if (useEmojiPickerData.EmojiPickerItemType.TITLE === type) {
            const title = item.title;
            if ("StickyHeader" === target) {
              const current = emojiPickerListRef.current;
              if (current != null) {
                const result = current.onStickyHeaderRendered(index);
              }
            }
            const obj2 = { label: title, isSectionNitroLocked: item.isSectionNitroLocked, useTier0UpsellContent };
            return syncedClientThemes(EmojiPickerListComponents.Section, obj2);
          } else if (useEmojiPickerData.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK === type) {
            const obj3 = { position: item.position, useTier0UpsellContent };
            return syncedClientThemes(PremiumUpsellSectionDividerDefault, obj3);
          } else {
            let tmp27Result;
            if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW === type) {
              ({ emojis, emojisDisabled, footer, row, isSectionNitroLocked } = item);
              const obj4 = { emojis, emojisDisabled, category: footer, rowSize: rounded, containerWidth, onPressEmoji, onLongPressEmoji: callback1, animateEmoji: setting, row, isSectionNitroLocked };
              tmp27Result = syncedClientThemes(tmp(9734).EmojiPickerListRow, obj4);
            } else if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW_NSFW === type) {
              tmp27Result = syncedClientThemes(tmp(9733).NSFWRow, {});
            } else if (useEmojiPickerData.EmojiPickerItemType.FOOTER_UPSELL === type) {
              let guild_id;
              const PremiumSearchUpsell = tmp(9738).PremiumSearchUpsell;
              const tmp27 = syncedClientThemes;
              if (channel != null) {
                guild_id = channel.guild_id;
              }
              const obj = { guildId: guild_id, analyticsLocations, useTier0UpsellContent };
              tmp27Result = tmp27(PremiumSearchUpsell, obj);
            }
            let tmp16 = true === item.isSectionNitroLocked;
            const tmp14 = closure_16;
            const tmp15 = closure_15;
            if (tmp16) {
              const obj5 = { useTier0UpsellContent };
              tmp16 = syncedClientThemes(tmp(9731).PremiumUpsellGradientBackground, obj5);
            }
            const obj6 = { children: items };
            items = [tmp16, tmp27Result];
            return tmp14(tmp15, obj6);
          }
        }
      }
    }
    return null;
  }, items3);
  let tmp20 = tmp(tmp2[37])();
  if (0 === tmp12Result.length) {
    let obj5 = { inActionSheet: true, insetTop: num2, insetBottom: num };
    return useTier0UpsellContent(tmp(channel[38]), obj5);
  } else {
    const hasSearchUpsell = tmp17.hasSearchUpsell;
    let obj6 = { analyticsLocations, animateEmoji: setting, bottomSheetIndex, categoryIndexActive, data: tmp17, guildId, inPortalKeyboard: flag, onPressEmoji, onLongPressEmoji: callback1, onShowNitroUpsell: tmp22, paddingBottom: num, paddingTop: num2, ref: emojiPickerListRef, renderItem: callback2, useTier0UpsellContent };
    const tmp24 = callback1;
    const tmp25 = onPressEmoji;
    const tmpResult = tmp(tmp8 ? channel[39] : channel[40]);
    if (guildId == null) {
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      guildId = guild_id;
    }
    const items4 = [tmp26(tmpResult, obj6), ];
    let tmp26Result = !hasSearchUpsell;
    if (tmp26Result) {
      let obj7 = { bottomSheetIndex, featureName: tmp9(tmp2[19]).EntitlementFeatureNames.EMOJIS_EVERYWHERE, inPortalKeyboard: flag, shouldShow: tmp21 };
      const tmpResult2 = tmp(channel[41]);
      tmp26Result = tmp26(tmpResult2, obj7);
    }
    let obj8 = { children: items4 };
    items4[1] = tmp26Result;
    return tmp24(tmp25, obj8);
  }
}));
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerList.tsx");

export default memoResult;
