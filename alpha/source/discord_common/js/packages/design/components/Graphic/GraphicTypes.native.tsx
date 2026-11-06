// Module ID: 5331
// Function ID: 5332
// Name: GraphicTypes
// Dependencies: [2]
// Exports: isImage, isRive

// Module 5331 (GraphicTypes)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Graphic/GraphicTypes.native.tsx");

export function isImage(type) {
  return "image" === type.type;
}
export function isRive(merged) {
  return "rive" === merged.type;
}
