// Module ID: 5498
// Function ID: 46879
// Name: ActionSheet
// Dependencies: []

// Module 5498 (ActionSheet)
const jsx = arg1(dependencyMap[1]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let obj = {};
obj = { paddingHorizontal: importDefault(dependencyMap[3]).space.PX_16 };
obj.content = obj;
obj.body = { gap: 24 };
let closure_3 = arg1(dependencyMap[2]).createStyles(obj);
const obj2 = arg1(dependencyMap[2]);
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  const tmp = callback();
  const obj = { ref };
  const merged = Object.assign(arg0);
  obj["contentStyles"] = tmp.content;
  obj["bodyStyles"] = tmp.body;
  return jsx(ref(dependencyMap[4]).BottomSheet, obj);
});
const result = arg1(dependencyMap[5]).fileFinishedImporting("design/components/Sheet/native/ActionSheet.native.tsx");

export const ActionSheet = forwardRefResult;
