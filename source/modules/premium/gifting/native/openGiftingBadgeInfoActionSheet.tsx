// Module ID: 9671
// Function ID: 75309
// Name: openGiftingBadgeInfoActionSheet
// Dependencies: []
// Exports: default

// Module 9671 (openGiftingBadgeInfoActionSheet)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/premium/gifting/native/openGiftingBadgeInfoActionSheet.tsx");

export default function openGiftingBadgeInfoActionSheet() {
  importDefault(dependencyMap[0]).openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "GiftingBadgeInfoActionSheet");
};
