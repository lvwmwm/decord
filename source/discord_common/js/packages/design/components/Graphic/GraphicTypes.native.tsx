// Module ID: 4163
// Function ID: 4164
// Name: isImage
// Dependencies: [2]
// Exports: isImage, isRive

// Module 4163 (isImage)
const result = require("set").fileFinishedImporting("../discord_common/js/packages/design/components/Graphic/GraphicTypes.native.tsx");

export const isImage = function isImage(type) {
  return "image" === type.type;
};
export const isRive = function isRive(type) {
  return "rive" === type.type;
};
