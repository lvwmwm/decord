// Module ID: 14643
// Function ID: 14644
// Name: RewardCodeClaimHooks
// Dependencies: [5, 32, 19, 9662, 6778, 9697, 9664, 9667, 6782, 7864, 5700, 2]
// Exports: useClaimOrFetchRewardCode, useClaimRewardCodePrimaryCtaClickHandler, useHandleRedemptionLinkClick

// Module 14643 (RewardCodeClaimHooks)
import QuestTypes from "QuestTypes" /* 6778 */;
import AdCreativeType from "AdCreativeType" /* 6782 */;
import QuestActionCreators from "QuestActionCreators" /* 9662 */;
import captureAdUserAction3 from "captureAdUserAction" /* 9664 */;
import captureAdUserActionTypes from "captureAdUserActionTypes" /* 9667 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c4, c7;

const result = size.fileFinishedImporting("modules/quests/hooks/RewardCodeClaimHooks.tsx");

export function useClaimOrFetchRewardCode(isClaimingReward) {
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
}
export function useHandleRedemptionLinkClick(quest) {
  quest = quest.quest;
  const redemptionLink = quest.redemptionLink;
  const questContent = quest.questContent;
  const questContentPosition = quest.questContentPosition;
  const sourceQuestContent = quest.sourceQuestContent;
  const obj = quest(questContent[5]);
  const getQuestImpressionId = obj.useGetQuestImpressionId();
  const items = [quest.id, questContent, questContentPosition, sourceQuestContent, getQuestImpressionId, redemptionLink];
  return getQuestImpressionId.useCallback(() => {
    if (null != redemptionLink2) {
      const obj = { type: claimCode(hasError[7]).AdUserActionType.CLICK_INTERNAL, adCreativeType: claimCode(hasError[8]).AdCreativeType.QUEST, adCreativeId: quest2.id, questContentCTA: claimCode(hasError[9]).QuestContentCTA.REDEEM_REWARD, surfaceId: questContent2, sourceQuestContent: sourceQuestContent2, impressionId: getQuestImpressionId1(), questContentPosition: questContentPosition2 };
      const captureAdUserAction = claimCode(hasError[6]).captureAdUserAction;
      claimCode(hasError[6]);
      captureAdUserAction(obj);
      const obj2 = { type: claimCode(hasError[7]).AdUserActionType.CLICK_INTERNAL, adCreativeType: claimCode(hasError[8]).AdCreativeType.QUEST, adCreativeId: quest2.id, questContentCTA: claimCode(hasError[9]).QuestContentCTA.VISIT_REDEMPTION_LINK, surfaceId: questContent2, sourceQuestContent: sourceQuestContent2, impressionId: getQuestImpressionId1(), questContentPosition: questContentPosition2 };
      const captureAdUserAction2 = claimCode(hasError[6]).captureAdUserAction;
      claimCode(hasError[6]);
      captureAdUserAction2(obj2);
      fetchCode(hasError[10])(tmp);
    }
  }, items);
}
export function useClaimRewardCodePrimaryCtaClickHandler(claimCode) {
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
    GET_REWARD_CODE = claimCode(hasError[9]).QuestContentCTA.GET_REWARD_CODE;
  }
  const questContentPosition = claimCode.questContentPosition;
  const redemptionLink = claimCode.redemptionLink;
  const sourceQuestContent = claimCode.sourceQuestContent;
  let obj = claimCode(hasError[5]);
  const getQuestImpressionId = obj.useGetQuestImpressionId();
  const quest2 = claimCode.quest;
  const redemptionLink2 = claimCode.redemptionLink;
  const questContent2 = claimCode.questContent;
  const questContentPosition2 = claimCode.questContentPosition;
  const sourceQuestContent2 = claimCode.sourceQuestContent;
  let obj2 = claimCode(hasError[5]);
  const getQuestImpressionId1 = obj2.useGetQuestImpressionId();
  const items = [quest2.id, questContent2, questContentPosition2, sourceQuestContent2, getQuestImpressionId1, redemptionLink2];
  const callback = questContent.useCallback(() => {
    if (null != redemptionLink2) {
      const obj = { type: claimCode(hasError[7]).AdUserActionType.CLICK_INTERNAL, adCreativeType: claimCode(hasError[8]).AdCreativeType.QUEST, adCreativeId: quest2.id, questContentCTA: claimCode(hasError[9]).QuestContentCTA.REDEEM_REWARD, surfaceId: questContent2, sourceQuestContent: sourceQuestContent2, impressionId: getQuestImpressionId1(), questContentPosition: questContentPosition2 };
      const captureAdUserAction = claimCode(hasError[6]).captureAdUserAction;
      claimCode(hasError[6]);
      captureAdUserAction(obj);
      const obj2 = { type: claimCode(hasError[7]).AdUserActionType.CLICK_INTERNAL, adCreativeType: claimCode(hasError[8]).AdCreativeType.QUEST, adCreativeId: quest2.id, questContentCTA: claimCode(hasError[9]).QuestContentCTA.VISIT_REDEMPTION_LINK, surfaceId: questContent2, sourceQuestContent: sourceQuestContent2, impressionId: getQuestImpressionId1(), questContentPosition: questContentPosition2 };
      const captureAdUserAction2 = claimCode(hasError[6]).captureAdUserAction;
      claimCode(hasError[6]);
      captureAdUserAction2(obj2);
      fetchCode(hasError[10])(tmp);
    }
  }, items);
  const items1 = [claimCode, fetchCode, hasError, onDismiss, , , , , , , , , ];
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
  items1[9] = getQuestImpressionId;
  items1[10] = redemptionLink;
  items1[11] = sourceQuestContent;
  items1[12] = callback;
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
        const obj = { type: captureAdUserActionTypes.AdUserActionType.CLICK_INTERNAL, adCreativeType: AdCreativeType.AdCreativeType.QUEST, adCreativeId: quest.id, questContentCTA: GET_REWARD_CODE, surfaceId: questContent, sourceQuestContent, impressionId: getQuestImpressionId(), questContentPosition };
        const captureAdUserAction = captureAdUserAction3.captureAdUserAction;
        captureAdUserAction3;
        captureAdUserAction(obj);
      }
    } else {
      if (null != redemptionLink) {
        callback();
      }
      onDismiss();
    }
  }, items1);
}
