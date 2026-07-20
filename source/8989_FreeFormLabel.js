// Module ID: 8989
// Function ID: 70798
// Name: FreeFormLabel
// Dependencies: []
// Exports: default

// Module 8989 (FreeFormLabel)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[3]).fileFinishedImporting("design/void/Form/native/FreeFormLabel.tsx");

export default function FreeFormLabel(arg0) {
  let children;
  let nativeID;
  let style;
  ({ children, style, nativeID } = arg0);
  return jsx(arg1(dependencyMap[2]).Text, { style, nativeID, children });
};
