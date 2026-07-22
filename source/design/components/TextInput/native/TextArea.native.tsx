// Module ID: 7499
// Function ID: 60143
// Name: TextArea
// Dependencies: []

// Module 7499 (TextArea)
const jsx = arg1(dependencyMap[1]).jsx;
const importAllResult = importAll(dependencyMap[0]);
const forwardRefResult = importAll(dependencyMap[0]).forwardRef((arg0, ref) => {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { ref };
  const merged1 = Object.assign(arg0);
  obj["children"] = jsx(ref(dependencyMap[3]).TextAreaField, obj);
  return jsx(ref(dependencyMap[2]).Input, obj);
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/TextInput/native/TextArea.native.tsx");

export const TextArea = forwardRefResult;
