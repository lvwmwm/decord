// Module ID: 6111
// Function ID: 50099
// Name: GameDiversityTier10SmallBadge
// Dependencies: [131072, 561250304, 3657433088, 19]
// Exports: GameDiversityTier10SmallBadge

// Module 6111 (GameDiversityTier10SmallBadge)
import _setPrototypeOf from "_setPrototypeOf";

const jsx = require(dependencyMap[0]).jsx;
const result = _setPrototypeOf.fileFinishedImporting("design/components/mana-assets/native/generated/GameDiversityTier10SmallBadge.native.tsx");

export const GameDiversityTier10SmallBadge = function GameDiversityTier10SmallBadge(width) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = width.width;
  ({ accessible, accessibilityLabel, resizeMode } = width);
  if (num === undefined) {
    num = 24;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 24;
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
