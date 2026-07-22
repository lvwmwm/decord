// Module ID: 10912
// Function ID: 84811
// Name: QuestRewardTile
// Dependencies: []
// Exports: default

// Module 10912 (QuestRewardTile)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const useMemo = arg1(dependencyMap[1]).useMemo;
({ AppState: closure_6, View: closure_7 } = arg1(dependencyMap[2]));
let closure_8 = importDefault(dependencyMap[3]);
const jsx = arg1(dependencyMap[4]).jsx;
const tmp2 = arg1(dependencyMap[2]);
let closure_10 = arg1(dependencyMap[5]).createStyles(() => {
  let obj = {};
  obj = { borderRadius: importDefault(dependencyMap[6]).radii.sm };
  obj.container = obj;
  obj.video = { libvpx: 2085683.2, numOfEmbeds: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010811969863144788, diffed: 0.0000000000000000000000000000000000000000000000000000000000000000000000012058167407260115 };
  obj.image = {};
  return obj;
});
const obj = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/quests/native/QuestRewardTile.tsx");

export default function QuestRewardTile(quest) {
  quest = quest.quest;
  const arg1 = quest;
  const height = quest.height;
  const importDefault = height;
  const width = quest.width;
  const dependencyMap = width;
  let flag = quest.paused;
  if (flag === undefined) {
    flag = false;
  }
  let withAnimation = quest.withAnimation;
  if (withAnimation === undefined) {
    let obj = arg1(dependencyMap[7]);
    withAnimation = obj.isIOS();
  }
  let callback;
  let React;
  let obj1 = arg1(dependencyMap[8]);
  const items = [closure_8];
  const items1 = [quest];
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp4 = useMemo(() => quest(width[9]).getQuestPrimaryReward(quest), items1);
  if (null != tmp4.name) {
    let name = tmp4.name;
  } else {
    name = tmp4.messages.name;
  }
  const items2 = [quest];
  const tmp5 = useMemo(() => quest(width[10]).getQuestAsset(quest, quest(width[10]).QuestAssetType.REWARD, undefined, true), items2);
  callback = tmp5;
  const tmp6 = callback2();
  const tmp7 = callback(React.useState("active" === currentState.currentState), 2);
  React = tmp7[1];
  const items3 = [tmp5.isAnimated];
  const effect = React.useEffect(() => {
    if (tmp5.isAnimated) {
      let closure_0 = closure_6.addEventListener("change", (arg0) => {
        callback("active" === arg0);
      });
      return () => {
        closure_0.remove();
      };
    }
  }, items3);
  const items4 = [tmp5, width, height];
  const memo = React.useMemo(() => {
    let obj = quest(width[10]);
    obj = { assetUrl: tmp5.url, width, height };
    return obj.getScaledImageUrl(obj);
  }, items4);
  const items5 = [quest.accessibilityLabelPrefix, name];
  const found = items5.filter(Boolean);
  obj = { accessibilityLabel: found.join(", "), style: items6 };
  const items6 = [tmp6.container, { height, width }, quest.style];
  if (tmp5.isAnimated) {
    if (withAnimation) {
      obj = { style: tmp6.video };
      obj1 = { uri: tmp5.url };
      obj.source = obj1;
      obj.poster = memo;
      let tmp16 = !tmp7[0];
      if (!tmp16) {
        tmp16 = flag;
      }
      if (!tmp16) {
        tmp16 = stateFromStores;
      }
      obj.paused = tmp16;
      obj.muted = true;
      let tmp13Result = jsx(arg1(dependencyMap[11]).VideoComponent, obj);
      const tmp13 = jsx;
    }
    obj.children = tmp13Result;
    return tmp10(tmp11, obj);
  }
  tmp13Result = jsx(importDefault(dependencyMap[12]), { source: { uri: memo }, style: tmp6.image });
};
