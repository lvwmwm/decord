// Module ID: 11246
// Function ID: 11247
// Name: CustomEmojiContent
// Dependencies: [19, 17, 7655, 5198, 5286, 1385, 1072, 21, 5243, 575, 2171, 1252, 9513, 5489, 11240, 504, 7852, 5197, 5192, 5167, 9481, 5932, 5068, 11247, 8537, 11241, 11244, 5952, 1113, 10113, 10115, 11248, 2118, 7356, 1187, 5873, 5957, 5866, 11249, 8041, 11250, 11251, 2]
// Exports: default

// Module 11246 (CustomEmojiContent)
import nativeDefault from "native" /* 575 */;
import intl6 from "intl" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import asyncRequire from "asyncRequire" /* 2118 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2171 */;
import RoleSubscriptionEmojiUtilsAll from "RoleSubscriptionEmojiUtils" /* 5197 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5952 */;
import ExpressionSourceRecord from "ExpressionSourceRecord" /* 7655 */;
import openUserSettings from "openUserSettings" /* 8537 */;
import openPremiumModalDefault from "openPremiumModal" /* 9513 */;
import StarOutlineIcon2 from "StarOutlineIcon" /* 10113 */;
import StarIcon2 from "StarIcon" /* 10115 */;
import EmojiActionCreators from "EmojiActionCreators" /* 11244 */;
import guild_GuildUtils from "guild/GuildUtils" /* 11249 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SubscriptionRoleStore from "SubscriptionRoleStore" /* 5198 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5286 */;
import UserStore from "UserStore" /* 1385 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
import size_mod from "module_2" /* 2 */;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let size;
let unpackModuleId;
({ Pressable: hasOwnProperty, View: metroRequire } = react_native);
const EmojiSourceDataTypes = ExpressionSourceRecord.EmojiSourceDataTypes;
({ UserSettingsSections: unpackModuleId, AnalyticEvents: closure_12, AnalyticsPages: map1, AnalyticsSections: closure_14 } = Constants);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = Fragment);
let createStyles = createStyles_mod;
let obj = { nitroWheel: { height: 32, width: 32 }, nitroWheelPurple: obj2, emojiDescriptionWrapperOuter: { flexDirection: "row", flex: 1, alignItems: "center", gap: 8 }, starIcon: { height: 32, width: 32, margin: 0, padding: 0, flex: 0 }, starIconSelected: obj3, starIconUnselected: obj4, moreMenuIcon: size, bottomCtaButton: { marginTop: 24 }, ctaDescriptionWrapper: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginTop: 8 }, betaTag: obj5, betaTagTextAddPack: obj6, betaTagTextRemovePack: obj7, favoriteButtonContainer: obj8 };
obj2 = { tintColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND_NEW };
createStyles = createStyles.createStyles;
obj3 = { tintColor: nativeDefault.colors.ICON_FEEDBACK_WARNING };
obj4 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
size = { height: 32, width: 32, justifyContent: "center", alignItems: "center", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
obj5 = { backgroundColor: nativeDefault.colors.WHITE };
obj6 = { color: nativeDefault.unsafe_rawColors.BRAND_530 };
obj7 = { color: nativeDefault.unsafe_rawColors.PRIMARY_500 };
obj8 = { paddingTop: nativeDefault.space.PX_4 };
let closure_18 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/messages/native/emoji/CustomEmojiContent.tsx");

export default function CustomEmojiContent(emojiNode) {
  let Button;
  let Button2;
  let Button3;
  let DM_CHANNEL;
  let MoreHorizontalIcon;
  let currentUser;
  let emojiDescription;
  let expressionSourceGuild;
  let handleOpenEmojiOptionsMenu;
  let hasJoinedEmojiSourceGuild;
  let id1;
  let intl3;
  let intl5;
  let isRoleSubscriptionEmoji;
  let items4;
  let items5;
  let items6;
  let items9;
  let nonce;
  let obj11;
  let obj19;
  let obj21;
  let obj23;
  let obj26;
  let obj27;
  let obj29;
  let obj36;
  let sourceType;
  let str;
  let stringResult;
  let tmp30Result;
  let tmp34Result11;
  let tmp34Result7;
  let type;
  let userIsRoleSubscriber;
  emojiNode = emojiNode.emojiNode;
  ({ sourceType, expressionSourceGuild } = emojiNode);
  const customEmojiFromJoinedGuild = emojiNode.customEmojiFromJoinedGuild;
  ({ hasJoinedEmojiSourceGuild, nonce } = emojiNode);
  let analyticsLocations;
  let isFavoriteEmoji;
  let obj6;
  let obj = {};
  const expressionSourceApplication = emojiNode.expressionSourceApplication;
  const merged = Object.assign(closure_18());
  let tmp3 = nonce;
  let obj2 = emojiNode(nonce[14]);
  const merged1 = Object.assign(obj2.useSharedMessageEmojiStyles());
  let obj3 = emojiNode(nonce[15]);
  const items = [UserStore];
  const stateFromStores = obj3.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj4 = expressionSourceGuild(nonce[10]);
  const isPremiumResult = obj4.isPremium(stateFromStores);
  let obj5 = emojiNode(nonce[15]);
  const items1 = [SelectedGuildStore];
  const stateFromStores1 = obj5.useStateFromStores(items1, () => guildId.getGuildId());
  let tmp9 = null != stateFromStores1;
  if (tmp9) {
    let id;
    if (expressionSourceGuild != null) {
      id = expressionSourceGuild.id;
    }
    tmp9 = stateFromStores1 === id;
  }
  analyticsLocations = tmp6(tmp3[16])().analyticsLocations;
  const items2 = [customEmojiFromJoinedGuild, stateFromStores1];
  const memo = stateFromStores.useMemo(() => {
    let isUnusableRoleSubscriptionEmoji;
    let obj;
    let obj2;
    let tmp5;
    if (null == customEmojiFromJoinedGuild) {
      obj = { isRoleSubscriptionEmoji: false, isUnusableRoleSubscriptionEmoji: false, userIsRoleSubscriber: false };
    } else {
      obj = { isRoleSubscriptionEmoji: obj2.isPurchasableRoleSubscriptionEmoji(customEmojiFromJoinedGuild), isUnusableRoleSubscriptionEmoji: isUnusableRoleSubscriptionEmoji(customEmojiFromJoinedGuild, tmp5), userIsRoleSubscriber: SubscriptionRoleStore.getUserSubscriptionRoles(customEmojiFromJoinedGuild.guildId).size > 0 };
      obj2 = RoleSubscriptionEmojiUtilsAll;
      isUnusableRoleSubscriptionEmoji = RoleSubscriptionEmojiUtilsAll.isUnusableRoleSubscriptionEmoji;
      RoleSubscriptionEmojiUtilsAll;
      tmp5 = stateFromStores1;
    }
    return obj;
  }, items2);
  let isUnusableRoleSubscriptionEmoji = memo.isUnusableRoleSubscriptionEmoji;
  let tmp12 = !isUnusableRoleSubscriptionEmoji;
  ({ isRoleSubscriptionEmoji, userIsRoleSubscriber } = memo);
  if (isUnusableRoleSubscriptionEmoji) {
    let type1;
    if (customEmojiFromJoinedGuild != null) {
      type1 = customEmojiFromJoinedGuild.type;
    }
    tmp12 = type1 !== tmp2(tmp3[18]).EmojiTypes.GUILD;
  }
  let result = !tmp12;
  if (result) {
    let guildId;
    const shouldHideGuildPurchaseEntryPoints = tmp2(tmp3[19]).shouldHideGuildPurchaseEntryPoints;
    emojiNode(tmp3[19]);
    if (customEmojiFromJoinedGuild != null) {
      guildId = customEmojiFromJoinedGuild.guildId;
    }
    result = shouldHideGuildPurchaseEntryPoints(guildId);
  }
  const tmp2Result5 = emojiNode(tmp3[20]);
  isFavoriteEmoji = tmp2Result5.useIsFavoriteEmoji(stateFromStores1, customEmojiFromJoinedGuild);
  const tmp2Result6 = emojiNode(tmp3[21]);
  const isTidaMediaTakedownRegion = tmp2Result6.useIsTidaMediaTakedownRegion();
  const DeveloperMode = tmp2(tmp3[22]).DeveloperMode;
  let flag;
  const setting = DeveloperMode.useSetting();
  if (expressionSourceGuild != null) {
    flag = expressionSourceGuild.isDiscoverable();
  }
  if (flag == null) {
    flag = false;
  }
  if (null != stateFromStores1) {
    DM_CHANNEL = constants3.GUILD_CHANNEL;
  } else {
    DM_CHANNEL = constants3.DM_CHANNEL;
  }
  obj6 = { page: DM_CHANNEL, section: constants4.EMOJI_UPSELL_POPOUT };
  let obj7 = {
    sourceType,
    expressionSourceApplication,
    isPremium: isPremiumResult,
    hasJoinedEmojiSourceGuild,
    isRoleSubscriptionEmoji,
    isUnusableRoleSubscriptionEmoji,
    userIsRoleSubscriber,
    shouldHideRoleSubscriptionCTA: result,
    emojiComesFromCurrentGuild: tmp9,
    isDiscoverable: flag,
    onOpenPremiumSettings() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideAllActionSheets();
      const obj2 = AnalyticsUtilsDefault;
      const obj3 = { nonce };
      obj2.track(constants.CLOSE_POPOUT, obj3);
      const obj4 = AnalyticsUtilsDefault;
      const obj5 = { location_page: obj6.page, location_section: obj6.section };
      obj4.track(constants.PREMIUM_PROMOTION_OPENED, obj5);
      obj6 = openUserSettings;
      const obj7 = { screen: unpackModuleId.PREMIUM, params: { analyticsLocation: obj6 } };
      obj6.openUserSettings(obj7);
    }
  };
  const tmp2Result7 = emojiNode(tmp3[23]);
  const emojiPopoutData = tmp2Result7.getEmojiPopoutData(obj7);
  const obj8 = { emojiId: emojiNode.id, currentGuildId: stateFromStores1, popoutData: emojiPopoutData, emojiSourceGuildId: id1, nonce };
  id1 = undefined;
  const useTrackOpenPopout = tmp2(tmp3[25]).useTrackOpenPopout;
  emojiNode(tmp3[25]);
  if (expressionSourceGuild != null) {
    id1 = expressionSourceGuild.id;
  }
  const trackOpenPopout = useTrackOpenPopout(obj8);
  ({ emojiDescription, type } = emojiPopoutData);
  let intl = tmp2(tmp3[28]).intl;
  const string = intl.string;
  const t = tmp2(tmp3[28]).t;
  if (hasJoinedEmojiSourceGuild) {
    stringResult = string(t.ohTzZH);
  } else {
    stringResult = string(t["eLfh+a"]);
  }
  const JOIN_GUILD = tmp2(tmp3[23]).EmojiPopoutType.JOIN_GUILD;
  const items3 = [tmp2(tmp3[23]).EmojiPopoutType.GET_PREMIUM, tmp2(tmp3[23]).EmojiPopoutType.JOIN_GUILD];
  const obj9 = { borderRadius: expressionSourceGuild(tmp3[9]).radii.xl };
  const tmp28 = items3.includes(type) ? obj.ctaButton : obj.bottomCtaButton;
  const merged2 = Object.assign(tmp28);
  let obj10 = { style: obj11, children: items4 };
  obj11 = { marginTop: 8 };
  const merged3 = Object.assign(obj.emojiContainer);
  items4 = [, ];
  const obj12 = { style: obj.emojiIcon, source: { uri: emojiNode.src } };
  items4[0] = closure_15(expressionSourceGuild(tmp3[36]), obj12);
  const obj13 = { style: obj.emojiDescriptionWrapperOuter, children: items6 };
  const obj14 = { style: obj.emojiDescriptionWrapper, children: items5 };
  const obj15 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", children: ":" + emojiNode.alt + ":" };
  const Text = tmp2(tmp3[37]).Text;
  items5 = [closure_15(Text, obj15), ];
  let tmp34Result = null != emojiDescription;
  if (tmp34Result) {
    const obj16 = { variant: "body-sm/medium", children: emojiDescription };
    tmp34Result = tmp34(tmp2(tmp3[37]).Text, obj16);
  }
  function handleAddRemoveFavorite() {
    let intl;
    let intl2;
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    const obj2 = AnalyticsUtilsDefault;
    const obj3 = { nonce };
    obj2.track(constants.CLOSE_POPOUT, obj3);
    const obj4 = EmojiActionCreators;
    if (isFavoriteEmoji) {
      obj4.unfavoriteEmoji(customEmojiFromJoinedGuild);
      const obj5 = { text: intl2.string(intl6.t.in1rga), icon: StarOutlineIcon2.StarOutlineIcon };
      const open2 = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl2 = tmp5(1113).intl;
      open2("EMOJI_UNFAVORITED", obj5);
    } else {
      obj4.favoriteEmoji(customEmojiFromJoinedGuild);
      obj6 = { text: intl.string(intl6.t.mE2e8A), icon: StarIcon2.StarIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_WARNING };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = tmp5(1113).intl;
      open("EMOJI_FAVORITED", obj6);
    }
  }
  items5[1] = tmp34Result;
  items6 = [closure_16(analyticsLocations, obj14), , ];
  let tmp34Result8 = null;
  if (!isUnusableRoleSubscriptionEmoji && hasJoinedEmojiSourceGuild) {
    tmp34Result8 = null;
    if (!isTidaMediaTakedownRegion) {
      let string2Result;
      let intl2 = tmp2(tmp3[28]).intl;
      const string2 = intl2.string;
      const t2 = tmp2(tmp3[28]).t;
      const tmp37 = stateFromStores1;
      if (isFavoriteEmoji) {
        string2Result = string2(t2.aBUcp3);
      } else {
        string2Result = string2(t2.yZFibY);
      }
      const obj17 = { accessibilityLabel: string2Result, style: obj.moreMenuIcon, onPress: handleAddRemoveFavorite, children: tmp34Result7 };
      if (isFavoriteEmoji) {
        const obj18 = { style: obj19 };
        obj19 = {};
        const StarIcon = tmp2(tmp3[30]).StarIcon;
        const merged4 = Object.assign(obj.starIcon);
        const merged5 = Object.assign(obj.starIconSelected);
        tmp34Result7 = tmp34(StarIcon, obj18);
      } else {
        const obj20 = { style: obj21 };
        obj21 = {};
        const StarOutlineIcon = tmp2(tmp3[29]).StarOutlineIcon;
        const merged6 = Object.assign(obj.starIcon);
        const merged7 = Object.assign(obj.starIconUnselected);
        tmp34Result7 = tmp34(StarOutlineIcon, obj20);
      }
      tmp34Result8 = tmp34(tmp37, obj17);
    }
  }
  items6[1] = tmp34Result8;
  let tmp34Result9 = null;
  if (isTidaMediaTakedownRegion) {
    tmp34Result9 = null;
    if (setting) {
      tmp34Result9 = null;
      if (sourceType !== isFavoriteEmoji.PACK) {
        const obj22 = { accessibilityLabel: intl5.string(emojiNode(tmp3[28]).t.PdRCRg), style: obj.moreMenuIcon, onPress: handleOpenEmojiOptionsMenu, children: closure_15(MoreHorizontalIcon, obj23) };
        handleOpenEmojiOptionsMenu = function handleOpenEmojiOptionsMenu() {
          const obj = ActionSheetActionCreatorsDefault;
          const obj2 = { emojiSrc: emojiNode.src };
          obj.openLazy(asyncRequire(11248, dependencyMap.paths), "EmojiOptionsActionSheet", obj2, "stack");
        };
        intl5 = tmp2(tmp3[28]).intl;
        obj23 = { color: expressionSourceGuild(tmp3[9]).colors.INTERACTIVE_TEXT_DEFAULT };
        MoreHorizontalIcon = tmp2(tmp3[33]).MoreHorizontalIcon;
        tmp34Result9 = tmp34(stateFromStores1, obj22);
      }
    }
  }
  items6[2] = tmp34Result9;
  items4[1] = closure_16(analyticsLocations, obj13);
  const children = [closure_16(analyticsLocations, obj10), , , ];
  if (type === emojiNode(tmp3[23]).EmojiPopoutType.GET_PREMIUM) {
    let tmp34Result10 = null;
    if (type === emojiNode(tmp3[23]).EmojiPopoutType.GET_PREMIUM) {
      let tmp53;
      let flag2 = { shouldTintPurple: false }.shouldTintPurple;
      const obj24 = { style: obj9, children: closure_15(Button3, obj26) };
      Button3 = tmp2(tmp3[35]).Button;
      if (flag2 === undefined) {
        flag2 = false;
      }
      const nitroWheel = obj.nitroWheel;
      if (flag2) {
        const obj25 = {};
        const merged8 = Object.assign(nitroWheel);
        const merged9 = Object.assign(obj.nitroWheelPurple);
        tmp53 = obj25;
      } else {
        tmp53 = nitroWheel;
      }
      obj26 = {
        icon: closure_15(emojiNode(tmp3[34]).NitroWheel, obj27),
        text: emojiPopoutData.text,
        variant: "active",
        size: "md",
        grow: true,
        onPress() {
              let result = null == stateFromStores;
              const tmp3 = analyticsLocations;
              if (!result) {
                const obj = PremiumUtilsDefault;
                result = obj.canUseEmojisEverywhere(tmp);
              }
              if (!result) {
                const obj2 = ActionSheetActionCreatorsDefault;
                obj2.hideAllActionSheets();
                const obj4 = { nonce };
                const obj3 = AnalyticsUtilsDefault;
                obj3.track(constants.CLOSE_POPOUT, obj4);
                const obj7 = { location_page: null, location_section: null };
                ({ page: obj6.location_page, section: obj6.location_section } = obj6);
                const obj5 = AnalyticsUtilsDefault;
                obj5.track(constants.PREMIUM_PROMOTION_OPENED, obj7);
                const obj10 = { analyticsLocation: obj6, analyticsLocations: tmp3 };
                openPremiumModalDefault(obj10);
              }
            }
      };
      obj27 = { style: tmp53 };
      tmp34Result10 = tmp34(tmp32, obj24);
    }
    tmp34Result11 = tmp34Result10;
  } else {
    tmp34Result11 = null;
    if (type === JOIN_GUILD) {
      const obj28 = { style: obj9, children: closure_15(Button, obj29) };
      obj29 = {
        text: intl3.string(emojiNode(tmp3[28]).t.riu2R5),
        size: "md",
        grow: true,
        onPress() {
              let id;
              const handleJoinGuild = guild_GuildUtils.handleJoinGuild;
              guild_GuildUtils;
              if (expressionSourceGuild != null) {
                id = expressionSourceGuild.id;
              }
              handleJoinGuild(id);
            }
      };
      Button = tmp2(tmp3[35]).Button;
      intl3 = tmp2(tmp3[28]).intl;
      tmp34Result11 = tmp34(tmp32, obj28);
    }
  }
  children[1] = tmp34Result11;
  if (hasJoinedEmojiSourceGuild) {
    tmp30Result = null;
    if (null != expressionSourceGuild) {
      const obj30 = { style: obj.divider };
      const items8 = [closure_15(tmp2(tmp3[39]).FormDivider, obj30), , ];
      const obj31 = { guild: expressionSourceGuild, hasJoinedGuild: hasJoinedEmojiSourceGuild, title: stringResult, showingJoinGuildCta: type === JOIN_GUILD };
      items8[1] = closure_15(expressionSourceGuild(tmp3[40]), obj31);
      let tmp34Result12 = !hasJoinedEmojiSourceGuild;
      if (tmp34Result12) {
        const obj32 = { expressionSourceGuild, doNotDisplayEmojiIds: items9 };
        items9 = [emojiNode.id];
        tmp34Result12 = tmp34(tmp2(tmp3[41]).EmojiGrid, obj32);
      }
      const obj33 = { children: items8 };
      items8[2] = tmp34Result12;
      tmp30Result = tmp30(tmp31, obj33);
    }
  } else {
    tmp30Result = null;
  }
  children[2] = tmp30Result;
  let tmp30Result2 = null;
  if (!isUnusableRoleSubscriptionEmoji && hasJoinedEmojiSourceGuild) {
    tmp30Result2 = null;
    if (isTidaMediaTakedownRegion) {
      let string3Result;
      const obj34 = { style: obj.divider };
      const items10 = [closure_15(tmp2(tmp3[39]).FormDivider, obj34), ];
      const obj35 = { style: obj.favoriteButtonContainer, children: closure_15(Button2, obj36) };
      Button2 = tmp2(tmp3[35]).Button;
      const intl4 = tmp2(tmp3[28]).intl;
      const string3 = intl4.string;
      const t3 = tmp2(tmp3[28]).t;
      if (isFavoriteEmoji) {
        string3Result = string3(t3.Ay49KA);
      } else {
        string3Result = string3(t3.nNsr67);
      }
      obj36 = { text: string3Result, variant: str, size: "md", onPress: handleAddRemoveFavorite };
      str = "primary";
      if (isFavoriteEmoji) {
        str = "tertiary";
      }
      const obj37 = { children: items10 };
      items10[1] = closure_15(analyticsLocations, obj35);
      tmp30Result2 = tmp30(tmp31, obj37);
    }
  }
  children[3] = tmp30Result2;
  return closure_16(closure_17, { children });
};
