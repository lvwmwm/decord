// Module ID: 13858
// Function ID: 104822
// Name: ESTIMATED_CARD_HEIGHT
// Dependencies: []

// Module 13858 (ESTIMATED_CARD_HEIGHT)
let StyleSheet;
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
({ Image: closure_6, StyleSheet, View: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const QuestsExperimentLocations = arg1(dependencyMap[6]).QuestsExperimentLocations;
const NOOP = arg1(dependencyMap[7]).NOOP;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_12, jsxs: closure_13, Fragment: closure_14 } = arg1(dependencyMap[8]));
let obj1 = arg1(dependencyMap[10]);
const result = obj1.experimental_createToken((theme) => {
  theme = theme.theme;
  const obj = arg1(dependencyMap[11]);
  const internal = importDefault(dependencyMap[9]).internal;
  const colors = importDefault(dependencyMap[9]).colors;
  const semanticColor = internal.resolveSemanticColor(theme, arg1(dependencyMap[11]).isThemeDark(theme) ? colors.BACKGROUND_SURFACE_HIGH : colors.BLACK);
  const isThemeDarkResult = arg1(dependencyMap[11]).isThemeDark(theme);
  return arg1(dependencyMap[12]).hexOpacityToRgba(semanticColor, 0);
});
let obj2 = arg1(dependencyMap[10]);
const result1 = obj2.experimental_createToken((theme) => {
  theme = theme.theme;
  const isThemeDarkResult = arg1(dependencyMap[11]).isThemeDark(theme);
  const internal = importDefault(dependencyMap[9]).internal;
  const colors = importDefault(dependencyMap[9]).colors;
  const semanticColor = internal.resolveSemanticColor(theme, isThemeDarkResult ? colors.BACKGROUND_SURFACE_HIGH : colors.BLACK);
  const obj = arg1(dependencyMap[11]);
  let num = 0.5;
  if (isThemeDarkResult) {
    num = 0.8;
  }
  return arg1(dependencyMap[12]).hexOpacityToRgba(semanticColor, num);
});
let obj3 = arg1(dependencyMap[10]);
const result2 = obj3.experimental_createToken((theme) => {
  const obj = arg1(dependencyMap[11]);
  const colors = importDefault(dependencyMap[9]).colors;
  return arg1(dependencyMap[11]).isThemeDark(theme.theme) ? colors.BACKGROUND_SURFACE_HIGH : colors.BLACK;
});
const PX_16 = importDefault(dependencyMap[9]).space.PX_16;
let obj4 = arg1(dependencyMap[10]);
let obj = {};
obj = { borderRadius: importDefault(dependencyMap[9]).radii.sm, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_SURFACE_HIGH, marginBottom: importDefault(dependencyMap[9]).space.PX_16, overflow: "hidden" };
obj.container = obj;
obj1 = { padding: importDefault(dependencyMap[9]).space.PX_12 };
obj.heroContainer = obj1;
obj2 = { resizeMode: "cover" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.heroImg = obj2;
obj.heroLinearGradientOverlay = StyleSheet.absoluteFillObject;
obj3 = { position: "absolute", top: importDefault(dependencyMap[9]).space.PX_8, right: importDefault(dependencyMap[9]).space.PX_8, backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BRAND, padding: importDefault(dependencyMap[9]).space.PX_4, borderRadius: importDefault(dependencyMap[9]).radii.sm };
const merged1 = Object.assign(importDefault(dependencyMap[9]).shadows.SHADOW_LOW);
obj.previewBadge = obj3;
obj4 = { <string:1140607356>: 12508524035280250000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, <string:1751293292>: 0.00000000000000000000000000000000000000000000000000000000000004667261458395371, marginRight: importDefault(dependencyMap[9]).space.PX_12 };
obj.rewardImgContainer = obj4;
obj.heroFooterContainer = {};
obj.heroFooterLeftContainer = {};
const tmp3 = arg1(dependencyMap[8]);
obj.detailsWrapper = { display: "flex", padding: importDefault(dependencyMap[9]).space.PX_12 };
obj.detailsContainer = {};
const obj5 = { display: "flex", padding: importDefault(dependencyMap[9]).space.PX_12 };
obj.questName = { marginBottom: importDefault(dependencyMap[9]).space.PX_4 };
const obj6 = { marginBottom: importDefault(dependencyMap[9]).space.PX_4 };
obj.bodyContainer = { gap: importDefault(dependencyMap[9]).space.PX_4 };
const obj7 = { gap: importDefault(dependencyMap[9]).space.PX_4 };
obj.subtitleRow = { rowGap: importDefault(dependencyMap[9]).space.PX_4, columnGap: importDefault(dependencyMap[9]).space.PX_8 };
obj.detailsTextContainer = { -9223372036854775808: 323420161, 0: -2104950783 };
const obj8 = { rowGap: importDefault(dependencyMap[9]).space.PX_4, columnGap: importDefault(dependencyMap[9]).space.PX_8 };
obj.buttonContainers = { borderTopColor: importDefault(dependencyMap[9]).colors.BORDER_SUBTLE, padding: importDefault(dependencyMap[9]).space.PX_12 };
obj.equalWidthContainer = {};
let closure_16 = obj4.createStyles(obj);
const obj9 = { borderTopColor: importDefault(dependencyMap[9]).colors.BORDER_SUBTLE, padding: importDefault(dependencyMap[9]).space.PX_12 };
let closure_17 = arg1(dependencyMap[10]).createStyleProperties({ gradientStart: result, gradientMid: result1, gradientEnd: result2 });
const obj17 = arg1(dependencyMap[10]);
const memoResult = importAllResult.memo((questContent) => {
  let gradientEnd;
  let gradientMid;
  let gradientStart;
  let quest;
  let questEnrollmentBlockedUntil;
  let sourceQuestContent;
  function trackClick(questContentCTA) {
    let obj = callback(QUEST_HOME_MOBILE[33]);
    if (obj.shouldMigrateToAdAnalyticsInterface(callback(QUEST_HOME_MOBILE[33]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_card")) {
      obj = { type: callback(QUEST_HOME_MOBILE[35]).AdUserActionType.CLICK_INTERNAL, adCreativeType: callback(QUEST_HOME_MOBILE[36]).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA, surfaceId: QUEST_HOME_MOBILE, sourceQuestContent, impressionId: getQuestImpressionId() };
      callback(QUEST_HOME_MOBILE[34]).captureAdUserAction(obj);
      const obj3 = callback(QUEST_HOME_MOBILE[34]);
    } else {
      obj = { questId: quest.id, questContent: QUEST_HOME_MOBILE, questContentCTA, sourceQuestContent };
      callback3(obj);
    }
  }
  function showQuestBottomSheet() {
    let obj = quest(QUEST_HOME_MOBILE[38]);
    obj = { questId: quest.id, questContentPosition: closure_3, sourceQuestContent };
    obj.openLazy(callback(QUEST_HOME_MOBILE[40])(QUEST_HOME_MOBILE[39], QUEST_HOME_MOBILE.paths), "QuestBottomSheet", obj);
  }
  ({ onLayout: closure_0, quest } = questContent);
  const importDefault = quest;
  let QUEST_HOME_MOBILE = questContent.questContent;
  if (undefined === QUEST_HOME_MOBILE) {
    let merged = arg1;
    QUEST_HOME_MOBILE = arg1(dependencyMap[13]).QuestContent.QUEST_HOME_MOBILE;
  }
  const dependencyMap = QUEST_HOME_MOBILE;
  ({ questContentPosition: closure_3, sourceQuestContent } = questContent);
  let callback2 = sourceQuestContent;
  let obj = arg1(dependencyMap[14]);
  obj = { quest, location: QuestsExperimentLocations.QUEST_HOME_MOBILE };
  const React = obj.getQuestLogger(obj);
  let obj2 = arg1(dependencyMap[15]);
  let closure_6 = obj2.useTrackQuestContentClickedWithImpression();
  let obj3 = arg1(dependencyMap[16]);
  let closure_7 = obj3.useQuestTaskDetails(quest);
  let obj4 = arg1(dependencyMap[16]);
  const userStatus = quest.userStatus;
  let enrolledAt;
  if (null != userStatus) {
    enrolledAt = userStatus.enrolledAt;
  }
  const tmp5 = callback3();
  const diff = importDefault(dependencyMap[17])().width - 2 * PX_16;
  let closure_8 = diff;
  const result = 0.2803030303030303 * diff;
  let closure_9 = result;
  const items = [quest, diff, result];
  const memo = React.useMemo(() => {
    let obj = callback(QUEST_HOME_MOBILE[18]);
    const questAsset = obj.getQuestAsset(quest, callback(QUEST_HOME_MOBILE[18]).QuestAssetType.HERO);
    obj = {};
    const merged = Object.assign(questAsset);
    const obj3 = callback(QUEST_HOME_MOBILE[18]);
    if (questAsset.isAnimated) {
      obj = { assetUrl: questAsset.url, width: diff, height: result };
      let url = obj3.getScaledFirstFrameImageUrl(obj);
      if (null == url) {
        url = questAsset.url;
      }
      obj["url"] = url;
      let tmp5 = obj;
    } else {
      const obj1 = { assetUrl: questAsset.url, width: diff, height: result };
      obj["url"] = obj3.getScaledImageUrl(obj1);
      tmp5 = obj;
    }
    return tmp5;
  }, items);
  let obj5 = arg1(dependencyMap[19]);
  const questGameLogotypeAssetUrl = obj5.useQuestGameLogotypeAssetUrl(quest);
  ({ gradientStart, gradientMid, gradientEnd } = callback4());
  let obj6 = arg1(dependencyMap[20]);
  const items1 = [quest.id];
  const tmp11 = callback2(obj6.useRecyclingState(null, items1), 2);
  const first = tmp11[0];
  const QuestsExperimentLocations = first;
  const NOOP = tmp13;
  const items2 = [tmp11[1]];
  const callback = React.useCallback(() => {
    tmp13(false);
  }, items2);
  const items3 = [first, quest.id, QUEST_HOME_MOBILE];
  const effect = React.useEffect(() => {
    if (false === first) {
      let obj = quest(QUEST_HOME_MOBILE[21]);
      obj = { name: callback(QUEST_HOME_MOBILE[22]).MetricEvents.QUEST_CONTENT_RENDERING_FAILURE };
      const _HermesInternal = HermesInternal;
      const items = ["quest_id:" + quest.id, , ];
      const _HermesInternal2 = HermesInternal;
      items[1] = "quest_content:" + callback(QUEST_HOME_MOBILE[23]).getQuestContentName(QUEST_HOME_MOBILE);
      items[2] = "reason:asset_loading_error";
      obj.tags = items;
      obj.increment(obj);
      const obj3 = callback(QUEST_HOME_MOBILE[23]);
    }
  }, items3);
  let obj7 = arg1(dependencyMap[24]);
  const items4 = [closure_8];
  const stateFromStores = obj7.useStateFromStores(items4, () => diff.getCurrentUser());
  let obj8 = arg1(dependencyMap[25]);
  const defaultRewardNameWithArticle = obj8.getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  let obj9 = arg1(dependencyMap[24]);
  const items5 = [closure_9];
  const stateFromStoresObject = obj9.useStateFromStoresObject(items5, () => ({ reward: result.getRewards(quest.id), isFetchingRewardCode: result.isFetchingRewardCode(quest.id), isClaimingReward: result.isClaimingReward(quest.id), isEnrolling: result.isEnrolling(quest.id), questEnrollmentBlockedUntil: result.questEnrollmentBlockedUntil }));
  ({ isFetchingRewardCode: closure_13, isClaimingReward: closure_14, isEnrolling: closure_15, questEnrollmentBlockedUntil } = stateFromStoresObject);
  let callback3 = questEnrollmentBlockedUntil;
  let obj10 = arg1(dependencyMap[16]);
  const userStatus2 = quest.userStatus;
  let completedAt;
  if (null != userStatus2) {
    completedAt = userStatus2.completedAt;
  }
  const questFormattedDate = obj10.useQuestFormattedDate(completedAt, { width: 973078529, height: 16777216, backgroundColor: 27700546 });
  let obj11 = arg1(dependencyMap[26]);
  const hasWatchVideoTasksResult = obj11.hasWatchVideoTasks(quest);
  const callback4 = hasWatchVideoTasksResult;
  let obj12 = arg1(dependencyMap[19]);
  const hasWatchVideoOnMobileTasks = obj12.useHasWatchVideoOnMobileTasks(quest.config);
  const userStatus3 = quest.userStatus;
  let enrolledAt1;
  if (null != userStatus3) {
    enrolledAt1 = userStatus3.enrolledAt;
  }
  const tmp24 = null != enrolledAt1;
  const userStatus4 = quest.userStatus;
  let completedAt1;
  if (null != userStatus4) {
    completedAt1 = userStatus4.completedAt;
  }
  let tmp26 = null != completedAt1;
  const userStatus5 = quest.userStatus;
  let claimedAt;
  if (null != userStatus5) {
    claimedAt = userStatus5.claimedAt;
  }
  const tmp28 = null != claimedAt;
  let obj13 = arg1(dependencyMap[27]);
  const isQuestExpiredResult = obj13.isQuestExpired(quest);
  let obj14 = arg1(dependencyMap[27]);
  const isQuestExpiredButWithinThirtyDayLookback = obj14.getIsQuestExpiredButWithinThirtyDayLookback(quest);
  let obj15 = arg1(dependencyMap[28]);
  const tmp10 = callback4();
  const tmp4 = null != enrolledAt;
  let obj16 = arg1(dependencyMap[11]);
  const isThemeDarkResult = obj16.isThemeDark(importDefault(dependencyMap[29])());
  let obj17 = arg1(dependencyMap[25]);
  const result1 = obj17.hasCollectiblesQuestReward(quest.config);
  let obj18 = arg1(dependencyMap[30]);
  let skuId = null;
  if (result1) {
    skuId = null;
    if (tmp26) {
      skuId = obj15.getDefaultReward(quest.config).skuId;
    }
  }
  const fetchCollectiblesProduct = obj18.useFetchCollectiblesProduct(skuId);
  ({ product: closure_24, isFetching: closure_25 } = fetchCollectiblesProduct);
  let obj19 = arg1(dependencyMap[24]);
  const items6 = [closure_8];
  let closure_26 = obj19.useStateFromStores(items6, () => {
    const currentUser = diff.getCurrentUser();
    let result;
    if (null != currentUser) {
      result = currentUser.hasVerifiedEmailOrPhone();
    }
    return result;
  });
  let obj20 = arg1(dependencyMap[24]);
  const items7 = [closure_8];
  let closure_27 = obj20.useStateFromStores(items7, () => {
    const currentUser = diff.getCurrentUser();
    let verified;
    if (null != currentUser) {
      verified = currentUser.verified;
    }
    return verified;
  });
  let obj21 = arg1(dependencyMap[19]);
  const mobileActivityQuest = obj21.useMobileActivityQuest(quest);
  const isMobileActivityQuest = mobileActivityQuest.isMobileActivityQuest;
  const launchMobileActivity = mobileActivityQuest.launchMobileActivity;
  let obj22 = arg1(dependencyMap[31]);
  let closure_30 = obj22.useToken(importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOWER);
  let obj23 = arg1(dependencyMap[31]);
  let closure_31 = obj23.useToken(importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW);
  let obj24 = arg1(dependencyMap[31]);
  let closure_32 = obj24.useToken(importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOWEST);
  let obj25 = arg1(dependencyMap[16]);
  const questFormattedDate1 = obj25.useQuestFormattedDate(quest.config.expiresAt, {});
  let obj26 = arg1(dependencyMap[32]);
  const getQuestImpressionId = obj26.useGetQuestImpressionId();
  const items8 = [quest, QUEST_HOME_MOBILE, getQuestImpressionId, sourceQuestContent];
  const callback1 = React.useCallback(() => {
    let obj = callback(QUEST_HOME_MOBILE[37]);
    obj = { content: QUEST_HOME_MOBILE, ctaContent: callback(QUEST_HOME_MOBILE[23]).QuestContentCTA.OPEN_GAME_LINK, impressionId: getQuestImpressionId(), sourceQuestContent };
    obj.openGameLinkDirectly(quest, obj);
  }, items8);
  let obj27 = arg1(dependencyMap[41]);
  let closure_35 = obj27.usePrimaryCtaCopy({ quest, application: mobileActivityQuest.questApplication, shortText: true });
  const tmp40 = () => {
    if (null != closure_24) {
      let obj = {};
      const styles2 = closure_24.styles;
      let buttonColors;
      if (null != styles2) {
        buttonColors = styles2.buttonColors;
      }
      if (null == buttonColors) {
        buttonColors = [];
      }
      obj.buttonColors = buttonColors;
      const styles = closure_24.styles;
      let confettiColors;
      if (null != styles) {
        confettiColors = styles.confettiColors;
      }
      if (null == confettiColors) {
        confettiColors = [];
      }
      obj.confettiColors = confettiColors;
      const items = [quest(QUEST_HOME_MOBILE[42])(closure_31), quest(QUEST_HOME_MOBILE[42])(closure_30), quest(QUEST_HOME_MOBILE[42])(closure_32)];
      obj.backgroundColors = items;
      closure_24.styles = obj;
      const tmp52 = closure_24;
    }
    if (tmp28) {
      obj = {};
      const intl4 = callback(QUEST_HOME_MOBILE[43]).intl;
      obj.text = intl4.string(callback(QUEST_HOME_MOBILE[43]).t.vTgCWx);
      obj.loading = closure_25;
      obj.onPress = function onPress() {
        callback3(callback(closure_2[23]).QuestContentCTA.SHOW_REWARD);
        let obj = callback(closure_2[44]);
        obj = { product: closure_24, quest: closure_1, questContent: closure_2, questContentPosition: closure_3, sourceQuestContent: closure_4 };
        obj.viewReward(obj);
      };
    } else {
      if (tmp26) {
        const obj1 = {};
        const intl3 = callback(QUEST_HOME_MOBILE[43]).intl;
        obj1.text = intl3.string(callback(QUEST_HOME_MOBILE[43]).t.cfY4PE);
        let tmp48 = closure_14;
        if (!closure_14) {
          tmp48 = closure_13;
        }
        if (!tmp48) {
          tmp48 = closure_25;
        }
        obj1.loading = tmp48;
        obj1.onPress = function onPress() {
          callback3(callback(closure_2[23]).QuestContentCTA.CLAIM_REWARD);
          let obj = callback(closure_2[44]);
          obj = { product: closure_24, quest: closure_1, questContent: closure_2, questContentPosition: closure_3, currentUserHasVerifiedEmailOrPhone: closure_26, currentUserHasVerifiedEmail: closure_27, sourceQuestContent: closure_4 };
          const result = obj.handleRewardClaimThenView(obj);
        };
        obj = obj1;
      }
      if (isQuestExpiredResult) {
        let obj2 = {};
        const intl2 = callback(QUEST_HOME_MOBILE[43]).intl;
        let obj3 = { expiryDate: questFormattedDate1 };
        obj2.text = intl2.formatToPlainString(callback(QUEST_HOME_MOBILE[43]).t.6p8BZx, obj3);
        let tmp44 = closure_14;
        if (!closure_14) {
          tmp44 = closure_13;
        }
        if (!tmp44) {
          tmp44 = closure_25;
        }
        obj2.loading = tmp44;
        obj2.disabled = true;
        obj2.variant = "secondary";
        obj2.onPress = tmp13;
        obj = obj2;
      } else {
        if (tmp24) {
          if (hasWatchVideoTasksResult) {
            const obj4 = { text: callback(QUEST_HOME_MOBILE[45]).getVideoQuestWatchCtaText(closure_7) };
            const obj8 = callback(QUEST_HOME_MOBILE[45]);
            obj4.accessibilityLabel = callback(QUEST_HOME_MOBILE[45]).getVideoQuestWatchCtaAccessibilityLabel(closure_7);
            obj4.disabled = false;
            obj4.onPress = function onPress() {
              closure_5.log("Navigating to video quest bottom sheet");
              callback3(callback(closure_2[23]).QuestContentCTA.WATCH_VIDEO);
              if (closure_18) {
                const obj = { questId: lib.id, sourceQuestContent: closure_4 };
                lib(closure_2[46])(obj);
              } else {
                callback4();
              }
            };
            obj = obj4;
            const obj9 = callback(QUEST_HOME_MOBILE[45]);
          }
        }
        if (tmp24) {
          if (isMobileActivityQuest) {
            let obj5 = { text: closure_35 };
            obj5 = callback(QUEST_HOME_MOBILE[44]);
            obj5.icon = obj5.getPrimaryCtaIcon(quest);
            obj5.disabled = false;
            obj5.onPress = function onPress() {
              callback3(callback(closure_2[23]).QuestContentCTA.LAUNCH_MOBILE_ACTIVITY);
              callback2();
            };
            obj = obj5;
          }
        }
        if (tmp24) {
          if (!hasWatchVideoTasksResult) {
            if (!isMobileActivityQuest) {
              obj = {};
              const intl = callback(QUEST_HOME_MOBILE[43]).intl;
              obj.text = intl.string(callback(QUEST_HOME_MOBILE[43]).t.JiosAn);
              obj.onPress = function onPress() {
                closure_5.log("Navigating to console connection action sheet");
                callback3(callback(closure_2[23]).QuestContentCTA.VIEW_REQUIREMENTS);
                callback4();
              };
            }
          }
        }
        const obj6 = { text: closure_35, disabled: false, loading: closure_15 };
        let videoQuestWatchCtaAccessibilityLabel;
        if (hasWatchVideoTasksResult) {
          obj2 = callback(QUEST_HOME_MOBILE[45]);
          videoQuestWatchCtaAccessibilityLabel = obj2.getVideoQuestWatchCtaAccessibilityLabel(closure_7);
        }
        obj6.accessibilityLabel = videoQuestWatchCtaAccessibilityLabel;
        let primaryCtaIcon;
        if (isMobileActivityQuest) {
          obj3 = callback(QUEST_HOME_MOBILE[44]);
          primaryCtaIcon = obj3.getPrimaryCtaIcon(quest);
        }
        obj6.icon = primaryCtaIcon;
        // CreateGeneratorClosureLongIndex (0x67)
        const callback = callback2(primaryCtaIcon);
        obj6.onPress = function() {
          return callback(...arguments);
        };
        obj = obj6;
      }
    }
    return obj;
  }();
  const intl = arg1(dependencyMap[43]).intl;
  obj = { questName: quest.config.messages.questName };
  const tmp30 = importDefault(dependencyMap[29])();
  let obj29 = arg1(dependencyMap[25]);
  const result2 = obj29.hasVirtualCurrencyReward(quest.config);
  let obj30 = arg1(dependencyMap[48]);
  const questOrbMultiplierEligibility = obj30.useQuestOrbMultiplierEligibility();
  let obj31 = arg1(dependencyMap[16]);
  let shouldShowBonusOrbsUX = obj31.useShouldShowBonusOrbsUX(quest, questOrbMultiplierEligibility);
  let tmp45 = shouldShowBonusOrbsUX;
  if (shouldShowBonusOrbsUX) {
    tmp45 = questOrbMultiplierEligibility === arg1(dependencyMap[49]).QuestOrbMultiplierEligibilityType.NITRO;
  }
  const userStatus6 = quest.userStatus;
  let orbQuantityClaimed;
  if (null != userStatus6) {
    orbQuantityClaimed = userStatus6.orbQuantityClaimed;
  }
  if (null == orbQuantityClaimed) {
    let obj32 = arg1(dependencyMap[25]);
    orbQuantityClaimed = obj32.getVirtualCurrencyRewardOrbQuantity(quest.config);
  }
  let obj33 = arg1(dependencyMap[25]);
  const questOrbRewardQuantityForUser = obj33.getQuestOrbRewardQuantityForUser(quest.config, stateFromStores);
  let obj34 = arg1(dependencyMap[25]);
  const defaultRewardName = obj34.getDefaultRewardName(quest.config, stateFromStores);
  let obj35 = arg1(dependencyMap[41]);
  const items9 = [tmp28, result2, questOrbRewardQuantityForUser, orbQuantityClaimed, defaultRewardName, defaultRewardNameWithArticle];
  const questDescription = obj35.useQuestDescription(quest, sourceQuestContent, QuestsExperimentLocations.QUEST_HOME_MOBILE, arg1(dependencyMap[50]).GameProfileSources.QuestHome);
  let tmp55 = isQuestExpiredResult;
  const memo1 = React.useMemo(() => {
    let obj = isFabricResult(QUEST_HOME_MOBILE[51]);
    let isFabricResult = obj.isFabric();
    if (isFabricResult) {
      obj = {};
      obj = { translateY: 3 };
      const items = [obj];
      obj.transform = items;
      let obj1 = obj;
    } else {
      obj1 = { "Bool(true)": 2, "Bool(true)": "text-sm/semibold" };
    }
    const quest = obj1;
    if (tmp28) {
      if (result2) {
        const obj2 = {};
        const obj3 = { style: obj1 };
        const items1 = [defaultRewardNameWithArticle(isFabricResult(QUEST_HOME_MOBILE[52]).OrbsIcon, obj3), , ];
        if (isFabricResult) {
          const obj4 = {};
          const obj5 = { width: 2 };
          obj4.style = obj5;
          isFabricResult = defaultRewardNameWithArticle(closure_7, obj4);
        }
        items1[1] = isFabricResult;
        const intl2 = isFabricResult(QUEST_HOME_MOBILE[43]).intl;
        const obj6 = {};
        let num6 = 0;
        if (null != orbQuantityClaimed) {
          num6 = orbQuantityClaimed;
        }
        obj6.orbAmount = num6;
        items1[2] = intl2.format(isFabricResult(QUEST_HOME_MOBILE[43]).t.nLXlh+, obj6);
        obj2.children = items1;
        let formatResult = closure_13(React.Fragment, obj2, "balance");
        const tmp7 = closure_13;
      }
      return formatResult;
    }
    if (tmp28) {
      formatResult = defaultRewardName;
    } else {
      const intl = isFabricResult(QUEST_HOME_MOBILE[43]).intl;
      const format = intl.format;
      const obj7 = {};
      if (result2) {
        obj7.rewardWithArticleHook = function rewardWithArticleHook() {
          let obj = {};
          obj = { style: obj1 };
          const items = [callback(isFabricResult(closure_2[52]).OrbsIcon, obj), , ];
          let tmp2 = isFabricResult;
          if (isFabricResult) {
            obj = {};
            const obj1 = { width: 2 };
            obj.style = obj1;
            tmp2 = callback(closure_7, obj);
          }
          items[1] = tmp2;
          const intl = isFabricResult(closure_2[43]).intl;
          const obj2 = {};
          let num2 = 0;
          if (null != closure_38) {
            num2 = closure_38;
          }
          obj2.orbAmount = num2;
          items[2] = intl.format(isFabricResult(closure_2[43]).t.nLXlh+, obj2);
          obj.children = items;
          return closure_13(React.Fragment, obj, "balance");
        };
        formatResult = format(_0IUT4Y, obj7);
      } else {
        obj7.rewardWithArticleHook = function rewardWithArticleHook() {
          return closure_12;
        };
        formatResult = format(_0IUT4Y, obj7);
      }
    }
  }, items9);
  if (isQuestExpiredResult) {
    tmp55 = tmp26;
  }
  if (tmp55) {
    tmp55 = !tmp28;
  }
  let formatToPlainStringResult1 = questDescription;
  if (tmp55) {
    const intl2 = arg1(dependencyMap[43]).intl;
    const obj1 = { date: questFormattedDate };
    formatToPlainStringResult1 = intl2.formatToPlainString(arg1(dependencyMap[43]).t.l1jCM/, obj1);
  }
  let obj37 = arg1(dependencyMap[28]);
  let tmp59 = "" !== obj37.getCtaLink(quest.config);
  const items10 = [quest.id, sourceQuestContent];
  const fn = () => {
    const obj = { questId: quest.id, initialStep: callback(QUEST_HOME_MOBILE[53]).VideoQuestModalSteps.WATCH_VIDEO, sourceQuestContent };
    quest(QUEST_HOME_MOBILE[46])(obj);
  };
  // CreateGeneratorClosureLongIndex (0x67)
  callback2 = React.useCallback(fn, items10);
  const items11 = [launchMobileActivity];
  callback3 = React.useCallback(callback(fn), items11);
  obj2 = {
    style: items12,
    onLayout(arg0) {
      if (null != callback) {
        callback(arg0, quest.id);
      }
    }
  };
  const items12 = [tmp5.container, ];
  obj3 = { marginHorizontal: PX_16 - questContent.containerPadding };
  items12[1] = obj3;
  obj4 = { visible: tmp45, glow: true };
  obj5 = { style: items13 };
  const items13 = [tmp5.heroContainer, { height: result }];
  const formatToPlainStringResult = intl.formatToPlainString(arg1(dependencyMap[43]).t.EAYZAr, obj);
  const tmp62 = defaultRewardNameWithArticle;
  obj6 = { source: obj7, style: tmp5.heroImg, onError: callback, accessible: true, accessibilityRole: "image", accessibilityLabel: quest.config.messages.questName };
  obj7 = { uri: memo.url };
  const items14 = [defaultRewardNameWithArticle(importDefault(dependencyMap[56]), obj6), , , ];
  obj8 = { style: tmp5.heroLinearGradientOverlay };
  const tmp64 = importDefault(dependencyMap[55]);
  const tmp65 = closure_7;
  obj8.start = arg1(dependencyMap[58]).VerticalGradient.START;
  obj8.end = arg1(dependencyMap[58]).VerticalGradient.END;
  const items15 = [gradientStart, gradientMid, gradientEnd];
  obj8.colors = items15;
  items14[1] = defaultRewardNameWithArticle(importDefault(dependencyMap[57]), obj8);
  let preview = quest.preview;
  if (preview) {
    obj9 = { style: tmp5.previewBadge };
    obj10 = { INTEGRATION_CREATE: 1393574244, ConstraintReasonCode: 1359020034 };
    const intl3 = arg1(dependencyMap[43]).intl;
    obj10.children = intl3.string(arg1(dependencyMap[43]).t.SKNnqq);
    obj9.children = defaultRewardNameWithArticle(arg1(dependencyMap[59]).Text, obj10);
    preview = defaultRewardNameWithArticle(closure_7, obj9);
  }
  items14[2] = preview;
  obj11 = { style: tmp5.heroFooterContainer };
  obj12 = { style: tmp5.heroFooterLeftContainer };
  const items16 = [defaultRewardNameWithArticle(importDefault(dependencyMap[60]), { assetUrl: questGameLogotypeAssetUrl, onError: callback }), ];
  obj13 = {};
  obj14 = { variant: "text-xs/medium" };
  let str = "text-overlay-light";
  let str2 = "text-overlay-light";
  if (isThemeDarkResult) {
    str2 = "text-muted";
  }
  obj14.color = str2;
  const intl4 = arg1(dependencyMap[43]).intl;
  obj14.children = intl4.string(arg1(dependencyMap[43]).t.VAbKhK);
  const items17 = [defaultRewardNameWithArticle(arg1(dependencyMap[59]).Text, obj14), , ];
  obj15 = { source: importDefault(dependencyMap[62]), style: { <string:1140607356>: "<string:16777479>", <string:1751293292>: "<string:36295491>" }, accessible: true, accessibilityRole: "image" };
  const intl5 = arg1(dependencyMap[43]).intl;
  obj15.accessibilityLabel = intl5.string(arg1(dependencyMap[43]).t.OfMjx9);
  items17[1] = defaultRewardNameWithArticle(closure_6, obj15);
  obj16 = { children: quest.config.messages.gamePublisher };
  items17[2] = defaultRewardNameWithArticle(arg1(dependencyMap[59]).Text, obj16);
  obj13.children = items17;
  items16[1] = closure_13(arg1(dependencyMap[61]).Stack, obj13);
  obj12.children = items16;
  const items18 = [closure_13(closure_7, obj12), ];
  let tmp75Result = !isQuestExpiredResult && !tmp28;
  if (tmp75Result) {
    obj17 = { variant: "text-xs/medium" };
    if (isThemeDarkResult) {
      str = "text-default";
    }
    obj17.color = str;
    const intl6 = arg1(dependencyMap[43]).intl;
    obj18 = { expiryDate: questFormattedDate1 };
    obj17.children = intl6.format(arg1(dependencyMap[43]).t.7D8r4F, obj18);
    tmp75Result = defaultRewardNameWithArticle(arg1(dependencyMap[59]).Text, obj17);
    const tmp75 = defaultRewardNameWithArticle;
  }
  items18[1] = tmp75Result;
  obj11.children = items18;
  items14[3] = closure_13(closure_7, obj11);
  obj5.children = items14;
  const items19 = [closure_13(tmp65, obj5), , ];
  obj19 = { style: tmp5.detailsWrapper };
  obj20 = { style: tmp5.detailsContainer };
  obj21 = { style: tmp5.rewardImgContainer };
  if (tmp4) {
    obj22 = { quest, progress: obj4.useQuestCompletionDetails(quest).completedRatio, size: "sm" };
    let tmp83Result = tmp83(tmp84(tmp85[63]), obj22);
  } else {
    obj23 = { quest };
    tmp83Result = tmp83(tmp84(tmp85[64]), obj23);
  }
  obj21.children = tmp83Result;
  const items20 = [defaultRewardNameWithArticle(closure_7, obj21), ];
  obj24 = { style: tmp5.detailsTextContainer };
  obj25 = { Globe: "png", BUNDLE_PREVIEW_CONFIG: true, getAppIntentScheme: "/assets/modules/video_calls/native/images", SlideInUp: 24, style: tmp5.questName, children: formatToPlainStringResult };
  const items21 = [defaultRewardNameWithArticle(arg1(dependencyMap[59]).Text, obj25), ];
  obj26 = { style: tmp5.bodyContainer };
  obj27 = { style: tmp5.subtitleRow };
  const obj28 = { INTEGRATION_CREATE: 131072.00119209292, ConstraintReasonCode: -293983030121430100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, children: memo1 };
  const items22 = [defaultRewardNameWithArticle(arg1(dependencyMap[59]).Text, obj28), ];
  if (shouldShowBonusOrbsUX) {
    obj29 = { questId: quest.config.id, orbMultiplierEligibility: questOrbMultiplierEligibility };
    shouldShowBonusOrbsUX = defaultRewardNameWithArticle(arg1(dependencyMap[65]).QuestOrbMultiplierPerkPill, obj29);
  }
  items22[1] = shouldShowBonusOrbsUX;
  obj27.children = items22;
  const items23 = [closure_13(closure_7, obj27), ];
  let tmp92 = null != formatToPlainStringResult1;
  if (tmp92) {
    obj30 = { INTEGRATION_CREATE: "<string:3305963521>", ConstraintReasonCode: "<string:671547393>", children: formatToPlainStringResult1 };
    tmp92 = defaultRewardNameWithArticle(arg1(dependencyMap[59]).Text, obj30);
  }
  items23[1] = tmp92;
  obj26.children = items23;
  items21[1] = closure_13(closure_7, obj26);
  obj24.children = items21;
  items20[1] = closure_13(closure_7, obj24);
  obj20.children = items20;
  obj19.children = closure_13(closure_7, obj20);
  items19[1] = defaultRewardNameWithArticle(closure_7, obj19);
  obj31 = { header: null, icon: 8, spacing: importDefault(dependencyMap[9]).space.PX_8, style: tmp5.buttonContainers };
  obj32 = {};
  if (null != questEnrollmentBlockedUntil && !tmp24 && !tmp26 && !tmp28) {
    merged = defaultRewardNameWithArticle;
    merged = arg1;
    merged = dependencyMap;
    obj33 = { Error: true, apply: true, channelId: true, flexDirection: true };
    merged = NOOP;
    obj33.onPress = NOOP;
    const intl7 = arg1(dependencyMap[43]).intl;
    obj33.text = intl7.string(arg1(dependencyMap[43]).t.V293qn);
    const items24 = [defaultRewardNameWithArticle(arg1(dependencyMap[66]).Button, obj33), ];
    obj34 = {
      onPress() {
          let obj = quest(QUEST_HOME_MOBILE[38]);
          obj = { questId: quest.id, questEnrollmentBlockedUntil, sourceQuestContent };
          obj.openLazy(callback(QUEST_HOME_MOBILE[40])(QUEST_HOME_MOBILE[67], QUEST_HOME_MOBILE.paths), "QuestEnrollmentBlockedBottomSheet", obj);
        },
      variant: "tertiary"
    };
    const intl8 = arg1(dependencyMap[43]).intl;
    obj34.text = intl8.string(arg1(dependencyMap[43]).t.vY9GgG);
    items24[1] = defaultRewardNameWithArticle(arg1(dependencyMap[66]).Button, obj34);
    obj32.children = items24;
    merged = obj32;
  } else {
    if (tmp59) {
      tmp59 = !tmp36;
    }
    if (tmp59) {
      tmp59 = !isQuestExpiredResult;
    }
    if (tmp59) {
      tmp59 = !tmp28;
    }
    if (tmp59) {
      tmp59 = !tmp26;
    }
    if (tmp59) {
      obj35 = { style: tmp5.equalWidthContainer };
      merged = arg1;
      merged = dependencyMap;
      const obj36 = { text: arg1(dependencyMap[28]).getExternalCtaLabel(quest), onPress: callback1 };
      obj35.children = defaultRewardNameWithArticle(arg1(dependencyMap[66]).Button, obj36);
      tmp59 = defaultRewardNameWithArticle(closure_7, obj35);
      const obj72 = arg1(dependencyMap[28]);
    }
    const items25 = [tmp59, ];
    merged = defaultRewardNameWithArticle;
    merged = closure_7;
    obj37 = { style: tmp5.equalWidthContainer };
    merged = arg1;
    merged = dependencyMap;
    const obj38 = { grow: true };
    merged = obj38;
    merged = tmp40;
    merged = Object.assign(tmp40);
    obj37.children = defaultRewardNameWithArticle(arg1(dependencyMap[66]).Button, obj38);
    items25[1] = defaultRewardNameWithArticle(closure_7, obj37);
    obj32.children = items25;
    merged = obj32;
  }
  const items26 = [closure_13(closure_14, merged), , , ];
  merged = tmp26;
  if (tmp26) {
    merged = hasWatchVideoTasksResult;
  }
  if (merged) {
    merged = hasWatchVideoOnMobileTasks;
  }
  if (merged) {
    merged = defaultRewardNameWithArticle;
    merged = arg1;
    merged = dependencyMap;
    const obj39 = {};
    const intl9 = arg1(dependencyMap[43]).intl;
    obj39.accessibilityLabel = intl9.string(arg1(dependencyMap[43]).t.YsCuyF);
    merged = importDefault;
    obj39.icon = importDefault(dependencyMap[69]);
    obj39.onPress = callback2;
    obj39.variant = "secondary";
    merged = defaultRewardNameWithArticle(arg1(dependencyMap[68]).IconButton, obj39);
  }
  items26[1] = merged;
  if (tmp26) {
    tmp26 = isMobileActivityQuest;
  }
  if (tmp26) {
    merged = defaultRewardNameWithArticle;
    merged = arg1;
    merged = dependencyMap;
    const obj40 = {};
    const intl10 = arg1(dependencyMap[43]).intl;
    obj40.accessibilityLabel = intl10.string(arg1(dependencyMap[43]).t.CkUzLd);
    merged = importDefault;
    obj40.icon = importDefault(dependencyMap[69]);
    obj40.onPress = callback3;
    obj40.variant = "secondary";
    tmp26 = defaultRewardNameWithArticle(arg1(dependencyMap[68]).IconButton, obj40);
  }
  items26[2] = tmp26;
  items26[3] = defaultRewardNameWithArticle(importDefault(dependencyMap[70]), { quest, showShareLink: !isQuestExpiredResult, location: QuestsExperimentLocations.QUESTS_CARD, sourceQuestContent });
  obj31.children = items26;
  items19[2] = closure_13(arg1(dependencyMap[61]).Stack, obj31);
  obj4.children = items19;
  obj2.children = closure_13(tmp64, obj4);
  return tmp62(arg1(dependencyMap[54]).Card, obj2);
});
const result3 = arg1(dependencyMap[71]).fileFinishedImporting("modules/quests/native/QuestCard.tsx");

export const ESTIMATED_CARD_HEIGHT = 348;
export const QuestCard = memoResult;
