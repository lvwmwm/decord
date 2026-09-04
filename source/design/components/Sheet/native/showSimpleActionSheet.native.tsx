// Module ID: 7136
// Function ID: 7137
// Name: showSimpleActionSheet
// Dependencies: [4448, 7137, 2008, 2]
// Exports: showSimpleActionSheet

// Module 7136 (showSimpleActionSheet)
import set from "set" /* 2 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4448 */;

const result = set.fileFinishedImporting("design/components/Sheet/native/showSimpleActionSheet.native.tsx");

export const showSimpleActionSheet = function showSimpleActionSheet(key) {
  key = key.key;
  const merged = Object.assign(key, Object.create(null));
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = {};
  const merged1 = Object.assign(merged);
  obj.hideActionSheet = function hideActionSheet() {
    closure_1_1(closure_1_2[0]).hideActionSheet(key);
  };
  obj.openLazy(key(2008)(7137, dependencyMap.paths), key, obj, key.stackingBehavior);
};
