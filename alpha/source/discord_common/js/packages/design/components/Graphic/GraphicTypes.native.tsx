// Module ID: 4701
// Function ID: 4702
// Name: GraphicTypes
// Dependencies: [2]
// Exports: isImage, isRive

// Module 4701 (GraphicTypes)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Graphic/GraphicTypes.native.tsx");

export const isImage = function isImage(type) {
  return "image" === type.type;
};
export const isRive = function isRive(cResult) {
  return "rive" === cResult.type;
};
