// Module ID: 6597
// Function ID: 50769
// Name: VibeWithWumpusSpotIllustration
// Dependencies: [0, 0, 0, 0]
// Exports: VibeWithWumpusSpotIllustration

// Module 6597 (VibeWithWumpusSpotIllustration)
import { jsx } from "result";
import result from "result";

result = result.fileFinishedImporting("design/components/mana-assets/native/generated/VibeWithWumpusSpotIllustration.native.tsx");

export const VibeWithWumpusSpotIllustration = function VibeWithWumpusSpotIllustration(width) {
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
    num2 = 192;
  }
  let num3 = width.scale;
  if (num3 === undefined) {
    num3 = 1;
  }
  let obj = { fadeDuration: 0 };
  obj = { uri: importDefault(dependencyMap[2]) };
  obj.source = obj;
  obj = { width: num * num3, height: num2 * num3 };
  const items = [obj];
  obj.style = items;
  obj.accessible = accessible;
  obj.accessibilityLabel = accessibilityLabel;
  obj.resizeMode = resizeMode;
  return jsx(importDefault(dependencyMap[1]), obj);
};
