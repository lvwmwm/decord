// Module ID: 4986
// Function ID: 4987
// Name: GraphicTypes
// Dependencies: [2]
// Exports: isImage, isRive

// Module 4986 (GraphicTypes)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Graphic/GraphicTypes.native.tsx");

export function isImage(type) {
  return "image" === type.type;
}
export function isRive(merged) {
  return "rive" === merged.type;
}
