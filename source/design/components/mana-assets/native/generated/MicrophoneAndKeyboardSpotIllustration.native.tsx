// Module ID: 7214
// Function ID: 60056
// Name: MicrophoneAndKeyboardSpotIllustration
// Dependencies: [33, 5085, 7215, 2]
// Exports: MicrophoneAndKeyboardSpotIllustration

// Module 7214 (MicrophoneAndKeyboardSpotIllustration)
import { jsx } from "jsxProd";

const result = require("metadata").fileFinishedImporting("design/components/mana-assets/native/generated/MicrophoneAndKeyboardSpotIllustration.native.tsx");

export const MicrophoneAndKeyboardSpotIllustration = function MicrophoneAndKeyboardSpotIllustration(width) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 288;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 162;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = { fadeDuration: 0 };
  obj = { uri: importDefault(7215) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(5085), { width: num * num3, height: num2 * num3 });
};
