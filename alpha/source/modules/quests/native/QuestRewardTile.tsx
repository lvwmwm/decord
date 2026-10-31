// Module ID: 14678
// Function ID: 14679
// Name: QuestRewardTile
// Dependencies: [19, 21, 9700, 9695, 14679, 2]
// Exports: default

// Module 14678 (QuestRewardTile)
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import AssetUtils from "AssetUtils" /* 9695 */;
import QuestRewardUtils from "QuestRewardUtils" /* 9700 */;
import QuestDockRewardTileDefault from "QuestDockRewardTile" /* 14679 */;
import size from "module_2" /* 2 */;

const useMemo = react2.useMemo;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/quests/native/QuestRewardTile.tsx");

export default function QuestRewardTile(quest) {
  let name;
  let tmp8;
  quest = quest.quest;
  const accessibilityLabelPrefix = quest.accessibilityLabelPrefix;
  const merged = Object.assign(quest, Object.assign({ quest: 0, accessibilityLabelPrefix: 0 }));
  const items = [quest];
  const tmp3 = useMemo(() => {
    const obj = QuestRewardUtils;
    return obj.getQuestPrimaryReward(quest);
  }, items);
  const tmp2 = useMemo;
  if (null != tmp3.name) {
    name = tmp3.name;
  } else {
    name = tmp3.messages.name;
  }
  const items1 = [quest];
  const tmp2Result = tmp2(() => {
    const obj = AssetUtils;
    return obj.getQuestAsset(quest, AssetUtils.QuestAssetType.REWARD, undefined, true);
  }, items1);
  const items2 = [accessibilityLabelPrefix, name];
  const found = items2.filter(Boolean);
  const joined = found.join(", ");
  let obj = { assetUrl: tmp2Result.url, isAnimatedAsset: tmp2Result.isAnimated, accessibilityLabel: tmp8 };
  tmp8 = undefined;
  const tmp6 = jsx;
  const tmp7 = QuestDockRewardTileDefault;
  if ("" !== joined) {
    tmp8 = joined;
  }
  const merged1 = Object.assign(merged);
  return tmp6(tmp7, obj);
};
