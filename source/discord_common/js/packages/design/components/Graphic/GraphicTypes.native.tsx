// Module ID: 3938
// Function ID: 32459
// Name: isImage
// Dependencies: []
// Exports: isImage, isRive

// Module 3938 (isImage)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("../discord_common/js/packages/design/components/Graphic/GraphicTypes.native.tsx");

export const isImage = function isImage(type) {
  return "image" === type.type;
};
export const isRive = function isRive(merged) {
  return "rive" === merged.type;
};
