// Module ID: 9622
// Function ID: 9623
// Name: CustomEmojiContent
// Dependencies: [19, 17, 6927, 4872, 4950, 1386, 1071, 21, 4917, 575, 2173, 1255, 8960, 5131, 9616, 504, 6253, 4871, 4866, 4841, 9400, 4742, 9623, 7968, 9617, 9620, 5599, 1112, 9624, 9626, 9628, 2119, 7612, 1186, 5515, 5604, 5508, 9629, 7947, 9630, 9631, 2]
// Exports: default

// Module 9622 (CustomEmojiContent)
import nativeDefault from "native" /* 575 */;
import intl5 from "intl" /* 1112 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2173 */;
import RoleSubscriptionEmojiUtilsAll from "RoleSubscriptionEmojiUtils" /* 4871 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5599 */;
import ExpressionSourceRecord from "ExpressionSourceRecord" /* 6927 */;
import openUserSettings from "openUserSettings" /* 7968 */;
import openPremiumModalDefault from "openPremiumModal" /* 8960 */;
import EmojiActionCreators from "EmojiActionCreators" /* 9620 */;
import StarOutlineIcon from "StarOutlineIcon" /* 9624 */;
import StarIcon from "StarIcon" /* 9626 */;
import guild_GuildUtils from "guild/GuildUtils" /* 9629 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SubscriptionRoleStore from "SubscriptionRoleStore" /* 4872 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4950 */;
import UserStore from "UserStore" /* 1386 */;
import Constants from "Constants" /* 1071 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4917 */;
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
let size;
let unpackModuleId;
({ Pressable: hasOwnProperty, View: metroRequire } = react_native);
const EmojiSourceDataTypes = ExpressionSourceRecord.EmojiSourceDataTypes;
({ UserSettingsSections: unpackModuleId, AnalyticEvents: closure_12, AnalyticsPages: map1, AnalyticsSections: closure_14 } = Constants);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = Fragment);
let createStyles = createStyles_mod;
let obj = { nitroWheel: { height: 32, width: 32 }, nitroWheelPurple: obj2, emojiDescriptionWrapperOuter: { flexDirection: "row", flex: 1, alignItems: "center", gap: 8 }, moreMenuIcon: size, bottomCtaButton: { marginTop: 24 }, ctaDescriptionWrapper: { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginTop: 8 }, betaTag: obj3, betaTagTextAddPack: obj4, betaTagTextRemovePack: obj5, favoriteButtonContainer: obj6 };
obj2 = { tintColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND_NEW };
createStyles = createStyles.createStyles;
size = { height: 32, width: 32, justifyContent: "center", alignItems: "center", color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
obj3 = { backgroundColor: nativeDefault.colors.WHITE };
obj4 = { color: nativeDefault.unsafe_rawColors.BRAND_530 };
obj5 = { color: nativeDefault.unsafe_rawColors.PRIMARY_500 };
obj6 = { paddingTop: nativeDefault.space.PX_4 };
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
  let intl2;
  let intl4;
  let isRoleSubscriptionEmoji;
  let items4;
  let items5;
  let items6;
  let items9;
  let nonce;
  let obj11;
  let obj18;
  let obj21;
  let obj22;
  let obj24;
  let obj31;
  let sourceType;
  let str;
  let stringResult;
  let tmp28Result;
  let tmp32Result7;
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
  const tmp2Result4 = emojiNode(tmp3[20]);
  isFavoriteEmoji = tmp2Result4.useIsFavoriteEmoji(stateFromStores1, customEmojiFromJoinedGuild);
  const DeveloperMode = tmp2(tmp3[21]).DeveloperMode;
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
  const tmp2Result5 = emojiNode(tmp3[22]);
  const emojiPopoutData = tmp2Result5.getEmojiPopoutData(obj7);
  const obj8 = { emojiId: emojiNode.id, currentGuildId: stateFromStores1, popoutData: emojiPopoutData, emojiSourceGuildId: id1, nonce };
  id1 = undefined;
  const useTrackOpenPopout = tmp2(tmp3[24]).useTrackOpenPopout;
  emojiNode(tmp3[24]);
  if (expressionSourceGuild != null) {
    id1 = expressionSourceGuild.id;
  }
  const trackOpenPopout = useTrackOpenPopout(obj8);
  ({ emojiDescription, type } = emojiPopoutData);
  let intl = tmp2(tmp3[27]).intl;
  const string = intl.string;
  const t = tmp2(tmp3[27]).t;
  if (hasJoinedEmojiSourceGuild) {
    stringResult = string(t.ohTzZH);
  } else {
    stringResult = string(t["eLfh+a"]);
  }
  const JOIN_GUILD = tmp2(tmp3[22]).EmojiPopoutType.JOIN_GUILD;
  const items3 = [tmp2(tmp3[22]).EmojiPopoutType.GET_PREMIUM, tmp2(tmp3[22]).EmojiPopoutType.JOIN_GUILD];
  const obj9 = { borderRadius: expressionSourceGuild(tmp3[9]).radii.xl };
  const tmp26 = items3.includes(type) ? obj.ctaButton : obj.bottomCtaButton;
  const merged2 = Object.assign(tmp26);
  let obj10 = { style: obj11, children: items4 };
  obj11 = { marginTop: 8 };
  const merged3 = Object.assign(obj.emojiContainer);
  items4 = [, ];
  const obj12 = { style: obj.emojiIcon, source: { uri: emojiNode.src } };
  items4[0] = closure_15(expressionSourceGuild(tmp3[35]), obj12);
  const obj13 = { style: obj.emojiDescriptionWrapperOuter, children: items6 };
  const obj14 = { style: obj.emojiDescriptionWrapper, children: items5 };
  const obj15 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", children: ":" + emojiNode.alt + ":" };
  const Text = tmp2(tmp3[36]).Text;
  items5 = [closure_15(Text, obj15), ];
  let tmp32Result = null != emojiDescription;
  if (tmp32Result) {
    const obj16 = { variant: "body-sm/medium", children: emojiDescription };
    tmp32Result = tmp32(tmp2(tmp3[36]).Text, obj16);
  }
  items5[1] = tmp32Result;
  items6 = [closure_16(analyticsLocations, obj14), ];
  let tmp32Result5 = null;
  if (setting) {
    tmp32Result5 = null;
    if (sourceType !== isFavoriteEmoji.PACK) {
      const obj17 = { accessibilityLabel: intl4.string(emojiNode(tmp3[27]).t.PdRCRg), style: obj.moreMenuIcon, onPress: handleOpenEmojiOptionsMenu, children: closure_15(MoreHorizontalIcon, obj18) };
      handleOpenEmojiOptionsMenu = function handleOpenEmojiOptionsMenu() {
        const obj = ActionSheetActionCreatorsDefault;
        const obj2 = { emojiSrc: emojiNode.src };
        obj.openLazy(asyncRequire(9628, dependencyMap.paths), "EmojiOptionsActionSheet", obj2, "stack");
      };
      intl4 = tmp2(tmp3[27]).intl;
      obj18 = { color: expressionSourceGuild(tmp3[9]).colors.INTERACTIVE_TEXT_DEFAULT };
      MoreHorizontalIcon = tmp2(tmp3[32]).MoreHorizontalIcon;
      tmp32Result5 = tmp32(stateFromStores1, obj17);
    }
  }
  items6[1] = tmp32Result5;
  items4[1] = closure_16(analyticsLocations, obj13);
  const children = [closure_16(analyticsLocations, obj10), , , ];
  if (type === emojiNode(tmp3[22]).EmojiPopoutType.GET_PREMIUM) {
    let tmp32Result6 = null;
    if (type === emojiNode(tmp3[22]).EmojiPopoutType.GET_PREMIUM) {
      let tmp39;
      let flag2 = { shouldTintPurple: false }.shouldTintPurple;
      const obj19 = { style: obj9, children: closure_15(Button3, obj21) };
      Button3 = tmp2(tmp3[34]).Button;
      if (flag2 === undefined) {
        flag2 = false;
      }
      const nitroWheel = obj.nitroWheel;
      if (flag2) {
        const obj20 = {};
        const merged4 = Object.assign(nitroWheel);
        const merged5 = Object.assign(obj.nitroWheelPurple);
        tmp39 = obj20;
      } else {
        tmp39 = nitroWheel;
      }
      obj21 = {
        icon: closure_15(emojiNode(tmp3[33]).NitroWheel, obj22),
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
      obj22 = { style: tmp39 };
      tmp32Result6 = tmp32(tmp30, obj19);
    }
    tmp32Result7 = tmp32Result6;
  } else {
    tmp32Result7 = null;
    if (type === JOIN_GUILD) {
      const obj23 = { style: obj9, children: closure_15(Button, obj24) };
      obj24 = {
        text: intl2.string(emojiNode(tmp3[27]).t.riu2R5),
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
      Button = tmp2(tmp3[34]).Button;
      intl2 = tmp2(tmp3[27]).intl;
      tmp32Result7 = tmp32(tmp30, obj23);
    }
  }
  children[1] = tmp32Result7;
  if (hasJoinedEmojiSourceGuild) {
    tmp28Result = null;
    if (null != expressionSourceGuild) {
      const obj25 = { style: obj.divider };
      const items8 = [closure_15(tmp2(tmp3[38]).FormDivider, obj25), , ];
      const obj26 = { guild: expressionSourceGuild, hasJoinedGuild: hasJoinedEmojiSourceGuild, title: stringResult, showingJoinGuildCta: type === JOIN_GUILD };
      items8[1] = closure_15(expressionSourceGuild(tmp3[39]), obj26);
      let tmp32Result8 = !hasJoinedEmojiSourceGuild;
      if (tmp32Result8) {
        const obj27 = { expressionSourceGuild, doNotDisplayEmojiIds: items9 };
        items9 = [emojiNode.id];
        tmp32Result8 = tmp32(tmp2(tmp3[40]).EmojiGrid, obj27);
      }
      const obj28 = { children: items8 };
      items8[2] = tmp32Result8;
      tmp28Result = tmp28(tmp29, obj28);
    }
  } else {
    tmp28Result = null;
  }
  children[2] = tmp28Result;
  let tmp28Result2 = null;
  if (!isUnusableRoleSubscriptionEmoji) {
    tmp28Result2 = null;
    if (hasJoinedEmojiSourceGuild) {
      let string2Result;
      const obj29 = { style: obj.divider };
      const items10 = [closure_15(tmp2(tmp3[38]).FormDivider, obj29), ];
      const obj30 = { style: obj.favoriteButtonContainer, children: closure_15(Button2, obj31) };
      Button2 = tmp2(tmp3[34]).Button;
      const intl3 = tmp2(tmp3[27]).intl;
      const string2 = intl3.string;
      const t2 = tmp2(tmp3[27]).t;
      if (isFavoriteEmoji) {
        string2Result = string2(t2.Ay49KA);
      } else {
        string2Result = string2(t2.nNsr67);
      }
      obj31 = {
        text: string2Result,
        variant: str,
        size: "md",
        onPress: function handleAddRemoveFavorite() {
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
                const obj5 = { text: intl2.string(intl5.t.in1rga), icon: StarOutlineIcon.StarOutlineIcon };
                const open2 = ToastActionCreatorsDefault.open;
                ToastActionCreatorsDefault;
                intl2 = tmp5(1112).intl;
                open2("EMOJI_UNFAVORITED", obj5);
              } else {
                obj4.favoriteEmoji(customEmojiFromJoinedGuild);
                obj6 = { text: intl.string(intl5.t.mE2e8A), icon: StarIcon.StarIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_WARNING };
                const open = ToastActionCreatorsDefault.open;
                ToastActionCreatorsDefault;
                intl = tmp5(1112).intl;
                open("EMOJI_FAVORITED", obj6);
              }
            }
      };
      str = "primary";
      if (isFavoriteEmoji) {
        str = "tertiary";
      }
      const obj32 = { children: items10 };
      items10[1] = closure_15(analyticsLocations, obj30);
      tmp28Result2 = tmp28(tmp29, obj32);
    }
  }
  children[3] = tmp28Result2;
  return closure_16(closure_17, { children });
};
