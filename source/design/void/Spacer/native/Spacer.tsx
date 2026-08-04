// Module ID: 13279
// Function ID: 13280
// Name: Spacer
// Dependencies: [19, 17, 21, 12, 2]
// Exports: default

// Module 13279 (Spacer)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import apply from "apply";

let closure_2 = apply.memoize((width) => ({ width, height: width }));
const result = require("jsxProd").fileFinishedImporting("design/void/Spacer/native/Spacer.tsx");

export default function Spacer(pointerEvents) {
  return <View style={callback(arg0.size)} pointerEvents={arg0.pointerEvents} />;
};
