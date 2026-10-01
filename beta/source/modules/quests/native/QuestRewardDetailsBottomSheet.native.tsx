// Module ID: 10680
// Function ID: 10681
// Name: QuestRewardDetailsBottomSheet
// Dependencies: [19, 17, 1372, 21, 4836, 576, 10678, 4800, 10681, 10694, 7121, 1115, 504, 6571, 5279, 10745, 4832, 2]
// Exports: default

// Module 10680 (QuestRewardDetailsBottomSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import QuestRewardTypes from "QuestRewardTypes" /* 7121 */;
import QuestUtils from "QuestUtils" /* 10678 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 10681 */;
import QuestRewardUtils from "QuestRewardUtils" /* 10694 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
function QuestRewardDetailsBottomSheet(quest) {
  let currentUser;
  let intl;
  let items3;
  let items4;
  let items5;
  let items6;
  quest = quest.quest;
  const tmp = closure_9();
  const items = [quest.config];
  const memo = react.useMemo(() => {
    const obj = QuestRewardUtils;
    return obj.isCollectibleQuestRewardPremiumExtendable(quest.config);
  }, items);
  const items1 = [quest, memo];
  const memo1 = react.useMemo(() => {
    const obj = QuestRewardUtils;
    const type = obj.getQuestPrimaryReward(quest).type;
    if (QuestRewardTypes.QuestRewardTypes.COLLECTIBLE === type) {
      const intl2 = tmp(1115).intl;
      const string = intl2.string;
      const t = tmp(1115).t;
      return string(memo ? t["66YyBJ"] : t.ABD2CN);
    } else if (QuestRewardTypes.QuestRewardTypes.FRACTIONAL_PREMIUM === type) {
      const intl = tmp(1115).intl;
      return intl.string(intl3.t.maMtqM);
    } else {
      return null;
    }
  }, items1);
  let obj = quest(504);
  const items2 = [UserStore];
  const stateFromStores = obj.useStateFromStores(items2, () => currentUser.getCurrentUser());
  const obj2 = quest(10694);
  const defaultRewardName = obj2.getDefaultRewardName(quest.config, stateFromStores);
  BottomSheet = quest(6571).BottomSheet;
  const obj3 = { direction: "vertical", spacing: memo(576).space.PX_16, style: tmp.wrapper, children: items5 };
  const Stack = quest(5279).Stack;
  const obj4 = { align: "center", direction: "horizontal", spacing: memo(576).space.PX_16, children: items3 };
  const Stack2 = quest(5279).Stack;
  items3 = [closure_6(memo(10745), { quest, height: 56, width: 56, withAnimation: true }), ];
  const obj5 = { direction: "vertical", spacing: memo(576).space.PX_4, style: tmp.rewardDetailsCopy, children: items4 };
  const Stack3 = quest(5279).Stack;
  const obj6 = { variant: "eyebrow", color: "text-subtle", children: intl.string(quest(1115).t["jyYgZ+"]) };
  const Text = quest(4832).Text;
  intl = quest(1115).intl;
  items4 = [closure_6(Text, obj6), closure_6(quest(4832).Text, { variant: "heading-lg/semibold", color: "text-strong", children: defaultRewardName })];
  items3[1] = closure_7(Stack3, obj5);
  items5 = [closure_7(Stack2, obj4), ];
  let tmp9Result = null != memo1;
  const tmp4 = quest;
  if (tmp9Result) {
    const obj7 = { children: items6 };
    const obj8 = { style: tmp.separator };
    items6 = [closure_6(View, obj8), ];
    const obj9 = { variant: "text-md/normal", color: "text-subtle", children: memo1 };
    items6[1] = closure_6(tmp4(4832).Text, obj9);
    tmp9Result = tmp9(closure_8, obj7);
  }
  items5[1] = tmp9Result;
  const obj10 = { startExpanded: true, children: closure_7(Stack, obj3) };
  return closure_6(BottomSheet, obj10);
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault, Fragment: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, rewardDetailsCopy: { flexShrink: 1 }, separator: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { height: 1, backgroundColor: nativeDefault.colors.BORDER_STRONG };
let closure_9 = createStyles(obj);
let result = size.fileFinishedImporting("modules/quests/native/QuestRewardDetailsBottomSheet.native.tsx");

export default function QuestRewardDetailsBottomSheetConnected(questId) {
  questId = questId.questId;
  const callback = react.useCallback(() => {
    const obj = QuestUtils;
    const result = obj.showQuestUnavailableAlert();
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideActionSheet();
  }, []);
  let obj = hooks_QuestHooks;
  const nonNullableQuest = obj.useNonNullableQuest(questId, callback);
  let tmp3 = null;
  if (null != nonNullableQuest) {
    let obj2 = { quest: nonNullableQuest };
    tmp3 = metroRequire(QuestRewardDetailsBottomSheet, obj2);
  }
  return tmp3;
};
