// Module ID: 11451
// Function ID: 89208
// Name: ChatInputCharCounter
// Dependencies: []

// Module 11451 (ChatInputCharCounter)
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const UpsellTypes = arg1(dependencyMap[3]).UpsellTypes;
const PremiumUpsellTypes = arg1(dependencyMap[4]).PremiumUpsellTypes;
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
let closure_10 = arg1(dependencyMap[6]).createStyles({ container: { guild: null, body: "b28329d7d2ebd0b330f6112973e5d746" } });
const forwardRefResult = importAllResult.forwardRef((analyticsLocations) => {
  analyticsLocations = analyticsLocations.analyticsLocations;
  const arg1 = analyticsLocations;
  let obj = arg1(closure_2[7]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => stateFromStores(closure_2[8]).canUseIncreasedMessageLength(currentUser.getCurrentUser()));
  const importDefault = stateFromStores;
  const tmp3 = callback(importAllResult.useState(0), 2);
  const first = tmp3[0];
  closure_2 = tmp3[1];
  const tmp5 = importDefault(closure_2[9])();
  const callback = tmp5;
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({
    onMessageLengthChanged(length) {
      callback(Math.max(0, length - closure_3));
    }
  }));
  const items1 = [analyticsLocations, stateFromStores, tmp5];
  let tmp8 = null;
  if (first > 0) {
    obj = { onPress: tmp7, style: tmp.container };
    obj = {};
    const _HermesInternal = HermesInternal;
    obj.children = "-" + first;
    const items2 = [callback2(arg1(closure_2[14]).Text, obj), ];
    const obj1 = { size: "sm" };
    items2[1] = callback2(arg1(closure_2[15]).NitroWheelIcon, obj1);
    obj.children = items2;
    tmp8 = callback3(arg1(closure_2[13]).PressableOpacity, obj);
  }
  return tmp8;
});
forwardRefResult.displayName = "ChatInputCharCounter";
const obj2 = arg1(dependencyMap[6]);
const memoResult = importAllResult.memo(forwardRefResult);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/chat_input/native/accessories/ChatInputCharCounter.tsx");

export default memoResult;
