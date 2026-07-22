// Module ID: 9336
// Function ID: 72962
// Dependencies: []

// Module 9336
const importAllResult = importAll(dependencyMap[0]);
const IMAGE_SIZE = arg1(dependencyMap[1]).IMAGE_SIZE;
({ AnalyticsObjects: closure_5, AnalyticsPages: closure_6, AnalyticsSections: closure_7, UpsellTypes: closure_8 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ EmojiDisabledReasons: closure_9, EmojiIntention: closure_10 } = arg1(dependencyMap[3]));
const MIN_MARGIN = arg1(dependencyMap[4]).MIN_MARGIN;
const PremiumUpsellTypes = arg1(dependencyMap[5]).PremiumUpsellTypes;
const tmp3 = arg1(dependencyMap[3]);
({ jsx: closure_13, Fragment: closure_14, jsxs: closure_15 } = arg1(dependencyMap[6]));
const tmp4 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo(function EmojiPickerList(analyticsObject) {
  let bottomSheetIndex;
  let categories;
  let categoryIndexActive;
  let channel;
  let emojiPickerListRef;
  let emojis;
  ({ bottomSheetIndex, emojiPickerListRef } = analyticsObject);
  const arg1 = emojiPickerListRef;
  ({ emojis, channel } = analyticsObject);
  const importDefault = channel;
  let guildId = analyticsObject.guildId;
  const dependencyMap = guildId;
  const onPressEmoji = analyticsObject.onPressEmoji;
  const onLongPressEmoji = analyticsObject.onLongPressEmoji;
  const IMAGE_SIZE = onLongPressEmoji;
  const emojiPickerIntention = analyticsObject.emojiPickerIntention;
  let num = analyticsObject.insetBottom;
  ({ categories, categoryIndexActive } = analyticsObject);
  if (num === undefined) {
    num = 0;
  }
  let num2 = analyticsObject.insetTop;
  if (num2 === undefined) {
    num2 = 0;
  }
  let flag = analyticsObject.inPortalKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  const searchQueryRef = analyticsObject.searchQueryRef;
  const messageId = analyticsObject.messageId;
  let analyticsLocations;
  let tmp2;
  let rounded;
  let MIN_MARGIN;
  let PremiumUpsellTypes;
  let callback;
  let callback1;
  let setting;
  analyticsLocations = importDefault(dependencyMap[7])(importDefault(dependencyMap[8]).EMOJI).analyticsLocations;
  tmp2 = importDefault(dependencyMap[9])(flag);
  rounded = Math.floor((tmp2 - MIN_MARGIN) / (IMAGE_SIZE + MIN_MARGIN));
  const newlyAddedEmojis = importDefault(dependencyMap[10])(guildId, emojiPickerIntention).newlyAddedEmojis;
  let id = null;
  if (newlyAddedEmojis.length > 0) {
    id = newlyAddedEmojis[0].id;
  }
  MIN_MARGIN = id;
  const items = [id, guildId];
  const effect = importAllResult.useEffect(() => {
    const result = emojiPickerListRef(guildId[11]).updateNewlyAddedLastSeen(guildId, id);
  }, items);
  const tmp6 = importDefault(dependencyMap[12])();
  let obj = arg1(dependencyMap[13]);
  const trackOnEmojiPickerOpenedForReactions = obj.useTrackOnEmojiPickerOpenedForReactions({ intention: emojiPickerIntention, rowSize: rounded, analyticsObject: analyticsObject.analyticsObject });
  importDefault(dependencyMap[14])();
  if (null != emojis) {
    obj = { emojis, rowSize: rounded };
    let num3;
    if (tmp6) {
      num3 = 200;
    }
    obj.limit = num3;
    let tmp9Result = tmp10(obj);
  } else {
    obj = { categories, rowSize: rounded, isNativeEmojiPickerEnabled: tmp6 };
    tmp9Result = tmp9(obj);
  }
  let obj3 = arg1(dependencyMap[15]);
  let obj4 = arg1(dependencyMap[16]);
  const useTier0UpsellContent = obj3.usePremiumUpsellConfig(obj4.getUpsellType(arg1(dependencyMap[17]).EntitlementFeatureNames.EMOJIS_EVERYWHERE)).useTier0UpsellContent;
  PremiumUpsellTypes = useTier0UpsellContent;
  const items1 = [searchQueryRef, channel, emojiPickerIntention, guildId, onPressEmoji, analyticsLocations, messageId];
  callback = importAllResult.useCallback((emoji, category) => {
    let current;
    if (null != searchQueryRef) {
      current = searchQueryRef.current;
    }
    let str = "";
    if (null != current) {
      str = current;
    }
    let obj = emojiPickerListRef(guildId[18]);
    const result = obj.triggerHapticFeedback(channel(guildId[19]).IMPACT_LIGHT);
    let obj1 = channel(guildId[20]);
    obj = { emoji, channel, intention: emojiPickerIntention, guildId };
    const emojiUnavailableReason = obj1.getEmojiUnavailableReason(obj);
    if (null === emojiUnavailableReason) {
      if (null != onPressEmoji) {
        onPressEmoji(emoji);
      }
    } else if (tmp2.ROLE_SUBSCRIPTION_LOCKED === emojiUnavailableReason) {
      emojiPickerListRef(guildId[21]).dismissKeyboard();
      if (null != emoji.guildId) {
        obj = { guildId: emoji.guildId };
        const result1 = channel(guildId[22]).handleShowEmojiUpsellAlert(obj);
        const obj11 = channel(guildId[22]);
      }
      const obj10 = emojiPickerListRef(guildId[21]);
    } else if (tmp2.PREMIUM_LOCKED === emojiUnavailableReason) {
      let obj5 = channel(guildId[15]);
      obj1 = { initialUpsellKey: emoji.animated ? analyticsLocations.ANIMATED_EMOJI : analyticsLocations.GLOBAL_EMOJI };
      const obj2 = {};
      let guild_id;
      if (null != channel) {
        guild_id = channel.guild_id;
      }
      if (null != guild_id) {
        let DM_CHANNEL = searchQueryRef.GUILD_CHANNEL;
      } else {
        DM_CHANNEL = searchQueryRef.DM_CHANNEL;
      }
      obj2.page = DM_CHANNEL;
      obj2.section = messageId.EMOJI_PICKER_POPOUT;
      obj2.object = emojiPickerIntention.EMOJI;
      obj1.analyticsLocation = obj2;
      obj1.analyticsLocations = analyticsLocations;
      let obj3 = {};
      if (emojiPickerIntention === rounded.REACTION) {
        let EMOJI_PICKER_EMOJI_CLICKED = useTier0UpsellContent.EMOJI_PICKER_REACTION_EMOJI_CLICKED;
      } else {
        EMOJI_PICKER_EMOJI_CLICKED = useTier0UpsellContent.EMOJI_PICKER_EMOJI_CLICKED;
      }
      obj3.type = EMOJI_PICKER_EMOJI_CLICKED;
      obj3.is_animated = emoji.animated;
      let tmp25 = null != emoji.guildId;
      if (tmp25) {
        let guild_id1;
        if (null != channel) {
          guild_id1 = channel.guild_id;
        }
        tmp25 = emoji.guildId !== guild_id1;
      }
      obj3.is_external = tmp25;
      obj3.has_search_query = tmp3;
      obj1.analyticsProperties = obj3;
      const result2 = obj5.handleShowUpsellAlert(obj1);
    } else {
      obj3 = channel(guildId[23]);
      const obj4 = { key: "EMOJI_PICKER_LIST_PRESS_DISABLED" };
      const intl = emojiPickerListRef(guildId[24]).intl;
      obj4.content = intl.string(emojiPickerListRef(guildId[24]).t.VsE5yG);
      obj3.open(obj4);
    }
    const obj13 = emojiPickerListRef(guildId[25]);
    if (str.length > 0) {
      obj5 = { emoji };
      const obj6 = {};
      let guild_id2;
      if (null != channel) {
        guild_id2 = channel.guild_id;
      }
      if (null != guild_id2) {
        let DM_CHANNEL3 = searchQueryRef.GUILD_CHANNEL;
      } else {
        DM_CHANNEL3 = searchQueryRef.DM_CHANNEL;
      }
      obj6.page = DM_CHANNEL3;
      obj6.section = messageId.EMOJI_PICKER_POPOUT;
      obj6.object = emojiPickerIntention.EMOJI;
      obj5.location = obj6;
      obj5.searchQuery = str;
      str = emojiPickerIntention;
      obj5.intention = emojiPickerIntention;
      obj5.messageId = messageId;
      obj5 = obj13.trackEmojiSearchSelect(obj5);
    } else {
      const obj7 = { emoji, pickerIntention: emojiPickerIntention, category };
      const obj8 = {};
      let guild_id3;
      if (null != channel) {
        guild_id3 = channel.guild_id;
      }
      if (null != guild_id3) {
        let DM_CHANNEL2 = searchQueryRef.GUILD_CHANNEL;
      } else {
        DM_CHANNEL2 = searchQueryRef.DM_CHANNEL;
      }
      obj8.page = DM_CHANNEL2;
      obj8.section = messageId.EMOJI_PICKER_POPOUT;
      obj8.object = emojiPickerIntention.EMOJI;
      obj7.location = obj8;
      obj7.messageId = messageId;
      obj13.trackEmojiSelect(obj7);
    }
  }, items1);
  const items2 = [onLongPressEmoji];
  callback1 = importAllResult.useCallback((PremiumSearchUpsell) => {
    if (null != onLongPressEmoji) {
      onLongPressEmoji(PremiumSearchUpsell);
    }
  }, items2);
  const obj1 = { emojiSections: tmp9Result, rowSize: rounded, isNativeEmojiPickerEnabled: tmp6 };
  const tmp = importDefault(dependencyMap[7]);
  const AnimateEmoji = arg1(dependencyMap[27]).AnimateEmoji;
  setting = AnimateEmoji.useSetting();
  const items3 = [analyticsLocations, callback, callback1, channel, rounded, tmp2, setting, emojiPickerListRef, useTier0UpsellContent];
  const callback2 = importAllResult.useCallback((item) => {
    let emojis;
    let emojisDisabled;
    let footer;
    let index;
    let isSectionNitroLocked;
    let row;
    let target;
    item = item.item;
    const type = item.type;
    ({ target, index } = item);
    if (emojiPickerListRef(guildId[26]).EmojiPickerItemType.NATIVE_SECTION !== type) {
      if (emojiPickerListRef(guildId[26]).EmojiPickerItemType.PLACEHOLDER !== type) {
        if (emojiPickerListRef(guildId[26]).EmojiPickerItemType.EMOJI_ROW_SLIM !== type) {
          if (emojiPickerListRef(guildId[26]).EmojiPickerItemType.TITLE === type) {
            if ("StickyHeader" === target) {
              const current = emojiPickerListRef.current;
              if (null != current) {
                const result = current.onStickyHeaderRendered(index);
              }
            }
            let obj = { label: item.title, isSectionNitroLocked: item.isSectionNitroLocked, useTier0UpsellContent };
            return callback(emojiPickerListRef(guildId[28]).Section, obj);
          } else if (emojiPickerListRef(guildId[26]).EmojiPickerItemType.PREMIUM_INLINE_ROADBLOCK === type) {
            obj = { position: item.position, useTier0UpsellContent };
            return callback(channel(guildId[29]), obj);
          } else {
            if (emojiPickerListRef(guildId[26]).EmojiPickerItemType.EMOJI_ROW === type) {
              ({ emojis, emojisDisabled, footer, row, isSectionNitroLocked } = item);
              obj = { emojis, emojisDisabled, category: footer, rowSize: rounded, containerWidth: tmp2, onPressEmoji: callback, onLongPressEmoji: callback1, animateEmoji: setting, row, isSectionNitroLocked };
              let tmp49Result = callback(emojiPickerListRef(guildId[30]).EmojiPickerListRow, obj);
            } else if (emojiPickerListRef(guildId[26]).EmojiPickerItemType.EMOJI_ROW_NSFW === type) {
              tmp49Result = callback(emojiPickerListRef(guildId[28]).NSFWRow, {});
            } else if (emojiPickerListRef(guildId[26]).EmojiPickerItemType.FOOTER_UPSELL === type) {
              const obj1 = {};
              let guild_id;
              if (null != channel) {
                guild_id = channel.guild_id;
              }
              obj1.guildId = guild_id;
              obj1.analyticsLocations = analyticsLocations;
              obj1.useTier0UpsellContent = useTier0UpsellContent;
              tmp49Result = callback(emojiPickerListRef(guildId[31]).PremiumSearchUpsell, obj1);
              const tmp49 = callback;
            }
            const obj2 = {};
            let tmp19 = true === item.isSectionNitroLocked;
            if (tmp19) {
              const obj3 = { useTier0UpsellContent };
              tmp19 = callback(emojiPickerListRef(guildId[32]).PremiumUpsellGradientBackground, obj3);
            }
            const items = [tmp19, tmp49Result];
            obj2.children = items;
            return setting(callback1, obj2);
          }
        }
      }
    }
    return null;
  }, items3);
  importDefault(dependencyMap[33])();
  if (0 === tmp9Result.length) {
    const obj2 = { inActionSheet: true, insetTop: num2, insetBottom: num };
    return callback(importDefault(dependencyMap[34]), obj2);
  } else {
    if (tmp6) {
      let tmp19 = tmp32[35];
    } else {
      tmp19 = tmp32[36];
    }
    obj3 = {};
    obj4 = { analyticsLocations, animateEmoji: setting, bottomSheetIndex, categoryIndexActive, data: tmp13 };
    if (null == guildId) {
      let guild_id;
      if (null != channel) {
        guild_id = channel.guild_id;
      }
      guildId = guild_id;
    }
    obj4.guildId = guildId;
    obj4.inPortalKeyboard = flag;
    obj4.onPressEmoji = callback;
    obj4.onLongPressEmoji = callback1;
    obj4.onShowNitroUpsell = tmp18;
    obj4.paddingBottom = num;
    obj4.paddingTop = num2;
    obj4.ref = emojiPickerListRef;
    obj4.renderItem = callback2;
    obj4.useTier0UpsellContent = useTier0UpsellContent;
    const items4 = [callback(importDefault(tmp19), obj4), ];
    const obj5 = { bottomSheetIndex, inPortalKeyboard: flag, shouldShow: tmp17 };
    items4[1] = callback(importDefault(dependencyMap[37]), obj5);
    obj3.children = items4;
    return setting(callback1, obj3);
  }
  const tmp13 = importDefault(dependencyMap[26])(obj1);
});
const result = arg1(dependencyMap[38]).fileFinishedImporting("modules/emoji_picker/native/components/EmojiPickerList.tsx");

export default memoResult;
