// Module ID: 5123
// Function ID: 5124
// Name: GraphicTypes
// Dependencies: [2]
// Exports: isImage, isRive

// Module 5123 (GraphicTypes)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Graphic/GraphicTypes.native.tsx");

export const isImage = function isImage(type) {
  return "image" === type.type;
};
export const isRive = function isRive(cResult) {
  return "rive" === cResult.type;
};
