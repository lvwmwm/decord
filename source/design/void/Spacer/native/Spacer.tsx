// Module ID: 12919
// Function ID: 98517
// Name: Spacer
// Dependencies: [2473901162, 2886221776, 996432412, 2381332459, 3848]
// Exports: default

// Module 12919 (Spacer)
import LOW_SATURATION_THRESHOLD from "LOW_SATURATION_THRESHOLD";

importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_2 = arg1(dependencyMap[3]).memoize((width) => ({ width, height: width }));
const result = LOW_SATURATION_THRESHOLD.fileFinishedImporting("design/void/Spacer/native/Spacer.tsx");

export default function Spacer(pointerEvents) {
  return <View style={callback(arg0.size)} pointerEvents={arg0.pointerEvents} />;
};
