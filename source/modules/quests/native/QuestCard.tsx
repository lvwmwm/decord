// Module ID: 13989
// Function ID: 107073
// Name: ESTIMATED_CARD_HEIGHT
// Dependencies: [5, 57, 31, 27, 1849, 6942, 4976, 482, 33, 689, 4130, 3945, 3974, 4979, 6948, 10925, 10464, 1450, 9458, 13990, 7879, 6837, 6842, 6969, 566, 9463, 6965, 6940, 9468, 4066, 8206, 3834, 10468, 9449, 9450, 9451, 6970, 10472, 4098, 14016, 1934, 10926, 6784, 1212, 10919, 10475, 14020, 9444, 9465, 9466, 4549, 9889, 8600, 3994, 477, 8708, 4126, 14021, 5167, 14059, 5085, 4554, 668, 14047, 4541, 5705, 14027, 10922, 14060, 4543, 14063, 7771, 9950, 14048, 2]

// Module 13989 (ESTIMATED_CARD_HEIGHT)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import VideoQuestModalSteps from "VideoQuestModalSteps";
import importAllResult from "map";
import get_ActivityIndicator from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { QuestsExperimentLocations } from "QuestsExperimentLocations";
import { NOOP } from "sum";
import jsxProd from "apexExperiment";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let StyleSheet;
let closure_12;
let closure_13;
let closure_14;
let closure_6;
let closure_7;
const require = arg1;
({ Image: closure_6, StyleSheet, View: closure_7 } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = jsxProd);
let result = _createForOfIteratorHelperLoose.experimental_createToken((theme) => {
  theme = theme.theme;
  const obj = require(3945);
  const internal = importDefault(689).internal;
  const colors = importDefault(689).colors;
  const semanticColor = internal.resolveSemanticColor(theme, require(3945).isThemeDark(theme) ? colors.BACKGROUND_SURFACE_HIGH : colors.BLACK);
  const isThemeDarkResult = require(3945).isThemeDark(theme);
  return require(3974) /* hexToRgb */.hexOpacityToRgba(semanticColor, 0);
});
let result1 = _createForOfIteratorHelperLoose.experimental_createToken((theme) => {
  theme = theme.theme;
  const isThemeDarkResult = require(3945).isThemeDark(theme);
  const internal = importDefault(689).internal;
  const colors = importDefault(689).colors;
  const semanticColor = internal.resolveSemanticColor(theme, isThemeDarkResult ? colors.BACKGROUND_SURFACE_HIGH : colors.BLACK);
  const obj = require(3945);
  let num = 0.5;
  if (isThemeDarkResult) {
    num = 0.8;
  }
  return require(3974) /* hexToRgb */.hexOpacityToRgba(semanticColor, num);
});
let result2 = _createForOfIteratorHelperLoose.experimental_createToken((theme) => {
  const obj = require(3945);
  const colors = importDefault(689).colors;
  return require(3945).isThemeDark(theme.theme) ? colors.BACKGROUND_SURFACE_HIGH : colors.BLACK;
});
const PX_16 = require("_createForOfIteratorHelperLoose").space.PX_16;
let obj = {};
obj = { position: "relative", padding: 0, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16, overflow: "hidden" };
obj.container = obj;
_createForOfIteratorHelperLoose = { display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.heroContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = { resizeMode: "cover" };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.heroImg = _createForOfIteratorHelperLoose;
obj.heroLinearGradientOverlay = StyleSheet.absoluteFillObject;
_createForOfIteratorHelperLoose = { position: "absolute", top: require("_createForOfIteratorHelperLoose").space.PX_8, right: require("_createForOfIteratorHelperLoose").space.PX_8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, padding: require("_createForOfIteratorHelperLoose").space.PX_4, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
let merged1 = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_LOW);
obj.previewBadge = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = { height: 64, width: 64, marginRight: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.rewardImgContainer = _createForOfIteratorHelperLoose;
obj.heroFooterContainer = { display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end" };
obj.heroFooterLeftContainer = { display: "flex", flexDirection: "column", alignItems: "flex-start" };
obj.detailsWrapper = { display: "flex", padding: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.detailsContainer = { display: "flex", flexDirection: "row" };
let obj5 = { display: "flex", padding: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.questName = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj7 = { display: "flex", flexDirection: "column", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.bodyContainer = obj7;
let obj8 = { flexDirection: "row", alignItems: "center", rowGap: require("_createForOfIteratorHelperLoose").space.PX_4, columnGap: require("_createForOfIteratorHelperLoose").space.PX_8, flexWrap: "wrap" };
obj.subtitleRow = obj8;
obj.orbWithAmountRow = { flexDirection: "row", alignItems: "center" };
obj.detailsTextContainer = { flex: 1, justifyContent: "center" };
let obj9 = { borderTopWidth: 1, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, display: "flex", flexDirection: "row", alignItems: "center", padding: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.buttonContainers = obj9;
obj.equalWidthContainer = { flexBasis: 0, flexGrow: 1, flexShrink: 1 };
let closure_16 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_17 = _createForOfIteratorHelperLoose.createStyleProperties({ gradientStart: result, gradientMid: result1, gradientEnd: result2 });
let obj6 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
const memoResult = importAllResult.memo((questContent) => {
  let PX_16;
  let closure_14;
  let closure_16;
  let closure_25;
  let closure_26;
  let _isNativeReflectConstruct;
  let gradientEnd;
  let gradientMid;
  let gradientStart;
  let quest;
  let questEnrollmentBlockedUntil;
  let require;
  let sourceQuestContent;
  function trackClick(questContentCTA) {
    let obj = outer1_0(QUEST_HOME_MOBILE[33]);
    if (obj.shouldMigrateToAdAnalyticsInterface(outer1_0(QUEST_HOME_MOBILE[33]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_card")) {
      obj = { type: outer1_0(QUEST_HOME_MOBILE[35]).AdUserActionType.CLICK_INTERNAL, adCreativeType: outer1_0(QUEST_HOME_MOBILE[36]).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA, surfaceId: QUEST_HOME_MOBILE, sourceQuestContent, impressionId: getQuestImpressionId() };
      outer1_0(QUEST_HOME_MOBILE[34]).captureAdUserAction(obj);
      const obj3 = outer1_0(QUEST_HOME_MOBILE[34]);
    } else {
      obj = { questId: quest.id, questContent: QUEST_HOME_MOBILE, questContentCTA, sourceQuestContent };
      callback2(obj);
    }
  }
  function showQuestBottomSheet() {
    let obj = quest(QUEST_HOME_MOBILE[38]);
    obj = { questId: quest.id, questContentPosition: _isNativeReflectConstruct, sourceQuestContent };
    obj.openLazy(outer1_0(QUEST_HOME_MOBILE[40])(QUEST_HOME_MOBILE[39], QUEST_HOME_MOBILE.paths), "QuestBottomSheet", obj);
  }
  ({ onLayout: require, quest } = questContent);
  let QUEST_HOME_MOBILE = questContent.questContent;
  if (undefined === QUEST_HOME_MOBILE) {
    let merged = require;
    QUEST_HOME_MOBILE = require(QUEST_HOME_MOBILE[13]).QuestContent.QUEST_HOME_MOBILE;
  }
  ({ questContentPosition: _isNativeReflectConstruct, sourceQuestContent } = questContent);
  let obj = require(QUEST_HOME_MOBILE[14]);
  obj = { quest, location: QuestsExperimentLocations.QUEST_HOME_MOBILE };
  const importAllResult = obj.getQuestLogger(obj);
  let obj2 = require(QUEST_HOME_MOBILE[15]);
  let closure_6 = obj2.useTrackQuestContentClickedWithImpression();
  let obj3 = require(QUEST_HOME_MOBILE[16]);
  let closure_7 = obj3.useQuestTaskDetails(quest);
  let obj4 = require(QUEST_HOME_MOBILE[16]);
  const userStatus = quest.userStatus;
  let enrolledAt;
  if (null != userStatus) {
    enrolledAt = userStatus.enrolledAt;
  }
  let tmp5 = callback3();
  let closure_8 = tmp5;
  const diff = quest(QUEST_HOME_MOBILE[17])().width - 2 * PX_16;
  let result = 0.2803030303030303 * diff;
  QuestsExperimentLocations = result;
  let items = [quest, diff, result];
  const memo = importAllResult.useMemo(() => {
    let obj = outer1_0(QUEST_HOME_MOBILE[18]);
    const questAsset = obj.getQuestAsset(quest, outer1_0(QUEST_HOME_MOBILE[18]).QuestAssetType.HERO);
    obj = {};
    const merged = Object.assign(questAsset);
    const obj3 = outer1_0(QUEST_HOME_MOBILE[18]);
    if (questAsset.isAnimated) {
      obj = { assetUrl: questAsset.url, width: closure_9, height: closure_10 };
      let url = obj3.getScaledFirstFrameImageUrl(obj);
      if (null == url) {
        url = questAsset.url;
      }
      obj["url"] = url;
      let tmp5 = obj;
    } else {
      const obj1 = { assetUrl: questAsset.url, width: closure_9, height: closure_10 };
      obj["url"] = obj3.getScaledImageUrl(obj1);
      tmp5 = obj;
    }
    return tmp5;
  }, items);
  let obj5 = require(QUEST_HOME_MOBILE[19]);
  const questGameLogotypeAssetUrl = obj5.useQuestGameLogotypeAssetUrl(quest);
  ({ gradientStart, gradientMid, gradientEnd } = questEnrollmentBlockedUntil());
  let obj6 = require(QUEST_HOME_MOBILE[20]);
  let items1 = [quest.id];
  const tmp11 = sourceQuestContent(obj6.useRecyclingState(null, items1), 2);
  const first = tmp11[0];
  let callback2 = tmp13;
  let items2 = [tmp11[1]];
  const callback = importAllResult.useCallback(() => {
    tmp13(false);
  }, items2);
  let items3 = [first, quest.id, QUEST_HOME_MOBILE];
  const effect = importAllResult.useEffect(() => {
    if (false === first) {
      let obj = quest(QUEST_HOME_MOBILE[21]);
      obj = { name: outer1_0(QUEST_HOME_MOBILE[22]).MetricEvents.QUEST_CONTENT_RENDERING_FAILURE };
      const _HermesInternal = HermesInternal;
      const items = ["quest_id:" + quest.id, , ];
      const _HermesInternal2 = HermesInternal;
      items[1] = "quest_content:" + outer1_0(QUEST_HOME_MOBILE[23]).getQuestContentName(QUEST_HOME_MOBILE);
      items[2] = "reason:asset_loading_error";
      obj.tags = items;
      obj.increment(obj);
      const obj3 = outer1_0(QUEST_HOME_MOBILE[23]);
    }
  }, items3);
  let obj7 = require(QUEST_HOME_MOBILE[24]);
  const items4 = [closure_8];
  const stateFromStores = obj7.useStateFromStores(items4, () => tmp5.getCurrentUser());
  let obj8 = require(QUEST_HOME_MOBILE[25]);
  const defaultRewardNameWithArticle = obj8.getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  let obj9 = require(QUEST_HOME_MOBILE[24]);
  const items5 = [diff];
  const stateFromStoresObject = obj9.useStateFromStoresObject(items5, () => ({ reward: diff.getRewards(quest.id), isFetchingRewardCode: diff.isFetchingRewardCode(quest.id), isClaimingReward: diff.isClaimingReward(quest.id), isEnrolling: diff.isEnrolling(quest.id), questEnrollmentBlockedUntil: diff.questEnrollmentBlockedUntil }));
  ({ isFetchingRewardCode: closure_14, isClaimingReward: PX_16, isEnrolling: closure_16, questEnrollmentBlockedUntil } = stateFromStoresObject);
  let obj10 = require(QUEST_HOME_MOBILE[16]);
  const userStatus2 = quest.userStatus;
  let completedAt;
  if (null != userStatus2) {
    completedAt = userStatus2.completedAt;
  }
  const questFormattedDate = obj10.useQuestFormattedDate(completedAt, { year: "numeric", month: "long", day: "numeric" });
  let obj11 = require(QUEST_HOME_MOBILE[26]);
  const hasWatchVideoTasksResult = obj11.hasWatchVideoTasks(quest);
  let obj12 = require(QUEST_HOME_MOBILE[19]);
  const hasWatchVideoOnMobileTasks = obj12.useHasWatchVideoOnMobileTasks(quest.config);
  const userStatus3 = quest.userStatus;
  let enrolledAt1;
  if (null != userStatus3) {
    enrolledAt1 = userStatus3.enrolledAt;
  }
  let closure_20 = tmp24;
  const userStatus4 = quest.userStatus;
  let completedAt1;
  if (null != userStatus4) {
    completedAt1 = userStatus4.completedAt;
  }
  let tmp26 = null != completedAt1;
  let closure_21 = tmp26;
  const userStatus5 = quest.userStatus;
  let claimedAt;
  if (null != userStatus5) {
    claimedAt = userStatus5.claimedAt;
  }
  let closure_22 = tmp28;
  let obj13 = require(QUEST_HOME_MOBILE[27]);
  const isQuestExpiredResult = obj13.isQuestExpired(quest);
  let obj14 = require(QUEST_HOME_MOBILE[27]);
  const isQuestExpiredButWithinThirtyDayLookback = obj14.getIsQuestExpiredButWithinThirtyDayLookback(quest);
  let obj15 = require(QUEST_HOME_MOBILE[28]);
  const tmp10 = questEnrollmentBlockedUntil();
  const tmp4 = null != enrolledAt;
  let obj16 = require(QUEST_HOME_MOBILE[11]);
  const isThemeDarkResult = obj16.isThemeDark(quest(QUEST_HOME_MOBILE[29])());
  let obj17 = require(QUEST_HOME_MOBILE[25]);
  const result1 = obj17.hasCollectiblesQuestReward(quest.config);
  let obj18 = require(QUEST_HOME_MOBILE[30]);
  let skuId = null;
  if (result1) {
    skuId = null;
    if (tmp26) {
      skuId = obj15.getDefaultReward(quest.config).skuId;
    }
  }
  const fetchCollectiblesProduct = obj18.useFetchCollectiblesProduct(skuId);
  ({ product: closure_25, isFetching: closure_26 } = fetchCollectiblesProduct);
  let obj19 = require(QUEST_HOME_MOBILE[24]);
  const items6 = [closure_8];
  let closure_27 = obj19.useStateFromStores(items6, () => {
    const currentUser = tmp5.getCurrentUser();
    let result;
    if (null != currentUser) {
      result = currentUser.hasVerifiedEmailOrPhone();
    }
    return result;
  });
  let obj20 = require(QUEST_HOME_MOBILE[24]);
  const items7 = [closure_8];
  let closure_28 = obj20.useStateFromStores(items7, () => {
    const currentUser = tmp5.getCurrentUser();
    let verified;
    if (null != currentUser) {
      verified = currentUser.verified;
    }
    return verified;
  });
  let obj21 = require(QUEST_HOME_MOBILE[19]);
  const mobileActivityQuest = obj21.useMobileActivityQuest(quest);
  const isMobileActivityQuest = mobileActivityQuest.isMobileActivityQuest;
  const launchMobileActivity = mobileActivityQuest.launchMobileActivity;
  let obj22 = require(QUEST_HOME_MOBILE[31]);
  let closure_31 = obj22.useToken(quest(QUEST_HOME_MOBILE[9]).colors.BACKGROUND_BASE_LOWER);
  let obj23 = require(QUEST_HOME_MOBILE[31]);
  let closure_32 = obj23.useToken(quest(QUEST_HOME_MOBILE[9]).colors.BACKGROUND_BASE_LOW);
  let obj24 = require(QUEST_HOME_MOBILE[31]);
  let closure_33 = obj24.useToken(quest(QUEST_HOME_MOBILE[9]).colors.BACKGROUND_BASE_LOWEST);
  const tmp36 = null != questEnrollmentBlockedUntil && null == enrolledAt1 && !tmp26 && null == claimedAt;
  let obj25 = require(QUEST_HOME_MOBILE[16]);
  const questFormattedDate1 = obj25.useQuestFormattedDate(quest.config.expiresAt, { month: "numeric", day: "numeric" });
  let obj26 = require(QUEST_HOME_MOBILE[32]);
  const getQuestImpressionId = obj26.useGetQuestImpressionId();
  const items8 = [quest, QUEST_HOME_MOBILE, getQuestImpressionId, sourceQuestContent];
  const callback1 = importAllResult.useCallback(() => {
    let obj = outer1_0(QUEST_HOME_MOBILE[37]);
    obj = { content: QUEST_HOME_MOBILE, ctaContent: outer1_0(QUEST_HOME_MOBILE[23]).QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
    obj.openGameLinkDirectly(quest, obj);
  }, items8);
  let obj27 = require(QUEST_HOME_MOBILE[41]);
  let closure_36 = obj27.usePrimaryCtaCopy({ quest, application: mobileActivityQuest.questApplication, shortText: true });
  const tmp40 = (() => {
    if (null != closure_25) {
      let obj = {};
      const styles2 = closure_25.styles;
      let buttonColors;
      if (null != styles2) {
        buttonColors = styles2.buttonColors;
      }
      if (null == buttonColors) {
        buttonColors = [];
      }
      obj.buttonColors = buttonColors;
      const styles = closure_25.styles;
      let confettiColors;
      if (null != styles) {
        confettiColors = styles.confettiColors;
      }
      if (null == confettiColors) {
        confettiColors = [];
      }
      obj.confettiColors = confettiColors;
      const items = [quest(QUEST_HOME_MOBILE[42])(closure_32), quest(QUEST_HOME_MOBILE[42])(closure_31), quest(QUEST_HOME_MOBILE[42])(closure_33)];
      obj.backgroundColors = items;
      closure_25.styles = obj;
      const tmp52 = closure_25;
    }
    if (closure_22) {
      obj = {};
      const intl4 = outer1_0(QUEST_HOME_MOBILE[43]).intl;
      obj.text = intl4.string(outer1_0(QUEST_HOME_MOBILE[43]).t.vTgCWx);
      obj.loading = closure_26;
      obj.onPress = function onPress() {
        outer1_44(outer2_0(QUEST_HOME_MOBILE[23]).QuestContentCTA.SHOW_REWARD);
        let obj = outer2_0(QUEST_HOME_MOBILE[44]);
        obj = { product: outer1_25, quest: outer1_1, questContent: outer1_2, questContentPosition: outer1_3, sourceQuestContent: outer1_4 };
        obj.viewReward(obj);
      };
    } else {
      if (closure_21) {
        const obj1 = {};
        const intl3 = outer1_0(QUEST_HOME_MOBILE[43]).intl;
        obj1.text = intl3.string(outer1_0(QUEST_HOME_MOBILE[43]).t.cfY4PE);
        let tmp48 = closure_15;
        if (!closure_15) {
          tmp48 = closure_14;
        }
        if (!tmp48) {
          tmp48 = closure_26;
        }
        obj1.loading = tmp48;
        obj1.onPress = function onPress() {
          outer1_44(outer2_0(QUEST_HOME_MOBILE[23]).QuestContentCTA.CLAIM_REWARD);
          let obj = outer2_0(QUEST_HOME_MOBILE[44]);
          obj = { product: outer1_25, quest: outer1_1, questContent: outer1_2, questContentPosition: outer1_3, currentUserHasVerifiedEmailOrPhone: outer1_27, currentUserHasVerifiedEmail: outer1_28, sourceQuestContent: outer1_4 };
          const result = obj.handleRewardClaimThenView(obj);
        };
        obj = obj1;
      }
      if (closure_23) {
        let obj2 = {};
        const intl2 = outer1_0(QUEST_HOME_MOBILE[43]).intl;
        let obj3 = { expiryDate: questFormattedDate1 };
        obj2.text = intl2.formatToPlainString(outer1_0(QUEST_HOME_MOBILE[43]).t["6p8BZx"], obj3);
        let tmp44 = closure_15;
        if (!closure_15) {
          tmp44 = closure_14;
        }
        if (!tmp44) {
          tmp44 = closure_26;
        }
        obj2.loading = tmp44;
        obj2.disabled = true;
        obj2.variant = "secondary";
        obj2.onPress = first;
        obj = obj2;
      } else {
        if (closure_20) {
          if (closure_18) {
            const obj4 = { text: outer1_0(QUEST_HOME_MOBILE[45]).getVideoQuestWatchCtaText(closure_7) };
            const obj8 = outer1_0(QUEST_HOME_MOBILE[45]);
            obj4.accessibilityLabel = outer1_0(QUEST_HOME_MOBILE[45]).getVideoQuestWatchCtaAccessibilityLabel(closure_7);
            obj4.disabled = false;
            obj4.onPress = function onPress() {
              outer1_5.log("Navigating to video quest bottom sheet");
              outer1_44(outer2_0(QUEST_HOME_MOBILE[23]).QuestContentCTA.WATCH_VIDEO);
              if (outer1_19) {
                const obj = { questId: outer1_1.id, sourceQuestContent: outer1_4 };
                quest(QUEST_HOME_MOBILE[46])(obj);
              } else {
                outer1_45();
              }
            };
            obj = obj4;
            const obj9 = outer1_0(QUEST_HOME_MOBILE[45]);
          }
        }
        if (closure_20) {
          if (isMobileActivityQuest) {
            let obj5 = { text: closure_36 };
            obj5 = outer1_0(QUEST_HOME_MOBILE[44]);
            obj5.icon = obj5.getPrimaryCtaIcon(quest);
            obj5.disabled = false;
            obj5.onPress = function onPress() {
              outer1_44(outer2_0(QUEST_HOME_MOBILE[23]).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY);
              outer1_43();
            };
            obj = obj5;
          }
        }
        if (closure_20) {
          if (!closure_18) {
            if (!isMobileActivityQuest) {
              obj = { text: null, variant: "secondary", disabled: false };
              const intl = outer1_0(QUEST_HOME_MOBILE[43]).intl;
              obj.text = intl.string(outer1_0(QUEST_HOME_MOBILE[43]).t.JiosAn);
              obj.onPress = function onPress() {
                outer1_5.log("Navigating to console connection action sheet");
                outer1_44(outer2_0(QUEST_HOME_MOBILE[23]).QuestContentCTA.VIEW_REQUIREMENTS);
                outer1_45();
              };
            }
          }
        }
        const obj6 = { text: closure_36, disabled: false, loading: closure_16 };
        let videoQuestWatchCtaAccessibilityLabel;
        if (closure_18) {
          obj2 = outer1_0(QUEST_HOME_MOBILE[45]);
          videoQuestWatchCtaAccessibilityLabel = obj2.getVideoQuestWatchCtaAccessibilityLabel(closure_7);
        }
        obj6.accessibilityLabel = videoQuestWatchCtaAccessibilityLabel;
        let primaryCtaIcon;
        if (isMobileActivityQuest) {
          obj3 = outer1_0(QUEST_HOME_MOBILE[44]);
          primaryCtaIcon = obj3.getPrimaryCtaIcon(quest);
        }
        obj6.icon = primaryCtaIcon;
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = outer1_3(primaryCtaIcon);
        obj6.onPress = function() {
          return callback(...arguments);
        };
        obj = obj6;
      }
    }
    return obj;
  })();
  let intl = require(QUEST_HOME_MOBILE[43]).intl;
  obj = { questName: quest.config.messages.questName };
  const tmp30 = quest(QUEST_HOME_MOBILE[29])();
  let obj29 = require(QUEST_HOME_MOBILE[25]);
  const result2 = obj29.hasVirtualCurrencyReward(quest.config);
  let obj30 = require(QUEST_HOME_MOBILE[48]);
  const questOrbMultiplierEligibility = obj30.useQuestOrbMultiplierEligibility();
  let obj31 = require(QUEST_HOME_MOBILE[16]);
  let shouldShowBonusOrbsUX = obj31.useShouldShowBonusOrbsUX(quest, questOrbMultiplierEligibility);
  let tmp45 = shouldShowBonusOrbsUX;
  if (shouldShowBonusOrbsUX) {
    tmp45 = questOrbMultiplierEligibility === require(QUEST_HOME_MOBILE[49]).QuestOrbMultiplierEligibilityType.NITRO;
  }
  const userStatus6 = quest.userStatus;
  let orbQuantityClaimed;
  if (null != userStatus6) {
    orbQuantityClaimed = userStatus6.orbQuantityClaimed;
  }
  if (null == orbQuantityClaimed) {
    let obj32 = require(QUEST_HOME_MOBILE[25]);
    orbQuantityClaimed = obj32.getVirtualCurrencyRewardOrbQuantity(quest.config);
  }
  let obj33 = require(QUEST_HOME_MOBILE[25]);
  const questOrbRewardQuantityForUser = obj33.getQuestOrbRewardQuantityForUser(quest.config, stateFromStores);
  let obj34 = require(QUEST_HOME_MOBILE[25]);
  const defaultRewardName = obj34.getDefaultRewardName(quest.config, stateFromStores);
  let obj35 = require(QUEST_HOME_MOBILE[50]);
  const fontScale = obj35.useFontScale();
  let obj36 = require(QUEST_HOME_MOBILE[51]);
  const scaledTextLineHeight = obj36.useScaledTextLineHeight("text-md/semibold");
  let obj37 = require(QUEST_HOME_MOBILE[41]);
  const questDescription = obj37.useQuestDescription(quest, sourceQuestContent, QuestsExperimentLocations.QUEST_HOME_MOBILE, require(QUEST_HOME_MOBILE[52]).GameProfileSources.QuestHome);
  const result3 = 16 * Math.min(fontScale, 1.3);
  const items9 = [null != claimedAt, result2, questOrbRewardQuantityForUser, orbQuantityClaimed, defaultRewardName, defaultRewardNameWithArticle, result3, scaledTextLineHeight, tmp5.orbWithAmountRow];
  let tmp58 = isQuestExpiredResult;
  const memo1 = importAllResult.useMemo(() => {
    let obj = outer1_0(QUEST_HOME_MOBILE[53]);
    let isFabricResult = obj.isFabric();
    const result = result3 / 8;
    let num = 0;
    if (isFabricResult) {
      let obj1 = outer1_0(QUEST_HOME_MOBILE[54]);
      num = 0;
      if (obj1.isAndroid()) {
        num = 16 / scaledTextLineHeight;
      }
    }
    obj = { variant: "text-md/semibold", color: "mobile-text-heading-primary" };
    obj = { width: result3, height: result3, marginRight: result, marginTop: 0 };
    let tmp6;
    if (isFabricResult) {
      obj1 = { translateY: num };
      const items = [obj1];
      tmp6 = items;
    }
    obj.transform = tmp6;
    if (closure_22) {
      if (result2) {
        const obj2 = { style: tmp5.orbWithAmountRow };
        const obj3 = { size: "custom", color: "mobile-text-heading-primary", style: obj };
        const items1 = [tmp13(outer1_0(QUEST_HOME_MOBILE[55]).OrbsIcon, obj3), , ];
        if (isFabricResult) {
          const obj4 = {};
          const obj5 = { width: result };
          obj4.style = obj5;
          isFabricResult = tmp13(closure_7, obj4);
        }
        items1[1] = isFabricResult;
        const obj6 = {};
        const merged = Object.assign(obj);
        const intl4 = outer1_0(QUEST_HOME_MOBILE[43]).intl;
        const obj7 = {};
        let num14 = 0;
        if (null != orbQuantityClaimed) {
          num14 = orbQuantityClaimed;
        }
        obj7.orbAmount = num14;
        obj6["children"] = intl4.format(outer1_0(QUEST_HOME_MOBILE[43]).t["nLXlh+"], obj7);
        items1[2] = tmp13(outer1_0(QUEST_HOME_MOBILE[56]).Text, obj6);
        obj2.children = items1;
        let tmp16Result = defaultRewardNameWithArticle(closure_7, obj2);
        const tmp44 = defaultRewardNameWithArticle;
        const tmp45 = closure_7;
        const tmp52 = tmp13;
      }
      return tmp16Result;
    }
    if (closure_22) {
      const obj8 = {};
      const merged1 = Object.assign(obj);
      obj8["children"] = defaultRewardName;
      tmp16Result = tmp13(outer1_0(QUEST_HOME_MOBILE[56]).Text, obj8);
    } else if (result2) {
      const obj9 = { style: tmp5.orbWithAmountRow };
      const obj10 = {};
      const merged2 = Object.assign(obj);
      const intl2 = outer1_0(QUEST_HOME_MOBILE[43]).intl;
      const obj11 = {
        rewardWithArticleHook() {
            return null;
          }
      };
      obj10["children"] = intl2.format(outer1_0(QUEST_HOME_MOBILE[43]).t["0IUT4Y"], obj11);
      const items2 = [tmp13(outer1_0(QUEST_HOME_MOBILE[56]).Text, obj10), ];
      const obj12 = { style: tmp5.orbWithAmountRow };
      const obj13 = { size: "custom", color: "mobile-text-heading-primary", style: obj };
      const items3 = [tmp13(outer1_0(QUEST_HOME_MOBILE[55]).OrbsIcon, obj13), , ];
      let tmp26 = isFabricResult;
      if (isFabricResult) {
        const obj14 = {};
        const obj15 = { width: result };
        obj14.style = obj15;
        tmp26 = tmp13(closure_7, obj14);
      }
      items3[1] = tmp26;
      const obj16 = {};
      const merged3 = Object.assign(obj);
      const intl3 = outer1_0(QUEST_HOME_MOBILE[43]).intl;
      const obj17 = {};
      let num9 = 0;
      if (null != questOrbRewardQuantityForUser) {
        num9 = questOrbRewardQuantityForUser;
      }
      obj17.orbAmount = num9;
      obj16["children"] = intl3.format(outer1_0(QUEST_HOME_MOBILE[43]).t["nLXlh+"], obj17);
      items3[2] = tmp13(outer1_0(QUEST_HOME_MOBILE[56]).Text, obj16);
      obj12.children = items3;
      items2[1] = defaultRewardNameWithArticle(closure_7, obj12);
      obj9.children = items2;
      tmp16Result = tmp16(tmp17, obj9);
      const tmp29 = tmp13;
    } else {
      const obj18 = {};
      const merged4 = Object.assign(obj);
      const intl = outer1_0(QUEST_HOME_MOBILE[43]).intl;
      const obj19 = {
        rewardWithArticleHook() {
            return outer1_13;
          }
      };
      obj18["children"] = intl.format(outer1_0(QUEST_HOME_MOBILE[43]).t["0IUT4Y"], obj19);
      tmp16Result = tmp13(outer1_0(QUEST_HOME_MOBILE[56]).Text, obj18);
    }
  }, items9);
  if (isQuestExpiredResult) {
    tmp58 = tmp26;
  }
  if (tmp58) {
    tmp58 = !tmp28;
  }
  let formatToPlainStringResult1 = questDescription;
  if (tmp58) {
    let intl2 = require(QUEST_HOME_MOBILE[43]).intl;
    let obj1 = { date: questFormattedDate };
    formatToPlainStringResult1 = intl2.formatToPlainString(require(QUEST_HOME_MOBILE[43]).t["l1jCM/"], obj1);
  }
  let obj39 = require(QUEST_HOME_MOBILE[28]);
  let tmp62 = "" !== obj39.getCtaLink(quest.config);
  const items10 = [quest.id, sourceQuestContent];
  const fn = () => {
    const obj = { questId: quest.id, initialStep: outer1_0(QUEST_HOME_MOBILE[57]).VideoQuestModalSteps.WATCH_VIDEO, sourceQuestContent };
    quest(QUEST_HOME_MOBILE[46])(obj);
  };
  // CreateGeneratorClosureLongIndex (0x67)
  callback2 = importAllResult.useCallback(fn, items10);
  const items11 = [launchMobileActivity];
  callback3 = importAllResult.useCallback(callback(fn), items11);
  obj2 = {
    style: items12,
    onLayout(arg0) {
      if (null != callback) {
        callback(arg0, quest.id);
      }
    }
  };
  items12 = [tmp5.container, ];
  obj3 = { marginHorizontal: PX_16 - questContent.containerPadding };
  items12[1] = obj3;
  obj4 = { visible: tmp45, glow: true };
  obj5 = { style: items13 };
  items13 = [tmp5.heroContainer, { height: result }];
  const formatToPlainStringResult = intl.formatToPlainString(require(QUEST_HOME_MOBILE[43]).t.EAYZAr, obj);
  const tmp65 = callback2;
  obj6 = { source: obj7, style: tmp5.heroImg, onError: callback, accessible: true, accessibilityRole: "image", accessibilityLabel: quest.config.messages.questName };
  obj7 = { uri: memo.url };
  const items14 = [callback2(quest(QUEST_HOME_MOBILE[60]), obj6), , , ];
  obj8 = { style: tmp5.heroLinearGradientOverlay };
  const tmp67 = quest(QUEST_HOME_MOBILE[59]);
  const tmp68 = closure_7;
  obj8.start = require(QUEST_HOME_MOBILE[62]).VerticalGradient.START;
  obj8.end = require(QUEST_HOME_MOBILE[62]).VerticalGradient.END;
  const items15 = [gradientStart, gradientMid, gradientEnd];
  obj8.colors = items15;
  items14[1] = callback2(quest(QUEST_HOME_MOBILE[61]), obj8);
  let preview = quest.preview;
  if (preview) {
    obj9 = { style: tmp5.previewBadge };
    obj10 = { variant: "eyebrow", color: "text-overlay-light" };
    let intl3 = require(QUEST_HOME_MOBILE[43]).intl;
    obj10.children = intl3.string(require(QUEST_HOME_MOBILE[43]).t.SKNnqq);
    obj9.children = callback2(require(QUEST_HOME_MOBILE[56]).Text, obj10);
    preview = callback2(closure_7, obj9);
  }
  items14[2] = preview;
  obj11 = { style: tmp5.heroFooterContainer };
  obj12 = { style: tmp5.heroFooterLeftContainer };
  const items16 = [callback2(quest(QUEST_HOME_MOBILE[63]), { assetUrl: questGameLogotypeAssetUrl, onError: callback }), ];
  obj13 = { direction: "horizontal", align: "center", spacing: 4 };
  obj14 = { variant: "text-xs/medium" };
  let str = "text-overlay-light";
  let str2 = "text-overlay-light";
  if (isThemeDarkResult) {
    str2 = "text-muted";
  }
  obj14.color = str2;
  let intl4 = require(QUEST_HOME_MOBILE[43]).intl;
  obj14.children = intl4.string(require(QUEST_HOME_MOBILE[43]).t.VAbKhK);
  const items17 = [callback2(require(QUEST_HOME_MOBILE[56]).Text, obj14), , ];
  obj15 = { source: quest(QUEST_HOME_MOBILE[65]), style: { height: 16, width: 16 }, accessible: true, accessibilityRole: "image" };
  const intl5 = require(QUEST_HOME_MOBILE[43]).intl;
  obj15.accessibilityLabel = intl5.string(require(QUEST_HOME_MOBILE[43]).t.OfMjx9);
  items17[1] = callback2(closure_6, obj15);
  obj16 = { variant: "text-xs/medium", color: "text-overlay-light", children: quest.config.messages.gamePublisher };
  items17[2] = callback2(require(QUEST_HOME_MOBILE[56]).Text, obj16);
  obj13.children = items17;
  items16[1] = defaultRewardNameWithArticle(require(QUEST_HOME_MOBILE[64]).Stack, obj13);
  obj12.children = items16;
  const items18 = [defaultRewardNameWithArticle(closure_7, obj12), ];
  let tmp78Result = !isQuestExpiredResult && !tmp28;
  if (tmp78Result) {
    obj17 = { variant: "text-xs/medium" };
    if (isThemeDarkResult) {
      str = "text-default";
    }
    obj17.color = str;
    const intl6 = require(QUEST_HOME_MOBILE[43]).intl;
    obj18 = { expiryDate: questFormattedDate1 };
    obj17.children = intl6.format(require(QUEST_HOME_MOBILE[43]).t["7D8r4F"], obj18);
    tmp78Result = callback2(require(QUEST_HOME_MOBILE[56]).Text, obj17);
    const tmp78 = callback2;
  }
  items18[1] = tmp78Result;
  obj11.children = items18;
  items14[3] = defaultRewardNameWithArticle(closure_7, obj11);
  obj5.children = items14;
  const items19 = [defaultRewardNameWithArticle(tmp68, obj5), , ];
  obj19 = { style: tmp5.detailsWrapper };
  obj20 = { style: tmp5.detailsContainer };
  obj21 = { style: tmp5.rewardImgContainer };
  if (tmp4) {
    obj22 = { quest, progress: obj4.useQuestCompletionDetails(quest).completedRatio, size: "sm" };
    let tmp86Result = tmp86(tmp87(tmp88[66]), obj22);
  } else {
    obj23 = { quest, height: 64, width: 64 };
    tmp86Result = tmp86(tmp87(tmp88[67]), obj23);
  }
  obj21.children = tmp86Result;
  const items20 = [callback2(closure_7, obj21), ];
  obj24 = { style: tmp5.detailsTextContainer };
  obj25 = { variant: "eyebrow", color: "text-brand", style: tmp5.questName, accessibilityRole: "header", children: formatToPlainStringResult };
  const items21 = [callback2(require(QUEST_HOME_MOBILE[56]).Text, obj25), ];
  obj26 = { style: tmp5.bodyContainer };
  obj27 = { style: tmp5.subtitleRow };
  const items22 = [memo1, ];
  if (shouldShowBonusOrbsUX) {
    const obj28 = { questId: quest.config.id, orbMultiplierEligibility: questOrbMultiplierEligibility };
    shouldShowBonusOrbsUX = callback2(require(QUEST_HOME_MOBILE[68]).QuestOrbMultiplierPerkPill, obj28);
  }
  items22[1] = shouldShowBonusOrbsUX;
  obj27.children = items22;
  const items23 = [defaultRewardNameWithArticle(closure_7, obj27), ];
  let tmp95 = null != formatToPlainStringResult1;
  if (tmp95) {
    obj29 = { variant: "text-sm/medium", color: "text-muted", children: formatToPlainStringResult1 };
    tmp95 = callback2(require(QUEST_HOME_MOBILE[56]).Text, obj29);
  }
  items23[1] = tmp95;
  obj26.children = items23;
  items21[1] = defaultRewardNameWithArticle(closure_7, obj26);
  obj24.children = items21;
  items20[1] = defaultRewardNameWithArticle(closure_7, obj24);
  obj20.children = items20;
  obj19.children = defaultRewardNameWithArticle(closure_7, obj20);
  items19[1] = callback2(closure_7, obj19);
  obj30 = { direction: "horizontal", align: "center", spacing: quest(QUEST_HOME_MOBILE[9]).space.PX_8, style: tmp5.buttonContainers };
  obj31 = {};
  merged = closure_14;
  if (tmp36) {
    merged = callback2;
    merged = require;
    merged = QUEST_HOME_MOBILE;
    obj32 = { grow: true, onPress: null, variant: "secondary", disabled: true };
    merged = first;
    obj32.onPress = first;
    const intl7 = require(QUEST_HOME_MOBILE[43]).intl;
    obj32.text = intl7.string(require(QUEST_HOME_MOBILE[43]).t.V293qn);
    const items24 = [callback2(require(QUEST_HOME_MOBILE[69]).Button, obj32), ];
    obj33 = {
      onPress() {
          let obj = quest(QUEST_HOME_MOBILE[38]);
          obj = { questId: quest.id, questEnrollmentBlockedUntil, sourceQuestContent };
          obj.openLazy(outer1_0(QUEST_HOME_MOBILE[40])(QUEST_HOME_MOBILE[70], QUEST_HOME_MOBILE.paths), "QuestEnrollmentBlockedBottomSheet", obj);
        },
      variant: "tertiary"
    };
    const intl8 = require(QUEST_HOME_MOBILE[43]).intl;
    obj33.text = intl8.string(require(QUEST_HOME_MOBILE[43]).t.vY9GgG);
    items24[1] = callback2(require(QUEST_HOME_MOBILE[69]).Button, obj33);
    obj31.children = items24;
    merged = obj31;
  } else {
    if (tmp62) {
      tmp62 = !tmp36;
    }
    if (tmp62) {
      tmp62 = !isQuestExpiredResult;
    }
    if (tmp62) {
      tmp62 = !tmp28;
    }
    if (tmp62) {
      tmp62 = !tmp26;
    }
    if (tmp62) {
      merged = callback2;
      merged = closure_7;
      obj34 = { style: tmp5.equalWidthContainer };
      merged = require;
      merged = QUEST_HOME_MOBILE;
      obj35 = { grow: true, variant: "secondary", text: require(QUEST_HOME_MOBILE[28]).getExternalCtaLabel(quest), onPress: callback1 };
      obj34.children = callback2(require(QUEST_HOME_MOBILE[69]).Button, obj35);
      tmp62 = callback2(closure_7, obj34);
      const obj73 = require(QUEST_HOME_MOBILE[28]);
    }
    const items25 = [tmp62, ];
    merged = callback2;
    merged = closure_7;
    obj36 = { style: tmp5.equalWidthContainer };
    merged = require;
    merged = QUEST_HOME_MOBILE;
    obj37 = { grow: true };
    merged = obj37;
    merged = tmp40;
    merged = Object.assign(tmp40);
    obj36.children = callback2(require(QUEST_HOME_MOBILE[69]).Button, obj37);
    items25[1] = callback2(closure_7, obj36);
    obj31.children = items25;
    merged = obj31;
  }
  const items26 = [defaultRewardNameWithArticle(merged, merged), , , ];
  merged = tmp26;
  if (tmp26) {
    merged = hasWatchVideoTasksResult;
  }
  if (merged) {
    merged = hasWatchVideoOnMobileTasks;
  }
  if (merged) {
    merged = callback2;
    merged = require;
    merged = QUEST_HOME_MOBILE;
    const obj38 = {};
    const intl9 = require(QUEST_HOME_MOBILE[43]).intl;
    obj38.accessibilityLabel = intl9.string(require(QUEST_HOME_MOBILE[43]).t.YsCuyF);
    merged = quest;
    obj38.icon = quest(QUEST_HOME_MOBILE[72]);
    obj38.onPress = callback2;
    obj38.variant = "secondary";
    merged = callback2(require(QUEST_HOME_MOBILE[71]).IconButton, obj38);
  }
  items26[1] = merged;
  if (tmp26) {
    tmp26 = isMobileActivityQuest;
  }
  if (tmp26) {
    merged = callback2;
    merged = require;
    merged = QUEST_HOME_MOBILE;
    obj39 = {};
    const intl10 = require(QUEST_HOME_MOBILE[43]).intl;
    obj39.accessibilityLabel = intl10.string(require(QUEST_HOME_MOBILE[43]).t.CkUzLd);
    merged = quest;
    obj39.icon = quest(QUEST_HOME_MOBILE[72]);
    obj39.onPress = callback3;
    obj39.variant = "secondary";
    tmp26 = callback2(require(QUEST_HOME_MOBILE[71]).IconButton, obj39);
  }
  items26[2] = tmp26;
  items26[3] = callback2(quest(QUEST_HOME_MOBILE[73]), { quest, showShareLink: !isQuestExpiredResult, location: QuestsExperimentLocations.QUESTS_CARD, sourceQuestContent });
  obj30.children = items26;
  items19[2] = defaultRewardNameWithArticle(require(QUEST_HOME_MOBILE[64]).Stack, obj30);
  obj4.children = items19;
  obj2.children = defaultRewardNameWithArticle(tmp67, obj4);
  return tmp65(require(QUEST_HOME_MOBILE[58]).Card, obj2);
});
let result3 = require("result").fileFinishedImporting("modules/quests/native/QuestCard.tsx");

export const ESTIMATED_CARD_HEIGHT = 348;
export const QuestCard = memoResult;
