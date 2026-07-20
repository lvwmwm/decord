// Module ID: 12903
// Function ID: 98439
// Name: Spacer
// Dependencies: []
// Exports: default

// Module 12903 (Spacer)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_2 = arg1(dependencyMap[3]).memoize((width) => ({ width, height: width }));
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/void/Spacer/native/Spacer.tsx");

export default function Spacer(pointerEvents) {
  return <View style={callback(arg0.size)} pointerEvents={arg0.pointerEvents} />;
};
