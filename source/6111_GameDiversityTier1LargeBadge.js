// Module ID: 6111
// Function ID: 50040
// Name: GameDiversityTier1LargeBadge
// Dependencies: [131072, 561250304, 1862270976, 20]
// Exports: GameDiversityTier1LargeBadge

// Module 6111 (GameDiversityTier1LargeBadge)
import AppStartPerformance from "AppStartPerformance";

const jsx = require(dependencyMap[0]).jsx;
const result = AppStartPerformance.fileFinishedImporting("design/components/mana-assets/native/generated/GameDiversityTier1LargeBadge.native.tsx");

export const GameDiversityTier1LargeBadge = function GameDiversityTier1LargeBadge(width) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 100;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 100;
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
