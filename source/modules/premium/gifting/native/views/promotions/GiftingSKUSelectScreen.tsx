// Module ID: 9752
// Function ID: 75868
// Name: GiftingSKUSelectScreen
// Dependencies: []
// Exports: default

// Module 9752 (GiftingSKUSelectScreen)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.scroll = { flex: 1 };
const obj1 = { 979464370: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001863282064227495, 1637975633: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007062002001945, padding: importDefault(dependencyMap[5]).space.PX_24 };
obj.contentContainer = obj1;
const tmp3 = arg1(dependencyMap[3]);
obj.header = { textAlign: "center", padding: importDefault(dependencyMap[5]).space.PX_8 };
obj.subtitle = { textAlign: "center" };
const obj2 = { textAlign: "center", padding: importDefault(dependencyMap[5]).space.PX_8 };
obj.buttonContainer = { marginHorizontal: importDefault(dependencyMap[5]).space.PX_16, marginBottom: importDefault(dependencyMap[5]).space.PX_24 };
const obj3 = { marginHorizontal: importDefault(dependencyMap[5]).space.PX_16, marginBottom: importDefault(dependencyMap[5]).space.PX_24 };
obj.headerContainer = { marginBottom: importDefault(dependencyMap[5]).space.PX_24 };
let closure_9 = obj.createStyles(obj);
const obj4 = { marginBottom: importDefault(dependencyMap[5]).space.PX_24 };
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/premium/gifting/native/views/promotions/GiftingSKUSelectScreen.tsx");

export default function GiftingSKUSelectScreen(rewardsToDisplay) {
  const defaultHighlightedReward = rewardsToDisplay.defaultHighlightedReward;
  const arg1 = defaultHighlightedReward;
  const claimableRewards = rewardsToDisplay.claimableRewards;
  const importDefault = claimableRewards;
  const onSelect = rewardsToDisplay.onSelect;
  const dependencyMap = onSelect;
  const tmp = callback3();
  const tmp2 = callback(React.useState(defaultHighlightedReward), 2);
  const first = tmp2[0];
  let callback = first;
  const React = tmp2[1];
  const tmp4 = callback(React.useState(false), 2);
  const first1 = tmp4[0];
  let closure_6 = tmp4[1];
  const items = [onSelect, first, claimableRewards];
  callback = React.useCallback(() => {
    const found = claimableRewards.find((arg0) => arg0 === closure_3);
    if (null != found) {
      onSelect(found);
    }
  }, items);
  const items1 = [first, claimableRewards];
  const callback1 = React.useCallback((arg0) => {
    callback(arg0);
    callback2(true);
  }, []);
  const memo = React.useMemo(() => {
    let someResult = null != first;
    if (someResult) {
      someResult = claimableRewards.some((arg0) => arg0 === closure_3);
    }
    return someResult;
  }, items1);
  const items2 = [first, claimableRewards, first1, defaultHighlightedReward, memo];
  const effect = React.useEffect(() => {
    if (0 === claimableRewards.length) {
      callback(undefined);
    } else if (!memo) {
      let someResult = !first1;
      if (someResult) {
        someResult = null != defaultHighlightedReward;
      }
      if (someResult) {
        someResult = claimableRewards.some((arg0) => arg0 === closure_0);
      }
      let tmp9;
      if (someResult) {
        tmp9 = defaultHighlightedReward;
      }
      callback(tmp9);
      const tmp8 = callback;
    }
  }, items2);
  let obj = { style: tmp.container };
  obj = { style: tmp.scroll, contentContainerStyle: tmp.contentContainer };
  obj = { style: tmp.headerContainer };
  const obj1 = { style: tmp.header };
  const intl = arg1(dependencyMap[8]).intl;
  obj1.children = intl.string(arg1(dependencyMap[8]).t.+ByEeM);
  const items3 = [memo(arg1(dependencyMap[7]).Text, obj1), ];
  const obj2 = { style: tmp.subtitle };
  const intl2 = arg1(dependencyMap[8]).intl;
  obj2.children = intl2.string(arg1(dependencyMap[8]).t.vPeaOS);
  items3[1] = memo(arg1(dependencyMap[7]).Text, obj2);
  obj.children = items3;
  const items4 = [callback2(first1, obj), memo(importDefault(dependencyMap[9]), { rewardsToDisplay: rewardsToDisplay.allRewards, claimableRewards, onSelect: callback1, highlightedSkuId: first })];
  obj.children = items4;
  const items5 = [callback2(closure_6, obj), ];
  const obj3 = { style: items6 };
  const items6 = [tmp.buttonContainer, { paddingBottom: importDefault(dependencyMap[6])().bottom }];
  const obj4 = {};
  const intl3 = arg1(dependencyMap[8]).intl;
  obj4.text = intl3.string(arg1(dependencyMap[8]).t.3d0Nmb);
  obj4.onPress = callback;
  obj4.disabled = null == first || !memo;
  obj3.children = memo(arg1(dependencyMap[10]).Button, obj4);
  items5[1] = memo(first1, obj3);
  obj.children = items5;
  return callback2(first1, obj);
};
