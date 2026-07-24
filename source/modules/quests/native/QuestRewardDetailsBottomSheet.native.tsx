// Module ID: 10948
// Function ID: 85042
// Name: QuestRewardDetailsBottomSheet
// Dependencies: [31, 27, 1849, 33, 4130, 689, 10946, 4098, 10493, 9499, 6946, 1212, 566, 5187, 4541, 10949, 4126, 2]
// Exports: default

// Module 10948 (QuestRewardDetailsBottomSheet)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function QuestRewardDetailsBottomSheet(quest) {
  quest = quest.quest;
  const tmp = _createForOfIteratorHelperLoose();
  const items = [quest.config];
  const memo = React.useMemo(() => quest(outer1_2[9]).isCollectibleQuestRewardPremiumExtendable(quest.config), items);
  const items1 = [quest, memo];
  const memo1 = React.useMemo(() => {
    const type = quest(outer1_2[9]).getQuestPrimaryReward(quest).type;
    if (quest(outer1_2[10]).QuestRewardTypes.COLLECTIBLE === type) {
      const intl2 = quest(outer1_2[11]).intl;
      const t = quest(outer1_2[11]).t;
      return intl2.string(memo ? t["66YyBJ"] : t.ABD2CN);
    } else if (quest(outer1_2[10]).QuestRewardTypes.FRACTIONAL_PREMIUM === type) {
      const intl = quest(outer1_2[11]).intl;
      return intl.string(quest(outer1_2[11]).t.maMtqM);
    } else {
      return null;
    }
    const obj = quest(outer1_2[9]);
  }, items1);
  let obj = quest(566);
  const items2 = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items2, () => outer1_5.getCurrentUser());
  let obj1 = quest(9499);
  const defaultRewardName = obj1.getDefaultRewardName(quest.config, stateFromStores);
  obj = { startExpanded: true };
  obj = { direction: "vertical", spacing: memo(689).space.PX_16, style: tmp.wrapper };
  obj1 = { align: "center", direction: "horizontal", spacing: memo(689).space.PX_16 };
  const obj2 = { quest, height: 56, width: 56, withAnimation: true };
  const items3 = [callback(memo(10949), obj2), ];
  const obj3 = { direction: "vertical", spacing: memo(689).space.PX_4, style: tmp.rewardDetailsCopy };
  const obj4 = { variant: "eyebrow", color: "text-subtle" };
  let intl = quest(1212).intl;
  obj4.children = intl.string(quest(1212).t["jyYgZ+"]);
  const items4 = [callback(quest(4126).Text, obj4), ];
  const obj5 = { variant: "heading-lg/semibold", color: "text-strong", children: defaultRewardName };
  items4[1] = callback(quest(4126).Text, obj5);
  obj3.children = items4;
  items3[1] = callback2(quest(4541).Stack, obj3);
  obj1.children = items3;
  const items5 = [callback2(quest(4541).Stack, obj1), ];
  let tmp8 = null != memo1;
  if (tmp8) {
    const obj6 = {};
    const obj7 = { style: tmp.separator };
    const items6 = [callback(View, obj7), ];
    const obj8 = { variant: "text-md/normal", color: "text-subtle", children: memo1 };
    items6[1] = callback(quest(4126).Text, obj8);
    obj6.children = items6;
    tmp8 = callback2(closure_8, obj6);
  }
  items5[1] = tmp8;
  obj.children = items5;
  obj.children = callback2(quest(4541).Stack, obj);
  return callback(quest(5187).BottomSheet, obj);
}
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.wrapper = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.rewardDetailsCopy = { flexShrink: 1 };
_createForOfIteratorHelperLoose.separator = { height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { height: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/quests/native/QuestRewardDetailsBottomSheet.native.tsx");

export default function QuestRewardDetailsBottomSheetConnected(questId) {
  const callback = React.useCallback(() => {
    const result = outer1_0(outer1_2[6]).showQuestUnavailableAlert();
    const obj = outer1_0(outer1_2[6]);
    outer1_1(outer1_2[7]).hideActionSheet();
  }, []);
  let obj = require(10493) /* _createForOfIteratorHelperLoose */;
  const nonNullableQuest = obj.useNonNullableQuest(questId.questId, callback);
  let tmp3 = null;
  if (null != nonNullableQuest) {
    obj = { quest: nonNullableQuest };
    tmp3 = callback(QuestRewardDetailsBottomSheet, obj);
  }
  return tmp3;
};
