// Module ID: 5174
// Function ID: 5175
// Name: GraphicTypes
// Dependencies: [2]
// Exports: isImage, isRive

// Module 5174 (GraphicTypes)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Graphic/GraphicTypes.native.tsx");

export function isImage(type) {
  return "image" === type.type;
}
export function isRive(cResult) {
  return "rive" === cResult.type;
}
