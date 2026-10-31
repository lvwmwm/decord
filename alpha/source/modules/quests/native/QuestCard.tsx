// Module ID: 17054
// Function ID: 17055
// Name: QuestCard
// Dependencies: [5, 32, 19, 17, 1383, 7846, 6781, 1083, 21, 575, 5014, 5022, 5011, 5081, 6784, 7853, 16987, 9681, 1498, 1491, 9695, 17055, 7294, 6540, 6545, 7871, 504, 9700, 7868, 7852, 7842, 9705, 5253, 11385, 5596, 17083, 9717, 9684, 9687, 6788, 9719, 5258, 17085, 1994, 14682, 7730, 9715, 1113, 9678, 14671, 17090, 9682, 9702, 9703, 5642, 11047, 9340, 1375, 9532, 5624, 17091, 6977, 17126, 5717, 5587, 1092, 17115, 6962, 17097, 14678, 17127, 6027, 5634, 17130, 8028, 11084, 17116, 2]

// Module 17054 (QuestCard)
import nativeDefault from "native" /* 575 */;
import intl15 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import asyncRequire from "asyncRequire" /* 1994 */;
import ColorUtils from "ColorUtils" /* 5011 */;
import design_shared from "design/shared" /* 5022 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 6540 */;
import MetricEvents from "MetricEvents" /* 6545 */;
import QuestConstants from "QuestConstants" /* 6781 */;
import AdCreativeType from "AdCreativeType" /* 6788 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7871 */;
import OrbsIcon from "OrbsIcon" /* 9532 */;
import QuestUtils from "QuestUtils" /* 9678 */;
import captureAdUserAction from "captureAdUserAction" /* 9684 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9687 */;
import AssetUtils from "AssetUtils" /* 9695 */;
import QuestPlatformUtils from "QuestPlatformUtils" /* 9719 */;
import openQuestAccessSuspendedBottomSheetDefault from "openQuestAccessSuspendedBottomSheet" /* 17083 */;
import openVideoQuestModalDefault from "openVideoQuestModal" /* 17090 */;
import VideoQuestModal from "VideoQuestModal" /* 17091 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1383 */;
import QuestStore_mod from "QuestStore" /* 7846 */;
import Constants from "Constants" /* 1083 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let authStore, c0, c1, id, theme;

let Fonts;
let StyleSheet;
let c10;
let closure_12;
let map1;
let metroRequire;
let obj10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let rect;
let size;
let unpackModuleId;
let react = react_mod;
({ StyleSheet, View: metroRequire } = react_native);
let QuestStore = QuestStore_mod;
let QuestsExperimentLocations = QuestConstants.QuestsExperimentLocations;
({ NOOP: c10, Fonts } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
const BACKGROUND_SURFACE_HIGH = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
const BORDER_SUBTLE = nativeDefault.colors.BORDER_SUBTLE;
let createStyles = createStyles_mod;
let result = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  const obj = design_shared;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const internal = nativeDefault.internal;
  const resolveSemanticColor = internal.resolveSemanticColor;
  const colors = nativeDefault.colors;
  const semanticColor = resolveSemanticColor(theme, isThemeDarkResult ? colors.BACKGROUND_SURFACE_HIGH : colors.BLACK);
  const tmpResult = ColorUtils;
  return tmpResult.hexOpacityToRgba(semanticColor, 0);
});
createStyles = createStyles_mod;
let result1 = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  const obj = design_shared;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const internal = nativeDefault.internal;
  const resolveSemanticColor = internal.resolveSemanticColor;
  const colors = nativeDefault.colors;
  const semanticColor = resolveSemanticColor(theme, isThemeDarkResult ? colors.BACKGROUND_SURFACE_HIGH : colors.BLACK);
  let num = 0.5;
  const hexOpacityToRgba = ColorUtils.hexOpacityToRgba;
  ColorUtils;
  if (isThemeDarkResult) {
    num = 0.8;
  }
  return hexOpacityToRgba(semanticColor, num);
});
createStyles = createStyles_mod;
let result2 = createStyles.experimental_createToken((theme) => {
  theme = theme.theme;
  const obj = design_shared;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const colors = nativeDefault.colors;
  return isThemeDarkResult ? colors.BACKGROUND_SURFACE_HIGH : colors.BLACK;
});
let PX_16 = nativeDefault.space.PX_16;
createStyles = createStyles_mod;
let obj = { container: obj2, heroContainer: obj3, heroImg: obj4, heroLinearGradientOverlay: StyleSheet.absoluteFillObject, previewBadge: rect, previewBadgeText: { textTransform: "uppercase" }, rewardImgContainer: size, heroFooterContainer: { display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end" }, heroFooterLeftContainer: { display: "flex", flexDirection: "column", alignItems: "flex-start", flexShrink: 1 }, promotedByRow: obj5, shrinkableText: { flexShrink: 1 }, detailsWrapper: obj6, detailsContainer: { display: "flex", flexDirection: "row" }, questName: obj7, bodyContainer: obj8, subtitleRow: obj9, rewardSubtitleRow: { flexDirection: "row", alignItems: "center", flexWrap: "wrap", flexShrink: 1 }, orbWithAmountRow: { flexDirection: "row", alignItems: "center", flexShrink: 1 }, detailsTextContainer: { flex: 1, justifyContent: "center" }, buttonContainers: obj10, equalWidthContainer: { flexBasis: 0, flexGrow: 1, flexShrink: 1 } };
obj2 = { position: "relative", padding: 0, borderRadius: nativeDefault.radii.sm, backgroundColor: BACKGROUND_SURFACE_HIGH, marginBottom: nativeDefault.space.PX_16, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: nativeDefault.space.PX_12 };
obj4 = { resizeMode: "cover" };
let merged = Object.assign(StyleSheet.absoluteFillObject);
rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm };
let merged1 = Object.assign(nativeDefault.shadows.SHADOW_LOW);
size = { height: 64, width: 64, marginRight: nativeDefault.space.PX_12 };
obj5 = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", columnGap: nativeDefault.space.PX_4, rowGap: nativeDefault.space.PX_4 };
obj6 = { display: "flex", padding: nativeDefault.space.PX_12 };
obj7 = { marginBottom: nativeDefault.space.PX_4, fontSize: 12, lineHeight: 16, fontFamily: Fonts.PRIMARY_BOLD, letterSpacing: 0.2, textTransform: "uppercase" };
obj8 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_4 };
obj9 = { flexDirection: "row", alignItems: "center", rowGap: nativeDefault.space.PX_4, columnGap: nativeDefault.space.PX_8, flexWrap: "wrap" };
obj10 = { borderTopWidth: 1, borderTopColor: BORDER_SUBTLE, display: "flex", flexDirection: "row", alignItems: "center", padding: nativeDefault.space.PX_12 };
let closure_15 = createStyles(obj);
createStyles = createStyles_mod;
let closure_16 = createStyles.createStyleProperties({ gradientStart: result, gradientMid: result1, gradientEnd: result2 });
const memoResult = react.memo(function QuestCard(questContent) {
  let Button;
  let Button2;
  let QUEST_HOME_MOBILE;
  let Text;
  let confettiColors;
  let gradientEnd;
  let gradientMid;
  let gradientStart;
  let hasWatchVideoOnMobileTasks;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl2;
  let intl3;
  let intl4;
  let intl7;
  let intl8;
  let intl9;
  let isClaimingReward;
  let isFetchingRewardCode;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let items20;
  let items21;
  let items22;
  let items23;
  let items24;
  let items27;
  let items9;
  let logger;
  let obj11;
  let obj14;
  let obj19;
  let obj24;
  let obj32;
  let obj34;
  let obj48;
  let obj50;
  let primaryCtaIcon;
  let quest;
  let questContentPosition;
  let questEnrollmentBlockedUntil;
  let sourceQuestContent;
  let tmp107;
  let tmp10Result;
  let tmp94Result6;
  let tmpResult74;
  let tmpResult75;
  let tmpResult76;
  let tmpResult88;
  let videoQuestWatchCtaAccessibilityLabel;
  function showQuestBottomSheet() {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { questId: quest.id, questContentPosition: _asyncToGenerator, sourceQuestContent };
    obj.openLazy(asyncRequire(17085, dependencyMap.paths), "QuestBottomSheet", obj2);
  }
  let tmp = require;
  const tmp2 = QUEST_HOME_MOBILE;
  let obj = require("useBadgeTextVariant");
  ({ onLayout: require, quest } = questContent);
  QUEST_HOME_MOBILE = questContent.questContent;
  const badgeTextVariant = obj.useBadgeTextVariant();
  const containerPadding = questContent.containerPadding;
  if (undefined === QUEST_HOME_MOBILE) {
    QUEST_HOME_MOBILE = tmp(tmp2[14]).QuestContent.QUEST_HOME_MOBILE;
  }
  ({ questContentPosition: _asyncToGenerator, sourceQuestContent } = questContent);
  let obj2 = { quest, location: QuestsExperimentLocations.QUEST_HOME_MOBILE };
  const tmpResult = tmp(tmp2[15]);
  react = tmpResult.getQuestLogger(obj2);
  const tmpResult45 = tmp(tmp2[16]);
  let closure_6 = tmpResult45.useTrackQuestContentClickedWithImpression();
  const tmpResult46 = tmp(tmp2[17]);
  const questTaskDetails = tmpResult46.useQuestTaskDetails(quest);
  const userStatus = quest.userStatus;
  let enrolledAt;
  const tmpResult47 = tmp(tmp2[17]);
  const completedRatio = tmpResult47.useQuestCompletionDetails(quest).completedRatio;
  if (userStatus != null) {
    enrolledAt = userStatus.enrolledAt;
  }
  const tmp7 = null != enrolledAt;
  let tmp8 = hasWatchVideoOnMobileTasks();
  authStore = tmp8;
  const tmpResult48 = tmp(tmp2[18]);
  const isFocused = tmpResult48.useIsFocused();
  const diff = quest(tmp2[19])().width - 2 * PX_16;
  QuestStore = diff;
  let result = 0.2803030303030303 * diff;
  QuestsExperimentLocations = result;
  let obj8 = react;
  let items = [quest, diff, result];
  const memo = react.useMemo(() => {
    let tmp5;
    const obj = AssetUtils;
    const questAsset = obj.getQuestAsset(quest, AssetUtils.QuestAssetType.HERO);
    const obj2 = {};
    const isAnimated = questAsset.isAnimated;
    const merged = Object.assign(questAsset);
    const obj3 = AssetUtils;
    if (isAnimated) {
      size = { assetUrl: questAsset.url, width: QuestStore, height: QuestsExperimentLocations };
      let url = obj3.getScaledFirstFrameImageUrl(size);
      if (url == null) {
        url = questAsset.url;
      }
      obj2.url = url;
      tmp5 = obj2;
    } else {
      const size1 = { assetUrl: questAsset.url, width: QuestStore, height: QuestsExperimentLocations };
      obj2.url = obj3.getScaledImageUrl(size1);
      tmp5 = obj2;
    }
    return tmp5;
  }, items);
  const tmpResult49 = tmp(tmp2[21]);
  const questGameLogotypeAssetUrl = tmpResult49.useQuestGameLogotypeAssetUrl(quest);
  let tmp16 = closure_16();
  ({ gradientEnd, gradientStart, gradientMid } = tmp16);
  let items1 = [quest.id];
  const tmpResult50 = tmp(tmp2[22]);
  let tmp17 = sourceQuestContent(tmpResult50.useRecyclingState(null, items1), 2);
  const onPress = tmp17[0];
  let closure_11 = tmp19;
  let items2 = [tmp19];
  const callback = react.useCallback(() => {
    closure_11(false);
  }, items2);
  let items3 = [onPress, quest.id, QUEST_HOME_MOBILE];
  const effect = react.useEffect(() => {
    let items;
    if (false === first) {
      const obj = { name: MetricEvents.MetricEvents.QUEST_CONTENT_RENDERING_FAILURE, tags: items };
      const increment = MonitoringAgentDefault.increment;
      MonitoringAgentDefault;
      const _HermesInternal = HermesInternal;
      items = ["quest_id:" + quest.id, , ];
      const _HermesInternal2 = HermesInternal;
      const obj2 = AnalyticsTypes;
      items[1] = "quest_content:" + obj2.getQuestContentName(QUEST_HOME_MOBILE);
      items[2] = "reason:asset_loading_error";
      increment(obj);
    }
  }, items3);
  const items4 = [authStore];
  const tmpResult51 = tmp(tmp2[26]);
  const stateFromStores = tmpResult51.useStateFromStores(items4, () => authStore.getCurrentUser());
  const tmpResult52 = tmp(tmp2[27]);
  const defaultRewardNameWithArticle = tmpResult52.getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  const items5 = [QuestStore];
  const tmpResult53 = tmp(tmp2[26]);
  const stateFromStoresObject = tmpResult53.useStateFromStoresObject(items5, () => {
    const obj = { reward: QuestStore.getRewards(quest.id), isFetchingRewardCode: QuestStore.isFetchingRewardCode(quest.id), isClaimingReward: QuestStore.isClaimingReward(quest.id), isEnrolling: QuestStore.isEnrolling(quest.id), questEnrollmentBlockedUntil: QuestStore.questEnrollmentBlockedUntil };
    return obj;
  });
  ({ isFetchingRewardCode, isClaimingReward, questEnrollmentBlockedUntil } = stateFromStoresObject);
  const isEnrolling = stateFromStoresObject.isEnrolling;
  const userStatus2 = quest.userStatus;
  let completedAt;
  const useQuestFormattedDate = tmp(tmp2[17]).useQuestFormattedDate;
  tmp(tmp2[17]);
  const tmp11 = PX_16;
  if (userStatus2 != null) {
    completedAt = userStatus2.completedAt;
  }
  const questFormattedDate = useQuestFormattedDate(completedAt, { year: "numeric", month: "long", day: "numeric" });
  const tmpResult55 = tmp(tmp2[28]);
  const hasWatchVideoTasksResult = tmpResult55.hasWatchVideoTasks(quest);
  PX_16 = hasWatchVideoTasksResult;
  const tmpResult56 = tmp(tmp2[21]);
  hasWatchVideoOnMobileTasks = tmpResult56.useHasWatchVideoOnMobileTasks(quest.config);
  const userStatus3 = quest.userStatus;
  let enrolledAt1;
  if (userStatus3 != null) {
    enrolledAt1 = userStatus3.enrolledAt;
  }
  let tmp32 = null != enrolledAt1;
  const userStatus4 = quest.userStatus;
  let completedAt1;
  if (userStatus4 != null) {
    completedAt1 = userStatus4.completedAt;
  }
  let tmp94Result10 = null != completedAt1;
  const userStatus5 = quest.userStatus;
  let claimedAt;
  if (userStatus5 != null) {
    claimedAt = userStatus5.claimedAt;
  }
  closure_16 = tmp36;
  const tmpResult57 = tmp(tmp2[29]);
  const isQuestExpiredResult = tmpResult57.isQuestExpired(quest);
  const tmpResult58 = tmp(tmp2[30]);
  const isQuestExpiredButWithinThirtyDayLookback = tmpResult58.getIsQuestExpiredButWithinThirtyDayLookback(quest);
  const tmpResult59 = tmp(tmp2[31]);
  const skuId = tmpResult59.getDefaultReward(quest.config).skuId;
  const tmp39 = quest(tmp2[32])();
  const tmpResult60 = tmp(tmp2[11]);
  const isThemeDarkResult = tmpResult60.isThemeDark(tmp39);
  const tmpResult61 = tmp(tmp2[27]);
  const result1 = tmpResult61.hasCollectiblesQuestReward(quest.config);
  let tmp43 = null;
  const useFetchCollectiblesProduct = tmp(tmp2[33]).useFetchCollectiblesProduct;
  tmp(tmp2[33]);
  if (result1) {
    tmp43 = null;
    if (tmp94Result10) {
      tmp43 = skuId;
    }
  }
  const fetchCollectiblesProduct = useFetchCollectiblesProduct(tmp43);
  const product = fetchCollectiblesProduct.product;
  const isFetching = fetchCollectiblesProduct.isFetching;
  const items6 = [tmp22];
  const tmpResult63 = tmp(tmp2[26]);
  const currentUserHasVerifiedEmailOrPhone = tmpResult63.useStateFromStores(items6, () => {
    const currentUser = authStore.getCurrentUser();
    result = undefined;
    if (currentUser != null) {
      result = currentUser.hasVerifiedEmailOrPhone();
    }
    return result;
  });
  const items7 = [tmp22];
  const tmpResult64 = tmp(tmp2[26]);
  const currentUserHasVerifiedEmail = tmpResult64.useStateFromStores(items7, () => {
    const currentUser = authStore.getCurrentUser();
    let verified;
    if (currentUser != null) {
      verified = currentUser.verified;
    }
    return verified;
  });
  const tmpResult65 = tmp(tmp2[21]);
  const mobileActivityQuest = tmpResult65.useMobileActivityQuest(quest);
  const isMobileActivityQuest = mobileActivityQuest.isMobileActivityQuest;
  const launchMobileActivity = mobileActivityQuest.launchMobileActivity;
  const questApplication = mobileActivityQuest.questApplication;
  const tmpResult66 = tmp(tmp2[34]);
  const token = tmpResult66.useToken(tmp10(tmp2[9]).colors.BACKGROUND_BASE_LOWER);
  const tmpResult67 = tmp(tmp2[34]);
  const token1 = tmpResult67.useToken(tmp10(tmp2[9]).colors.BACKGROUND_BASE_LOW);
  let tmp49 = null != questEnrollmentBlockedUntil;
  const tmpResult68 = tmp(tmp2[34]);
  const token2 = tmpResult68.useToken(tmp10(tmp2[9]).colors.BACKGROUND_BASE_LOWEST);
  if (tmp49) {
    tmp49 = !tmp32;
  }
  if (tmp49) {
    tmp49 = !tmp94Result10;
  }
  if (tmp49) {
    tmp49 = !tmp36;
  }
  const tmpResult69 = tmp(tmp2[17]);
  const isQuestAccessSuspended = tmpResult69.useIsQuestAccessSuspended();
  let obj3 = {
    disabled: true,
    onPressDisabled() {
      const obj = { questId: quest.id, questContent: QUEST_HOME_MOBILE, questContentCTA: AnalyticsTypes.QuestContentCTA.QUEST_ACCESS_SUSPENDED, sourceQuestContent };
      closure_6(obj);
      openQuestAccessSuspendedBottomSheetDefault();
    }
  };
  const tmpResult70 = tmp(tmp2[17]);
  const questFormattedDate1 = tmpResult70.useQuestFormattedDate(quest.config.expiresAt, { month: "numeric", day: "numeric" });
  const tmpResult71 = tmp(tmp2[36]);
  const getQuestImpressionId = tmpResult71.useGetQuestImpressionId();
  const items8 = [quest, QUEST_HOME_MOBILE, getQuestImpressionId, sourceQuestContent];
  const callback1 = obj8.useCallback(() => {
    const obj = QuestPlatformUtils;
    const obj2 = { content: QUEST_HOME_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
    obj.openGameLinkDirectly(quest, obj2);
  }, items8);
  const tmpResult72 = tmp(tmp2[44]);
  const primaryCtaCopy = tmpResult72.usePrimaryCtaCopy({ quest, application: questApplication, shortText: true });
  let closure_0;
  const tmpResult73 = tmp(tmp2[31]);
  const ctaLink = tmpResult73.getCtaLink(quest.config);
  if (null != product) {
    const styles2 = product.styles;
    let buttonColors;
    if (styles2 != null) {
      buttonColors = styles2.buttonColors;
    }
    if (buttonColors == null) {
      buttonColors = [];
    }
    let obj4 = { buttonColors, confettiColors, backgroundColors: items9 };
    const styles = product.styles;
    confettiColors = undefined;
    if (styles != null) {
      confettiColors = styles.confettiColors;
    }
    if (confettiColors == null) {
      confettiColors = [];
    }
    items9 = [tmp10(tmp2[45])(token1), tmp10(tmp2[45])(token), tmp10(tmp2[45])(token2)];
    product.styles = obj4;
  }
  let tmp94Result8 = "" !== ctaLink;
  if (null != claimedAt) {
    const MobileQuestRewardButtonToSecondaryButtonExperiment = tmp(tmp2[46]).MobileQuestRewardButtonToSecondaryButtonExperiment;
    let obj5 = { location: tmp4.QUEST_HOME_MOBILE };
    if (MobileQuestRewardButtonToSecondaryButtonExperiment.getConfig(obj5).enabled) {
      let obj7;
      if (tmp94Result8) {
        let obj6 = {
          text: quest.config.ctaConfig.buttonLabel,
          variant: "secondary",
          onPress() {
                  callback1();
                }
        };
        obj7 = obj6;
      }
      obj14 = obj7;
    }
    obj7 = {
      text: intl4.string(tmp(tmp2[47]).t.vTgCWx),
      loading: isFetching,
      onPress() {
          const SHOW_REWARD = AnalyticsTypes.QuestContentCTA.SHOW_REWARD;
          const obj = captureAdUserAction;
          const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: SHOW_REWARD, surfaceId: QUEST_HOME_MOBILE, sourceQuestContent, impressionId: getQuestImpressionId() };
          obj.captureAdUserAction(obj2);
          const obj3 = QuestUtils;
          const obj4 = { product, quest, questContent: QUEST_HOME_MOBILE, questContentPosition: _asyncToGenerator, sourceQuestContent };
          obj3.viewReward(obj4);
        }
    };
    intl4 = tmp(tmp2[47]).intl;
  } else {
    if (tmp94Result10) {
      let obj9 = {
        text: intl3.string(tmp(tmp2[47]).t.cfY4PE),
        loading: isClaimingReward,
        onPress() {
              const CLAIM_REWARD = AnalyticsTypes.QuestContentCTA.CLAIM_REWARD;
              const obj = captureAdUserAction;
              const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: CLAIM_REWARD, surfaceId: QUEST_HOME_MOBILE, sourceQuestContent, impressionId: getQuestImpressionId() };
              obj.captureAdUserAction(obj2);
              const obj3 = QuestUtils;
              const obj4 = { product, quest, questContent: QUEST_HOME_MOBILE, questContentPosition: _asyncToGenerator, currentUserHasVerifiedEmailOrPhone, currentUserHasVerifiedEmail, sourceQuestContent };
              result = obj3.handleRewardClaimThenView(obj4);
            }
      };
      intl3 = tmp(tmp2[47]).intl;
      if (!isClaimingReward) {
        isClaimingReward = isFetchingRewardCode;
      }
      if (!isClaimingReward) {
        isClaimingReward = isFetching;
      }
      let tmp73 = null;
      if (isQuestAccessSuspended) {
        tmp73 = obj3;
      }
      let merged = Object.assign(tmp73);
      obj14 = obj9;
    }
    if (isQuestExpiredResult) {
      let obj10 = { text: intl2.formatToPlainString(tmp(tmp2[47]).t["6p8BZx"], obj11), loading: isClaimingReward || isFetchingRewardCode || isFetching, disabled: true, variant: "secondary", onPress };
      intl2 = tmp(tmp2[47]).intl;
      obj11 = { expiryDate: questFormattedDate1 };
      obj14 = obj10;
    } else {
      if (tmp32) {
        if (hasWatchVideoTasksResult) {
          let obj12 = {
            text: tmpResult74.getVideoQuestWatchCtaText(questTaskDetails),
            accessibilityLabel: tmpResult75.getVideoQuestWatchCtaAccessibilityLabel(questTaskDetails),
            disabled: false,
            onPress() {
                      logger.log("Navigating to video quest bottom sheet");
                      const WATCH_VIDEO = AnalyticsTypes.QuestContentCTA.WATCH_VIDEO;
                      const obj = captureAdUserAction;
                      const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: WATCH_VIDEO, surfaceId: QUEST_HOME_MOBILE, sourceQuestContent, impressionId: getQuestImpressionId() };
                      obj.captureAdUserAction(obj2);
                      const tmp5 = hasWatchVideoOnMobileTasks;
                      if (tmp5) {
                        const obj4 = { questId: quest.id, sourceQuestContent };
                        openVideoQuestModalDefault(obj4);
                      } else {
                        const obj5 = { questId: quest.id, questContentPosition: _asyncToGenerator, sourceQuestContent };
                        const obj3 = ActionSheetActionCreatorsDefault;
                        obj3.openLazy(asyncRequire(17085, dependencyMap.paths), "QuestBottomSheet", obj5);
                      }
                    }
          };
          tmpResult74 = tmp(tmp2[49]);
          let tmp68 = null;
          tmpResult75 = tmp(tmp2[49]);
          if (isQuestAccessSuspended) {
            tmp68 = obj3;
          }
          let merged1 = Object.assign(tmp68);
          obj14 = obj12;
        }
      }
      if (tmp32) {
        if (isMobileActivityQuest) {
          let obj13 = {
            text: primaryCtaCopy,
            icon: tmpResult76.getPrimaryCtaIcon(quest),
            disabled: false,
            onPress() {
                      const LAUNCH_MOBILE_ACTIVITY = AnalyticsTypes.QuestContentCTA.LAUNCH_MOBILE_ACTIVITY;
                      const obj = captureAdUserAction;
                      const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: LAUNCH_MOBILE_ACTIVITY, surfaceId: QUEST_HOME_MOBILE, sourceQuestContent, impressionId: getQuestImpressionId() };
                      obj.captureAdUserAction(obj2);
                      callback3();
                    }
          };
          let tmp64 = null;
          tmpResult76 = tmp(tmp2[48]);
          if (isQuestAccessSuspended) {
            tmp64 = obj3;
          }
          let merged2 = Object.assign(tmp64);
          obj14 = obj13;
        }
      }
      if (tmp32) {
        if (!hasWatchVideoTasksResult) {
          if (!isMobileActivityQuest) {
            obj14 = {
              text: intl.string(tmp(tmp2[47]).t.JiosAn),
              variant: "secondary",
              disabled: false,
              onPress() {
                          logger.log("Navigating to console connection action sheet");
                          const VIEW_REQUIREMENTS = AnalyticsTypes.QuestContentCTA.VIEW_REQUIREMENTS;
                          const obj = captureAdUserAction;
                          const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: VIEW_REQUIREMENTS, surfaceId: QUEST_HOME_MOBILE, sourceQuestContent, impressionId: getQuestImpressionId() };
                          obj.captureAdUserAction(obj2);
                          const obj3 = ActionSheetActionCreatorsDefault;
                          const obj4 = { questId: quest.id, questContentPosition: _asyncToGenerator, sourceQuestContent };
                          obj3.openLazy(asyncRequire(17085, dependencyMap.paths), "QuestBottomSheet", obj4);
                        }
            };
            intl = tmp(tmp2[47]).intl;
          }
        }
      }
      let obj15 = {
        text: primaryCtaCopy,
        disabled: false,
        loading: isEnrolling,
        accessibilityLabel: videoQuestWatchCtaAccessibilityLabel,
        icon: primaryCtaIcon,
        onPress() {
              return closure_0(...arguments);
            }
      };
      videoQuestWatchCtaAccessibilityLabel = undefined;
      if (hasWatchVideoTasksResult) {
        const tmpResult77 = tmp(tmp2[49]);
        videoQuestWatchCtaAccessibilityLabel = tmpResult77.getVideoQuestWatchCtaAccessibilityLabel(questTaskDetails);
      }
      primaryCtaIcon = undefined;
      if (isMobileActivityQuest) {
        const tmpResult78 = tmp(tmp2[48]);
        primaryCtaIcon = tmpResult78.getPrimaryCtaIcon(quest);
      }
      closure_0 = _asyncToGenerator(async (arg0, value) => {
        if (questContent === 2) {
          questContent = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            questContent = 2;
            if (0 === id) {
              if (arg0 === 1) {
                questContent = 3;
                throw value;
              } else if (arg0 === 2) {
                questContent = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                logger.log("Enrolling in quest");
                tmp(QUEST_HOME_MOBILE[51]);
                const obj4 = { questContent, questContentCTA: null, sourceQuestContent: null };
                const tmp35 = isMobileActivityQuest;
                if (!tmp35) {
                  let START_QUEST;
                  const tmp16 = closure_1_14;
                  if (!tmp16) {
                    START_QUEST = tmp28(QUEST_HOME_MOBILE[25]).QuestContentCTA.ACCEPT_QUEST;
                  }
                  obj4.questContentCTA = START_QUEST;
                  obj4.sourceQuestContent = sourceQuestContent;
                  id = 1;
                  questContent = 1;
                  const obj5 = { value: tmp31(tmp33, obj4), done: false };
                  return obj5;
                }
                START_QUEST = tmp28(QUEST_HOME_MOBILE[25]).QuestContentCTA.START_QUEST;
              }
            } else if (arg0 === 1) {
              questContent = 3;
              throw value;
            } else if (arg0 === 2) {
              questContent = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              const tmp25 = closure_1_14;
              if (tmp25) {
                const tmp5 = hasWatchVideoOnMobileTasks;
                if (tmp5) {
                  const obj = { questId: id.id, sourceQuestContent };
                  quest(QUEST_HOME_MOBILE[50])(obj);
                }
                questContent = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              }
              const tmp6 = isMobileActivityQuest;
              if (tmp6) {
                callback3();
              } else {
                showQuestBottomSheet();
              }
            }
          } catch (tmp20) {
            questContent = 3;
            throw tmp20;
          }
        }
      });
      let tmp60 = null;
      if (isQuestAccessSuspended) {
        tmp60 = obj3;
      }
      let merged3 = Object.assign(tmp60);
      obj14 = obj15;
    }
  }
  const intl5 = tmp(tmp2[47]).intl;
  let obj16 = { questName: quest.config.messages.questName };
  const formatToPlainStringResult = intl5.formatToPlainString(tmp(tmp2[47]).t.EAYZAr, obj16);
  const tmpResult79 = tmp(tmp2[27]);
  const result2 = tmpResult79.hasVirtualCurrencyReward(quest.config);
  const tmpResult80 = tmp(tmp2[52]);
  const questOrbMultiplierEligibility = tmpResult80.useQuestOrbMultiplierEligibility();
  const tmpResult81 = tmp(tmp2[17]);
  let shouldShowBonusOrbsUX = tmpResult81.useShouldShowBonusOrbsUX(quest, questOrbMultiplierEligibility);
  const userStatus6 = quest.userStatus;
  let orbQuantityClaimed;
  const tmp81 = shouldShowBonusOrbsUX && questOrbMultiplierEligibility === tmp(tmp2[53]).QuestOrbMultiplierEligibilityType.NITRO;
  if (userStatus6 != null) {
    orbQuantityClaimed = userStatus6.orbQuantityClaimed;
  }
  if (orbQuantityClaimed == null) {
    const tmpResult82 = tmp(tmp2[27]);
    orbQuantityClaimed = tmpResult82.getVirtualCurrencyRewardOrbQuantity(quest.config);
  }
  const tmpResult83 = tmp(tmp2[27]);
  const questOrbRewardQuantityForUser = tmpResult83.getQuestOrbRewardQuantityForUser(quest.config, stateFromStores);
  const tmpResult84 = tmp(tmp2[27]);
  const defaultRewardName = tmpResult84.getDefaultRewardName(quest.config, stateFromStores);
  const tmpResult85 = tmp(tmp2[54]);
  const fontScale = tmpResult85.useFontScale();
  const tmpResult86 = tmp(tmp2[55]);
  const scaledTextLineHeight = tmpResult86.useScaledTextLineHeight("text-md/semibold");
  const tmpResult87 = tmp(tmp2[44]);
  const questDescription = tmpResult87.useQuestDescription(quest, sourceQuestContent, tmp4.QUEST_HOME_MOBILE, tmp(tmp2[56]).GameProfileSources.QuestHome);
  const result3 = 16 * Math.min(fontScale, 1.3);
  const items10 = [null != claimedAt, result2, questOrbRewardQuantityForUser, orbQuantityClaimed, defaultRewardName, defaultRewardNameWithArticle, result3, scaledTextLineHeight, , , ];
  ({ orbWithAmountRow: arr13[8], rewardSubtitleRow: arr13[9], shrinkableText: arr13[10] } = tmp8);
  let tmp90 = isQuestExpiredResult;
  const memo1 = obj8.useMemo(() => {
    let format;
    let format2;
    let intl;
    let intl2;
    let items;
    let items1;
    let items2;
    let items3;
    let obj12;
    let obj16;
    let obj18;
    let obj20;
    let obj6;
    let obj8;
    let prop;
    let prop1;
    let tmp15Result;
    let num = 0;
    const obj = PlatformUtils;
    if (obj.isAndroid()) {
      num = 16 / scaledTextLineHeight;
    }
    result = tmp / 8;
    const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: authStore.shrinkableText };
    size = { width: tmp, height: tmp, marginRight: result, marginTop: 0, transform: items };
    items = [{ translateY: num }];
    if (closure_16) {
      const tmp8 = result2;
      if (tmp8) {
        const obj3 = { style: authStore.orbWithAmountRow, children: items1 };
        const obj4 = { size: "custom", color: "mobile-text-heading-primary", style: size };
        items1 = [unpackModuleId(OrbsIcon.OrbsIcon, obj4), , ];
        const obj5 = { style: obj6 };
        obj6 = { width: result };
        items1[1] = unpackModuleId(metroRequire, obj5);
        const obj7 = { children: format2(prop, obj8) };
        const Text5 = tmp2(5624).Text;
        const merged = Object.assign(obj2);
        const intl4 = tmp2(1113).intl;
        format2 = intl4.format;
        let num4 = orbQuantityClaimed;
        prop = tmp2(1113).t["nLXlh+"];
        const tmp31 = authStore2;
        const tmp32 = metroRequire;
        const tmp33 = unpackModuleId;
        if (orbQuantityClaimed == null) {
          num4 = 0;
        }
        obj8 = { orbAmount: num4 };
        items1[2] = tmp33(Text5, obj7);
        tmp15Result = tmp31(tmp32, obj3);
      }
      return tmp15Result;
    }
    if (closure_16) {
      const obj9 = { children: defaultRewardName };
      const Text4 = tmp2(5624).Text;
      const merged1 = Object.assign(obj2);
      tmp15Result = unpackModuleId(Text4, obj9);
    } else {
      const tmp9 = result2;
      if (tmp9) {
        const obj10 = { style: authStore.rewardSubtitleRow, children: items2 };
        const obj11 = { children: intl2.format(intl15.t["0IUT4Y"], obj12) };
        const Text2 = tmp2(5624).Text;
        const merged2 = Object.assign(obj2);
        intl2 = tmp2(1113).intl;
        obj12 = {
          rewardWithArticleHook() {
                return null;
              }
        };
        items2 = [unpackModuleId(Text2, obj11), ];
        const obj13 = { style: authStore.orbWithAmountRow, children: items3 };
        const obj14 = { size: "custom", color: "mobile-text-heading-primary", style: size };
        items3 = [unpackModuleId(OrbsIcon.OrbsIcon, obj14), , ];
        const obj15 = { style: obj16 };
        obj16 = { width: result };
        items3[1] = unpackModuleId(metroRequire, obj15);
        const obj17 = { children: format(prop1, obj18) };
        const Text3 = tmp2(5624).Text;
        const merged3 = Object.assign(obj2);
        const intl3 = tmp2(1113).intl;
        format = intl3.format;
        let num3 = questOrbRewardQuantityForUser;
        prop1 = tmp2(1113).t["nLXlh+"];
        const tmp17 = unpackModuleId;
        if (questOrbRewardQuantityForUser == null) {
          num3 = 0;
        }
        obj18 = { orbAmount: num3 };
        items3[2] = tmp17(Text3, obj17);
        items2[1] = authStore2(metroRequire, obj13);
        tmp15Result = tmp15(tmp16, obj10);
      } else {
        const obj19 = { children: intl.format(intl15.t["0IUT4Y"], obj20) };
        const Text = tmp2(5624).Text;
        const merged4 = Object.assign(obj2);
        intl = tmp2(1113).intl;
        obj20 = {
          rewardWithArticleHook() {
                return defaultRewardNameWithArticle;
              }
        };
        tmp15Result = unpackModuleId(Text, obj19);
      }
    }
  }, items10);
  if (isQuestExpiredResult) {
    tmp90 = tmp94Result10;
  }
  if (tmp90) {
    tmp90 = !tmp36;
  }
  let formatToPlainStringResult1 = questDescription;
  if (tmp90) {
    const intl6 = tmp(tmp2[47]).intl;
    let obj17 = { date: questFormattedDate };
    formatToPlainStringResult1 = intl6.formatToPlainString(tmp(tmp2[47]).t["l1jCM/"], obj17);
  }
  const items11 = [quest.id, sourceQuestContent];
  const callback2 = obj8.useCallback(() => {
    const obj = { questId: quest.id, initialStep: VideoQuestModal.VideoQuestModalSteps.WATCH_VIDEO, sourceQuestContent };
    const tmp = openVideoQuestModalDefault;
    tmp(obj);
  }, items11);
  const items12 = [launchMobileActivity];
  const callback3 = obj8.useCallback(_asyncToGenerator(async (arg0, value) => {
    let v3;
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const obj2 = c0(QUEST_HOME_MOBILE[48]);
            result = obj2.dismissOverlayScreens();
            c1 = 1;
            c0 = 1;
            const obj5 = { value: launchMobileActivity(), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c0 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp8) {
        c0 = 3;
        throw tmp8;
      }
    }
  }), items12);
  let obj18 = {
    style: items13,
    onLayout(arg0) {
      if (require != null) {
        tmp(arg0, quest.id);
      }
    },
    children: defaultRewardNameWithArticle(tmp10Result, obj19)
  };
  items13 = [tmp8.container, { marginHorizontal: tmp11 - containerPadding }];
  const Card = tmp(tmp2[61]).Card;
  obj19 = { visible: tmp81, glow: true, children: items20 };
  let obj20 = { style: items14, children: items15 };
  items14 = [tmp8.heroContainer, { minHeight: result, backgroundColor: gradientEnd }];
  items15 = [, , , ];
  const obj21 = { source: { uri: memo.url }, style: tmp8.heroImg, onError: callback, accessible: true, accessibilityRole: "image", accessibilityLabel: quest.config.messages.questName };
  tmp10Result = quest(tmp2[62]);
  items15[0] = closure_11(quest(tmp2[63]), obj21);
  const obj22 = { style: tmp8.heroLinearGradientOverlay, start: tmp(tmp2[65]).VerticalGradient.START, end: tmp(tmp2[65]).VerticalGradient.END, colors: items16 };
  items16 = [gradientStart, gradientMid, gradientEnd];
  const tmp10Result3 = quest(tmp2[64]);
  items15[1] = closure_11(tmp10Result3, obj22);
  let preview = quest.preview;
  if (preview) {
    const obj23 = { style: tmp8.previewBadge, children: closure_11(Text, obj24) };
    obj24 = { variant: badgeTextVariant, color: "text-overlay-light", style: tmp8.previewBadgeText, children: intl7.string(tmp(tmp2[47]).t.SKNnqq) };
    Text = tmp(tmp2[59]).Text;
    intl7 = tmp(tmp2[47]).intl;
    preview = tmp94(tmp97, obj23);
  }
  items15[2] = preview;
  const obj25 = { style: tmp8.heroFooterContainer, children: items19 };
  const obj26 = { style: tmp8.heroFooterLeftContainer, children: items17 };
  items17 = [closure_11(tmp10(tmp2[66]), { assetUrl: questGameLogotypeAssetUrl, onError: callback }), ];
  let str = "text-overlay-light";
  let str2 = "text-overlay-light";
  const obj27 = { style: tmp8.promotedByRow, children: items18 };
  let Text2 = tmp(tmp2[59]).Text;
  if (isThemeDarkResult) {
    str2 = "text-muted";
  }
  const obj28 = { variant: "text-xs/medium", color: str2, style: tmp8.shrinkableText, children: intl8.string(tmp(tmp2[47]).t.VAbKhK) };
  intl8 = tmp(tmp2[47]).intl;
  items18 = [closure_11(Text2, obj28), , ];
  const obj29 = { source: quest(tmp2[67]), style: { height: 16, width: 16 }, accessible: true, accessibilityRole: "image", accessibilityLabel: intl9.string(tmp(tmp2[47]).t.OfMjx9) };
  const tmp10Result4 = quest(tmp2[63]);
  intl9 = tmp(tmp2[47]).intl;
  items18[1] = closure_11(tmp10Result4, obj29);
  const obj30 = { variant: "text-xs/medium", color: "text-overlay-light", style: tmp8.shrinkableText, children: quest.config.messages.gamePublisher };
  items18[2] = closure_11(tmp(tmp2[59]).Text, obj30);
  items17[1] = defaultRewardNameWithArticle(closure_6, obj27);
  items19 = [defaultRewardNameWithArticle(closure_6, obj26), ];
  let tmp94Result = !isQuestExpiredResult && !tmp36;
  if (tmp94Result) {
    let Text3 = tmp(tmp2[59]).Text;
    if (isThemeDarkResult) {
      str = "text-default";
    }
    const obj31 = { variant: "text-xs/medium", color: str, style: tmp8.shrinkableText, children: intl10.format(tmp(tmp2[47]).t["7D8r4F"], obj32) };
    intl10 = tmp(tmp2[47]).intl;
    obj32 = { expiryDate: questFormattedDate1 };
    tmp94Result = tmp94(Text3, obj31);
  }
  items19[1] = tmp94Result;
  items15[3] = defaultRewardNameWithArticle(closure_6, obj25);
  items20 = [defaultRewardNameWithArticle(closure_6, obj20), , ];
  const obj33 = { style: tmp8.detailsWrapper, children: defaultRewardNameWithArticle(closure_6, obj34) };
  obj34 = { style: tmp8.detailsContainer, children: items21 };
  const obj35 = { style: tmp8.rewardImgContainer, children: tmp94Result6 };
  if (tmp7) {
    const obj36 = { quest, progress: completedRatio, size: "sm", paused: !isFocused };
    tmp94Result6 = tmp94(tmp10(tmp2[68]), obj36);
  } else {
    size = { quest, height: 64, width: 64, paused: !isFocused };
    tmp94Result6 = tmp94(tmp10(tmp2[69]), size);
  }
  items21 = [closure_11(closure_6, obj35), ];
  const obj37 = { style: tmp8.detailsTextContainer, children: items22 };
  items22 = [, ];
  const obj38 = { variant: "eyebrow", color: "text-brand", style: tmp8.questName, accessibilityRole: "header", children: formatToPlainStringResult };
  items22[0] = closure_11(tmp(tmp2[59]).Text, obj38);
  const obj40 = { style: tmp8.subtitleRow, children: items23 };
  items23 = [memo1, ];
  const obj39 = { style: tmp8.bodyContainer, children: items24 };
  if (shouldShowBonusOrbsUX) {
    const obj41 = { questId: quest.config.id, orbMultiplierEligibility: questOrbMultiplierEligibility };
    shouldShowBonusOrbsUX = tmp94(tmp(tmp2[70]).QuestOrbMultiplierPerkPill, obj41);
  }
  items23[1] = shouldShowBonusOrbsUX;
  items24 = [defaultRewardNameWithArticle(closure_6, obj40), ];
  let tmp94Result7 = null != formatToPlainStringResult1;
  if (tmp94Result7) {
    const obj42 = { variant: "text-sm/medium", color: "text-muted", children: formatToPlainStringResult1 };
    tmp94Result7 = tmp94(tmp(tmp2[59]).Text, obj42);
  }
  items24[1] = tmp94Result7;
  items22[1] = defaultRewardNameWithArticle(closure_6, obj39);
  items21[1] = defaultRewardNameWithArticle(closure_6, obj37);
  items20[1] = closure_11(closure_6, obj33);
  const obj43 = { direction: "horizontal", align: "center", spacing: quest(tmp2[9]).space.PX_8, style: tmp8.buttonContainers, children: items27 };
  const Stack = tmp(tmp2[71]).Stack;
  const obj44 = { children: null };
  const tmp103 = questEnrollmentBlockedUntil;
  if (tmp49) {
    const obj45 = { grow: true, onPress, variant: "secondary", disabled: true, text: intl11.string(tmp(tmp2[47]).t.V293qn) };
    const Button3 = tmp(tmp2[72]).Button;
    intl11 = tmp(tmp2[47]).intl;
    const items25 = [closure_11(Button3, obj45), ];
    const obj46 = {
      onPress: function showQuestEnrollmentBlockedBottomSheet() {
          const obj = ActionSheetActionCreatorsDefault;
          const obj2 = { questId: quest.id, questEnrollmentBlockedUntil, sourceQuestContent };
          obj.openLazy(asyncRequire(17130, dependencyMap.paths), "QuestEnrollmentBlockedBottomSheet", obj2);
        },
      variant: "tertiary",
      text: intl12.string(tmp(tmp2[47]).t.vY9GgG)
    };
    const Button4 = tmp(tmp2[72]).Button;
    intl12 = tmp(tmp2[47]).intl;
    items25[1] = closure_11(Button4, obj46);
    obj44.children = items25;
    tmp107 = obj44;
  } else {
    if (tmp94Result8) {
      tmp94Result8 = !tmp49;
    }
    if (tmp94Result8) {
      tmp94Result8 = !isQuestExpiredResult;
    }
    if (tmp94Result8) {
      tmp94Result8 = !tmp36;
    }
    if (tmp94Result8) {
      tmp94Result8 = !tmp94Result10;
    }
    if (tmp94Result8) {
      const obj47 = { style: tmp8.equalWidthContainer, children: closure_11(Button, obj48) };
      obj48 = { grow: true, variant: "secondary", text: tmpResult88.getExternalCtaLabel(quest), onPress: callback1 };
      Button = tmp(tmp2[72]).Button;
      tmpResult88 = tmp(tmp2[31]);
      tmp94Result8 = tmp94(tmp97, obj47);
    }
    const items26 = [tmp94Result8, ];
    const obj49 = { style: tmp8.equalWidthContainer, children: closure_11(Button2, obj50) };
    obj50 = { grow: true };
    Button2 = tmp(tmp2[72]).Button;
    let merged4 = Object.assign(obj14);
    items26[1] = closure_11(closure_6, obj49);
    obj44.children = items26;
    tmp107 = obj44;
  }
  items27 = [defaultRewardNameWithArticle(tmp103, tmp107), , , ];
  let tmp94Result9 = tmp94Result10 && hasWatchVideoTasksResult && hasWatchVideoOnMobileTasks;
  if (tmp94Result9) {
    const obj51 = { accessibilityLabel: intl13.string(tmp(tmp2[47]).t.YsCuyF), icon: quest(tmp2[75]), onPress: callback2, variant: "secondary" };
    const IconButton = tmp(tmp2[74]).IconButton;
    intl13 = tmp(tmp2[47]).intl;
    tmp94Result9 = tmp94(IconButton, obj51);
  }
  items27[1] = tmp94Result9;
  if (tmp94Result10) {
    tmp94Result10 = isMobileActivityQuest;
  }
  if (tmp94Result10) {
    const obj52 = { accessibilityLabel: intl14.string(tmp(tmp2[47]).t.CkUzLd), icon: quest(tmp2[75]), onPress: callback3, variant: "secondary" };
    const IconButton2 = tmp(tmp2[74]).IconButton;
    intl14 = tmp(tmp2[47]).intl;
    tmp94Result10 = tmp94(IconButton2, obj52);
  }
  items27[2] = tmp94Result10;
  const obj53 = { quest, showShareLink: !isQuestExpiredResult, location: QuestsExperimentLocations.QUESTS_CARD, sourceQuestContent };
  items27[3] = closure_11(quest(tmp2[76]), obj53);
  items20[2] = defaultRewardNameWithArticle(Stack, obj43);
  return closure_11(Card, obj18);
});
size = size_mod;
let result3 = size.fileFinishedImporting("modules/quests/native/QuestCard.tsx");

export const ESTIMATED_CARD_HEIGHT = 348;
export const QuestCard = memoResult;
