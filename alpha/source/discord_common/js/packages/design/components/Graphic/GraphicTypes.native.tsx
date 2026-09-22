// Module ID: 4574
// Function ID: 4575
// Name: GraphicTypes
// Dependencies: [2]
// Exports: isImage, isRive

// Module 4574 (GraphicTypes)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Graphic/GraphicTypes.native.tsx");

export const isImage = function isImage(type) {
  return "image" === type.type;
};
export const isRive = function isRive(merged) {
  return "rive" === merged.type;
};
