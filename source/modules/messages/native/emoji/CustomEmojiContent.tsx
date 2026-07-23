// Module ID: 9393
// Function ID: 73234
// Name: CustomEmojiContent
// Dependencies: [31, 27, 4992, 3947, 1849, 653, 33, 4130, 689, 3776, 675, 8139, 4098, 9387, 566, 5464, 4996, 3774, 3751, 9330, 5491, 3803, 9394, 5796, 9388, 9395, 9397, 4126, 1212, 9391, 3831, 9399, 1934, 8968, 1273, 4543, 5085, 9400, 7495, 9401, 9402, 2]
// Exports: default

// Module 9393 (CustomEmojiContent)
import EmojiOptionsActionSheet from "EmojiOptionsActionSheet";
import get_ActivityIndicator from "Text";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "MoreHorizontalIcon";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_5;
let closure_6;
const require = arg1;
({ Pressable: closure_5, View: closure_6 } = get_ActivityIndicator);
({ UserSettingsSections: closure_10, AnalyticEvents: closure_11, AnalyticsPages: closure_12, AnalyticsSections: closure_13 } = ME);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
_createForOfIteratorHelperLoose = { nitroWheel: { height: 32, width: 32 } };
_createForOfIteratorHelperLoose = { tintColor: require("_createForOfIteratorHelperLoose").colors.CONTROL_BRAND_FOREGROUND_NEW };
_createForOfIteratorHelperLoose.nitroWheelPurple = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.emojiDescriptionWrapperOuter = { flexDirection: "row", flex: 1, alignItems: "center", gap: 8 };
_createForOfIteratorHelperLoose.starIcon = { height: 32, width: 32, margin: 0, padding: 0, flex: 0 };
_createForOfIteratorHelperLoose.starIconSelected = { tintColor: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_WARNING };
let obj1 = { tintColor: require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_WARNING };
_createForOfIteratorHelperLoose.starIconUnselected = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
let obj3 = { height: 32, width: 32, justifyContent: "center", alignItems: "center", color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_ICON_DEFAULT };
_createForOfIteratorHelperLoose.moreMenuIcon = obj3;
_createForOfIteratorHelperLoose.bottomCtaButton = { marginTop: 24 };
_createForOfIteratorHelperLoose.ctaDescriptionWrapper = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginTop: 8 };
let obj2 = { tintColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.betaTag = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
let obj4 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.WHITE };
_createForOfIteratorHelperLoose.betaTagTextAddPack = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_530 };
let obj5 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_530 };
_createForOfIteratorHelperLoose.betaTagTextRemovePack = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_500 };
let obj6 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_500 };
_createForOfIteratorHelperLoose.favoriteButtonContainer = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj7 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_4 };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/emoji/CustomEmojiContent.tsx");

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
  const expressionSourceGuild = emojiNode.expressionSourceGuild;
  const customEmojiFromJoinedGuild = emojiNode.customEmojiFromJoinedGuild;
  ({ hasJoinedEmojiSourceGuild, nonce } = emojiNode);
  let obj;
  let stateFromStores;
  let analyticsLocations;
  let isFavoriteEmoji;
  obj = undefined;
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
      const obj = { style: { marginLeft: 8, marginTop: 2 }, variant: "text-md/bold" };
      const intl = emojiNode(nonce[28]).intl;
      const string = intl.string;
      const t = emojiNode(nonce[28]).t;
      if (outer1_8) {
        let stringResult = string(t.in1rga);
      } else {
        stringResult = string(t.mE2e8A);
      }
      obj.children = stringResult;
      return renderStarIcon(emojiNode(nonce[27]).Text, obj);
    }
    closeActionSheet();
    let obj = emojiNode(nonce[29]);
    if (isFavoriteEmoji) {
      obj.unfavoriteEmoji(customEmojiFromJoinedGuild);
      obj = {
        key: "EMOJI_UNFAVORITED",
        icon() {
            return outer1_14({ isSelected: false });
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
            return outer1_14({ isSelected: true });
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
  obj = {};
  ({ sourceType, expressionSourceApplication } = emojiNode);
  let merged = Object.assign(_createForOfIteratorHelperLoose());
  let obj1 = emojiNode(nonce[13]);
  let merged1 = Object.assign(obj1.useSharedMessageEmojiStyles());
  obj2 = emojiNode(nonce[14]);
  const items = [obj];
  stateFromStores = obj2.useStateFromStores(items, () => obj.getCurrentUser());
  let obj3 = expressionSourceGuild(nonce[9]);
  let obj4 = emojiNode(nonce[14]);
  const items1 = [isFavoriteEmoji];
  const stateFromStores1 = obj4.useStateFromStores(items1, () => isFavoriteEmoji.getGuildId());
  let tmp6 = null != stateFromStores1;
  if (tmp6) {
    let id;
    if (null != expressionSourceGuild) {
      id = expressionSourceGuild.id;
    }
    tmp6 = stateFromStores1 === id;
  }
  analyticsLocations = expressionSourceGuild(nonce[15])().analyticsLocations;
  const items2 = [customEmojiFromJoinedGuild, stateFromStores1];
  const memo = obj.useMemo(() => {
    if (null == customEmojiFromJoinedGuild) {
      let obj = { isRoleSubscriptionEmoji: false, isUnusableRoleSubscriptionEmoji: false, userIsRoleSubscriber: false };
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
    tmp9 = type !== emojiNode(nonce[17]).EmojiTypes.GUILD;
  }
  let result = !tmp9;
  if (!tmp9) {
    let obj5 = emojiNode(nonce[18]);
    let guildId;
    if (null != customEmojiFromJoinedGuild) {
      guildId = customEmojiFromJoinedGuild.guildId;
    }
    result = obj5.shouldHideGuildPurchaseEntryPoints(guildId);
  }
  let obj6 = emojiNode(nonce[19]);
  isFavoriteEmoji = obj6.useIsFavoriteEmoji(stateFromStores1, customEmojiFromJoinedGuild);
  let obj7 = expressionSourceGuild(nonce[20]);
  const tidaWebformEnabled = obj7.useExperiment({ location: "CustomEmojiContent" }, { autoTrackExposure: false }).tidaWebformEnabled;
  const DeveloperMode = emojiNode(nonce[21]).DeveloperMode;
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
  let obj9 = emojiNode(nonce[22]);
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
  let obj11 = emojiNode(nonce[24]);
  obj1 = { emojiId: emojiNode.id, currentGuildId: stateFromStores1, popoutData: emojiPopoutData };
  let id1;
  if (null != expressionSourceGuild) {
    id1 = expressionSourceGuild.id;
  }
  obj1.emojiSourceGuildId = id1;
  obj1.nonce = nonce;
  const trackOpenPopout = obj11.useTrackOpenPopout(obj1);
  ({ emojiDescription, type } = emojiPopoutData);
  let intl = emojiNode(nonce[28]).intl;
  let string = intl.string;
  let t = emojiNode(nonce[28]).t;
  if (hasJoinedEmojiSourceGuild) {
    let stringResult = string(t.ohTzZH);
  } else {
    stringResult = string(t["eLfh+a"]);
  }
  const tmp28 = type === emojiNode(nonce[22]).EmojiPopoutType.JOIN_GUILD;
  obj2 = {};
  const items3 = [emojiNode(nonce[22]).EmojiPopoutType.GET_PREMIUM, emojiNode(nonce[22]).EmojiPopoutType.JOIN_GUILD];
  const isPremiumResult = obj3.isPremium(stateFromStores);
  let merged2 = Object.assign(items3.includes(type) ? obj.ctaButton : obj.bottomCtaButton);
  obj2["borderRadius"] = expressionSourceGuild(nonce[8]).radii.xl;
  obj3 = {};
  obj4 = {};
  obj5 = {};
  const merged3 = Object.assign(obj.emojiContainer);
  obj5["marginTop"] = 8;
  obj4.style = obj5;
  obj6 = { style: obj.emojiIcon, source: obj7 };
  obj7 = { uri: emojiNode.src };
  const items4 = [renderStarIcon(expressionSourceGuild(nonce[36]), obj6), ];
  const obj8 = { style: obj.emojiDescriptionWrapperOuter };
  obj9 = { style: obj.emojiDescriptionWrapper };
  const obj10 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: ":" + emojiNode.alt + ":" };
  const items5 = [renderStarIcon(emojiNode(nonce[27]).Text, obj10), ];
  let tmp35 = null != emojiDescription;
  if (tmp35) {
    obj11 = { variant: "text-sm/medium", children: emojiDescription };
    tmp35 = renderStarIcon(emojiNode(nonce[27]).Text, obj11);
  }
  items5[1] = tmp35;
  obj9.children = items5;
  const items6 = [renderNitroWheel(stateFromStores1, obj9), , ];
  let tmp39 = null;
  if (!isUnusableRoleSubscriptionEmoji && hasJoinedEmojiSourceGuild) {
    tmp39 = null;
    if (!tidaWebformEnabled) {
      const obj12 = {};
      const intl2 = emojiNode(nonce[28]).intl;
      const string2 = intl2.string;
      const t2 = emojiNode(nonce[28]).t;
      if (isFavoriteEmoji) {
        let string2Result = string2(t2.aBUcp3);
      } else {
        string2Result = string2(t2.yZFibY);
      }
      obj12.accessibilityLabel = string2Result;
      obj12.style = obj.moreMenuIcon;
      obj12.onPress = handleAddRemoveFavorite;
      let StarIcon = emojiNode;
      let obj14 = nonce;
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
      const intl3 = emojiNode(nonce[28]).intl;
      obj17.accessibilityLabel = intl3.string(emojiNode(nonce[28]).t.PdRCRg);
      obj17.style = obj.moreMenuIcon;
      obj17.onPress = function handleOpenEmojiOptionsMenu() {
        let obj = expressionSourceGuild(nonce[12]);
        obj = { emojiSrc: emojiNode.src };
        obj.openLazy(emojiNode(nonce[32])(nonce[31], nonce.paths), "EmojiOptionsActionSheet", obj, "stack");
      };
      const obj18 = { color: expressionSourceGuild(nonce[8]).colors.INTERACTIVE_TEXT_DEFAULT };
      obj17.children = renderStarIcon(emojiNode(nonce[33]).MoreHorizontalIcon, obj18);
      tmp56 = renderStarIcon(stateFromStores, obj17);
    }
  }
  items6[2] = tmp56;
  obj8.children = items6;
  items4[1] = renderNitroWheel(stateFromStores1, obj8);
  obj4.children = items4;
  const items7 = [renderNitroWheel(stateFromStores1, obj4), , , ];
  if (type === emojiNode(nonce[22]).EmojiPopoutType.GET_PREMIUM) {
    let tmp66 = (function renderPremiumUpsellButton() {
      let tmp = null;
      if (type === emojiNode(nonce[22]).EmojiPopoutType.GET_PREMIUM) {
        let obj = { style: obj2 };
        obj = {
          icon: renderNitroWheel(),
          text: emojiPopoutData.text,
          variant: "active",
          size: "md",
          grow: true,
          onPress() {
              let result = null == outer1_5;
              if (!result) {
                let obj = expressionSourceGuild(nonce[9]);
                result = obj.canUseEmojisEverywhere(tmp);
              }
              if (!result) {
                outer1_13();
                obj = {};
                ({ page: obj3.location_page, section: obj3.location_section } = tmp2);
                expressionSourceGuild(nonce[10]).track(type.PREMIUM_PROMOTION_OPENED, obj);
                obj = { analyticsLocation: tmp2, analyticsLocations: outer1_7 };
                expressionSourceGuild(nonce[11])(obj);
                const obj2 = expressionSourceGuild(nonce[10]);
              }
            }
        };
        obj.children = renderStarIcon(emojiNode(nonce[35]).Button, obj);
        tmp = renderStarIcon(stateFromStores1, obj);
      }
      return tmp;
    })();
  } else {
    tmp66 = null;
    if (tmp28) {
      const obj19 = { style: obj2 };
      const obj20 = { text: null, size: "md", grow: true };
      const intl4 = emojiNode(nonce[28]).intl;
      obj20.text = intl4.string(emojiNode(nonce[28]).t.riu2R5);
      obj20.onPress = function onPress() {
        let id;
        if (null != expressionSourceGuild) {
          id = expressionSourceGuild.id;
        }
        emojiNode(nonce[37]).handleJoinGuild(id);
      };
      obj19.children = renderStarIcon(emojiNode(nonce[35]).Button, obj20);
      tmp66 = renderStarIcon(stateFromStores1, obj19);
    }
  }
  items7[1] = tmp66;
  if (hasJoinedEmojiSourceGuild) {
    let tmp68Result = null;
    if (null != expressionSourceGuild) {
      const obj21 = {};
      const obj22 = { style: obj.divider };
      const items8 = [renderStarIcon(emojiNode(nonce[38]).FormDivider, obj22), , ];
      const obj23 = { guild: expressionSourceGuild, hasJoinedGuild: hasJoinedEmojiSourceGuild, title: stringResult, showingJoinGuildCta: tmp28 };
      items8[1] = renderStarIcon(expressionSourceGuild(nonce[39]), obj23);
      let tmp74 = !hasJoinedEmojiSourceGuild;
      if (tmp74) {
        const obj24 = { expressionSourceGuild };
        const items9 = [emojiNode.id];
        obj24.doNotDisplayEmojiIds = items9;
        tmp74 = renderStarIcon(emojiNode(nonce[40]).EmojiGrid, obj24);
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
      const items10 = [renderStarIcon(emojiNode(nonce[38]).FormDivider, obj26), ];
      const obj27 = { style: obj.favoriteButtonContainer };
      const obj28 = {};
      const intl5 = emojiNode(nonce[28]).intl;
      const string3 = intl5.string;
      const t3 = emojiNode(nonce[28]).t;
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
      obj27.children = renderStarIcon(emojiNode(nonce[35]).Button, obj28);
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
