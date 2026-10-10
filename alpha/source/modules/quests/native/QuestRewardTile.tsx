// Module ID: 12973
// Function ID: 12974
// Name: QuestRewardTile
// Dependencies: [109, 19, 21, 558, 576, 9189, 9184, 12974, 2]

// Module 12973 (QuestRewardTile)
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import react3 from "react" /* 576 */;
import AssetUtils from "AssetUtils" /* 9184 */;
import QuestRewardUtils from "QuestRewardUtils" /* 9189 */;
import QuestDockRewardTileDefault from "QuestDockRewardTile" /* 12974 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = ["quest", "accessibilityLabelPrefix"];
const useMemo = react2.useMemo;
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestRewardTile(arg0) {
  let accessibilityLabelPrefix;
  let quest;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react3;
  const cResult = obj.c(18);
  if (cResult[0] !== arg0) {
    ({ quest, accessibilityLabelPrefix } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = accessibilityLabelPrefix;
    cResult[2] = quest;
    cResult[3] = tmp9;
    tmp6 = tmp9;
    tmp5 = quest;
    tmp4 = accessibilityLabelPrefix;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  if (cResult[4] !== tmp5) {
    const tmpResult = QuestRewardUtils;
    const questPrimaryReward = tmpResult.getQuestPrimaryReward(tmp5);
    cResult[4] = tmp5;
    cResult[5] = questPrimaryReward;
    tmp10 = questPrimaryReward;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] !== tmp10) {
    let name;
    if (null != tmp10.name) {
      name = tmp10.name;
    } else {
      name = tmp10.messages.name;
    }
    cResult[6] = tmp10;
    cResult[7] = name;
    tmp12 = name;
  } else {
    tmp12 = cResult[7];
  }
  if (cResult[8] !== tmp5) {
    const tmpResult2 = AssetUtils;
    const questAsset = tmpResult2.getQuestAsset(tmp5, tmp(9184).QuestAssetType.REWARD, undefined, true);
    cResult[8] = tmp5;
    cResult[9] = questAsset;
    tmp14 = questAsset;
  } else {
    tmp14 = cResult[9];
  }
  if (cResult[10] === tmp4) {
    let obj4;
    if (cResult[11] === tmp12) {
      obj4 = cResult[12];
    }
    const joined = obj4.join(", ");
    let tmp20;
    if ("" !== joined) {
      tmp20 = joined;
    }
    if (cResult[13] === tmp6) {
      if (cResult[14] === tmp14.isAnimated) {
        if (cResult[15] === tmp14.url) {
          let tmp21;
          if (cResult[16] === tmp20) {
            tmp21 = cResult[17];
          }
          return tmp21;
        }
      }
    }
    ({ url: obj5.assetUrl, isAnimated: obj5.isAnimatedAsset } = tmp14);
    QuestDockRewardTileDefault;
    const merged = Object.assign(tmp6);
    const tmp28 = <tmp24 assetUrl={null} isAnimatedAsset={null} accessibilityLabel={tmp20} />;
    cResult[13] = tmp6;
    cResult[14] = tmp14.isAnimated;
    cResult[15] = tmp14.url;
    cResult[16] = tmp20;
    cResult[17] = tmp28;
    tmp21 = tmp28;
  }
  const items = [tmp4, tmp12];
  const found = items.filter(Boolean);
  cResult[10] = tmp4;
  cResult[11] = tmp12;
  cResult[12] = found;
  obj4 = found;
}) : (function QuestRewardTile(quest) {
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
});
const result = size.fileFinishedImporting("modules/quests/native/QuestRewardTile.tsx");

export default tmp3;
