// Module ID: 9337
// Function ID: 72968
// Name: useExpressionPickerListWidth
// Dependencies: []
// Exports: default

// Module 9337 (useExpressionPickerListWidth)
const PADDING_HORIZONTAL = require(dependencyMap[0]).PADDING_HORIZONTAL;
const ACTION_SHEET_MAX_WIDTH = require(dependencyMap[1]).ACTION_SHEET_MAX_WIDTH;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/expression_picker/native/useExpressionPickerListWidth.native.tsx");

export default function useExpressionPickerListWidth(arg0) {
  const rect = importDefault(dependencyMap[3])();
  const diff = importDefault(dependencyMap[2])().width - rect.left - rect.right - 2 * PADDING_HORIZONTAL;
  let bound = diff;
  if (!arg0) {
    const _Math = Math;
    bound = Math.min(diff, ACTION_SHEET_MAX_WIDTH);
  }
  return bound;
};
