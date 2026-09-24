// Module ID: 4608
// Function ID: 4609
// Name: GraphicTypes
// Dependencies: [2]
// Exports: isImage, isRive

// Module 4608 (GraphicTypes)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Graphic/GraphicTypes.native.tsx");

export const isImage = function isImage(type) {
  return "image" === type.type;
};
export const isRive = function isRive(cResult) {
  return "rive" === cResult.type;
};
