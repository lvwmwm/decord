// Module ID: 10910
// Function ID: 84791
// Name: QuestRewardDetailsBottomSheet
// Dependencies: []
// Exports: default

// Module 10910 (QuestRewardDetailsBottomSheet)
function QuestRewardDetailsBottomSheet(quest) {
  quest = quest.quest;
  const arg1 = quest;
  const tmp = callback3();
  const items = [quest.config];
  const memo = React.useMemo(() => quest(closure_2[9]).isCollectibleQuestRewardPremiumExtendable(quest.config), items);
  const importDefault = memo;
  const items1 = [quest, memo];
  const memo1 = React.useMemo(() => {
    const type = quest(closure_2[9]).getQuestPrimaryReward(quest).type;
    if (quest(closure_2[10]).QuestRewardTypes.COLLECTIBLE === type) {
      const intl2 = quest(closure_2[11]).intl;
      const t = quest(closure_2[11]).t;
      return intl2.string(memo ? t.66YyBJ : t.ABD2CN);
    } else if (quest(closure_2[10]).QuestRewardTypes.FRACTIONAL_PREMIUM === type) {
      const intl = quest(closure_2[11]).intl;
      return intl.string(quest(closure_2[11]).t.maMtqM);
    } else {
      return null;
    }
    const obj = quest(closure_2[9]);
  }, items1);
  let obj = arg1(dependencyMap[12]);
  const items2 = [closure_5];
  const stateFromStores = obj.useStateFromStores(items2, () => currentUser.getCurrentUser());
  let obj1 = arg1(dependencyMap[9]);
  const defaultRewardName = obj1.getDefaultRewardName(quest.config, stateFromStores);
  obj = { startExpanded: true };
  obj = { direction: "vertical", spacing: importDefault(dependencyMap[5]).space.PX_16, style: tmp.wrapper };
  obj1 = { <string:1641868496>: "gr", <string:2659078597>: null, spacing: importDefault(dependencyMap[5]).space.PX_16 };
  const items3 = [callback(importDefault(dependencyMap[15]), { quest }), ];
  const obj2 = { direction: "vertical", spacing: importDefault(dependencyMap[5]).space.PX_4, style: tmp.rewardDetailsCopy };
  const obj3 = {};
  const intl = arg1(dependencyMap[11]).intl;
  obj3.children = intl.string(arg1(dependencyMap[11]).t.jyYgZ+);
  const items4 = [callback(arg1(dependencyMap[16]).Text, obj3), ];
  const obj4 = { hasMaxConnections: "Array", isBoostOnlySubscription: "isInTreatment", children: defaultRewardName };
  items4[1] = callback(arg1(dependencyMap[16]).Text, obj4);
  obj2.children = items4;
  items3[1] = callback2(arg1(dependencyMap[14]).Stack, obj2);
  obj1.children = items3;
  const items5 = [callback2(arg1(dependencyMap[14]).Stack, obj1), ];
  let tmp8 = null != memo1;
  if (tmp8) {
    const obj5 = {};
    const obj6 = { style: tmp.separator };
    const items6 = [callback(View, obj6), ];
    const obj7 = { children: memo1 };
    items6[1] = callback(arg1(dependencyMap[16]).Text, obj7);
    obj5.children = items6;
    tmp8 = callback2(closure_8, obj5);
  }
  items5[1] = tmp8;
  obj.children = items5;
  obj.children = callback2(arg1(dependencyMap[14]).Stack, obj);
  return callback(arg1(dependencyMap[13]).BottomSheet, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7, Fragment: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16, paddingBottom: importDefault(dependencyMap[5]).space.PX_8 };
obj.wrapper = obj;
obj.rewardDetailsCopy = { flexShrink: 1 };
const tmp2 = arg1(dependencyMap[3]);
obj.separator = { height: 1, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_STRONG };
let closure_9 = obj.createStyles(obj);
const obj1 = { height: 1, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_STRONG };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/quests/native/QuestRewardDetailsBottomSheet.native.tsx");

export default function QuestRewardDetailsBottomSheetConnected(questId) {
  const callback = React.useCallback(() => {
    const result = callback(closure_2[6]).showQuestUnavailableAlert();
    const obj = callback(closure_2[6]);
    callback2(closure_2[7]).hideActionSheet();
  }, []);
  let obj = arg1(dependencyMap[8]);
  const nonNullableQuest = obj.useNonNullableQuest(questId.questId, callback);
  let tmp3 = null;
  if (null != nonNullableQuest) {
    obj = { quest: nonNullableQuest };
    tmp3 = callback(QuestRewardDetailsBottomSheet, obj);
  }
  return tmp3;
};
