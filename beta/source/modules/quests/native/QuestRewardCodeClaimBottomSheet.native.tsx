// Module ID: 10747
// Function ID: 10748
// Name: QuestRewardCodeClaimBottomSheet
// Dependencies: [19, 17, 7116, 5756, 21, 4836, 576, 1613, 504, 10748, 4528, 1115, 5909, 4800, 10694, 6610, 4779, 10750, 6571, 6570, 4832, 4823, 5999, 5917, 5281, 10753, 2]
// Exports: default

// Module 10747 (QuestRewardCodeClaimBottomSheet)
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import QuestConstants from "QuestConstants" /* 5756 */;
import AssetRegistryDefault from "AssetRegistry" /* 5909 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import QuestRewardUtils from "QuestRewardUtils" /* 10694 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import QuestStore from "QuestStore" /* 7116 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
function QuestRewardCodeClaimBottomSheet(quest) {
  let BottomSheetTitleHeader;
  let TableRowGroup;
  let c3;
  let claimCode;
  let fetchCode;
  let intl;
  let isClaimingReward;
  let isFetchingRewardCode;
  let obj13;
  let obj7;
  let questContentPosition;
  let sourceQuestContent;
  let tmp16Result3;
  let tmp26;
  let tmpResult;
  quest = quest.quest;
  const questContent = quest.questContent;
  let rewardCode;
  let hasError;
  react = undefined;
  let memo;
  let tmp = rewardCode;
  ({ questContentPosition, sourceQuestContent } = quest);
  const tmp3 = closure_10(rewardCode(hasError[7])().bottom);
  const tmp4 = quest;
  let obj = quest(hasError[8]);
  const items = [QuestStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { rewardCode: QuestStore.getRewardCode(quest.id), isFetchingRewardCode: QuestStore.isFetchingRewardCode(quest.id), isClaimingReward: QuestStore.isClaimingReward(quest.id) };
    return obj;
  });
  rewardCode = stateFromStoresObject.rewardCode;
  ({ isFetchingRewardCode, isClaimingReward } = stateFromStoresObject);
  let obj2 = quest(hasError[9]);
  const claimOrFetchRewardCode = obj2.useClaimOrFetchRewardCode({ isClaimingReward, isFetchingRewardCode, quest, questContent, rewardCode });
  hasError = claimOrFetchRewardCode.hasError;
  const items1 = [hasError];
  ({ claimCode, fetchCode } = claimOrFetchRewardCode);
  const effect = react.useEffect(() => {
    let intl;
    const tmp = hasError;
    if (tmp) {
      const obj = { key: "CLAIM_QUEST_REWARD_ERROR", content: intl.string(intl4.t.CKsXk3), icon: AssetRegistryDefault };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = intl4.intl;
      open(obj);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    }
  }, items1);
  const obj4 = quest(hasError[14]);
  const result = obj4.isTieredRewardCodeQuest({ quest });
  react = result;
  const items2 = [result, quest, ];
  let tier;
  const useMemo = react.useMemo;
  if (rewardCode != null) {
    tier = rewardCode.tier;
  }
  items2[2] = tier;
  memo = useMemo(() => {
    let rewardCodeQuestReward;
    let tier;
    const getRewardCodeQuestReward = QuestRewardUtils.getRewardCodeQuestReward;
    QuestRewardUtils;
    if (c3) {
      const obj2 = { quest, idx: tier };
      tier = undefined;
      if (rewardCode != null) {
        tier = rewardCode.tier;
      }
      rewardCodeQuestReward = getRewardCodeQuestReward(obj2);
    } else {
      const obj = { quest, idx: 0 };
      rewardCodeQuestReward = getRewardCodeQuestReward(obj);
    }
    return rewardCodeQuestReward;
  }, items2);
  const items3 = [memo, rewardCode];
  const memo1 = obj3.useMemo(() => {
    let redemptionLink1;
    if (memo != null) {
      redemptionLink1 = tmp.redemptionLink;
    }
    if (null != redemptionLink1) {
      if ("" !== memo.redemptionLink) {
        let code;
        if (rewardCode != null) {
          code = tmp3.code;
        }
        if (null != code) {
          let redemptionLink;
          if ("" !== rewardCode.code) {
            const _encodeURIComponent = encodeURIComponent;
            const str2 = memo.redemptionLink;
            redemptionLink = str2.replace(REWARD_CODE_PLACEHOLDER, encodeURIComponent(tmp3.code));
          }
          return redemptionLink;
        }
        redemptionLink = tmp.redemptionLink;
      }
    }
  }, items3);
  const items4 = [rewardCode];
  const tmp4Result = tmp4(hasError[9]);
  const obj5 = { claimCode, fetchCode, hasError, onDismiss: tmp(hasError[13]).hideActionSheet, quest, questContent, questContentPosition, redemptionLink: memo1, sourceQuestContent };
  const claimRewardCodePrimaryCtaClickHandler = tmp4Result.useClaimRewardCodePrimaryCtaClickHandler(obj5);
  const callback = obj3.useCallback(() => {
    if (null != rewardCode) {
      let obj = ClipboardUtils;
      obj.copy(tmp.code, () => {
        let intl;
        const obj = {
          key: "TOAST_QUEST_REWARD_CODE_COPIED",
          content: intl.string(quest(hasError[11]).t.MSaeTe),
          icon() {
            return closure_1_8(closure_1_0(closure_1_2[16]).CopyIcon, {});
          }
        };
        const open = rewardCode(hasError[10]).open;
        rewardCode(hasError[10]);
        intl = quest(hasError[11]).intl;
        return open(obj);
      });
    }
  }, items4);
  const tmp4Result2 = tmp4(hasError[17]);
  const rewardCodeRedemptionInstructions = tmp4Result2.getRewardCodeRedemptionInstructions({ quest, rewardCode });
  if (!isFetchingRewardCode) {
    isFetchingRewardCode = isClaimingReward;
  }
  if (!isFetchingRewardCode) {
    let code;
    if (rewardCode != null) {
      code = rewardCode.code;
    }
    isFetchingRewardCode = null == code;
  }
  const obj6 = { header: closure_8(BottomSheetTitleHeader, obj7), startExpanded: true, children: null };
  BottomSheet = tmp4(tmp2[18]).BottomSheet;
  obj7 = { title: intl.string(tmp4(hasError[11]).t.srzsU2) };
  BottomSheetTitleHeader = tmp4(tmp2[19]).BottomSheetTitleHeader;
  intl = tmp4(tmp2[11]).intl;
  const obj8 = { style: tmp3.wrapper, children: null };
  let tmp16Result = null != rewardCode && null != rewardCodeRedemptionInstructions;
  if (tmp16Result) {
    const obj9 = { style: tmp3.redemptionInstructions, variant: "text-md/normal", color: "text-default", children: tmpResult.parse(rewardCodeRedemptionInstructions, true, { allowLinks: true }) };
    const Text = tmp4(tmp2[20]).Text;
    tmpResult = tmp(hasError[21]);
    tmp16Result = tmp16(Text, obj9);
  }
  const items5 = [tmp16Result, ];
  let code1;
  if (rewardCode != null) {
    code1 = rewardCode.code;
  }
  const obj10 = { style: null == code1 && tmp3.codeCopyWrapperLoading, children: closure_8(TableRowGroup, obj13) };
  TableRowGroup = tmp4(tmp2[22]).TableRowGroup;
  let code2;
  const TableRow = tmp4(tmp2[23]).TableRow;
  if (rewardCode != null) {
    code2 = rewardCode.code;
  }
  let code3;
  const obj11 = { label: code2, trailing: tmp16Result3, onPress: tmp26 };
  if (rewardCode != null) {
    code3 = rewardCode.code;
  }
  tmp16Result3 = null != code3;
  if (tmp16Result3) {
    const obj12 = { IconComponent: tmp4(hasError[16]).CopyIcon };
    const Icon = tmp4(tmp2[23]).TableRow.Icon;
    tmp16Result3 = tmp16(Icon, obj12);
  }
  let code4;
  if (rewardCode != null) {
    code4 = rewardCode.code;
  }
  tmp26 = undefined;
  if (null != code4) {
    tmp26 = callback;
  }
  obj13 = { hasIcons: false, children: closure_8(TableRow, obj11) };
  const items6 = [closure_8(closure_5, obj10), ];
  let code5;
  if (rewardCode != null) {
    code5 = rewardCode.code;
  }
  let tmp16Result4 = null == code5;
  if (tmp16Result4) {
    const obj14 = { style: tmp3.claimingIndicator, size: 24 };
    tmp16Result4 = tmp16(memo, obj14);
  }
  const obj15 = { children: items5 };
  items6[1] = tmp16Result4;
  items5[1] = closure_9(closure_5, { children: items6 });
  const items7 = [closure_9(closure_5, obj15), ];
  const obj16 = { style: tmp3.footer, children: null };
  const obj17 = { disabled: isFetchingRewardCode, onPress: claimRewardCodePrimaryCtaClickHandler, grow: true, text: null };
  if (null != memo1) {
    let stringResult;
    if ("" !== memo1) {
      const intl3 = tmp4(tmp2[11]).intl;
      stringResult = intl3.string(tmp4(tmp2[11]).t["+zx47d"]);
    }
    obj17.text = stringResult;
    obj16.children = closure_8(tmp30, obj17);
    items7[1] = closure_8(closure_5, obj16);
    obj8.children = items7;
    obj6.children = closure_9(closure_5, obj8);
    return closure_8(BottomSheet, obj6);
  }
  const intl2 = tmp4(tmp2[11]).intl;
  stringResult = intl2.string(tmp4(tmp2[11]).t["23SS+z"]);
}
let react = react_mod;
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
const REWARD_CODE_PLACEHOLDER = QuestConstants.REWARD_CODE_PLACEHOLDER;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles((paddingBottom) => {
  let obj3;
  const obj = { wrapper: { display: "flex", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 }, footer: obj3, claimingIndicator: { position: "absolute", left: "50%", top: "50%", marginLeft: -12, marginTop: -12 }, codeCopyWrapperLoading: { opacity: 0.5 }, redemptionInstructions: { marginBottom: 24 } };
  obj3 = { paddingBottom };
  ({ display: "flex", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 });
  return obj;
});
let result = size.fileFinishedImporting("modules/quests/native/QuestRewardCodeClaimBottomSheet.native.tsx");

export default function QuestRewardCodeClaimBottomSheetConnected(questContentPosition) {
  let questContent;
  let tmp5;
  ({ questId: require, questContent } = questContentPosition);
  questContentPosition = questContentPosition.questContentPosition;
  const sourceQuestContent = questContentPosition.sourceQuestContent;
  let obj = require("get initialized");
  const items = [QuestStore];
  const stateFromStores = obj.useStateFromStores(items, () => QuestStore.getQuest(require));
  const tmp = require;
  if (null == stateFromStores) {
    const obj3 = questContent(questContentPosition[13]);
    obj3.hideActionSheet();
    tmp5 = null;
  } else {
    const obj2 = {
      overrideVisibility: true,
      questOrQuests: stateFromStores,
      questContent,
      questContentPosition,
      sourceQuestContent,
      children() {
          const obj = { quest: stateFromStores, questContent, questContentPosition, sourceQuestContent };
          return metroImportAll(QuestRewardCodeClaimBottomSheet, obj);
        }
    };
    tmp5 = closure_8(tmp(tmp2[25]).QuestContentImpressionTrackerNative, obj2);
  }
  return tmp5;
};
