// Module ID: 10924
// Function ID: 84883
// Name: useHandleRedemptionLinkClick
// Dependencies: [5, 57, 31, 9444, 4979, 10925, 10468, 9449, 9450, 9451, 6970, 6969, 3821, 2]
// Exports: useClaimOrFetchRewardCode, useClaimRewardCodePrimaryCtaClickHandler

// Module 10924 (useHandleRedemptionLinkClick)
import useTrackQuestEventWithImpression from "useTrackQuestEventWithImpression";
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
function useHandleRedemptionLinkClick(quest) {
  quest = quest.quest;
  const redemptionLink = quest.redemptionLink;
  const questContent = quest.questContent;
  const questContentPosition = quest.questContentPosition;
  const sourceQuestContent = quest.sourceQuestContent;
  const trackQuestContentClickedWithImpression = quest(questContent[5]).useTrackQuestContentClickedWithImpression();
  let obj = quest(questContent[5]);
  const questImpressionId = quest(questContent[6]).useQuestImpressionId();
  const items = [quest.id, questContent, questContentPosition, sourceQuestContent, trackQuestContentClickedWithImpression, questImpressionId, redemptionLink];
  return trackQuestContentClickedWithImpression.useCallback(() => {
    if (null != redemptionLink) {
      if (obj7.shouldMigrateToAdAnalyticsInterface(quest(questContent[7]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_reward_code_redemption_link")) {
        let obj = { type: quest(questContent[9]).AdUserActionType.CLICK_INTERNAL, adCreativeType: quest(questContent[10]).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: quest(questContent[11]).QuestContentCTA.REDEEM_REWARD, surfaceId: questContent, sourceQuestContent, impressionId: questImpressionId, questContentPosition };
        quest(questContent[8]).captureAdUserAction(obj);
        const obj3 = quest(questContent[8]);
        obj = { type: quest(questContent[9]).AdUserActionType.CLICK_INTERNAL, adCreativeType: quest(questContent[10]).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: quest(questContent[11]).QuestContentCTA.VISIT_REDEMPTION_LINK, surfaceId: questContent, sourceQuestContent, impressionId: questImpressionId, questContentPosition };
        quest(questContent[8]).captureAdUserAction(obj);
        const obj5 = quest(questContent[8]);
      } else {
        obj = { questId: quest.id, questContent, questContentCTA: quest(questContent[11]).QuestContentCTA.REDEEM_REWARD, questContentPosition, sourceQuestContent };
        trackQuestContentClickedWithImpression(obj);
        const obj1 = { questId: quest.id, questContent, questContentCTA: quest(questContent[11]).QuestContentCTA.VISIT_REDEMPTION_LINK, questContentPosition, sourceQuestContent };
        trackQuestContentClickedWithImpression(obj1);
      }
      redemptionLink(questContent[12])(redemptionLink);
      obj7 = quest(questContent[7]);
    }
  }, items);
}
const result = require("result").fileFinishedImporting("modules/quests/hooks/RewardCodeClaimHooks.tsx");

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
  const claimCode = preview.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = quest(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), []);
  const fetchCode = preview.useCallback((arg0) => {
    const questRewardCode = isClaimingReward(questContent[3]).fetchQuestRewardCode(arg0);
  }, []);
  const items = [claimCode, fetchCode, hasError, isClaimingReward, first1, isFetchingRewardCode, questContent, quest, rewardCode, preview];
  const effect = preview.useEffect(() => {
    let tmp = true === preview;
    if (!tmp) {
      tmp = null != rewardCode;
    }
    if (!tmp) {
      tmp = hasError;
    }
    if (!tmp) {
      tmp = isClaimingReward;
    }
    if (!tmp) {
      tmp = first1;
    }
    if (!tmp) {
      tmp = isFetchingRewardCode;
    }
    if (!tmp) {
      setHasError(false);
      const userStatus = quest.userStatus;
      let claimedAt;
      if (null != userStatus) {
        claimedAt = userStatus.claimedAt;
      }
      if (null == claimedAt) {
        claimCode(quest.id, isClaimingReward(questContent[4]).QuestRewardCodePlatforms.CROSS_PLATFORM, questContent);
      } else {
        const userStatus2 = quest.userStatus;
        let claimedAt1;
        if (null != userStatus2) {
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
export { useHandleRedemptionLinkClick };
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
    GET_REWARD_CODE = claimCode(hasError[11]).QuestContentCTA.GET_REWARD_CODE;
  }
  const questContentPosition = claimCode.questContentPosition;
  const redemptionLink = claimCode.redemptionLink;
  const sourceQuestContent = claimCode.sourceQuestContent;
  const trackQuestContentClickedWithImpression = claimCode(hasError[5]).useTrackQuestContentClickedWithImpression();
  let obj = claimCode(hasError[5]);
  const questImpressionId = claimCode(hasError[6]).useQuestImpressionId();
  const tmp5 = GET_REWARD_CODE(claimCode);
  let closure_12 = tmp5;
  const items = [claimCode, fetchCode, hasError, onDismiss, , , , , , , , , , ];
  ({ id: arr[4], userStatus } = quest);
  let claimedAt;
  if (null != userStatus) {
    claimedAt = userStatus.claimedAt;
  }
  items[5] = claimedAt;
  items[6] = questContent;
  items[7] = GET_REWARD_CODE;
  items[8] = questContentPosition;
  items[9] = trackQuestContentClickedWithImpression;
  items[10] = questImpressionId;
  items[11] = redemptionLink;
  items[12] = sourceQuestContent;
  items[13] = tmp5;
  return questContent.useCallback(() => {
    if (hasError) {
      const userStatus = quest.userStatus;
      let claimedAt;
      if (null != userStatus) {
        claimedAt = userStatus.claimedAt;
      }
      if (null != claimedAt) {
        fetchCode(quest.id);
      } else {
        claimCode(quest.id, claimCode(hasError[4]).QuestRewardCodePlatforms.CROSS_PLATFORM, questContent);
        if (obj4.shouldMigrateToAdAnalyticsInterface(claimCode(hasError[7]).AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_reward_code_primary_cta")) {
          let obj = { type: claimCode(hasError[9]).AdUserActionType.CLICK_INTERNAL, adCreativeType: claimCode(hasError[10]).AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: GET_REWARD_CODE, surfaceId: questContent, sourceQuestContent, impressionId: questImpressionId, questContentPosition };
          claimCode(hasError[8]).captureAdUserAction(obj);
          const obj2 = claimCode(hasError[8]);
        } else {
          obj = { questId: quest.id, questContent, questContentCTA: GET_REWARD_CODE, questContentPosition, sourceQuestContent };
          trackQuestContentClickedWithImpression(obj);
        }
        obj4 = claimCode(hasError[7]);
      }
    } else {
      if (null != redemptionLink) {
        tmp5();
      }
      onDismiss();
    }
  }, items);
};
