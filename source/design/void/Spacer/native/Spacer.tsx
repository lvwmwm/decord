// Module ID: 13288
// Function ID: 13289
// Name: Spacer
// Dependencies: [19, 17, 21, 12, 2]
// Exports: default

// Module 13288 (Spacer)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import apply from "apply";

let closure_2 = apply.memoize((width) => ({ width, height: width }));
const result = require("jsxProd").fileFinishedImporting("design/void/Spacer/native/Spacer.tsx");

export default function Spacer(pointerEvents) {
  return <View style={callback(arg0.size)} pointerEvents={arg0.pointerEvents} />;
};
