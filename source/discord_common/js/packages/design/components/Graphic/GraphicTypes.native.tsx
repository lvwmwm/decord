// Module ID: 4198
// Function ID: 4199
// Name: isImage
// Dependencies: [2]
// Exports: isImage, isRive

// Module 4198 (isImage)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("../discord_common/js/packages/design/components/Graphic/GraphicTypes.native.tsx");

export const isImage = function isImage(type) {
  return "image" === type.type;
};
export const isRive = function isRive(type) {
  return "rive" === type.type;
};
