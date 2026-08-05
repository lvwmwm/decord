// Module ID: 13251
// Function ID: 13252
// Name: Spacer
// Dependencies: [19, 17, 21, 12, 2]
// Exports: default

// Module 13251 (Spacer)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import apply from "apply";

let closure_2 = apply.memoize((width) => ({ width, height: width }));
const result = require("jsxProd").fileFinishedImporting("design/void/Spacer/native/Spacer.tsx");

export default function Spacer(pointerEvents) {
  return <View style={callback(arg0.size)} pointerEvents={arg0.pointerEvents} />;
};
