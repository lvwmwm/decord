// Module ID: 9946
// Function ID: 9947
// Name: EmojiPickerList
// Dependencies: [19, 6793, 9921, 1072, 1387, 1229, 1386, 21, 7320, 7345, 9947, 9926, 9925, 9948, 9949, 9950, 9764, 9775, 5068, 5255, 5256, 4959, 5202, 9952, 5707, 1114, 9996, 9922, 9997, 4834, 10003, 10000, 10004, 10008, 10001, 10011, 10012, 10019, 10021, 10023, 2]

// Module 9946 (EmojiPickerList)
import intl2 from "intl" /* 1114 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1229 */;
import PremiumConstants from "PremiumConstants" /* 1386 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4959 */;
import ChatInputUtils from "ChatInputUtils" /* 5202 */;
import HapticUtils from "HapticUtils" /* 5255 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 5256 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import EmojiPickerConstants from "EmojiPickerConstants" /* 6793 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7345 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9764 */;
import EmojiPickerListConstants from "EmojiPickerListConstants" /* 9921 */;
import EmojiPickerUtils from "EmojiPickerUtils" /* 9922 */;
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9925 */;
import RoleSubscriptionUpsellUtilsDefault from "RoleSubscriptionUpsellUtils" /* 9952 */;
import trackEmojiSuggestionSelectedDefault from "trackEmojiSuggestionSelected" /* 9996 */;
import useEmojiPickerData from "useEmojiPickerData" /* 9997 */;
import PremiumUpsellSectionDividerDefault from "PremiumUpsellSectionDivider" /* 10000 */;
import EmojiPickerListComponents from "EmojiPickerListComponents" /* 10003 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import EmojiConstants from "EmojiConstants" /* 1387 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let item;

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
const memoResult = react.memo(function EmojiPickerList(emojiPickerListRef) {
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
  let onPressEmoji = emojiPickerListRef.onPressEmoji;
  const onLongPressEmoji = emojiPickerListRef.onLongPressEmoji;
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
  const tmp3 = emojiPickerListRef(channel[8]);
  const analyticsLocations = tmp3(emojiPickerListRef(channel[9]).EMOJI).analyticsLocations;
  const tmp4 = emojiPickerListRef(channel[10])(flag);
  const containerWidth = tmp4;
  rounded = Math.floor((tmp4 - rounded) / (onLongPressEmoji + rounded));
  const newlyAddedEmojis = emojiPickerListRef(channel[11])(guildId, emojiPickerIntention).newlyAddedEmojis;
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
  const tmp8 = tmp(channel[13])();
  let obj2 = categories(tmp2[14]);
  const trackOnEmojiPickerOpenedForReactions = obj2.useTrackOnEmojiPickerOpenedForReactions({ intention: emojiPickerIntention, rowSize: rounded, analyticsObject });
  tmp(channel[15])();
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
  const usePremiumUpsellConfig = tmp9(tmp2[16]).usePremiumUpsellConfig;
  categories(channel[16]);
  const tmp9Result2 = categories(channel[17]);
  useTier0UpsellContent = usePremiumUpsellConfig(tmp9Result2.getUpsellType(tmp9(tmp2[18]).EntitlementFeatureNames.EMOJIS_EVERYWHERE)).useTier0UpsellContent;
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
      intl = tmp3(1114).intl;
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
  const tmp17 = tmp(channel[28])({ emojiSections: tmp12Result, rowSize: rounded, isNativeEmojiPickerEnabled: tmp8 });
  const AnimateEmoji = tmp9(tmp2[29]).AnimateEmoji;
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
            return authStore3(EmojiPickerListComponents.Section, obj2);
          } else if (useEmojiPickerData.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK === type) {
            const obj3 = { position: item.position, useTier0UpsellContent };
            return authStore3(PremiumUpsellSectionDividerDefault, obj3);
          } else {
            let tmp27Result;
            if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW === type) {
              ({ emojis, emojisDisabled, footer, row, isSectionNitroLocked } = item);
              const obj4 = { emojis, emojisDisabled, category: footer, rowSize: rounded, containerWidth, onPressEmoji, onLongPressEmoji: callback1, animateEmoji: setting, row, isSectionNitroLocked };
              tmp27Result = authStore3(tmp(10004).EmojiPickerListRow, obj4);
            } else if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW_NSFW === type) {
              tmp27Result = authStore3(tmp(10003).NSFWRow, {});
            } else if (useEmojiPickerData.EmojiPickerItemType.FOOTER_UPSELL === type) {
              let guild_id;
              const PremiumSearchUpsell = tmp(10008).PremiumSearchUpsell;
              const tmp27 = authStore3;
              if (channel != null) {
                guild_id = channel.guild_id;
              }
              const obj = { guildId: guild_id, analyticsLocations, useTier0UpsellContent };
              tmp27Result = tmp27(PremiumSearchUpsell, obj);
            }
            let tmp16 = true === item.isSectionNitroLocked;
            const tmp14 = authStore4;
            const tmp15 = closure_15;
            if (tmp16) {
              const obj5 = { useTier0UpsellContent };
              tmp16 = authStore3(tmp(10001).PremiumUpsellGradientBackground, obj5);
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
  let tmp20 = tmp(tmp2[35])();
  if (0 === tmp12Result.length) {
    let obj5 = { inActionSheet: true, insetTop: num2, insetBottom: num };
    return useTier0UpsellContent(tmp(channel[36]), obj5);
  } else {
    const hasSearchUpsell = tmp17.hasSearchUpsell;
    let obj6 = { analyticsLocations, animateEmoji: setting, bottomSheetIndex, categoryIndexActive, data: tmp17, guildId, inPortalKeyboard: flag, onPressEmoji, onLongPressEmoji: callback1, onShowNitroUpsell: tmp22, paddingBottom: num, paddingTop: num2, ref: emojiPickerListRef, renderItem: callback2, useTier0UpsellContent };
    const tmp24 = callback1;
    const tmp25 = onPressEmoji;
    const tmpResult = tmp(tmp8 ? channel[37] : channel[38]);
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
      let obj7 = { bottomSheetIndex, featureName: tmp9(tmp2[18]).EntitlementFeatureNames.EMOJIS_EVERYWHERE, inPortalKeyboard: flag, shouldShow: tmp21 };
      const tmpResult2 = tmp(channel[39]);
      tmp26Result = tmp26(tmpResult2, obj7);
    }
    let obj8 = { children: items4 };
    items4[1] = tmp26Result;
    return tmp24(tmp25, obj8);
  }
});
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerList.tsx");

export default memoResult;
