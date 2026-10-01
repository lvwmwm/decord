// Module ID: 10748
// Function ID: 10749
// Name: RewardCodeClaimHooks
// Dependencies: [5, 32, 19, 10683, 5759, 10749, 10711, 7153, 7142, 7152, 5763, 7141, 4519, 2]
// Exports: useClaimOrFetchRewardCode, useClaimRewardCodePrimaryCtaClickHandler, useHandleRedemptionLinkClick

// Module 10748 (RewardCodeClaimHooks)
import QuestTypes from "QuestTypes" /* 5759 */;
import AdCreativeType from "AdCreativeType" /* 5763 */;
import captureAdUserAction3 from "captureAdUserAction" /* 7142 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 7152 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 7153 */;
import QuestActionCreators from "QuestActionCreators" /* 10683 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c4, c7;

const result = size.fileFinishedImporting("modules/quests/hooks/RewardCodeClaimHooks.tsx");

export const useClaimOrFetchRewardCode = function useClaimOrFetchRewardCode(isClaimingReward) {
  isClaimingReward = isClaimingReward.isClaimingReward;
  const isFetchingRewardCode = isClaimingReward.isFetchingRewardCode;
  const questContent = isClaimingReward.questContent;
  const quest = isClaimingReward.quest;
  const rewardCode = isClaimingReward.rewardCode;
  const preview = isClaimingReward.preview;
  let tmp = rewardCode(preview.useState(false), 2);
  const hasError = tmp[0];
  const setHasError = tmp[1];
  const tmp4 = rewardCode(preview.useState(false), 2);
  const first1 = tmp4[0];
  let closure_9 = tmp4[1];
  const useCallback = preview.useCallback;
  let closure_0 = quest(function*(arg0, value, arg2) {
    let obj2;
    let v3;
    closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c6;
      try {
        c7 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_3 = tmp;
            c6 = 1;
            closure_1_9(true);
            c4 = 2;
            c7 = 1;
            const obj5 = { value: obj2.claimQuestReward(closure_0, closure_1, closure_2), done: false };
            obj2 = closure_0(questContent[3]);
            return obj5;
          }
        } else {
          if (1 === tmp4) {
            c6 = 0;
            c7(true);
            closure_1_9(false);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c7 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c7(false);
            closure_1_9(false);
            c6 = 0;
          }
          c7 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp23) {
        let closure_5 = tmp23;
        if (0 === c6) {
          c7 = 3;
          throw tmp23;
        } else {
          c4 = 1;
        }
      }
    }
  });
  const claimCode = useCallback(function() {
    return closure_0(...arguments);
  }, []);
  const fetchCode = preview.useCallback((arg0) => {
    try {
      const obj = QuestActionCreators;
      const questRewardCode = obj.fetchQuestRewardCode(arg0);
    } catch (err) {
      setHasError(true);
    }
  }, []);
  const items = [claimCode, fetchCode, hasError, isClaimingReward, first1, isFetchingRewardCode, questContent, quest, rewardCode, preview];
  const effect = preview.useEffect(() => {
    const tmp = true === preview || null != rewardCode || hasError || isClaimingReward || first1 || isFetchingRewardCode;
    if (!tmp) {
      setHasError(false);
      const userStatus = quest.userStatus;
      let claimedAt;
      if (userStatus != null) {
        claimedAt = userStatus.claimedAt;
      }
      if (null == claimedAt) {
        claimCode(quest.id, QuestTypes.QuestRewardCodePlatforms.CROSS_PLATFORM, questContent);
      } else {
        const userStatus2 = tmp6.userStatus;
        let claimedAt1;
        if (userStatus2 != null) {
          claimedAt1 = userStatus2.claimedAt;
        }
        if (null != claimedAt1) {
          fetchCode(quest.id);
        }
      }
    }
  }, items);
  return { claimCode, fetchCode, hasError, setHasError };
};
export const useHandleRedemptionLinkClick = function useHandleRedemptionLinkClick(quest) {
  quest = quest.quest;
  const redemptionLink = quest.redemptionLink;
  const questContent = quest.questContent;
  const questContentPosition = quest.questContentPosition;
  const sourceQuestContent = quest.sourceQuestContent;
  const obj = quest(questContent[5]);
  const trackQuestContentClickedWithImpression = obj.useTrackQuestContentClickedWithImpression();
  const obj2 = quest(questContent[6]);
  const questImpressionId = obj2.useQuestImpressionId();
  const items = [quest.id, questContent, questContentPosition, sourceQuestContent, trackQuestContentClickedWithImpression, questImpressionId, redemptionLink];
  return trackQuestContentClickedWithImpression.useCallback(() => {
    if (null != redemptionLink2) {
      const obj5 = claimCode(hasError[7]);
      if (obj5.shouldMigrateToAdAnalyticsInterface(claimCode(hasError[7]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_reward_code_redemption_link")) {
        const obj2 = { type: claimCode(hasError[9]).AdUserActionType.CLICK_INTERNAL, adCreativeType: claimCode(hasError[10]).AdCreativeType.QUEST, adCreativeId: quest2.id, questContentCTA: claimCode(hasError[11]).QuestContentCTA.REDEEM_REWARD, surfaceId: questContent2, sourceQuestContent: sourceQuestContent2, impressionId: questImpressionId1, questContentPosition: questContentPosition2 };
        const captureAdUserAction = claimCode(hasError[8]).captureAdUserAction;
        claimCode(hasError[8]);
        captureAdUserAction(obj2);
        const obj3 = { type: claimCode(hasError[9]).AdUserActionType.CLICK_INTERNAL, adCreativeType: claimCode(hasError[10]).AdCreativeType.QUEST, adCreativeId: quest2.id, questContentCTA: claimCode(hasError[11]).QuestContentCTA.VISIT_REDEMPTION_LINK, surfaceId: questContent2, sourceQuestContent: sourceQuestContent2, impressionId: questImpressionId1, questContentPosition: questContentPosition2 };
        const captureAdUserAction2 = claimCode(hasError[8]).captureAdUserAction;
        claimCode(hasError[8]);
        captureAdUserAction2(obj3);
      } else {
        const obj = { questId: quest2.id, questContent: questContent2, questContentCTA: claimCode(hasError[11]).QuestContentCTA.REDEEM_REWARD, questContentPosition: questContentPosition2, sourceQuestContent: sourceQuestContent2 };
        trackQuestContentClickedWithImpression1(obj);
        const obj4 = { questId: quest2.id, questContent: questContent2, questContentCTA: claimCode(hasError[11]).QuestContentCTA.VISIT_REDEMPTION_LINK, questContentPosition: questContentPosition2, sourceQuestContent: sourceQuestContent2 };
        trackQuestContentClickedWithImpression1(obj4);
      }
      fetchCode(hasError[12])(tmp);
    }
  }, items);
};
export const useClaimRewardCodePrimaryCtaClickHandler = function useClaimRewardCodePrimaryCtaClickHandler(claimCode) {
  let userStatus;
  claimCode = claimCode.claimCode;
  const fetchCode = claimCode.fetchCode;
  const hasError = claimCode.hasError;
  const onDismiss = claimCode.onDismiss;
  const quest = claimCode.quest;
  const questContent = claimCode.questContent;
  let GET_REWARD_CODE = claimCode.questContentCTA;
  if (undefined === GET_REWARD_CODE) {
    let tmp = claimCode;
    GET_REWARD_CODE = claimCode(hasError[11]).QuestContentCTA.GET_REWARD_CODE;
  }
  const questContentPosition = claimCode.questContentPosition;
  const redemptionLink = claimCode.redemptionLink;
  const sourceQuestContent = claimCode.sourceQuestContent;
  let obj = claimCode(hasError[5]);
  const trackQuestContentClickedWithImpression = obj.useTrackQuestContentClickedWithImpression();
  let obj2 = claimCode(hasError[6]);
  const questImpressionId = obj2.useQuestImpressionId();
  const quest2 = claimCode.quest;
  const redemptionLink2 = claimCode.redemptionLink;
  const questContent2 = claimCode.questContent;
  const questContentPosition2 = claimCode.questContentPosition;
  const sourceQuestContent2 = claimCode.sourceQuestContent;
  let obj3 = claimCode(hasError[5]);
  const trackQuestContentClickedWithImpression1 = obj3.useTrackQuestContentClickedWithImpression();
  let obj4 = claimCode(hasError[6]);
  const questImpressionId1 = obj4.useQuestImpressionId();
  const items = [quest2.id, questContent2, questContentPosition2, sourceQuestContent2, trackQuestContentClickedWithImpression1, questImpressionId1, redemptionLink2];
  const callback = questContent.useCallback(() => {
    if (null != redemptionLink2) {
      const obj5 = claimCode(hasError[7]);
      if (obj5.shouldMigrateToAdAnalyticsInterface(claimCode(hasError[7]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_reward_code_redemption_link")) {
        const obj2 = { type: claimCode(hasError[9]).AdUserActionType.CLICK_INTERNAL, adCreativeType: claimCode(hasError[10]).AdCreativeType.QUEST, adCreativeId: quest2.id, questContentCTA: claimCode(hasError[11]).QuestContentCTA.REDEEM_REWARD, surfaceId: questContent2, sourceQuestContent: sourceQuestContent2, impressionId: questImpressionId1, questContentPosition: questContentPosition2 };
        const captureAdUserAction = claimCode(hasError[8]).captureAdUserAction;
        claimCode(hasError[8]);
        captureAdUserAction(obj2);
        const obj3 = { type: claimCode(hasError[9]).AdUserActionType.CLICK_INTERNAL, adCreativeType: claimCode(hasError[10]).AdCreativeType.QUEST, adCreativeId: quest2.id, questContentCTA: claimCode(hasError[11]).QuestContentCTA.VISIT_REDEMPTION_LINK, surfaceId: questContent2, sourceQuestContent: sourceQuestContent2, impressionId: questImpressionId1, questContentPosition: questContentPosition2 };
        const captureAdUserAction2 = claimCode(hasError[8]).captureAdUserAction;
        claimCode(hasError[8]);
        captureAdUserAction2(obj3);
      } else {
        const obj = { questId: quest2.id, questContent: questContent2, questContentCTA: claimCode(hasError[11]).QuestContentCTA.REDEEM_REWARD, questContentPosition: questContentPosition2, sourceQuestContent: sourceQuestContent2 };
        trackQuestContentClickedWithImpression1(obj);
        const obj4 = { questId: quest2.id, questContent: questContent2, questContentCTA: claimCode(hasError[11]).QuestContentCTA.VISIT_REDEMPTION_LINK, questContentPosition: questContentPosition2, sourceQuestContent: sourceQuestContent2 };
        trackQuestContentClickedWithImpression1(obj4);
      }
      fetchCode(hasError[12])(tmp);
    }
  }, items);
  const items1 = [claimCode, fetchCode, hasError, onDismiss, , , , , , , , , , ];
  ({ id: arr2[4], userStatus } = quest);
  let claimedAt;
  const useCallback = questContent.useCallback;
  if (userStatus != null) {
    claimedAt = userStatus.claimedAt;
  }
  items1[5] = claimedAt;
  items1[6] = questContent;
  items1[7] = GET_REWARD_CODE;
  items1[8] = questContentPosition;
  items1[9] = trackQuestContentClickedWithImpression;
  items1[10] = questImpressionId;
  items1[11] = redemptionLink;
  items1[12] = sourceQuestContent;
  items1[13] = callback;
  return useCallback(() => {
    const tmp = hasError;
    if (tmp) {
      const userStatus = quest.userStatus;
      let claimedAt;
      if (userStatus != null) {
        claimedAt = userStatus.claimedAt;
      }
      if (null != claimedAt) {
        fetchCode(quest.id);
      } else {
        claimCode(quest.id, QuestTypes.QuestRewardCodePlatforms.CROSS_PLATFORM, questContent);
        const obj3 = AdAnalyticsInterfaceExperiment;
        if (obj3.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_reward_code_primary_cta")) {
          const obj2 = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: GET_REWARD_CODE, surfaceId: questContent, sourceQuestContent, impressionId: questImpressionId, questContentPosition };
          const captureAdUserAction = captureAdUserAction3.captureAdUserAction;
          captureAdUserAction3;
          captureAdUserAction(obj2);
        } else {
          const obj = { questId: quest.id, questContent, questContentCTA: GET_REWARD_CODE, questContentPosition, sourceQuestContent };
          trackQuestContentClickedWithImpression(obj);
        }
      }
    } else {
      if (null != redemptionLink) {
        callback();
      }
      onDismiss();
    }
  }, items1);
};
