// Module ID: 9386
// Function ID: 73193
// Name: CustomEmojiContent
// Dependencies: []
// Exports: default

// Module 9386 (CustomEmojiContent)
let closure_4 = importAll(dependencyMap[0]);
({ Pressable: closure_5, View: closure_6 } = arg1(dependencyMap[1]));
let closure_7 = importDefault(dependencyMap[2]);
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
const tmp2 = arg1(dependencyMap[1]);
({ UserSettingsSections: closure_10, AnalyticEvents: closure_11, AnalyticsPages: closure_12, AnalyticsSections: closure_13 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = { nitroWheel: { hideWhenScrolling: true, autoCapitalize: true } };
obj = { tintColor: importDefault(dependencyMap[8]).colors.CONTROL_BRAND_FOREGROUND_NEW };
obj.nitroWheelPurple = obj;
obj.emojiDescriptionWrapperOuter = { "Null": "24c4788690396bae9cc4c1af395a6a87", "Null": "BicycleIcon", "Null": "png", "Null": true };
obj.starIcon = {};
const tmp4 = arg1(dependencyMap[6]);
obj.starIconSelected = { tintColor: importDefault(dependencyMap[8]).colors.ICON_FEEDBACK_WARNING };
const obj1 = { tintColor: importDefault(dependencyMap[8]).colors.ICON_FEEDBACK_WARNING };
obj.starIconUnselected = { tintColor: importDefault(dependencyMap[8]).colors.INTERACTIVE_TEXT_DEFAULT };
const obj3 = { milliseconds: "title", months: "__closure", marginTop: "right", width: "content", color: importDefault(dependencyMap[8]).colors.INTERACTIVE_ICON_DEFAULT };
obj.moreMenuIcon = obj3;
obj.bottomCtaButton = { marginTop: 24 };
obj.ctaDescriptionWrapper = {};
const obj2 = { tintColor: importDefault(dependencyMap[8]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.betaTag = { backgroundColor: importDefault(dependencyMap[8]).colors.WHITE };
const obj4 = { backgroundColor: importDefault(dependencyMap[8]).colors.WHITE };
obj.betaTagTextAddPack = { color: importDefault(dependencyMap[8]).unsafe_rawColors.BRAND_530 };
const obj5 = { color: importDefault(dependencyMap[8]).unsafe_rawColors.BRAND_530 };
obj.betaTagTextRemovePack = { color: importDefault(dependencyMap[8]).unsafe_rawColors.PRIMARY_500 };
const obj6 = { color: importDefault(dependencyMap[8]).unsafe_rawColors.PRIMARY_500 };
obj.favoriteButtonContainer = { paddingTop: importDefault(dependencyMap[8]).space.PX_4 };
let closure_17 = obj.createStyles(obj);
const obj7 = { paddingTop: importDefault(dependencyMap[8]).space.PX_4 };
const result = arg1(dependencyMap[41]).fileFinishedImporting("modules/messages/native/emoji/CustomEmojiContent.tsx");

export default function CustomEmojiContent(emojiNode) {
  let emojiDescription;
  let expressionSourceApplication;
  let hasJoinedEmojiSourceGuild;
  let isRoleSubscriptionEmoji;
  let nonce;
  let sourceType;
  let type;
  let userIsRoleSubscriber;
  emojiNode = emojiNode.emojiNode;
  const arg1 = emojiNode;
  const expressionSourceGuild = emojiNode.expressionSourceGuild;
  const importDefault = expressionSourceGuild;
  const customEmojiFromJoinedGuild = emojiNode.customEmojiFromJoinedGuild;
  const importAll = customEmojiFromJoinedGuild;
  ({ hasJoinedEmojiSourceGuild, nonce } = emojiNode);
  const dependencyMap = nonce;
  let React;
  let stateFromStores;
  let analyticsLocations;
  let closure_8;
  let closure_9;
  let emojiPopoutData;
  type = undefined;
  let obj2;
  function closeActionSheet() {
    let obj = expressionSourceGuild(nonce[12]);
    obj.hideAllActionSheets();
    obj = { nonce };
    expressionSourceGuild(nonce[10]).track(type.CLOSE_POPOUT, obj);
  }
  function renderStarIcon(Button, arg1) {
    let obj = {};
    const merged = Object.assign(obj.starIcon);
    if (Button.isSelected) {
      const merged1 = Object.assign(tmp2.starIconSelected);
      obj = {};
      obj.style = obj;
      return renderStarIcon(emojiNode(nonce[25]).StarIcon, obj);
    } else {
      const merged2 = Object.assign(tmp2.starIconUnselected);
      obj = {};
      obj.style = obj;
      return renderStarIcon(emojiNode(nonce[26]).StarOutlineIcon, obj);
    }
  }
  function handleAddRemoveFavorite() {
    function content() {
      const obj = { style: {}, variant: "text-md/bold" };
      const intl = callback(closure_3[28]).intl;
      const string = intl.string;
      const t = callback(closure_3[28]).t;
      if (closure_8) {
        let stringResult = string(t.in1rga);
      } else {
        stringResult = string(t.mE2e8A);
      }
      obj.children = stringResult;
      return closure_14(callback(closure_3[27]).Text, obj);
    }
    closeActionSheet();
    let obj = emojiNode(nonce[29]);
    if (isFavoriteEmoji) {
      obj.unfavoriteEmoji(customEmojiFromJoinedGuild);
      obj = {
        key: "EMOJI_UNFAVORITED",
        icon() {
            return callback2({ isSelected: false });
          },
        content
      };
      expressionSourceGuild(tmp2[30]).open(obj);
      const obj4 = expressionSourceGuild(tmp2[30]);
    } else {
      obj.favoriteEmoji(customEmojiFromJoinedGuild);
      obj = {
        key: "EMOJI_FAVORITED",
        icon() {
            return callback2({ isSelected: true });
          },
        content
      };
      expressionSourceGuild(tmp2[30]).open(obj);
      const obj2 = expressionSourceGuild(tmp2[30]);
    }
  }
  function renderNitroWheel() {
    let tmp;
    {
      let obj = { shouldTintPurple: false };
      tmp = obj;
    }
    let flag2 = tmp.shouldTintPurple;
    if (flag2 === undefined) {
      flag2 = false;
    }
    const nitroWheel = obj.nitroWheel;
    if (flag2) {
      obj = {};
      const merged = Object.assign(nitroWheel);
      const merged1 = Object.assign(obj.nitroWheelPurple);
      let tmp2 = obj;
    } else {
      tmp2 = nitroWheel;
    }
    obj = { style: tmp2 };
    return renderStarIcon(emojiNode(nonce[34]).NitroWheel, obj);
  }
  let obj = {};
  ({ sourceType, expressionSourceApplication } = emojiNode);
  const merged = Object.assign(callback());
  let obj1 = arg1(dependencyMap[13]);
  const merged1 = Object.assign(obj1.useSharedMessageEmojiStyles());
  React = obj;
  obj2 = arg1(dependencyMap[14]);
  const items = [closure_9];
  stateFromStores = obj2.useStateFromStores(items, () => obj.getCurrentUser());
  let obj3 = importDefault(dependencyMap[9]);
  let obj4 = arg1(dependencyMap[14]);
  const items1 = [closure_8];
  const stateFromStores1 = obj4.useStateFromStores(items1, () => isFavoriteEmoji.getGuildId());
  let tmp6 = null != stateFromStores1;
  if (tmp6) {
    let id;
    if (null != expressionSourceGuild) {
      id = expressionSourceGuild.id;
    }
    tmp6 = stateFromStores1 === id;
  }
  analyticsLocations = importDefault(dependencyMap[15])().analyticsLocations;
  const items2 = [customEmojiFromJoinedGuild, stateFromStores1];
  const memo = React.useMemo(() => {
    if (null == customEmojiFromJoinedGuild) {
      let obj = { "Null": true, "Null": false, "Null": false };
    } else {
      obj = {};
      let tmp;
      obj.isRoleSubscriptionEmoji = customEmojiFromJoinedGuild(nonce[16]).isPurchasableRoleSubscriptionEmoji(customEmojiFromJoinedGuild);
      const obj2 = customEmojiFromJoinedGuild(nonce[16]);
      const tmp6 = customEmojiFromJoinedGuild;
      if (null != stateFromStores1) {
        tmp = stateFromStores1;
      }
      obj.isUnusableRoleSubscriptionEmoji = customEmojiFromJoinedGuild(nonce[16]).isUnusableRoleSubscriptionEmoji(tmp6, tmp);
      obj.userIsRoleSubscriber = analyticsLocations.getUserSubscriptionRoles(customEmojiFromJoinedGuild.guildId).size > 0;
      const obj3 = customEmojiFromJoinedGuild(nonce[16]);
    }
    return obj;
  }, items2);
  const isUnusableRoleSubscriptionEmoji = memo.isUnusableRoleSubscriptionEmoji;
  let tmp9 = !isUnusableRoleSubscriptionEmoji;
  ({ isRoleSubscriptionEmoji, userIsRoleSubscriber } = memo);
  if (!tmp9) {
    type = undefined;
    if (null != customEmojiFromJoinedGuild) {
      type = customEmojiFromJoinedGuild.type;
    }
    tmp9 = type !== arg1(dependencyMap[17]).EmojiTypes.GUILD;
  }
  let result = !tmp9;
  if (!tmp9) {
    let obj5 = arg1(dependencyMap[18]);
    let guildId;
    if (null != customEmojiFromJoinedGuild) {
      guildId = customEmojiFromJoinedGuild.guildId;
    }
    result = obj5.shouldHideGuildPurchaseEntryPoints(guildId);
  }
  let obj6 = arg1(dependencyMap[19]);
  const isFavoriteEmoji = obj6.useIsFavoriteEmoji(stateFromStores1, customEmojiFromJoinedGuild);
  closure_8 = isFavoriteEmoji;
  let obj7 = importDefault(dependencyMap[20]);
  const tidaWebformEnabled = obj7.useExperiment({ location: "CustomEmojiContent" }, { autoTrackExposure: false }).tidaWebformEnabled;
  const DeveloperMode = arg1(dependencyMap[21]).DeveloperMode;
  let isDiscoverableResult;
  const setting = DeveloperMode.useSetting();
  if (null != expressionSourceGuild) {
    isDiscoverableResult = expressionSourceGuild.isDiscoverable();
  }
  obj = {};
  if (null != stateFromStores1) {
    let DM_CHANNEL = obj2.GUILD_CHANNEL;
  } else {
    DM_CHANNEL = obj2.DM_CHANNEL;
  }
  obj.page = DM_CHANNEL;
  obj.section = closeActionSheet.EMOJI_UPSELL_POPOUT;
  closure_9 = obj;
  let obj9 = arg1(dependencyMap[22]);
  obj = {
    sourceType,
    expressionSourceApplication,
    isPremium: obj3.isPremium(stateFromStores),
    hasJoinedEmojiSourceGuild,
    isRoleSubscriptionEmoji,
    isUnusableRoleSubscriptionEmoji,
    userIsRoleSubscriber,
    shouldHideRoleSubscriptionCTA: result,
    emojiComesFromCurrentGuild: tmp6,
    isDiscoverable: null != isDiscoverableResult && isDiscoverableResult,
    onOpenPremiumSettings() {
      closeActionSheet();
      let obj = expressionSourceGuild(nonce[10]);
      obj = { location_page: obj.page, location_section: obj.section };
      obj.track(type.PREMIUM_PROMOTION_OPENED, obj);
      obj = { screen: emojiPopoutData.PREMIUM, params: obj1 };
      emojiNode(nonce[23]).openUserSettings(obj);
    }
  };
  emojiPopoutData = obj9.getEmojiPopoutData(obj);
  let obj11 = arg1(dependencyMap[24]);
  obj1 = { emojiId: emojiNode.id, currentGuildId: stateFromStores1, popoutData: emojiPopoutData };
  let id1;
  if (null != expressionSourceGuild) {
    id1 = expressionSourceGuild.id;
  }
  obj1.emojiSourceGuildId = id1;
  obj1.nonce = nonce;
  const trackOpenPopout = obj11.useTrackOpenPopout(obj1);
  ({ emojiDescription, type } = emojiPopoutData);
  const intl = arg1(dependencyMap[28]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[28]).t;
  if (hasJoinedEmojiSourceGuild) {
    let stringResult = string(t.ohTzZH);
  } else {
    stringResult = string(t.eLfh+a);
  }
  const tmp28 = type === arg1(dependencyMap[22]).EmojiPopoutType.JOIN_GUILD;
  obj2 = {};
  const items3 = [arg1(dependencyMap[22]).EmojiPopoutType.GET_PREMIUM, arg1(dependencyMap[22]).EmojiPopoutType.JOIN_GUILD];
  const isPremiumResult = obj3.isPremium(stateFromStores);
  const merged2 = Object.assign(items3.includes(type) ? obj.ctaButton : obj.bottomCtaButton);
  obj2["borderRadius"] = importDefault(dependencyMap[8]).radii.xl;
  obj3 = {};
  obj4 = {};
  obj5 = {};
  const merged3 = Object.assign(obj.emojiContainer);
  obj5["marginTop"] = 8;
  obj4.style = obj5;
  obj6 = { style: obj.emojiIcon, source: obj7 };
  obj7 = { uri: emojiNode.src };
  const items4 = [renderStarIcon(importDefault(dependencyMap[36]), obj6), ];
  const obj8 = { style: obj.emojiDescriptionWrapperOuter };
  obj9 = { style: obj.emojiDescriptionWrapper };
  const obj10 = { cachedAt: 1231704321, edpbxy: 32296513, children: ":" + emojiNode.alt + ":" };
  const items5 = [renderStarIcon(arg1(dependencyMap[27]).Text, obj10), ];
  let tmp35 = null != emojiDescription;
  if (tmp35) {
    obj11 = { variant: "text-sm/medium", children: emojiDescription };
    tmp35 = renderStarIcon(arg1(dependencyMap[27]).Text, obj11);
  }
  items5[1] = tmp35;
  obj9.children = items5;
  const items6 = [renderNitroWheel(stateFromStores1, obj9), , ];
  let tmp39 = null;
  if (!isUnusableRoleSubscriptionEmoji && hasJoinedEmojiSourceGuild) {
    tmp39 = null;
    if (!tidaWebformEnabled) {
      const obj12 = {};
      const intl2 = arg1(dependencyMap[28]).intl;
      const string2 = intl2.string;
      const t2 = arg1(dependencyMap[28]).t;
      if (isFavoriteEmoji) {
        let string2Result = string2(t2.aBUcp3);
      } else {
        string2Result = string2(t2.yZFibY);
      }
      obj12.accessibilityLabel = string2Result;
      obj12.style = obj.moreMenuIcon;
      obj12.onPress = handleAddRemoveFavorite;
      let StarIcon = arg1;
      let obj14 = dependencyMap;
      if (isFavoriteEmoji) {
        StarIcon = StarIcon(obj14[25]).StarIcon;
        const obj13 = {};
        obj14 = {};
        const merged4 = Object.assign(obj.starIcon);
        const merged5 = Object.assign(obj.starIconSelected);
        obj13.style = obj14;
        let tmp45Result = tmp45(StarIcon, obj13);
      } else {
        const obj15 = {};
        const obj16 = {};
        const merged6 = Object.assign(obj.starIcon);
        const merged7 = Object.assign(obj.starIconUnselected);
        obj15.style = obj16;
        tmp45Result = tmp45(StarIcon(obj14[26]).StarOutlineIcon, obj15);
      }
      obj12.children = tmp45Result;
      renderStarIcon(stateFromStores, obj12);
      const tmp40 = renderStarIcon;
      const tmp41 = stateFromStores;
    }
  }
  items6[1] = tmp39;
  let tmp56 = null;
  if (tidaWebformEnabled) {
    tmp56 = null;
    if (setting) {
      const obj17 = {};
      const intl3 = arg1(dependencyMap[28]).intl;
      obj17.accessibilityLabel = intl3.string(arg1(dependencyMap[28]).t.PdRCRg);
      obj17.style = obj.moreMenuIcon;
      obj17.onPress = function handleOpenEmojiOptionsMenu() {
        let obj = expressionSourceGuild(nonce[12]);
        obj = { emojiSrc: emojiNode.src };
        obj.openLazy(emojiNode(nonce[32])(nonce[31], nonce.paths), "EmojiOptionsActionSheet", obj, "stack");
      };
      const obj18 = { color: importDefault(dependencyMap[8]).colors.INTERACTIVE_TEXT_DEFAULT };
      obj17.children = renderStarIcon(arg1(dependencyMap[33]).MoreHorizontalIcon, obj18);
      tmp56 = renderStarIcon(stateFromStores, obj17);
    }
  }
  items6[2] = tmp56;
  obj8.children = items6;
  items4[1] = renderNitroWheel(stateFromStores1, obj8);
  obj4.children = items4;
  const items7 = [renderNitroWheel(stateFromStores1, obj4), , , ];
  if (type === arg1(dependencyMap[22]).EmojiPopoutType.GET_PREMIUM) {
    let tmp66 = function renderPremiumUpsellButton() {
      let tmp = null;
      if (type === emojiNode(nonce[22]).EmojiPopoutType.GET_PREMIUM) {
        let obj = { style: obj2 };
        obj = {
          <string:858695072>: true,
          <string:1091214468>: true,
          onLongPressAvatar: true,
          <string:1967597008>: true,
          <string:3251352314>: true,
          icon: renderNitroWheel(),
          text: emojiPopoutData.text,
          onPress() {
              let result = null == closure_5;
              if (!result) {
                let obj = callback(closure_3[9]);
                result = obj.canUseEmojisEverywhere(tmp);
              }
              if (!result) {
                closure_13();
                obj = {};
                ({ page: obj3.location_page, section: obj3.location_section } = tmp2);
                callback(closure_3[10]).track(constants.PREMIUM_PROMOTION_OPENED, obj);
                obj = { analyticsLocation: tmp2, analyticsLocations: closure_7 };
                callback(closure_3[11])(obj);
                const obj2 = callback(closure_3[10]);
              }
            }
        };
        obj.children = renderStarIcon(emojiNode(nonce[35]).Button, obj);
        tmp = renderStarIcon(stateFromStores1, obj);
      }
      return tmp;
    }();
  } else {
    tmp66 = null;
    if (tmp28) {
      const obj19 = { style: obj2 };
      const obj20 = { month: 40, day: true, year: "/assets/.cache/intl/bW9kdWxlcy9nb19saXZlL3dlYi9tb2RhbA==" };
      const intl4 = arg1(dependencyMap[28]).intl;
      obj20.text = intl4.string(arg1(dependencyMap[28]).t.riu2R5);
      obj20.onPress = function onPress() {
        let id;
        if (null != expressionSourceGuild) {
          id = expressionSourceGuild.id;
        }
        emojiNode(nonce[37]).handleJoinGuild(id);
      };
      obj19.children = renderStarIcon(arg1(dependencyMap[35]).Button, obj20);
      tmp66 = renderStarIcon(stateFromStores1, obj19);
    }
  }
  items7[1] = tmp66;
  if (hasJoinedEmojiSourceGuild) {
    let tmp68Result = null;
    if (null != expressionSourceGuild) {
      const obj21 = {};
      const obj22 = { style: obj.divider };
      const items8 = [renderStarIcon(arg1(dependencyMap[38]).FormDivider, obj22), , ];
      const obj23 = { guild: expressionSourceGuild, hasJoinedGuild: hasJoinedEmojiSourceGuild, title: stringResult, showingJoinGuildCta: tmp28 };
      items8[1] = renderStarIcon(importDefault(dependencyMap[39]), obj23);
      let tmp74 = !hasJoinedEmojiSourceGuild;
      if (tmp74) {
        const obj24 = { expressionSourceGuild };
        const items9 = [emojiNode.id];
        obj24.doNotDisplayEmojiIds = items9;
        tmp74 = renderStarIcon(arg1(dependencyMap[40]).EmojiGrid, obj24);
      }
      items8[2] = tmp74;
      obj21.children = items8;
      tmp68Result = renderNitroWheel(closure_16, obj21);
      const tmp68 = renderNitroWheel;
      const tmp69 = closure_16;
    }
  } else {
    tmp68Result = null;
  }
  items7[2] = tmp68Result;
  let tmp79Result = null;
  if (!isUnusableRoleSubscriptionEmoji && hasJoinedEmojiSourceGuild) {
    tmp79Result = null;
    if (tidaWebformEnabled) {
      const obj25 = {};
      const obj26 = { style: obj.divider };
      const items10 = [renderStarIcon(arg1(dependencyMap[38]).FormDivider, obj26), ];
      const obj27 = { style: obj.favoriteButtonContainer };
      const obj28 = {};
      const intl5 = arg1(dependencyMap[28]).intl;
      const string3 = intl5.string;
      const t3 = arg1(dependencyMap[28]).t;
      if (isFavoriteEmoji) {
        let string3Result = string3(t3.Ay49KA);
      } else {
        string3Result = string3(t3.nNsr67);
      }
      obj28.text = string3Result;
      let str2 = "primary";
      if (isFavoriteEmoji) {
        str2 = "tertiary";
      }
      obj28.variant = str2;
      obj28.size = "md";
      obj28.onPress = handleAddRemoveFavorite;
      obj27.children = renderStarIcon(arg1(dependencyMap[35]).Button, obj28);
      items10[1] = renderStarIcon(stateFromStores1, obj27);
      obj25.children = items10;
      tmp79Result = renderNitroWheel(closure_16, obj25);
      const tmp79 = renderNitroWheel;
      const tmp80 = closure_16;
      const tmp84 = stateFromStores1;
    }
  }
  items7[3] = tmp79Result;
  obj3.children = items7;
  return renderNitroWheel(closure_16, obj3);
};
