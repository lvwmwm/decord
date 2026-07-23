// Module ID: 10923
// Function ID: 84870
// Name: QuestRewardCodeClaimBottomSheet
// Dependencies: [31, 27, 6942, 4976, 33, 4130, 689, 1557, 566, 10924, 3831, 1212, 9176, 4098, 9463, 5492, 4078, 10926, 5187, 5186, 4126, 4120, 5503, 5165, 4543, 10929, 2]
// Exports: default

// Module 10923 (QuestRewardCodeClaimBottomSheet)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { REWARD_CODE_PLACEHOLDER } from "QuestsExperimentLocations";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_8;
let closure_9;
const require = arg1;
function QuestRewardCodeClaimBottomSheet(quest) {
  let claimCode;
  let fetchCode;
  let isClaimingReward;
  let isFetchingRewardCode;
  let questContentPosition;
  let sourceQuestContent;
  quest = quest.quest;
  const questContent = quest.questContent;
  let memo;
  ({ questContentPosition, sourceQuestContent } = quest);
  const tmp = callback2(rewardCode(hasError[7])().bottom);
  let obj = quest(hasError[8]);
  const items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ rewardCode: outer1_6.getRewardCode(quest.id), isFetchingRewardCode: outer1_6.isFetchingRewardCode(quest.id), isClaimingReward: outer1_6.isClaimingReward(quest.id) }));
  rewardCode = stateFromStoresObject.rewardCode;
  ({ isFetchingRewardCode, isClaimingReward } = stateFromStoresObject);
  let obj1 = quest(hasError[9]);
  obj = { isClaimingReward, isFetchingRewardCode, quest, questContent, rewardCode };
  const claimOrFetchRewardCode = obj1.useClaimOrFetchRewardCode(obj);
  hasError = claimOrFetchRewardCode.hasError;
  const items1 = [hasError];
  ({ claimCode, fetchCode } = claimOrFetchRewardCode);
  const effect = result.useEffect(() => {
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
  let obj3 = quest(hasError[14]);
  result = obj3.isTieredRewardCodeQuest({ quest });
  const items2 = [result, quest, ];
  let tier;
  if (null != rewardCode) {
    tier = rewardCode.tier;
  }
  items2[2] = tier;
  memo = result.useMemo(() => {
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
  const memo1 = result.useMemo(() => {
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
            redemptionLink = memo.redemptionLink.replace(outer1_7, encodeURIComponent(rewardCode.code));
            const str2 = memo.redemptionLink;
          }
          return redemptionLink;
        }
        redemptionLink = memo.redemptionLink;
      }
    }
  }, items3);
  let obj4 = quest(hasError[9]);
  obj = { claimCode, fetchCode, hasError, onDismiss: rewardCode(hasError[13]).hideActionSheet, quest, questContent, questContentPosition, redemptionLink: memo1, sourceQuestContent };
  const items4 = [rewardCode];
  const callback = result.useCallback(() => {
    if (null != rewardCode) {
      quest(hasError[15]).copy(rewardCode.code, () => {
        let obj = rewardCode(hasError[10]);
        obj = { key: "TOAST_QUEST_REWARD_CODE_COPIED" };
        const intl = quest(hasError[11]).intl;
        obj.content = intl.string(quest(hasError[11]).t.MSaeTe);
        obj.icon = function icon() {
          return outer3_8(quest(hasError[16]).CopyIcon, {});
        };
        return obj.open(obj);
      });
      let obj = quest(hasError[15]);
    }
  }, items4);
  let obj6 = quest(hasError[17]);
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
  let intl = quest(hasError[11]).intl;
  obj2.title = intl.string(quest(hasError[11]).t.srzsU2);
  obj1.header = callback(quest(hasError[19]).BottomSheetTitleHeader, obj2);
  obj1.startExpanded = true;
  obj3 = { style: tmp.wrapper };
  obj4 = {};
  let tmp19 = null != rewardCode;
  if (tmp19) {
    tmp19 = null != rewardCodeRedemptionInstructions;
  }
  if (tmp19) {
    const obj5 = { style: tmp.redemptionInstructions, variant: "text-md/normal", color: "text-default" };
    let obj12 = rewardCode(hasError[21]);
    obj6 = { allowLinks: true };
    obj5.children = obj12.parse(rewardCodeRedemptionInstructions, true, obj6);
    tmp19 = callback(quest(hasError[20]).Text, obj5);
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
    const obj11 = { IconComponent: quest(hasError[16]).CopyIcon };
    tmp32 = callback(quest(hasError[23]).TableRow.Icon, obj11);
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
  obj9.children = callback(quest(hasError[23]).TableRow, obj10);
  obj8.children = callback(quest(hasError[22]).TableRowGroup, obj9);
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
      const intl3 = quest(hasError[11]).intl;
      let stringResult = intl3.string(quest(hasError[11]).t["+zx47d"]);
    }
    obj14.text = stringResult;
    obj13.children = callback(tmp45, obj14);
    items7[1] = callback(closure_5, obj13);
    obj3.children = items7;
    obj1.children = closure_9(closure_5, obj3);
    return callback(quest(hasError[18]).BottomSheet, obj1);
  }
  const intl2 = quest(hasError[11]).intl;
  stringResult = intl2.string(quest(hasError[11]).t["23SS+z"]);
}
({ ActivityIndicator: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles((paddingBottom) => {
  let obj = {};
  obj = { display: "flex", paddingHorizontal: importDefault(689).space.PX_16, gap: importDefault(689).space.PX_24 };
  obj.wrapper = obj;
  obj = { paddingBottom };
  obj.footer = obj;
  obj.claimingIndicator = { position: "absolute", left: "50%", top: "50%", marginLeft: -12, marginTop: -12 };
  obj.codeCopyWrapperLoading = { opacity: 0.5 };
  obj.redemptionInstructions = { marginBottom: 24 };
  return obj;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/quests/native/QuestRewardCodeClaimBottomSheet.native.tsx");

export default function QuestRewardCodeClaimBottomSheetConnected(questContentPosition) {
  let questContent;
  let require;
  ({ questId: require, questContent } = questContentPosition);
  questContentPosition = questContentPosition.questContentPosition;
  const sourceQuestContent = questContentPosition.sourceQuestContent;
  let obj = require(questContentPosition[8]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getQuest(closure_0));
  if (null == stateFromStores) {
    questContent(questContentPosition[13]).hideActionSheet();
    let tmp5 = null;
    const obj3 = questContent(questContentPosition[13]);
  } else {
    obj = {
      overrideVisibility: true,
      questOrQuests: stateFromStores,
      questContent,
      questContentPosition,
      sourceQuestContent,
      children() {
          return outer1_8(outer1_11, { quest: stateFromStores, questContent, questContentPosition, sourceQuestContent });
        }
    };
    tmp5 = callback(require(questContentPosition[25]).QuestContentImpressionTrackerNative, obj);
  }
  return tmp5;
};
