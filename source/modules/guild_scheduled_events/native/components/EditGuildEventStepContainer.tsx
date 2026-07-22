// Module ID: 8363
// Function ID: 66672
// Dependencies: []

// Module 8363
let closure_2 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ View: closure_4, ScrollView: closure_5 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj1 = arg1(dependencyMap[4]);
let obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.flex = { flex: 1 };
obj.scroller = { paddingHorizontal: 16 };
obj1 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj.buttonContainer = obj1;
let closure_8 = obj1.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  let action;
  let children;
  ({ children, action } = arg0);
  const tmp = callback4();
  const tmp2 = callback(importAllResult.useState(32), 2);
  const importDefault = tmp2[1];
  const insets = importDefault(dependencyMap[6])().insets;
  let obj = { style: tmp.container };
  obj = { <string:1378320438>: null, <string:3273081386>: null, <string:2708976053>: null, ref };
  const items = [tmp.flex, { marginBottom: tmp2[0] + insets.bottom }];
  obj.style = items;
  obj.contentContainerStyle = tmp.scroller;
  obj.children = children;
  const callback = importAllResult.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.height);
  }, []);
  const items1 = [callback2(closure_5, obj), ];
  const items2 = [tmp.buttonContainer, { paddingBottom: insets.bottom }];
  items1[1] = callback2(closure_4, { style: items2, onLayout: callback, children: action });
  obj.children = items1;
  return callback3(closure_4, obj);
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventStepContainer.tsx");

export default forwardRefResult;
