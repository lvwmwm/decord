// Module ID: 9752
// Function ID: 9753
// Name: EmojiPickerList
// Dependencies: [19, 9753, 1074, 1375, 1218, 1374, 21, 6583, 6603, 9754, 9744, 9742, 9755, 9743, 9756, 8614, 9421, 7273, 4801, 4802, 4487, 4701, 9758, 4528, 1115, 9748, 9763, 2021, 9769, 9766, 9770, 9773, 9767, 9776, 9777, 9784, 9786, 7277, 9788, 2]

// Module 9752 (EmojiPickerList)
import intl2 from "intl" /* 1115 */;
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1218 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import EmojiUtilsDefault from "EmojiUtils" /* 4487 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import ChatInputUtils from "ChatInputUtils" /* 4701 */;
import HapticUtils from "HapticUtils" /* 4801 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4802 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 8614 */;
import TopEmojisActionCreators from "TopEmojisActionCreators" /* 9742 */;
import EmojiPickerUtils from "EmojiPickerUtils" /* 9748 */;
import EmojiPickerListConstants from "EmojiPickerListConstants" /* 9753 */;
import RoleSubscriptionUpsellUtilsDefault from "RoleSubscriptionUpsellUtils" /* 9758 */;
import useEmojiPickerData from "useEmojiPickerData" /* 9763 */;
import PremiumUpsellSectionDividerDefault from "PremiumUpsellSectionDivider" /* 9766 */;
import EmojiPickerListComponents from "EmojiPickerListComponents" /* 9769 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let item;

let c10;
let c9;
let closure_14;
let closure_15;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const IMAGE_SIZE = EmojiPickerListConstants.IMAGE_SIZE;
({ AnalyticsObjects: hasOwnProperty, AnalyticsPages: metroRequire, AnalyticsSections: metroImportDefault, UpsellTypes: metroImportAll } = Constants);
({ EmojiDisabledReasons: c9, EmojiIntention: c10 } = EmojiConstants);
const MIN_MARGIN = ExpressionPickerConstants.MIN_MARGIN;
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = Fragment);
const memoResult = react.memo(function EmojiPickerList(guildId) {
  let bottomSheetIndex;
  let categories;
  let categoryIndexActive;
  let channel;
  let emojiPickerListRef;
  let emojis;
  let num3;
  let tmp12Result;
  let tmp22;
  ({ bottomSheetIndex, emojiPickerListRef } = guildId);
  ({ emojis, channel } = guildId);
  guildId = guildId.guildId;
  let onPressEmoji = guildId.onPressEmoji;
  const onLongPressEmoji = guildId.onLongPressEmoji;
  const emojiPickerIntention = guildId.emojiPickerIntention;
  let num = guildId.insetBottom;
  ({ categories, categoryIndexActive } = guildId);
  if (num === undefined) {
    num = 0;
  }
  let num2 = guildId.insetTop;
  if (num2 === undefined) {
    num2 = 0;
  }
  let flag = guildId.inPortalKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  const searchQueryRef = guildId.searchQueryRef;
  const messageId = guildId.messageId;
  const bypassPremiumEmojiEntitlement = guildId.bypassPremiumEmojiEntitlement;
  let rounded;
  let useTier0UpsellContent;
  onPressEmoji = undefined;
  let callback1;
  let setting;
  const tmp = channel;
  const tmp2 = guildId;
  const analyticsObject = guildId.analyticsObject;
  const tmp3 = channel(guildId[7]);
  const analyticsLocations = tmp3(channel(guildId[8]).EMOJI).analyticsLocations;
  const tmp4 = channel(guildId[9])(flag);
  const containerWidth = tmp4;
  rounded = Math.floor((tmp4 - rounded) / (onLongPressEmoji + rounded));
  const newlyAddedEmojis = channel(guildId[10])(guildId, emojiPickerIntention).newlyAddedEmojis;
  let id = null;
  if (newlyAddedEmojis.length > 0) {
    id = newlyAddedEmojis[0].id;
  }
  let obj = onPressEmoji;
  let items = [id, guildId];
  const effect = onPressEmoji.useEffect(() => {
    const obj = TopEmojisActionCreators;
    const result = obj.updateNewlyAddedLastSeen(guildId, id);
  }, items);
  const tmp8 = tmp(tmp2[12])();
  let obj2 = emojiPickerListRef(tmp2[13]);
  const trackOnEmojiPickerOpenedForReactions = obj2.useTrackOnEmojiPickerOpenedForReactions({ intention: emojiPickerIntention, rowSize: rounded, analyticsObject });
  tmp(tmp2[14])();
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
  const usePremiumUpsellConfig = tmp9(tmp2[15]).usePremiumUpsellConfig;
  emojiPickerListRef(tmp2[15]);
  const tmp9Result3 = emojiPickerListRef(tmp2[16]);
  useTier0UpsellContent = usePremiumUpsellConfig(tmp9Result3.getUpsellType(tmp9(tmp2[17]).EntitlementFeatureNames.EMOJIS_EVERYWHERE)).useTier0UpsellContent;
  const items1 = [searchQueryRef, channel, emojiPickerIntention, guildId, onPressEmoji, analyticsLocations, messageId, bypassPremiumEmojiEntitlement];
  onPressEmoji = obj.useCallback((emoji, category) => {
    let intl;
    let obj10;
    let obj12;
    let obj6;
    let obj7;
    let tmp22;
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
      const tmp2Result = ChatInputUtils;
      tmp2Result.dismissKeyboard();
      if (null != emoji.guildId) {
        const obj4 = { guildId: emoji.guildId };
        const tmp4Result = RoleSubscriptionUpsellUtilsDefault;
        const result1 = tmp4Result.handleShowEmojiUpsellAlert(obj4);
      }
    } else if (tmp44.PREMIUM_LOCKED === emojiUnavailableReason) {
      let DM_CHANNEL;
      let EMOJI_PICKER_EMOJI_CLICKED;
      let guild_id;
      const obj5 = { initialUpsellKey: emoji.animated ? metroImportAll.ANIMATED_EMOJI : metroImportAll.GLOBAL_EMOJI, analyticsLocation: obj6, analyticsLocations, analyticsProperties: obj7 };
      const handleShowUpsellAlert = PremiumUpsellUtilsDefault.handleShowUpsellAlert;
      PremiumUpsellUtilsDefault;
      if (channel != null) {
        guild_id = tmp6.guild_id;
      }
      if (null != guild_id) {
        DM_CHANNEL = metroRequire.GUILD_CHANNEL;
      } else {
        DM_CHANNEL = metroRequire.DM_CHANNEL;
      }
      obj6 = { page: DM_CHANNEL, section: metroImportDefault.EMOJI_PICKER_POPOUT, object: hasOwnProperty.EMOJI };
      if (emojiPickerIntention === containerWidth.REACTION) {
        EMOJI_PICKER_EMOJI_CLICKED = PremiumUpsellTypes.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
      } else {
        EMOJI_PICKER_EMOJI_CLICKED = PremiumUpsellTypes.EMOJI_PICKER_EMOJI_CLICKED;
      }
      obj7 = { type: EMOJI_PICKER_EMOJI_CLICKED, is_animated: emoji.animated, is_external: tmp22, has_search_query: str.length > 0 };
      tmp22 = null != emoji.guildId;
      if (tmp22) {
        let guild_id1;
        guildId = emoji.guildId;
        if (channel != null) {
          guild_id1 = tmp6.guild_id;
        }
        tmp22 = guildId !== guild_id1;
      }
      const result2 = handleShowUpsellAlert(obj5);
    } else {
      const obj8 = { key: "EMOJI_PICKER_LIST_PRESS_DISABLED", content: intl.string(intl2.t.VsE5yG) };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = tmp2(1115).intl;
      open(obj8);
    }
    const tmp2Result2 = EmojiPickerUtils;
    if (str.length > 0) {
      let DM_CHANNEL3;
      let guild_id2;
      const trackEmojiSearchSelect = tmp2Result2.trackEmojiSearchSelect;
      const obj9 = { emoji, location: obj10, searchQuery: str, intention: emojiPickerIntention, messageId };
      if (channel != null) {
        guild_id2 = tmp6.guild_id;
      }
      if (null != guild_id2) {
        DM_CHANNEL3 = metroRequire.GUILD_CHANNEL;
      } else {
        DM_CHANNEL3 = metroRequire.DM_CHANNEL;
      }
      obj10 = { page: DM_CHANNEL3, section: metroImportDefault.EMOJI_PICKER_POPOUT, object: hasOwnProperty.EMOJI };
      const result3 = trackEmojiSearchSelect(obj9);
    } else {
      let DM_CHANNEL2;
      let guild_id3;
      const trackEmojiSelect = tmp2Result2.trackEmojiSelect;
      const obj11 = { emoji, pickerIntention: emojiPickerIntention, category, location: obj12, messageId };
      if (channel != null) {
        guild_id3 = tmp6.guild_id;
      }
      if (null != guild_id3) {
        DM_CHANNEL2 = metroRequire.GUILD_CHANNEL;
      } else {
        DM_CHANNEL2 = metroRequire.DM_CHANNEL;
      }
      obj12 = { page: DM_CHANNEL2, section: metroImportDefault.EMOJI_PICKER_POPOUT, object: hasOwnProperty.EMOJI };
      trackEmojiSelect(obj11);
    }
  }, items1);
  const items2 = [onLongPressEmoji];
  callback1 = obj.useCallback((arg0) => {
    if (onLongPressEmoji != null) {
      tmp(arg0);
    }
  }, items2);
  const tmp17 = tmp(tmp2[26])({ emojiSections: tmp12Result, rowSize: rounded, isNativeEmojiPickerEnabled: tmp8 });
  const AnimateEmoji = tmp9(tmp2[27]).AnimateEmoji;
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
            return map1(EmojiPickerListComponents.Section, obj2);
          } else if (useEmojiPickerData.EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK === type) {
            const obj3 = { position: item.position, useTier0UpsellContent };
            return map1(PremiumUpsellSectionDividerDefault, obj3);
          } else {
            let tmp27Result;
            if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW === type) {
              ({ emojis, emojisDisabled, footer, row, isSectionNitroLocked } = item);
              const obj4 = { emojis, emojisDisabled, category: footer, rowSize: rounded, containerWidth, onPressEmoji, onLongPressEmoji: callback1, animateEmoji: setting, row, isSectionNitroLocked };
              tmp27Result = map1(tmp(9770).EmojiPickerListRow, obj4);
            } else if (useEmojiPickerData.EmojiPickerItemType.EMOJI_ROW_NSFW === type) {
              tmp27Result = map1(tmp(9769).NSFWRow, {});
            } else if (useEmojiPickerData.EmojiPickerItemType.FOOTER_UPSELL === type) {
              let guild_id;
              const PremiumSearchUpsell = tmp(9773).PremiumSearchUpsell;
              const tmp27 = map1;
              if (channel != null) {
                guild_id = channel.guild_id;
              }
              const obj = { guildId: guild_id, analyticsLocations, useTier0UpsellContent };
              tmp27Result = tmp27(PremiumSearchUpsell, obj);
            }
            let tmp16 = true === item.isSectionNitroLocked;
            const tmp14 = closure_15;
            const tmp15 = authStore2;
            if (tmp16) {
              const obj5 = { useTier0UpsellContent };
              tmp16 = map1(tmp(9767).PremiumUpsellGradientBackground, obj5);
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
  tmp(tmp2[33])();
  if (0 === tmp12Result.length) {
    let obj5 = { inActionSheet: true, insetTop: num2, insetBottom: num };
    return useTier0UpsellContent(tmp(tmp2[34]), obj5);
  } else {
    let hasSearchUpsell = tmp17.hasSearchUpsell;
    const tmpResult = tmp(tmp8 ? tmp2[35] : tmp2[36]);
    if (hasSearchUpsell) {
      let str = "native.EmojiPickerList";
      const tmp9Result4 = emojiPickerListRef(tmp2[37]);
      hasSearchUpsell = tmp9Result4.getMobileEmojiPickerUpsellRestyleEnabledForFeature(tmp9(tmp2[17]).EntitlementFeatureNames.EMOJIS_EVERYWHERE, "native.EmojiPickerList");
    }
    let obj6 = { analyticsLocations, animateEmoji: setting, bottomSheetIndex, categoryIndexActive, data: tmp17, guildId, inPortalKeyboard: flag, onPressEmoji, onLongPressEmoji: callback1, onShowNitroUpsell: tmp22, paddingBottom: num, paddingTop: num2, ref: emojiPickerListRef, renderItem: callback2, useTier0UpsellContent };
    const tmp24 = callback1;
    const tmp25 = onPressEmoji;
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
      let obj7 = { bottomSheetIndex, featureName: tmp9(tmp2[17]).EntitlementFeatureNames.EMOJIS_EVERYWHERE, inPortalKeyboard: flag, shouldShow: tmp21 };
      const tmpResult2 = tmp(tmp2[38]);
      tmp26Result = tmp26(tmpResult2, obj7);
    }
    let obj8 = { children: items4 };
    items4[1] = tmp26Result;
    return tmp24(tmp25, obj8);
  }
});
let result = size.fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerList.tsx");

export default memoResult;
