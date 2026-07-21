// Module ID: 10912
// Function ID: 84808
// Name: QuestRewardCodeClaimBottomSheet
// Dependencies: []
// Exports: default

// Module 10912 (QuestRewardCodeClaimBottomSheet)
function QuestRewardCodeClaimBottomSheet(quest) {
  let claimCode;
  let fetchCode;
  let isClaimingReward;
  let isFetchingRewardCode;
  let questContentPosition;
  let sourceQuestContent;
  quest = quest.quest;
  const arg1 = quest;
  const questContent = quest.questContent;
  let memo;
  ({ questContentPosition, sourceQuestContent } = quest);
  const tmp = callback2(importDefault(dependencyMap[7])().bottom);
  let obj = arg1(dependencyMap[8]);
  const items = [closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ rewardCode: closure_6.getRewardCode(quest.id), isFetchingRewardCode: closure_6.isFetchingRewardCode(quest.id), isClaimingReward: closure_6.isClaimingReward(quest.id) }));
  const rewardCode = stateFromStoresObject.rewardCode;
  const importDefault = rewardCode;
  ({ isFetchingRewardCode, isClaimingReward } = stateFromStoresObject);
  let obj1 = arg1(dependencyMap[9]);
  obj = { isClaimingReward, isFetchingRewardCode, quest, questContent, rewardCode };
  const claimOrFetchRewardCode = obj1.useClaimOrFetchRewardCode(obj);
  const hasError = claimOrFetchRewardCode.hasError;
  const dependencyMap = hasError;
  const items1 = [hasError];
  ({ claimCode, fetchCode } = claimOrFetchRewardCode);
  const effect = React.useEffect(() => {
    if (hasError) {
      let obj = rewardCode(hasError[10]);
      obj = { key: "CLAIM_QUEST_REWARD_ERROR" };
      const intl = quest(hasError[11]).intl;
      obj.content = intl.string(quest(hasError[11]).t.CKsXk3);
      obj.icon = rewardCode(hasError[12]);
      obj.open(obj);
      rewardCode(hasError[13]).hideActionSheet();
      const obj3 = rewardCode(hasError[13]);
    }
  }, items1);
  let obj3 = arg1(dependencyMap[14]);
  const result = obj3.isTieredRewardCodeQuest({ quest });
  const React = result;
  const items2 = [result, quest, ];
  let tier;
  if (null != rewardCode) {
    tier = rewardCode.tier;
  }
  items2[2] = tier;
  memo = React.useMemo(() => {
    const getRewardCodeQuestReward = quest(hasError[14]).getRewardCodeQuestReward;
    const obj = { quest };
    if (result) {
      let tier;
      if (null != rewardCode) {
        tier = rewardCode.tier;
      }
      obj.idx = tier;
      let rewardCodeQuestReward = getRewardCodeQuestReward(obj);
    } else {
      obj.idx = 0;
      rewardCodeQuestReward = getRewardCodeQuestReward(obj);
    }
    return rewardCodeQuestReward;
  }, items2);
  const items3 = [memo, rewardCode];
  const memo1 = React.useMemo(() => {
    let redemptionLink;
    if (null != memo) {
      redemptionLink = memo.redemptionLink;
    }
    if (null != redemptionLink) {
      if ("" !== memo.redemptionLink) {
        let code;
        if (null != rewardCode) {
          code = rewardCode.code;
        }
        if (null != code) {
          if ("" !== rewardCode.code) {
            const _encodeURIComponent = encodeURIComponent;
            redemptionLink = memo.redemptionLink.replace(closure_7, encodeURIComponent(rewardCode.code));
            const str2 = memo.redemptionLink;
          }
          return redemptionLink;
        }
        redemptionLink = memo.redemptionLink;
      }
    }
  }, items3);
  let obj4 = arg1(dependencyMap[9]);
  obj = { claimCode, fetchCode, hasError, onDismiss: importDefault(dependencyMap[13]).hideActionSheet, quest, questContent, questContentPosition, redemptionLink: memo1, sourceQuestContent };
  const items4 = [rewardCode];
  const callback = React.useCallback(() => {
    if (null != rewardCode) {
      quest(hasError[15]).copy(rewardCode.code, () => {
        let obj = callback2(closure_2[10]);
        obj = { key: "TOAST_QUEST_REWARD_CODE_COPIED" };
        const intl = callback(closure_2[11]).intl;
        obj.content = intl.string(callback(closure_2[11]).t.MSaeTe);
        obj.icon = function icon() {
          return callback2(callback(closure_2[16]).CopyIcon, {});
        };
        return obj.open(obj);
      });
      const obj = quest(hasError[15]);
    }
  }, items4);
  let obj6 = arg1(dependencyMap[17]);
  const rewardCodeRedemptionInstructions = obj6.getRewardCodeRedemptionInstructions({ quest, rewardCode });
  if (!isFetchingRewardCode) {
    isFetchingRewardCode = isClaimingReward;
  }
  if (!isFetchingRewardCode) {
    let code;
    if (null != rewardCode) {
      code = rewardCode.code;
    }
    isFetchingRewardCode = null == code;
  }
  obj1 = {};
  const obj2 = {};
  const intl = arg1(dependencyMap[11]).intl;
  obj2.title = intl.string(arg1(dependencyMap[11]).t.srzsU2);
  obj1.header = callback(arg1(dependencyMap[19]).BottomSheetTitleHeader, obj2);
  obj1.startExpanded = true;
  obj3 = { style: tmp.wrapper };
  obj4 = {};
  let tmp19 = null != rewardCode;
  if (tmp19) {
    tmp19 = null != rewardCodeRedemptionInstructions;
  }
  if (tmp19) {
    const obj5 = { delete: null, dispatch: 1, raw: 1, style: tmp.redemptionInstructions };
    let obj12 = importDefault(dependencyMap[21]);
    obj6 = { allowLinks: true };
    obj5.children = obj12.parse(rewardCodeRedemptionInstructions, true, obj6);
    tmp19 = callback(arg1(dependencyMap[20]).Text, obj5);
  }
  const items5 = [tmp19, ];
  const obj7 = {};
  const obj8 = {};
  let code1;
  if (null != rewardCode) {
    code1 = rewardCode.code;
  }
  obj8.style = null == code1 && tmp.codeCopyWrapperLoading;
  const obj9 = { hasIcons: false };
  const obj10 = {};
  let code2;
  if (null != rewardCode) {
    code2 = rewardCode.code;
  }
  obj10.label = code2;
  let code3;
  if (null != rewardCode) {
    code3 = rewardCode.code;
  }
  let tmp32 = null != code3;
  if (tmp32) {
    const obj11 = { IconComponent: arg1(dependencyMap[16]).CopyIcon };
    tmp32 = callback(arg1(dependencyMap[23]).TableRow.Icon, obj11);
  }
  obj10.trailing = tmp32;
  let code4;
  if (null != rewardCode) {
    code4 = rewardCode.code;
  }
  let tmp37;
  if (null != code4) {
    tmp37 = callback;
  }
  obj10.onPress = tmp37;
  obj9.children = callback(arg1(dependencyMap[23]).TableRow, obj10);
  obj8.children = callback(arg1(dependencyMap[22]).TableRowGroup, obj9);
  const items6 = [callback(closure_5, obj8), ];
  let code5;
  if (null != rewardCode) {
    code5 = rewardCode.code;
  }
  let tmp39 = null == code5;
  if (tmp39) {
    obj12 = { style: tmp.claimingIndicator, size: 24 };
    tmp39 = callback(memo, obj12);
  }
  items6[1] = tmp39;
  obj7.children = items6;
  items5[1] = closure_9(closure_5, obj7);
  obj4.children = items5;
  const items7 = [closure_9(closure_5, obj4), ];
  const obj13 = { style: tmp.footer };
  const obj14 = { disabled: isFetchingRewardCode, onPress: obj4.useClaimRewardCodePrimaryCtaClickHandler(obj), grow: true };
  if (null != memo1) {
    if ("" !== memo1) {
      const intl3 = arg1(dependencyMap[11]).intl;
      let stringResult = intl3.string(arg1(dependencyMap[11]).t.+zx47d);
    }
    obj14.text = stringResult;
    obj13.children = callback(tmp45, obj14);
    items7[1] = callback(closure_5, obj13);
    obj3.children = items7;
    obj1.children = closure_9(closure_5, obj3);
    return callback(arg1(dependencyMap[18]).BottomSheet, obj1);
  }
  const intl2 = arg1(dependencyMap[11]).intl;
  stringResult = intl2.string(arg1(dependencyMap[11]).t.23SS+z);
}
let closure_3 = importAll(dependencyMap[0]);
({ ActivityIndicator: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
const REWARD_CODE_PLACEHOLDER = arg1(dependencyMap[3]).REWARD_CODE_PLACEHOLDER;
const tmp2 = arg1(dependencyMap[1]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
let closure_10 = arg1(dependencyMap[5]).createStyles((paddingBottom) => {
  let obj = {};
  obj = { display: "flex", paddingHorizontal: importDefault(dependencyMap[6]).space.PX_16, gap: importDefault(dependencyMap[6]).space.PX_24 };
  obj.wrapper = obj;
  obj = { paddingBottom };
  obj.footer = obj;
  obj.claimingIndicator = {};
  obj.codeCopyWrapperLoading = { opacity: 0.5 };
  obj.redemptionInstructions = { marginBottom: 24 };
  return obj;
});
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/quests/native/QuestRewardCodeClaimBottomSheet.native.tsx");

export default function QuestRewardCodeClaimBottomSheetConnected(questContentPosition) {
  let questContent;
  ({ questId: closure_0, questContent } = questContentPosition);
  const importDefault = questContent;
  questContentPosition = questContentPosition.questContentPosition;
  const dependencyMap = questContentPosition;
  const sourceQuestContent = questContentPosition.sourceQuestContent;
  let closure_3 = sourceQuestContent;
  let obj = arg1(dependencyMap[8]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => quest.getQuest(closure_0));
  if (null == stateFromStores) {
    importDefault(dependencyMap[13]).hideActionSheet();
    let tmp5 = null;
    const obj3 = importDefault(dependencyMap[13]);
  } else {
    obj = {
      overrideVisibility: true,
      questOrQuests: stateFromStores,
      questContent,
      questContentPosition,
      sourceQuestContent,
      children() {
          return callback(closure_11, { quest: stateFromStores, questContent, questContentPosition, sourceQuestContent });
        }
    };
    tmp5 = callback(arg1(dependencyMap[25]).QuestContentImpressionTrackerNative, obj);
  }
  return tmp5;
};
