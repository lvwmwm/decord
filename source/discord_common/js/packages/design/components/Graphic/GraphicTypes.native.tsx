// Module ID: 3940
// Function ID: 32464
// Name: isImage
// Dependencies: [2]
// Exports: isImage, isRive

// Module 3940 (isImage)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Graphic/GraphicTypes.native.tsx");

export const isImage = function isImage(type) {
  return "image" === type.type;
};
export const isRive = function isRive(merged) {
  return "rive" === merged.type;
};
