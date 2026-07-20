// Module ID: 9204
// Function ID: 72047
// Name: SplitTextInput
// Dependencies: []

// Module 9204 (SplitTextInput)
const jsx = arg1(dependencyMap[1]).jsx;
const importAllResult = importAll(dependencyMap[0]);
const forwardRefResult = importAll(dependencyMap[0]).forwardRef((arg0, ref) => {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { ref };
  const merged1 = Object.assign(arg0);
  obj["children"] = jsx(ref(dependencyMap[3]).SplitTextField, obj);
  return jsx(ref(dependencyMap[2]).Input, obj);
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/SplitTextInput/native/SplitTextInput.native.tsx");

export const SplitTextInput = forwardRefResult;
